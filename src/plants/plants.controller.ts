import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Plant } from './plant.entity';
import { PlantsService } from './plants.service';


@Crud({
    model: {
      type: Plant
    }
  })
@Controller('plants')
export class PlantsController {
    constructor(public plantsService: PlantsService){}

    @Get()
    index(): Promise<Plant[]> {
      return this.plantsService.findAll();
    }  
    @Post('create')
    async create(@Body() plantData: Plant): Promise<any> {
      return this.plantsService.create(plantData);
    }  
    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Plant): Promise<any> {
        contactData.id = Number(id);
        return this.plantsService.update(contactData);
    } 
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.plantsService.delete(id);
    } 
}
