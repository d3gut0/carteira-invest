import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimentacao } from './movimentacao.entity';
import { MovimentacaoController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentacao])],
  providers: [MovimentacoesService],
  controllers: [MovimentacaoController]
})
export class MovimentacoesModule {}
