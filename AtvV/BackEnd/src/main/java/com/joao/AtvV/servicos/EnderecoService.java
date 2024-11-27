package com.joao.AtvV.servicos;

import com.joao.AtvV.models.Endereco;
import com.joao.AtvV.repositorios.RepositorioEndereco;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {
    @Autowired
    private RepositorioEndereco repositorioEndereco;

    public Endereco criarEndereco(Endereco endereco) {
        try {
            return repositorioEndereco.save(endereco);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Endereco atualizarEndereco(Endereco endereco) {
        try {
            return repositorioEndereco.save(endereco);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void deletarEndereco(Long id) {
        try {
            repositorioEndereco.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Endereco buscarEndereco(Long id) {
        try {
            return repositorioEndereco.findById(id).orElseThrow(
                () -> new RuntimeException("Endereço não encontrado")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Endereco> buscarEnderecos() {
        try {
            return repositorioEndereco.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
