import { useState } from "react";

export default function LivroForm({ onCreate }) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(titulo);
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nome do livro"
      />
      <button type="submit">Criar</button>
    </form>
  );
}