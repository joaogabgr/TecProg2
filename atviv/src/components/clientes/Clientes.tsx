import NavigateButtons from "../navigatesButtons/navigatesButtons";

export default function Clientes() {
  return (
    <div className="divsMain" id="Clientes">
      <h1>Clientes</h1>
      <NavigateButtons navigateButtonName="Adicionar Cliente" navigateLink="/addClientes" />
      <NavigateButtons navigateButtonName="Adicionar Dependente" navigateLink="/addClientesDependentes" />
      <NavigateButtons navigateButtonName="Ler Clientes" navigateLink="/readClientes" />
    </div>
  );
}