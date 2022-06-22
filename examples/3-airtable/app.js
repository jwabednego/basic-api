const result = document.querySelector(".result");

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/api/3-airtable");
    const products = data
      .map((product) => {
        const { id, name, price, url } = product;
        return `<a href="product.html?id=${id}" class="product">
      <img src=${url} alt=${name}>
      <div class="info">
      <h5> ${name} </h5>
      <h5 class="price"> ${price} <h5>
      </div>
      </a>`;
      })
      .join("");

    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = "There was an error, pls try again.";
  }
};

fetchProducts();
