package com.RentCar.RentCar.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.security.authentication.BadCredentialsException;
import java.util.HashMap;
import java.util.Map;


@RestControllerAdvice
public class ExceptionHandler {
    //para credenciales incorrectas
    @org.springframework.web.bind.annotation.ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Map<String, String>> handlerRuntimeException(BadCredentialsException ex){
//        Map<String, String> error = new HashMap<>();
//        error.put("error", ex.getMessage());

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", ex.getMessage()));
    }

    // errores de validación o negocio
    @org.springframework.web.bind.annotation.ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleBadRequest(
            IllegalArgumentException ex) {

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(Map.of("message", ex.getMessage()));
    }

    // para errores no controlados
    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneral(
            Exception ex) {

        // Log interno (no al cliente)
        ex.printStackTrace();

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Error interno del servidor"));
    }
}
