package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@Getter@Setter
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "caracteristica_sequencia", sequenceName = "caracteristica_sequencia", allocationSize = 1)
    private Integer id;
    private String nome;
    private String icone;
}
