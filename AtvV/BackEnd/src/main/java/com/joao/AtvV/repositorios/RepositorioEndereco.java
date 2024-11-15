package com.joao.AtvV.repositorios;

import com.joao.AtvV.models.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioEndereco extends JpaRepository<Endereco, Long> {
}
