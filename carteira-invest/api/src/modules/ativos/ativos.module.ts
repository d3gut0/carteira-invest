import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ativo } from './ativo.entity';
import { AtivosController } from './ativos.controller';
import { AtivosService } from './ativos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ativo])],
  controllers: [AtivosController],
  providers: [AtivosService]
})
export class AtivosModule {}
