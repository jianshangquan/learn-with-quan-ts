import { SummersibleVehicle } from "./interfaces/vehicle";

export class Marineship implements SummersibleVehicle{
    summer(): void{
        console.log("Marineship is summering.");
    };
}
