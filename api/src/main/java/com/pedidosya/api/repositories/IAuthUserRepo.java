package com.pedidosya.api.repositories;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Request.UserDTO;
import com.pedidosya.api.dto.Response.JwtResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
public interface IAuthUserRepo {

    Optional<UserDTO> getUserByEmail(String email);
}
