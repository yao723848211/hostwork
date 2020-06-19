// console.log(111)
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/footerInfo/list",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    success: function (res) {
        console.log(res)
    },
    error: function (err) {
        console.log(err)
    }
})
})