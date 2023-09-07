package com.pedidosya.api.exception;

public class EmailValidationException extends RuntimeException {

    public EmailValidationException(){
        super("El email no tiene el formato requerido.");
    }
}
