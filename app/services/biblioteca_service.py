from pony.orm import db_session
from datetime import datetime
from app.models.entities import Livro, Usuario, Emprestimo

class BibliotecaService:

    @db_session
    def criar_usuario(self, nome: str):
        Usuario(nome=nome)

    @db_session
    def criar_livro(self, titulo: str):
        Livro(titulo=titulo)

    @db_session
    def emprestar_livro(self, usuario_id: int, livro_id: int):
        livro = Livro.get(id=livro_id)

        if not livro:
            raise Exception("Livro não encontrado")

        if not livro.disponivel:
            raise Exception("Livro já emprestado")

        usuario = Usuario.get(id=usuario_id)

        if not usuario:
            raise Exception("Usuário não encontrado")

        Emprestimo(
            usuario=usuario,
            livro=livro,
            data_emprestimo=datetime.now()
        )

        livro.disponivel = False

    @db_session
    def devolver_livro(self, livro_id: int):
        livro = Livro.get(id=livro_id)

        if not livro:
            raise Exception("Livro não encontrado")

        emprestimo = Emprestimo.select(
            lambda e: e.livro == livro and e.data_devolucao is None
        ).first()

        if not emprestimo:
            raise Exception("Empréstimo não encontrado")

        emprestimo.data_devolucao = datetime.now()
        livro.disponivel = True

    @db_session
    def listar_usuarios(self):
        usuarios = Usuario.select()
        return [
            {
                "id": u.id,
                "nome": u.nome
            }
            for u in usuarios
        ]
    @db_session
    def listar_emprestimos(self):
        emprestimos = Emprestimo.select()
        return [
            {
                "id": e.id,
                "usuario": e.usuario.nome,
                "livro": e.livro.titulo,
                "data_emprestimo": str(e.data_emprestimo),
                "data_devolucao": str(e.data_devolucao) if e.data_devolucao else None
            }
            for e in emprestimos
        ]
    @db_session
    def listar_livros(self):
        livros = Livro.select()
        return [
            {
                "id": l.id,
                "titulo": l.titulo,
                "disponivel": l.disponivel
            }
            for l in livros
        ]

