package com.pedidosya.api.dto.Request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthUserDto {

    private String email;
    private String password;
}
