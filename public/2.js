(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  created: function created() {
    this.setTotalPages();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["recentBlogs", "categories", "blogs"])), {}, {
    filteredBlogs: function filteredBlogs() {
      var vm = this;

      if (vm.activeFilter > 0) {
        var filtereddata = this.blogs.filter(function (p) {
          return p.category_id == vm.activeFilter;
        });
        var filteredreversedata = filtereddata.reverse();
        var searchedandfiltered = filteredreversedata.filter(function (p) {
          return p.content.includes(vm.searchKeyword);
        });
        return searchedandfiltered;
      } else {
        var _searchedandfiltered = this.blogs.filter(function (p) {
          return p.content.includes(vm.searchKeyword);
        });

        return _searchedandfiltered.reverse();
      }
    },
    paginatedBlogs: function paginatedBlogs() {
      var vm = this;
      var start = (this.currentPage - 1) * this.itemPerPage,
          end = start + this.itemPerPage;
      var paginatedBlog = this.filteredBlogs.slice(start, end);
      return paginatedBlog;
    }
  }),
  data: function data() {
    return {
      totalPages: [],
      itemPerPage: 3,
      currentPage: 1,
      activeFilter: 0,
      searchKeyword: "",
      clickedToggle: 0,
      showToggle: false,
      baseurl: "http://localhost"
    };
  },
  watch: {
    filteredBlogs: function filteredBlogs() {
      this.setTotalPages();
    }
  },
  methods: {
    setTotalPages: function setTotalPages() {
      var vm = this;
      vm.totalPages = Math.ceil(vm.filteredBlogs.length / vm.itemPerPage);
    },
    nextPage: function nextPage() {
      this.currentPage++;
    },
    prevPage: function prevPage() {
      this.currentPage--;
    },
    pageSwitcher: function pageSwitcher(pagenum) {
      this.currentPage = pagenum;
    },
    categorySwitcher: function categorySwitcher(num) {
      this.activeFilter = num;
    },
    categoryReset: function categoryReset() {
      this.activeFilter = 0;
    },
    shareToggle: function shareToggle(val) {
      this.clickedToggle = val;
      this.showToggle = !this.showToggle;
    },
    goShare: function goShare(socialplat, blogId) {
      var route = this.$router.resolve({
        name: "Blog Detail",
        params: blogId
      });

      if (socialplat == "facebook") {
        var facebookshare = "https://www.facebook.com/sharer/sharer.php?u=";
        window.open(facebookshare + this.baseurl + route.href, "_blank");
      } else if (socialplat == "linkedin") {
        var linkedinurl = "https://www.linkedin.com/sharing/share-offsite/?url=";
        window.open(linkedinurl + this.baseurl + route.href, "_blank");
      } else if (socialplat == "twitter") {
        var twitterurl = "https://twitter.com/home?status=";
        window.open(twitterurl + this.baseurl + route.href, "_blank");
      } else if (socialplat == "mail") {
        window.open("mailto:pleaseenter@mail.com?subject=Do you wanna check this out &body=" + this.baseurl + route.href, "_blank");
      }
    }
  },
  metaInfo: {
    titleTemplate: "%s | Blog ",
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pagination {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  justify-content: center;\r\n  align-items: end;\n}\n.blog-section {\r\n  grid: 1fr /1fr 8fr 1fr;\r\n  row-gap: 20px;\n}\n.blog-news {\r\n  display: grid;\r\n  grid-column: 2/2;\r\n  row-gap: 10px;\n}\n.blog-item {\r\n  display: grid;\r\n  justify-items: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n  row-gap: 20px;\n}\n.blog-item img {\r\n  width: 350px;\r\n  height: 230px;\n}\n.blog-item-title {\r\n  text-transform: uppercase;\n}\n.underline-blog {\r\n  height: 4px;\r\n  width: 20%;\n}\n.blog-tabs {\r\n  background-color: white;\n}\n.blog-tabs h3 {\r\n  font-size: 30px;\n}\n.blog-tabs .minimize {\r\n  display: grid;\r\n  color: green;\n}\n.blog-tabs input {\r\n  border: none;\r\n  width: 80%;\r\n  height: 50px;\r\n  border-color: green;\r\n  color: green;\r\n  font-size: 16px;\r\n  border-bottom: 2px solid green;\n}\n.blog-tabs button {\r\n  width: 15%;\r\n  height: 50px;\r\n  border-color: var(--gradient-color2);\r\n  color: white;\r\n  background-color: var(--gradient-color2);\n}\n.recent-post-list {\r\n  display: grid;\r\n  row-gap: 5vh;\r\n  align-items: center;\r\n  align-content: center;\n}\n.recent-post-list img {\r\n  width: 70px;\r\n  height: 50px;\n}\n.post-list-item {\r\n  display: grid;\r\n  align-items: center;\r\n  grid: auto / auto auto;\r\n  cursor: pointer;\n}\n.post-list-item p {\r\n  color: green;\r\n  font-weight: 600;\n}\n.blog-category-list {\r\n  display: grid;\r\n  row-gap: 5px;\r\n  color: green;\r\n  font-size: 18px;\n}\n.blog-category-item {\r\n  text-transform: uppercase;\r\n  cursor: pointer;\n}\n.blog-item-category {\r\n  text-transform: capitalize;\n}\n.active-page {\r\n  background-color: var(--gradient-color2);\r\n  color: white;\n}\n.category-click {\r\n  display: inline;\n}\n.blog-break-line {\r\n  color: green;\r\n  height: 2px;\n}\n.blog-tab-container {\r\n  display: grid;\r\n  row-gap: 25px;\n}\n.social-links {\r\n  -webkit-animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;\r\n  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.blog-detail-button {\r\n  display: grid;\r\n  grid-auto-flow: column;\n}\r\n\r\n/* MOBILE START */\n@media (max-width: 767.98px) {\n.blog-section {\r\n    grid: auto auto / auto;\r\n    row-gap: 20px;\n}\n.blog-tabs {\r\n    grid-row: 1;\n}\n.recent-post-list {\r\n    justify-content: center;\n}\n.blog-category-list {\r\n    grid-auto-flow: column;\r\n    justify-items: center;\n}\n.blog-category-title {\r\n    text-align: center;\n}\n.post-list-item {\r\n    column-gap: 10px;\n}\n.blog-tab-container {\r\n    display: grid;\r\n    row-gap: 25px;\n}\n.blog-news {\r\n    grid-column: initial;\n}\n}\r\n/* MOBILE END */\r\n/* TABLET START */\r\n/* TABLET END */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "page-section blog-section" }, [
    _c(
      "div",
      { staticClass: "blog-news" },
      [
        _vm._l(_vm.paginatedBlogs, function(blog, index) {
          return _c("div", { key: index, staticClass: "blog-item" }, [
            _c("img", {
              attrs: { src: "/blog_images/" + blog.id + ".jpg" },
              on: {
                error: function($event) {
                  $event.target.src = "/img/place.png"
                }
              }
            }),
            _vm._v(" "),
            _c("h3", { staticClass: "blog-item-title g-text" }, [
              _vm._v(_vm._s(blog.title))
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "underline-blog g-item" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                _vm._s(
                  _vm._f("truncateFilter")(
                    _vm._f("deleteHtmlTags")(blog.content),
                    50
                  )
                )
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "blog-info" }, [
              blog.updated_at
                ? _c("i", {
                    staticClass: "fa fa-calendar g-text",
                    attrs: { "aria-hidden": "true" }
                  })
                : _vm._e(),
              _vm._v(" "),
              blog.created_at
                ? _c("span", [
                    _vm._v(_vm._s(_vm.$moment(blog.created_at).format("l")))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-user g-text",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(blog.author))]),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-tag g-text",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "blog-item-category" }, [
                _vm._v(_vm._s(_vm.categories[blog.category_id - 1].name))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "blog-detail-button" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn-lg btn-primary hvr-back-pulse pointer",
                    attrs: {
                      tag: "span",
                      to: { name: "Blog Detail", params: { blogId: blog.id } }
                    }
                  },
                  [_vm._v("Read More")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "btn-primary pointer",
                    on: {
                      click: function($event) {
                        return _vm.shareToggle(blog.id)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-share-alt",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v("\n          Share\n        ")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.showToggle && _vm.clickedToggle == blog.id
              ? _c("div", { staticClass: "social-links" }, [
                  _c("i", {
                    staticClass: "fab fa-linkedin linkedin fa-2x pointer",
                    on: {
                      click: function($event) {
                        return _vm.goShare("linkedin", blog.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fab fa-facebook facebook fa-2x pointer",
                    on: {
                      click: function($event) {
                        return _vm.goShare("facebook", blog.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fab fa-twitter twitter fa-2x pointer",
                    on: {
                      click: function($event) {
                        return _vm.goShare("twitter", blog.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fa fa-envelope opera fa-2x pointer",
                    on: {
                      click: function($event) {
                        return _vm.goShare("mail", blog.id)
                      }
                    }
                  })
                ])
              : _vm._e()
          ])
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "pagination" },
          [
            _vm.currentPage > 1
              ? _c(
                  "button",
                  {
                    staticClass: "btn-lg btn-primary",
                    on: {
                      click: function($event) {
                        return _vm.prevPage()
                      }
                    }
                  },
                  [_vm._v("Previous")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.totalPages, function(number) {
              return _vm.totalPages > 1
                ? _c(
                    "button",
                    {
                      staticClass: "btn-primary",
                      class: { "active-page": _vm.currentPage == number },
                      on: {
                        click: function($event) {
                          return _vm.pageSwitcher(number)
                        }
                      }
                    },
                    [_vm._v(_vm._s(number))]
                  )
                : _vm._e()
            }),
            _vm._v(" "),
            _vm.currentPage < _vm.totalPages
              ? _c(
                  "button",
                  {
                    staticClass: "btn-lg btn-primary",
                    on: {
                      click: function($event) {
                        return _vm.nextPage()
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              : _vm._e()
          ],
          2
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "blog-tabs" }, [
      _c("div", { staticClass: "blog-tab-container" }, [
        _c("div", { staticClass: "blog-search-container" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchKeyword,
                expression: "searchKeyword"
              }
            ],
            attrs: { type: "text", placeholder: "Search..." },
            domProps: { value: _vm.searchKeyword },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchKeyword = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "blog-category-list" },
          [
            _c("h3", { staticClass: "g-text blog-category-title" }, [
              _vm._v(_vm._s(_vm.$t("blog-title")))
            ]),
            _vm._v(" "),
            _vm._l(_vm.categories, function(category) {
              return _c("div", { staticClass: "blog-category-item" }, [
                _c(
                  "div",
                  {
                    staticClass: "category-click",
                    on: {
                      click: function($event) {
                        return _vm.categorySwitcher(category.id)
                      }
                    }
                  },
                  [
                    category.id != _vm.activeFilter
                      ? _c("i", { staticClass: "fa fa-caret-right" })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(category.name))])
                  ]
                ),
                _vm._v(" "),
                category.id == _vm.activeFilter
                  ? _c("i", {
                      staticClass: "fa fa-window-close",
                      on: { click: _vm.categoryReset }
                    })
                  : _vm._e()
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "g-item blog-break-line" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "recent-post-list" },
          [
            _c("h3", { staticClass: "g-text" }, [
              _vm._v(_vm._s(_vm.$t("blog-recent-title")))
            ]),
            _vm._v(" "),
            _vm._l(_vm.recentBlogs, function(recentBlog) {
              return _c(
                "router-link",
                {
                  key: recentBlog.id,
                  staticClass: "post-list-item",
                  attrs: {
                    to: {
                      name: "Blog Detail",
                      params: { blogId: recentBlog.id }
                    },
                    tag: "div"
                  }
                },
                [
                  _c("img", {
                    attrs: { src: "blog_images/" + recentBlog.id + ".jpg" },
                    on: {
                      error: function($event) {
                        $event.target.src = "img/place.png"
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(recentBlog.title))])
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "g-item blog-break-line" })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("button", [_c("i", { staticClass: "fa fa-search" })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/client/Blog/Blog.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/client/Blog/Blog.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=02031894& */ "./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/Blog/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=02031894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/client/Blog/Blog.vue?vue&type=template&id=02031894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_02031894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);