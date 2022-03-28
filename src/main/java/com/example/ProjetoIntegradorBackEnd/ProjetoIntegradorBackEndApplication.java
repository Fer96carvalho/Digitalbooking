package com.example.ProjetoIntegradorBackEnd;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjetoIntegradorBackEndApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoIntegradorBackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Backend Startado...");
	}

}
