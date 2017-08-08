webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(4);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f74a48c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(16);
function injectStyle (ssrContext) {
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f74a48c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SettingLists__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Preview__ = __webpack_require__(12);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      settingTree: {
        resources: {
          column: ['pattern', 'security'],
          patterns: [{ pattern: '/resources/**', security: 'none' }]
        },
        formLogin: {
          loginPage: '/login.jsp',
          failureUrl: '/login.jsp?error=true'
        },
        logout: {
          successUrl: '/',
          deleteCookies: 'JSESSIONID'
        },
        interceptUrls: {
          column: ['pattern', 'access'],
          patterns: [{ pattern: '/login.jsp', access: 'permitAll' }, { pattern: '/**', access: 'isAuthenticated()' }]
        },
        enableCSRFProtection: true
      },
      focuses: {
        resources: false,
        login: false,
        logout: false,
        policies: false,
        csrf: false,
        misc: false
      }
    };
  },

  methods: {
    focusOn: function focusOn(target) {
      this.focuses[target] = true;
    },
    focusOut: function focusOut(target) {
      this.focuses[target] = false;
    },
    addNewResource: function addNewResource() {
      this.settingTree.resources.patterns.push({ pattern: '', security: '' });
    },
    addNewPolicy: function addNewPolicy() {
      this.settingTree.interceptUrls.patterns.push({ pattern: '', access: '' });
    }
  },
  components: {
    SettingLists: __WEBPACK_IMPORTED_MODULE_0__components_SettingLists__["a" /* default */], Preview: __WEBPACK_IMPORTED_MODULE_1__components_Preview__["a" /* default */]
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingLists_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e28857_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_SettingLists_vue__ = __webpack_require__(11);
function injectStyle (ssrContext) {
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingLists_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e28857_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_SettingLists_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'setting-lists',
  props: ['setting'],
  data: function data() {
    return {
      res: { open: true },
      login: { open: true },
      logout: { open: true },
      policies: { open: true },
      csrf: { open: true },
      misc: { open: true }
    };
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "settings"
    }
  }, [_c('h2', {
    staticClass: "h4"
  }, [_vm._v("Setting")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('span', {
    staticClass: "fold float-left"
  }, [_c('a', {
    staticClass: "fold text-muted",
    on: {
      "click": function($event) {
        _vm.res.open = !_vm.res.open
      }
    }
  }, [_vm._v(_vm._s(_vm.res.open ? '[-]' : '[+]'))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', {
    staticClass: "h5"
  }, [_vm._v("Resources")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.res.open),
      expression: "res.open"
    }]
  }, [_c('table', {
    staticClass: "table table-sm"
  }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l((_vm.setting.resources.patterns), function(entry, index) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _vm._l((_vm.setting.resources.column), function(key) {
      return _c('td', [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (entry[key]),
          expression: "entry[key]"
        }],
        staticClass: "form-control form-control-sm",
        attrs: {
          "type": "text"
        },
        domProps: {
          "value": entry[key],
          "value": (entry[key])
        },
        on: {
          "focus": function($event) {
            _vm.$emit('focus-on', 'resources');
          },
          "blur": function($event) {
            _vm.$emit('focus-out', 'resources')
          },
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(entry, key, $event.target.value)
          }
        }
      })])
    }), _vm._v(" "), _c('td', {
      staticClass: "tddelbtn"
    }, [_c('button', {
      staticClass: "delbtn btn btn-danger btn-sm",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.setting.resources.patterns.splice(index, 1)
        }
      }
    }, [_vm._v("\n            del\n          ")])])], 2)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }, [_c('button', {
    staticClass: "addbtn btn btn-outline-primary btn-sm float-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.$emit('add-new-resource');
      }
    }
  }, [_vm._v("\n        add\n      ")])])]), _vm._v(" "), _c('span', {
    staticClass: "fold float-left"
  }, [_c('a', {
    staticClass: "fold text-muted",
    on: {
      "click": function($event) {
        _vm.login.open = !_vm.login.open
      }
    }
  }, [_vm._v(_vm._s(_vm.login.open ? '[-]' : '[+]'))])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('h3', {
    staticClass: "h5"
  }, [_vm._v("Login")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.login.open),
      expression: "login.open"
    }]
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-5 col-form-label",
    attrs: {
      "for": "login-page"
    }
  }, [_vm._v("Login Page")]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.setting.formLogin.loginPage),
      expression: "setting.formLogin.loginPage"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "type": "text",
      "id": "login-page"
    },
    domProps: {
      "value": _vm.setting.formLogin.loginPage,
      "value": (_vm.setting.formLogin.loginPage)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus-on', 'login');
      },
      "blur": function($event) {
        _vm.$emit('focus-out', 'login')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.setting.formLogin.loginPage = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "col-5 col-form-label",
    attrs: {
      "for": "login-failure"
    }
  }, [_vm._v("Login Failure Url")]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.setting.formLogin.failureUrl),
      expression: "setting.formLogin.failureUrl"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "type": "text",
      "id": "login-failure"
    },
    domProps: {
      "value": _vm.setting.formLogin.failureUrl,
      "value": (_vm.setting.formLogin.failureUrl)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus-on', 'login');
      },
      "blur": function($event) {
        _vm.$emit('focus-out', 'login')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.setting.formLogin.failureUrl = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('span', {
    staticClass: "fold float-left"
  }, [_c('a', {
    staticClass: "fold text-muted",
    on: {
      "click": function($event) {
        _vm.logout.open = !_vm.logout.open
      }
    }
  }, [_vm._v(_vm._s(_vm.logout.open ? '[-]' : '[+]'))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h3', {
    staticClass: "h5"
  }, [_vm._v("Logout")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.logout.open),
      expression: "logout.open"
    }]
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-5 col-form-label",
    attrs: {
      "for": "logout-success-url"
    }
  }, [_vm._v("Logout Success Url")]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.setting.logout.successUrl),
      expression: "setting.logout.successUrl"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "type": "text",
      "id": "logout-success-url"
    },
    domProps: {
      "value": _vm.setting.logout.successUrl,
      "value": (_vm.setting.logout.successUrl)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus-on', 'logout');
      },
      "blur": function($event) {
        _vm.$emit('focus-out', 'logout')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.setting.logout.successUrl = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "col-5 col-form-label",
    attrs: {
      "for": "delete-cookies"
    }
  }, [_vm._v("Delete Cookies")]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.setting.logout.deleteCookies),
      expression: "setting.logout.deleteCookies"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "type": "text",
      "id": "delete-cookies"
    },
    domProps: {
      "value": _vm.setting.logout.deleteCookies,
      "value": (_vm.setting.logout.deleteCookies)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus-on', 'logout');
      },
      "blur": function($event) {
        _vm.$emit('focus-out', 'logout')
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.setting.logout.deleteCookies = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('span', {
    staticClass: "fold float-left"
  }, [_c('a', {
    staticClass: "fold text-muted",
    on: {
      "click": function($event) {
        _vm.policies.open = !_vm.policies.open
      }
    }
  }, [_vm._v(_vm._s(_vm.policies.open ? '[-]' : '[+]'))])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('h3', {
    staticClass: "h5"
  }, [_vm._v("Access Policies")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.policies.open),
      expression: "policies.open"
    }]
  }, [_c('table', {
    staticClass: "table table-sm"
  }, [_vm._m(6), _vm._v(" "), _c('tbody', _vm._l((_vm.setting.interceptUrls.patterns), function(entry, index) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _vm._l((_vm.setting.interceptUrls.column), function(key) {
      return _c('td', [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (entry[key]),
          expression: "entry[key]"
        }],
        staticClass: "form-control form-control-sm",
        attrs: {
          "type": "text"
        },
        domProps: {
          "value": entry[key],
          "value": (entry[key])
        },
        on: {
          "focus": function($event) {
            _vm.$emit('focus-on', 'policies');
          },
          "blur": function($event) {
            _vm.$emit('focus-out', 'policies')
          },
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(entry, key, $event.target.value)
          }
        }
      })])
    }), _vm._v(" "), _c('td', {
      staticClass: "tddelbtn"
    }, [_c('button', {
      staticClass: "delbtn btn btn-danger btn-sm float-right",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.setting.interceptUrls.patterns.splice(index, 1)
        }
      }
    }, [_vm._v("\n          del\n        ")])])], 2)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }, [_c('button', {
    staticClass: "addbtn btn btn-outline-primary btn-sm float-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.$emit('add-new-policy');
      }
    }
  }, [_vm._v("add")])])]), _vm._v(" "), _c('span', {
    staticClass: "fold float-left"
  }, [_c('a', {
    staticClass: "fold text-muted",
    on: {
      "click": function($event) {
        _vm.csrf.open = !_vm.csrf.open
      }
    }
  }, [_vm._v(_vm._s(_vm.csrf.open ? '[-]' : '[+]'))])]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('h3', {
    staticClass: "h5"
  }, [_vm._v("CSRF Protection")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.csrf.open),
      expression: "csrf.open"
    }]
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('div', {
    staticClass: "alert",
    class: {
      'alert-danger': !_vm.setting.enableCSRFProtection
    }
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.setting.enableCSRFProtection),
      expression: "setting.enableCSRFProtection"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.setting.enableCSRFProtection) ? _vm._i(_vm.setting.enableCSRFProtection, null) > -1 : (_vm.setting.enableCSRFProtection)
    },
    on: {
      "focus": function($event) {
        _vm.$emit('focus-on', 'csrf');
      },
      "blur": function($event) {
        _vm.$emit('focus-out', 'csrf')
      },
      "__c": function($event) {
        var $$a = _vm.setting.enableCSRFProtection,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.setting.enableCSRFProtection = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.setting.enableCSRFProtection = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.setting.enableCSRFProtection = $$c
        }
      }
    }
  }), _vm._v(" "), (!_vm.setting.enableCSRFProtection) ? _c('span', [_c('strong', [_vm._v("Enable CSRF protection")]), _vm._v(" "), _vm._v(" "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("Danger!")])]) : _c('span', [_vm._v("Enable CSRF protection "), _c('span', {
    staticClass: "badge badge-pill badge-success"
  }, [_vm._v("Good!")])])])])])]), _vm._v(" "), _c('hr')])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-5 col-form-label",
    attrs: {
      "for": "spring-security-version"
    }
  }, [_vm._v("Spring Security Version")]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('select', {
    staticClass: "form-control form-control-sm",
    attrs: {
      "id": "spring-security-version"
    }
  }, [_c('option', {
    attrs: {
      "value": "4.x.x"
    }
  }, [_vm._v("4.x.x")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "guideline float-right"
  }, [_c('a', {
    staticClass: "guideline text-muted",
    attrs: {
      "href": "https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-http-attributes"
    }
  }, [_vm._v("[doc]")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Directory or File")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Security")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "guideline float-right"
  }, [_c('a', {
    staticClass: "guideline text-muted",
    attrs: {
      "href": "https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-form-login"
    }
  }, [_vm._v("[doc]")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "guideline float-right"
  }, [_c('a', {
    staticClass: "guideline text-muted",
    attrs: {
      "href": "https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-logout"
    }
  }, [_vm._v("[doc]")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "guideline float-right"
  }, [_c('a', {
    staticClass: "guideline text-muted",
    attrs: {
      "href": "https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-intercept-url"
    }
  }, [_vm._v("[doc]")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Directory or File")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Permissions")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "guideline float-right"
  }, [_c('a', {
    staticClass: "guideline text-muted",
    attrs: {
      "href": "https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#csrf"
    }
  }, [_vm._v("[doc]")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Preview_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8d90ddf4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Preview_vue__ = __webpack_require__(15);
function injectStyle (ssrContext) {
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Preview_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8d90ddf4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Preview_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'preview',
  props: ['setting', 'focuses'],
  data: function data() {
    return {};
  },

  method: {}
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "preview"
    }
  }, [_c('pre', {
    attrs: {
      "id": "preview"
    }
  }, [_c('code', {
    staticClass: "lang-xml"
  }, [_vm._v("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<beans xmlns=\"http://www.springframework.org/schema/beans\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xmlns:sec=\"http://www.springframework.org/schema/security\"\n    xsi:schemaLocation=\"\n        http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security.xsd\n        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n    \">\n"), _vm._v("\n"), _vm._l((_vm.setting.resources.patterns), function(entry) {
    return _c('div', {
      class: {
        focused: _vm.focuses.resources
      }
    }, [_vm._v("    <sec:http pattern=\""), _c('span', [_vm._v(_vm._s(entry.pattern))]), _vm._v("\""), _vm._v(" security=\""), _c('span', [_vm._v(_vm._s(entry.security))]), _vm._v("\" />")])
  }), _vm._v("    <sec:http>"), _vm._v("      "), _c('div', {
    class: {
      focused: _vm.focuses.login
    }
  }, [_vm._v("     <sec:form-login\n        login-page=\""), _c('span', [_vm._v(_vm._s(_vm.setting.formLogin.loginPage))]), _vm._v("\"\n        authentication-failure-url=\""), _c('span', [_vm._v(_vm._s(_vm.setting.formLogin.failureUrl))]), _vm._v("\" />")]), _c('div', {
    class: {
      focused: _vm.focuses.logout
    }
  }, [_vm._v("     <sec:logout\n        logout-success-url=\""), _c('span', [_vm._v(_vm._s(_vm.setting.logout.successUrl))]), _vm._v("\"\n        delete-cookies=\""), _c('span', [_vm._v(_vm._s(_vm.setting.logout.deleteCookies))]), _vm._v("\" />")]), _vm._v("      <sec:access-denied-handler ref=\"accessDeniedHandler\"/>\n      <sec:session-management />"), _c('div', {
    class: {
      focused: _vm.focuses.policies
    }
  }, _vm._l((_vm.setting.interceptUrls.patterns), function(entry) {
    return _c('div', [_vm._v("      <sec:intercept-url pattern=\""), _c('span', [_vm._v(_vm._s(entry.pattern))]), _vm._v("\""), _vm._v(" access=\""), _c('span', [_vm._v(_vm._s(entry.access))]), _vm._v("\" />")])
  })), _vm._v("    </sec:http>\n\n  <sec:authentication-manager />\n"), _vm._v("\n"), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.setting.enableCSRFProtection),
      expression: "setting.enableCSRFProtection"
    }],
    class: {
      focused: _vm.focuses.csrf
    }
  }, [_vm._v("  <!-- CSRF Protection -->\n  <bean id=\"accessDeniedHandler\"\n      class=\"org.springframework.security.web.access.DelegatingAccessDeniedHandler\">\n      <constructor-arg index=\"0\">\n          <map>\n              <entry\n                  key=\"org.springframework.security.web.csrf.InvalidCsrfTokenException\">\n                  <bean\n                      class=\"org.springframework.security.web.access.AccessDeniedHandlerImpl\">\n                      <property name=\"errorPage\"\n                          value=\"/WEB-INF/views/common/error/invalidCsrfTokenError.jsp\" />\n                  </bean>\n              </entry>\n              <entry\n                  key=\"org.springframework.security.web.csrf.MissingCsrfTokenException\">\n                  <bean\n                      class=\"org.springframework.security.web.access.AccessDeniedHandlerImpl\">\n                      <property name=\"errorPage\"\n                          value=\"/WEB-INF/views/common/error/missingCsrfTokenError.jsp\" />\n                  </bean>\n              </entry>\n          </map>\n      </constructor-arg>\n      <constructor-arg index=\"1\">\n          <bean\n              class=\"org.springframework.security.web.access.AccessDeniedHandlerImpl\">\n              <property name=\"errorPage\"\n                  value=\"/WEB-INF/views/common/error/accessDeniedError.jsp\" />\n          </bean>\n      </constructor-arg>\n  </bean>\n")]), _vm._v("\n</beans>\n")], 2)])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('setting-lists', {
    attrs: {
      "setting": _vm.settingTree
    },
    on: {
      "add-new-resource": _vm.addNewResource,
      "focus-on": _vm.focusOn,
      "focus-out": _vm.focusOut,
      "add-new-policy": _vm.addNewPolicy
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('preview', {
    attrs: {
      "setting": _vm.settingTree,
      "focuses": _vm.focuses
    }
  })], 1)])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[1]);
//# sourceMappingURL=app.9ab65bab9fc2347639fc.js.map