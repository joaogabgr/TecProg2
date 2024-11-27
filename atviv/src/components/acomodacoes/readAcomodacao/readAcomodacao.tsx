import CloseButton from "../../closeButton/closeButton";
import NavigateButtons from "../../navigatesButtons/navigatesButtons";
import Title from "../../title/title";

export default function ReadAcomodacao() {

    const handleDelete = () => {
        alert("Acomodação deletada com sucesso!")
    }
    return (
        <div className="read">
            <CloseButton />
            <Title title="Acomodação" />
            <div className="readInfos">
                <p>Nome: Quarto 1</p>
                <p>Descrição: Quarto com cama de casal</p>
                <p>Valor: R$ 100,00</p>
                <NavigateButtons navigateButtonName="Editar" navigateLink="/editAcomodacoes" />
                <NavigateButtons navigateButtonName="Deletar" onClick={handleDelete} navigateLink={""} />
            </div>
            <div className="readInfos">
                <p>Nome: Quarto 2</p>
                <p>Descrição: Quarto com cama de solteiro</p>
                <p>Valor: R$ 50,00</p>
                <NavigateButtons navigateButtonName="Editar" navigateLink="/editAcomodacoes" />
                <NavigateButtons navigateButtonName="Deletar" onClick={handleDelete} navigateLink={""} />
            </div>
        </div>
    )
}