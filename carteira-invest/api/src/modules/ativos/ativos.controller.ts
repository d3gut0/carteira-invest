import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AtivosService } from "./ativos.service";
import { CreateAtivoDto } from "./dtos/create-ativo.dto";
import { UpdateAtivoDto } from "./dtos/update-ativo.dto";

@Controller('ativos')
export class AtivosController {
  constructor(private readonly ativosService: AtivosService) {}

  @Post()
  create(@Body() dto: CreateAtivoDto) {
    return this.ativosService.create(dto);
  }

  @Get()
  findAll() {
    return this.ativosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ativosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAtivoDto,
  ) {
    return this.ativosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ativosService.remove(id);
  }
}