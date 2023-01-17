import { Product } from "../../domain/entities/product.entity";
import { IProductGateway } from "../../domain/gateways/product.gateway";

export class ListProductsUseCase {
  constructor(private productGateway: IProductGateway) {}

  async execute(): Promise<Product[]> {
    return this.productGateway.findAll();
  }
}