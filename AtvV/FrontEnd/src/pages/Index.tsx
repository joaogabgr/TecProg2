import Acomodacoes from "../components/acomodacoes/acomodacoes";
import Clientes from "../components/clientes/Clientes";
import Hospetagem from "../components/hospetagem/hospetagem";

export default function Index() {
    return (
        <>
            <Clientes />
            <Acomodacoes />
            <Hospetagem />
        </>
    )
}