(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Services.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isActiveCard: false,
      card: 1,
      backgroundColorModal: ""
    };
  },
  methods: {
    serviceOpen: function serviceOpen() {
      this.isActiveCard = !this.isActiveCard;

      if (this.isActiveCard == true) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
    colorize: function colorize() {
      if (this.card == 1) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgba(36, 226, 254, 1) 0%,\n      rgba(36, 176, 254, 0.7) 54%,\n      rgba(35, 126, 253, 1) 100%\n    )";
      } else if (this.card == 2) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgb(255, 211, 36) 0%,\n      rgba(254, 187, 36, 0.7) 54%,\n      rgba(253, 163, 35, 0.99) 100%\n    )";
      } else if (this.card == 3) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgba(248, 47, 160, 0.99) 0%,\n      rgba(214, 54, 208, 0.7) 54%,\n      rgba(180, 61, 255, 0.99) 100%\n    )";
      } else if (this.card == 4) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgba(0, 188, 128, 0.99) 0%,\n      rgba(2, 204, 71, 0.7) 54%,\n      rgba(3, 220, 13, 0.99) 100%\n    )";
      } else if (this.card == 5) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgba(10, 39, 119, 0.99) 0%,\n      rgba(6, 23, 175, 0.7) 54%,\n      rgba(97, 87, 233, 0.99) 100%\n    )";
      } else if (this.card == 6) {
        return this.backgroundColorModal = "linear-gradient(\n      -48deg,\n      rgba(165, 80, 11, 0.99) 0%,\n      rgba(204, 133, 2, 0.7) 54%,\n      rgba(226, 111, 16, 0.99) 100%\n    )";
      }
    }
  },
  metaInfo: {
    titleTemplate: "%s | Services ",
    meta: [{
      name: "description",
      content: "Page Description"
    }, {
      name: "robots",
      content: "index, follow"
    }]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.services-section {\r\n  justify-items: center;\n}\n.services-section h3 {\r\n  font-size: max(3vw, 45px);\n}\n.service-cards {\r\n  display: grid;\r\n  grid: auto auto / auto auto auto;\r\n  row-gap: 10px;\r\n  column-gap: 10px;\n}\n.service-cards h4 {\r\n  text-transform: uppercase;\r\n  font-size: max(1.5vw, 30px);\n}\n.service-cards p {\r\n  font-size: max(1.2vw, 18px);\n}\n.service-card {\r\n  width: max(30vw, 20vw);\r\n  height: 50vh;\r\n  color: white;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  align-items: center;\r\n  text-align: center;\n}\n.service-card i {\r\n  font-size: max(6vw, 70px);\r\n  -webkit-text-stroke: 0.008em rgb(255, 255, 255);\n}\n.card-1 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgba(36, 226, 254, 1) 0%,\r\n      rgba(36, 176, 254, 0.7) 54%,\r\n      rgba(35, 126, 253, 1) 100%\r\n    ),\r\n    url(/img/schedule_img1.png) no-repeat center;\n}\n.card-2 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgb(255, 211, 36) 0%,\r\n      rgba(254, 187, 36, 0.7) 54%,\r\n      rgba(253, 163, 35, 0.99) 100%\r\n    ),\r\n    url(/img/schedule_img2.jpg) no-repeat center;\n}\n.card-3 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgba(248, 47, 160, 0.99) 0%,\r\n      rgba(214, 54, 208, 0.7) 54%,\r\n      rgba(180, 61, 255, 0.99) 100%\r\n    ),\r\n    url(/img/schedule_img3.jpg) no-repeat center;\n}\n.card-4 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgba(0, 188, 128, 0.99) 0%,\r\n      rgba(2, 204, 71, 0.7) 54%,\r\n      rgba(3, 220, 13, 0.99) 100%\r\n    ),\r\n    url(/img/schedule_img4.jpg) no-repeat center;\n}\n.card-5 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgba(10, 39, 119, 0.99) 0%,\r\n      rgba(6, 23, 175, 0.7) 54%,\r\n      rgba(97, 87, 233, 0.99) 100%\r\n    ),\r\n    url(/img/schedule_img5.jpg) no-repeat center;\n}\n.card-6 {\r\n  background: linear-gradient(\r\n      -48deg,\r\n      rgba(165, 80, 11, 0.99) 0%,\r\n      rgba(204, 133, 2, 0.7) 54%,\r\n      rgba(226, 111, 16, 0.99) 100%\r\n    ),\r\n    url(/img/schedule_img6.png) no-repeat center;\n}\n.card-button {\r\n  background-color: transparent;\r\n  border: 2px solid white;\r\n  height: 50px;\r\n  width: 40%;\r\n  text-transform: uppercase;\r\n  justify-self: center;\r\n  text-align: center;\r\n  display: grid;\r\n  align-items: center;\n}\n.service-card-overlay {\r\n  position: fixed;\r\n  background: white;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0%;\r\n  visibility: hidden;\r\n  transition: opacity 0.35s, visibility 0.35s, height 0.35s;\r\n  overflow: hidden;\n}\n.service-card-overlay.open {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  height: 100%;\r\n  z-index: 5;\n}\n.service-card-overlay.open .overlay-menu {\r\n  height: 100vh;\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  opacity: 1;\r\n  display: grid;\r\n  grid: auto / 1fr 3fr 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n  text-align: center;\n}\n.service-card-overlay.open .overlay-menu h2 {\r\n  font-size: max(2.5vw, 42px);\r\n  text-transform: uppercase;\n}\n.service-card-overlay.open .overlay-menu i {\r\n  font-size: max(2.5vw, 42px);\r\n  color: white;\n}\n.service-card-overlay.open .overlay-menu img {\r\n  width: 20vw;\r\n  height: 15vh;\n}\n.service-card-overlay.open .overlay-menu p {\r\n  font-size: max(1.2vw, 16px);\n}\n.service-card-overlay.open .overlay-menu .card-info {\r\n  grid-column: 2/2;\n}\r\n\r\n/*MOBILE START */\n@media (max-width: 767.98px) {\n.service-card {\r\n    width: max(75vw, 30vw) !important;\n}\n.service-cards {\r\n    grid: 1fr 1fr 1fr 1fr 1fr 1fr / 1fr !important;\n}\n}\r\n/*MOBILE END */\r\n/*TABLET START */\n@media (max-width: 991.98px) {\n.service-card {\r\n    width: max(45vw, 30vw);\n}\n.service-cards {\r\n    grid: 1fr 1fr 1fr / 1fr 1fr;\n}\n}\r\n/*TABLET END */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "page-section services-section" }, [
    _c("h3", [_vm._v(_vm._s(_vm.$t("services-title")))]),
    _vm._v(" "),
    _c("div", { staticClass: "service-cards" }, [
      _c("div", { staticClass: "service-card card-1 hvr-bob" }, [
        _c("i", {
          staticClass: "fa fa-desktop",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card1-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card1-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 1
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "service-card-overlay",
          class: { open: _vm.isActiveCard }
        },
        [
          _c(
            "div",
            {
              staticClass: "overlay-menu",
              style: { background: _vm.backgroundColorModal }
            },
            [
              _vm.card == 1
                ? _c("div", { staticClass: "card-info card-info-1" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card1 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "/img/webapp.jpg", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.card == 2
                ? _c("div", { staticClass: "card-info card-info-2" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card2 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "bla.jgp", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.card == 3
                ? _c("div", { staticClass: "card-info card-info-3" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card3 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "bla.jgp", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.card == 4
                ? _c("div", { staticClass: "card-info card-info-4" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card4 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "bla.jgp", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.card == 5
                ? _c("div", { staticClass: "card-info card-info-5" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card5 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "bla.jgp", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.card == 6
                ? _c("div", { staticClass: "card-info card-info-6" }, [
                    _c("i", {
                      staticClass: "fa fa-times pointer",
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.serviceOpen }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v("Card6 Title")]),
                    _vm._v(" "),
                    _c("img", { attrs: { src: "bla.jgp", alt: "" } }),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!"
                      )
                    ])
                  ])
                : _vm._e()
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "service-card card-2 hvr-bob" }, [
        _c("i", {
          staticClass: "fa fa-mobile-alt",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card2-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card2-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 2
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-card card-3 hvr-bob" }, [
        _c("i", {
          staticClass: "fa fa-robot",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card3-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card3-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 3
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-card card-4 hvr-bob" }, [
        _c("i", {
          staticClass: "fa fa-search-dollar",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card4-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card4-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 4
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-card card-5 hvr-bob" }, [
        _c("i", { staticClass: "fa fa-bug", attrs: { "aria-hidden": "true" } }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card5-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card5-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 5
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-card card-6 hvr-bob" }, [
        _c("i", { staticClass: "fa fa-eye", attrs: { "aria-hidden": "true" } }),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.$t("services-card6-title")))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.$t("services-card6-desc")))]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "card-button hvr-shrink pointer",
            on: {
              click: function($event) {
                _vm.serviceOpen()
                _vm.card = 6
                _vm.colorize()
              }
            }
          },
          [_vm._v("Learn More")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/client/Services.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/client/Services.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=5f0a122e& */ "./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/Services.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/client/Services.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=5f0a122e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Services.vue?vue&type=template&id=5f0a122e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_5f0a122e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);