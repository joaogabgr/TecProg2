import { useState } from 'react';
import CloseButton from '../../closeButton/closeButton'
import Title from '../../title/title';

export default function AddClientesDependentes() {
    const [cpf, setCpf] = useState('');

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCpf(value);
    };
    return (
        <form className="form" action="">
            <Title title='Adicionar cliente dependente' />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="clientepai">Cliente pai</label>
                <select name="clientepai" id="clientepai">
                    <option value="1">Cliente 1</option>
                    <option value="2">Cliente 2</option>
                    <option value="3">Cliente 3</option>
                    <option value="4">Cliente 4</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    className="form-control"
                    value={cpf}
                    onChange={handleCpfChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}