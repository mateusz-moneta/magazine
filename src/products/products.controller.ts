import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductDto } from './dto';
import { Product } from './entities';
import { ProductsService } from './services';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create product' })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Product
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
