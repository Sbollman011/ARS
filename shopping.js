
var C1 = {
    id: "C1",
    name: "Crystal",
    description: "A hand-dug Crystal from the Ozarks",
    price: 20

};




var cart = Array();
var total = 0;
var productList =""
localStorage.setItem('cart', existing.toString());


function getTotal() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    response = "";
    for (i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        response = response + cart[i].name + " : $" + cart[i].price + '<br/>';
    }

    response = response + "Your total is $" + total;
   // alert(response);
    document.getElementById("insert").innerHTML = response;
   // document.getElementById(response).value = response;
   /* for (i = 0; i < cart.length; i++) {
        alert("These are your items: \n" + cart[i].name + " : " + cart[i].price);
    }*/

}

function amountDue() {
    return total;
}
function addToCartC1() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    C1 = new Object();
    C1.name = "Crystal"
    C1.price = 20;
    cart.push(C1);
    items = cart.length;
    alert(C1.name + " has been added to your cart. You now have a total of " + items + " items in your cart");
    localStorage.setItem('cart', JSON.stringify(cart));
}
function emptyCart() {
    var cart = (localStorage.getItem("cart"));
    cart = cart ? cart.split(',') : [];
    cart = [];
    alert("All items removed from cart.");
    total = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
}

