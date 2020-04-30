
var genericPatch = {
    id: "p1",
    name: "Patch",
    description: "A hand-dug Crystal from the Ozarks",
    price: .01

};

var genericSticker = {
    id: "s1",
    name: "Sticker",
    description: "Apocalypse Rock Sticker",
    price: .01

};

var genericPin = {
    id: "pin1",
    name: "Pin",
    description: "Apocalypse Rock Pin",
    price: .01

};




var cart = Array();
total = 0;
localStorage.setItem('cart', existing.toString());


function getTotal() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    response = "";
    for (i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        response = response + cart[i].name + " : $" + cart[i].price + '<br/>';
    }

    response = response + "Your total is $" + Math.round((total + Number.EPSILON) * 100) / 100;
   // alert(response);
    document.getElementById("insert").innerHTML = response;
   // document.getElementById(response).value = response;
   /* for (i = 0; i < cart.length; i++) {
        alert("These are your items: \n" + cart[i].name + " : " + cart[i].price);
    }*/

}

function amountDue() {
    return Math.round((total + Number.EPSILON) * 100) / 100;
}
function addToCartP1() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    p1 = new Object();
    p1.name = "Patch"
    p1.price = .01;
    cart.push(p1);
    items = cart.length;
    alert(p1.name + " has been added to your cart. You now have a total of " + items + " items in your cart");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCartS1() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    s1 = new Object();
    s1.name = "Sticker"
    s1.price = .01;
    cart.push(s1);
    items = cart.length;
    alert(s1.name + " has been added to your cart. You now have a total of " + items + " items in your cart");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCartPin1() {
    var cart = (localStorage.getItem("cart"));
    cart = JSON.parse(cart);
    pin1 = new Object();
    pin1.name = "Pin"
    pin1.price = .01;
    cart.push(s1);
    items = cart.length;
    alert(pin1.name + " has been added to your cart. You now have a total of " + items + " items in your cart");
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

