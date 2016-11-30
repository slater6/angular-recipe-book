import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {Recipe}from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	private subscription: Subscription;
	private recipeIndex: number;
	selectedRecipe: Recipe;

	constructor(private shoppingListService: ShoppingListService,
		private route: ActivatedRoute,
		private recipeService: RecipeService
	) { }

	ngOnInit() {
		this.subscription = this.route.params.subscribe(
			(params: any) => {
				this.recipeIndex = params['id'];
				this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
			}
		);
	}

	onAddToShoppingList() {
		this.shoppingListService.addItems(this.selectedRecipe.ingredients);
	}


	onDestroy() {
		this.subscription.unsubscribe();
	}

}
