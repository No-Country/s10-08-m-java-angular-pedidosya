package com.pedidosya.api.exception;

public class UserExistsException extends RuntimeException {

    public UserExistsException() {
        super("El usuario ingresado ya se encuentra registrado.");
    }
}
