import { Item } from "./item";

export class Order {
    orderId : number;
    customerId : number;
    dateOfOrder : Date;
    adressOfDelivery : string;
    items : Item;

}
