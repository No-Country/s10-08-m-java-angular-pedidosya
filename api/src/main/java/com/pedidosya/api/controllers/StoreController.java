package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.*;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.models.User;
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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import java.util.List;
import java.util.stream.Collectors;

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
        this.calculateRating(dto);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        this.isFavourite(dto, userId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @Operation(summary="Listado de Restaurant por el Tipo de Restaurant pasado como parametro")
    @GetMapping("/type/{id}")
    public ResponseEntity<List<StoreDTO>> findByStoreTypeId(@PathVariable("id") Integer id){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        //List<StoreDTO> list = storeImpl.findByStoreType(id).stream().map(this::convertToDto).toList();
        List<StoreDTO> list = storeImpl.findByStoreType(id).stream()
                .map(this::convertToDto)
                .map(m ->
                    this.isFavourite(m, userId))
                .map(this::calculateRating)
                .collect(Collectors.toList());

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private StoreDTO isFavourite(StoreDTO store, Integer userId){
        Boolean resp = storeImpl.findByFavourite(store.getIdStore(), userId );
        store.setIsFavourite(resp);
        return store;
    }

    private StoreDTO calculateRating(StoreDTO store){
        Float resp = storeImpl.calculateRating(store.getIdStore());
        store.setRating(resp);
        return store;
    }

    @Operation(summary="Lista los restaurants favoritos del usuario")
    @GetMapping("/favourites")
    public ResponseEntity<List<StoreDTO>> findFavourites(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        List<StoreDTO> list = storeImpl.findByStoreFavourite(userId).stream()
                .map(this::convertToDto)
                .peek(m -> m.setIsFavourite(true))
                .map(this::calculateRating)
                .collect(Collectors.toList());

        return new ResponseEntity<>(list, HttpStatus.OK);
    }
  private StoreDTO convertToDto(Store store){return iStoreMapper.toStoreDto(store);}
    private Store converToEntity(StoreDTO storeDTO){return iStoreMapper.toStore(storeDTO);}

}
