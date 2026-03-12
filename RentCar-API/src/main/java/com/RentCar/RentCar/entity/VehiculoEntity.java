package com.RentCar.RentCar.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehiculo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class VehiculoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vehiculo")
    private Long id;

    // relación con tipo_vehiculo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_tipo_vehiculo", nullable = false)
    private TipoVehiculoEntity tipoVehiculo;

    @Column(name = "marca", nullable = false)
    private String marca;

    @Column(name = "ano", nullable = false)
    private Integer ano;

    @Column(name = "estado", nullable = false)
    private String estado;

    @Column(name = "placa", unique = true, nullable = false)
    private String placa;

    @Column(name = "modelo", nullable = false)
    private String modelo;

    @Column(name = "costo_dia", nullable = false)
    private Double costoDia;

    @Column(name = "cantidad_puestos", nullable = false)
    private Integer cantidadPuestos;
}

