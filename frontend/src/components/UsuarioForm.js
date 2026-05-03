import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function UsuarioForm({ onCreate }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(nome);
    setNome("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nome do Usuário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit">
        Criar
      </Button>
    </Box>
  );
}