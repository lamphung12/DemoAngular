export class Customer{
  id: number;
  name: string;
  address: string;
  city : string;
  state : string;
  country : string;

  constructor(id: number, name: string, address: string, city: string, state: string, country: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
