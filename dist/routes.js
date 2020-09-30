"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use((0, _cors.default)());
routes.get('/', (request, response) => {
  return response.json({
    message: "PRONTO CARALHOOOOO !"
  });
});
var _default = routes;
exports.default = _default;