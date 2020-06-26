// 获取标签
let button = document.querySelector('.button');
let span = button.querySelectorAll('span');
// 循环得到span
for (let i = 0; i < span.length; i++) {
    // 点击事件，点击取消添加active类
    span[i].addEventListener('click', function () {
        // 循环得到span的个数，先把span的类全部清除
        for (let i = 0; i < span.length; i++) {
            // 清除类名
            span[i].className = '';

        }
        //添加类名
        this.className = 'active'
    })

}
