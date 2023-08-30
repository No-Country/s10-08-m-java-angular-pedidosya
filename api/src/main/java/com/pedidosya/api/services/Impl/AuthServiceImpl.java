package com.pedidosya.api.services.Impl;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Request.UserDTO;
import com.pedidosya.api.dto.Response.JwtResponseDto;
import com.pedidosya.api.exception.PasswordIncorrectException;
import com.pedidosya.api.exception.UserNotExistException;
import com.pedidosya.api.models.User;
import com.pedidosya.api.repositories.IAuthUserRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IUserRepo;
import com.pedidosya.api.security.JwtAuthenticationProvider;
import com.pedidosya.api.services.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio encargado del logueo de un usuario
 */

@Service
@RequiredArgsConstructor
public class AuthServiceImpl extends CRUDImpl<User, Integer> implements IAuthService {

    private final IAuthUserRepo iAuthUserRepo;
    private final JwtAuthenticationProvider jwtAuthenticationProvider;
    private final PasswordEncoder passwordEncoder;

    private final IUserRepo repo;

    @Override
    protected IGenericRepo<User, Integer> getRepo() {
        return repo;
    }

    /**
     * Devuelve un dto con el jwt del usuario dadas unas credenciales
     *
     * @param authUserDto Credenciales de acceso
     * @return Dto con el jwt del usuario si las credenciales son validas
     */
    @Override
    public JwtResponseDto signIn(AuthUserDto authUserDto) {

        Optional<User> user = iAuthUserRepo.getUserByEmail(authUserDto.getEmail());

        if (user.isEmpty()){
            throw new UserNotExistException();
        }
        if (!passwordEncoder.matches(authUserDto.getPassword(), user.get().getPassword())){
            throw new PasswordIncorrectException();
        }

        return new JwtResponseDto(jwtAuthenticationProvider.createToken(user.get()));
    }

    /**
     * Cierra la sesión eliminando de la lista blanca el token ingresado
     *
     * @param token Token a eliminar
     * @return
     */
    @Override
    public JwtResponseDto signOut(String token) {
        String[] authElements = token.split(" ");
        return new JwtResponseDto(jwtAuthenticationProvider.deleteToken(authElements[1]));
    }


}
