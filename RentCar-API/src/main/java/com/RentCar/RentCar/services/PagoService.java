package com.RentCar.RentCar.services;

import com.RentCar.RentCar.entity.PagoEntity;
import com.RentCar.RentCar.repository.PagoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PagoService {

    @Autowired
    private PagoRepositorio pagoRepositorio;

    public List<PagoEntity> listar() {
        return pagoRepositorio.findAll();
    }

    public Optional<PagoEntity> buscarPorId(Long id) {
        return pagoRepositorio.findById(id);
    }

    public PagoEntity guardar(PagoEntity pago) {
        return pagoRepositorio.save(pago);
    }

    public void eliminar(Long id) {
        pagoRepositorio.deleteById(id);
    }
}