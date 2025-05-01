
// example: update-Cotacoes.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateCotacaoDto } from './create-cotacoes.dto';

export class UpdateCotacaoDto extends PartialType(CreateCotacaoDto) {}