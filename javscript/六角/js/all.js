/* ===== 課程1 */
// var cookiePrice = 35;
// var Packet = 40;
// var cookieLen = 5;

// document.getElementById('price').textContent = cookiePrice;
// document.getElementById('myPacket').textContent = Packet;
// document.getElementById('leave').textContent = Packet - cookiePrice;
// document.getElementById('howMany').textContent = cookieLen;
// document.getElementById('total').textContent = cookiePrice * cookieLen;

/* ===== 課程2 */
// document.getElementById('calculate').onclick = function (params) {
//   var hamPrice = 50;
//   var cokePrice = 20;
//   var hamNum = parseInt(document.getElementById('hamNum').value) * hamPrice;
//   var cokeNum = parseInt(document.getElementById('cokeNum').value) * cokePrice;

//   document.getElementById('total').value = hamNum + cokeNum;
// }

// function getHamPrice(num) {
//   var hamPrice = 50;
//   var total = hamPrice * num;
//   return total;
// }

// var leo = getHamPrice(50);
// var john = getHamPrice(20);
// console.log(leo, john);

/* ===== 課程3 Array, Object */
// var cornField = [];
// cornField.push(1);
// cornField.push(2);
// cornField.push(3);
// console.log(cornField, cornField.length);

// 有一個農場主人叫 Leo
// var farm = {
//   farmer: 'Leo',
//   dogs: ['詹姆士', '安安'],
//   chick: 15,
//   duck: 3,
//   goDinner: function (params) {
//     console.log(farm.farmer + "吃飯囉！")
//   },
//   Total: function (params) {
//     var num = farm.chick + farm.duck;
//     console.log('我家寵物' + num)
//   }
// };

// 一個農場有兩個主人
// var farms = [
//   {
//     farmer: '卡斯伯',
//     dog: ['皮卡丘', '大甲'],
//   },
//   {
//     farmer: 'Leo',
//     dog: ['皮皮', '鬼斯通'],
//   }
// ];
// console.log(farms[0].farmer)
// farms.push({ farmer: '小蘭' });
// console.log(farms)
// console.log(farms[1].dog[0]); // 農場第2個主人的狗
// farm.chicken = 100; // 物件新增
// farm.dogs.push(87); // 物件裡陣列新增
// console.log(farm);
// console.log('我家的狗叫' + farm.dogs[1]);
// farm.goDinner();
// farm.Total();

/* ===== 課程4 if else */
// var myMonth = 5;
// var thisMonth = 9;
// var birthDayCheck = myMonth == thisMonth;
// document.querySelector('#birthdayId').innerHTML = birthDayCheck;

// var nowPeople = 1;
// var totalPeople = 5;
// var peopleCheck = nowPeople !== totalPeople;
// document.querySelector('#peopleId').innerHTML = peopleCheck;

// switch 效能會比 if else 好
// var key = 88;
// switch (key) {
//   case 87:
//     alert('靠北你是北七逆');
//     break;

//   default:
//     alert('安安');
//     break;
// }

/* ===== 迴圈 */
// var farms = [
//   {
//     farmer: '卡斯伯',
//     dog: ['六尾', '大甲'],
//     ball: 2,
//   },
//   {
//     farmer: 'Leo',
//     dog: ['皮皮', '鬼斯通', '皮卡秋'],
//     ball: 2,
//   },
//   {
//     farmer: '棘皮',
//     dog: ['傑尼龜', '獨角蟲', '小火龍'],
//     ball: 6,
//   },
//   {
//     farmer: '胖子',
//     dog: ['綠毛蟲', '烈空熊', '北七', '垃圾', '口臭億'],
//     ball: 3,
//   }
// ];

// 球不夠的訓練家
// var noEnoughPlayer = [];

// for (let i = 0; i < farms.length; i++) {
//   if (farms[i].ball < farms[i].dog.length) {
//     noEnoughPlayer.push({ farmer: farms[i].farmer, ball: Math.abs(farms[i].dog.length - farms[i].ball) })
//   }
// }

// 
// var pokemonGo = {};
// pokemonGo['神奇寶貝'] = noEnoughPlayer;


// 火箭隊把所有的玩家的怪抓走了
// var rocket = [];
// for (let i = 0; i < farms.length; i++) {
//   for (let z = 0; z < farms[i].dog.length; z++) {
//     rocket.push(farms[i].dog[z])
//   }
// }
// console.log(rocket)

// 找出全部農場主人，灌入陣列
// var masterF = [];
// for (let i = 0; i < farms.length; i++) {
//   masterF.push(farms[i].farmer);
// }
// console.log(masterF);

// 九九乘法
// var multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var multiplicand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var nineNine = {};

// 外面跑一次 = 裡面都跑完了
// for (let i = 0; i <= multiplier.length - 1; i++) {
//   for (let y = 0; y <= multiplicand.length - 1; y++) {
//     nineNine[multiplier[i] + '*' + multiplicand[y]] = multiplier[i] * multiplicand[y];
//   }
// }
// console.log(nineNine)

// 全部數字加總
// var nums = [1, 2, 7];
// var total = 0;
// for (let i = 0; i < nums.length; i++) {
//   total += nums[i]
// }
// console.log(total)

// 儲存訓練家名字
// let inputSelector = document.querySelectorAll('input');
// let pokemonPlayer = [];
// document.querySelector('#send').addEventListener('click', getPokemonPlayerData)
// function getPokemonPlayerData(params) {
//   let pokemonPlayerData = []; 
//   let pokemonData = {}; // 用來儲存資料
//   for (let i = 0; i < inputSelector.length; i++) {
//     pokemonPlayerData.push(inputSelector[i].id);
//     pokemonData[pokemonPlayerData[i]] = inputSelector[i].value;
//   }
//   pokemonPlayer.push(pokemonData);
//   console.log(pokemonPlayer)
// }

// for (let index = 0; index < array.length; index++) {
//   if (condition) {

//   }
//   break;
// }

var movies = [
  {
    name: "寶貝老闆",
    type: "喜劇"
  },
  {
    name: "目擊者",
    type: "驚悚"
  },
  {
    name: "玩命關頭8",
    type: "動作"
  },
  {
    name: "玩命關頭8",
    type: "動作"
  },
  {
    name: "玩命關頭8",
    type: "動作"
  }
];

// var total = 0;
// for (let i = 0; i < movies.length; i++) {
//   if (movies[i].type == '動作') {
//     total++;
//   }
// }

/* ===== DOM */
// var el = document.querySelector('.zeyan');
// var el = document.querySelectorAll('.zeyan');  // 輸出是一個陣列
// var insideA = document.querySelector('.zeyan a');

// // for (let i = 0; i < el.length; i++) {
// //   el[i].textContent = i + '-' + '123';
// // }
// // el[1].setAttribute('class', 'zeyan1') // 加入一個 class 叫 zeyan1
// insideA.setAttribute('href', 'https://www.google.com.tw/')

// var link = 'https://www.google.com.tw/';
// var name = '查理';
// // 所有 .zeyan 的 class 裡面都塞 a
// for (let i = 0; i < el.length; i++) {
//   el[i].innerHTML = `<a href="${link}" target="_blank">${name}</a>`
// }

// // 動態新增 li
// let el = document.querySelector('.list');
// let name = '';
// for (let i = 0; i < movies.length; i++) {
//   let content = `<li>${movies[i].name}</li>`;
//   name += content;
// }
// el.innerHTML = name;

// 利用 createElement 方式
let el = document.querySelector('.list');
for (let i = 0; i < movies.length; i++) {
  let str = document.createElement('li');
  el.appendChild(str); 
}

let elLi = document.querySelectorAll('.list li');
for (let i = 0; i < movies.length; i++) {
  let str = document.createElement('a');
  str.setAttribute('href', 'www.youtube.com'); // 加屬性
  str.textContent = movies[i].name; // 加內容
  console.log(i)
  elLi[i].appendChild(str);
}
console.log(document.querySelectorAll('.list li a')[0].getAttribute('href')) // 抓屬性


/* ==== 冒泡事件 */
var elBody = document.querySelector('.body');
elBody.addEventListener('click', function (params) {
  alert('body')
}, false); // 如果是 false 就是由內元素往外找，true 相反，預設 false

var elBtn = document.querySelector('button');
elBtn.addEventListener('click', function (params) {
  alert('Btn')
}, false) // 如果是 false 就是由內元素往外找，true 相反，預設 false


