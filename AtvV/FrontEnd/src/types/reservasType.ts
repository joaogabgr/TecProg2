import { ClienteType } from "./clienteType";
import { QuartoType } from "./quartoType";

export type ReservasType = {
    id: number;
    quarto: QuartoType;
    hospede: ClienteType;
    dataEntrada: string; 
    dataSaida: string;
    valorTotal: number;
    status: boolean;
};