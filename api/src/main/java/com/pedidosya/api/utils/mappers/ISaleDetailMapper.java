package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.SaleDTO;
import com.pedidosya.api.dto.Request.SaleDetailDTO;
import com.pedidosya.api.models.Sale;
import com.pedidosya.api.models.SaleDetail;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { IProductMapper.class })
public interface ISaleDetailMapper {
    // @Mapping(source = "user.idUser", target = "idUser")
    @Mapping(source = "product.idProduct", target = "idProduct")
    SaleDetailDTO toSaleDetailDto(SaleDetail saleDetail);
    // @Mapping(source = "idUser", target = "user.idUser")
    @Mapping(source = "idProduct", target = "product.idProduct")
    SaleDetail toSaleDetail(SaleDetailDTO saleDetailDTO);
}