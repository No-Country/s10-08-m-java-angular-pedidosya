package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.models.User;
import com.pedidosya.api.services.Impl.FavouriteStoreImpl;
import com.pedidosya.api.services.Impl.StoreTypeImpl;
import com.pedidosya.api.utils.mappers.IFavouriteStoreMapper;
import com.pedidosya.api.utils.mappers.IStoreTypeMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/favourites-stores")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class FavouriteStoreController {
    private final FavouriteStoreImpl favouriteStoreTypeImpl;
    private final IFavouriteStoreMapper iFavouriteStoreMapper;

    @Operation(summary="Setea un restaurant como favorito.")
    @PostMapping(value="/add/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> addFavourite(@PathVariable("id") Integer idStore)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        favouriteStoreTypeImpl.save(userId, idStore);
        return  ResponseEntity.noContent().build();
    }

    @Operation(summary="Desetea un restaurant como favorito.")
    @PostMapping(value="/remove/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> removeFavourite(@PathVariable("id") Integer idStore)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        favouriteStoreTypeImpl.remove(userId, idStore);
        return  ResponseEntity.noContent().build();
    }
}
