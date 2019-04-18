import * as ShoppingActions from './shopping.actions';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
   ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ]
};

export function shoppingReducers(state = initialState, action: ShoppingActions.ShoppingActions){
    switch(action.type){
        case ShoppingActions.ADD_INGREDIENT:
        return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
        }
        default: return state;
    }
}