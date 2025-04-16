function car(){
    return {
        cost:()=>2000
    }
}

function addPrice(car){
    const prePrice = car.cost();
     car.cost = prePrice + 3000;
     return car;
}

let car1 = car();
console.log(car1.cost());
car1 = addPrice(car1);
console.log(car1.cost);