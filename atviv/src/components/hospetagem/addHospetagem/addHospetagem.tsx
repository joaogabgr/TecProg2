import CloseButton from "../../closeButton/closeButton";
import Title from "../../title/title";

export default function AddHospetagem() {
    return (
        <form className="form" action="">
            <Title title="Adicionar Hospedagem" />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <select name="cliente" id="cliente">
                    <option value="1">Cliente 1</option>
                    <option value="2">Cliente 2</option>
                    <option value="3">Cliente 3</option>
                    <option value="4">Cliente 4</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="acomodacao">Acomodação</label>
                <select name="acomodacao" id="acomodacao">
                    <option value="1">Acomodação 1</option>
                    <option value="2">Acomodação 2</option>
                    <option value="3">Acomodação 3</option>
                    <option value="4">Acomodação 4</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}