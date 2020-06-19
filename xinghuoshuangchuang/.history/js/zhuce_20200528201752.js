// console.log(111)
// 验证码倒计时
var num = 59;
var timer = null;
function show() {
    if (num > 0 && num < 10) {
        $("#verification").html("0" + num + "&nbsp" + "秒后重试")
    } else if (num >= 10) {
        $("#verification").html(num + "&nbsp" + "秒后重试")
    } else if (num == 0) {
        clearInterval(timer);
        $("#verification").html("获取验证码")
    }
}
$("#verification").click(function () {
        timer = setInterval(function(){
            num--;
            show();
        },1000);
})