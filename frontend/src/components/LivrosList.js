import { Card, CardContent, Typography, Button } from "@mui/material";

export default function LivrosList({ livros, onDevolver }) {
  return (
    <div>
      {livros.map((livro) => (
        <Card key={livro.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{livro.titulo}</Typography>
            <Typography>
              {livro.disponivel ? "Disponível" : "Emprestado"}
            </Typography>

            {!livro.disponivel && (
              <Button
                variant="outlined"
                sx={{ mt: 1 }}
                onClick={() => onDevolver(livro.id)}
              >
                Devolver
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}