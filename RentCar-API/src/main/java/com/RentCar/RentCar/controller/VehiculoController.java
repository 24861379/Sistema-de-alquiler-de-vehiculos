package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.entity.VehiculoEntity;
import com.RentCar.RentCar.services.VehiculoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vehiculos")
public class VehiculoController {

    private final VehiculoService service;

    public VehiculoController(VehiculoService service) {
        this.service = service;
    }

    @GetMapping
    public List<VehiculoEntity> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehiculoEntity> getOne(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public VehiculoEntity create(@RequestBody VehiculoEntity vehiculo) {
        return service.save(vehiculo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VehiculoEntity> update(@PathVariable Long id, @RequestBody VehiculoEntity vehiculo) {
        return service.findById(id)
                .map(existing -> {
                    vehiculo.setId(existing.getId());
                    return ResponseEntity.ok(service.save(vehiculo));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
