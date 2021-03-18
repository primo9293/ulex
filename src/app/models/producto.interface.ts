import { Categories } from "./categorie.interface";

export interface Productos {
    id: number,
    name: string,
    kind: number,
    price: number,
    stock: number
    ean: string,
    categories: Categories
}
