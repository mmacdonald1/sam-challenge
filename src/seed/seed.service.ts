import { Injectable, Logger } from '@nestjs/common';
import { PlantSeedService } from './plants/plants.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly logger: Logger,
    private readonly plantSeedService: PlantSeedService,
  ) {}

  async seed() {
    await this.plants()
      .then(completed => {
        this.logger.debug('Successfuly completed seeding roles...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding roles...');
        Promise.reject(error);
      });
  }

  async plants() {
    return Promise.all(await this.plantSeedService.create())
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err));
  }
}
