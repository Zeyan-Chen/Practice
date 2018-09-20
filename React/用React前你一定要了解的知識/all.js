// 父類別
class Car {
    constructor(color) {
        this.color = color;
        this.speed = 0;
        console.log('我是爸爸');
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.color} の 汽車 is Running at ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.color} の 汽車 + stopped`);
    }
}

// 繼承的子類別要記得加上 super
class ElectricCar extends Car {
    constructor(color) {
        super(color); // 把繼承的 color 顏色拿過來
        this.battery = 100;
        console.log('我爸爸先執行，我才會執行');
    }

    run(distance) {
        // 子類別的 (Run) 一樣的函示名稱會把會把父類別的 (Run) 取代掉
        this.battery -= distance;
        console.log(`Car の ${this.color} Run ${this.battery} KM`);
    }
    charge() {
        this.battery = 100;
    }
}

let car1 = new Car('blue');
console.log(car1);

let car2 = new Car('red');
console.log(car2);

let car3 = new ElectricCar('green');
car3.run(10);
