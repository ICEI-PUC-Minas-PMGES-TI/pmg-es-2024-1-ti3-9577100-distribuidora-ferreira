package com.distribuidoraferreira.backend.services.exceptions;

public class CategoriaNotFound extends Exception {
    private static final String MESSAGE = "Categoria nao encontrada!";
    
    public CategoriaNotFound() {
        super(MESSAGE);
    }
}