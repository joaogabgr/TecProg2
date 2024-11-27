import { useEffect, useState } from "react"
import CloseButton from "../../closeButton/closeButton"
import NavigateButtons from "../../navigatesButtons/navigatesButtons"
import Title from "../../title/title"
import { ReservasType } from "../../../types/reservasType"
import { links } from "../../../api/api"

export default function ReadHospetagem() {
    const [reservas, setReservas] = useState<ReservasType[]>([])

    const handleDelete = () => {
        alert("Hospedagem deletada com sucesso!")
    }

    useEffect(() => {
        const readHospetagem = async () => {
            try {
                const response = await links.readReservas()
                setReservas(response.data.message)
            } catch (error) {
                alert("Erro ao buscar hospedagens")
            }
        }
        readHospetagem()
    }, [])


    return (
        <div className="read">
            <CloseButton />
            <Title title="Hospedagem" />
            {reservas.map((reserva) => {
                return (
                    <div className="readInfos">
                        <p>Quarto:</p>
                        <p className="infosgap">{reserva.quarto.NomeQuarto} - {reserva.quarto.NumeroQuarto}</p>
                        <p>Cliente:</p>
                        <p className="infosgap">{reserva.hospede.nome}</p>
                        <p>Documentos:</p>
                        {reserva.hospede.documentos.map((documento, index) => (
                            <p className="infosgap" key={index}>{documento.tipoDocumento}: {documento.numero}</p>
                        ))}
                        <p>Entrada: {new Date(new Date(reserva.dataEntrada).setDate(new Date(reserva.dataEntrada).getDate() + 1)).toLocaleDateString('pt-BR')}</p>
                        <p>Saída: {new Date(new Date(reserva.dataSaida).setDate(new Date(reserva.dataSaida).getDate() + 1)).toLocaleDateString('pt-BR')}</p>
                        <p>Valor Total: {reserva.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p>Status: {reserva.status ? "Ativo" : "Inativo"}</p>
                        <NavigateButtons navigateButtonName="Editar" navigateLink={`/editHospetagens/${reserva.id}`} />
                    </div>
                )
            })}
        </div>
    )
}