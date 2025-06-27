import { DrivableVehicle, ShippableVehicle } from "./interfaces/vehicle";


export class Hovercraft implements ShippableVehicle, DrivableVehicle{
    ship(): void{
        console.log("Hovercraft is shipping.");
    };

    drive(): void{
        console.log("Hovercraft is driving.");
    };
}