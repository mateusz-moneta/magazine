import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The id of the product' })
  readonly id: string;
}