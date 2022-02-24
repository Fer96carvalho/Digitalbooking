package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@Setter@Getter
public class Categoria {

    @Id
    @SequenceGenerator(name = "categoria_sequencia", sequenceName = "categoria_sequencia", allocationSize = 1)
    private Integer id;
    private Integer qualificacao;
    private String descricao;
    private String urlImagem;
}
