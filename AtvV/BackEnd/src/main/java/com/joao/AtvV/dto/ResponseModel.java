package com.joao.AtvV.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@NoArgsConstructor
public class ResponseModel {
    private Integer status;
    private Object message;
    private String error;

    public ResponseModel(String message) {
        this.status = 200;
        this.message = message;
        this.error = "";
    }

    public ResponseModel(Object message) {
        this.status = 200;
        this.message = message;
        this.error = "";
    }

    public ResponseModel(HttpStatus status, String error) {
        this.status = status.value();
        this.message = "";
        this.error = error;
    }
}
