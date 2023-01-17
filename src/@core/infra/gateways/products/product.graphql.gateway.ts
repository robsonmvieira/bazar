import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";
import { Product } from "../../../domain/entities/product.entity";
import { IProductGateway } from "../../../domain/gateways/product.gateway";

const GET_PRODUCTS = gql``

export class ProductGraphQlGateway implements IProductGateway {
  constructor(public apollo: ApolloClient<NormalizedCacheObject>) {}
  findById(id: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Product[]> {
    const { data } = await this.apollo.query({query: GET_PRODUCTS})

    return data.products
  }
}