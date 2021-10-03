"use strict";
(() => {
var exports = {};
exports.id = "pages/api/dynamic/all/[...params]";
exports.ids = ["pages/api/dynamic/all/[...params]"];
exports.modules = {

/***/ "./pages/api/dynamic/all/[...params].js":
/*!**********************************************!*\
  !*** ./pages/api/dynamic/all/[...params].js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  const abc = req.query.params;
  console.log(req);
  res.status(200).json({
    'Param': abc
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/dynamic/all/[...params].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2R5bmFtaWMvYWxsL1suLi5wYXJhbXNdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLFFBQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLE1BQXRCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaO0FBQ0FDLEVBQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUUsYUFBU047QUFBWCxHQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2R5bmFtaWMvYWxsL1suLi5wYXJhbXNdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGFiYyA9IHJlcS5xdWVyeS5wYXJhbXNcclxuICAgIGNvbnNvbGUubG9nKHJlcSlcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgJ1BhcmFtJzogYWJjIH0pXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImFiYyIsInF1ZXJ5IiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9