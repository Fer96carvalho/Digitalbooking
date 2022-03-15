package com.example.ProjetoIntegradorBackEnd.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter@Getter
public class Produto {

    @Id
    @SequenceGenerator(name = "produto_sequencia", sequenceName = "produto_sequencia", allocationSize = 1)
    private Integer id;
    private String nome;

    @Lob
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cidade_id", foreignKey = @ForeignKey(name = "fk_cidade"))
    @JsonIgnore
    private Cidade cidade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id", foreignKey = @ForeignKey(name = "fk_categoria"))
    @JsonIgnore
    private Categoria categoria;

    @OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Imagem> imagens = new ArrayList<>();

    //@ManyToMany
    //List<Caracteristica> caracteristicas;

}
