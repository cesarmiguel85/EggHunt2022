function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ranking-ranking-module"], {
  /***/
  "./node_modules/papaparse/papaparse.min.js":
  /*!*************************************************!*\
    !*** ./node_modules/papaparse/papaparse.min.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPapaparsePapaparseMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /* @license
    Papa Parse
    v5.3.2
    https://github.com/mholt/PapaParse
    License: MIT
    */


    !function (e, t) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = t, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    }(this, function s() {
      "use strict";

      var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
      var n = !f.document && !!f.postMessage,
          o = n && /blob:/i.test((f.location || {}).protocol),
          a = {},
          h = 0,
          b = {
        parse: function parse(e, t) {
          var i = (t = t || {}).dynamicTyping || !1;
          M(i) && (t.dynamicTypingFunction = i, i = {});

          if (t.dynamicTyping = i, t.transform = !!M(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
            var r = function () {
              if (!b.WORKERS_SUPPORTED) return !1;
              var e = (i = f.URL || f.webkitURL || null, r = s.toString(), b.BLOB_URL || (b.BLOB_URL = i.createObjectURL(new Blob(["(", r, ")();"], {
                type: "text/javascript"
              })))),
                  t = new f.Worker(e);
              var i, r;
              return t.onmessage = _, t.id = h++, a[t.id] = t;
            }();

            return r.userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = M(t.step), t.chunk = M(t.chunk), t.complete = M(t.complete), t.error = M(t.error), delete t.worker, void r.postMessage({
              input: e,
              config: t,
              workerId: r.id
            });
          }

          var n = null;
          b.NODE_STREAM_INPUT, "string" == typeof e ? n = t.download ? new l(t) : new p(t) : !0 === e.readable && M(e.read) && M(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
          return n.stream(e);
        },
        unparse: function unparse(e, t) {
          var n = !1,
              _ = !0,
              m = ",",
              y = "\r\n",
              s = '"',
              a = s + s,
              i = !1,
              r = null,
              o = !1;

          !function () {
            if ("object" != typeof t) return;
            "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function (e) {
              return -1 !== t.delimiter.indexOf(e);
            }).length || (m = t.delimiter);
            ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
            "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines);
            "string" == typeof t.newline && (y = t.newline);
            "string" == typeof t.quoteChar && (s = t.quoteChar);
            "boolean" == typeof t.header && (_ = t.header);

            if (Array.isArray(t.columns)) {
              if (0 === t.columns.length) throw new Error("Option columns is empty");
              r = t.columns;
            }

            void 0 !== t.escapeChar && (a = t.escapeChar + s);
            ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
          }();
          var h = new RegExp(j(s), "g");
          "string" == typeof e && (e = JSON.parse(e));

          if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
          } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), u(e.fields || [], e.data || [], i);

          throw new Error("Unable to serialize unrecognized input");

          function u(e, t, i) {
            var r = "";
            "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
            var n = Array.isArray(e) && 0 < e.length,
                s = !Array.isArray(t[0]);

            if (n && _) {
              for (var a = 0; a < e.length; a++) {
                0 < a && (r += m), r += v(e[a], a);
              }

              0 < t.length && (r += y);
            }

            for (var o = 0; o < t.length; o++) {
              var h = n ? e.length : t[o].length,
                  u = !1,
                  f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;

              if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                for (var d = [], l = 0; l < h; l++) {
                  var c = s ? e[l] : l;
                  d.push(t[o][c]);
                }

                u = "" === d.join("").trim();
              }

              if (!u) {
                for (var p = 0; p < h; p++) {
                  0 < p && !f && (r += m);
                  var g = n && s ? e[p] : p;
                  r += v(t[o][g], p);
                }

                o < t.length - 1 && (!i || 0 < h && !f) && (r += y);
              }
            }

            return r;
          }

          function v(e, t) {
            if (null == e) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
            var i = !1;
            o && "string" == typeof e && o.test(e) && (e = "'" + e, i = !0);
            var r = e.toString().replace(h, a);
            return (i = i || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function (e, t) {
              for (var i = 0; i < t.length; i++) {
                if (-1 < e.indexOf(t[i])) return !0;
              }

              return !1;
            }(r, b.BAD_DELIMITERS) || -1 < r.indexOf(m) || " " === r.charAt(0) || " " === r.charAt(r.length - 1)) ? s + r + s : r;
          }
        }
      };

      if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = i, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;

        d.fn.parse = function (o) {
          var i = o.config || {},
              h = [];
          return this.each(function (e) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;

            for (var t = 0; t < this.files.length; t++) {
              h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i)
              });
            }
          }), e(), this;

          function e() {
            if (0 !== h.length) {
              var e,
                  t,
                  i,
                  r,
                  n = h[0];

              if (M(o.before)) {
                var s = o.before(n.file, n.inputElem);

                if ("object" == typeof s) {
                  if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (M(o.error) && o.error({
                    name: e
                  }, t, i, r));
                  if ("skip" === s.action) return void u();
                  "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                } else if ("skip" === s) return void u();
              }

              var a = n.instanceConfig.complete;
              n.instanceConfig.complete = function (e) {
                M(a) && a(e, n.file, n.inputElem), u();
              }, b.parse(n.file, n.instanceConfig);
            } else M(o.complete) && o.complete();
          }

          function u() {
            h.splice(0, 1), e();
          }
        };
      }

      function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
          data: [],
          errors: [],
          meta: {}
        }, function (e) {
          var t = w(e);
          t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
          this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }.call(this, e), this.parseChunk = function (e, t) {
          if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
            var i = this._config.beforeFirstChunk(e);

            void 0 !== i && (e = i);
          }

          this.isFirstChunk = !1, this._halted = !1;
          var r = this._partialLine + e;
          this._partialLine = "";

          var n = this._handle.parse(r, this._baseIndex, !this._finished);

          if (!this._handle.paused() && !this._handle.aborted()) {
            var s = n.meta.cursor;
            this._finished || (this._partialLine = r.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
            var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (o) f.postMessage({
              results: n,
              workerId: b.WORKER_ID,
              finished: a
            });else if (M(this._config.chunk) && !t) {
              if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              n = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !M(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
          }

          this._halted = !0;
        }, this._sendError = function (e) {
          M(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
            workerId: b.WORKER_ID,
            error: e,
            finished: !1
          });
        };
      }

      function l(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), u.call(this, e), this._nextChunk = n ? function () {
          this._readChunk(), this._chunkLoaded();
        } : function () {
          this._readChunk();
        }, this.stream = function (e) {
          this._input = e, this._nextChunk();
        }, this._readChunk = function () {
          if (this._finished) this._chunkLoaded();else {
            if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
              var e = this._config.downloadRequestHeaders;

              for (var t in e) {
                r.setRequestHeader(t, e[t]);
              }
            }

            if (this._config.chunkSize) {
              var i = this._start + this._config.chunkSize - 1;
              r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
            }

            try {
              r.send(this._config.downloadRequestBody);
            } catch (e) {
              this._chunkError(e.message);
            }

            n && 0 === r.status && this._chunkError();
          }
        }, this._chunkLoaded = function () {
          4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (e) {
            var t = e.getResponseHeader("Content-Range");
            if (null === t) return -1;
            return parseInt(t.substring(t.lastIndexOf("/") + 1));
          }(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function (e) {
          var t = r.statusText || e;

          this._sendError(new Error(t));
        };
      }

      function c(e) {
        var r, n;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), u.call(this, e);
        var s = "undefined" != typeof FileReader;
        this.stream = function (e) {
          this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((r = new FileReader()).onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)) : r = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function () {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function () {
          var e = this._input;

          if (this._config.chunkSize) {
            var t = Math.min(this._start + this._config.chunkSize, this._input.size);
            e = n.call(e, this._start, t);
          }

          var i = r.readAsText(e, this._config.encoding);
          s || this._chunkLoaded({
            target: {
              result: i
            }
          });
        }, this._chunkLoaded = function (e) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function () {
          this._sendError(r.error);
        };
      }

      function p(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function (e) {
          return i = e, this._nextChunk();
        }, this._nextChunk = function () {
          if (!this._finished) {
            var e,
                t = this._config.chunkSize;
            return t ? (e = i.substring(0, t), i = i.substring(t)) : (e = i, i = ""), this._finished = !i, this.parseChunk(e);
          }
        };
      }

      function g(e) {
        u.call(this, e = e || {});
        var t = [],
            i = !0,
            r = !1;
        this.pause = function () {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function () {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function (e) {
          this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function () {
          r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function () {
          this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = v(function (e) {
          try {
            t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
          } catch (e) {
            this._streamError(e);
          }
        }, this), this._streamError = v(function (e) {
          this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = v(function () {
          this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = v(function () {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }

      function i(m) {
        var a,
            o,
            h,
            r = Math.pow(2, 53),
            n = -r,
            s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
            u = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,
            t = this,
            i = 0,
            f = 0,
            d = !1,
            e = !1,
            l = [],
            c = {
          data: [],
          errors: [],
          meta: {}
        };

        if (M(m.step)) {
          var p = m.step;

          m.step = function (e) {
            if (c = e, _()) g();else {
              if (g(), 0 === c.data.length) return;
              i += e.data.length, m.preview && i > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
            }
          };
        }

        function y(e) {
          return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }

        function g() {
          return c && h && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h = !1), m.skipEmptyLines && (c.data = c.data.filter(function (e) {
            return !y(e);
          })), _() && function () {
            if (!c) return;

            function e(e, t) {
              M(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
            }

            if (Array.isArray(c.data[0])) {
              for (var t = 0; _() && t < c.data.length; t++) {
                c.data[t].forEach(e);
              }

              c.data.splice(0, 1);
            } else c.data.forEach(e);
          }(), function () {
            if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;

            function e(e, t) {
              var i,
                  r = m.header ? {} : [];

              for (i = 0; i < e.length; i++) {
                var n = i,
                    s = e[i];
                m.header && (n = i >= l.length ? "__parsed_extra" : l[i]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (r[n] = r[n] || [], r[n].push(s)) : r[n] = s;
              }

              return m.header && (i > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + i, f + t) : i < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + i, f + t)), r;
            }

            var t = 1;
            !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
            m.header && c.meta && (c.meta.fields = l);
            return f += t, c;
          }();
        }

        function _() {
          return m.header && 0 === l.length;
        }

        function v(e, t) {
          return i = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[i] && (m.dynamicTyping[i] = m.dynamicTypingFunction(i)), !0 === (m.dynamicTyping[i] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function (e) {
            if (s.test(e)) {
              var t = parseFloat(e);
              if (n < t && t < r) return !0;
            }

            return !1;
          }(t) ? parseFloat(t) : u.test(t) ? new Date(t) : "" === t ? null : t) : t;
          var i;
        }

        function k(e, t, i, r) {
          var n = {
            type: e,
            code: t,
            message: i
          };
          void 0 !== r && (n.row = r), c.errors.push(n);
        }

        this.parse = function (e, t, i) {
          var r = m.quoteChar || '"';
          if (m.newline || (m.newline = function (e, t) {
            e = e.substring(0, 1048576);
            var i = new RegExp(j(t) + "([^]*?)" + j(t), "gm"),
                r = (e = e.replace(i, "")).split("\r"),
                n = e.split("\n"),
                s = 1 < n.length && n[0].length < r[0].length;
            if (1 === r.length || s) return "\n";

            for (var a = 0, o = 0; o < r.length; o++) {
              "\n" === r[o][0] && a++;
            }

            return a >= r.length / 2 ? "\r\n" : "\r";
          }(e, r)), h = !1, m.delimiter) M(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);else {
            var n = function (e, t, i, r, n) {
              var s, a, o, h;
              n = n || [",", "\t", "|", ";", b.RECORD_SEP, b.UNIT_SEP];

              for (var u = 0; u < n.length; u++) {
                var f = n[u],
                    d = 0,
                    l = 0,
                    c = 0;
                o = void 0;

                for (var p = new E({
                  comments: r,
                  delimiter: f,
                  newline: t,
                  preview: 10
                }).parse(e), g = 0; g < p.data.length; g++) {
                  if (i && y(p.data[g])) c++;else {
                    var _ = p.data[g].length;
                    l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                  }
                }

                0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === h || h < l) && 1.99 < l && (a = d, s = f, h = l);
              }

              return {
                successful: !!(m.delimiter = s),
                bestDelimiter: s
              };
            }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);

            n.successful ? m.delimiter = n.bestDelimiter : (h = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
          }
          var s = w(m);
          return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, i), g(), d ? {
            meta: {
              paused: !0
            }
          } : c || {
            meta: {
              paused: !1
            }
          };
        }, this.paused = function () {
          return d;
        }, this.pause = function () {
          d = !0, o.abort(), a = M(m.chunk) ? "" : a.substring(o.getCharIndex());
        }, this.resume = function () {
          t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
        }, this.aborted = function () {
          return e;
        }, this.abort = function () {
          e = !0, o.abort(), c.meta.aborted = !0, M(m.complete) && m.complete(c), a = "";
        };
      }

      function j(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      function E(e) {
        var S,
            O = (e = e || {}).delimiter,
            x = e.newline,
            I = e.comments,
            T = e.step,
            D = e.preview,
            A = e.fastMode,
            L = S = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (L = e.escapeChar), ("string" != typeof O || -1 < b.BAD_DELIMITERS.indexOf(O)) && (O = ","), I === O) throw new Error("Comment character same as delimiter");
        !0 === I ? I = "#" : ("string" != typeof I || -1 < b.BAD_DELIMITERS.indexOf(I)) && (I = !1), "\n" !== x && "\r" !== x && "\r\n" !== x && (x = "\n");
        var F = 0,
            z = !1;
        this.parse = function (r, t, i) {
          if ("string" != typeof r) throw new Error("Input must be a string");
          var n = r.length,
              e = O.length,
              s = x.length,
              a = I.length,
              o = M(T),
              h = [],
              u = [],
              f = [],
              d = F = 0;
          if (!r) return C();

          if (A || !1 !== A && -1 === r.indexOf(S)) {
            for (var l = r.split(x), c = 0; c < l.length; c++) {
              if (f = l[c], F += f.length, c !== l.length - 1) F += x.length;else if (i) return C();

              if (!I || f.substring(0, a) !== I) {
                if (o) {
                  if (h = [], k(f.split(O)), R(), z) return C();
                } else k(f.split(O));

                if (D && D <= c) return h = h.slice(0, D), C(!0);
              }
            }

            return C();
          }

          for (var p = r.indexOf(O, F), g = r.indexOf(x, F), _ = new RegExp(j(L) + j(S), "g"), m = r.indexOf(S, F);;) {
            if (r[F] !== S) {
              if (I && 0 === f.length && r.substring(F, F + a) === I) {
                if (-1 === g) return C();
                F = g + s, g = r.indexOf(x, F), p = r.indexOf(O, F);
              } else if (-1 !== p && (p < g || -1 === g)) f.push(r.substring(F, p)), F = p + e, p = r.indexOf(O, F);else {
                if (-1 === g) break;
                if (f.push(r.substring(F, g)), w(g + s), o && (R(), z)) return C();
                if (D && h.length >= D) return C(!0);
              }
            } else for (m = F, F++;;) {
              if (-1 === (m = r.indexOf(S, m + 1))) return i || u.push({
                type: "Quotes",
                code: "MissingQuotes",
                message: "Quoted field unterminated",
                row: h.length,
                index: F
              }), E();
              if (m === n - 1) return E(r.substring(F, m).replace(_, S));

              if (S !== L || r[m + 1] !== L) {
                if (S === L || 0 === m || r[m - 1] !== L) {
                  -1 !== p && p < m + 1 && (p = r.indexOf(O, m + 1)), -1 !== g && g < m + 1 && (g = r.indexOf(x, m + 1));
                  var y = b(-1 === g ? p : Math.min(p, g));

                  if (r.substr(m + 1 + y, e) === O) {
                    f.push(r.substring(F, m).replace(_, S)), r[F = m + 1 + y + e] !== S && (m = r.indexOf(S, F)), p = r.indexOf(O, F), g = r.indexOf(x, F);
                    break;
                  }

                  var v = b(g);

                  if (r.substring(m + 1 + v, m + 1 + v + s) === x) {
                    if (f.push(r.substring(F, m).replace(_, S)), w(m + 1 + v + s), p = r.indexOf(O, F), m = r.indexOf(S, F), o && (R(), z)) return C();
                    if (D && h.length >= D) return C(!0);
                    break;
                  }

                  u.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: h.length,
                    index: F
                  }), m++;
                }
              } else m++;
            }
          }

          return E();

          function k(e) {
            h.push(e), d = F;
          }

          function b(e) {
            var t = 0;

            if (-1 !== e) {
              var i = r.substring(m + 1, e);
              i && "" === i.trim() && (t = i.length);
            }

            return t;
          }

          function E(e) {
            return i || (void 0 === e && (e = r.substring(F)), f.push(e), F = n, k(f), o && R()), C();
          }

          function w(e) {
            F = e, k(f), f = [], g = r.indexOf(x, F);
          }

          function C(e) {
            return {
              data: h,
              errors: u,
              meta: {
                delimiter: O,
                linebreak: x,
                aborted: z,
                truncated: !!e,
                cursor: d + (t || 0)
              }
            };
          }

          function R() {
            T(C()), h = [], u = [];
          }
        }, this.abort = function () {
          z = !0;
        }, this.getCharIndex = function () {
          return F;
        };
      }

      function _(e) {
        var t = e.data,
            i = a[t.workerId],
            r = !1;
        if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
          var n = {
            abort: function abort() {
              r = !0, m(t.workerId, {
                data: [],
                errors: [],
                meta: {
                  aborted: !0
                }
              });
            },
            pause: y,
            resume: y
          };

          if (M(i.userStep)) {
            for (var s = 0; s < t.results.data.length && (i.userStep({
              data: t.results.data[s],
              errors: t.results.errors,
              meta: t.results.meta
            }, n), !r); s++) {
              ;
            }

            delete t.results;
          } else M(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && m(t.workerId, t.results);
      }

      function m(e, t) {
        var i = a[e];
        M(i.userComplete) && i.userComplete(t), i.terminate(), delete a[e];
      }

      function y() {
        throw new Error("Not implemented.");
      }

      function w(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};

        for (var i in e) {
          t[i] = w(e[i]);
        }

        return t;
      }

      function v(e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }

      function M(e) {
        return "function" == typeof e;
      }

      return o && (f.onmessage = function (e) {
        var t = e.data;
        void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f.postMessage({
          workerId: b.WORKER_ID,
          results: b.parse(t.input, t.config),
          finished: !0
        });else if (f.File && t.input instanceof File || t.input instanceof Object) {
          var i = b.parse(t.input, t.config);
          i && f.postMessage({
            workerId: b.WORKER_ID,
            results: i,
            finished: !0
          });
        }
      }), (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(u.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u.prototype)).constructor = g, b;
    });
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRankingRankingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\r\n    </ion-buttons>\r\n    <ion-title>{{ mydata.allmessages.ranking_title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"containerflex\">\r\n    <div id=\"container\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>{{ mydata.allmessages.ranking_card_title }}</ion-card-title>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          {{ mydata.allmessages.ranking_card_content }}\r\n          <br>\r\n          <div id=\"tablecontainer\">\r\n            <ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner>\r\n            <div *ngIf=\"dataRAW.length===0 && !spinner\">{{this.mydata.allmessages.ranking_empty}}</div>\r\n\r\n            <table *ngIf=\"dataRAW.length>0\" class=\"rankingtable\">\r\n              <tr>\r\n                <th *ngFor=\"let head of this.headers; let i = index;\">\r\n                  {{this.mydata.allmessages.ranking_table_header[i]}}\r\n                </th>\r\n              </tr>\r\n              <tr *ngFor=\"let data of dataRAW; let r=index;\">\r\n                <td *ngFor=\"let header of this.headers; let c=index;\">\r\n                  <div *ngIf=\"c===0 && r===0\">🥇</div><div *ngIf=\"c===0 && r===1\">🥈</div><div *ngIf=\"c===0 && r===2\">🥉</div>\r\n                  {{ data[header] }}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <div id=\"margin\" >\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div id=\"footer\"></div>\r\n  </div>\r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/ranking/ranking-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ranking/ranking-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: RankingPageRoutingModule */

  /***/
  function srcAppRankingRankingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RankingPageRoutingModule", function () {
      return RankingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ranking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ranking.page */
    "./src/app/ranking/ranking.page.ts");

    var routes = [{
      path: '',
      component: _ranking_page__WEBPACK_IMPORTED_MODULE_3__["RankingPage"]
    }];

    var RankingPageRoutingModule = function RankingPageRoutingModule() {
      _classCallCheck(this, RankingPageRoutingModule);
    };

    RankingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RankingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ranking/ranking.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ranking/ranking.module.ts ***!
    \*******************************************/

  /*! exports provided: RankingPageModule */

  /***/
  function srcAppRankingRankingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RankingPageModule", function () {
      return RankingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ranking-routing.module */
    "./src/app/ranking/ranking-routing.module.ts");
    /* harmony import */


    var _ranking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ranking.page */
    "./src/app/ranking/ranking.page.ts");

    var RankingPageModule = function RankingPageModule() {
      _classCallCheck(this, RankingPageModule);
    };

    RankingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__["RankingPageRoutingModule"]],
      declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_6__["RankingPage"]]
    })], RankingPageModule);
    /***/
  },

  /***/
  "./src/app/ranking/ranking.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/ranking/ranking.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppRankingRankingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n  white-space: pre-wrap;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n#tablecontainer {\n  text-align: center;\n  margin: 2em 0em;\n}\n\n.rankingtable {\n  margin: auto auto;\n}\n\ntd, th {\n  border-collapse: collapse;\n  border: 2px solid grey;\n  padding: 1em;\n}\n\n.col1 {\n  padding-right: 3em;\n}\n\n#headlogo {\n  max-width: 100px;\n  max-height: 100px;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2luZy9DOlxcVXNlcnNcXENlc2FyTWlndWVsXFxEb2N1bWVudHNcXEdpdEh1YlxcRWdnSHVudDIwMjIvc3JjXFxhcHBcXHJhbmtpbmdcXHJhbmtpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9yYW5raW5nL3JhbmtpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDSEo7O0FETUU7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNITjs7QURNRTtFQUNJLGlCQUFBO0FDSE47O0FEUUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFFO0VBQ0ksa0JBQUE7QUNMTjs7QURPRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9yYW5raW5nL3JhbmtpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0byBhdXRvO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIFxyXG4gIH1cclxuICAjY29udGFpbmVyZmxleCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0byBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG4gIH1cclxuXHJcblxyXG4gICNmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWdnc19mb290ZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG5cclxuICAjdGFibGVjb250YWluZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjoyZW0gMGVtO1xyXG4gIH1cclxuXHJcbiAgLnJhbmtpbmd0YWJsZSB7XHJcbiAgICAgIG1hcmdpbjphdXRvIGF1dG87XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHRkLCB0aCB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbDEge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjNlbTtcclxuICB9XHJcbiAgI2hlYWRsb2dvIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gICNtYXJnaW4ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gIFxyXG4gIH0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4jY29udGFpbmVyZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3RhYmxlY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbSAwZW07XG59XG5cbi5yYW5raW5ndGFibGUge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uY29sMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNlbTtcbn1cblxuI2hlYWRsb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbiNtYXJnaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ranking/ranking.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/ranking/ranking.page.ts ***!
    \*****************************************/

  /*! exports provided: RankingPage */

  /***/
  function srcAppRankingRankingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RankingPage", function () {
      return RankingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! papaparse */
    "./node_modules/papaparse/papaparse.min.js");
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);

    var RankingPage = /*#__PURE__*/function () {
      function RankingPage(mydata, router, http) {
        _classCallCheck(this, RankingPage);

        this.mydata = mydata;
        this.router = router;
        this.http = http;
        this.spinner = true;
        this.countHTTP = 0;
        this.sourceURL = "";
        this.dataRAW = [];
        this.headers = [];
      }

      _createClass(RankingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Comparer Function    

      }, {
        key: "GetSortOrder",
        value: function GetSortOrder(prop) {
          return function (a, b) {
            if (a[prop] > b[prop]) {
              return 1;
            } else if (a[prop] < b[prop]) {
              return -1;
            }

            return 0;
          };
        }
      }, {
        key: "getRankingTable",
        value: function getRankingTable() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.sourceURL = _this.mydata.allvariables.db_read_source_gsheet;
            papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"](_this.sourceURL, {
              download: true,
              header: true,
              dynamicTyping: true,
              complete: function complete(results) {
                if (results.data.length > 0) {
                  _this.dataRAW = results.data;

                  _this.dataRAW.sort(_this.GetSortOrder("time"));

                  console.log(_this.dataRAW);

                  if (_this.mydata.allvariables.db_visible_headers.length > 0) {
                    _this.headers = _this.mydata.allvariables.db_visible_headers;
                  } else {
                    _this.headers = Object.keys(_this.dataRAW[0]);
                  }
                } else {
                  _this.dataRAW = [];
                }

                resolve(_this.dataRAW);
              }
            });
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.getRankingTable().then(function (data) {
            _this2.spinner = false;
            /*
            if(this.dataRAW.length<=0) {
                    }
            else {
              
              
              for(var i=0;i<this.dataRAW.length;i++){
                this.top15.push(data[i]);
              }
              console.log("top15");
              console.log(this.top15);
              
            }
            */
          });
        }
      }]);

      return RankingPage;
    }();

    RankingPage.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    RankingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ranking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ranking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ranking.page.scss */
      "./src/app/ranking/ranking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], RankingPage);
    /***/
  }
}]);
//# sourceMappingURL=ranking-ranking-module-es5.js.map