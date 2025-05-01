import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ativo } from './ativo.entity';
import { CreateAtivoDto } from './dtos/create-ativo.dto';
import { UpdateAtivoDto } from './dtos/update-ativo.dto';

@Injectable()
export class AtivosService {
  constructor(
    @InjectRepository(Ativo)
    private ativoRepo: Repository<Ativo>,
  ) {}

  async create(dto: CreateAtivoDto): Promise<Ativo> {
    const ativo = this.ativoRepo.create(dto);
    return this.ativoRepo.save(ativo);
  }

  async findAll(): Promise<Ativo[]> {
    return this.ativoRepo.find({ relations: ['tipoAtivo'] });
  }

  async findOne(id: number): Promise<Ativo> {
    return this.ativoRepo.findOneOrFail({
      where: { id },
      relations: ['tipoAtivo'],
    });
  }

  async update(id: number, dto: UpdateAtivoDto): Promise<Ativo> {
    await this.ativoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ativoRepo.delete(id);
  }
}