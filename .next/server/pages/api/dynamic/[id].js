"use strict";
(() => {
var exports = {};
exports.id = "pages/api/dynamic/[id]";
exports.ids = ["pages/api/dynamic/[id]"];
exports.modules = {

/***/ "./pages/api/dynamic/[id].js":
/*!***********************************!*\
  !*** ./pages/api/dynamic/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  const abc = req.query.id;
  console.log(req);
  res.status(200).json({
    'Name': abc
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/dynamic/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2R5bmFtaWMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN0QyxRQUFNQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxFQUF0QjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sR0FBWjtBQUNBQyxFQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFLFlBQVFOO0FBQVYsR0FBckI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9keW5hbWljL1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgYWJjID0gcmVxLnF1ZXJ5LmlkXHJcbiAgICBjb25zb2xlLmxvZyhyZXEpXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICdOYW1lJzogYWJjIH0pXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImFiYyIsInF1ZXJ5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=