import { Injectable } from '@nestjs/common';
import { Plant } from './plant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult, Repository } from  'typeorm'

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(Plant)
        private plantRepository: Repository<Plant>,
    ) {}
    async  findAll(): Promise<Plant[]> {
        return await this.plantRepository.find();
    }

    async  create(plant: Plant): Promise<Plant> {
        return await this.plantRepository.save(plant);
    }

    async update(plant: Plant): Promise<UpdateResult> {
        return await this.plantRepository.update(plant.id, plant);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.plantRepository.delete(id);
    }
}
