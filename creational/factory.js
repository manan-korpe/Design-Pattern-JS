function createOBJ(){
    this.createCar = function(name){
        let car;
        if("toyota" == name)  
            car = new Toyota();
        if("SUV" == name)
            car = new Suv();

        car.type = name;
        return car;
    }
}

function Toyota() {
    this.door = 4;
}
function Suv(){
    this.door = 5;
}

const factory =new  createOBJ();
const newCar = factory.createCar("SUV");
console.log(newCar.door);
const newCar2 = factory.createCar("toyota");
console.log(newCar2)