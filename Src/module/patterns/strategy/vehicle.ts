import { DriveStrategy } from "../../../interface/strategy/drive.strategy";

export class Vehicle {
    driveStrategy:  DriveStrategy;
     //this is know as constructor injection 
    constructor(driveStrategy: DriveStrategy){
          this.driveStrategy = driveStrategy
    }

    drive(){
        this.driveStrategy.drive()
    }

}