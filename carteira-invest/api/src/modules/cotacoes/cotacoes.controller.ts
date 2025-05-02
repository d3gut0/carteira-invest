// cotacoes.controller.ts
import {
  Body, Controller, Delete, Get, Param,
  ParseIntPipe, Post, Put,
} from '@nestjs/common';
import { CotacoesService } from './cotacoes.service';
import { CreateCotacaoDto } from './dtos/create-cotacoes.dto';
import { UpdateCotacaoDto } from './dtos/update-cotacoes.dto'; // ✅ caminho correto

@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly service: CotacoesService) {}

  @Post()
  create(@Body() dto: CreateCotacaoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCotacaoDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
