package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.entity.VehiculoEntity;
import com.RentCar.RentCar.services.VehiculoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vehiculos")
@Tag(name="vehiculos",description = "Obtener Vehiculos ;)")
public class VehiculoController {

    private final VehiculoService service;

    public VehiculoController(VehiculoService service) {
        this.service = service;
    }


    @PreAuthorize("hasAuthority('AGENTE')")
    @GetMapping
    public List<VehiculoEntity> getAll() {
        return service.findAll();
    }

    @PreAuthorize("hasAuthority('AGENTE')")
    @GetMapping("/{id}")
    public ResponseEntity<VehiculoEntity> getOne(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAuthority('AGENTE')")
    @PostMapping
    public VehiculoEntity create(@RequestBody VehiculoEntity vehiculo) {
        return service.save(vehiculo);
    }

    @PreAuthorize("hasAuthority('AGENTE')")
    @PutMapping("/{id}")
    public ResponseEntity<VehiculoEntity> update(@PathVariable Long id, @RequestBody VehiculoEntity vehiculo) {
        return service.findById(id)
                .map(existing -> {
                    vehiculo.setId(existing.getId());
                    return ResponseEntity.ok(service.save(vehiculo));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
