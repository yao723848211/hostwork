var apply1 = document.getElementsByClassName("apply");
console.log(apply1)
var btn = document.getElementsByClassName("btn");
var apply2 = document.getElementsByClassName("apply1");

apply1[0].onclick = function() {
    if (localStorage.a) {
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E6%88%91%E8%A6%81%E6%8A%A5%E5%90%8D.html"

    } else {
        alert("登录")
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E7%99%BB%E5%BD%95.html"

    }
}
apply2[0].onclick = function() {
    if (localStorage.a) {
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E6%8A%A5%E5%90%8D%E9%A1%BB%E7%9F%A5.html"

    } else {
        alert("登录")
        window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E7%99%BB%E5%BD%95.html"

    }
}
if (localStorage.a) {
    $("#lii").hide();
    $("#liii").show();
}