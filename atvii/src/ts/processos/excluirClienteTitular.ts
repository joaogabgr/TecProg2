import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando a exclusão de um cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do cliente que deseja excluir?')
        let cliente = Armazem.InstanciaUnica.Clientes.find(c => c.Nome === nome)
        if (!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        let indice = Armazem.InstanciaUnica.Clientes.indexOf(cliente)
        Armazem.InstanciaUnica.Clientes.splice(indice, 1)
        console.log('Cliente excluído com sucesso!')
    }
};