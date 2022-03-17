import { User } from "./user";

export interface Book {
    id: string;
    name: string;
    author: string;
    publication: string;
    publishing_company: string;
    translator: string;
    quantity: number;
    price: number;
    url: string;
    appUser: User;
}
