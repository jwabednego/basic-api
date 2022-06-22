const result = document.querySelector(".result");

const fetchProducts = async () => {
  result.innerHTML = `<h1> Loading... </h1>`;
  try {
    const id = window.location.search;
    const { data } = await axios.get(`/api/5-complete/${id}`);
    const { name, desc, price, image } = data.fields;
    result.innerHTML = `  <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="utopia sofa"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
  } catch (error) {
    result.innerHTML = `<h2> There was an error, pls try again... </h2>`;
  }
};

fetchProducts();
