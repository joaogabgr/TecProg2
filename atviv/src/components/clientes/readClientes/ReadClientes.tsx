import CloseButton from "../../closeButton/closeButton";
import NavigateButtons from "../../navigatesButtons/navigatesButtons";
import Title from "../../title/title";
export default function ReadClientes() {
    
    const handleDelete = () => {
        alert("Cliente deletado com sucesso!")
    }
    return (
        <div className="read">
            <CloseButton />
            <Title title="Clientes" />
            <div className="readInfos">
                <p>Nome: João Gabriel</p>
                <p>Email: joao@gmail.com</p>
                <p>CPF: 123.456.789-10</p>
                <p>Telefone: (11) 99999-9999</p>
                <NavigateButtons navigateButtonName="Editar" navigateLink="/editClientes" />
                <NavigateButtons navigateButtonName="Deletar" onClick={handleDelete} navigateLink={""} />
            </div>
            <div className="readInfos">
                <p>Nome: João Gabriel</p>
                <p>Email: joao@gmail.com</p>
                <p>CPF: 123.456.789-10</p>
                <p>Telefone: (11) 99999-9999</p>
                <NavigateButtons navigateButtonName="Editar" navigateLink="/editClientes" />
                <NavigateButtons navigateButtonName="Deletar" onClick={handleDelete} navigateLink={""} />
            </div>
        </div>
    )
}