import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function LivroForm({ onCreate }) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(titulo);
    setTitulo("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nome do Livro"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit">
        Criar
      </Button>
    </Box>
  );
}