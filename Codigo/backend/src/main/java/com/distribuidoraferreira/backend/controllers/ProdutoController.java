package com.distribuidoraferreira.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.distribuidoraferreira.backend.dtos.ProdutoRequest;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;
import com.distribuidoraferreira.backend.services.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    @Autowired
    ProdutoService produtoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addProduto(@RequestBody ProdutoRequest produtoRequest) {
        produtoService.addProduto(produtoRequest);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProdutoResponse> getProdutos() {
        return produtoService.getProdutos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProdutoById(@PathVariable Long id) {
        return ResponseEntity.ok().body(produtoService.getProdutoById(id));
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<?> getProdutoByNome(@PathVariable String nome) {
        return ResponseEntity.ok().body(produtoService.getProdutoByNome(nome));
    }

    @GetMapping("/cod/{codBarras}")
    public ResponseEntity<?> getProdutoByCodBarras(@PathVariable String codBarras) {
        return ResponseEntity.ok().body(produtoService.getProdutoByCodBarras(codBarras));
    }
}
