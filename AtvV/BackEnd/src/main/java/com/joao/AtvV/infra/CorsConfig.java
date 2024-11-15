package com.joao.AtvV.infra;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Habilita CORS para todas as rotas
        registry.addMapping("/**") // Adiciona CORS para todas as URLs
                .allowedOrigins("http://localhost:3000") // Permite acesso apenas desse domínio
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite certos métodos HTTP
                .allowedHeaders("Content-Type", "Authorization"); // Permite cabeçalhos específicos
    }
}
