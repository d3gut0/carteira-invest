import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cotacao } from "./cotacao.entity";
import { CreateCotacaoDto } from "./dtos/create-cotacoes.dto";
import { UpdateCotacaoDto } from "./dtos/update-cotacoes.dto";

// cotacoes.service.ts
// src/modules/cotacoes/cotacoes.service.ts
@Injectable()
export class CotacoesService {
  constructor(
    @InjectRepository(Cotacao)
    private readonly repo: Repository<Cotacao>,
  ) {}

  async create(dto: CreateCotacaoDto): Promise<Cotacao> {
    const { ativoId, ...rest } = dto;

    // cria a entidade já com o FK resolvido
    const cotacao = this.repo.create({
      ...rest,
      ativo: { id: ativoId } as any,   // referencia rasa – não precisa buscar o Ativo primeiro
    });

    return this.repo.save(cotacao);
  }

  findAll() {
    return this.repo.find({ relations: ['ativo'] }); // 👈 nome que existe na entidade
  }

  findOne(id: number) {
    return this.repo.findOneOrFail({ where: { id }, relations: ['ativo'] });
  }

  async update(id: number, dto: UpdateCotacaoDto) {
    const { ativoId, ...rest } = dto;

    await this.repo.update(
      id,
      ativoId ? { ...rest, ativo: { id: ativoId } as any } : rest,
    );

    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
