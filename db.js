const fs = require("fs");

module.exports = () =>
  Object.fromEntries(
    fs
      .readdirSync("./mocks")
      .map((filename) => [
        filename.slice(0, -3),
        require(`./mocks/${filename}`),
      ])
  );
