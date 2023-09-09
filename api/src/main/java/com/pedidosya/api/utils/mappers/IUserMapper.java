package com.pedidosya.api.utils.mappers;

import com.pedidosya.api.dto.Request.ProvinceDTO;
import com.pedidosya.api.dto.Request.UserDTO;
import com.pedidosya.api.models.Province;
import com.pedidosya.api.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IUserMapper {
    UserDTO toUserDto(User user);
    User toUser(UserDTO userDTO);
}
