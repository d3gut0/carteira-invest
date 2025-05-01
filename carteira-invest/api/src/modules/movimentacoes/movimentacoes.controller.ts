import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Movimentacao } from './movimentacao.entity';

@Controller('Movimentacaos')
export class MovimentacaoController {
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
  create(@Body() mov: Partial<Movimentacao>): string {
    return `Criando usuário ${mov.tipo}`;
  }
}
