
// example: update-TipoAtivo.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoAtivoDto } from './create-tipo-ativo.dto';

export class UpdateTipoAtivoDto extends PartialType(CreateTipoAtivoDto) {}