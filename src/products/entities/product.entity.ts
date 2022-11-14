import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Product extends Document {
  @ApiProperty({ description: 'The id of the product' })
  readonly id: string;

  @ApiProperty({ description: 'The name of the product' })
  readonly name: string;

  @ApiProperty({ description: 'The price of the product' })
  readonly price: string;

  @ApiProperty({ description: 'The update date of the product' })
  readonly updateDate: string;
}