!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("react"), require("react-modal")) : "function" == typeof define && define.amd ? define([ "react", "react-modal" ], factory) : "object" == typeof exports ? exports.ReactImageLightboxRotate = factory(require("react"), require("react-modal")) : root.ReactImageLightboxRotate = factory(root.react, root["react-modal"]);
}(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_75__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: !1,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // identity function for calling harmony imports with the correct context
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.i = function(value) {
            return value;
        }, __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: !1,
                /******/
                enumerable: !0,
                /******/
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            /******/
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 34);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        var store = __webpack_require__(26)("wks"), uid = __webpack_require__(27), Symbol = __webpack_require__(1).Symbol, USE_SYMBOL = "function" == typeof Symbol;
        (module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        }).store = store;
    }, /* 1 */
    /***/
    function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = global);
    }, /* 2 */
    /***/
    function(module, exports) {
        var core = module.exports = {
            version: "2.5.3"
        };
        "number" == typeof __e && (__e = core);
    }, /* 3 */
    /***/
    function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(11), createDesc = __webpack_require__(24);
        module.exports = __webpack_require__(6) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            return object[key] = value, object;
        };
    }, /* 4 */
    /***/
    function(module, exports) {
        module.exports = {};
    }, /* 5 */
    /***/
    function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(22)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, /* 7 */
    /***/
    function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, /* 8 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
    }, /* 9 */
    /***/
    function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
            if (void 0 == it) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, /* 10 */
    /***/
    function(module, exports) {
        module.exports = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it;
        };
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(5), IE8_DOM_DEFINE = __webpack_require__(46), toPrimitive = __webpack_require__(61), dP = Object.defineProperty;
        exports.f = __webpack_require__(6) ? Object.defineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            return "value" in Attributes && (O[P] = Attributes.value), O;
        };
    }, /* 12 */
    /***/
    function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(26)("keys"), uid = __webpack_require__(27);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, /* 13 */
    /***/
    function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, /* 14 */
    /***/
    function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(47), defined = __webpack_require__(9);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, /* 15 */
    /***/
    function(module, exports, __webpack_require__) {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(69)();
    }, /* 16 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(39),
            __esModule: !0
        };
    }, /* 17 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _isIterable2 = __webpack_require__(36), _isIterable3 = _interopRequireDefault(_isIterable2), _getIterator2 = __webpack_require__(35), _getIterator3 = _interopRequireDefault(_getIterator2);
        exports.default = function() {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = (0, _getIterator3.default)(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i.return && _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) return arr;
                if ((0, _isIterable3.default)(Object(arr))) return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, /* 18 */
    /***/
    function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(19), TAG = __webpack_require__(0)("toStringTag"), ARG = "Arguments" == cof(function() {
            return arguments;
        }()), tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) {}
        };
        module.exports = function(it) {
            var O, T, B;
            return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (T = tryGet(O = Object(it), TAG)) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B;
        };
    }, /* 19 */
    /***/
    function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, /* 20 */
    /***/
    function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10), document = __webpack_require__(1).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, /* 21 */
    /***/
    function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, /* 22 */
    /***/
    function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return !0;
            }
        };
    }, /* 23 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(50), $export = __webpack_require__(44), redefine = __webpack_require__(56), hide = __webpack_require__(3), has = __webpack_require__(7), Iterators = __webpack_require__(4), $iterCreate = __webpack_require__(48), setToStringTag = __webpack_require__(25), getPrototypeOf = __webpack_require__(53), ITERATOR = __webpack_require__(0)("iterator"), BUGGY = !([].keys && "next" in [].keys()), returnThis = function() {
            return this;
        };
        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var methods, key, IteratorPrototype, getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case "keys":
                  case "values":
                    return function() {
                        return new Constructor(this, kind);
                    };
                }
                return function() {
                    return new Constructor(this, kind);
                };
            }, TAG = NAME + " Iterator", DEF_VALUES = "values" == DEFAULT, VALUES_BUG = !1, proto = Base.prototype, $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT], $default = !BUGGY && $native || getMethod(DEFAULT), $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0, $anyNative = "Array" == NAME ? proto.entries || $native : $native;
            if (// Fix native
            $anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))) !== Object.prototype && IteratorPrototype.next && (// Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, !0), // fix for some old engines
            LIBRARY || has(IteratorPrototype, ITERATOR) || hide(IteratorPrototype, ITERATOR, returnThis)), 
            // fix Array#{values, @@iterator}.name in V8 / FF
            DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = !0, $default = function() {
                return $native.call(this);
            }), // Define iterator
            LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), 
            // Plug for library
            Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
                values: DEF_VALUES ? $default : getMethod("values"),
                keys: IS_SET ? $default : getMethod("keys"),
                entries: $entries
            }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            return methods;
        };
    }, /* 24 */
    /***/
    function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            };
        };
    }, /* 25 */
    /***/
    function(module, exports, __webpack_require__) {
        var def = __webpack_require__(11).f, has = __webpack_require__(7), TAG = __webpack_require__(0)("toStringTag");
        module.exports = function(it, tag, stat) {
            it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
                configurable: !0,
                value: tag
            });
        };
    }, /* 26 */
    /***/
    function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };
    }, /* 27 */
    /***/
    function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
        };
    }, /* 28 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(57)(!0);
        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(23)(String, "String", function(iterated) {
            this._t = String(iterated), // target
            this._i = 0;
        }, function() {
            var point, O = this._t, index = this._i;
            return index >= O.length ? {
                value: void 0,
                done: !0
            } : (point = $at(O, index), this._i += point.length, {
                value: point,
                done: !1
            });
        });
    }, /* 29 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(65);
        for (var global = __webpack_require__(1), hide = __webpack_require__(3), Iterators = __webpack_require__(4), TO_STRING_TAG = __webpack_require__(0)("toStringTag"), DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < DOMIterables.length; i++) {
            var NAME = DOMIterables[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME), Iterators[NAME] = Iterators.Array;
        }
    }, /* 30 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
        function makeEmptyFunction(arg) {
            return function() {
                return arg;
            };
        }
        /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
        var emptyFunction = function() {};
        emptyFunction.thatReturns = makeEmptyFunction, emptyFunction.thatReturnsFalse = makeEmptyFunction(!1), 
        emptyFunction.thatReturnsTrue = makeEmptyFunction(!0), emptyFunction.thatReturnsNull = makeEmptyFunction(null), 
        emptyFunction.thatReturnsThis = function() {
            return this;
        }, emptyFunction.thatReturnsArgument = function(arg) {
            return arg;
        }, module.exports = emptyFunction;
    }, /* 31 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function invariant(condition, format, a, b, c, d, e, f) {
            if (validateFormat(format), !condition) {
                var error;
                if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var args = [ a, b, c, d, e, f ], argIndex = 0;
                    error = new Error(format.replace(/%s/g, function() {
                        return args[argIndex++];
                    })), error.name = "Invariant Violation";
                }
                // we don't care about invariant's own frame
                throw error.framesToPop = 1, error;
            }
        }
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
        /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
        var validateFormat = function(format) {};
        module.exports = invariant;
    }, /* 32 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.changeAngle = void 0;
        var _react = __webpack_require__(8), _propTypes = (_interopRequireDefault(_react), 
        __webpack_require__(15)), _propTypes2 = _interopRequireDefault(_propTypes), _reactImageLightbox = __webpack_require__(71), _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox), angle = void 0, parentTransform = (exports.changeAngle = function(newAngle) {
            angle = newAngle;
        }, _reactImageLightbox2.default.getTransform);
        _reactImageLightbox2.default.getTransform = function(args) {
            var parent = parentTransform(args);
            return angle && 0 !== angle && (parent[Object.keys(parent)[0]] += "rotate(" + angle + "deg)"), 
            parent;
        }, Object.assign(_reactImageLightbox2.default.propTypes, {
            angle: _propTypes2.default.number
        }), exports.default = _reactImageLightbox2.default;
    }, /* 33 */
    /***/
    function(module, exports, __webpack_require__) {
        var content = __webpack_require__(66), insertCss = __webpack_require__(68);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), module.exports = content.locals || {}, 
        module.exports._getContent = function() {
            return content;
        }, module.exports._getCss = function() {
            return content.toString();
        }, module.exports._insertCss = function(options) {
            return insertCss(content, options);
        };
    }, /* 34 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(8), _react2 = _interopRequireDefault(_react), _override = __webpack_require__(32), _override2 = _interopRequireDefault(_override), _propTypes = __webpack_require__(15), _propTypes2 = _interopRequireDefault(_propTypes), _styles = __webpack_require__(33), _styles2 = _interopRequireDefault(_styles), ReactImageLightboxRotate = function(_Component) {
            function ReactImageLightboxRotate(props) {
                _classCallCheck(this, ReactImageLightboxRotate);
                var _this = _possibleConstructorReturn(this, (ReactImageLightboxRotate.__proto__ || Object.getPrototypeOf(ReactImageLightboxRotate)).call(this, props));
                return _this.state = {
                    rotate: 0,
                    prevRotate: 0,
                    nextRotate: 0
                }, _this;
            }
            return _inherits(ReactImageLightboxRotate, _Component), _createClass(ReactImageLightboxRotate, [ {
                key: "componentDidMount",
                value: function() {
                    _styles2.default._insertCss(), this.props.defaultRotate && this.setState({
                        rotate: this.props.defaultRotate
                    });
                }
            }, {
                key: "changeRotation",
                value: function(angle) {
                    var nextAngle = this.state.rotate + angle;
                    nextAngle < 0 && (nextAngle = 270), this.setState({
                        rotate: nextAngle
                    }), this.props.onImageRotate(nextAngle);
                }
            }, {
                key: "resetRotation",
                value: function() {
                    this.setState({
                        rotate: 0
                    });
                }
            }, {
                key: "preservationRotation",
                value: function(angle) {
                    this.setState({
                        rotate: angle
                    });
                }
            }, {
                key: "resetPrevRotation",
                value: function() {
                    this.setState({
                        prevRotate: 0
                    });
                }
            }, {
                key: "preservationPrevRotation",
                value: function(angle) {
                    this.setState({
                        prevRotate: angle
                    });
                }
            }, {
                key: "resetNextRotation",
                value: function() {
                    this.setState({
                        nextRotate: 0
                    });
                }
            }, {
                key: "preservationNextRotation",
                value: function(angle) {
                    this.setState({
                        nextRotate: angle
                    });
                }
            }, {
                key: "handleMovePrev",
                value: function() {
                    var _this2 = this;
                    return this.props.onPreMovePrevRequest && (this.state.rotate > 0 || this.state.prevRotate > 0) ? function() {
                        _this2.state.prevRotate > 0 ? (_this2.preservationRotation(_this2.state.prevRotate), 
                        _this2.resetPrevRotation()) : (_this2.props.saveBeforeAfterState && _this2.preservationNextRotation(_this2.state.rotate), 
                        _this2.resetRotation(0), (0, _override.changeAngle)(0)), _this2.props.onPreMovePrevRequest();
                    } : this.props.onPreMovePrevRequest;
                }
            }, {
                key: "handleMoveNext",
                value: function() {
                    var _this3 = this;
                    return this.props.onPreMoveNextRequest && (this.state.rotate > 0 || this.state.nextRotate > 0) ? function() {
                        _this3.state.nextRotate > 0 ? (_this3.preservationRotation(_this3.state.nextRotate), 
                        _this3.resetNextRotation(0)) : (_this3.props.saveBeforeAfterState && _this3.preservationPrevRotation(_this3.state.rotate), 
                        _this3.resetRotation(0), (0, _override.changeAngle)(0)), _this3.props.onPreMoveNextRequest();
                    } : function() {
                        _this3.resetPrevRotation(), _this3.props.onPreMoveNextRequest();
                    };
                }
            }, {
                key: "render",
                value: function() {
                    var _this4 = this, noop = function() {}, rotateRightButtonClasses = [ _override2.default.toolbarItemChild, _override2.default.builtinButton, _styles2.default.rotateRightButton ], rotateLeftButtonClasses = [ _override2.default.toolbarItemChild, _override2.default.builtinButton, _styles2.default.rotateLeftButton ], rotateLeftButtonHandler = function() {
                        return _this4.changeRotation(-90);
                    }, rotateRightButtonHandler = function() {
                        return _this4.changeRotation(90);
                    };
                    this.lightBox && this.lightBox.isAnimating() && (rotateLeftButtonHandler = noop, 
                    rotateRightButtonHandler = noop), (0, _override.changeAngle)(this.state.rotate);
                    var toolbarButtons = this.props.toolbarButtons ? this.props.toolbarButtons : [];
                    toolbarButtons = toolbarButtons.concat([ _react2.default.createElement("button", {
                        type: "button",
                        key: "rotate-left",
                        className: "ril-rotate-left " + rotateLeftButtonClasses.join(" "),
                        onClick: rotateLeftButtonHandler
                    }, this.svg), _react2.default.createElement("button", {
                        type: "button",
                        key: "rotate-right",
                        className: "ril-rotate-right " + rotateRightButtonClasses.join(" "),
                        onClick: rotateRightButtonHandler
                    }, this.svg) ]);
                    var props = Object.assign({}, this.props, {
                        onMovePrevRequest: this.handleMovePrev(),
                        onMoveNextRequest: this.handleMoveNext(),
                        toolbarButtons: toolbarButtons,
                        ref: function(lightBox) {
                            return _this4.lightBox = lightBox;
                        },
                        wrapperClassName: this.rotateClassName
                    });
                    return _react2.default.createElement(_override2.default, props);
                }
            }, {
                key: "svg",
                get: function() {
                    return _react2.default.createElement("svg", {
                        className: "icon icon-rotate",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "512",
                        height: "512",
                        viewBox: "0 0 16 16"
                    }, _react2.default.createElement("path", {
                        fill: "#ddd",
                        d: "M16 7V3l-1.1 1.1C13.6 1.6 11 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3C11.4 13.2 9.8 14 8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5L12 7h4z"
                    }));
                }
            } ]), ReactImageLightboxRotate;
        }(_react.Component);
        ReactImageLightboxRotate.defaultProps = Object.assign({}, _override2.default.defaultProps, {
            onImageRotate: function() {}
        }), ReactImageLightboxRotate.propTypes = Object.assign({}, _override2.default.propTypes, {
            onImageRotate: _propTypes2.default.func
        }), exports.default = ReactImageLightboxRotate;
    }, /* 35 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(37),
            __esModule: !0
        };
    }, /* 36 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(38),
            __esModule: !0
        };
    }, /* 37 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(29), __webpack_require__(28), module.exports = __webpack_require__(63);
    }, /* 38 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(29), __webpack_require__(28), module.exports = __webpack_require__(64);
    }, /* 39 */
    /***/
    function(module, exports, __webpack_require__) {
        var core = __webpack_require__(2), $JSON = core.JSON || (core.JSON = {
            stringify: JSON.stringify
        });
        module.exports = function(it) {
            // eslint-disable-line no-unused-vars
            return $JSON.stringify.apply($JSON, arguments);
        };
    }, /* 40 */
    /***/
    function(module, exports) {
        module.exports = function(it) {
            if ("function" != typeof it) throw TypeError(it + " is not a function!");
            return it;
        };
    }, /* 41 */
    /***/
    function(module, exports) {
        module.exports = function() {};
    }, /* 42 */
    /***/
    function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(14), toLength = __webpack_require__(59), toAbsoluteIndex = __webpack_require__(58);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el) {
                    for (;length > index; ) // eslint-disable-next-line no-self-compare
                    if ((value = O[index++]) != value) return !0;
                } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1;
            };
        };
    }, /* 43 */
    /***/
    function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(40);
        module.exports = function(fn, that, length) {
            if (aFunction(fn), void 0 === that) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, /* 44 */
    /***/
    function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(2), ctx = __webpack_require__(43), hide = __webpack_require__(3), $export = function(type, name, source) {
            var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports.prototype, target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {}).prototype;
            IS_GLOBAL && (source = name);
            for (key in source) // contains in native
            (own = !IS_FORCED && target && void 0 !== target[key]) && key in exports || (// export native or passed
            out = own ? target[key] : source[key], // prevent global pollution for namespaces
            exports[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();

                          case 1:
                            return new C(a);

                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                    }
                    return C.apply(this, arguments);
                };
                return F.prototype = C.prototype, F;
            }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            IS_PROTO && ((exports.virtual || (exports.virtual = {}))[key] = out, // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)));
        };
        // type bitmap
        $export.F = 1, // forced
        $export.G = 2, // global
        $export.S = 4, // static
        $export.P = 8, // proto
        $export.B = 16, // bind
        $export.W = 32, // wrap
        $export.U = 64, // safe
        $export.R = 128, // real proto method for `library`
        module.exports = $export;
    }, /* 45 */
    /***/
    function(module, exports, __webpack_require__) {
        var document = __webpack_require__(1).document;
        module.exports = document && document.documentElement;
    }, /* 46 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(6) && !__webpack_require__(22)(function() {
            return 7 != Object.defineProperty(__webpack_require__(20)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, /* 47 */
    /***/
    function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(19);
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return "String" == cof(it) ? it.split("") : Object(it);
        };
    }, /* 48 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(51), descriptor = __webpack_require__(24), setToStringTag = __webpack_require__(25), IteratorPrototype = {};
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(3)(IteratorPrototype, __webpack_require__(0)("iterator"), function() {
            return this;
        }), module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            }), setToStringTag(Constructor, NAME + " Iterator");
        };
    }, /* 49 */
    /***/
    function(module, exports) {
        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    }, /* 50 */
    /***/
    function(module, exports) {
        module.exports = !0;
    }, /* 51 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(5), dPs = __webpack_require__(52), enumBugKeys = __webpack_require__(21), IE_PROTO = __webpack_require__(12)("IE_PROTO"), Empty = function() {}, createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframeDocument, iframe = __webpack_require__(20)("iframe"), i = enumBugKeys.length;
            for (iframe.style.display = "none", __webpack_require__(45).appendChild(iframe), 
            iframe.src = "javascript:", // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write("<script>document.F=Object<\/script>"), 
            iframeDocument.close(), createDict = iframeDocument.F; i--; ) delete createDict.prototype[enumBugKeys[i]];
            return createDict();
        };
        module.exports = Object.create || function(O, Properties) {
            var result;
            // add "__proto__" for Object.getPrototypeOf polyfill
            return null !== O ? (Empty.prototype = anObject(O), result = new Empty(), Empty.prototype = null, 
            result[IE_PROTO] = O) : result = createDict(), void 0 === Properties ? result : dPs(result, Properties);
        };
    }, /* 52 */
    /***/
    function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(11), anObject = __webpack_require__(5), getKeys = __webpack_require__(55);
        module.exports = __webpack_require__(6) ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var P, keys = getKeys(Properties), length = keys.length, i = 0; length > i; ) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, /* 53 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(7), toObject = __webpack_require__(60), IE_PROTO = __webpack_require__(12)("IE_PROTO"), ObjectProto = Object.prototype;
        module.exports = Object.getPrototypeOf || function(O) {
            return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null;
        };
    }, /* 54 */
    /***/
    function(module, exports, __webpack_require__) {
        var has = __webpack_require__(7), toIObject = __webpack_require__(14), arrayIndexOf = __webpack_require__(42)(!1), IE_PROTO = __webpack_require__(12)("IE_PROTO");
        module.exports = function(object, names) {
            var key, O = toIObject(object), i = 0, result = [];
            for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
            return result;
        };
    }, /* 55 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(54), enumBugKeys = __webpack_require__(21);
        module.exports = Object.keys || function(O) {
            return $keys(O, enumBugKeys);
        };
    }, /* 56 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3);
    }, /* 57 */
    /***/
    function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(13), defined = __webpack_require__(9);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
                return i < 0 || i >= l ? TO_STRING ? "" : void 0 : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : b - 56320 + (a - 55296 << 10) + 65536);
            };
        };
    }, /* 58 */
    /***/
    function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(13), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, /* 59 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(13), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, /* 60 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(9);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, /* 61 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(10);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
            if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, /* 62 */
    /***/
    function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(18), ITERATOR = __webpack_require__(0)("iterator"), Iterators = __webpack_require__(4);
        module.exports = __webpack_require__(2).getIteratorMethod = function(it) {
            if (void 0 != it) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
    }, /* 63 */
    /***/
    function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(5), get = __webpack_require__(62);
        module.exports = __webpack_require__(2).getIterator = function(it) {
            var iterFn = get(it);
            if ("function" != typeof iterFn) throw TypeError(it + " is not iterable!");
            return anObject(iterFn.call(it));
        };
    }, /* 64 */
    /***/
    function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(18), ITERATOR = __webpack_require__(0)("iterator"), Iterators = __webpack_require__(4);
        module.exports = __webpack_require__(2).isIterable = function(it) {
            var O = Object(it);
            return void 0 !== O[ITERATOR] || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
        };
    }, /* 65 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(41), step = __webpack_require__(49), Iterators = __webpack_require__(4), toIObject = __webpack_require__(14);
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(23)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated), // target
            this._i = 0, // next index
            this._k = kind;
        }, function() {
            var O = this._t, kind = this._k, index = this._i++;
            return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [ index, O[index] ]);
        }, "values"), // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), 
        addToUnscopables("entries");
    }, /* 66 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(67)(!1), // imports
        // module
        exports.push([ module.i, ".rotateLeftButton___2H7hX,\n.rotateRightButton___3UDch {\n  position: relative;\n  background: transparent;\n  border: none;\n  outline: none;\n  width: 40px;\n  height: 35px;\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 0.7; }\n  .rotateLeftButton___2H7hX svg,\n  .rotateRightButton___3UDch svg {\n    width: 18px;\n    height: 18px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto; }\n  .rotateLeftButton___2H7hX:hover,\n  .rotateRightButton___3UDch:hover {\n    opacity: 1; }\n\n.rotateLeftButton___2H7hX {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1); }\n\n.ril-image-next___31EdO {\n  display: none; }\n", "" ]), 
        // exports
        exports.locals = {
            rotateLeftButton: "rotateLeftButton___2H7hX",
            rotateRightButton: "rotateRightButton___3UDch",
            "ril-image-next": "ril-image-next___31EdO"
        };
    }, /* 67 */
    /***/
    function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, /* 68 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        // Base64 encoding and decoding - The "Unicode Problem"
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode("0x" + p1);
            }));
        }
        /**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
        function removeCss(ids) {
            ids.forEach(function(id) {
                if (--inserted[id] <= 0) {
                    var elem = document.getElementById(prefix + id);
                    elem && elem.parentNode.removeChild(elem);
                }
            });
        }
        /**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
        function insertCss(styles) {
            for (var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace, _ref$prepend = _ref.prepend, prepend = void 0 !== _ref$prepend && _ref$prepend, ids = [], i = 0; i < styles.length; i++) {
                var _styles$i = (0, _slicedToArray3.default)(styles[i], 4), moduleId = _styles$i[0], css = _styles$i[1], media = _styles$i[2], sourceMap = _styles$i[3], id = moduleId + "-" + i;
                if (ids.push(id), !inserted[id] || replace) {
                    inserted[id] = 1;
                    var elem = document.getElementById(prefix + id), create = !1;
                    elem || (create = !0, elem = document.createElement("style"), elem.setAttribute("type", "text/css"), 
                    elem.id = prefix + id, media && elem.setAttribute("media", media));
                    var cssText = css;
                    sourceMap && "function" == typeof btoa && (// skip IE9 and below, see http://caniuse.com/atob-btoa
                    cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode((0, 
                    _stringify2.default)(sourceMap)) + "*/", cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/"), 
                    "textContent" in elem ? elem.textContent = cssText : elem.styleSheet.cssText = cssText, 
                    create && (prepend ? document.head.insertBefore(elem, document.head.childNodes[0]) : document.head.appendChild(elem));
                } else inserted[id]++;
            }
            return removeCss.bind(null, ids);
        }
        var _stringify = __webpack_require__(16), _stringify2 = _interopRequireDefault(_stringify), _slicedToArray2 = __webpack_require__(17), _slicedToArray3 = _interopRequireDefault(_slicedToArray2), prefix = "s", inserted = {};
        module.exports = insertCss;
    }, /* 69 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var emptyFunction = __webpack_require__(30), invariant = __webpack_require__(31), ReactPropTypesSecret = __webpack_require__(70);
        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                secret !== ReactPropTypesSecret && invariant(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            }
            function getShim() {
                return shim;
            }
            shim.isRequired = shim;
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim
            };
            return ReactPropTypes.checkPropTypes = emptyFunction, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, /* 70 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, /* 71 */
    /***/
    function(module, exports, __webpack_require__) {
        !function(root, factory) {
            module.exports = factory();
        }(0, function() {
            /******/
            return function(modules) {
                /******/
                /******/
                // The require function
                /******/
                function __webpack_require__(moduleId) {
                    /******/
                    /******/
                    // Check if module is in cache
                    /******/
                    if (installedModules[moduleId]) /******/
                    return installedModules[moduleId].exports;
                    /******/
                    // Create a new module (and put it into the cache)
                    /******/
                    var module = installedModules[moduleId] = {
                        /******/
                        i: moduleId,
                        /******/
                        l: !1,
                        /******/
                        exports: {}
                    };
                    /******/
                    /******/
                    // Return the exports of the module
                    /******/
                    /******/
                    /******/
                    // Execute the module function
                    /******/
                    /******/
                    /******/
                    // Flag the module as loaded
                    /******/
                    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
                    module.l = !0, module.exports;
                }
                // webpackBootstrap
                /******/
                // The module cache
                /******/
                var installedModules = {};
                /******/
                /******/
                // Load entry module and return exports
                /******/
                /******/
                /******/
                /******/
                // expose the modules object (__webpack_modules__)
                /******/
                /******/
                /******/
                // expose the module cache
                /******/
                /******/
                /******/
                // define getter function for harmony exports
                /******/
                /******/
                /******/
                // getDefaultExport function for compatibility with non-harmony modules
                /******/
                /******/
                /******/
                // Object.prototype.hasOwnProperty.call
                /******/
                /******/
                /******/
                // __webpack_public_path__
                /******/
                return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
                __webpack_require__.d = function(exports, name, getter) {
                    /******/
                    __webpack_require__.o(exports, name) || /******/
                    Object.defineProperty(exports, name, {
                        /******/
                        configurable: !1,
                        /******/
                        enumerable: !0,
                        /******/
                        get: getter
                    });
                }, __webpack_require__.n = function(module) {
                    /******/
                    var getter = module && module.__esModule ? /******/
                    function() {
                        return module.default;
                    } : /******/
                    function() {
                        return module;
                    };
                    /******/
                    /******/
                    return __webpack_require__.d(getter, "a", getter), getter;
                }, __webpack_require__.o = function(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
            }([ /* 0 */
            /***/
            function(module, exports, __webpack_require__) {
                "use strict";
                module.exports = __webpack_require__(1).default;
            }, /* 1 */
            /***/
            function(module, exports, __webpack_require__) {
                "use strict";
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _possibleConstructorReturn(self, call) {
                    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !call || "object" != typeof call && "function" != typeof call ? self : call;
                }
                function _inherits(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
                var _slicedToArray = function() {
                    function sliceIterator(arr, i) {
                        var _arr = [], _n = !0, _d = !1, _e = void 0;
                        try {
                            for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                            !i || _arr.length !== i); _n = !0) ;
                        } catch (err) {
                            _d = !0, _e = err;
                        } finally {
                            try {
                                !_n && _i.return && _i.return();
                            } finally {
                                if (_d) throw _e;
                            }
                        }
                        return _arr;
                    }
                    return function(arr, i) {
                        if (Array.isArray(arr)) return arr;
                        if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    };
                }(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _createClass = function() {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    return function(Constructor, protoProps, staticProps) {
                        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                        Constructor;
                    };
                }(), _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _reactModal = __webpack_require__(4), _reactModal2 = _interopRequireDefault(_reactModal), _util = __webpack_require__(5), _constant = __webpack_require__(6), _style = __webpack_require__(7), _style2 = _interopRequireDefault(_style), styles = _style2.default, ieVersion = (0, 
                _util.getIEVersion)();
                ieVersion < 10 && (styles = _extends({}, styles, {
                    toolbarSide: styles.toolbarSide + " " + styles.toolbarSideNoFlex,
                    toolbarLeftSide: styles.toolbarLeftSide + " " + styles.toolbarLeftSideNoFlex,
                    toolbarRightSide: styles.toolbarRightSide + " " + styles.toolbarRightSideNoFlex
                }));
                var ReactImageLightbox = function(_Component) {
                    function ReactImageLightbox(props) {
                        _classCallCheck(this, ReactImageLightbox);
                        var _this = _possibleConstructorReturn(this, (ReactImageLightbox.__proto__ || Object.getPrototypeOf(ReactImageLightbox)).call(this, props));
                        return _this.state = {
                            //-----------------------------
                            // Animation
                            //-----------------------------
                            // Lightbox is closing
                            // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
                            isClosing: !props.animationDisabled,
                            // Component parts should animate (e.g., when images are moving, or image is being zoomed)
                            shouldAnimate: !1,
                            //-----------------------------
                            // Zoom settings
                            //-----------------------------
                            // Zoom level of image
                            zoomLevel: _constant.MIN_ZOOM_LEVEL,
                            //-----------------------------
                            // Image position settings
                            //-----------------------------
                            // Horizontal offset from center
                            offsetX: 0,
                            // Vertical offset from center
                            offsetY: 0
                        }, _this.closeIfClickInner = _this.closeIfClickInner.bind(_this), _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_this), 
                        _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_this), _this.handleKeyInput = _this.handleKeyInput.bind(_this), 
                        _this.handleMouseUp = _this.handleMouseUp.bind(_this), _this.handleMouseDown = _this.handleMouseDown.bind(_this), 
                        _this.handleMouseMove = _this.handleMouseMove.bind(_this), _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_this), 
                        _this.handleTouchStart = _this.handleTouchStart.bind(_this), _this.handleTouchMove = _this.handleTouchMove.bind(_this), 
                        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this), _this.handlePointerEvent = _this.handlePointerEvent.bind(_this), 
                        _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_this), _this.handleWindowResize = _this.handleWindowResize.bind(_this), 
                        _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_this), _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_this), 
                        _this.requestClose = _this.requestClose.bind(_this), _this.requestMoveNext = _this.requestMoveNext.bind(_this), 
                        _this.requestMovePrev = _this.requestMovePrev.bind(_this), _this;
                    }
                    return _inherits(ReactImageLightbox, _Component), _createClass(ReactImageLightbox, null, [ {
                        key: "isTargetMatchImage",
                        value: function(target) {
                            return target && /ril-image-current/.test(target.className);
                        }
                    }, {
                        key: "parseMouseEvent",
                        value: function(mouseEvent) {
                            return {
                                id: "mouse",
                                source: _constant.SOURCE_MOUSE,
                                x: parseInt(mouseEvent.clientX, 10),
                                y: parseInt(mouseEvent.clientY, 10)
                            };
                        }
                    }, {
                        key: "parseTouchPointer",
                        value: function(touchPointer) {
                            return {
                                id: touchPointer.identifier,
                                source: _constant.SOURCE_TOUCH,
                                x: parseInt(touchPointer.clientX, 10),
                                y: parseInt(touchPointer.clientY, 10)
                            };
                        }
                    }, {
                        key: "parsePointerEvent",
                        value: function(pointerEvent) {
                            return {
                                id: pointerEvent.pointerId,
                                source: _constant.SOURCE_POINTER,
                                x: parseInt(pointerEvent.clientX, 10),
                                y: parseInt(pointerEvent.clientY, 10)
                            };
                        }
                    }, {
                        key: "getTransform",
                        value: function(_ref) {
                            var _ref$x = _ref.x, x = void 0 === _ref$x ? 0 : _ref$x, _ref$y = _ref.y, y = void 0 === _ref$y ? 0 : _ref$y, _ref$zoom = _ref.zoom, zoom = void 0 === _ref$zoom ? 1 : _ref$zoom, width = _ref.width, targetWidth = _ref.targetWidth, nextX = x, isOldIE = ieVersion < 10, windowWidth = (0, 
                            _util.getWindowWidth)();
                            width > windowWidth && (nextX += (windowWidth - width) / 2);
                            var scaleFactor = zoom * (targetWidth / width);
                            return isOldIE ? {
                                msTransform: "translate(" + nextX + "px," + y + "px) scale(" + scaleFactor + ")"
                            } : {
                                transform: "translate3d(" + nextX + "px," + y + "px,0) scale3d(" + scaleFactor + "," + scaleFactor + ",1)"
                            };
                        }
                    }, {
                        key: "loadStyles",
                        value: function() {
                            // Insert component styles
                            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && // eslint-disable-next-line no-underscore-dangle
                            styles._insertCss();
                        }
                    } ]), _createClass(ReactImageLightbox, [ {
                        key: "componentWillMount",
                        value: function() {
                            // Timeouts - always clear it before umount
                            this.timeouts = [], // Current action
                            this.currentAction = _constant.ACTION_NONE, // Events source
                            this.eventsSource = _constant.SOURCE_ANY, // Empty pointers list
                            this.pointerList = [], // Prevent inner close
                            this.preventInnerClose = !1, this.preventInnerCloseTimeout = null, // Whether event listeners for keyboard and mouse input have been attached or not
                            this.listenersAttached = !1, // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc
                            this.keyPressed = !1, // Used to store load state / dimensions of images
                            this.imageCache = {}, // Time the last keydown event was called (used in keyboard action rate limiting)
                            this.lastKeyDownTime = 0, // Used for debouncing window resize event
                            this.resizeTimeout = null, // Used to determine when actions are triggered by the scroll wheel
                            this.wheelActionTimeout = null, this.resetScrollTimeout = null, this.scrollX = 0, 
                            this.scrollY = 0, // Used in panning zoomed images
                            this.moveStartX = 0, this.moveStartY = 0, this.moveStartOffsetX = 0, this.moveStartOffsetY = 0, 
                            // Used to swipe
                            this.swipeStartX = 0, this.swipeStartY = 0, this.swipeEndX = 0, this.swipeEndY = 0, 
                            // Used to pinch
                            this.pinchTouchList = null, this.pinchDistance = 0, // Used to differentiate between images with identical src
                            this.keyCounter = 0, // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)
                            this.moveRequested = !1, this.props.animationDisabled || // Make opening animation play
                            this.setState({
                                isClosing: !1
                            });
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, ReactImageLightbox.loadStyles(), this.attachListeners(), this.loadAllImages();
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(nextProps) {
                            var _this2 = this, sourcesChanged = !1, prevSrcDict = {}, nextSrcDict = {};
                            this.getSrcTypes().forEach(function(srcType) {
                                _this2.props[srcType.name] !== nextProps[srcType.name] && (sourcesChanged = !0, 
                                prevSrcDict[_this2.props[srcType.name]] = !0, nextSrcDict[nextProps[srcType.name]] = !0);
                            }), (sourcesChanged || this.moveRequested) && (// Reset the loaded state for images not rendered next
                            Object.keys(prevSrcDict).forEach(function(prevSrc) {
                                !(prevSrc in nextSrcDict) && prevSrc in _this2.imageCache && (_this2.imageCache[prevSrc].loaded = !1);
                            }), this.moveRequested = !1, // Load any new images
                            this.loadAllImages(nextProps));
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function() {
                            // Wait for move...
                            return !this.moveRequested;
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1, this.detachListeners(), this.timeouts.forEach(function(tid) {
                                return clearTimeout(tid);
                            });
                        }
                    }, {
                        key: "setTimeout",
                        value: function(_setTimeout) {
                            function setTimeout(_x, _x2) {
                                return _setTimeout.apply(this, arguments);
                            }
                            return setTimeout.toString = function() {
                                return _setTimeout.toString();
                            }, setTimeout;
                        }(function(func, time) {
                            var _this3 = this, id = setTimeout(function() {
                                _this3.timeouts = _this3.timeouts.filter(function(tid) {
                                    return tid !== id;
                                }), func();
                            }, time);
                            return this.timeouts.push(id), id;
                        })
                    }, {
                        key: "setPreventInnerClose",
                        value: function() {
                            var _this4 = this;
                            this.preventInnerCloseTimeout && this.clearTimeout(this.preventInnerCloseTimeout), 
                            this.preventInnerClose = !0, this.preventInnerCloseTimeout = this.setTimeout(function() {
                                _this4.preventInnerClose = !1, _this4.preventInnerCloseTimeout = null;
                            }, 100);
                        }
                    }, {
                        key: "getBestImageForType",
                        value: function(srcType) {
                            var imageSrc = this.props[srcType], fitSizes = {};
                            if (this.isImageLoaded(imageSrc)) // Use full-size image if available
                            fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height); else {
                                if (!this.isImageLoaded(this.props[srcType + "Thumbnail"])) return null;
                                // Fall back to using thumbnail if the image has not been loaded
                                imageSrc = this.props[srcType + "Thumbnail"], fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, !0);
                            }
                            return {
                                src: imageSrc,
                                height: this.imageCache[imageSrc].height,
                                width: this.imageCache[imageSrc].width,
                                targetHeight: fitSizes.height,
                                targetWidth: fitSizes.width
                            };
                        }
                    }, {
                        key: "getFitSizes",
                        value: function(width, height, stretch) {
                            var boxSize = this.getLightboxRect(), maxHeight = boxSize.height - 2 * this.props.imagePadding, maxWidth = boxSize.width - 2 * this.props.imagePadding;
                            return stretch || (maxHeight = Math.min(maxHeight, height), maxWidth = Math.min(maxWidth, width)), 
                            maxWidth / maxHeight > width / height ? {
                                width: width * maxHeight / height,
                                height: maxHeight
                            } : {
                                width: maxWidth,
                                height: height * maxWidth / width
                            };
                        }
                    }, {
                        key: "getMaxOffsets",
                        value: function() {
                            var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel, currentImageInfo = this.getBestImageForType("mainSrc");
                            if (null === currentImageInfo) return {
                                maxX: 0,
                                minX: 0,
                                maxY: 0,
                                minY: 0
                            };
                            var boxSize = this.getLightboxRect(), zoomMultiplier = this.getZoomMultiplier(zoomLevel), maxX = 0;
                            // if there is still blank space in the X dimension, don't limit except to the opposite edge
                            maxX = zoomMultiplier * currentImageInfo.width - boxSize.width < 0 ? (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2 : (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
                            var maxY = 0;
                            // if there is still blank space in the Y dimension, don't limit except to the opposite edge
                            return maxY = zoomMultiplier * currentImageInfo.height - boxSize.height < 0 ? (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2 : (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2, 
                            {
                                maxX: maxX,
                                maxY: maxY,
                                minX: -1 * maxX,
                                minY: -1 * maxY
                            };
                        }
                    }, {
                        key: "getSrcTypes",
                        value: function() {
                            return [ {
                                name: "mainSrc",
                                keyEnding: "i" + this.keyCounter
                            }, {
                                name: "mainSrcThumbnail",
                                keyEnding: "t" + this.keyCounter
                            }, {
                                name: "nextSrc",
                                keyEnding: "i" + (this.keyCounter + 1)
                            }, {
                                name: "nextSrcThumbnail",
                                keyEnding: "t" + (this.keyCounter + 1)
                            }, {
                                name: "prevSrc",
                                keyEnding: "i" + (this.keyCounter - 1)
                            }, {
                                name: "prevSrcThumbnail",
                                keyEnding: "t" + (this.keyCounter - 1)
                            } ];
                        }
                    }, {
                        key: "getZoomMultiplier",
                        value: function() {
                            var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel;
                            return Math.pow(_constant.ZOOM_RATIO, zoomLevel);
                        }
                    }, {
                        key: "getLightboxRect",
                        value: function() {
                            return this.outerEl ? this.outerEl.getBoundingClientRect() : {
                                width: (0, _util.getWindowWidth)(),
                                height: (0, _util.getWindowHeight)(),
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            };
                        }
                    }, {
                        key: "clearTimeout",
                        value: function(_clearTimeout) {
                            function clearTimeout(_x3) {
                                return _clearTimeout.apply(this, arguments);
                            }
                            return clearTimeout.toString = function() {
                                return _clearTimeout.toString();
                            }, clearTimeout;
                        }(function(id) {
                            this.timeouts = this.timeouts.filter(function(tid) {
                                return tid !== id;
                            }), clearTimeout(id);
                        })
                    }, {
                        key: "attachListeners",
                        value: function() {
                            this.listenersAttached || "undefined" == typeof window || (window.addEventListener("resize", this.handleWindowResize), 
                            window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("touchend", this.handleTouchEnd), 
                            window.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("pointerdown", this.handlePointerEvent), 
                            window.addEventListener("pointermove", this.handlePointerEvent), window.addEventListener("pointerup", this.handlePointerEvent), 
                            window.addEventListener("pointercancel", this.handlePointerEvent), // Have to add an extra mouseup handler to catch mouseup events outside of the window
                            //  if the page containing the lightbox is displayed in an iframe
                            (0, _util.isInSameOriginIframe)() && (window.top.addEventListener("mouseup", this.handleMouseUp), 
                            window.top.addEventListener("touchend", this.handleTouchEnd), window.top.addEventListener("touchcancel", this.handleTouchEnd), 
                            window.top.addEventListener("pointerdown", this.handlePointerEvent), window.top.addEventListener("pointermove", this.handlePointerEvent), 
                            window.top.addEventListener("pointerup", this.handlePointerEvent), window.top.addEventListener("pointercancel", this.handlePointerEvent)), 
                            this.listenersAttached = !0);
                        }
                    }, {
                        key: "changeZoom",
                        value: function(zoomLevel, clientX, clientY) {
                            // Ignore if zoom disabled
                            if (this.props.enableZoom) {
                                // Constrain zoom level to the set bounds
                                var nextZoomLevel = Math.max(_constant.MIN_ZOOM_LEVEL, Math.min(_constant.MAX_ZOOM_LEVEL, zoomLevel));
                                // Ignore requests that don't change the zoom level
                                if (nextZoomLevel !== this.state.zoomLevel) {
                                    if (nextZoomLevel === _constant.MIN_ZOOM_LEVEL) // Snap back to center if zoomed all the way out
                                    return void this.setState({
                                        zoomLevel: nextZoomLevel,
                                        offsetX: 0,
                                        offsetY: 0
                                    });
                                    var imageBaseSize = this.getBestImageForType("mainSrc");
                                    if (null !== imageBaseSize) {
                                        var currentZoomMultiplier = this.getZoomMultiplier(), nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel), boxRect = this.getLightboxRect(), pointerX = void 0 !== clientX ? clientX - boxRect.left : boxRect.width / 2, pointerY = void 0 !== clientY ? clientY - boxRect.top : boxRect.height / 2, currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2, currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2, currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX, currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY, currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier, currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier, nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier, nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier, nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2, nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2, nextOffsetX = nextImageOffsetX - nextImageRealOffsetX, nextOffsetY = nextImageOffsetY - nextImageRealOffsetY;
                                        // When zooming out, limit the offset so things don't get left askew
                                        if (this.currentAction !== _constant.ACTION_PINCH) {
                                            var maxOffsets = this.getMaxOffsets();
                                            this.state.zoomLevel > nextZoomLevel && (nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX)), 
                                            nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY)));
                                        }
                                        this.setState({
                                            zoomLevel: nextZoomLevel,
                                            offsetX: nextOffsetX,
                                            offsetY: nextOffsetY
                                        });
                                    }
                                }
                            }
                        }
                    }, {
                        key: "closeIfClickInner",
                        value: function(event) {
                            !this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1 && this.requestClose(event);
                        }
                    }, {
                        key: "detachListeners",
                        value: function() {
                            this.listenersAttached && (window.removeEventListener("resize", this.handleWindowResize), 
                            window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("touchend", this.handleTouchEnd), 
                            window.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("pointerdown", this.handlePointerEvent), 
                            window.removeEventListener("pointermove", this.handlePointerEvent), window.removeEventListener("pointerup", this.handlePointerEvent), 
                            window.removeEventListener("pointercancel", this.handlePointerEvent), (0, _util.isInSameOriginIframe)() && (window.top.removeEventListener("mouseup", this.handleMouseUp), 
                            window.top.removeEventListener("touchend", this.handleTouchEnd), window.top.removeEventListener("touchcancel", this.handleTouchEnd), 
                            window.top.removeEventListener("pointerdown", this.handlePointerEvent), window.top.removeEventListener("pointermove", this.handlePointerEvent), 
                            window.top.removeEventListener("pointerup", this.handlePointerEvent), window.top.removeEventListener("pointercancel", this.handlePointerEvent)), 
                            this.listenersAttached = !1);
                        }
                    }, {
                        key: "handleKeyInput",
                        value: function(event) {
                            // Ignore key input during animations
                            if (event.stopPropagation(), !this.isAnimating()) {
                                // Allow slightly faster navigation through the images when user presses keys repeatedly
                                if ("keyup" === event.type) return void (this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus);
                                var keyCode = event.which || event.keyCode, currentTime = new Date();
                                if (!(currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== _constant.KEYS.ESC)) switch (this.lastKeyDownTime = currentTime.getTime(), 
                                keyCode) {
                                  // ESC key closes the lightbox
                                    case _constant.KEYS.ESC:
                                    event.preventDefault(), this.requestClose(event);
                                    break;

                                  // Left arrow key moves to previous image
                                    case _constant.KEYS.LEFT_ARROW:
                                    if (!this.props.prevSrc) return;
                                    event.preventDefault(), this.keyPressed = !0, this.requestMovePrev(event);
                                    break;

                                  // Right arrow key moves to next image
                                    case _constant.KEYS.RIGHT_ARROW:
                                    if (!this.props.nextSrc) return;
                                    event.preventDefault(), this.keyPressed = !0, this.requestMoveNext(event);
                                }
                            }
                        }
                    }, {
                        key: "handleOuterMousewheel",
                        value: function(event) {
                            var _this5 = this;
                            // Prevent scrolling of the background
                            event.preventDefault(), event.stopPropagation();
                            var xThreshold = _constant.WHEEL_MOVE_X_THRESHOLD, actionDelay = 0;
                            // Prevent rapid-fire zoom behavior
                            if (this.clearTimeout(this.resetScrollTimeout), this.resetScrollTimeout = this.setTimeout(function() {
                                _this5.scrollX = 0, _this5.scrollY = 0;
                            }, 300), null === this.wheelActionTimeout && !this.isAnimating()) {
                                if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
                                    // handle horizontal scrolls with image moves
                                    this.scrollY = 0, this.scrollX += event.deltaX;
                                    var bigLeapX = xThreshold / 2;
                                    // If the scroll amount has accumulated sufficiently, or a large leap was taken
                                    this.scrollX >= xThreshold || event.deltaX >= bigLeapX ? (// Scroll right moves to next
                                    this.requestMoveNext(event), actionDelay = 500, this.scrollX = 0) : (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) && (// Scroll left moves to previous
                                    this.requestMovePrev(event), actionDelay = 500, this.scrollX = 0);
                                }
                                // Allow successive actions after the set delay
                                0 !== actionDelay && (this.wheelActionTimeout = this.setTimeout(function() {
                                    _this5.wheelActionTimeout = null;
                                }, actionDelay));
                            }
                        }
                    }, {
                        key: "handleImageMouseWheel",
                        value: function(event) {
                            event.preventDefault();
                            var yThreshold = _constant.WHEEL_MOVE_Y_THRESHOLD;
                            if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
                                // If the vertical scroll amount was large enough, perform a zoom
                                if (event.stopPropagation(), Math.abs(event.deltaY) < yThreshold) return;
                                this.scrollX = 0, this.scrollY += event.deltaY, this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
                            }
                        }
                    }, {
                        key: "handleImageDoubleClick",
                        value: function(event) {
                            this.state.zoomLevel > _constant.MIN_ZOOM_LEVEL ? // A double click when zoomed in zooms all the way out
                            this.changeZoom(_constant.MIN_ZOOM_LEVEL, event.clientX, event.clientY) : // A double click when zoomed all the way out zooms in
                            this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
                        }
                    }, {
                        key: "shouldHandleEvent",
                        value: function(source) {
                            if (this.eventsSource === source) return !0;
                            if (this.eventsSource === _constant.SOURCE_ANY) return this.eventsSource = source, 
                            !0;
                            switch (source) {
                              case _constant.SOURCE_MOUSE:
                                return !1;

                              case _constant.SOURCE_TOUCH:
                                return this.eventsSource = _constant.SOURCE_TOUCH, this.filterPointersBySource(), 
                                !0;

                              case _constant.SOURCE_POINTER:
                                return this.eventsSource === _constant.SOURCE_MOUSE && (this.eventsSource = _constant.SOURCE_POINTER, 
                                this.filterPointersBySource(), !0);

                              default:
                                return !1;
                            }
                        }
                    }, {
                        key: "addPointer",
                        value: function(pointer) {
                            this.pointerList.push(pointer);
                        }
                    }, {
                        key: "removePointer",
                        value: function(pointer) {
                            this.pointerList = this.pointerList.filter(function(_ref2) {
                                return _ref2.id !== pointer.id;
                            });
                        }
                    }, {
                        key: "filterPointersBySource",
                        value: function() {
                            var _this6 = this;
                            this.pointerList = this.pointerList.filter(function(_ref3) {
                                return _ref3.source === _this6.eventsSource;
                            });
                        }
                    }, {
                        key: "handleMouseDown",
                        value: function(event) {
                            this.shouldHandleEvent(_constant.SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parseMouseEvent(event)), 
                            this.multiPointerStart(event));
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function(event) {
                            this.shouldHandleEvent(_constant.SOURCE_MOUSE) && this.multiPointerMove(event, [ ReactImageLightbox.parseMouseEvent(event) ]);
                        }
                    }, {
                        key: "handleMouseUp",
                        value: function(event) {
                            this.shouldHandleEvent(_constant.SOURCE_MOUSE) && (this.removePointer(ReactImageLightbox.parseMouseEvent(event)), 
                            this.multiPointerEnd(event));
                        }
                    }, {
                        key: "handlePointerEvent",
                        value: function(event) {
                            if (this.shouldHandleEvent(_constant.SOURCE_POINTER)) switch (event.type) {
                              case "pointerdown":
                                ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parsePointerEvent(event)), 
                                this.multiPointerStart(event));
                                break;

                              case "pointermove":
                                this.multiPointerMove(event, [ ReactImageLightbox.parsePointerEvent(event) ]);
                                break;

                              case "pointerup":
                              case "pointercancel":
                                this.removePointer(ReactImageLightbox.parsePointerEvent(event)), this.multiPointerEnd(event);
                            }
                        }
                    }, {
                        key: "handleTouchStart",
                        value: function(event) {
                            var _this7 = this;
                            this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target) && ([].forEach.call(event.changedTouches, function(eventTouch) {
                                return _this7.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
                            }), this.multiPointerStart(event));
                        }
                    }, {
                        key: "handleTouchMove",
                        value: function(event) {
                            this.shouldHandleEvent(_constant.SOURCE_TOUCH) && this.multiPointerMove(event, [].map.call(event.changedTouches, function(eventTouch) {
                                return ReactImageLightbox.parseTouchPointer(eventTouch);
                            }));
                        }
                    }, {
                        key: "handleTouchEnd",
                        value: function(event) {
                            var _this8 = this;
                            this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ([].map.call(event.changedTouches, function(touch) {
                                return _this8.removePointer(ReactImageLightbox.parseTouchPointer(touch));
                            }), this.multiPointerEnd(event));
                        }
                    }, {
                        key: "decideMoveOrSwipe",
                        value: function(pointer) {
                            this.state.zoomLevel <= _constant.MIN_ZOOM_LEVEL ? this.handleSwipeStart(pointer) : this.handleMoveStart(pointer);
                        }
                    }, {
                        key: "multiPointerStart",
                        value: function(event) {
                            switch (this.handleEnd(null), this.pointerList.length) {
                              case 1:
                                event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                                break;

                              case 2:
                                event.preventDefault(), this.handlePinchStart(this.pointerList);
                            }
                        }
                    }, {
                        key: "multiPointerMove",
                        value: function(event, pointerList) {
                            switch (this.currentAction) {
                              case _constant.ACTION_MOVE:
                                event.preventDefault(), this.handleMove(pointerList[0]);
                                break;

                              case _constant.ACTION_SWIPE:
                                event.preventDefault(), this.handleSwipe(pointerList[0]);
                                break;

                              case _constant.ACTION_PINCH:
                                event.preventDefault(), this.handlePinch(pointerList);
                            }
                        }
                    }, {
                        key: "multiPointerEnd",
                        value: function(event) {
                            switch (this.currentAction !== _constant.ACTION_NONE && (this.setPreventInnerClose(), 
                            this.handleEnd(event)), this.pointerList.length) {
                              case 0:
                                this.eventsSource = _constant.SOURCE_ANY;
                                break;

                              case 1:
                                event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                                break;

                              case 2:
                                event.preventDefault(), this.handlePinchStart(this.pointerList);
                            }
                        }
                    }, {
                        key: "handleEnd",
                        value: function(event) {
                            switch (this.currentAction) {
                              case _constant.ACTION_MOVE:
                                this.handleMoveEnd(event);
                                break;

                              case _constant.ACTION_SWIPE:
                                this.handleSwipeEnd(event);
                                break;

                              case _constant.ACTION_PINCH:
                                this.handlePinchEnd(event);
                            }
                        }
                    }, {
                        key: "handleMoveStart",
                        value: function(_ref4) {
                            var clientX = _ref4.x, clientY = _ref4.y;
                            this.props.enableZoom && (this.currentAction = _constant.ACTION_MOVE, this.moveStartX = clientX, 
                            this.moveStartY = clientY, this.moveStartOffsetX = this.state.offsetX, this.moveStartOffsetY = this.state.offsetY);
                        }
                    }, {
                        key: "handleMove",
                        value: function(_ref5) {
                            var clientX = _ref5.x, clientY = _ref5.y, newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX, newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;
                            this.state.offsetX === newOffsetX && this.state.offsetY === newOffsetY || this.setState({
                                offsetX: newOffsetX,
                                offsetY: newOffsetY
                            });
                        }
                    }, {
                        key: "handleMoveEnd",
                        value: function() {
                            var _this9 = this;
                            this.currentAction = _constant.ACTION_NONE, this.moveStartX = 0, this.moveStartY = 0, 
                            this.moveStartOffsetX = 0, this.moveStartOffsetY = 0;
                            // Snap image back into frame if outside max offset range
                            var maxOffsets = this.getMaxOffsets(), nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX)), nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));
                            nextOffsetX === this.state.offsetX && nextOffsetY === this.state.offsetY || (this.setState({
                                offsetX: nextOffsetX,
                                offsetY: nextOffsetY,
                                shouldAnimate: !0
                            }), this.setTimeout(function() {
                                _this9.setState({
                                    shouldAnimate: !1
                                });
                            }, this.props.animationDuration));
                        }
                    }, {
                        key: "handleSwipeStart",
                        value: function(_ref6) {
                            var clientX = _ref6.x, clientY = _ref6.y;
                            this.currentAction = _constant.ACTION_SWIPE, this.swipeStartX = clientX, this.swipeStartY = clientY, 
                            this.swipeEndX = clientX, this.swipeEndY = clientY;
                        }
                    }, {
                        key: "handleSwipe",
                        value: function(_ref7) {
                            var clientX = _ref7.x, clientY = _ref7.y;
                            this.swipeEndX = clientX, this.swipeEndY = clientY;
                        }
                    }, {
                        key: "handleSwipeEnd",
                        value: function(event) {
                            var xDiff = this.swipeEndX - this.swipeStartX, xDiffAbs = Math.abs(xDiff), yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
                            if (this.currentAction = _constant.ACTION_NONE, this.swipeStartX = 0, this.swipeStartY = 0, 
                            this.swipeEndX = 0, this.swipeEndY = 0, !(!event || this.isAnimating() || xDiffAbs < 1.5 * yDiffAbs)) {
                                if (xDiffAbs < _constant.MIN_SWIPE_DISTANCE && xDiffAbs < this.getLightboxRect().width / 4) return;
                                xDiff > 0 && this.props.prevSrc ? (event.preventDefault(), this.requestMovePrev()) : xDiff < 0 && this.props.nextSrc && (event.preventDefault(), 
                                this.requestMoveNext());
                            }
                        }
                    }, {
                        key: "calculatePinchDistance",
                        value: function() {
                            var _ref8 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref9 = _slicedToArray(_ref8, 2), a = _ref9[0], b = _ref9[1];
                            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                        }
                    }, {
                        key: "calculatePinchCenter",
                        value: function() {
                            var _ref10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref11 = _slicedToArray(_ref10, 2), a = _ref11[0], b = _ref11[1];
                            return {
                                x: a.x - (a.x - b.x) / 2,
                                y: a.y - (a.y - b.y) / 2
                            };
                        }
                    }, {
                        key: "handlePinchStart",
                        value: function(pointerList) {
                            this.props.enableZoom && (this.currentAction = _constant.ACTION_PINCH, this.pinchTouchList = pointerList.map(function(_ref12) {
                                return {
                                    id: _ref12.id,
                                    x: _ref12.x,
                                    y: _ref12.y
                                };
                            }), this.pinchDistance = this.calculatePinchDistance());
                        }
                    }, {
                        key: "handlePinch",
                        value: function(pointerList) {
                            this.pinchTouchList = this.pinchTouchList.map(function(oldPointer) {
                                for (var i = 0; i < pointerList.length; i += 1) if (pointerList[i].id === oldPointer.id) return pointerList[i];
                                return oldPointer;
                            });
                            var newDistance = this.calculatePinchDistance(), zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
                            this.pinchDistance = newDistance;
                            var _calculatePinchCenter = this.calculatePinchCenter(this.pinchTouchList), clientX = _calculatePinchCenter.x, clientY = _calculatePinchCenter.y;
                            this.changeZoom(zoomLevel, clientX, clientY);
                        }
                    }, {
                        key: "handlePinchEnd",
                        value: function() {
                            this.currentAction = _constant.ACTION_NONE, this.pinchTouchList = null, this.pinchDistance = 0;
                        }
                    }, {
                        key: "handleWindowResize",
                        value: function() {
                            this.clearTimeout(this.resizeTimeout), this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
                        }
                    }, {
                        key: "handleZoomInButtonClick",
                        value: function() {
                            this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE);
                        }
                    }, {
                        key: "handleZoomOutButtonClick",
                        value: function() {
                            this.changeZoom(this.state.zoomLevel - _constant.ZOOM_BUTTON_INCREMENT_SIZE);
                        }
                    }, {
                        key: "handleCaptionMousewheel",
                        value: function(event) {
                            if (event.stopPropagation(), this.caption) {
                                var height = this.caption.getBoundingClientRect().height, scrollHeight = this.caption.scrollHeight, scrollTop = this.caption.scrollTop;
                                (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) && event.preventDefault();
                            }
                        }
                    }, {
                        key: "isAnimating",
                        value: function() {
                            return this.state.shouldAnimate || this.state.isClosing;
                        }
                    }, {
                        key: "isImageLoaded",
                        value: function(imageSrc) {
                            return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
                        }
                    }, {
                        key: "loadImage",
                        value: function(srcType, imageSrc, done) {
                            var _this10 = this;
                            // Return the image info if it is already cached
                            if (this.isImageLoaded(imageSrc)) return void this.setTimeout(function() {
                                done();
                            }, 1);
                            var that = this, inMemoryImage = new Image();
                            inMemoryImage.onerror = function(errorEvent) {
                                _this10.props.onImageLoadError(imageSrc, srcType, errorEvent), done(errorEvent);
                            }, inMemoryImage.onload = function() {
                                that.imageCache[imageSrc] = {
                                    loaded: !0,
                                    width: this.width,
                                    height: this.height
                                }, done();
                            }, inMemoryImage.src = imageSrc;
                        }
                    }, {
                        key: "loadAllImages",
                        value: function() {
                            var _this11 = this, props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, generateLoadDoneCallback = function(srcType, imageSrc) {
                                return function(err) {
                                    // Give up showing image on error
                                    err || // Don't rerender if the src is not the same as when the load started
                                    // or if the component has unmounted
                                    _this11.props[srcType] === imageSrc && _this11.mounted && // Force rerender with the new image
                                    _this11.forceUpdate();
                                };
                            };
                            // Load the images
                            this.getSrcTypes().forEach(function(srcType) {
                                var type = srcType.name;
                                // Load unloaded images
                                props[type] && !_this11.isImageLoaded(props[type]) && _this11.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
                            });
                        }
                    }, {
                        key: "requestClose",
                        value: function(event) {
                            var _this12 = this, closeLightbox = function() {
                                return _this12.props.onCloseRequest(event);
                            };
                            if (this.props.animationDisabled || "keydown" === event.type && !this.props.animationOnKeyInput) // No animation
                            return void closeLightbox();
                            // With animation
                            // Start closing animation
                            this.setState({
                                isClosing: !0
                            }), // Perform the actual closing at the end of the animation
                            this.setTimeout(closeLightbox, this.props.animationDuration);
                        }
                    }, {
                        key: "requestMove",
                        value: function(direction, event) {
                            var _this13 = this, nextState = {
                                zoomLevel: _constant.MIN_ZOOM_LEVEL,
                                offsetX: 0,
                                offsetY: 0
                            };
                            // Enable animated states
                            this.props.animationDisabled || this.keyPressed && !this.props.animationOnKeyInput || (nextState.shouldAnimate = !0, 
                            this.setTimeout(function() {
                                return _this13.setState({
                                    shouldAnimate: !1
                                });
                            }, this.props.animationDuration)), this.keyPressed = !1, this.moveRequested = !0, 
                            "prev" === direction ? (this.keyCounter -= 1, this.setState(nextState), this.props.onMovePrevRequest(event)) : (this.keyCounter += 1, 
                            this.setState(nextState), this.props.onMoveNextRequest(event));
                        }
                    }, {
                        key: "requestMoveNext",
                        value: function(event) {
                            this.requestMove("next", event);
                        }
                    }, {
                        key: "requestMovePrev",
                        value: function(event) {
                            this.requestMove("prev", event);
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var _this14 = this, _props = this.props, animationDisabled = _props.animationDisabled, animationDuration = _props.animationDuration, clickOutsideToClose = _props.clickOutsideToClose, discourageDownloads = _props.discourageDownloads, enableZoom = _props.enableZoom, imageTitle = _props.imageTitle, nextSrc = _props.nextSrc, prevSrc = _props.prevSrc, toolbarButtons = _props.toolbarButtons, reactModalStyle = _props.reactModalStyle, _onAfterOpen = _props.onAfterOpen, _state = this.state, zoomLevel = _state.zoomLevel, offsetX = _state.offsetX, offsetY = _state.offsetY, isClosing = _state.isClosing, boxSize = this.getLightboxRect(), transitionStyle = {};
                            // Transition settings for sliding animations
                            !animationDisabled && this.isAnimating() && (transitionStyle = _extends({}, transitionStyle, {
                                transition: "transform " + animationDuration + "ms"
                            }));
                            // Key endings to differentiate between images with the same src
                            var keyEndings = {};
                            this.getSrcTypes().forEach(function(_ref13) {
                                var name = _ref13.name, keyEnding = _ref13.keyEnding;
                                keyEndings[name] = keyEnding;
                            });
                            // Images to be displayed
                            var images = [], addImage = function(srcType, imageClass, transforms) {
                                // Ignore types that have no source defined for their full size image
                                if (_this14.props[srcType]) {
                                    var bestImageInfo = _this14.getBestImageForType(srcType), imageStyle = _extends({}, transitionStyle, ReactImageLightbox.getTransform(_extends({}, transforms, bestImageInfo)));
                                    if (zoomLevel > _constant.MIN_ZOOM_LEVEL && (imageStyle.cursor = "move"), null === bestImageInfo) {
                                        var loadingIcon = void 0;
                                        // Fall back to loading icon if the thumbnail has not been loaded
                                        return loadingIcon = ieVersion < 10 ? _react2.default.createElement("div", {
                                            className: styles.loadingContainer__icon
                                        }, (0, _util.translate)("Loading...")) : _react2.default.createElement("div", {
                                            className: "ril-loading-circle " + styles.loadingCircle + " " + styles.loadingContainer__icon
                                        }, _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        }), _react2.default.createElement("div", {
                                            className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                        })), void images.push(_react2.default.createElement("div", {
                                            className: imageClass + " " + styles.image + " ril-not-loaded",
                                            style: imageStyle,
                                            key: _this14.props[srcType] + keyEndings[srcType]
                                        }, _react2.default.createElement("div", {
                                            className: styles.loadingContainer
                                        }, loadingIcon)));
                                    }
                                    var imageSrc = bestImageInfo.src;
                                    discourageDownloads ? (imageStyle.backgroundImage = "url('" + imageSrc + "')", images.push(_react2.default.createElement("div", {
                                        className: imageClass + " " + styles.image + " " + styles.imageDiscourager,
                                        onDoubleClick: _this14.handleImageDoubleClick,
                                        onWheel: _this14.handleImageMouseWheel,
                                        style: imageStyle,
                                        key: imageSrc + keyEndings[srcType]
                                    }, _react2.default.createElement("div", {
                                        className: "ril-download-blocker " + styles.downloadBlocker
                                    })))) : images.push(_react2.default.createElement("img", {
                                        className: imageClass + " " + styles.image,
                                        onDoubleClick: _this14.handleImageDoubleClick,
                                        onWheel: _this14.handleImageMouseWheel,
                                        onDragStart: function(e) {
                                            return e.preventDefault();
                                        },
                                        style: imageStyle,
                                        src: imageSrc,
                                        key: imageSrc + keyEndings[srcType],
                                        alt: "string" == typeof imageTitle ? imageTitle : (0, _util.translate)("Image"),
                                        draggable: !1
                                    }));
                                }
                            }, zoomMultiplier = this.getZoomMultiplier();
                            // Next Image (displayed on the right)
                            addImage("nextSrc", "ril-image-next " + styles.imageNext, {
                                x: boxSize.width
                            }), // Main Image
                            addImage("mainSrc", "ril-image-current", {
                                x: -1 * offsetX,
                                y: -1 * offsetY,
                                zoom: zoomMultiplier
                            }), // Previous Image (displayed on the left)
                            addImage("prevSrc", "ril-image-prev " + styles.imagePrev, {
                                x: -1 * boxSize.width
                            });
                            var noop = function() {}, zoomInButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomInButton ], zoomOutButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomOutButton ], zoomInButtonHandler = this.handleZoomInButtonClick, zoomOutButtonHandler = this.handleZoomOutButtonClick;
                            // Disable zooming in when zoomed all the way in
                            zoomLevel === _constant.MAX_ZOOM_LEVEL && (zoomInButtonClasses.push(styles.builtinButtonDisabled), 
                            zoomInButtonHandler = noop), // Disable zooming out when zoomed all the way out
                            zoomLevel === _constant.MIN_ZOOM_LEVEL && (zoomOutButtonClasses.push(styles.builtinButtonDisabled), 
                            zoomOutButtonHandler = noop), // Ignore clicks during animation
                            this.isAnimating() && (zoomInButtonHandler = noop, zoomOutButtonHandler = noop);
                            var modalStyle = {
                                overlay: _extends({
                                    zIndex: 1e3,
                                    backgroundColor: "transparent"
                                }, reactModalStyle.overlay),
                                content: _extends({
                                    backgroundColor: "transparent",
                                    overflow: "hidden",
                                    // Needed, otherwise keyboard shortcuts scroll the page
                                    border: "none",
                                    borderRadius: 0,
                                    padding: 0,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0
                                }, reactModalStyle.content)
                            };
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                            return _react2.default.createElement(_reactModal2.default, {
                                isOpen: !0,
                                onRequestClose: clickOutsideToClose ? this.requestClose : noop,
                                onAfterOpen: function() {
                                    // Focus on the div with key handlers
                                    _this14.outerEl && _this14.outerEl.focus(), _onAfterOpen();
                                },
                                style: modalStyle,
                                contentLabel: (0, _util.translate)("Lightbox")
                            }, _react2.default.createElement("div", {
                                // eslint-disable-line jsx-a11y/no-static-element-interactions
                                // Floating modal with closing animations
                                className: "ril-outer " + styles.outer + " " + styles.outerAnimating + " " + this.props.wrapperClassName + " " + (isClosing ? "ril-closing " + styles.outerClosing : ""),
                                style: {
                                    transition: "opacity " + animationDuration + "ms",
                                    animationDuration: animationDuration + "ms",
                                    animationDirection: isClosing ? "normal" : "reverse"
                                },
                                ref: function(el) {
                                    _this14.outerEl = el;
                                },
                                onWheel: this.handleOuterMousewheel,
                                onMouseMove: this.handleMouseMove,
                                onMouseDown: this.handleMouseDown,
                                onTouchStart: this.handleTouchStart,
                                onTouchMove: this.handleTouchMove,
                                tabIndex: "-1",
                                onKeyDown: this.handleKeyInput,
                                onKeyUp: this.handleKeyInput
                            }, _react2.default.createElement("div", {
                                // eslint-disable-line jsx-a11y/no-static-element-interactions
                                // Image holder
                                className: "ril-inner " + styles.inner,
                                onClick: clickOutsideToClose ? this.closeIfClickInner : noop
                            }, images), prevSrc && _react2.default.createElement("button", {
                                // Move to previous image button
                                type: "button",
                                className: "ril-prev-button " + styles.navButtons + " " + styles.navButtonPrev,
                                key: "prev",
                                "aria-label": this.props.prevLabel,
                                onClick: this.isAnimating() ? noop : this.requestMovePrev
                            }), nextSrc && _react2.default.createElement("button", {
                                // Move to next image button
                                type: "button",
                                className: "ril-next-button " + styles.navButtons + " " + styles.navButtonNext,
                                key: "next",
                                "aria-label": this.props.nextLabel,
                                onClick: this.isAnimating() ? noop : this.requestMoveNext
                            }), _react2.default.createElement("div", {
                                // Lightbox toolbar
                                className: "ril-toolbar " + styles.toolbar
                            }, _react2.default.createElement("ul", {
                                className: "ril-toolbar-left " + styles.toolbarSide + " " + styles.toolbarLeftSide
                            }, _react2.default.createElement("li", {
                                className: "ril-toolbar__item " + styles.toolbarItem
                            }, _react2.default.createElement("span", {
                                className: "ril-toolbar__item__child " + styles.toolbarItemChild
                            }, imageTitle))), _react2.default.createElement("ul", {
                                className: [ "ril-toolbar-right", styles.toolbarSide, styles.toolbarRightSide ].join(" ")
                            }, toolbarButtons && toolbarButtons.map(function(button, i) {
                                return _react2.default.createElement("li", {
                                    key: "button_" + (i + 1),
                                    className: "ril-toolbar__item " + styles.toolbarItem
                                }, button);
                            }), enableZoom && _react2.default.createElement("li", {
                                className: "ril-toolbar__item " + styles.toolbarItem
                            }, _react2.default.createElement("button", {
                                // Lightbox zoom in button
                                type: "button",
                                key: "zoom-in",
                                "aria-label": this.props.zoomInLabel,
                                className: "ril-zoom-in " + zoomInButtonClasses.join(" "),
                                onClick: zoomInButtonHandler
                            })), enableZoom && _react2.default.createElement("li", {
                                className: "ril-toolbar__item " + styles.toolbarItem
                            }, _react2.default.createElement("button", {
                                // Lightbox zoom out button
                                type: "button",
                                key: "zoom-out",
                                "aria-label": this.props.zoomOutLabel,
                                className: "ril-zoom-out " + zoomOutButtonClasses.join(" "),
                                onClick: zoomOutButtonHandler
                            })), _react2.default.createElement("li", {
                                className: "ril-toolbar__item " + styles.toolbarItem
                            }, _react2.default.createElement("button", {
                                // Lightbox close button
                                type: "button",
                                key: "close",
                                "aria-label": this.props.closeLabel,
                                className: "ril-close ril-toolbar__item__child " + styles.toolbarItemChild + " " + styles.builtinButton + " " + styles.closeButton,
                                onClick: this.isAnimating() ? noop : this.requestClose
                            })))), this.props.imageCaption && _react2.default.createElement("div", {
                                // Image caption
                                onWheel: this.handleCaptionMousewheel,
                                onMouseDown: function(event) {
                                    return event.stopPropagation();
                                },
                                className: "ril-caption " + styles.caption,
                                ref: function(el) {
                                    _this14.caption = el;
                                }
                            }, _react2.default.createElement("div", {
                                className: "ril-caption-content " + styles.captionContent
                            }, this.props.imageCaption))));
                        }
                    } ]), ReactImageLightbox;
                }(_react.Component);
                ReactImageLightbox.propTypes = {
                    //-----------------------------
                    // Image sources
                    //-----------------------------
                    // Main display image url
                    mainSrc: _propTypes2.default.string.isRequired,
                    // eslint-disable-line react/no-unused-prop-types
                    // Previous display image url (displayed to the left)
                    // If left undefined, movePrev actions will not be performed, and the button not displayed
                    prevSrc: _propTypes2.default.string,
                    // Next display image url (displayed to the right)
                    // If left undefined, moveNext actions will not be performed, and the button not displayed
                    nextSrc: _propTypes2.default.string,
                    //-----------------------------
                    // Image thumbnail sources
                    //-----------------------------
                    // Thumbnail image url corresponding to props.mainSrc
                    mainSrcThumbnail: _propTypes2.default.string,
                    // eslint-disable-line react/no-unused-prop-types
                    // Thumbnail image url corresponding to props.prevSrc
                    prevSrcThumbnail: _propTypes2.default.string,
                    // eslint-disable-line react/no-unused-prop-types
                    // Thumbnail image url corresponding to props.nextSrc
                    nextSrcThumbnail: _propTypes2.default.string,
                    // eslint-disable-line react/no-unused-prop-types
                    //-----------------------------
                    // Event Handlers
                    //-----------------------------
                    // Close window event
                    // Should change the parent state such that the lightbox is not rendered
                    onCloseRequest: _propTypes2.default.func.isRequired,
                    // Move to previous image event
                    // Should change the parent state such that props.prevSrc becomes props.mainSrc,
                    //  props.mainSrc becomes props.nextSrc, etc.
                    onMovePrevRequest: _propTypes2.default.func,
                    // Move to next image event
                    // Should change the parent state such that props.nextSrc becomes props.mainSrc,
                    //  props.mainSrc becomes props.prevSrc, etc.
                    onMoveNextRequest: _propTypes2.default.func,
                    // Called when an image fails to load
                    // (imageSrc: string, srcType: string, errorEvent: object): void
                    onImageLoadError: _propTypes2.default.func,
                    // Open window event
                    onAfterOpen: _propTypes2.default.func,
                    //-----------------------------
                    // Download discouragement settings
                    //-----------------------------
                    // Enable download discouragement (prevents [right-click -> Save Image As...])
                    discourageDownloads: _propTypes2.default.bool,
                    //-----------------------------
                    // Animation settings
                    //-----------------------------
                    // Disable all animation
                    animationDisabled: _propTypes2.default.bool,
                    // Disable animation on actions performed with keyboard shortcuts
                    animationOnKeyInput: _propTypes2.default.bool,
                    // Animation duration (ms)
                    animationDuration: _propTypes2.default.number,
                    //-----------------------------
                    // Keyboard shortcut settings
                    //-----------------------------
                    // Required interval of time (ms) between key actions
                    // (prevents excessively fast navigation of images)
                    keyRepeatLimit: _propTypes2.default.number,
                    // Amount of time (ms) restored after each keyup
                    // (makes rapid key presses slightly faster than holding down the key to navigate images)
                    keyRepeatKeyupBonus: _propTypes2.default.number,
                    //-----------------------------
                    // Image info
                    //-----------------------------
                    // Image title
                    imageTitle: _propTypes2.default.node,
                    // Image caption
                    imageCaption: _propTypes2.default.node,
                    //-----------------------------
                    // Lightbox style
                    //-----------------------------
                    // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
                    reactModalStyle: _propTypes2.default.shape({}),
                    // Padding (px) between the edge of the window and the lightbox
                    imagePadding: _propTypes2.default.number,
                    wrapperClassName: _propTypes2.default.string,
                    //-----------------------------
                    // Other
                    //-----------------------------
                    // Array of custom toolbar buttons
                    toolbarButtons: _propTypes2.default.arrayOf(_propTypes2.default.node),
                    // When true, clicks outside of the image close the lightbox
                    clickOutsideToClose: _propTypes2.default.bool,
                    // Set to false to disable zoom functionality and hide zoom buttons
                    enableZoom: _propTypes2.default.bool,
                    // Aria-labels
                    nextLabel: _propTypes2.default.string,
                    prevLabel: _propTypes2.default.string,
                    zoomInLabel: _propTypes2.default.string,
                    zoomOutLabel: _propTypes2.default.string,
                    closeLabel: _propTypes2.default.string
                }, ReactImageLightbox.defaultProps = {
                    imageTitle: null,
                    imageCaption: null,
                    toolbarButtons: null,
                    animationDisabled: !1,
                    animationDuration: 300,
                    animationOnKeyInput: !1,
                    clickOutsideToClose: !0,
                    closeLabel: "Close lightbox",
                    discourageDownloads: !1,
                    enableZoom: !0,
                    imagePadding: 10,
                    keyRepeatKeyupBonus: 40,
                    keyRepeatLimit: 180,
                    mainSrcThumbnail: null,
                    nextLabel: "Next image",
                    nextSrc: null,
                    nextSrcThumbnail: null,
                    onAfterOpen: function() {},
                    onImageLoadError: function() {},
                    onMoveNextRequest: function() {},
                    onMovePrevRequest: function() {},
                    prevLabel: "Previous image",
                    prevSrc: null,
                    prevSrcThumbnail: null,
                    reactModalStyle: {},
                    wrapperClassName: "",
                    zoomInLabel: "Zoom in",
                    zoomOutLabel: "Zoom out"
                }, exports.default = ReactImageLightbox;
            }, /* 2 */
            /***/
            function(module, exports) {
                module.exports = __webpack_require__(8);
            }, /* 3 */
            /***/
            function(module, exports) {
                module.exports = __webpack_require__(73);
            }, /* 4 */
            /***/
            function(module, exports) {
                module.exports = __webpack_require__(75);
            }, /* 5 */
            /***/
            function(module, exports, __webpack_require__) {
                "use strict";
                /**
 * Get the version of Internet Explorer in use, or undefined
 *
 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
 */
                function getIEVersion() {
                    if ("undefined" != typeof window) {
                        var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
                        return match ? parseInt(match[1], 10) : void 0;
                    }
                }
                /**
 * Placeholder for future translate functionality
 */
                function translate(str) {
                    var replaceStrings = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!str) return "";
                    var translated = str;
                    return replaceStrings && Object.keys(replaceStrings).forEach(function(placeholder) {
                        translated = translated.replace(placeholder, replaceStrings[placeholder]);
                    }), translated;
                }
                function getWindowWidth() {
                    return "undefined" == typeof window ? 0 : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                }
                function getWindowHeight() {
                    return "undefined" == typeof window ? 0 : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                }
                // Returns true if this window is rendered as an iframe inside another window
                // with the same origin.
                function isInSameOriginIframe() {
                    try {
                        return window.self !== window.top && window.top.document;
                    } catch (e) {
                        return !1;
                    }
                }
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                }), exports.getIEVersion = getIEVersion, exports.translate = translate, exports.getWindowWidth = getWindowWidth, 
                exports.getWindowHeight = getWindowHeight, exports.isInSameOriginIframe = isInSameOriginIframe;
            }, /* 6 */
            /***/
            function(module, exports, __webpack_require__) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                }), // Min image zoom level
                exports.MIN_ZOOM_LEVEL = 0, exports.MAX_ZOOM_LEVEL = 300, exports.ZOOM_RATIO = 1.007, 
                exports.ZOOM_BUTTON_INCREMENT_SIZE = 100, exports.WHEEL_MOVE_X_THRESHOLD = 200, 
                exports.WHEEL_MOVE_Y_THRESHOLD = 1, exports.KEYS = {
                    ESC: 27,
                    LEFT_ARROW: 37,
                    RIGHT_ARROW: 39
                }, exports.ACTION_NONE = 0, exports.ACTION_MOVE = 1, exports.ACTION_SWIPE = 2, exports.ACTION_PINCH = 3, 
                exports.ACTION_ROTATE = 4, exports.SOURCE_ANY = 0, exports.SOURCE_MOUSE = 1, exports.SOURCE_TOUCH = 2, 
                exports.SOURCE_POINTER = 3, exports.MIN_SWIPE_DISTANCE = 200;
            }, /* 7 */
            /***/
            function(module, exports, __webpack_require__) {
                var content = __webpack_require__(8), insertCss = __webpack_require__(10);
                "string" == typeof content && (content = [ [ module.i, content, "" ] ]), module.exports = content.locals || {}, 
                module.exports._getContent = function() {
                    return content;
                }, module.exports._getCss = function() {
                    return content.toString();
                }, module.exports._insertCss = function(options) {
                    return insertCss(content, options);
                };
            }, /* 8 */
            /***/
            function(module, exports, __webpack_require__) {
                exports = module.exports = __webpack_require__(9)(void 0), // imports
                // module
                exports.push([ module.i, '@-webkit-keyframes ril__closeWindow {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes ril__closeWindow {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.ril__outer {\n  background-color: rgba(0, 0, 0, 0.85);\n  outline: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.ril__outerClosing {\n  opacity: 0; }\n\n.ril__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.ril__image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.ril__imagePrev {\n  @extends .image; }\n\n.ril__imageNext {\n  @extends .image; }\n\n.ril__imageDiscourager {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain; }\n\n.ril__navButtons {\n  border: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  height: 34px;\n  padding: 40px 30px;\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.7; }\n  .ril__navButtons:hover {\n    opacity: 1; }\n  .ril__navButtons:active {\n    opacity: 0.7; }\n\n.ril__navButtonPrev {\n  left: 0;\n  background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==") no-repeat center; }\n\n.ril__navButtonNext {\n  right: 0;\n  background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+") no-repeat center; }\n\n.ril__downloadBlocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");\n  background-size: cover; }\n\n.ril__caption,\n.ril__toolbar {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.ril__caption {\n  bottom: 0;\n  max-height: 150px;\n  overflow: auto; }\n\n.ril__captionContent {\n  padding: 10px 20px;\n  color: #fff; }\n\n.ril__toolbar {\n  top: 0;\n  height: 50px; }\n\n.ril__toolbarSide {\n  height: 50px;\n  margin: 0; }\n\n.ril__toolbarSideNoFlex {\n  height: auto;\n  line-height: 50px;\n  max-width: 48%;\n  position: absolute;\n  top: 0;\n  bottom: 0; }\n\n.ril__toolbarLeftSide {\n  padding-left: 20px;\n  padding-right: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ril__toolbarLeftSideNoFlex {\n  left: 0;\n  overflow: visible; }\n\n.ril__toolbarRightSide {\n  padding-left: 0;\n  padding-right: 20px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n\n.ril__toolbarRightSideNoFlex {\n  right: 0; }\n\n.ril__toolbarItem {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0;\n  color: #fff;\n  font-size: 120%;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ril__toolbarItemChild {\n  vertical-align: middle; }\n\n.ril__builtinButton {\n  width: 40px;\n  height: 35px;\n  cursor: pointer;\n  border: none;\n  opacity: 0.7; }\n  .ril__builtinButton:hover {\n    opacity: 1; }\n  .ril__builtinButton:active {\n    outline: none; }\n\n.ril__builtinButtonDisabled {\n  cursor: default;\n  opacity: 0.5; }\n  .ril__builtinButtonDisabled:hover {\n    opacity: 0.5; }\n\n.ril__closeButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=") no-repeat center; }\n\n.ril__zoomInButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+") no-repeat center; }\n\n.ril__zoomOutButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=") no-repeat center; }\n\n.ril__outerAnimating {\n  -webkit-animation-name: ril__closeWindow;\n          animation-name: ril__closeWindow; }\n\n@-webkit-keyframes ril__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n@keyframes ril__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n.ril__loadingCircle {\n  width: 60px;\n  height: 60px;\n  position: relative; }\n\n.ril__loadingCirclePoint {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .ril__loadingCirclePoint:before {\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #fff;\n    border-radius: 30%;\n    -webkit-animation: ril__pointFade 1200ms infinite ease-in-out both;\n            animation: ril__pointFade 1200ms infinite ease-in-out both; }\n  .ril__loadingCirclePoint:nth-of-type(1) {\n    -webkit-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .ril__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .ril__loadingCirclePoint:nth-of-type(1):before, .ril__loadingCirclePoint:nth-of-type(7):before {\n    -webkit-animation-delay: -1200ms;\n            animation-delay: -1200ms; }\n  .ril__loadingCirclePoint:nth-of-type(2) {\n    -webkit-transform: rotate(30deg);\n        -ms-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .ril__loadingCirclePoint:nth-of-type(8) {\n    -webkit-transform: rotate(210deg);\n        -ms-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .ril__loadingCirclePoint:nth-of-type(2):before, .ril__loadingCirclePoint:nth-of-type(8):before {\n    -webkit-animation-delay: -1000ms;\n            animation-delay: -1000ms; }\n  .ril__loadingCirclePoint:nth-of-type(3) {\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .ril__loadingCirclePoint:nth-of-type(9) {\n    -webkit-transform: rotate(240deg);\n        -ms-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .ril__loadingCirclePoint:nth-of-type(3):before, .ril__loadingCirclePoint:nth-of-type(9):before {\n    -webkit-animation-delay: -800ms;\n            animation-delay: -800ms; }\n  .ril__loadingCirclePoint:nth-of-type(4) {\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .ril__loadingCirclePoint:nth-of-type(10) {\n    -webkit-transform: rotate(270deg);\n        -ms-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .ril__loadingCirclePoint:nth-of-type(4):before, .ril__loadingCirclePoint:nth-of-type(10):before {\n    -webkit-animation-delay: -600ms;\n            animation-delay: -600ms; }\n  .ril__loadingCirclePoint:nth-of-type(5) {\n    -webkit-transform: rotate(120deg);\n        -ms-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .ril__loadingCirclePoint:nth-of-type(11) {\n    -webkit-transform: rotate(300deg);\n        -ms-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .ril__loadingCirclePoint:nth-of-type(5):before, .ril__loadingCirclePoint:nth-of-type(11):before {\n    -webkit-animation-delay: -400ms;\n            animation-delay: -400ms; }\n  .ril__loadingCirclePoint:nth-of-type(6) {\n    -webkit-transform: rotate(150deg);\n        -ms-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .ril__loadingCirclePoint:nth-of-type(12) {\n    -webkit-transform: rotate(330deg);\n        -ms-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .ril__loadingCirclePoint:nth-of-type(6):before, .ril__loadingCirclePoint:nth-of-type(12):before {\n    -webkit-animation-delay: -200ms;\n            animation-delay: -200ms; }\n  .ril__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .ril__loadingCirclePoint:nth-of-type(13) {\n    -webkit-transform: rotate(360deg);\n        -ms-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  .ril__loadingCirclePoint:nth-of-type(7):before, .ril__loadingCirclePoint:nth-of-type(13):before {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n\n.ril__loadingContainer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.ril__loadingContainer__icon {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n      -ms-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n', "" ]), 
                // exports
                exports.locals = {
                    outer: "ril__outer",
                    outerClosing: "ril__outerClosing",
                    inner: "ril__inner",
                    image: "ril__image",
                    imagePrev: "ril__imagePrev",
                    imageNext: "ril__imageNext",
                    imageDiscourager: "ril__imageDiscourager",
                    navButtons: "ril__navButtons",
                    navButtonPrev: "ril__navButtonPrev",
                    navButtonNext: "ril__navButtonNext",
                    downloadBlocker: "ril__downloadBlocker",
                    caption: "ril__caption",
                    toolbar: "ril__toolbar",
                    captionContent: "ril__captionContent",
                    toolbarSide: "ril__toolbarSide",
                    toolbarSideNoFlex: "ril__toolbarSideNoFlex",
                    toolbarLeftSide: "ril__toolbarLeftSide",
                    toolbarLeftSideNoFlex: "ril__toolbarLeftSideNoFlex",
                    toolbarRightSide: "ril__toolbarRightSide",
                    toolbarRightSideNoFlex: "ril__toolbarRightSideNoFlex",
                    toolbarItem: "ril__toolbarItem",
                    toolbarItemChild: "ril__toolbarItemChild",
                    builtinButton: "ril__builtinButton",
                    builtinButtonDisabled: "ril__builtinButtonDisabled",
                    closeButton: "ril__closeButton",
                    zoomInButton: "ril__zoomInButton",
                    zoomOutButton: "ril__zoomOutButton",
                    outerAnimating: "ril__outerAnimating",
                    closeWindow: "ril__closeWindow",
                    loadingCircle: "ril__loadingCircle",
                    loadingCirclePoint: "ril__loadingCirclePoint",
                    pointFade: "ril__pointFade",
                    loadingContainer: "ril__loadingContainer",
                    loadingContainer__icon: "ril__loadingContainer__icon"
                };
            }, /* 9 */
            /***/
            function(module, exports) {
                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || "", cssMapping = item[3];
                    if (!cssMapping) return content;
                    if (useSourceMap && "function" == typeof btoa) {
                        var sourceMapping = toComment(cssMapping);
                        return [ content ].concat(cssMapping.sources.map(function(source) {
                            return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                        })).concat([ sourceMapping ]).join("\n");
                    }
                    return [ content ].join("\n");
                }
                // Adapted from convert-source-map (MIT)
                function toComment(sourceMap) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
                }
                /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
                // css base code, injected by the css-loader
                module.exports = function(useSourceMap) {
                    var list = [];
                    // return the list of modules as css string
                    // import a list of modules into the list
                    return list.toString = function() {
                        return this.map(function(item) {
                            var content = cssWithMappingToString(item, useSourceMap);
                            return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                        }).join("");
                    }, list.i = function(modules, mediaQuery) {
                        "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                        for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                            var id = this[i][0];
                            "number" == typeof id && (alreadyImportedModules[id] = !0);
                        }
                        for (i = 0; i < modules.length; i++) {
                            var item = modules[i];
                            // skip already imported module
                            // this implementation is not 100% perfect for weird media query combinations
                            //  when a module is imported multiple times with different media queries.
                            //  I hope this will never occur (Hey this way we have smaller bundles)
                            "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                            list.push(item));
                        }
                    }, list;
                };
            }, /* 10 */
            /***/
            function(module, exports, __webpack_require__) {
                "use strict";
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                // Base64 encoding and decoding - The "Unicode Problem"
                // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
                function b64EncodeUnicode(str) {
                    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                        return String.fromCharCode("0x" + p1);
                    }));
                }
                /**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
                function removeCss(ids) {
                    ids.forEach(function(id) {
                        if (--inserted[id] <= 0) {
                            var elem = document.getElementById(prefix + id);
                            elem && elem.parentNode.removeChild(elem);
                        }
                    });
                }
                /**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
                function insertCss(styles) {
                    for (var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace, _ref$prepend = _ref.prepend, prepend = void 0 !== _ref$prepend && _ref$prepend, ids = [], i = 0; i < styles.length; i++) {
                        var _styles$i = (0, _slicedToArray3.default)(styles[i], 4), moduleId = _styles$i[0], css = _styles$i[1], media = _styles$i[2], sourceMap = _styles$i[3], id = moduleId + "-" + i;
                        if (ids.push(id), !inserted[id] || replace) {
                            inserted[id] = 1;
                            var elem = document.getElementById(prefix + id), create = !1;
                            elem || (create = !0, elem = document.createElement("style"), elem.setAttribute("type", "text/css"), 
                            elem.id = prefix + id, media && elem.setAttribute("media", media));
                            var cssText = css;
                            sourceMap && "function" == typeof btoa && (// skip IE9 and below, see http://caniuse.com/atob-btoa
                            cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode((0, 
                            _stringify2.default)(sourceMap)) + "*/", cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/"), 
                            "textContent" in elem ? elem.textContent = cssText : elem.styleSheet.cssText = cssText, 
                            create && (prepend ? document.head.insertBefore(elem, document.head.childNodes[0]) : document.head.appendChild(elem));
                        } else inserted[id]++;
                    }
                    return removeCss.bind(null, ids);
                }
                var _stringify = __webpack_require__(11), _stringify2 = _interopRequireDefault(_stringify), _slicedToArray2 = __webpack_require__(12), _slicedToArray3 = _interopRequireDefault(_slicedToArray2), prefix = "s", inserted = {};
                module.exports = insertCss;
            }, /* 11 */
            /***/
            function(module, exports) {
                module.exports = __webpack_require__(16);
            }, /* 12 */
            /***/
            function(module, exports) {
                module.exports = __webpack_require__(17);
            } ]);
        });
    }, /* 72 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var emptyFunction = __webpack_require__(30), invariant = __webpack_require__(31), ReactPropTypesSecret = __webpack_require__(74);
        module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                secret !== ReactPropTypesSecret && invariant(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            }
            function getShim() {
                return shim;
            }
            shim.isRequired = shim;
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim
            };
            return ReactPropTypes.checkPropTypes = emptyFunction, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, /* 73 */
    /***/
    function(module, exports, __webpack_require__) {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(72)();
    }, /* 74 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, /* 75 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_75__;
    } ]);
});