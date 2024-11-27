import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class CadastrarClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...');
        let nomeTitular = this.entrada.receberTexto('Qual o nome do titular?');
        let clienteTitular = Armazem.InstanciaUnica.Clientes.find(c => c.Nome == nomeTitular)
        if(clienteTitular == null) {
            console.log("Cliente nao encontrado");
            return
        }
        let nomeDependente = this.entrada.receberTexto('Qual o nome do dependente?')
        let nomeSocial = this.entrada.receberTexto("Qual o nome social do dependente")
        let dataNascimento = this.entrada.receberData("Qual a data de nascimento?")
        
        let cliente = new Cliente(nomeDependente, nomeSocial, dataNascimento)
        cliente.setTitular = clienteTitular

        clienteTitular.Dependentes.push(cliente)

        console.log("Finalizando o cadastro do dependente...");
        
    }
}