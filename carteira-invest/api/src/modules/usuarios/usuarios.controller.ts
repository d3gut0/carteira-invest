import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
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
  create(@Body() usuario: Partial<Usuario>): string {
    return `Criando usuário ${usuario.nome}`;
  }
}
