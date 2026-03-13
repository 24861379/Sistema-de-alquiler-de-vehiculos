package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.entity.TipoVehiculoEntity;
import com.RentCar.RentCar.services.TipoVehiculoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/tipos-vehiculo")
public class TipoVehiculoController {

    private final TipoVehiculoService service;

    public TipoVehiculoController(TipoVehiculoService service) {
        this.service = service;
    }

    @GetMapping
    public List<TipoVehiculoEntity> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoVehiculoEntity> getOne(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public TipoVehiculoEntity create(@RequestBody TipoVehiculoEntity tipo) {
        return service.save(tipo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoVehiculoEntity> update(@PathVariable Long id, @RequestBody TipoVehiculoEntity tipo) {
        return service.findById(id)
                .map(existing -> {
                    tipo.setId(existing.getId());
                    return ResponseEntity.ok(service.save(tipo));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
