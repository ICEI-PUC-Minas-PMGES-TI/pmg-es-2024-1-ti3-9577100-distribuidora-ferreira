package com.distribuidoraferreira.backend.services;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;

public interface CategoriaService {
    void addCategoria(CategoriaRequest categoriaRequest);

    CategoriaResponse getCategoriaById(Long id);
}
