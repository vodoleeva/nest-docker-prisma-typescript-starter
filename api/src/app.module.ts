import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { OilsModule } from './oils/oils.module';
import {CarsService} from "./cars/cars.service";
import {OilsService} from "./oils/oils.service";
import {OilsController} from "./oils/oils.controller";
import {CarsController} from "./cars/cars.controller";

@Module({
  imports: [PrismaModule, CarsModule, OilsModule],
  controllers: [AppController, OilsController, CarsController],
  providers: [AppService, CarsService, OilsService],
})
export class AppModule {}
