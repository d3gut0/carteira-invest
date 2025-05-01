// tipo-ativo.dto.ts
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTipoAtivoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nome!: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  descricao?: string;
}

export class UpdateTipoAtivoDto extends PartialType(CreateTipoAtivoDto) {}
