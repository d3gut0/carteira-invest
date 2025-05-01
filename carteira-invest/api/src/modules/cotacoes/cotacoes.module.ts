import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotacao } from './cotacao.entity';
import { CotacaoController } from './cotacoes.controller';
import { CotacaosService } from './cotacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cotacao])],
  providers: [CotacaosService],
  controllers: [CotacaoController]
})
export class CotacoesModule {}
