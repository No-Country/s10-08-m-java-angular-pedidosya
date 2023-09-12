package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.dto.Request.StoreDTO;
import com.pedidosya.api.dto.Request.StoreTypeDTO;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.models.StoreType;
import com.pedidosya.api.services.Impl.StoreTypeImpl;
import com.pedidosya.api.utils.mappers.IStoreMapper;
import com.pedidosya.api.utils.mappers.IStoreTypeMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/store-types")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class StoreTypeController {

    private final StoreTypeImpl storeTypeImpl;
    private final IStoreTypeMapper iStoreMapper;

    @Operation(summary="Lista los tipos de restaurantes.")
    @GetMapping(value="/list", headers = "Accept=application/json")
    public ResponseEntity<List<StoreTypeDTO>> listStoreTypes()
    {
        List<StoreTypeDTO> list = storeTypeImpl.readAll().stream().map(this::convertToDto).toList();
        return ResponseEntity.ok(list);
    }

    private StoreTypeDTO convertToDto(StoreType storeType){return iStoreMapper.toStoreTypeDto(storeType);}
    private StoreType converToEntity(StoreTypeDTO storeTypeDTO){return iStoreMapper.toStoreType(storeTypeDTO);}

}
