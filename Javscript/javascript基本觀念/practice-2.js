// (function(){


	// function clickHandler(){
	// 	document.querySelector('#container').innerHTML = 'Leo';
	// }
	document.querySelector('#container').addEventListener('click', clickHandler)

	// return      什麼時候要用到return，呼叫我的人我回傳東西給你，看到這兩個只有兩中可能 1: 他要回傳值，2： 他要中斷函式
	function plus(a,b){
		if(a > 5) {
			return false;
		} else {
			return a + b;
		}
	}
	// console.log(plus(6,2))

	// this      看 function 被誰呼叫的對象
	function clickHandler(){
		console.log('this：', this);

		// 如果你包了第二層，this 會跑掉，變到 window，宣告一個 this 可以解決
		let self = this;
		setTimeout( function()  {
			console.log('setTimeout this: ', this)
		}, 0);

		// 解決方法
		setTimeout(() => {
			console.log('setTimeout arrow this: ', this)
		}, 0);

		let obj = {
			myFunction: function(){
				self.innerHTML = 'Leo';	
				console.log('obj this:', this) // 在 object 的話 this 會直接指向 obj function
				console.log('obj this:', self)
			}
		}
		obj.myFunction();

	}

	// 判斷式
	// even 是雙數， odd 單數，記法是 even 是 4 個單字是雙數，反之 odd 是單數
	// var isEvenDay = false
	// var today = 7

	// if(today % 2 == 0) {
	// 	// 雙數
	// 	console.log('eat rice')
	// } else {
	// 	// 單數
	// 	console.log('eat noodle')
	// }

	// 判斷式，縮寫版
	// var eat = today % 2 == 0  ? '水餃':'吃飯'
	// console.log(eat)

	// 迴圈
	// i++、++i 差別，++i 是先加上去
	// for (let i=1; i<=5; i++) {
	// 	console.log(i);
	// }

	// while         如果使用不當很容易遇到無窮迴圈，所以 function 裡一定要設一個條件讓他有辦法停下來
	// let j=1
	// while (j <= 5) {
	// 	console.log(j)
	// 	j++ // ++上去到 5 停下來
	// 	// j = Math.random()
	// }
	
	let weekDay = 7;
	switch (weekDay) {
		case 3:
			console.log('水餃');
			break; // 如果達成條件我就 break 掉，不要再執行下去了
		case 2:
			console.log('牛肉麵');
			break;
		case 1:
			console.log('大滷麵');
			break;
		case 3:
			console.log('香腸飯');
			break;
		default: 
			console.log('noodle');
			break;
	}
	


// })()