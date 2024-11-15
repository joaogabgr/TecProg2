package com.joao.AtvV.servicos;

import com.joao.AtvV.models.Documentos;
import com.joao.AtvV.repositorios.RepositotioDocumentos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentoService {

    @Autowired
    private RepositotioDocumentos repositorioDocumento;

    public Documentos criarDocumento(Documentos documento) {
        try {
            return repositorioDocumento.save(documento);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Documentos atualizarDocumento(Documentos documento) {
        try {
            return repositorioDocumento.save(documento);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public void deletarDocumento(Long id) {
        try {
            repositorioDocumento.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public Documentos buscarDocumento(Long id) {
        try {
            return repositorioDocumento.findById(id).orElseThrow(
                () -> new RuntimeException("Documento não encontrado")
            );
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public List<Documentos> buscarDocumentos() {
        try {
            return repositorioDocumento.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
