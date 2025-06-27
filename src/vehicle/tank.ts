import { DrivableVehicle } from "./interfaces/vehicle";

export class Tank implements DrivableVehicle {
    private chain?: number;
    drive(): void {
        console.log("Tank is driving.");
    }
}

export class ChinaTank extends Tank {
    drive(): void {
        console.log("China Tank is driving with china engine")
    }
}

