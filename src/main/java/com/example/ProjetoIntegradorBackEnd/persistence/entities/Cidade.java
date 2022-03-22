package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class Cidade {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "cidade_sequencia", sequenceName = "cidade_sequencia", allocationSize = 1)
    private Integer id;
    private String nome;
    private String pais;
}
