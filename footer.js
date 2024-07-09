document.addEventListener("DOMContentLoaded", function() {
    // const colorSelect = document.getElementById("color-select");
    // const productImage = document.getElementById("product-image");
    // const ratingText = document.querySelector(".rating span");
    const stickyFooter = document.getElementById("sticky-add-to-cart-wrapper");
    // const footer = document.querySelector("footer");

    const addToCartButtonMobile = document.getElementById('add-to-cart-mobile');
    const modal = document.getElementById('popup-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
  
    addToCartButtonMobile.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });


    // colorSelect.addEventListener("change", function() {
    //     const selectedColor = colorSelect.value;
    //     switch (selectedColor) {
    //         case "green":
    //             productImage.src = "4.jpg";
    //             ratingText.textContent = "Green";
    //             break;
    //         case "black":
    //             productImage.src = "2.jpg";
    //             ratingText.textContent = "Black";
    //             break;
    //         case "blue":
    //             productImage.src = "3.jpg";
    //             ratingText.textContent = "Blue";
    //             break;
    //         default:
    //             break;
    //     }
    // });

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollThreshold = documentHeight * 0.2;

        if (scrollPosition >= scrollThreshold) {
            stickyFooter.classList.add("active");
        } else {
            stickyFooter.classList.remove("active");
        }
    });
});
