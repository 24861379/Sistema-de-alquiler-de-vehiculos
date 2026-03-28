package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.dto.dtoRequest.ActualizarUsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoRequest.UsuarioDtoRequest;
import com.RentCar.RentCar.dto.dtoResponse.GetUsuariosDtoResponse;
import com.RentCar.RentCar.dto.dtoResponse.LoginDtoResponse;
import com.RentCar.RentCar.dto.dtoRequest.LoginDtoRequest;
import com.RentCar.RentCar.entity.UsuarioEntity;
import com.RentCar.RentCar.services.UsuarioService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping()
    public ResponseEntity<List<GetUsuariosDtoResponse>> getUsuarios(){
         List<GetUsuariosDtoResponse> usuarios = usuarioService.getUsuarios();
         return ResponseEntity.ok(usuarios);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{idusuario}")
    public ResponseEntity<String> actualizarUsuario(@PathVariable Long idusuario, @Valid @RequestBody ActualizarUsuarioDtoRequest request){
        String mensaje = usuarioService.actualizarUsuario(idusuario, request);
        return ResponseEntity.ok(mensaje);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{idusuario}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable Long idusuario){
        usuarioService.eliminarUsuario(idusuario);
        return ResponseEntity.ok("Se elimino el usuario correctamente");
    }
}
