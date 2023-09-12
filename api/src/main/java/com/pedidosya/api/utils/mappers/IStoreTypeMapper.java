package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ProvinceDTO;
import com.pedidosya.api.dto.Request.StoreTypeDTO;
import com.pedidosya.api.models.Province;
import com.pedidosya.api.models.StoreType;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IStoreTypeMapper {
    StoreTypeDTO toStoreTypeDto(StoreType storeType);
    StoreType toStoreType(StoreTypeDTO storeTypeDTO);
}
