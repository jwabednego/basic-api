const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const response = await axios.get("/api/1-hello");
    const data = await response.data;
    result.textContent = data;
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

fetchData();
