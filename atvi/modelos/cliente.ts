import Prototipo from "../interfaces/prototipo"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente implements Prototipo {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public telefones: Telefone[] = []
    public endereco: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular: Cliente

    public clonar(): Prototipo {
        const clone = new Cliente()
        clone.nome = this.nome
        clone.nomeSocial = this.nomeSocial
        clone.dataNascimento = this.dataNascimento
        clone.dataCadastro = this.dataCadastro
        clone.telefones = this.telefones.map(telefone => telefone.clonar() as Telefone)
        clone.endereco = this.endereco.clonar() as Endereco
        clone.documentos = this.documentos.map(documento => documento.clonar() as Documento)
        clone.dependentes = this.dependentes.map(dependente => dependente.clonar() as Cliente)
        clone.titular = this.titular ? this.titular.clonar() as Cliente : null
        return clone
    }
}