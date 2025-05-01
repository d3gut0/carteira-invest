import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateTipoAtivoDto, UpdateTipoAtivoDto } from "./dtos/create-tipo-ativo.dto";
import { TipoAtivoService } from "./tipo-ativo.service";


@Controller('Cotacao')
export class TipoAtivoController {
  constructor(private readonly CotacaoService: TipoAtivoService) {}

  @Post()
  create(@Body() dto: CreateTipoAtivoDto) {
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
    @Body() dto: UpdateTipoAtivoDto,
  ) {
    return this.CotacaoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CotacaoService.remove(id);
  }
}