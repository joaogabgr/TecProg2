package com.joao.AtvV.controles;

import com.joao.AtvV.dto.ResponseModel;
import com.joao.AtvV.models.Cliente;
import com.joao.AtvV.servicos.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente")
public class ClienteControle {
    @Autowired
    private ClienteService clienteService;

    @PostMapping("/criar")
    public ResponseEntity<ResponseModel> criarCliente(@RequestBody Cliente cliente) {
        try {
            return ResponseEntity.ok(new ResponseModel(clienteService.criarCliente(cliente)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<ResponseModel> atualizarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        try {
            return ResponseEntity.ok(new ResponseModel(clienteService.atualizarCliente(id, cliente)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<ResponseModel> deletarCliente(@PathVariable Long id) {
        try {
            clienteService.deletarCliente(id);
            return ResponseEntity.ok(new ResponseModel("Cliente deletado"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<ResponseModel> buscarCliente(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(new ResponseModel(clienteService.buscarCliente(id)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<ResponseModel> buscarClientes() {
        try {
            return ResponseEntity.ok(new ResponseModel(clienteService.buscarClientes()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseModel(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }
}
