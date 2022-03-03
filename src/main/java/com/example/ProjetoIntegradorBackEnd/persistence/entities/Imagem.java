package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;

@Entity
@Setter@Getter
public class Imagem {

    @Id
    @SequenceGenerator(name = "imagem_sequencia", sequenceName = "imagem_sequencia", allocationSize = 1)
    private Integer id;
    private String titulo;
    @Lob
    private String url;
}
