import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import {Car} from "./entities/car.entity";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<CreateCarDto | undefined> {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return await this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
