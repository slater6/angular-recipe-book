import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './common/home.component';
import { ErrorComponent } from './common/error.component';
import { ContactComponent } from './common/contact.component';
import { AdminComponent } from './common/admin.component';
import { LoginComponent } from './common/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContactComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
