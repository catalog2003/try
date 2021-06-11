const axios = require("axios");
const prettier = require("prettier");

module.exports = async (req, res) => {
  const fetched = await axios.get(req.body.url);
  try {
    const formatted = prettier.format(fetched.data, { parser: "html" });
    return res.send(formatted);
  } catch (e) {
    return res.send(fetched.data);
  }
};
