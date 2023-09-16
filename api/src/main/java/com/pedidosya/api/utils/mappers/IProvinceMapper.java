package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ProvinceDTO;
import com.pedidosya.api.models.Province;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IProvinceMapper {

    ProvinceDTO toProvinceDto(Province province);
    Province toProvince(ProvinceDTO provinceDTO);

}
