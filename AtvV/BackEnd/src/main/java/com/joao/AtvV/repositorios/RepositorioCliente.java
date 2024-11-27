package com.joao.AtvV.repositorios;

import com.joao.AtvV.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
}
