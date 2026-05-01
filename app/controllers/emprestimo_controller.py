from fastapi import APIRouter
from app.dtos.emprestimo_dto import EmprestimoDTO
from app.services.biblioteca_service import BibliotecaService

router = APIRouter(
    prefix="/emprestimos",
    tags=["🔄 Empréstimos"]
)
service = BibliotecaService()

@router.post("/")
def emprestar(dto: EmprestimoDTO):
    service.emprestar_livro(dto.usuario_id, dto.livro_id)
    return {"msg": "Livro emprestado"}

@router.post("/devolver/{livro_id}")
def devolver(livro_id: int):
    service.devolver_livro(livro_id)
    return {"msg": "Livro devolvido"}

@router.get("/")
def listar_emprestimos():
    return service.listar_emprestimos()