document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded"); // Pour confirmer que le DOM est chargé

  // Écoutez les événements de clic sur le bouton "Add to cart"
  document.querySelector(".cart-button").addEventListener("click", function () {
    // Récupérez les détails du produit
    const imageSrc = document.querySelector("#myImage").src;
    const titleText = document.querySelector("h2").textContent;
    const price = document.querySelector("h3").textContent;
    const size = document.querySelector("#size").value;
    const quantity = document.querySelector("#quantity").value;

    const product = {
      imageSrc: imageSrc,
      title: titleText,
      price: price,
      size: size,
      quantity: quantity,
    };

    // Récupérez la liste des articles actuelle du localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajoutez le nouvel article
    cart.push(product);

    // Sauvegardez la liste mise à jour dans le localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Product added to cart:", product); // Pour confirmer l'ajout au panier
  });
});
