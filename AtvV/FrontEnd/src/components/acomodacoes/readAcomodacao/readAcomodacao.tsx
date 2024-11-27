import { useEffect, useState } from "react";
import CloseButton from "../../closeButton/closeButton";
import NavigateButtons from "../../navigatesButtons/navigatesButtons";
import Title from "../../title/title";
import { QuartoType } from "../../../types/quartoType";
import { links } from "../../../api/api";
import { link } from "fs";

export default function ReadAcomodacao() {
    const [Quartos, setQuartos] = useState<QuartoType[]>([]);

    const handleDelete = async (id: number) => {
        try {
            await links.deleteQuarto(id);
            const newQuartos = Quartos.filter((quarto) => quarto.id !== id);
            setQuartos(newQuartos);
            alert("Quarto deleted successfully.");
        } catch (error) {
            console.error("Failed to delete Quarto:", error);
            alert("Failed to delete Quarto. Please try again later.");
        }
    }

    useEffect(() => {
        const getQuartos = async () => {
            try {
                const response = await links.readQuartos();
                setQuartos(response.data.message);
            } catch (error) {
                console.error("Failed to fetch Quartos:", error);
                alert("Failed to fetch Quartos. Please try again later.");
            }
        };
        getQuartos();
    }, []);	

    return (
        <div className="read">
            <CloseButton />
            <Title title="Quarto" />
        {Quartos.map((quarto) => (
            <div key={quarto.id} className="readInfos">
                <p>Nome: {quarto.NomeQuarto}</p>
                <p>Numero quarto: {quarto.NumeroQuarto}</p>
                <p>Camas de casal: {quarto.quantidadeCamaCasal}</p>
                <p>Camas de solteiro: {quarto.quantidadeCamaSolteiro}</p>
                <p>Valor diaria: R$ {quarto.valorDiaria}</p>
                <NavigateButtons navigateButtonName="Editar" navigateLink={`/editQuartos/${quarto.id}`}/>
                <NavigateButtons navigateButtonName="Deletar" onClick={() => handleDelete(quarto.id)} navigateLink={""} />
            </div>
        ))}
        </div>
    )
}