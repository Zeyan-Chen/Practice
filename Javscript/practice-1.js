// 各種 document ready 寫法，這主要是要防止資料外洩，專業術語叫做 Scope 區塊
// jQuery
// $(function(){ });

// es6 
// {}

// var person = {
//     "name": 'leo',
//     "age": 24,
//     "sex": 'male',
//     "sayHi": function()
//     {
//         console.log("hi");
//     },
// }

// javscript 因為他是匿名函式，所以沒人可以呼叫他，只有一開始載入網站才用得到
(function(){

    // var person = {
    //     "name": 'leo',
    //     "age": 24,
    //     "sex": 'male',
    //     "sayHi": function()
    //     {
    //         alert("hi")
    //     }
    // }

    // person.sayHi();

    // select
    // document.querySelectorAll('div[class=text]'); 選取 class 為 text 的所有元素
    document.querySelector("#container").innerHTML
    document.querySelector("#container").innerHTML = '點我'

    // event
    // document.querySelector('#container').addEventListener('click', function(){
    //     document.querySelector("#container").innerHTML = '嘿！'
    // });

    // var, let, const 差別
    // var 比較限制比較寬
    // let 比較嚴謹，支援比較新版本 es6
    // const 不可修改的變數，支援比較新版本 es6
    let container = document.querySelector("#container");
    let clickHandler = function (){
        alert('改了啦')
        container.innerHTML = '嘿！'
    } 
    container.addEventListener('click', clickHandler);

    // javascript 有程式提昇的概念，如果你在 addEventListener 之後才宣告 var 他錯誤會告訴你 undefined 這意思是說 “你有宣告這變數，但是位置是錯的”
    // var container = document.querySelector("#container");
    // 如果是 let 比較嚴謹，如果沒在之前宣告的話，他會直接跟你說 defined
    // let container = document.querySelector("#container");

    let person = {
        "name": 'leo',
        "age": 24,
        "sex": 'male',
        "sayHi": function()
        {
            alert("hi")
        }
    }

    
    // let newPerson = person;
    // 複製 JSON 物件，但又不修改到原物件
    // javscript 版本
    // let newPerson = JSON.parse(JSON.stringify(person));
    // jQuery 版本
    let newPerson = $.extend(true, {}, person);
    // let newPerson = Object.assign()
    newPerson.name = 'xxx';
    console.log(person);
    console.log(newPerson);
    console.log(person === newPerson);


    

       



})()

