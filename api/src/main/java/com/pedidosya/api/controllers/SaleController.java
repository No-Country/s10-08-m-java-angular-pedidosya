package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.*;
import com.pedidosya.api.dto.Response.SaleResponseDTO;
import com.pedidosya.api.models.*;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.services.Impl.ProductImpl;
import com.pedidosya.api.services.Impl.SaleImpl;
import com.pedidosya.api.utils.mappers.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/sales")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class SaleController {
    private final SaleImpl saleImpl;
    private final ClientImpl userImpl;
    private final ISaleMapper saleMapper;
    private final ISaleDetailMapper saleDetailMapper;
    private final IProductMapper productMapper;
    private final ProductImpl productImpl;
    private final ISaleResponseMapper saleResponseMapper;
    @PostMapping(value="/save", headers = "Accept=application/json")
    public ResponseEntity<SaleResponseDTO> create(@Valid @RequestBody SaleDTO dto) throws Exception{
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        User userobj = userImpl.readByIdUser(userId).getUser();
        Sale saleobj = convertToEntity(dto);
        saleobj.setUser(userobj);
        Sale obj = saleImpl.save(saleobj);

        return new ResponseEntity<>(convertToSaleResponseDTO(obj), HttpStatus.CREATED);
    }

    @Operation(summary="Cambia el estado de un pedido.")
    @PostMapping(value="/status", headers = "Accept=application/json")
    public ResponseEntity<Void> adAddressClient(@RequestBody SaleStatusDTO saleStatus)
    {
        saleImpl.changeStatus(saleStatus.getIdSale(), saleStatus.getIdStatus());
        return  ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SaleResponseDTO> findById(@PathVariable("id") Integer id){
        SaleResponseDTO dto = this.convertToSaleResponseDTO(saleImpl.readById(id));
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/sales-user")
    public ResponseEntity<List<SaleResponseDTO>> findByIdUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        List<SaleResponseDTO> list = saleImpl.readByIdUser(userId).stream().map(this::convertToSaleResponseDTO).toList();
        return ResponseEntity.ok(list);
    }


    private SaleDTO convertToDto(Sale sale){
        return saleMapper.toSaleDto(sale);
    }
    private SaleResponseDTO convertToDtoResponse(Sale sale){
        return saleResponseMapper.toSaleDto(sale);
    }

   /* private Sale convertToEntity(SaleDTO saleDTO){
        return saleMapper.toSale(saleDTO);
    }*/

    private Sale convertToEntity(SaleDTO saleDTO){
        Sale sale = saleMapper.toSale(saleDTO);

        if (saleDTO.getDetails() != null) {
            List<SaleDetail> saleDetails = new ArrayList<>();
            for (SaleDetailDTO detailDTO : saleDTO.getDetails()) {
                SaleDetail saleDetail = saleDetailMapper.toSaleDetail(detailDTO);
                saleDetail.setSale(sale); // Asigna la venta al detalle
                saleDetails.add(saleDetail);
            }
            sale.setDetails(saleDetails);
        }

        return sale;
    }

    private SaleResponseDTO convertToSaleResponseDTO(Sale sale){
        SaleResponseDTO salemap = saleResponseMapper.toSaleDto(sale);
        //salemap.setDeliveryReview(sale.getStore().getImagePath());
salemap.setAddress(sale.getAddress());
salemap.setStore(sale.getStore());
        if (sale.getDetails() != null) {
            List<SaleDetailDTO> saleDetails = new ArrayList<>();
            for (SaleDetail detailDTO : sale.getDetails()) {
                SaleDetailDTO saleDetail = saleDetailMapper.toSaleDetailDto(detailDTO);
                //sale.setSale(sale); // Asigna la venta al detalle

               // SaleDetailDTO updatedDetailDTO = saleDetailMapper.toSaleDetailDto(saleDetail); // Mapea de nuevo para asegurarte de obtener el idProduct

                saleDetails.add(saleDetail);
            }
            salemap.setDetails(saleDetails);
        }
        return salemap;
    }

}
