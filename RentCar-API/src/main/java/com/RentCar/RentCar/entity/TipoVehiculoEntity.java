package com.RentCar.RentCar.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "tipo_vehiculo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TipoVehiculoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo_vehiculo")
    private Long id;

    @Column(name = "tipo_vehiculo", nullable = false)
    private String tipo;

    // relación inversa con vehiculo
    @OneToMany(mappedBy = "tipoVehiculo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<VehiculoEntity> vehiculos;
}
