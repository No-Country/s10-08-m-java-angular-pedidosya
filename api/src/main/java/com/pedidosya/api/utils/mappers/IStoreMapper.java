package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ProductDTO;
import com.pedidosya.api.dto.Request.StoreDTO;
import com.pedidosya.api.models.Product;
import com.pedidosya.api.models.Store;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = { IUserMapper.class })
public interface IStoreMapper {
    @Mapping(source = "user.idUser", target = "idUser")
    StoreDTO toStoreDto(Store store);
    @Mapping(source = "idUser", target = "user.idUser")
    Store toStore(StoreDTO storeDTO);
}
