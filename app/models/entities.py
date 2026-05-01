from pony.orm import Required, Optional, Set, PrimaryKey
from datetime import datetime
from app.database.db import db

class Usuario(db.Entity):
    id = PrimaryKey(int, auto=True)
    nome = Required(str)
    emprestimos = Set("Emprestimo")

class Livro(db.Entity):
    id = PrimaryKey(int, auto=True)
    titulo = Required(str)
    disponivel = Required(bool, default=True)
    emprestimos = Set("Emprestimo")

class Emprestimo(db.Entity):
    id = PrimaryKey(int, auto=True)
    usuario = Required(Usuario)
    livro = Required(Livro)
    data_emprestimo = Required(datetime)
    data_devolucao = Optional(datetime)