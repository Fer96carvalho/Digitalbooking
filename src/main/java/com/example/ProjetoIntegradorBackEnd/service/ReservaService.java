package com.example.ProjetoIntegradorBackEnd.service;

import com.example.ProjetoIntegradorBackEnd.persistence.DAO.DataCidade;
import com.example.ProjetoIntegradorBackEnd.persistence.entities.Produto;
import com.example.ProjetoIntegradorBackEnd.persistence.entities.Reserva;
import com.example.ProjetoIntegradorBackEnd.persistence.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository repository;

    public List<Reserva> findByProdutoId(Integer id){
        return repository.findByProdutoID(id);
    }

    public Reserva createReserva(Reserva reserva){
        Reserva reservaCriar = new Reserva();

        if(reserva.getProduto() != null){
            reservaCriar.setHoraReserva(reserva.getHoraReserva());
            reservaCriar.setInicioReserva(reserva.getInicioReserva());
            reservaCriar.setFimReserva(reserva.getFimReserva());
            reservaCriar.setUsuario(reserva.getUsuario());
            reservaCriar.setProduto(reserva.getProduto());

            return repository.save(reservaCriar);
        }
        else
            return null;
    }

    public List<Produto> listarProduto(DataCidade dataCidade){
        return repository.findByDateAndCity(dataCidade.getIdCidade(), dataCidade.getInicioReserva(), dataCidade.getFimReserva());
    }
}
