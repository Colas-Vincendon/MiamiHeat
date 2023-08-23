document.addEventListener("DOMContentLoaded", function () {
  const slideLinks = document.querySelectorAll(".slide-link");

  slideLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imageSrc = e.currentTarget.querySelector("img").src;
      const titleText = e.currentTarget.querySelector("p").textContent;
      const price = e.currentTarget.querySelector("h5").textContent;

      const modalContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${titleText}</title>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="css/shop.css" />
        <link rel="stylesheet" href="css/navbar.css" />
       <link rel="stylesheet" href="css/carousel.css" />
       <link rel="stylesheet" href="css/article.css" />
        
      </head>
      <body>
        <div id="container-modal" class="container-fluid">
          <div class="row rowMarginTop">
          </div>
          <div class="row">
            <div class="col-12 col-lg-7 article">
              <div class="justify-content-center text-center">
              <div class="zoom-container">
                <img id="myImage" style="height:auto; max-width:700px ; width:100%; margin: 0 auto; border-radius:15px; border: 2px solid lightgrey; background-color:white;" class="img-fluid" src="${imageSrc}" alt="${titleText}">
                </div>
                <a style="margin-top:50px;" href="shop.html">
              <button class="btnBack">Back to shop</button>
              </a>
              </div>
            </div>
            <div class="col-12 col-lg-5 cart">
              <div class="justify-content-center text-center">
                <h2 class="text-center px-3" style="font-family:impact; margin-bottom:30px; letter-spacing:1px;">${titleText}</h2>
                <p class='blue' style="font-family:impact; margin-bottom:30px; letter-spacing:1px;">Pay in 4 interest-free installments for orders over $50.00 with <img style="height:30px;" src="./assets/shop/pay.png"></p>
                <h3 style="font-family:impact; margin-bottom:50px">Price : $ ${price}</h3>
                <div class="product-container">
                    <div class="product-options">
                        <label for="size">Size :</label>
                        <select id="size" name="size">
                        <option style="color:black;" value="small">S</option>
                        <option style="color:black;" value="medium">M</option>
                        <option style="color:black;" value="large">L</option>
                        <option style="color:black;" value="xlarge">XL</option>
                        <option style="color:black;" value="xxlarge">XXL</option>
                        </select>

                        <label for="quantity">Quantity :</label>
                        <input style="color:black;" type="number" id="quantity" name="quantity" min="1" value="1">

                        <button class="cart-button add-to-cart" 
                            data-title="${titleText}" 
                            data-price="${price}"
                            data-image="${imageSrc}">
                                <span class="add-to-cart" >+ Add to cart</span>
                                <span class="added">Added</span>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-box"></i>
                       </button>
              
                    </div>
                 </div>
              
        </div>
      </div>
    </div>
  </div>
  <script
  src="https://kit.fontawesome.com/a5608ed8bc.js"
  crossorigin="anonymous"
  ></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
          `;

      document.querySelector("#productModal .modal-content").innerHTML =
        modalContent;
      $("#productModal").modal("show"); // afficher la modale

      document
        .querySelector(".add-to-cart")
        .addEventListener("click", function () {
          const size = document.getElementById("size").value;
          const quantity = document.getElementById("quantity").value;

          const product = {
            title: this.getAttribute("data-title"),
            price: this.getAttribute("data-price"),
            image: imageSrc,
            size: size, // Ajout de la taille
            quantity: quantity, // Ajout de la quantité
          };

          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          console.log("Product added to cart:", product);
        });

      const img = document.getElementById("myImage");
      const container = document.querySelector(".zoom-container");

      container.addEventListener("mousemove", function (e) {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (mouseX - centerX) * -0.5; // ajustez ce chiffre pour modifier l'intensité du déplacement
        const deltaY = (mouseY - centerY) * -0.5; // ajustez ce chiffre pour modifier l'intensité du déplacement

        img.style.transform = `scale(2) translate(${deltaX}px, ${deltaY}px)`; // scale(2) signifie un zoom de 200%
      });

      container.addEventListener("mouseleave", function () {
        img.style.transform = "scale(1) translate(0, 0)";
      });
      const cartButtons = document.querySelectorAll(".cart-button");

      cartButtons.forEach((button) => {
        button.addEventListener("click", cartClick);
      });

      function cartClick() {
        let button = this;
        button.classList.add("clicked");
      }
    });
  });
});
