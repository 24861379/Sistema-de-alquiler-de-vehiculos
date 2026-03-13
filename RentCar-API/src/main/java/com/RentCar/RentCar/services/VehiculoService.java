package com.RentCar.RentCar.services;

import com.RentCar.RentCar.entity.VehiculoEntity;
import com.RentCar.RentCar.repository.VehiculoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculoService {

    private final VehiculoRepository repository;

    public VehiculoService(VehiculoRepository repository) {
        this.repository = repository;
    }

    public List<VehiculoEntity> findAll() {
        return repository.findAll();
    }

    public Optional<VehiculoEntity> findById(Long id) {
        return repository.findById(id);
    }

    public VehiculoEntity save(VehiculoEntity vehiculo) {
        return repository.save(vehiculo);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
