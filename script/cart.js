document.querySelector("#productModal .modal-content").innerHTML = modalContent;
$("#productModal").modal("show"); // afficher la modale

document.querySelector(".add-to-cart").addEventListener("click", function () {
  const product = {
    title: this.getAttribute("data-title"),
    price: this.getAttribute("data-price"),
    image: this.getAttribute("data-image"),
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Product added to cart:", product);
});
