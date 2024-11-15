import NavigateButtons from "../navigatesButtons/navigatesButtons";

export default function Acomodacoes() {
    return (
        <div className="divsMain" id="Quartos">
            <h1>Quartos</h1>
            <NavigateButtons navigateButtonName="Adicionar Quarto" navigateLink="/addAcomodacoes" />
            <NavigateButtons navigateButtonName="Ler Quartos" navigateLink="/readAcomodacoes" />
        </div>
    )
}