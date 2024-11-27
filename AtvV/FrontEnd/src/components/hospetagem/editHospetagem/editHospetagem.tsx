import { useEffect, useState } from "react";
import CloseButton from "../../closeButton/closeButton";
import Title from "../../title/title";
import { QuartoType } from "../../../types/quartoType";
import { links } from "../../../api/api";
import { ClienteType } from "../../../types/clienteType";
import { useNavigate, useParams } from "react-router-dom";

export default function EditHospetagem() {
    const [clientes, setClientes] = useState<ClienteType[]>([]);
    const [quartos, setQuartos] = useState<QuartoType[]>([]);
    const [cliente, setCliente] = useState<ClienteType | undefined>(undefined);
    const [quarto, setQuarto] = useState<QuartoType | undefined>(undefined);
    const [dataEntrada, setDataEntrada] = useState<string>("");
    const [dataSaida, setDataSaida] = useState<string>("");
    const navigation = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getClientesAndQuartos = async () => {
            const clienteResponse = await links.readClientes();
            const quartosResponse = await links.readQuartosDisponiveis();
            setClientes(clienteResponse.data.message);
            setQuartos(quartosResponse.data.message);
        };
        getClientesAndQuartos();

        const getReserva = async () => {
            const reservaResponse = await links.readReserva(Number(id));
            if (reservaResponse.data.message) {
                const reserva = reservaResponse.data.message;
                setCliente(reserva.hospede);
                setQuarto(reserva.quarto);
                console.log(quarto);
                
                setDataEntrada(reserva.dataEntrada);
                setDataSaida(reserva.dataSaida);
            }
        };
        getReserva();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            id: Number(id),
            idCliente: cliente?.id,
            idQuarto: quarto?.id,
            dataEntrada,
            dataSaida,
        };
        console.log(data);

        try {
            await links.updateReserva(data);
            navigation(-1);
            alert("Reserva atualizada com sucesso!");
        } catch (error) {
            alert("Erro ao atualizar reserva");
        }
    };

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
            <Title title="Editar Hospedagem" />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <select
                    name="cliente"
                    id="cliente"
                    onChange={handleClienteChange}
                    value={cliente?.id || ''}
                >
                    <option value="">Selecione uma opção</option>
                    {clientes.map((cliente: ClienteType) => (
                        <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="acomodacao">Quarto</label>
                <select
                    name="acomodacao"
                    id="acomodacao"
                    onChange={handleQuartoChange}
                    value={quarto?.id || ''}
                >
                    <option value="">Selecione uma opção</option>
                    <option value={quarto?.id}>{quarto?.NomeQuarto} - {quarto?.NumeroQuarto}</option>
                    {quartos.map((quarto: QuartoType) => (
                        <option key={quarto.id} value={quarto.id}>
                            {quarto.NomeQuarto} - {quarto.NumeroQuarto}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="data-entrada">Data de entrada:</label>
                <input
                    onChange={handleDataEntradaChange}
                    type="date"
                    id="data-entrada"
                    name="data-entrada"
                    value={dataEntrada}
                />
            </div>
            <div className="form-group">
                <label htmlFor="data-saida">Data de saída:</label>
                <input
                    onChange={handleDataSaidaChange}
                    type="date"
                    id="data-saida"
                    name="data-saida"
                    value={dataSaida}
                />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    );
}
