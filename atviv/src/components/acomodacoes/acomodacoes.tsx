import NavigateButtons from "../navigatesButtons/navigatesButtons";

export default function Acomodacoes() {
    return (
        <div className="divsMain" id="Acomodacao">
            <h1>Acomodações</h1>
            <NavigateButtons navigateButtonName="Adicionar Acomodação" navigateLink="/addAcomodacoes" />
            <NavigateButtons navigateButtonName="Ler Acomodações" navigateLink="/readAcomodacoes" />
        </div>
    )
}