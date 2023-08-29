package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ProductDTO;
import com.pedidosya.api.models.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IProductMapper {

    ProductDTO toProductDto(Product product);

    Product toProduct(ProductDTO productDTO);

}
