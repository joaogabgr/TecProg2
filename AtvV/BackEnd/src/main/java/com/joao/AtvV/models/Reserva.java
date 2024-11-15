package com.joao.AtvV.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "quarto_id", referencedColumnName = "id")
    private Quarto quarto;

    @ManyToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id")
    private Cliente hospede;

    private LocalDate dataEntrada;
    private LocalDate dataSaida;
    private Double valorTotal;
    private Boolean status;
}
