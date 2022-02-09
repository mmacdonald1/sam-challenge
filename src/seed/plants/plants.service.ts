import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plant } from '../../plants/plant.entity';
import { initialData } from './initial-plant-data';

@Injectable()
export class PlantSeedService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
  ) {}

  async create(): Promise<any> {
    return initialData.map(async plant => {
      const plantRecord = this.plantRepository.create(plant);
      return this.plantRepository.save(plantRecord).catch(err => {
        throw err;
      });
    });
  }
}
