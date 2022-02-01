import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from '../../plants/plant.entity';
import { PlantSeedService } from './plants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  providers: [PlantSeedService],
  exports: [PlantSeedService],
})
export class PlantSeedModule {}
