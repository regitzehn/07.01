let listContainer = document.querySelector(".grid_items");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="sub">
              <div class="item">
                <a href="produkt.html">
                  <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
                </a>
              </div>
              <div class="product-text">
                <h3>${product.productdisplayname}</h3>
                <p>${product.price} DKK</p>
              </div>
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
