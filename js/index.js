// jQuery(function() {
//     $("*").on('mouseenter',function(){
//         $(this).addClass("redBorder")
//     })

// })


$(document).ready(function () {
    var $menu = $("#menu");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $menu.addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed") && !$("#popup-cart").hasClass("open")) {
            $menu.removeClass("fixed");
        }
    });

    if ($("html").scrollTop() > 50) {
        $menu.addClass("fixed");
    }

    jQuery("body").on("click", ".product-item .add-to-cart", (function () {
        if ($(this).hasClass("no-plus")) {
            let e = $(this).data("id"),
                o = $(this).data("id_hash"),
                t = $(this).data("group");
            "pizza" === t ? primo.pizza_card_modal_open(e, o) : "combo" === t && primo.combo_card_modal_open(e, o)
        } else $input = jQuery(this).hide().next(".amountBlock").find("input"), $input.val("1"), $input.change()

        if (jQuery(".price-in-bag").hasClass("hidden")) {
            jQuery(".price-in-bag").removeClass("hidden").text("1")
            let name = $(this).parent().parent().find("h3").text()
            let price = $(this).parent().parent().find(".product-price").find(".price").text()
            //let amount = $(this).parent().parent().find(".product-price").find(".amountBlock").find("input").val()
            console.log(name)
            console.log(price)
            //console.log(amount)
            addToCart(name,price,1)
            
        } else {
            let count = jQuery(".price-in-bag").text()
            count++
            jQuery(".price-in-bag").text(count)
        }
    })), jQuery("body").on("click", ".page-index .plus", (function (e) {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        let count = jQuery(".price-in-bag").text()
        count++
        jQuery(".price-in-bag").text(count)
        return o.val(t), o.change(), !1
    })), jQuery("body").on("click", ".page-index .minus", (function (e) {
        e.preventDefault();
        let o = jQuery(this).parent().find("input");
        var t = parseInt(o.val()) - 1;
        let count = jQuery(".price-in-bag").text()
        count--
        if (count == 0) {
            jQuery(".price-in-bag").addClass("hidden")
        }
        jQuery(".price-in-bag").text(count)
        return t = t < 1 ? 0 : t, o.val(t), o.change(), !1
    })), $(document).on("input change", ".page-index .amountBlock input", (function (e) {
        let o = $("#b" + $(this).data("id")),
            t = $("#q" + $(this).data("id"));
        $(this).val() <= 0 ? (o.css("display", "block"), o.removeClass("disabled"), t.removeClass("shown")) : (o.addClass("disabled"), t.addClass("shown"));
    })), jQuery("body").on("click", ".bag-ico-box", (function () {
        if (!$(".price-in-bag").hasClass("hidden")){
            var $menu = $("#menu");
            if ($("html").scrollTop() < 50) {
                if ($("#popup-cart").hasClass("open")) {
                    $menu.removeClass("fixed");
                    $("#popup-cart").removeClass("open").css("display", "none")
                } else {
                    $menu.addClass("fixed");
                    $("#popup-cart").addClass("open").css("display", "block")
                }
            } else if ($("#popup-cart").hasClass("open")) {
                $("#popup-cart").removeClass("open").css("display", "none")
            } else {
                $("#popup-cart").addClass("open").css("display", "block")
            }
        }
    })), jQuery("#popup-cart").on("click", ".spin-btn.add-count.js-increment-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", ".spin-btn.remove-count.js-decrement-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) - 1;
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", "a", (function () {
        jQuery(this).parent().remove()
    })), jQuery("#menu").on("click", "a", (function () {
        let elem = $(this).attr("id")
        let offset = $(elem).offset()
        offset.top = offset.top - 30
        window.scrollTo(offset)
    }))



    $("button").click(function () {
        //$("html").scrollTop($("html").scrollTop() - 60);
        let offset = $("#burger").offset()
        console.log(offset.top)
        offset.top = offset.top - 45
        window.scrollTo(offset)
    });
});

function addPitsa() {

    let i = document.getElementsByClassName("#pizza .pr-container .row");
    let e =
        '<div class="col-3"> <div class="product-item"><div class="product-image">        <div class="img-wrap">            <img src="images/1-01.jpg"/>        </div>    </div>    <div class="product-name-descr">  <h3 class="product-title"> pitsa1 </h3>        <div class="product-descr"> i love big pitsa and i cannot lie </div>    </div>    <div class="product-price">        <div class="pw-wrap">            <span class="price">від 50 ₴</span>        </div>        <div class="cart-wrap">            <span class="add-to-cart no-plus" data-group="pizza">вибрати</span>        </div>    </div></div></div>';
    i.append(e)
}

function addToCart(name,price,amount){
    let card = '<div class="cart-item" data-product-id="9283"> <div class="img"> <img src="images/126-01.jpg"> </div> <div class="description"> <div class="item-title"> Гурмео метровая <span class="subtitle"></span> </div> <div class="item-price"> 489 грн </div> </div> </div>'
    let i = $(".cart-item-list");
    i.append(card)

}

function changeAmount(name,amount){


}