import { useEffect, useState } from "react";
import CloseButton from "../../closeButton/closeButton";
import NavigateButtons from "../../navigatesButtons/navigatesButtons";
import Title from "../../title/title";
import axios from "axios";
import { links } from "../../../api/api";
import { ClienteType } from "../../../types/clienteType";
import { DocumentosType } from "../../../types/documentoType";
export default function ReadClientes() {
  const [clientes, setClientes] = useState<ClienteType[]>([]);

  const handleDelete = async (id: number) => {
    try {
      await links.deleteCliente(id);
      const newClientes = clientes.filter((cliente) => cliente.id !== id);
      setClientes(newClientes);
      alert("Cliente deleted successfully.");
    } catch (error) {
      console.error("Failed to delete cliente:", error);
      alert("Failed to delete cliente. Please try again later.");
    }
  };

  useEffect(() => {
    const getClientes = async () => {
      try {
        const response = await links.readClientes();
        setClientes(response.data.message);
      } catch (error) {
        console.error("Failed to fetch clientes:", error);
        alert("Failed to fetch clientes. Please try again later.");
      }
    };
    getClientes();
  }, []);

  const formatCep = (cep: string) => {
    return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  };

  return (
    <div className="read">
      <CloseButton />
      <Title title="Clientes" />
      {clientes.map((cliente) => (
        <div className="readInfos" key={cliente.id}>
          <p>Nome: {cliente.nome}</p>
          <p>
            Data de cadastro:{" "}
            {new Date(cliente.dataCadastro).toLocaleDateString()}
          </p>
          <p>
            Data de nascimento:{" "}
            {new Date(cliente.dataNascimento).toLocaleDateString()}
          </p>
          {cliente.documentos && cliente.documentos.length > 0 ? (
            <>
              <p>Documentos:</p>
              {cliente.documentos.map((documento: DocumentosType) => (
                <p className="infosgap" key={documento.id}>
                  {" "}
                  {documento.tipoDocumento} {documento.numero}
                </p>
              ))}
            </>
          ) : (
            <p>Documentos: Não possui</p>
          )}
          {cliente.telefones && cliente.telefones.length > 0 ? (
            <>
              <p>Telefones:</p>
              {cliente.telefones.map((telefone) => (
                <p className="infosgap" key={telefone.id}>
                  ({telefone.ddd}) {telefone.numero}
                </p>
              ))}
            </>
          ) : (
            <p>Telefone: Não possui</p>
          )}
          {cliente.enderecos && cliente.enderecos.length > 0 ? (
            <>
              <p>Endereços:</p>
              {cliente.enderecos.map((endereco) => (
                <p className="infosgap" key={endereco.id}>
                  {endereco.rua}, {endereco.numero} - {endereco.bairro} -{" "}
                  {endereco.cidade} - {endereco.estado} - {formatCep(endereco.cep)}
                </p>
              ))}
            </>
          ) : (
            <p>Telefone: Não possui</p>
          )}
          <NavigateButtons
            navigateButtonName="Editar"
            navigateLink={`/editClientes/${cliente.id}`}
          />
          <NavigateButtons
            navigateButtonName="Deletar"
            onClick={() => handleDelete(cliente.id)}
            navigateLink={""}
          />
        </div>
      ))}
    </div>
  );
}
