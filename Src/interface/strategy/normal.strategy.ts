import { DriveStrategy } from "./drive.strategy";

export class NormalStrategy implements DriveStrategy {

    drive(): void {
        console.log("driving normally ")
    }
}