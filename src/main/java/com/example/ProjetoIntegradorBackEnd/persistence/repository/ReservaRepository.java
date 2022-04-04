package com.example.ProjetoIntegradorBackEnd.persistence.repository;


import com.example.ProjetoIntegradorBackEnd.persistence.entities.Produto;
import com.example.ProjetoIntegradorBackEnd.persistence.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {

    @Query("select r from Reserva r where r.produto.id = ?1")
    List<Reserva> findByProdutoID(Integer produtoID);

    @Query("select p from Reserva r join Produto p where r.produto.cidade.id = ?1 and r.inicioReserva = ?2 and r.fimReserva = ?3")
    List<Produto> findByDateAndCity(Integer cidadeID, LocalDate iniciReserva, LocalDate fimReserva);
}
