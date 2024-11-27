package com.joao.AtvV.servicos;

import com.joao.AtvV.dto.ReservaDTO;
import com.joao.AtvV.models.Cliente;
import com.joao.AtvV.models.Quarto;
import com.joao.AtvV.models.Reserva;
import com.joao.AtvV.repositorios.RepositorioCliente;
import com.joao.AtvV.repositorios.RepositorioQuarto;
import com.joao.AtvV.repositorios.RepositorioReserva;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Objects;

@Service
public class ReservaService {
    @Autowired
    private RepositorioReserva repositorioReserva;

    @Autowired
    private RepositorioCliente repositorioCliente;

    @Autowired
    private QuartoService quartoService;

    @Autowired
    private RepositorioQuarto repositorioQuarto;

    public Reserva criarReserva(ReservaDTO reservaDTO) {
        try {
            Cliente cliente = repositorioCliente.findById(reservaDTO.getIdCliente()).orElseThrow(
                () -> new RuntimeException("Cliente não encontrado")
            );

            Quarto quarto = repositorioQuarto.findById(reservaDTO.getIdQuarto()).orElseThrow(
                () -> new RuntimeException("Quarto não encontrado")
            );

            if (!quarto.getDisponivel()) {
                throw new RuntimeException("Quarto não disponível");
            } else {
                quarto.setDisponivel(false);
            }

            Reserva reserva = new Reserva();
            reserva.setHospede(cliente);
            reserva.setQuarto(quarto);
            reserva.setDataEntrada(reservaDTO.getDataEntrada());
            reserva.setDataSaida(reservaDTO.getDataSaida());

            long dias = ChronoUnit.DAYS.between(reservaDTO.getDataEntrada(), reservaDTO.getDataSaida());
            reserva.setValorTotal(quarto.getValorDiaria() * dias);
            reserva.setStatus(true);
            return repositorioReserva.save(reserva);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Scheduled(cron = "0 0 0 * * *", zone = "America/Sao_Paulo")
    public void mudarStatusReserva() {
        try {
            List<Reserva> reservas = repositorioReserva.findAll();
            for (Reserva reserva : reservas) {
                if (reserva.getDataSaida().isBefore(java.time.LocalDate.now())) {
                    reserva.setStatus(false);
                    quartoService.changeStatus(reserva.getQuarto().getId());
                    repositorioReserva.save(reserva);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Reserva atualizarReserva(ReservaDTO reservaDTO) {
        try {
            Reserva reserva = repositorioReserva.findById(reservaDTO.getId()).orElseThrow(
                () -> new RuntimeException("Reserva não encontrada")
            );

            Cliente cliente = repositorioCliente.findById(reservaDTO.getIdCliente()).orElseThrow(
                    () -> new RuntimeException("Cliente não encontrado")
            );

            Quarto quarto = repositorioQuarto.findById(reservaDTO.getIdQuarto()).orElseThrow(
                    () -> new RuntimeException("Quarto não encontrado")
            );

            Quarto quartoAntigo = repositorioQuarto.findById(reserva.getQuarto().getId()).orElseThrow(
                    () -> new RuntimeException("Quarto não encontrado")
            );

            if (!quarto.getDisponivel() && !Objects.equals(quarto.getId(), quartoAntigo.getId())) {
                throw new RuntimeException("Quarto não disponível");
            } else {
                quarto.setDisponivel(false);
            }

            reserva.setHospede(cliente);
            reserva.setQuarto(quarto);
            reserva.setDataEntrada(reservaDTO.getDataEntrada());
            reserva.setDataSaida(reservaDTO.getDataSaida());

            long dias = ChronoUnit.DAYS.between(reservaDTO.getDataEntrada(), reservaDTO.getDataSaida());
            reserva.setValorTotal(quarto.getValorDiaria() * dias);

            quartoAntigo.setDisponivel(true);
            repositorioQuarto.save(quartoAntigo);
            return repositorioReserva.save(reserva);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void deletarReserva(Long id) {
        try {
            repositorioReserva.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Reserva buscarReserva(Long id) {
        try {
            return repositorioReserva.findById(id).orElseThrow(
                () -> new RuntimeException("Reserva não encontrada")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Reserva> buscarReservas() {
        try {
            return repositorioReserva.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
