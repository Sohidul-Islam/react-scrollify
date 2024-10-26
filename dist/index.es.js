import ee, { useState as re, useRef as le, useEffect as fe } from "react";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Te = { exports: {} }, Z = {};
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
  if (Me) return Z;
  Me = 1;
  var I = ee, A = Symbol.for("react.element"), P = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, v = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(R, y, p) {
    var m, E = {}, i = null, S = null;
    p !== void 0 && (i = "" + p), y.key !== void 0 && (i = "" + y.key), y.ref !== void 0 && (S = y.ref);
    for (m in y) b.call(y, m) && !C.hasOwnProperty(m) && (E[m] = y[m]);
    if (R && R.defaultProps) for (m in y = R.defaultProps, y) E[m] === void 0 && (E[m] = y[m]);
    return { $$typeof: A, type: R, key: i, ref: S, props: E, _owner: v.current };
  }
  return Z.Fragment = P, Z.jsx = k, Z.jsxs = k, Z;
}
var Q = {};
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
    var I = ee, A = Symbol.for("react.element"), P = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), R = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, D = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = T && e[T] || e[D];
      return typeof r == "function" ? r : null;
    }
    var f = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        j("error", e, t);
      }
    }
    function j(e, r, t) {
      {
        var a = f.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var O = !1, M = !1, N = !1, te = !1, q = !1, ne;
    ne = Symbol.for("react.module.reference");
    function de(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === C || q || e === v || e === p || e === m || te || e === S || O || M || N || typeof e == "object" && e !== null && (e.$$typeof === i || e.$$typeof === E || e.$$typeof === k || e.$$typeof === R || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function B(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
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
            return B(r) + ".Consumer";
          case k:
            var t = e;
            return B(t._context) + ".Provider";
          case y:
            return ve(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case i: {
            var c = e, l = c._payload, s = c._init;
            try {
              return w(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, L = 0, X, U, ae, n, W, $, we;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          X = console.log, U = console.info, ae = console.warn, n = console.error, W = console.group, $ = console.groupCollapsed, we = console.groupEnd;
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
        L++;
      }
    }
    function Ve() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: X
            }),
            info: F({}, e, {
              value: U
            }),
            warn: F({}, e, {
              value: ae
            }),
            error: F({}, e, {
              value: n
            }),
            group: F({}, e, {
              value: W
            }),
            groupCollapsed: F({}, e, {
              value: $
            }),
            groupEnd: F({}, e, {
              value: we
            })
          });
        }
        L < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = f.ReactCurrentDispatcher, ye;
    function oe(e, r, t) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            ye = a && a[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var me = !1, se;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Je();
    }
    function je(e, r) {
      if (!e || me)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      me = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = he.current, he.current = null, Ue();
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
            } catch (g) {
              a = g;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (g) {
              a = g;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            a = g;
          }
          e();
        }
      } catch (g) {
        if (g && a && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), _ = a.stack.split(`
`), d = o.length - 1, h = _.length - 1; d >= 1 && h >= 0 && o[d] !== _[h]; )
            h--;
          for (; d >= 1 && h >= 0; d--, h--)
            if (o[d] !== _[h]) {
              if (d !== 1 || h !== 1)
                do
                  if (d--, h--, h < 0 || o[d] !== _[h]) {
                    var x = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, x), x;
                  }
                while (d >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        me = !1, he.current = l, Ve(), Error.prepareStackTrace = c;
      }
      var K = e ? e.displayName || e.name : "", V = K ? oe(K) : "";
      return typeof e == "function" && se.set(e, V), V;
    }
    function Ge(e, r, t) {
      return je(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Ke(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case p:
          return oe("Suspense");
        case m:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ge(e.render);
          case E:
            return ie(e.type, r, t);
          case i: {
            var a = e, c = a._payload, l = a._init;
            try {
              return ie(l(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, xe = {}, Pe = f.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, c) {
      {
        var l = Function.call.bind(z);
        for (var s in e)
          if (l(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (ue(c), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof o), ue(null)), o instanceof Error && !(o.message in xe) && (xe[o.message] = !0, ue(c), u("Failed %s type: %s", t, o.message), ue(null));
          }
      }
    }
    var Be = Array.isArray;
    function be(e) {
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
    var H = f.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Oe, Ee;
    Ee = {};
    function Ze(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = w(H.current.type);
        Ee[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(H.current.type), e.ref), Ee[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          De || (De = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        var l, s = {}, o = null, _ = null;
        t !== void 0 && (ke(t), o = "" + t), Qe(r) && (ke(r.key), o = "" + r.key), Ze(r) && (_ = r.ref, er(r, c));
        for (l in r)
          z.call(r, l) && !He.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (o || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(s, h), _ && tr(s, h);
        }
        return nr(e, o, _, c, a, H.current, s);
      }
    }
    var pe = f.ReactCurrentOwner, Ae = f.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function Fe() {
      {
        if (pe.current) {
          var e = w(pe.current.type);
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
    var Ye = {};
    function sr(e) {
      {
        var r = Fe();
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
        if (Ye[t])
          return;
        Ye[t] = !0;
        var a = "";
        e && e._owner && e._owner !== pe.current && (a = " It was passed a child from " + w(e._owner.type) + "."), G(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), G(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            _e(a) && Ie(a, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Y(e);
          if (typeof c == "function" && c !== e.entries)
            for (var l = c.call(e), s; !(s = l.next()).done; )
              _e(s.value) && Ie(s.value, r);
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
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Re) {
          Re = !0;
          var c = w(r);
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
            G(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var We = {};
    function $e(e, r, t, a, c, l) {
      {
        var s = de(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = or();
          _ ? o += _ : o += Fe();
          var d;
          e === null ? d = "null" : be(e) ? d = "array" : e !== void 0 && e.$$typeof === A ? (d = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var h = ar(e, r, t, c, l);
        if (h == null)
          return h;
        if (s) {
          var x = r.children;
          if (x !== void 0)
            if (a)
              if (be(x)) {
                for (var K = 0; K < x.length; K++)
                  Le(x[K], e);
                Object.freeze && Object.freeze(x);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(x, e);
        }
        if (z.call(r, "key")) {
          var V = w(e), g = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), ge = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[V + ge]) {
            var vr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, V, vr, V), We[V + ge] = !0;
          }
        }
        return e === b ? ur(h) : ir(h), h;
      }
    }
    function cr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function lr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    Q.Fragment = b, Q.jsx = fr, Q.jsxs = dr;
  }()), Q;
}
process.env.NODE_ENV === "production" ? Te.exports = yr() : Te.exports = mr();
var J = Te.exports, br = typeof ce == "object" && ce && ce.Object === Object && ce, Er = typeof self == "object" && self && self.Object === Object && self;
br || Er || Function("return this")();
function pr({
  threshold: I = 0,
  root: A = null,
  rootMargin: P = "0%",
  freezeOnceVisible: b = !1,
  initialIsIntersecting: v = !1,
  onChange: C
} = {}) {
  var k;
  const [R, y] = re(null), [p, m] = re(() => ({
    isIntersecting: v,
    entry: void 0
  })), E = le();
  E.current = C;
  const i = ((k = p.entry) == null ? void 0 : k.isIntersecting) && b;
  fe(() => {
    if (!R || !("IntersectionObserver" in window) || i)
      return;
    let D;
    const Y = new IntersectionObserver(
      (f) => {
        const u = Array.isArray(Y.thresholds) ? Y.thresholds : [Y.thresholds];
        f.forEach((j) => {
          const O = j.isIntersecting && u.some((M) => j.intersectionRatio >= M);
          m({ isIntersecting: O, entry: j }), E.current && E.current(O, j), O && b && D && (D(), D = void 0);
        });
      },
      { threshold: I, root: A, rootMargin: P }
    );
    return Y.observe(R), () => {
      Y.disconnect();
    };
  }, [
    R,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(I),
    A,
    P,
    i,
    b
  ]);
  const S = le(null);
  fe(() => {
    var D;
    !R && ((D = p.entry) != null && D.target) && !b && !i && S.current !== p.entry.target && (S.current = p.entry.target, m({ isIntersecting: v, entry: void 0 }));
  }, [R, p.entry, b, i, v]);
  const T = [
    y,
    !!p.isIntersecting,
    p.entry
  ];
  return T.ref = T[0], T.isIntersecting = T[1], T.entry = T[2], T;
}
const _r = ({
  children: I,
  threshold: A = 0.7,
  onChangePage: P,
  data: b,
  pagination: v,
  isLoading: C = !1,
  styleRootElement: k,
  rootClassName: R,
  rootElementId: y,
  enableLoadMoreButton: p = !1,
  loadMoreButton: m,
  enablePulling: E,
  pulingOptions: i,
  onRefresh: S,
  loadingOverlay: T,
  onLoadMore: D,
  enableDataMemorization: Y = !0
}) => {
  const f = le(null), u = le(null), [j, O] = re(!1), [M, N] = re(0), te = 50, { isIntersecting: q = !1, ref: ne } = pr({
    threshold: A,
    onChange(n) {
      if (n && P && !p) {
        let W = Math.min(v.page + 1, v.totalPage);
        W = Math.max(1, W), P(W);
      }
    },
    root: (f == null ? void 0 : f.current) || void 0
  }), [de, ve] = re([]), B = (n) => {
    f.current && (i == null ? void 0 : i.position) !== "any" && f.current.scrollTop === (Number(i == null ? void 0 : i.position) || 0) && (u.current = n.touches[0].clientY), f.current && (i == null ? void 0 : i.position) === "any" && (u.current = n.touches[0].clientY);
  }, w = (n) => {
    if (u.current !== null) {
      const $ = n.touches[0].clientY - u.current;
      $ > 0 && (N($), O(!0));
    }
  }, F = () => {
    j && M > te && S && (S(), u.current = null), O(!1), N(0);
  }, L = (n) => {
    f.current && (i == null ? void 0 : i.position) !== "any" && f.current.scrollTop === (Number(i == null ? void 0 : i.position) || 0) && (u.current = n.clientY), f.current && (i == null ? void 0 : i.position) === "any" && (u.current = n.clientY);
  }, X = (n) => {
    if (u.current !== null) {
      const $ = n.clientY - u.current;
      $ > 0 && (N($), O(!0));
    }
  }, U = () => {
    j && M > te && S && S(), O(!1), N(0), u.current = null;
  };
  fe(() => {
    b && (v != null && v.page) && (C || ve((n) => v.page === 1 ? b : Y ? [...n, ...b] : b));
  }, [v == null ? void 0 : v.page, b, C]), fe(() => {
    const n = f.current;
    return n && E && (n == null || n.addEventListener("touchstart", B), n == null || n.addEventListener("touchmove", w), n == null || n.addEventListener("touchend", F), n.addEventListener("mousedown", L), n.addEventListener("mousemove", X), n.addEventListener("mouseup", U), n.addEventListener("mouseleave", U)), () => {
      n && E && (n.removeEventListener("touchstart", B), n.removeEventListener("touchmove", w), n.removeEventListener("touchend", F), n.removeEventListener("mousedown", L), n.removeEventListener("mousemove", X), n.removeEventListener("mouseup", U), n.removeEventListener("mouseleave", U));
    };
  }, [j, M, E, f.current]);
  const ae = ee.Children.map(I, (n) => ee.isValidElement(n) ? ee.cloneElement(n, { data: de }) : n);
  return /* @__PURE__ */ J.jsxs(
    "div",
    {
      ref: k ? f : null,
      id: y,
      className: R,
      onMouseLeave: () => {
        E && (O(!1), N(0), u.current = null);
      },
      style: {
        ...k,
        cursor: j ? "grabbing" : "default",
        transform: j ? "translateY(10px)" : "translateY(0px)",
        transition: "all 0.3s linear"
      },
      children: [
        ae,
        C && /* @__PURE__ */ J.jsx(J.Fragment, { children: T && T }),
        !C && /* @__PURE__ */ J.jsx(
          "div",
          {
            ref: ne,
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
              if (n = Math.max(1, n), D) {
                D(n);
                return;
              }
              P && P(n);
            },
            style: {
              opacity: q ? 1 : 0,
              pointerEvents: q ? void 0 : "none",
              transform: q ? "translateY(0px)" : "translateY(20px)",
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
  _r as ReactScrollify
};
//# sourceMappingURL=index.es.js.map
