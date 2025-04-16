function Car(){
    this.time = Date.now();
}

const singleton = (function(){
    let inst;
    function createInstance(){
        return new Car();
        // return { timestamp:Date.now()}
    }

    return {
        getInstance : function(){
            if(!inst)
                inst = createInstance();
            return inst
        }
    }
})();

const i1 = singleton.getInstance();
const i2 = singleton.getInstance();
const i3 =new Car();
console.log(i1,i2,i3,i1==i2,i1==i3);