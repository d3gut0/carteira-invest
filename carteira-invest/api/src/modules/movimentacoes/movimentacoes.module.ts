import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimentacao } from './movimentacao.entity';
import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentacao])],
  providers: [MovimentacoesService],
  controllers: [MovimentacoesController]
})
export class MovimentacoesModule {}
