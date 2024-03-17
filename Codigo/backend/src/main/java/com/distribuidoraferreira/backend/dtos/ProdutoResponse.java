package com.distribuidoraferreira.backend.dtos;

import com.distribuidoraferreira.backend.models.Categoria;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProdutoResponse {
    @JsonProperty("id")
    private Long id;

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
