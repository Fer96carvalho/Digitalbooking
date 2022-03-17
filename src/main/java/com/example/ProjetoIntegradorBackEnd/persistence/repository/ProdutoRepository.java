package com.example.ProjetoIntegradorBackEnd.persistence.repository;

import com.example.ProjetoIntegradorBackEnd.persistence.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto,Integer> {

    @Query("select p from Produto p where p.cidade.nome = ?1")
    List<Produto> findByCidade(String cidade);

    @Query("select p from Produto p where p.categoria.descricao = ?1")
    List<Produto> findByCategoria(String categoria);
}
