package com.RentCar.RentCar.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.util.List;

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
    @ManyToOne(fetch = FetchType.EAGER)
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

    //BigDecimal para mayor precisión
    @Column(name = "costo_dia", nullable = false)
    private BigDecimal costoDia;

    @Column(name = "cantidad_puestos", nullable = false)
    private Integer cantidadPuestos;
}

