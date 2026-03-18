package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity,Long> {
    @Procedure("sp_clientes")
    void CrearCliente(
            @Param("nombreCliente") String nombreCliente,
            @Param("apellidoCliente") String apellidoCliente,
            @Param("correo") String correo,
            @Param("telefono") String telefono,
            @Param("direccion") String direccion);
}
