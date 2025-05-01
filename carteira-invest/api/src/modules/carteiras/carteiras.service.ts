import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carteira } from './carteira.entity';
import { CreateCarteiraDto } from './dtos/create-carteira.dto';
import { UpdateCarteiraDto } from './dtos/update-carteira.dto';

@Injectable()
export class CarteirasService {
  constructor(
    @InjectRepository(Carteira)
    private CarteiraRepo: Repository<Carteira>,
  ) {}

  async create(dto: CreateCarteiraDto): Promise<Carteira> {
    const Carteira = this.CarteiraRepo.create(dto);
    return this.CarteiraRepo.save(Carteira);
  }

  async findAll(): Promise<Carteira[]> {
    return this.CarteiraRepo.find({ relations: ['tipoCarteira'] });
  }

  async findOne(id: number): Promise<Carteira> {
    return this.CarteiraRepo.findOneOrFail({
      where: { id },
      relations: ['tipoCarteira'],
    });
  }

  async update(id: number, dto: UpdateCarteiraDto): Promise<Carteira> {
    await this.CarteiraRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.CarteiraRepo.delete(id);
  }
}