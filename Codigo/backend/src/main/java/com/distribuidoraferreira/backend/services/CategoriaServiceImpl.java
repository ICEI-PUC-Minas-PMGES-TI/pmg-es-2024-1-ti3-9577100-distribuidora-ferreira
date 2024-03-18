package com.distribuidoraferreira.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;
import com.distribuidoraferreira.backend.mappers.CategoriaMapper;
import com.distribuidoraferreira.backend.models.Categoria;
import com.distribuidoraferreira.backend.repositories.CategoriaRepository;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Override
    @ResponseStatus(HttpStatus.CREATED)
    public void addCategoria(CategoriaRequest categoriaRequest) {
        Categoria categoria = CategoriaMapper.toEntity(categoriaRequest);

        categoriaRepository.save(categoria);
    }

    @Override
    @ResponseStatus(HttpStatus.OK)
    public CategoriaResponse getCategoriaById(Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);

        CategoriaResponse response = CategoriaMapper.toResponse(categoria.get());

        return response;
    }
    // TODO Criar exceptions e fazer response messages melhores
}
