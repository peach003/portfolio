(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_LifeCarousel_js"],{

/***/ "./src/components/LifeCarousel.js":
/*!****************************************!*\
  !*** ./src/components/LifeCarousel.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LifeCarousel; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-coverflow */ "./node_modules/swiper/modules/effect-coverflow.css");
/* harmony import */ var swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_coverflow__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\WD\\Desktop\\portfolio_website\\src\\components\\LifeCarousel.js";





function LifeCarousel() {
  var _this = this;

  var images = ["/images/life1.jpg", "/images/life2.jpg", "/images/life3.jpg", "/images/life4.jpg", "/images/life5.jpg", "/images/life6.jpg", "/images/life7.jpg"];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      width: "100%",
      maxWidth: "650px",
      height: "650px",
      margin: "0 auto",
      overflow: "hidden"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1 // ✅ 只显示一张
      ,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.EffectCoverflow, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay],
      children: images.map(function (src, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
          style: {
            display: "flex",
            justifyContent: "center",
            // ✅ 居中
            alignItems: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: src,
            alt: "Life ".concat(index + 1),
            style: {
              width: "60%",
              // ✅ 图片宽度占容器80%
              height: "90%",
              // ✅ 图片高度占容器80%
              objectFit: "cover",
              borderRadius: "5px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = LifeCarousel;

var _c;

$RefreshReg$(_c, "LifeCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlmZUNhcm91c2VsLmpzIl0sIm5hbWVzIjpbIkxpZmVDYXJvdXNlbCIsImltYWdlcyIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIkVmZmVjdENvdmVyZmxvdyIsIkF1dG9wbGF5IiwibWFwIiwic3JjIiwiaW5kZXgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE1BQU0sR0FBRyxDQUNiLG1CQURhLEVBRWIsbUJBRmEsRUFHYixtQkFIYSxFQUliLG1CQUphLEVBS2IsbUJBTGEsRUFNYixtQkFOYSxFQU9iLG1CQVBhLENBQWY7QUFVQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxjQUFRLEVBQUUsT0FGTDtBQUdMQyxZQUFNLEVBQUUsT0FISDtBQUlMQyxZQUFNLEVBQUUsUUFKSDtBQUtMQyxjQUFRLEVBQUU7QUFMTCxLQURUO0FBQUEsMkJBVUUsOERBQUMsZ0RBQUQ7QUFDRSxZQUFNLEVBQUUsV0FEVjtBQUVFLGdCQUFVLEVBQUUsSUFGZDtBQUdFLG9CQUFjLEVBQUUsSUFIbEI7QUFJRSxtQkFBYSxFQUFFLENBSmpCLENBSXFCO0FBSnJCO0FBS0UscUJBQWUsRUFBRTtBQUNmQyxjQUFNLEVBQUUsQ0FETztBQUVmQyxlQUFPLEVBQUUsQ0FGTTtBQUdmQyxhQUFLLEVBQUUsR0FIUTtBQUlmQyxnQkFBUSxFQUFFLENBSks7QUFLZkMsb0JBQVksRUFBRTtBQUxDLE9BTG5CO0FBWUUsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxJQURDO0FBRVJDLDRCQUFvQixFQUFFO0FBRmQsT0FaWjtBQWdCRSxhQUFPLEVBQUUsQ0FBQ0MsMkRBQUQsRUFBa0JDLG9EQUFsQixDQWhCWDtBQUFBLGdCQWtCR2QsTUFBTSxDQUFDZSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ1YsOERBQUMscURBQUQ7QUFFRSxlQUFLLEVBQUU7QUFDTEMsbUJBQU8sRUFBRSxNQURKO0FBRUxDLDBCQUFjLEVBQUUsUUFGWDtBQUVxQjtBQUMxQkMsc0JBQVUsRUFBRTtBQUhQLFdBRlQ7QUFBQSxpQ0FRRTtBQUNFLGVBQUcsRUFBRUosR0FEUDtBQUVFLGVBQUcsaUJBQVVDLEtBQUssR0FBRyxDQUFsQixDQUZMO0FBR0UsaUJBQUssRUFBRTtBQUNMaEIsbUJBQUssRUFBRSxLQURGO0FBQ1c7QUFDaEJFLG9CQUFNLEVBQUUsS0FGSDtBQUVXO0FBQ2hCa0IsdUJBQVMsRUFBRSxPQUhOO0FBSUxDLDBCQUFZLEVBQUUsS0FKVDtBQUtMQyx1QkFBUyxFQUFFO0FBTE47QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsV0FDT04sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REO0tBakV1QmxCLFkiLCJmaWxlIjoic3RhdGljL2NodW5rcy9zcmNfY29tcG9uZW50c19MaWZlQ2Fyb3VzZWxfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0IHsgRWZmZWN0Q292ZXJmbG93LCBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL2VmZmVjdC1jb3ZlcmZsb3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlmZUNhcm91c2VsKCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcclxuICAgIFwiL2ltYWdlcy9saWZlMS5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlMi5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlMy5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlNC5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlNS5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlNi5qcGdcIixcclxuICAgIFwiL2ltYWdlcy9saWZlNy5qcGdcIlxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjY1MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjY1MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxTd2lwZXJcclxuICAgICAgICBlZmZlY3Q9eydjb3ZlcmZsb3cnfVxyXG4gICAgICAgIGdyYWJDdXJzb3I9e3RydWV9XHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17MX0gIC8vIOKchSDlj6rmmL7npLrkuIDlvKBcclxuICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q9e3tcclxuICAgICAgICAgIHJvdGF0ZTogMCxcclxuICAgICAgICAgIHN0cmV0Y2g6IDAsXHJcbiAgICAgICAgICBkZXB0aDogMTAwLFxyXG4gICAgICAgICAgbW9kaWZpZXI6IDEsXHJcbiAgICAgICAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXV0b3BsYXk9e3tcclxuICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbW9kdWxlcz17W0VmZmVjdENvdmVyZmxvdywgQXV0b3BsYXldfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKHNyYywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTd2lwZXJTbGlkZVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCAvLyDinIUg5bGF5LitXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtgTGlmZSAke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIiwgICAvLyDinIUg5Zu+54mH5a695bqm5Y2g5a655ZmoODAlXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiOTAlXCIsICAvLyDinIUg5Zu+54mH6auY5bqm5Y2g5a655ZmoODAlXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDhweCAyMHB4IHJnYmEoMCwwLDAsMC40KVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==