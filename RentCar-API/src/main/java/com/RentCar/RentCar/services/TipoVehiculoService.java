package com.RentCar.RentCar.services;

import com.RentCar.RentCar.entity.TipoVehiculoEntity;
import com.RentCar.RentCar.repository.TipoVehiculoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoVehiculoService {

    private final TipoVehiculoRepository repository;

    public TipoVehiculoService(TipoVehiculoRepository repository) {
        this.repository = repository;
    }

    public List<TipoVehiculoEntity> findAll() {
        return repository.findAll();
    }

    public Optional<TipoVehiculoEntity> findById(Long id) {
        return repository.findById(id);
    }

    public TipoVehiculoEntity save(TipoVehiculoEntity tipo) {
        return repository.save(tipo);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
