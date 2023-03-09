
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
        });
    
function addPitsa() {

    let i = document.getElementsByClassName("#pizza .pr-container .row");
    let e =
        '<div class="col-3"> <div class="product-item"><div class="product-image">        <div class="img-wrap">            <img src="images/1-01.jpg"/>        </div>    </div>    <div class="product-name-descr">  <h3 class="product-title"> pitsa1 </h3>        <div class="product-descr"> i love big pitsa and i cannot lie </div>    </div>    <div class="product-price">        <div class="pw-wrap">            <span class="price">від 50 ₴</span>        </div>        <div class="cart-wrap">            <span class="add-to-cart no-plus" data-group="pizza">вибрати</span>        </div>    </div></div></div>';
    i.append(e)
}

