// src/modules/cotacoes/dtos/create-cotacao.dto.ts
import { IsDateString, IsInt, IsNumber } from 'class-validator';

export class CreateCotacaoDto {
  @IsInt()
  ativoId: number;

  @IsDateString()
  data: string;            // ISO-8601 (yyyy-MM-dd)

  @IsNumber() precoAbertura: number;
  @IsNumber() precoMaximo:   number;
  @IsNumber() precoMinimo:   number;
  @IsNumber() precoFechamento: number;
  @IsNumber() volume: number;
}

// src/modules/cotacoes/dtos/update-cotacao.dto.ts

