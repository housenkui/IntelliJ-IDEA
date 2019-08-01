// function Cat(name,color) {
//     return{
//         name,color
//     }
// }
// let cat1 = Cat("大毛","黄色");
// let cat2 = Cat("二毛","黑色");

// console.log(cat1, cat2);


function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.type = '猫科动物';
Cat.prototype.eat = function () {
    console.log('吃老鼠');
};

let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('er毛', '黑色');


console.log(cat1, cat2);
console.log(
    cat1.eat(),
    cat2.eat(),cat1.type);

console.log('name' in cat1);

for (let prop in cat1){
    console.log(cat1[prop]);
}


function test() {
    this.x = 1;
}

var obj = new test();
console.log(obj.x )  // 1
