package com.example.ProjetoIntegradorBackEnd.service;

import com.example.ProjetoIntegradorBackEnd.persistence.entities.Usuario;
import com.example.ProjetoIntegradorBackEnd.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario cadastro(Usuario usuario){
        Usuario usuarioCriar = new Usuario();

        usuarioCriar.setNome(usuario.getNome());
        usuarioCriar.setSobrenome(usuario.getSobrenome());
        usuarioCriar.setEmail(usuario.getEmail());
        usuarioCriar.setSenha(usuario.getSenha());
        usuarioCriar.setFuncao(usuario.getFuncao());

        return repository.save(usuarioCriar);
    }
}
