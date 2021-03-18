import { Categories } from "./categorie.interface";

export class Product {
    constructor(
        public  id: number,
        public name: string,
        public kind: number,
        public price: number,
        public stock: number,
        public ean: string,
        public categories: Categories
    ){}
}