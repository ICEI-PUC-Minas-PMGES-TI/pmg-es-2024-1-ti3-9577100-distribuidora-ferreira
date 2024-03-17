package com.distribuidoraferreira.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.distribuidoraferreira.backend.models.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    Categoria findByNome(String nome);
}
