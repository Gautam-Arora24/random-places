var arr = require("./data.json");

getRandomPlace = function () {
  const index = Math.floor(Math.random() * arr.length);
  const place = arr[index];
  return place;
};
