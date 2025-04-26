import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movimentacao } from '../movimentacoes/movimentacao.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('CARTEIRA')
export class Carteira {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NOME', length: 100 })
  nome: string;

  @Column({ name: 'DESCRICAO', length: 255, nullable: true })
  descricao?: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'USUARIO_ID' })
  usuario: Usuario;

  @CreateDateColumn({ name: 'DATA_CRIACAO' })
  dataCriacao: Date;

  @OneToMany(() => Movimentacao, mov => mov.carteira)
  movimentacoes: Movimentacao[];
}