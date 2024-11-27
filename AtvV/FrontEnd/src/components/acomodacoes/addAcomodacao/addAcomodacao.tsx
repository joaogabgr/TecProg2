import { useState } from 'react';
import Title from '../../title/title';
import CloseButton from '../../closeButton/closeButton';
import { links } from '../../../api/api';

export default function AddAcomodacao() {
    const [quarto, setQuarto] = useState({
        NomeQuarto: '',
        NumeroQuarto: '',
        quantidadeCamaSolteiro: '',
        quantidadeCamaCasal: '',
        disponivel: true,
        valorDiaria: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setQuarto((prevQuarto) => ({
            ...prevQuarto,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (quarto?.NomeQuarto === '' || quarto?.NumeroQuarto === '' || quarto?.quantidadeCamaSolteiro === '' || quarto?.quantidadeCamaCasal === '' || quarto?.valorDiaria === '') {
                alert('Preencha todos os campos!');
                return;
            }
            await links.createQuarto(quarto);
            alert('Acomodação adicionada com sucesso!');
        } catch (error) {
            console.error('Failed to add Quarto:', error);
            alert('Falha ao adicionar a acomodação. Tente novamente mais tarde.');
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <Title title='Adicionar Quarto' />
            <CloseButton />
            <div className="form-group">
                <label htmlFor="NomeQuarto">Nome do Quarto</label>
                <input
                    type="text"
                    id="NomeQuarto"
                    name="NomeQuarto"
                    className="form-control"
                    value={quarto.NomeQuarto}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="NumeroQuarto">Número do Quarto</label>
                <input
                    type="text"
                    id="NumeroQuarto"
                    name="NumeroQuarto"
                    className="form-control"
                    value={quarto.NumeroQuarto}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantidadeCamaSolteiro">Quantidade de Camas de Solteiro</label>
                <input
                    type="number"
                    id="quantidadeCamaSolteiro"
                    name="quantidadeCamaSolteiro"
                    className="form-control"
                    value={quarto.quantidadeCamaSolteiro}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantidadeCamaCasal">Quantidade de Camas de Casal</label>
                <input
                    type="number"
                    id="quantidadeCamaCasal"
                    name="quantidadeCamaCasal"
                    className="form-control"
                    value={quarto.quantidadeCamaCasal}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="disponivel">Disponível</label>
                <input
                    type="checkbox"
                    id="disponivel"
                    name="disponivel"
                    className="form-control"
                    checked={quarto.disponivel}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="valorDiaria">Valor da Diária</label>
                <input
                    type="text"
                    id="valorDiaria"
                    name="valorDiaria"
                    className="form-control"
                    value={quarto.valorDiaria}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    );
}
