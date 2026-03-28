package com.RentCar.RentCar.services;

import com.RentCar.RentCar.entity.AlquilerEntity;
import com.RentCar.RentCar.repository.AlquilerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlquilerService {

    @Autowired
    private AlquilerRepository alquilerRepository;

    public List<AlquilerEntity> listar() {
        return alquilerRepository.findAll();
    }

    public Optional<AlquilerEntity> buscarPorId(Long id) {
        return alquilerRepository.findById(id);
    }

    public AlquilerEntity guardar(AlquilerEntity alquiler) {
        return alquilerRepository.save(alquiler);
    }

    public void eliminar(Long id) {
        alquilerRepository.deleteById(id);
    }
}