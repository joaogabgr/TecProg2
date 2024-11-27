import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../../closeButton/closeButton";
import Title from "../../title/title";
import SelectEstado from "./selectEstado";
import { links } from "../../../api/api";
import { isValidCpf } from "../../../utils/isValidCpf";
import { handleCpfChange } from "../../../utils/handleCpfChange";
import { handleRgChange } from "../../../utils/handleRgChange";
import { handleCepChange } from "../../../utils/handleCepChange";

export default function AddClientes() {
  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefones, setTelefones] = useState([{ ddd: "", numero: "" }]);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");

  const handleTelefoneChange = (
    index: number,
    field: "ddd" | "numero",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTelefones = [...telefones];
    updatedTelefones[index][field] = e.target.value;
    setTelefones(updatedTelefones);
  };

  const addTelefoneField = () => {
    setTelefones([...telefones, { ddd: "", numero: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cpf || !rg || !nome || !dataNascimento || !estado || !cidade || !bairro || !rua || !numero || !cep) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (!isValidCpf(cpf)) {
      alert("CPF inválido!");
      return;
    }

    try {
      const cliente = {
        nome,
        dataNascimento,
        documentos: [
          { tipoDocumento: "CPF", numero: cpf },
          { tipoDocumento: "RG", numero: rg },
        ],
        telefones,
        enderecos: [
          { estado, cidade, bairro, rua, numero, cep, complemento },
        ],
      };

      await links.createCliente(cliente);
      alert("Cliente cadastrado com sucesso!");
      navigate("/");
    } catch {
      alert("Erro ao cadastrar cliente. Tente novamente mais tarde.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title title="Adicionar Cliente" />
      <CloseButton />

      {/* Dados Pessoais */}
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input
          type="date"
          id="dataNascimento"
          className="form-control"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          className="form-control"
          value={cpf}
          onChange={(e) => setCpf(handleCpfChange(e))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rg">RG</label>
        <input
          type="text"
          id="rg"
          className="form-control"
          value={rg}
          onChange={(e) => setRg(handleRgChange(e))}
        />
      </div>

      {/* Endereço */}
      <Title title="Endereço" />
      <div className="form-group">
        <label htmlFor="estado">Estado:</label>
        <SelectEstado value={estado} onChange={(e) => setEstado(e.target.value)} />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          className="form-control"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          className="form-control"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          className="form-control"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          className="form-control"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          className="form-control"
          maxLength={9}
          value={cep}
          onChange={(e) => setCep(handleCepChange(e))}
        />
        <label htmlFor="complemento">Complemento:</label>
        <input
          type="text"
          id="complemento"
          className="form-control"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
      </div>

      {/* Telefones */}
      <Title title="Telefones" />
      {telefones.map((telefone, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={`ddd-${index}`}>DDD {index + 1}</label>
          <input
            type="text"
            id={`ddd-${index}`}
            className="form-control"
            maxLength={3}
            value={telefone.ddd}
            onChange={(e) => handleTelefoneChange(index, "ddd", e)}
          />
          <label htmlFor={`telefone-${index}`}>Telefone {index + 1}</label>
          <input
            type="text"
            id={`telefone-${index}`}
            className="form-control"
            maxLength={9}
            value={telefone.numero}
            onChange={(e) => handleTelefoneChange(index, "numero", e)}
          />
        </div>
      ))}
      <button type="button" className="btn btn-secondary" onClick={addTelefoneField}>
        Adicionar Telefone
      </button>

      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
}
