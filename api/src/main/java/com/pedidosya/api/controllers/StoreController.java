package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.*;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.services.Impl.AddressClientImpl;
import com.pedidosya.api.services.Impl.StoreImpl;
import com.pedidosya.api.utils.mappers.IAddressClientMapper;
import com.pedidosya.api.utils.mappers.IAddressMapper;
import com.pedidosya.api.utils.mappers.IStoreMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/stores")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class StoreController {

    private final StoreImpl storeImpl;
    private final IStoreMapper iStoreMapper;

    @Operation(summary="Lista la informacion de un resto pasado como parametro")
    @GetMapping("/{id}")
    public ResponseEntity<StoreDTO> findById(@PathVariable("id") Integer id){
        StoreDTO dto = convertToDto(storeImpl.readById(id));
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary="Listado de Restaurant por el Tipo de Restaurant pasado como parametro")
    @GetMapping("/type/{id}")
    public ResponseEntity<List<StoreDTO>> findByStoreTypeId(@PathVariable("id") Integer id){
        List<StoreDTO> list = storeImpl.findByStoreType(id).stream().map(this::convertToDto).toList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

  private StoreDTO convertToDto(Store store){return iStoreMapper.toStoreDto(store);}
    private Store converToEntity(StoreDTO storeDTO){return iStoreMapper.toStore(storeDTO);}

}
