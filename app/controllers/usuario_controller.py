from fastapi import APIRouter
from app.dtos.usuario_dto import UsuarioDTO
from app.services.biblioteca_service import BibliotecaService

router = APIRouter(
    prefix="/usuarios",
    tags=["👤 Usuários"]
)
service = BibliotecaService()

@router.post("/")
def criar_usuario(dto: UsuarioDTO):
    service.criar_usuario(dto.nome)
    return {"msg": "Usuário criado"}

@router.get("/")
def listar_usuarios():
    return service.listar_usuarios()