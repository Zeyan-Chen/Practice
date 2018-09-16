let startX = null;
let moveX = null;
let index = null;
let statusNow = null;

let elSlider = document.querySelector('#slider');
let elSliderUl = document.querySelector('#slider ul');
let elSliderLi = document.querySelectorAll('#slider li');
let elSliderW = elSlider.offsetWidth; // width
let elSliderLiLen = elSliderLi.length; // 總共幾個
let elSliderUlW = elSliderW * elSliderLiLen; // 寬度
let elSliderLiLast = elSliderLi[elSliderLi.length - 1]; // 最後一個 li
// elSliderUl.prepend(elSliderLiLast);

elSlider.addEventListener('touchstart', swipe);
elSlider.addEventListener('touchend', checkStatus);

function swipe(e) {
    statusNow = '';
    let self = this;
    startX = e.targetTouches[0].pageX;
    statusNow = 'click one';
    self.addEventListener(
        'touchmove',
        function(e) {
            moveX = e.targetTouches[0].pageX - startX;
            // console.log('swiped');
            statusNow = 'swiped';
            if (Math.abs(moveX) >= 40) {
                if (moveX > 0) {
                    // console.log('you swipe right');
                    statusNow = 'right';
                    // elSliderUl.style.left = `-${100 * index}%`;
                } else {
                    // console.log('you swipe left');
                    statusNow = 'left';
                    // elSliderUl.style.left = `-${100 * index}%`;
                }
            }
            e.preventDefault();
            e.stopPropagation();
        },
        false
    );
    e.preventDefault();
    e.stopPropagation();
}

function checkStatus() {
    console.log(statusNow);
    if (statusNow == 'left') {
        index++;
        elSliderUl.classList.add('animation');

        setTimeout(function() {
            document
                .querySelector('#slider ul')
                .appendChild(document.querySelectorAll('#slider li')[0]);
            elSliderUl.classList.remove('animation');
            // elSliderUl.style.left = null;
        }, 1000);

        // if (index > elSliderLi.length - 1) {
        //     index = 0;
        // }
    } else if (statusNow == 'right') {
        index--;
        document
            .querySelector('#slider ul')
            .prepend(
                document.querySelectorAll('#slider li')[elSliderLiLen - 1]
            );
        if (index < 0) {
            index = elSliderLi.length - 1;
        }
    }
    // elSliderUl.style.left = `-${100 * index}%`;
}

swipe.prototype = {
    styleTransition: (elSliderUl.style.transition = 'all .4s ease'),
    styleMarginLeft: (elSliderUl.style.marginLeft = -100 + '%'),
    // styleLeft: (elSliderUl.style.left = 0),
    nowStatus: function(params) {
        return statusNow;
    }
};
