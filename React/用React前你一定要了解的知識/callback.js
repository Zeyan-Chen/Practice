// 非同步
function getData(callback) {
    let req = new XMLHttpRequest();
    req.open(
        'get',
        'https://training.pada-x.com/resources/javascript-es6-react/data.out'
    );
    req.onload = function() {
        callback(this.responseText);
    };
    req.send();
}

// 錯誤的作法
// let result = getData(); // 如果這樣取值的話裡面第一次取值會 undefined 然後接下來過幾秒就會出現資料，因為外面的 alert 先執行所以這時候我們就要用到 "回呼"
// alert(result);

// 正確的用法
getData(function(result) {
    // 想像把這個 function 傳遞到 callback 這樣就可以把 onload 裡面得資料回傳回來
    console.log(result);
});
