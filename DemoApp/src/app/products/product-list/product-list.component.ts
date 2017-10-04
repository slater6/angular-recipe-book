import { FavoriteService } from './../../services/favorite.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService,FavoriteService]
})
export class ProductListComponent implements OnInit {

  title:string = 'Products';
  products:Product[];
  selectedProduct: Product;

  constructor(
    private productService:ProductService,
    private favoriteService:FavoriteService
  ) { 
   this.products = this.productService.getProducts();
  }

  get favorites(): number{
    return this.favoriteService.getFavoritesCount();
  }

  onSelect(product:Product): void{
    this.selectedProduct = product;
    
  }

  ngOnInit() {
  }

}
