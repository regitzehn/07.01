const myCategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader");

const productContainer = document.querySelector(".grid_items");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<div class="sub">
              <div class="item">
                <a href="produkt.html?id=${product.id}">
                  <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
                </a>
              </div>
              <div class="product-text">
                <h3>${product.productdisplayname}</h3>
                <p>${product.price} DKK</p>
              </div>
            </div>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
