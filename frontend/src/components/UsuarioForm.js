import { useState } from "react";

export default function UsuarioForm({ onCreate }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(nome);
    setNome("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do usuário"
      />
      <button type="submit">Criar Usuário</button>
    </form>
  );
}