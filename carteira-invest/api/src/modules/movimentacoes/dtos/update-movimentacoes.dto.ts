
// example: update-Movimentacoes.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimentacoesDto } from './create-movimentacoes.dto';

export class UpdateMovimentacoesDto extends PartialType(CreateMovimentacoesDto) {}