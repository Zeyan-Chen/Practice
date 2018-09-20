function getData() {
    // 成功的話傳 result，失敗的話傳 reject
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open(
            'get',
            'https://training.pada-x.com/resources/javascript-es6-react/data.out'
        );
        req.onload = function() {
            // 將連線取得的資料 this.responseText 串流到主程式上
            resolve(this.responseText);
        };
        req.onerror = function() {
            // 連線失敗的話觸發
            reject('Error');
        };
        req.send();
    });
}

// 這是主流程，取得資料後，回傳 promise 物件，then 繼續接續
let dataPromise = getData(); // 從網路取的資料，回傳 promise 物件
dataPromise.then(
    function(result) {
        console.log(result); // 用 then 函式如果成功就印出
        result;
    },
    function(error) {
        console.log(error);
    }
);

// function a1(params) {
//     console.log(123);
// }

// function a2(params) {
//     console.log(456);
// }

// a1().then(function(params) {
//     a2();
// });
