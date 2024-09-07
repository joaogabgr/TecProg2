import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class editarClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando a edição de um cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do cliente que deseja editar?')
        let cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nome)
        if (!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        let indice = Armazem.InstanciaUnica.Clientes.indexOf(cliente)
        let novoNome = this.entrada.receberTexto('Qual o novo nome do cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento do cliente?')
        Armazem.InstanciaUnica.Clientes[indice].Nome = novoNome
        Armazem.InstanciaUnica.Clientes[indice].NomeSocial = nomeSocial
        Armazem.InstanciaUnica.Clientes[indice].DataNascimento = dataNascimento
        console.log('Cliente editado com sucesso!')
    }
}