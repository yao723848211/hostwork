// console.log(111)
// 发表回复
$(".comments_3_1_span").click(function () {
    // $(".fbhf").show()
    // $(".comments_3").eq(0).find(".fbhf").show();
    // $(".comments_3").eq($(this).index()).find(".fbhf").show();
    $(this).parent().siblings(".fbhf").show();
    $(".fbhf").not($(this).parent().siblings(".fbhf")).hide();
    // $(this).not()
})
console.log(localStorage.courseId)
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/103",
    type: "GET",
    data: null,
    success: function (res) {
        console.log(res)
        $(".h3_1").text(res.data.courseTitle)
        $(".span_1").text(res.data.participationsCount)
        // console.log(res.data.courseDetail)
        $("#course_description").html(res.data.courseDetail)
        var box_1 = document.getElementsByClassName("box_1");
        var box_3 = document.getElementsByClassName("box_3");
        for (let i = 0; i < box_1.length; i++) {
            $(".box_1").find(".box_2")[i].innerHTML = res.data.sections[i].sectionName 
            console.log(res.data.sections[0].subSections)
            // for (let j =0 ;j<box_3.length;j++){
                // console.log(ss)
                // console.log(res.data.sections[0])
                // console.log(res.data.sections[0].subSections[0].sectionName)
                // console.log(box_3[j])
                // box_3[j].innerHTML = res.data.sections[0].subSections[j];
            // }  
        }
        for (let j =0 ;j<box_3.length;j++){
            // console.log(ss)
            // console.log(res.data.sections[0])
            // console.log(res.data.sections[0].subSections[0].sectionName)
            // console.log(box_3[j])
            // box_3[j].innerHTML = res.data.sections[0].subSections[j];
        // }  
    },
    error(err) {
        console.log(err);
    }
})