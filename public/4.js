(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Contact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errormessage: "",
      errortype: "",
      contactname: "",
      contactemail: "",
      contactcontent: "",
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    };
  },
  methods: {
    postContactForm: function postContactForm() {
      var _this = this;

      axios.post("./api/contact-us", {
        contactname: this.contactname,
        contactemail: this.contactemail,
        contactcontent: this.contactcontent
      }).then(function (response) {
        return _this.errormessage = response.data.message, _this.errortype = response.data.classtype;
      });
    }
  },
  metaInfo: {
    titleTemplate: "%s | Contact Us ",
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contact-title {\n}\n.contact-us-section {\r\n  grid-auto-flow: row;\r\n  justify-items: stretch;\r\n  align-items: center;\r\n  text-align: center;\n}\n.contact-form {\r\n  display: grid;\r\n  align-self: stretch;\r\n  text-align: center;\n}\n.contact-form form {\r\n  display: grid;\r\n  row-gap: 15px;\n}\n.contact-form form input {\r\n  height: 35px;\r\n  border: none;\r\n  border-bottom: 2px solid grey;\n}\n.contact-form form input:focus {\r\n  border: none;\r\n  border-bottom: 2px solid green;\r\n  color: green;\r\n  font-size: max(1.2vw, 18px);\n}\n.contact-form form textarea {\r\n  border: none;\r\n  border-bottom: 2px solid grey;\n}\n.contact-form form textarea:focus {\r\n  border: none;\r\n  border-bottom: 2px solid green;\r\n  color: green;\r\n  font-size: max(1.2vw, 18px);\n}\n.contact-form form button {\r\n  width: 120px;\r\n  height: 50px;\n}\n.contact-us-section h3 {\r\n  font-size: max(2.5vw, 35px);\n}\n.contact-form textarea {\r\n  resize: none;\r\n  border: none;\n}\n.contact-information {\r\n  display: grid;\r\n  justify-items: center;\r\n  text-align: center;\r\n  align-self: stretch;\n}\n.error {\r\n  text-align: center;\r\n  background-color: red;\r\n  color: white;\n}\n.success {\r\n  text-align: center;\r\n  background-color: #237a57;\r\n  color: white;\n}\n#map {\r\n  border: 2px solid #237a57 !important;\r\n\r\n  width: 100%;\r\n  height: 100%;\n}\n.contact-info-title {\r\n  text-transform: uppercase;\r\n  font-size: max(1.2vw, 16px);\n}\r\n/* MOBILE START */\n@media (max-width: 767.98px) {\n}\r\n/* MOBILE END */\r\n/* TABLET START */\r\n/* TABLET END */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "page-section contact-us-section" }, [
    _c("div", { staticClass: "contact-title" }, [
      _c("h3", { staticClass: "g-text" }, [
        _vm._v(_vm._s(_vm.$t("contact-title")))
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "section-underline g-item" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact-form" }, [
      _c("p", [_vm._v(_vm._s(_vm.$t("contact-form-desc")))]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.postContactForm()
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.contactname,
                expression: "contactname"
              }
            ],
            attrs: { type: "text", placeholder: "NAME" },
            domProps: { value: _vm.contactname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.contactname = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.contactemail,
                expression: "contactemail"
              }
            ],
            attrs: { type: "text", placeholder: "EMAIL" },
            domProps: { value: _vm.contactemail },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.contactemail = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.contactcontent,
                expression: "contactcontent"
              }
            ],
            attrs: {
              name: "",
              id: "",
              cols: "20",
              rows: "5",
              placeholder: "MESSAGE"
            },
            domProps: { value: _vm.contactcontent },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.contactcontent = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn-lg btn-primary", attrs: { type: "submit" } },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("contact-info-button")) +
                  "\n        "
              ),
              _c("i", {
                staticClass: "fa fa-envelope",
                attrs: { "aria-hidden": "true" }
              })
            ]
          ),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrf }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "contact-slot", class: [_vm.errortype] }, [
        _vm._v(_vm._s(_vm.errormessage))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact-information" }, [
      _c("h2", { staticClass: "g-text contact-info-title" }, [
        _vm._v(_vm._s(_vm.$t("contact-info-title")))
      ]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.$t("contact-info-desc")))]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("h5", { staticClass: "g-text" }, [
        _vm._v(_vm._s(_vm.$t("contact-info-address")) + ":")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Samplestreet 3 34117 Kassel Germany")]),
      _vm._v(" "),
      _c("h5", { staticClass: "g-text" }, [
        _vm._v("Phone: +49 561 00 00 00 00")
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "g-text" }, [_vm._v("Fax: +49 561 00 00 00 00")]),
      _vm._v(" "),
      _c("h5", { staticClass: "g-text" }, [
        _vm._v(_vm._s(_vm.$t("contact-info-bus-hour")) + ": 8am to 6:30pm")
      ])
    ]),
    _vm._v(" "),
    _c("iframe", {
      staticStyle: { border: "0" },
      attrs: {
        id: "map",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.9193041325416!2d32.84008731582084!3d39.87604542943167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34590a0018d2d%3A0x50fb1c0bb1f1f43e!2zTmFjaSDDh2FrxLFyLCAwNjQ1MCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1sen!2str!4v1594221219754!5m2!1sen!2str",
        frameborder: "0",
        allowfullscreen: "",
        "aria-hidden": "false",
        tabindex: "0"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/client/Contact.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/client/Contact.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=83e6ed36& */ "./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/Contact.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/client/Contact.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=83e6ed36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Contact.vue?vue&type=template&id=83e6ed36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_83e6ed36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);