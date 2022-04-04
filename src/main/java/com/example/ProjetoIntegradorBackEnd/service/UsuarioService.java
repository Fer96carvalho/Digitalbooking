package com.example.ProjetoIntegradorBackEnd.service;

import com.example.ProjetoIntegradorBackEnd.persistence.entities.Usuario;
import com.example.ProjetoIntegradorBackEnd.persistence.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private final PasswordEncoder encoder;

    public List<Usuario> findAll() {
        return repository.findAll();
    }

    public Usuario cadastro(Usuario usuario){
        Usuario usuarioCriar = new Usuario();

        usuarioCriar.setNome(usuario.getNome());
        usuarioCriar.setSobrenome(usuario.getSobrenome());
        usuarioCriar.setEmail(usuario.getEmail());
        usuarioCriar.setSenha(encoder.encode(usuario.getSenha()));
        usuarioCriar.setFuncao(usuario.getFuncao());

        return repository.save(usuarioCriar);
    }

    public ResponseEntity<Boolean> validarSenha(@RequestParam String email, @RequestParam String senha) {
        Optional<Usuario> optUsuario = repository.findByEmail(email);
        if(optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        Usuario usuario = optUsuario.get();
        boolean valid = encoder.matches(senha, usuario.getSenha());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);
    }
}
