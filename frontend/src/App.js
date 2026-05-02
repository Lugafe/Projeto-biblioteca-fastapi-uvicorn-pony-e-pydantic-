import { useEffect, useState } from "react";
import {
  getLivros,
  criarLivro,
  getUsuarios,
  criarUsuario,
  emprestarLivro,
  devolverLivro
} from "./services/api";

import LivrosList from "./components/LivrosList";
import LivroForm from "./components/LivroForm";
import UsuarioForm from "./components/UsuarioForm";
import EmprestimoForm from "./components/EmprestimoForm";

function App() {
  const [livros, setLivros] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [env, setEnv] = useState("dev");

  // 📚 carregar livros
  const carregarLivros = async () => {
    const data = await getLivros(env);
    setLivros(data);
  };

  // 👤 carregar usuários
  const carregarUsuarios = async () => {
    const data = await getUsuarios(env);
    setUsuarios(data);
  };

  // 🔄 carregar tudo ao trocar ambiente
  useEffect(() => {
    carregarLivros();
    carregarUsuarios();
  }, [env]);

  // ➕ criar livro
  const handleCreateLivro = async (titulo) => {
    await criarLivro(env, titulo);
    carregarLivros();
  };

  // ➕ criar usuário
  const handleCreateUsuario = async (nome) => {
    await criarUsuario(env, nome);
    carregarUsuarios();
  };

  // 🔄 emprestar
  const handleEmprestar = async (usuario, livro) => {
    await emprestarLivro(env, usuario, livro);
    carregarLivros();
  };

  // ↩️ devolver
  const handleDevolver = async (livro_id) => {
    await devolverLivro(env, livro_id);
    carregarLivros();
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial" }}>
      <h1>📚 Sistema de Biblioteca</h1>

      <select value={env} onChange={(e) => setEnv(e.target.value)}>
        <option value="dev">DEV</option>
        <option value="test">TEST</option>
        <option value="prod">PROD</option>
      </select>

      <hr />

      <h2>👤 Criar Usuário</h2>
      <UsuarioForm onCreate={handleCreateUsuario} />

      <h2>📚 Criar Livro</h2>
      <LivroForm onCreate={handleCreateLivro} />

      <h2>🔄 Emprestar Livro</h2>
      <EmprestimoForm
        usuarios={usuarios}
        livros={livros}
        onEmprestar={handleEmprestar}
      />

      <h2>📋 Lista de Livros</h2>
      <LivrosList livros={livros} onDevolver={handleDevolver} />
    </div>
  );
}

export default App;