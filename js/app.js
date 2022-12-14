/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      d: (e, i) => {
        for (var n in i)
          t.o(i, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      afterMain: () => w,
      afterRead: () => b,
      afterWrite: () => O,
      applyStyles: () => D,
      arrow: () => G,
      auto: () => r,
      basePlacements: () => a,
      beforeMain: () => v,
      beforeRead: () => g,
      beforeWrite: () => A,
      bottom: () => n,
      clippingParents: () => h,
      computeStyles: () => et,
      createPopper: () => Dt,
      createPopperBase: () => St,
      createPopperLite: () => It,
      detectOverflow: () => _t,
      end: () => c,
      eventListeners: () => nt,
      flip: () => bt,
      hide: () => wt,
      left: () => o,
      main: () => y,
      modifierPhases: () => C,
      offset: () => At,
      placements: () => m,
      popper: () => u,
      popperGenerator: () => xt,
      popperOffsets: () => Et,
      preventOverflow: () => Ot,
      read: () => _,
      reference: () => p,
      right: () => s,
      start: () => l,
      top: () => i,
      variationPlacements: () => f,
      viewport: () => d,
      write: () => E,
    });
  var i = "top",
    n = "bottom",
    s = "right",
    o = "left",
    r = "auto",
    a = [i, n, s, o],
    l = "start",
    c = "end",
    h = "clippingParents",
    d = "viewport",
    u = "popper",
    p = "reference",
    f = a.reduce(function (t, e) {
      return t.concat([e + "-" + l, e + "-" + c]);
    }, []),
    m = [].concat(a, [r]).reduce(function (t, e) {
      return t.concat([e, e + "-" + l, e + "-" + c]);
    }, []),
    g = "beforeRead",
    _ = "read",
    b = "afterRead",
    v = "beforeMain",
    y = "main",
    w = "afterMain",
    A = "beforeWrite",
    E = "write",
    O = "afterWrite",
    C = [g, _, b, v, y, w, A, E, O];
  function T(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function L(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function k(t) {
    return t instanceof L(t).Element || t instanceof Element;
  }
  function x(t) {
    return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
  }
  function S(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const D = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        x(s) &&
          T(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            x(n) &&
              T(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function I(t) {
    return t.split("-")[0];
  }
  var P = Math.max,
    N = Math.min,
    j = Math.round;
  function M() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function q() {
    return !/^((?!chrome|android).)*safari/i.test(M());
  }
  function $(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      x(t) &&
      ((s = (t.offsetWidth > 0 && j(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && j(n.height) / t.offsetHeight) || 1));
    var r = (k(t) ? L(t) : window).visualViewport,
      a = !q() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function H(t) {
    var e = $(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function B(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && S(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function W(t) {
    return L(t).getComputedStyle(t);
  }
  function F(t) {
    return ["table", "td", "th"].indexOf(T(t)) >= 0;
  }
  function R(t) {
    return ((k(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function z(t) {
    return "html" === T(t)
      ? t
      : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || R(t);
  }
  function V(t) {
    return x(t) && "fixed" !== W(t).position ? t.offsetParent : null;
  }
  function Q(t) {
    for (var e = L(t), i = V(t); i && F(i) && "static" === W(i).position; )
      i = V(i);
    return i &&
      ("html" === T(i) || ("body" === T(i) && "static" === W(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(M());
            if (/Trident/i.test(M()) && x(t) && "fixed" === W(t).position)
              return null;
            var i = z(t);
            for (
              S(i) && (i = i.host);
              x(i) && ["html", "body"].indexOf(T(i)) < 0;

            ) {
              var n = W(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Y(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function K(t, e, i) {
    return P(t, N(e, i));
  }
  function X(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function U(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const G = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        r = t.state,
        l = t.name,
        c = t.options,
        h = r.elements.arrow,
        d = r.modifiersData.popperOffsets,
        u = I(r.placement),
        p = Y(u),
        f = [o, s].indexOf(u) >= 0 ? "height" : "width";
      if (h && d) {
        var m = (function (t, e) {
            return X(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : U(t, a)
            );
          })(c.padding, r),
          g = H(h),
          _ = "y" === p ? i : o,
          b = "y" === p ? n : s,
          v =
            r.rects.reference[f] +
            r.rects.reference[p] -
            d[p] -
            r.rects.popper[f],
          y = d[p] - r.rects.reference[p],
          w = Q(h),
          A = w ? ("y" === p ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
          E = v / 2 - y / 2,
          O = m[_],
          C = A - g[f] - m[b],
          T = A / 2 - g[f] / 2 + E,
          L = K(O, T, C),
          k = p;
        r.modifiersData[l] = (((e = {})[k] = L), (e.centerOffset = L - T), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        B(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function J(t) {
    return t.split("-")[1];
  }
  var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tt(t) {
    var e,
      r = t.popper,
      a = t.popperRect,
      l = t.placement,
      h = t.variation,
      d = t.offsets,
      u = t.position,
      p = t.gpuAcceleration,
      f = t.adaptive,
      m = t.roundOffsets,
      g = t.isFixed,
      _ = d.x,
      b = void 0 === _ ? 0 : _,
      v = d.y,
      y = void 0 === v ? 0 : v,
      w = "function" == typeof m ? m({ x: b, y }) : { x: b, y };
    (b = w.x), (y = w.y);
    var A = d.hasOwnProperty("x"),
      E = d.hasOwnProperty("y"),
      O = o,
      C = i,
      T = window;
    if (f) {
      var k = Q(r),
        x = "clientHeight",
        S = "clientWidth";
      if (
        (k === L(r) &&
          "static" !== W((k = R(r))).position &&
          "absolute" === u &&
          ((x = "scrollHeight"), (S = "scrollWidth")),
        l === i || ((l === o || l === s) && h === c))
      )
        (C = n),
          (y -=
            (g && k === T && T.visualViewport
              ? T.visualViewport.height
              : k[x]) - a.height),
          (y *= p ? 1 : -1);
      if (l === o || ((l === i || l === n) && h === c))
        (O = s),
          (b -=
            (g && k === T && T.visualViewport ? T.visualViewport.width : k[S]) -
            a.width),
          (b *= p ? 1 : -1);
    }
    var D,
      I = Object.assign({ position: u }, f && Z),
      P =
        !0 === m
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: j(e * n) / n || 0, y: j(i * n) / n || 0 };
            })({ x: b, y })
          : { x: b, y };
    return (
      (b = P.x),
      (y = P.y),
      p
        ? Object.assign(
            {},
            I,
            (((D = {})[C] = E ? "0" : ""),
            (D[O] = A ? "0" : ""),
            (D.transform =
              (T.devicePixelRatio || 1) <= 1
                ? "translate(" + b + "px, " + y + "px)"
                : "translate3d(" + b + "px, " + y + "px, 0)"),
            D)
          )
        : Object.assign(
            {},
            I,
            (((e = {})[C] = E ? y + "px" : ""),
            (e[O] = A ? b + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const et = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: I(e.placement),
          variation: J(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          tt(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            tt(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var it = { passive: !0 };
  const nt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = L(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, it);
          }),
        a && l.addEventListener("resize", i.update, it),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, it);
            }),
            a && l.removeEventListener("resize", i.update, it);
        }
      );
    },
    data: {},
  };
  var st = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ot(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return st[t];
    });
  }
  var rt = { start: "end", end: "start" };
  function at(t) {
    return t.replace(/start|end/g, function (t) {
      return rt[t];
    });
  }
  function lt(t) {
    var e = L(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ct(t) {
    return $(R(t)).left + lt(t).scrollLeft;
  }
  function ht(t) {
    var e = W(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function dt(t) {
    return ["html", "body", "#document"].indexOf(T(t)) >= 0
      ? t.ownerDocument.body
      : x(t) && ht(t)
      ? t
      : dt(z(t));
  }
  function ut(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = dt(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = L(n),
      r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(ut(z(r)));
  }
  function pt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function ft(t, e, i) {
    return e === d
      ? pt(
          (function (t, e) {
            var i = L(t),
              n = R(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = q();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + ct(t), y: l };
          })(t, i)
        )
      : k(e)
      ? (function (t, e) {
          var i = $(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : pt(
          (function (t) {
            var e,
              i = R(t),
              n = lt(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = P(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = P(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ct(t),
              l = -n.scrollTop;
            return (
              "rtl" === W(s || i).direction &&
                (a += P(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(R(t))
        );
  }
  function mt(t, e, i, n) {
    var s =
        "clippingParents" === e
          ? (function (t) {
              var e = ut(z(t)),
                i =
                  ["absolute", "fixed"].indexOf(W(t).position) >= 0 && x(t)
                    ? Q(t)
                    : t;
              return k(i)
                ? e.filter(function (t) {
                    return k(t) && B(t, i) && "body" !== T(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      o = [].concat(s, [i]),
      r = o[0],
      a = o.reduce(function (e, i) {
        var s = ft(t, i, n);
        return (
          (e.top = P(s.top, e.top)),
          (e.right = N(s.right, e.right)),
          (e.bottom = N(s.bottom, e.bottom)),
          (e.left = P(s.left, e.left)),
          e
        );
      }, ft(t, r, n));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function gt(t) {
    var e,
      r = t.reference,
      a = t.element,
      h = t.placement,
      d = h ? I(h) : null,
      u = h ? J(h) : null,
      p = r.x + r.width / 2 - a.width / 2,
      f = r.y + r.height / 2 - a.height / 2;
    switch (d) {
      case i:
        e = { x: p, y: r.y - a.height };
        break;
      case n:
        e = { x: p, y: r.y + r.height };
        break;
      case s:
        e = { x: r.x + r.width, y: f };
        break;
      case o:
        e = { x: r.x - a.width, y: f };
        break;
      default:
        e = { x: r.x, y: r.y };
    }
    var m = d ? Y(d) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (u) {
        case l:
          e[m] = e[m] - (r[g] / 2 - a[g] / 2);
          break;
        case c:
          e[m] = e[m] + (r[g] / 2 - a[g] / 2);
      }
    }
    return e;
  }
  function _t(t, e) {
    void 0 === e && (e = {});
    var o = e,
      r = o.placement,
      l = void 0 === r ? t.placement : r,
      c = o.strategy,
      f = void 0 === c ? t.strategy : c,
      m = o.boundary,
      g = void 0 === m ? h : m,
      _ = o.rootBoundary,
      b = void 0 === _ ? d : _,
      v = o.elementContext,
      y = void 0 === v ? u : v,
      w = o.altBoundary,
      A = void 0 !== w && w,
      E = o.padding,
      O = void 0 === E ? 0 : E,
      C = X("number" != typeof O ? O : U(O, a)),
      T = y === u ? p : u,
      L = t.rects.popper,
      x = t.elements[A ? T : y],
      S = mt(k(x) ? x : x.contextElement || R(t.elements.popper), g, b, f),
      D = $(t.elements.reference),
      I = gt({ reference: D, element: L, strategy: "absolute", placement: l }),
      P = pt(Object.assign({}, L, I)),
      N = y === u ? P : D,
      j = {
        top: S.top - N.top + C.top,
        bottom: N.bottom - S.bottom + C.bottom,
        left: S.left - N.left + C.left,
        right: N.right - S.right + C.right,
      },
      M = t.modifiersData.offset;
    if (y === u && M) {
      var q = M[l];
      Object.keys(j).forEach(function (t) {
        var e = [s, n].indexOf(t) >= 0 ? 1 : -1,
          o = [i, n].indexOf(t) >= 0 ? "y" : "x";
        j[t] += q[o] * e;
      });
    }
    return j;
  }
  const bt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        c = t.options,
        h = t.name;
      if (!e.modifiersData[h]._skip) {
        for (
          var d = c.mainAxis,
            u = void 0 === d || d,
            p = c.altAxis,
            g = void 0 === p || p,
            _ = c.fallbackPlacements,
            b = c.padding,
            v = c.boundary,
            y = c.rootBoundary,
            w = c.altBoundary,
            A = c.flipVariations,
            E = void 0 === A || A,
            O = c.allowedAutoPlacements,
            C = e.options.placement,
            T = I(C),
            L =
              _ ||
              (T === C || !E
                ? [ot(C)]
                : (function (t) {
                    if (I(t) === r) return [];
                    var e = ot(t);
                    return [at(t), e, at(e)];
                  })(C)),
            k = [C].concat(L).reduce(function (t, i) {
              return t.concat(
                I(i) === r
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var i = e,
                        n = i.placement,
                        s = i.boundary,
                        o = i.rootBoundary,
                        r = i.padding,
                        l = i.flipVariations,
                        c = i.allowedAutoPlacements,
                        h = void 0 === c ? m : c,
                        d = J(n),
                        u = d
                          ? l
                            ? f
                            : f.filter(function (t) {
                                return J(t) === d;
                              })
                          : a,
                        p = u.filter(function (t) {
                          return h.indexOf(t) >= 0;
                        });
                      0 === p.length && (p = u);
                      var g = p.reduce(function (e, i) {
                        return (
                          (e[i] = _t(t, {
                            placement: i,
                            boundary: s,
                            rootBoundary: o,
                            padding: r,
                          })[I(i)]),
                          e
                        );
                      }, {});
                      return Object.keys(g).sort(function (t, e) {
                        return g[t] - g[e];
                      });
                    })(e, {
                      placement: i,
                      boundary: v,
                      rootBoundary: y,
                      padding: b,
                      flipVariations: E,
                      allowedAutoPlacements: O,
                    })
                  : i
              );
            }, []),
            x = e.rects.reference,
            S = e.rects.popper,
            D = new Map(),
            P = !0,
            N = k[0],
            j = 0;
          j < k.length;
          j++
        ) {
          var M = k[j],
            q = I(M),
            $ = J(M) === l,
            H = [i, n].indexOf(q) >= 0,
            B = H ? "width" : "height",
            W = _t(e, {
              placement: M,
              boundary: v,
              rootBoundary: y,
              altBoundary: w,
              padding: b,
            }),
            F = H ? ($ ? s : o) : $ ? n : i;
          x[B] > S[B] && (F = ot(F));
          var R = ot(F),
            z = [];
          if (
            (u && z.push(W[q] <= 0),
            g && z.push(W[F] <= 0, W[R] <= 0),
            z.every(function (t) {
              return t;
            }))
          ) {
            (N = M), (P = !1);
            break;
          }
          D.set(M, z);
        }
        if (P)
          for (
            var V = function (t) {
                var e = k.find(function (e) {
                  var i = D.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (N = e), "break";
              },
              Q = E ? 3 : 1;
            Q > 0;
            Q--
          ) {
            if ("break" === V(Q)) break;
          }
        e.placement !== N &&
          ((e.modifiersData[h]._skip = !0), (e.placement = N), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function vt(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function yt(t) {
    return [i, s, n, o].some(function (e) {
      return t[e] >= 0;
    });
  }
  const wt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        i = t.name,
        n = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = _t(e, { elementContext: "reference" }),
        a = _t(e, { altBoundary: !0 }),
        l = vt(r, n),
        c = vt(a, s, o),
        h = yt(l),
        d = yt(c);
      (e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d,
        }));
    },
  };
  const At = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        n = t.options,
        r = t.name,
        a = n.offset,
        l = void 0 === a ? [0, 0] : a,
        c = m.reduce(function (t, n) {
          return (
            (t[n] = (function (t, e, n) {
              var r = I(t),
                a = [o, i].indexOf(r) >= 0 ? -1 : 1,
                l =
                  "function" == typeof n
                    ? n(Object.assign({}, e, { placement: t }))
                    : n,
                c = l[0],
                h = l[1];
              return (
                (c = c || 0),
                (h = (h || 0) * a),
                [o, s].indexOf(r) >= 0 ? { x: h, y: c } : { x: c, y: h }
              );
            })(n, e.rects, l)),
            t
          );
        }, {}),
        h = c[e.placement],
        d = h.x,
        u = h.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += d),
        (e.modifiersData.popperOffsets.y += u)),
        (e.modifiersData[r] = c);
    },
  };
  const Et = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        i = t.name;
      e.modifiersData[i] = gt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const Ot = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        r = t.options,
        a = t.name,
        c = r.mainAxis,
        h = void 0 === c || c,
        d = r.altAxis,
        u = void 0 !== d && d,
        p = r.boundary,
        f = r.rootBoundary,
        m = r.altBoundary,
        g = r.padding,
        _ = r.tether,
        b = void 0 === _ || _,
        v = r.tetherOffset,
        y = void 0 === v ? 0 : v,
        w = _t(e, { boundary: p, rootBoundary: f, padding: g, altBoundary: m }),
        A = I(e.placement),
        E = J(e.placement),
        O = !E,
        C = Y(A),
        T = "x" === C ? "y" : "x",
        L = e.modifiersData.popperOffsets,
        k = e.rects.reference,
        x = e.rects.popper,
        S =
          "function" == typeof y
            ? y(Object.assign({}, e.rects, { placement: e.placement }))
            : y,
        D =
          "number" == typeof S
            ? { mainAxis: S, altAxis: S }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
        j = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        M = { x: 0, y: 0 };
      if (L) {
        if (h) {
          var q,
            $ = "y" === C ? i : o,
            B = "y" === C ? n : s,
            W = "y" === C ? "height" : "width",
            F = L[C],
            R = F + w[$],
            z = F - w[B],
            V = b ? -x[W] / 2 : 0,
            X = E === l ? k[W] : x[W],
            U = E === l ? -x[W] : -k[W],
            G = e.elements.arrow,
            Z = b && G ? H(G) : { width: 0, height: 0 },
            tt = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            et = tt[$],
            it = tt[B],
            nt = K(0, k[W], Z[W]),
            st = O
              ? k[W] / 2 - V - nt - et - D.mainAxis
              : X - nt - et - D.mainAxis,
            ot = O
              ? -k[W] / 2 + V + nt + it + D.mainAxis
              : U + nt + it + D.mainAxis,
            rt = e.elements.arrow && Q(e.elements.arrow),
            at = rt ? ("y" === C ? rt.clientTop || 0 : rt.clientLeft || 0) : 0,
            lt = null != (q = null == j ? void 0 : j[C]) ? q : 0,
            ct = F + ot - lt,
            ht = K(b ? N(R, F + st - lt - at) : R, F, b ? P(z, ct) : z);
          (L[C] = ht), (M[C] = ht - F);
        }
        if (u) {
          var dt,
            ut = "x" === C ? i : o,
            pt = "x" === C ? n : s,
            ft = L[T],
            mt = "y" === T ? "height" : "width",
            gt = ft + w[ut],
            bt = ft - w[pt],
            vt = -1 !== [i, o].indexOf(A),
            yt = null != (dt = null == j ? void 0 : j[T]) ? dt : 0,
            wt = vt ? gt : ft - k[mt] - x[mt] - yt + D.altAxis,
            At = vt ? ft + k[mt] + x[mt] - yt - D.altAxis : bt,
            Et =
              b && vt
                ? (function (t, e, i) {
                    var n = K(t, e, i);
                    return n > i ? i : n;
                  })(wt, ft, At)
                : K(b ? wt : gt, ft, b ? At : bt);
          (L[T] = Et), (M[T] = Et - ft);
        }
        e.modifiersData[a] = M;
      }
    },
    requiresIfExists: ["offset"],
  };
  function Ct(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = x(e),
      r =
        x(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = j(e.width) / t.offsetWidth || 1,
            n = j(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = R(e),
      l = $(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== T(e) || ht(a)) &&
          (c =
            (n = e) !== L(n) && x(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : lt(n)),
        x(e)
          ? (((h = $(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = ct(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function Tt(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Lt = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function kt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function xt(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Lt : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Lt, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: k(t)
                  ? ut(t)
                  : t.contextElement
                  ? ut(t.contextElement)
                  : [],
                popper: ut(e),
              });
            var r = (function (t) {
              var e = Tt(t);
              return C.reduce(function (t, i) {
                return t.concat(
                  e.filter(function (t) {
                    return t.phase === i;
                  })
                );
              }, []);
            })(
              (function (t) {
                var e = t.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {});
                return Object.keys(e).map(function (t) {
                  return e[t];
                });
              })([].concat(n, a.options.modifiers))
            );
            return (
              (a.orderedModifiers = r.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n }),
                    r = function () {};
                  l.push(o || r);
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (kt(e, i)) {
                (a.rects = {
                  reference: Ct(e, Q(i), "fixed" === a.options.strategy),
                  popper: H(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!kt(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var St = xt(),
    Dt = xt({ defaultModifiers: [nt, Et, et, D, At, bt, Ot, G, wt] }),
    It = xt({ defaultModifiers: [nt, Et, et, D] });
  const Pt = "transitionend",
    Nt = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    jt = (t) => {
      const e = Nt(t);
      return e && document.querySelector(e) ? e : null;
    },
    Mt = (t) => {
      const e = Nt(t);
      return e ? document.querySelector(e) : null;
    },
    qt = (t) => {
      t.dispatchEvent(new Event(Pt));
    },
    $t = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    Ht = (t) =>
      $t(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    Bt = (t) => {
      if (!$t(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    Wt = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    Ft = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? Ft(t.parentNode)
        : null;
    },
    Rt = () => {},
    zt = (t) => {
      t.offsetHeight;
    },
    Vt = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    Qt = [],
    Yt = () => "rtl" === document.documentElement.dir,
    Kt = (t) => {
      var e;
      (e = () => {
        const e = Vt();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (Qt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of Qt) t();
              }),
            Qt.push(e))
          : e();
    },
    Xt = (t) => {
      "function" == typeof t && t();
    },
    Ut = (t, e, i = !0) => {
      if (!i) return void Xt(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const o = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener(Pt, o), Xt(t));
      };
      e.addEventListener(Pt, o),
        setTimeout(() => {
          s || qt(e);
        }, n);
    },
    Gt = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    Jt = /[^.]*(?=\..*)\.|.*/,
    Zt = /\..*/,
    te = /::\d+$/,
    ee = {};
  let ie = 1;
  const ne = { mouseenter: "mouseover", mouseleave: "mouseout" },
    se = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function oe(t, e) {
    return (e && `${e}::${ie++}`) || t.uidEvent || ie++;
  }
  function re(t) {
    const e = oe(t);
    return (t.uidEvent = e), (ee[e] = ee[e] || {}), ee[e];
  }
  function ae(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function le(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = ue(t);
    return se.has(o) || (o = t), [n, s, o];
  }
  function ce(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = le(e, i, n);
    if (e in ne) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = re(t),
      c = l[a] || (l[a] = {}),
      h = ae(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = oe(r, e.replace(Jt, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      fe(s, { delegateTarget: r }),
                      n.oneOff && pe.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                fe(n, { delegateTarget: t }),
                i.oneOff && pe.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function he(t, e, i, n, s) {
    const o = ae(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function de(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        he(t, e, i, n.callable, n.delegationSelector);
      }
  }
  function ue(t) {
    return (t = t.replace(Zt, "")), ne[t] || t;
  }
  const pe = {
    on(t, e, i, n) {
      ce(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      ce(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = le(e, i, n),
        a = r !== e,
        l = re(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) de(t, l, i, e.slice(1));
        for (const i of Object.keys(c)) {
          const n = i.replace(te, "");
          if (!a || e.includes(n)) {
            const e = c[i];
            he(t, l, r, e.callable, e.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        he(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = Vt();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== ue(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = fe(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function fe(t, e) {
    for (const [i, n] of Object.entries(e || {}))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const me = new Map(),
    ge = {
      set(t, e, i) {
        me.has(t) || me.set(t, new Map());
        const n = me.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (me.has(t) && me.get(t).get(e)) || null,
      remove(t, e) {
        if (!me.has(t)) return;
        const i = me.get(t);
        i.delete(e), 0 === i.size && me.delete(t);
      },
    };
  function _e(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function be(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const ve = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${be(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${be(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = _e(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => _e(t.getAttribute(`data-bs-${be(e)}`)),
  };
  class ye {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = $t(e) ? ve.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...($t(e) ? ve.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          o = t[n],
          r = $t(o)
            ? "element"
            : null == (i = o)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(r))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class we extends ye {
    constructor(t, e) {
      super(),
        (t = Ht(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          ge.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      ge.remove(this._element, this.constructor.DATA_KEY),
        pe.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      Ut(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return ge.get(Ht(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.2.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const Ae = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      n = t.NAME;
    pe.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Wt(this))
      )
        return;
      const s = Mt(this) || this.closest(`.${n}`);
      t.getOrCreateInstance(s)[e]();
    });
  };
  class Ee extends we {
    static get NAME() {
      return "alert";
    }
    close() {
      if (pe.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        pe.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ee.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  Ae(Ee, "close"), Kt(Ee);
  const Oe = '[data-bs-toggle="button"]';
  class Ce extends we {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ce.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  pe.on(document, "click.bs.button.data-api", Oe, (t) => {
    t.preventDefault();
    const e = t.target.closest(Oe);
    Ce.getOrCreateInstance(e).toggle();
  }),
    Kt(Ce);
  const Te = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !Wt(t) && Bt(t));
      },
    },
    Le = ".bs.swipe",
    ke = { endCallback: null, leftCallback: null, rightCallback: null },
    xe = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class Se extends ye {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Se.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return ke;
    }
    static get DefaultType() {
      return xe;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      pe.off(this._element, Le);
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        Xt(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && Xt(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (pe.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
          pe.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (pe.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
          pe.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
          pe.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const De = "next",
    Ie = "prev",
    Pe = "left",
    Ne = "right",
    je = "slid.bs.carousel",
    Me = "carousel",
    qe = "active",
    $e = ".active",
    He = ".carousel-item",
    Be = { ArrowLeft: Ne, ArrowRight: Pe },
    We = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    Fe = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class Re extends we {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = Te.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === Me && this.cycle();
    }
    static get Default() {
      return We;
    }
    static get DefaultType() {
      return Fe;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(De);
    }
    nextWhenVisible() {
      !document.hidden && Bt(this._element) && this.next();
    }
    prev() {
      this._slide(Ie);
    }
    pause() {
      this._isSliding && qt(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? pe.one(this._element, je, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void pe.one(this._element, je, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? De : Ie;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        pe.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (pe.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          pe.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch &&
          Se.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of Te.find(".carousel-item img", this._element))
        pe.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(Pe)),
        rightCallback: () => this._slide(this._directionToOrder(Ne)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new Se(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Be[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = Te.findOne($e, this._indicatorsElement);
      e.classList.remove(qe), e.removeAttribute("aria-current");
      const i = Te.findOne(
        `[data-bs-slide-to="${t}"]`,
        this._indicatorsElement
      );
      i && (i.classList.add(qe), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === De,
        s = e || Gt(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          pe.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r("slide.bs.carousel").defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), zt(s), i.classList.add(l), s.classList.add(l);
      this._queueCallback(
        () => {
          s.classList.remove(l, c),
            s.classList.add(qe),
            i.classList.remove(qe, c, l),
            (this._isSliding = !1),
            r(je);
        },
        i,
        this._isAnimated()
      ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return Te.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return Te.find(He, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return Yt() ? (t === Pe ? Ie : De) : t === Pe ? De : Ie;
    }
    _orderToDirection(t) {
      return Yt() ? (t === Ie ? Pe : Ne) : t === Ie ? Ne : Pe;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Re.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  pe.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (t) {
      const e = Mt(this);
      if (!e || !e.classList.contains(Me)) return;
      t.preventDefault();
      const i = Re.getOrCreateInstance(e),
        n = this.getAttribute("data-bs-slide-to");
      return n
        ? (i.to(n), void i._maybeEnableCycle())
        : "next" === ve.getDataAttribute(this, "slide")
        ? (i.next(), void i._maybeEnableCycle())
        : (i.prev(), void i._maybeEnableCycle());
    }
  ),
    pe.on(window, "load.bs.carousel.data-api", () => {
      const t = Te.find('[data-bs-ride="carousel"]');
      for (const e of t) Re.getOrCreateInstance(e);
    }),
    Kt(Re);
  const ze = "show",
    Ve = "collapse",
    Qe = "collapsing",
    Ye = '[data-bs-toggle="collapse"]',
    Ke = { parent: null, toggle: !0 },
    Xe = { parent: "(null|element)", toggle: "boolean" };
  class Ue extends we {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = Te.find(Ye);
      for (const t of i) {
        const e = jt(t),
          i = Te.find(e).filter((t) => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Ke;
    }
    static get DefaultType() {
      return Xe;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => Ue.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (pe.trigger(this._element, "show.bs.collapse").defaultPrevented)
        return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(Ve),
        this._element.classList.add(Qe),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Qe),
            this._element.classList.add(Ve, ze),
            (this._element.style[e] = ""),
            pe.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (pe.trigger(this._element, "hide.bs.collapse").defaultPrevented)
        return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        zt(this._element),
        this._element.classList.add(Qe),
        this._element.classList.remove(Ve, ze);
      for (const t of this._triggerArray) {
        const e = Mt(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Qe),
              this._element.classList.add(Ve),
              pe.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(ze);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = Ht(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(Ye);
      for (const e of t) {
        const t = Mt(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = Te.find(":scope .collapse .collapse", this._config.parent);
      return Te.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = Ue.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  pe.on(document, "click.bs.collapse.data-api", Ye, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = jt(this),
      i = Te.find(e);
    for (const t of i) Ue.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    Kt(Ue);
  const Ge = "dropdown",
    Je = "ArrowUp",
    Ze = "ArrowDown",
    ti = "click.bs.dropdown.data-api",
    ei = "keydown.bs.dropdown.data-api",
    ii = "show",
    ni = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    si = `${ni}.show`,
    oi = ".dropdown-menu",
    ri = Yt() ? "top-end" : "top-start",
    ai = Yt() ? "top-start" : "top-end",
    li = Yt() ? "bottom-end" : "bottom-start",
    ci = Yt() ? "bottom-start" : "bottom-end",
    hi = Yt() ? "left-start" : "right-start",
    di = Yt() ? "right-start" : "left-start",
    ui = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    pi = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class fi extends we {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          Te.next(this._element, oi)[0] ||
          Te.prev(this._element, oi)[0] ||
          Te.findOne(oi, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return ui;
    }
    static get DefaultType() {
      return pi;
    }
    static get NAME() {
      return Ge;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (Wt(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!pe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            pe.on(t, "mouseover", Rt);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(ii),
          this._element.classList.add(ii),
          pe.trigger(this._element, "shown.bs.dropdown", t);
      }
    }
    hide() {
      if (Wt(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!pe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            pe.off(t, "mouseover", Rt);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(ii),
          this._element.classList.remove(ii),
          this._element.setAttribute("aria-expanded", "false"),
          ve.removeDataAttribute(this._menu, "popper"),
          pe.trigger(this._element, "hidden.bs.dropdown", t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !$t(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Ge.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : $t(this._config.reference)
        ? (t = Ht(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const i = this._getPopperConfig();
      this._popper = Dt(t, this._menu, i);
    }
    _isShown() {
      return this._menu.classList.contains(ii);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return hi;
      if (t.classList.contains("dropstart")) return di;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ai : ri) : e ? ci : li;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (ve.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Te.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter((t) => Bt(t));
      i.length && Gt(i, e, t === Ze, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = fi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = Te.find(si);
      for (const i of e) {
        const e = fi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Je, Ze].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(ni)
          ? this
          : Te.prev(this, ni)[0] ||
            Te.next(this, ni)[0] ||
            Te.findOne(ni, t.delegateTarget.parentNode),
        o = fi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  pe.on(document, ei, ni, fi.dataApiKeydownHandler),
    pe.on(document, ei, oi, fi.dataApiKeydownHandler),
    pe.on(document, ti, fi.clearMenus),
    pe.on(document, "keyup.bs.dropdown.data-api", fi.clearMenus),
    pe.on(document, ti, ni, function (t) {
      t.preventDefault(), fi.getOrCreateInstance(this).toggle();
    }),
    Kt(fi);
  const mi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    gi = ".sticky-top",
    _i = "padding-right",
    bi = "margin-right";
  class vi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, _i, (e) => e + t),
        this._setElementAttributes(mi, _i, (e) => e + t),
        this._setElementAttributes(gi, bi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, _i),
        this._resetElementAttributes(mi, _i),
        this._resetElementAttributes(gi, bi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && ve.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = ve.getDataAttribute(t, e);
        null !== i
          ? (ve.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if ($t(t)) e(t);
      else for (const i of Te.find(t, this._element)) e(i);
    }
  }
  const yi = "backdrop",
    wi = "show",
    Ai = "mousedown.bs.backdrop",
    Ei = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    Oi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class Ci extends ye {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return Ei;
    }
    static get DefaultType() {
      return Oi;
    }
    static get NAME() {
      return yi;
    }
    show(t) {
      if (!this._config.isVisible) return void Xt(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && zt(e),
        e.classList.add(wi),
        this._emulateAnimation(() => {
          Xt(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(wi),
          this._emulateAnimation(() => {
            this.dispose(), Xt(t);
          }))
        : Xt(t);
    }
    dispose() {
      this._isAppended &&
        (pe.off(this._element, Ai),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = Ht(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        pe.on(t, Ai, () => {
          Xt(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      Ut(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Ti = ".bs.focustrap",
    Li = "backward",
    ki = { autofocus: !0, trapElement: null },
    xi = { autofocus: "boolean", trapElement: "element" };
  class Si extends ye {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return ki;
    }
    static get DefaultType() {
      return xi;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        pe.off(document, Ti),
        pe.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        pe.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), pe.off(document, Ti));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = Te.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Li
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Li : "forward");
    }
  }
  const Di = ".bs.modal",
    Ii = "hidden.bs.modal",
    Pi = "show.bs.modal",
    Ni = "modal-open",
    ji = "show",
    Mi = "modal-static",
    qi = { backdrop: !0, focus: !0, keyboard: !0 },
    $i = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class Hi extends we {
    constructor(t, e) {
      super(t, e),
        (this._dialog = Te.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new vi()),
        this._addEventListeners();
    }
    static get Default() {
      return qi;
    }
    static get DefaultType() {
      return $i;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      pe.trigger(this._element, Pi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Ni),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      pe.trigger(this._element, "hide.bs.modal").defaultPrevented ||
        ((this._isShown = !1),
        (this._isTransitioning = !0),
        this._focustrap.deactivate(),
        this._element.classList.remove(ji),
        this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        ));
    }
    dispose() {
      for (const t of [window, this._dialog]) pe.off(t, Di);
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ci({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Si({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = Te.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        zt(this._element),
        this._element.classList.add(ji);
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            pe.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
        },
        this._dialog,
        this._isAnimated()
      );
    }
    _addEventListeners() {
      pe.on(this._element, "keydown.dismiss.bs.modal", (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        pe.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        pe.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          pe.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Ni),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            pe.trigger(this._element, Ii);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (pe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(Mi) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Mi),
        this._queueCallback(() => {
          this._element.classList.remove(Mi),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = Yt() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = Yt() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  pe.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = Mt(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        pe.one(e, Pi, (t) => {
          t.defaultPrevented ||
            pe.one(e, Ii, () => {
              Bt(this) && this.focus();
            });
        });
      const i = Te.findOne(".modal.show");
      i && Hi.getInstance(i).hide();
      Hi.getOrCreateInstance(e).toggle(this);
    }
  ),
    Ae(Hi),
    Kt(Hi);
  const Bi = "show",
    Wi = "showing",
    Fi = "hiding",
    Ri = ".offcanvas.show",
    zi = "hidePrevented.bs.offcanvas",
    Vi = "hidden.bs.offcanvas",
    Qi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Yi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class Ki extends we {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Qi;
    }
    static get DefaultType() {
      return Yi;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (
        pe.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented
      )
        return;
      (this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new vi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Wi);
      this._queueCallback(
        () => {
          (this._config.scroll && !this._config.backdrop) ||
            this._focustrap.activate(),
            this._element.classList.add(Bi),
            this._element.classList.remove(Wi),
            pe.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (pe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
        return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add(Fi),
        this._backdrop.hide();
      this._queueCallback(
        () => {
          this._element.classList.remove(Bi, Fi),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._config.scroll || new vi().reset(),
            pe.trigger(this._element, Vi);
        },
        this._element,
        !0
      );
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Ci({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : pe.trigger(this._element, zi);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Si({ trapElement: this._element });
    }
    _addEventListeners() {
      pe.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : pe.trigger(this._element, zi));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ki.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  pe.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = Mt(this);
      if (
        (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this))
      )
        return;
      pe.one(e, Vi, () => {
        Bt(this) && this.focus();
      });
      const i = Te.findOne(Ri);
      i && i !== e && Ki.getInstance(i).hide();
      Ki.getOrCreateInstance(e).toggle(this);
    }
  ),
    pe.on(window, "load.bs.offcanvas.data-api", () => {
      for (const t of Te.find(Ri)) Ki.getOrCreateInstance(t).show();
    }),
    pe.on(window, "resize.bs.offcanvas", () => {
      for (const t of Te.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          Ki.getOrCreateInstance(t).hide();
    }),
    Ae(Ki),
    Kt(Ki);
  const Xi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Ui = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Gi =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ji = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !Xi.has(i) || Boolean(Ui.test(t.nodeValue) || Gi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Zi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    };
  const tn = {
      allowList: Zi,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    en = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    nn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class sn extends ye {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return tn;
    }
    static get DefaultType() {
      return en;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, nn);
    }
    _setContent(t, e, i) {
      const n = Te.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? $t(e)
            ? this._putElementInTemplate(Ht(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Ji(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const on = new Set(["sanitize", "allowList", "sanitizeFn"]),
    rn = "fade",
    an = "show",
    ln = ".modal",
    cn = "hide.bs.modal",
    hn = "hover",
    dn = "focus",
    un = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: Yt() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: Yt() ? "right" : "left",
    },
    pn = {
      allowList: Zi,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    fn = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class mn extends we {
    constructor(t, i) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, i),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return pn;
    }
    static get DefaultType() {
      return fn;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        pe.off(this._element.closest(ln), cn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = pe.trigger(this._element, this.constructor.eventName("show")),
        e = (
          Ft(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this.tip && (this.tip.remove(), (this.tip = null));
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          pe.trigger(this._element, this.constructor.eventName("inserted"))),
        this._popper
          ? this._popper.update()
          : (this._popper = this._createPopper(i)),
        i.classList.add(an),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          pe.on(t, "mouseover", Rt);
      this._queueCallback(
        () => {
          pe.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (
        pe.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      )
        return;
      const t = this._getTipElement();
      if ((t.classList.remove(an), "ontouchstart" in document.documentElement))
        for (const t of [].concat(...document.body.children))
          pe.off(t, "mouseover", Rt);
      (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1),
        (this._isHovered = null);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._isHovered || t.remove(),
            this._element.removeAttribute("aria-describedby"),
            pe.trigger(this._element, this.constructor.eventName("hidden")),
            this._disposePopper());
        },
        this.tip,
        this._isAnimated()
      );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(rn, an),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(rn), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new sn({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(rn))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(an);
    }
    _createPopper(t) {
      const e =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = un[e.toUpperCase()];
      return Dt(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          pe.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === hn
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === hn
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          pe.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e._enter();
          }),
            pe.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? dn : hn] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        pe.on(this._element.closest(ln), cn, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = ve.getDataAttributes(this._element);
      for (const t of Object.keys(e)) on.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : Ht(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = mn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Kt(mn);
  const gn = {
      ...mn.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    _n = { ...mn.DefaultType, content: "(null|string|element|function)" };
  class bn extends mn {
    static get Default() {
      return gn;
    }
    static get DefaultType() {
      return _n;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = bn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Kt(bn);
  const vn = "click.bs.scrollspy",
    yn = "active",
    wn = "[href]",
    An = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    En = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class On extends we {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return An;
    }
    static get DefaultType() {
      return En;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = Ht(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (pe.off(this._config.target, vn),
        pe.on(this._config.target, vn, wn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = Te.find(wn, this._config.target);
      for (const e of t) {
        if (!e.hash || Wt(e)) continue;
        const t = Te.findOne(e.hash, this._element);
        Bt(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(yn),
        this._activateParents(t),
        pe.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t,
        }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        Te.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(
          yn
        );
      else
        for (const e of Te.parents(t, ".nav, .list-group"))
          for (const t of Te.prev(
            e,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            t.classList.add(yn);
    }
    _clearActiveClass(t) {
      t.classList.remove(yn);
      const e = Te.find("[href].active", t);
      for (const t of e) t.classList.remove(yn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = On.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  pe.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of Te.find('[data-bs-spy="scroll"]'))
      On.getOrCreateInstance(t);
  }),
    Kt(On);
  const Cn = "ArrowLeft",
    Tn = "ArrowRight",
    Ln = "ArrowUp",
    kn = "ArrowDown",
    xn = "active",
    Sn = "fade",
    Dn = "show",
    In =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    Pn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${In}`;
  class Nn extends we {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          pe.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? pe.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
      pe.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(xn), this._activate(Mt(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.removeAttribute("tabindex"),
              t.setAttribute("aria-selected", !0),
              this._toggleDropDown(t, !0),
              pe.trigger(t, "shown.bs.tab", { relatedTarget: e }))
            : t.classList.add(Dn);
        },
        t,
        t.classList.contains(Sn)
      );
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(xn), t.blur(), this._deactivate(Mt(t));
      this._queueCallback(
        () => {
          "tab" === t.getAttribute("role")
            ? (t.setAttribute("aria-selected", !1),
              t.setAttribute("tabindex", "-1"),
              this._toggleDropDown(t, !1),
              pe.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
            : t.classList.remove(Dn);
        },
        t,
        t.classList.contains(Sn)
      );
    }
    _keydown(t) {
      if (![Cn, Tn, Ln, kn].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [Tn, kn].includes(t.key),
        i = Gt(
          this._getChildren().filter((t) => !Wt(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), Nn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return Te.find(Pn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = Mt(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = Te.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", xn),
        n(".dropdown-menu", Dn),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(xn);
    }
    _getInnerElement(t) {
      return t.matches(Pn) ? t : Te.findOne(Pn, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Nn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  pe.on(document, "click.bs.tab", In, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      Wt(this) || Nn.getOrCreateInstance(this).show();
  }),
    pe.on(window, "load.bs.tab", () => {
      for (const t of Te.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        Nn.getOrCreateInstance(t);
    }),
    Kt(Nn);
  const jn = "hide",
    Mn = "show",
    qn = "showing",
    $n = { animation: "boolean", autohide: "boolean", delay: "number" },
    Hn = { animation: !0, autohide: !0, delay: 5e3 };
  class Bn extends we {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Hn;
    }
    static get DefaultType() {
      return $n;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      if (pe.trigger(this._element, "show.bs.toast").defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      this._element.classList.remove(jn),
        zt(this._element),
        this._element.classList.add(Mn, qn),
        this._queueCallback(
          () => {
            this._element.classList.remove(qn),
              pe.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this.isShown()) return;
      if (pe.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
      this._element.classList.add(qn),
        this._queueCallback(
          () => {
            this._element.classList.add(jn),
              this._element.classList.remove(qn, Mn),
              pe.trigger(this._element, "hidden.bs.toast");
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Mn),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Mn);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      pe.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        pe.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        pe.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        pe.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Bn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  function Wn(t) {
    this.type = t;
  }
  Ae(Bn),
    Kt(Bn),
    (Wn.prototype.init = function () {
      const t = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          i = e.dataset.da.trim().split(","),
          n = {};
        (n.element = e),
          (n.parent = e.parentNode),
          (n.destination = document.querySelector(i[0].trim())),
          (n.breakpoint = i[1] ? i[1].trim() : "767"),
          (n.place = i[2] ? i[2].trim() : "last"),
          (n.index = this.indexInParent(n.parent, n.element)),
          this.??bjects.push(n);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, i) {
            return Array.prototype.indexOf.call(i, t) === e;
          }
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const i = this.mediaQueries[e],
          n = String.prototype.split.call(i, ","),
          s = window.matchMedia(n[0]),
          o = n[1],
          r = Array.prototype.filter.call(this.??bjects, function (t) {
            return t.breakpoint === o;
          });
        s.addListener(function () {
          t.mediaHandler(s, r);
        }),
          this.mediaHandler(s, r);
      }
    }),
    (Wn.prototype.mediaHandler = function (t, e) {
      if (t.matches)
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          (i.index = this.indexInParent(i.parent, i.element)),
            this.moveTo(i.place, i.element, i.destination);
        }
      else
        for (let t = e.length - 1; t >= 0; t--) {
          const i = e[t];
          i.element.classList.contains(this.daClassname) &&
            this.moveBack(i.parent, i.element, i.index);
        }
    }),
    (Wn.prototype.moveTo = function (t, e, i) {
      e.classList.add(this.daClassname),
        "last" === t || t >= i.children.length
          ? i.insertAdjacentElement("beforeend", e)
          : "first" !== t
          ? i.children[t].insertAdjacentElement("beforebegin", e)
          : i.insertAdjacentElement("afterbegin", e);
    }),
    (Wn.prototype.moveBack = function (t, e, i) {
      e.classList.remove(this.daClassname),
        void 0 !== t.children[i]
          ? t.children[i].insertAdjacentElement("beforebegin", e)
          : t.insertAdjacentElement("beforeend", e);
    }),
    (Wn.prototype.indexInParent = function (t, e) {
      const i = Array.prototype.slice.call(t.children);
      return Array.prototype.indexOf.call(i, e);
    }),
    (Wn.prototype.arraySort = function (t) {
      "min" === this.type
        ? Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? -1
                : "last" === t.place || "first" === e.place
                ? 1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          })
        : Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? 1
                : "last" === t.place || "first" === e.place
                ? -1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          });
    });
  new Wn("max").init();
  class Fn {
    constructor(t) {
      let e = {
        logging: !0,
        init: !0,
        attributeOpenButton: "data-popup",
        attributeCloseButton: "data-close",
        fixElementSelector: "[data-lp]",
        youtubeAttribute: "data-youtube",
        youtubePlaceAttribute: "data-youtube-place",
        setAutoplayYoutube: !0,
        classes: {
          popup: "popup",
          popupContent: "popup__content",
          popupActive: "popup_show",
          bodyActive: "popup-show",
        },
        focusCatch: !0,
        closeEsc: !0,
        bodyLock: !0,
        bodyLockDelay: 500,
        hashSettings: { location: !0, goHash: !0 },
        on: {
          beforeOpen: function () {},
          afterOpen: function () {},
          beforeClose: function () {},
          afterClose: function () {},
        },
      };
      (this.isOpen = !1),
        (this.targetOpen = { selector: !1, element: !1 }),
        (this.previousOpen = { selector: !1, element: !1 }),
        (this.lastClosed = { selector: !1, element: !1 }),
        (this._dataValue = !1),
        (this.hash = !1),
        (this._reopen = !1),
        (this._selectorOpen = !1),
        (this.lastFocusEl = !1),
        (this._focusEl = [
          "a[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "button:not([disabled]):not([aria-hidden])",
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "area[href]",
          "iframe",
          "object",
          "embed",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])',
        ]),
        (this.options = {
          ...e,
          ...t,
          classes: { ...e.classes, ...t?.classes },
          hashSettings: { ...e.hashSettings, ...t?.hashSettings },
          on: { ...e.on, ...t?.on },
        }),
        this.options.init && this.initPopups();
    }
    initPopups() {
      this.popupLogging("??????????????????"), this.eventsPopup();
    }
    eventsPopup() {
      document.addEventListener(
        "click",
        function (t) {
          const e = t.target.closest(`[${this.options.attributeOpenButton}]`);
          if (e)
            return (
              t.preventDefault(),
              (this._dataValue = e.getAttribute(
                this.options.attributeOpenButton
              )
                ? e.getAttribute(this.options.attributeOpenButton)
                : "error"),
              "error" !== this._dataValue
                ? (this.isOpen || (this.lastFocusEl = e),
                  (this.targetOpen.selector = `${this._dataValue}`),
                  (this._selectorOpen = !0),
                  void this.open())
                : void this.popupLogging(
                    `???? ????, ???? ???????????????? ?????????????? ?? ${e.classList}`
                  )
            );
          return t.target.closest(`[${this.options.attributeCloseButton}]`) ||
            (!t.target.closest(`.${this.options.classes.popupContent}`) &&
              this.isOpen)
            ? (t.preventDefault(), void this.close())
            : void 0;
        }.bind(this)
      ),
        document.addEventListener(
          "keydown",
          function (t) {
            if (
              this.options.closeEsc &&
              27 == t.which &&
              "Escape" === t.code &&
              this.isOpen
            )
              return t.preventDefault(), void this.close();
            this.options.focusCatch &&
              9 == t.which &&
              this.isOpen &&
              this._focusCatch(t);
          }.bind(this)
        ),
        document.querySelector("form[data-ajax],form[data-dev]") &&
          document.addEventListener(
            "formSent",
            function (t) {
              const e = t.detail.form.dataset.popupMessage;
              e && this.open(e);
            }.bind(this)
          ),
        this.options.hashSettings.goHash &&
          (window.addEventListener(
            "hashchange",
            function () {
              window.location.hash
                ? this._openToHash()
                : this.close(this.targetOpen.selector);
            }.bind(this)
          ),
          window.addEventListener(
            "load",
            function () {
              window.location.hash && this._openToHash();
            }.bind(this)
          ));
    }
    open(t) {
      if (
        (t &&
          "string" == typeof t &&
          "" !== t.trim() &&
          ((this.targetOpen.selector = t), (this._selectorOpen = !0)),
        this.isOpen && ((this._reopen = !0), this.close()),
        this._selectorOpen ||
          (this.targetOpen.selector = this.lastClosed.selector),
        this._reopen || (this.previousActiveElement = document.activeElement),
        (this.targetOpen.element = document.querySelector(
          this.targetOpen.selector
        )),
        this.targetOpen.element)
      ) {
        if (
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
        ) {
          const t = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
              this.options.youtubeAttribute
            )}?rel=0&showinfo=0&autoplay=1`,
            e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", "");
          const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
          e.setAttribute("allow", `${i}; encrypted-media`),
            e.setAttribute("src", t),
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ) &&
              this.targetOpen.element
                .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                .appendChild(e);
        }
        this.options.hashSettings.location &&
          (this._getHash(), this._setHash()),
          this.options.on.beforeOpen(this),
          this.targetOpen.element.classList.add(
            this.options.classes.popupActive
          ),
          document.body.classList.add(this.options.classes.bodyActive),
          this._reopen ? (this._reopen = !1) : zn(),
          this.targetOpen.element.setAttribute("aria-hidden", "false"),
          (this.previousOpen.selector = this.targetOpen.selector),
          (this.previousOpen.element = this.targetOpen.element),
          (this._selectorOpen = !1),
          (this.isOpen = !0),
          setTimeout(() => {
            this._focusTrap();
          }, 50),
          document.dispatchEvent(
            new CustomEvent("afterPopupOpen", { detail: { popup: this } })
          ),
          this.popupLogging("???????????? ??????????");
      } else
        this.popupLogging(
          "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
        );
    }
    close(t) {
      t &&
        "string" == typeof t &&
        "" !== t.trim() &&
        (this.previousOpen.selector = t),
        this.isOpen &&
          Rn &&
          (this.options.on.beforeClose(this),
          this.targetOpen.element.hasAttribute(this.options.youtubeAttribute) &&
            this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ) &&
            (this.targetOpen.element.querySelector(
              `[${this.options.youtubePlaceAttribute}]`
            ).innerHTML = ""),
          this.previousOpen.element.classList.remove(
            this.options.classes.popupActive
          ),
          this.previousOpen.element.setAttribute("aria-hidden", "true"),
          this._reopen ||
            (document.body.classList.remove(this.options.classes.bodyActive),
            zn(),
            (this.isOpen = !1)),
          this._removeHash(),
          this._selectorOpen &&
            ((this.lastClosed.selector = this.previousOpen.selector),
            (this.lastClosed.element = this.previousOpen.element)),
          this.options.on.afterClose(this),
          setTimeout(() => {
            this._focusTrap();
          }, 50),
          this.popupLogging("???????????? ??????????"));
    }
    _getHash() {
      this.options.hashSettings.location &&
        (this.hash = this.targetOpen.selector.includes("#")
          ? this.targetOpen.selector
          : this.targetOpen.selector.replace(".", "#"));
    }
    _openToHash() {
      let t = document.querySelector(
        `.${window.location.hash.replace("#", "")}`
      )
        ? `.${window.location.hash.replace("#", "")}`
        : document.querySelector(`${window.location.hash}`)
        ? `${window.location.hash}`
        : null;
      document.querySelector(`[${this.options.attributeOpenButton}="${t}"]`) &&
        t &&
        this.open(t);
    }
    _setHash() {
      history.pushState("", "", this.hash);
    }
    _removeHash() {
      history.pushState("", "", window.location.href.split("#")[0]);
    }
    _focusCatch(t) {
      const e = this.targetOpen.element.querySelectorAll(this._focusEl),
        i = Array.prototype.slice.call(e),
        n = i.indexOf(document.activeElement);
      t.shiftKey && 0 === n && (i[i.length - 1].focus(), t.preventDefault()),
        t.shiftKey || n !== i.length - 1 || (i[0].focus(), t.preventDefault());
    }
    _focusTrap() {
      const t = this.previousOpen.element.querySelectorAll(this._focusEl);
      !this.isOpen && this.lastFocusEl
        ? this.lastFocusEl.focus()
        : t[0].focus();
    }
    popupLogging(t) {
      this.options.logging && Yn(`[??????????????]: ${t}`);
    }
  }
  let Rn = !0,
    zn = (t = 500) => {
      document.documentElement.classList.contains("lock") ? Vn(t) : Qn(t);
    },
    Vn = (t = 500) => {
      let e = document.querySelector("body"),
        i = document.querySelector(".header");
      if (Rn) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            (i.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (Rn = !1),
          setTimeout(function () {
            Rn = !0;
          }, t);
      }
    },
    Qn = (t = 500) => {
      let e = document.querySelector("body"),
        i = document.querySelector(".header");
      if (Rn) {
        let n = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < n.length; t++) {
          n[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
          document.documentElement.classList.add("lock"),
          (Rn = !1),
          setTimeout(function () {
            Rn = !0;
          }, t);
      }
    };
  function Yn(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  let Kn = (t, e = !1, i = 500, n = 0) => {
    const s = document.querySelector(t);
    if (s) {
      let o = "",
        r = 0;
      e &&
        ((o = "header.header"), (r = document.querySelector(o).offsetHeight));
      let a = {
        speedAsDuration: !0,
        speed: i,
        header: o,
        offset: n,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (Vn(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(s, "", a);
      else {
        let t = s.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: r ? t - r : t, behavior: "smooth" });
      }
      Yn(`[gotoBlock]: ????????...???????? ?? ${t}`);
    } else Yn(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${t}`);
  };
  const Xn = { inputMaskModule: null, selectModule: null };
  let Un = {
    getErrors(t) {
      let e = 0,
        i = t.querySelectorAll("*[data-required]");
      return (
        i.length &&
          i.forEach((t) => {
            (null === t.offsetParent && "SELECT" !== t.tagName) ||
              t.disabled ||
              (e += this.validateInput(t));
          }),
        e
      );
    },
    validateInput(t) {
      let e = 0;
      return (
        "email" === t.dataset.required
          ? ((t.value = t.value.replace(" ", "")),
            this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
          : ("checkbox" !== t.type || t.checked) && t.value
          ? this.removeError(t)
          : (this.addError(t), e++),
        e
      );
    },
    addError(t) {
      t.classList.add("_form-error"),
        t.parentElement.classList.add("_form-error");
      let e = t.parentElement.querySelector(".form__error");
      e && t.parentElement.removeChild(e),
        t.dataset.error &&
          t.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${t.dataset.error}</div>`
          );
    },
    removeError(t) {
      t.classList.remove("_form-error"),
        t.parentElement.classList.remove("_form-error"),
        t.parentElement.querySelector(".form__error") &&
          t.parentElement.removeChild(
            t.parentElement.querySelector(".form__error")
          );
    },
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let e = t.querySelectorAll("input,textarea");
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            i.parentElement.classList.remove("_form-focus"),
              i.classList.remove("_form-focus"),
              Un.removeError(i),
              (i.value = i.dataset.placeholder);
          }
          let i = t.querySelectorAll(".checkbox__input");
          if (i.length > 0)
            for (let t = 0; t < i.length; t++) {
              i[t].checked = !1;
            }
          if (Xn.selectModule) {
            let e = t.querySelectorAll(".select");
            if (e.length)
              for (let t = 0; t < e.length; t++) {
                const i = e[t].querySelector("select");
                Xn.selectModule.selectBuild(i);
              }
          }
        }, 0);
    },
    emailTest: (t) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
  };
  let Gn = !1;
  setTimeout(() => {
    if (Gn) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    document.addEventListener("click", (t) => {
      t.target.classList.contains("menu__link") &&
        document.documentElement.classList.contains("menu-open") &&
        (document.documentElement.classList.remove("menu-open"),
        document.documentElement.classList.remove("lock"));
    }),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          Rn && (zn(), document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    new Fn({}),
    (function () {
      const t = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      t.length &&
        t.forEach((t) => {
          t.dataset.placeholder = t.placeholder;
        }),
        document.body.addEventListener("focusin", function (t) {
          const e = t.target;
          ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
            (e.dataset.placeholder && (e.placeholder = ""),
            e.classList.add("_form-focus"),
            e.parentElement.classList.add("_form-focus"),
            Un.removeError(e));
        }),
        document.body.addEventListener("focusout", function (t) {
          const e = t.target;
          ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
            (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
            e.classList.remove("_form-focus"),
            e.parentElement.classList.remove("_form-focus"),
            e.hasAttribute("data-validate") && Un.validateInput(e));
        });
    })(),
    (function (t) {
      const e = document.forms;
      if (e.length)
        for (const t of e)
          t.addEventListener("submit", function (t) {
            i(t.target, t);
          }),
            t.addEventListener("reset", function (t) {
              const e = t.target;
              Un.formClean(e);
            });
      async function i(e, i) {
        if (0 === (t ? Un.getErrors(e) : 0)) {
          if (e.hasAttribute("data-ajax")) {
            i.preventDefault();
            const t = e.getAttribute("action")
                ? e.getAttribute("action").trim()
                : "#",
              s = e.getAttribute("method")
                ? e.getAttribute("method").trim()
                : "GET",
              o = new FormData(e);
            e.classList.add("_sending");
            const r = await fetch(t, { method: s, body: o });
            if (r.ok) {
              await r.json();
              e.classList.remove("_sending"), n(e);
            } else alert("????????????"), e.classList.remove("_sending");
          } else e.hasAttribute("data-dev") && (i.preventDefault(), n(e));
        } else {
          i.preventDefault();
          const t = e.querySelector("._form-error");
          t && e.hasAttribute("data-goto-error") && Kn(t, !0, 1e3);
        }
      }
      function n(t) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: t } })
        ),
          Un.formClean(t),
          Yn(`[??????????]: ${"?????????? ????????????????????!"}`);
      }
    })(!0),
    (function () {
      Gn = !0;
      const t = document.querySelector("header.header"),
        e = t.hasAttribute("data-scroll-show"),
        i = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        n = t.dataset.scroll ? t.dataset.scroll : 1;
      let s,
        o = 0;
      document.addEventListener("windowScroll", function (r) {
        const a = window.scrollY;
        clearTimeout(s),
          a >= n
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              e &&
                (a > o
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (s = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, i))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              e &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (o = a <= 0 ? 0 : a);
      });
    })();
})();
