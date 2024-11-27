package com.joao.AtvV.controles;

import com.joao.AtvV.dto.ResponseModel;
import com.joao.AtvV.models.Quarto;
import com.joao.AtvV.servicos.QuartoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quartos")
public class QuartoControle {
    @Autowired
    private QuartoService quartoService;

    @PostMapping("/criar")
    public ResponseEntity<ResponseModel> criarQuarto(@RequestBody Quarto quarto) {
        try {
            System.out.println(quarto);
            return ResponseEntity.ok(new ResponseModel(quartoService.criarQuarto(quarto)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @PutMapping("/atualizar")
    public ResponseEntity<ResponseModel> atualizarQuarto(@RequestBody Quarto quarto) {
        try {
            return ResponseEntity.ok(new ResponseModel(quartoService.atualizarQuarto(quarto)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<ResponseModel> deletarQuarto(@PathVariable Long id) {
        try {
            quartoService.deletarQuarto(id);
            return ResponseEntity.ok(new ResponseModel("Quarto deletado"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<ResponseModel> buscarQuarto() {
        try {
            return ResponseEntity.ok(new ResponseModel(quartoService.buscarQuartos()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscarDisponiveis")
    public ResponseEntity<ResponseModel> buscarQuartosDisponiveis() {
        try {
            return ResponseEntity.ok(new ResponseModel(quartoService.buscarQuartosDisponiveis()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<ResponseModel> buscarQuarto(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(new ResponseModel(quartoService.buscarQuarto(id)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

}
