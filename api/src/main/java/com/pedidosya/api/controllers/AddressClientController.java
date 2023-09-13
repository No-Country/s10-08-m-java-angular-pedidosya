package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.User;
import com.pedidosya.api.services.Impl.AddressClientImpl;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IAddressClientMapper;

import com.pedidosya.api.utils.mappers.IAddressMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/addresses-client")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class AddressClientController {

    private final AddressClientImpl addressClientImpl;
    private final IAddressClientMapper iAddressClientMapper;
    private final IAddressMapper iAddressMapper;

    private final ClientImpl clientImpl;

    @Operation(summary="Registra una nueva direccion para un cliente.")
    @PostMapping(value="/save", headers = "Accept=application/json")
    public ResponseEntity<Void> adAddressClient(@RequestBody AddressClientDTO addressClient)
    {
       // System.out.println(convertToEntity(addressClient).getAddress().getCity().getIdCity());
        addressClientImpl.saveAddress(convertToEntity(addressClient));
        return  ResponseEntity.noContent().build();
    }
    @Operation(summary="Setea/desetea como default esa dirección")
    @PutMapping(value="/set", headers = "Accept=application/json")
    public ResponseEntity<Void> setDefault(@RequestBody AddressClientDTO addressClient)
    {
        addressClientImpl.setDefault(convertToEntity(addressClient));
        return  ResponseEntity.noContent().build();
    }
    @Operation(summary="Actualiza la dirección del cliente.")
    @PutMapping(value="/update", headers = "Accept=application/json")
    public ResponseEntity<AddressClientDTO> updateAddressClient(@RequestBody AddressClientDTO addressClient)
    {
        addressClientImpl.updateAddress(convertToEntity(addressClient));
        return  ResponseEntity.ok(convertToDto( addressClientImpl.updateAddress(convertToEntity(addressClient))));
    }

    @Operation(summary="Lista las direcciones del cliente.")
    @GetMapping(value="/list", headers = "Accept=application/json")
    public ResponseEntity<List<AddressClientDTO>> listAddressClient()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        Client client = clientImpl.readByIdUser(userId);
        List<AddressClientDTO> list = addressClientImpl.listAddressClient(client.getIdClient()).stream().map(this::convertToDto).toList();
        return ResponseEntity.ok(list);
    }
    private AddressClientDTO convertToDto(AddressClient addressClient){
        return iAddressClientMapper.toAddressClientDto(addressClient);
    }

    private AddressClient convertToEntity(AddressClientDTO addressClientDTO){
        return iAddressClientMapper.toAddressClient(addressClientDTO);
    }


}
