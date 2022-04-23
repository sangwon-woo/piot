!(function (e, t) {
  "use strict";
  function n(e) {
    var t = e.length,
      n = ee.type(e);
    return (
      !ee.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e))))
    );
  }
  function r(e, n, r, i) {
    if (ee.acceptData(e)) {
      var a,
        o,
        s = ee.expando,
        u = "string" == typeof n,
        l = e.nodeType,
        c = l ? ee.cache : e,
        d = l ? e[s] : e[s] && s;
      if ((d && c[d] && (i || c[d].data)) || !u || r !== t)
        return (
          d || (l ? (e[s] = d = X.pop() || ee.guid++) : (d = s)),
          c[d] || ((c[d] = {}), l || (c[d].toJSON = ee.noop)),
          ("object" == typeof n || "function" == typeof n) &&
            (i
              ? (c[d] = ee.extend(c[d], n))
              : (c[d].data = ee.extend(c[d].data, n))),
          (a = c[d]),
          i || (a.data || (a.data = {}), (a = a.data)),
          r !== t && (a[ee.camelCase(n)] = r),
          u ? null == (o = a[n]) && (o = a[ee.camelCase(n)]) : (o = a),
          o
        );
    }
  }
  function i(e, t, n) {
    if (ee.acceptData(e)) {
      var r,
        i,
        a,
        s = e.nodeType,
        u = s ? ee.cache : e,
        l = s ? e[ee.expando] : ee.expando;
      if (u[l]) {
        if (t && (r = n ? u[l] : u[l].data)) {
          ee.isArray(t)
            ? (t = t.concat(ee.map(t, ee.camelCase)))
            : t in r
            ? (t = [t])
            : (t = (t = ee.camelCase(t)) in r ? [t] : t.split(" "));
          for (i = 0, a = t.length; a > i; i++) delete r[t[i]];
          if (!(n ? o : ee.isEmptyObject)(r)) return;
        }
        (n || (delete u[l].data, o(u[l]))) &&
          (s
            ? ee.cleanData([e], !0)
            : ee.support.deleteExpando || u != u.window
            ? delete u[l]
            : (u[l] = null));
      }
    }
  }
  function a(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(ge, "-$1").toLowerCase();
      if ("string" == typeof (r = e.getAttribute(i))) {
        try {
          r =
            "true" === r ||
            ("false" !== r &&
              ("null" === r
                ? null
                : +r + "" === r
                ? +r
                : me.test(r)
                ? ee.parseJSON(r)
                : r));
        } catch (e) {}
        ee.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function o(e) {
    var t;
    for (t in e)
      if (("data" !== t || !ee.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function s() {
    return !0;
  }
  function u() {
    return !1;
  }
  function l(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function c(e, t, n) {
    if (((t = t || 0), ee.isFunction(t)))
      return ee.grep(e, function (e, r) {
        return !!t.call(e, r, e) === n;
      });
    if (t.nodeType)
      return ee.grep(e, function (e) {
        return (e === t) === n;
      });
    if ("string" == typeof t) {
      var r = ee.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (qe.test(t)) return ee.filter(t, r, !n);
      t = ee.filter(t, r);
    }
    return ee.grep(e, function (e) {
      return ee.inArray(e, t) >= 0 === n;
    });
  }
  function d(e) {
    var t = Pe.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function f(e, t) {
    return (
      e.getElementsByTagName(t)[0] ||
      e.appendChild(e.ownerDocument.createElement(t))
    );
  }
  function p(e) {
    var t = e.getAttributeNode("type");
    return (e.type = (t && t.specified) + "/" + e.type), e;
  }
  function h(e) {
    var t = Qe.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function m(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      ee._data(n, "globalEval", !t || ee._data(t[r], "globalEval"));
  }
  function g(e, t) {
    if (1 === t.nodeType && ee.hasData(e)) {
      var n,
        r,
        i,
        a = ee._data(e),
        o = ee._data(t, a),
        s = a.events;
      if (s)
        for (n in (delete o.handle, (o.events = {}), s))
          for (r = 0, i = s[n].length; i > r; r++) ee.event.add(t, n, s[n][r]);
      o.data && (o.data = ee.extend({}, o.data));
    }
  }
  function v(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !ee.support.noCloneEvent && t[ee.expando])
      ) {
        for (i in (r = ee._data(t)).events) ee.removeEvent(t, i, r.handle);
        t.removeAttribute(ee.expando);
      }
      "script" === n && t.text !== e.text
        ? ((p(t).text = e.text), h(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ee.support.html5Clone &&
            e.innerHTML &&
            !ee.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && Ve.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function y(e, n) {
    var r,
      i,
      a = 0,
      o =
        e.getElementsByTagName !== t
          ? e.getElementsByTagName(n || "*")
          : e.querySelectorAll !== t
          ? e.querySelectorAll(n || "*")
          : t;
    if (!o)
      for (o = [], r = e.childNodes || e; null != (i = r[a]); a++)
        !n || ee.nodeName(i, n) ? o.push(i) : ee.merge(o, y(i, n));
    return n === t || (n && ee.nodeName(e, n)) ? ee.merge([e], o) : o;
  }
  function b(e) {
    Ve.test(e.type) && (e.defaultChecked = e.checked);
  }
  function x(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ht.length;
      i--;

    )
      if ((t = ht[i] + n) in e) return t;
    return r;
  }
  function w(e, t) {
    return (
      (e = t || e),
      "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
    );
  }
  function T(e, t) {
    for (var n, r = [], i = 0, a = e.length; a > i; i++)
      (n = e[i]).style &&
        ((r[i] = ee._data(n, "olddisplay")),
        t
          ? (r[i] || "none" !== n.style.display || (n.style.display = ""),
            "" === n.style.display &&
              w(n) &&
              (r[i] = ee._data(n, "olddisplay", N(n.nodeName))))
          : r[i] || w(n) || ee._data(n, "olddisplay", ee.css(n, "display")));
    for (i = 0; a > i; i++)
      (n = e[i]).style &&
        ((t && "none" !== n.style.display && "" !== n.style.display) ||
          (n.style.display = t ? r[i] || "" : "none"));
    return e;
  }
  function C(e, t, n) {
    var r = st.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function k(e, t, n, r, i) {
    for (
      var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
      4 > a;
      a += 2
    )
      "margin" === n && (o += ee.css(e, n + pt[a], !0, i)),
        r
          ? ("content" === n && (o -= ee.css(e, "padding" + pt[a], !0, i)),
            "margin" !== n &&
              (o -= ee.css(e, "border" + pt[a] + "Width", !0, i)))
          : ((o += ee.css(e, "padding" + pt[a], !0, i)),
            "padding" !== n &&
              (o += ee.css(e, "border" + pt[a] + "Width", !0, i)));
    return o;
  }
  function F(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      a = et(e),
      o =
        ee.support.boxSizing && "border-box" === ee.css(e, "boxSizing", !1, a);
    if (0 >= i || null == i) {
      if (
        ((0 > (i = Ke(e, t, a)) || null == i) && (i = e.style[t]), ut.test(i))
      )
        return i;
      (r = o && (ee.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + k(e, t, n || (o ? "border" : "content"), r, a) + "px";
  }
  function N(e) {
    var t = B,
      n = ct[e];
    return (
      n ||
        (("none" !== (n = E(e, t)) && n) ||
          ((t = (
            (tt = (
              tt ||
              ee("<iframe frameborder='0' width='0' height='0'/>").css(
                "cssText",
                "display:block !important"
              )
            ).appendTo(t.documentElement))[0].contentWindow ||
            tt[0].contentDocument
          ).document).write("<!doctype html><html><body>"),
          t.close(),
          (n = E(e, t)),
          tt.detach()),
        (ct[e] = n)),
      n
    );
  }
  function E(e, t) {
    var n = ee(t.createElement(e)).appendTo(t.body),
      r = ee.css(n[0], "display");
    return n.remove(), r;
  }
  function S(e, t, n, r) {
    var i;
    if (ee.isArray(t))
      ee.each(t, function (t, i) {
        n || gt.test(e)
          ? r(e, i)
          : S(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== ee.type(t)) r(e, t);
    else for (i in t) S(e + "[" + i + "]", t[i], n, r);
  }
  function D(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        a = t.toLowerCase().match(ne) || [];
      if (ee.isFunction(n))
        for (; (r = a[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function A(e, n, r, i) {
    function a(u) {
      var l;
      return (
        (o[u] = !0),
        ee.each(e[u] || [], function (e, u) {
          var c = u(n, r, i);
          return "string" != typeof c || s || o[c]
            ? s
              ? !(l = c)
              : t
            : (n.dataTypes.unshift(c), a(c), !1);
        }),
        l
      );
    }
    var o = {},
      s = e === Lt;
    return a(n.dataTypes[0]) || (!o["*"] && a("*"));
  }
  function j(e, n) {
    var r,
      i,
      a = ee.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]);
    return i && ee.extend(!0, e, i), e;
  }
  function L() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function _() {
    return (
      setTimeout(function () {
        Bt = t;
      }),
      (Bt = ee.now())
    );
  }
  function q(e, t, n) {
    var r,
      i,
      a = 0,
      o = Xt.length,
      s = ee.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Bt || _(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            a = 0,
            o = l.tweens.length;
          o > a;
          a++
        )
          l.tweens[a].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          1 > r && o ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: ee.extend({}, t),
        opts: ee.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Bt || _(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ee.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, a, o;
        for (n in e)
          if (
            ((r = ee.camelCase(n)),
            (i = t[r]),
            (a = e[n]),
            ee.isArray(a) && ((i = a[1]), (a = e[n] = a[0])),
            n !== r && ((e[r] = a), delete e[n]),
            (o = ee.cssHooks[r]) && ("expand" in o))
          )
            for (n in ((a = o.expand(a)), delete e[r], a))
              (n in e) || ((e[n] = a[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o > a;
      a++
    )
      if ((r = Xt[a].call(l, e, c, l.opts))) return r;
    return (
      (function (e, t) {
        ee.each(t, function (t, n) {
          for (
            var r = (Vt[t] || []).concat(Vt["*"]), i = 0, a = r.length;
            a > i;
            i++
          )
            if (r[i].call(e, t, n)) return;
        });
      })(l, c),
      ee.isFunction(l.opts.start) && l.opts.start.call(e, l),
      ee.fx.timer(ee.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function M(e, t, n, r, i) {
    return new M.prototype.init(e, t, n, r, i);
  }
  function H(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      r["margin" + (n = pt[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function P(e) {
    return ee.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var R,
    O,
    B = e.document,
    z = e.location,
    I = e.jQuery,
    W = e.$,
    $ = {},
    X = [],
    V = "1.9.0",
    U = X.concat,
    Y = X.push,
    Q = X.slice,
    G = X.indexOf,
    J = $.toString,
    Z = $.hasOwnProperty,
    K = V.trim,
    ee = function (e, t) {
      return new ee.fn.init(e, t, R);
    },
    te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = /\S+/g,
    re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ie = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    oe = /^[\],:{}\s]*$/,
    se = /(?:^|:|,)(?:\s*\[)+/g,
    ue = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ce = /^-ms-/,
    de = /-([\da-z])/gi,
    fe = function (e, t) {
      return t.toUpperCase();
    },
    pe = function () {
      B.addEventListener
        ? (B.removeEventListener("DOMContentLoaded", pe, !1), ee.ready())
        : "complete" === B.readyState &&
          (B.detachEvent("onreadystatechange", pe), ee.ready());
    };
  (ee.fn = ee.prototype =
    {
      jquery: V,
      constructor: ee,
      init: function (e, n, r) {
        var i, a;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            !(i =
              "<" === e.charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              e.length >= 3
                ? [null, e, null]
                : ie.exec(e)) ||
            (!i[1] && n)
          )
            return !n || n.jquery
              ? (n || r).find(e)
              : this.constructor(n).find(e);
          if (i[1]) {
            if (
              ((n = n instanceof ee ? n[0] : n),
              ee.merge(
                this,
                ee.parseHTML(
                  i[1],
                  n && n.nodeType ? n.ownerDocument || n : B,
                  !0
                )
              ),
              ae.test(i[1]) && ee.isPlainObject(n))
            )
              for (i in n)
                ee.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
            return this;
          }
          if ((a = B.getElementById(i[2])) && a.parentNode) {
            if (a.id !== i[2]) return r.find(e);
            (this.length = 1), (this[0] = a);
          }
          return (this.context = B), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : ee.isFunction(e)
          ? r.ready(e)
          : (e.selector !== t &&
              ((this.selector = e.selector), (this.context = e.context)),
            ee.makeArray(e, this));
      },
      selector: "",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return Q.call(this);
      },
      get: function (e) {
        return null == e
          ? this.toArray()
          : 0 > e
          ? this[this.length + e]
          : this[e];
      },
      pushStack: function (e) {
        var t = ee.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return ee.each(this, e, t);
      },
      ready: function (e) {
        return ee.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(Q.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      map: function (e) {
        return this.pushStack(
          ee.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: Y,
      sort: [].sort,
      splice: [].splice,
    }),
    (ee.fn.init.prototype = ee.fn),
    (ee.extend = ee.fn.extend =
      function () {
        var e,
          n,
          r,
          i,
          a,
          o,
          s = arguments[0] || {},
          u = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (u = 2)),
            "object" == typeof s || ee.isFunction(s) || (s = {}),
            l === u && ((s = this), --u);
          l > u;
          u++
        )
          if (null != (e = arguments[u]))
            for (n in e)
              (r = s[n]),
                s !== (i = e[n]) &&
                  (c && i && (ee.isPlainObject(i) || (a = ee.isArray(i)))
                    ? (a
                        ? ((a = !1), (o = r && ee.isArray(r) ? r : []))
                        : (o = r && ee.isPlainObject(r) ? r : {}),
                      (s[n] = ee.extend(c, o, i)))
                    : i !== t && (s[n] = i));
        return s;
      }),
    ee.extend({
      noConflict: function (t) {
        return (
          e.$ === ee && (e.$ = W), t && e.jQuery === ee && (e.jQuery = I), ee
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ee.readyWait++ : ee.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--ee.readyWait : !ee.isReady) {
          if (!B.body) return setTimeout(ee.ready);
          (ee.isReady = !0),
            (!0 !== e && --ee.readyWait > 0) ||
              (O.resolveWith(B, [ee]),
              ee.fn.trigger && ee(B).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === ee.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === ee.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? $[J.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        if (!e || "object" !== ee.type(e) || e.nodeType || ee.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !Z.call(e, "constructor") &&
            !Z.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        var n;
        for (n in e);
        return n === t || Z.call(e, n);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function (e) {
        throw Error(e);
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || B);
        var r = ae.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = ee.buildFragment([e], t, i)),
            i && ee(i).remove(),
            ee.merge([], r.childNodes));
      },
      parseJSON: function (n) {
        return e.JSON && e.JSON.parse
          ? e.JSON.parse(n)
          : null === n
          ? n
          : "string" == typeof n &&
            (n = ee.trim(n)) &&
            oe.test(n.replace(ue, "@").replace(le, "]").replace(se, ""))
          ? Function("return " + n)()
          : (ee.error("Invalid JSON: " + n), t);
      },
      parseXML: function (n) {
        var r;
        if (!n || "string" != typeof n) return null;
        try {
          e.DOMParser
            ? (r = new DOMParser().parseFromString(n, "text/xml"))
            : (((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              r.loadXML(n));
        } catch (e) {
          r = t;
        }
        return (
          (r &&
            r.documentElement &&
            !r.getElementsByTagName("parsererror").length) ||
            ee.error("Invalid XML: " + n),
          r
        );
      },
      noop: function () {},
      globalEval: function (t) {
        t &&
          ee.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(ce, "ms-").replace(de, fe);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i = 0,
          a = e.length,
          o = n(e);
        if (r) {
          if (o) for (; a > i && !1 !== t.apply(e[i], r); i++);
          else for (i in e) if (!1 === t.apply(e[i], r)) break;
        } else if (o) for (; a > i && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim:
        K && !K.call("\ufeff ")
          ? function (e) {
              return null == e ? "" : K.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(re, "");
            },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? ee.merge(r, "string" == typeof e ? [e] : e)
              : Y.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (G) return G.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, n) {
        var r = n.length,
          i = e.length,
          a = 0;
        if ("number" == typeof r) for (; r > a; a++) e[i++] = n[a];
        else for (; n[a] !== t; ) e[i++] = n[a++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        var r = [],
          i = 0,
          a = e.length;
        for (n = !!n; a > i; i++) n !== !!t(e[i], i) && r.push(e[i]);
        return r;
      },
      map: function (e, t, r) {
        var i,
          a = 0,
          o = e.length,
          s = [];
        if (n(e))
          for (; o > a; a++) null != (i = t(e[a], a, r)) && (s[s.length] = i);
        else for (a in e) null != (i = t(e[a], a, r)) && (s[s.length] = i);
        return U.apply([], s);
      },
      guid: 1,
      proxy: function (e, n) {
        var r, i, a;
        return (
          "string" == typeof n && ((r = e[n]), (n = e), (e = r)),
          ee.isFunction(e)
            ? ((i = Q.call(arguments, 2)),
              ((a = function () {
                return e.apply(n || this, i.concat(Q.call(arguments)));
              }).guid = e.guid =
                e.guid || ee.guid++),
              a)
            : t
        );
      },
      access: function (e, n, r, i, a, o, s) {
        var u = 0,
          l = e.length,
          c = null == r;
        if ("object" === ee.type(r))
          for (u in ((a = !0), r)) ee.access(e, n, u, r[u], !0, o, s);
        else if (
          i !== t &&
          ((a = !0),
          ee.isFunction(i) || (s = !0),
          c &&
            (s
              ? (n.call(e, i), (n = null))
              : ((c = n),
                (n = function (e, t, n) {
                  return c.call(ee(e), n);
                }))),
          n)
        )
          for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
        return a ? e : c ? n.call(e) : l ? n(e[0], r) : o;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (ee.ready.promise = function (t) {
      if (!O)
        if (((O = ee.Deferred()), "complete" === B.readyState))
          setTimeout(ee.ready);
        else if (B.addEventListener)
          B.addEventListener("DOMContentLoaded", pe, !1),
            e.addEventListener("load", ee.ready, !1);
        else {
          B.attachEvent("onreadystatechange", pe),
            e.attachEvent("onload", ee.ready);
          var n = !1;
          try {
            n = null == e.frameElement && B.documentElement;
          } catch (e) {}
          n &&
            n.doScroll &&
            (function e() {
              if (!ee.isReady) {
                try {
                  n.doScroll("left");
                } catch (t) {
                  return setTimeout(e, 50);
                }
                ee.ready();
              }
            })();
        }
      return O.promise(t);
    }),
    ee.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        $["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (R = ee(B));
  var he = {};
  (ee.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? he[e] ||
          (function (e) {
            var t = (he[e] = {});
            return (
              ee.each(e.match(ne) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : ee.extend({}, e);
    var n,
      r,
      i,
      a,
      o,
      s,
      u = [],
      l = !e.once && [],
      c = function (t) {
        for (
          n = e.memory && t, r = !0, s = a || 0, a = 0, o = u.length, i = !0;
          u && o > s;
          s++
        )
          if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) {
            n = !1;
            break;
          }
        (i = !1),
          u && (l ? l.length && c(l.shift()) : n ? (u = []) : d.disable());
      },
      d = {
        add: function () {
          if (u) {
            var t = u.length;
            (function t(n) {
              ee.each(n, function (n, r) {
                var i = ee.type(r);
                "function" === i
                  ? (e.unique && d.has(r)) || u.push(r)
                  : r && r.length && "string" !== i && t(r);
              });
            })(arguments),
              i ? (o = u.length) : n && ((a = t), c(n));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              ee.each(arguments, function (e, t) {
                for (var n; (n = ee.inArray(t, u, n)) > -1; )
                  u.splice(n, 1), i && (o >= n && o--, s >= n && s--);
              }),
            this
          );
        },
        has: function (e) {
          return ee.inArray(e, u) > -1;
        },
        empty: function () {
          return (u = []), this;
        },
        disable: function () {
          return (u = l = n = t), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (l = t), n || d.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return (
            (t = [e, (t = t || []).slice ? t.slice() : t]),
            !u || (r && !l) || (i ? l.push(t) : c(t)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return d;
  }),
    ee.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", ee.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ee.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ee.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return ee
                .Deferred(function (n) {
                  ee.each(t, function (t, a) {
                    var o = a[0],
                      s = ee.isFunction(e[t]) && e[t];
                    i[a[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && ee.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[o + "With"](
                            this === r ? n.promise() : this,
                            s ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ee.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          ee.each(t, function (e, a) {
            var o = a[2],
              s = a[3];
            (r[a[1]] = o.add),
              s &&
                o.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[a[0]] = function () {
                return i[a[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[a[0] + "With"] = o.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          a = Q.call(arguments),
          o = a.length,
          s = 1 !== o || (e && ee.isFunction(e.promise)) ? o : 0,
          u = 1 === s ? e : ee.Deferred(),
          l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? Q.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
            };
          };
        if (o > 1)
          for (t = Array(o), n = Array(o), r = Array(o); o > i; i++)
            a[i] && ee.isFunction(a[i].promise)
              ? a[i]
                  .promise()
                  .done(l(i, r, a))
                  .fail(u.reject)
                  .progress(l(i, n, t))
              : --s;
        return s || u.resolveWith(r, a), u.promise();
      },
    }),
    (ee.support = (function () {
      var n,
        r,
        i,
        a,
        o,
        s,
        u,
        l,
        c,
        d,
        f = B.createElement("div");
      if (
        (f.setAttribute("className", "t"),
        (f.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (r = f.getElementsByTagName("*")),
        (i = f.getElementsByTagName("a")[0]),
        !r || !i || !r.length)
      )
        return {};
      (o = (a = B.createElement("select")).appendChild(
        B.createElement("option")
      )),
        (s = f.getElementsByTagName("input")[0]),
        (i.style.cssText = "top:1px;float:left;opacity:.5"),
        (n = {
          getSetAttribute: "t" !== f.className,
          leadingWhitespace: 3 === f.firstChild.nodeType,
          tbody: !f.getElementsByTagName("tbody").length,
          htmlSerialize: !!f.getElementsByTagName("link").length,
          style: /top/.test(i.getAttribute("style")),
          hrefNormalized: "/a" === i.getAttribute("href"),
          opacity: /^0.5/.test(i.style.opacity),
          cssFloat: !!i.style.cssFloat,
          checkOn: !!s.value,
          optSelected: o.selected,
          enctype: !!B.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === B.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (s.checked = !0),
        (n.noCloneChecked = s.cloneNode(!0).checked),
        (a.disabled = !0),
        (n.optDisabled = !o.disabled);
      try {
        delete f.test;
      } catch (e) {
        n.deleteExpando = !1;
      }
      for (d in ((s = B.createElement("input")).setAttribute("value", ""),
      (n.input = "" === s.getAttribute("value")),
      (s.value = "t"),
      s.setAttribute("type", "radio"),
      (n.radioValue = "t" === s.value),
      s.setAttribute("checked", "t"),
      s.setAttribute("name", "t"),
      (u = B.createDocumentFragment()).appendChild(s),
      (n.appendChecked = s.checked),
      (n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked),
      f.attachEvent &&
        (f.attachEvent("onclick", function () {
          n.noCloneEvent = !1;
        }),
        f.cloneNode(!0).click()),
      { submit: !0, change: !0, focusin: !0 }))
        f.setAttribute((l = "on" + d), "t"),
          (n[d + "Bubbles"] = l in e || !1 === f.attributes[l].expando);
      return (
        (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (n.clearCloneStyle = "content-box" === f.style.backgroundClip),
        ee(function () {
          var r,
            i,
            a,
            o =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            s = B.getElementsByTagName("body")[0];
          s &&
            (((r = B.createElement("div")).style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            s.appendChild(r).appendChild(f),
            (f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((a = f.getElementsByTagName("td"))[0].style.cssText =
              "padding:0;margin:0;border:0;display:none"),
            (c = 0 === a[0].offsetHeight),
            (a[0].style.display = ""),
            (a[1].style.display = "none"),
            (n.reliableHiddenOffsets = c && 0 === a[0].offsetHeight),
            (f.innerHTML = ""),
            (f.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (n.boxSizing = 4 === f.offsetWidth),
            (n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop),
            e.getComputedStyle &&
              ((n.pixelPosition =
                "1%" !== (e.getComputedStyle(f, null) || {}).top),
              (n.boxSizingReliable =
                "4px" ===
                (e.getComputedStyle(f, null) || { width: "4px" }).width),
              ((i = f.appendChild(B.createElement("div"))).style.cssText =
                f.style.cssText =
                  o),
              (i.style.marginRight = i.style.width = "0"),
              (f.style.width = "1px"),
              (n.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(i, null) || {}).marginRight
              ))),
            f.style.zoom !== t &&
              ((f.innerHTML = ""),
              (f.style.cssText =
                o + "width:1px;padding:1px;display:inline;zoom:1"),
              (n.inlineBlockNeedsLayout = 3 === f.offsetWidth),
              (f.style.display = "block"),
              (f.innerHTML = "<div></div>"),
              (f.firstChild.style.width = "5px"),
              (n.shrinkWrapBlocks = 3 !== f.offsetWidth),
              (s.style.zoom = 1)),
            s.removeChild(r),
            (r = f = a = i = null));
        }),
        (r = a = u = o = i = s = null),
        n
      );
    })());
  var me = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    ge = /([A-Z])/g;
  ee.extend({
    cache: {},
    expando: "jQuery" + (V + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? ee.cache[e[ee.expando]] : e[ee.expando]) && !o(e)
      );
    },
    data: function (e, t, n) {
      return r(e, t, n, !1);
    },
    removeData: function (e, t) {
      return i(e, t, !1);
    },
    _data: function (e, t, n) {
      return r(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return i(e, t, !0);
    },
    acceptData: function (e) {
      var t = e.nodeName && ee.noData[e.nodeName.toLowerCase()];
      return !t || (!0 !== t && e.getAttribute("classid") === t);
    },
  }),
    ee.fn.extend({
      data: function (e, n) {
        var r,
          i,
          o = this[0],
          s = 0,
          u = null;
        if (e === t) {
          if (
            this.length &&
            ((u = ee.data(o)), 1 === o.nodeType && !ee._data(o, "parsedAttrs"))
          ) {
            for (r = o.attributes; r.length > s; s++)
              (i = r[s].name).indexOf("data-") ||
                ((i = ee.camelCase(i.substring(5))), a(o, i, u[i]));
            ee._data(o, "parsedAttrs", !0);
          }
          return u;
        }
        return "object" == typeof e
          ? this.each(function () {
              ee.data(this, e);
            })
          : ee.access(
              this,
              function (n) {
                return n === t
                  ? o
                    ? a(o, e, ee.data(o, e))
                    : null
                  : (this.each(function () {
                      ee.data(this, e, n);
                    }),
                    t);
              },
              null,
              n,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          ee.removeData(this, e);
        });
      },
    }),
    ee.extend({
      queue: function (e, n, r) {
        var i;
        return e
          ? ((n = (n || "fx") + "queue"),
            (i = ee._data(e, n)),
            r &&
              (!i || ee.isArray(r)
                ? (i = ee._data(e, n, ee.makeArray(r)))
                : i.push(r)),
            i || [])
          : t;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ee.queue(e, t),
          r = n.length,
          i = n.shift(),
          a = ee._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          (a.cur = i),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            i.call(
              e,
              function () {
                ee.dequeue(e, t);
              },
              a
            )),
          !r && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ee._data(e, n) ||
          ee._data(e, n, {
            empty: ee.Callbacks("once memory").add(function () {
              ee._removeData(e, t + "queue"), ee._removeData(e, n);
            }),
          })
        );
      },
    }),
    ee.fn.extend({
      queue: function (e, n) {
        var r = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), r--),
          r > arguments.length
            ? ee.queue(this[0], e)
            : n === t
            ? this
            : this.each(function () {
                var t = ee.queue(this, e, n);
                ee._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && ee.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ee.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        return (
          (e = (ee.fx && ee.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, n) {
        var r,
          i = 1,
          a = ee.Deferred(),
          o = this,
          s = this.length,
          u = function () {
            --i || a.resolveWith(o, [o]);
          };
        for ("string" != typeof e && ((n = e), (e = t)), e = e || "fx"; s--; )
          (r = ee._data(o[s], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(u));
        return u(), a.promise(n);
      },
    });
  var ve,
    ye,
    be = /[\t\r\n]/g,
    xe = /\r/g,
    we = /^(?:input|select|textarea|button|object)$/i,
    Te = /^(?:a|area)$/i,
    Ce =
      /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    ke = /^(?:checked|selected)$/i,
    Fe = ee.support.getSetAttribute,
    Ne = ee.support.input;
  ee.fn.extend({
    attr: function (e, t) {
      return ee.access(this, ee.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ee.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return ee.access(this, ee.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = ee.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = t), delete this[e];
          } catch (e) {}
        })
      );
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        a,
        o = 0,
        s = this.length,
        u = "string" == typeof e && e;
      if (ee.isFunction(e))
        return this.each(function (t) {
          ee(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(ne) || []; s > o; o++)
          if (
            (r =
              1 === (n = this[o]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(be, " ") : " "))
          ) {
            for (a = 0; (i = t[a++]); )
              0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = ee.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        a,
        o = 0,
        s = this.length,
        u = 0 === arguments.length || ("string" == typeof e && e);
      if (ee.isFunction(e))
        return this.each(function (t) {
          ee(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(ne) || []; s > o; o++)
          if (
            (r =
              1 === (n = this[o]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(be, " ") : ""))
          ) {
            for (a = 0; (i = t[a++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            n.className = e ? ee.trim(r) : "";
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return ee.isFunction(e)
        ? this.each(function (n) {
            ee(this).toggleClass(e.call(this, n, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var i, a = 0, o = ee(this), s = t, u = e.match(ne) || [];
                (i = u[a++]);

              )
                (s = r ? s : !o.hasClass(i)),
                  o[s ? "addClass" : "removeClass"](i);
            else
              ("undefined" === n || "boolean" === n) &&
                (this.className &&
                  ee._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === e
                    ? ""
                    : ee._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(be, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        a = this[0];
      return arguments.length
        ? ((i = ee.isFunction(e)),
          this.each(function (r) {
            var a,
              o = ee(this);
            1 === this.nodeType &&
              (null == (a = i ? e.call(this, r, o.val()) : e)
                ? (a = "")
                : "number" == typeof a
                ? (a += "")
                : ee.isArray(a) &&
                  (a = ee.map(a, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((n =
                ee.valHooks[this.type] ||
                ee.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                n.set(this, a, "value") !== t) ||
                (this.value = a));
          }))
        : a
        ? (n = ee.valHooks[a.type] || ee.valHooks[a.nodeName.toLowerCase()]) &&
          "get" in n &&
          (r = n.get(a, "value")) !== t
          ? r
          : "string" == typeof (r = a.value)
          ? r.replace(xe, "")
          : null == r
          ? ""
          : r
        : void 0;
    },
  }),
    ee.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                a = "select-one" === e.type || 0 > i,
                o = a ? null : [],
                s = a ? i + 1 : r.length,
                u = 0 > i ? s : a ? i : 0;
              s > u;
              u++
            )
              if (
                !(
                  (!(n = r[u]).selected && u !== i) ||
                  (ee.support.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    ee.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = ee(n).val()), a)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            var n = ee.makeArray(t);
            return (
              ee(e)
                .find("option")
                .each(function () {
                  this.selected = ee.inArray(ee(this).val(), n) >= 0;
                }),
              n.length || (e.selectedIndex = -1),
              n
            );
          },
        },
      },
      attr: function (e, n, r) {
        var i,
          a,
          o,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return e.getAttribute === t
            ? ee.prop(e, n, r)
            : ((o = 1 !== s || !ee.isXMLDoc(e)) &&
                ((n = n.toLowerCase()),
                (a = ee.attrHooks[n] || (Ce.test(n) ? ye : ve))),
              r === t
                ? a && o && "get" in a && null !== (i = a.get(e, n))
                  ? i
                  : (e.getAttribute !== t && (i = e.getAttribute(n)),
                    null == i ? t : i)
                : null !== r
                ? a && o && "set" in a && (i = a.set(e, r, n)) !== t
                  ? i
                  : (e.setAttribute(n, r + ""), r)
                : (ee.removeAttr(e, n), t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          a = t && t.match(ne);
        if (a && 1 === e.nodeType)
          for (; (n = a[i++]); )
            (r = ee.propFix[n] || n),
              Ce.test(n)
                ? !Fe && ke.test(n)
                  ? (e[ee.camelCase("default-" + n)] = e[r] = !1)
                  : (e[r] = !1)
                : ee.attr(e, n, ""),
              e.removeAttribute(Fe ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !ee.support.radioValue &&
              "radio" === t &&
              ee.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, n, r) {
        var i,
          a,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 !== o || !ee.isXMLDoc(e)) &&
              ((n = ee.propFix[n] || n), (a = ee.propHooks[n])),
            r !== t
              ? a && "set" in a && (i = a.set(e, r, n)) !== t
                ? i
                : (e[n] = r)
              : a && "get" in a && null !== (i = a.get(e, n))
              ? i
              : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var n = e.getAttributeNode("tabindex");
            return n && n.specified
              ? parseInt(n.value, 10)
              : we.test(e.nodeName) || (Te.test(e.nodeName) && e.href)
              ? 0
              : t;
          },
        },
      },
    }),
    (ye = {
      get: function (e, n) {
        var r = ee.prop(e, n),
          i = "boolean" == typeof r && e.getAttribute(n),
          a =
            "boolean" == typeof r
              ? Ne && Fe
                ? null != i
                : ke.test(n)
                ? e[ee.camelCase("default-" + n)]
                : !!i
              : e.getAttributeNode(n);
        return a && !1 !== a.value ? n.toLowerCase() : t;
      },
      set: function (e, t, n) {
        return (
          !1 === t
            ? ee.removeAttr(e, n)
            : (Ne && Fe) || !ke.test(n)
            ? e.setAttribute((!Fe && ee.propFix[n]) || n, n)
            : (e[ee.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    (Ne && Fe) ||
      (ee.attrHooks.value = {
        get: function (e, n) {
          var r = e.getAttributeNode(n);
          return ee.nodeName(e, "input")
            ? e.defaultValue
            : r && r.specified
            ? r.value
            : t;
        },
        set: function (e, n, r) {
          return ee.nodeName(e, "input")
            ? ((e.defaultValue = n), t)
            : ve && ve.set(e, n, r);
        },
      }),
    Fe ||
      ((ve = ee.valHooks.button =
        {
          get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r &&
              ("id" === n || "name" === n || "coords" === n
                ? "" !== r.value
                : r.specified)
              ? r.value
              : t;
          },
          set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
              (i.value = n += ""),
              "value" === r || n === e.getAttribute(r) ? n : t
            );
          },
        }),
      (ee.attrHooks.contenteditable = {
        get: ve.get,
        set: function (e, t, n) {
          ve.set(e, "" !== t && t, n);
        },
      }),
      ee.each(["width", "height"], function (e, n) {
        ee.attrHooks[n] = ee.extend(ee.attrHooks[n], {
          set: function (e, r) {
            return "" === r ? (e.setAttribute(n, "auto"), r) : t;
          },
        });
      })),
    ee.support.hrefNormalized ||
      (ee.each(["href", "src", "width", "height"], function (e, n) {
        ee.attrHooks[n] = ee.extend(ee.attrHooks[n], {
          get: function (e) {
            var r = e.getAttribute(n, 2);
            return null == r ? t : r;
          },
        });
      }),
      ee.each(["href", "src"], function (e, t) {
        ee.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      })),
    ee.support.style ||
      (ee.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || t;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      }),
    ee.support.optSelected ||
      (ee.propHooks.selected = ee.extend(ee.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      })),
    ee.support.enctype || (ee.propFix.enctype = "encoding"),
    ee.support.checkOn ||
      ee.each(["radio", "checkbox"], function () {
        ee.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
    ee.each(["radio", "checkbox"], function () {
      ee.valHooks[this] = ee.extend(ee.valHooks[this], {
        set: function (e, n) {
          return ee.isArray(n)
            ? (e.checked = ee.inArray(ee(e).val(), n) >= 0)
            : t;
        },
      });
    });
  var Ee = /^(?:input|select|textarea)$/i,
    Se = /^key/,
    De = /^(?:mouse|contextmenu)|click/,
    Ae = /^(?:focusinfocus|focusoutblur)$/,
    je = /^([^.]*)(?:\.(.+)|)$/;
  (ee.event = {
    global: {},
    add: function (e, n, r, i, a) {
      var o,
        s,
        u,
        l,
        c,
        d,
        f,
        p,
        h,
        m,
        g,
        v = 3 !== e.nodeType && 8 !== e.nodeType && ee._data(e);
      if (v) {
        for (
          r.handler && ((r = (o = r).handler), (a = o.selector)),
            r.guid || (r.guid = ee.guid++),
            (l = v.events) || (l = v.events = {}),
            (s = v.handle) ||
              ((s = v.handle =
                function (e) {
                  return ee === t || (e && ee.event.triggered === e.type)
                    ? t
                    : ee.event.dispatch.apply(s.elem, arguments);
                }).elem = e),
            c = (n = (n || "").match(ne) || [""]).length;
          c--;

        )
          (h = g = (u = je.exec(n[c]) || [])[1]),
            (m = (u[2] || "").split(".").sort()),
            (f = ee.event.special[h] || {}),
            (h = (a ? f.delegateType : f.bindType) || h),
            (f = ee.event.special[h] || {}),
            (d = ee.extend(
              {
                type: h,
                origType: g,
                data: i,
                handler: r,
                guid: r.guid,
                selector: a,
                needsContext: a && ee.expr.match.needsContext.test(a),
                namespace: m.join("."),
              },
              o
            )),
            (p = l[h]) ||
              (((p = l[h] = []).delegateCount = 0),
              (f.setup && !1 !== f.setup.call(e, i, m, s)) ||
                (e.addEventListener
                  ? e.addEventListener(h, s, !1)
                  : e.attachEvent && e.attachEvent("on" + h, s))),
            f.add &&
              (f.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
            a ? p.splice(p.delegateCount++, 0, d) : p.push(d),
            (ee.event.global[h] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var a,
        o,
        s,
        u,
        l,
        c,
        d,
        f,
        p,
        h,
        m,
        g = ee.hasData(e) && ee._data(e);
      if (g && (u = g.events)) {
        for (l = (t = (t || "").match(ne) || [""]).length; l--; )
          if (
            ((p = m = (s = je.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = ee.event.special[p] || {},
                f = u[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                s =
                  s[2] &&
                  RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = a = f.length;
              a--;

            )
              (c = f[a]),
                (!i && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (f.splice(a, 1),
                  c.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, c));
            o &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                ee.removeEvent(e, p, g.handle),
              delete u[p]);
          } else for (p in u) ee.event.remove(e, p + t[l], n, r, !0);
        ee.isEmptyObject(u) && (delete g.handle, ee._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, a) {
      var o,
        s,
        u,
        l,
        c,
        d,
        f,
        p = [i || B],
        h = n.type || n,
        m = n.namespace ? n.namespace.split(".") : [];
      if (
        ((s = u = i = i || B),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Ae.test(h + ee.event.triggered) &&
          (h.indexOf(".") >= 0 &&
            ((m = h.split(".")), (h = m.shift()), m.sort()),
          (c = 0 > h.indexOf(":") && "on" + h),
          ((n = n[ee.expando]
            ? n
            : new ee.Event(h, "object" == typeof n && n)).isTrigger = !0),
          (n.namespace = m.join(".")),
          (n.namespace_re = n.namespace
            ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = t),
          n.target || (n.target = i),
          (r = null == r ? [n] : ee.makeArray(r, [n])),
          (f = ee.event.special[h] || {}),
          a || !f.trigger || !1 !== f.trigger.apply(i, r)))
      ) {
        if (!a && !f.noBubble && !ee.isWindow(i)) {
          for (
            l = f.delegateType || h, Ae.test(l + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (u = s);
          u === (i.ownerDocument || B) &&
            p.push(u.defaultView || u.parentWindow || e);
        }
        for (o = 0; (s = p[o++]) && !n.isPropagationStopped(); )
          (n.type = o > 1 ? l : f.bindType || h),
            (d =
              (ee._data(s, "events") || {})[n.type] && ee._data(s, "handle")) &&
              d.apply(s, r),
            (d = c && s[c]) &&
              ee.acceptData(s) &&
              d.apply &&
              !1 === d.apply(s, r) &&
              n.preventDefault();
        if (
          ((n.type = h),
          !(
            a ||
            n.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(i.ownerDocument, r)) ||
            ("click" === h && ee.nodeName(i, "a"))
          ) &&
            ee.acceptData(i) &&
            c &&
            i[h] &&
            !ee.isWindow(i))
        ) {
          (u = i[c]) && (i[c] = null), (ee.event.triggered = h);
          try {
            i[h]();
          } catch (e) {}
          (ee.event.triggered = t), u && (i[c] = u);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = ee.event.fix(e);
      var n,
        r,
        i,
        a,
        o,
        s = [],
        u = Q.call(arguments),
        l = (ee._data(this, "events") || {})[e.type] || [],
        c = ee.event.special[e.type] || {};
      if (
        ((u[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = ee.event.handlers.call(this, e, l), n = 0;
          (a = s[n++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = a.elem, r = 0;
            (o = a.handlers[r++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
              ((e.handleObj = o),
              (e.data = o.data),
              (i = (
                (ee.event.special[o.origType] || {}).handle || o.handler
              ).apply(a.elem, u)) !== t &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        a,
        o,
        s = [],
        u = n.delegateCount,
        l = e.target;
      if (u && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (!0 !== l.disabled || "click" !== e.type) {
            for (i = [], r = 0; u > r; r++)
              i[(a = (o = n[r]).selector + " ")] === t &&
                (i[a] = o.needsContext
                  ? ee(a, this).index(l) >= 0
                  : ee.find(a, this, null, [l]).length),
                i[a] && i.push(o);
            i.length && s.push({ elem: l, handlers: i });
          }
      return n.length > u && s.push({ elem: this, handlers: n.slice(u) }), s;
    },
    fix: function (e) {
      if (e[ee.expando]) return e;
      var t,
        n,
        r = e,
        i = ee.event.fixHooks[e.type] || {},
        a = i.props ? this.props.concat(i.props) : this.props;
      for (e = new ee.Event(r), t = a.length; t--; ) e[(n = a[t])] = r[n];
      return (
        e.target || (e.target = r.srcElement || B),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        i.filter ? i.filter(e, r) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, n) {
        var r,
          i,
          a,
          o = n.button,
          s = n.fromElement;
        return (
          null == e.pageX &&
            null != n.clientX &&
            ((i = (r = e.target.ownerDocument || B).documentElement),
            (a = r.body),
            (e.pageX =
              n.clientX +
              ((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
              ((i && i.clientLeft) || (a && a.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((i && i.scrollTop) || (a && a.scrollTop) || 0) -
              ((i && i.clientTop) || (a && a.clientTop) || 0))),
          !e.relatedTarget &&
            s &&
            (e.relatedTarget = s === e.target ? n.toElement : s),
          e.which ||
            o === t ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      click: {
        trigger: function () {
          return ee.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : t;
        },
      },
      focus: {
        trigger: function () {
          if (this !== B.activeElement && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === B.activeElement && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout",
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = ee.extend(new ee.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? ee.event.trigger(i, null, t) : ee.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (ee.removeEvent = B.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, n, r) {
          var i = "on" + n;
          e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r));
        }),
    (ee.Event = function (e, n) {
      return this instanceof ee.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                !1 === e.returnValue ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? s
                  : u))
            : (this.type = e),
          n && ee.extend(this, n),
          (this.timeStamp = (e && e.timeStamp) || ee.now()),
          (this[ee.expando] = !0),
          t)
        : new ee.Event(e, n);
    }),
    (ee.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = s),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = s),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = s), this.stopPropagation();
      },
    }),
    ee.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        ee.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (!r || (r !== this && !ee.contains(this, r))) &&
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ee.support.submitBubbles ||
      (ee.event.special.submit = {
        setup: function () {
          return (
            !ee.nodeName(this, "form") &&
            (ee.event.add(this, "click._submit keypress._submit", function (e) {
              var n = e.target,
                r =
                  ee.nodeName(n, "input") || ee.nodeName(n, "button")
                    ? n.form
                    : t;
              r &&
                !ee._data(r, "submitBubbles") &&
                (ee.event.add(r, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                ee._data(r, "submitBubbles", !0));
            }),
            t)
          );
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              ee.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return (
            !ee.nodeName(this, "form") && (ee.event.remove(this, "._submit"), t)
          );
        },
      }),
    ee.support.changeBubbles ||
      (ee.event.special.change = {
        setup: function () {
          return Ee.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ee.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ee.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    ee.event.simulate("change", this, e, !0);
                })),
              !1)
            : (ee.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ee.test(t.nodeName) &&
                  !ee._data(t, "changeBubbles") &&
                  (ee.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ee.event.simulate("change", this.parentNode, e, !0);
                  }),
                  ee._data(t, "changeBubbles", !0));
              }),
              t);
        },
        handle: function (e) {
          var n = e.target;
          return this !== n ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== n.type && "checkbox" !== n.type)
            ? e.handleObj.handler.apply(this, arguments)
            : t;
        },
        teardown: function () {
          return ee.event.remove(this, "._change"), !Ee.test(this.nodeName);
        },
      }),
    ee.support.focusinBubbles ||
      ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0);
          };
        ee.event.special[t] = {
          setup: function () {
            0 == n++ && B.addEventListener(e, r, !0);
          },
          teardown: function () {
            0 == --n && B.removeEventListener(e, r, !0);
          },
        };
      }),
    ee.fn.extend({
      on: function (e, n, r, i, a) {
        var o, s;
        if ("object" == typeof e) {
          for (s in ("string" != typeof n && ((r = r || n), (n = t)), e))
            this.on(s, n, r, e[s], a);
          return this;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = t))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = t))
                : ((i = r), (r = n), (n = t))),
          !1 === i)
        )
          i = u;
        else if (!i) return this;
        return (
          1 === a &&
            ((o = i),
            ((i = function (e) {
              return ee().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = ee.guid++))),
          this.each(function () {
            ee.event.add(this, e, i, r, n);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, n, r) {
        var i, a;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            ee(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (a in e) this.off(a, n, e[a]);
          return this;
        }
        return (
          (!1 === n || "function" == typeof n) && ((r = n), (n = t)),
          !1 === r && (r = u),
          this.each(function () {
            ee.event.remove(this, e, r, n);
          })
        );
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      trigger: function (e, t) {
        return this.each(function () {
          ee.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, n) {
        var r = this[0];
        return r ? ee.event.trigger(e, n, r, !0) : t;
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    ee.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        (ee.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        }),
          Se.test(t) && (ee.event.fixHooks[t] = ee.event.keyHooks),
          De.test(t) && (ee.event.fixHooks[t] = ee.event.mouseHooks);
      }
    ),
    (function (e, t) {
      function n(e) {
        return de.test(e + "");
      }
      function r() {
        var e,
          t = [];
        return (e = function (n, r) {
          return (
            t.push((n += " ")) > C.cacheLength && delete e[t.shift()],
            (e[n] = r)
          );
        });
      }
      function i(e) {
        return (e[R] = !0), e;
      }
      function a(e) {
        var t = A.createElement("div");
        try {
          return e(t);
        } catch (e) {
          return !1;
        } finally {
          t = null;
        }
      }
      function o(e, t, n, r) {
        var i, a, o, s, u, l, c, p, h, m;
        if (
          ((t ? t.ownerDocument || t : O) !== A && D(t),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (s = (t = t || A).nodeType) && 9 !== s) return [];
        if (!L && !r) {
          if ((i = fe.exec(e)))
            if ((o = i[1])) {
              if (9 === s) {
                if (!(a = t.getElementById(o)) || !a.parentNode) return n;
                if (a.id === o) return n.push(a), n;
              } else if (
                t.ownerDocument &&
                (a = t.ownerDocument.getElementById(o)) &&
                H(t, a) &&
                a.id === o
              )
                return n.push(a), n;
            } else {
              if (i[2])
                return Q.apply(n, G.call(t.getElementsByTagName(e), 0)), n;
              if ((o = i[3]) && B.getByClassName && t.getElementsByClassName)
                return Q.apply(n, G.call(t.getElementsByClassName(o), 0)), n;
            }
          if (B.qsa && !_.test(e)) {
            if (
              ((c = !0),
              (p = R),
              (h = t),
              (m = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                l = d(e),
                  (c = t.getAttribute("id"))
                    ? (p = c.replace(me, "\\$&"))
                    : t.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  u = l.length;
                u--;

              )
                l[u] = p + f(l[u]);
              (h = (ce.test(e) && t.parentNode) || t), (m = l.join(","));
            }
            if (m)
              try {
                return Q.apply(n, G.call(h.querySelectorAll(m), 0)), n;
              } catch (e) {
              } finally {
                c || t.removeAttribute("id");
              }
          }
        }
        return (function (e, t, n, r) {
          var i,
            a,
            o,
            s,
            u,
            l = d(e);
          if (!r && 1 === l.length) {
            if (
              (a = l[0] = l[0].slice(0)).length > 2 &&
              "ID" === (o = a[0]).type &&
              9 === t.nodeType &&
              !L &&
              C.relative[a[1].type]
            ) {
              if (!(t = C.find.ID(o.matches[0].replace(ve, ye), t)[0]))
                return n;
              e = e.slice(a.shift().value.length);
            }
            for (
              i = le.needsContext.test(e) ? -1 : a.length - 1;
              i >= 0 && ((o = a[i]), !C.relative[(s = o.type)]);
              i--
            )
              if (
                (u = C.find[s]) &&
                (r = u(
                  o.matches[0].replace(ve, ye),
                  (ce.test(a[0].type) && t.parentNode) || t
                ))
              ) {
                if ((a.splice(i, 1), !(e = r.length && f(a))))
                  return Q.apply(n, G.call(r, 0)), n;
                break;
              }
          }
          return N(e, l)(r, t, L, n, ce.test(e)), n;
        })(e.replace(ie, "$1"), t, n, r);
      }
      function s(e, t) {
        for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
          if (n === t) return -1;
        return e ? 1 : -1;
      }
      function u(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function c(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, r) {
              for (var i, a = e([], n.length, t), o = a.length; o--; )
                n[(i = a[o])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function d(e, t) {
        var n,
          r,
          i,
          a,
          s,
          u,
          l,
          c = $[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, u = [], l = C.preFilter; s; ) {
          for (a in ((!n || (r = ae.exec(s))) &&
            (r && (s = s.slice(r[0].length) || s), u.push((i = []))),
          (n = !1),
          (r = oe.exec(s)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(ie, " ") }),
            (s = s.slice(n.length))),
          C.filter))
            !(r = le[a].exec(s)) ||
              (l[a] && !(r = l[a](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: a, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? o.error(e) : $(e, u).slice(0);
      }
      function f(e) {
        for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
        return r;
      }
      function p(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === t.dir,
          a = I++;
        return t.first
          ? function (t, n, a) {
              for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, a);
            }
          : function (t, n, o) {
              var s,
                u,
                l,
                c = z + " " + a;
              if (o) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || i) && e(t, n, o)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || i)
                    if ((u = (l = t[R] || (t[R] = {}))[r]) && u[0] === c) {
                      if (!0 === (s = u[1]) || s === T) return !0 === s;
                    } else if (
                      (((u = l[r] = [c])[1] = e(t, n, o) || T), !0 === u[1])
                    )
                      return !0;
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function m(e, t, n, r, i) {
        for (var a, o = [], s = 0, u = e.length, l = null != t; u > s; s++)
          (a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s));
        return o;
      }
      function g(e, t, n, r, a, o) {
        return (
          r && !r[R] && (r = g(r)),
          a && !a[R] && (a = g(a, o)),
          i(function (i, o, s, u) {
            var l,
              c,
              d,
              f = [],
              p = [],
              h = o.length,
              g = i || b(t || "*", s.nodeType ? [s] : s, []),
              v = !e || (!i && t) ? g : m(g, f, e, s, u),
              y = n ? (a || (i ? e : h || r) ? [] : o) : v;
            if ((n && n(v, y, s, u), r))
              for (l = m(y, p), r(l, [], s, u), c = l.length; c--; )
                (d = l[c]) && (y[p[c]] = !(v[p[c]] = d));
            if (i) {
              if (a || e) {
                if (a) {
                  for (l = [], c = y.length; c--; )
                    (d = y[c]) && l.push((v[c] = d));
                  a(null, (y = []), l, u);
                }
                for (c = y.length; c--; )
                  (d = y[c]) &&
                    (l = a ? J.call(i, d) : f[c]) > -1 &&
                    (i[l] = !(o[l] = d));
              }
            } else (y = m(y === o ? y.splice(h, y.length) : y)), a ? a(null, o, y, u) : Q.apply(o, y);
          })
        );
      }
      function v(e) {
        for (
          var t,
            n,
            r,
            i = e.length,
            a = C.relative[e[0].type],
            o = a || C.relative[" "],
            s = a ? 1 : 0,
            u = p(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            l = p(
              function (e) {
                return J.call(t, e) > -1;
              },
              o,
              !0
            ),
            c = [
              function (e, n, r) {
                return (
                  (!a && (r || n !== S)) ||
                  ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                );
              },
            ];
          i > s;
          s++
        )
          if ((n = C.relative[e[s].type])) c = [p(h(c), n)];
          else {
            if ((n = C.filter[e[s].type].apply(null, e[s].matches))[R]) {
              for (r = ++s; i > r && !C.relative[e[r].type]; r++);
              return g(
                s > 1 && h(c),
                s > 1 && f(e.slice(0, s - 1)).replace(ie, "$1"),
                n,
                r > s && v(e.slice(s, r)),
                i > r && v((e = e.slice(r))),
                i > r && f(e)
              );
            }
            c.push(n);
          }
        return h(c);
      }
      function y(e, t) {
        var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function (i, s, u, l, c) {
            var d,
              f,
              p,
              h = [],
              g = 0,
              v = "0",
              y = i && [],
              b = null != c,
              x = S,
              w = i || (a && C.find.TAG("*", (c && s.parentNode) || s)),
              k = (z += null == x ? 1 : Math.E);
            for (b && ((S = s !== A && s), (T = n)); null != (d = w[v]); v++) {
              if (a && d) {
                for (f = 0; (p = e[f]); f++)
                  if (p(d, s, u)) {
                    l.push(d);
                    break;
                  }
                b && ((z = k), (T = ++n));
              }
              r && ((d = !p && d) && g--, i && y.push(d));
            }
            if (((g += v), r && v !== g)) {
              for (f = 0; (p = t[f]); f++) p(y, h, s, u);
              if (i) {
                if (g > 0) for (; v--; ) y[v] || h[v] || (h[v] = Y.call(l));
                h = m(h);
              }
              Q.apply(l, h),
                b && !i && h.length > 0 && g + t.length > 1 && o.uniqueSort(l);
            }
            return b && ((z = k), (S = x)), y;
          };
        return r ? i(s) : s;
      }
      function b(e, t, n) {
        for (var r = 0, i = t.length; i > r; r++) o(e, t[r], n);
        return n;
      }
      function x() {}
      var w,
        T,
        C,
        k,
        F,
        N,
        E,
        S,
        D,
        A,
        j,
        L,
        _,
        q,
        M,
        H,
        P,
        R = "sizzle" + -new Date(),
        O = e.document,
        B = {},
        z = 0,
        I = 0,
        W = r(),
        $ = r(),
        X = r(),
        V = typeof t,
        U = [],
        Y = U.pop,
        Q = U.push,
        G = U.slice,
        J =
          U.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; n > t; t++)
              if (this[t] === e) return t;
            return -1;
          },
        Z = "[\\x20\\t\\r\\n\\f]",
        K = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        te = K.replace("w", "w#"),
        ne =
          "\\[" +
          Z +
          "*(" +
          K +
          ")" +
          Z +
          "*(?:([*^$|!~]?=)" +
          Z +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          te +
          ")|)|)" +
          Z +
          "*\\]",
        re =
          ":(" +
          K +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          ne.replace(3, 8) +
          ")*)|.*)\\)|)",
        ie = RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"),
        ae = RegExp("^" + Z + "*," + Z + "*"),
        oe = RegExp("^" + Z + "*([\\x20\\t\\r\\n\\f>+~])" + Z + "*"),
        se = RegExp(re),
        ue = RegExp("^" + te + "$"),
        le = {
          ID: RegExp("^#(" + K + ")"),
          CLASS: RegExp("^\\.(" + K + ")"),
          NAME: RegExp("^\\[name=['\"]?(" + K + ")['\"]?\\]"),
          TAG: RegExp("^(" + K.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + ne),
          PSEUDO: RegExp("^" + re),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              Z +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              Z +
              "*(?:([+-]|)" +
              Z +
              "*(\\d+)|))" +
              Z +
              "*\\)|)",
            "i"
          ),
          needsContext: RegExp(
            "^" +
              Z +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              Z +
              "*((?:-\\d)?\\d*)" +
              Z +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ce = /[\x20\t\r\n\f]*[+~]/,
        de = /\{\s*\[native code\]\s*\}/,
        fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        pe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        me = /'|\\/g,
        ge = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        ve = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        ye = function (e, t) {
          var n = "0x" + t - 65536;
          return n != n
            ? t
            : 0 > n
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n));
        };
      try {
        G.call(j.childNodes, 0)[0].nodeType;
      } catch (e) {
        G = function (e) {
          for (var t, n = []; (t = this[e]); e++) n.push(t);
          return n;
        };
      }
      for (w in ((F = o.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (D = o.setDocument =
        function (e) {
          var r = e ? e.ownerDocument || e : O;
          return r !== A && 9 === r.nodeType && r.documentElement
            ? ((A = r),
              (j = r.documentElement),
              (L = F(r)),
              (B.tagNameNoComments = a(function (e) {
                return (
                  e.appendChild(r.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (B.attributes = a(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
              })),
              (B.getByClassName = a(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='hidden e'></div><div class='hidden'></div>"),
                  !(
                    !e.getElementsByClassName ||
                    !e.getElementsByClassName("e").length
                  ) &&
                    ((e.lastChild.className = "e"),
                    2 === e.getElementsByClassName("e").length)
                );
              })),
              (B.getByName = a(function (e) {
                (e.id = R + 0),
                  (e.innerHTML =
                    "<a name='" + R + "'></a><div name='" + R + "'></div>"),
                  j.insertBefore(e, j.firstChild);
                var t =
                  r.getElementsByName &&
                  r.getElementsByName(R).length ===
                    2 + r.getElementsByName(R + 0).length;
                return (
                  (B.getIdNotName = !r.getElementById(R)), j.removeChild(e), t
                );
              })),
              (C.attrHandle = a(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  e.firstChild &&
                    typeof e.firstChild.getAttribute !== V &&
                    "#" === e.firstChild.getAttribute("href")
                );
              })
                ? {}
                : {
                    href: function (e) {
                      return e.getAttribute("href", 2);
                    },
                    type: function (e) {
                      return e.getAttribute("type");
                    },
                  }),
              B.getIdNotName
                ? ((C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== V && !L) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (C.filter.ID = function (e) {
                    var t = e.replace(ve, ye);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : ((C.find.ID = function (e, n) {
                    if (typeof n.getElementById !== V && !L) {
                      var r = n.getElementById(e);
                      return r
                        ? r.id === e ||
                          (typeof r.getAttributeNode !== V &&
                            r.getAttributeNode("id").value === e)
                          ? [r]
                          : t
                        : [];
                    }
                  }),
                  (C.filter.ID = function (e) {
                    var t = e.replace(ve, ye);
                    return function (e) {
                      var n =
                        typeof e.getAttributeNode !== V &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (C.find.TAG = B.tagNameNoComments
                ? function (e, n) {
                    return typeof n.getElementsByTagName !== V
                      ? n.getElementsByTagName(e)
                      : t;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      a = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = a[i]); i++) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return a;
                  }),
              (C.find.NAME =
                B.getByName &&
                function (e, n) {
                  return typeof n.getElementsByName !== V
                    ? n.getElementsByName(name)
                    : t;
                }),
              (C.find.CLASS =
                B.getByClassName &&
                function (e, n) {
                  return typeof n.getElementsByClassName === V || L
                    ? t
                    : n.getElementsByClassName(e);
                }),
              (q = []),
              (_ = [":focus"]),
              (B.qsa = n(r.querySelectorAll)) &&
                (a(function (e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      _.push(
                        "\\[" +
                          Z +
                          "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                      ),
                    e.querySelectorAll(":checked").length || _.push(":checked");
                }),
                a(function (e) {
                  (e.innerHTML = "<input type='hidden' i=''/>"),
                    e.querySelectorAll("[i^='']").length &&
                      _.push("[*^$]=" + Z + "*(?:\"\"|'')"),
                    e.querySelectorAll(":enabled").length ||
                      _.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    _.push(",.*:");
                })),
              (B.matchesSelector = n(
                (M =
                  j.matchesSelector ||
                  j.mozMatchesSelector ||
                  j.webkitMatchesSelector ||
                  j.oMatchesSelector ||
                  j.msMatchesSelector)
              )) &&
                a(function (e) {
                  (B.disconnectedMatch = M.call(e, "div")),
                    M.call(e, "[s!='']:x"),
                    q.push("!=", re);
                }),
              (_ = RegExp(_.join("|"))),
              (q = RegExp(q.join("|"))),
              (H =
                n(j.contains) || j.compareDocumentPosition
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (P = j.compareDocumentPosition
                ? function (e, t) {
                    var n;
                    return e === t
                      ? ((E = !0), 0)
                      : (n =
                          t.compareDocumentPosition &&
                          e.compareDocumentPosition &&
                          e.compareDocumentPosition(t))
                      ? 1 & n || (e.parentNode && 11 === e.parentNode.nodeType)
                        ? e === r || H(O, e)
                          ? -1
                          : t === r || H(O, t)
                          ? 1
                          : 0
                        : 4 & n
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function (e, t) {
                    var n,
                      i = 0,
                      a = e.parentNode,
                      o = t.parentNode,
                      u = [e],
                      l = [t];
                    if (e === t) return (E = !0), 0;
                    if (e.sourceIndex && t.sourceIndex)
                      return (
                        (~t.sourceIndex || 1 << 31) -
                        ((H(O, e) && ~e.sourceIndex) || 1 << 31)
                      );
                    if (!a || !o)
                      return e === r ? -1 : t === r ? 1 : a ? -1 : o ? 1 : 0;
                    if (a === o) return s(e, t);
                    for (n = e; (n = n.parentNode); ) u.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; u[i] === l[i]; ) i++;
                    return i
                      ? s(u[i], l[i])
                      : u[i] === O
                      ? -1
                      : l[i] === O
                      ? 1
                      : 0;
                  }),
              (E = !1),
              [0, 0].sort(P),
              (B.detectDuplicates = E),
              A)
            : A;
        }),
      (o.matches = function (e, t) {
        return o(e, null, null, t);
      }),
      (o.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== A && D(e),
          (t = t.replace(ge, "='$1']")),
          !(!B.matchesSelector || L || (q && q.test(t)) || _.test(t)))
        )
          try {
            var n = M.call(e, t);
            if (
              n ||
              B.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {}
        return o(t, A, null, [e]).length > 0;
      }),
      (o.contains = function (e, t) {
        return (e.ownerDocument || e) !== A && D(e), H(e, t);
      }),
      (o.attr = function (e, t) {
        var n;
        return (
          (e.ownerDocument || e) !== A && D(e),
          L || (t = t.toLowerCase()),
          (n = C.attrHandle[t])
            ? n(e)
            : L || B.attributes
            ? e.getAttribute(t)
            : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t]
            ? t
            : n && n.specified
            ? n.value
            : null
        );
      }),
      (o.error = function (e) {
        throw Error("Syntax error, unrecognized expression: " + e);
      }),
      (o.uniqueSort = function (e) {
        var t,
          n = [],
          r = 1,
          i = 0;
        if (((E = !B.detectDuplicates), e.sort(P), E)) {
          for (; (t = e[r]); r++) t === e[r - 1] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return e;
      }),
      (k = o.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r]); r++) n += k(t);
          return n;
        }),
      (C = o.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: le,
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(ve, ye)),
                (e[3] = (e[4] || e[5] || "").replace(ve, ye)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || o.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && o.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[5] && e[2];
              return le.CHILD.test(e[0])
                ? null
                : (e[4]
                    ? (e[2] = e[4])
                    : n &&
                      se.test(n) &&
                      (t = d(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              return "*" === e
                ? function () {
                    return !0;
                  }
                : ((e = e.replace(ve, ye).toLowerCase()),
                  function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  });
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + Z + ")" + e + "(" + Z + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      e.className ||
                        (typeof e.getAttribute !== V &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = o.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.substr(i.length - n.length) === n
                        : "~=" === t
                        ? (" " + i + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.substr(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var a = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      d,
                      f,
                      p,
                      h,
                      m = a !== o ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !u && !s;
                    if (g) {
                      if (a) {
                        for (; m; ) {
                          for (d = t; (d = d[m]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === v
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = m = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [o ? g.firstChild : g.lastChild]), o && y)) {
                        for (
                          p =
                            (l = (c = g[R] || (g[R] = {}))[e] || [])[0] === z &&
                            l[1],
                            f = l[0] === z && l[2],
                            d = p && g.childNodes[p];
                          (d = (++p && d && d[m]) || (f = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++f && d === t) {
                            c[e] = [z, p, f];
                            break;
                          }
                      } else if (
                        y &&
                        (l = (t[R] || (t[R] = {}))[e]) &&
                        l[0] === z
                      )
                        f = l[1];
                      else
                        for (
                          ;
                          (d = (++p && d && d[m]) || (f = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== v
                            : 1 !== d.nodeType) ||
                            !++f ||
                            (y && ((d[R] || (d[R] = {}))[e] = [z, f]),
                            d !== t));

                        );
                      return (f -= i) === r || (0 == f % r && f / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                r =
                  C.pseudos[e] ||
                  C.setFilters[e.toLowerCase()] ||
                  o.error("unsupported pseudo: " + e);
              return r[R]
                ? r(t)
                : r.length > 1
                ? ((n = [e, e, "", t]),
                  C.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, n) {
                        for (var i, a = r(e, t), o = a.length; o--; )
                          e[(i = J.call(e, a[o]))] = !(n[i] = a[o]);
                      })
                    : function (e) {
                        return r(e, 0, n);
                      })
                : r;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                r = N(e.replace(ie, "$1"));
              return r[R]
                ? i(function (e, t, n, i) {
                    for (var a, o = r(e, null, i, []), s = e.length; s--; )
                      (a = o[s]) && (e[s] = !(t[s] = a));
                  })
                : function (e, i, a) {
                    return (t[0] = e), r(t, null, a, n), !n.pop();
                  };
            }),
            has: i(function (e) {
              return function (t) {
                return o(e, t).length > 0;
              };
            }),
            contains: i(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
              };
            }),
            lang: i(function (e) {
              return (
                ue.test(e || "") || o.error("unsupported lang: " + e),
                (e = e.replace(ve, ye).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = L
                        ? t.getAttribute("xml:lang") || t.getAttribute("lang")
                        : t.lang)
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === j;
            },
            focus: function (e) {
              return (
                e === A.activeElement &&
                (!A.hasFocus || A.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                  return !1;
              return !0;
            },
            parent: function (e) {
              return !C.pseudos.empty(e);
            },
            header: function (e) {
              return he.test(e.nodeName);
            },
            input: function (e) {
              return pe.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  t.toLowerCase() === e.type)
              );
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (e, t) {
              return [t - 1];
            }),
            eq: c(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: c(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: c(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: c(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: c(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
              return e;
            }),
          },
        }),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        C.pseudos[w] = u(w);
      for (w in { submit: !0, reset: !0 }) C.pseudos[w] = l(w);
      (N = o.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            a = X[e + " "];
          if (!a) {
            for (t || (t = d(e)), n = t.length; n--; )
              (a = v(t[n]))[R] ? r.push(a) : i.push(a);
            a = X(e, y(i, r));
          }
          return a;
        }),
        (C.pseudos.nth = C.pseudos.eq),
        (C.filters = x.prototype = C.pseudos),
        (C.setFilters = new x()),
        D(),
        (o.attr = ee.attr),
        (ee.find = o),
        (ee.expr = o.selectors),
        (ee.expr[":"] = ee.expr.pseudos),
        (ee.unique = o.uniqueSort),
        (ee.text = o.getText),
        (ee.isXMLDoc = o.isXML),
        (ee.contains = o.contains);
    })(e);
  var Le = /Until$/,
    _e = /^(?:parents|prev(?:Until|All))/,
    qe = /^.[^:#\[\.,]*$/,
    Me = ee.expr.match.needsContext,
    He = { children: !0, contents: !0, next: !0, prev: !0 };
  ee.fn.extend({
    find: function (e) {
      var t, n, r;
      if ("string" != typeof e)
        return (
          (r = this),
          this.pushStack(
            ee(e).filter(function () {
              for (t = 0; r.length > t; t++)
                if (ee.contains(r[t], this)) return !0;
            })
          )
        );
      for (n = [], t = 0; this.length > t; t++) ee.find(e, this[t], n);
      return (
        ((n = this.pushStack(ee.unique(n))).selector =
          (this.selector ? this.selector + " " : "") + e),
        n
      );
    },
    has: function (e) {
      var t,
        n = ee(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (ee.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(c(this, e, !1));
    },
    filter: function (e) {
      return this.pushStack(c(this, e, !0));
    },
    is: function (e) {
      return (
        !!e &&
        ("string" == typeof e
          ? Me.test(e)
            ? ee(e, this.context).index(this[0]) >= 0
            : ee.filter(e, this).length > 0
          : this.filter(e).length > 0)
      );
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          a = [],
          o = Me.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0;
        i > r;
        r++
      )
        for (
          n = this[r];
          n && n.ownerDocument && n !== t && 11 !== n.nodeType;

        ) {
          if (o ? o.index(n) > -1 : ee.find.matchesSelector(n, e)) {
            a.push(n);
            break;
          }
          n = n.parentNode;
        }
      return this.pushStack(a.length > 1 ? ee.unique(a) : a);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ee.inArray(this[0], ee(e))
          : ee.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? ee(e, t)
            : ee.makeArray(e && e.nodeType ? [e] : e),
        r = ee.merge(this.get(), n);
      return this.pushStack(ee.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    (ee.fn.andSelf = ee.fn.addBack),
    ee.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ee.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ee.dir(e, "parentNode", n);
        },
        next: function (e) {
          return l(e, "nextSibling");
        },
        prev: function (e) {
          return l(e, "previousSibling");
        },
        nextAll: function (e) {
          return ee.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ee.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ee.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ee.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ee.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ee.sibling(e.firstChild);
        },
        contents: function (e) {
          return ee.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ee.merge([], e.childNodes);
        },
      },
      function (e, t) {
        ee.fn[e] = function (n, r) {
          var i = ee.map(this, t, n);
          return (
            Le.test(e) || (r = n),
            r && "string" == typeof r && (i = ee.filter(r, i)),
            (i = this.length > 1 && !He[e] ? ee.unique(i) : i),
            this.length > 1 && _e.test(e) && (i = i.reverse()),
            this.pushStack(i)
          );
        };
      }
    ),
    ee.extend({
      filter: function (e, t, n) {
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length
            ? ee.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : ee.find.matches(e, t)
        );
      },
      dir: function (e, n, r) {
        for (
          var i = [], a = e[n];
          a &&
          9 !== a.nodeType &&
          (r === t || 1 !== a.nodeType || !ee(a).is(r));

        )
          1 === a.nodeType && i.push(a), (a = a[n]);
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var Pe =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Re = / jQuery\d+="(?:null|\d+)"/g,
    Oe = RegExp("<(?:" + Pe + ")[\\s/>]", "i"),
    Be = /^\s+/,
    ze =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ie = /<([\w:]+)/,
    We = /<tbody/i,
    $e = /<|&#?\w+;/,
    Xe = /<(?:script|style|link)/i,
    Ve = /^(?:checkbox|radio)$/i,
    Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ye = /^$|\/(?:java|ecma)script/i,
    Qe = /^true\/(.*)/,
    Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Je = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ee.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    Ze = d(B).appendChild(B.createElement("div"));
  (Je.optgroup = Je.option),
    (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead),
    (Je.th = Je.td),
    ee.fn.extend({
      text: function (e) {
        return ee.access(
          this,
          function (e) {
            return e === t
              ? ee.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || B).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      wrapAll: function (e) {
        if (ee.isFunction(e))
          return this.each(function (t) {
            ee(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = ee(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return ee.isFunction(e)
          ? this.each(function (t) {
              ee(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = ee(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ee.isFunction(e);
        return this.each(function (n) {
          ee(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)
          (!e || ee.filter(e, [n]).length > 0) &&
            (t || 1 !== n.nodeType || ee.cleanData(y(n)),
            n.parentNode &&
              (t && ee.contains(n.ownerDocument, n) && m(y(n, "script")),
              n.parentNode.removeChild(n)));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ee.cleanData(y(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && ee.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ee.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ee.access(
          this,
          function (e) {
            var n = this[0] || {},
              r = 0,
              i = this.length;
            if (e === t)
              return 1 === n.nodeType ? n.innerHTML.replace(Re, "") : t;
            if (
              !(
                "string" != typeof e ||
                Xe.test(e) ||
                (!ee.support.htmlSerialize && Oe.test(e)) ||
                (!ee.support.leadingWhitespace && Be.test(e)) ||
                Je[(Ie.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(ze, "<$1></$2>");
              try {
                for (; i > r; r++)
                  1 === (n = this[r] || {}).nodeType &&
                    (ee.cleanData(y(n, !1)), (n.innerHTML = e));
                n = 0;
              } catch (e) {}
            }
            n && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function (e) {
        return (
          ee.isFunction(e) ||
            "string" == typeof e ||
            (e = ee(e).not(this).detach()),
          this.domManip([e], !0, function (e) {
            var t = this.nextSibling,
              n = this.parentNode;
            ((n && 1 === this.nodeType) || 11 === this.nodeType) &&
              (ee(this).remove(),
              t ? t.parentNode.insertBefore(e, t) : n.appendChild(e));
          })
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, n, r) {
        e = U.apply([], e);
        var i,
          a,
          o,
          s,
          u,
          l,
          c = 0,
          d = this.length,
          m = this,
          g = d - 1,
          v = e[0],
          b = ee.isFunction(v);
        if (
          b ||
          (!(1 >= d || "string" != typeof v || ee.support.checkClone) &&
            Ue.test(v))
        )
          return this.each(function (i) {
            var a = m.eq(i);
            b && (e[0] = v.call(this, i, n ? a.html() : t)),
              a.domManip(e, n, r);
          });
        if (
          d &&
          ((a = (i = ee.buildFragment(e, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === i.childNodes.length && (i = a),
          a)
        ) {
          for (
            n = n && ee.nodeName(a, "tr"),
              s = (o = ee.map(y(i, "script"), p)).length;
            d > c;
            c++
          )
            (u = i),
              c !== g &&
                ((u = ee.clone(u, !0, !0)), s && ee.merge(o, y(u, "script"))),
              r.call(
                n && ee.nodeName(this[c], "table")
                  ? f(this[c], "tbody")
                  : this[c],
                u,
                c
              );
          if (s)
            for (
              l = o[o.length - 1].ownerDocument, ee.map(o, h), c = 0;
              s > c;
              c++
            )
              (u = o[c]),
                Ye.test(u.type || "") &&
                  !ee._data(u, "globalEval") &&
                  ee.contains(l, u) &&
                  (u.src
                    ? ee.ajax({
                        url: u.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : ee.globalEval(
                        (u.text || u.textContent || u.innerHTML || "").replace(
                          Ge,
                          ""
                        )
                      ));
          i = a = null;
        }
        return this;
      },
    }),
    ee.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        ee.fn[e] = function (e) {
          for (var n, r = 0, i = [], a = ee(e), o = a.length - 1; o >= r; r++)
            (n = r === o ? this : this.clone(!0)),
              ee(a[r])[t](n),
              Y.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    ),
    ee.extend({
      clone: function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          u = ee.contains(e.ownerDocument, e);
        if (
          (ee.support.html5Clone ||
          ee.isXMLDoc(e) ||
          !Oe.test("<" + e.nodeName + ">")
            ? (s = e.cloneNode(!0))
            : ((Ze.innerHTML = e.outerHTML),
              Ze.removeChild((s = Ze.firstChild))),
          !(
            (ee.support.noCloneEvent && ee.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ee.isXMLDoc(e)
          ))
        )
          for (r = y(s), i = y(e), o = 0; null != (a = i[o]); ++o)
            r[o] && v(a, r[o]);
        if (t)
          if (n)
            for (i = i || y(e), r = r || y(s), o = 0; null != (a = i[o]); o++)
              g(a, r[o]);
          else g(e, s);
        return (
          (r = y(s, "script")).length > 0 && m(r, !u && y(e, "script")),
          (r = i = a = null),
          s
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i, a, o, s, u, l, c, f = e.length, p = d(t), h = [], g = 0;
          f > g;
          g++
        )
          if ((a = e[g]) || 0 === a)
            if ("object" === ee.type(a)) ee.merge(h, a.nodeType ? [a] : a);
            else if ($e.test(a)) {
              for (
                s = s || p.appendChild(t.createElement("div")),
                  o = (Ie.exec(a) || ["", ""])[1].toLowerCase(),
                  u = Je[o] || Je._default,
                  s.innerHTML = u[1] + a.replace(ze, "<$1></$2>") + u[2],
                  c = u[0];
                c--;

              )
                s = s.lastChild;
              if (
                (!ee.support.leadingWhitespace &&
                  Be.test(a) &&
                  h.push(t.createTextNode(Be.exec(a)[0])),
                !ee.support.tbody)
              )
                for (
                  c =
                    (a =
                      "table" !== o || We.test(a)
                        ? "<table>" !== u[1] || We.test(a)
                          ? 0
                          : s
                        : s.firstChild) && a.childNodes.length;
                  c--;

                )
                  ee.nodeName((l = a.childNodes[c]), "tbody") &&
                    !l.childNodes.length &&
                    a.removeChild(l);
              for (
                ee.merge(h, s.childNodes), s.textContent = "";
                s.firstChild;

              )
                s.removeChild(s.firstChild);
              s = p.lastChild;
            } else h.push(t.createTextNode(a));
        for (
          s && p.removeChild(s),
            ee.support.appendChecked || ee.grep(y(h, "input"), b),
            g = 0;
          (a = h[g++]);

        )
          if (
            (!r || -1 === ee.inArray(a, r)) &&
            ((i = ee.contains(a.ownerDocument, a)),
            (s = y(p.appendChild(a), "script")),
            i && m(s),
            n)
          )
            for (c = 0; (a = s[c++]); ) Ye.test(a.type || "") && n.push(a);
        return (s = null), p;
      },
      cleanData: function (e, n) {
        for (
          var r,
            i,
            a,
            o,
            s = 0,
            u = ee.expando,
            l = ee.cache,
            c = ee.support.deleteExpando,
            d = ee.event.special;
          null != (a = e[s]);
          s++
        )
          if ((n || ee.acceptData(a)) && (r = (i = a[u]) && l[i])) {
            if (r.events)
              for (o in r.events)
                d[o] ? ee.event.remove(a, o) : ee.removeEvent(a, o, r.handle);
            l[i] &&
              (delete l[i],
              c
                ? delete a[u]
                : a.removeAttribute !== t
                ? a.removeAttribute(u)
                : (a[u] = null),
              X.push(i));
          }
      },
    });
  var Ke,
    et,
    tt,
    nt = /alpha\([^)]*\)/i,
    rt = /opacity\s*=\s*([^)]*)/,
    it = /^(top|right|bottom|left)$/,
    at = /^(none|table(?!-c[ea]).+)/,
    ot = /^margin/,
    st = RegExp("^(" + te + ")(.*)$", "i"),
    ut = RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    lt = RegExp("^([+-])=(" + te + ")", "i"),
    ct = { BODY: "block" },
    dt = { position: "absolute", visibility: "hidden", display: "block" },
    ft = { letterSpacing: 0, fontWeight: 400 },
    pt = ["Top", "Right", "Bottom", "Left"],
    ht = ["Webkit", "O", "Moz", "ms"];
  ee.fn.extend({
    css: function (e, n) {
      return ee.access(
        this,
        function (e, n, r) {
          var i,
            a,
            o = {},
            s = 0;
          if (ee.isArray(n)) {
            for (i = et(e), a = n.length; a > s; s++)
              o[n[s]] = ee.css(e, n[s], !1, i);
            return o;
          }
          return r !== t ? ee.style(e, n, r) : ee.css(e, n);
        },
        e,
        n,
        arguments.length > 1
      );
    },
    show: function () {
      return T(this, !0);
    },
    hide: function () {
      return T(this);
    },
    toggle: function (e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : w(this)) ? ee(this).show() : ee(this).hide();
      });
    },
  }),
    ee.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Ke(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ee.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var a,
            o,
            s,
            u = ee.camelCase(n),
            l = e.style;
          if (
            ((n = ee.cssProps[u] || (ee.cssProps[u] = x(l, u))),
            (s = ee.cssHooks[n] || ee.cssHooks[u]),
            r === t)
          )
            return s && "get" in s && (a = s.get(e, !1, i)) !== t ? a : l[n];
          if (
            ("string" === (o = typeof r) &&
              (a = lt.exec(r)) &&
              ((r = (a[1] + 1) * a[2] + parseFloat(ee.css(e, n))),
              (o = "number")),
            !(
              null == r ||
              ("number" === o && isNaN(r)) ||
              ("number" !== o || ee.cssNumber[u] || (r += "px"),
              ee.support.clearCloneStyle ||
                "" !== r ||
                0 !== n.indexOf("background") ||
                (l[n] = "inherit"),
              s && "set" in s && (r = s.set(e, r, i)) === t)
            ))
          )
            try {
              l[n] = r;
            } catch (e) {}
        }
      },
      css: function (e, n, r, i) {
        var a,
          o,
          s,
          u = ee.camelCase(n);
        return (
          (n = ee.cssProps[u] || (ee.cssProps[u] = x(e.style, u))),
          (s = ee.cssHooks[n] || ee.cssHooks[u]) &&
            "get" in s &&
            (a = s.get(e, !0, r)),
          a === t && (a = Ke(e, n, i)),
          "normal" === a && n in ft && (a = ft[n]),
          r
            ? ((o = parseFloat(a)), !0 === r || ee.isNumeric(o) ? o || 0 : a)
            : a
        );
      },
      swap: function (e, t, n, r) {
        var i,
          a,
          o = {};
        for (a in t) (o[a] = e.style[a]), (e.style[a] = t[a]);
        for (a in ((i = n.apply(e, r || [])), t)) e.style[a] = o[a];
        return i;
      },
    }),
    e.getComputedStyle
      ? ((et = function (t) {
          return e.getComputedStyle(t, null);
        }),
        (Ke = function (e, n, r) {
          var i,
            a,
            o,
            s = r || et(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
          return (
            s &&
              ("" !== u ||
                ee.contains(e.ownerDocument, e) ||
                (u = ee.style(e, n)),
              ut.test(u) &&
                ot.test(n) &&
                ((i = l.width),
                (a = l.minWidth),
                (o = l.maxWidth),
                (l.minWidth = l.maxWidth = l.width = u),
                (u = s.width),
                (l.width = i),
                (l.minWidth = a),
                (l.maxWidth = o))),
            u
          );
        }))
      : B.documentElement.currentStyle &&
        ((et = function (e) {
          return e.currentStyle;
        }),
        (Ke = function (e, n, r) {
          var i,
            a,
            o,
            s = r || et(e),
            u = s ? s[n] : t,
            l = e.style;
          return (
            null == u && l && l[n] && (u = l[n]),
            ut.test(u) &&
              !it.test(n) &&
              ((i = l.left),
              (o = (a = e.runtimeStyle) && a.left) &&
                (a.left = e.currentStyle.left),
              (l.left = "fontSize" === n ? "1em" : u),
              (u = l.pixelLeft + "px"),
              (l.left = i),
              o && (a.left = o)),
            "" === u ? "auto" : u
          );
        })),
    ee.each(["height", "width"], function (e, n) {
      ee.cssHooks[n] = {
        get: function (e, r, i) {
          return r
            ? 0 === e.offsetWidth && at.test(ee.css(e, "display"))
              ? ee.swap(e, dt, function () {
                  return F(e, n, i);
                })
              : F(e, n, i)
            : t;
        },
        set: function (e, t, r) {
          var i = r && et(e);
          return C(
            0,
            t,
            r
              ? k(
                  e,
                  n,
                  r,
                  ee.support.boxSizing &&
                    "border-box" === ee.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    ee.support.opacity ||
      (ee.cssHooks.opacity = {
        get: function (e, t) {
          return rt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = ee.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            a = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === ee.trim(a.replace(nt, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = nt.test(a) ? a.replace(nt, i) : a + " " + i);
        },
      }),
    ee(function () {
      ee.support.reliableMarginRight ||
        (ee.cssHooks.marginRight = {
          get: function (e, n) {
            return n
              ? ee.swap(e, { display: "inline-block" }, Ke, [e, "marginRight"])
              : t;
          },
        }),
        !ee.support.pixelPosition &&
          ee.fn.position &&
          ee.each(["top", "left"], function (e, n) {
            ee.cssHooks[n] = {
              get: function (e, r) {
                return r
                  ? ((r = Ke(e, n)),
                    ut.test(r) ? ee(e).position()[n] + "px" : r)
                  : t;
              },
            };
          });
    }),
    ee.expr &&
      ee.expr.filters &&
      ((ee.expr.filters.hidden = function (e) {
        return (
          (0 === e.offsetWidth && 0 === e.offsetHeight) ||
          (!ee.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || ee.css(e, "display")))
        );
      }),
      (ee.expr.filters.visible = function (e) {
        return !ee.expr.filters.hidden(e);
      })),
    ee.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (ee.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + pt[r] + t] = a[r] || a[r - 2] || a[0];
          return i;
        },
      }),
        ot.test(e) || (ee.cssHooks[e + t].set = C);
    });
  var mt = /%20/g,
    gt = /\[\]$/,
    vt = /\r?\n/g,
    yt = /^(?:submit|button|image|reset)$/i,
    bt = /^(?:input|select|textarea|keygen)/i;
  ee.fn.extend({
    serialize: function () {
      return ee.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ee.prop(this, "elements");
        return e ? ee.makeArray(e) : this;
      })
        .filter(function () {
          var e = this.type;
          return (
            this.name &&
            !ee(this).is(":disabled") &&
            bt.test(this.nodeName) &&
            !yt.test(e) &&
            (this.checked || !Ve.test(e))
          );
        })
        .map(function (e, t) {
          var n = ee(this).val();
          return null == n
            ? null
            : ee.isArray(n)
            ? ee.map(n, function (e) {
                return { name: t.name, value: e.replace(vt, "\r\n") };
              })
            : { name: t.name, value: n.replace(vt, "\r\n") };
        })
        .get();
    },
  }),
    (ee.param = function (e, n) {
      var r,
        i = [],
        a = function (e, t) {
          (t = ee.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (n === t && (n = ee.ajaxSettings && ee.ajaxSettings.traditional),
        ee.isArray(e) || (e.jquery && !ee.isPlainObject(e)))
      )
        ee.each(e, function () {
          a(this.name, this.value);
        });
      else for (r in e) S(r, e[r], n, a);
      return i.join("&").replace(mt, "+");
    });
  var xt,
    wt,
    Tt = ee.now(),
    Ct = /\?/,
    kt = /#.*$/,
    Ft = /([?&])_=[^&]*/,
    Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Et = /^(?:GET|HEAD)$/,
    St = /^\/\//,
    Dt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    At = ee.fn.load,
    jt = {},
    Lt = {},
    _t = "*/".concat("*");
  try {
    wt = z.href;
  } catch (e) {
    ((wt = B.createElement("a")).href = ""), (wt = wt.href);
  }
  (xt = Dt.exec(wt.toLowerCase()) || []),
    (ee.fn.load = function (e, n, r) {
      if ("string" != typeof e && At) return At.apply(this, arguments);
      var i,
        a,
        o,
        s = this,
        u = e.indexOf(" ");
      return (
        u >= 0 && ((i = e.slice(u, e.length)), (e = e.slice(0, u))),
        ee.isFunction(n)
          ? ((r = n), (n = t))
          : n && "object" == typeof n && (a = "POST"),
        s.length > 0 &&
          ee
            .ajax({ url: e, type: a, dataType: "html", data: n })
            .done(function (e) {
              (o = arguments),
                s.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e);
            })
            .complete(
              r &&
                function (e, t) {
                  s.each(r, o || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    ee.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ee.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ee.each(["get", "post"], function (e, n) {
      ee[n] = function (e, r, i, a) {
        return (
          ee.isFunction(r) && ((a = a || i), (i = r), (r = t)),
          ee.ajax({ url: e, type: n, dataType: a, data: r, success: i })
        );
      };
    }),
    ee.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            xt[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": _t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": ee.parseJSON,
          "text xml": ee.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? j(j(e, ee.ajaxSettings), t) : j(ee.ajaxSettings, e);
      },
      ajaxPrefilter: D(jt),
      ajaxTransport: D(Lt),
      ajax: function (e, n) {
        function r(e, n, r, s) {
          var l,
            d,
            y,
            b,
            w,
            C = n;
          2 !== x &&
            ((x = 2),
            u && clearTimeout(u),
            (i = t),
            (o = s || ""),
            (T.readyState = e > 0 ? 4 : 0),
            r &&
              (b = (function (e, n, r) {
                var i,
                  a,
                  o,
                  s,
                  u = e.contents,
                  l = e.dataTypes,
                  c = e.responseFields;
                for (a in c) a in r && (n[c[a]] = r[a]);
                for (; "*" === l[0]; )
                  l.shift(),
                    i === t &&
                      (i = e.mimeType || n.getResponseHeader("Content-Type"));
                if (i)
                  for (a in u)
                    if (u[a] && u[a].test(i)) {
                      l.unshift(a);
                      break;
                    }
                if (l[0] in r) o = l[0];
                else {
                  for (a in r) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                      o = a;
                      break;
                    }
                    s || (s = a);
                  }
                  o = o || s;
                }
                return o ? (o !== l[0] && l.unshift(o), r[o]) : t;
              })(f, T, r)),
            (e >= 200 && 300 > e) || 304 === e
              ? (f.ifModified &&
                  ((w = T.getResponseHeader("Last-Modified")) &&
                    (ee.lastModified[a] = w),
                  (w = T.getResponseHeader("etag")) && (ee.etag[a] = w)),
                304 === e
                  ? ((l = !0), (C = "notmodified"))
                  : ((C = (l = (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o = {},
                        s = 0,
                        u = e.dataTypes.slice(),
                        l = u[0];
                      if (
                        (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u[1])
                      )
                        for (n in e.converters)
                          o[n.toLowerCase()] = e.converters[n];
                      for (; (i = u[++s]); )
                        if ("*" !== i) {
                          if ("*" !== l && l !== i) {
                            if (!(n = o[l + " " + i] || o["* " + i]))
                              for (r in o)
                                if (
                                  (a = r.split(" "))[1] === i &&
                                  (n = o[l + " " + a[0]] || o["* " + a[0]])
                                ) {
                                  !0 === n
                                    ? (n = o[r])
                                    : !0 !== o[r] &&
                                      ((i = a[0]), u.splice(s--, 0, i));
                                  break;
                                }
                            if (!0 !== n)
                              if (n && e.throws) t = n(t);
                              else
                                try {
                                  t = n(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: n
                                      ? e
                                      : "No conversion from " + l + " to " + i,
                                  };
                                }
                          }
                          l = i;
                        }
                      return { state: "success", data: t };
                    })(f, b)).state),
                    (d = l.data),
                    (l = !(y = l.error))))
              : ((y = C), (e || !C) && ((C = "error"), 0 > e && (e = 0))),
            (T.status = e),
            (T.statusText = (n || C) + ""),
            l ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]),
            T.statusCode(v),
            (v = t),
            c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, f, l ? d : y]),
            g.fireWith(p, [T, C]),
            c &&
              (h.trigger("ajaxComplete", [T, f]),
              --ee.active || ee.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((n = e), (e = t)), (n = n || {});
        var i,
          a,
          o,
          s,
          u,
          l,
          c,
          d,
          f = ee.ajaxSetup({}, n),
          p = f.context || f,
          h = f.context && (p.nodeType || p.jquery) ? ee(p) : ee.event,
          m = ee.Deferred(),
          g = ee.Callbacks("once memory"),
          v = f.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!s)
                  for (s = {}; (t = Nt.exec(o)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? o : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || ((e = b[n] = b[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return x || (f.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > x) for (t in e) v[t] = [v[t], e[t]];
                else T.always(e[T.status]);
              return this;
            },
            abort: function (e) {
              var t = e || w;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          ((m.promise(T).complete = g.add),
          (T.success = T.done),
          (T.error = T.fail),
          (f.url = ((e || f.url || wt) + "")
            .replace(kt, "")
            .replace(St, xt[1] + "//")),
          (f.type = n.method || n.type || f.method || f.type),
          (f.dataTypes = ee
            .trim(f.dataType || "*")
            .toLowerCase()
            .match(ne) || [""]),
          null == f.crossDomain &&
            ((l = Dt.exec(f.url.toLowerCase())),
            (f.crossDomain = !(
              !l ||
              (l[1] === xt[1] &&
                l[2] === xt[2] &&
                (l[3] || ("http:" === l[1] ? 80 : 443)) ==
                  (xt[3] || ("http:" === xt[1] ? 80 : 443)))
            ))),
          f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = ee.param(f.data, f.traditional)),
          A(jt, f, n, T),
          2 === x)
        )
          return T;
        for (d in ((c = f.global) &&
          0 == ee.active++ &&
          ee.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Et.test(f.type)),
        (a = f.url),
        f.hasContent ||
          (f.data &&
            ((a = f.url += (Ct.test(a) ? "&" : "?") + f.data), delete f.data),
          !1 === f.cache &&
            (f.url = Ft.test(a)
              ? a.replace(Ft, "$1_=" + Tt++)
              : a + (Ct.test(a) ? "&" : "?") + "_=" + Tt++)),
        f.ifModified &&
          (ee.lastModified[a] &&
            T.setRequestHeader("If-Modified-Since", ee.lastModified[a]),
          ee.etag[a] && T.setRequestHeader("If-None-Match", ee.etag[a])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", f.contentType),
        T.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          T.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === x))
          return T.abort();
        for (d in ((w = "abort"), { success: 1, error: 1, complete: 1 }))
          T[d](f[d]);
        if ((i = A(Lt, f, n, T))) {
          (T.readyState = 1),
            c && h.trigger("ajaxSend", [T, f]),
            f.async &&
              f.timeout > 0 &&
              (u = setTimeout(function () {
                T.abort("timeout");
              }, f.timeout));
          try {
            (x = 1), i.send(y, r);
          } catch (e) {
            if (!(2 > x)) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return T;
      },
      getScript: function (e, n) {
        return ee.get(e, t, n, "script");
      },
      getJSON: function (e, t, n) {
        return ee.get(e, t, n, "json");
      },
    }),
    ee.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return ee.globalEval(e), e;
        },
      },
    }),
    ee.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    ee.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n,
          r = B.head || ee("head")[0] || B.documentElement;
        return {
          send: function (t, i) {
            ((n = B.createElement("script")).async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (e, t) {
                  (t ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null),
                    n.parentNode && n.parentNode.removeChild(n),
                    (n = null),
                    t || i(200, "success"));
                }),
              r.insertBefore(n, r.firstChild);
          },
          abort: function () {
            n && n.onload(t, !0);
          },
        };
      }
    });
  var qt = [],
    Mt = /(=)\?(?=&|$)|\?\?/;
  ee.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = qt.pop() || ee.expando + "_" + Tt++;
      return (this[e] = !0), e;
    },
  }),
    ee.ajaxPrefilter("json jsonp", function (n, r, i) {
      var a,
        o,
        s,
        u =
          !1 !== n.jsonp &&
          (Mt.test(n.url)
            ? "url"
            : "string" == typeof n.data &&
              !(n.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Mt.test(n.data) &&
              "data");
      return u || "jsonp" === n.dataTypes[0]
        ? ((a = n.jsonpCallback =
            ee.isFunction(n.jsonpCallback)
              ? n.jsonpCallback()
              : n.jsonpCallback),
          u
            ? (n[u] = n[u].replace(Mt, "$1" + a))
            : !1 !== n.jsonp &&
              (n.url += (Ct.test(n.url) ? "&" : "?") + n.jsonp + "=" + a),
          (n.converters["script json"] = function () {
            return s || ee.error(a + " was not called"), s[0];
          }),
          (n.dataTypes[0] = "json"),
          (o = e[a]),
          (e[a] = function () {
            s = arguments;
          }),
          i.always(function () {
            (e[a] = o),
              n[a] && ((n.jsonpCallback = r.jsonpCallback), qt.push(a)),
              s && ee.isFunction(o) && o(s[0]),
              (s = o = t);
          }),
          "script")
        : t;
    });
  var Ht,
    Pt,
    Rt = 0,
    Ot =
      e.ActiveXObject &&
      function () {
        var e;
        for (e in Ht) Ht[e](t, !0);
      };
  (ee.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (
          (!this.isLocal && L()) ||
          (function () {
            try {
              return new e.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
          })()
        );
      }
    : L),
    (Pt = ee.ajaxSettings.xhr()),
    (ee.support.cors = !!Pt && "withCredentials" in Pt),
    (Pt = ee.support.ajax = !!Pt) &&
      ee.ajaxTransport(function (n) {
        var r;
        if (!n.crossDomain || ee.support.cors)
          return {
            send: function (i, a) {
              var o,
                s,
                u = n.xhr();
              if (
                (n.username
                  ? u.open(n.type, n.url, n.async, n.username, n.password)
                  : u.open(n.type, n.url, n.async),
                n.xhrFields)
              )
                for (s in n.xhrFields) u[s] = n.xhrFields[s];
              n.mimeType &&
                u.overrideMimeType &&
                u.overrideMimeType(n.mimeType),
                n.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (s in i) u.setRequestHeader(s, i[s]);
              } catch (e) {}
              u.send((n.hasContent && n.data) || null),
                (r = function (e, i) {
                  var s, l, c, d, f;
                  try {
                    if (r && (i || 4 === u.readyState))
                      if (
                        ((r = t),
                        o &&
                          ((u.onreadystatechange = ee.noop),
                          Ot && delete Ht[o]),
                        i)
                      )
                        4 !== u.readyState && u.abort();
                      else {
                        (d = {}),
                          (s = u.status),
                          (f = u.responseXML),
                          (c = u.getAllResponseHeaders()),
                          f && f.documentElement && (d.xml = f),
                          "string" == typeof u.responseText &&
                            (d.text = u.responseText);
                        try {
                          l = u.statusText;
                        } catch (e) {
                          l = "";
                        }
                        s || !n.isLocal || n.crossDomain
                          ? 1223 === s && (s = 204)
                          : (s = d.text ? 200 : 404);
                      }
                  } catch (e) {
                    i || a(-1, e);
                  }
                  d && a(s, l, d, c);
                }),
                n.async
                  ? 4 === u.readyState
                    ? setTimeout(r)
                    : ((o = ++Rt),
                      Ot && (Ht || ((Ht = {}), ee(e).unload(Ot)), (Ht[o] = r)),
                      (u.onreadystatechange = r))
                  : r();
            },
            abort: function () {
              r && r(t, !0);
            },
          };
      });
  var Bt,
    zt,
    It = /^(?:toggle|show|hide)$/,
    Wt = RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    $t = /queueHooks$/,
    Xt = [
      function (e, t, n) {
        var r,
          i,
          a,
          o,
          s,
          u,
          l,
          c,
          d,
          f = this,
          p = e.style,
          h = {},
          m = [],
          g = e.nodeType && w(e);
        for (r in (n.queue ||
          (null == (c = ee._queueHooks(e, "fx")).unqueued &&
            ((c.unqueued = 0),
            (d = c.empty.fire),
            (c.empty.fire = function () {
              c.unqueued || d();
            })),
          c.unqueued++,
          f.always(function () {
            f.always(function () {
              c.unqueued--, ee.queue(e, "fx").length || c.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          "inline" === ee.css(e, "display") &&
            "none" === ee.css(e, "float") &&
            (ee.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName)
              ? (p.zoom = 1)
              : (p.display = "inline-block"))),
        n.overflow &&
          ((p.overflow = "hidden"),
          ee.support.shrinkWrapBlocks ||
            f.done(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
        t))
          if (((a = t[r]), It.exec(a))) {
            if (
              (delete t[r],
              (u = u || "toggle" === a),
              a === (g ? "hide" : "show"))
            )
              continue;
            m.push(r);
          }
        if ((o = m.length)) {
          "hidden" in
            (s = ee._data(e, "fxshow") || ee._data(e, "fxshow", {})) &&
            (g = s.hidden),
            u && (s.hidden = !g),
            g
              ? ee(e).show()
              : f.done(function () {
                  ee(e).hide();
                }),
            f.done(function () {
              var t;
              for (t in (ee._removeData(e, "fxshow"), h)) ee.style(e, t, h[t]);
            });
          for (r = 0; o > r; r++)
            (i = m[r]),
              (l = f.createTween(i, g ? s[i] : 0)),
              (h[i] = s[i] || ee.style(e, i)),
              i in s ||
                ((s[i] = l.start),
                g &&
                  ((l.end = l.start),
                  (l.start = "width" === i || "height" === i ? 1 : 0)));
        }
      },
    ],
    Vt = {
      "*": [
        function (e, t) {
          var n,
            r,
            i = this.createTween(e, t),
            a = Wt.exec(t),
            o = i.cur(),
            s = +o || 0,
            u = 1,
            l = 20;
          if (a) {
            if (
              ((n = +a[2]),
              "px" !== (r = a[3] || (ee.cssNumber[e] ? "" : "px")) && s)
            ) {
              s = ee.css(i.elem, e, !0) || n || 1;
              do {
                (s /= u = u || ".5"), ee.style(i.elem, e, s + r);
              } while (u !== (u = i.cur() / o) && 1 !== u && --l);
            }
            (i.unit = r),
              (i.start = s),
              (i.end = a[1] ? s + (a[1] + 1) * n : n);
          }
          return i;
        },
      ],
    };
  (ee.Animation = ee.extend(q, {
    tweener: function (e, t) {
      ee.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (Vt[n] = Vt[n] || []), Vt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Xt.unshift(e) : Xt.push(e);
    },
  })),
    (ee.Tween = M),
    (M.prototype = {
      constructor: M,
      init: function (e, t, n, r, i, a) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = a || (ee.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = M.propHooks[this.prop];
        return e && e.get ? e.get(this) : M.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = M.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? ee.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : M.propHooks._default.set(this),
          this
        );
      },
    }),
    (M.prototype.init.prototype = M.prototype),
    (M.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = ee.css(e.elem, e.prop, "auto")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          ee.fx.step[e.prop]
            ? ee.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop])
            ? ee.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (M.propHooks.scrollTop = M.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    ee.each(["toggle", "show", "hide"], function (e, t) {
      var n = ee.fn[t];
      ee.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(H(t, !0), e, r, i);
      };
    }),
    ee.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(w)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = ee.isEmptyObject(e),
          a = ee.speed(t, n, r),
          o = function () {
            var t = q(this, ee.extend({}, e), a);
            (o.finish = function () {
              t.stop(!0);
            }),
              (i || ee._data(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        );
      },
      stop: function (e, n, r) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof e && ((r = n), (n = e), (e = t)),
          n && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              n = null != e && e + "queueHooks",
              a = ee.timers,
              o = ee._data(this);
            if (n) o[n] && o[n].stop && i(o[n]);
            else for (n in o) o[n] && o[n].stop && $t.test(n) && i(o[n]);
            for (n = a.length; n--; )
              a[n].elem !== this ||
                (null != e && a[n].queue !== e) ||
                (a[n].anim.stop(r), (t = !1), a.splice(n, 1));
            (t || !r) && ee.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ee._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              a = ee.timers,
              o = r ? r.length : 0;
            for (
              n.finish = !0,
                ee.queue(this, e, []),
                i && i.cur && i.cur.finish && i.cur.finish.call(this),
                t = a.length;
              t--;

            )
              a[t].elem === this &&
                a[t].queue === e &&
                (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; o > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ee.each(
      {
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        ee.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (ee.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ee.extend({}, e)
          : {
              complete: n || (!n && t) || (ee.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ee.isFunction(t) && t),
            };
      return (
        (r.duration = ee.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in ee.fx.speeds
          ? ee.fx.speeds[r.duration]
          : ee.fx.speeds._default),
        (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          ee.isFunction(r.old) && r.old.call(this),
            r.queue && ee.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (ee.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ee.timers = []),
    (ee.fx = M.prototype.init),
    (ee.fx.tick = function () {
      var e,
        n = ee.timers,
        r = 0;
      for (Bt = ee.now(); n.length > r; r++)
        (e = n[r])() || n[r] !== e || n.splice(r--, 1);
      n.length || ee.fx.stop(), (Bt = t);
    }),
    (ee.fx.timer = function (e) {
      e() && ee.timers.push(e) && ee.fx.start();
    }),
    (ee.fx.interval = 13),
    (ee.fx.start = function () {
      zt || (zt = setInterval(ee.fx.tick, ee.fx.interval));
    }),
    (ee.fx.stop = function () {
      clearInterval(zt), (zt = null);
    }),
    (ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ee.fx.step = {}),
    ee.expr &&
      ee.expr.filters &&
      (ee.expr.filters.animated = function (e) {
        return ee.grep(ee.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
    (ee.fn.offset = function (e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function (t) {
              ee.offset.setOffset(this, e, t);
            });
      var n,
        r,
        i = { top: 0, left: 0 },
        a = this[0],
        o = a && a.ownerDocument;
      return o
        ? ((n = o.documentElement),
          ee.contains(n, a)
            ? (a.getBoundingClientRect !== t && (i = a.getBoundingClientRect()),
              (r = P(o)),
              {
                top:
                  i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left:
                  i.left +
                  (r.pageXOffset || n.scrollLeft) -
                  (n.clientLeft || 0),
              })
            : i)
        : void 0;
    }),
    (ee.offset = {
      setOffset: function (e, t, n) {
        var r = ee.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i,
          a,
          o = ee(e),
          s = o.offset(),
          u = ee.css(e, "top"),
          l = ee.css(e, "left"),
          c = {},
          d = {};
        ("absolute" === r || "fixed" === r) && ee.inArray("auto", [u, l]) > -1
          ? ((i = (d = o.position()).top), (a = d.left))
          : ((i = parseFloat(u) || 0), (a = parseFloat(l) || 0)),
          ee.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (c.top = t.top - s.top + i),
          null != t.left && (c.left = t.left - s.left + a),
          "using" in t ? t.using.call(e, c) : o.css(c);
      },
    }),
    ee.fn.extend({
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === ee.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ee.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ee.css(e[0], "borderTopWidth", !0)),
                (n.left += ee.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ee.css(r, "marginTop", !0),
              left: t.left - n.left - ee.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || B.documentElement;
            e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");

          )
            e = e.offsetParent;
          return e || B.documentElement;
        });
      },
    }),
    ee.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, n) {
        var r = /Y/.test(n);
        ee.fn[e] = function (i) {
          return ee.access(
            this,
            function (e, i, a) {
              var o = P(e);
              return a === t
                ? o
                  ? n in o
                    ? o[n]
                    : o.document.documentElement[i]
                  : e[i]
                : (o
                    ? o.scrollTo(
                        r ? ee(o).scrollLeft() : a,
                        r ? a : ee(o).scrollTop()
                      )
                    : (e[i] = a),
                  t);
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    ee.each({ Height: "height", Width: "width" }, function (e, n) {
      ee.each(
        { padding: "inner" + e, content: n, "": "outer" + e },
        function (r, i) {
          ee.fn[i] = function (i, a) {
            var o = arguments.length && (r || "boolean" != typeof i),
              s = r || (!0 === i || !0 === a ? "margin" : "border");
            return ee.access(
              this,
              function (n, r, i) {
                var a;
                return ee.isWindow(n)
                  ? n.document.documentElement["client" + e]
                  : 9 === n.nodeType
                  ? ((a = n.documentElement),
                    Math.max(
                      n.body["scroll" + e],
                      a["scroll" + e],
                      n.body["offset" + e],
                      a["offset" + e],
                      a["client" + e]
                    ))
                  : i === t
                  ? ee.css(n, r, s)
                  : ee.style(n, r, i, s);
              },
              n,
              o ? i : t,
              o,
              null
            );
          };
        }
      );
    }),
    (e.jQuery = e.$ = ee),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return ee;
      });
})(window),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
  })(function (e) {
    "use strict";
    function t(t) {
      var n = t.data;
      t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n));
    }
    function n(t) {
      var n = t.target,
        r = e(n);
      if (!r.is("[type=submit],[type=image]")) {
        var i = r.closest("[type=submit]");
        if (0 === i.length) return;
        n = i[0];
      }
      var a = this;
      if (((a.clk = n), "image" == n.type))
        if (void 0 !== t.offsetX) (a.clk_x = t.offsetX), (a.clk_y = t.offsetY);
        else if ("function" == typeof e.fn.offset) {
          var o = r.offset();
          (a.clk_x = t.pageX - o.left), (a.clk_y = t.pageY - o.top);
        } else
          (a.clk_x = t.pageX - n.offsetLeft), (a.clk_y = t.pageY - n.offsetTop);
      setTimeout(function () {
        a.clk = a.clk_x = a.clk_y = null;
      }, 100);
    }
    function r() {
      if (e.fn.ajaxSubmit.debug) {
        var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        window.console && window.console.log
          ? window.console.log(t)
          : window.opera && window.opera.postError && window.opera.postError(t);
      }
    }
    var i = {};
    (i.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
      (i.formdata = void 0 !== window.FormData);
    var a = !!e.fn.prop;
    (e.fn.attr2 = function () {
      if (!a) return this.attr.apply(this, arguments);
      var e = this.prop.apply(this, arguments);
      return (e && e.jquery) || "string" == typeof e
        ? e
        : this.attr.apply(this, arguments);
    }),
      (e.fn.ajaxSubmit = function (t) {
        function n(n) {
          function i(e) {
            var t = null;
            try {
              e.contentWindow && (t = e.contentWindow.document);
            } catch (e) {
              r("cannot get iframe.contentWindow document: " + e);
            }
            if (t) return t;
            try {
              t = e.contentDocument ? e.contentDocument : e.document;
            } catch (n) {
              r("cannot get iframe.contentDocument: " + n), (t = e.document);
            }
            return t;
          }
          function s() {
            var t = l.attr2("target"),
              n = l.attr2("action"),
              a =
                l.attr("enctype") ||
                l.attr("encoding") ||
                "multipart/form-data";
            C.setAttribute("target", m),
              (!o || /post/i.test(o)) && C.setAttribute("method", "POST"),
              n != f.url && C.setAttribute("action", f.url),
              f.skipEncodingOverride ||
                (o && !/post/i.test(o)) ||
                l.attr({
                  encoding: "multipart/form-data",
                  enctype: "multipart/form-data",
                }),
              f.timeout &&
                (T = setTimeout(function () {
                  (w = !0), u(F);
                }, f.timeout));
            var s = [];
            try {
              if (f.extraData)
                for (var c in f.extraData)
                  f.extraData.hasOwnProperty(c) &&
                    s.push(
                      e.isPlainObject(f.extraData[c]) &&
                        f.extraData[c].hasOwnProperty("name") &&
                        f.extraData[c].hasOwnProperty("value")
                        ? e(
                            '<input type="hidden" name="' +
                              f.extraData[c].name +
                              '">'
                          )
                            .val(f.extraData[c].value)
                            .appendTo(C)[0]
                        : e('<input type="hidden" name="' + c + '">')
                            .val(f.extraData[c])
                            .appendTo(C)[0]
                    );
              f.iframeTarget || g.appendTo("body"),
                v.attachEvent
                  ? v.attachEvent("onload", u)
                  : v.addEventListener("load", u, !1),
                setTimeout(function e() {
                  try {
                    var t = i(v).readyState;
                    r("state = " + t),
                      t &&
                        "uninitialized" == t.toLowerCase() &&
                        setTimeout(e, 50);
                  } catch (e) {
                    r("Server abort: ", e, " (", e.name, ")"),
                      u(N),
                      T && clearTimeout(T),
                      (T = void 0);
                  }
                }, 15);
              try {
                C.submit();
              } catch (e) {
                document.createElement("form").submit.apply(C);
              }
            } finally {
              C.setAttribute("action", n),
                C.setAttribute("enctype", a),
                t ? C.setAttribute("target", t) : l.removeAttr("target"),
                e(s).remove();
            }
          }
          function u(t) {
            if (!y.aborted && !j) {
              if (
                ((A = i(v)) || (r("cannot access response document"), (t = N)),
                t === F && y)
              )
                return y.abort("timeout"), void k.reject(y, "timeout");
              if (t == N && y)
                return (
                  y.abort("server abort"),
                  void k.reject(y, "error", "server abort")
                );
              if ((A && A.location.href != f.iframeSrc) || w) {
                v.detachEvent
                  ? v.detachEvent("onload", u)
                  : v.removeEventListener("load", u, !1);
                var n,
                  a = "success";
                try {
                  if (w) throw "timeout";
                  var o = "xml" == f.dataType || A.XMLDocument || e.isXMLDoc(A);
                  if (
                    (r("isXml=" + o),
                    !o &&
                      window.opera &&
                      (null === A.body || !A.body.innerHTML) &&
                      --L)
                  )
                    return (
                      r("requeing onLoad callback, DOM not available"),
                      void setTimeout(u, 250)
                    );
                  var s = A.body ? A.body : A.documentElement;
                  (y.responseText = s ? s.innerHTML : null),
                    (y.responseXML = A.XMLDocument ? A.XMLDocument : A),
                    o && (f.dataType = "xml"),
                    (y.getResponseHeader = function (e) {
                      return { "content-type": f.dataType }[e.toLowerCase()];
                    }),
                    s &&
                      ((y.status =
                        Number(s.getAttribute("status")) || y.status),
                      (y.statusText =
                        s.getAttribute("statusText") || y.statusText));
                  var l = (f.dataType || "").toLowerCase(),
                    c = /(json|script|text)/.test(l);
                  if (c || f.textarea) {
                    var d = A.getElementsByTagName("textarea")[0];
                    if (d)
                      (y.responseText = d.value),
                        (y.status =
                          Number(d.getAttribute("status")) || y.status),
                        (y.statusText =
                          d.getAttribute("statusText") || y.statusText);
                    else if (c) {
                      var p = A.getElementsByTagName("pre")[0],
                        m = A.getElementsByTagName("body")[0];
                      p
                        ? (y.responseText = p.textContent
                            ? p.textContent
                            : p.innerText)
                        : m &&
                          (y.responseText = m.textContent
                            ? m.textContent
                            : m.innerText);
                    }
                  } else
                    "xml" == l &&
                      !y.responseXML &&
                      y.responseText &&
                      (y.responseXML = _(y.responseText));
                  try {
                    D = M(y, l, f);
                  } catch (e) {
                    (a = "parsererror"), (y.error = n = e || a);
                  }
                } catch (e) {
                  r("error caught: ", e), (a = "error"), (y.error = n = e || a);
                }
                y.aborted && (r("upload aborted"), (a = null)),
                  y.status &&
                    (a =
                      (y.status >= 200 && y.status < 300) || 304 === y.status
                        ? "success"
                        : "error"),
                  "success" === a
                    ? (f.success && f.success.call(f.context, D, "success", y),
                      k.resolve(y.responseText, "success", y),
                      h && e.event.trigger("ajaxSuccess", [y, f]))
                    : a &&
                      (void 0 === n && (n = y.statusText),
                      f.error && f.error.call(f.context, y, a, n),
                      k.reject(y, "error", n),
                      h && e.event.trigger("ajaxError", [y, f, n])),
                  h && e.event.trigger("ajaxComplete", [y, f]),
                  h && !--e.active && e.event.trigger("ajaxStop"),
                  f.complete && f.complete.call(f.context, y, a),
                  (j = !0),
                  f.timeout && clearTimeout(T),
                  setTimeout(function () {
                    f.iframeTarget ? g.attr("src", f.iframeSrc) : g.remove(),
                      (y.responseXML = null);
                  }, 100);
              }
            }
          }
          var c,
            d,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            x,
            w,
            T,
            C = l[0],
            k = e.Deferred();
          if (
            ((k.abort = function (e) {
              y.abort(e);
            }),
            n)
          )
            for (d = 0; d < p.length; d++)
              (c = e(p[d])),
                a ? c.prop("disabled", !1) : c.removeAttr("disabled");
          if (
            (((f = e.extend(!0, {}, e.ajaxSettings, t)).context =
              f.context || f),
            (m = "jqFormIO" + new Date().getTime()),
            f.iframeTarget
              ? (x = (g = e(f.iframeTarget)).attr2("name"))
                ? (m = x)
                : g.attr2("name", m)
              : (g = e(
                  '<iframe name="' + m + '" src="' + f.iframeSrc + '" />'
                )).css({
                  position: "absolute",
                  top: "-1000px",
                  left: "-1000px",
                }),
            (v = g[0]),
            (y = {
              aborted: 0,
              responseText: null,
              responseXML: null,
              status: 0,
              statusText: "n/a",
              getAllResponseHeaders: function () {},
              getResponseHeader: function () {},
              setRequestHeader: function () {},
              abort: function (t) {
                var n = "timeout" === t ? "timeout" : "aborted";
                r("aborting upload... " + n), (this.aborted = 1);
                try {
                  v.contentWindow.document.execCommand &&
                    v.contentWindow.document.execCommand("Stop");
                } catch (e) {}
                g.attr("src", f.iframeSrc),
                  (y.error = n),
                  f.error && f.error.call(f.context, y, n, t),
                  h && e.event.trigger("ajaxError", [y, f, n]),
                  f.complete && f.complete.call(f.context, y, n);
              },
            }),
            (h = f.global) && 0 == e.active++ && e.event.trigger("ajaxStart"),
            h && e.event.trigger("ajaxSend", [y, f]),
            f.beforeSend && !1 === f.beforeSend.call(f.context, y, f))
          )
            return f.global && e.active--, k.reject(), k;
          if (y.aborted) return k.reject(), k;
          (b = C.clk) &&
            (x = b.name) &&
            !b.disabled &&
            ((f.extraData = f.extraData || {}),
            (f.extraData[x] = b.value),
            "image" == b.type &&
              ((f.extraData[x + ".x"] = C.clk_x),
              (f.extraData[x + ".y"] = C.clk_y)));
          var F = 1,
            N = 2,
            E = e("meta[name=csrf-token]").attr("content"),
            S = e("meta[name=csrf-param]").attr("content");
          S && E && ((f.extraData = f.extraData || {}), (f.extraData[S] = E)),
            f.forceSync ? s() : setTimeout(s, 10);
          var D,
            A,
            j,
            L = 50,
            _ =
              e.parseXML ||
              function (e, t) {
                return (
                  window.ActiveXObject
                    ? (((t = new ActiveXObject("Microsoft.XMLDOM")).async =
                        "false"),
                      t.loadXML(e))
                    : (t = new DOMParser().parseFromString(e, "text/xml")),
                  t &&
                  t.documentElement &&
                  "parsererror" != t.documentElement.nodeName
                    ? t
                    : null
                );
              },
            q =
              e.parseJSON ||
              function (e) {
                return window.eval("(" + e + ")");
              },
            M = function (t, n, r) {
              var i = t.getResponseHeader("content-type") || "",
                a = "xml" === n || (!n && i.indexOf("xml") >= 0),
                o = a ? t.responseXML : t.responseText;
              return (
                a &&
                  "parsererror" === o.documentElement.nodeName &&
                  e.error &&
                  e.error("parsererror"),
                r && r.dataFilter && (o = r.dataFilter(o, n)),
                "string" == typeof o &&
                  ("json" === n || (!n && i.indexOf("json") >= 0)
                    ? (o = q(o))
                    : ("script" === n ||
                        (!n && i.indexOf("javascript") >= 0)) &&
                      e.globalEval(o)),
                o
              );
            };
          return k;
        }
        if (!this.length)
          return (
            r("ajaxSubmit: skipping submit process - no element selected"), this
          );
        var o,
          s,
          u,
          l = this;
        "function" == typeof t
          ? (t = { success: t })
          : void 0 === t && (t = {}),
          (o = t.type || this.attr2("method")),
          (u =
            (u =
              "string" == typeof (s = t.url || this.attr2("action"))
                ? e.trim(s)
                : "") ||
            window.location.href ||
            "") && (u = (u.match(/^([^#]+)/) || [])[1]),
          (t = e.extend(
            !0,
            {
              url: u,
              success: e.ajaxSettings.success,
              type: o || e.ajaxSettings.type,
              iframeSrc: /^https/i.test(window.location.href || "")
                ? "javascript:false"
                : "about:blank",
            },
            t
          ));
        var c = {};
        if ((this.trigger("form-pre-serialize", [this, t, c]), c.veto))
          return (
            r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
          );
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t))
          return (
            r("ajaxSubmit: submit aborted via beforeSerialize callback"), this
          );
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var f,
          p = [],
          h = this.formToArray(t.semantic, p);
        if (
          (t.data && ((t.extraData = t.data), (f = e.param(t.data, d))),
          t.beforeSubmit && !1 === t.beforeSubmit(h, this, t))
        )
          return (
            r("ajaxSubmit: submit aborted via beforeSubmit callback"), this
          );
        if ((this.trigger("form-submit-validate", [h, this, t, c]), c.veto))
          return (
            r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this
          );
        var m = e.param(h, d);
        f && (m = m ? m + "&" + f : f),
          "GET" == t.type.toUpperCase()
            ? ((t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + m),
              (t.data = null))
            : (t.data = m);
        var g = [];
        if (
          (t.resetForm &&
            g.push(function () {
              l.resetForm();
            }),
          t.clearForm &&
            g.push(function () {
              l.clearForm(t.includeHidden);
            }),
          !t.dataType && t.target)
        ) {
          var v = t.success || function () {};
          g.push(function (n) {
            var r = t.replaceTarget ? "replaceWith" : "html";
            e(t.target)[r](n).each(v, arguments);
          });
        } else t.success && g.push(t.success);
        if (
          ((t.success = function (e, n, r) {
            for (var i = t.context || this, a = 0, o = g.length; o > a; a++)
              g[a].apply(i, [e, n, r || l, l]);
          }),
          t.error)
        ) {
          var y = t.error;
          t.error = function (e, n, r) {
            var i = t.context || this;
            y.apply(i, [e, n, r, l]);
          };
        }
        if (t.complete) {
          var b = t.complete;
          t.complete = function (e, n) {
            var r = t.context || this;
            b.apply(r, [e, n, l]);
          };
        }
        var x =
            e("input[type=file]:enabled", this).filter(function () {
              return "" !== e(this).val();
            }).length > 0,
          w = "multipart/form-data",
          T = l.attr("enctype") == w || l.attr("encoding") == w,
          C = i.fileapi && i.formdata;
        r("fileAPI :" + C);
        var k,
          F = (x || T) && !C;
        !1 !== t.iframe && (t.iframe || F)
          ? t.closeKeepAlive
            ? e.get(t.closeKeepAlive, function () {
                k = n(h);
              })
            : (k = n(h))
          : (k =
              (x || T) && C
                ? (function (n) {
                    for (var r = new FormData(), i = 0; i < n.length; i++)
                      r.append(n[i].name, n[i].value);
                    if (t.extraData) {
                      var a = (function (n) {
                        var r,
                          i,
                          a = e.param(n, t.traditional).split("&"),
                          o = a.length,
                          s = [];
                        for (r = 0; o > r; r++)
                          (a[r] = a[r].replace(/\+/g, " ")),
                            (i = a[r].split("=")),
                            s.push([
                              decodeURIComponent(i[0]),
                              decodeURIComponent(i[1]),
                            ]);
                        return s;
                      })(t.extraData);
                      for (i = 0; i < a.length; i++)
                        a[i] && r.append(a[i][0], a[i][1]);
                    }
                    t.data = null;
                    var s = e.extend(!0, {}, e.ajaxSettings, t, {
                      contentType: !1,
                      processData: !1,
                      cache: !1,
                      type: o || "POST",
                    });
                    t.uploadProgress &&
                      (s.xhr = function () {
                        var n = e.ajaxSettings.xhr();
                        return (
                          n.upload &&
                            n.upload.addEventListener(
                              "progress",
                              function (e) {
                                var n = 0,
                                  r = e.loaded || e.position,
                                  i = e.total;
                                e.lengthComputable &&
                                  (n = Math.ceil((r / i) * 100)),
                                  t.uploadProgress(e, r, i, n);
                              },
                              !1
                            ),
                          n
                        );
                      }),
                      (s.data = null);
                    var u = s.beforeSend;
                    return (
                      (s.beforeSend = function (e, n) {
                        (n.data = t.formData ? t.formData : r),
                          u && u.call(this, e, n);
                      }),
                      e.ajax(s)
                    );
                  })(h)
                : e.ajax(t)),
          l.removeData("jqxhr").data("jqxhr", k);
        for (var N = 0; N < p.length; N++) p[N] = null;
        return this.trigger("form-submit-notify", [this, t]), this;
      }),
      (e.fn.ajaxForm = function (i) {
        if (
          (((i = i || {}).delegation = i.delegation && e.isFunction(e.fn.on)),
          !i.delegation && 0 === this.length)
        ) {
          var a = { s: this.selector, c: this.context };
          return !e.isReady && a.s
            ? (r("DOM not ready, queuing ajaxForm"),
              e(function () {
                e(a.s, a.c).ajaxForm(i);
              }),
              this)
            : (r(
                "terminating; zero elements found by selector" +
                  (e.isReady ? "" : " (DOM not ready)")
              ),
              this);
        }
        return i.delegation
          ? (e(document)
              .off("submit.form-plugin", this.selector, t)
              .off("click.form-plugin", this.selector, n)
              .on("submit.form-plugin", this.selector, i, t)
              .on("click.form-plugin", this.selector, i, n),
            this)
          : this.ajaxFormUnbind()
              .bind("submit.form-plugin", i, t)
              .bind("click.form-plugin", i, n);
      }),
      (e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin");
      }),
      (e.fn.formToArray = function (t, n) {
        var r = [];
        if (0 === this.length) return r;
        var a,
          o,
          s,
          u,
          l,
          c,
          d,
          f,
          p = this[0],
          h = this.attr("id"),
          m = t ? p.getElementsByTagName("*") : p.elements;
        if (
          (m && !/MSIE [678]/.test(navigator.userAgent) && (m = e(m).get()),
          h &&
            (a = e(':input[form="' + h + '"]').get()).length &&
            (m = (m || []).concat(a)),
          !m || !m.length)
        )
          return r;
        for (o = 0, d = m.length; d > o; o++)
          if ((u = (c = m[o]).name) && !c.disabled)
            if (t && p.clk && "image" == c.type)
              p.clk == c &&
                (r.push({ name: u, value: e(c).val(), type: c.type }),
                r.push(
                  { name: u + ".x", value: p.clk_x },
                  { name: u + ".y", value: p.clk_y }
                ));
            else if ((l = e.fieldValue(c, !0)) && l.constructor == Array)
              for (n && n.push(c), s = 0, f = l.length; f > s; s++)
                r.push({ name: u, value: l[s] });
            else if (i.fileapi && "file" == c.type) {
              n && n.push(c);
              var g = c.files;
              if (g.length)
                for (s = 0; s < g.length; s++)
                  r.push({ name: u, value: g[s], type: c.type });
              else r.push({ name: u, value: "", type: c.type });
            } else
              null != l &&
                (n && n.push(c),
                r.push({
                  name: u,
                  value: l,
                  type: c.type,
                  required: c.required,
                }));
        if (!t && p.clk) {
          var v = e(p.clk),
            y = v[0];
          (u = y.name) &&
            !y.disabled &&
            "image" == y.type &&
            (r.push({ name: u, value: v.val() }),
            r.push(
              { name: u + ".x", value: p.clk_x },
              { name: u + ".y", value: p.clk_y }
            ));
        }
        return r;
      }),
      (e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t));
      }),
      (e.fn.fieldSerialize = function (t) {
        var n = [];
        return (
          this.each(function () {
            var r = this.name;
            if (r) {
              var i = e.fieldValue(this, t);
              if (i && i.constructor == Array)
                for (var a = 0, o = i.length; o > a; a++)
                  n.push({ name: r, value: i[a] });
              else null != i && n.push({ name: this.name, value: i });
            }
          }),
          e.param(n)
        );
      }),
      (e.fn.fieldValue = function (t) {
        for (var n = [], r = 0, i = this.length; i > r; r++) {
          var a = this[r],
            o = e.fieldValue(a, t);
          null == o ||
            (o.constructor == Array && !o.length) ||
            (o.constructor == Array ? e.merge(n, o) : n.push(o));
        }
        return n;
      }),
      (e.fieldValue = function (t, n) {
        var r = t.name,
          i = t.type,
          a = t.tagName.toLowerCase();
        if (
          (void 0 === n && (n = !0),
          n &&
            (!r ||
              t.disabled ||
              "reset" == i ||
              "button" == i ||
              (("checkbox" == i || "radio" == i) && !t.checked) ||
              (("submit" == i || "image" == i) && t.form && t.form.clk != t) ||
              ("select" == a && -1 == t.selectedIndex)))
        )
          return null;
        if ("select" == a) {
          var o = t.selectedIndex;
          if (0 > o) return null;
          for (
            var s = [],
              u = t.options,
              l = "select-one" == i,
              c = l ? o + 1 : u.length,
              d = l ? o : 0;
            c > d;
            d++
          ) {
            var f = u[d];
            if (f.selected) {
              var p = f.value;
              if (
                (p ||
                  (p =
                    f.attributes &&
                    f.attributes.value &&
                    !f.attributes.value.specified
                      ? f.text
                      : f.value),
                l)
              )
                return p;
              s.push(p);
            }
          }
          return s;
        }
        return e(t).val();
      }),
      (e.fn.clearForm = function (t) {
        return this.each(function () {
          e("input,select,textarea", this).clearFields(t);
        });
      }),
      (e.fn.clearFields = e.fn.clearInputs =
        function (t) {
          var n =
            /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
          return this.each(function () {
            var r = this.type,
              i = this.tagName.toLowerCase();
            n.test(r) || "textarea" == i
              ? (this.value = "")
              : "checkbox" == r || "radio" == r
              ? (this.checked = !1)
              : "select" == i
              ? (this.selectedIndex = -1)
              : "file" == r
              ? /MSIE/.test(navigator.userAgent)
                ? e(this).replaceWith(e(this).clone(!0))
                : e(this).val("")
              : t &&
                ((!0 === t && /hidden/.test(r)) ||
                  ("string" == typeof t && e(this).is(t))) &&
                (this.value = "");
          });
        }),
      (e.fn.resetForm = function () {
        return this.each(function () {
          ("function" == typeof this.reset ||
            ("object" == typeof this.reset && !this.reset.nodeType)) &&
            this.reset();
        });
      }),
      (e.fn.enable = function (e) {
        return (
          void 0 === e && (e = !0),
          this.each(function () {
            this.disabled = !e;
          })
        );
      }),
      (e.fn.selected = function (t) {
        return (
          void 0 === t && (t = !0),
          this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
              var r = e(this).parent("select");
              t &&
                r[0] &&
                "select-one" == r[0].type &&
                r.find("option").selected(!1),
                (this.selected = t);
            }
          })
        );
      }),
      (e.fn.ajaxSubmit.debug = !1);
  }),
  (function (e) {
    e.extend(e.fn, {
      validate: function (t) {
        if (this.length) {
          var n = e.data(this[0], "validator");
          return (
            n ||
            (this.attr("novalidate", "novalidate"),
            (n = new e.validator(t, this[0])),
            e.data(this[0], "validator", n),
            n.settings.onsubmit &&
              (this.validateDelegate(":submit", "click", function (t) {
                n.settings.submitHandler && (n.submitButton = t.target),
                  e(t.target).hasClass("cancel") && (n.cancelSubmit = !0),
                  void 0 !== e(t.target).attr("formnovalidate") &&
                    (n.cancelSubmit = !0);
              }),
              this.submit(function (t) {
                function r() {
                  var r;
                  return (
                    !n.settings.submitHandler ||
                    (n.submitButton &&
                      (r = e("<input type='hidden'/>")
                        .attr("name", n.submitButton.name)
                        .val(e(n.submitButton).val())
                        .appendTo(n.currentForm)),
                    n.settings.submitHandler.call(n, n.currentForm, t),
                    n.submitButton && r.remove(),
                    !1)
                  );
                }
                return (
                  n.settings.debug && t.preventDefault(),
                  n.cancelSubmit
                    ? ((n.cancelSubmit = !1), r())
                    : n.form()
                    ? n.pendingRequest
                      ? ((n.formSubmitted = !0), !1)
                      : r()
                    : (n.focusInvalid(), !1)
                );
              })),
            n)
          );
        }
        t &&
          t.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function () {
        var t, n;
        return (
          e(this[0]).is("form")
            ? (t = this.validate().form())
            : ((t = !0),
              (n = e(this[0].form).validate()),
              this.each(function () {
                t = n.element(this) && t;
              })),
          t
        );
      },
      removeAttrs: function (t) {
        var n = {},
          r = this;
        return (
          e.each(t.split(/\s/), function (e, t) {
            (n[t] = r.attr(t)), r.removeAttr(t);
          }),
          n
        );
      },
      rules: function (t, n) {
        var r,
          i,
          a,
          o,
          s,
          u,
          l = this[0];
        if (t)
          switch (
            ((r = e.data(l.form, "validator").settings),
            (i = r.rules),
            (a = e.validator.staticRules(l)),
            t)
          ) {
            case "add":
              e.extend(a, e.validator.normalizeRule(n)),
                delete a.messages,
                (i[l.name] = a),
                n.messages &&
                  (r.messages[l.name] = e.extend(
                    r.messages[l.name],
                    n.messages
                  ));
              break;
            case "remove":
              return n
                ? ((u = {}),
                  e.each(n.split(/\s/), function (t, n) {
                    (u[n] = a[n]),
                      delete a[n],
                      "required" === n && e(l).removeAttr("aria-required");
                  }),
                  u)
                : (delete i[l.name], a);
          }
        return (
          (o = e.validator.normalizeRules(
            e.extend(
              {},
              e.validator.classRules(l),
              e.validator.attributeRules(l),
              e.validator.dataRules(l),
              e.validator.staticRules(l)
            ),
            l
          )).required &&
            ((s = o.required),
            delete o.required,
            (o = e.extend({ required: s }, o)),
            e(l).attr("aria-required", "true")),
          o.remote &&
            ((s = o.remote), delete o.remote, (o = e.extend(o, { remote: s }))),
          o
        );
      },
    }),
      e.extend(e.expr[":"], {
        blank: function (t) {
          return !e.trim("" + e(t).val());
        },
        filled: function (t) {
          return !!e.trim("" + e(t).val());
        },
        unchecked: function (t) {
          return !e(t).prop("checked");
        },
      }),
      (e.validator = function (t, n) {
        (this.settings = e.extend(!0, {}, e.validator.defaults, t)),
          (this.currentForm = n),
          this.init();
      }),
      (e.validator.format = function (t, n) {
        return 1 === arguments.length
          ? function () {
              var n = e.makeArray(arguments);
              return n.unshift(t), e.validator.format.apply(this, n);
            }
          : (arguments.length > 2 &&
              n.constructor !== Array &&
              (n = e.makeArray(arguments).slice(1)),
            n.constructor !== Array && (n = [n]),
            e.each(n, function (e, n) {
              t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                return n;
              });
            }),
            t);
      }),
      e.extend(e.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusInvalid: !0,
          errorContainer: e([]),
          errorLabelContainer: e([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (e) {
            (this.lastActive = e),
              this.settings.focusCleanup &&
                !this.blockFocusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    e,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.addWrapper(this.errorsFor(e)).hide());
          },
          onfocusout: function (e) {
            this.checkable(e) ||
              (!(e.name in this.submitted) && this.optional(e)) ||
              this.element(e);
          },
          onkeyup: function (e, t) {
            (9 !== t.which || "" !== this.elementValue(e)) &&
              (e.name in this.submitted || e === this.lastElement) &&
              this.element(e);
          },
          onclick: function (e) {
            e.name in this.submitted
              ? this.element(e)
              : e.parentNode.name in this.submitted &&
                this.element(e.parentNode);
          },
          highlight: function (t, n, r) {
            "radio" === t.type
              ? this.findByName(t.name).addClass(n).removeClass(r)
              : e(t).addClass(n).removeClass(r);
          },
          unhighlight: function (t, n, r) {
            "radio" === t.type
              ? this.findByName(t.name).removeClass(n).addClass(r)
              : e(t).removeClass(n).addClass(r);
          },
        },
        setDefaults: function (t) {
          e.extend(e.validator.defaults, t);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: e.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: e.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: e.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: e.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: e.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: e.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function t(t) {
              var n = e.data(this[0].form, "validator"),
                r = "on" + t.type.replace(/^validate/, ""),
                i = n.settings;
              i[r] && !this.is(i.ignore) && i[r].call(n, this[0], t);
            }
            (this.labelContainer = e(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                e(this.currentForm)),
              (this.containers = e(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var n,
              r = (this.groups = {});
            e.each(this.settings.groups, function (t, n) {
              "string" == typeof n && (n = n.split(/\s/)),
                e.each(n, function (e, n) {
                  r[n] = t;
                });
            }),
              (n = this.settings.rules),
              e.each(n, function (t, r) {
                n[t] = e.validator.normalizeRule(r);
              }),
              e(this.currentForm)
                .validateDelegate(
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                  "focusin focusout keyup",
                  t
                )
                .validateDelegate(
                  "[type='radio'], [type='checkbox'], select, option",
                  "click",
                  t
                ),
              this.settings.invalidHandler &&
                e(this.currentForm).bind(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                ),
              e(this.currentForm)
                .find("[required], [data-rule-required], .required")
                .attr("aria-required", "true");
          },
          form: function () {
            return (
              this.checkForm(),
              e.extend(this.submitted, this.errorMap),
              (this.invalid = e.extend({}, this.errorMap)),
              this.valid() ||
                e(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var e = 0, t = (this.currentElements = this.elements());
              t[e];
              e++
            )
              this.check(t[e]);
            return this.valid();
          },
          element: function (t) {
            var n = this.clean(t),
              r = this.validationTargetFor(n),
              i = !0;
            return (
              (this.lastElement = r),
              void 0 === r
                ? delete this.invalid[n.name]
                : (this.prepareElement(r),
                  (this.currentElements = e(r)),
                  (i = !1 !== this.check(r))
                    ? delete this.invalid[r.name]
                    : (this.invalid[r.name] = !0)),
              e(t).attr("aria-invalid", !i),
              this.numberOfInvalids() ||
                (this.toHide = this.toHide.add(this.containers)),
              this.showErrors(),
              i
            );
          },
          showErrors: function (t) {
            if (t) {
              for (var n in (e.extend(this.errorMap, t),
              (this.errorList = []),
              t))
                this.errorList.push({
                  message: t[n],
                  element: this.findByName(n)[0],
                });
              this.successList = e.grep(this.successList, function (e) {
                return !(e.name in t);
              });
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function () {
            e.fn.resetForm && e(this.currentForm).resetForm(),
              (this.submitted = {}),
              (this.lastElement = null),
              this.prepareForm(),
              this.hideErrors(),
              this.elements()
                .removeClass(this.settings.errorClass)
                .removeData("previousValue")
                .removeAttr("aria-invalid");
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (e) {
            var t,
              n = 0;
            for (t in e) n++;
            return n;
          },
          hideErrors: function () {
            this.addWrapper(this.toHide).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                e(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch (e) {}
          },
          findLastActive: function () {
            var t = this.lastActive;
            return (
              t &&
              1 ===
                e.grep(this.errorList, function (e) {
                  return e.element.name === t.name;
                }).length &&
              t
            );
          },
          elements: function () {
            var t = this,
              n = {};
            return e(this.currentForm)
              .find("input, select, textarea")
              .not(":submit, :reset, :image, [disabled]")
              .not(this.settings.ignore)
              .filter(function () {
                return (
                  !this.name &&
                    t.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  !(this.name in n || !t.objectLength(e(this).rules())) &&
                    ((n[this.name] = !0), !0)
                );
              });
          },
          clean: function (t) {
            return e(t)[0];
          },
          errors: function () {
            var t = this.settings.errorClass.split(" ").join(".");
            return e(this.settings.errorElement + "." + t, this.errorContext);
          },
          reset: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = e([])),
              (this.toHide = e([])),
              (this.currentElements = e([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (e) {
            this.reset(), (this.toHide = this.errorsFor(e));
          },
          elementValue: function (t) {
            var n,
              r = e(t),
              i = r.attr("type");
            return "radio" === i || "checkbox" === i
              ? e("input[name='" + r.attr("name") + "']:checked").val()
              : "string" == typeof (n = r.val())
              ? n.replace(/\r/g, "")
              : n;
          },
          check: function (t) {
            t = this.validationTargetFor(this.clean(t));
            var n,
              r,
              i,
              a = e(t).rules(),
              o = e.map(a, function (e, t) {
                return t;
              }).length,
              s = !1,
              u = this.elementValue(t);
            for (r in a) {
              i = { method: r, parameters: a[r] };
              try {
                if (
                  "dependency-mismatch" ===
                    (n = e.validator.methods[r].call(
                      this,
                      u,
                      t,
                      i.parameters
                    )) &&
                  1 === o
                ) {
                  s = !0;
                  continue;
                }
                if (((s = !1), "pending" === n))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(t)
                  ));
                if (!n) return this.formatAndAdd(t, i), !1;
              } catch (e) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        t.id +
                        ", check the '" +
                        i.method +
                        "' method.",
                      e
                    ),
                  e)
                );
              }
            }
            if (!s) return this.objectLength(a) && this.successList.push(t), !0;
          },
          customDataMessage: function (t, n) {
            return (
              e(t).data(
                "msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()
              ) || e(t).data("msg")
            );
          },
          customMessage: function (e, t) {
            var n = this.settings.messages[e];
            return n && (n.constructor === String ? n : n[t]);
          },
          findDefined: function () {
            for (var e = 0; e < arguments.length; e++)
              if (void 0 !== arguments[e]) return arguments[e];
          },
          defaultMessage: function (t, n) {
            return this.findDefined(
              this.customMessage(t.name, n),
              this.customDataMessage(t, n),
              (!this.settings.ignoreTitle && t.title) || void 0,
              e.validator.messages[n],
              "<strong>Warning: No message defined for " + t.name + "</strong>"
            );
          },
          formatAndAdd: function (t, n) {
            var r = this.defaultMessage(t, n.method),
              i = /\$?\{(\d+)\}/g;
            "function" == typeof r
              ? (r = r.call(this, n.parameters, t))
              : i.test(r) &&
                (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)),
              this.errorList.push({ message: r, element: t, method: n.method }),
              (this.errorMap[t.name] = r),
              (this.submitted[t.name] = r);
          },
          addWrapper: function (e) {
            return (
              this.settings.wrapper &&
                (e = e.add(e.parent(this.settings.wrapper))),
              e
            );
          },
          defaultShowErrors: function () {
            var e, t, n;
            for (e = 0; this.errorList[e]; e++)
              (n = this.errorList[e]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    n.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(n.element, n.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (e = 0; this.successList[e]; e++)
                this.showLabel(this.successList[e]);
            if (this.settings.unhighlight)
              for (e = 0, t = this.validElements(); t[e]; e++)
                this.settings.unhighlight.call(
                  this,
                  t[e],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return e(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (t, n) {
            var r = this.errorsFor(t);
            r.length
              ? (r
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                r.html(n))
              : ((r = e("<" + this.settings.errorElement + ">")
                  .attr("for", this.idOrName(t))
                  .addClass(this.settings.errorClass)
                  .html(n || "")),
                this.settings.wrapper &&
                  (r = r
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.append(r).length ||
                  (this.settings.errorPlacement
                    ? this.settings.errorPlacement(r, e(t))
                    : r.insertAfter(t))),
              !n &&
                this.settings.success &&
                (r.text(""),
                "string" == typeof this.settings.success
                  ? r.addClass(this.settings.success)
                  : this.settings.success(r, t)),
              (this.toShow = this.toShow.add(r));
          },
          errorsFor: function (t) {
            var n = this.idOrName(t);
            return this.errors().filter(function () {
              return e(this).attr("for") === n;
            });
          },
          idOrName: function (e) {
            return (
              this.groups[e.name] ||
              (this.checkable(e) ? e.name : e.id || e.name)
            );
          },
          validationTargetFor: function (e) {
            return (
              this.checkable(e) &&
                (e = this.findByName(e.name).not(this.settings.ignore)[0]),
              e
            );
          },
          checkable: function (e) {
            return /radio|checkbox/i.test(e.type);
          },
          findByName: function (t) {
            return e(this.currentForm).find("[name='" + t + "']");
          },
          getLength: function (t, n) {
            switch (n.nodeName.toLowerCase()) {
              case "select":
                return e("option:selected", n).length;
              case "input":
                if (this.checkable(n))
                  return this.findByName(n.name).filter(":checked").length;
            }
            return t.length;
          },
          depend: function (e, t) {
            return (
              !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            );
          },
          dependTypes: {
            boolean: function (e) {
              return e;
            },
            string: function (t, n) {
              return !!e(t, n.form).length;
            },
            function: function (e, t) {
              return e(t);
            },
          },
          optional: function (t) {
            var n = this.elementValue(t);
            return (
              !e.validator.methods.required.call(this, n, t) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (e) {
            this.pending[e.name] ||
              (this.pendingRequest++, (this.pending[e.name] = !0));
          },
          stopRequest: function (t, n) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[t.name],
              n &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (e(this.currentForm).submit(), (this.formSubmitted = !1))
                : !n &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (e(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (t) {
            return (
              e.data(t, "previousValue") ||
              e.data(t, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(t, "remote"),
              })
            );
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (t, n) {
          t.constructor === String
            ? (this.classRuleSettings[t] = n)
            : e.extend(this.classRuleSettings, t);
        },
        classRules: function (t) {
          var n = {},
            r = e(t).attr("class");
          return (
            r &&
              e.each(r.split(" "), function () {
                this in e.validator.classRuleSettings &&
                  e.extend(n, e.validator.classRuleSettings[this]);
              }),
            n
          );
        },
        attributeRules: function (t) {
          var n,
            r,
            i = {},
            a = e(t),
            o = t.getAttribute("type");
          for (n in e.validator.methods)
            "required" === n
              ? ("" === (r = t.getAttribute(n)) && (r = !0), (r = !!r))
              : (r = a.attr(n)),
              /min|max/.test(n) &&
                (null === o || /number|range|text/.test(o)) &&
                (r = Number(r)),
              r || 0 === r
                ? (i[n] = r)
                : o === n && "range" !== o && (i[n] = !0);
          return (
            i.maxlength &&
              /-1|2147483647|524288/.test(i.maxlength) &&
              delete i.maxlength,
            i
          );
        },
        dataRules: function (t) {
          var n,
            r,
            i = {},
            a = e(t);
          for (n in e.validator.methods)
            void 0 !==
              (r = a.data(
                "rule" + n[0].toUpperCase() + n.substring(1).toLowerCase()
              )) && (i[n] = r);
          return i;
        },
        staticRules: function (t) {
          var n = {},
            r = e.data(t.form, "validator");
          return (
            r.settings.rules &&
              (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            n
          );
        },
        normalizeRules: function (t, n) {
          return (
            e.each(t, function (r, i) {
              if (!1 !== i) {
                if (i.param || i.depends) {
                  var a = !0;
                  switch (typeof i.depends) {
                    case "string":
                      a = !!e(i.depends, n.form).length;
                      break;
                    case "function":
                      a = i.depends.call(n, n);
                  }
                  a ? (t[r] = void 0 === i.param || i.param) : delete t[r];
                }
              } else delete t[r];
            }),
            e.each(t, function (r, i) {
              t[r] = e.isFunction(i) ? i(n) : i;
            }),
            e.each(["minlength", "maxlength"], function () {
              t[this] && (t[this] = Number(t[this]));
            }),
            e.each(["rangelength", "range"], function () {
              var n;
              t[this] &&
                (e.isArray(t[this])
                  ? (t[this] = [Number(t[this][0]), Number(t[this][1])])
                  : "string" == typeof t[this] &&
                    ((n = t[this].split(/[\s,]+/)),
                    (t[this] = [Number(n[0]), Number(n[1])])));
            }),
            e.validator.autoCreateRanges &&
              (t.min &&
                t.max &&
                ((t.range = [t.min, t.max]), delete t.min, delete t.max),
              t.minlength &&
                t.maxlength &&
                ((t.rangelength = [t.minlength, t.maxlength]),
                delete t.minlength,
                delete t.maxlength)),
            t
          );
        },
        normalizeRule: function (t) {
          if ("string" == typeof t) {
            var n = {};
            e.each(t.split(/\s/), function () {
              n[this] = !0;
            }),
              (t = n);
          }
          return t;
        },
        addMethod: function (t, n, r) {
          (e.validator.methods[t] = n),
            (e.validator.messages[t] =
              void 0 !== r ? r : e.validator.messages[t]),
            n.length < 3 &&
              e.validator.addClassRules(t, e.validator.normalizeRule(t));
        },
        methods: {
          required: function (t, n, r) {
            if (!this.depend(r, n)) return "dependency-mismatch";
            if ("select" === n.nodeName.toLowerCase()) {
              var i = e(n).val();
              return i && i.length > 0;
            }
            return this.checkable(n)
              ? this.getLength(t, n) > 0
              : e.trim(t).length > 0;
          },
          email: function (e, t) {
            return (
              this.optional(t) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                e
              )
            );
          },
          url: function (e, t) {
            return (
              this.optional(t) ||
              /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                e
              )
            );
          },
          date: function (e, t) {
            return (
              this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            );
          },
          dateISO: function (e, t) {
            return (
              this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            );
          },
          number: function (e, t) {
            return (
              this.optional(t) ||
              /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            );
          },
          digits: function (e, t) {
            return this.optional(t) || /^\d+$/.test(e);
          },
          creditcard: function (e, t) {
            if (this.optional(t)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(e)) return !1;
            var n,
              r,
              i = 0,
              a = 0,
              o = !1;
            if ((e = e.replace(/\D/g, "")).length < 13 || e.length > 19)
              return !1;
            for (n = e.length - 1; n >= 0; n--)
              (r = e.charAt(n)),
                (a = parseInt(r, 10)),
                o && (a *= 2) > 9 && (a -= 9),
                (i += a),
                (o = !o);
            return i % 10 == 0;
          },
          minlength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || i >= r;
          },
          maxlength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || r >= i;
          },
          rangelength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || (i >= r[0] && i <= r[1]);
          },
          min: function (e, t, n) {
            return this.optional(t) || e >= n;
          },
          max: function (e, t, n) {
            return this.optional(t) || n >= e;
          },
          range: function (e, t, n) {
            return this.optional(t) || (e >= n[0] && e <= n[1]);
          },
          equalTo: function (t, n, r) {
            var i = e(r);
            return (
              this.settings.onfocusout &&
                i
                  .unbind(".validate-equalTo")
                  .bind("blur.validate-equalTo", function () {
                    e(n).valid();
                  }),
              t === i.val()
            );
          },
          remote: function (t, n, r) {
            if (this.optional(n)) return "dependency-mismatch";
            var i,
              a,
              o = this.previousValue(n);
            return (
              this.settings.messages[n.name] ||
                (this.settings.messages[n.name] = {}),
              (o.originalMessage = this.settings.messages[n.name].remote),
              (this.settings.messages[n.name].remote = o.message),
              (r = ("string" == typeof r && { url: r }) || r),
              o.old === t
                ? o.valid
                : ((o.old = t),
                  (i = this),
                  this.startRequest(n),
                  ((a = {})[n.name] = t),
                  e.ajax(
                    e.extend(
                      !0,
                      {
                        url: r,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: a,
                        context: i.currentForm,
                        success: function (r) {
                          var a,
                            s,
                            u,
                            l = !0 === r || "true" === r;
                          (i.settings.messages[n.name].remote =
                            o.originalMessage),
                            l
                              ? ((u = i.formSubmitted),
                                i.prepareElement(n),
                                (i.formSubmitted = u),
                                i.successList.push(n),
                                delete i.invalid[n.name],
                                i.showErrors())
                              : ((a = {}),
                                (s = r || i.defaultMessage(n, "remote")),
                                (a[n.name] = o.message =
                                  e.isFunction(s) ? s(t) : s),
                                (i.invalid[n.name] = !0),
                                i.showErrors(a)),
                            (o.valid = l),
                            i.stopRequest(n, l);
                        },
                      },
                      r
                    )
                  ),
                  "pending")
            );
          },
        },
      }),
      (e.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
      });
  })(jQuery),
  (function (e) {
    var t,
      n = {};
    e.ajaxPrefilter
      ? e.ajaxPrefilter(function (e, t, r) {
          var i = e.port;
          "abort" === e.mode && (n[i] && n[i].abort(), (n[i] = r));
        })
      : ((t = e.ajax),
        (e.ajax = function (r) {
          var i = ("mode" in r ? r : e.ajaxSettings).mode,
            a = ("port" in r ? r : e.ajaxSettings).port;
          return "abort" === i
            ? (n[a] && n[a].abort(), (n[a] = t.apply(this, arguments)), n[a])
            : t.apply(this, arguments);
        }));
  })(jQuery),
  (function (e) {
    e.extend(e.fn, {
      validateDelegate: function (t, n, r) {
        return this.bind(n, function (n) {
          var i = e(n.target);
          return i.is(t) ? r.apply(i, arguments) : void 0;
        });
      },
    });
  })(jQuery),
  (function (e) {
    e.validator.addMethod(
      "mc_birthday",
      function (t, n, r) {
        var i = !1,
          a = e("input:not(:hidden)", e(n).closest(r));
        if (0 == a.filter(":filled").length && this.optional(n)) i = !0;
        else {
          var o = new Array();
          (o.month = a.filter("input[name*='[month]']").val()),
            (o.day = a.filter("input[name*='[day]']").val()),
            (o.month = o.month - 1);
          var s = new Date(1970, o.month, o.day);
          i = s.getDate() == o.day && s.getMonth() == o.month;
        }
        return i;
      },
      "Please enter a valid month and day."
    ),
      e.validator.addMethod(
        "mc_date",
        function (t, n, r) {
          var i = !1,
            a = e("input:not(:hidden)", e(n).closest(r));
          if (0 == a.filter(":filled").length && this.optional(n)) i = !0;
          else {
            var o = new Array();
            (o.month = a.filter("input[name*='[month]']").val()),
              (o.day = a.filter("input[name*='[day]']").val()),
              (o.year = a.filter("input[name*='[year]']").val()),
              (o.month = o.month - 1),
              o.year.length < 4 &&
                (o.year =
                  parseInt(o.year) < 50
                    ? 2e3 + parseInt(o.year)
                    : 1900 + parseInt(o.year));
            var s = new Date(o.year, o.month, o.day);
            i =
              s.getDate() == o.day &&
              s.getMonth() == o.month &&
              s.getFullYear() == o.year;
          }
          return i;
        },
        "Please enter a valid date"
      ),
      e.validator.addMethod(
        "mc_phone",
        function (t, n, r) {
          var i = e("input:filled:not(:hidden)", e(n).closest(r));
          return (
            !(0 != i.length || !this.optional(n)) ||
            (10 == (t = i.eq(0).val() + i.eq(1).val() + i.eq(2).val()).length &&
              t.match(/[0-9]{9}/))
          );
        },
        "Please specify a valid phone number"
      ),
      e.validator.addMethod(
        "skip_or_complete_group",
        function (t, n, r) {
          var i = e("input:not(:hidden)", e(n).closest(r)),
            a = i.eq(0),
            o = a.data("valid_skip")
              ? a.data("valid_skip")
              : e.extend({}, this),
            s = i.filter(function () {
              return o.elementValue(this);
            }).length,
            u = 0 === s || s === i.length;
          return (
            a.data("valid_skip", o),
            e(n).data("being_validated") ||
              (i.data("being_validated", !0),
              i.each(function () {
                o.element(this);
              }),
              i.data("being_validated", !1)),
            u
          );
        },
        e.validator.format("Please supply missing fields.")
      ),
      e.validator.addMethod(
        "skip_or_fill_minimum",
        function (t, n, r) {
          var i = e(r[1], n.form),
            a = i.eq(0),
            o = a.data("valid_skip")
              ? a.data("valid_skip")
              : e.extend({}, this),
            s = i.filter(function () {
              return o.elementValue(this);
            }).length,
            u = 0 === s || s >= r[0];
          return (
            console.log(i.eq(0)),
            a.data("valid_skip", o),
            e(n).data("being_validated") ||
              (i.data("being_validated", !0),
              i.each(function () {
                o.element(this);
              }),
              i.data("being_validated", !1)),
            u
          );
        },
        e.validator.format(
          "Please either skip these fields or fill at least {0} of them."
        )
      ),
      e.validator.addMethod(
        "zipcodeUS",
        function (e, t) {
          return this.optional(t) || /^\d{5}-\d{4}$|^\d{5}$/.test(e);
        },
        "The specified US ZIP Code is invalid"
      ),
      e.validator.addMethod(
        "mc_gdpr",
        function (t, n, r) {
          return (
            0 !==
            e("input:not(:hidden)", e(n).closest(r)).filter(":checked").length
          );
        },
        "Please choose an option."
      );
  })(jQuery),
  (function (e) {
    var t = "";
    try {
      t = mc_custom_error_style;
    } catch (e) {
      t =
        "#mc_embed_signup input.mce_inline_error { border-color:#6B0505; } #mc_embed_signup div.mce_inline_error { margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff; }";
    }
    var n = document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    (r.type = "text/css"),
      r.styleSheet
        ? (r.styleSheet.cssText = t)
        : r.appendChild(document.createTextNode(t)),
      n.appendChild(r),
      (window.mc = {
        openPopup: function () {
          e("#mc_embed_signup a.mc_embed_close").show(),
            setTimeout(function () {
              e("#mc_embed_signup").fadeIn();
            }, mc.delayPopup);
        },
        closePopup: function () {
          e("#mc_embed_signup").hide();
          var t = new Date(),
            n = new Date(t.getTime() + 31536e6);
          document.cookie =
            "MCPopupClosed=yes;expires=" + n.toGMTString() + ";path=/";
        },
        evalPopup: function () {
          for (
            e("#mc_embed_signup").hide(),
              cks = document.cookie.split(";"),
              i = 0;
            i < cks.length;
            i++
          )
            (parts = cks[i].split("=")),
              -1 != parts[0].indexOf("MCPopupClosed") && (mc.showPopup = !1);
          mc.showPopup && mc.openPopup();
        },
        getAjaxSubmitUrl: function () {
          var t = e("form#mc-embedded-subscribe-form").attr("action");
          return (t = t.replace("/post?u=", "/post-json?u=")), (t += "&c=?");
        },
        getGroups: function () {
          var t = {};
          return (
            e(".mc-field-group").each(function (n) {
              var r = e(this).find(
                "input:text:not(:hidden), input:checkbox:not(:hidden)"
              );
              if (r.length > 1) {
                var i = r.first().attr("name"),
                  a = e.map(r, function (e) {
                    return e.name;
                  });
                t[i.substring(0, i.indexOf("["))] = a.join(" ");
              }
            }),
            t
          );
        },
        isMultiPartField: function (t) {
          return (
            e("input:not(:hidden)", e(t).closest(".mc-field-group")).length > 1
          );
        },
        isTooEarly: function (t) {
          var n = e("input:not(:hidden)", e(t).closest(".mc-field-group"));
          return e(n).eq(-1).attr("id") != e(t).attr("id");
        },
        mce_success_cb: function (t) {
          if (
            (e("#mce-success-response").hide(),
            e("#mce-error-response").hide(),
            "success" == t.result)
          )
            e("#mce-" + t.result + "-response").show(),
              e("#mce-" + t.result + "-response").html(t.msg),
              e("#mc-embedded-subscribe-form").each(function () {
                this.reset();
              });
          else {
            if ("captcha" === t.msg) {
              var n = e("form#mc-embedded-subscribe-form").attr("action"),
                r = e.param(t.params);
              (n = n.split("?")[0]), (n += "?"), (n += r), window.open(n);
            }
            var a,
              o = -1;
            try {
              var s = t.msg.split(" - ", 2);
              null == s[1]
                ? (a = t.msg)
                : ((i = parseInt(s[0])),
                  i.toString() == s[0]
                    ? ((o = s[0]), (a = s[1]))
                    : ((o = -1), (a = t.msg)));
            } catch (e) {
              (o = -1), (a = t.msg);
            }
            try {
              if (-1 == o)
                e("#mce-" + t.result + "-response").show(),
                  e("#mce-" + t.result + "-response").html(a);
              else {
                var u = e("input[name*='" + fnames[o] + "']").attr("name"),
                  l = {};
                (l[u] = a), mc.mce_validator.showErrors(l);
              }
            } catch (n) {
              e("#mce-" + t.result + "-response").show(),
                e("#mce-" + t.result + "-response").html(a);
            }
          }
        },
      }),
      (window.mc.mce_validator = e("#mc-embedded-subscribe-form").validate({
        errorClass: "mce_inline_error",
        errorElement: "div",
        onkeyup: !1,
        onfocusout: function (t) {
          mc.isTooEarly(t) || e(t).valid();
        },
        onblur: function (t) {
          mc.isTooEarly(t) || e(t).valid();
        },
        groups: mc.getGroups(),
        errorPlacement: function (e, t) {
          t.closest(".mc-field-group").append(e);
        },
        submitHandler: function (t) {
          e(t).ajaxSubmit(mc.ajaxOptions);
        },
      })),
      (window.mc.ajaxOptions = {
        url: mc.getAjaxSubmitUrl(),
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: mc.mce_success_cb,
      }),
      e.validator.addClassRules("birthday", {
        digits: !0,
        mc_birthday: ".datefield",
      }),
      e.validator.addClassRules("datepart", {
        digits: !0,
        mc_date: ".datefield",
      }),
      e.validator.addClassRules("phonepart", {
        digits: !0,
        mc_phone: ".phonefield",
      }),
      e.validator.addClassRules("gdpr", { mc_gdpr: ".gdprRequired" }),
      e("#mc_embed_signup a.mc_embed_close").click(function () {
        mc.closePopup();
      }),
      e(document).keydown(function (e) {
        (keycode = null == e ? event.keyCode : e.which),
          27 == keycode && void 0 !== mc.showPopup && mc.closePopup();
      });
  })(jQuery);
