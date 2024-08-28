import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public ddd: string
    public numero: string

    public clonar(): Prototipo {
        const clone = new Telefone()
        clone.ddd = this.ddd
        clone.numero = this.numero
        return clone
    }
}