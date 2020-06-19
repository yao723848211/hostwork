// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        $("#verification").attr("disabled","true")
        if (num == 0) {
            clearInterval(sceonds);
        } else if (num > 0 && num < 10) {
            $("#verification").html("0" + num + "&nbsp" + "秒后重试")
        }else if(num > 10){
            $("#verification").html(num + "&nbsp" + "秒后重试")
        }
    }, 1000)
})