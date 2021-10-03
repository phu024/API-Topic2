"use strict";
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      'text': 'GET'
    });
  }

  if (req.method === 'POST') {
    res.status(200).json({
      'text': 'POST'
    });
  }

  if (req.method === 'PUT') {
    res.status(200).json({
      'text': 'PUT'
    });
  }

  if (req.method === 'DELETE') {
    res.status(200).json({
      'text': 'DELETE'
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3RCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFLGNBQVE7QUFBVixLQUFyQjtBQUNIOztBQUNELE1BQUlKLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFLGNBQVE7QUFBVixLQUFyQjtBQUNIOztBQUNELE1BQUlKLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3RCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFLGNBQVE7QUFBVixLQUFyQjtBQUNIOztBQUNELE1BQUlKLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCRCxJQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFLGNBQVE7QUFBVixLQUFyQjtBQUNIO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAndGV4dCc6ICdHRVQnIH0pXHJcbiAgICB9XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAndGV4dCc6ICdQT1NUJyB9KVxyXG4gICAgfVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAndGV4dCc6ICdQVVQnIH0pXHJcbiAgICB9XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ICd0ZXh0JzogJ0RFTEVURScgfSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9