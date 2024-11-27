import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nome = this.entrada.receberTexto('Qual o nome do titular que deseja listar os dependentes?')
        let cliente = this.clientes.find(c => c.Nome === nome)
        if (!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        console.log('Iniciando a listagem dos dependentes dos clientes titulares...')
        cliente.Dependentes.forEach(dependente => {
            this.impressor = new ImpressaorCliente(dependente)
            console.log(this.impressor.imprimir())
        })
    }
    private titular(cliente: Cliente): boolean {
        return cliente.Titular !== undefined
    }
}
