package com.RentCar.RentCar.services;

import com.RentCar.RentCar.dto.dtoRequest.CrearClienteDtoRequest;
import com.RentCar.RentCar.repository.ClienteRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    private ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Transactional
    public void RegistrarCliente(CrearClienteDtoRequest request){
        clienteRepository.CrearCliente(
                request.getNombreCliente(),
                request.getApellidoCliente(),
                request.getEmail(),
                request.getTelefono(),
                request.getDireccion());
    }
}
