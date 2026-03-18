package com.RentCar.RentCar.dto.dtoRequest;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioDtoRequest {
    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;
    @Email(message = "Correo no válido")
    private String email;
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    private String password;
    @NotNull
    private Long idRol;
}
