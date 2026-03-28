package com.RentCar.RentCar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "alquiler")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlquilerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_alquiler", nullable = false)
    private Long alquilerId;

    @Column(name="fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name="fecha_fin")
    private LocalDate fechaFin;

    @Column(name = "estado_alquiler")
    private boolean estadoAlquiler;
}
