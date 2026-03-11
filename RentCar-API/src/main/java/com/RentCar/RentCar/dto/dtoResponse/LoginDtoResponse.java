package com.RentCar.RentCar.dto.dtoResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginDtoResponse {
    private Long idUsuario;
    private String nombre;
    private String email;
    private String rol;
    private String token;
}
