package com.RentCar.RentCar.dto.dtoRequest;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CrearClienteDtoRequest {

    @NotBlank(message = "Nombre obligatorio")
    private String nombreCliente;

    @NotBlank(message = "Apellido obligatorio")
    private String apellidoCliente;

    @Email(message = "Correo no válido")
    private String email;

    @NotBlank(message = "Telefono obligatorio")
    private String telefono;

    @NotBlank(message = "Dirección obligatoria")
    private String direccion;

}
