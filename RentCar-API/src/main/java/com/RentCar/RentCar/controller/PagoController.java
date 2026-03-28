package com.RentCar.RentCar.controller;

import com.RentCar.RentCar.entity.PagoEntity;
import com.RentCar.RentCar.services.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pagos")
public class PagoController {

    @Autowired
    private PagoService pagoService;

    @GetMapping
    public List<PagoEntity> listar() {
        return pagoService.listar();
    }

    @GetMapping("/{id}")
    public PagoEntity obtener(@PathVariable Long id) {
        return pagoService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public PagoEntity crear(@RequestBody PagoEntity pago) {
        return pagoService.guardar(pago);
    }

    @PutMapping("/{id}")
    public PagoEntity actualizar(@PathVariable Long id, @RequestBody PagoEntity pago) {
        pago.setPagoId(id);
        return pagoService.guardar(pago);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        pagoService.eliminar(id);
    }
}