interface SelectEstadoProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectEstado({ value, onChange }: SelectEstadoProps) {
    const estados = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", 
        "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", 
        "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", 
        "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
    ];

    return (
        <select name="estado" id="estado" value={value} onChange={onChange}>
            {estados.map((estado, index) => (
                <option key={index} value={estado}>{estado}</option>
            ))}
        </select>
    );
}
