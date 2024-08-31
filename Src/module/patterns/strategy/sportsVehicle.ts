import { SportsStrategy } from "../../../interface/strategy/sports.strategy";
import { Vehicle } from "./vehicle";

class SportsVehicle extends Vehicle{

    constructor() {
        super(new SportsStrategy())
    }
}



const obj = new SportsVehicle();
obj.drive();