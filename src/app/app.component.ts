import { Component } from '@angular/core';
import { HeaderComponent} from './header.component';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class AppComponent {
  title = 'Yo app works!';
}
