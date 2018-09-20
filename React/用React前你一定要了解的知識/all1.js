// 原形鍊
class Car {
    constructor(color) {
        this.color = color;
    }
    run() {
        console.log('我在跑步');
    }
    static showColor() {
        console.log('We support three color green、blue、red'); // 靜態方法是可以直接呼叫的
    }
}

class ElectricCar extends Car {
    constructor(color) {
        super(color);
    }
}

// 直接使用類別名稱直接呼叫
Car.showColor(); // 靜態方法可以直接呼叫
// Car.run(); // 動態方法不行

// 產生新的物件呼叫
let carObj = new Car('blue');
carObj.run();
// carObj.showColor(); // 靜態不可以直接用新的物件呼叫

// 直接加上想要的屬性
let car = new Car('green');
car.name = 'zeyan的瑪莎拉蒂';
console.log(car);
car.cpu = function() {
    console.log('裝上cpu');
};

// let carProto = Object.getPrototypeOf(car);
// console.log(carProto);
// let objProto = Object.getPrototypeOf(carProto);
// console.log(objProto);
// let lastOne = Object.getPrototypeOf(objProto);
// console.log(lastOne);
