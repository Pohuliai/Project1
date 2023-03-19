let empty = '<div class="empty-cart">Ваша корзина пуста <br> <a href="index.html"> На головну </a> </div>'
let cart_item_list = '<div class="cart-item-list"> </div>'

$(document).ready(function () {

    if (JSON.parse(localStorage.getItem("cart")) == null) {
        cart = {}
    } else {
        cart = JSON.parse(localStorage.getItem("cart"))
        if (Object.keys(cart).length > 0) {
            //console.log(cart)
            //console.log(Object.keys(cart))
            for (let key in cart) {
                refreshCart(key)
            }
        }
    }

    window.onstorage = event => {
        console.log("update")
        cart = JSON.parse(localStorage.getItem("cart"))
        $(".cart-item-list").empty()
        //$(".cart-place").prepend(cart_item_list)
        for (let key in cart) {
                refreshCart(key)
        }
        refreshPrice()
    }




    refreshPrice()

    if ($(".cart-item-list").has(".cart-item")) {
        $(document).on('click', ".cart-item a", function () {
            let count = parseInt($(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val())
            let price = parseInt($(this).parent().find(".description").find(".item-price").text().substring(0, $(this).parent().find(".description").find(".item-price").text().length - 2))
            let id = $(this).parent().attr("data-id")
            delete cart[id]
            localStorage.cart = JSON.stringify(cart)
            price = price * count
            let currentPrice = parseInt($("#total_price").text())
            currentPrice = currentPrice - price
            $("#total_price").text(currentPrice.toString())
            if (currentPrice <= 0) {
                $(".total_price").hide()
            }
            jQuery(this).parent().remove()
            if ($(".cart-item-list").find(".cart-item").length == 0) {
                $(".cart-item-list").append(empty)
            }
        })
    }


    $(document).on("click", ".spin-btn.add-count.js-increment-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $("#total_price").text()
        let id = $(this).parent().parent().parent().parent().attr("data-id")
        cart[id].amount++
        localStorage.cart = JSON.stringify(cart)
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString()
        $("#total_price").text(orderPrice)
        return o.val(t), o.change(), !1
    })), $(document).on("click", ".spin-btn.remove-count.js-decrement-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) - 1;

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $("#total_price").text()
        let id = $(this).parent().parent().parent().parent().attr("data-id")
        cart[id].amount--
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString()
        $("#total_price").text(orderPrice)

        if (t == 0) {
            $(this).parent().parent().parent().parent().remove()
            delete cart[id]
        }
        localStorage.cart = JSON.stringify(cart)
        if ($(".cart-item-list").find(".cart-item").length == 0) {
            let empty = '<div class="empty-cart">Ваша корзина пуста <br> <a href="index.html"> На головну</a> </div> '
            $(".cart-item-list").append(empty)
            $(".total_price").hide()
        }

        return o.val(t), o.change(), !1
    }))

})

function refreshCart(id) {
    //cart = JSON.parse(localStorage.getItem("cart"))
    let name = cart[id].title
    let amount = cart[id].amount
    let price = cart[id].price
    let img = cart[id].imgSrc
    let card = '<div class="cart-item" data-id="' + id + '"> <div> <img src="' + img + '"> </div> <div class="description"> <div class="item-title">' + name + '<span class="subtitle"></span> </div> <div class="item-count"> <div class="spinner"> <div class="spin-btn remove-count js-decrement-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z"> </path> <path fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z"></path> </svg> </div> <input type="text" class="count-field" value="' + amount + '" readonly=""> <div class=" spin-btn add-count js-increment-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z"> </path> <path fill="#00F" d="M1504-1210V474H-280v-1684h1784m8-8H-288V482h1800v-1700z"></path> </svg> </div> </div> </div> <div class="item-price">' + price + '</div> </div> <a class="remove js-remove-from-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"> <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z"> </path> <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z"> </path> </svg> </a> </div>'

    let i = $(".cart-item-list");
    i.append(card)
}

function refreshAmount(id) {
    console.log(id)
    let cart = JSON.parse(localStorage.getItem("cart"))
    let amount = cart[id].amount
    if (amount == 0){
        $(`div[data-id=${id}]`).remove()
    } else $(`div[data-id=${id}]`).find(".description").find(".item-count").find(".spinner").find("input").val(amount)
}

function refreshPrice() {
    let price = 0,
        priceText;
    $(".cart-item-list").find("> *").each(function () {
        priceText = $(this).find(".description").find(".item-price").text()
        let amount = $(this).find(".item-count").find(".spinner").find("input").val()
        price = (amount * parseInt(priceText.substring(0, priceText.length - 2))) + price
    });
    $("#total_price").text(price.toString())
}