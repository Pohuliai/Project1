$(document).ready(function () {


    
    let price = 0,
        priceText;
    $(".cart-item-list").find("> *").each(function () {
        priceText = $(this).find(".description").find(".item-price").text()
        price = price + parseInt(priceText.substring(0, priceText.length - 2))
    });
    $("#total_price").text(price.toString())


    if ($(".cart-item-list").has(".cart-item")) {
        jQuery(".cart-item").on('click', "a", function () {
            let count = parseInt($(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val())
            let price = parseInt($(this).parent().find(".description").find(".item-price").text().substring(0,$(this).parent().find(".description").find(".item-price").text().length-2))
            console.log(typeof(price), price)
            price = price * count
            let currentPrice = parseInt($("#total_price").text())
            currentPrice = currentPrice - price
            $("#total_price").text(currentPrice.toString())
            if (currentPrice <=0){
                $(".total_price").hide()
            }
            jQuery(this).parent().remove()
            if ($(".cart-item-list").find(".cart-item").length == 0) {
                let empty = '<div class="empty-cart">Ваша корзина пуста <br> <a href="index.html"> На головну </a> </div>'
                $(".cart-item-list").append(empty)
            }
        })
    }


    jQuery(".cart-item").on("click", ".spin-btn.add-count.js-increment-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $("#total_price").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString()
        $("#total_price").text(orderPrice)
        return o.val(t), o.change(), !1
    })), jQuery(".cart-item").on("click", ".spin-btn.remove-count.js-decrement-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) - 1;

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $("#total_price").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString()
        $("#total_price").text(orderPrice)
        
        if (t == 0) {
            
            $(this).parent().parent().parent().parent().remove()
        }

        if ($(".cart-item-list").find(".cart-item").length == 0) {
            let empty = '<div class="empty-cart">Ваша корзина пуста <br> <a href="index.html"> На головну</a> </div> '
            $(".cart-item-list").append(empty)
            $(".total_price").hide()
        }

        return o.val(t), o.change(), !1
    }))

})