$(function () {

    //下拉菜单
    mySelect1();
    mySelect2();
    mySelect3();
    mySelect4();

    $(window).click(function (e) {
        windowClick();
    });



});

function windowClick() {
    $(".wgcselectUlOver>ul").removeClass("wgcDisplay");
    $(".wgcselectJianTou").removeClass("wgcImgRotate");
    $(".wgcselectUlOver").addClass("wgcSelectOverNo");

}

function mySelect1() {
    $(".wgcselectBox1").click(function (e) {


        // for(let i = 0; i<$(".wgcselectBox").length;i++){
        //     console.log(i);
        //     if($(".wgcselectBox").eq(i).attr("class")==$(this).attr("class")){
        //         console.log(1);
        //         $(".wgcselectBox").splice(i,1)
        //     }
        // }


        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");


        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {

            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });

}

function mySelect2() {
    $(".wgcselectBox2").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function mySelect3() {
    $(".wgcselectBox3").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}

function mySelect4() {
    $(".wgcselectBox4").click(function (e) {
        stopBubble(e);
        $(this).find(".wgcselectUlOver>ul").toggleClass("wgcDisplay");
        $(this).find(".wgcselectJianTou").toggleClass("wgcImgRotate");
        $(this).find(".wgcselectUlOver").toggleClass("wgcSelectOverNo");
        $(this).find(".wgcselectUlOver>ul>li").unbind('click').click(function (e) {
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").text($(this).text());
            $(this).closest(".wgcselectUlOver").siblings(".wgcselectShow").addClass("wgcselectShowColor");
            console.log($(this).text());//
        });
    });
    windowClick()

}



function stopBubble(e) {//阻止事件冒泡 只触发当前点击的函数
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}