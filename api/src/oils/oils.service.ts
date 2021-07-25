import { Injectable } from '@nestjs/common';
import { CreateOilDto } from './dto/create-oil.dto';
import { UpdateOilDto } from './dto/update-oil.dto';
import {PrismaService} from "../prisma/prisma.service";
import {Oil} from "./entities/oil.entity";

@Injectable()
export class OilsService {
  constructor(
      private readonly prismaService: PrismaService,
  ) {}

  create(createOilDto: CreateOilDto) {
    return this.prismaService.oil.create({data: createOilDto});
  }

  findAll(): Promise<Oil[]>{
    return this.prismaService.oil.findMany();
  }

  findOne(id: number) {
    const oil = this.prismaService.oil.findFirst({where: {id: id}})
    // TODO: add scenario when oil is not found
    return oil;
  }

  async update(id: number, updateOilDto: UpdateOilDto) {
    const oil = await this.prismaService.oil.update({
      where: { id: id },
      data: updateOilDto,
    })
    // TODO: add scenario when oil is not found
    return oil;
  }

  remove(id: number) {
    // TODO: add scenario when oil is not found
    return this.prismaService.oil.delete({ where: { id: id }})
  }
}
