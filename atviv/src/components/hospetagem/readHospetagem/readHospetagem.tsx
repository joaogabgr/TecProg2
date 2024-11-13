import CloseButton from "../../closeButton/closeButton"
import NavigateButtons from "../../navigatesButtons/navigatesButtons"
import Title from "../../title/title"

export default function ReadHospetagem() {

    const handleDelete = () => {
        alert("Hospedagem deletada com sucesso!")
    }

    return (
        <div className="read">
            <CloseButton />
            <Title title="Hospedagem" />
            <div className="readInfos">
                <p>Nome: João Gabriel</p>
                <p>Email: joao@gmail.com </p>
                <p>Acomodação: Acomodação 1</p>
            <NavigateButtons navigateButtonName="Editar" navigateLink="/editHospetagens" />
            <NavigateButtons navigateButtonName="Deletar" onClick={handleDelete} navigateLink={""} />
            </div>
        </div>
    )
}