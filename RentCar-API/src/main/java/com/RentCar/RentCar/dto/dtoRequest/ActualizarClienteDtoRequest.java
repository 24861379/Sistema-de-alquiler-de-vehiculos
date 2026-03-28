package com.RentCar.RentCar.dto.dtoRequest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActualizarClienteDtoRequest {

    private Long id;
    private String nombreCliente;
    private String apellidoCliente;
    private String documento;
    private String email;
    private String telefono;
    private String direccion;
}