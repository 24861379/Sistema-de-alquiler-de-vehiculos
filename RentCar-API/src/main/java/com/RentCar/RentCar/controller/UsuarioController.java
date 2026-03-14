package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.dto.dtoRequest.UsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoResponse.LoginDtoResponse;
import com.RentCar.RentCar.dto.dtoRequest.LoginDtoRequest;
import com.RentCar.RentCar.entity.UsuarioEntity;
import com.RentCar.RentCar.services.UsuarioService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
@Tag(name = "Usuarios", description = "inicio de sesión y gestion de usuarios")
public class UsuarioController {
    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @PostMapping("/login")
    public LoginDtoResponse login(@RequestBody LoginDtoRequest request){
        return usuarioService.login(request.getEmail(), request.getPassword());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/registro")
    public ResponseEntity<String> registrarUsuario(@Valid @RequestBody UsuarioDtoRequest request){
        usuarioService.registrarUsuario(request);
        return ResponseEntity.ok("Usuario creado correctamente");
    }
}
