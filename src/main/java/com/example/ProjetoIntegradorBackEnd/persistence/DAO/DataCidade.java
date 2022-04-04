package com.example.ProjetoIntegradorBackEnd.persistence.DAO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter@Setter
public class DataCidade {

    private Integer idCidade;
    private LocalDate inicioReserva;
    private LocalDate fimReserva;
}
