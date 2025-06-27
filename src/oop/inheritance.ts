class Spray {
    sprinkle(): number {
        return 100;
    }

    refillWater(){

    }
}


class WaterJet extends Spray {
    jetlaser() {
        const waterVolume = this.sprinkle();
        return waterVolume * 1000;
    }
}
















class Address{
    street?: string;
    township?: string;
}

class GPSAddress extends Address {
    latitude?: number;
    longitude?: number;
}











class Person{
    id?: string
    name?: string
    age?: number = 10
    major?: string
    grading?: string
}

class Student extends Person{}
class Teacher extends Person{}
class Professor extends Person{}




