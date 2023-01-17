export type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  
}

export class Product {
  private constructor(private data: ProductProps) {
    if (data) {
      Object.assign(this, data);
    }
  }


  static create(data: ProductProps): Product {
    return new Product(data);
  }

  toJSON(): Object {
    return JSON.stringify(this.data);
  }

  get id(): string {
    return this.data.id;
  }

  get name(): string {
    return this.data.name;
  }
   get description(): string {
    return this.data.description;
   }

  get price(): number {
    return this.data.price;
  }
  


}