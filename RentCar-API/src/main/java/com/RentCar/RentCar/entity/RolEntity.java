package com.RentCar.RentCar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "rol")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RolEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_rol", nullable = false)
    private Long rolId;

    @Column(name = "nombre_rol", nullable = false, length = 60)
    private String nombreRol;

    @OneToMany(mappedBy = "rol")
    private List<UsuarioEntity> usuarios;
}
