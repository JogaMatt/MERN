// 1. DEFINE A CLASS
class Vehicle{
    // MEMBER VARIABLES
    // CONSTRUCTOR
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }
    // OTHER METHODS
    test(){
        console.log("TEST METHOD");
    }
    
    drive(distance){
        this.miles += distance;
    }
    odometer(){
        console.log("TOTAL MILEAGE: " + this.miles);
    }

    carInfo = () => {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.color);
    }
}

// 2. INSTANTIATE AN OBJECT
const myCar = new Vehicle("Hyundai", "Santa Fe", "red");
myCar.drive(20);
myCar.drive(20);
myCar.drive(20);
myCar.odometer();
myCar.carInfo();

// ~~~~~EXTENDING A CLASS~~~~~

class M5 extends Vehicle{
    // MEMBER VARIABLES
    // CONSTRUCTORS
    constructor(manufacturer, model, color, superBoost){
        super(manufacturer, model, color);
        this.superBoost = superBoost;
    }

    // METHODS
}

const myNewCar = new M5("BMW", "M5", "white", 200)
myNewCar.drive(400);
myNewCar.drive(400);
myNewCar.drive(400);
myNewCar.odometer();