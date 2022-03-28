package com.example.ProjetoIntegradorBackEnd.controller;

import com.example.ProjetoIntegradorBackEnd.persistence.entities.Produto;
import com.example.ProjetoIntegradorBackEnd.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "**", allowedHeaders = "**")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping
    public List<Produto> getProduto(){
        return service.findAll();
    }

    @GetMapping("/id/{id}")
    public Produto getProdutoById(@PathVariable Integer id){
        return service.findById(id);
    }

    @GetMapping("/cidade/{cidade}")
    public List<Produto> getProdutoByCidade(@PathVariable String cidade){
        return service.findByCidade(cidade);
    }

    @GetMapping("/categoria/{categoria}")
    public List<Produto> getProdutoByCategoria(@PathVariable String categoria){
        return service.findByCategoria(categoria);
    }

    @PutMapping
    public Produto putProduto(@RequestBody Produto produto){
        return service.createProduto(produto);
    }
}
