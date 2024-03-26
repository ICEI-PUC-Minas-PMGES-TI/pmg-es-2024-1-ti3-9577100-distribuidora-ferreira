package com.distribuidoraferreira.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;
import com.distribuidoraferreira.backend.mappers.CategoriaMapper;
import com.distribuidoraferreira.backend.models.Categoria;
import com.distribuidoraferreira.backend.repositories.CategoriaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoriaServiceImpl implements CategoriaService {

    private final CategoriaRepository categoriaRepository;

    private final CategoriaMapper categoriaMapper;

    @Override
    @ResponseStatus(HttpStatus.CREATED)
    public void addCategoria(CategoriaRequest categoriaRequest) {
        Categoria categoria = categoriaMapper.categoriaRequestToCategoria(categoriaRequest);

        categoriaRepository.save(categoria);
    }

    @Override
    @ResponseStatus(HttpStatus.OK)
    public CategoriaResponse getCategoriaById(Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);

        if(categoria.isPresent()) {
            CategoriaResponse response = categoriaMapper.categoriaToCategoriaResponse(categoria.get());
            
            return response;
        }

        return null;
    }

    @Override
    @ResponseStatus(HttpStatus.OK)
    public List<CategoriaResponse> getCategorias() {
        List<Categoria> entities = categoriaRepository.findAll();

        List<CategoriaResponse> categoriasResponse = categoriaMapper.categoriasToCategoriaResponses(entities);

        return categoriasResponse;
    }
    // TODO Criar exceptions e fazer response messages melhores
}
