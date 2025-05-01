import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotacao } from './cotacao.entity';
import { CotacoesController } from './cotacoes.controller';
import { CotacoesService } from './cotacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cotacao])],
  providers: [CotacoesService],
  controllers: [CotacoesController]
})
export class CotacoesModule {}
