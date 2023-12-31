package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.SaleDTO;
import com.pedidosya.api.dto.Request.StoreDTO;
import com.pedidosya.api.models.Sale;
import com.pedidosya.api.models.Store;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { IUserMapper.class, IStoreMapper.class, IDeliveryMapper.class, IAddressMapper.class })
public interface ISaleMapper {
   // @Mapping(source = "user.idUser", target = "idUser")
    @Mapping(source = "store.idStore", target = "idStore")
    @Mapping(source = "delivery.idDelivery", target = "idDelivery")
    @Mapping(source = "address.idAddress", target = "idAddress")
    SaleDTO toSaleDto(Sale sale);
   // @Mapping(source = "idUser", target = "user.idUser")
    @Mapping(source = "idStore", target = "store.idStore")
    @Mapping(source = "idDelivery", target = "delivery.idDelivery")
    @Mapping(source = "idAddress", target = "address.idAddress")
    Sale toSale(SaleDTO saleDTO);
}