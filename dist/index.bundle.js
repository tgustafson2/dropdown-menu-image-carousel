/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdropdown_menu_image_carousel"] = self["webpackChunkdropdown_menu_image_carousel"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let button = document.querySelector(\".drop-btn\");\n\nbutton.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  document.querySelector(\"#drop-menu\").classList.toggle(\"show\");\n});\n\nwindow.onclick = function (event) {\n  if (!event.target.matches(\".drop-btn\")) {\n    let dropdowns = document.querySelector(\".dropdown-content\");\n    if (dropdowns.classList.contains(\"show\")) {\n      dropdowns.classList.remove(\"show\");\n    }\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJvcGRvd24tbWVudS1pbWFnZS1jYXJvdXNlbC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtYnRuXCIpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3AtbWVudVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbn0pO1xuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLmRyb3AtYnRuXCIpKSB7XG4gICAgbGV0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tY29udGVudFwiKTtcbiAgICBpZiAoZHJvcGRvd25zLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpIHtcbiAgICAgIGRyb3Bkb3ducy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);