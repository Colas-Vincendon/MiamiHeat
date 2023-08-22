document.addEventListener("DOMContentLoaded", function () {
  const slideLinks = document.querySelectorAll(".slide-link");

  slideLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imageSrc = e.currentTarget.querySelector("img").src;
      const titleText = e.currentTarget.querySelector("p").textContent;

      const newWindow = window.open("", "_blank");

      newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
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
            <div id="container" class="container-fluid">
              <div class="row">
                <nav class="container-fluid navbar navbar-expand-md navbar-dark">
                    <div class="container-fluid d-flex justify-content-center">
                      <div id="navbar">
                        <div id="logo">
                            <a href="index.html">
                            <img class="imgLogo" src="assets/logo.png" alt="logo" />
                            </a>
                        </div>
                        <button
                            type="button"
                            class="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarText"
                            style="z-index: 9999"
                            >
                            <ul class="navbar-nav mx-auto">
                            <li class="nav-item"><a href="team.html">TEAM</a></li>
                            <li class="nav-item"><a href="stadium.html">STADIUM</a></li>
                            <li class="nav-item"><a href="shop.html">SHOP</a></li>
                            <li class="nav-item"><a href="contact.html">CONTACT</a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </nav>
              </div>
              <div class="row rowMarginTop">
              </div>
              <div class="row">
                <div class="col-12 col-lg-7 article">
                  <div class="justify-content-center text-center">
                    <img style="height:auto; max-width:700px ; width:100%" class="img-fluid" src="${imageSrc}" alt="${titleText}">
                  </div>
                </div>
                <div class="col-12 col-lg-5 cart">
                  <div class="justify-content-center">
                    <h2 class="text-center px-3">${titleText}</h2>
                    <p class='blue'>Pay in 4 interest-free installments for orders over $50.00 with <img style="height:30px;" src="./assets/shop/pay.png"></p>
                    <h3>$38.00</h3>

                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
        `);
    });
  });
});