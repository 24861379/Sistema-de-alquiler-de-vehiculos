package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.entity.AlquilerEntity;
import com.RentCar.RentCar.services.AlquilerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alquileres")
public class AlquilerController {

    @Autowired
    private AlquilerService alquilerService;

    @GetMapping
    public List<AlquilerEntity> listar() {
        return alquilerService.listar();
    }

    @GetMapping("/{id}")
    public AlquilerEntity obtener(@PathVariable Long id) {
        return alquilerService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public AlquilerEntity crear(@RequestBody AlquilerEntity alquiler) {
        return alquilerService.guardar(alquiler);
    }

    @PutMapping("/{id}")
    public AlquilerEntity actualizar(@PathVariable Long id, @RequestBody AlquilerEntity alquiler) {
        alquiler.setAlquilerId(id);
        return alquilerService.guardar(alquiler);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        alquilerService.eliminar(id);
    }
}