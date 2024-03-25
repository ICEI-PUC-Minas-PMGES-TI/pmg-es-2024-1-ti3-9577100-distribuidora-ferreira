package com.distribuidoraferreira.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.services.CategoriaService;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    CategoriaService categoriaService;

    @PostMapping
    public void addCategoria(@RequestBody CategoriaRequest categoriaRequest) {
        categoriaService.addCategoria(categoriaRequest);
    }

    @GetMapping
    public ResponseEntity<List<CategoriaResponse>> getCategorias() {
        return ResponseEntity.ok().body(categoriaService.getCategorias());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoriaById(@PathVariable Long id) {
        return ResponseEntity.ok().body("teste");
    }
}
