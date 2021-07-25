import {Body, Injectable} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import {PrismaService} from "../prisma/prisma.service";
import {Car} from "./entities/car.entity";
import {UpdateOilDto} from "../oils/dto/update-oil.dto";

@Injectable()
export class CarsService {
  constructor(
      private readonly prismaService: PrismaService,
  ) {}

  create(@Body() createCarDto: CreateCarDto) {
    return this.prismaService.car.create({data: createCarDto});
  }

  findAll(): Promise<Car[]> {
    return this.prismaService.car.findMany();
  }

  async findOne(id: number) {
    const car = await this.prismaService.car.findFirst({where: {id: id}})
    // TODO: add scenario when car is not found
    console.log("car: ", car);
    if (!car)
      return "No such car";
    return car;
  }

  async update(id: number, updateCarDto: UpdateOilDto) {
    // TODO: add scenario when car is not found
    const car = await this.prismaService.car.update({
      where: { id: id },
      data: updateCarDto,
    });
    if (!car)
      return "No such car";
    return car;
  }

  remove(id: number) {
    // TODO: add scenario when car is not found
    return this.prismaService.car.delete({ where: { id: id }})
  }
}
