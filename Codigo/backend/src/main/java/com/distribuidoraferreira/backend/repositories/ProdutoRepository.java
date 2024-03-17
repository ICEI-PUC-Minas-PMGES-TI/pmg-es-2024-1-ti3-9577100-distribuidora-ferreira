package com.distribuidoraferreira.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.distribuidoraferreira.backend.models.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
    Produto findByNome(String nome);
}
