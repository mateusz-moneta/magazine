import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto } from '../../dto';
import { Product } from '../../entities';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create({
      id: '22e',
      ...createProductDto
    });
  }

  async find(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id).exec();
  }
}


