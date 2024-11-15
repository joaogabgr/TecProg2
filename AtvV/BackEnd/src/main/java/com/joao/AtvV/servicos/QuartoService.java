package com.joao.AtvV.servicos;

import com.joao.AtvV.models.Quarto;
import com.joao.AtvV.repositorios.RepositorioQuarto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuartoService {
    @Autowired
    private RepositorioQuarto repositorioQuarto;

    public Quarto criarQuarto(Quarto quarto) {
        try {
            return repositorioQuarto.save(quarto);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Quarto atualizarQuarto(Quarto quarto) {
        try {
            return repositorioQuarto.save(quarto);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void deletarQuarto(Long id) {
        try {
            repositorioQuarto.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Quarto buscarQuarto(Long id) {
        try {
            return repositorioQuarto.findById(id).orElseThrow(
                () -> new RuntimeException("Quarto não encontrado")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Quarto> buscarQuartos() {
        try {
            return repositorioQuarto.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Quarto> buscarQuartosDisponiveis() {
        try {
            return repositorioQuarto.findAllByDisponivelTrue();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Quarto changeStatus(Long id) {
        try {
            Quarto quarto = repositorioQuarto.findById(id).orElseThrow(
                () -> new RuntimeException("Quarto não encontrado")
            );
            quarto.setDisponivel(!quarto.getDisponivel());
            repositorioQuarto.save(quarto);
            return quarto;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
