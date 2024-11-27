package com.joao.AtvV.repositorios;

import com.joao.AtvV.models.Quarto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepositorioQuarto extends JpaRepository<Quarto, Long> {
    List<Quarto> findAllByDisponivelTrue();
}
