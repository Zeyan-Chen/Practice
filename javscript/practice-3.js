// let circle = {
    
//     test: 1,
//     test1: 2,
//     test2: function () {
//         console.log('success')
//     }
// }

// function createCircle(radius) {
//     return {
//         radius: radius,
//         location: {
//             x: 1,
//             y: 1
//         },
//     };
// }
// let circle = createCircle(1);
// console.log(circle)

// constructor function this
// function Circle(radius) {
//     console.log(this)
//     this.radius = radius
// }

// 比較 this 的不同
// const another = Circle(1)
// const another = new Circle(1)

// function MyFunction(name, profession) {
//     console.log(`I'm ${name} and I'm a ${profession}`);
// }
// let MyFun = MyFunction('zeyan', 'front_end engineer');
// function callFn(name, profession) {
//     MyFunction.call(this, name, profession) 
// }
// call function 來用
// callFn('leo', '小狒狒')

// let obj = { value: 10 };

// function create(obj) {
//     obj.value++
// }

// create(obj)
// console.log(obj)



// function Circle(radius) {
//     // console.log(this)
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }
const circle = new Circle(10)
circle.location = { x: 1 }
circle['location']['x'] = 2

// 刪除 function 裡物件
delete circle['location'];
for(let key in circle) {
    // 如果 key 裡沒有 function 屬性的話
    if(typeof circle[key] !== 'function')
        console.log(circle[key])
}
const keys = Object.keys(circle);
console.log(key)





function Circle(radius) {
    // console.log(this)
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 }
    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw')
    }
}
