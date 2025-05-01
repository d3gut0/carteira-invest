import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUsuarioDto } from "./dtos/create-usuario.dto";
import { UpdateUsuarioDto } from "./dtos/update-usuario.dto";
import { UsuariosService } from "./usuarios.service";


@Controller('Cotacao')
export class UsuariosController {
  constructor(private readonly CotacaoService: UsuariosService) {}

  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.CotacaoService.create(dto);
  }

  @Get()
  findAll() {
    return this.CotacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.CotacaoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUsuarioDto,
  ) {
    return this.CotacaoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CotacaoService.remove(id);
  }
}