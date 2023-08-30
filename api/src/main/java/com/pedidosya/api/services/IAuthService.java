package com.pedidosya.api.services;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Response.JwtResponseDto;

public interface IAuthService{

    JwtResponseDto signIn(AuthUserDto authUserDto);

    JwtResponseDto signOut(String jwt);

}
