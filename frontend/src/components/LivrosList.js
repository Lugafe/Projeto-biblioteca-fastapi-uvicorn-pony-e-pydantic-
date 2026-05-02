export default function LivrosList({ livros, onDevolver }) {
  return (
    <div>
      {livros.map((livro) => (
        <div
          key={livro.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          <strong>{livro.titulo}</strong>
          <p>
            {livro.disponivel ? "✅ Disponível" : "❌ Emprestado"}
          </p>

          {!livro.disponivel && (
            <button onClick={() => onDevolver(livro.id)}>
              Devolver
            </button>
          )}
        </div>
      ))}
    </div>
  );
}