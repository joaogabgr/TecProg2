import { useState } from 'react';
import Title from '../../title/title';
import CloseButton from '../../closeButton/closeButton';

export default function EditAcomodacao() {
    const [valor, setValor] = useState('');

    const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(parseFloat(value) / 100);
        setValor(formattedValue);
    };

    return (
        <form className='form' action="">
            <Title title='Editar Acomodação' />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" name="numero" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <input type="text" id="descricao" name="descricao" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="valor">Valor</label>
                <input 
                    type="text" 
                    id="valor" 
                    name="valor" 
                    className="form-control" 
                    value={valor} 
                    onChange={handleValorChange} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <input type="text" id="status" name="status" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}