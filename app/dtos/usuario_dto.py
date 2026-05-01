from pydantic import BaseModel

class UsuarioDTO(BaseModel):
    nome: str