import { useEffect, useState } from 'react';
import Title from '../../title/title';
import CloseButton from '../../closeButton/closeButton';
import { useNavigate, useParams } from 'react-router-dom';
import { links } from '../../../api/api';
import { QuartoType } from '../../../types/quartoType';

export default function EditAcomodacao() {
    const [quarto, setQuarto] = useState<QuartoType>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getQuarto = async () => {
            try {
                const response = await links.readQuarto(Number(id));
                setQuarto(response.data.message);
            } catch (error) {
                console.error('Failed to fetch Quarto:', error);
                alert('Failed to fetch Quarto. Please try again later.');
            }
        };
        getQuarto();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
    
        setQuarto((prevQuarto) => {
            if (!prevQuarto) return undefined;
    
            return {
                ...prevQuarto,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await links.updateQuarto(quarto);
            navigate(-1)
            alert('Acomodação atualizada com sucesso!');
        } catch (error) {
            console.error('Failed to update Quarto:', error);
            alert('Falha ao atualizar a acomodação. Tente novamente mais tarde.');
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <Title title="Editar Acomodação" />
                <CloseButton />
                <div className="form-group">
                    <label htmlFor="NomeQuarto">Nome do Quarto</label>
                    <input
                        type="text"
                        id="NomeQuarto"
                        name="NomeQuarto"
                        className="form-control"
                        value={quarto?.NomeQuarto || ''}
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
                        value={quarto?.NumeroQuarto || ''}
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
                        value={quarto?.quantidadeCamaSolteiro || ''}
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
                        value={quarto?.quantidadeCamaCasal || ''}
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
                        checked={quarto?.disponivel || false}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="valorDiaria">Valor da Diária</label>
                    <input
                        type="number"
                        id="valorDiaria"
                        name="valorDiaria"
                        className="form-control"
                        value={quarto?.valorDiaria || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </>
    );
}
