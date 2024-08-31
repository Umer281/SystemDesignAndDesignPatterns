import { BasePizza } from "./basePizza";

export class PizzaDecorator {
     pizza: BasePizza


     constructor(pizza) {
        this.pizza = pizza;
     }

     getDescription() {
        return this.pizza.getDescription();
     }

     getCost() {
        return this.pizza.getCost();
     }
}