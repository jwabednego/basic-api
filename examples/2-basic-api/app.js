const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");
    const product = data.map((item) => {
      const {
        image: { url },
        name,
        price,
      } = item;
      return `        
      <article class="product">
          <img
            src=${url}
            alt=${name}
          />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
          </div>
        </article>`;
    });
    result.innerHTML = product;
  } catch (error) {
    result.innerHTML = `<h3> Error pls try again... <h3/>`;
  }
};

fetchData();
