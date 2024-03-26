package com.distribuidoraferreira.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.distribuidoraferreira.backend.dtos.ProdutoRequest;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;
import com.distribuidoraferreira.backend.mappers.ProdutoMapper;
import com.distribuidoraferreira.backend.models.Produto;
import com.distribuidoraferreira.backend.repositories.ProdutoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository produtoRepository;

    private final ProdutoMapper produtoMapper;

    @Override
    @ResponseStatus(HttpStatus.CREATED)
    public void addProduto(ProdutoRequest userRequest) {
        Produto produto = produtoMapper.produtoRequestToProduto(userRequest);

        produtoRepository.save(produto);
    }

    @Override
    public List<ProdutoResponse> getProdutos() {
        List<Produto> produtos = produtoRepository.findAll();

        List<ProdutoResponse> produtosResponse = produtoMapper.produtosToProdutoResponses(produtos);

        return produtosResponse;
    }

    @Override
    public ProdutoResponse getProdutoById(Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);

        ProdutoResponse response = produtoMapper.produtoToProdutoResponse(produto.get());

        return response;
    }

    @Override
    public ProdutoResponse getProdutoByNome(String nome) {
        Produto entity = produtoRepository.findByNome(nome);

        ProdutoResponse response = produtoMapper.produtoToProdutoResponse(entity);

        return response;
    }

    @Override
    public ProdutoResponse getProdutoByCodBarras(String codBarras) {
        Produto entity = produtoRepository.findByCodBarras(codBarras);

        ProdutoResponse response = produtoMapper.produtoToProdutoResponse(entity);

        return response;
    }

    // TODO Criar exceptions e fazer response messages melhores
}
