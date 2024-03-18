package com.distribuidoraferreira.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public List<ProdutoResponse> getProdutos() {
        List<Produto> produtos = produtoRepository.findAll();

        List<ProdutoResponse> produtosResponse = 
        produtos.stream()
        .map(ProdutoMapper::toResponse)
        .collect(Collectors.toList());

        return produtosResponse;
    }

    @Override
    public ProdutoResponse getProdutoById(Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);

        ProdutoResponse response = ProdutoMapper.toResponse(produto.get());

        return response;
    }

    @Override
    public ProdutoResponse getProdutoByNome(String nome) {
        Produto entity = produtoRepository.findByNome(nome);

        ProdutoResponse response = ProdutoMapper.toResponse(entity);

        return response;
    }

    @Override
    public ProdutoResponse getProdutoByCodBarras(String codBarras) {
        Produto entity = produtoRepository.findByCodBarras(codBarras);

        ProdutoResponse response = ProdutoMapper.toResponse(entity);

        return response;
    }

    // TODO Criar exceptions e fazer response messages melhores
}
