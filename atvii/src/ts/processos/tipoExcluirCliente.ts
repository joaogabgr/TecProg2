import Processo from "../abstracoes/processo";
import MenuExcluirCliente from "../menus/menuExcluirClientes";
import ExcluirClienteTitular from "./excluirClienteTitular";

export default class TipoExcluirCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuExcluirCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                console.log('Excluir titulares')
                this.processo = new ExcluirClienteTitular()
                this.processo.processar()
                break
            case 2:
                console.log('Excluir dependentes')
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}