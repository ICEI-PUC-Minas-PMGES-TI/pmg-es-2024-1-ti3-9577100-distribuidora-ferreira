package com.distribuidoraferreira.backend.mappers;

import com.distribuidoraferreira.backend.dtos.ProdutoRequest;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;
import com.distribuidoraferreira.backend.models.Produto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProdutoMapper {
    public static Produto toEntity(ProdutoRequest produtoRequest) {
        Produto entity = new Produto();

        entity.setNome(produtoRequest.getNome());
        entity.setCodBarras(produtoRequest.getCodBarras());
        entity.setNome(produtoRequest.getNome());
        entity.setPreco(produtoRequest.getPreco());
        entity.setQuantidadeEstoque(produtoRequest.getQuantidadeEstoque());
        entity.setImg(produtoRequest.getImg());
        entity.setCategoria(produtoRequest.getCategoria());

        return entity;
    }

    public static ProdutoResponse toResponse(Produto produto) {
        ProdutoResponse response = new ProdutoResponse();

        response.setId(produto.getId());
        response.setNome(produto.getNome());
        response.setCodBarras(produto.getCodBarras());
        response.setPreco(produto.getPreco());
        response.setQuantidadeEstoque(produto.getQuantidadeEstoque());
        response.setImg(produto.getImg());
        response.setCategoria(produto.getCategoria());

        return response;
    }
}
