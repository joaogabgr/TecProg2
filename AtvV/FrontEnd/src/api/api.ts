import axios from "axios";
import { read } from "fs";


const api = axios.create({
    baseURL: "http://localhost:8080",
  });

export const links = {
    // CLIENTES
    createCliente: (data: any) => api.post("/cliente/criar", data),
    updateCliente: (id: number ,data: any) => api.put("/cliente/atualizar/" + id , data),
    deleteCliente: (id: number) => api.delete(`/cliente/deletar/${id}`),
    readCliente: (id: number) => api.get(`/cliente/buscar/${id}`),
    readClientes: () => api.get("/cliente/buscar"),

    // QUARTOS
    createQuarto: (data: any) => api.post("/quartos/criar", data),
    updateQuarto: (data: any) => api.put("/quartos/atualizar", data),
    deleteQuarto: (id: number) => api.delete(`/quartos/deletar/${id}`),
    readQuarto: (id: number) => api.get(`/quartos/buscar/${id}`),
    readQuartos: () => api.get("/quartos/buscar"),
    readQuartosDisponiveis: () => api.get("/quartos/buscarDisponiveis"),

    // RESERVAS
    createReserva: (data: any) => api.post("/reservas/criar", data),
    readReservas: () => api.get("/reservas/buscar"),
}