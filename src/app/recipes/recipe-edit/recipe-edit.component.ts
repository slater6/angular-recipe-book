import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private subcription: Subscription;
  constructor(private route: ActivatedRoute, private RecipeService: RecipeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    let isNew = true;

    this.subcription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.recipeIndex = +params['id'];
          this.recipe = this.RecipeService.getRecipe(this.recipeIndex);
          isNew = false;
        } else {
          isNew = true;
          this.recipe = null;
        }
      }
    );
  }

  private initForm(isNew: boolean) {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!isNew) {
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, Validators.required, Validators.pattern("\\d+"))
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group(
      {
        name: [recipeName, Validators.required],
        imagePath: [recipeImageUrl, Validators.required],
        description: [recipeContent, Validators.required],
        ingredients: recipeIngredients
      }
    );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
