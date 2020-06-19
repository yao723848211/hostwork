// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        if (num == 0){
            clearInterval(sceonds);
        }else if (num >0 && num <10){

        }
}, 1000)
})