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

    @Column(name="numero_factura")
    private String numero_factura;

    @Column(name="metodo_pago")
    private String metodo_pago;

    @Column(name="estado")
    private boolean estado;

    @Column(name="fecha_pago")
    private LocalDate fecha_pago;

    @Column(name="subtotal")
    private double subtotal;

    @Column(name="total")
    private double total;


}
