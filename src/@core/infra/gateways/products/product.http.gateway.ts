import { AxiosInstance } from "axios";
import { Product } from "../../../domain/entities/product.entity";
import { IProductGateway } from "../../../domain/gateways/product.gateway";

export class ProductHttpGateway implements IProductGateway {
  constructor(public http: AxiosInstance) {}
  async findAll(): Promise<Product[]> {
    const response = await this.http.get('/products')
    return response.data
  }
  async  findById(id: string): Promise<Product> {
    const response = await this.http.get(`/products/${id}`)
    return response.data
  }

}