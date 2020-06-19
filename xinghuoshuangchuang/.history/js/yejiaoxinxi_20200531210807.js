// console.log(111)
$.ajax({
    url: "http://yapi.shangyuninfo.com/mock/129/innovation/footerInfo/list",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    success: function (res) {
        console.log(res)
        $("#box_9").text(res.rows[0].copyright)
        $("#box_7").html(res.rows[0].internetContentProvider)
    },
    error: function (err) {
        console.log(err)
    }
})