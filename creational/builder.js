class Car{
    #name
    constructor(type){
        this.type = type;
    }

    customerDetails(name, city, age){
        this.#name = name;
        this.city = city;
        this.age = age;
        return this
    }

    paymentDetails(amount,mode){
        this.amount = amount;
        this.paymentMode = mode;
        return this;
    }
}

const cust1 = new Car("toyota")
    .customerDetails("acb", "Ahmedabad", 23)
    .paymentDetails(260000,"cheque");

const cust2 = new Car("toyota")
    .paymentDetails(360000,"cash")
    .customerDetails("xyz", "Mumbai", 30);

console.log(cust1);
console.log(cust2);