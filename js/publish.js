$(function () {

    var sarr = [];
    $(".publish_sIn").on("click", ".item_select", function () {
        $(this).find(".dot").toggleClass("dot_in");
        var len = $(".publish_sIn").find(".dot").length;

        if ($(this).find(".dot").attr("class").length > 6) {
            sarr.push($(this).parent().index());
        } else {
            for (let i in sarr) {
                if (sarr[i] === $(this).parent().index()) {
                    console.log(i);
                    sarr.splice(i, 1);
                }
            }
        }
        console.log("选中", sarr.sort());

    });
    $(".publish_select_all").click(function () {
        $(this).find(".dot").toggleClass("dot_in");
        $(".publish_sIn").find(".dot").toggleClass("dot_in");

        if ($(this).find(".dot").attr("class").length > 6) {
            $(".publish_sIn").find(".dot").addClass("dot_in");
            console.log("全选")

        } else {
            $(".publish_sIn").find(".dot").removeClass("dot_in");
            console.log("全不选")

        }


    });


});