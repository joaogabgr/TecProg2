package com.joao.AtvV.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.joao.AtvV.enums.TiposDocumentos;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Documentos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TiposDocumentos tipoDocumento;

    @Column(nullable = false, length = 14, unique = true)
    private String numero;

    private LocalDate dataEmissao;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
