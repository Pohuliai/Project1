
// jQuery(function() {
//     $("*").on('mouseenter',function(){
//         $(this).addClass("redBorder")
//     })
    
// })


$(document).ready(function(){
            var $menu = $("#menu");
            $(window).scroll(function(){
                if ( $(this).scrollTop() > 100){
                    $menu.addClass("fixed");
                } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                    $menu.removeClass("fixed");
                }
            });

            if($("html").scrollTop() > 50) {
                $menu.addClass("fixed");
            }

            jQuery("body").on("click", ".product-item .add-to-cart", (function () {
                $input = jQuery(this).hide().next(".amountBlock").find("input"), $input.val("1"), $input.change()
            })), jQuery("body").on("click", ".page-index .plus", (function (e) {
                let o = jQuery(this).parent().find("input"),
                    t = parseInt(o.val()) + 1;
                return o.val(t), o.change(), !1
            })), jQuery("body").on("click", ".page-index .minus", (function (e) {
                e.preventDefault();
                let o = jQuery(this).parent().find("input");
                var t = parseInt(o.val()) - 1;
                return t = t < 1 ? 0 : t, o.val(t), o.change(), !1
            })), $(document).on("input change", ".page-index .amountBlock input", (function (e) {
                let o = $("#b" + $(this).data("id")),
                    t = $("#q" + $(this).data("id"));
                $(this).val() <= 0 ? (o.css("display", "block"), o.removeClass("disabled"), t.removeClass("shown")) : (o.addClass("disabled"), t.addClass("shown"));
                }))
                
            $("button").click(function(){
                $("html").scrollTop($("html").scrollTop() - 60);
                console.log($("html").scrollTop())
            });
        });
    
function addPitsa() {

    let i = document.getElementsByClassName("#pizza .pr-container .row");
    let e =
        '<div class="col-3"> <div class="product-item"><div class="product-image">        <div class="img-wrap">            <img src="images/1-01.jpg"/>        </div>    </div>    <div class="product-name-descr">  <h3 class="product-title"> pitsa1 </h3>        <div class="product-descr"> i love big pitsa and i cannot lie </div>    </div>    <div class="product-price">        <div class="pw-wrap">            <span class="price">від 50 ₴</span>        </div>        <div class="cart-wrap">            <span class="add-to-cart no-plus" data-group="pizza">вибрати</span>        </div>    </div></div></div>';
    i.append(e)
}

