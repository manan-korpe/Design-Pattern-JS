//allow incompatible interface to work together

class OldPrinter{
    printMe(text){
        console.log(text)
    }
}

class PrintAdepter{
    constructor(){
        this.oldprinter = new OldPrinter();
    }

    print(text){
        this.oldprinter.printMe(text);
    }
}

const adepter = new PrintAdepter();

adepter.print("hey... how are you ?");

adepter.print(20+20);