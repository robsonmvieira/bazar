export type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  
}

export class Product {
  private constructor(private props: ProductProps) {
    if (props) {
      Object.assign(this, props);
    }
  }


  static create(props: ProductProps): Product {
    return new Product(props);
  }

  toJSON(): Object {
    return JSON.stringify(this.props);
  }

  getId(): string {
    return this.props.id;
  }

  getName(): string {
    return this.props.name;
  }
   getDescription(): string {
    return this.props.description;
   }

  getPrice(): number {
    return this.props.price;
  }


}