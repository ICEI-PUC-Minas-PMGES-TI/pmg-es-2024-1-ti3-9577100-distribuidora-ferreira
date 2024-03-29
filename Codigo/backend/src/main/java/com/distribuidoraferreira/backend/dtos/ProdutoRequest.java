package com.distribuidoraferreira.backend.dtos;

import com.distribuidoraferreira.backend.models.Categoria;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ProdutoRequest {
    @JsonProperty("codBarras")
    private String codBarras;

    @JsonProperty("nome")
    private String nome;

    @JsonProperty("preco")
    private Double preco;

    @JsonProperty("estoque")
    private Integer quantidadeEstoque;

    @JsonProperty("img")
    private String img;

    @JsonProperty("categoria")
    private Categoria categoria;
}
