// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var timer1 = function () {
        num--;
        if (num > 0 && num < 10) {
            $("#verification").html("0" + num + "&nbsp" + "秒后重试")
        }else if (num >= 10) {
            $("#verification").html("0" + num + "&nbsp" + "秒后重试")
        }
    }
})