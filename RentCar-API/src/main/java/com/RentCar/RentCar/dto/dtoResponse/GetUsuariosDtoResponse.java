package com.RentCar.RentCar.dto.dtoResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class GetUsuariosDtoResponse {
    private Long idUsuario;
    private String nombre;
    private String email;
    private String rol;
}
