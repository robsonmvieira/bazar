import "reflect-metadata"
import {Container} from 'inversify';
import { ListProductsUseCase } from '../application/products/list-products.use-case';
import { ProductHttpGateway, ProductGraphQlGateway } from './gateways/products';
import { client } from './http/apollo';
import { server } from './http/server';

const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),
  ApolloAdapter: Symbol.for('ApolloAdapter'),
  ProductHttpGateway: Symbol.for('ProductHttpGateway'),
  ProductGraphQlGateway: Symbol.for('ProductGraphQlGateway'),
  ListProductsUseCase: Symbol.for('ListProductsUseCase'),
}
export const container = new Container()

container.bind(Registry.AxiosAdapter).toConstantValue(server)
container.bind(Registry.ApolloAdapter).toConstantValue(client)

container.bind(Registry.ProductHttpGateway).toDynamicValue((context) => {
  return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ProductHttpGateway).toDynamicValue((context) => {
  return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container.bind(Registry.ProductGraphQlGateway).toDynamicValue((context) => {
  return new ProductGraphQlGateway(context.container.get(Registry.ApolloAdapter))
})

container.bind(Registry.ListProductsUseCase).toDynamicValue((context) => {
  return new ListProductsUseCase(context.container.get(Registry.ProductHttpGateway))
})