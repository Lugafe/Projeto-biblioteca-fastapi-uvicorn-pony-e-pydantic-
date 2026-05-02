const getBaseUrl = (env) => {
  if (env === "dev") return "http://localhost:8001";
  if (env === "test") return "http://localhost:8002";
  return "http://localhost:8003";
};

export const getLivros = async (env) => {
  const res = await fetch(`${getBaseUrl(env)}/livros`);
  return res.json();
};

export const criarLivro = async (env, titulo) => {
  await fetch(`${getBaseUrl(env)}/livros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ titulo })
  });
};

export const getUsuarios = async (env) => {
  const res = await fetch(`${getBaseUrl(env)}/usuarios`);
  return res.json();
};

export const criarUsuario = async (env, nome) => {
  await fetch(`${getBaseUrl(env)}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome })
  });
};

export const emprestarLivro = async (env, usuario_id, livro_id) => {
  await fetch(`${getBaseUrl(env)}/emprestimos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario_id, livro_id })
  });
};

export const devolverLivro = async (env, livro_id) => {
  await fetch(`${getBaseUrl(env)}/emprestimos/devolver/${livro_id}`, {
    method: "POST"
  });
};
