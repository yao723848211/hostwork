var wyBM = document.getElementsByClassName("wyBM");
console.log(wyBM)
var btn = document.getElementsByClassName("btn");
var bmX = document.getElementsByClassName("bmX");

wyBM[0].onclick = function() {
    if (localStorage.denglu) {
        window.location.href = "首页.html"

    } else {
        alert("登录")
        window.location.href = "登录界面.html"

    }
}
bmX[0].onclick = function() {
    if (localStorage.a) {
        window.location.href = "首页.html"

    } else {
        alert("登录")
        window.location.href = "登录界面.html"
        window.location.href = ""

    }
}
