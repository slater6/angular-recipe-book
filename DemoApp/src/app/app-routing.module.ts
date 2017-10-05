// import { LoginComponent } from './common/login.component';
import { AdminComponent } from './common/admin.component';
import { ErrorComponent } from './common/error.component';
import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    // { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }