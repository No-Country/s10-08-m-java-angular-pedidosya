package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.MenuDTO;
import com.pedidosya.api.dto.Request.ProductDTO;
import com.pedidosya.api.dto.Request.StoreDTO;
import com.pedidosya.api.models.Menu;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.models.User;
import com.pedidosya.api.services.Impl.MenuImpl;
import com.pedidosya.api.services.Impl.StoreImpl;
import com.pedidosya.api.utils.mappers.IMenuMapper;
import com.pedidosya.api.utils.mappers.IStoreMapper;
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
@RequestMapping(path = "/menus")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class MenuController {

    private final MenuImpl menuImpl;
    private final IMenuMapper iMenuMapper;

    @Operation(summary="lista todos los menus (con productos )de un restaurant pasado como parametro")
    @GetMapping(value="/store-list/{id}", headers = "Accept=application/json")
    public ResponseEntity<List<MenuDTO>> listMenuByStore(@PathVariable("id") Integer idStore)
    {
        List<MenuDTO> list = menuImpl.listMenuByStore(idStore).stream().map(this::convertToDto).toList();
        return ResponseEntity.ok(list);
    }

    private MenuDTO convertToDto(Menu menu) {
        MenuDTO menuDTO = new MenuDTO();
        menuDTO.setIdMenu(menu.getIdMenu());
        menuDTO.setTitle(menu.getTitle());
        menuDTO.setIdStore(menu.getStore().getIdStore());

        List<ProductDTO> productDTOList = menu.getProducts().stream()
                .map(product -> {
                    ProductDTO productDTO = new ProductDTO();
                    productDTO.setIdProduct(product.getIdProduct());
                    productDTO.setTitle(product.getTitle());
                    productDTO.setDescription(product.getDescription());
                    productDTO.setPrice(product.getPrice());
                    productDTO.setImagePath(product.getImagePath());
                    productDTO.setProductType(product.getProductType());
                    productDTO.setActive(product.isActive());
                    return productDTO;
                })
                .collect(Collectors.toList());

        menuDTO.setProducts(productDTOList);

        return menuDTO;
    }

    private MenuDTO convertToDtoUser(Menu menu, Integer idUSer) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();

        MenuDTO menuDTO = new MenuDTO();
        menuDTO.setIdMenu(menu.getIdMenu());
        menuDTO.setTitle(menu.getTitle());
        menuDTO.setIdStore(menu.getStore().getIdStore());

        List<ProductDTO> productDTOList = menu.getProducts().stream()
                .map(product -> {
                    ProductDTO productDTO = new ProductDTO();
                    productDTO.setIdProduct(product.getIdProduct());
                    productDTO.setTitle(product.getTitle());
                    productDTO.setDescription(product.getDescription());
                    productDTO.setPrice(product.getPrice());
                    productDTO.setImagePath(product.getImagePath());
                    productDTO.setProductType(product.getProductType());
                    productDTO.setActive(product.isActive());
                    productDTO.setIsFavourite(this.isFavourite(product.getIdProduct(), userId));
                    return productDTO;
                })
                .collect(Collectors.toList());

        menuDTO.setProducts(productDTOList);

        return menuDTO;
    }

    private Boolean isFavourite(Integer idProduct, Integer userId){
        return menuImpl.findByFavourite(idProduct, userId );
    }
       // return iMenuMapper.toMenuDto(menu);}
   // private Menu converToEntity(MenuDTO menuDTO){return iMenuMapper.toMenu(menuDTO);}

}
