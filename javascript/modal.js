/*

Assignment: CA2
Purpose: Centralised editing of Bootstrap Modal (Text editing)

*/

//This is for shopping page or contents that are not available
var modalForShop = document.getElementById("modalshopbody");

if (modalForShop !== null) {
    modalForShop.innerHTML = "Apologies. We currently do not have the content now.";
}


//This is for shop items are added to the cart
var modalForShop2 = document.getElementById("modalshop2body");

if (modalForShop2 !== null) {
    modalForShop2.innerHTML = "Thank you. The item has been added to the your Cart.";
}

//This is for shop items that have no JS functionality yet.
var modalForShop3 = document.getElementById("modalshop3body");

if (modalForShop3 !== null) {
    modalForShop3.innerHTML = "You have chosen to remove this item. However, we do not have this function yet. We apologise for any inconvenience caused.";

}
