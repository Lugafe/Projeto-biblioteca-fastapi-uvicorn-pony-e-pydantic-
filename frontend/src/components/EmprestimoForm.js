import { useState } from "react";
import { Select, MenuItem, Button, Box } from "@mui/material";

export default function EmprestimoForm({ usuarios, livros, onEmprestar }) {
  const [usuario, setUsuario] = useState("");
  const [livro, setLivro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmprestar(usuario, livro);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Select
        fullWidth
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Selecione um usuário</MenuItem>
        {usuarios.map((u) => (
          <MenuItem key={u.id} value={u.id}>
            {u.nome}
          </MenuItem>
        ))}
      </Select>

      <Select
        fullWidth
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Selecione um livro</MenuItem>
        {livros.map((l) => (
          <MenuItem key={l.id} value={l.id}>
            {l.titulo}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" type="submit">
        Emprestar
      </Button>
    </Box>
  );
}