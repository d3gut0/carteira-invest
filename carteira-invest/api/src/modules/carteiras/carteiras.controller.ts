import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CarteirasService } from "./carteiras.service";
import { CreateCarteiraDto } from "./dtos/create-carteira.dto";
import { UpdateCarteiraDto } from "./dtos/update-carteira.dto";

@Controller('carteiras')
export class CarteirasController {
  constructor(private readonly CarteirassService: CarteirasService) {}

  @Post()
  create(@Body() dto: CreateCarteiraDto) {
    return this.CarteirassService.create(dto);
  }

  @Get()
  findAll() {
    return this.CarteirassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.CarteirassService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCarteiraDto,
  ) {
    return this.CarteirassService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CarteirassService.remove(id);
  }
}