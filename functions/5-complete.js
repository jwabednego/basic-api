require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appY5AijHwdL9pNw3")
  .table("products");

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No Product Of ID ${id} Found`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Sever Error`,
      };
    }
  }

  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { price, name, image } = product.fields;
      const url = image[0].url;

      return { id, name, url, price };
    });

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
