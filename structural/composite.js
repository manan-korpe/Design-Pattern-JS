//composite objects into tree structures to represent part-whole hierarchies

class File{
    constructor(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }
}

class Folder{
    constructor(name){
        this.name = name;
        this.children = [];
    }

    add(item){
        this.children.push(item);
    }

    display(){
        console.log(this.name);

        this.children.forEach((val)=>{
            val.display();
        });
    }
}

const f1 = new File("ancd.tex");
const f2 = new File("f2.text");

const folder1 = new Folder("first folder>>>");
const folder2 = new Folder("inner folder>>>");

folder1.add(f1);
folder1.add(f2);
folder1.add(folder2);
folder1.display();