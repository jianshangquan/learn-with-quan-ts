import { DrivableVehicle } from "./interfaces/vehicle";


export class Car implements DrivableVehicle {
    private wheel?: number;
    drive(): void {
        console.log("Car is driving.");
    }
}


export class ToyotaCar extends Car {
    drive(): void {
        console.log("Toyota Car is driving with toyota engine")
    }
}
export class TeslaCar extends Car {

    selfDrive(): void {

    }

    drive(): void {
        console.log("Tesla Car is driving with electric engine")
    }
}