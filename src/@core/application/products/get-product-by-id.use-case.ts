import { Product } from "../../domain/entities/product.entity";
import { IProductGateway } from "../../domain/gateways/product.gateway";

export class GetProductByIdUseCase {
  constructor(private productGateway: IProductGateway) {}

  async execute(id: string): Promise<Product> {
    if (!id) {
      throw new Error('Product id is required');
    }

    const response = await this.productGateway.findById(id)
    return response
  }
}