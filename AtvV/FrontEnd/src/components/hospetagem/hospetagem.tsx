import NavigateButtons from "../navigatesButtons/navigatesButtons";

export default function Hospetagem() {
    return (
        <div className="divsMain" id="Hospetagem">
            <h1>Hospedagem</h1>
            <NavigateButtons navigateButtonName="Adicionar Hospedagem" navigateLink="/addHospetagens" />
            <NavigateButtons navigateButtonName="Ler Hospedagens" navigateLink="/readHospetagens" />
        </div>
    )
}