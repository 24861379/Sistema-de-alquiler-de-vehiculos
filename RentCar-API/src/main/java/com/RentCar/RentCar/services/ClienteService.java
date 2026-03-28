package com.RentCar.RentCar.services;

import com.RentCar.RentCar.dto.dtoRequest.ActualizarClienteDtoRequest;
import com.RentCar.RentCar.dto.dtoRequest.CrearClienteDtoRequest;
import com.RentCar.RentCar.entity.ClienteEntity;
import com.RentCar.RentCar.repository.ClienteRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

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
                request.getDireccion()
        );
    }

    // 🔹 LISTAR
    public List<ClienteEntity> listarClientes() {
        return clienteRepository.findAll();
    }

    // 🔹 ACTUALIZAR
    public void actualizarCliente(ActualizarClienteDtoRequest dto){
        ClienteEntity cliente = clienteRepository.findById(dto.getId())
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        cliente.setNombreCliente(dto.getNombreCliente());
        cliente.setApellidoCliente(dto.getApellidoCliente());
        cliente.setDocumento(dto.getDocumento());
        cliente.setEmail(dto.getEmail());
        cliente.setTelefono(dto.getTelefono());
        cliente.setDireccion(dto.getDireccion());

        clienteRepository.save(cliente);
    }

    // 🔹 ELIMINAR
    public void eliminarCliente(Long id){
        clienteRepository.deleteById(id);
    }
}