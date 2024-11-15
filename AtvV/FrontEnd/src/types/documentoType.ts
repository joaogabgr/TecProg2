import { tipoDocumento } from "../enums/tipoDocumentos";

export type DocumentosType = {
    length: number;
    map(arg0: (documento: DocumentosType) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: number;
    tipoDocumento: tipoDocumento;
    numero: string;
    dataEmissao: Date;
};