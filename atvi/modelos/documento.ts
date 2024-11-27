import { TipoDocumento } from "../enumeracoes/tipoDocumento"
import Prototipo from "../interfaces/prototipo"

export default class Documento implements Prototipo {
    public numero: string
    public tipo: TipoDocumento
    public dataExpedicao: Date

    public clonar(): Prototipo {
        const clone = new Documento()
        clone.numero = this.numero
        clone.tipo = this.tipo
        clone.dataExpedicao = this.dataExpedicao
        return clone
    }
}