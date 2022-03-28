package com.example.ProjetoIntegradorBackEnd.configuracao;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
<<<<<<< HEAD:src/main/java/com/example/ProjetoIntegradorBackEnd/configuracao/CorsConfiguration.java
        //liberando app cliente 1
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
                .allowCredentials(true);
=======
        //liberando cliente
        registry.addMapping("/*")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");

>>>>>>> 16a14c4026c729898ffeac95dfd079da741704a9:src/main/java/com/example/ProjetoIntegradorBackEnd/configuracao/CorsConfig.java
    }
}
