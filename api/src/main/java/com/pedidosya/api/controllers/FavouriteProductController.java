package com.pedidosya.api.controllers;

import com.pedidosya.api.models.User;
import com.pedidosya.api.services.Impl.FavouriteProductImpl;
import com.pedidosya.api.services.Impl.FavouriteStoreImpl;
import com.pedidosya.api.utils.mappers.IFavouriteStoreMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/favourites-products")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class FavouriteProductController {
    private final FavouriteProductImpl favouriteProductImpl;
    //private final IFavouriteProductMapper iFavouriteProductMapper;
    @Operation(summary="Setea un producto como favorito.")
    @PostMapping(value="/add/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> addFavourite(@PathVariable("id") Integer idStore)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        favouriteProductImpl.save(userId, idStore);
        return  ResponseEntity.noContent().build();
    }

    @Operation(summary="Desetea un producto como favorito.")
    @PostMapping(value="/remove/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> removeFavourite(@PathVariable("id") Integer idStore)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        favouriteProductImpl.remove(userId, idStore);
        return  ResponseEntity.noContent().build();
    }
}
