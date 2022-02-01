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
    }); // create an array of values from RoleEnum for available roles

    // return roleData.map(async (currRole: RolesEnum) => {
    //   return this.plantRepository
    //     .findOne({  })
    //     .then(async dbRes => {
    //       if (dbRes) return; // if the role exists, return and don't save role
    //       return this.roleRepository.save({ role: currRole });
    //     })
    //     .catch(err => err);
    // });
  }
}
