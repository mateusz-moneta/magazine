import { Controller, Get, Post } from "@nestjs/common";

@Controller('products')
export class ProductsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
