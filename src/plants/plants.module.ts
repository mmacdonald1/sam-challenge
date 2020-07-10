import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { Plant } from './plant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plant])
  ],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
