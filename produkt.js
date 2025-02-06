const productId = new URLSearchParams(window.location.search).get("id");
console.log("Product ID:", productId);
let container = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    const markup = `
      <div class="item ${data.discount ? "onSale" : ""} ${data.soldout ? "soldOut" : ""}">
        ${data.discount ? '<div class="label sale-label">ON SALE</div>' : ""}
        ${data.soldout ? '<div class="label soldout-label">SOLD OUT</div>' : ""}
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
      </div>
      <div class="item_des">
        <h1 class="product_name">${data.productdisplayname}</h1>
        <h2>${data.price} DKK</h2>
      </div>
    `;
    container.innerHTML = markup;
  });
