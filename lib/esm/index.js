var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 == "object" || typeof from2 == "function")
    for (let key of __getOwnPropNames(from2))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      var hasSymbol = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type == "string" || typeof type == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element2 = REACT_ELEMENT_TYPE, ForwardRef2 = REACT_FORWARD_REF_TYPE, Fragment6 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo2 = REACT_MEMO_TYPE, Portal3 = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element2, exports.ForwardRef = ForwardRef2, exports.Fragment = Fragment6, exports.Lazy = Lazy, exports.Memo = Memo2, exports.Portal = Portal3, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement2, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    })();
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_is_development();
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is(), REACT_STATICS = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    }, KNOWN_STATICS = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    }, FORWARD_REF_STATICS = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    }, MEMO_STATICS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    }, TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent != "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        var keys = getOwnPropertyNames(sourceComponent);
        getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
        for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty2 = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign)
          return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", Object.getOwnPropertyNames(test1)[0] === "5")
          return !1;
        for (var test2 = {}, i = 0; i < 10; i++)
          test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789")
          return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        }), Object.keys(Object.assign({}, test3)).join("") === "abcdefghijklmnopqrst";
      } catch {
        return !1;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      for (var from2, to = toObject(target), symbols, s = 1; s < arguments.length; s++) {
        from2 = Object(arguments[s]);
        for (var key in from2)
          hasOwnProperty2.call(from2, key) && (to[key] = from2[key]);
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i = 0; i < symbols.length; i++)
            propIsEnumerable.call(from2, symbols[i]) && (to[symbols[i]] = from2[symbols[i]]);
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    ReactPropTypesSecret = require_ReactPropTypesSecret(), loggedTypeFailures = {}, has = require_has(), printWarning = function(text) {
      var message = "Warning: " + text;
      typeof console < "u" && console.error(message);
      try {
        throw new Error(message);
      } catch {
      }
    };
    var ReactPropTypesSecret, loggedTypeFailures, has;
    function checkPropTypes(typeSpecs, values3, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs)
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] != "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw err.name = "Invariant Violation", err;
            }
            error = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error) && printWarning(
            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack ?? "")
            );
          }
        }
    }
    checkPropTypes.resetWarningCache = function() {
      loggedTypeFailures = {};
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is(), assign2 = require_object_assign(), ReactPropTypesSecret = require_ReactPropTypesSecret(), has = require_has(), checkPropTypes = require_checkPropTypes(), printWarning = function() {
    };
    printWarning = function(text) {
      var message = "Warning: " + text;
      typeof console < "u" && console.error(message);
      try {
        throw new Error(message);
      } catch {
      }
    };
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement6, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn == "function")
          return iteratorFn;
      }
      var ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
      }
      function PropTypeError(message, data) {
        this.message = message, this.data = data && typeof data == "object" ? data : {}, this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw err.name = "Invariant Violation", err;
            } else if (typeof console < "u") {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3 && (printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }
          return props[propName] == null ? isRequired ? props[propName] === null ? new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.")) : new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null : validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker != "function")
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement6(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues))
          return arguments.length > 1 ? printWarning(
            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          ) : printWarning("Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull;
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++)
            if (is(propValue, expectedValues[i]))
              return null;
          var valuesString = JSON.stringify(expectedValues, function(key, value) {
            var type = getPreciseType(value);
            return type === "symbol" ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker != "function")
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          for (var key in propValue)
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error)
                return error;
            }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers))
          return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker != "function")
            return printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            ), emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var expectedTypes = [], i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2], checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null)
              return null;
            checkerResult.data && has(checkerResult.data, "expectedType") && expectedTypes.push(checkerResult.data.expectedType);
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker != "function")
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker != "function")
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            if (!checker)
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue))
              return propValue.every(isNode);
            if (propValue === null || isValidElement6(propValue))
              return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue), step;
              if (iteratorFn !== propValue.entries) {
                for (; !(step = iterator.next()).done; )
                  if (!isNode(step.value))
                    return !1;
              } else
                for (; !(step = iterator.next()).done; ) {
                  var entry = step.value;
                  if (entry && !isNode(entry[1]))
                    return !1;
                }
            } else
              return !1;
            return !0;
          default:
            return !1;
        }
      }
      function isSymbol(propType, propValue) {
        return propType === "symbol" ? !0 : propValue ? propValue["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && propValue instanceof Symbol : !1;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue > "u" || propValue === null)
          return "" + propValue;
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date)
            return "date";
          if (propValue instanceof RegExp)
            return "regexp";
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        return !propValue.constructor || !propValue.constructor.name ? ANONYMOUS : propValue.constructor.name;
      }
      return ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    ReactIs = require_react_is(), throwOnDirectAccess = !0, module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    var ReactIs, throwOnDirectAccess;
  }
});

// node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function() {
      "use strict";
      var REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), enableScopeAPI = !1, enableCacheElement = !1, enableTransitionTracing = !1, enableLegacyHidden = !1, enableDebugTracing = !1, REACT_MODULE_REFERENCE;
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0));
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element2 = REACT_ELEMENT_TYPE, ForwardRef2 = REACT_FORWARD_REF_TYPE, Fragment6 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo2 = REACT_MEMO_TYPE, Portal3 = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, SuspenseList = REACT_SUSPENSE_LIST_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1, hasWarnedAboutDeprecatedIsConcurrentMode = !1;
      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function isConcurrentMode(object) {
        return hasWarnedAboutDeprecatedIsConcurrentMode || (hasWarnedAboutDeprecatedIsConcurrentMode = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      }
      exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element2, exports.ForwardRef = ForwardRef2, exports.Fragment = Fragment6, exports.Lazy = Lazy, exports.Memo = Memo2, exports.Portal = Portal3, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.SuspenseList = SuspenseList, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement2, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isSuspenseList = isSuspenseList, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/utils/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_is_development2();
  }
});

// src/Autocomplete/Autocomplete.tsx
import * as React36 from "react";

// node_modules/@mui/material/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
}, common_default = common;

// node_modules/@mui/material/colors/red.js
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, red_default = red;

// node_modules/@mui/material/colors/purple.js
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, purple_default = purple;

// node_modules/@mui/material/colors/blue.js
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, blue_default = blue;

// node_modules/@mui/material/colors/lightBlue.js
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, lightBlue_default = lightBlue;

// node_modules/@mui/material/colors/green.js
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, green_default = green;

// node_modules/@mui/material/colors/orange.js
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, orange_default = orange;

// node_modules/@mui/material/colors/grey.js
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, grey_default = grey;

// node_modules/@mui/material/styles/identifier.js
var identifier_default = "$$material";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
import * as React4 from "react";

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn2) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn2(arg)), cache[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js
import * as React2 from "react";
import { useContext as useContext2, forwardRef as forwardRef2 } from "react";

// node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet)
    return tag.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === tag)
      return document.styleSheets[i];
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  return tag.setAttribute("data-emotion", options.key), options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce), tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      _this.tags.length === 0 ? _this.insertionPoint ? before = _this.insertionPoint.nextSibling : _this.prepend ? before = _this.container.firstChild : before = _this.before : before = _this.tags[_this.tags.length - 1].nextSibling, _this.container.insertBefore(tag, before), _this.tags.push(tag);
    }, this.isSpeedy = options.speedy === void 0 ? !1 : options.speedy, this.tags = [], this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, this.prepend = options.prepend, this.insertionPoint = options.insertionPoint, this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  return _proto.hydrate = function(nodes) {
    nodes.forEach(this._insertTag);
  }, _proto.insert = function(rule) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
    var tag = this.tags[this.tags.length - 1], isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
    if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3, this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule) || console.error('There was a problem inserting the following rule: "' + rule + '"', e);
      }
    } else
      tag.appendChild(document.createTextNode(rule));
    this.ctr++;
  }, _proto.flush = function() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-", MOZ = "-moz-", WEBKIT = "-webkit-", COMMENT = "comm", RULESET = "rule", DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs, from = String.fromCharCode, assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end2) {
  return value.slice(begin, end2);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end2) {
  return substr(characters, begin, end2);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  for (; (character = peek()) && character < 33; )
    next();
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  for (; --count && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  for (; next(); )
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        type !== 34 && type !== 39 && delimiter(character);
        break;
      case 40:
        type === 41 && delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  for (; next() && type + character !== 57; )
    if (type + character === 84 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  for (; !token(peek()); )
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  for (var index = 0, offset2 = 0, length2 = pseudo, atrule = 0, property = 0, previous = 0, variable = 1, scanning = 1, ampersand = 1, character2 = 0, type = "", props = rules, children = rulesets, reference2 = rule, characters2 = type; scanning; )
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1 && (ampersand = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            ampersand == -1 && (characters2 = replace(characters2, /\f/g, "")), property > 0 && strlen(characters2) - length2 && append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            if (append(reference2 = ruleset(characters2, root, parent, index, offset2, rules, points, type, props = [], children = [], length2), rulesets), character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference2, reference2, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference2, reference2, rule && append(ruleset(value, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                }
        }
        index = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            peek() === 45 && (characters2 += delimit(next())), atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            previous === 45 && strlen(characters2) == 2 && (variable = 0);
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset2, rules, points, type, props, children, length2) {
  for (var post = offset2 - 1, rule = offset2 === 0 ? rules : [""], size = sizeof(rule), i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) && (props[k++] = z);
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  for (var output = "", length2 = sizeof(children), i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    for (var output = "", i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function(begin, points, index) {
  for (var previous = 0, character2 = 0; previous = character2, character2 = peek(), previous === 38 && character2 === 12 && (points[index] = 1), !token(character2); )
    next();
  return slice(begin, position);
}, toRules = function(parsed, points) {
  var index = -1, character2 = 44;
  do
    switch (token(character2)) {
      case 0:
        character2 === 38 && peek() === 12 && (points[index] = 1), parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "", points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  while (character2 = next());
  return parsed;
}, getRules = function(value, points) {
  return dealloc(toRules(alloc(value), points));
}, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(element) {
  if (!(element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1)) {
    for (var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; parent.type !== "rule"; )
      if (parent = parent.parent, !parent)
        return;
    if (!(element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) && !isImplicitRule) {
      fixedElements.set(element, !0);
      for (var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k = 0; i < rules.length; i++)
        for (var j = 0; j < parentRules.length; j++, k++)
          element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
}, removeLabel = function(element) {
  if (element.type === "decl") {
    var value = element.value;
    // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98 && (element.return = "", element.value = "");
  }
}, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
}, createUnsafeSelectorsAlarm = function(cache) {
  return function(element, index, children) {
    if (!(element.type !== "rule" || cache.compat)) {
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses) {
        for (var isNested = !!element.parent, commentContainer = isNested ? element.parent.children : (
          // global rule at the root level
          children
        ), i = commentContainer.length - 1; i >= 0; i--) {
          var node2 = commentContainer[i];
          if (node2.line < element.line)
            break;
          if (node2.column < element.column) {
            if (isIgnoringComment(node2))
              return;
            break;
          }
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, isImportRule = function(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
}, isPrependedWithRegularRules = function(index, children) {
  for (var i = index - 1; i >= 0; i--)
    if (!isImportRule(children[i]))
      return !0;
  return !1;
}, nullifyElement = function(element) {
  element.type = "", element.value = "", element.return = "", element.children = "", element.props = "";
}, incorrectImportAlarm = function(element, index, children) {
  isImportRule(element) && (element.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nullifyElement(element)) : isPrependedWithRegularRules(index, children) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nullifyElement(element)));
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function(element, index, children, callback) {
  if (element.length > -1 && !element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length)
          return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              case "::placeholder":
                return serialize([copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
    }
}, defaultStylisPlugins = [prefixer], createCache = function(options) {
  var key = options.key;
  if (!key)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      dataEmotionAttribute.indexOf(" ") !== -1 && (document.head.appendChild(node2), node2.setAttribute("data-s", ""));
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (/[^a-z-]/.test(key))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
  var inserted = {}, container, nodesToHydrate = [];
  container = options.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
    function(node2) {
      for (var attrib = node2.getAttribute("data-emotion").split(" "), i = 1; i < attrib.length; i++)
        inserted[attrib[i]] = !0;
      nodesToHydrate.push(node2);
    }
  );
  var _insert, omnipresentPlugins = [compat, removeLabel];
  omnipresentPlugins.push(createUnsafeSelectorsAlarm({
    get compat() {
      return cache.compat;
    }
  }), incorrectImportAlarm);
  {
    var currentSheet, finalizingPlugins = [stringify, function(element) {
      element.root || (element.return ? currentSheet.insert(element.return) : element.value && element.type !== COMMENT && currentSheet.insert(element.value + "{}"));
    }], serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)), stylis = function(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet, serialized.map !== void 0 && (currentSheet = {
        insert: function(rule) {
          sheet.insert(rule + serialized.map);
        }
      }), stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles), shouldCache && (cache.inserted[serialized.name] = !0);
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  return cache.sheet.hydrate(nodesToHydrate), cache;
};

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = !0;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  return classNames.split(" ").forEach(function(className) {
    registered[className] !== void 0 ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
  }), rawClassName;
}
var registerStyles = function(cache, serialized, isStringTag2) {
  var className = cache.key + "-" + serialized.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag2 === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === !1) && cache.registered[className] === void 0 && (cache.registered[className] = serialized.styles);
}, insertStyles = function(cache, serialized, isStringTag2) {
  registerStyles(cache, serialized, isStringTag2);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, !0), current = current.next;
    while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  for (var h = 0, k, i = 0, len = str.length; len >= 4; ++i, len -= 4)
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24, k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16), k ^= /* k >>> r: */
    k >>> 24, h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255, h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  return h ^= h >>> 13, h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16), ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
  return property.charCodeAt(1) === 45;
}, isProcessableValue = function(value) {
  return value != null && typeof value != "boolean";
}, processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
}), processStyleValue = function(key, value) {
  switch (key) {
    case "animation":
    case "animationName":
      if (typeof value == "string")
        return value.replace(animationRegex, function(match2, p1, p2) {
          return cursor = {
            name: p1,
            styles: p2,
            next: cursor
          }, p1;
        });
  }
  return unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value == "number" && value !== 0 ? value + "px" : value;
};
contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, contentValues = ["normal", "none", "initial", "inherit", "unset"], oldProcessStyleValue = processStyleValue, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, hyphenatedCache = {}, processStyleValue = function(key, value) {
  if (key === "content" && (typeof value != "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
  var processed = oldProcessStyleValue(key, value);
  return processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0 && (hyphenatedCache[key] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
    return _char.toUpperCase();
  }) + "?")), processed;
};
var contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null)
    return "";
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(noComponentSelectorMessage);
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean":
      return "";
    case "object": {
      if (interpolation.anim === 1)
        return cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        }, interpolation.name;
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0)
          for (; next2 !== void 0; )
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            }, next2 = next2.next;
        var styles = interpolation.styles + ";";
        return interpolation.map !== void 0 && (styles += interpolation.map), styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor, result = interpolation(mergedProps);
        return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var matched = [], replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
        var fakeVarName = "animation" + matched.length;
        return matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + fakeVarName + "}";
      });
      matched.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + replaced + "`"));
      break;
  }
  if (registered == null)
    return interpolation;
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj))
    for (var i = 0; i < obj.length; i++)
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
  else
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value != "object")
        registered != null && registered[value] !== void 0 ? string += _key + "{" + registered[value] + "}" : isProcessableValue(value) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";");
      else {
        if (_key === "NO_COMPONENT_SELECTOR")
          throw new Error(noComponentSelectorMessage);
        if (Array.isArray(value) && typeof value[0] == "string" && (registered == null || registered[value[0]] === void 0))
          for (var _i = 0; _i < value.length; _i++)
            isProcessableValue(value[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
        else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default:
              _key === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR), string += _key + "{" + interpolated + "}";
          }
        }
      }
    }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var cursor, serializeStyles = function(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
    return args[0];
  var stringMode = !0, styles = "";
  cursor = void 0;
  var strings = args[0];
  strings == null || strings.raw === void 0 ? (stringMode = !1, styles += handleInterpolation(mergedProps, registered, strings)) : (strings[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles += strings[0]);
  for (var i = 1; i < args.length; i++)
    styles += handleInterpolation(mergedProps, registered, args[i]), stringMode && (strings[i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles += strings[i]);
  var sourceMap;
  styles = styles.replace(sourceMapPattern, function(match3) {
    return sourceMap = match3, "";
  }), labelPattern.lastIndex = 0;
  for (var identifierName = "", match2; (match2 = labelPattern.exec(styles)) !== null; )
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    map: sourceMap,
    next: cursor,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  };
};

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
import * as React from "react";
var syncFallback = function(create) {
  return create();
}, useInsertionEffect2 = React.useInsertionEffect ? React.useInsertionEffect : !1, useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback, useInsertionEffectWithLayoutFallback = useInsertionEffect2 || React.useLayoutEffect;

// node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js
var isBrowser2 = !0, hasOwnProperty = {}.hasOwnProperty, EmotionCacheContext = /* @__PURE__ */ React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.displayName = "EmotionCacheContext";
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function(func) {
  return /* @__PURE__ */ forwardRef2(function(props, ref) {
    var cache = useContext2(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
isBrowser2 || (withEmotionCache = function(func) {
  return function(props) {
    var cache = useContext2(EmotionCacheContext);
    return cache === null ? (cache = createCache({
      key: "css"
    }), /* @__PURE__ */ React2.createElement(EmotionCacheContext.Provider, {
      value: cache
    }, func(props, cache))) : func(props, cache);
  };
});
var ThemeContext = /* @__PURE__ */ React2.createContext({});
ThemeContext.displayName = "EmotionThemeContext";
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Insertion = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
  return registerStyles(cache, serialized, isStringTag2), useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag2);
  }), null;
}, Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
  var WrappedComponent = props[typePropName], registeredStyles = [cssProp], className = "";
  typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, registeredStyles, props.className) : props.className != null && (className = props.className + " ");
  var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    labelFromStack && (serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]));
  }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props)
    hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName && (newProps[key] = props[key]);
  return newProps.ref = ref, newProps.className = className, /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Insertion, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent == "string"
  }), /* @__PURE__ */ React2.createElement(WrappedComponent, newProps));
});
Emotion.displayName = "EmotionCssPropInternal";

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
import * as React3 from "react";
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs()), pkg = {
  name: "@emotion/react",
  version: "11.11.0",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
};
var warnedAboutCssPropForGlobal = !1, Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  !warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (props.className || props.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), warnedAboutCssPropForGlobal = !0);
  var styles = props.styles, serialized = serializeStyles([styles], void 0, React3.useContext(ThemeContext));
  if (!isBrowser2) {
    for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next2 = serialized.next; next2 !== void 0; )
      serializedNames += " " + next2.name, serializedStyles += next2.styles, next2 = next2.next;
    var shouldCache = cache.compat === !0, rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    return shouldCache ? null : /* @__PURE__ */ React3.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  }
  var sheetRef = React3.useRef();
  return useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global", sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    }), rehydrating = !1, node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), node2 !== null && (rehydrating = !0, node2.setAttribute("data-emotion", key), sheet.hydrate([node2])), sheetRef.current = [sheet, rehydrating], function() {
      sheet.flush();
    };
  }, [cache]), useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = !1;
      return;
    }
    if (serialized.next !== void 0 && insertStyles(cache, serialized.next, !0), sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element, sheet.flush();
    }
    cache.insert("", serialized, sheet, !1);
  }, [cache, serialized.name]), null;
});
Global.displayName = "EmotionGlobal";
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return serializeStyles(args);
}
var keyframes = function() {
  var insertable = css.apply(void 0, arguments), name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, classnames = function classnames2(args) {
  for (var len = args.length, i = 0, cls = ""; i < len; i++) {
    var arg = args[i];
    if (arg != null) {
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg))
            toAdd = classnames2(arg);
          else {
            arg.styles !== void 0 && arg.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), toAdd = "";
            for (var k in arg)
              arg[k] && k && (toAdd && (toAdd += " "), toAdd += k);
          }
          break;
        }
        default:
          toAdd = arg;
      }
      toAdd && (cls && (cls += " "), cls += toAdd);
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [], rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css2(registeredStyles);
}
var Insertion3 = function(_ref) {
  var cache = _ref.cache, serializedArr = _ref.serializedArr;
  return useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++)
      insertStyles(cache, serializedArr[i], !1);
  }), null;
}, ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = !1, serializedArr = [], css2 = function() {
    if (hasRendered)
      throw new Error("css can only be used during render");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    var serialized = serializeStyles(args, cache.registered);
    return serializedArr.push(serialized), registerStyles(cache, serialized, !1), cache.key + "-" + serialized.name;
  }, cx = function() {
    if (hasRendered)
      throw new Error("cx can only be used during render");
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    return merge(cache.registered, css2, classnames(args));
  }, content = {
    css: css2,
    cx,
    theme: React3.useContext(ThemeContext)
  }, ele = props.children(content);
  return hasRendered = !0, /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Insertion3, {
    cache,
    serializedArr
  }), ele);
});
ClassNames.displayName = "EmotionClassNames";
isBrowser3 = !0, isTestEnv = typeof jest < "u" || typeof vi < "u", isBrowser3 && !isTestEnv && (globalContext = // $FlowIgnore
typeof globalThis < "u" ? globalThis : isBrowser3 ? window : global, globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__", globalContext[globalKey] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), globalContext[globalKey] = !0);
var isBrowser3, isTestEnv, globalContext, globalKey;

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var testOmitPropsOnStringTag = isPropValid, testOmitPropsOnComponent = function(key) {
  return key !== "theme";
}, getDefaultShouldForwardProp = function(tag) {
  return typeof tag == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
}, composeShouldForwardProps = function(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  return typeof shouldForwardProp2 != "function" && isReal && (shouldForwardProp2 = tag.__emotion_forwardProp), shouldForwardProp2;
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Insertion5 = function(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
  return registerStyles(cache, serialized, isStringTag2), useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag2);
  }), null;
}, createStyled = function createStyled2(tag, options) {
  if (tag === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag, identifierName, targetClassName;
  options !== void 0 && (identifierName = options.label, targetClassName = options.target);
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments, styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0 && styles.push("label:" + identifierName + ";"), args[0] == null || args[0].raw === void 0)
      styles.push.apply(styles, args);
    else {
      args[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[0][0]);
      for (var len = args.length, i = 1; i < len; i++)
        args[0][i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[i], args[0][i]);
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag, className = "", classInterpolations = [], mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props)
          mergedProps[key] = props[key];
        mergedProps.theme = React4.useContext(ThemeContext);
      }
      typeof props.className == "string" ? className = getRegisteredStyles(cache.registered, classInterpolations, props.className) : props.className != null && (className = props.className + " ");
      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name, targetClassName !== void 0 && (className += " " + targetClassName);
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp, newProps = {};
      for (var _key in props)
        shouldUseAs && _key === "as" || // $FlowFixMe
        finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
      return newProps.className = className, newProps.ref = ref, /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Insertion5, {
        cache,
        serialized,
        isStringTag: typeof FinalTag == "string"
      }), /* @__PURE__ */ React4.createElement(FinalTag, newProps));
    });
    return Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, Styled.__emotion_styles = styles, Styled.__emotion_forwardProp = shouldForwardProp2, Object.defineProperty(Styled, "toString", {
      value: function() {
        return targetClassName === void 0 ? "NO_COMPONENT_SELECTOR" : "." + targetClassName;
      }
    }), Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, !0)
      })).apply(void 0, styles);
    }, Styled;
  };
};

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
import "react";
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});

// node_modules/@mui/styled-engine/index.js
function styled(tag, options) {
  let stylesFactory = newStyled(tag, options);
  return (...styles) => {
    let component = typeof tag == "string" ? `"${tag}"` : "component";
    return styles.length === 0 ? console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : styles.some((style3) => style3 === void 0) && console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`), stylesFactory(...styles);
  };
}
var internal_processStyles = (tag, processor) => {
  Array.isArray(tag.__emotion_styles) && (tag.__emotion_styles = processor(tag.__emotion_styles));
};

// node_modules/@mui/utils/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  return function(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/deepmerge/deepmerge.js
function isPlainObject(item) {
  if (typeof item != "object" || item === null)
    return !1;
  let prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source))
    return source;
  let output = {};
  return Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  }), output;
}
function deepmerge(target, source, options = {
  clone: !0
}) {
  let output = options.clone ? _extends({}, target) : target;
  return isPlainObject(target) && isPlainObject(source) && Object.keys(source).forEach((key) => {
    key !== "__proto__" && (isPlainObject(source[key]) && key in target && isPlainObject(target[key]) ? output[key] = deepmerge(target[key], source[key], options) : options.clone ? output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key] : output[key] = source[key]);
  }), output;
}

// node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType) {
  let {
    prototype = {}
  } = elementType;
  return !!prototype.isReactComponent;
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  let propValue = props[propName], safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let warningHint;
  return typeof propValue == "function" && !isClassComponent(propValue) && (warningHint = "Did you accidentally provide a plain function component instead?"), warningHint !== void 0 ? new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types.default.elementType, elementTypeAcceptingRef);

// node_modules/@mui/utils/exactProp/exactProp.js
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      let unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      return unsupportedProps.length > 0 ? new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}

// node_modules/@mui/utils/getDisplayName/getDisplayName.js
var import_react_is = __toESM(require_react_is2()), fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn2) {
  let match2 = `${fn2}`.match(fnNameMatchRegex);
  return match2 && match2[1] || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  let functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component != null) {
    if (typeof Component == "string")
      return Component;
    if (typeof Component == "function")
      return getFunctionComponentName(Component, "Component");
    if (typeof Component == "object")
      switch (Component.$$typeof) {
        case import_react_is.ForwardRef:
          return getWrappedName(Component, Component.render, "ForwardRef");
        case import_react_is.Memo:
          return getWrappedName(Component, Component.type, "memo");
        default:
          return;
      }
  }
}

// node_modules/@mui/utils/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  let propValue = props[propName], safePropName = propFullName || propName;
  return propValue == null ? null : propValue && propValue.nodeType !== 1 ? new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`) : null;
}

// node_modules/@mui/utils/refType/refType.js
var import_prop_types2 = __toESM(require_prop_types()), refType = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]), refType_default = refType;

// node_modules/@mui/utils/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string != "string")
    throw new Error("MUI: `capitalize(string)` expects a string argument.");
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/utils/ownerDocument/ownerDocument.js
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}

// node_modules/@mui/utils/setRef/setRef.js
function setRef(ref, value) {
  typeof ref == "function" ? ref(value) : ref && (ref.current = value);
}

// node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js
import * as React5 from "react";
var useEnhancedEffect = typeof window < "u" ? React5.useLayoutEffect : React5.useEffect, useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/utils/useId/useId.js
import * as React6 from "react";
var globalId = 0;
function useGlobalId(idOverride) {
  let [defaultId, setDefaultId] = React6.useState(idOverride), id = idOverride || defaultId;
  return React6.useEffect(() => {
    defaultId == null && (globalId += 1, setDefaultId(`mui-${globalId}`));
  }, [defaultId]), id;
}
var maybeReactUseId = React6.useId;
function useId2(idOverride) {
  if (maybeReactUseId !== void 0) {
    let reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  return useGlobalId(idOverride);
}

// node_modules/@mui/utils/unsupportedProp/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  let propFullNameSafe = propFullName || propName;
  return typeof props[propName] < "u" ? new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`) : null;
}

// node_modules/@mui/utils/useControlled/useControlled.js
import * as React7 from "react";
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  let {
    current: isControlled
  } = React7.useRef(controlled !== void 0), [valueState, setValue] = React7.useState(defaultProp), value = isControlled ? controlled : valueState;
  {
    React7.useEffect(() => {
      isControlled !== (controlled !== void 0) && console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [state, name, controlled]);
    let {
      current: defaultValue
    } = React7.useRef(defaultProp);
    React7.useEffect(() => {
      !isControlled && defaultValue !== defaultProp && console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join(`
`));
    }, [JSON.stringify(defaultProp)]);
  }
  let setValueIfUncontrolled = React7.useCallback((newValue) => {
    isControlled || setValue(newValue);
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@mui/utils/useEventCallback/useEventCallback.js
import * as React8 from "react";
function useEventCallback(fn2) {
  let ref = React8.useRef(fn2);
  return useEnhancedEffect_default(() => {
    ref.current = fn2;
  }), React8.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/utils/useForkRef/useForkRef.js
import * as React9 from "react";
function useForkRef(...refs) {
  return React9.useMemo(() => refs.every((ref) => ref == null) ? null : (instance) => {
    refs.forEach((ref) => {
      setRef(ref, instance);
    });
  }, refs);
}

// node_modules/@mui/utils/useLazyRef/useLazyRef.js
import * as React10 from "react";
var UNINITIALIZED = {};
function useLazyRef(init, initArg) {
  let ref = React10.useRef(UNINITIALIZED);
  return ref.current === UNINITIALIZED && (ref.current = init(initArg)), ref;
}

// node_modules/@mui/utils/useOnMount/useOnMount.js
import * as React11 from "react";
var EMPTY = [];
function useOnMount(fn2) {
  React11.useEffect(fn2, EMPTY);
}

// node_modules/@mui/utils/useTimeout/useTimeout.js
var Timeout = class _Timeout {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn2) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, fn2();
    }, delay);
  }
};
function useTimeout() {
  let timeout = useLazyRef(Timeout.create).current;
  return useOnMount(timeout.disposeEffect), timeout;
}

// node_modules/@mui/utils/useIsFocusVisible/useIsFocusVisible.js
import * as React12 from "react";
var hadKeyboardEvent = !0, hadFocusVisibleRecently = !1, hadFocusVisibleRecentlyTimeout = new Timeout(), inputTypesWhitelist = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function focusTriggersKeyboardModality(node2) {
  let {
    type,
    tagName
  } = node2;
  return !!(tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly || tagName === "TEXTAREA" && !node2.readOnly || node2.isContentEditable);
}
function handleKeyDown(event) {
  event.metaKey || event.altKey || event.ctrlKey || (hadKeyboardEvent = !0);
}
function handlePointerDown() {
  hadKeyboardEvent = !1;
}
function handleVisibilityChange() {
  this.visibilityState === "hidden" && hadFocusVisibleRecently && (hadKeyboardEvent = !0);
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, !0), doc.addEventListener("mousedown", handlePointerDown, !0), doc.addEventListener("pointerdown", handlePointerDown, !0), doc.addEventListener("touchstart", handlePointerDown, !0), doc.addEventListener("visibilitychange", handleVisibilityChange, !0);
}
function isFocusVisible(event) {
  let {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  let ref = React12.useCallback((node2) => {
    node2 != null && prepare(node2.ownerDocument);
  }, []), isFocusVisibleRef = React12.useRef(!1);
  function handleBlurVisible() {
    return isFocusVisibleRef.current ? (hadFocusVisibleRecently = !0, hadFocusVisibleRecentlyTimeout.start(100, () => {
      hadFocusVisibleRecently = !1;
    }), isFocusVisibleRef.current = !1, !0) : !1;
  }
  function handleFocusVisible(event) {
    return isFocusVisible(event) ? (isFocusVisibleRef.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

// node_modules/@mui/utils/usePreviousProps/usePreviousProps.js
import * as React13 from "react";
var usePreviousProps = (value) => {
  let ref = React13.useRef({});
  return React13.useEffect(() => {
    ref.current = value;
  }), ref.current;
}, usePreviousProps_default = usePreviousProps;

// node_modules/@mui/utils/integerPropType/integerPropType.js
function getTypeByValue(value) {
  let valueType = typeof value;
  switch (valueType) {
    case "number":
      return Number.isNaN(value) ? "NaN" : Number.isFinite(value) ? value !== Math.floor(value) ? "float" : "number" : "Infinity";
    case "object":
      return value === null ? "null" : value.constructor.name;
    default:
      return valueType;
  }
}
function ponyfillIsInteger(x) {
  return typeof x == "number" && isFinite(x) && Math.floor(x) === x;
}
var isInteger = Number.isInteger || ponyfillIsInteger;
function requiredInteger(props, propName, componentName, location) {
  let propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    let propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  return props[propName] === void 0 ? null : requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
var integerPropType_default = validator;

// node_modules/@mui/utils/resolveProps/resolveProps.js
function resolveProps(defaultProps2, props) {
  let output = _extends({}, props);
  return Object.keys(defaultProps2).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/))
      output[propName] = _extends({}, defaultProps2[propName], output[propName]);
    else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      let defaultSlotProps = defaultProps2[propName] || {}, slotProps = props[propName];
      output[propName] = {}, !slotProps || !Object.keys(slotProps) ? output[propName] = defaultSlotProps : !defaultSlotProps || !Object.keys(defaultSlotProps) ? output[propName] = slotProps : (output[propName] = _extends({}, slotProps), Object.keys(defaultSlotProps).forEach((slotPropName) => {
        output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
      }));
    } else
      output[propName] === void 0 && (output[propName] = defaultProps2[propName]);
  }), output;
}

// node_modules/@mui/utils/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  let output = {};
  return Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          let utilityClass = getUtilityClass(key);
          utilityClass !== "" && acc.push(utilityClass), classes && classes[key] && acc.push(classes[key]);
        }
        return acc;
      }, []).join(" ");
    }
  ), output;
}

// node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName, createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
}, ClassNameGenerator = createClassNameGenerator(), ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js
var globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  let globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  let result = {};
  return slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  }), result;
}

// node_modules/@mui/utils/clamp/clamp.js
function clamp(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
  return Math.max(min2, Math.min(val, max2));
}
var clamp_default = clamp;

// node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var _excluded = ["values", "unit", "step"];
var sortBreakpointsValues = (values3) => {
  let breakpointsAsArray = Object.keys(values3).map((key) => ({
    key,
    val: values3[key]
  })) || [];
  return breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val), breakpointsAsArray.reduce((acc, obj) => _extends({}, acc, {
    [obj.key]: obj.val
  }), {});
};
function createBreakpoints(breakpoints) {
  let {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values3 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded), sortedValues = sortBreakpointsValues(values3), keys = Object.keys(sortedValues);
  function up(key) {
    return `@media (min-width:${typeof values3[key] == "number" ? values3[key] : key}${unit})`;
  }
  function down(key) {
    return `@media (max-width:${(typeof values3[key] == "number" ? values3[key] : key) - step / 100}${unit})`;
  }
  function between(start2, end2) {
    let endIndex = keys.indexOf(end2);
    return `@media (min-width:${typeof values3[start2] == "number" ? values3[start2] : start2}${unit}) and (max-width:${(endIndex !== -1 && typeof values3[keys[endIndex]] == "number" ? values3[keys[endIndex]] : end2) - step / 100}${unit})`;
  }
  function only(key) {
    return keys.indexOf(key) + 1 < keys.length ? between(key, keys[keys.indexOf(key) + 1]) : up(key);
  }
  function not(key) {
    let keyIndex = keys.indexOf(key);
    return keyIndex === 0 ? up(keys[1]) : keyIndex === keys.length - 1 ? down(keys[keyIndex]) : between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

// node_modules/@mui/system/esm/createTheme/shape.js
var shape = {
  borderRadius: 4
}, shape_default = shape;

// node_modules/@mui/system/esm/responsivePropType.js
var import_prop_types3 = __toESM(require_prop_types()), responsivePropType = import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string, import_prop_types3.default.object, import_prop_types3.default.array]), responsivePropType_default = responsivePropType;

// node_modules/@mui/system/esm/merge.js
function merge2(acc, item) {
  return item ? deepmerge(acc, item, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : acc;
}
var merge_default = merge2;

// node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  let theme = props.theme || {};
  if (Array.isArray(propValue)) {
    let themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => (acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]), acc), {});
  }
  if (typeof propValue == "object") {
    let themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        let mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        let cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  return styleFromPropValue(propValue);
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  return ((_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    let breakpointStyleKey = breakpointsInput.up(key);
    return acc[breakpointStyleKey] = {}, acc;
  }, {})) || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    let breakpointOutput = acc[key];
    return (!breakpointOutput || Object.keys(breakpointOutput).length === 0) && delete acc[key], acc;
  }, style3);
}

// node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = !0) {
  if (!path || typeof path != "string")
    return null;
  if (obj && obj.vars && checkVars) {
    let val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null)
      return val;
  }
  return path.split(".").reduce((acc, item) => acc && acc[item] != null ? acc[item] : null, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  return typeof themeMapping == "function" ? value = themeMapping(propValueFinal) : Array.isArray(themeMapping) ? value = themeMapping[propValueFinal] || userValue : value = getPath(themeMapping, propValueFinal) || userValue, transform && (value = transform(value, userValue, themeMapping)), value;
}
function style(options) {
  let {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options, fn2 = (props) => {
    if (props[prop] == null)
      return null;
    let propValue = props[prop], theme = props.theme, themeMapping = getPath(theme, themeKey) || {};
    return handleBreakpoints(props, propValue, (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      return propValueFinal === value && typeof propValueFinal == "string" && (value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal)), cssProperty === !1 ? value : {
        [cssProperty]: value
      };
    });
  };
  return fn2.propTypes = {
    [prop]: responsivePropType_default
  }, fn2.filterProps = [prop], fn2;
}
var style_default = style;

// node_modules/@mui/system/esm/memoize.js
function memoize2(fn2) {
  let cache = {};
  return (arg) => (cache[arg] === void 0 && (cache[arg] = fn2(arg)), cache[arg]);
}

// node_modules/@mui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
}, directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, getCssProperties = memoize2((prop) => {
  if (prop.length > 2)
    if (aliases[prop])
      prop = aliases[prop];
    else
      return [prop];
  let [a, b] = prop.split(""), property = properties[a], direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
}), marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  let themeSpacing = (_getPath = getPath(theme, themeKey, !1)) != null ? _getPath : defaultValue;
  return typeof themeSpacing == "number" ? (abs2) => typeof abs2 == "string" ? abs2 : (typeof abs2 != "number" && console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs2}.`), themeSpacing * abs2) : Array.isArray(themeSpacing) ? (abs2) => typeof abs2 == "string" ? abs2 : (Number.isInteger(abs2) ? abs2 > themeSpacing.length - 1 && console.error([`MUI: The value provided (${abs2}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs2} > ${themeSpacing.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join(`
`)), themeSpacing[abs2]) : typeof themeSpacing == "function" ? themeSpacing : (console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
  if (typeof propValue == "string" || propValue == null)
    return propValue;
  let abs2 = Math.abs(propValue), transformed = transformer(abs2);
  return propValue >= 0 ? transformed : typeof transformed == "number" ? -transformed : `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => (acc[cssProperty] = getValue(transformer, propValue), acc), {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1)
    return null;
  let cssProperties = getCssProperties(prop), styleFromPropValue = getStyleFromPropValue(cssProperties, transformer), propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  let transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = marginKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = paddingKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = spacingKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
spacing.filterProps = spacingKeys;

// node_modules/@mui/system/esm/createTheme/createSpacing.js
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui)
    return spacingInput;
  let transform = createUnarySpacing({
    spacing: spacingInput
  }), spacing2 = (...argsInput) => (argsInput.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`), (argsInput.length === 0 ? [1] : argsInput).map((argument) => {
    let output = transform(argument);
    return typeof output == "number" ? `${output}px` : output;
  }).join(" "));
  return spacing2.mui = !0, spacing2;
}

// node_modules/@mui/system/esm/compose.js
function compose(...styles) {
  let handlers = styles.reduce((acc, style3) => (style3.filterProps.forEach((prop) => {
    acc[prop] = style3;
  }), acc), {}), fn2 = (props) => Object.keys(props).reduce((acc, prop) => handlers[prop] ? merge_default(acc, handlers[prop](props)) : acc, {});
  return fn2.propTypes = styles.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}), fn2.filterProps = styles.reduce((acc, style3) => acc.concat(style3.filterProps), []), fn2;
}
var compose_default = compose;

// node_modules/@mui/system/esm/borders.js
function borderTransform(value) {
  return typeof value != "number" ? value : `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style_default({
    prop,
    themeKey: "borders",
    transform
  });
}
var border = createBorderStyle("border", borderTransform), borderTop = createBorderStyle("borderTop", borderTransform), borderRight = createBorderStyle("borderRight", borderTransform), borderBottom = createBorderStyle("borderBottom", borderTransform), borderLeft = createBorderStyle("borderLeft", borderTransform), borderColor = createBorderStyle("borderColor"), borderTopColor = createBorderStyle("borderTopColor"), borderRightColor = createBorderStyle("borderRightColor"), borderBottomColor = createBorderStyle("borderBottomColor"), borderLeftColor = createBorderStyle("borderLeftColor"), outline = createBorderStyle("outline", borderTransform), outlineColor = createBorderStyle("outlineColor"), borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    let transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius"), styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {
  borderRadius: responsivePropType_default
};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// node_modules/@mui/system/esm/cssGrid.js
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "gap"), styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {
  gap: responsivePropType_default
};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap"), styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {
  columnGap: responsivePropType_default
};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap"), styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {
  rowGap: responsivePropType_default
};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
}), gridRow = style_default({
  prop: "gridRow"
}), gridAutoFlow = style_default({
  prop: "gridAutoFlow"
}), gridAutoColumns = style_default({
  prop: "gridAutoColumns"
}), gridAutoRows = style_default({
  prop: "gridAutoRows"
}), gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
}), gridTemplateRows = style_default({
  prop: "gridTemplateRows"
}), gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
}), gridArea = style_default({
  prop: "gridArea"
}), grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

// node_modules/@mui/system/esm/palette.js
function paletteTransform(value, userValue) {
  return userValue === "grey" ? userValue : value;
}
var color = style_default({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
}), bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
}), backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
}), palette = compose_default(color, bgcolor, backgroundColor);

// node_modules/@mui/system/esm/sizing.js
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform: sizingTransform
}), maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    let styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme2;
      let breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
      return breakpoint ? ((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px" ? {
        maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
      } : {
        maxWidth: breakpoint
      } : {
        maxWidth: sizingTransform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform: sizingTransform
}), height = style_default({
  prop: "height",
  transform: sizingTransform
}), maxHeight = style_default({
  prop: "maxHeight",
  transform: sizingTransform
}), minHeight = style_default({
  prop: "minHeight",
  transform: sizingTransform
}), sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
}), sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
}), boxSizing = style_default({
  prop: "boxSizing"
}), sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

// node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
var defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, defaultSxConfig_default = defaultSxConfig;

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  let allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []), union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn == "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    let props = {
      [prop]: val,
      theme
    }, options = config[prop];
    if (!options)
      return {
        [prop]: val
      };
    let {
      cssProperty = prop,
      themeKey,
      transform,
      style: style3
    } = options;
    if (val == null)
      return null;
    if (themeKey === "typography" && val === "inherit")
      return {
        [prop]: val
      };
    let themeMapping = getPath(theme, themeKey) || {};
    return style3 ? style3(props) : handleBreakpoints(props, val, (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      return propValueFinal === value && typeof propValueFinal == "string" && (value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal)), cssProperty === !1 ? value : {
        [cssProperty]: value
      };
    });
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    let {
      sx,
      theme = {}
    } = props || {};
    if (!sx)
      return null;
    let config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig_default;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput == "function")
        sxObject = sxInput(theme);
      else if (typeof sxInput != "object")
        return sxInput;
      if (!sxObject)
        return null;
      let emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints), breakpointsKeys = Object.keys(emptyBreakpoints), css2 = emptyBreakpoints;
      return Object.keys(sxObject).forEach((styleKey) => {
        let value = callIfFn(sxObject[styleKey], theme);
        if (value != null)
          if (typeof value == "object")
            if (config[styleKey])
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
            else {
              let breakpointsValues = handleBreakpoints({
                theme
              }, value, (x) => ({
                [styleKey]: x
              }));
              objectsHaveSameKeys(breakpointsValues, value) ? css2[styleKey] = styleFunctionSx2({
                sx: value,
                theme
              }) : css2 = merge_default(css2, breakpointsValues);
            }
          else
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
      }), removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// node_modules/@mui/system/esm/createTheme/applyStyles.js
function applyStyles(key, styles) {
  let theme = this;
  return theme.vars && typeof theme.getColorSchemeSelector == "function" ? {
    [theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)")]: styles
  } : theme.palette.mode === key ? styles : {};
}

// node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded2 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  let {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded2), breakpoints = createBreakpoints(breakpointsInput), spacing2 = createSpacing(spacingInput), muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  return muiTheme.applyStyles = applyStyles, muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme), muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other?.unstable_sxConfig), muiTheme.unstable_sx = function(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  }, muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
import * as React14 from "react";
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme2(defaultTheme2 = null) {
  let contextTheme = React14.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme2;

// node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme3(defaultTheme2 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme2);
}
var useTheme_default = useTheme3;

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/@mui/system/esm/createStyled.js
var _excluded3 = ["ownerState"], _excluded22 = ["variants"], _excluded32 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
var systemDefaultTheme2 = createTheme_default(), lowercaseFirstLetter = (string) => string && string.charAt(0).toLowerCase() + string.slice(1);
function resolveTheme({
  defaultTheme: defaultTheme2,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme2 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  return slot ? (props, styles) => styles[slot] : null;
}
function processStyleArg(callableStyle, _ref) {
  let {
    ownerState
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded3), resolvedStylesArg = typeof callableStyle == "function" ? callableStyle(_extends({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg))
    return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, _extends({
      ownerState
    }, props)));
  if (resolvedStylesArg && typeof resolvedStylesArg == "object" && Array.isArray(resolvedStylesArg.variants)) {
    let {
      variants = []
    } = resolvedStylesArg, result = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded22);
    return variants.forEach((variant) => {
      let isMatch = !0;
      typeof variant.props == "function" ? isMatch = variant.props(_extends({
        ownerState
      }, props)) : Object.keys(variant.props).forEach((key) => {
        ownerState?.[key] !== variant.props[key] && props[key] !== variant.props[key] && (isMatch = !1);
      }), isMatch && (Array.isArray(result) || (result = [result]), result.push(typeof variant.style == "function" ? variant.style(_extends({
        ownerState
      }, props)) : variant.style));
    }), result;
  }
  return resolvedStylesArg;
}
function createStyled3(input = {}) {
  let {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input, systemSx = (props) => styleFunctionSx_default(_extends({}, props, {
    theme: resolveTheme(_extends({}, props, {
      defaultTheme: defaultTheme2,
      themeId
    }))
  }));
  return systemSx.__mui_systemSx = !0, (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles) => styles.filter((style3) => !(style3 != null && style3.__mui_systemSx)));
    let {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded32), skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || !1
    ), skipSx = inputSkipSx || !1, label;
    componentName && (label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`);
    let shouldForwardPropOption = shouldForwardProp;
    componentSlot === "Root" || componentSlot === "root" ? shouldForwardPropOption = rootShouldForwardProp2 : componentSlot ? shouldForwardPropOption = slotShouldForwardProp : isStringTag(tag) && (shouldForwardPropOption = void 0);
    let defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options)), transformStyleArg = (stylesArg) => typeof stylesArg == "function" && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg) ? (props) => processStyleArg(stylesArg, _extends({}, props, {
      theme: resolveTheme({
        theme: props.theme,
        defaultTheme: defaultTheme2,
        themeId
      })
    })) : stylesArg, muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg), expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      componentName && overridesResolver && expressionsWithDefaultTheme.push((props) => {
        let theme = resolveTheme(_extends({}, props, {
          defaultTheme: defaultTheme2,
          themeId
        }));
        if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides)
          return null;
        let styleOverrides = theme.components[componentName].styleOverrides, resolvedStyleOverrides = {};
        return Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
          resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends({}, props, {
            theme
          }));
        }), overridesResolver(props, resolvedStyleOverrides);
      }), componentName && !skipVariantsResolver && expressionsWithDefaultTheme.push((props) => {
        var _theme$components;
        let theme = resolveTheme(_extends({}, props, {
          defaultTheme: defaultTheme2,
          themeId
        })), themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
        return processStyleArg({
          variants: themeVariants
        }, _extends({}, props, {
          theme
        }));
      }), skipSx || expressionsWithDefaultTheme.push(systemSx);
      let numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        let placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders], transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      let Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      {
        let displayName;
        componentName && (displayName = `${componentName}${capitalize(componentSlot || "")}`), displayName === void 0 && (displayName = `Styled(${getDisplayName(tag)})`), Component.displayName = displayName;
      }
      return tag.muiName && (Component.muiName = tag.muiName), Component;
    };
    return defaultStyledResolver.withConfig && (muiStyledResolver.withConfig = defaultStyledResolver.withConfig), muiStyledResolver;
  };
}

// node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function getThemeProps(params) {
  let {
    theme,
    name,
    props
  } = params;
  return !theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps ? props : resolveProps(theme.components[name].defaultProps, props);
}

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme2,
  themeId
}) {
  let theme = useTheme_default(defaultTheme2);
  return themeId && (theme = theme[themeId] || theme), getThemeProps({
    theme,
    name,
    props
  });
}

// node_modules/@mui/system/esm/colorManipulator.js
function clampWrapper(value, min2 = 0, max2 = 1) {
  return (value < min2 || value > max2) && console.error(`MUI: The value provided ${value} is out of range [${min2}, ${max2}].`), clamp_default(value, min2, max2);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  let re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g"), colors = color2.match(re);
  return colors && colors[0].length === 1 && (colors = colors.map((n) => n + n)), colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type)
    return color2;
  if (color2.charAt(0) === "#")
    return decomposeColor(hexToRgb(color2));
  let marker = color2.indexOf("("), type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1)
    throw new Error(`MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
  let values3 = color2.substring(marker + 1, color2.length - 1), colorSpace;
  if (type === "color") {
    if (values3 = values3.split(" "), colorSpace = values3.shift(), values3.length === 4 && values3[3].charAt(0) === "/" && (values3[3] = values3[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1)
      throw new Error(`MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`);
  } else
    values3 = values3.split(",");
  return values3 = values3.map((value) => parseFloat(value)), {
    type,
    values: values3,
    colorSpace
  };
}
function recomposeColor(color2) {
  let {
    type,
    colorSpace
  } = color2, {
    values: values3
  } = color2;
  return type.indexOf("rgb") !== -1 ? values3 = values3.map((n, i) => i < 3 ? parseInt(n, 10) : n) : type.indexOf("hsl") !== -1 && (values3[1] = `${values3[1]}%`, values3[2] = `${values3[2]}%`), type.indexOf("color") !== -1 ? values3 = `${colorSpace} ${values3.join(" ")}` : values3 = `${values3.join(", ")}`, `${type}(${values3})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  let {
    values: values3
  } = color2, h = values3[0], s = values3[1] / 100, l = values3[2] / 100, a = s * Math.min(l, 1 - l), f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1), type = "rgb", rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return color2.type === "hsla" && (type += "a", rgb.push(values3[3])), recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  return rgb = rgb.map((val) => (color2.type !== "color" && (val /= 255), val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4)), Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  let lumA = getLuminance(foreground), lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  return color2 = decomposeColor(color2), value = clampWrapper(value), (color2.type === "rgb" || color2.type === "hsl") && (color2.type += "a"), color2.type === "color" ? color2.values[3] = `/${value}` : color2.values[3] = value, recomposeColor(color2);
}
function darken(color2, coefficient) {
  if (color2 = decomposeColor(color2), coefficient = clampWrapper(coefficient), color2.type.indexOf("hsl") !== -1)
    color2.values[2] *= 1 - coefficient;
  else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] *= 1 - coefficient;
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  if (color2 = decomposeColor(color2), coefficient = clampWrapper(coefficient), color2.type.indexOf("hsl") !== -1)
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  else if (color2.type.indexOf("rgb") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] += (255 - color2.values[i]) * coefficient;
  else if (color2.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] += (1 - color2.values[i]) * coefficient;
  return recomposeColor(color2);
}

// node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// node_modules/@mui/material/styles/createPalette.js
var _excluded4 = ["mode", "contrastThreshold", "tonalOffset"], light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common_default.white,
    default: common_default.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  let tonalOffsetLight = tonalOffset.light || tonalOffset, tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  intent[direction] || (intent.hasOwnProperty(shade) ? intent[direction] = intent[shade] : direction === "light" ? intent.light = lighten(intent.main, tonalOffsetLight) : direction === "dark" && (intent.dark = darken(intent.main, tonalOffsetDark)));
}
function getDefaultPrimary(mode = "light") {
  return mode === "dark" ? {
    main: blue_default[200],
    light: blue_default[50],
    dark: blue_default[400]
  } : {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  return mode === "dark" ? {
    main: purple_default[200],
    light: purple_default[50],
    dark: purple_default[400]
  } : {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  return mode === "dark" ? {
    main: red_default[500],
    light: red_default[300],
    dark: red_default[700]
  } : {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  return mode === "dark" ? {
    main: lightBlue_default[400],
    light: lightBlue_default[300],
    dark: lightBlue_default[700]
  } : {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  return mode === "dark" ? {
    main: green_default[400],
    light: green_default[300],
    dark: green_default[700]
  } : {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  return mode === "dark" ? {
    main: orange_default[400],
    light: orange_default[300],
    dark: orange_default[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette2) {
  let {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded4), primary = palette2.primary || getDefaultPrimary(mode), secondary = palette2.secondary || getDefaultSecondary(mode), error = palette2.error || getDefaultError(mode), info = palette2.info || getDefaultInfo(mode), success = palette2.success || getDefaultSuccess(mode), warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    let contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    {
      let contrast = getContrastRatio(background, contrastText);
      contrast < 3 && console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return contrastText;
  }
  let augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    if (color2 = _extends({}, color2), !color2.main && color2[mainShade] && (color2.main = color2[mainShade]), !color2.hasOwnProperty("main"))
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.`);
    if (typeof color2.main != "string")
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
    return addLightOrDark(color2, "light", lightShade, tonalOffset), addLightOrDark(color2, "dark", darkShade, tonalOffset), color2.contrastText || (color2.contrastText = getContrastText(color2.main)), color2;
  }, modes = {
    dark,
    light
  };
  return modes[mode] || console.error(`MUI: The palette mode \`${mode}\` is not supported.`), deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common_default),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
}

// node_modules/@mui/material/styles/createTypography.js
var _excluded5 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
}, defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography) {
  let _ref = typeof typography == "function" ? typography(palette2) : typography, {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded5);
  typeof fontSize != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof htmlFontSize != "number" && console.error("MUI: `htmlFontSize` is required to be a number.");
  let coef = fontSize / 14, pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`), buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants), variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: !1
    // No need to clone deep
  });
}

// node_modules/@mui/material/styles/shadows.js
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${0.2})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${0.14})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${0.12})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], shadows_default = shadows;

// node_modules/@mui/material/styles/createTransitions.js
var _excluded6 = ["duration", "easing", "delay"], easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2)
    return 0;
  let constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  let mergedEasing = _extends({}, easing, inputTransitions.easing), mergedDuration = _extends({}, duration, inputTransitions.duration);
  return _extends({
    getAutoHeightDuration,
    create: (props = ["all"], options = {}) => {
      let {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded6);
      {
        let isString = (value) => typeof value == "string", isNumber = (value) => !isNaN(parseFloat(value));
        !isString(props) && !Array.isArray(props) && console.error('MUI: Argument "props" must be a string or Array.'), !isNumber(durationOption) && !isString(durationOption) && console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`), isString(easingOption) || console.error('MUI: Argument "easing" must be a string.'), !isNumber(delay) && !isString(delay) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof options != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(other).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption == "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay == "string" ? delay : formatMs(delay)}`).join(",");
    }
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// node_modules/@mui/material/styles/zIndex.js
var zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zIndex_default = zIndex;

// node_modules/@mui/material/styles/createTheme.js
var _excluded7 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  let {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded7);
  if (options.vars)
    throw new Error("MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.");
  let palette2 = createPalette(paletteInput), systemTheme = createTheme_default(options), muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette2,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows_default.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other), muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  {
    let stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], traverse = (node2, component) => {
      let key;
      for (key in node2) {
        let child = node2[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          {
            let stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node2, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          node2[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      let styleOverrides = muiTheme.components[component].styleOverrides;
      styleOverrides && component.indexOf("Mui") === 0 && traverse(styleOverrides, component);
    });
  }
  return muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other?.unstable_sxConfig), muiTheme.unstable_sx = function(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  }, muiTheme;
}
var createTheme_default2 = createTheme2;

// node_modules/@mui/material/styles/useTheme.js
import * as React15 from "react";

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = createTheme_default2(), defaultTheme_default = defaultTheme;

// node_modules/@mui/material/styles/useTheme.js
function useTheme4() {
  let theme = useTheme_default(defaultTheme_default);
  return React15.useDebugValue(theme), theme[identifier_default] || theme;
}

// node_modules/@mui/material/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var styled2 = createStyled3({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
}), styled_default = styled2;

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  return elevation < 1 ? alphaValue = 5.11916 * elevation ** 2 : alphaValue = 4.5 * Math.log(elevation + 1) + 2, (alphaValue / 100).toFixed(2);
}, getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/utils/createSvgIcon.js
import * as React17 from "react";

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_prop_types4 = __toESM(require_prop_types());
import * as React16 from "react";

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded8 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], useUtilityClasses = (ownerState) => {
  let {
    color: color2,
    fontSize,
    classes
  } = ownerState, slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
}, SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
}), SvgIcon = /* @__PURE__ */ React16.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiSvgIcon"
  }), {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = !1,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8), hasSvgAsChild = /* @__PURE__ */ React16.isValidElement(children) && children.type === "svg", ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  }), more = {};
  inheritViewBox || (more.viewBox = viewBox);
  let classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ _jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : !0,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ _jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types4.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types4.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types4.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types4.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types4.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types4.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types4.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types4.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types4.default.string
};
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
import { jsx as _jsx2 } from "react/jsx-runtime";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ _jsx2(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  return Component.displayName = `${displayName}Icon`, Component.muiName = SvgIcon_default.muiName, /* @__PURE__ */ React17.memo(/* @__PURE__ */ React17.forwardRef(Component));
}

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default = unsupportedProp;

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useIsFocusVisible.js
var useIsFocusVisible_default = useIsFocusVisible;

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}

// node_modules/react-transition-group/esm/TransitionGroupContext.js
import React18 from "react";
var TransitionGroupContext_default = React18.createContext(null);

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types5 = __toESM(require_prop_types());
import React19 from "react";

// node_modules/react-transition-group/esm/utils/ChildMapping.js
import { Children, cloneElement, isValidElement as isValidElement2 } from "react";
function getChildMapping(children, mapFn) {
  var mapper = function(child) {
    return mapFn && isValidElement2(child) ? mapFn(child) : child;
  }, result = /* @__PURE__ */ Object.create(null);
  return children && Children.map(children, function(c) {
    return c;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  }), result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {}, next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null), pendingKeys = [];
  for (var prevKey in prev2)
    prevKey in next2 ? pendingKeys.length && (nextKeysPending[prevKey] = pendingKeys, pendingKeys = []) : pendingKeys.push(prevKey);
  var i, childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey])
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++)
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: !0,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children), children = mergeChildMappings(prevChildMapping, nextChildMapping);
  return Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (isValidElement2(child)) {
      var hasPrev = key in prevChildMapping, hasNext = key in nextChildMapping, prevChild = prevChildMapping[key], isLeaving = isValidElement2(prevChild) && !prevChild.props.in;
      hasNext && (!hasPrev || isLeaving) ? children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: !0,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      }) : !hasNext && hasPrev && !isLeaving ? children[key] = cloneElement(child, {
        in: !1
      }) : hasNext && hasPrev && isValidElement2(prevChild) && (children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      }));
    }
  }), children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values2 = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
}, defaultProps = {
  component: "div",
  childFactory: function(child) {
    return child;
  }
}, TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    return _this.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited,
      firstRender: !0
    }, _this;
  }
  var _proto = TransitionGroup2.prototype;
  return _proto.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, _proto.componentWillUnmount = function() {
    this.mounted = !1;
  }, TransitionGroup2.getDerivedStateFromProps = function(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: !1
    };
  }, _proto.handleExited = function(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    child.key in currentChildMapping || (child.props.onExited && child.props.onExited(node2), this.mounted && this.setState(function(state) {
      var children = _extends({}, state.children);
      return delete children[child.key], {
        children
      };
    }));
  }, _proto.render = function() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]), contextValue = this.state.contextValue, children = values2(this.state.children).map(childFactory2);
    return delete props.appear, delete props.enter, delete props.exit, Component === null ? /* @__PURE__ */ React19.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, children) : /* @__PURE__ */ React19.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React19.createElement(Component, props, children));
  }, TransitionGroup2;
}(React19.Component);
TransitionGroup.propTypes = {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types5.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types5.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types5.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types5.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types5.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types5.default.func
};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@mui/material/Paper/Paper.js
var import_prop_types6 = __toESM(require_prop_types());
import * as React20 from "react";

// node_modules/@mui/material/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/Paper/Paper.js
import { jsx as _jsx3 } from "react/jsx-runtime";
var _excluded9 = ["className", "component", "elevation", "square", "variant"], useUtilityClasses2 = (ownerState) => {
  let {
    square,
    elevation,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
}, PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
}), Paper = /* @__PURE__ */ React20.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiPaper"
  }), {
    className,
    component = "div",
    elevation = 1,
    square = !1,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9), ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  }), classes = useUtilityClasses2(ownerState);
  return useTheme4().shadows[elevation] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join(`
`)), /* @__PURE__ */ _jsx3(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other));
});
Paper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType_default, (props) => {
    let {
      elevation,
      variant
    } = props;
    return elevation > 0 && variant === "outlined" ? new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: import_prop_types6.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["elevation", "outlined"]), import_prop_types6.default.string])
};
var Paper_default = Paper;

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element == "string";
}

// node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  return elementType === void 0 || isHostComponent(elementType) ? otherProps : _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
import * as React21 from "react";
import { jsx as _jsx4 } from "react/jsx-runtime";
var defaultContextValue = {
  disableDefaultClasses: !1
}, ClassNameConfiguratorContext = /* @__PURE__ */ React21.createContext(defaultContextValue);
function useClassNamesOverride(generateUtilityClass3) {
  let {
    disableDefaultClasses
  } = React21.useContext(ClassNameConfiguratorContext);
  return (slot) => disableDefaultClasses ? "" : generateUtilityClass3(slot);
}

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0)
    return {};
  let result = {};
  return Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] == "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  }), result;
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  return typeof componentProps == "function" ? componentProps(ownerState, slotState) : componentProps;
}

// node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0)
    return {};
  let result = {};
  return Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] == "function")).forEach((prop) => {
    result[prop] = object[prop];
  }), result;
}

// node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  let {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    let joinedClasses2 = clsx_default(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className), mergedStyle2 = _extends({}, additionalProps?.style, externalForwardedProps?.style, externalSlotProps?.style), props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    return joinedClasses2.length > 0 && (props2.className = joinedClasses2), Object.keys(mergedStyle2).length > 0 && (props2.style = mergedStyle2), {
      props: props2,
      internalRef: void 0
    };
  }
  let eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps)), componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps), otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps), internalSlotProps = getSlotProps(eventHandlers), joinedClasses = clsx_default(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className), mergedStyle = _extends({}, internalSlotProps?.style, additionalProps?.style, externalForwardedProps?.style, externalSlotProps?.style), props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  return joinedClasses.length > 0 && (props.className = joinedClasses), Object.keys(mergedStyle).length > 0 && (props.style = mergedStyle), {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/base/utils/useSlotProps.js
var _excluded10 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  let {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = !1
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded10), resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState), {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  })), ref = useForkRef(internalRef, resolvedComponentsProps?.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  return appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
}

// node_modules/@mui/material/ButtonBase/ButtonBase.js
var import_prop_types9 = __toESM(require_prop_types());
import * as React24 from "react";

// node_modules/@mui/material/ButtonBase/TouchRipple.js
var import_prop_types8 = __toESM(require_prop_types());
import * as React23 from "react";

// node_modules/@mui/material/ButtonBase/Ripple.js
var import_prop_types7 = __toESM(require_prop_types());
import * as React22 from "react";
import { jsx as _jsx5 } from "react/jsx-runtime";
function Ripple(props) {
  let {
    className,
    classes,
    pulsate = !1,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props, [leaving, setLeaving] = React22.useState(!1), rippleClassName = clsx_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate), rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  }, childClassName = clsx_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  return !inProp && !leaving && setLeaving(!0), React22.useEffect(() => {
    if (!inProp && onExited != null) {
      let timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [onExited, inProp, timeout]), /* @__PURE__ */ _jsx5("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ _jsx5("span", {
      className: childClassName
    })
  });
}
Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types7.default.object.isRequired,
  className: import_prop_types7.default.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: import_prop_types7.default.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: import_prop_types7.default.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: import_prop_types7.default.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: import_prop_types7.default.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: import_prop_types7.default.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: import_prop_types7.default.number,
  /**
   * exit delay
   */
  timeout: import_prop_types7.default.number.isRequired
};
var Ripple_default = Ripple;

// node_modules/@mui/material/ButtonBase/touchRippleClasses.js
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx6 } from "react/jsx-runtime";
var _excluded11 = ["center", "classes", "className"], _ = (t) => t, _t, _t2, _t3, _t4, DURATION = 550, DELAY_RIPPLE = 80, enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), TouchRippleRoot = styled_default("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), TouchRippleRipple = styled_default(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut), TouchRipple = /* @__PURE__ */ React23.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiTouchRipple"
  }), {
    center: centerProp = !1,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11), [ripples, setRipples] = React23.useState([]), nextKey = React23.useRef(0), rippleCallback = React23.useRef(null);
  React23.useEffect(() => {
    rippleCallback.current && (rippleCallback.current(), rippleCallback.current = null);
  }, [ripples]);
  let ignoringMouseDown = React23.useRef(!1), startTimer = useTimeout(), startTimerCommit = React23.useRef(null), container = React23.useRef(null), startCommit = React23.useCallback((params) => {
    let {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ _jsx6(TouchRippleRipple, {
      classes: {
        ripple: clsx_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]), nextKey.current += 1, rippleCallback.current = cb;
  }, [classes]), start2 = React23.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    let {
      pulsate: pulsate2 = !1,
      center = centerProp || options.pulsate,
      fakeElement = !1
      // For test purposes
    } = options;
    if (event?.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = !1;
      return;
    }
    event?.type === "touchstart" && (ignoringMouseDown.current = !0);
    let element = fakeElement ? null : container.current, rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }, rippleX, rippleY, rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches)
      rippleX = Math.round(rect.width / 2), rippleY = Math.round(rect.height / 2);
    else {
      let {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left), rippleY = Math.round(clientY - rect.top);
    }
    if (center)
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3), rippleSize % 2 === 0 && (rippleSize += 1);
    else {
      let sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2, sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    event != null && event.touches ? startTimerCommit.current === null && (startTimerCommit.current = () => {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }, startTimer.start(DELAY_RIPPLE, () => {
      startTimerCommit.current && (startTimerCommit.current(), startTimerCommit.current = null);
    })) : startCommit({
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    });
  }, [centerProp, startCommit, startTimer]), pulsate = React23.useCallback(() => {
    start2({}, {
      pulsate: !0
    });
  }, [start2]), stop = React23.useCallback((event, cb) => {
    if (startTimer.clear(), event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current(), startTimerCommit.current = null, startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null, setRipples((oldRipples) => oldRipples.length > 0 ? oldRipples.slice(1) : oldRipples), rippleCallback.current = cb;
  }, [startTimer]);
  return React23.useImperativeHandle(ref, () => ({
    pulsate,
    start: start2,
    stop
  }), [pulsate, start2, stop]), /* @__PURE__ */ _jsx6(TouchRippleRoot, _extends({
    className: clsx_default(touchRippleClasses_default.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ _jsx6(TransitionGroup_default, {
      component: null,
      exit: !0,
      children: ripples
    })
  }));
});
TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: import_prop_types8.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string
};
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]), buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded12 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], useUtilityClasses3 = (ownerState) => {
  let {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState, composedClasses = composeClasses({
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  }, getButtonBaseUtilityClass, classes);
  return focusVisible && focusVisibleClassName && (composedClasses.root += ` ${focusVisibleClassName}`), composedClasses;
}, ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ButtonBase = /* @__PURE__ */ React24.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiButtonBase"
  }), {
    action,
    centerRipple = !1,
    children,
    className,
    component = "button",
    disabled = !1,
    disableRipple = !1,
    disableTouchRipple = !1,
    focusRipple = !1,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12), buttonRef = React24.useRef(null), rippleRef = React24.useRef(null), handleRippleRef = useForkRef_default(rippleRef, touchRippleRef), {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default(), [focusVisible, setFocusVisible] = React24.useState(!1);
  disabled && focusVisible && setFocusVisible(!1), React24.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(!0), buttonRef.current.focus();
    }
  }), []);
  let [mountedState, setMountedState] = React24.useState(!1);
  React24.useEffect(() => {
    setMountedState(!0);
  }, []);
  let enableTouchRipple = mountedState && !disableRipple && !disabled;
  React24.useEffect(() => {
    focusVisible && focusRipple && !disableRipple && mountedState && rippleRef.current.pulsate();
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback_default2((event) => (eventCallback && eventCallback(event), !skipRippleAction && rippleRef.current && rippleRef.current[rippleAction](event), !0));
  }
  let handleMouseDown = useRippleHandler("start", onMouseDown), handleContextMenu = useRippleHandler("stop", onContextMenu), handleDragLeave = useRippleHandler("stop", onDragLeave), handleMouseUp = useRippleHandler("stop", onMouseUp), handleMouseLeave = useRippleHandler("stop", (event) => {
    focusVisible && event.preventDefault(), onMouseLeave && onMouseLeave(event);
  }), handleTouchStart = useRippleHandler("start", onTouchStart), handleTouchEnd = useRippleHandler("stop", onTouchEnd), handleTouchMove = useRippleHandler("stop", onTouchMove), handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event), isFocusVisibleRef.current === !1 && setFocusVisible(!1), onBlur && onBlur(event);
  }, !1), handleFocus = useEventCallback_default2((event) => {
    buttonRef.current || (buttonRef.current = event.currentTarget), handleFocusVisible(event), isFocusVisibleRef.current === !0 && (setFocusVisible(!0), onFocusVisible && onFocusVisible(event)), onFocus && onFocus(event);
  }), isNonNativeButton = () => {
    let button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  }, keydownRef = React24.useRef(!1), handleKeyDown2 = useEventCallback_default2((event) => {
    focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " " && (keydownRef.current = !0, rippleRef.current.stop(event, () => {
      rippleRef.current.start(event);
    })), event.target === event.currentTarget && isNonNativeButton() && event.key === " " && event.preventDefault(), onKeyDown && onKeyDown(event), event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled && (event.preventDefault(), onClick && onClick(event));
  }), handleKeyUp = useEventCallback_default2((event) => {
    focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented && (keydownRef.current = !1, rippleRef.current.stop(event, () => {
      rippleRef.current.pulsate(event);
    })), onKeyUp && onKeyUp(event), onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented && onClick(event);
  }), ComponentProp = component;
  ComponentProp === "button" && (other.href || other.to) && (ComponentProp = LinkComponent);
  let buttonProps = {};
  ComponentProp === "button" ? (buttonProps.type = type === void 0 ? "button" : type, buttonProps.disabled = disabled) : (!other.href && !other.to && (buttonProps.role = "button"), disabled && (buttonProps["aria-disabled"] = disabled));
  let handleRef = useForkRef_default(ref, focusVisibleRef, buttonRef);
  React24.useEffect(() => {
    enableTouchRipple && !rippleRef.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [enableTouchRipple]);
  let ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  }), classes = useUtilityClasses3(ownerState);
  return /* @__PURE__ */ _jsxs2(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx_default(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ _jsx7(TouchRipple_default, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
ButtonBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType_default,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types9.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types9.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types9.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types9.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types9.default.string,
  /**
   * @ignore
   */
  href: import_prop_types9.default.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: import_prop_types9.default.elementType,
  /**
   * @ignore
   */
  onBlur: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onContextMenu: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onDragLeave: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types9.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onMouseUp: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchEnd: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchMove: import_prop_types9.default.func,
  /**
   * @ignore
   */
  onTouchStart: import_prop_types9.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types9.default.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types9.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.shape({
      pulsate: import_prop_types9.default.func.isRequired,
      start: import_prop_types9.default.func.isRequired,
      stop: import_prop_types9.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["button", "reset", "submit"]), import_prop_types9.default.string])
};
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/IconButton/IconButton.js
var import_prop_types10 = __toESM(require_prop_types());
import * as React25 from "react";

// node_modules/@mui/material/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/IconButton/IconButton.js
import { jsx as _jsx8 } from "react/jsx-runtime";
var _excluded13 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], useUtilityClasses4 = (ownerState) => {
  let {
    classes,
    disabled,
    color: color2,
    edge,
    size
  } = ownerState, slots = {
    root: ["root", disabled && "disabled", color2 !== "default" && `color${capitalize_default(color2)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
}, IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize_default(ownerState.edge)}`], styles[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme,
  ownerState
}) => {
  var _palette;
  let palette2 = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: palette2?.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends({}, palette2 && {
      backgroundColor: theme.vars ? `rgba(${palette2.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(palette2.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses_default.disabled}`]: {
      backgroundColor: "transparent",
      color: (theme.vars || theme).palette.action.disabled
    }
  });
}), IconButton = /* @__PURE__ */ React25.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiIconButton"
  }), {
    edge = !1,
    children,
    className,
    color: color2 = "default",
    disabled = !1,
    disableFocusRipple = !1,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13), ownerState = _extends({}, props, {
    edge,
    color: color2,
    disabled,
    disableFocusRipple,
    size
  }), classes = useUtilityClasses4(ownerState);
  return /* @__PURE__ */ _jsx8(IconButtonRoot, _extends({
    className: clsx_default(classes.root, className),
    centerRipple: !0,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(import_prop_types10.default.node, (props) => React25.Children.toArray(props.children).some((child) => /* @__PURE__ */ React25.isValidElement(child) && child.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types10.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types10.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types10.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types10.default.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["small", "medium", "large"]), import_prop_types10.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object])
};
var IconButton_default = IconButton;

// node_modules/@mui/material/internal/svg-icons/Close.js
import "react";
import { jsx as _jsx9 } from "react/jsx-runtime";
var Close_default = createSvgIcon(/* @__PURE__ */ _jsx9("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/material/Autocomplete/Autocomplete.js
var import_prop_types16 = __toESM(require_prop_types());
import * as React35 from "react";

// node_modules/@mui/base/generateUtilityClass/index.js
var GLOBAL_CLASS_PREFIX = "base";
function buildStateClass(state) {
  return `${GLOBAL_CLASS_PREFIX}--${state}`;
}
function buildSlotClass(componentName, slot) {
  return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
}
function generateUtilityClass2(componentName, slot) {
  let globalStateClass = globalStateClasses[slot];
  return globalStateClass ? buildStateClass(globalStateClass) : buildSlotClass(componentName, slot);
}

// node_modules/@mui/base/generateUtilityClasses/index.js
function generateUtilityClasses2(componentName, slots) {
  let result = {};
  return slots.forEach((slot) => {
    result[slot] = generateUtilityClass2(componentName, slot);
  }), result;
}

// node_modules/@mui/base/Portal/Portal.js
var import_prop_types11 = __toESM(require_prop_types());
import * as React27 from "react";
import * as ReactDOM from "react-dom";
import { jsx as _jsx10 } from "react/jsx-runtime";
function getContainer(container) {
  return typeof container == "function" ? container() : container;
}
var Portal = /* @__PURE__ */ React27.forwardRef(function(props, forwardedRef) {
  let {
    children,
    container,
    disablePortal = !1
  } = props, [mountNode, setMountNode] = React27.useState(null), handleRef = useForkRef(/* @__PURE__ */ React27.isValidElement(children) ? children.ref : null, forwardedRef);
  return useEnhancedEffect_default(() => {
    disablePortal || setMountNode(getContainer(container) || document.body);
  }, [container, disablePortal]), useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal)
      return setRef(forwardedRef, mountNode), () => {
        setRef(forwardedRef, null);
      };
  }, [forwardedRef, mountNode, disablePortal]), disablePortal ? /* @__PURE__ */ React27.isValidElement(children) ? /* @__PURE__ */ React27.cloneElement(children, {
    ref: handleRef
  }) : /* @__PURE__ */ _jsx10(React27.Fragment, {
    children
  }) : /* @__PURE__ */ _jsx10(React27.Fragment, {
    children: mountNode && /* @__PURE__ */ ReactDOM.createPortal(children, mountNode)
  });
});
Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types11.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types11.default.bool
};
Portal.propTypes = exactProp(Portal.propTypes);

// node_modules/@mui/base/Popper/Popper.js
import * as React28 from "react";

// node_modules/@popperjs/core/lib/enums.js
var top = "top", bottom = "bottom", right = "right", left = "left", auto = "auto", basePlacements = [top, bottom, right, left], start = "start", end = "end", clippingParents = "clippingParents", viewport = "viewport", popper = "popper", reference = "reference", variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []), placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []), beforeRead = "beforeRead", read = "read", afterRead = "afterRead", beforeMain = "beforeMain", main = "main", afterMain = "afterMain", beforeWrite = "beforeWrite", write = "write", afterWrite = "afterWrite", modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node2) {
  if (node2 == null)
    return window;
  if (node2.toString() !== "[object Window]") {
    var ownerDocument2 = node2.ownerDocument;
    return ownerDocument2 && ownerDocument2.defaultView || window;
  }
  return node2;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot > "u")
    return !1;
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles2(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style3 = state.styles[name] || {}, attributes = state.attributes[name] || {}, element = state.elements[name];
    !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style3), Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      value === !1 ? element.removeAttribute(name2) : element.setAttribute(name2, value === !0 ? "" : value);
    }));
  });
}
function effect(_ref2) {
  var state = _ref2.state, initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(state.elements.popper.style, initialStyles.popper), state.styles = initialStyles, state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow), function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name], attributes = state.attributes[name] || {}, styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]), style3 = styleProperties.reduce(function(style4, property) {
        return style4[property] = "", style4;
      }, {});
      !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style3), Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      }));
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: applyStyles2,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max, min = Math.min, round2 = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  return uaData != null && uaData.brands && Array.isArray(uaData.brands) ? uaData.brands.map(function(item) {
    return item.brand + "/" + item.version;
  }).join(" ") : navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = !1), isFixedStrategy === void 0 && (isFixedStrategy = !1);
  var clientRect = element.getBoundingClientRect(), scaleX = 1, scaleY = 1;
  includeScale && isHTMLElement(element) && (scaleX = element.offsetWidth > 0 && round2(clientRect.width) / element.offsetWidth || 1, scaleY = element.offsetHeight > 0 && round2(clientRect.height) / element.offsetHeight || 1);
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport, addVisualOffsets = !isLayoutViewport() && isFixedStrategy, x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX, y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY, width2 = clientRect.width / scaleX, height2 = clientRect.height / scaleY;
  return {
    width: width2,
    height: height2,
    top: y,
    right: x + width2,
    bottom: y + height2,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element), width2 = element.offsetWidth, height2 = element.offsetHeight;
  return Math.abs(clientRect.width - width2) <= 1 && (width2 = clientRect.width), Math.abs(clientRect.height - height2) <= 1 && (height2 = clientRect.height), {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width2,
    height: height2
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child))
    return !0;
  if (rootNode && isShadowRoot(rootNode)) {
    var next2 = child;
    do {
      if (next2 && parent.isSameNode(next2))
        return !0;
      next2 = next2.parentNode || next2.host;
    } while (next2);
  }
  return !1;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  return getNodeName(element) === "html" ? element : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed" ? null : element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString()), isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed")
      return null;
  }
  var currentNode = getParentNode(element);
  for (isShadowRoot(currentNode) && (currentNode = currentNode.host); isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0; ) {
    var css2 = getComputedStyle(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none")
      return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (var window2 = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static"; )
    offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static") ? window2 : offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    return hashMap[key] = value, hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function(padding2, state) {
  return padding2 = typeof padding2 == "function" ? padding2(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding2, mergePaddingObject(typeof padding2 != "number" ? padding2 : expandToHashMap(padding2, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$, state = _ref.state, name = _ref.name, options = _ref.options, arrowElement = state.elements.arrow, popperOffsets2 = state.modifiersData.popperOffsets, basePlacement = getBasePlacement(state.placement), axis = getMainAxisFromPlacement(basePlacement), isVertical = [left, right].indexOf(basePlacement) >= 0, len = isVertical ? "height" : "width";
  if (!(!arrowElement || !popperOffsets2)) {
    var paddingObject = toPaddingObject(options.padding, state), arrowRect = getLayoutRect(arrowElement), minProp = axis === "y" ? top : left, maxProp = axis === "y" ? bottom : right, endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len], startDiff = popperOffsets2[axis] - state.rects.reference[axis], arrowOffsetParent = getOffsetParent(arrowElement), clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0, centerToReference = endDiff / 2 - startDiff / 2, min2 = paddingObject[minProp], max2 = clientSize - arrowRect[len] - paddingObject[maxProp], center = clientSize / 2 - arrowRect[len] / 2 + centerToReference, offset2 = within(min2, center, max2), axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options, _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  arrowElement != null && (typeof arrowElement == "string" && (arrowElement = state.elements.popper.querySelector(arrowElement), !arrowElement) || contains(state.elements.popper, arrowElement) && (state.elements.arrow = arrowElement));
}
var arrow_default = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y, dpr = win.devicePixelRatio || 1;
  return {
    x: round2(x * dpr) / dpr || 0,
    y: round2(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2, popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed, _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y, _ref3 = typeof roundOffsets == "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x, y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x"), hasY = offsets.hasOwnProperty("y"), sideX = left, sideY = top, win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2), heightProp = "clientHeight", widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2) && (offsetParent = getDocumentElement(popper2), getComputedStyle(offsetParent).position !== "static" && position2 === "absolute" && (heightProp = "scrollHeight", widthProp = "scrollWidth")), offsetParent = offsetParent, placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height, y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width, x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides), _ref4 = roundOffsets === !0 ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  if (x = _ref4.x, y = _ref4.y, gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options, _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? !0 : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? !0 : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? !0 : _options$roundOffsets, commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  state.modifiersData.popperOffsets != null && (state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
    offsets: state.modifiersData.popperOffsets,
    position: state.options.strategy,
    adaptive,
    roundOffsets
  })))), state.modifiersData.arrow != null && (state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
    offsets: state.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets
  })))), state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: !0
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? !0 : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? !0 : _options$resize, window2 = getWindow(state.elements.popper), scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  return scroll && scrollParents.forEach(function(scrollParent) {
    scrollParent.addEventListener("scroll", instance.update, passive);
  }), resize && window2.addEventListener("resize", instance.update, passive), function() {
    scroll && scrollParents.forEach(function(scrollParent) {
      scrollParent.removeEventListener("scroll", instance.update, passive);
    }), resize && window2.removeEventListener("resize", instance.update, passive);
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash3 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash3[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node2) {
  var win = getWindow(node2), scrollLeft = win.pageXOffset, scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element), html = getDocumentElement(element), visualViewport = win.visualViewport, width2 = html.clientWidth, height2 = html.clientHeight, x = 0, y = 0;
  if (visualViewport) {
    width2 = visualViewport.width, height2 = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    (layoutViewport || !layoutViewport && strategy === "fixed") && (x = visualViewport.offsetLeft, y = visualViewport.offsetTop);
  }
  return {
    width: width2,
    height: height2,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen, html = getDocumentElement(element), winScroll = getWindowScroll(element), body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body, width2 = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0), height2 = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0), x = -winScroll.scrollLeft + getWindowScrollBarX(element), y = -winScroll.scrollTop;
  return getComputedStyle(body || html).direction === "rtl" && (x += max(html.clientWidth, body ? body.clientWidth : 0) - width2), {
    width: width2,
    height: height2,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node2) {
  return ["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0 ? node2.ownerDocument.body : isHTMLElement(node2) && isScrollParent(node2) ? node2 : getScrollParent(getParentNode(node2));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  list === void 0 && (list = []);
  var scrollParent = getScrollParent(element), isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body), win = getWindow(scrollParent), target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent, updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, !1, strategy === "fixed");
  return rect.top = rect.top + element.clientTop, rect.left = rect.left + element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element)), canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0, clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  return isElement(clipperElement) ? clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  }) : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary), clippingParents2 = [].concat(mainClippingParents, [rootBoundary]), firstClippingParent = clippingParents2[0], clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    return accRect.top = max(rect.top, accRect.top), accRect.right = min(rect.right, accRect.right), accRect.bottom = min(rect.bottom, accRect.bottom), accRect.left = max(rect.left, accRect.left), accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  return clippingRect.width = clippingRect.right - clippingRect.left, clippingRect.height = clippingRect.bottom - clippingRect.top, clippingRect.x = clippingRect.left, clippingRect.y = clippingRect.top, clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement, basePlacement = placement ? getBasePlacement(placement) : null, variation = placement ? getVariation(placement) : null, commonX = reference2.x + reference2.width / 2 - element.width / 2, commonY = reference2.y + reference2.height / 2 - element.height / 2, offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? !1 : _options$altBoundary, _options$padding = _options.padding, padding2 = _options$padding === void 0 ? 0 : _options$padding, paddingObject = mergePaddingObject(typeof padding2 != "number" ? padding2 : expandToHashMap(padding2, basePlacements)), altContext = elementContext === popper ? reference : popper, popperRect = state.rects.popper, element = state.elements[altBoundary ? altContext : elementContext], clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy), referenceClientRect = getBoundingClientRect(state.elements.reference), popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  }), popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2)), elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect, overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  }, offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1, axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding2 = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP, variation = getVariation(placement), placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements, allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  allowedPlacements.length === 0 && (allowedPlacements = placements2);
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    return acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding: padding2
    })[getBasePlacement(placement2)], acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto)
    return [];
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (!state.modifiersData[name]._skip) {
    for (var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? !0 : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding2 = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? !0 : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), isBasePlacement = basePlacement === preferredPlacement, fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement)), placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding: padding2,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = /* @__PURE__ */ new Map(), makeFallbackChecks = !0, firstFittingPlacement = placements2[0], i = 0; i < placements2.length; i++) {
      var placement = placements2[i], _basePlacement = getBasePlacement(placement), isStartVariation = getVariation(placement) === start, isVertical = [top, bottom].indexOf(_basePlacement) >= 0, len = isVertical ? "width" : "height", overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding: padding2
      }), mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
      var altVariationSide = getOppositePlacement(mainVariationSide), checks = [];
      if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0), checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0), checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement, makeFallbackChecks = !1;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks)
      for (var numberOfChecks = flipVariations ? 3 : 1, _loop = function(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2)
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
        });
        if (fittingPlacement)
          return firstFittingPlacement = fittingPlacement, "break";
      }, _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = !0, state.placement = firstFittingPlacement, state.reset = !0);
  }
}
var flip_default = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  return preventedOffsets === void 0 && (preventedOffsets = {
    x: 0,
    y: 0
  }), {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name, referenceRect = state.rects.reference, popperRect = state.rects.popper, preventedOffsets = state.modifiersData.preventOverflow, referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  }), popperAltOverflow = detectOverflow(state, {
    altBoundary: !0
  }), referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect), popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets), isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets), hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  }, state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement), invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1, _ref = typeof offset2 == "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  return skidding = skidding || 0, distance = (distance || 0) * invertDistance, [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name, _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset, data = placements.reduce(function(acc, placement) {
    return acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2), acc;
  }, {}), _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  state.modifiersData.popperOffsets != null && (state.modifiersData.popperOffsets.x += x, state.modifiersData.popperOffsets.y += y), state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name, _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? !1 : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding2 = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? !0 : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset, overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding: padding2,
    altBoundary
  }), basePlacement = getBasePlacement(state.placement), variation = getVariation(state.placement), isBasePlacement = !variation, mainAxis = getMainAxisFromPlacement(basePlacement), altAxis = getAltAxis(mainAxis), popperOffsets2 = state.modifiersData.popperOffsets, referenceRect = state.rects.reference, popperRect = state.rects.popper, tetherOffsetValue = typeof tetherOffset == "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset, normalizedTetherOffsetValue = typeof tetherOffsetValue == "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue), offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null, data = {
    x: 0,
    y: 0
  };
  if (popperOffsets2) {
    if (checkMainAxis) {
      var _offsetModifierState$, mainSide = mainAxis === "y" ? top : left, altSide = mainAxis === "y" ? bottom : right, len = mainAxis === "y" ? "height" : "width", offset2 = popperOffsets2[mainAxis], min2 = offset2 + overflow[mainSide], max2 = offset2 - overflow[altSide], additive = tether ? -popperRect[len] / 2 : 0, minLen = variation === start ? referenceRect[len] : popperRect[len], maxLen = variation === start ? -popperRect[len] : -referenceRect[len], arrowElement = state.elements.arrow, arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      }, arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject(), arrowPaddingMin = arrowPaddingObject[mainSide], arrowPaddingMax = arrowPaddingObject[altSide], arrowLen = within(0, referenceRect[len], arrowRect[len]), minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis, maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis, arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow), clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0, offsetModifierValue = (_offsetModifierState$ = offsetModifierState?.[mainAxis]) != null ? _offsetModifierState$ : 0, tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset, tetherMax = offset2 + maxOffset - offsetModifierValue, preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset, data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2, _mainSide = mainAxis === "x" ? top : left, _altSide = mainAxis === "x" ? bottom : right, _offset = popperOffsets2[altAxis], _len = altAxis === "y" ? "height" : "width", _min = _offset + overflow[_mainSide], _max = _offset - overflow[_altSide], isOriginSide = [top, left].indexOf(basePlacement) !== -1, _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState?.[altAxis]) != null ? _offsetModifierState$2 : 0, _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis, _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max, _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset, data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node2) {
  return node2 === getWindow(node2) || !isHTMLElement(node2) ? getWindowScroll(node2) : getHTMLElementScroll(node2);
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect(), scaleX = round2(rect.width) / element.offsetWidth || 1, scaleY = round2(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = !1);
  var isOffsetParentAnElement = isHTMLElement(offsetParent), offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent), documentElement = getDocumentElement(offsetParent), rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed), scroll = {
    scrollLeft: 0,
    scrollTop: 0
  }, offsets = {
    x: 0,
    y: 0
  };
  return (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  isScrollParent(documentElement)) && (scroll = getNodeScroll(offsetParent)), isHTMLElement(offsetParent) ? (offsets = getBoundingClientRect(offsetParent, !0), offsets.x += offsetParent.clientLeft, offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))), {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map(), visited = /* @__PURE__ */ new Set(), result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }), result.push(modifier);
  }
  return modifiers.forEach(function(modifier) {
    visited.has(modifier.name) || sort(modifier);
  }), result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    return pending || (pending = new Promise(function(resolve) {
      Promise.resolve().then(function() {
        pending = void 0, resolve(fn2());
      });
    })), pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    return merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current, merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect == "function");
  });
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function(reference2, popper2, options) {
    options === void 0 && (options = defaultOptions);
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    }, effectCleanupFns = [], isDestroyed = !1, instance = {
      state,
      setOptions: function(setOptionsAction) {
        var options2 = typeof setOptionsAction == "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects(), state.options = Object.assign({}, defaultOptions, state.options, options2), state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        return state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        }), runModifierEffects(), instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!isDestroyed) {
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (areValidElements(reference3, popper3)) {
            state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            }, state.reset = !1, state.placement = state.options.placement, state.orderedModifiers.forEach(function(modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (state.reset === !0) {
                state.reset = !1, index = -1;
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              typeof fn2 == "function" && (state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate(), resolve(state);
        });
      }),
      destroy: function() {
        cleanupModifierEffects(), isDestroyed = !0;
      }
    };
    if (!areValidElements(reference2, popper2))
      return instance;
    instance.setOptions(options).then(function(state2) {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 == "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          }), noopFn = function() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      }), effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default], createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@mui/base/Popper/Popper.js
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/base/Popper/popperClasses.js
var COMPONENT_NAME = "Popper";
function getPopperUtilityClass(slot) {
  return generateUtilityClass2(COMPONENT_NAME, slot);
}
var popperClasses = generateUtilityClasses2(COMPONENT_NAME, ["root"]);

// node_modules/@mui/base/Popper/Popper.js
import { jsx as _jsx11 } from "react/jsx-runtime";
var _excluded14 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], _excluded23 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === "ltr")
    return placement;
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl == "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses5 = () => composeClasses({
  root: ["root"]
}, useClassNamesOverride(getPopperUtilityClass)), defaultPopperOptions = {}, PopperTooltip = /* @__PURE__ */ React28.forwardRef(function(props, forwardedRef) {
  var _slots$root;
  let {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14), tooltipRef = React28.useRef(null), ownRef = useForkRef(tooltipRef, forwardedRef), popperRef = React28.useRef(null), handlePopperRef = useForkRef(popperRef, popperRefProp), handlePopperRefRef = React28.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]), React28.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  let rtlPlacement = flipPlacement(initialPlacement, direction), [placement, setPlacement] = React28.useState(rtlPlacement), [resolvedAnchorElement, setResolvedAnchorElement] = React28.useState(resolveAnchorEl(anchorEl));
  React28.useEffect(() => {
    popperRef.current && popperRef.current.forceUpdate();
  }), React28.useEffect(() => {
    anchorEl && setResolvedAnchorElement(resolveAnchorEl(anchorEl));
  }, [anchorEl]), useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open)
      return;
    let handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
      let box = resolvedAnchorElement.getBoundingClientRect();
      box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    modifiers != null && (popperModifiers = popperModifiers.concat(modifiers)), popperOptions && popperOptions.modifiers != null && (popperModifiers = popperModifiers.concat(popperOptions.modifiers));
    let popper2 = createPopper(resolvedAnchorElement, tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    return handlePopperRefRef.current(popper2), () => {
      popper2.destroy(), handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  let childProps = {
    placement
  };
  TransitionProps !== null && (childProps.TransitionProps = TransitionProps);
  let classes = useUtilityClasses5(), Root = (_slots$root = slots.root) != null ? _slots$root : "div", rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /* @__PURE__ */ _jsx11(Root, _extends({}, rootProps, {
    children: typeof children == "function" ? children(childProps) : children
  }));
}), Popper = /* @__PURE__ */ React28.forwardRef(function(props, forwardedRef) {
  let {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = !1,
    keepMounted = !1,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style: style3,
    transition = !1,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23), [exited, setExited] = React28.useState(!0), handleEnter = () => {
    setExited(!1);
  }, handleExited = () => {
    setExited(!0);
  };
  if (!keepMounted && !open && (!transition || exited))
    return null;
  let container;
  if (containerProp)
    container = containerProp;
  else if (anchorEl) {
    let resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  let display = !open && keepMounted && (!transition || exited) ? "none" : void 0, transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return /* @__PURE__ */ _jsx11(Portal, {
    disablePortal,
    container,
    children: /* @__PURE__ */ _jsx11(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style3),
      TransitionProps: transitionProps,
      children
    }))
  });
});
Popper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types12.default.oneOfType([HTMLElementType, import_prop_types12.default.object, import_prop_types12.default.func]), (props) => {
    if (props.open) {
      let resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        let box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect != "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types12.default.oneOfType([import_prop_types12.default.node, import_prop_types12.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types12.default.oneOfType([HTMLElementType, import_prop_types12.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types12.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types12.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types12.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
    data: import_prop_types12.default.object,
    effect: import_prop_types12.default.func,
    enabled: import_prop_types12.default.bool,
    fn: import_prop_types12.default.func,
    name: import_prop_types12.default.any,
    options: import_prop_types12.default.object,
    phase: import_prop_types12.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types12.default.arrayOf(import_prop_types12.default.string),
    requiresIfExists: import_prop_types12.default.arrayOf(import_prop_types12.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types12.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types12.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types12.default.shape({
    modifiers: import_prop_types12.default.array,
    onFirstUpdate: import_prop_types12.default.func,
    placement: import_prop_types12.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types12.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    root: import_prop_types12.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types12.default.bool
};

// node_modules/@mui/base/useAutocomplete/useAutocomplete.js
import * as React29 from "react";
function stripDiacritics(string) {
  return typeof string.normalize < "u" ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
}
function createFilterOptions(config = {}) {
  let {
    ignoreAccents = !0,
    ignoreCase = !0,
    limit,
    matchFrom = "any",
    stringify: stringify2,
    trim: trim2 = !1
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim2 ? inputValue.trim() : inputValue;
    ignoreCase && (input = input.toLowerCase()), ignoreAccents && (input = stripDiacritics(input));
    let filteredOptions = input ? options.filter((option) => {
      let candidate = (stringify2 || getOptionLabel)(option);
      return ignoreCase && (candidate = candidate.toLowerCase()), ignoreAccents && (candidate = stripDiacritics(candidate)), matchFrom === "start" ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    }) : options;
    return typeof limit == "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1)
    if (comp(array[i]))
      return i;
  return -1;
}
var defaultFilterOptions = createFilterOptions(), pageSize = 5, defaultIsActiveElementInListbox = (listboxRef) => {
  var _listboxRef$current$p;
  return listboxRef.current !== null && ((_listboxRef$current$p = listboxRef.current.parentElement) == null ? void 0 : _listboxRef$current$p.contains(document.activeElement));
};
function useAutocomplete(props) {
  let {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = "Mui",
    autoComplete = !1,
    autoHighlight = !1,
    autoSelect = !1,
    blurOnSelect = !1,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = !1,
    componentName = "useAutocomplete",
    defaultValue = props.multiple ? [] : null,
    disableClearable = !1,
    disableCloseOnSelect = !1,
    disabled: disabledProp,
    disabledItemsFocusable = !1,
    disableListWrap = !1,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = !1,
    freeSolo = !1,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp = (option) => {
      var _option$label;
      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = !1,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value2) => option === value2,
    multiple = !1,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = !1,
    options,
    readOnly = !1,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props, id = useId2(idProp), getOptionLabel = getOptionLabelProp;
  getOptionLabel = (option) => {
    let optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel != "string") {
      {
        let erroneousReturn = optionLabel === void 0 ? "undefined" : `${typeof optionLabel} (${optionLabel})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(option)}.`);
      }
      return String(optionLabel);
    }
    return optionLabel;
  };
  let ignoreFocus = React29.useRef(!1), firstFocus = React29.useRef(!0), inputRef = React29.useRef(null), listboxRef = React29.useRef(null), [anchorEl, setAnchorEl] = React29.useState(null), [focusedTag, setFocusedTag] = React29.useState(-1), defaultHighlighted = autoHighlight ? 0 : -1, highlightedIndexRef = React29.useRef(defaultHighlighted), [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }), [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: "",
    name: componentName,
    state: "inputValue"
  }), [focused, setFocused] = React29.useState(!1), resetInputValue = React29.useCallback((event, newValue) => {
    if (!(multiple ? value.length < newValue.length : newValue !== null) && !clearOnBlur)
      return;
    let newInputValue;
    if (multiple)
      newInputValue = "";
    else if (newValue == null)
      newInputValue = "";
    else {
      let optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel == "string" ? optionLabel : "";
    }
    inputValue !== newInputValue && (setInputValueState(newInputValue), onInputChange && onInputChange(event, newInputValue, "reset"));
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]), [open, setOpenState] = useControlled({
    controlled: openProp,
    default: !1,
    name: componentName,
    state: "open"
  }), [inputPristine, setInputPristine] = React29.useState(!0), inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value), popupOpen = open && !readOnly, filteredOptions = popupOpen ? filterOptions(
    options.filter((option) => !(filterSelectedOptions && (multiple ? value : [value]).some((value2) => value2 !== null && isOptionEqualToValue(option, value2)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? "" : inputValue,
      getOptionLabel
    }
  ) : [], previousProps = usePreviousProps_default({
    filteredOptions,
    value,
    inputValue
  });
  React29.useEffect(() => {
    let valueChange = value !== previousProps.value;
    focused && !valueChange || freeSolo && !valueChange || resetInputValue(null, value);
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  let listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  if (value !== null && !freeSolo && options.length > 0) {
    let missingValue = (multiple ? value : [value]).filter((value2) => !options.some((option) => isOptionEqualToValue(option, value2)));
    missingValue.length > 0 && console.warn([`MUI: The value provided to ${componentName} is invalid.`, `None of the options match with \`${missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  let focusTag = useEventCallback_default((tagToFocus) => {
    tagToFocus === -1 ? inputRef.current.focus() : anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
  });
  React29.useEffect(() => {
    multiple && focusedTag > value.length - 1 && (setFocusedTag(-1), focusTag(-1));
  }, [value, multiple, focusedTag, focusTag]);
  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index < 0 || index >= filteredOptions.length)
      return -1;
    let nextFocus = index;
    for (; ; ) {
      let option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`), nextFocusDisabled = disabledItemsFocusable ? !1 : !option || option.disabled || option.getAttribute("aria-disabled") === "true";
      if (option && option.hasAttribute("tabindex") && !nextFocusDisabled)
        return nextFocus;
      if (direction === "next" ? nextFocus = (nextFocus + 1) % filteredOptions.length : nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length, nextFocus === index)
        return -1;
    }
  }
  let setHighlightedIndex = useEventCallback_default(({
    event,
    index,
    reason = "auto"
  }) => {
    if (highlightedIndexRef.current = index, index === -1 ? inputRef.current.removeAttribute("aria-activedescendant") : inputRef.current.setAttribute("aria-activedescendant", `${id}-option-${index}`), onHighlightChange && onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason), !listboxRef.current)
      return;
    let prev2 = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    prev2 && (prev2.classList.remove(`${unstable_classNamePrefix}-focused`), prev2.classList.remove(`${unstable_classNamePrefix}-focusVisible`));
    let listboxNode = listboxRef.current;
    if (listboxRef.current.getAttribute("role") !== "listbox" && (listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]')), !listboxNode)
      return;
    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    let option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
    if (option && (option.classList.add(`${unstable_classNamePrefix}-focused`), reason === "keyboard" && option.classList.add(`${unstable_classNamePrefix}-focusVisible`), listboxNode.scrollHeight > listboxNode.clientHeight && reason !== "mouse" && reason !== "touch")) {
      let element = option, scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop, elementBottom = element.offsetTop + element.offsetHeight;
      elementBottom > scrollBottom ? listboxNode.scrollTop = elementBottom - listboxNode.clientHeight : element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop && (listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0));
    }
  }), changeHighlightedIndex = useEventCallback_default(({
    event,
    diff,
    direction = "next",
    reason = "auto"
  }) => {
    if (!popupOpen)
      return;
    let nextIndex = validOptionIndex((() => {
      let maxIndex = filteredOptions.length - 1;
      if (diff === "reset")
        return defaultHighlighted;
      if (diff === "start")
        return 0;
      if (diff === "end")
        return maxIndex;
      let newIndex = highlightedIndexRef.current + diff;
      return newIndex < 0 ? newIndex === -1 && includeInputInList ? -1 : disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1 ? 0 : maxIndex : newIndex > maxIndex ? newIndex === maxIndex + 1 && includeInputInList ? -1 : disableListWrap || Math.abs(diff) > 1 ? maxIndex : 0 : newIndex;
    })(), direction);
    if (setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    }), autoComplete && diff !== "reset")
      if (nextIndex === -1)
        inputRef.current.value = inputValue;
      else {
        let option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option, option.toLowerCase().indexOf(inputValue.toLowerCase()) === 0 && inputValue.length > 0 && inputRef.current.setSelectionRange(inputValue.length, option.length);
      }
  }), checkHighlightedOptionExists = () => {
    let isSameValue = (value1, value2) => {
      let label1 = value1 ? getOptionLabel(value1) : "", label2 = value2 ? getOptionLabel(value2) : "";
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      let previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption && filteredOptions.some((option) => getOptionLabel(option) === getOptionLabel(previousHighlightedOption)))
        return !0;
    }
    return !1;
  }, syncHighlightedIndex = React29.useCallback(() => {
    if (!popupOpen || checkHighlightedOptionExists())
      return;
    let valueItem = multiple ? value[0] : value;
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: "reset"
      });
      return;
    }
    if (listboxRef.current) {
      if (valueItem != null) {
        let currentOption = filteredOptions[highlightedIndexRef.current];
        if (multiple && currentOption && findIndex(value, (val) => isOptionEqualToValue(currentOption, val)) !== -1)
          return;
        let itemIndex = findIndex(filteredOptions, (optionItem) => isOptionEqualToValue(optionItem, valueItem));
        itemIndex === -1 ? changeHighlightedIndex({
          diff: "reset"
        }) : setHighlightedIndex({
          index: itemIndex
        });
        return;
      }
      if (highlightedIndexRef.current >= filteredOptions.length - 1) {
        setHighlightedIndex({
          index: filteredOptions.length - 1
        });
        return;
      }
      setHighlightedIndex({
        index: highlightedIndexRef.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? !1 : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple
  ]), handleListboxRef = useEventCallback_default((node2) => {
    setRef(listboxRef, node2), node2 && syncHighlightedIndex();
  });
  React29.useEffect(() => {
    (!inputRef.current || inputRef.current.nodeName !== "INPUT") && (inputRef.current && inputRef.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${componentName} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${inputRef.current} while an HTMLInputElement was expected.`, `Instead, ${componentName} expects an input element.`, "", componentName === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [componentName]), React29.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  let handleOpen = (event) => {
    open || (setOpenState(!0), setInputPristine(!0), onOpen && onOpen(event));
  }, handleClose = (event, reason) => {
    open && (setOpenState(!1), onClose && onClose(event, reason));
  }, handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i]))
        return;
    } else if (value === newValue)
      return;
    onChange && onChange(event, newValue, reason, details), setValueState(newValue);
  }, isTouch = React29.useRef(!1), selectNewValue = (event, option, reasonProp = "selectOption", origin = "options") => {
    let reason = reasonProp, newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      {
        let matches = newValue.filter((val) => isOptionEqualToValue(option, val));
        matches.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${componentName} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${matches.length} matches.`].join(`
`));
      }
      let itemIndex = findIndex(newValue, (valueItem) => isOptionEqualToValue(option, valueItem));
      itemIndex === -1 ? newValue.push(option) : origin !== "freeSolo" && (newValue.splice(itemIndex, 1), reason = "removeOption");
    }
    resetInputValue(event, newValue), handleValue(event, newValue, reason, {
      option
    }), !disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey) && handleClose(event, reason), (blurOnSelect === !0 || blurOnSelect === "touch" && isTouch.current || blurOnSelect === "mouse" && !isTouch.current) && inputRef.current.blur();
  };
  function validTagIndex(index, direction) {
    if (index === -1)
      return -1;
    let nextFocus = index;
    for (; ; ) {
      if (direction === "next" && nextFocus === value.length || direction === "previous" && nextFocus === -1)
        return -1;
      let option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);
      if (!option || !option.hasAttribute("tabindex") || option.disabled || option.getAttribute("aria-disabled") === "true")
        nextFocus += direction === "next" ? 1 : -1;
      else
        return nextFocus;
    }
  }
  let handleFocusTag = (event, direction) => {
    if (!multiple)
      return;
    inputValue === "" && handleClose(event, "toggleInput");
    let nextTag = focusedTag;
    focusedTag === -1 ? inputValue === "" && direction === "previous" && (nextTag = value.length - 1) : (nextTag += direction === "next" ? 1 : -1, nextTag < 0 && (nextTag = 0), nextTag === value.length && (nextTag = -1)), nextTag = validTagIndex(nextTag, direction), setFocusedTag(nextTag), focusTag(nextTag);
  }, handleClear = (event) => {
    ignoreFocus.current = !0, setInputValueState(""), onInputChange && onInputChange(event, "", "clear"), handleValue(event, multiple ? [] : null, "clear");
  }, handleKeyDown2 = (other) => (event) => {
    if (other.onKeyDown && other.onKeyDown(event), !event.defaultMuiPrevented && (focusedTag !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(event.key) === -1 && (setFocusedTag(-1), focusTag(-1)), event.which !== 229))
      switch (event.key) {
        case "Home":
          popupOpen && handleHomeEndKeys && (event.preventDefault(), changeHighlightedIndex({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event
          }));
          break;
        case "End":
          popupOpen && handleHomeEndKeys && (event.preventDefault(), changeHighlightedIndex({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event
          }));
          break;
        case "PageUp":
          event.preventDefault(), changeHighlightedIndex({
            diff: -pageSize,
            direction: "previous",
            reason: "keyboard",
            event
          }), handleOpen(event);
          break;
        case "PageDown":
          event.preventDefault(), changeHighlightedIndex({
            diff: pageSize,
            direction: "next",
            reason: "keyboard",
            event
          }), handleOpen(event);
          break;
        case "ArrowDown":
          event.preventDefault(), changeHighlightedIndex({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event
          }), handleOpen(event);
          break;
        case "ArrowUp":
          event.preventDefault(), changeHighlightedIndex({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event
          }), handleOpen(event);
          break;
        case "ArrowLeft":
          handleFocusTag(event, "previous");
          break;
        case "ArrowRight":
          handleFocusTag(event, "next");
          break;
        case "Enter":
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            let option = filteredOptions[highlightedIndexRef.current], disabled = getOptionDisabled ? getOptionDisabled(option) : !1;
            if (event.preventDefault(), disabled)
              return;
            selectNewValue(event, option, "selectOption"), autoComplete && inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
          } else
            freeSolo && inputValue !== "" && inputValueIsSelectedValue === !1 && (multiple && event.preventDefault(), selectNewValue(event, inputValue, "createOption", "freeSolo"));
          break;
        case "Escape":
          popupOpen ? (event.preventDefault(), event.stopPropagation(), handleClose(event, "escape")) : clearOnEscape && (inputValue !== "" || multiple && value.length > 0) && (event.preventDefault(), event.stopPropagation(), handleClear(event));
          break;
        case "Backspace":
          if (multiple && !readOnly && inputValue === "" && value.length > 0) {
            let index = focusedTag === -1 ? value.length - 1 : focusedTag, newValue = value.slice();
            newValue.splice(index, 1), handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
        case "Delete":
          if (multiple && !readOnly && inputValue === "" && value.length > 0 && focusedTag !== -1) {
            let index = focusedTag, newValue = value.slice();
            newValue.splice(index, 1), handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
        default:
      }
  }, handleFocus = (event) => {
    setFocused(!0), openOnFocus && !ignoreFocus.current && handleOpen(event);
  }, handleBlur = (event) => {
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(!1), firstFocus.current = !0, ignoreFocus.current = !1, autoSelect && highlightedIndexRef.current !== -1 && popupOpen ? selectNewValue(event, filteredOptions[highlightedIndexRef.current], "blur") : autoSelect && freeSolo && inputValue !== "" ? selectNewValue(event, inputValue, "blur", "freeSolo") : clearOnBlur && resetInputValue(event, value), handleClose(event, "blur");
  }, handleInputChange = (event) => {
    let newValue = event.target.value;
    inputValue !== newValue && (setInputValueState(newValue), setInputPristine(!1), onInputChange && onInputChange(event, newValue, "input")), newValue === "" ? !disableClearable && !multiple && handleValue(event, null, "clear") : handleOpen(event);
  }, handleOptionMouseMove = (event) => {
    let index = Number(event.currentTarget.getAttribute("data-option-index"));
    highlightedIndexRef.current !== index && setHighlightedIndex({
      event,
      index,
      reason: "mouse"
    });
  }, handleOptionTouchStart = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), isTouch.current = !0;
  }, handleOptionClick = (event) => {
    let index = Number(event.currentTarget.getAttribute("data-option-index"));
    selectNewValue(event, filteredOptions[index], "selectOption"), isTouch.current = !1;
  }, handleTagDelete = (index) => (event) => {
    let newValue = value.slice();
    newValue.splice(index, 1), handleValue(event, newValue, "removeOption", {
      option: value[index]
    });
  }, handlePopupIndicator = (event) => {
    open ? handleClose(event, "toggleInput") : handleOpen(event);
  }, handleMouseDown = (event) => {
    event.currentTarget.contains(event.target) && event.target.getAttribute("id") !== id && event.preventDefault();
  }, handleClick = (event) => {
    event.currentTarget.contains(event.target) && (inputRef.current.focus(), selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0 && inputRef.current.select(), firstFocus.current = !1);
  }, handleInputMouseDown = (event) => {
    !disabledProp && (inputValue === "" || !open) && handlePopupIndicator(event);
  }, dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    let indexBy = /* @__PURE__ */ new Map(), warn = !1;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      let group = groupBy(option);
      return acc.length > 0 && acc[acc.length - 1].group === group ? acc[acc.length - 1].options.push(option) : (indexBy.get(group) && !warn && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), warn = !0), indexBy.set(group, !0), acc.push({
        key: index,
        index,
        group,
        options: [option]
      })), acc;
    }, []);
  }
  return disabledProp && focused && handleBlur(), {
    getRootProps: (other = {}) => _extends({
      "aria-owns": listboxAvailable ? `${id}-listbox` : null
    }, other, {
      onKeyDown: handleKeyDown2(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": popupOpen ? "" : null,
      "aria-autocomplete": autoComplete ? "both" : "list",
      "aria-controls": listboxAvailable ? `${id}-listbox` : void 0,
      "aria-expanded": listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: inputRef,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => _extends({
      key: index,
      "data-tag-index": index,
      tabIndex: -1
    }, !readOnly && {
      onDelete: handleTagDelete(index)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${id}-listbox`,
      "aria-labelledby": `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      var _getOptionKey;
      let selected = (multiple ? value : [value]).some((value2) => value2 != null && isOptionEqualToValue(option, value2)), disabled = getOptionDisabled ? getOptionDisabled(option) : !1;
      return {
        key: (_getOptionKey = getOptionKey?.(option)) != null ? _getOptionKey : getOptionLabel(option),
        tabIndex: -1,
        role: "option",
        id: `${id}-option-${index}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        "data-option-index": index,
        "aria-disabled": disabled,
        "aria-selected": selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

// node_modules/@mui/material/Popper/Popper.js
var import_prop_types13 = __toESM(require_prop_types());
import * as React30 from "react";
import { jsx as _jsx12 } from "react/jsx-runtime";
var _excluded15 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], PopperRoot = styled_default(Popper, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({}), Popper3 = /* @__PURE__ */ React30.forwardRef(function(inProps, ref) {
  var _slots$root;
  let theme = useThemeWithoutDefault_default(), props = useThemeProps2({
    props: inProps,
    name: "MuiPopper"
  }), {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15), RootComponent = (_slots$root = slots?.root) != null ? _slots$root : components?.Root, otherProps = _extends({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return /* @__PURE__ */ _jsx12(PopperRoot, _extends({
    as: component,
    direction: theme?.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps
  }, otherProps, {
    ref
  }));
});
Popper3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types13.default.oneOfType([HTMLElementType, import_prop_types13.default.object, import_prop_types13.default.func]),
  /**
   * Popper render function or node.
   */
  children: import_prop_types13.default.oneOfType([import_prop_types13.default.node, import_prop_types13.default.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types13.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: import_prop_types13.default.shape({
    Root: import_prop_types13.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: import_prop_types13.default.shape({
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types13.default.oneOfType([HTMLElementType, import_prop_types13.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types13.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types13.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
    data: import_prop_types13.default.object,
    effect: import_prop_types13.default.func,
    enabled: import_prop_types13.default.bool,
    fn: import_prop_types13.default.func,
    name: import_prop_types13.default.any,
    options: import_prop_types13.default.object,
    phase: import_prop_types13.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types13.default.arrayOf(import_prop_types13.default.string),
    requiresIfExists: import_prop_types13.default.arrayOf(import_prop_types13.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types13.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types13.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types13.default.shape({
    modifiers: import_prop_types13.default.array,
    onFirstUpdate: import_prop_types13.default.func,
    placement: import_prop_types13.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types13.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types13.default.shape({
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types13.default.shape({
    root: import_prop_types13.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types13.default.bool
};
var Popper_default = Popper3;

// node_modules/@mui/material/ListSubheader/ListSubheader.js
var import_prop_types14 = __toESM(require_prop_types());
import * as React31 from "react";

// node_modules/@mui/material/ListSubheader/listSubheaderClasses.js
function getListSubheaderUtilityClass(slot) {
  return generateUtilityClass("MuiListSubheader", slot);
}
var listSubheaderClasses = generateUtilityClasses("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);

// node_modules/@mui/material/ListSubheader/ListSubheader.js
import { jsx as _jsx13 } from "react/jsx-runtime";
var _excluded16 = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], useUtilityClasses6 = (ownerState) => {
  let {
    classes,
    color: color2,
    disableGutters,
    inset,
    disableSticky
  } = ownerState, slots = {
    root: ["root", color2 !== "default" && `color${capitalize_default(color2)}`, !disableGutters && "gutters", inset && "inset", !disableSticky && "sticky"]
  };
  return composeClasses(slots, getListSubheaderUtilityClass, classes);
}, ListSubheaderRoot = styled_default("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`], !ownerState.disableGutters && styles.gutters, ownerState.inset && styles.inset, !ownerState.disableSticky && styles.sticky];
  }
})(({
  theme,
  ownerState
}) => _extends({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (theme.vars || theme).palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14)
}, ownerState.color === "primary" && {
  color: (theme.vars || theme).palette.primary.main
}, ownerState.color === "inherit" && {
  color: "inherit"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.inset && {
  paddingLeft: 72
}, !ownerState.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (theme.vars || theme).palette.background.paper
})), ListSubheader = /* @__PURE__ */ React31.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiListSubheader"
  }), {
    className,
    color: color2 = "default",
    component = "li",
    disableGutters = !1,
    disableSticky = !1,
    inset = !1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16), ownerState = _extends({}, props, {
    color: color2,
    component,
    disableGutters,
    disableSticky,
    inset
  }), classes = useUtilityClasses6(ownerState);
  return /* @__PURE__ */ _jsx13(ListSubheaderRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    ref,
    ownerState
  }, other));
});
ListSubheader.muiSkipListHighlight = !0;
ListSubheader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types14.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: import_prop_types14.default.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types14.default.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: import_prop_types14.default.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: import_prop_types14.default.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: import_prop_types14.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object])
};
var ListSubheader_default = ListSubheader;

// node_modules/@mui/material/Chip/Chip.js
var import_prop_types15 = __toESM(require_prop_types());
import * as React33 from "react";

// node_modules/@mui/material/internal/svg-icons/Cancel.js
import "react";
import { jsx as _jsx14 } from "react/jsx-runtime";
var Cancel_default = createSvgIcon(/* @__PURE__ */ _jsx14("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@mui/material/Chip/chipClasses.js
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), chipClasses_default = chipClasses;

// node_modules/@mui/material/Chip/Chip.js
import { jsx as _jsx15 } from "react/jsx-runtime";
import { jsxs as _jsxs3 } from "react/jsx-runtime";
var _excluded17 = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], useUtilityClasses7 = (ownerState) => {
  let {
    classes,
    disabled,
    size,
    color: color2,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState, slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize_default(size)}`, `color${capitalize_default(color2)}`, clickable && "clickable", clickable && `clickableColor${capitalize_default(color2)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize_default(color2)}`, `${variant}${capitalize_default(color2)}`],
    label: ["label", `label${capitalize_default(size)}`],
    avatar: ["avatar", `avatar${capitalize_default(size)}`, `avatarColor${capitalize_default(color2)}`],
    icon: ["icon", `icon${capitalize_default(size)}`, `iconColor${capitalize_default(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize_default(size)}`, `deleteIconColor${capitalize_default(color2)}`, `deleteIcon${capitalize_default(variant)}Color${capitalize_default(color2)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
}, ChipRoot = styled_default("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props, {
      color: color2,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses_default.avatar}`]: styles.avatar
    }, {
      [`& .${chipClasses_default.avatar}`]: styles[`avatar${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.avatar}`]: styles[`avatarColor${capitalize_default(color2)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles.icon
    }, {
      [`& .${chipClasses_default.icon}`]: styles[`icon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles[`iconColor${capitalize_default(iconColor)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles.deleteIcon
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles[`deleteIcon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles[`deleteIconColor${capitalize_default(color2)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles[`deleteIcon${capitalize_default(variant)}Color${capitalize_default(color2)}`]
    }, styles.root, styles[`size${capitalize_default(size)}`], styles[`color${capitalize_default(color2)}`], clickable && styles.clickable, clickable && color2 !== "default" && styles[`clickableColor${capitalize_default(color2)})`], onDelete && styles.deletable, onDelete && color2 !== "default" && styles[`deletableColor${capitalize_default(color2)}`], styles[variant], styles[`${variant}${capitalize_default(color2)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return _extends({
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses_default.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses_default.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses_default.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses_default.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses_default.icon}`]: _extends({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && _extends({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== "default" && {
      color: "inherit"
    })),
    [`& .${chipClasses_default.deleteIcon}`]: _extends({
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== "default" && {
      color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : alpha(theme.palette[ownerState.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === "small" && {
    height: 24
  }, ownerState.color !== "default" && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== "default" && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, ({
  theme,
  ownerState
}) => _extends({}, ownerState.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (theme.vars || theme).shadows[1]
  }
}, ownerState.clickable && ownerState.color !== "default" && {
  [`&:hover, &.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.variant === "outlined" && {
  backgroundColor: "transparent",
  border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`& .${chipClasses_default.avatar}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.icon}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${chipClasses_default.deleteIconSmall}`]: {
    marginRight: 3
  }
}, ownerState.variant === "outlined" && ownerState.color !== "default" && {
  color: (theme.vars || theme).palette[ownerState.color].main,
  border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha(theme.palette[ownerState.color].main, 0.7)}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha(theme.palette[ownerState.color].main, 0.7),
    "&:hover, &:active": {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }
})), ChipLabel = styled_default("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props, {
      size
    } = ownerState;
    return [styles.label, styles[`label${capitalize_default(size)}`]];
  }
})(({
  ownerState
}) => _extends({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, ownerState.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, ownerState.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.size === "small" && ownerState.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = /* @__PURE__ */ React33.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiChip"
  }), {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color: color2 = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = !1,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17), chipRef = React33.useRef(null), handleRef = useForkRef_default(chipRef, ref), handleDeleteIconClick = (event) => {
    event.stopPropagation(), onDelete && onDelete(event);
  }, handleKeyDown2 = (event) => {
    event.currentTarget === event.target && isDeleteKeyboardEvent(event) && event.preventDefault(), onKeyDown && onKeyDown(event);
  }, handleKeyUp = (event) => {
    event.currentTarget === event.target && (onDelete && isDeleteKeyboardEvent(event) ? onDelete(event) : event.key === "Escape" && chipRef.current && chipRef.current.blur()), onKeyUp && onKeyUp(event);
  }, clickable = clickableProp !== !1 && onClick ? !0 : clickableProp, component = clickable || onDelete ? ButtonBase_default : ComponentProp || "div", ownerState = _extends({}, props, {
    component,
    disabled,
    size,
    color: color2,
    iconColor: /* @__PURE__ */ React33.isValidElement(iconProp) && iconProp.props.color || color2,
    onDelete: !!onDelete,
    clickable,
    variant
  }), classes = useUtilityClasses7(ownerState), moreProps = component === ButtonBase_default ? _extends({
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: !0
  }) : {}, deleteIcon = null;
  onDelete && (deleteIcon = deleteIconProp && /* @__PURE__ */ React33.isValidElement(deleteIconProp) ? /* @__PURE__ */ React33.cloneElement(deleteIconProp, {
    className: clsx_default(deleteIconProp.props.className, classes.deleteIcon),
    onClick: handleDeleteIconClick
  }) : /* @__PURE__ */ _jsx15(Cancel_default, {
    className: clsx_default(classes.deleteIcon),
    onClick: handleDeleteIconClick
  }));
  let avatar = null;
  avatarProp && /* @__PURE__ */ React33.isValidElement(avatarProp) && (avatar = /* @__PURE__ */ React33.cloneElement(avatarProp, {
    className: clsx_default(classes.avatar, avatarProp.props.className)
  }));
  let icon = null;
  return iconProp && /* @__PURE__ */ React33.isValidElement(iconProp) && (icon = /* @__PURE__ */ React33.cloneElement(iconProp, {
    className: clsx_default(classes.icon, iconProp.props.className)
  })), avatar && icon && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ _jsxs3(ChipRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    disabled: clickable && disabled ? !0 : void 0,
    onClick,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState
  }, moreProps, other, {
    children: [avatar || icon, /* @__PURE__ */ _jsx15(ChipLabel, {
      className: clsx_default(classes.label),
      ownerState,
      children: label
    }), deleteIcon]
  }));
});
Chip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: import_prop_types15.default.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: import_prop_types15.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types15.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types15.default.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: import_prop_types15.default.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types15.default.bool,
  /**
   * Icon element.
   */
  icon: import_prop_types15.default.element,
  /**
   * The content of the component.
   */
  label: import_prop_types15.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types15.default.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types15.default.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["medium", "small"]), import_prop_types15.default.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: import_prop_types15.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * @ignore
   */
  tabIndex: import_prop_types15.default.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["filled", "outlined"]), import_prop_types15.default.string])
};
var Chip_default = Chip;

// node_modules/@mui/material/InputBase/inputBaseClasses.js
var inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/Input/inputClasses.js
var inputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiInput", ["root", "underline", "input"])), inputClasses_default = inputClasses;

// node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
var outlinedInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"])), outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/material/FilledInput/filledInputClasses.js
var filledInputClasses = _extends({}, inputBaseClasses_default, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"])), filledInputClasses_default = filledInputClasses;

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
import "react";
import { jsx as _jsx16 } from "react/jsx-runtime";
var ArrowDropDown_default = createSvgIcon(/* @__PURE__ */ _jsx16("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/Autocomplete/autocompleteClasses.js
function getAutocompleteUtilityClass(slot) {
  return generateUtilityClass("MuiAutocomplete", slot);
}
var autocompleteClasses = generateUtilityClasses("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), autocompleteClasses_default = autocompleteClasses;

// node_modules/@mui/material/Autocomplete/Autocomplete.js
import { jsx as _jsx17 } from "react/jsx-runtime";
import { jsxs as _jsxs4 } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var _ClearIcon, _ArrowDropDownIcon, _excluded18 = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], _excluded24 = ["ref"], useUtilityClasses8 = (ownerState) => {
  let {
    classes,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused,
    popupOpen,
    size
  } = ownerState, slots = {
    root: ["root", expanded && "expanded", focused && "focused", fullWidth && "fullWidth", hasClearIcon && "hasClearIcon", hasPopupIcon && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", inputFocused && "inputFocused"],
    tag: ["tag", `tagSize${capitalize_default(size)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", popupOpen && "popupIndicatorOpen"],
    popper: ["popper", disablePortal && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return composeClasses(slots, getAutocompleteUtilityClass, classes);
}, AutocompleteRoot = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props, {
      fullWidth,
      hasClearIcon,
      hasPopupIcon,
      inputFocused,
      size
    } = ownerState;
    return [{
      [`& .${autocompleteClasses_default.tag}`]: styles.tag
    }, {
      [`& .${autocompleteClasses_default.tag}`]: styles[`tagSize${capitalize_default(size)}`]
    }, {
      [`& .${autocompleteClasses_default.inputRoot}`]: styles.inputRoot
    }, {
      [`& .${autocompleteClasses_default.input}`]: styles.input
    }, {
      [`& .${autocompleteClasses_default.input}`]: inputFocused && styles.inputFocused
    }, styles.root, fullWidth && styles.fullWidth, hasPopupIcon && styles.hasPopupIcon, hasClearIcon && styles.hasClearIcon];
  }
})(({
  ownerState
}) => _extends({
  [`&.${autocompleteClasses_default.focused} .${autocompleteClasses_default.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${autocompleteClasses_default.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, ownerState.fullWidth && {
  width: "100%"
}, {
  [`& .${autocompleteClasses_default.tag}`]: _extends({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, ownerState.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${autocompleteClasses_default.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${autocompleteClasses_default.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${inputClasses_default.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${inputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${inputClasses_default.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${outlinedInputClasses_default.root}`]: {
    padding: 9,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${outlinedInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${filledInputClasses_default.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${filledInputClasses_default.input}`]: {
      padding: "7px 4px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${filledInputClasses_default.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${autocompleteClasses_default.input}`]: _extends({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, ownerState.inputFocused && {
    opacity: 1
  })
})), AutocompleteEndAdornment = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (props, styles) => styles.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), AutocompleteClearIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (props, styles) => styles.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), AutocompletePopupIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState
  }, styles) => _extends({}, styles.popupIndicator, ownerState.popupOpen && styles.popupIndicatorOpen)
})(({
  ownerState
}) => _extends({
  padding: 2,
  marginRight: -2
}, ownerState.popupOpen && {
  transform: "rotate(180deg)"
})), AutocompletePopper = styled_default(Popper_default, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (props, styles) => {
    let {
      ownerState
    } = props;
    return [{
      [`& .${autocompleteClasses_default.option}`]: styles.option
    }, styles.popper, ownerState.disablePortal && styles.popperDisablePortal];
  }
})(({
  theme,
  ownerState
}) => _extends({
  zIndex: (theme.vars || theme).zIndex.modal
}, ownerState.disablePortal && {
  position: "absolute"
})), AutocompletePaper = styled_default(Paper_default, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  overflow: "auto"
})), AutocompleteLoading = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (props, styles) => styles.loading
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})), AutocompleteNoOptions = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (props, styles) => styles.noOptions
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})), AutocompleteListbox = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (props, styles) => styles.listbox
})(({
  theme
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${autocompleteClasses_default.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${autocompleteClasses_default.focused}`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${autocompleteClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${autocompleteClasses_default.focused}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette.action.selected
        }
      },
      [`&.${autocompleteClasses_default.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  }
})), AutocompleteGroupLabel = styled_default(ListSubheader_default, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (props, styles) => styles.groupLabel
})(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  top: -8
})), AutocompleteGroupUl = styled_default("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (props, styles) => styles.groupUl
})({
  padding: 0,
  [`& .${autocompleteClasses_default.option}`]: {
    paddingLeft: 24
  }
});
var Autocomplete = /* @__PURE__ */ React35.forwardRef(function(inProps, ref) {
  var _slotProps$clearIndic, _slotProps$paper, _slotProps$popper, _slotProps$popupIndic;
  let props = useThemeProps2({
    props: inProps,
    name: "MuiAutocomplete"
  }), {
    autoComplete = !1,
    autoHighlight = !1,
    autoSelect = !1,
    blurOnSelect = !1,
    ChipProps,
    className,
    clearIcon = _ClearIcon || (_ClearIcon = /* @__PURE__ */ _jsx17(Close_default, {
      fontSize: "small"
    })),
    clearOnBlur = !props.freeSolo,
    clearOnEscape = !1,
    clearText = "Clear",
    closeText = "Close",
    componentsProps = {},
    defaultValue = props.multiple ? [] : null,
    disableClearable = !1,
    disableCloseOnSelect = !1,
    disabled = !1,
    disabledItemsFocusable = !1,
    disableListWrap = !1,
    disablePortal = !1,
    filterSelectedOptions = !1,
    forcePopupIcon = "auto",
    freeSolo = !1,
    fullWidth = !1,
    getLimitTagsText = (more) => `+${more}`,
    getOptionLabel: getOptionLabelProp,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    includeInputInList = !1,
    limitTags = -1,
    ListboxComponent = "ul",
    ListboxProps,
    loading = !1,
    loadingText = "Loading\u2026",
    multiple = !1,
    noOptionsText = "No options",
    openOnFocus = !1,
    openText = "Open",
    PaperComponent = Paper_default,
    PopperComponent = Popper_default,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /* @__PURE__ */ _jsx17(ArrowDropDown_default, {})),
    readOnly = !1,
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    selectOnFocus = !props.freeSolo,
    size = "medium",
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18), {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    expanded,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete(_extends({}, props, {
    componentName: "Autocomplete"
  })), hasClearIcon = !disableClearable && !disabled && dirty && !readOnly, hasPopupIcon = (!freeSolo || forcePopupIcon === !0) && forcePopupIcon !== !1, {
    onMouseDown: handleInputMouseDown
  } = getInputProps(), {
    ref: externalListboxRef
  } = ListboxProps ?? {}, _getListboxProps = getListboxProps(), {
    ref: listboxRef
  } = _getListboxProps, otherListboxProps = _objectWithoutPropertiesLoose(_getListboxProps, _excluded24), combinedListboxRef = useForkRef_default(listboxRef, externalListboxRef), getOptionLabel = getOptionLabelProp || ((option) => {
    var _option$label;
    return (_option$label = option.label) != null ? _option$label : option;
  }), ownerState = _extends({}, props, {
    disablePortal,
    expanded,
    focused,
    fullWidth,
    getOptionLabel,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedTag === -1,
    popupOpen,
    size
  }), classes = useUtilityClasses8(ownerState), startAdornment;
  if (multiple && value.length > 0) {
    let getCustomizedTagProps = (params) => _extends({
      className: classes.tag,
      disabled
    }, getTagProps(params));
    renderTags ? startAdornment = renderTags(value, getCustomizedTagProps, ownerState) : startAdornment = value.map((option, index) => /* @__PURE__ */ _jsx17(Chip_default, _extends({
      label: getOptionLabel(option),
      size
    }, getCustomizedTagProps({
      index
    }), ChipProps)));
  }
  if (limitTags > -1 && Array.isArray(startAdornment)) {
    let more = startAdornment.length - limitTags;
    !focused && more > 0 && (startAdornment = startAdornment.splice(0, limitTags), startAdornment.push(/* @__PURE__ */ _jsx17("span", {
      className: classes.tag,
      children: getLimitTagsText(more)
    }, startAdornment.length)));
  }
  let renderGroup = renderGroupProp || ((params) => /* @__PURE__ */ _jsxs4("li", {
    children: [/* @__PURE__ */ _jsx17(AutocompleteGroupLabel, {
      className: classes.groupLabel,
      ownerState,
      component: "div",
      children: params.group
    }), /* @__PURE__ */ _jsx17(AutocompleteGroupUl, {
      className: classes.groupUl,
      ownerState,
      children: params.children
    })]
  }, params.key)), renderOption = renderOptionProp || ((props2, option) => /* @__PURE__ */ _createElement("li", _extends({}, props2, {
    key: props2.key
  }), getOptionLabel(option))), renderListOption = (option, index) => {
    let optionProps = getOptionProps({
      option,
      index
    });
    return renderOption(_extends({}, optionProps, {
      className: classes.option
    }), option, {
      selected: optionProps["aria-selected"],
      index,
      inputValue
    }, ownerState);
  }, clearIndicatorSlotProps = (_slotProps$clearIndic = slotProps.clearIndicator) != null ? _slotProps$clearIndic : componentsProps.clearIndicator, paperSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : componentsProps.paper, popperSlotProps = (_slotProps$popper = slotProps.popper) != null ? _slotProps$popper : componentsProps.popper, popupIndicatorSlotProps = (_slotProps$popupIndic = slotProps.popupIndicator) != null ? _slotProps$popupIndic : componentsProps.popupIndicator;
  return /* @__PURE__ */ _jsxs4(React35.Fragment, {
    children: [/* @__PURE__ */ _jsx17(AutocompleteRoot, _extends({
      ref,
      className: clsx_default(classes.root, className),
      ownerState
    }, getRootProps(other), {
      children: renderInput({
        id,
        disabled,
        fullWidth: !0,
        size: size === "small" ? "small" : void 0,
        InputLabelProps: getInputLabelProps(),
        InputProps: _extends({
          ref: setAnchorEl,
          className: classes.inputRoot,
          startAdornment,
          onClick: (event) => {
            event.target === event.currentTarget && handleInputMouseDown(event);
          }
        }, (hasClearIcon || hasPopupIcon) && {
          endAdornment: /* @__PURE__ */ _jsxs4(AutocompleteEndAdornment, {
            className: classes.endAdornment,
            ownerState,
            children: [hasClearIcon ? /* @__PURE__ */ _jsx17(AutocompleteClearIndicator, _extends({}, getClearProps(), {
              "aria-label": clearText,
              title: clearText,
              ownerState
            }, clearIndicatorSlotProps, {
              className: clsx_default(classes.clearIndicator, clearIndicatorSlotProps?.className),
              children: clearIcon
            })) : null, hasPopupIcon ? /* @__PURE__ */ _jsx17(AutocompletePopupIndicator, _extends({}, getPopupIndicatorProps(), {
              disabled,
              "aria-label": popupOpen ? closeText : openText,
              title: popupOpen ? closeText : openText,
              ownerState
            }, popupIndicatorSlotProps, {
              className: clsx_default(classes.popupIndicator, popupIndicatorSlotProps?.className),
              children: popupIcon
            })) : null]
          })
        }),
        inputProps: _extends({
          className: classes.input,
          disabled,
          readOnly
        }, getInputProps())
      })
    })), anchorEl ? /* @__PURE__ */ _jsx17(AutocompletePopper, _extends({
      as: PopperComponent,
      disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      ownerState,
      role: "presentation",
      anchorEl,
      open: popupOpen
    }, popperSlotProps, {
      className: clsx_default(classes.popper, popperSlotProps?.className),
      children: /* @__PURE__ */ _jsxs4(AutocompletePaper, _extends({
        ownerState,
        as: PaperComponent
      }, paperSlotProps, {
        className: clsx_default(classes.paper, paperSlotProps?.className),
        children: [loading && groupedOptions.length === 0 ? /* @__PURE__ */ _jsx17(AutocompleteLoading, {
          className: classes.loading,
          ownerState,
          children: loadingText
        }) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /* @__PURE__ */ _jsx17(AutocompleteNoOptions, {
          className: classes.noOptions,
          ownerState,
          role: "presentation",
          onMouseDown: (event) => {
            event.preventDefault();
          },
          children: noOptionsText
        }) : null, groupedOptions.length > 0 ? /* @__PURE__ */ _jsx17(AutocompleteListbox, _extends({
          as: ListboxComponent,
          className: classes.listbox,
          ownerState
        }, otherListboxProps, ListboxProps, {
          ref: combinedListboxRef,
          children: groupedOptions.map((option, index) => groupBy ? renderGroup({
            key: option.key,
            group: option.group,
            children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
          }) : renderListOption(option, index))
        })) : null]
      }))
    })) : null]
  });
});
Autocomplete.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: import_prop_types16.default.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: import_prop_types16.default.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: import_prop_types16.default.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["mouse", "touch"]), import_prop_types16.default.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: import_prop_types16.default.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: import_prop_types16.default.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: import_prop_types16.default.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: import_prop_types16.default.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: import_prop_types16.default.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: import_prop_types16.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: import_prop_types16.default.shape({
    clearIndicator: import_prop_types16.default.object,
    paper: import_prop_types16.default.object,
    popper: import_prop_types16.default.object,
    popupIndicator: import_prop_types16.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: chainPropTypes(import_prop_types16.default.any, (props) => props.multiple && props.defaultValue !== void 0 && !Array.isArray(props.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${props.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: import_prop_types16.default.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: import_prop_types16.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types16.default.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: import_prop_types16.default.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types16.default.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: import_prop_types16.default.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: import_prop_types16.default.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: import_prop_types16.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types16.default.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: import_prop_types16.default.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: import_prop_types16.default.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: import_prop_types16.default.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: import_prop_types16.default.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: import_prop_types16.default.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: import_prop_types16.default.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: import_prop_types16.default.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: import_prop_types16.default.bool,
  /**
   * The input value.
   */
  inputValue: import_prop_types16.default.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: import_prop_types16.default.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: integerPropType_default,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: import_prop_types16.default.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: import_prop_types16.default.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: import_prop_types16.default.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: import_prop_types16.default.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types16.default.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: import_prop_types16.default.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: import_prop_types16.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: import_prop_types16.default.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: import_prop_types16.default.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: import_prop_types16.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types16.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: import_prop_types16.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types16.default.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: import_prop_types16.default.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: import_prop_types16.default.string,
  /**
   * Array of options.
   */
  options: import_prop_types16.default.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: import_prop_types16.default.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: import_prop_types16.default.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: import_prop_types16.default.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: import_prop_types16.default.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: import_prop_types16.default.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: import_prop_types16.default.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: import_prop_types16.default.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: import_prop_types16.default.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: import_prop_types16.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["small", "medium"]), import_prop_types16.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types16.default.shape({
    clearIndicator: import_prop_types16.default.object,
    paper: import_prop_types16.default.object,
    popper: import_prop_types16.default.object,
    popupIndicator: import_prop_types16.default.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: chainPropTypes(import_prop_types16.default.any, (props) => props.multiple && props.value !== void 0 && !Array.isArray(props.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${props.value} was provided.`].join(`
`)) : null)
};
var Autocomplete_default = Autocomplete;

// src/Autocomplete/Autocomplete.tsx
import { jsx } from "react/jsx-runtime";
var Autocomplete3 = React36.forwardRef((props, ref) => /* @__PURE__ */ jsx(Autocomplete_default, { ref, ...props }));
export {
  Autocomplete3 as Autocomplete,
  autocompleteClasses_default as autocompleteClasses,
  createFilterOptions,
  getAutocompleteUtilityClass
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/styled-engine/index.js:
  (**
   * @mui/styled-engine v5.15.9
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/utils/index.js:
  (**
   * @mui/utils v5.15.9
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/material/index.js:
  (**
   * @mui/material v5.15.10
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
