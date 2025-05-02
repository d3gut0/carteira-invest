// example: create-Usuario.dto.ts
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @Length(1, 20)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'E-mail inválido' })
  @Length(1, 100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Senha precisa de 6+ caracteres' })
  hashSenha: string;

  
}
