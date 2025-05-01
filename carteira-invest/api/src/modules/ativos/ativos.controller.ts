import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ativo } from './ativo.entity';

@Controller('ativos')
export class AtivosController {
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
  create(@Body() usuario: Partial<Ativo>): string {
    return `Criando usuário ${usuario.nome}`;
  }
}
