package com.distribuidoraferreira.backend.services;

import java.util.List;

import com.distribuidoraferreira.backend.dtos.ProdutoRequest;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;

public interface ProdutoService {
    void addProduto(ProdutoRequest userRequest);

    ProdutoResponse getProdutoById(Long id);

    ProdutoResponse getProdutoByNome(String nome);

    ProdutoResponse getProdutoByCodBarras(String codBarras);

    List<ProdutoResponse> getProdutos();
}
