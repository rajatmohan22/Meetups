"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function connectToDatabase() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(\"mongodb://127.0.0.1:27017/meetups\");\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n    }\n}\nconnectToDatabase();\nconst MeetupDetailsPage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: props.meetups.title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rajat\\\\Documents\\\\Projects\\\\Extras\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, undefined);\n};\n_c = MeetupDetailsPage;\nvar __N_SSG = true;\n// [\n//   {\n//     params: {\n//       meetupId: \"m1\",\n//     },\n//   },\n//   {\n//     params: {\n//       meetupId: \"m2\",\n//     },\n//   },\n// ],\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFDbkM7QUFFaEMsZUFBZUU7SUFDYixJQUFJO1FBQ0YsTUFBTUQsdURBQWdCLENBQUM7UUFDdkJHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsZ0NBQWdDQTtJQUNoRDtBQUNGO0FBRUFKO0FBRUEsTUFBTUssb0JBQW9CLENBQUNDO0lBQ3pCLHFCQUFPLDhEQUFDUix5RUFBYUE7UUFBQ1MsT0FBT0QsTUFBTUUsT0FBTyxDQUFDRCxLQUFLOzs7Ozs7QUFDbEQ7S0FGTUY7O0FBSU4sSUFBSTtBQUNKLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBRUwsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzhmZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IE1lZXR1cCBmcm9tIFwiLi4vLi4vZGF0YS9zY2hlbWFzL21lZXR1cFNjaGVtYVwiO1xyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvbWVldHVwc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6XCIsIGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWxzUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwRGV0YWlscyB0aXRsZT17cHJvcHMubWVldHVwcy50aXRsZX0gLz47XHJcbn07XHJcblxyXG4vLyBbXHJcbi8vICAge1xyXG4vLyAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgIG1lZXR1cElkOiBcIm0yXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0sXHJcbi8vIF0sXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzUGFnZTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IG1lZXR1cElkcyA9IGF3YWl0IE1lZXR1cC5maW5kKHt9LCBcIl9pZFwiKTtcclxuICBjb25zdCBwYXRocyA9IG1lZXR1cElkcy5tYXAoKG1lZXR1cElkKSA9PiB7XHJcbiAgICByZXR1cm4geyBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cElkLl9pZC50b1N0cmluZygpIH0gfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gIGNvbnN0IHNwZWNpZmljTWVldHVwID0gYXdhaXQgTWVldHVwLmZpbmRPbmUoeyBfaWQ6IG1lZXR1cElkIH0pO1xyXG4gIGNvbnNvbGUubG9nKHNwZWNpZmljTWVldHVwKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczoge1xyXG4gICAgICAgIGlkOiBtZWV0dXBJZCxcclxuICAgICAgICB0aXRsZTogXCJFeGFtcGxlIE1lZXR1cFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwibW9uZ29vc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJNZWV0dXBEZXRhaWxzUGFnZSIsInByb3BzIiwidGl0bGUiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});