package com.RentCar.RentCar.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.AnyDiscriminatorImplicitValues;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.time.LocalDate;

@Entity
@Table(name = "pago")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PagoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pago", nullable = false)
    private Long pagoId;

    @ManyToOne
    @JoinColumn(name = "id_alquiler")
    @JsonIgnore
    private AlquilerEntity alquiler;
    @Column
    private String numero_factura;

    @Column
    private String metodo_pago;

    @Column
    private boolean estado;

    @Column
    private LocalDate fecha_pago;

    @Column
    private double subtotal;

    @Column
    private double total;


}
