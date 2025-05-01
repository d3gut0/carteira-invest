import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateTipoAtivoDto, UpdateTipoAtivoDto } from "./dtos/create-tipo-ativo.dto";
import { TipoAtivoService } from "./tipo-ativo.service";


@Controller('tipo-ativo')
export class TipoAtivoController {
  constructor(private readonly service: TipoAtivoService) {}

  @Post()
  create(@Body() dto: CreateTipoAtivoDto) {
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
    @Body() dto: UpdateTipoAtivoDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}