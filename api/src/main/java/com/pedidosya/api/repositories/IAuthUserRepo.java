package com.pedidosya.api.repositories;

import com.pedidosya.api.dto.Request.UserDTO;
import com.pedidosya.api.models.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface IAuthUserRepo extends IGenericRepo<User, Integer>{

    Optional<User> getUserByEmail(String email);
}
