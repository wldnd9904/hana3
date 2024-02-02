import assert from "assert";

Array.prototype.first = function () {
  return this[0];
};

Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
    },
  },
});
Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((item) => item[prop]))];
};
Array.prototype.filterBy = function (prop, value) {
  return this.filter((item) => item[prop] === value);
};
Array.prototype.sortBy = function (prop, direction = "asc") {
  return this.sort(
    (a, b) =>
      (a[prop] > b[prop] ? 1 : -1) *
      (direction.toLowerCase() == "desc" ? -1 : 1)
  );
};
Array.prototype.findBy = function (prop, value) {
  return this.find((item) => item[prop] === value);
};
