import { FlyableVehicle } from "./interfaces/vehicle";

export class Airplane implements FlyableVehicle{
    fly(): void {
        console.log("Airplane is flying.");
    }
}

export class MAIFlight extends Airplane{
    fly(): void {
        console.log("MAI Flight is flying with MAI engine.")
    }
}