


import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Carteira } from './carteira.entity';

@Controller('Carteiras')
export class CarteirasController {
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
  create(@Body() carteira: Partial<Carteira>): string {
    return `Criando usuário ${carteira.nome}`;
  }
}
