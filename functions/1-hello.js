const people = { fname: "john", sname: "peter", name: "alex" };

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "This is my first Netlify Function",
  };
};
