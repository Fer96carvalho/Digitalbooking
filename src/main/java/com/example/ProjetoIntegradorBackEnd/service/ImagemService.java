package com.example.ProjetoIntegradorBackEnd.service;

import com.example.ProjetoIntegradorBackEnd.persistence.entities.Imagem;
import com.example.ProjetoIntegradorBackEnd.persistence.repository.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagemService {

    @Autowired
    private ImagemRepository repository;

    public List<Imagem> findByProduto(String produto){
        return repository.findByProduto(produto);
    }
}
