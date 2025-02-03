import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto as any);
  }

  findAll() {
    return this.productRepository.findAll();
  }
}
