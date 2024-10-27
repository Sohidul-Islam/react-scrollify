import re, { useState as te, useRef as fe, useEffect as de } from "react";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function yr() {
  if (Me) return Q;
  Me = 1;
  var L = re, A = Symbol.for("react.element"), P = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, v = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, y, p) {
    var m, b = {}, i = null, j = null;
    p !== void 0 && (i = "" + p), y.key !== void 0 && (i = "" + y.key), y.ref !== void 0 && (j = y.ref);
    for (m in y) f.call(y, m) && !C.hasOwnProperty(m) && (b[m] = y[m]);
    if (R && R.defaultProps) for (m in y = R.defaultProps, y) b[m] === void 0 && (b[m] = y[m]);
    return { $$typeof: A, type: R, key: i, ref: j, props: b, _owner: v.current };
  }
  return Q.Fragment = P, Q.jsx = k, Q.jsxs = k, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function mr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var L = re, A = Symbol.for("react.element"), P = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), R = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), w = Symbol.iterator, _ = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[_];
      return typeof r == "function" ? r : null;
    }
    var Y = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        E("error", e, t);
      }
    }
    function E(e, r, t) {
      {
        var a = Y.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var O = !1, I = !1, B = !1, N = !1, ne = !1, G;
    G = Symbol.for("react.module.reference");
    function ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === C || ne || e === v || e === p || e === m || N || e === j || O || I || B || typeof e == "object" && e !== null && (e.$$typeof === i || e.$$typeof === b || e.$$typeof === k || e.$$typeof === R || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function he(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case P:
          return "Portal";
        case C:
          return "Profiler";
        case v:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ae(r) + ".Consumer";
          case k:
            var t = e;
            return ae(t._context) + ".Provider";
          case y:
            return he(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case i: {
            var c = e, l = c._payload, s = c._init;
            try {
              return S(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, X, z, U, oe, n, $, M;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ue() {
      {
        if (W === 0) {
          X = console.log, z = console.info, U = console.warn, oe = console.error, n = console.group, $ = console.groupCollapsed, M = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ve() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: X
            }),
            info: D({}, e, {
              value: z
            }),
            warn: D({}, e, {
              value: U
            }),
            error: D({}, e, {
              value: oe
            }),
            group: D({}, e, {
              value: n
            }),
            groupCollapsed: D({}, e, {
              value: $
            }),
            groupEnd: D({}, e, {
              value: M
            })
          });
        }
        W < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = Y.ReactCurrentDispatcher, me;
    function se(e, r, t) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            me = a && a[1] || "";
          }
        return `
` + me + e;
      }
    }
    var be = !1, ie;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new Je();
    }
    function je(e, r) {
      if (!e || be)
        return "";
      {
        var t = ie.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      be = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = ye.current, ye.current = null, Ue();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (T) {
              a = T;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var o = T.stack.split(`
`), g = a.stack.split(`
`), d = o.length - 1, h = g.length - 1; d >= 1 && h >= 0 && o[d] !== g[h]; )
            h--;
          for (; d >= 1 && h >= 0; d--, h--)
            if (o[d] !== g[h]) {
              if (d !== 1 || h !== 1)
                do
                  if (d--, h--, h < 0 || o[d] !== g[h]) {
                    var x = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, x), x;
                  }
                while (d >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        be = !1, ye.current = l, Ve(), Error.prepareStackTrace = c;
      }
      var q = e ? e.displayName || e.name : "", V = q ? se(q) : "";
      return typeof e == "function" && ie.set(e, V), V;
    }
    function Ge(e, r, t) {
      return je(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Ke(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case p:
          return se("Suspense");
        case m:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ge(e.render);
          case b:
            return ue(e.type, r, t);
          case i: {
            var a = e, c = a._payload, l = a._init;
            try {
              return ue(l(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, xe = {}, Pe = Y.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, c) {
      {
        var l = Function.call.bind(H);
        for (var s in e)
          if (l(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var g = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (ce(c), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), ce(null)), o instanceof Error && !(o.message in xe) && (xe[o.message] = !0, ce(c), u("Failed %s type: %s", t, o.message), ce(null));
          }
      }
    }
    var Be = Array.isArray;
    function Ee(e) {
      return Be(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function ke(e) {
      if (ze(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Ce(e);
    }
    var Z = Y.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ae, pe;
    pe = {};
    function Ze(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && Z.current && r && Z.current.stateNode !== r) {
        var t = S(Z.current.type);
        pe[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(Z.current.type), e.ref), pe[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Ae || (Ae = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, c, l, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, a, c) {
      {
        var l, s = {}, o = null, g = null;
        t !== void 0 && (ke(t), o = "" + t), Qe(r) && (ke(r.key), o = "" + r.key), Ze(r) && (g = r.ref, er(r, c));
        for (l in r)
          H.call(r, l) && !He.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (o || g) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(s, h), g && tr(s, h);
        }
        return nr(e, o, g, c, a, Z.current, s);
      }
    }
    var Re = Y.ReactCurrentOwner, Fe = Y.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function Ye() {
      {
        if (Re.current) {
          var e = S(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var De = {};
    function sr(e) {
      {
        var r = Ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (De[t])
          return;
        De[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Re.current && (a = " It was passed a child from " + S(e._owner.type) + "."), K(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), K(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ge(a) && Ie(a, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = F(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), s; !(s = l.next()).done; )
              ge(s.value) && Ie(s.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var c = S(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            K(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    var We = {};
    function $e(e, r, t, a, c, l) {
      {
        var s = ve(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = or();
          g ? o += g : o += Ye();
          var d;
          e === null ? d = "null" : Ee(e) ? d = "array" : e !== void 0 && e.$$typeof === A ? (d = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var h = ar(e, r, t, c, l);
        if (h == null)
          return h;
        if (s) {
          var x = r.children;
          if (x !== void 0)
            if (a)
              if (Ee(x)) {
                for (var q = 0; q < x.length; q++)
                  Le(x[q], e);
                Object.freeze && Object.freeze(x);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(x, e);
        }
        if (H.call(r, "key")) {
          var V = S(e), T = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), Te = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[V + Te]) {
            var vr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, V, vr, V), We[V + Te] = !0;
          }
        }
        return e === f ? ur(h) : ir(h), h;
      }
    }
    function cr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    ee.Fragment = f, ee.jsx = fr, ee.jsxs = dr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? we.exports = yr() : we.exports = mr();
var J = we.exports, br = typeof le == "object" && le && le.Object === Object && le, Er = typeof self == "object" && self && self.Object === Object && self;
br || Er || Function("return this")();
function pr({
  threshold: L = 0,
  root: A = null,
  rootMargin: P = "0%",
  freezeOnceVisible: f = !1,
  initialIsIntersecting: v = !1,
  onChange: C
} = {}) {
  var k;
  const [R, y] = te(null), [p, m] = te(() => ({
    isIntersecting: v,
    entry: void 0
  })), b = fe();
  b.current = C;
  const i = ((k = p.entry) == null ? void 0 : k.isIntersecting) && f;
  de(() => {
    if (!R || !("IntersectionObserver" in window) || i)
      return;
    let _;
    const F = new IntersectionObserver(
      (Y) => {
        const u = Array.isArray(F.thresholds) ? F.thresholds : [F.thresholds];
        Y.forEach((E) => {
          const O = E.isIntersecting && u.some((I) => E.intersectionRatio >= I);
          m({ isIntersecting: O, entry: E }), b.current && b.current(O, E), O && f && _ && (_(), _ = void 0);
        });
      },
      { threshold: L, root: A, rootMargin: P }
    );
    return F.observe(R), () => {
      F.disconnect();
    };
  }, [
    R,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(L),
    A,
    P,
    i,
    f
  ]);
  const j = fe(null);
  de(() => {
    var _;
    !R && ((_ = p.entry) != null && _.target) && !f && !i && j.current !== p.entry.target && (j.current = p.entry.target, m({ isIntersecting: v, entry: void 0 }));
  }, [R, p.entry, f, i, v]);
  const w = [
    y,
    !!p.isIntersecting,
    p.entry
  ];
  return w.ref = w[0], w.isIntersecting = w[1], w.entry = w[2], w;
}
const _r = ({
  children: L,
  threshold: A = 0.7,
  onChangePage: P,
  data: f,
  pagination: v,
  isLoading: C = !1,
  styleRootElement: k,
  rootClassName: R,
  rootElementId: y,
  enableLoadMoreButton: p = !1,
  loadMoreButton: m,
  enablePulling: b,
  pulingOptions: i,
  onRefresh: j,
  loadingOverlay: w,
  onDataChange: _,
  onLoadMore: F,
  enableDataMemorization: Y = !0
}) => {
  const u = fe(null), E = fe(null), [O, I] = te(!1), [B, N] = te(0), ne = 50, { isIntersecting: G = !1, ref: ve } = pr({
    threshold: A,
    onChange(n) {
      if (n && P && !p) {
        let $ = Math.min(v.page + 1, v.totalPage);
        $ = Math.max(1, $), P($);
      }
    },
    root: (u == null ? void 0 : u.current) || void 0
  }), [he, ae] = te([]), S = (n) => {
    u.current && (i == null ? void 0 : i.position) !== "any" && u.current.scrollTop === (Number(i == null ? void 0 : i.position) || 0) && (E.current = n.touches[0].clientY), u.current && (i == null ? void 0 : i.position) === "any" && (E.current = n.touches[0].clientY);
  }, D = (n) => {
    if (E.current !== null) {
      const M = n.touches[0].clientY - E.current;
      M > 0 && (N(M), I(!0));
    }
  }, W = () => {
    O && B > ne && j && (j(), E.current = null), I(!1), N(0);
  }, X = (n) => {
    u.current && (i == null ? void 0 : i.position) !== "any" && u.current.scrollTop === (Number(i == null ? void 0 : i.position) || 0) && (E.current = n.clientY), u.current && (i == null ? void 0 : i.position) === "any" && (E.current = n.clientY);
  }, z = (n) => {
    if (E.current !== null) {
      const M = n.clientY - E.current;
      M > 0 && (N(M), I(!0));
    }
  }, U = () => {
    O && B > ne && j && j(), I(!1), N(0), E.current = null;
  };
  de(() => {
    f && (v != null && v.page) && (C || ae((n) => v.page === 1 ? (_ && _(f), f) : Y ? (_ && _(f), [...n, ...f]) : (_ && _(f), f)));
  }, [v == null ? void 0 : v.page, f, C]), de(() => {
    const n = u.current;
    return n && b && (n == null || n.addEventListener("touchstart", S), n == null || n.addEventListener("touchmove", D), n == null || n.addEventListener("touchend", W), n.addEventListener("mousedown", X), n.addEventListener("mousemove", z), n.addEventListener("mouseup", U), n.addEventListener("mouseleave", U)), () => {
      n && b && (n.removeEventListener("touchstart", S), n.removeEventListener("touchmove", D), n.removeEventListener("touchend", W), n.removeEventListener("mousedown", X), n.removeEventListener("mousemove", z), n.removeEventListener("mouseup", U), n.removeEventListener("mouseleave", U));
    };
  }, [O, B, b, u.current]);
  const oe = re.Children.map(L, (n) => re.isValidElement(n) ? re.cloneElement(n, { data: he }) : n);
  return /* @__PURE__ */ J.jsxs(
    "div",
    {
      ref: k ? u : null,
      id: y,
      className: R,
      onMouseLeave: () => {
        b && (I(!1), N(0), E.current = null);
      },
      style: {
        ...k,
        cursor: O ? "grabbing" : "default",
        transform: O ? "translateY(10px)" : "translateY(0px)",
        transition: "all 0.3s linear"
      },
      children: [
        oe,
        C && /* @__PURE__ */ J.jsx(J.Fragment, { children: w && w }),
        !C && /* @__PURE__ */ J.jsx(
          "div",
          {
            ref: ve,
            style: {
              // background: "red",
              height: "20px",
              width: "100%"
            },
            children: " "
          }
        ),
        p && /* @__PURE__ */ J.jsxs(
          "div",
          {
            onClick: () => {
              let n = Math.min(
                v.page + 1,
                v.totalPage
              );
              if (n = Math.max(1, n), F) {
                F(n);
                return;
              }
              P && P(n);
            },
            style: {
              opacity: G ? 1 : 0,
              pointerEvents: G ? void 0 : "none",
              transform: G ? "translateY(0px)" : "translateY(20px)",
              cursor: "pointer",
              transition: "all 0.3s linear"
            },
            children: [
              !m && /* @__PURE__ */ J.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ J.jsx(
                    "div",
                    {
                      style: {
                        textAlign: "center",
                        padding: "4px 10px",
                        background: "black",
                        color: "white",
                        borderRadius: "12px"
                      },
                      children: "Load more"
                    }
                  )
                }
              ),
              m
            ]
          }
        )
      ]
    }
  );
};
export {
  _r as ReactScrollPagify
};
//# sourceMappingURL=index.es.js.map
