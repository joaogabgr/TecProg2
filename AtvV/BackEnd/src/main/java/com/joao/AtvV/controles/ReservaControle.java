package com.joao.AtvV.controles;

import com.joao.AtvV.dto.ReservaDTO;
import com.joao.AtvV.dto.ResponseModel;
import com.joao.AtvV.models.Reserva;
import com.joao.AtvV.servicos.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservas")
public class ReservaControle {
    @Autowired
    private ReservaService reservaService;

    @PostMapping("/criar")
    public ResponseEntity<ResponseModel> criarReserva(@RequestBody ReservaDTO reservaDTO) {
        try {
            System.out.println(reservaDTO);
            return ResponseEntity.ok(new ResponseModel(reservaService.criarReserva(reservaDTO)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST ,e.getMessage()));
        }
    }

    @PutMapping("/atualizar")
    public ResponseEntity<ResponseModel> atualizarReserva(@RequestBody Reserva reserva) {
        try {
            return ResponseEntity.ok(new ResponseModel(reservaService.atualizarReserva(reserva)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<ResponseModel> deletarReserva(@PathVariable Long id) {
        try {
            reservaService.deletarReserva(id);
            return ResponseEntity.ok(new ResponseModel("Reserva deletada"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<ResponseModel> buscarReserva(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(new ResponseModel(reservaService.buscarReserva(id)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<ResponseModel> buscarReservas() {
        try {
            return ResponseEntity.ok(new ResponseModel(reservaService.buscarReservas()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }
}
