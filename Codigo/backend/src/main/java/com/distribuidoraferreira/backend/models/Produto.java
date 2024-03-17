package com.distribuidoraferreira.backend.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "produtos")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Produto {
    @Id
    @Column(name = "produto_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cod_barras", unique = true)
    private String codBarras;

    @Column(name = "nome")
    private String nome;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "img")
    private String img;

    @Column(name = "estoque", columnDefinition = "integer default 0")
    private Integer quantidadeEstoque;

    @Column(name = "estoque_minimo", columnDefinition = "integer default 10")
    private Integer quantidadeMinimaEstoque;

    @Column(name = "deletado", columnDefinition = "boolean default false")
    private boolean deletado;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_produto", referencedColumnName = "categoria_id", nullable = false)
    private Categoria categoria;
}
