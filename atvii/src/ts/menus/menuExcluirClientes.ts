import Menu from "../interfaces/menu";

export default class MenuExcluirCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de cliente deseja excluir? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titulares`)
        console.log(`| 2 - Dependentes`)
        console.log(`----------------------`)
    }
}