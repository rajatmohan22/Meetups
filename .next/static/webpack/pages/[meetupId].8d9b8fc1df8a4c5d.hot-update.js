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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function connectToDatabase() {\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(\"mongodb://127.0.0.1:27017/meetups\");\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n    }\n}\nconnectToDatabase();\nconst MeetupDetailsPage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: props.meetups.title\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rajat\\\\Documents\\\\Projects\\\\Extras\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, undefined);\n};\n_c = MeetupDetailsPage;\nvar __N_SSG = true;\n//Should be in this format.\n// [\n//   {\n//     params: {\n//       meetupId: \"m1\",\n//     },\n//   },\n//   {\n//     params: {\n//       meetupId: \"m2\",\n//     },\n//   },\n// ],\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFDbkM7QUFFaEMsZUFBZUU7SUFDYixJQUFJO1FBQ0YsTUFBTUQsdURBQWdCLENBQUM7UUFDdkJHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsZ0NBQWdDQTtJQUNoRDtBQUNGO0FBRUFKO0FBRUEsTUFBTUssb0JBQW9CLENBQUNDO0lBQ3pCLHFCQUFPLDhEQUFDUix5RUFBYUE7UUFBQ1MsT0FBT0QsTUFBTUUsT0FBTyxDQUFDRCxLQUFLOzs7Ozs7QUFDbEQ7S0FGTUY7O0FBSU4sMkJBQTJCO0FBQzNCLElBQUk7QUFDSixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBNZWV0dXAgZnJvbSBcIi4uLy4uL2RhdGEvc2NoZW1hcy9tZWV0dXBTY2hlbWFcIjtcclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L21lZXR1cHNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb0RCXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5jb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlsc1BhZ2UgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPE1lZXR1cERldGFpbHMgdGl0bGU9e3Byb3BzLm1lZXR1cHMudGl0bGV9IC8+O1xyXG59O1xyXG5cclxuLy9TaG91bGQgYmUgaW4gdGhpcyBmb3JtYXQuXHJcbi8vIFtcclxuLy8gICB7XHJcbi8vICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgbWVldHVwSWQ6IFwibTJcIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gXSxcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHNQYWdlO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgbWVldHVwSWRzID0gYXdhaXQgTWVldHVwLmZpbmQoe30sIFwiX2lkXCIpO1xyXG4gIGNvbnN0IHBhdGhzID0gbWVldHVwSWRzLm1hcCgobWVldHVwSWQpID0+IHtcclxuICAgIHJldHVybiB7IHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwSWQuX2lkLnRvU3RyaW5nKCkgfSB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHMsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgY29uc3Qgc3BlY2lmaWNNZWV0dXAgPSBhd2FpdCBNZWV0dXAuZmluZE9uZSh7IF9pZDogbWVldHVwSWQgfSk7XHJcbiAgY29uc29sZS5sb2coc3BlY2lmaWNNZWV0dXApO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiB7XHJcbiAgICAgICAgaWQ6IG1lZXR1cElkLFxyXG4gICAgICAgIHRpdGxlOiBzcGVjaWZpY01lZXR1cC50aXRsZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsIm1vbmdvb3NlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiTWVldHVwRGV0YWlsc1BhZ2UiLCJwcm9wcyIsInRpdGxlIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});