// example: create-ativo.dto.ts
import { IsString, IsNotEmpty, IsOptional, Length, IsNumber } from 'class-validator';

export class CreateAtivoDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  nome: string;

  @IsNumber()
  tipoAtivoId: number;

  @IsOptional()
  @IsString()
  @Length(0, 50)
  mercado?: string;
}
