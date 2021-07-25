import { IsNotEmpty } from 'class-validator';

export class CreateOilDto {
    @IsNotEmpty()
    name: string;
}
