export class Product {

    constructor(
        public productId: number,
        public imageUrl: string,
        public title: string,
        public sizes: string,
        public price: number,
        public info?: string
    ) {}

    // productId: number;
    // imageUrl: string;
    // title: string;
    // info: string;
    // sizes: string;
    // price: number;
}
