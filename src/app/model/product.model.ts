export class Product
{
    id: number;
    name: string;
    price: number;
    quantity: number;
    selected: boolean;
    available: boolean;

    constructor(id, name, price, quantity, selected,available ) { 
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.selected=selected;
        this.available=available;
    }
}