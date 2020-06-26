function animate(obj, target, callback) {
    // let timer = setInterval一个属性调用就要在内存中开辟空间
    // 改写obj.timer 
    // 避免bug 先清除定时器，避免点击事件点一次调用一次事件，事件多次叠加
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        // 步常值写在定时器里面
        // let step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            // 回调函数
            if (callback) {
                callback()
            }
        }
        //把每次加1这个步长值改为一个慢慢变小的值目标值-现在的位置/10
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 100)
}