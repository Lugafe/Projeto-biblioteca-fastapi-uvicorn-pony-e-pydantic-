from fastapi import FastAPI
from app.database.db import connect, db
from app.models import entities
from app.controllers import livro_controller, usuario_controller, emprestimo_controller
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="📚 Sistema de Biblioteca",
    description="API para gerenciar livros, usuários e empréstimos",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# conectar banco
connect()
db.generate_mapping(create_tables=True)

# rotas
app.include_router(livro_controller.router)
app.include_router(usuario_controller.router)
app.include_router(emprestimo_controller.router)