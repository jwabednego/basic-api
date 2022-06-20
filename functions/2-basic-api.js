const items = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Orign": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
