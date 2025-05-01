import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CotacoesService } from "./cotacoes.service";
import { CreateCotacaoDto, UpdateCotacaoDto } from "./dtos/create-cotacoes.dto";


@Controller('Cotacao')
export class CotacoesController {
  constructor(private readonly CotacaoService: CotacoesService) {}

  @Post()
  create(@Body() dto: CreateCotacaoDto) {
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
    @Body() dto: UpdateCotacaoDto,
  ) {
    return this.CotacaoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CotacaoService.remove(id);
  }
}