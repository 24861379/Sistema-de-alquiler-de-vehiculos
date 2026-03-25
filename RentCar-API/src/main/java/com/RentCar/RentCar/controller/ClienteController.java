package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.dto.dtoRequest.CrearClienteDtoRequest;
import com.RentCar.RentCar.entity.ClienteEntity;
import com.RentCar.RentCar.services.ClienteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
@Tag(name ="clientes", description = "Crud clientes")
public class ClienteController {

    private ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }
    @PostMapping("/crearCliente")
    public ResponseEntity<String> RegistrarClientes(@Valid @RequestBody CrearClienteDtoRequest request){
        clienteService.RegistrarCliente(request);
        return ResponseEntity.ok("Registro exitoso");
    }
}
