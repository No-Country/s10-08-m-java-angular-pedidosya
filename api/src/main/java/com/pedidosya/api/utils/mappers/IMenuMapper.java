package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.MenuDTO;
import com.pedidosya.api.models.Menu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
@Mapper(componentModel = "spring", uses = { IStoreMapper.class })
public interface IMenuMapper {
@Mapping(source = "store.idStore", target = "idStore")
    MenuDTO toMenuDto(Menu menu);
@Mapping(source = "idStore", target = "store.idStore")
    Menu toMenu(MenuDTO menuDTO);
}
