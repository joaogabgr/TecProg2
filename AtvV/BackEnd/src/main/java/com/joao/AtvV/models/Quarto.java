package com.joao.AtvV.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Quarto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonProperty("NomeQuarto")
    private String NomeQuarto;
    @JsonProperty("NumeroQuarto")
    @Column(unique = true)
    private Integer NumeroQuarto;

    private Integer quantidadeCamaSolteiro;
    private Integer quantidadeCamaCasal;
    private Boolean disponivel;
    private Double valorDiaria;
}
