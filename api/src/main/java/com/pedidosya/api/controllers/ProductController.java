package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.ProductDTO;
import com.pedidosya.api.models.Product;
import com.pedidosya.api.services.Impl.ProductImpl;
import com.pedidosya.api.utils.mappers.IProductMapper;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/products")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class ProductController {

    private final ProductImpl productImpl;
    private final IProductMapper iProductMapper;

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<ProductDTO>>getAll(){
        return ResponseEntity.ok(convertToListDto(productImpl.readAll()));
    }

    @GetMapping(path = "/top/{idStore}")
    public ResponseEntity<List<ProductDTO>>getTopProductsByRestaurant(@RequestParam("idStore") Integer idStore){
        return ResponseEntity.ok(convertToListDto(productImpl.getTopProduct(idStore)));
    }
/*
    @PostMapping(value = "/register", headers = "Accept=application/json")
    public ResponseEntity<ProductDTO> registerProduct(@RequestBody ProductDTO newProduct){
        return ResponseEntity.ok(
                convertToDto(productImpl.save(converToEntity(newProduct))));
    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<ProductDTO>updateProduct(@RequestBody ProductDTO newProduct){
        try {
            Product product = converToEntity(newProduct);
            Product existingProduct = productImpl.readById(newProduct.getIdProduct());

            if (existingProduct == null){
                return ResponseEntity.notFound().build();
            }

            if (!existingProduct.isActive()){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
            }

            if (productImpl.readById(product.getIdProduct()) != null){
                return ResponseEntity.ok(convertToDto(productImpl.update(product)));
            }
            return ResponseEntity.ok(newProduct);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping(value = "/delete/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        try {
            Product existingProduct = productImpl.readById(id);

            if (existingProduct==null){
                return ResponseEntity.notFound().build();
            }
            if (!existingProduct.isActive()){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
            }
            Product product = productImpl.readById(id);
            product.setActive(false);
            productImpl.save(product);
            return ResponseEntity.noContent().build();
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

*/

    private ProductDTO convertToDto(Product product){return iProductMapper.toProductDto(product);}
    private Product converToEntity(ProductDTO productDTO){return iProductMapper.toProduct(productDTO);}

    private List<ProductDTO> convertToListDto(List<Product> products){

        if ( products == null ) {
            return null;
        }

        List<ProductDTO> list = new ArrayList<>();
        for ( Product p : products ) {
            list.add(convertToDto( p ));
        }

        return list;
    }

}
