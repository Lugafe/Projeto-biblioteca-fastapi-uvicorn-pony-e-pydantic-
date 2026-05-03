import { useEffect, useState } from "react";
import {
  getLivros,
  criarLivro,
  getUsuarios,
  criarUsuario,
  emprestarLivro,
  devolverLivro
} from "./services/api";
  import {
  Container,
  Typography,
  Box,
  Paper,
  MenuItem,
  Select
} from "@mui/material";

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
  <Container maxWidth="md">
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        📚 Sistema de Biblioteca
      </Typography>

      <Select
        value={env}
        onChange={(e) => setEnv(e.target.value)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="dev">DEV</MenuItem>
        <MenuItem value="test">TEST</MenuItem>
        <MenuItem value="prod">PROD</MenuItem>
      </Select>
    </Box>

    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6">👤 Criar Usuário</Typography>
      <UsuarioForm onCreate={handleCreateUsuario} />
    </Paper>

    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6">📚 Criar Livro</Typography>
      <LivroForm onCreate={handleCreateLivro} />
    </Paper>

    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6">🔄 Emprestar Livro</Typography>
      <EmprestimoForm
        usuarios={usuarios}
        livros={livros}
        onEmprestar={handleEmprestar}
      />
    </Paper>

    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">📋 Lista de Livros</Typography>
      <LivrosList livros={livros} onDevolver={handleDevolver} />
    </Paper>
  </Container>
);
}

export default App;