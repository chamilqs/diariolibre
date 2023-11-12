var _extends = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]) } return t }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; !function (t, e) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e() }(this, function () { "use strict"; function t(t, e, n) { return !(i(t, e, n) || l(t, e, n) || r(t, e, n) || a(t, e, n)) } function e(t, e, n) { !n && b(t) || (O(e.callback_enter, t), I.indexOf(t.tagName) > -1 && (A(t, e), p(t, e.class_loading)), S(t, e), v(t), O(e.callback_set, t)) } var n = function () { return { elements_selector: "img", container: window, threshold: 300, throttle: 150, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_initial: "initial", skip_invisible: !0, callback_load: null, callback_error: null, callback_set: null, callback_processed: null, callback_enter: null, to_webp: !1 } }, o = function (t) { return t.getBoundingClientRect().top + window.pageYOffset - t.ownerDocument.documentElement.clientTop }, i = function (t, e, n) { return (e === window ? window.innerHeight + window.pageYOffset : o(e) + e.offsetHeight) <= o(t) - n }, s = function (t) { return t.getBoundingClientRect().left + window.pageXOffset - t.ownerDocument.documentElement.clientLeft }, r = function (t, e, n) { var o = window.innerWidth; return (e === window ? o + window.pageXOffset : s(e) + o) <= s(t) - n }, l = function (t, e, n) { return (e === window ? window.pageYOffset : o(e)) >= o(t) + n + t.offsetHeight }, a = function (t, e, n) { return (e === window ? window.pageXOffset : s(e)) >= s(t) + n + t.offsetWidth }, c = function (t, e) { var n, o = new t(e); try { n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: o } }) } catch (t) { (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: o }) } window.dispatchEvent(n) }, u = function (t, e) { return e ? t.replace(/\.(jpe?g|png)/gi, ".webp") : t }, d = "undefined" != typeof window, f = d && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), h = d && "classList" in document.createElement("p"), _ = d && function () { var t = document.createElement("canvas"); return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp") }(), p = function (t, e) { h ? t.classList.add(e) : t.className += (t.className ? " " : "") + e }, m = function (t, e) { h ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") }, g = function (t, e) { return t.getAttribute("data-" + e) }, w = function (t, e, n) { var o = "data-" + e; null !== n ? t.setAttribute(o, n) : t.removeAttribute(o) }, v = function (t) { return w(t, "was-processed", "true") }, b = function (t) { return "true" === g(t, "was-processed") }, y = function (t, e, n, o) { for (var i, s = 0; i = t.children[s]; s += 1)if ("SOURCE" === i.tagName) { var r = g(i, n); E(i, e, r, o) } }, E = function (t, e, n, o) { n && t.setAttribute(e, u(n, o)) }, L = function (t, e) { var n = _ && e.to_webp, o = g(t, e.data_src); if (o) { var i = u(o, n); t.style.backgroundImage = 'url("' + i + '")' } }, T = { IMG: function (t, e) { var n = _ && e.to_webp, o = e.data_srcset, i = t.parentNode; i && "PICTURE" === i.tagName && y(i, "srcset", o, n); var s = g(t, e.data_sizes); E(t, "sizes", s); var r = g(t, o); E(t, "srcset", r, n); var l = g(t, e.data_src); E(t, "src", l, n) }, IFRAME: function (t, e) { var n = g(t, e.data_src); E(t, "src", n) }, VIDEO: function (t, e) { var n = e.data_src, o = g(t, n); y(t, "src", n), E(t, "src", o), t.load() } }, S = function (t, e) { var n = t.tagName, o = T[n]; o ? o(t, e) : L(t, e) }, O = function (t, e) { t && t(e) }, H = function (t, e, n) { t.addEventListener(e, n) }, k = function (t, e, n) { t.removeEventListener(e, n) }, z = function (t, e, n) { H(t, "load", e), H(t, "loadeddata", e), H(t, "error", n) }, N = function (t, e, n) { k(t, "load", e), k(t, "loadeddata", e), k(t, "error", n) }, x = function (t, e, n) { var o = e ? n.class_loaded : n.class_error, i = e ? n.callback_load : n.callback_error, s = t.target; m(s, n.class_loading), p(s, o), O(i, s) }, A = function (t, e) { var n = function n(i) { x(i, !0, e), N(t, n, o) }, o = function o(i) { x(i, !1, e), N(t, n, o) }; z(t, n, o) }, I = ["IMG", "IFRAME", "VIDEO"], C = function (t, e) { for (; e.length;)t.splice(e.pop(), 1) }, R = function (t) { this._settings = _extends({}, n(), t), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update() }; return R.prototype = { _loopThroughElements: function (e) { var n = this._settings, o = this._elements, i = o ? o.length : 0, s = void 0, r = [], l = this._isFirstLoop; if (l && (this._isFirstLoop = !1), 0 !== i) { for (s = 0; s < i; s++) { var a = o[s]; n.skip_invisible && null === a.offsetParent || (f || e || t(a, n.container, n.threshold)) && (l && p(a, n.class_initial), this.load(a), r.push(s)) } C(o, r) } else this._stopScrollHandler() }, _purgeElements: function () { var t = this._elements, e = t.length, n = void 0, o = []; for (n = 0; n < e; n++)b(t[n]) && o.push(n); C(t, o) }, _startScrollHandler: function () { this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll)) }, _stopScrollHandler: function () { this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll)) }, handleScroll: function () { var t = this._settings.throttle; if (0 !== t) { var e = Date.now(), n = t - (e - this._previousLoopTime); n <= 0 || n > t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function () { this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements() }.bind(this), n)) } else this._loopThroughElements() }, loadAll: function () { this._loopThroughElements(!0) }, update: function () { this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler() }, destroy: function () { window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null }, load: function (t, n) { e(t, this._settings, n) } }, d && function (t, e) { if (e) if (e.length) for (var n, o = 0; n = e[o]; o += 1)c(t, n); else c(t, e) }(R, window.lazyLoadOptions), R });
//# sourceMappingURL=lazyload.min.js.map