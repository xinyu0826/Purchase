$(function () {


    tabs()


    getPage();


    function getPage() {

        $("#pagination3").pagination({
            currentPage: 1,
            totalPage: 5,
            isShow: true,
            count: 5,
            homePageText: "首页",
            endPageText: "尾页",
            prevPageText: "上一页",
            nextPageText: "下一页",
            callback: function (current) {
            }
        });
    }



});

function tabs() {

    $(".nw_tabs>div").click(function () {
        $(this).siblings().removeClass("nw_tabs_in");
        $(this).addClass("nw_tabs_in");

        console.log($(this).attr("sid"))
    });
}