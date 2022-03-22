package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter@Getter
public class Imagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false,nullable = false)
    private Integer id;
    private String titulo;
    @Lob
    private String url;

    @ManyToOne
    @JoinColumn(name = "produto_id", foreignKey = @ForeignKey(name = "fk_produto"))
    private Produto produto;

}
