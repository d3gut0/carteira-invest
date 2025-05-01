


import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cotacao } from './cotacao.entity';

@Controller('Cotacaos')
export class CotacaoController {
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
  create(@Body() cotacao: Partial<Cotacao>): string {
    return `Criando usuário ${cotacao.id}`;
  }
}
