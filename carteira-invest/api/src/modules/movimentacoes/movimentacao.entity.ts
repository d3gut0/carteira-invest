import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ativo } from '../ativos/ativo.entity';
import { Carteira } from '../carteiras/carteira.entity';


@Entity('MOVIMENTACAO')
export class Movimentacao {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @ManyToOne(() => Carteira, carteira => carteira.movimentacoes, { nullable: false })
  @JoinColumn({ name: 'CARTEIRA_ID' })
  carteira: Carteira;

  @ManyToOne(() => Ativo, ativo => ativo.movimentacoes, { nullable: false })
  @JoinColumn({ name: 'ATIVO_ID' })
  ativo: Ativo;

  @Column({
    name: 'TIPO',
    type: 'varchar2',
    length: 10,
  })
  tipo: 'COMPRA' | 'VENDA';

  @Column({
    name: 'QUANTIDADE',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  quantidade: number;

  @Column({
    name: 'PRECO_UNITARIO',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  precoUnitario: number;

  @Column({
    name: 'DATA_MOVIMENTACAO',
    type: 'timestamp',
    default: () => 'SYSTIMESTAMP',
  })
  dataMovimentacao: Date;
}
