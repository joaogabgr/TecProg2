package com.joao.AtvV.servicos;

import com.joao.AtvV.models.Cliente;
import com.joao.AtvV.repositorios.RepositorioCliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private RepositorioCliente repositorioCliente;

    public Cliente criarCliente(Cliente cliente) {
        try {
            cliente.setDataCadastro(LocalDateTime.now());
            atualizarReferencias(cliente);
            return repositorioCliente.save(cliente);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Cliente atualizarCliente(Long id, Cliente cliente) {
        try {
            // Busca o cliente existente
            Cliente clienteExistente = repositorioCliente.findById(id)
                    .orElseThrow(() -> new RuntimeException("Cliente não encontrado com o ID: " + id));

            // Atualiza os atributos simples
            clienteExistente.setNome(cliente.getNome());
            clienteExistente.setDataNascimento(cliente.getDataNascimento());

            // Atualiza os documentos
            if (cliente.getDocumentos() != null) {
                clienteExistente.getDocumentos().clear();
                clienteExistente.getDocumentos().addAll(cliente.getDocumentos());
                clienteExistente.getDocumentos().forEach(documento -> documento.setCliente(clienteExistente));
            }

            // Atualiza os telefones
            if (cliente.getTelefones() != null) {
                clienteExistente.getTelefones().clear();
                clienteExistente.getTelefones().addAll(cliente.getTelefones());
                clienteExistente.getTelefones().forEach(telefone -> telefone.setCliente(clienteExistente));
            }

            // Atualiza os endereços
            if (cliente.getEnderecos() != null) {
                clienteExistente.getEnderecos().clear();
                clienteExistente.getEnderecos().addAll(cliente.getEnderecos());
                clienteExistente.getEnderecos().forEach(endereco -> endereco.setCliente(clienteExistente));
            }

            return repositorioCliente.save(clienteExistente);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao atualizar cliente: " + e.getMessage());
        }
    }



    public void deletarCliente(Long id) {
        try {
            repositorioCliente.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Cliente buscarCliente(Long id) {
        try {
            return repositorioCliente.findById(id).orElseThrow(
                () -> new RuntimeException("Cliente não encontrado")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Cliente> buscarClientes() {
        try {
            return repositorioCliente.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void atualizarReferencias(Cliente cliente) {
        if (cliente.getDocumentos() != null) {
            cliente.getDocumentos().forEach(documento -> documento.setCliente(cliente));
        }

        if (cliente.getTelefones() != null) {
            cliente.getTelefones().forEach(telefone -> telefone.setCliente(cliente));
        }

        if (cliente.getEnderecos() != null) {
            cliente.getEnderecos().forEach(endereco -> endereco.setCliente(cliente));
        }
    }
}
