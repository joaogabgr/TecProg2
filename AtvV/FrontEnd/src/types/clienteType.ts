import { DocumentosType } from "./documentoType";
import { EnderecoType } from "./enderecoType";
import { TelefoneType } from "./telefoneType";

export type ClienteType = {
    id: number;
    nome: string;
    dataNascimento: Date;
    dataCadastro: Date;
    documentos: DocumentosType[];
    telefones: TelefoneType[];
    enderecos: EnderecoType[];
};