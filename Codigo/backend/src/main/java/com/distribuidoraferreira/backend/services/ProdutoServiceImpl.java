package com.distribuidoraferreira.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.distribuidoraferreira.backend.dtos.ProdutoRequest;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;
import com.distribuidoraferreira.backend.mappers.ProdutoMapper;
import com.distribuidoraferreira.backend.models.Produto;
import com.distribuidoraferreira.backend.repositories.ProdutoRepository;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    @Override
    @ResponseStatus(HttpStatus.CREATED)
    public void addProduto(ProdutoRequest userRequest) {
        Produto produto = ProdutoMapper.toEntity(userRequest);

        produtoRepository.save(produto);
    }

    @Override
    @ResponseStatus(HttpStatus.OK)
    public ProdutoResponse getProdutoById(Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);

        ProdutoResponse response = ProdutoMapper.toResponse(produto.get());

        return response;
    }
    // TODO Criar exceptions e fazer response messages melhores
}
