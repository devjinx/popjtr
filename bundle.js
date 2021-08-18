var app = function() {
  "use strict";

  function e() {}

  function t(e) {
      return e()
  }

  function n() {
      return Object.create(null)
  }

  function r(e) {
      e.forEach(t)
  }

  function o(e) {
      return "function" == typeof e
  }

  function a(e, t) {
      return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
  }
  let i, s;

  function l(e, t) {
      return i || (i = document.createElement("a")), i.href = t, e === i.href
  }

  function c(t, n, r) {
      t.$$.on_destroy.push(function(t, ...n) {
          if (null == t) return e;
          const r = t.subscribe(...n);
          return r.unsubscribe ? () => r.unsubscribe() : r
      }(n, r))
  }

  function u(e) {
      return null == e ? "" : e
  }

  function d(e, t) {
      e.appendChild(t)
  }

  function p(e, t, n) {
      e.insertBefore(t, n || null)
  }

  function f(e) {
      e.parentNode.removeChild(e)
  }

  function m(e) {
      return document.createElement(e)
  }

  function _(e) {
      return document.createTextNode(e)
  }

  function h() {
      return _(" ")
  }

  function g(e, t, n, r) {
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
  }

  function v(e, t, n) {
      null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
  }

  function b(e, t) {
      t = "" + t, e.wholeText !== t && (e.data = t)
  }

  function y(e, t, n, r) {
      e.style.setProperty(t, n, r ? "important" : "")
  }

  function w(e, t) {
      for (let n = 0; n < e.options.length; n += 1) {
          const r = e.options[n];
          if (r.__value === t) return void(r.selected = !0)
      }
  }

  function x(e) {
      s = e
  }

  function A(e) {
      (function() {
          if (!s) throw new Error("Function called outside component initialization");
          return s
      })().$$.on_mount.push(e)
  }
  const k = [],
      T = [],
      S = [],
      E = [],
      B = Promise.resolve();
  let $ = !1;

  function C(e) {
      S.push(e)
  }
  let O = !1;
  const I = new Set;

  function L() {
      if (!O) {
          O = !0;
          do {
              for (let e = 0; e < k.length; e += 1) {
                  const t = k[e];
                  x(t), F(t.$$)
              }
              for (x(null), k.length = 0; T.length;) T.pop()();
              for (let e = 0; e < S.length; e += 1) {
                  const t = S[e];
                  I.has(t) || (I.add(t), t())
              }
              S.length = 0
          } while (k.length);
          for (; E.length;) E.pop()();
          $ = !1, O = !1, I.clear()
      }
  }

  function F(e) {
      if (null !== e.fragment) {
          e.update(), r(e.before_update);
          const t = e.dirty;
          e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(C)
      }
  }
  const P = new Set;

  function D(e, t) {
      e && e.i && (P.delete(e), e.i(t))
  }

  function j(e, n, a, i) {
      const {
          fragment: s,
          on_mount: l,
          on_destroy: c,
          after_update: u
      } = e.$$;
      s && s.m(n, a), i || C((() => {
          const n = l.map(t).filter(o);
          c ? c.push(...n) : r(n), e.$$.on_mount = []
      })), u.forEach(C)
  }

  function M(e, t) {
      const n = e.$$;
      null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
  }

  function R(e, t) {
      -1 === e.$$.dirty[0] && (k.push(e), $ || ($ = !0, B.then(L)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
  }

  function H(t, o, a, i, l, c, u, d = [-1]) {
      const p = s;
      x(t);
      const m = t.$$ = {
          fragment: null,
          ctx: null,
          props: c,
          update: e,
          not_equal: l,
          bound: n(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(p ? p.$$.context : o.context || []),
          callbacks: n(),
          dirty: d,
          skip_bound: !1,
          root: o.target || p.$$.root
      };
      u && u(m.root);
      let _ = !1;
      if (m.ctx = a ? a(t, o.props || {}, ((e, n, ...r) => {
              const o = r.length ? r[0] : n;
              return m.ctx && l(m.ctx[e], m.ctx[e] = o) && (!m.skip_bound && m.bound[e] && m.bound[e](o), _ && R(t, e)), n
          })) : [], m.update(), _ = !0, r(m.before_update), m.fragment = !!i && i(m.ctx), o.target) {
          if (o.hydrate) {
              const e = function(e) {
                  return Array.from(e.childNodes)
              }(o.target);
              m.fragment && m.fragment.l(e), e.forEach(f)
          } else m.fragment && m.fragment.c();
          o.intro && D(t.$$.fragment), j(t, o.target, o.anchor, o.customElement), L()
      }
      x(p)
  }
  class N {
      $destroy() {
          M(this, 1), this.$destroy = e
      }
      $on(e, t) {
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(t), () => {
              const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
          }
      }
      $set(e) {
          var t;
          this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
      }
  }
  var U = function(e, t) {
          return function() {
              for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
              return e.apply(t, n)
          }
      },
      z = Object.prototype.toString;

  function W(e) {
      return "[object Array]" === z.call(e)
  }

  function G(e) {
      return void 0 === e
  }

  function V(e) {
      return null !== e && "object" == typeof e
  }

  function q(e) {
      if ("[object Object]" !== z.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype
  }

  function X(e) {
      return "[object Function]" === z.call(e)
  }

  function Z(e, t) {
      if (null != e)
          if ("object" != typeof e && (e = [e]), W(e))
              for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else
              for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
  }
  var K = {
      isArray: W,
      isArrayBuffer: function(e) {
          return "[object ArrayBuffer]" === z.call(e)
      },
      isBuffer: function(e) {
          return null !== e && !G(e) && null !== e.constructor && !G(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      },
      isFormData: function(e) {
          return "undefined" != typeof FormData && e instanceof FormData
      },
      isArrayBufferView: function(e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
      },
      isString: function(e) {
          return "string" == typeof e
      },
      isNumber: function(e) {
          return "number" == typeof e
      },
      isObject: V,
      isPlainObject: q,
      isUndefined: G,
      isDate: function(e) {
          return "[object Date]" === z.call(e)
      },
      isFile: function(e) {
          return "[object File]" === z.call(e)
      },
      isBlob: function(e) {
          return "[object Blob]" === z.call(e)
      },
      isFunction: X,
      isStream: function(e) {
          return V(e) && X(e.pipe)
      },
      isURLSearchParams: function(e) {
          return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      },
      isStandardBrowserEnv: function() {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
      },
      forEach: Z,
      merge: function e() {
          var t = {};

          function n(n, r) {
              q(t[r]) && q(n) ? t[r] = e(t[r], n) : q(n) ? t[r] = e({}, n) : W(n) ? t[r] = n.slice() : t[r] = n
          }
          for (var r = 0, o = arguments.length; r < o; r++) Z(arguments[r], n);
          return t
      },
      extend: function(e, t, n) {
          return Z(t, (function(t, r) {
              e[r] = n && "function" == typeof t ? U(t, n) : t
          })), e
      },
      trim: function(e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "")
      },
      stripBOM: function(e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      }
  };

  function Y(e) {
      return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  var J = function(e, t, n) {
      if (!t) return e;
      var r;
      if (n) r = n(t);
      else if (K.isURLSearchParams(t)) r = t.toString();
      else {
          var o = [];
          K.forEach(t, (function(e, t) {
              null != e && (K.isArray(e) ? t += "[]" : e = [e], K.forEach(e, (function(e) {
                  K.isDate(e) ? e = e.toISOString() : K.isObject(e) && (e = JSON.stringify(e)), o.push(Y(t) + "=" + Y(e))
              })))
          })), r = o.join("&")
      }
      if (r) {
          var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
      }
      return e
  };

  function Q() {
      this.handlers = []
  }
  Q.prototype.use = function(e, t) {
      return this.handlers.push({
          fulfilled: e,
          rejected: t
      }), this.handlers.length - 1
  }, Q.prototype.eject = function(e) {
      this.handlers[e] && (this.handlers[e] = null)
  }, Q.prototype.forEach = function(e) {
      K.forEach(this.handlers, (function(t) {
          null !== t && e(t)
      }))
  };
  var ee = Q,
      te = function(e, t, n) {
          return K.forEach(n, (function(n) {
              e = n(e, t)
          })), e
      },
      ne = function(e) {
          return !(!e || !e.__CANCEL__)
      },
      re = function(e, t) {
          K.forEach(e, (function(n, r) {
              r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
          }))
      },
      oe = function(e, t, n, r, o) {
          return function(e, t, n, r, o) {
              return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                  return {
                      message: this.message,
                      name: this.name,
                      description: this.description,
                      number: this.number,
                      fileName: this.fileName,
                      lineNumber: this.lineNumber,
                      columnNumber: this.columnNumber,
                      stack: this.stack,
                      config: this.config,
                      code: this.code
                  }
              }, e
          }(new Error(e), t, n, r, o)
      },
      ae = K.isStandardBrowserEnv() ? {
          write: function(e, t, n, r, o, a) {
              var i = [];
              i.push(e + "=" + encodeURIComponent(t)), K.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), K.isString(r) && i.push("path=" + r), K.isString(o) && i.push("domain=" + o), !0 === a && i.push("secure"), document.cookie = i.join("; ")
          },
          read: function(e) {
              var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
              return t ? decodeURIComponent(t[3]) : null
          },
          remove: function(e) {
              this.write(e, "", Date.now() - 864e5)
          }
      } : {
          write: function() {},
          read: function() {
              return null
          },
          remove: function() {}
      },
      ie = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
      se = K.isStandardBrowserEnv() ? function() {
          var e, t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");

          function r(e) {
              var r = e;
              return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
              }
          }
          return e = r(window.location.href),
              function(t) {
                  var n = K.isString(t) ? r(t) : t;
                  return n.protocol === e.protocol && n.host === e.host
              }
      }() : function() {
          return !0
      },
      le = function(e) {
          return new Promise((function(t, n) {
              var r = e.data,
                  o = e.headers;
              K.isFormData(r) && delete o["Content-Type"];
              var a = new XMLHttpRequest;
              if (e.auth) {
                  var i = e.auth.username || "",
                      s = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                  o.Authorization = "Basic " + btoa(i + ":" + s)
              }
              var l, c, u = (l = e.baseURL, c = e.url, l && ! function(e) {
                  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
              }(c) ? function(e, t) {
                  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
              }(l, c) : c);
              if (a.open(e.method.toUpperCase(), J(u, e.params, e.paramsSerializer), !0), a.timeout = e.timeout, a.onreadystatechange = function() {
                      if (a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:"))) {
                          var r = "getAllResponseHeaders" in a ? function(e) {
                                  var t, n, r, o = {};
                                  return e ? (K.forEach(e.split("\n"), (function(e) {
                                      if (r = e.indexOf(":"), t = K.trim(e.substr(0, r)).toLowerCase(), n = K.trim(e.substr(r + 1)), t) {
                                          if (o[t] && ie.indexOf(t) >= 0) return;
                                          o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                                      }
                                  })), o) : o
                              }(a.getAllResponseHeaders()) : null,
                              o = {
                                  data: e.responseType && "text" !== e.responseType ? a.response : a.responseText,
                                  status: a.status,
                                  statusText: a.statusText,
                                  headers: r,
                                  config: e,
                                  request: a
                              };
                          ! function(e, t, n) {
                              var r = n.config.validateStatus;
                              n.status && r && !r(n.status) ? t(oe("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                          }(t, n, o), a = null
                      }
                  }, a.onabort = function() {
                      a && (n(oe("Request aborted", e, "ECONNABORTED", a)), a = null)
                  }, a.onerror = function() {
                      n(oe("Network Error", e, null, a)), a = null
                  }, a.ontimeout = function() {
                      var t = "timeout of " + e.timeout + "ms exceeded";
                      e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(oe(t, e, "ECONNABORTED", a)), a = null
                  }, K.isStandardBrowserEnv()) {
                  var d = (e.withCredentials || se(u)) && e.xsrfCookieName ? ae.read(e.xsrfCookieName) : void 0;
                  d && (o[e.xsrfHeaderName] = d)
              }
              if ("setRequestHeader" in a && K.forEach(o, (function(e, t) {
                      void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : a.setRequestHeader(t, e)
                  })), K.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), e.responseType) try {
                  a.responseType = e.responseType
              } catch (t) {
                  if ("json" !== e.responseType) throw t
              }
              "function" == typeof e.onDownloadProgress && a.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && a.upload && a.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                  a && (a.abort(), n(e), a = null)
              })), r || (r = null), a.send(r)
          }))
      },
      ce = {
          "Content-Type": "application/x-www-form-urlencoded"
      };

  function ue(e, t) {
      !K.isUndefined(e) && K.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
  }
  var de, pe = {
      adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (de = le), de),
      transformRequest: [function(e, t) {
          return re(t, "Accept"), re(t, "Content-Type"), K.isFormData(e) || K.isArrayBuffer(e) || K.isBuffer(e) || K.isStream(e) || K.isFile(e) || K.isBlob(e) ? e : K.isArrayBufferView(e) ? e.buffer : K.isURLSearchParams(e) ? (ue(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : K.isObject(e) ? (ue(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
      }],
      transformResponse: [function(e) {
          if ("string" == typeof e) try {
              e = JSON.parse(e)
          } catch (e) {}
          return e
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function(e) {
          return e >= 200 && e < 300
      }
  };
  pe.headers = {
      common: {
          Accept: "application/json, text/plain, */*"
      }
  }, K.forEach(["delete", "get", "head"], (function(e) {
      pe.headers[e] = {}
  })), K.forEach(["post", "put", "patch"], (function(e) {
      pe.headers[e] = K.merge(ce)
  }));
  var fe = pe;

  function me(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
  }
  var _e = function(e) {
          return me(e), e.headers = e.headers || {}, e.data = te(e.data, e.headers, e.transformRequest), e.headers = K.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), K.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
              delete e.headers[t]
          })), (e.adapter || fe.adapter)(e).then((function(t) {
              return me(e), t.data = te(t.data, t.headers, e.transformResponse), t
          }), (function(t) {
              return ne(t) || (me(e), t && t.response && (t.response.data = te(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
          }))
      },
      he = function(e, t) {
          t = t || {};
          var n = {},
              r = ["url", "method", "data"],
              o = ["headers", "auth", "proxy", "params"],
              a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
              i = ["validateStatus"];

          function s(e, t) {
              return K.isPlainObject(e) && K.isPlainObject(t) ? K.merge(e, t) : K.isPlainObject(t) ? K.merge({}, t) : K.isArray(t) ? t.slice() : t
          }

          function l(r) {
              K.isUndefined(t[r]) ? K.isUndefined(e[r]) || (n[r] = s(void 0, e[r])) : n[r] = s(e[r], t[r])
          }
          K.forEach(r, (function(e) {
              K.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
          })), K.forEach(o, l), K.forEach(a, (function(r) {
              K.isUndefined(t[r]) ? K.isUndefined(e[r]) || (n[r] = s(void 0, e[r])) : n[r] = s(void 0, t[r])
          })), K.forEach(i, (function(r) {
              r in t ? n[r] = s(e[r], t[r]) : r in e && (n[r] = s(void 0, e[r]))
          }));
          var c = r.concat(o).concat(a).concat(i),
              u = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                  return -1 === c.indexOf(e)
              }));
          return K.forEach(u, l), n
      };

  function ge(e) {
      this.defaults = e, this.interceptors = {
          request: new ee,
          response: new ee
      }
  }
  ge.prototype.request = function(e) {
      "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = he(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
      var t = [_e, void 0],
          n = Promise.resolve(e);
      for (this.interceptors.request.forEach((function(e) {
              t.unshift(e.fulfilled, e.rejected)
          })), this.interceptors.response.forEach((function(e) {
              t.push(e.fulfilled, e.rejected)
          })); t.length;) n = n.then(t.shift(), t.shift());
      return n
  }, ge.prototype.getUri = function(e) {
      return e = he(this.defaults, e), J(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
  }, K.forEach(["delete", "get", "head", "options"], (function(e) {
      ge.prototype[e] = function(t, n) {
          return this.request(he(n || {}, {
              method: e,
              url: t,
              data: (n || {}).data
          }))
      }
  })), K.forEach(["post", "put", "patch"], (function(e) {
      ge.prototype[e] = function(t, n, r) {
          return this.request(he(r || {}, {
              method: e,
              url: t,
              data: n
          }))
      }
  }));
  var ve = ge;

  function be(e) {
      this.message = e
  }
  be.prototype.toString = function() {
      return "Cancel" + (this.message ? ": " + this.message : "")
  }, be.prototype.__CANCEL__ = !0;
  var ye = be;

  function we(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise((function(e) {
          t = e
      }));
      var n = this;
      e((function(e) {
          n.reason || (n.reason = new ye(e), t(n.reason))
      }))
  }
  we.prototype.throwIfRequested = function() {
      if (this.reason) throw this.reason
  }, we.source = function() {
      var e;
      return {
          token: new we((function(t) {
              e = t
          })),
          cancel: e
      }
  };
  var xe = we;

  function Ae(e) {
      var t = new ve(e),
          n = U(ve.prototype.request, t);
      return K.extend(n, ve.prototype, t), K.extend(n, t), n
  }
  var ke = Ae(fe);
  ke.Axios = ve, ke.create = function(e) {
      return Ae(he(ke.defaults, e))
  }, ke.Cancel = ye, ke.CancelToken = xe, ke.isCancel = ne, ke.all = function(e) {
      return Promise.all(e)
  }, ke.spread = function(e) {
      return function(t) {
          return e.apply(null, t)
      }
  }, ke.isAxiosError = function(e) {
      return "object" == typeof e && !0 === e.isAxiosError
  };
  var Te = ke,
      Se = ke;
  Te.default = Se;
  var Ee = Te,
      Be = new Map([
          ["align-self", "-ms-grid-row-align"],
          ["color-adjust", "-webkit-print-color-adjust"],
          ["column-gap", "grid-column-gap"],
          ["forced-color-adjust", "-ms-high-contrast-adjust"],
          ["gap", "grid-gap"],
          ["grid-template-columns", "-ms-grid-columns"],
          ["grid-template-rows", "-ms-grid-rows"],
          ["justify-self", "-ms-grid-column-align"],
          ["margin-inline-end", "-webkit-margin-end"],
          ["margin-inline-start", "-webkit-margin-start"],
          ["mask-border", "-webkit-mask-box-image"],
          ["mask-border-outset", "-webkit-mask-box-image-outset"],
          ["mask-border-slice", "-webkit-mask-box-image-slice"],
          ["mask-border-source", "-webkit-mask-box-image-source"],
          ["mask-border-repeat", "-webkit-mask-box-image-repeat"],
          ["mask-border-width", "-webkit-mask-box-image-width"],
          ["overflow-wrap", "word-wrap"],
          ["padding-inline-end", "-webkit-padding-end"],
          ["padding-inline-start", "-webkit-padding-start"],
          ["row-gap", "grid-row-gap"],
          ["scroll-margin-bottom", "scroll-snap-margin-bottom"],
          ["scroll-margin-left", "scroll-snap-margin-left"],
          ["scroll-margin-right", "scroll-snap-margin-right"],
          ["scroll-margin-top", "scroll-snap-margin-top"],
          ["scroll-margin", "scroll-snap-margin"],
          ["text-combine-upright", "-ms-text-combine-horizontal"]
      ]);
  var $e, Ce, Oe, Ie, Le, Fe, Pe, De, je = (e, t) => !!~e.indexOf(t),
      Me = (e, t = "-") => e.join(t),
      Re = (e, t) => Me(e.filter(Boolean), t),
      He = (e, t = 1) => e.slice(t),
      Ne = e => e,
      Ue = () => {},
      ze = e => e[0].toUpperCase() + He(e),
      We = e => e.replace(/[A-Z]/g, "-$&").toLowerCase(),
      Ge = (e, t) => {
          for (;
              "function" == typeof e;) e = e(t);
          return e
      },
      Ve = (e, t) => {
          e.size > t && e.delete(e.keys().next().value)
      },
      qe = (e, t) => !je("@:&", e[0]) && (je("rg", (typeof t)[5]) || Array.isArray(t)),
      Xe = (e, t, n) => t ? Object.keys(t).reduce(((e, r) => {
          const o = Ge(t[r], n);
          return qe(r, o) ? e[We(r)] = o : e[r] = "@" == r[0] && je("figa", r[1]) ? (e[r] || []).concat(o) : Xe(e[r] || {}, o, n), e
      }), e) : e,
      Ze = "undefined" != typeof CSS && CSS.escape || (e => e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& ")),
      Ke = e => (Array.isArray(e) || (e = [e]), "@media " + Me(e.map((e => ("string" == typeof e && (e = {
          min: e
      }), e.raw || Me(Object.keys(e).map((t => `(${t}-width:${e[t]})`)), " and ")))), ",")),
      Ye = e => {
          for (var t = 9, n = e.length; n--;) t = Math.imul(t ^ e.charCodeAt(n), 1597334677);
          return "tw-" + ((t ^ t >>> 9) >>> 0).toString(36)
      },
      Je = (e = "") => ($e.push(e), ""),
      Qe = e => {
          $e.length = Math.max($e.lastIndexOf("") + ~~e, 0)
      },
      et = e => e && !je("!:", e[0]),
      tt = e => ":" == e[0],
      nt = (e, t) => {
          Ce.push({
              v: $e.filter(tt),
              d: e,
              n: t,
              i: je($e, "!"),
              $: ""
          })
      },
      rt = e => {
          const t = "-" == e[0];
          t && (e = He(e));
          const n = Me($e.filter(et));
          return nt("&" == e ? n : (n && n + "-") + e, t), ""
      },
      ot = (e, t) => {
          let n = "";
          for (let t, r = !1, o = 0; t = e[o++];)
              if (r || "[" == t) n += t, r = "]" != t;
              else switch (t) {
                  case ":":
                      n = n && Je(":" + (e[o] == t ? e[o++] : "") + n);
                      break;
                  case "(":
                      n = n && Je(n), Je();
                      break;
                  case "!":
                      Je(t);
                      break;
                  case ")":
                  case " ":
                  case "\t":
                  case "\n":
                  case "\r":
                      n = n && rt(n), Qe(")" !== t);
                      break;
                  default:
                      n += t
              }
          n && (t ? Je(":" + n) : "-" == n.slice(-1) ? Je(n.slice(0, -1)) : rt(n))
      },
      at = e => {
          Je(), it(e), Qe()
      },
      it = e => {
          switch (typeof e) {
              case "string":
                  ot(e);
                  break;
              case "function":
                  nt(e);
                  break;
              case "object":
                  Array.isArray(e) ? e.forEach(at) : e && Object.keys(e).forEach((t => {
                      ((e, t) => {
                          if (t) {
                              Je();
                              const n = je("tbu", (typeof t)[1]);
                              ot(e, n), n && at(t), Qe()
                          }
                      })(t, e[t])
                  }))
          }
      },
      st = new WeakMap,
      lt = e => ($e = [], Ce = [], Array.isArray(e[0]) && Array.isArray(e[0].raw) ? (e => {
          let t = st.get(e);
          if (!t) {
              let n = NaN,
                  r = "";
              t = e.map(((t, o) => {
                  if (n == n || "[" != t.slice(-1) && !je(":-(", (e[o + 1] || "")[0]) || (n = o), o >= n) return a => {
                      o == n && (r = ""), r += t, je("rg", (typeof a)[5]) ? r += a : a && (ot(r), r = "", it(a)), o == e.length - 1 && ot(r)
                  };
                  const a = Ce = [];
                  ot(t);
                  const i = [...$e];
                  return Ce = [], e => {
                      Ce.push(...a), $e = [...i], e && it(e)
                  }
              })), st.set(e, t)
          }
          return t
      })(e[0]).forEach(((t, n) => t(e[n + 1]))) : it(e), Ce),
      ct = (e, t) => ("function" == typeof t && (Oe = !1), t),
      ut = new WeakMap,
      dt = (e, t) => {
          const n = (e => {
              Oe = !0;
              const t = JSON.stringify(e, ct);
              return Oe && t
          })(t);
          let r;
          if (n) {
              var o = ut.get(e);
              o || ut.set(e, o = new Map), r = o.get(n)
          }
          return r || (r = Object.defineProperty(((n, r) => (r = Array.isArray(n) ? r : n, Ge(e(t, r), r))), "toJSON", {
              value: () => n || t
          }), o && (o.set(n, r), Ve(o, 1e4))), r
      },
      pt = (e, {
          css: t
      }) => t(lt(e)),
      ft = e => (t, n, r, o) => {
          if (t) {
              const a = n && e(n);
              if (a && a.length > 0) return a.reduce(((e, n) => (e[Re([r, n, o])] = t, e)), {})
          }
      },
      mt = ft((e => ({
          t: ["top-left", "top-right"],
          r: ["top-right", "bottom-right"],
          b: ["bottom-left", "bottom-right"],
          l: ["bottom-left", "top-left"],
          tl: ["top-left"],
          tr: ["top-right"],
          bl: ["bottom-left"],
          br: ["bottom-right"]
      } [e]))),
      _t = e => {
          const t = ({
              x: "lr",
              y: "tb"
          } [e] || e || "").split("").sort();
          for (let e = t.length; e--;)
              if (!(t[e] = {
                      t: "top",
                      r: "right",
                      b: "bottom",
                      l: "left"
                  } [t[e]])) return;
          if (t.length) return t
      },
      ht = ft(_t),
      gt = e => "cols" == e ? "columns" : "rows",
      vt = e => (t, n, r) => ({
          [e]: r + ((Ie = Me(t)) && "-" + Ie)
      }),
      bt = (e, t) => (n, r, o) => (Ie = Me(n, t)) && {
          [e || o]: Ie
      },
      yt = e => (t, {
          theme: n
      }, r) => (Ie = n(e || r, t)) && {
          [e || r]: Ie
      },
      wt = (e, t) => (n, {
          theme: r
      }, o) => (Ie = r(e || o, n, Me(n, t))) && {
          [e || o]: Ie
      },
      xt = (e, t) => (n, r) => e(n, r, t),
      At = vt("display"),
      kt = vt("position"),
      Tt = vt("textTransform"),
      St = vt("textDecoration"),
      Et = vt("fontStyle"),
      Bt = e => (t, n, r) => ({
          ["--tw-" + e]: r,
          fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
      }),
      $t = (e, {
          theme: t
      }, n) => (Ie = t("inset", e)) && {
          [n]: Ie
      },
      Ct = (e, t, n, r = n) => (Ie = t(r + "Opacity", He(e))) && {
          [`--tw-${n}-opacity`]: Ie
      },
      Ot = (e, t) => Math.round(parseInt(e, 16) * t),
      It = (e, t, n) => e && "#" == e[0] && (Ie = (e.length - 1) / 3) && (Fe = [17, 1, .062272][Ie - 1]) ? `rgba(${Ot(e.substr(1,Ie),Fe)},${Ot(e.substr(1+Ie,Ie),Fe)},${Ot(e.substr(1+2*Ie,Ie),Fe)},${t?`var(--tw-${t}${n?","+n:""})`:n||1})` : e,
      Lt = (e, t, n) => n && "string" == typeof n ? (Ie = It(n, t + "-opacity")) && Ie !== n ? {
          [`--tw-${t}-opacity`]: "1",
          [e]: [n, Ie]
      } : {
          [e]: n
      } : void 0,
      Ft = e => (Fe = It(e, "", "0")) == Ie ? "transparent" : Fe,
      Pt = (e, {
          theme: t
      }, n, r, o, a) => (Ie = {
          x: ["right", "left"],
          y: ["bottom", "top"]
      } [e[0]]) && (Fe = `--tw-${n}-${e[0]}-reverse`) ? "reverse" == e[1] ? {
          [Fe]: "1"
      } : {
          [Fe]: "0",
          [Re([o, Ie[0], a])]: (Le = t(r, He(e))) && `calc(${Le} * var(${Fe}))`,
          [Re([o, Ie[1], a])]: Le && [Le, `calc(${Le} * calc(1 - var(${Fe})))`]
      } : void 0,
      Dt = (e, t) => t[0] && {
          [e]: (je("wun", (t[0] || "")[3]) ? "space-" : "") + t[0]
      },
      jt = e => t => je(["start", "end"], t[0]) ? {
          [e]: "flex-" + t[0]
      } : Dt(e, t),
      Mt = e => (t, {
          theme: n
      }) => {
          if (Ie = n("grid" + ze(e), t, "")) return {
              ["grid-" + e]: Ie
          };
          switch (t[0]) {
              case "span":
                  return t[1] && {
                      ["grid-" + e]: `span ${t[1]} / span ${t[1]}`
                  };
              case "start":
              case "end":
                  return (Ie = n("grid" + ze(e) + ze(t[0]), He(t), Me(He(t)))) && {
                      [`grid-${e}-${t[0]}`]: Ie
                  }
          }
      },
      Rt = (e, {
          theme: t
      }, n) => {
          switch (e[0]) {
              case "solid":
              case "dashed":
              case "dotted":
              case "double":
              case "none":
                  return bt("borderStyle")(e);
              case "collapse":
              case "separate":
                  return bt("borderCollapse")(e);
              case "opacity":
                  return Ct(e, t, n)
          }
          return (Ie = t(n + "Width", e, "")) ? {
              borderWidth: Ie
          } : Lt("borderColor", n, t(n + "Color", e))
      },
      Ht = e => (e ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",
      Nt = (e, t, n) => e[0] && (Ie = t.theme(n, e[1] || e[0])) && {
          [`--tw-${n}-x`]: "y" !== e[0] && Ie,
          [`--tw-${n}-y`]: "x" !== e[0] && Ie,
          transform: [`${n}${e[1]?e[0].toUpperCase():""}(${Ie})`, Ht()]
      },
      Ut = e => (t, n, r) => r[1] ? ht(n.theme(e, t), r[1], e) : yt(e)(t, n, r),
      zt = Ut("padding"),
      Wt = Ut("margin"),
      Gt = (e, {
          theme: t
      }, n) => (Ie = {
          w: "width",
          h: "height"
      } [e[0]]) && {
          [Ie = `${n}${ze(Ie)}`]: t(Ie, He(e))
      },
      Vt = (e, {
          theme: t
      }, n) => {
          const r = n.split("-"),
              o = "backdrop" == r[0] ? r[0] + "-" : "";
          if (o || e.unshift(...r), "filter" == e[0]) {
              const t = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", o && "opacity", "saturate", "sepia", !o && "drop-shadow"].filter(Boolean);
              return "none" == e[1] ? {
                  [o + "filter"]: "none"
              } : t.reduce(((e, t) => (e["--tw-" + o + t] = "var(--tw-empty,/*!*/ /*!*/)", e)), {
                  [o + "filter"]: t.map((e => `var(--tw-${o}${e})`)).join(" ")
              })
          }
          return Fe = e.shift(), je(["hue", "drop"], Fe) && (Fe += ze(e.shift())), (Ie = t(o ? "backdrop" + ze(Fe) : Fe, e)) && {
              ["--tw-" + o + Fe]: (Array.isArray(Ie) ? Ie : [Ie]).map((e => `${We(Fe)}(${e})`)).join(" ")
          }
      },
      qt = {
          group: (e, {
              tag: t
          }, n) => t(Me([n, ...e])),
          hidden: xt(At, "none"),
          inline: At,
          block: At,
          contents: At,
          flow: At,
          table: (e, t, n) => je(["auto", "fixed"], e[0]) ? {
              tableLayout: e[0]
          } : At(e, t, n),
          flex(e, t, n) {
              switch (e[0]) {
                  case "row":
                  case "col":
                      return {
                          flexDirection: Me("col" == e[0] ? ["column", ...He(e)] : e)
                      };
                  case "nowrap":
                  case "wrap":
                      return {
                          flexWrap: Me(e)
                      };
                  case "grow":
                  case "shrink":
                      return null != (Ie = t.theme("flex" + ze(e[0]), He(e), e[1] || 1)) && {
                          ["flex-" + e[0]]: "" + Ie
                      }
              }
              return (Ie = t.theme("flex", e, "")) ? {
                  flex: Ie
              } : At(e, t, n)
          },
          grid(e, t, n) {
              switch (e[0]) {
                  case "cols":
                  case "rows":
                      return (Ie = t.theme("gridTemplate" + ze(gt(e[0])), He(e), 2 == e.length && Number(e[1]) ? `repeat(${e[1]},minmax(0,1fr))` : Me(He(e)))) && {
                          ["gridTemplate-" + gt(e[0])]: Ie
                      };
                  case "flow":
                      return e.length > 1 && {
                          gridAutoFlow: Me("col" == e[1] ? ["column", ...He(e, 2)] : He(e), " ")
                      }
              }
              return At(e, t, n)
          },
          auto: (e, {
              theme: t
          }) => je(["cols", "rows"], e[0]) && (Ie = t("gridAuto" + ze(gt(e[0])), He(e), Me(He(e)))) && {
              ["gridAuto-" + gt(e[0])]: Ie
          },
          static: kt,
          fixed: kt,
          absolute: kt,
          relative: kt,
          sticky: kt,
          visible: {
              visibility: "visible"
          },
          invisible: {
              visibility: "hidden"
          },
          antialiased: {
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale"
          },
          "subpixel-antialiased": {
              WebkitFontSmoothing: "auto",
              MozOsxFontSmoothing: "auto"
          },
          truncate: {
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
          },
          "sr-only": {
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              clip: "rect(0,0,0,0)",
              borderWidth: "0"
          },
          "not-sr-only": {
              position: "static",
              width: "auto",
              height: "auto",
              padding: "0",
              margin: "0",
              overflow: "visible",
              whiteSpace: "normal",
              clip: "auto"
          },
          resize: e => ({
              resize: {
                  x: "horizontal",
                  y: "vertical"
              } [e[0]] || e[0] || "both"
          }),
          box: e => e[0] && {
              boxSizing: e[0] + "-box"
          },
          appearance: bt(),
          cursor: wt(),
          float: bt(),
          clear: bt(),
          decoration: bt("boxDecorationBreak"),
          isolate: {
              isolation: "isolate"
          },
          isolation: bt(),
          "mix-blend": bt("mixBlendMode"),
          top: $t,
          right: $t,
          bottom: $t,
          left: $t,
          inset: (e, {
              theme: t
          }) => (Ie = _t(e[0])) ? ht(t("inset", He(e)), e[0]) : (Ie = t("inset", e)) && {
              top: Ie,
              right: Ie,
              bottom: Ie,
              left: Ie
          },
          underline: St,
          "line-through": St,
          "no-underline": xt(St, "none"),
          "text-underline": xt(St, "underline"),
          "text-no-underline": xt(St, "none"),
          "text-line-through": xt(St, "line-through"),
          uppercase: Tt,
          lowercase: Tt,
          capitalize: Tt,
          "normal-case": xt(Tt, "none"),
          "text-normal-case": xt(Tt, "none"),
          italic: Et,
          "not-italic": xt(Et, "normal"),
          "font-italic": xt(Et, "italic"),
          "font-not-italic": xt(Et, "normal"),
          font: (e, t, n) => (Ie = t.theme("fontFamily", e, "")) ? {
              fontFamily: Ie
          } : yt("fontWeight")(e, t, n),
          items: e => e[0] && {
              alignItems: je(["start", "end"], e[0]) ? "flex-" + e[0] : Me(e)
          },
          "justify-self": bt(),
          "justify-items": bt(),
          justify: jt("justifyContent"),
          content: jt("alignContent"),
          self: jt("alignSelf"),
          place: e => e[0] && Dt("place-" + e[0], He(e)),
          overscroll: e => e[0] && {
              ["overscrollBehavior" + (e[1] ? "-" + e[0] : "")]: e[1] || e[0]
          },
          col: Mt("column"),
          row: Mt("row"),
          duration: yt("transitionDuration"),
          delay: yt("transitionDelay"),
          tracking: yt("letterSpacing"),
          leading: yt("lineHeight"),
          z: yt("zIndex"),
          opacity: yt(),
          ease: yt("transitionTimingFunction"),
          p: zt,
          py: zt,
          px: zt,
          pt: zt,
          pr: zt,
          pb: zt,
          pl: zt,
          m: Wt,
          my: Wt,
          mx: Wt,
          mt: Wt,
          mr: Wt,
          mb: Wt,
          ml: Wt,
          w: yt("width"),
          h: yt("height"),
          min: Gt,
          max: Gt,
          fill: yt(),
          order: yt(),
          origin: wt("transformOrigin", " "),
          select: bt("userSelect"),
          "pointer-events": bt(),
          align: bt("verticalAlign"),
          whitespace: bt("whiteSpace"),
          "normal-nums": {
              fontVariantNumeric: "normal"
          },
          ordinal: Bt("ordinal"),
          "slashed-zero": Bt("slashed-zero"),
          "lining-nums": Bt("numeric-figure"),
          "oldstyle-nums": Bt("numeric-figure"),
          "proportional-nums": Bt("numeric-spacing"),
          "tabular-nums": Bt("numeric-spacing"),
          "diagonal-fractions": Bt("numeric-fraction"),
          "stacked-fractions": Bt("numeric-fraction"),
          overflow: (e, t, n) => je(["ellipsis", "clip"], e[0]) ? bt("textOverflow")(e) : e[1] ? {
              ["overflow-" + e[0]]: e[1]
          } : bt()(e, t, n),
          transform: e => "none" == e[0] ? {
              transform: "none"
          } : {
              "--tw-translate-x": "0",
              "--tw-translate-y": "0",
              "--tw-rotate": "0",
              "--tw-skew-x": "0",
              "--tw-skew-y": "0",
              "--tw-scale-x": "1",
              "--tw-scale-y": "1",
              transform: Ht("gpu" == e[0])
          },
          rotate: (e, {
              theme: t
          }) => (Ie = t("rotate", e)) && {
              "--tw-rotate": Ie,
              transform: [`rotate(${Ie})`, Ht()]
          },
          scale: Nt,
          translate: Nt,
          skew: Nt,
          gap: (e, t, n) => (Ie = {
              x: "column",
              y: "row"
          } [e[0]]) ? {
              [Ie + "Gap"]: t.theme("gap", He(e))
          } : yt("gap")(e, t, n),
          stroke: (e, t, n) => (Ie = t.theme("stroke", e, "")) ? {
              stroke: Ie
          } : yt("strokeWidth")(e, t, n),
          outline: (e, {
              theme: t
          }) => (Ie = t("outline", e)) && {
              outline: Ie[0],
              outlineOffset: Ie[1]
          },
          "break-normal": {
              wordBreak: "normal",
              overflowWrap: "normal"
          },
          "break-words": {
              overflowWrap: "break-word"
          },
          "break-all": {
              wordBreak: "break-all"
          },
          text(e, {
              theme: t
          }, n) {
              switch (e[0]) {
                  case "left":
                  case "center":
                  case "right":
                  case "justify":
                      return {
                          textAlign: e[0]
                      };
                  case "uppercase":
                  case "lowercase":
                  case "capitalize":
                      return Tt([], Ie, e[0]);
                  case "opacity":
                      return Ct(e, t, n)
              }
              const r = t("fontSize", e, "");
              return r ? "string" == typeof r ? {
                  fontSize: r
              } : {
                  fontSize: r[0],
                  ..."string" == typeof r[1] ? {
                      lineHeight: r[1]
                  } : r[1]
              } : Lt("color", "text", t("textColor", e))
          },
          bg(e, {
              theme: t
          }, n) {
              switch (e[0]) {
                  case "fixed":
                  case "local":
                  case "scroll":
                      return bt("backgroundAttachment", ",")(e);
                  case "bottom":
                  case "center":
                  case "left":
                  case "right":
                  case "top":
                      return bt("backgroundPosition", " ")(e);
                  case "no":
                      return "repeat" == e[1] && bt("backgroundRepeat")(e);
                  case "repeat":
                      return je("xy", e[1]) ? bt("backgroundRepeat")(e) : {
                          backgroundRepeat: e[1] || e[0]
                      };
                  case "opacity":
                      return Ct(e, t, n, "background");
                  case "clip":
                  case "origin":
                      return e[1] && {
                          ["background-" + e[0]]: e[1] + ("text" == e[1] ? "" : "-box")
                      };
                  case "blend":
                      return bt("background-blend-mode")(He(e));
                  case "gradient":
                      if ("to" == e[1] && (Ie = _t(e[2]))) return {
                          backgroundImage: `linear-gradient(to ${Me(Ie," ")},var(--tw-gradient-stops))`
                      }
              }
              return (Ie = t("backgroundPosition", e, "")) ? {
                  backgroundPosition: Ie
              } : (Ie = t("backgroundSize", e, "")) ? {
                  backgroundSize: Ie
              } : (Ie = t("backgroundImage", e, "")) ? {
                  backgroundImage: Ie
              } : Lt("backgroundColor", "bg", t("backgroundColor", e))
          },
          from: (e, {
              theme: t
          }) => (Ie = t("gradientColorStops", e)) && {
              "--tw-gradient-from": Ie,
              "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${Ft(Ie)})`
          },
          via: (e, {
              theme: t
          }) => (Ie = t("gradientColorStops", e)) && {
              "--tw-gradient-stops": `var(--tw-gradient-from),${Ie},var(--tw-gradient-to,${Ft(Ie)})`
          },
          to: (e, {
              theme: t
          }) => (Ie = t("gradientColorStops", e)) && {
              "--tw-gradient-to": Ie
          },
          border: (e, t, n) => _t(e[0]) ? ht(t.theme("borderWidth", He(e)), e[0], "border", "width") : Rt(e, t, n),
          divide: (e, t, n) => (Ie = Pt(e, t, n, "divideWidth", "border", "width") || Rt(e, t, n)) && {
              "&>:not([hidden])~:not([hidden])": Ie
          },
          space: (e, t, n) => (Ie = Pt(e, t, n, "space", "margin")) && {
              "&>:not([hidden])~:not([hidden])": Ie
          },
          placeholder: (e, {
              theme: t
          }, n) => (Ie = "opacity" == e[0] ? Ct(e, t, n) : Lt("color", "placeholder", t("placeholderColor", e))) && {
              "&::placeholder": Ie
          },
          shadow: (e, {
              theme: t
          }) => (Ie = t("boxShadow", e)) && {
              ":global": {
                  "*": {
                      "--tw-shadow": "0 0 transparent"
                  }
              },
              "--tw-shadow": "none" == Ie ? "0 0 transparent" : Ie,
              boxShadow: [Ie, "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"]
          },
          animate: (e, {
              theme: t,
              tag: n
          }) => {
              if (Fe = t("animation", e)) {
                  const e = Fe.split(" ");
                  return (Ie = t("keyframes", e[0], Le = {})) !== Le ? (Fe = n(e[0])) && {
                      animation: Fe + " " + Me(He(e), " "),
                      ["@keyframes " + Fe]: Ie
                  } : {
                      animation: Fe
                  }
              }
          },
          ring(e, {
              theme: t
          }, n) {
              switch (e[0]) {
                  case "inset":
                      return {
                          "--tw-ring-inset": "inset"
                      };
                  case "opacity":
                      return Ct(e, t, n);
                  case "offset":
                      return (Ie = t("ringOffsetWidth", He(e), "")) ? {
                          "--tw-ring-offset-width": Ie
                      } : {
                          "--tw-ring-offset-color": t("ringOffsetColor", He(e))
                      }
              }
              return (Ie = t("ringWidth", e, "")) ? {
                  "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                  "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${Ie} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                  boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
                  ":global": {
                      "*": {
                          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                          "--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
                          "--tw-ring-offset-color": t("ringOffsetColor", "", "#fff"),
                          "--tw-ring-color": It(t("ringColor", "", "#93c5fd"), "ring-opacity", t("ringOpacity", "", "0.5")),
                          "--tw-ring-offset-shadow": "0 0 transparent",
                          "--tw-ring-shadow": "0 0 transparent"
                      }
                  }
              } : {
                  "--tw-ring-opacity": "1",
                  "--tw-ring-color": It(t("ringColor", e), "ring-opacity")
              }
          },
          object: (e, t, n) => je(["contain", "cover", "fill", "none", "scale-down"], Me(e)) ? {
              objectFit: Me(e)
          } : wt("objectPosition", " ")(e, t, n),
          list: (e, t, n) => "item" == Me(e) ? At(e, t, n) : je(["inside", "outside"], Me(e)) ? {
              listStylePosition: e[0]
          } : wt("listStyleType")(e, t, n),
          rounded: (e, t, n) => mt(t.theme("borderRadius", He(e), ""), e[0], "border", "radius") || yt("borderRadius")(e, t, n),
          "transition-none": {
              transitionProperty: "none"
          },
          transition: (e, {
              theme: t
          }) => ({
              transitionProperty: t("transitionProperty", e),
              transitionTimingFunction: t("transitionTimingFunction", ""),
              transitionDuration: t("transitionDuration", "")
          }),
          container: (e, {
              theme: t
          }) => {
              const {
                  screens: n = t("screens"),
                  center: r,
                  padding: o
              } = t("container"), a = e => (Ie = o && ("string" == typeof o ? o : o[e] || o.DEFAULT)) ? {
                  paddingRight: Ie,
                  paddingLeft: Ie
              } : {};
              return Object.keys(n).reduce(((e, t) => ((Fe = n[t]) && "string" == typeof Fe && (e[Ke(Fe)] = {
                  "&": {
                      "max-width": Fe,
                      ...a(t)
                  }
              }), e)), {
                  width: "100%",
                  ...r ? {
                      marginRight: "auto",
                      marginLeft: "auto"
                  } : {},
                  ...a("xs")
              })
          },
          filter: Vt,
          blur: Vt,
          brightness: Vt,
          contrast: Vt,
          grayscale: Vt,
          "hue-rotate": Vt,
          invert: Vt,
          saturate: Vt,
          sepia: Vt,
          "drop-shadow": Vt,
          backdrop: Vt
      },
      Xt = {
          dark: "@media (prefers-color-scheme:dark)",
          sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
          "motion-reduce": "@media (prefers-reduced-motion:reduce)",
          "motion-safe": "@media (prefers-reduced-motion:no-preference)",
          first: "&:first-child",
          last: "&:last-child",
          even: "&:nth-child(2n)",
          odd: "&:nth-child(odd)",
          children: "&>*",
          siblings: "&~*",
          sibling: "&+*",
          override: "&&"
      },
      Zt = "__twind",
      Kt = e => {
          let t = self.__twind;
          return t || (t = document.head.appendChild(document.createElement("style")), t.id = Zt, e && (t.nonce = e), t.appendChild(document.createTextNode(""))), t
      },
      Yt = e => ({
          unknown(e, t = [], n, r) {
              n || this.report({
                  id: "UNKNOWN_THEME_VALUE",
                  key: e + "." + Me(t)
              }, r)
          },
          report: ({
              id: t,
              ...n
          }) => e(`[${t}] ${JSON.stringify(n)}`)
      }),
      Jt = Yt((e => console.warn(e))),
      Qt = Yt((e => {
          throw new Error(e)
      })),
      en = Yt(Ue),
      tn = (e, t, n) => `${e}:${t}${n?" !important":""}`,
      nn = (e, t, n) => {
          let r = "";
          const o = function(e) {
              return Be.get(e)
          }(e);
          o && (r += `${tn(o,t,n)};`);
          let a = function(e) {
              var t = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);
              return t ? t[1] ? 1 : t[2] ? 2 : t[3] ? 3 : 5 : 0
          }(e);
          return 1 & a && (r += `-webkit-${tn(e,t,n)};`), 2 & a && (r += `-moz-${tn(e,t,n)};`), 4 & a && (r += `-ms-${tn(e,t,n)};`), a = function(e, t) {
              var n = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);
              return n ? n[1] ? /^sti/i.test(t) ? 1 : 0 : n[2] ? /^pat/i.test(t) ? 1 : 0 : n[3] ? /^image-/i.test(t) ? 1 : 0 : n[4] ? "-" === t[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(t) ? 4 : 0 : 0
          }(e, t), 1 & a && (r += `${tn(e,`-webkit-${t}`,n)};`), 2 & a && (r += `${tn(e,`-moz-${t}`,n)};`), 4 & a && (r += `${tn(e,`-ms-${t}`,n)};`), r += tn(e, t, n), r
      },
      rn = (e, t) => {
          const n = {};
          do {
              for (let t = 1; t < e; t++) n[`${t}/${e}`] = Number((t / e * 100).toFixed(6)) + "%"
          } while (++e <= t);
          return n
      },
      on = (e, t, n = 0) => {
          const r = {};
          for (; n <= e; n = 2 * n || 1) r[n] = n + t;
          return r
      },
      an = (e, t = "", n = 1, r = 0, o = 1, a = {}) => {
          for (; r <= e; r += o) a[r] = r / n + t;
          return a
      },
      sn = e => t => t(e),
      ln = {
          screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1536px"
          },
          colors: {
              transparent: "transparent",
              current: "currentColor",
              black: "#000",
              white: "#fff",
              gray: {
                  50: "#f9fafb",
                  100: "#f3f4f6",
                  200: "#e5e7eb",
                  300: "#d1d5db",
                  400: "#9ca3af",
                  500: "#6b7280",
                  600: "#4b5563",
                  700: "#374151",
                  800: "#1f2937",
                  900: "#111827"
              },
              red: {
                  50: "#fef2f2",
                  100: "#fee2e2",
                  200: "#fecaca",
                  300: "#fca5a5",
                  400: "#f87171",
                  500: "#ef4444",
                  600: "#dc2626",
                  700: "#b91c1c",
                  800: "#991b1b",
                  900: "#7f1d1d"
              },
              yellow: {
                  50: "#fffbeb",
                  100: "#fef3c7",
                  200: "#fde68a",
                  300: "#fcd34d",
                  400: "#fbbf24",
                  500: "#f59e0b",
                  600: "#d97706",
                  700: "#b45309",
                  800: "#92400e",
                  900: "#78350f"
              },
              green: {
                  50: "#ecfdf5",
                  100: "#d1fae5",
                  200: "#a7f3d0",
                  300: "#6ee7b7",
                  400: "#34d399",
                  500: "#10b981",
                  600: "#059669",
                  700: "#047857",
                  800: "#065f46",
                  900: "#064e3b"
              },
              blue: {
                  50: "#eff6ff",
                  100: "#dbeafe",
                  200: "#bfdbfe",
                  300: "#93c5fd",
                  400: "#60a5fa",
                  500: "#3b82f6",
                  600: "#2563eb",
                  700: "#1d4ed8",
                  800: "#1e40af",
                  900: "#1e3a8a"
              },
              indigo: {
                  50: "#eef2ff",
                  100: "#e0e7ff",
                  200: "#c7d2fe",
                  300: "#a5b4fc",
                  400: "#818cf8",
                  500: "#6366f1",
                  600: "#4f46e5",
                  700: "#4338ca",
                  800: "#3730a3",
                  900: "#312e81"
              },
              purple: {
                  50: "#f5f3ff",
                  100: "#ede9fe",
                  200: "#ddd6fe",
                  300: "#c4b5fd",
                  400: "#a78bfa",
                  500: "#8b5cf6",
                  600: "#7c3aed",
                  700: "#6d28d9",
                  800: "#5b21b6",
                  900: "#4c1d95"
              },
              pink: {
                  50: "#fdf2f8",
                  100: "#fce7f3",
                  200: "#fbcfe8",
                  300: "#f9a8d4",
                  400: "#f472b6",
                  500: "#ec4899",
                  600: "#db2777",
                  700: "#be185d",
                  800: "#9d174d",
                  900: "#831843"
              }
          },
          spacing: {
              px: "1px",
              0: "0px",
              ...an(4, "rem", 4, .5, .5),
              ...an(12, "rem", 4, 5),
              14: "3.5rem",
              ...an(64, "rem", 4, 16, 4),
              72: "18rem",
              80: "20rem",
              96: "24rem"
          },
          durations: {
              75: "75ms",
              100: "100ms",
              150: "150ms",
              200: "200ms",
              300: "300ms",
              500: "500ms",
              700: "700ms",
              1e3: "1000ms"
          },
          animation: {
              none: "none",
              spin: "spin 1s linear infinite",
              ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              bounce: "bounce 1s infinite"
          },
          backdropBlur: sn("blur"),
          backdropBrightness: sn("brightness"),
          backdropContrast: sn("contrast"),
          backdropGrayscale: sn("grayscale"),
          backdropHueRotate: sn("hueRotate"),
          backdropInvert: sn("invert"),
          backdropOpacity: sn("opacity"),
          backdropSaturate: sn("saturate"),
          backdropSepia: sn("sepia"),
          backgroundColor: sn("colors"),
          backgroundImage: {
              none: "none"
          },
          backgroundOpacity: sn("opacity"),
          backgroundSize: {
              auto: "auto",
              cover: "cover",
              contain: "contain"
          },
          blur: {
              0: "0",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "24px",
              "2xl": "40px",
              "3xl": "64px"
          },
          brightness: {
              ...an(200, "", 100, 0, 50),
              ...an(110, "", 100, 90, 5),
              75: "0.75",
              125: "1.25"
          },
          borderColor: e => ({
              ...e("colors"),
              DEFAULT: e("colors.gray.200", "currentColor")
          }),
          borderOpacity: sn("opacity"),
          borderRadius: {
              none: "0px",
              sm: "0.125rem",
              DEFAULT: "0.25rem",
              md: "0.375rem",
              lg: "0.5rem",
              xl: "0.75rem",
              "2xl": "1rem",
              "3xl": "1.5rem",
              "1/2": "50%",
              full: "9999px"
          },
          borderWidth: {
              DEFAULT: "1px",
              ...on(8, "px")
          },
          boxShadow: {
              sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
              none: "none"
          },
          contrast: {
              ...an(200, "", 100, 0, 50),
              75: "0.75",
              125: "1.25"
          },
          divideColor: sn("borderColor"),
          divideOpacity: sn("borderOpacity"),
          divideWidth: sn("borderWidth"),
          dropShadow: {
              sm: "0 1px 1px rgba(0,0,0,0.05)",
              DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
              md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
              lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
              xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
              "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
              none: "0 0 #0000"
          },
          fill: {
              current: "currentColor"
          },
          grayscale: {
              0: "0",
              DEFAULT: "100%"
          },
          hueRotate: {
              0: "0deg",
              15: "15deg",
              30: "30deg",
              60: "60deg",
              90: "90deg",
              180: "180deg"
          },
          invert: {
              0: "0",
              DEFAULT: "100%"
          },
          flex: {
              1: "1 1 0%",
              auto: "1 1 auto",
              initial: "0 1 auto",
              none: "none"
          },
          fontFamily: {
              sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
              serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
              mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
          },
          fontSize: {
              xs: ["0.75rem", "1rem"],
              sm: ["0.875rem", "1.25rem"],
              base: ["1rem", "1.5rem"],
              lg: ["1.125rem", "1.75rem"],
              xl: ["1.25rem", "1.75rem"],
              "2xl": ["1.5rem", "2rem"],
              "3xl": ["1.875rem", "2.25rem"],
              "4xl": ["2.25rem", "2.5rem"],
              "5xl": ["3rem", "1"],
              "6xl": ["3.75rem", "1"],
              "7xl": ["4.5rem", "1"],
              "8xl": ["6rem", "1"],
              "9xl": ["8rem", "1"]
          },
          fontWeight: {
              thin: "100",
              extralight: "200",
              light: "300",
              normal: "400",
              medium: "500",
              semibold: "600",
              bold: "700",
              extrabold: "800",
              black: "900"
          },
          gridTemplateColumns: {},
          gridTemplateRows: {},
          gridAutoColumns: {
              min: "min-content",
              max: "max-content",
              fr: "minmax(0,1fr)"
          },
          gridAutoRows: {
              min: "min-content",
              max: "max-content",
              fr: "minmax(0,1fr)"
          },
          gridColumn: {
              auto: "auto",
              "span-full": "1 / -1"
          },
          gridRow: {
              auto: "auto",
              "span-full": "1 / -1"
          },
          gap: sn("spacing"),
          gradientColorStops: sn("colors"),
          height: e => ({
              auto: "auto",
              ...e("spacing"),
              ...rn(2, 6),
              full: "100%",
              screen: "100vh"
          }),
          inset: e => ({
              auto: "auto",
              ...e("spacing"),
              ...rn(2, 4),
              full: "100%"
          }),
          keyframes: {
              spin: {
                  from: {
                      transform: "rotate(0deg)"
                  },
                  to: {
                      transform: "rotate(360deg)"
                  }
              },
              ping: {
                  "0%": {
                      transform: "scale(1)",
                      opacity: "1"
                  },
                  "75%,100%": {
                      transform: "scale(2)",
                      opacity: "0"
                  }
              },
              pulse: {
                  "0%,100%": {
                      opacity: "1"
                  },
                  "50%": {
                      opacity: ".5"
                  }
              },
              bounce: {
                  "0%, 100%": {
                      transform: "translateY(-25%)",
                      animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                  },
                  "50%": {
                      transform: "none",
                      animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                  }
              }
          },
          letterSpacing: {
              tighter: "-0.05em",
              tight: "-0.025em",
              normal: "0em",
              wide: "0.025em",
              wider: "0.05em",
              widest: "0.1em"
          },
          lineHeight: {
              none: "1",
              tight: "1.25",
              snug: "1.375",
              normal: "1.5",
              relaxed: "1.625",
              loose: "2",
              ...an(10, "rem", 4, 3)
          },
          margin: e => ({
              auto: "auto",
              ...e("spacing")
          }),
          maxHeight: e => ({
              ...e("spacing"),
              full: "100%",
              screen: "100vh"
          }),
          maxWidth: (e, {
              breakpoints: t
          }) => ({
              none: "none",
              0: "0rem",
              xs: "20rem",
              sm: "24rem",
              md: "28rem",
              lg: "32rem",
              xl: "36rem",
              "2xl": "42rem",
              "3xl": "48rem",
              "4xl": "56rem",
              "5xl": "64rem",
              "6xl": "72rem",
              "7xl": "80rem",
              full: "100%",
              min: "min-content",
              max: "max-content",
              prose: "65ch",
              ...t(e("screens"))
          }),
          minHeight: {
              0: "0px",
              full: "100%",
              screen: "100vh"
          },
          minWidth: {
              0: "0px",
              full: "100%",
              min: "min-content",
              max: "max-content"
          },
          opacity: {
              ...an(100, "", 100, 0, 10),
              5: "0.05",
              25: "0.25",
              75: "0.75",
              95: "0.95"
          },
          order: {
              first: "-9999",
              last: "9999",
              none: "0",
              ...an(12, "", 1, 1)
          },
          outline: {
              none: ["2px solid transparent", "2px"],
              white: ["2px dotted white", "2px"],
              black: ["2px dotted black", "2px"]
          },
          padding: sn("spacing"),
          placeholderColor: sn("colors"),
          placeholderOpacity: sn("opacity"),
          ringColor: e => ({
              DEFAULT: e("colors.blue.500", "#3b82f6"),
              ...e("colors")
          }),
          ringOffsetColor: sn("colors"),
          ringOffsetWidth: on(8, "px"),
          ringOpacity: e => ({
              DEFAULT: "0.5",
              ...e("opacity")
          }),
          ringWidth: {
              DEFAULT: "3px",
              ...on(8, "px")
          },
          rotate: {
              ...on(2, "deg"),
              ...on(12, "deg", 3),
              ...on(180, "deg", 45)
          },
          saturate: an(200, "", 100, 0, 50),
          scale: {
              ...an(150, "", 100, 0, 50),
              ...an(110, "", 100, 90, 5),
              75: "0.75",
              125: "1.25"
          },
          sepia: {
              0: "0",
              DEFAULT: "100%"
          },
          skew: {
              ...on(2, "deg"),
              ...on(12, "deg", 3)
          },
          space: sn("spacing"),
          stroke: {
              current: "currentColor"
          },
          strokeWidth: an(2),
          textColor: sn("colors"),
          textOpacity: sn("opacity"),
          transitionDuration: e => ({
              DEFAULT: "150ms",
              ...e("durations")
          }),
          transitionDelay: sn("durations"),
          transitionProperty: {
              none: "none",
              all: "all",
              DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
              colors: "background-color,border-color,color,fill,stroke",
              opacity: "opacity",
              shadow: "box-shadow",
              transform: "transform"
          },
          transitionTimingFunction: {
              DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
              linear: "linear",
              in: "cubic-bezier(0.4,0,1,1)",
              out: "cubic-bezier(0,0,0.2,1)",
              "in-out": "cubic-bezier(0.4,0,0.2,1)"
          },
          translate: e => ({
              ...e("spacing"),
              ...rn(2, 4),
              full: "100%"
          }),
          width: e => ({
              auto: "auto",
              ...e("spacing"),
              ...rn(2, 6),
              ...rn(12, 12),
              screen: "100vw",
              full: "100%",
              min: "min-content",
              max: "max-content"
          }),
          zIndex: {
              auto: "auto",
              ...an(50, "", 1, 0, 10)
          }
      },
      cn = (e, t = {}, n = []) => (Object.keys(e).forEach((r => {
          const o = e[r];
          "DEFAULT" == r && (t[Me(n)] = o, t[Me(n, ".")] = o);
          const a = [...n, r];
          t[Me(a)] = o, t[Me(a, ".")] = o, o && "object" == typeof o && cn(o, t, a)
      }), t), t),
      un = {
          negative: () => ({}),
          breakpoints: e => Object.keys(e).filter((t => "string" == typeof e[t])).reduce(((t, n) => (t["screen-" + n] = e[n], t)), {})
      },
      dn = e => {
          const t = new Map,
              n = {
                  ...ln,
                  ...e
              },
              r = (e, t) => {
                  const n = e && e[t],
                      r = "function" == typeof n ? n(o, un) : n;
                  return r && "colors" == t ? cn(r) : r
              },
              o = (e, o, a) => {
                  const i = e.split(".");
                  e = i[0], i.length > 1 && (a = o, o = Me(He(i), "."));
                  let s = t.get(e);
                  if (s || (t.set(e, s = {
                          ...r(n, e)
                      }), Object.assign(s, r(n.extend, e))), null != o) {
                      const t = ((e, t) => (t = "[" == t[0] && "]" == t.slice(-1) && t.slice(1, -1)) && je(e, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t) && (je(t, "calc(") ? t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : t))(e, o = (Array.isArray(o) ? Me(o) : o) || "DEFAULT") || s[o];
                      return null == t ? a : Array.isArray(t) && !je(["fontSize", "outline", "dropShadow"], e) ? Me(t, ",") : t
                  }
                  return s
              };
          return o
      },
      pn = /^:(group(?:(?!-focus).+?)*)-(.+)$/,
      fn = /^(:not)-(.+)/,
      mn = e => "[" == e[1] ? He(e) : e,
      _n = e => (31 & ((De = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e)) ? +De[1] / (De[2] ? 15 : 1) / 10 : 0)) << 22,
      hn = e => {
          De = 0;
          for (let t = e.length; t--;) De += je("-:,", e[t]);
          return De
      },
      gn = e => (15 & hn(e)) << 18,
      vn = ["rst", "st", "en", "d", "nk", "sited", "pty", "ecked", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "ad-on", "tiona", "quire"],
      bn = (e, t) => (n, r) => {
          return n | ((De = e("screens", He(r), "")) ? 1 << 27 | _n(Ke(De)) : ":dark" == r ? 1 << 30 : "@" == (De = t[r] || r.replace(fn, ":$2"))[0] ? gn(De) : (o = r, 1 << (~(De = vn.indexOf(o.replace(pn, ":$2").slice(3, 8))) ? De : 17)));
          var o
      },
      yn = (e, t) => t + "{" + e + "}",
      wn = (e, t, n) => {
          const {
              theme: r,
              tag: o
          } = n, a = (e, t) => "--" + o(t), i = e => `${e}`.replace(/--(tw-[\w-]+)\b/g, a);
          let s;
          const l = (t, r, o, a, c) => {
                  if (Array.isArray(a)) return void a.forEach((e => e && l(t, r, o, e, c)));
                  let u = "",
                      d = 0,
                      p = 0;
                  a["@apply"] && (a = Xe(Ge(((...e) => dt(pt, e))(a["@apply"]), n), {
                      ...a,
                      "@apply": void 0
                  }, n)), Object.keys(a).forEach((f => {
                      const m = Ge(a[f], n);
                      if (qe(f, m)) {
                          if ("" !== m && f.length > 1) {
                              const t = We(f);
                              p += 1, d = Math.max(d, (e => "-" == e[0] ? 0 : hn(e) + ((De = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(e)) ? +!!De[1] || -!!De[2] : 0) + 1)(t)), u = (u && u + ";") + ((t, n, r) => (t = i(t), Array.isArray(n) ? Me(n.filter(Boolean).map((n => e(t, i(n), r))), ";") : e(t, i(n), r)))(t, m, c)
                          }
                      } else if (m)
                          if (":global" == f && (f = "@global"), "@" == f[0])
                              if ("g" == f[1]) l([], "", 0, m, c);
                              else if ("f" == f[1]) l([], f, 0, m, c);
                      else if ("k" == f[1]) {
                          const e = s.length;
                          l([], "", 0, m, c);
                          const t = s.splice(e, s.length - e);
                          s.push({
                              r: yn(Me(t.map((e => e.r)), ""), f),
                              p: t.reduce(((e, t) => e + t.p), 0)
                          })
                      } else "i" == f[1] ? (Array.isArray(m) ? m : [m]).forEach((e => e && s.push({
                          p: 0,
                          r: `${f} ${e};`
                      }))) : ("c" == f[2] && (f = Ke(n.theme("screens", He(f, 8).trim()))), l([...t, f], r, o | _n(f) | gn(f), m, c));
                      else l(t, r ? Me(r.split(/,(?![^[]*])/g).map((e => Me(f.split(/,(?![^[]*])/g).map((t => je(t, "&") ? t.replace(/&/g, e) : (e && e + " ") + t)), ","))), ",") : f, o, m, c)
                  })), p && s.push({
                      r: t.reduceRight(yn, yn(u, r)),
                      p: 256 * o + ((15 & Math.max(0, 15 - p)) << 4 | 15 & (d || 15))
                  })
              },
              c = bn(r, t);
          return (e, t, n, r = 0) => (r <<= 28, s = [], l([], t ? "." + Ze(t) : "", n ? n.v.reduceRight(c, r) : r, e, n && n.i), s)
      },
      xn = (e, t, n, r = t) => !1 === e ? n : !0 === e ? r : e || t,
      An = (e, t) => e + (":" == t[1] ? He(t, 2) + ":" : He(t)) + ":",
      kn = (e, t = e.d) => "function" == typeof t ? "" : e.v.reduce(An, "") + (e.i ? "!" : "") + (e.n ? "-" : "") + t,
      Tn = {
          _: {
              value: "",
              writable: !0
          }
      },
      Sn = (e = {}) => {
          const t = dn(e.theme),
              n = (e => ("string" == typeof e ? {
                  t: Qt,
                  a: Jt,
                  i: en
              } [e[1]] : e) || Jt)(e.mode),
              r = xn(e.hash, !1, !1, Ye),
              o = e.important;
          let a = {
                  v: []
              },
              i = 0;
          const s = [],
              l = {
                  tw: (...e) => y(e),
                  theme: (e, r, o) => {
                      var i;
                      const s = null != (i = t(e, r, o)) ? i : n.unknown(e, null == r || Array.isArray(r) ? r : r.split("."), null != o, l);
                      return a.n && s && je("rg", (typeof s)[5]) ? `calc(${s} * -1)` : s
                  },
                  tag: e => r ? r(e) : e,
                  css: e => {
                      i++;
                      const t = s.length;
                      try {
                          ("string" == typeof e ? lt([e]) : e).forEach(b);
                          const n = Object.create(null, Tn);
                          for (let e = t; e < s.length; e++) {
                              const t = s[e];
                              if (t) switch (typeof t) {
                                  case "object":
                                      Xe(n, t, l);
                                      break;
                                  case "string":
                                      n._ += (n._ && " ") + t
                              }
                          }
                          return n
                      } finally {
                          s.length = t, i--
                      }
                  }
              },
              c = ((e, t) => (n, r) => {
                  if ("function" == typeof n.d) return n.d(t);
                  const o = n.d.split(/-(?![^[]*])/g);
                  if (!r && "tw" == o[0] && n.$ == n.d) return n.$;
                  for (let n = o.length; n; n--) {
                      const a = Me(o.slice(0, n)),
                          i = e[a];
                      if (i) return "function" == typeof i ? i(He(o, n), t, a) : "string" == typeof i ? t[r ? "css" : "tw"](i) : i
                  }
              })({
                  ...qt,
                  ...e.plugins
              }, l),
              u = {
                  ...Xt,
                  ...e.variants
              },
              d = ((e, t, {
                  theme: n,
                  tag: r
              }) => {
                  const o = (o, a) => (Pe = n("screens", He(a), "")) ? {
                      [Ke(Pe)]: o
                  } : ":dark" == a && "class" == e ? {
                      ".dark &": o
                  } : (Pe = pn.exec(a)) ? {
                      [`.${Ze(r(Pe[1]))}:${Pe[2]} &`]: o
                  } : {
                      [t[He(a)] || "&" + a.replace(fn, ((e, t, n) => t + "(" + mn(":" + n) + ")"))]: o
                  };
                  return (e, t) => t.v.reduceRight(o, e)
              })(e.darkMode || "media", u, l),
              p = wn(xn(e.prefix, nn, tn), u, l),
              f = e.sheet || ("undefined" == typeof window ? {
                  target: null,
                  insert: Ue
              } : (({
                  nonce: e,
                  target: t = Kt(e).sheet
              } = {}) => {
                  const n = t.cssRules.length;
                  return {
                      target: t,
                      insert: (e, r) => t.insertRule(e, n + r)
                  }
              })(e)),
              {
                  init: m = (e => e())
              } = f,
              _ = ((e, t, n, r) => {
                  let o, a;
                  return n(((e = []) => o = e)), n(((e = new Set) => a = e)), ({
                      r: n,
                      p: i
                  }) => {
                      if (!a.has(n)) {
                          a.add(n);
                          const s = ((e, t) => {
                              for (var n = 0, r = e.length; n < r;) {
                                  const o = r + n >> 1;
                                  e[o] <= t ? n = o + 1 : r = o
                              }
                              return r
                          })(o, i);
                          try {
                              e.insert(n, s), o.splice(s, 0, i)
                          } catch (e) {
                              /:-[mwo]/.test(n) || t.report({
                                  id: "INJECT_CSS_ERROR",
                                  css: n,
                                  error: e
                              }, r)
                          }
                      }
                  }
              })(f, n, m, l);
          let h;
          m(((e = new Map) => h = e));
          const g = new WeakMap,
              v = (e, t) => "_" == e ? void 0 : "function" == typeof t ? JSON.stringify(Ge(t, l), v) : t,
              b = e => {
                  !i && a.v.length && (e = {
                      ...e,
                      v: [...a.v, ...e.v],
                      $: ""
                  }), e.$ || (e.$ = kn(e, g.get(e.d)));
                  let t = i ? null : h.get(e.$);
                  if (null == t) {
                      let u = (e => {
                          const t = a;
                          a = e;
                          try {
                              return Ge(c(e), l)
                          } finally {
                              a = t
                          }
                      })(e);
                      if (e.$ || (e.$ = Ye(JSON.stringify(u, v)), g.set(e.d, e.$), e.$ = kn(e, e.$)), u && "object" == typeof u)
                          if (e.v = e.v.map(mn), o && (e.i = o), u = d(u, e), i) s.push(u);
                          else {
                              const n = "function" == typeof e.d ? "string" == typeof u._ ? 1 : 3 : 2;
                              t = r || "function" == typeof e.d ? (r || Ye)(n + e.$) : e.$, p(u, t, e, n).forEach(_), u._ && (t += " " + u._)
                          }
                      else "string" == typeof u ? t = u : (t = e.$, n.report({
                          id: "UNKNOWN_DIRECTIVE",
                          rule: t
                      }, l)), i && "function" != typeof e.d && s.push(t);
                      i || (h.set(e.$, t), Ve(h, 3e4))
                  }
                  return t
              },
              y = e => Me(lt(e).map(b).filter(Boolean), " "),
              w = xn(e.preflight, Ne, !1);
          if (w) {
              const e = (e => ({
                      ":root": {
                          tabSize: 4
                      },
                      "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {
                          margin: "0"
                      },
                      button: {
                          backgroundColor: "transparent",
                          backgroundImage: "none"
                      },
                      'button,[type="button"],[type="reset"],[type="submit"]': {
                          WebkitAppearance: "button"
                      },
                      "button:focus": {
                          outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]
                      },
                      "fieldset,ol,ul,legend": {
                          padding: "0"
                      },
                      "ol,ul": {
                          listStyle: "none"
                      },
                      html: {
                          lineHeight: "1.5",
                          WebkitTextSizeAdjust: "100%",
                          fontFamily: e("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
                      },
                      body: {
                          fontFamily: "inherit",
                          lineHeight: "inherit"
                      },
                      "*,::before,::after": {
                          boxSizing: "border-box",
                          border: `0 solid ${e("borderColor.DEFAULT","currentColor")}`
                      },
                      hr: {
                          height: "0",
                          color: "inherit",
                          borderTopWidth: "1px"
                      },
                      img: {
                          borderStyle: "solid"
                      },
                      textarea: {
                          resize: "vertical"
                      },
                      "input::placeholder,textarea::placeholder": {
                          opacity: "1",
                          color: e("placeholderColor.DEFAULT", e("colors.gray.400", "#a1a1aa"))
                      },
                      'button,[role="button"]': {
                          cursor: "pointer"
                      },
                      table: {
                          textIndent: "0",
                          borderColor: "inherit",
                          borderCollapse: "collapse"
                      },
                      "h1,h2,h3,h4,h5,h6": {
                          fontSize: "inherit",
                          fontWeight: "inherit"
                      },
                      a: {
                          color: "inherit",
                          textDecoration: "inherit"
                      },
                      "button,input,optgroup,select,textarea": {
                          fontFamily: "inherit",
                          fontSize: "100%",
                          margin: "0",
                          padding: "0",
                          lineHeight: "inherit",
                          color: "inherit"
                      },
                      "button,select": {
                          textTransform: "none"
                      },
                      "::-moz-focus-inner": {
                          borderStyle: "none",
                          padding: "0"
                      },
                      ":-moz-focusring": {
                          outline: "1px dotted ButtonText"
                      },
                      ":-moz-ui-invalid": {
                          boxShadow: "none"
                      },
                      progress: {
                          verticalAlign: "baseline"
                      },
                      "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
                          height: "auto"
                      },
                      '[type="search"]': {
                          WebkitAppearance: "textfield",
                          outlineOffset: "-2px"
                      },
                      "::-webkit-search-decoration": {
                          WebkitAppearance: "none"
                      },
                      "::-webkit-file-upload-button": {
                          WebkitAppearance: "button",
                          font: "inherit"
                      },
                      summary: {
                          display: "list-item"
                      },
                      "abbr[title]": {
                          textDecoration: "underline dotted"
                      },
                      "b,strong": {
                          fontWeight: "bolder"
                      },
                      "pre,code,kbd,samp": {
                          fontFamily: e("fontFamily", "mono", "ui-monospace,monospace"),
                          fontSize: "1em"
                      },
                      "sub,sup": {
                          fontSize: "75%",
                          lineHeight: "0",
                          position: "relative",
                          verticalAlign: "baseline"
                      },
                      sub: {
                          bottom: "-0.25em"
                      },
                      sup: {
                          top: "-0.5em"
                      },
                      "img,svg,video,canvas,audio,iframe,embed,object": {
                          display: "block",
                          verticalAlign: "middle"
                      },
                      "img,video": {
                          maxWidth: "100%",
                          height: "auto"
                      }
                  }))(t),
                  n = p("function" == typeof w ? Ge(w(e, l), l) || e : {
                      ...e,
                      ...w
                  });
              m(((e = (n.forEach(_), !0)) => e))
          }
          return {
              init: () => n.report({
                  id: "LATE_SETUP_CALL"
              }, l),
              process: y
          }
      },
      En = e => {
          let t, n = e => (r(), n(e)),
              r = e => {
                  ({
                      process: n,
                      init: r
                  } = Sn(e))
              };
          e && r(e);
          return {
              tw: Object.defineProperties(((...e) => n(e)), {
                  theme: {
                      get: (o = "theme", () => (t || n([e => (t = e, "")]), t[o]))
                  }
              }),
              setup: e => r(e)
          };
          var o
      },
      {
          tw: Bn,
          setup: $n
      } = En();
  const Cn = [];
  const On = function(t, n = e) {
      let r;
      const o = new Set;

      function i(e) {
          if (a(t, e) && (t = e, r)) {
              const e = !Cn.length;
              for (const e of o) e[1](), Cn.push(e, t);
              if (e) {
                  for (let e = 0; e < Cn.length; e += 2) Cn[e][0](Cn[e + 1]);
                  Cn.length = 0
              }
          }
      }
      return {
          set: i,
          update: function(e) {
              i(e(t))
          },
          subscribe: function(a, s = e) {
              const l = [a, s];
              return o.add(l), 1 === o.size && (r = n(i) || e), a(t), () => {
                  o.delete(l), 0 === o.size && (r(), r = null)
              }
          }
      }
  }(localStorage.getItem("count") || parseInt(0));

  function In(e) {
      let t;
      return {
          c() {
              t = m("div"), v(t, "id", "kofiContainer"), v(t, "class", "web-only")
          },
          m(e, n) {
              p(e, t, n)
          },
          d(e) {
              e && f(t)
          }
      }
  }

  function Ln(t) {
      let n, r, o, a, i, s, c = t[0] && In();
      return {
          c() {
              n = m("script"), o = h(), c && c.c(), a = _(""), n.async = !0, n.defer = !0, v(n, "type", "text/javascript"), l(n.src, r = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js") || v(n, "src", "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js")
          },
          m(e, r) {
              d(document.head, n), p(e, o, r), c && c.m(e, r), p(e, a, r), i || (s = g(n, "load", t[1]), i = !0)
          },
          p(e, [t]) {
              e[0] ? c || (c = In(), c.c(), c.m(a.parentNode, a)) : c && (c.d(1), c = null)
          },
          i: e,
          o: e,
          d(e) {
              f(n), e && f(o), c && c.d(e), e && f(a), i = !1, s()
          }
      }
  }

  function Fn(e, t, n) {
      let {
          name: r
      } = t, o = !1;

      function a() {
          window.kofiWidgetOverlay?.draw(r, {
              type: "floating-chat",
              "floating-chat.donateButton.text": "Support me",
              "floating-chat.donateButton.background-color": "#f00",
              "floating-chat.donateButton.text-color": "#fff"
          }, "kofiContainer")
      }
      return A((() => {
          o = !0, setTimeout((() => a()), 1e3)
      })), e.$$set = e => {
          "name" in e && n(0, r = e.name)
      }, [r, function() {
          o && a()
      }]
  }
  class Pn extends N {
      constructor(e) {
          super(), H(this, e, Fn, Ln, a, {
              name: 0
          })
      }
  }
  var Dn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};/*!
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
var jn,Mn=(function(e,t){!function(){var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||n;if(e=parseFloat(e),t.ctx||u(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var r=0;r<t._howls.length;r++)if(!t._howls[r]._webAudio)for(var o=t._howls[r]._getSoundIds(),a=0;a<o.length;a++){var i=t._howls[r]._soundById(o[a]);i&&i._node&&(i._node.volume=i._volume*e)}return t}return t._volume},mute:function(e){var t=this||n;t.ctx||u(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,n.ctx.currentTime);for(var r=0;r<t._howls.length;r++)if(!t._howls[r]._webAudio)for(var o=t._howls[r]._getSoundIds(),a=0;a<o.length;a++){var i=t._howls[r]._soundById(o[a]);i&&i._node&&(i._node.muted=!!e||i._muted)}return t},stop:function(){for(var e=this||n,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||n,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,u()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(e._canPlayEvent="canplay")}catch(t){e.noAudio=!0}else e.noAudio=!0;try{(new Audio).muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(t){return e}if(!t||"function"!=typeof t.canPlayType)return e;var r=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator?e._navigator.userAgent:"",a=o.match(/OPR\/([0-6].)/g),i=a&&parseInt(a[0].split("/")[1],10)<33,s=-1!==o.indexOf("Safari")&&-1===o.indexOf("Chrome"),l=o.match(/Version\/(.*?) /),c=s&&l&&parseInt(l[1],10)<15;return e._codecs={mp3:!(i||!r&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!r,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(c||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(c||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch(n){e.noAudio=!0;break}for(var o=0;o<e._howls.length;o++)if(!e._howls[o]._webAudio)for(var a=e._howls[o]._getSoundIds(),i=0;i<a.length;i++){var s=e._howls[o]._soundById(a[i]);s&&s._node&&!s._node._unlocked&&(s._node._unlocked=!0,s._node.load())}e._autoResume();var l=e.ctx.createBufferSource();l.buffer=e._scratchBuffer,l.connect(e.ctx.destination),void 0===l.start?l.noteOn(0):l.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),l.onended=function(){l.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=(new Audio).play();return t&&"undefined"!=typeof Promise&&(t instanceof Promise||"function"==typeof t.then)&&t.catch((function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")})),new Audio},_releaseHtml5Audio:function(e){var t=this||n;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var r=0;r<e._howls[t]._sounds.length;r++)if(!e._howls[t]._sounds[r]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout((function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}}),3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then((function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")})),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,r=function(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")};r.prototype={init:function(e){var t=this;return n.ctx||u(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=n.usingWebAudio&&!t._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&"none"!==t._preload&&t.load(),t},load:function(){var e=this,t=null;if(n.noAudio)e._emit("loaderror",null,"No audio support.");else{"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var a,s;if(e._format&&e._format[r])a=e._format[r];else{if("string"!=typeof(s=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(a=/^data:audio\/([^;,]+);/i.exec(s))||(a=/\.([^.]+)$/.exec(s.split("?",1)[0])),a&&(a=a[1].toLowerCase())}if(a||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),a&&n.codecs(a)){t=e._src[r];break}}if(t)return e._src=t,e._state="loading","https:"===window.location.protocol&&"http:"===t.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new o(e),e._webAudio&&i(e),e;e._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(e,t){var r=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===r._state&&!r._sprite[e])return null;if(void 0===e&&(e="__default",!r._playLock)){for(var a=0,i=0;i<r._sounds.length;i++)r._sounds[i]._paused&&!r._sounds[i]._ended&&(a++,o=r._sounds[i]._id);1===a?e=null:o=null}}var s=o?r._soundById(o):r._inactiveSound();if(!s)return null;if(o&&!e&&(e=s._sprite||"__default"),"loaded"!==r._state){s._sprite=e,s._ended=!1;var l=s._id;return r._queue.push({event:"play",action:function(){r.play(l)}}),l}if(o&&!s._paused)return t||r._loadQueue("play"),s._id;r._webAudio&&n._autoResume();var c=Math.max(0,s._seek>0?s._seek:r._sprite[e][0]/1e3),u=Math.max(0,(r._sprite[e][0]+r._sprite[e][1])/1e3-c),d=1e3*u/Math.abs(s._rate),p=r._sprite[e][0]/1e3,f=(r._sprite[e][0]+r._sprite[e][1])/1e3;s._sprite=e,s._ended=!1;var m=function(){s._paused=!1,s._seek=c,s._start=p,s._stop=f,s._loop=!(!s._loop&&!r._sprite[e][2])};if(!(c>=f)){var _=s._node;if(r._webAudio){var h=function(){r._playLock=!1,m(),r._refreshBuffer(s);var e=s._muted||r._muted?0:s._volume;_.gain.setValueAtTime(e,n.ctx.currentTime),s._playStart=n.ctx.currentTime,void 0===_.bufferSource.start?s._loop?_.bufferSource.noteGrainOn(0,c,86400):_.bufferSource.noteGrainOn(0,c,u):s._loop?_.bufferSource.start(0,c,86400):_.bufferSource.start(0,c,u),d!==1/0&&(r._endTimers[s._id]=setTimeout(r._ended.bind(r,s),d)),t||setTimeout((function(){r._emit("play",s._id),r._loadQueue()}),0)};"running"===n.state&&"interrupted"!==n.ctx.state?h():(r._playLock=!0,r.once("resume",h),r._clearTimer(s._id))}else{var g=function(){_.currentTime=c,_.muted=s._muted||r._muted||n._muted||_.muted,_.volume=s._volume*n.volume(),_.playbackRate=s._rate;try{var o=_.play();if(o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)?(r._playLock=!0,m(),o.then((function(){r._playLock=!1,_._unlocked=!0,t?r._loadQueue():r._emit("play",s._id)})).catch((function(){r._playLock=!1,r._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),s._ended=!0,s._paused=!0}))):t||(r._playLock=!1,m(),r._emit("play",s._id)),_.playbackRate=s._rate,_.paused)return void r._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||s._loop?r._endTimers[s._id]=setTimeout(r._ended.bind(r,s),d):(r._endTimers[s._id]=function(){r._ended(s),_.removeEventListener("ended",r._endTimers[s._id],!1)},_.addEventListener("ended",r._endTimers[s._id],!1))}catch(e){r._emit("playerror",s._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===_.src&&(_.src=r._src,_.load());var v=window&&window.ejecta||!_.readyState&&n._navigator.isCocoonJS;if(_.readyState>=3||v)g();else{r._playLock=!0,r._state="loading";var b=function(){r._state="loaded",g(),_.removeEventListener(n._canPlayEvent,b,!1)};_.addEventListener(n._canPlayEvent,b,!1),r._clearTimer(s._id)}}return s._id}r._ended(s)},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),r=0;r<n.length;r++){t._clearTimer(n[r]);var o=t._soundById(n[r]);if(o&&!o._paused&&(o._seek=t.seek(n[r]),o._rateSeek=0,o._paused=!0,t._stopFade(n[r]),o._node))if(t._webAudio){if(!o._node.bufferSource)continue;void 0===o._node.bufferSource.stop?o._node.bufferSource.noteOff(0):o._node.bufferSource.stop(0),t._cleanBuffer(o._node)}else isNaN(o._node.duration)&&o._node.duration!==1/0||o._node.pause();arguments[1]||t._emit("pause",o?o._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var r=n._getSoundIds(e),o=0;o<r.length;o++){n._clearTimer(r[o]);var a=n._soundById(r[o]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,n._stopFade(r[o]),a._node&&(n._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),n._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&n._clearSound(a._node))),t||n._emit("stop",a._id))}return n},mute:function(e,t){var r=this;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"mute",action:function(){r.mute(e,t)}}),r;if(void 0===t){if("boolean"!=typeof e)return r._muted;r._muted=e}for(var o=r._getSoundIds(t),a=0;a<o.length;a++){var i=r._soundById(o[a]);i&&(i._muted=e,i._interval&&r._stopFade(i._id),r._webAudio&&i._node?i._node.gain.setValueAtTime(e?0:i._volume,n.ctx.currentTime):i._node&&(i._node.muted=!!n._muted||e),r._emit("mute",i._id))}return r},volume:function(){var e,t,r,o=this,a=arguments;if(0===a.length)return o._volume;if(1===a.length||2===a.length&&void 0===a[1]){var i=o._getSoundIds(),s=i.indexOf(a[0]);s>=0?t=parseInt(a[0],10):e=parseFloat(a[0])}else a.length>=2&&(e=parseFloat(a[0]),t=parseInt(a[1],10));if(!(void 0!==e&&e>=0&&e<=1))return(r=t?o._soundById(t):o._sounds[0])?r._volume:0;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,a)}}),o;void 0===t&&(o._volume=e),t=o._getSoundIds(t);for(var l=0;l<t.length;l++)(r=o._soundById(t[l]))&&(r._volume=e,a[2]||o._stopFade(t[l]),o._webAudio&&r._node&&!r._muted?r._node.gain.setValueAtTime(e,n.ctx.currentTime):r._node&&!r._muted&&(r._node.volume=e*n.volume()),o._emit("volume",r._id));return o},fade:function(e,t,r,o){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,t,r,o)}}),a;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),r=parseFloat(r),a.volume(e,o);for(var i=a._getSoundIds(o),s=0;s<i.length;s++){var l=a._soundById(i[s]);if(l){if(o||a._stopFade(i[s]),a._webAudio&&!l._muted){var c=n.ctx.currentTime,u=c+r/1e3;l._volume=e,l._node.gain.setValueAtTime(e,c),l._node.gain.linearRampToValueAtTime(t,u)}a._startFadeInterval(l,e,t,r,i[s],void 0===o)}}return a},_startFadeInterval:function(e,t,n,r,o,a){var i=this,s=t,l=n-t,c=Math.abs(l/.01),u=Math.max(4,c>0?r/c:r),d=Date.now();e._fadeTo=n,e._interval=setInterval((function(){var o=(Date.now()-d)/r;d=Date.now(),s+=l*o,s=Math.round(100*s)/100,s=l<0?Math.max(n,s):Math.min(n,s),i._webAudio?e._volume=s:i.volume(s,e._id,!0),a&&(i._volume=s),(n<t&&s<=n||n>t&&s>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,i.volume(n,e._id),i._emit("fade",e._id))}),u)},_stopFade:function(e){var t=this,r=t._soundById(e);return r&&r._interval&&(t._webAudio&&r._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(r._interval),r._interval=null,t.volume(r._fadeTo,e),r._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e,t,n,r=this,o=arguments;if(0===o.length)return r._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(n=r._soundById(parseInt(o[0],10)))&&n._loop;e=o[0],r._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var a=r._getSoundIds(t),i=0;i<a.length;i++)(n=r._soundById(a[i]))&&(n._loop=e,r._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,r.playing(a[i])&&(r.pause(a[i],!0),r.play(a[i],!0)))));return r},rate:function(){var e,t,r,o=this,a=arguments;if(0===a.length)t=o._sounds[0]._id;else if(1===a.length){var i=o._getSoundIds(),s=i.indexOf(a[0]);s>=0?t=parseInt(a[0],10):e=parseFloat(a[0])}else 2===a.length&&(e=parseFloat(a[0]),t=parseInt(a[1],10));if("number"!=typeof e)return(r=o._soundById(t))?r._rate:o._rate;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,a)}}),o;void 0===t&&(o._rate=e),t=o._getSoundIds(t);for(var l=0;l<t.length;l++)if(r=o._soundById(t[l])){o.playing(t[l])&&(r._rateSeek=o.seek(t[l]),r._playStart=o._webAudio?n.ctx.currentTime:r._playStart),r._rate=e,o._webAudio&&r._node&&r._node.bufferSource?r._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):r._node&&(r._node.playbackRate=e);var c=o.seek(t[l]),u=(o._sprite[r._sprite][0]+o._sprite[r._sprite][1])/1e3-c,d=1e3*u/Math.abs(r._rate);!o._endTimers[t[l]]&&r._paused||(o._clearTimer(t[l]),o._endTimers[t[l]]=setTimeout(o._ended.bind(o,r),d)),o._emit("rate",r._id)}return o},seek:function(){var e,t,r=this,o=arguments;if(0===o.length)r._sounds.length&&(t=r._sounds[0]._id);else if(1===o.length){var a=r._getSoundIds(),i=a.indexOf(o[0]);i>=0?t=parseInt(o[0],10):r._sounds.length&&(t=r._sounds[0]._id,e=parseFloat(o[0]))}else 2===o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10));if(void 0===t)return 0;if("number"==typeof e&&("loaded"!==r._state||r._playLock))return r._queue.push({event:"seek",action:function(){r.seek.apply(r,o)}}),r;var s=r._soundById(t);if(s){if(!("number"==typeof e&&e>=0)){if(r._webAudio){var l=r.playing(t)?n.ctx.currentTime-s._playStart:0,c=s._rateSeek?s._rateSeek-s._seek:0;return s._seek+(c+l*Math.abs(s._rate))}return s._node.currentTime}var u=r.playing(t);u&&r.pause(t,!0),s._seek=e,s._ended=!1,r._clearTimer(t),r._webAudio||!s._node||isNaN(s._node.duration)||(s._node.currentTime=e);var d=function(){u&&r.play(t,!0),r._emit("seek",t)};if(u&&!r._webAudio){var p=function(){r._playLock?setTimeout(p,0):d()};setTimeout(p,0)}else d()}return r},playing:function(e){var t=this;if("number"==typeof e){var n=t._soundById(e);return!!n&&!n._paused}for(var r=0;r<t._sounds.length;r++)if(!t._sounds[r]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,r=t._soundById(e);return r&&(n=t._sprite[r._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,r=0;r<t.length;r++)t[r]._paused||e.stop(t[r]._id),e._webAudio||(e._clearSound(t[r]._node),t[r]._node.removeEventListener("error",t[r]._errorFn,!1),t[r]._node.removeEventListener(n._canPlayEvent,t[r]._loadFn,!1),t[r]._node.removeEventListener("ended",t[r]._endFn,!1),n._releaseHtml5Audio(t[r]._node)),delete t[r]._node,e._clearTimer(t[r]._id);var o=n._howls.indexOf(e);o>=0&&n._howls.splice(o,1);var i=!0;for(r=0;r<n._howls.length;r++)if(n._howls[r]._src===e._src||e._src.indexOf(n._howls[r]._src)>=0){i=!1;break}return a&&i&&delete a[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,r){var o=this["_on"+e];return"function"==typeof t&&o.push(r?{id:n,fn:t,once:r}:{id:n,fn:t}),this},off:function(e,t,n){var r=this,o=r["_on"+e],a=0;if("number"==typeof t&&(n=t,t=null),t||n)for(a=0;a<o.length;a++){var i=n===o[a].id;if(t===o[a].fn&&i||!t&&i){o.splice(a,1);break}}else if(e)r["_on"+e]=[];else{var s=Object.keys(r);for(a=0;a<s.length;a++)0===s[a].indexOf("_on")&&Array.isArray(r[s[a]])&&(r[s[a]]=[])}return r},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var r=this,o=r["_on"+e],a=o.length-1;a>=0;a--)o[a].id&&o[a].id!==t&&"load"!==e||(setTimeout(function(e){e.call(this,t,n)}.bind(r,o[a].fn),0),o[a].once&&r.off(e,o[a].fn,o[a].id));return r._loadQueue(e),r},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,r=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var o=!(!e._loop&&!t._sprite[r][2]);if(t._emit("end",e._id),!t._webAudio&&o&&t.stop(e._id,!0).play(e._id),t._webAudio&&o){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),a)}return t._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),n._autoSuspend()),t._webAudio||o||t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if("function"!=typeof t._endTimers[e])clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new o(e)},_drain:function(){var e=this,t=e._pool,n=0,r=0;if(!(e._sounds.length<t)){for(r=0;r<e._sounds.length;r++)e._sounds[r]._ended&&n++;for(r=e._sounds.length-1;r>=0;r--){if(n<=t)return;e._sounds[r]._ended&&(e._webAudio&&e._sounds[r]._node&&e._sounds[r]._node.disconnect(0),e._sounds.splice(r,1),n--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=a[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),this},_cleanBuffer:function(e){var t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var o=function(e){this._parent=e,this.init()};o.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,r=n._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(r,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):n.noAudio||(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=!0===t._preload?"auto":t._preload,e._node.volume=r*n.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(t._sprite).length&&(t._sprite={__default:[0,1e3*t._duration]}),"loaded"!==t._state&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(10*e._node.duration)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=1e3*t._duration),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var a={},i=function(e){var t=e._src;if(a[t])return e._duration=a[t].duration,void c(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);l(r.buffer,e)}else{var i=new XMLHttpRequest;i.open(e._xhr.method,t,!0),i.withCredentials=e._xhr.withCredentials,i.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach((function(t){i.setRequestHeader(t,e._xhr.headers[t])})),i.onload=function(){var t=(i.status+"")[0];"0"===t||"2"===t||"3"===t?l(i.response,e):e._emit("loaderror",null,"Failed loading audio file with status: "+i.status+".")},i.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete a[t],e.load())},s(i)}},s=function(e){try{e.send()}catch(t){e.onerror()}},l=function(e,t){var r=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(e){e&&t._sounds.length>0?(a[t._src]=e,c(t,e)):r()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(o).catch(r):n.ctx.decodeAudioData(e,o,r)},c=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},u=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),t=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),r=t?parseInt(t[1],10):null;if(e&&r&&r<9){var o=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!o&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};t.Howler=n,t.Howl=r,void 0!==Dn?(Dn.HowlerGlobal=e,Dn.Howler=n,Dn.Howl=r,Dn.Sound=o):"undefined"!=typeof window&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=r,window.Sound=o)}(),
/*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
function(){var e;HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var t=this;if(!t.ctx||!t.ctx.listener)return t;for(var n=t._howls.length-1;n>=0;n--)t._howls[n].stereo(e);return t},HowlerGlobal.prototype.pos=function(e,t,n){var r=this;return r.ctx&&r.ctx.listener?(t="number"!=typeof t?r._pos[1]:t,n="number"!=typeof n?r._pos[2]:n,"number"!=typeof e?r._pos:(r._pos=[e,t,n],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,t,n,r,o,a){var i=this;if(!i.ctx||!i.ctx.listener)return i;var s=i._orientation;return t="number"!=typeof t?s[1]:t,n="number"!=typeof n?s[2]:n,r="number"!=typeof r?s[3]:r,o="number"!=typeof o?s[4]:o,a="number"!=typeof a?s[5]:a,"number"!=typeof e?s:(i._orientation=[e,t,n,r,o,a],void 0!==i.ctx.listener.forwardX?(i.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),i.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),i.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),i.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),i.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),i.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):i.ctx.listener.setOrientation(e,t,n,r,o,a),i)},Howl.prototype.init=(e=Howl.prototype.init,function(t){var n=this;return n._orientation=t.orientation||[1,0,0],n._stereo=t.stereo||null,n._pos=t.pos||null,n._pannerAttr={coneInnerAngle:void 0!==t.coneInnerAngle?t.coneInnerAngle:360,coneOuterAngle:void 0!==t.coneOuterAngle?t.coneOuterAngle:360,coneOuterGain:void 0!==t.coneOuterGain?t.coneOuterGain:0,distanceModel:void 0!==t.distanceModel?t.distanceModel:"inverse",maxDistance:void 0!==t.maxDistance?t.maxDistance:1e4,panningModel:void 0!==t.panningModel?t.panningModel:"HRTF",refDistance:void 0!==t.refDistance?t.refDistance:1,rolloffFactor:void 0!==t.rolloffFactor?t.rolloffFactor:1},n._onstereo=t.onstereo?[{fn:t.onstereo}]:[],n._onpos=t.onpos?[{fn:t.onpos}]:[],n._onorientation=t.onorientation?[{fn:t.onorientation}]:[],e.call(this,t)}),Howl.prototype.stereo=function(e,n){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(e,n)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===n){if("number"!=typeof e)return r._stereo;r._stereo=e,r._pos=[e,0,0]}for(var a=r._getSoundIds(n),i=0;i<a.length;i++){var s=r._soundById(a[i]);if(s){if("number"!=typeof e)return s._stereo;s._stereo=e,s._pos=[e,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||t(s,o),"spatial"===o?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(e,0,0):s._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),r._emit("stereo",s._id)}}return r},Howl.prototype.pos=function(e,n,r,o){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"pos",action:function(){a.pos(e,n,r,o)}}),a;if(n="number"!=typeof n?0:n,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof e)return a._pos;a._pos=[e,n,r]}for(var i=a._getSoundIds(o),s=0;s<i.length;s++){var l=a._soundById(i[s]);if(l){if("number"!=typeof e)return l._pos;l._pos=[e,n,r],l._node&&(l._panner&&!l._panner.pan||t(l,"spatial"),void 0!==l._panner.positionX?(l._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):l._panner.setPosition(e,n,r)),a._emit("pos",l._id)}}return a},Howl.prototype.orientation=function(e,n,r,o){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"orientation",action:function(){a.orientation(e,n,r,o)}}),a;if(n="number"!=typeof n?a._orientation[1]:n,r="number"!=typeof r?a._orientation[2]:r,void 0===o){if("number"!=typeof e)return a._orientation;a._orientation=[e,n,r]}for(var i=a._getSoundIds(o),s=0;s<i.length;s++){var l=a._soundById(i[s]);if(l){if("number"!=typeof e)return l._orientation;l._orientation=[e,n,r],l._node&&(l._panner||(l._pos||(l._pos=a._pos||[0,0,-.5]),t(l,"spatial")),void 0!==l._panner.orientationX?(l._panner.orientationX.setValueAtTime(e,Howler.ctx.currentTime),l._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),l._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):l._panner.setOrientation(e,n,r)),a._emit("orientation",l._id)}}return a},Howl.prototype.pannerAttr=function(){var e,n,r,o=this,a=arguments;if(!o._webAudio)return o;if(0===a.length)return o._pannerAttr;if(1===a.length){if("object"!=typeof a[0])return(r=o._soundById(parseInt(a[0],10)))?r._pannerAttr:o._pannerAttr;e=a[0],void 0===n&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==e.pannerAttr.refDistance?e.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==e.pannerAttr.panningModel?e.pannerAttr.panningModel:o._panningModel})}else 2===a.length&&(e=a[0],n=parseInt(a[1],10));for(var i=o._getSoundIds(n),s=0;s<i.length;s++)if(r=o._soundById(i[s])){var l=r._pannerAttr;l={coneInnerAngle:void 0!==e.coneInnerAngle?e.coneInnerAngle:l.coneInnerAngle,coneOuterAngle:void 0!==e.coneOuterAngle?e.coneOuterAngle:l.coneOuterAngle,coneOuterGain:void 0!==e.coneOuterGain?e.coneOuterGain:l.coneOuterGain,distanceModel:void 0!==e.distanceModel?e.distanceModel:l.distanceModel,maxDistance:void 0!==e.maxDistance?e.maxDistance:l.maxDistance,refDistance:void 0!==e.refDistance?e.refDistance:l.refDistance,rolloffFactor:void 0!==e.rolloffFactor?e.rolloffFactor:l.rolloffFactor,panningModel:void 0!==e.panningModel?e.panningModel:l.panningModel};var c=r._panner;c?(c.coneInnerAngle=l.coneInnerAngle,c.coneOuterAngle=l.coneOuterAngle,c.coneOuterGain=l.coneOuterGain,c.distanceModel=l.distanceModel,c.maxDistance=l.maxDistance,c.refDistance=l.refDistance,c.rolloffFactor=l.rolloffFactor,c.panningModel=l.panningModel):(r._pos||(r._pos=o._pos||[0,0,-.5]),t(r,"spatial"))}return o},Sound.prototype.init=function(e){return function(){var t=this,n=t._parent;t._orientation=n._orientation,t._stereo=n._stereo,t._pos=n._pos,t._pannerAttr=n._pannerAttr,e.call(this),t._stereo?n.stereo(t._stereo):t._pos&&n.pos(t._pos[0],t._pos[1],t._pos[2],t._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var t=this,n=t._parent;return t._orientation=n._orientation,t._stereo=n._stereo,t._pos=n._pos,t._pannerAttr=n._pannerAttr,t._stereo?n.stereo(t._stereo):t._pos?n.pos(t._pos[0],t._pos[1],t._pos[2],t._id):t._panner&&(t._panner.disconnect(0),t._panner=void 0,n._refreshBuffer(t)),e.call(this)}}(Sound.prototype.reset);var t=function(e,t){"spatial"===(t=t||"spatial")?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}()}(jn={exports:{}},jn.exports),jn.exports);function Rn(e){let t;return{c(){t=_("กรุงเทพคริสเตียน")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function Hn(e){let t;return{c(){t=_("สวนกุหลาบ")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function Nn(e){let t;return{c(){t=_("อัสสัมชัญ")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function Un(e){let t;return{c(){t=_("เทพศิรินทร์")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function zn(e){let t,n,o,a,i,s,c,x,A,k,T,S,E,B,$,O,I,L,F,R,H,N,U,z,W,G,V,q,X,Z,K,Y,J,Q,ee,te,ne,re,oe,ae,ie,se,le,ce,ue,de,pe,fe,me,_e,he,ge,ve,be,ye,we,xe,Ae,ke,Te,Se,Ee,Be,$e,Ce,Oe,Ie,Le,Fe,Pe,De,je,Me,Re,He=e[4].DS+"",Ne=e[4].AC+"",Ue=e[4].SK+"",ze=e[4].BC+"";function We(e,t){return"DS"==e[3]?Un:"AC"==e[3]?Nn:"SK"==e[3]?Hn:"BC"==e[3]?Rn:void 0}let Ge=We(e),Ve=Ge&&Ge(e);return we=new Pn({props:{name:"sleepntsheep"}}),{c(){var r;t=m("meta"),n=m("meta"),o=m("meta"),a=m("meta"),i=m("meta"),s=m("meta"),c=m("meta"),x=m("meta"),A=m("meta"),k=m("script"),S=m("script"),S.textContent='window.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() {\n\t\t\tdataLayer.push(arguments);\n\t\t}\n\t\tgtag("js", new Date());\n\t\tgtag("config", "G-K29MB7ZWZV");',E=h(),B=h(),$=m("main"),O=m("div"),I=m("div"),L=m("p"),F=_("POP จตุรมิตร"),R=m("sub"),H=_("beta"),N=h(),U=m("div"),z=m("div"),W=m("p"),G=_(e[5]),V=h(),q=m("br"),X=h(),Z=m("div"),K=m("p"),Y=_("Total: "),J=_(e[2]),Q=h(),ee=m("div"),te=m("div"),ne=_("คุณอยู่โรงเรียน\n\t\t\t"),Ve&&Ve.c(),re=h(),oe=m("div"),ae=m("p"),ie=_("เทพศิรินทร์ : "),se=_(He),le=h(),ce=m("p"),ue=_("อัสสัมชัญ : "),de=_(Ne),pe=h(),fe=m("p"),me=_("สวนกุหลาบ : "),_e=_(Ue),he=h(),ge=m("p"),ve=_("กรุงเทพคริสเตียน : "),be=_(ze),ye=h(),(r=we.$$.fragment)&&r.c(),xe=h(),Ae=m("div"),ke=m("img"),Se=h(),Ee=m("div"),Be=m("div"),Be.innerHTML='<p class="text-center svelte-rllcw0">☰ School</p>',$e=h(),Ce=m("div"),Oe=m("select"),Ie=m("option"),Ie.textContent="เลือกโรงเรียน",Le=m("option"),Le.textContent="เทพศิรินทร์",Fe=m("option"),Fe.textContent="อัสสัมชัญ",Pe=m("option"),Pe.textContent="สวนกุหลาบ",De=m("option"),De.textContent="กรุงเทพคริสเตียน",document.title="POPจตุรมิตร",v(t,"name","title"),v(t,"content","POPจตุรมิตร"),v(t,"class","svelte-rllcw0"),v(n,"name","description"),v(n,"content","POPจตุรมิตร"),v(n,"class","svelte-rllcw0"),v(o,"name","viewport"),v(o,"content","width=device-width, initial-scale=1"),v(o,"class","svelte-rllcw0"),v(a,"property","og:url"),v(a,"content","https://popjaturamitr.vercel.app"),v(a,"class","svelte-rllcw0"),v(i,"property","og:type"),v(i,"content","website"),v(i,"class","svelte-rllcw0"),v(s,"property","og:title"),v(s,"content","POPจตุรมิตร"),v(s,"class","svelte-rllcw0"),v(c,"name","viewport"),v(c,"content","width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"),v(c,"class","svelte-rllcw0"),v(x,"property","og:description"),v(x,"content","'ในเมื่อไม่มีจตุรมิตรในปีนี้ ทำไมเราไม่ทำแข่งคลิ๊กระหว่าง 4 โรงเรียนกันหล่ะครับ โรงเรียนไหนจะว่างมาคลิ๊กมากที่สุด'"),v(x,"class","svelte-rllcw0"),v(A,"property","og:image"),v(A,"content",""),v(A,"class","svelte-rllcw0"),k.async=!0,l(k.src,T="https://www.googletagmanager.com/gtag/js?id=G-K29MB7ZWZV")||v(k,"src","https://www.googletagmanager.com/gtag/js?id=G-K29MB7ZWZV"),v(k,"class","svelte-rllcw0"),v(S,"class","svelte-rllcw0"),v(R,"class",u(Bn`text-sm`)+" svelte-rllcw0"),v(L,"class","svelte-rllcw0"),v(I,"class",u(Bn`text-4xl bg-gray-900 text-white p-2 rounded-sm title text-center`)+" svelte-rllcw0"),v(W,"class","svelte-rllcw0"),v(z,"class",u(Bn`text-4xl bg-gray-900 text-white p-2 rounded-sm myScore text-center`)+" svelte-rllcw0"),v(q,"class","svelte-rllcw0"),v(K,"class","svelte-rllcw0"),v(Z,"class",u(Bn`text-4xl bg-gray-900 text-white p-2 rounded-sm totalScore text-center`)+" svelte-rllcw0"),v(U,"class",u(Bn`m-4 score`)+" svelte-rllcw0"),v(te,"class",u(Bn`text-2xl bg-gray-900 text-white p-2 rounded-md`)+" svelte-rllcw0"),v(ee,"class",u(Bn`m-4`)+" svelte-rllcw0"),v(ae,"class","svelte-rllcw0"),v(ce,"class","svelte-rllcw0"),v(fe,"class","svelte-rllcw0"),v(ge,"class","svelte-rllcw0"),v(oe,"class",u(Bn`rounded-lg bg-white text-xl text-gray-900 p-2 m-4`)+" svelte-rllcw0"),v(O,"class","translucent svelte-rllcw0"),v($,"class",u(Bn`w-full h-screen flex flex-col items-center justify-center bg-gray-200 select-none`)+" svelte-rllcw0"),y($,"background","url("+e[7][e[3]]+") center center / cover"),y($,"touch-action","manipulation"),l(ke.src,Te=e[6][e[1]])||v(ke,"src",Te),v(ke,"alt","popcat"),v(ke,"draggable","false"),v(ke,"class","svelte-rllcw0"),v(Ae,"id","popcat"),v(Ae,"class",u(Bn`select-none `)+" svelte-rllcw0"),v(Be,"class","menu bg-gray-900 text-white p-2 text-2xl rounded-sm text-center svelte-rllcw0"),v(Ee,"class","overlay noselect svelte-rllcw0"),Ie.__value="NN",Ie.value=Ie.__value,v(Ie,"id","NN"),v(Ie,"class","svelte-rllcw0"),Le.__value="DS",Le.value=Le.__value,v(Le,"id","DS"),v(Le,"class","svelte-rllcw0"),Fe.__value="AC",Fe.value=Fe.__value,v(Fe,"id","AC"),v(Fe,"class","svelte-rllcw0"),Pe.__value="SK",Pe.value=Pe.__value,v(Pe,"id","SK"),v(Pe,"class","svelte-rllcw0"),De.__value="BC",De.value=De.__value,v(De,"id","BC"),v(De,"class","svelte-rllcw0"),v(Oe,"class",u(Bn`rounded-sm bg-gray-900 text-white p-2 m-4 text-2xl`)+" svelte-rllcw0"),void 0===e[3]&&C((()=>e[12].call(Oe))),v(Ce,"class","popup text-xl svelte-rllcw0"),y(Ce,"display",e[0])},m(r,l){d(document.head,t),d(document.head,n),d(document.head,o),d(document.head,a),d(document.head,i),d(document.head,s),d(document.head,c),d(document.head,x),d(document.head,A),d(document.head,k),d(document.head,S),p(r,E,l),p(r,B,l),p(r,$,l),d($,O),d(O,I),d(I,L),d(L,F),d(L,R),d(R,H),d(O,N),d(O,U),d(U,z),d(z,W),d(W,G),d(U,V),d(U,q),d(U,X),d(U,Z),d(Z,K),d(K,Y),d(K,J),d(O,Q),d(O,ee),d(ee,te),d(te,ne),Ve&&Ve.m(te,null),d(O,re),d(O,oe),d(oe,ae),d(ae,ie),d(ae,se),d(oe,le),d(oe,ce),d(ce,ue),d(ce,de),d(oe,pe),d(oe,fe),d(fe,me),d(fe,_e),d(oe,he),d(oe,ge),d(ge,ve),d(ge,be),p(r,ye,l),j(we,r,l),p(r,xe,l),p(r,Ae,l),d(Ae,ke),p(r,Se,l),p(r,Ee,l),d(Ee,Be),p(r,$e,l),p(r,Ce,l),d(Ce,Oe),d(Oe,Ie),d(Oe,Le),d(Oe,Fe),d(Oe,Pe),d(Oe,De),w(Oe,e[3]),je=!0,Me||(Re=[g(document.body,"keydown",e[9]),g(document.body,"keyup",e[8]),g(document.body,"mousedown",e[9]),g(document.body,"mouseup",e[8]),g(Ae,"click",e[9]),g(Be,"click",e[10]),g(Ee,"click",e[9]),g(Oe,"change",e[12]),g(Ce,"click",e[11])],Me=!0)},p(e,[t]){(!je||32&t)&&b(G,e[5]),(!je||4&t)&&b(J,e[2]),Ge!==(Ge=We(e))&&(Ve&&Ve.d(1),Ve=Ge&&Ge(e),Ve&&(Ve.c(),Ve.m(te,null))),(!je||16&t)&&He!==(He=e[4].DS+"")&&b(se,He),(!je||16&t)&&Ne!==(Ne=e[4].AC+"")&&b(de,Ne),(!je||16&t)&&Ue!==(Ue=e[4].SK+"")&&b(_e,Ue),(!je||16&t)&&ze!==(ze=e[4].BC+"")&&b(be,ze),(!je||8&t)&&y($,"background","url("+e[7][e[3]]+") center center / cover"),(!je||2&t&&!l(ke.src,Te=e[6][e[1]]))&&v(ke,"src",Te),8&t&&w(Oe,e[3]),(!je||1&t)&&y(Ce,"display",e[0])},i(e){je||(D(we.$$.fragment,e),je=!0)},o(e){!function(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),(void 0).c.push((()=>{P.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}(we.$$.fragment,e),je=!1},d(e){f(t),f(n),f(o),f(a),f(i),f(s),f(c),f(x),f(A),f(k),f(S),e&&f(E),e&&f(B),e&&f($),Ve&&Ve.d(),e&&f(ye),M(we,e),e&&f(xe),e&&f(Ae),e&&f(Se),e&&f(Ee),e&&f($e),e&&f(Ce),Me=!1,r(Re)}}}function Wn(e,t,n){let r,o;c(e,On,(e=>n(5,r=e)));let a=1;var i,s;i=On,r=parseInt(r),s=r,i.set(s);let l,u=0,d=0;On.subscribe((e=>localStorage.setItem("count",e)));let p,f=r||0,m=!1,_={DS:"Loading",AC:"Loading",SK:"Loading",BC:"Loading"},h=new Mn.Howl({src:["audio/pop.mp3"],volume:.6});function g(){n(0,o="flex")}async function v(){await Ee.get("http://147.50.253.137/clicks/leaderboard").then((e=>{console.log(e),l=e.data[0].total,n(2,d=l),n(4,_.DS=e.data[1].count,_),n(4,_.AC=e.data[2].count,_),n(4,_.SK=e.data[3].count,_),n(4,_.BC=e.data[4].count,_)})).catch((e=>{console.error(e)}))}return g(),v(),setInterval((()=>{!async function(){let e=r-f;console.log(e),await Ee.post("http://147.50.253.137/clicks",{},{params:{c:e,g:p}}).then((e=>{console.log(e),f=On}),(e=>{console.log(e)}))}(),v()}),3e4),[o,u,d,p,_,r,["https://popcat.click/img/p.1e9d00be.png","https://popcat.click/img/op.353767c3.png"],{DS:"https://upload.wikimedia.org/wikipedia/th/thumb/d/d0/%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%80%E0%B8%97%E0%B8%B4%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4_%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C.jpg/1280px-%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%A2%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%80%E0%B8%97%E0%B8%B4%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4_%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C.jpg",AC:"https://i.imgur.com/egbc61I.png",SK:"https://i.imgur.com/h0ePtJb.jpeg",BC:"https://i.imgur.com/xMNf8jW.jpeg"},function(){m=!1},function(){m||(m=!0,On.update((e=>e+1)),n(2,d+=1),n(4,_[p]="Loading"==_[p]?1:_[p],_),n(1,u=(u+1)%2),h.play())},g,function(e){a?"NN"!==p&&(n(0,o="none"),a=0):e.target.matches("div.popup")&&"NN"!==p&&n(0,o="none")},function(){p=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(3,p)}]}return new class extends N{constructor(e){super(),H(this,e,Wn,zn,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
