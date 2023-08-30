package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.AddressClient;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.services.Impl.AddressClientImpl;
import com.pedidosya.api.utils.mappers.IAddressClientMapper;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/addresses-client")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class AddressClientController {

    private final AddressClientImpl addressClientImpl;
    private final IAddressClientMapper iAddressClientMapper;
    @PostMapping(value="/save", headers = "Accept=application/json")
    public ResponseEntity<Void> addAddressClient(@RequestBody AddressClientDTO addressClient)
    {
        addressClientImpl.saveAddress(convertToEntity(addressClient));
        return  ResponseEntity.noContent().build();
    }

    @PostMapping(value="/set", headers = "Accept=application/json")
    public ResponseEntity<Void> setDefault(@RequestBody AddressClientDTO addressClient)
    {
        addressClientImpl.setDefault(convertToEntity(addressClient));
        return  ResponseEntity.noContent().build();
    }

    private AddressClientDTO convertToDto(AddressClient addressClient){
        return iAddressClientMapper.toAddressClientDto(addressClient);
    }

    private AddressClient convertToEntity(AddressClientDTO addressClientDTO){
        return iAddressClientMapper.toAddressClient(addressClientDTO);
    }


}
