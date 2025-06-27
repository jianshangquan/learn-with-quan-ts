// 
// Object Orieted Programming
//    Java, C# (pure)
// 
//   1. Inheritance
//   2. Encapsulation
//   3. Abstraction
//   4. Polymorphism
//
//
// Functional Oriented Programming
//    Virtual basic (VBA), QuanLang
//    
// Hybrid => javascript, typescript, python, dart, golang, C++, Swift, Rust, Kotlin
// 

import { TeslaCar, ToyotaCar } from "./vehicle/car";
import { FlyingCar } from "./vehicle/flying-car";
import { Hovercraft } from "./vehicle/hovercraft";
import { DrivableVehicle, SummersibleVehicle } from "./vehicle/interfaces/vehicle";
import { Marineship } from "./vehicle/marine-ship";

// java, C#
// class GoldCalculator{
//     public void add(){
// 
//     }
// }








var tesla: DrivableVehicle = new TeslaCar();
var dVehicle: DrivableVehicle[] = [ new TeslaCar(), new ToyotaCar(), new FlyingCar() ]

for(let i = 0; i < dVehicle.length; i++){
    dVehicle[i].drive();
}



var sVehicles: SummersibleVehicle [] = [ new  Marineship() ]

for (let i = 0; i < sVehicles.length; i++){
    sVehicles[i].summer();
}

var hVechicles: Hovercraft[] = [new Hovercraft()]


