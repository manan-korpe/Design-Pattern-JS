class Engine{
    start(){
        console.log("we have started engine");
    }
}

class Lights{
    turnOn(){
        console.log("we have turn one the lights");
    }
}

class Car{
    constructor(){
        this.engin = new Engine();
        this.light = new Lights();
    }

    startCar(){
        this.engin.start();
        this.light.turnOn();
    }
}

const carinst = new Car();
carinst.startCar();