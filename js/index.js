



$(document).ready(function () {
    
    refreshPage("")
    






    jQuery(".price-in-bag").on('DOMSubtreeModified', function () {
        if (!($(this).text() == null || $(this).text() == undefined || $(this).text() == "")) {
            //console.log($(this).text())
            if ($(this).text() == 0) {
                jQuery(".price-in-bag").addClass("hidden")
                $("#popup-cart").hide().removeClass("open")
            }
        }
    })

    // window.onstorage = event =>{
    //     bufferCart = JSON.parse(localStorage.getItem("cart"))
    //     for (let key in bufferCart) {
    //         console.log(bufferCart[key])
    //         console.log(JSON.parse(event.oldValue)[key])
    //         if(JSON.parse(event.oldValue)[key] == undefined){
    //             console.log(key)
    //             cart = JSON.parse(localStorage.getItem("cart"))
    //             refreshCart(key)
    //             //$(`div[data-id=${key}]`).find('.description').find(".item-count").find(".spinner").find("input").addEventListener("click",refreshPage())
    //             refreshPrice()
    //         }
    //     }
    // }
    window.onstorage = event =>{
        //console.log(event.oldValue)
        refreshPage(JSON.parse(event.oldValue))
    }




  
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

        $input = jQuery(this).hide().next(".amountBlock").find("input"), $input.val("1"), $input.change(), addToCart($(this))


        if (jQuery(".price-in-bag").hasClass("hidden")) {
            jQuery(".price-in-bag").removeClass("hidden").text("1")
        } else {
            incBag()
        }
    })), jQuery("body").on("click", ".page-index .plus", (function (e) {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) + 1;
        incBag()
        $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)

        let price = $(this).parent().parent().find(".price").text()
        console.log(price)
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().data("id")
        cart[id].amount++
        localStorage.cart = JSON.stringify(cart);
        return o.val(t), o.change(), !1
    })), jQuery("body").on("click", ".page-index .minus", (function (e) {
        e.preventDefault();
        let o = jQuery(this).parent().find("input");
        var t = parseInt(o.val()) - 1;
        decBag()
        $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)

        let price = $(this).parent().parent().find(".price").text()
        console.log(price)
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().data("id")

        cart[id].amount--

        if (cart[id].amount <= 0) {
            delete cart[id]
            $(".cart-item-list").find(`input[data-id = "${o.attr('data-id')}"]`).parent().parent().parent().parent().remove()
        }
        localStorage.cart = JSON.stringify(cart);

        return t = t < 1 ? 0 : t, o.val(t), o.change(), !1
    })), $(document).on("input change", ".page-index .amountBlock input", (function (e) {
        let o = $("#b" + $(this).data("id")),
            t = $("#q" + $(this).data("id"));
        $(this).val() <= 0 ? (o.css("display", "block"), o.removeClass("disabled"), t.removeClass("shown")) : (o.addClass("disabled"), t.addClass("shown"));
    })), jQuery("body").on("click", ".bag-ico-box", (function () {
        if (!$(".price-in-bag").hasClass("hidden")) {
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

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) + parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)

        $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)
        incBag()
        let id = $(this).parent().parent().parent().parent().data("id")

        cart[id].amount++
        localStorage.cart = JSON.stringify(cart);
        //console.log(cart)
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", ".spin-btn.remove-count.js-decrement-cart", (function () {
        let o = jQuery(this).parent().find("input"),
            t = parseInt(o.val()) - 1;

        let price = $(this).parent().parent().parent().find(".item-price").text()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()
        orderPrice = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - parseInt(price.substring(0, price.length - 2))
        orderPrice = orderPrice.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)
        let id = $(this).parent().parent().parent().parent().data("id")

        cart[id].amount--


        decBag()
        $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).val(t)
        if (t == 0) {
            $(this).parent().parent().parent().parent().remove()
            console.log($(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).parent().removeClass("shown"))
            $(".page-index").find(`input[data-id = "${o.attr('data-id')}"]`).parent().removeClass("shown").parent().find(".add-to-cart").removeClass("disabled").css("display", "block")
            delete cart[id]
        }
        //console.log(cart)
        localStorage.cart = JSON.stringify(cart);
        return o.val(t), o.change(), !1
    })), jQuery("#popup-cart").on("click", "a.remove", (function () {

        let count = jQuery(".price-in-bag").text()
        let id = $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").attr("data-id")
        $(".page-index").find(`input[data-id = "${id}"]`).val(0)
        $(".page-index").find(`input[data-id = "${id}"]`).parent().removeClass("shown").parent().find(".add-to-cart").removeClass("disabled").css("display", "block")
        count = count - $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val()
        jQuery(".price-in-bag").text(count)
        jQuery(this).parent().remove()


        let price = $(this).parent().find(".description").find(".item-price").text()
        let itemCount = $(this).parent().find(".description").find(".item-count").find(".spinner").find("input").val()
        let orderPrice = $(".js-popup-summary").find("#currentPrice").text()

        o = parseInt(orderPrice.substring(0, orderPrice.length - 4)) - (parseInt(price.substring(0, price.length - 2)) * parseInt(itemCount))
        orderPrice = o.toString() + " грн"
        $(".js-popup-summary").find("#currentPrice").text(orderPrice)

        let itemId = $(this).parent().data("id")
        delete cart[itemId]
        localStorage.cart = JSON.stringify(cart);
        console.log($(this))
    })), jQuery("#menu").on("click", "a", (function () {
        if ($("#popup-cart").hasClass("open")) {
            $("#popup-cart").removeClass("open").hide()
        }
        let elem = $(this).attr("id")
        let offset = $(elem).offset()
        offset.top = offset.top - 30
        window.scrollTo(offset)
    })), $("#popup-cart").mouseup(function (e) {
        if ($("#popup-cart").hasClass("open")) {
            var div = $(".cart-container");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $("#popup-cart").hide().removeClass("open");
            }
        }
    })

    // , $(".price-in-bag").change(function() {
    //     alert( "Handler for .change() called." );
    //    })



    $("button").click(function () {
        //$("html").scrollTop($("html").scrollTop() - 60);
        // let offset = $("#burger").offset()
        // console.log(offset.top)
        // offset.top = offset.top - 45
        // window.scrollTo(offset)
    });
});

function addPitsa() {

    let i = document.getElementsByClassName("#pizza .pr-container .row");
    let e =
        '<div class="col-3"> <div class="product-item"><div class="product-image">        <div class="img-wrap">            <img src="images/1-01.jpg"/>        </div>    </div>    <div class="product-name-descr">  <h3 class="product-title"> pitsa1 </h3>        <div class="product-descr"> i love big pitsa and i cannot lie </div>    </div>    <div class="product-price">        <div class="pw-wrap">            <span class="price">від 50 ₴</span>        </div>        <div class="cart-wrap">            <span class="add-to-cart no-plus" data-group="pizza">вибрати</span>        </div>    </div></div></div>';
    i.append(e)
}

function addToCart(element) {
    

    let name = element.parent().parent().find("h3").text()
    let price = element.parent().parent().find(".product-price").find(".price").text()
    let img = element.parent().parent().find(".product-image").find(".img-wrap").find("img").attr("src")
    let id = element.parent().find("input").attr("data-id")
    let idItem = element.parent().parent().attr("data-id")
    

    let amount = 1
    cart[idItem] = {
        "title": name,
        "amount": amount,
        "price": price,
        "imgSrc": img,
    }
    localStorage.cart = JSON.stringify(cart)
 
    let card = '<div class="cart-item" data-id="' + idItem + '"> <div class="img"> <img src="' + img + '"> </div> <div class="description"> <div class="item-title">' + name + '<span class="subtitle"></span> </div> <div class="item-count"> <div class="spinner" data-product-id="9283"> <div class="spin-btn remove-count js-decrement-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z" /> </svg> </div> <input type="text" class="count-field" data-id="' + id + '" value="' + amount + '" readonly=""> <div  class=" spin-btn add-count js-increment-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1504-1210V474H-280v-1684h1784m8-8H-288V482h1800v-1700z" /> </svg> </div>  </div> </div> <div class="item-price">' + price + '</div> </div> <a class="remove js-remove-from-cart" data-id="9283" data-current-quantity="1" data-contain-ids="" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"> <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z" /> <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z" /> </svg> </a> </div>'
    let i = $(".cart-item-list");
    i.append(card)

    //parseInt(price.substring(0,price.length - 2)) * amount
    let currentPrice = parseInt($("#currentPrice").text().substring(0, $("#currentPrice").text().length - 4))

    $("#currentPrice").text((currentPrice + (parseInt(price.substring(0, price.length - 2)) * amount)).toString() + " грн")


    // //let id = $(this)

    // let name = $(this).parent().parent().find("h3").text()
    // let price = $(this).parent().parent().find(".product-price").find(".price").text()
    // let img = $(this).parent().parent().find(".product-image").find(".img-wrap").find("img").attr("src")
    // //let amount = $(this).parent().parent().find(".product-price").find(".amountBlock").find("input").val()
    // console.log(name)
    // console.log(price)
    // console.log(img)
    // //console.log(amount)
}

function refreshCart(element) {
    let amount = $(element).find(".product-price").find(".amountBlock.shown").find("input").val()
    let idItem = $(element).attr("data-id")
    let name = element.find(".product-name-descr").find("h3").text()
    if (name == ""){
        name = element.find("h3").text()
    }
    let price = element.find(".product-price").find(".price").text()
    let img = element.find(".product-image").find(".img-wrap").find("img").attr("src")
    let id = element.find(".product-price").find(".amountBlock").find("input").attr("data-id")
    let card = '<div class="cart-item" data-id="' + idItem + '"> <div class="img"> <img src="' + img + '"> </div> <div class="description"> <div class="item-title">' + name + '<span class="subtitle"></span> </div> <div class="item-count"> <div class="spinner" data-product-id="9283"> <div class="spin-btn remove-count js-decrement-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z" /> </svg> </div> <input type="text" class="count-field" data-id="' + id + '" value="' + amount + '" readonly=""> <div  class=" spin-btn add-count js-increment-cart"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"> <path d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z" /> <path fill="#00F" d="M1504-1210V474H-280v-1684h1784m8-8H-288V482h1800v-1700z" /> </svg> </div>  </div> </div> <div class="item-price">' + price + '</div> </div> <a class="remove js-remove-from-cart" data-id="9283" data-current-quantity="1" data-contain-ids="" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"> <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z" /> <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z" /> </svg> </a> </div>'
    let i = $(".cart-item-list");
    i.append(card)
    let currentPrice = parseInt($("#currentPrice").text().substring(0, $("#currentPrice").text().length - 4))
    $("#currentPrice").text((currentPrice + (parseInt(price.substring(0, price.length - 2)) * amount)).toString() + " грн")
}

// function changeAmount(element, amount) {
//     console.log(element.parent().parent().parent().find("h3").text())
//     $("")
// }

function incBag() {
    let count = jQuery(".price-in-bag").text()
    count++
    jQuery(".price-in-bag").text(count)
}

function decBag() {
    let count = jQuery(".price-in-bag").text()
    count--
    jQuery(".price-in-bag").text(count)
}

function refreshPage(oldValue){
    $("#currentPrice").text("0 грн")
    $(".cart-item-list").empty()
    $(".price-in-bag").text("0")
    if (Object.keys(oldValue).length > 0) {
        for (let key in oldValue) {
            $(`div[data-id=${key}]`).find(".product-price").find(".add-to-cart").show().removeClass("disabled")
            $(`div[data-id=${key}]`).find(".product-price").find(".amountBlock").removeClass("shown").find("input").val(0)
        }}

    
    
    if (JSON.parse(localStorage.getItem("cart")) == null) {
        cart = {}
    } else {
        cart = JSON.parse(localStorage.getItem("cart"))
        if (Object.keys(cart).length > 0) {
            //console.log(cart)
            //console.log(Object.keys(cart).length)
            $(".price-in-bag").removeClass("hidden")
            for (let key in cart) {
                if (cart.hasOwnProperty(key)) {
                    $(`div[data-id=${key}]`).find(".product-price").find(".add-to-cart").hide()
                    $(`div[data-id=${key}]`).find(".product-price").find(".amountBlock").addClass("shown").find("input").val(cart[key].amount)
                    let count = $(".price-in-bag").text()
                    let amount = parseInt(count) + cart[key].amount
                    $(".price-in-bag").text(amount.toString())
                    refreshCart($(`div[data-id=${key}]`))
                }
            }
        }
    }
}