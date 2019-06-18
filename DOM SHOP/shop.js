function renderProduct ( product ) {
    var card = document.createElement ('div');
    card.className = "card col-md-3 justify-content-centere mx-2 mt-2";
    var img = document.createElement ('img');
    img.src = product.photos[0];
    img.className = "card-img-top";
    card.appendChild(img);
    var body = document.createElement ('div');
    body.className = "card-body";
    var h5 = document.createElement ('h5');
    h5.className = "card-title";
    h5.innerHTML = product.name;
    body.appendChild(h5);
    var p = document.createElement ('p');
    p.className = "card-text";
    p.innerHTML = "Pretul:" + "<br>" +product.price.value + product.price.currency;
    p.innerHTML +="<br>"+ "Mass:" + "<br>" +product.mass.value + product.mass.unit;
    body.appendChild(p);
    var a = document.createElement ('a');
    a.href= `#${product.id}`;
    a.className = "btn btn-primary";
    a.innerHTML = "Comanda";
    body.appendChild(a);
    card.appendChild(body);
    var row=document.querySelector('.row:nth-child(2)');
    row.appendChild(card);
    a.addEventListener ('click', addToCart);
}
//renderProduct ( products[0]   );

function renderProductList () {
    for(var i=0; i<products.length; i++) {
        renderProduct (products[i]);
    }
}
function addToCart(e){
    let product_id = e.target.href.split("#").pop();
    if (localStorage.getItem('cart')!=null){
        var products_cart = localStorage.getItem('cart').split(",")
    }else {
        var products_cart = [];
    }
    products_cart.push(product_id);
    //alert(products_cart);
    console.log(product_id);
    localStorage.setItem('cart', products_cart);

    showMessage("Your product was added to the cart!");
}
function showMessage (message){
    let div = document.createElement ('div');
    div.className = "alert alert-success alert-dismissible fade show";
    div.setAttribute('role',"alert");
    let strong = document.createElement ('strong');
    strong.innerHTML = "Success!";
    var p = document.createTextNode(message);
    div.appendChild(strong);
    div.appendChild(p);
    let button = document.createElement ('button');
    button.type ="button";
    button.className = "close";
    button.setAttribute('data-dismiss', "alert");
    button.setAttribute('aria-label', "Close");
    div.appendChild (button);
    let span = document.createElement ('span');
    span.setAttribute('aria-hidden', "true");
    span.innerHTML = "&times;";
    button.appendChild(span);
    let section = document.getElementById ('products');
    section.appendChild(div);
    setTimeout(function(){
    section.removeChild(div)}, 5000);
}
function showCart(){
    if (localStorage.getItem('cart')!=null){
        var products_cart = localStorage.getItem('cart').split(",")
    }else {
        var products_cart = [];
    }
    let a = document.createElement ('a');
    a.className ="btn btn-primary btn-lg rounded-pill"
    a.href="#";
    var i = document.createElement ('i');
    i.className = "fas fa-shopping-cart";
    var p = document.createTextNode(`items: ${products_cart.length}`);
    a.appendChild(i);
    a.appendChild(p);
    let div = document.querySelector ('.product-cart');
    div.appendChild(a);
}
showCart()
renderProductList();
