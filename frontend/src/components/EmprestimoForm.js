import { useState } from "react";

export default function EmprestimoForm({ usuarios, livros, onEmprestar }) {
  const [usuario, setUsuario] = useState("");
  const [livro, setLivro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmprestar(usuario, livro);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setUsuario(e.target.value)}>
        <option>Usuário</option>
        {usuarios.map(u => (
          <option key={u.id} value={u.id}>{u.nome}</option>
        ))}
      </select>

      <select onChange={(e) => setLivro(e.target.value)}>
        <option>Livro</option>
        {livros.map(l => (
          <option key={l.id} value={l.id}>{l.titulo}</option>
        ))}
      </select>

      <button type="submit">Emprestar</button>
    </form>
  );
}