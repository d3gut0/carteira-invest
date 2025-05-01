import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TipoAtivo } from './tipo-ativo.entity';

@Controller('Tipoativos')
export class TipoAtivoController {
  // GET /usuarios
  @Get()
  findAll(): string {
    return 'Listando todos os usuários';
  }

  // GET /usuarios/:id
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Detalhes do usuário ${id}`;
  }

  // POST /usuarios
  @Post()
  create(@Body() tipo: Partial<TipoAtivo>): string {
    return `Criando usuário ${tipo.nome}`;
  }
}
