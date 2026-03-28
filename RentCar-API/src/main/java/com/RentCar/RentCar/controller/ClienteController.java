package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.dto.dtoRequest.ActualizarClienteDtoRequest;
import com.RentCar.RentCar.dto.dtoRequest.CrearClienteDtoRequest;
import com.RentCar.RentCar.entity.ClienteEntity;
import com.RentCar.RentCar.services.ClienteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    // 🔹 LISTAR
    @GetMapping
    public ResponseEntity<List<ClienteEntity>> obtenerClientes(){
        return ResponseEntity.ok(clienteService.listarClientes());
    }

    // 🔹 ACTUALIZAR
    @PutMapping("/actualizar")
    public ResponseEntity<String> actualizarCliente(@RequestBody ActualizarClienteDtoRequest dto){
        clienteService.actualizarCliente(dto);
        return ResponseEntity.ok("Cliente actualizado correctamente");
    }

    // 🔹 ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCliente(@PathVariable Long id){
        clienteService.eliminarCliente(id);
        return ResponseEntity.ok("Cliente eliminado correctamente");
    }
}
