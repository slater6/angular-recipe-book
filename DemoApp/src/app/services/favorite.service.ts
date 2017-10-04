import { Product } from './../products/product.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteService {
    private favorites:Set<Product> = new Set();

    constructor() { }

    addToFavorites(product:Product):void{
        this.favorites.add(product);
    }

    getFavoritesCount():number{
        return this.favorites.size;
    }
}