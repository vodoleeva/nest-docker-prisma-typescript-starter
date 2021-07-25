import { Module } from '@nestjs/common';
import { OilsService } from './oils.service';
import { OilsController } from './oils.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [OilsController],
  providers: [OilsService]
})
export class OilsModule {}
