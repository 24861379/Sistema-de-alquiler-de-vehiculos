package com.RentCar.RentCar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
}
