package com.RentCar.RentCar.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name ="cliente")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClienteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente", nullable = false)
    private Long clienteId;

    @Column(name = "nombre_cliente", nullable = false)
    private String nombreCliente;

    @Column(name = "apellido_cliente", nullable = false)
    private String apellidoCliente;

    @Column(name = "documento", nullable = false, unique = true)
    private String documento;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String telefono;

    @Column(nullable = false)
    private String direccion;
}
