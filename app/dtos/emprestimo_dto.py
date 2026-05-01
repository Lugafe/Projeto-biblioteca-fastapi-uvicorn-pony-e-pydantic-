from pydantic import BaseModel

class EmprestimoDTO(BaseModel):
    usuario_id: int
    livro_id: int