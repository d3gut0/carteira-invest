import { Module } from '@nestjs/common';
import { CotacoesService } from './cotacoes.service';
import { CotacoesController } from './cotacoes.controller';

@Module({
  providers: [CotacoesService],
  controllers: [CotacoesController]
})
export class CotacoesModule {}
