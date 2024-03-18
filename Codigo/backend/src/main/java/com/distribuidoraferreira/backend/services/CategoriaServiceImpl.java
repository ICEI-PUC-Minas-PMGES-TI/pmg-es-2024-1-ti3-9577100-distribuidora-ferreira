package com.distribuidoraferreira.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;
import com.distribuidoraferreira.backend.dtos.ProdutoResponse;
import com.distribuidoraferreira.backend.mappers.CategoriaMapper;
import com.distribuidoraferreira.backend.mappers.ProdutoMapper;
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

    @Override
    @ResponseStatus(HttpStatus.OK)
    public List<CategoriaResponse> getCategorias() {
        List<Categoria> entities = categoriaRepository.findAll();

        List<CategoriaResponse> categoriasResponse = 
        entities.stream()
        .map(CategoriaMapper::toResponse)
        .collect(Collectors.toList());

        return categoriasResponse;
    }
    // TODO Criar exceptions e fazer response messages melhores
}
