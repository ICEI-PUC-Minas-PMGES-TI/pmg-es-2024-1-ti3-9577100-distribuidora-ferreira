package com.distribuidoraferreira.backend.mappers;

import com.distribuidoraferreira.backend.dtos.CategoriaRequest;
import com.distribuidoraferreira.backend.dtos.CategoriaResponse;
import com.distribuidoraferreira.backend.models.Categoria;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoriaMapper {
    public static Categoria toEntity(CategoriaRequest categoriaRequest) {
        Categoria entity = new Categoria();
        
        entity.setNome(categoriaRequest.getNome());

        return entity;
    }

    public static CategoriaResponse toResponse(Categoria categoria) {
        CategoriaResponse response = new CategoriaResponse();

        response.setId(categoria.getId());
        response.setNome(categoria.getNome());

        return response;
    }
}
