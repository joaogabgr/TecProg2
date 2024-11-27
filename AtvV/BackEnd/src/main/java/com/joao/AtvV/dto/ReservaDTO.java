package com.joao.AtvV.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservaDTO {
    private Long id;
    private Long idCliente;
    private Long idQuarto;
    private LocalDate dataEntrada;
    private LocalDate dataSaida;
}
