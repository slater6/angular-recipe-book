import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FavoriteService } from './../../services/favorite.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';
import { Product } from '../product.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string = 'Products';
  
  products$: Observable<Product[]>;
  selectedProduct: Product;

  sorter: string= 'name';

  pageSize:number = 5;
  start:number = 0;
  end: number = this.pageSize;
  
  favoritesMessage:{[k: string]: string} = {'=0': 'No Favorites.', '=1': 'One Favorite.', 'other': '# Favorites.'};

  constructor(
    private productService:ProductService,
    private favoriteService:FavoriteService,
    private router:Router
  ) { 
    
  }

  get favorites(): number{
    return this.favoriteService.getFavoritesCount();
  }

  toggleOrder(item:string):void{
    if(this.sorter.indexOf('-')){
      this.sorter = `-${item}`;
      return;
    }
    
    this.sorter = item;
  }

  onSelect(product:Product): void{
    this.selectedProduct = product;
    this.router.navigate(['products',product.id]);
    
  }

  nextPage(){
    this.start += this.pageSize;
    this.end += this.pageSize;
  }

  previousPage(){
    this.start -= this.pageSize;
    this.end -= this.pageSize;
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
