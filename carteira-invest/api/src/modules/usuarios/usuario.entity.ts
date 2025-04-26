import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USUARIO')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NOME', length: 100 })
  nome: string;

  @Column({ name: 'EMAIL', length: 150, unique: true })
  email: string;

  @Column({ name: 'HASH_SENHA', length: 256 })
  hashSenha: string;

  @CreateDateColumn({ name: 'DATA_CRIACAO' })
  dataCriacao: Date;
}