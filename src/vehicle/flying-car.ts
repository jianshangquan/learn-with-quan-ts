import { DrivableVehicle, FlyableVehicle } from "./interfaces/vehicle";

export class FlyingCar implements DrivableVehicle, FlyableVehicle{
    drive(): void {
        console.log("Flying Car is driving on the road.");
    }

    fly(): void {
        console.log("Flying Car is flying in the sky.");
    }
}
