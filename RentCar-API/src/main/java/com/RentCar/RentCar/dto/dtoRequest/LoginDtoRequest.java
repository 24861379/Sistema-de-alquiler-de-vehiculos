package com.RentCar.RentCar.dto.dtoRequest;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDtoRequest {
    private String email;
    private String password;
}
