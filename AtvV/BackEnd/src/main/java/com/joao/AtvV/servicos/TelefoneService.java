package com.joao.AtvV.servicos;

import com.joao.AtvV.models.Telefone;
import com.joao.AtvV.repositorios.RepositorioTelefone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TelefoneService {
    @Autowired
    private RepositorioTelefone repositorioTelefone;

    public Telefone criarTelefone(Telefone telefone) {
        try {
            return repositorioTelefone.save(telefone);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Telefone atualizarTelefone(Telefone telefone) {
        try {
            return repositorioTelefone.save(telefone);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void deletarTelefone(Long id) {
        try {
            repositorioTelefone.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Telefone buscarTelefone(Long id) {
        try {
            return repositorioTelefone.findById(id).orElseThrow(
                () -> new RuntimeException("Telefone não encontrado")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Telefone> buscarTelefones() {
        try {
            return repositorioTelefone.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
