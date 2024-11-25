import { useEffect, useState } from "react";
import CloseButton from "../../closeButton/closeButton";
import Title from "../../title/title";
import { QuartoType } from "../../../types/quartoType";
import { links } from "../../../api/api";
import { ClienteType } from "../../../types/clienteType";
import { useNavigate } from "react-router-dom";

export default function AddHospetagem() {
    const [clientes, setClientes] = useState<ClienteType[]>([]);
    const [quartos, setQuartos] = useState<QuartoType[]>([]);
    const [cliente, setCliente] = useState<ClienteType>();
    const [quarto, setQuarto] = useState<QuartoType>();
    const [dataEntrada, setDataEntrada] = useState<string>("");
    const [dataSaida, setDataSaida] = useState<string>("");
    const navigation = useNavigate();

    useEffect(() => {
        const getClientesAndQuartos = async () => {
            const cliente = await links.readClientes();
            const quartos = await links.readQuartosDisponiveis();
            setClientes(cliente.data.message);
            setQuartos(quartos.data.message);
        }
        getClientesAndQuartos();
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            idCliente: cliente?.id,
            idQuarto: quarto?.id,
            dataEntrada,
            dataSaida
        }
        console.log(data);
        

        try {
            await links.createReserva(data);
            navigation(-1)
            alert("Reserva criada com sucesso!");
        } catch (error) {
            alert("Erro ao criar reserva");
        }
    }

    const handleClienteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCliente = clientes.find(c => c.id.toString() === e.target.value);
        setCliente(selectedCliente);
    };
    
    const handleQuartoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedQuarto = quartos.find(q => q.id.toString() === e.target.value);
        setQuarto(selectedQuarto);
    };

    const handleDataEntradaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataEntrada(e.target.value);
    };

    const handleDataSaidaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataSaida(e.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Title title="Adicionar Reserva" />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <select name="cliente" id="cliente" onChange={handleClienteChange}>
                    <option value="">Selecione uma opção</option>
                    {clientes.map((cliente: ClienteType) => (
                        <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="acomodacao">Quarto</label>
                <select name="acomodacao" id="acomodacao" onChange={handleQuartoChange}>
                    <option value="">Selecione uma opção</option>
                    {quartos.map((quarto: QuartoType) => (
                        <option key={quarto.id} value={quarto.id}>{quarto.NomeQuarto} - {quarto.NumeroQuarto}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="data-entrada">Data de entrada:</label>
                <input onChange={handleDataEntradaChange} type="date" id="data-entrada" name="data-entrada" />
            </div>
            <div className="form-group">
                <label htmlFor="data-saida">Data de saída:</label>
                <input onChange={handleDataSaidaChange} type="date" id="data-saida" name="data-saida" />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}