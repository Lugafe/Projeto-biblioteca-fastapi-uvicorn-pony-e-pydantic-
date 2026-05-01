from fastapi import APIRouter
from app.dtos.livro_dto import LivroDTO
from app.services.biblioteca_service import BibliotecaService

router = APIRouter(
    prefix="/livros",
    tags=["📚 Livros"]
)
service = BibliotecaService()

@router.post("/")
def criar_livro(dto: LivroDTO):
    service.criar_livro(dto.titulo)
    return {"msg": "Livro criado"}

@router.get("/")
def listar_livros():
    return service.listar_livros()