import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateMovimentacoesDto } from "./dtos/create-movimentacoes.dto";
import { UpdateMovimentacoesDto } from "./dtos/update-movimentacoes.dto";
import { MovimentacoesService } from "./movimentacoes.service";



@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly CotacaoService: MovimentacoesService) {}

  @Post()
  create(@Body() dto: CreateMovimentacoesDto) {
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
    @Body() dto: UpdateMovimentacoesDto,
  ) {
    return this.CotacaoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CotacaoService.remove(id);
  }
}