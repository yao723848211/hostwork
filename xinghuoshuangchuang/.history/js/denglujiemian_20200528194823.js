// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        $("#verification").attr("disabled","true");
        $("#verification").css({
            backgroundColor:"#cccccc"
        })
        if (num == 0) {
            clearInterval(sceonds);
            $("#verification").html("获取验证码")
            $("#verification").attr("disabled","false");
            p1.css({
                backgroundColor:'#2d8cf0',
                cursor:'pointer',
                color:'#fff'
            })
        } else if (num > 0 && num < 10) {
            $("#verification").html("0" + num + "&nbsp" + "秒后重试")
        }else if(num >= 10){
            $("#verification").html(num + "&nbsp" + "秒后重试")
        }
    }, 1000)
})