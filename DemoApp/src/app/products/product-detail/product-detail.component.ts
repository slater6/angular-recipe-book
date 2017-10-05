import { ProductService } from './../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from './../../services/favorite.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product:Product;

  constructor(private productService: ProductService, private favoriteService:FavoriteService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id:number = + this.route.snapshot.params['id'];
    if(id){
      this.productService.getProductById(id).subscribe(data => this.product = data);
    }
    
  }

  addToFavorites(product:Product){
    this.favoriteService.addToFavorites(product);
  }

}
