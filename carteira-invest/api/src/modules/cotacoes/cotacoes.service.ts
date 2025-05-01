import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cotacao } from './cotacao.entity';
import { CreateCotacaoDto } from './dtos/create-cotacoes.dto';
import { UpdateCotacaoDto } from './dtos/update-cotacoes.dto';

@Injectable()
export class CotacoesService {
  constructor(
    @InjectRepository(Cotacao)
    private CotacaoRepo: Repository<Cotacao>,
  ) {}

  async create(dto: CreateCotacaoDto): Promise<Cotacao> {
    const Cotacao = this.CotacaoRepo.create(dto);
    return this.CotacaoRepo.save(Cotacao);
  }

  async findAll(): Promise<Cotacao[]> {
    return this.CotacaoRepo.find({ relations: ['tipoCotacao'] });
  }

  async findOne(id: number): Promise<Cotacao> {
    return this.CotacaoRepo.findOneOrFail({
      where: { id },
      relations: ['tipoCotacao'],
    });
  }

  async update(id: number, dto: UpdateCotacaoDto): Promise<Cotacao> {
    await this.CotacaoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.CotacaoRepo.delete(id);
  }
}