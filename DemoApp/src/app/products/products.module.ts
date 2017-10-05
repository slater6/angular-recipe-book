import { FavoriteService } from './../services/favorite.service';
import { ProductService } from './../services/product.service';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderBy } from './orderBy.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule
    ],
    exports: [ProductListComponent],
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        OrderBy
    ],
    providers: [ProductService,FavoriteService],
})
export class ProductsModule { }
