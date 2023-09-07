package com.pedidosya.api.exception;

public class UserNotExistException extends RuntimeException{

    public UserNotExistException() {
        super("El usuario ingresado no existe.");
    }

}
