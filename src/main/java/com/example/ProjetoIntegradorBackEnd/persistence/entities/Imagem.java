package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter@Getter
public class Imagem {

    @Id
    @SequenceGenerator(name = "imagem_sequencia", sequenceName = "imagem_sequencia", allocationSize = 1)
    private Integer id;
    private String titulo;
    @Lob
    private String url;

    @ManyToOne
    private Produto produto;

}
