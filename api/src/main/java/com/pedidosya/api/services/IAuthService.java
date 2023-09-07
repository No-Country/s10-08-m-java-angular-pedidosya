package com.pedidosya.api.services;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Response.JwtResponseDto;
import com.pedidosya.api.models.User;

public interface IAuthService extends ICRUD<User, Integer>{

    JwtResponseDto signIn(AuthUserDto authUserDto);

    JwtResponseDto signOut(String jwt);

}
