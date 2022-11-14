import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto';
import { Product } from './entities';
import { ProductsService } from './services';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('new')
  @ApiOperation({ summary: 'Create product' })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Product
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Product
  })
  @ApiParam({ name: 'id' })
  find(@Param('id') id: string): Promise<Product> {
    return this.productsService.find(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove product' })
  @ApiResponse({
    status: 200,
    description: 'The remove record',
    type: Product
  })
  @ApiParam({ name: 'id' })
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }
}
