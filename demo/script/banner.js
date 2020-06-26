
let n = 0;
// 获取标签外层盒子
let box = document.querySelector('#box')
// let boxLi = document.querySelectorAll('li')
// 获取图片列表
let boxLi = box.getElementsByTagName('li')
// 获取span
let radis = document.querySelector('.radis')
let span = radis.querySelectorAll('span')
console.log(span)
// 定义鼠标悬停
// box.addEventListener('mouseover', function () {

// })
box.onmouseover = function () {
    clearInterval(timer)
}
// 定义鼠标离开继续定时器
box.addEventListener('mouseout', function () {
    timer = setInterval(boxdown, 3000)
})
// 定变时器
let timer = setInterval(boxdown, 3000)
function boxdown() {
    // 递增
    n++;
    if (n == boxLi.length) {
        n = 0;
    }
    // 清除所有显示类型
    for (let i = 0; i < boxLi.length; i++) {
        boxLi[i].className = ''
        span[i].className = ''
    }
    // 显示当前类容
    boxLi[n].className = 'active'
    span[n].className = 'active'
}

