import { Module } from '@nestjs/common';
import { TipoAtivoController } from './tipo-ativo.controller';
import { TipoAtivoService } from './tipo-ativo.service';

@Module({
  controllers: [TipoAtivoController],
  providers: [TipoAtivoService]
})
export class TipoAtivoModule {}
