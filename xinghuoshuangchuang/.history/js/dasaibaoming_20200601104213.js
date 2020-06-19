var wyBM = document.getElementsByClassName("wyBM");
console.log(wyBM)
var btn = document.getElementsByClassName("btn");
var bmX = document.getElementsByClassName("bmX");

wyBM[0].onclick = function() {
    if (localStorage.denglu) {
        window.location.href = "首页.html"

    } else {
        alert("登录")
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E7%99%BB%E5%BD%95.html"

    }
}
bmX[0].onclick = function() {
    if (localStorage.a) {
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E6%8A%A5%E5%90%8D%E9%A1%BB%E7%9F%A5.html"

    } else {
        alert("登录")
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E7%99%BB%E5%BD%95.html"

    }
}
