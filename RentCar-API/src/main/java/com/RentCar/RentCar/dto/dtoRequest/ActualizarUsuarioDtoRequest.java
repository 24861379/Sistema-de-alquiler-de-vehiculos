package com.RentCar.RentCar.dto.dtoRequest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActualizarUsuarioDtoRequest {
    @NotNull
    private Long rolId;
}
