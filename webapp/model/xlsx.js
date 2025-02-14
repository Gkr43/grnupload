/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var XLSX = {};
(function e(r) {
    r.version = "0.10.0";
    var t = 1200;
    if (typeof module !== "undefined" && typeof require !== "undefined") {
        if (typeof cptable === "undefined")
            cptable = require("./dist/cpexcel.js")
    }
    function a() {
        n(1200)
    }
    var n = function(e) {
        t = e
    };
    function s(e) {
        var r = [];
        for (var t = 0, a = e.length; t < a; ++t)
            r[t] = e.charCodeAt(t);
        return r
    }
    var i = function(e) {
        var r = e.charCodeAt(0)
          , t = e.charCodeAt(1);
        if (r == 255 && t == 254)
            return e.substr(2);
        if (r == 254 && t == 255)
            return e.substr(2);
        if (r == 65279)
            return e.substr(1);
        return e
    };
    var f = function e(r) {
        return String.fromCharCode(r)
    };
    if (typeof cptable !== "undefined") {
        n = function(e) {
            t = e
        }
        ;
        i = function(e) {
            if (e.charCodeAt(0) === 255 && e.charCodeAt(1) === 254) {
                return cptable.utils.decode(1200, s(e.substr(2)))
            }
            return e
        }
        ;
        f = function e(r) {
            if (t === 1200)
                return String.fromCharCode(r);
            return cptable.utils.decode(t, [r & 255, r >> 8])[0]
        }
    }
    var c = null;
    var l = true;
    var o = function e() {
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return {
            encode: function(e) {
                var t = "";
                var a, n, s, i, f, c, l;
                for (var o = 0; o < e.length; ) {
                    a = e.charCodeAt(o++);
                    n = e.charCodeAt(o++);
                    s = e.charCodeAt(o++);
                    i = a >> 2;
                    f = (a & 3) << 4 | n >> 4;
                    c = (n & 15) << 2 | s >> 6;
                    l = s & 63;
                    if (isNaN(n)) {
                        c = l = 64
                    } else if (isNaN(s)) {
                        l = 64
                    }
                    t += r.charAt(i) + r.charAt(f) + r.charAt(c) + r.charAt(l)
                }
                return t
            },
            decode: function e(t) {
                var a = "";
                var n, s, i;
                var f, c, l, o;
                t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                for (var u = 0; u < t.length; ) {
                    f = r.indexOf(t.charAt(u++));
                    c = r.indexOf(t.charAt(u++));
                    l = r.indexOf(t.charAt(u++));
                    o = r.indexOf(t.charAt(u++));
                    n = f << 2 | c >> 4;
                    s = (c & 15) << 4 | l >> 2;
                    i = (l & 3) << 6 | o;
                    a += String.fromCharCode(n);
                    if (l != 64) {
                        a += String.fromCharCode(s)
                    }
                    if (o != 64) {
                        a += String.fromCharCode(i)
                    }
                }
                return a
            }
        }
    }();
    var u = typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && process.versions.node;
    function h(e) {
        return new (u ? Buffer : Array)(e)
    }
    function d(e) {
        if (u)
            return new Buffer(e,"binary");
        return e.split("").map(function(e) {
            return e.charCodeAt(0) & 255
        })
    }
    var v = function(e) {
        return [].concat.apply([], e)
    };
    var b = /\u0000/g
      , p = /[\u0001-\u0006]/;
    /* ssf.js (C) 2013-present SheetJS -- http://sheetjs.com */
    var m = {};
    var g = function e(r) {
        r.version = "0.9.2";
        function t(e) {
            var r = ""
              , t = e.length - 1;
            while (t >= 0)
                r += e.charAt(t--);
            return r
        }
        function a(e, r) {
            var t = "";
            while (t.length < r)
                t += e;
            return t
        }
        function n(e, r) {
            var t = "" + e;
            return t.length >= r ? t : a("0", r - t.length) + t
        }
        function s(e, r) {
            var t = "" + e;
            return t.length >= r ? t : a(" ", r - t.length) + t
        }
        function i(e, r) {
            var t = "" + e;
            return t.length >= r ? t : t + a(" ", r - t.length)
        }
        function f(e, r) {
            var t = "" + Math.round(e);
            return t.length >= r ? t : a("0", r - t.length) + t
        }
        function c(e, r) {
            var t = "" + e;
            return t.length >= r ? t : a("0", r - t.length) + t
        }
        var l = Math.pow(2, 32);
        function o(e, r) {
            if (e > l || e < -l)
                return f(e, r);
            var t = Math.round(e);
            return c(t, r)
        }
        function u(e, r) {
            r = r || 0;
            return e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108
        }
        var h = [["date1904", 0], ["output", ""], ["WTF", false]];
        function d(e) {
            for (var r = 0; r != h.length; ++r)
                if (e[h[r][0]] === undefined)
                    e[h[r][0]] = h[r][1]
        }
        r.opts = h;
        var v = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
        var b = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
        function p(e) {
            e[0] = "General";
            e[1] = "0";
            e[2] = "0.00";
            e[3] = "#,##0";
            e[4] = "#,##0.00";
            e[9] = "0%";
            e[10] = "0.00%";
            e[11] = "0.00E+00";
            e[12] = "# ?/?";
            e[13] = "# ??/??";
            e[14] = "m/d/yy";
            e[15] = "d-mmm-yy";
            e[16] = "d-mmm";
            e[17] = "mmm-yy";
            e[18] = "h:mm AM/PM";
            e[19] = "h:mm:ss AM/PM";
            e[20] = "h:mm";
            e[21] = "h:mm:ss";
            e[22] = "m/d/yy h:mm";
            e[37] = "#,##0 ;(#,##0)";
            e[38] = "#,##0 ;[Red](#,##0)";
            e[39] = "#,##0.00;(#,##0.00)";
            e[40] = "#,##0.00;[Red](#,##0.00)";
            e[45] = "mm:ss";
            e[46] = "[h]:mm:ss";
            e[47] = "mmss.0";
            e[48] = "##0.0E+0";
            e[49] = "@";
            e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
            e[65535] = "General"
        }
        var m = {};
        p(m);
        function g(e, r, t) {
            var a = e < 0 ? -1 : 1;
            var n = e * a;
            var s = 0
              , i = 1
              , f = 0;
            var c = 1
              , l = 0
              , o = 0;
            var u = Math.floor(n);
            while (l < r) {
                u = Math.floor(n);
                f = u * i + s;
                o = u * l + c;
                if (n - u < 5e-8)
                    break;
                n = 1 / (n - u);
                s = i;
                i = f;
                c = l;
                l = o
            }
            if (o > r) {
                if (l > r) {
                    o = c;
                    f = s
                } else {
                    o = l;
                    f = i
                }
            }
            if (!t)
                return [0, a * f, o];
            var h = Math.floor(a * f / o);
            return [h, a * f - h * o, o]
        }
        function E(e, r) {
            return "" + e
        }
        r._general_int = E;
        var S = function e() {
            var r = /\.(\d*[1-9])0+$/
              , t = /\.0*$/
              , a = /\.(\d*[1-9])0+/
              , n = /\.0*[Ee]/
              , s = /(E[+-])(\d)$/;
            function i(e) {
                var r = e < 0 ? 12 : 11;
                var t = l(e.toFixed(12));
                if (t.length <= r)
                    return t;
                t = e.toPrecision(10);
                if (t.length <= r)
                    return t;
                return e.toExponential(5)
            }
            function f(e) {
                var t = e.toFixed(11).replace(r, ".$1");
                if (t.length > (e < 0 ? 12 : 11))
                    t = e.toPrecision(6);
                return t
            }
            function c(e) {
                for (var r = 0; r != e.length; ++r)
                    if ((e.charCodeAt(r) | 32) === 101)
                        return e.replace(a, ".$1").replace(n, "E").replace("e", "E").replace(s, "$10$2");
                return e
            }
            function l(e) {
                return e.indexOf(".") > -1 ? e.replace(t, "").replace(r, ".$1") : e
            }
            return function e(r, t) {
                var a = Math.floor(Math.log(Math.abs(r)) * Math.LOG10E), n;
                if (a >= -4 && a <= -1)
                    n = r.toPrecision(10 + a);
                else if (Math.abs(a) <= 9)
                    n = i(r);
                else if (a === 10)
                    n = r.toFixed(10).substr(0, 12);
                else
                    n = f(r);
                return l(c(n))
            }
        }();
        r._general_num = S;
        function k(e, r) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "TRUE" : "FALSE";
            case "number":
                return (e | 0) === e ? E(e, r) : S(e, r);
            case "undefined":
                return "";
            case "object":
                if (e == null)
                    return ""
            }
            throw new Error("unsupported value in General format: " + e)
        }
        r._general = k;
        function B(e, r) {
            return 0
        }
        function C(e, r, t) {
            if (e > 2958465 || e < 0)
                return null;
            var a = e | 0
              , n = Math.floor(86400 * (e - a))
              , s = 0;
            var i = [];
            var f = {
                D: a,
                T: n,
                u: 86400 * (e - a) - n,
                y: 0,
                m: 0,
                d: 0,
                H: 0,
                M: 0,
                S: 0,
                q: 0
            };
            if (Math.abs(f.u) < 1e-6)
                f.u = 0;
            d(r != null ? r : r = []);
            if (r.date1904)
                a += 1462;
            if (f.u > .999) {
                f.u = 0;
                if (++n == 86400) {
                    n = 0;
                    ++a
                }
            }
            if (a === 60) {
                i = t ? [1317, 10, 29] : [1900, 2, 29];
                s = 3
            } else if (a === 0) {
                i = t ? [1317, 8, 29] : [1900, 1, 0];
                s = 6
            } else {
                if (a > 60)
                    --a;
                var c = new Date(1900,0,1);
                c.setDate(c.getDate() + a - 1);
                i = [c.getFullYear(), c.getMonth() + 1, c.getDate()];
                s = c.getDay();
                if (a < 60)
                    s = (s + 6) % 7;
                if (t)
                    s = B(c, i)
            }
            f.y = i[0];
            f.m = i[1];
            f.d = i[2];
            f.S = n % 60;
            n = Math.floor(n / 60);
            f.M = n % 60;
            n = Math.floor(n / 60);
            f.H = n;
            f.q = s;
            return f
        }
        r.parse_date_code = C;
        function T(e, r, t, a) {
            var s = "", i = 0, f = 0, c = t.y, l, o = 0;
            switch (e) {
            case 98:
                c = t.y + 543;
            case 121:
                switch (r.length) {
                case 1:
                case 2:
                    l = c % 100;
                    o = 2;
                    break;
                default:
                    l = c % 1e4;
                    o = 4;
                    break
                }
                break;
            case 109:
                switch (r.length) {
                case 1:
                case 2:
                    l = t.m;
                    o = r.length;
                    break;
                case 3:
                    return b[t.m - 1][1];
                case 5:
                    return b[t.m - 1][0];
                default:
                    return b[t.m - 1][2]
                }
                break;
            case 100:
                switch (r.length) {
                case 1:
                case 2:
                    l = t.d;
                    o = r.length;
                    break;
                case 3:
                    return v[t.q][0];
                default:
                    return v[t.q][1]
                }
                break;
            case 104:
                switch (r.length) {
                case 1:
                case 2:
                    l = 1 + (t.H + 11) % 12;
                    o = r.length;
                    break;
                default:
                    throw "bad hour format: " + r
                }
                break;
            case 72:
                switch (r.length) {
                case 1:
                case 2:
                    l = t.H;
                    o = r.length;
                    break;
                default:
                    throw "bad hour format: " + r
                }
                break;
            case 77:
                switch (r.length) {
                case 1:
                case 2:
                    l = t.M;
                    o = r.length;
                    break;
                default:
                    throw "bad minute format: " + r
                }
                break;
            case 115:
                if (t.u === 0)
                    switch (r) {
                    case "s":
                    case "ss":
                        return n(t.S, r.length);
                    case ".0":
                    case ".00":
                    case ".000":
                    }
                switch (r) {
                case "s":
                case "ss":
                case ".0":
                case ".00":
                case ".000":
                    if (a >= 2)
                        f = a === 3 ? 1e3 : 100;
                    else
                        f = a === 1 ? 10 : 1;
                    i = Math.round(f * (t.S + t.u));
                    if (i >= 60 * f)
                        i = 0;
                    if (r === "s")
                        return i === 0 ? "0" : "" + i / f;
                    s = n(i, 2 + a);
                    if (r === "ss")
                        return s.substr(0, 2);
                    return "." + s.substr(2, r.length - 1);
                default:
                    throw "bad second format: " + r
                }
            case 90:
                switch (r) {
                case "[h]":
                case "[hh]":
                    l = t.D * 24 + t.H;
                    break;
                case "[m]":
                case "[mm]":
                    l = (t.D * 24 + t.H) * 60 + t.M;
                    break;
                case "[s]":
                case "[ss]":
                    l = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
                    break;
                default:
                    throw "bad abstime format: " + r
                }
                o = r.length === 3 ? 1 : 2;
                break;
            case 101:
                l = c;
                o = 1
            }
            if (o > 0)
                return n(l, o);
            else
                return ""
        }
        function w(e) {
            if (e.length <= 3)
                return e;
            var r = e.length % 3
              , t = e.substr(0, r);
            for (; r != e.length; r += 3)
                t += (t.length > 0 ? "," : "") + e.substr(r, 3);
            return t
        }
        var I = function e() {
            var r = /%/g;
            function f(e, t, n) {
                var s = t.replace(r, "")
                  , i = t.length - s.length;
                return I(e, s, n * Math.pow(10, 2 * i)) + a("%", i)
            }
            function c(e, r, t) {
                var a = r.length - 1;
                while (r.charCodeAt(a - 1) === 44)
                    --a;
                return I(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)))
            }
            function l(e, r) {
                var t;
                var a = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (r == 0)
                        return "0.0E+0";
                    else if (r < 0)
                        return "-" + l(e, -r);
                    var n = e.indexOf(".");
                    if (n === -1)
                        n = e.indexOf("E");
                    var s = Math.floor(Math.log(r) * Math.LOG10E) % n;
                    if (s < 0)
                        s += n;
                    t = (r / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n);
                    if (t.indexOf("e") === -1) {
                        var i = Math.floor(Math.log(r) * Math.LOG10E);
                        if (t.indexOf(".") === -1)
                            t = t.charAt(0) + "." + t.substr(1) + "E+" + (i - t.length + s);
                        else
                            t += "E+" + (i - s);
                        while (t.substr(0, 2) === "0.") {
                            t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n);
                            t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.")
                        }
                        t = t.replace(/\+-/, "-")
                    }
                    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, r, t, a) {
                        return r + t + a.substr(0, (n + s) % n) + "." + a.substr(s) + "E"
                    })
                } else
                    t = r.toExponential(a);
                if (e.match(/E\+00$/) && t.match(/e[+-]\d$/))
                    t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
                if (e.match(/E\-/) && t.match(/e\+/))
                    t = t.replace(/e\+/, "e");
                return t.replace("e", "E")
            }
            var u = /# (\?+)( ?)\/( ?)(\d+)/;
            function h(e, r, t) {
                var i = parseInt(e[4], 10)
                  , f = Math.round(r * i)
                  , c = Math.floor(f / i);
                var l = f - c * i
                  , o = i;
                return t + (c === 0 ? "" : "" + c) + " " + (l === 0 ? a(" ", e[1].length + 1 + e[4].length) : s(l, e[1].length) + e[2] + "/" + e[3] + n(o, e[4].length))
            }
            function d(e, r, t) {
                return t + (r === 0 ? "" : "" + r) + a(" ", e[1].length + 2 + e[4].length)
            }
            var v = /^#*0*\.(0+)/;
            var b = /\).*[0#]/;
            var p = /\(###\) ###\\?-####/;
            function m(e) {
                var r = "", t;
                for (var a = 0; a != e.length; ++a)
                    switch (t = e.charCodeAt(a)) {
                    case 35:
                        break;
                    case 63:
                        r += " ";
                        break;
                    case 48:
                        r += "0";
                        break;
                    default:
                        r += String.fromCharCode(t)
                    }
                return r
            }
            function E(e, r) {
                var t = Math.pow(10, r);
                return "" + Math.round(e * t) / t
            }
            function S(e, r) {
                if (r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length) {
                    return 0
                }
                return Math.round((e - Math.floor(e)) * Math.pow(10, r))
            }
            function k(e, r) {
                if (r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length) {
                    return 1
                }
                return 0
            }
            function B(e) {
                if (e < 2147483647 && e > -2147483648)
                    return "" + (e >= 0 ? e | 0 : e - 1 | 0);
                return "" + Math.floor(e)
            }
            function C(e, r, d) {
                if (e.charCodeAt(0) === 40 && !r.match(b)) {
                    var T = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    if (d >= 0)
                        return C("n", T, d);
                    return "(" + C("n", T, -d) + ")"
                }
                if (r.charCodeAt(r.length - 1) === 44)
                    return c(e, r, d);
                if (r.indexOf("%") !== -1)
                    return f(e, r, d);
                if (r.indexOf("E") !== -1)
                    return l(r, d);
                if (r.charCodeAt(0) === 36)
                    return "$" + C(e, r.substr(r.charAt(1) == " " ? 2 : 1), d);
                var A;
                var R, x, D, O = Math.abs(d), F = d < 0 ? "-" : "";
                if (r.match(/^00+$/))
                    return F + o(O, r.length);
                if (r.match(/^[#?]+$/)) {
                    A = o(d, 0);
                    if (A === "0")
                        A = "";
                    return A.length > r.length ? A : m(r.substr(0, r.length - A.length)) + A
                }
                if (R = r.match(u))
                    return h(R, O, F);
                if (r.match(/^#+0+$/))
                    return F + o(O, r.length - r.indexOf("0"));
                if (R = r.match(v)) {
                    A = E(d, R[1].length).replace(/^([^\.]+)$/, "$1." + R[1]).replace(/\.$/, "." + R[1]).replace(/\.(\d*)$/, function(e, r) {
                        return "." + r + a("0", R[1].length - r.length)
                    });
                    return r.indexOf("0.") !== -1 ? A : A.replace(/^0\./, ".")
                }
                r = r.replace(/^#+([0.])/, "$1");
                if (R = r.match(/^(0*)\.(#*)$/)) {
                    return F + E(O, R[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, R[1].length ? "0." : ".")
                }
                if (R = r.match(/^#{1,3},##0(\.?)$/))
                    return F + w(o(O, 0));
                if (R = r.match(/^#,##0\.([#0]*0)$/)) {
                    return d < 0 ? "-" + C(e, r, -d) : w("" + (Math.floor(d) + k(d, R[1].length))) + "." + n(S(d, R[1].length), R[1].length)
                }
                if (R = r.match(/^#,#*,#0/))
                    return C(e, r.replace(/^#,#*,/, ""), d);
                if (R = r.match(/^([0#]+)(\\?-([0#]+))+$/)) {
                    A = t(C(e, r.replace(/[\\-]/g, ""), d));
                    x = 0;
                    return t(t(r.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
                        return x < A.length ? A.charAt(x++) : e === "0" ? "0" : ""
                    }))
                }
                if (r.match(p)) {
                    A = C(e, "##########", d);
                    return "(" + A.substr(0, 3) + ") " + A.substr(3, 3) + "-" + A.substr(6)
                }
                var P = "";
                if (R = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                    x = Math.min(R[4].length, 7);
                    D = g(O, Math.pow(10, x) - 1, false);
                    A = "" + F;
                    P = I("n", R[1], D[1]);
                    if (P.charAt(P.length - 1) == " ")
                        P = P.substr(0, P.length - 1) + "0";
                    A += P + R[2] + "/" + R[3];
                    P = i(D[2], x);
                    if (P.length < R[4].length)
                        P = m(R[4].substr(R[4].length - P.length)) + P;
                    A += P;
                    return A
                }
                if (R = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                    x = Math.min(Math.max(R[1].length, R[4].length), 7);
                    D = g(O, Math.pow(10, x) - 1, true);
                    return F + (D[0] || (D[1] ? "" : "0")) + " " + (D[1] ? s(D[1], x) + R[2] + "/" + R[3] + i(D[2], x) : a(" ", 2 * x + 1 + R[2].length + R[3].length))
                }
                if (R = r.match(/^[#0?]+$/)) {
                    A = o(d, 0);
                    if (r.length <= A.length)
                        return A;
                    return m(r.substr(0, r.length - A.length)) + A
                }
                if (R = r.match(/^([#0?]+)\.([#0]+)$/)) {
                    A = "" + d.toFixed(Math.min(R[2].length, 10)).replace(/([^0])0+$/, "$1");
                    x = A.indexOf(".");
                    var y = r.indexOf(".") - x
                      , N = r.length - A.length - y;
                    return m(r.substr(0, y) + A + r.substr(r.length - N))
                }
                if (R = r.match(/^00,000\.([#0]*0)$/)) {
                    x = S(d, R[1].length);
                    return d < 0 ? "-" + C(e, r, -d) : w(B(d)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
                        return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e
                    }) + "." + n(x, R[1].length)
                }
                switch (r) {
                case "###,##0.00":
                    return C(e, "#,##0.00", d);
                case "###,###":
                case "##,###":
                case "#,###":
                    var _ = w(o(O, 0));
                    return _ !== "0" ? F + _ : "";
                case "###,###.00":
                    return C(e, "###,##0.00", d).replace(/^0\./, ".");
                case "#,###.00":
                    return C(e, "#,##0.00", d).replace(/^0\./, ".");
                default:
                }
                throw new Error("unsupported format |" + r + "|")
            }
            function T(e, r, t) {
                var a = r.length - 1;
                while (r.charCodeAt(a - 1) === 44)
                    --a;
                return I(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)))
            }
            function A(e, t, n) {
                var s = t.replace(r, "")
                  , i = t.length - s.length;
                return I(e, s, n * Math.pow(10, 2 * i)) + a("%", i)
            }
            function R(e, r) {
                var t;
                var a = e.indexOf("E") - e.indexOf(".") - 1;
                if (e.match(/^#+0.0E\+0$/)) {
                    if (r == 0)
                        return "0.0E+0";
                    else if (r < 0)
                        return "-" + R(e, -r);
                    var n = e.indexOf(".");
                    if (n === -1)
                        n = e.indexOf("E");
                    var s = Math.floor(Math.log(r) * Math.LOG10E) % n;
                    if (s < 0)
                        s += n;
                    t = (r / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n);
                    if (!t.match(/[Ee]/)) {
                        var i = Math.floor(Math.log(r) * Math.LOG10E);
                        if (t.indexOf(".") === -1)
                            t = t.charAt(0) + "." + t.substr(1) + "E+" + (i - t.length + s);
                        else
                            t += "E+" + (i - s);
                        t = t.replace(/\+-/, "-")
                    }
                    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, r, t, a) {
                        return r + t + a.substr(0, (n + s) % n) + "." + a.substr(s) + "E"
                    })
                } else
                    t = r.toExponential(a);
                if (e.match(/E\+00$/) && t.match(/e[+-]\d$/))
                    t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
                if (e.match(/E\-/) && t.match(/e\+/))
                    t = t.replace(/e\+/, "e");
                return t.replace("e", "E")
            }
            function x(e, r, f) {
                if (e.charCodeAt(0) === 40 && !r.match(b)) {
                    var c = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                    if (f >= 0)
                        return x("n", c, f);
                    return "(" + x("n", c, -f) + ")"
                }
                if (r.charCodeAt(r.length - 1) === 44)
                    return T(e, r, f);
                if (r.indexOf("%") !== -1)
                    return A(e, r, f);
                if (r.indexOf("E") !== -1)
                    return R(r, f);
                if (r.charCodeAt(0) === 36)
                    return "$" + x(e, r.substr(r.charAt(1) == " " ? 2 : 1), f);
                var l;
                var o, h, E, S = Math.abs(f), k = f < 0 ? "-" : "";
                if (r.match(/^00+$/))
                    return k + n(S, r.length);
                if (r.match(/^[#?]+$/)) {
                    l = "" + f;
                    if (f === 0)
                        l = "";
                    return l.length > r.length ? l : m(r.substr(0, r.length - l.length)) + l
                }
                if (o = r.match(u))
                    return d(o, S, k);
                if (r.match(/^#+0+$/))
                    return k + n(S, r.length - r.indexOf("0"));
                if (o = r.match(v)) {
                    l = ("" + f).replace(/^([^\.]+)$/, "$1." + o[1]).replace(/\.$/, "." + o[1]);
                    l = l.replace(/\.(\d*)$/, function(e, r) {
                        return "." + r + a("0", o[1].length - r.length)
                    });
                    return r.indexOf("0.") !== -1 ? l : l.replace(/^0\./, ".")
                }
                r = r.replace(/^#+([0.])/, "$1");
                if (o = r.match(/^(0*)\.(#*)$/)) {
                    return k + ("" + S).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, o[1].length ? "0." : ".")
                }
                if (o = r.match(/^#{1,3},##0(\.?)$/))
                    return k + w("" + S);
                if (o = r.match(/^#,##0\.([#0]*0)$/)) {
                    return f < 0 ? "-" + x(e, r, -f) : w("" + f) + "." + a("0", o[1].length)
                }
                if (o = r.match(/^#,#*,#0/))
                    return x(e, r.replace(/^#,#*,/, ""), f);
                if (o = r.match(/^([0#]+)(\\?-([0#]+))+$/)) {
                    l = t(x(e, r.replace(/[\\-]/g, ""), f));
                    h = 0;
                    return t(t(r.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
                        return h < l.length ? l.charAt(h++) : e === "0" ? "0" : ""
                    }))
                }
                if (r.match(p)) {
                    l = x(e, "##########", f);
                    return "(" + l.substr(0, 3) + ") " + l.substr(3, 3) + "-" + l.substr(6)
                }
                var B = "";
                if (o = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                    h = Math.min(o[4].length, 7);
                    E = g(S, Math.pow(10, h) - 1, false);
                    l = "" + k;
                    B = I("n", o[1], E[1]);
                    if (B.charAt(B.length - 1) == " ")
                        B = B.substr(0, B.length - 1) + "0";
                    l += B + o[2] + "/" + o[3];
                    B = i(E[2], h);
                    if (B.length < o[4].length)
                        B = m(o[4].substr(o[4].length - B.length)) + B;
                    l += B;
                    return l
                }
                if (o = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                    h = Math.min(Math.max(o[1].length, o[4].length), 7);
                    E = g(S, Math.pow(10, h) - 1, true);
                    return k + (E[0] || (E[1] ? "" : "0")) + " " + (E[1] ? s(E[1], h) + o[2] + "/" + o[3] + i(E[2], h) : a(" ", 2 * h + 1 + o[2].length + o[3].length))
                }
                if (o = r.match(/^[#0?]+$/)) {
                    l = "" + f;
                    if (r.length <= l.length)
                        return l;
                    return m(r.substr(0, r.length - l.length)) + l
                }
                if (o = r.match(/^([#0]+)\.([#0]+)$/)) {
                    l = "" + f.toFixed(Math.min(o[2].length, 10)).replace(/([^0])0+$/, "$1");
                    h = l.indexOf(".");
                    var C = r.indexOf(".") - h
                      , D = r.length - l.length - C;
                    return m(r.substr(0, C) + l + r.substr(r.length - D))
                }
                if (o = r.match(/^00,000\.([#0]*0)$/)) {
                    return f < 0 ? "-" + x(e, r, -f) : w("" + f).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
                        return "00," + (e.length < 3 ? n(0, 3 - e.length) : "") + e
                    }) + "." + n(0, o[1].length)
                }
                switch (r) {
                case "###,###":
                case "##,###":
                case "#,###":
                    var O = w("" + S);
                    return O !== "0" ? k + O : "";
                default:
                    if (r.slice(-3) == ".00")
                        return x(e, r.slice(0, -3), f) + ".00";
                    if (r.slice(-2) == ".0")
                        return x(e, r.slice(0, -2), f) + ".0"
                }
                throw new Error("unsupported format |" + r + "|")
            }
            return function e(r, t, a) {
                return (a | 0) === a ? x(r, t, a) : C(r, t, a)
            }
        }();
        function A(e) {
            var r = [];
            var t = false, a;
            for (var n = 0, s = 0; n < e.length; ++n)
                switch (a = e.charCodeAt(n)) {
                case 34:
                    t = !t;
                    break;
                case 95:
                case 42:
                case 92:
                    ++n;
                    break;
                case 59:
                    r[r.length] = e.substr(s, n - s);
                    s = n + 1
                }
            r[r.length] = e.substr(s);
            if (t === true)
                throw new Error("Format |" + e + "| unterminated string ");
            return r
        }
        r._split = A;
        var R = /\[[HhMmSs]*\]/;
        function x(e) {
            var r = 0
              , t = 0
              , a = ""
              , n = "";
            while (r < e.length) {
                switch (a = e.charAt(r)) {
                case "G":
                    if (u(e, r))
                        r += 6;
                    r++;
                    break;
                case '"':
                    for (; (t = e.charCodeAt(++r)) !== 34 && r < e.length; )
                        ++r;
                    ++r;
                    break;
                case "\\":
                    r += 2;
                    break;
                case "_":
                    r += 2;
                    break;
                case "@":
                    ++r;
                    break;
                case "B":
                case "b":
                    if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2")
                        return true;
                case "M":
                case "D":
                case "Y":
                case "H":
                case "S":
                case "E":
                case "m":
                case "d":
                case "y":
                case "h":
                case "s":
                case "e":
                case "g":
                    return true;
                case "A":
                    if (e.substr(r, 3) === "A/P")
                        return true;
                    if (e.substr(r, 5) === "AM/PM")
                        return true;
                    ++r;
                    break;
                case "[":
                    n = a;
                    while (e.charAt(r++) !== "]" && r < e.length)
                        n += e.charAt(r);
                    if (n.match(R))
                        return true;
                    break;
                case ".":
                case "0":
                case "#":
                    while (r < e.length && ("0#?.,E+-%".indexOf(a = e.charAt(++r)) > -1 || a == "\\" && e.charAt(r + 1) == "-" && "0#".indexOf(e.charAt(r + 2)) > -1)) {}
                    break;
                case "?":
                    while (e.charAt(++r) === a) {}
                    break;
                case "*":
                    ++r;
                    if (e.charAt(r) == " " || e.charAt(r) == "*")
                        ++r;
                    break;
                case "(":
                case ")":
                    ++r;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    while (r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1) {}
                    break;
                case " ":
                    ++r;
                    break;
                default:
                    ++r;
                    break
                }
            }
            return false
        }
        r.is_date = x;
        function D(e, r, t, a) {
            var n = [], s = "", i = 0, f = "", c = "t", l, o, h, d;
            var v = "H";
            while (i < e.length) {
                switch (f = e.charAt(i)) {
                case "G":
                    if (!u(e, i))
                        throw new Error("unrecognized character " + f + " in " + e);
                    n[n.length] = {
                        t: "G",
                        v: "General"
                    };
                    i += 7;
                    break;
                case '"':
                    for (s = ""; (d = e.charCodeAt(++i)) !== 34 && i < e.length; )
                        s += String.fromCharCode(d);
                    n[n.length] = {
                        t: "t",
                        v: s
                    };
                    ++i;
                    break;
                case "\\":
                    var b = e.charAt(++i)
                      , p = b === "(" || b === ")" ? b : "t";
                    n[n.length] = {
                        t: p,
                        v: b
                    };
                    ++i;
                    break;
                case "_":
                    n[n.length] = {
                        t: "t",
                        v: " "
                    };
                    i += 2;
                    break;
                case "@":
                    n[n.length] = {
                        t: "T",
                        v: r
                    };
                    ++i;
                    break;
                case "B":
                case "b":
                    if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
                        if (o == null) {
                            o = C(r, t, e.charAt(i + 1) === "2");
                            if (o == null)
                                return ""
                        }
                        n[n.length] = {
                            t: "X",
                            v: e.substr(i, 2)
                        };
                        c = f;
                        i += 2;
                        break
                    }
                case "M":
                case "D":
                case "Y":
                case "H":
                case "S":
                case "E":
                    f = f.toLowerCase();
                case "m":
                case "d":
                case "y":
                case "h":
                case "s":
                case "e":
                case "g":
                    if (r < 0)
                        return "";
                    if (o == null) {
                        o = C(r, t);
                        if (o == null)
                            return ""
                    }
                    s = f;
                    while (++i < e.length && e.charAt(i).toLowerCase() === f)
                        s += f;
                    if (f === "m" && c.toLowerCase() === "h")
                        f = "M";
                    if (f === "h")
                        f = v;
                    n[n.length] = {
                        t: f,
                        v: s
                    };
                    c = f;
                    break;
                case "A":
                    l = {
                        t: f,
                        v: "A"
                    };
                    if (o == null)
                        o = C(r, t);
                    if (e.substr(i, 3) === "A/P") {
                        if (o != null)
                            l.v = o.H >= 12 ? "P" : "A";
                        l.t = "T";
                        v = "h";
                        i += 3
                    } else if (e.substr(i, 5) === "AM/PM") {
                        if (o != null)
                            l.v = o.H >= 12 ? "PM" : "AM";
                        l.t = "T";
                        i += 5;
                        v = "h"
                    } else {
                        l.t = "t";
                        ++i
                    }
                    if (o == null && l.t === "T")
                        return "";
                    n[n.length] = l;
                    c = f;
                    break;
                case "[":
                    s = f;
                    while (e.charAt(i++) !== "]" && i < e.length)
                        s += e.charAt(i);
                    if (s.slice(-1) !== "]")
                        throw 'unterminated "[" block: |' + s + "|";
                    if (s.match(R)) {
                        if (o == null) {
                            o = C(r, t);
                            if (o == null)
                                return ""
                        }
                        n[n.length] = {
                            t: "Z",
                            v: s.toLowerCase()
                        };
                        c = s.charAt(1)
                    } else if (s.indexOf("$") > -1) {
                        s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$";
                        if (!x(e))
                            n[n.length] = {
                                t: "t",
                                v: s
                            }
                    }
                    break;
                case ".":
                    if (o != null) {
                        s = f;
                        while ((f = e.charAt(++i)) === "0")
                            s += f;
                        n[n.length] = {
                            t: "s",
                            v: s
                        };
                        break
                    }
                case "0":
                case "#":
                    s = f;
                    while (++i < e.length && "0#?.,E+-%".indexOf(f = e.charAt(i)) > -1 || f == "\\" && e.charAt(i + 1) == "-" && i < e.length - 2 && "0#".indexOf(e.charAt(i + 2)) > -1)
                        s += f;
                    n[n.length] = {
                        t: "n",
                        v: s
                    };
                    break;
                case "?":
                    s = f;
                    while (e.charAt(++i) === f)
                        s += f;
                    l = {
                        t: f,
                        v: s
                    };
                    n[n.length] = l;
                    c = f;
                    break;
                case "*":
                    ++i;
                    if (e.charAt(i) == " " || e.charAt(i) == "*")
                        ++i;
                    break;
                case "(":
                case ")":
                    n[n.length] = {
                        t: a === 1 ? "t" : f,
                        v: f
                    };
                    ++i;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    s = f;
                    while (i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1)
                        s += e.charAt(i);
                    n[n.length] = {
                        t: "D",
                        v: s
                    };
                    break;
                case " ":
                    n[n.length] = {
                        t: f,
                        v: f
                    };
                    ++i;
                    break;
                default:
                    if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(f) === -1)
                        throw new Error("unrecognized character " + f + " in " + e);
                    n[n.length] = {
                        t: "t",
                        v: f
                    };
                    ++i;
                    break
                }
            }
            var m = 0, g = 0, E;
            for (i = n.length - 1,
            c = "t"; i >= 0; --i) {
                switch (n[i].t) {
                case "h":
                case "H":
                    n[i].t = v;
                    c = "h";
                    if (m < 1)
                        m = 1;
                    break;
                case "s":
                    if (E = n[i].v.match(/\.0+$/))
                        g = Math.max(g, E[0].length - 1);
                    if (m < 3)
                        m = 3;
                case "d":
                case "y":
                case "M":
                case "e":
                    c = n[i].t;
                    break;
                case "m":
                    if (c === "s") {
                        n[i].t = "M";
                        if (m < 2)
                            m = 2
                    }
                    break;
                case "X":
                    break;
                case "Z":
                    if (m < 1 && n[i].v.match(/[Hh]/))
                        m = 1;
                    if (m < 2 && n[i].v.match(/[Mm]/))
                        m = 2;
                    if (m < 3 && n[i].v.match(/[Ss]/))
                        m = 3
                }
            }
            switch (m) {
            case 0:
                break;
            case 1:
                if (o.u >= .5) {
                    o.u = 0;
                    ++o.S
                }
                if (o.S >= 60) {
                    o.S = 0;
                    ++o.M
                }
                if (o.M >= 60) {
                    o.M = 0;
                    ++o.H
                }
                break;
            case 2:
                if (o.u >= .5) {
                    o.u = 0;
                    ++o.S
                }
                if (o.S >= 60) {
                    o.S = 0;
                    ++o.M
                }
                break
            }
            var S = "", B;
            for (i = 0; i < n.length; ++i) {
                switch (n[i].t) {
                case "t":
                case "T":
                case " ":
                case "D":
                    break;
                case "X":
                    n[i].v = "";
                    n[i].t = ";";
                    break;
                case "d":
                case "m":
                case "y":
                case "h":
                case "H":
                case "M":
                case "s":
                case "e":
                case "b":
                case "Z":
                    n[i].v = T(n[i].t.charCodeAt(0), n[i].v, o, g);
                    n[i].t = "t";
                    break;
                case "n":
                case "(":
                case "?":
                    B = i + 1;
                    while (n[B] != null && ((f = n[B].t) === "?" || f === "D" || (f === " " || f === "t") && n[B + 1] != null && (n[B + 1].t === "?" || n[B + 1].t === "t" && n[B + 1].v === "/") || n[i].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[B].v === "/" || n[B].v === " " && n[B + 1] != null && n[B + 1].t == "?"))) {
                        n[i].v += n[B].v;
                        n[B] = {
                            v: "",
                            t: ";"
                        };
                        ++B
                    }
                    S += n[i].v;
                    i = B - 1;
                    break;
                case "G":
                    n[i].t = "t";
                    n[i].v = k(r, t);
                    break
                }
            }
            var w = "", A, D;
            if (S.length > 0) {
                if (S.charCodeAt(0) == 40) {
                    A = r < 0 && S.charCodeAt(0) === 45 ? -r : r;
                    D = I("(", S, A)
                } else {
                    A = r < 0 && a > 1 ? -r : r;
                    D = I("n", S, A);
                    if (A < 0 && n[0] && n[0].t == "t") {
                        D = D.substr(1);
                        n[0].v = "-" + n[0].v
                    }
                }
                B = D.length - 1;
                var O = n.length;
                for (i = 0; i < n.length; ++i)
                    if (n[i] != null && n[i].t != "t" && n[i].v.indexOf(".") > -1) {
                        O = i;
                        break
                    }
                var F = n.length;
                if (O === n.length && D.indexOf("E") === -1) {
                    for (i = n.length - 1; i >= 0; --i) {
                        if (n[i] == null || "n?(".indexOf(n[i].t) === -1)
                            continue;
                        if (B >= n[i].v.length - 1) {
                            B -= n[i].v.length;
                            n[i].v = D.substr(B + 1, n[i].v.length)
                        } else if (B < 0)
                            n[i].v = "";
                        else {
                            n[i].v = D.substr(0, B + 1);
                            B = -1
                        }
                        n[i].t = "t";
                        F = i
                    }
                    if (B >= 0 && F < n.length)
                        n[F].v = D.substr(0, B + 1) + n[F].v
                } else if (O !== n.length && D.indexOf("E") === -1) {
                    B = D.indexOf(".") - 1;
                    for (i = O; i >= 0; --i) {
                        if (n[i] == null || "n?(".indexOf(n[i].t) === -1)
                            continue;
                        h = n[i].v.indexOf(".") > -1 && i === O ? n[i].v.indexOf(".") - 1 : n[i].v.length - 1;
                        w = n[i].v.substr(h + 1);
                        for (; h >= 0; --h) {
                            if (B >= 0 && (n[i].v.charAt(h) === "0" || n[i].v.charAt(h) === "#"))
                                w = D.charAt(B--) + w
                        }
                        n[i].v = w;
                        n[i].t = "t";
                        F = i
                    }
                    if (B >= 0 && F < n.length)
                        n[F].v = D.substr(0, B + 1) + n[F].v;
                    B = D.indexOf(".") + 1;
                    for (i = O; i < n.length; ++i) {
                        if (n[i] == null || "n?(".indexOf(n[i].t) === -1 && i !== O)
                            continue;
                        h = n[i].v.indexOf(".") > -1 && i === O ? n[i].v.indexOf(".") + 1 : 0;
                        w = n[i].v.substr(0, h);
                        for (; h < n[i].v.length; ++h) {
                            if (B < D.length)
                                w += D.charAt(B++)
                        }
                        n[i].v = w;
                        n[i].t = "t";
                        F = i
                    }
                }
            }
            for (i = 0; i < n.length; ++i)
                if (n[i] != null && "n(?".indexOf(n[i].t) > -1) {
                    A = a > 1 && r < 0 && i > 0 && n[i - 1].v === "-" ? -r : r;
                    n[i].v = I(n[i].t, n[i].v, A);
                    n[i].t = "t"
                }
            var P = "";
            for (i = 0; i !== n.length; ++i)
                if (n[i] != null)
                    P += n[i].v;
            return P
        }
        r._eval = D;
        var O = /\[[=<>]/;
        var F = /\[([=<>]*)(-?\d+\.?\d*)\]/;
        function P(e, r) {
            if (r == null)
                return false;
            var t = parseFloat(r[2]);
            switch (r[1]) {
            case "=":
                if (e == t)
                    return true;
                break;
            case ">":
                if (e > t)
                    return true;
                break;
            case "<":
                if (e < t)
                    return true;
                break;
            case "<>":
                if (e != t)
                    return true;
                break;
            case ">=":
                if (e >= t)
                    return true;
                break;
            case "<=":
                if (e <= t)
                    return true;
                break
            }
            return false
        }
        function y(e, r) {
            var t = A(e);
            var a = t.length
              , n = t[a - 1].indexOf("@");
            if (a < 4 && n > -1)
                --a;
            if (t.length > 4)
                throw new Error("cannot find right format for |" + t.join("|") + "|");
            if (typeof r !== "number")
                return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
            switch (t.length) {
            case 1:
                t = n > -1 ? ["General", "General", "General", t[0]] : [t[0], t[0], t[0], "@"];
                break;
            case 2:
                t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
                break;
            case 3:
                t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
                break;
            case 4:
                break
            }
            var s = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
            if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1)
                return [a, s];
            if (t[0].match(O) != null || t[1].match(O) != null) {
                var i = t[0].match(F);
                var f = t[1].match(F);
                return P(r, i) ? [a, t[0]] : P(r, f) ? [a, t[1]] : [a, t[i != null && f != null ? 2 : 1]]
            }
            return [a, s]
        }
        function N(e, r, t) {
            if (t == null)
                t = {};
            var a = "";
            switch (typeof e) {
            case "string":
                if (e == "m/d/yy" && t.dateNF)
                    a = t.dateNF;
                else
                    a = e;
                break;
            case "number":
                if (e == 14 && t.dateNF)
                    a = t.dateNF;
                else
                    a = (t.table != null ? t.table : m)[e];
                break
            }
            if (u(a, 0))
                return k(r, t);
            var n = y(a, r);
            if (u(n[1]))
                return k(r, t);
            if (r === true)
                r = "TRUE";
            else if (r === false)
                r = "FALSE";
            else if (r === "" || r == null)
                return "";
            return D(n[1], r, t, n[0])
        }
        r._table = m;
        r.load = function e(r, t) {
            m[t] = r
        }
        ;
        r.format = N;
        r.get_table = function e() {
            return m
        }
        ;
        r.load_table = function e(t) {
            for (var a = 0; a != 392; ++a)
                if (t[a] !== undefined)
                    r.load(t[a], a)
        }
        ;
        r.init_table = p
    };
    g(m);
    var E = {
        "General Number": "General",
        "General Date": m._table[22],
        "Long Date": "dddd, mmmm dd, yyyy",
        "Medium Date": m._table[15],
        "Short Date": m._table[14],
        "Long Time": m._table[19],
        "Medium Time": m._table[18],
        "Short Time": m._table[20],
        Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        Fixed: m._table[2],
        Standard: m._table[4],
        Percent: m._table[10],
        Scientific: m._table[11],
        "Yes/No": '"Yes";"Yes";"No";@',
        "True/False": '"True";"True";"False";@',
        "On/Off": '"Yes";"Yes";"No";@'
    };
    var S = true;
    /* cfb.js (C) 2013-present SheetJS -- http://sheetjs.com */
    var k = function e() {
        var r = {};
        r.version = "0.11.1";
        function t(e) {
            var r = 3;
            var t = 512;
            var l = 0;
            var o = 0;
            var d = 0;
            var v = 0;
            var b = 0;
            var p = [];
            var m = e.slice(0, 512);
            or(m, 0);
            var g = a(m);
            r = g[0];
            switch (r) {
            case 3:
                t = 512;
                break;
            case 4:
                t = 4096;
                break;
            default:
                throw new Error("Major Version: Expected 3 or 4 saw " + r)
            }
            if (t !== 512) {
                m = e.slice(0, t);
                or(m, 28)
            }
            var E = e.slice(0, t);
            n(m, r);
            var S = m.read_shift(4, "i");
            if (r === 3 && S !== 0)
                throw new Error("# Directory Sectors: Expected 0 saw " + S);
            m.l += 4;
            d = m.read_shift(4, "i");
            m.l += 4;
            m.chk("00100000", "Mini Stream Cutoff Size: ");
            v = m.read_shift(4, "i");
            l = m.read_shift(4, "i");
            b = m.read_shift(4, "i");
            o = m.read_shift(4, "i");
            for (var k, C = 0; C < 109; ++C) {
                k = m.read_shift(4, "i");
                if (k < 0)
                    break;
                p[C] = k
            }
            var T = s(e, t);
            c(b, o, T, t, p);
            var w = u(T, d, p, t);
            w[d].name = "!Directory";
            if (l > 0 && v !== B)
                w[v].name = "!MiniFAT";
            w[p[0]].name = "!FAT";
            w.fat_addrs = p;
            w.ssz = t;
            var I = {}
              , A = []
              , R = []
              , x = []
              , D = {};
            h(d, w, T, A, l, I, R);
            i(R, D, x, A);
            var O = A.shift();
            A.root = O;
            var F = f(x, A, R, I, O);
            return {
                raw: {
                    header: E,
                    sectors: T
                },
                FileIndex: R,
                FullPaths: x,
                FullPathDir: D,
                find: F
            }
        }
        function a(e) {
            e.chk(C, "Header Signature: ");
            e.chk(T, "CLSID: ");
            var r = e.read_shift(2, "u");
            return [e.read_shift(2, "u"), r]
        }
        function n(e, r) {
            var t = 9;
            e.l += 2;
            switch (t = e.read_shift(2)) {
            case 9:
                if (r != 3)
                    throw new Error("Sector Shift: Expected 9 saw " + t);
                break;
            case 12:
                if (r != 4)
                    throw new Error("Sector Shift: Expected 12 saw " + t);
                break;
            default:
                throw new Error("Sector Shift: Expected 9 or 12 saw " + t)
            }
            e.chk("0600", "Mini Sector Shift: ");
            e.chk("000000000000", "Reserved: ")
        }
        function s(e, r) {
            var t = Math.ceil(e.length / r) - 1;
            var a = new Array(t);
            for (var n = 1; n < t; ++n)
                a[n - 1] = e.slice(n * r, (n + 1) * r);
            a[t - 1] = e.slice(t * r);
            return a
        }
        function i(e, r, t, a) {
            var n = 0
              , s = 0
              , i = 0
              , f = 0
              , c = 0
              , l = a.length;
            var o = new Array(l)
              , u = new Array(l);
            for (; n < l; ++n) {
                o[n] = u[n] = n;
                t[n] = a[n]
            }
            for (; c < u.length; ++c) {
                n = u[c];
                s = e[n].L;
                i = e[n].R;
                f = e[n].C;
                if (o[n] === n) {
                    if (s !== -1 && o[s] !== s)
                        o[n] = o[s];
                    if (i !== -1 && o[i] !== i)
                        o[n] = o[i]
                }
                if (f !== -1)
                    o[f] = n;
                if (s !== -1) {
                    o[s] = o[n];
                    u.push(s)
                }
                if (i !== -1) {
                    o[i] = o[n];
                    u.push(i)
                }
            }
            for (n = 1; n !== l; ++n)
                if (o[n] === n) {
                    if (i !== -1 && o[i] !== i)
                        o[n] = o[i];
                    else if (s !== -1 && o[s] !== s)
                        o[n] = o[s]
                }
            for (n = 1; n < l; ++n) {
                if (e[n].type === 0)
                    continue;
                c = o[n];
                if (c === 0)
                    t[n] = t[0] + "/" + t[n];
                else
                    while (c !== 0) {
                        t[n] = t[c] + "/" + t[n];
                        c = o[c]
                    }
                o[n] = 0
            }
            t[0] += "/";
            for (n = 1; n < l; ++n) {
                if (e[n].type !== 2)
                    t[n] += "/";
                r[t[n]] = e[n]
            }
        }
        function f(e, r, t, a, n) {
            var s = new Array(e.length);
            var i = new Array(r.length), f;
            for (f = 0; f < e.length; ++f)
                s[f] = e[f].toUpperCase().replace(b, "").replace(p, "!");
            for (f = 0; f < r.length; ++f)
                i[f] = r[f].toUpperCase().replace(b, "").replace(p, "!");
            return function e(f) {
                var c;
                if (f.charCodeAt(0) === 47) {
                    c = true;
                    f = n + f
                } else
                    c = f.indexOf("/") !== -1;
                var l = f.toUpperCase().replace(b, "").replace(p, "!");
                var o = c === true ? s.indexOf(l) : i.indexOf(l);
                if (o === -1)
                    return null;
                return c === true ? t[o] : a[r[o]]
            }
        }
        function c(e, r, t, a, n) {
            var s;
            if (e === B) {
                if (r !== 0)
                    throw new Error("DIFAT chain shorter than expected")
            } else if (e !== -1) {
                var i = t[e]
                  , f = (a >>> 2) - 1;
                if (!i)
                    return;
                for (var l = 0; l < f; ++l) {
                    if ((s = rr(i, l * 4)) === B)
                        break;
                    n.push(s)
                }
                c(rr(i, a - 4), r - 1, t, a, n)
            }
        }
        function l(e, r, t, a, n) {
            var s = e.length;
            var i, f;
            if (!n)
                n = new Array(s);
            var c = a - 1, l, o;
            i = [];
            f = [];
            for (l = r; l >= 0; ) {
                n[l] = true;
                i[i.length] = l;
                f.push(e[l]);
                var u = t[Math.floor(l * 4 / a)];
                o = l * 4 & c;
                if (a < 4 + o)
                    throw new Error("FAT boundary crossed: " + l + " 4 " + a);
                if (!e[u])
                    break;
                l = rr(e[u], o)
            }
            return {
                nodes: i,
                data: Fe([f])
            }
        }
        function u(e, r, t, a) {
            var n = e.length
              , s = new Array(n);
            var i = new Array(n), f, c;
            var l = a - 1, o, u, h, d;
            for (o = 0; o < n; ++o) {
                f = [];
                h = o + r;
                if (h >= n)
                    h -= n;
                if (i[h] === true)
                    continue;
                c = [];
                for (u = h; u >= 0; ) {
                    i[u] = true;
                    f[f.length] = u;
                    c.push(e[u]);
                    var v = t[Math.floor(u * 4 / a)];
                    d = u * 4 & l;
                    if (a < 4 + d)
                        throw new Error("FAT boundary crossed: " + u + " 4 " + a);
                    if (!e[v])
                        break;
                    u = rr(e[v], d)
                }
                s[h] = {
                    nodes: f,
                    data: Fe([c])
                }
            }
            return s
        }
        function h(e, r, t, a, n, s, i) {
            var f;
            var c = 0
              , o = a.length ? 2 : 0;
            var u = r[e].data;
            var h = 0, d = 0, v, b, p, g;
            for (; h < u.length; h += 128) {
                f = u.slice(h, h + 128);
                or(f, 64);
                d = f.read_shift(2);
                if (d === 0)
                    continue;
                v = ye(f, 0, d - o);
                a.push(v);
                b = {
                    name: v,
                    type: f.read_shift(1),
                    color: f.read_shift(1),
                    L: f.read_shift(4, "i"),
                    R: f.read_shift(4, "i"),
                    C: f.read_shift(4, "i"),
                    clsid: f.read_shift(16),
                    state: f.read_shift(4, "i")
                };
                p = f.read_shift(2) + f.read_shift(2) + f.read_shift(2) + f.read_shift(2);
                if (p !== 0) {
                    b.ctime = p;
                    b.ct = m(f, f.l - 8)
                }
                g = f.read_shift(2) + f.read_shift(2) + f.read_shift(2) + f.read_shift(2);
                if (g !== 0) {
                    b.mtime = g;
                    b.mt = m(f, f.l - 8)
                }
                b.start = f.read_shift(4, "i");
                b.size = f.read_shift(4, "i");
                if (b.type === 5) {
                    c = b.start;
                    if (n > 0 && c !== B)
                        r[c].name = "!StreamData"
                } else if (b.size >= 4096) {
                    b.storage = "fat";
                    if (r[b.start] === undefined)
                        r[b.start] = l(t, b.start, r.fat_addrs, r.ssz);
                    r[b.start].name = b.name;
                    b.content = r[b.start].data.slice(0, b.size);
                    or(b.content, 0)
                } else {
                    b.storage = "minifat";
                    if (c !== B && b.start !== B) {
                        b.content = r[c].data.slice(b.start * k, b.start * k + b.size);
                        or(b.content, 0)
                    }
                }
                s[v] = b;
                i.push(b)
            }
        }
        function m(e, r) {
            return new Date((er(e, r + 4) / 1e7 * Math.pow(2, 32) + er(e, r) / 1e7 - 11644473600) * 1e3)
        }
        var g;
        function E(e, r) {
            if (g === undefined)
                g = require("fs");
            return t(g.readFileSync(e), r)
        }
        function S(e, r) {
            switch (r !== undefined && r.type !== undefined ? r.type : "base64") {
            case "file":
                return E(e, r);
            case "base64":
                return t(d(o.decode(e)), r);
            case "binary":
                return t(d(e), r)
            }
            return t(e)
        }
        var k = 64;
        var B = -2;
        var C = "d0cf11e0a1b11ae1";
        var T = "00000000000000000000000000000000";
        var w = {
            MAXREGSECT: -6,
            DIFSECT: -4,
            FATSECT: -3,
            ENDOFCHAIN: B,
            FREESECT: -1,
            HEADER_SIGNATURE: C,
            HEADER_MINOR_VERSION: "3e00",
            MAXREGSID: -6,
            NOSTREAM: -1,
            HEADER_CLSID: T,
            EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
        };
        r.read = S;
        r.parse = t;
        r.utils = {
            ReadShift: nr,
            CheckField: lr,
            prep_blob: or,
            bconcat: v,
            consts: w
        };
        return r
    }();
    if (typeof require !== "undefined" && typeof module !== "undefined" && typeof S === "undefined") {
        module.exports = k
    }
    function B(e) {
        return e !== undefined && e !== null
    }
    function C(e) {
        return Object.keys(e)
    }
    function T(e, r) {
        var t = []
          , a = C(e);
        for (var n = 0; n !== a.length; ++n)
            t[e[a[n]][r]] = a[n];
        return t
    }
    function w(e) {
        var r = []
          , t = C(e);
        for (var a = 0; a !== t.length; ++a)
            r[e[t[a]]] = t[a];
        return r
    }
    function I(e) {
        var r = []
          , t = C(e);
        for (var a = 0; a !== t.length; ++a)
            r[e[t[a]]] = parseInt(t[a], 10);
        return r
    }
    function A(e) {
        var r = []
          , t = C(e);
        for (var a = 0; a !== t.length; ++a) {
            if (r[e[t[a]]] == null)
                r[e[t[a]]] = [];
            r[e[t[a]]].push(t[a])
        }
        return r
    }
    function R(e, r) {
        var t = e.getTime();
        if (r)
            t += 1462 * 24 * 60 * 60 * 1e3;
        return (t + 22091616e5) / (24 * 60 * 60 * 1e3)
    }
    function x(e) {
        var r = m.parse_date_code(e);
        var t = new Date;
        if (r == null)
            throw new Error("Bad Date Code: " + e);
        t.setUTCDate(r.d);
        t.setUTCMonth(r.m - 1);
        t.setUTCFullYear(r.y);
        t.setUTCHours(r.H);
        t.setUTCMinutes(r.M);
        t.setUTCSeconds(r.S);
        return t
    }
    function D(e) {
        var r = 0
          , t = 0
          , a = false;
        var n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
        if (!n)
            throw new Error("|" + e + "| is not an ISO8601 Duration");
        for (var s = 1; s != n.length; ++s) {
            if (!n[s])
                continue;
            t = 1;
            if (s > 3)
                a = true;
            switch (n[s].substr(n[s].length - 1)) {
            case "Y":
                throw new Error("Unsupported ISO Duration Field: " + n[s].substr(n[s].length - 1));
            case "D":
                t *= 24;
            case "H":
                t *= 60;
            case "M":
                if (!a)
                    throw new Error("Unsupported ISO Duration Field: M");
                else
                    t *= 60;
            case "S":
                break
            }
            r += t * parseInt(n[s], 10)
        }
        return r
    }
    var O = new Date("2017-02-19T19:06:09.000Z");
    var F = O.getFullYear() == 2017;
    function P(e) {
        if (F)
            return new Date(e);
        if (e instanceof Date)
            return e;
        var r = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
        return new Date(Date.UTC(+r[0], +r[1] - 1, +r[2], +r[3], +r[4], +r[5]))
    }
    function y(e) {
        var r = "";
        for (var t = 0; t != e.length; ++t)
            r += String.fromCharCode(e[t]);
        return r
    }
    function N(e) {
        var r = [];
        for (var t = 0; t != e.length; ++t)
            r.push(e.charCodeAt(t));
        return r
    }
    function _(e) {
        if (typeof JSON != "undefined" && !Array.isArray(e))
            return JSON.parse(JSON.stringify(e));
        if (typeof e != "object" || e == null)
            return e;
        var r = {};
        for (var t in e)
            if (e.hasOwnProperty(t))
                r[t] = _(e[t]);
        return r
    }
    function M(e, r) {
        var t = "";
        while (t.length < r)
            t += e;
        return t
    }
    function L(e) {
        if (!e)
            return null;
        if (e.data)
            return i(e.data);
        if (e.asNodeBuffer && u)
            return i(e.asNodeBuffer().toString("binary"));
        if (e.asBinary)
            return i(e.asBinary());
        if (e._data && e._data.getContent)
            return i(y(Array.prototype.slice.call(e._data.getContent(), 0)));
        return null
    }
    function U(e) {
        if (!e)
            return null;
        if (e.data)
            return s(e.data);
        if (e.asNodeBuffer && u)
            return e.asNodeBuffer();
        if (e._data && e._data.getContent) {
            var r = e._data.getContent();
            if (typeof r == "string")
                return N(r);
            return Array.prototype.slice.call(r)
        }
        return null
    }
    function H(e) {
        return e && e.name.slice(-4) === ".bin" ? U(e) : L(e)
    }
    function V(e, r) {
        var t = C(e.files);
        var a = r.toLowerCase()
          , n = a.replace(/\//g, "\\");
        for (var s = 0; s < t.length; ++s) {
            var i = t[s].toLowerCase();
            if (a == i || n == i)
                return e.files[t[s]]
        }
        return null
    }
    function W(e, r) {
        var t = V(e, r);
        if (t == null)
            throw new Error("Cannot find file " + r + " in zip");
        return t
    }
    function X(e, r, t) {
        if (!t)
            return H(W(e, r));
        if (!r)
            return null;
        try {
            return X(e, r)
        } catch (e) {
            return null
        }
    }
    function G(e, r, t) {
        if (!t)
            return L(W(e, r));
        if (!r)
            return null;
        try {
            return G(e, r)
        } catch (e) {
            return null
        }
    }
    var j, z;
    if (typeof JSZip !== "undefined")
        z = JSZip;
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            if (typeof z === "undefined")
                z = require("./jszip.js");
            j = require("fs")
        }
    }
    function K(e, r) {
        var t = r.split("/");
        if (r.slice(-1) != "/")
            t.pop();
        var a = e.split("/");
        while (a.length !== 0) {
            var n = a.shift();
            if (n === "..")
                t.pop();
            else if (n !== ".")
                t.push(n)
        }
        return t.join("/")
    }
    var Y = /([^"\s?>\/]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
    var $ = /<[^>]*>/g;
    var Q = /<\w*:/
      , Z = /<(\/?)\w+:/;
    function q(e, r) {
        var t = {};
        var a = 0
          , n = 0;
        for (; a !== e.length; ++a)
            if ((n = e.charCodeAt(a)) === 32 || n === 10 || n === 13)
                break;
        if (!r)
            t[0] = e.substr(0, a);
        if (a === e.length)
            return t;
        var s = e.match(Y)
          , i = 0
          , f = ""
          , c = 0
          , l = ""
          , o = ""
          , u = 1;
        if (s)
            for (c = 0; c != s.length; ++c) {
                o = s[c];
                for (n = 0; n != o.length; ++n)
                    if (o.charCodeAt(n) === 61)
                        break;
                l = o.substr(0, n);
                u = (a = o.charCodeAt(n + 1)) == 34 || a == 39 ? 1 : 0;
                f = o.substring(n + 1 + u, o.length - u);
                for (i = 0; i != l.length; ++i)
                    if (l.charCodeAt(i) === 58)
                        break;
                if (i === l.length) {
                    if (l.indexOf("_") > 0)
                        l = l.substr(0, l.indexOf("_"));
                    t[l] = f
                } else {
                    var h = (i === 5 && l.substr(0, 5) === "xmlns" ? "xmlns" : "") + l.substr(i + 1);
                    if (t[h] && l.substr(i - 3, 3) == "ext")
                        continue;
                    t[h] = f
                }
            }
        return t
    }
    function J(e) {
        return e.replace(Z, "<$1")
    }
    var ee = {
        "&quot;": '"',
        "&apos;": "'",
        "&gt;": ">",
        "&lt;": "<",
        "&amp;": "&"
    };
    var re = w(ee);
    var te = function() {
        var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g
          , r = /_x([\da-fA-F]{4})_/g;
        return function t(a) {
            var n = a + "";
            return n.replace(e, function(e, r) {
                return ee[e] || String.fromCharCode(parseInt(r, e.indexOf("x") > -1 ? 16 : 10)) || e
            }).replace(r, function(e, r) {
                return String.fromCharCode(parseInt(r, 16))
            })
        }
    }();
    var ae = /[&<>'"]/g
      , ne = /[\u0000-\u0008\u000b-\u001f]/g;
    function se(e, r) {
        var t = e + "";
        return t.replace(ae, function(e) {
            return re[e]
        }).replace(ne, function(e) {
            return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_"
        })
    }
    function ie(e) {
        return se(e).replace(/ /g, "_x0020_")
    }
    var fe = /[\u0000-\u001f]/g;
    function ce(e) {
        var r = e + "";
        return r.replace(ae, function(e) {
            return re[e]
        }).replace(fe, function(e) {
            return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";"
        })
    }
    var le = function() {
        var e = /&#(\d+);/g;
        function r(e, r) {
            return String.fromCharCode(parseInt(r, 10))
        }
        return function t(a) {
            return a.replace(e, r)
        }
    }();
    var oe = function() {
        return function e(r) {
            return r.replace(/(\r\n|[\r\n])/g, "&#10;")
        }
    }();
    function ue(e, r) {
        switch (e) {
        case "1":
        case "true":
        case "TRUE":
            return true;
        default:
            return false
        }
    }
    var he = function e(r) {
        var t = ""
          , a = 0
          , n = 0
          , s = 0
          , i = 0
          , f = 0
          , c = 0;
        while (a < r.length) {
            n = r.charCodeAt(a++);
            if (n < 128) {
                t += String.fromCharCode(n);
                continue
            }
            s = r.charCodeAt(a++);
            if (n > 191 && n < 224) {
                t += String.fromCharCode((n & 31) << 6 | s & 63);
                continue
            }
            i = r.charCodeAt(a++);
            if (n < 240) {
                t += String.fromCharCode((n & 15) << 12 | (s & 63) << 6 | i & 63);
                continue
            }
            f = r.charCodeAt(a++);
            c = ((n & 7) << 18 | (s & 63) << 12 | (i & 63) << 6 | f & 63) - 65536;
            t += String.fromCharCode(55296 + (c >>> 10 & 1023));
            t += String.fromCharCode(56320 + (c & 1023))
        }
        return t
    };
    if (u) {
        var de = function e(r) {
            var t = new Buffer(2 * r.length), a, n, s = 1, i = 0, f = 0, c;
            for (n = 0; n < r.length; n += s) {
                s = 1;
                if ((c = r.charCodeAt(n)) < 128)
                    a = c;
                else if (c < 224) {
                    a = (c & 31) * 64 + (r.charCodeAt(n + 1) & 63);
                    s = 2
                } else if (c < 240) {
                    a = (c & 15) * 4096 + (r.charCodeAt(n + 1) & 63) * 64 + (r.charCodeAt(n + 2) & 63);
                    s = 3
                } else {
                    s = 4;
                    a = (c & 7) * 262144 + (r.charCodeAt(n + 1) & 63) * 4096 + (r.charCodeAt(n + 2) & 63) * 64 + (r.charCodeAt(n + 3) & 63);
                    a -= 65536;
                    f = 55296 + (a >>> 10 & 1023);
                    a = 56320 + (a & 1023)
                }
                if (f !== 0) {
                    t[i++] = f & 255;
                    t[i++] = f >>> 8;
                    f = 0
                }
                t[i++] = a % 256;
                t[i++] = a >>> 8
            }
            t.length = i;
            return t.toString("ucs2")
        };
        var ve = "foo bar bazâð£";
        if (he(ve) == de(ve))
            he = de;
        var be = function e(r) {
            return Buffer(r, "binary").toString("utf8")
        };
        if (he(ve) == be(ve))
            he = be
    }
    var pe = function() {
        var e = {};
        return function r(t, a) {
            var n = t + "|" + (a || "");
            if (e[n])
                return e[n];
            return e[n] = new RegExp("<(?:\\w+:)?" + t + '(?: xml:space="preserve")?(?:[^>]*)>([^☃]*)</(?:\\w+:)?' + t + ">",a || "")
        }
    }();
    var me = function() {
        var e = {};
        return function r(t) {
            if (e[t] !== undefined)
                return e[t];
            return e[t] = new RegExp("<(?:vt:)?" + t + ">(.*?)</(?:vt:)?" + t + ">","g")
        }
    }();
    var ge = /<\/?(?:vt:)?variant>/g
      , Ee = /<(?:vt:)([^>]*)>(.*)</;
    function Se(e) {
        var r = q(e);
        var t = e.match(me(r.baseType)) || [];
        if (t.length != r.size)
            throw new Error("unexpected vector length " + t.length + " != " + r.size);
        var a = [];
        t.forEach(function(e) {
            var r = e.replace(ge, "").match(Ee);
            a.push({
                v: he(r[2]),
                t: r[1]
            })
        });
        return a
    }
    var ke = /(^\s|\s$|\n)/;
    function Be(e, r) {
        return "<" + e + (r.match(ke) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">"
    }
    function Ce(e) {
        return C(e).map(function(r) {
            return " " + r + '="' + e[r] + '"'
        }).join("")
    }
    function Te(e, r, t) {
        return "<" + e + (B(t) ? Ce(t) : "") + (B(r) ? (r.match(ke) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">"
    }
    function we(e, r) {
        try {
            return e.toISOString().replace(/\.\d*/, "")
        } catch (e) {
            if (r)
                throw e
        }
        return ""
    }
    function Ie(e) {
        switch (typeof e) {
        case "string":
            return Te("vt:lpwstr", e);
        case "number":
            return Te((e | 0) == e ? "vt:i4" : "vt:r8", String(e));
        case "boolean":
            return Te("vt:bool", e ? "true" : "false")
        }
        if (e instanceof Date)
            return Te("vt:filetime", we(e));
        throw new Error("Unable to serialize " + e)
    }
    var Ae = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
    var Re = {
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        xsd: "http://www.w3.org/2001/XMLSchema"
    };
    Re.main = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
    var xe = {
        o: "urn:schemas-microsoft-com:office:office",
        x: "urn:schemas-microsoft-com:office:excel",
        ss: "urn:schemas-microsoft-com:office:spreadsheet",
        dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
        mv: "http://macVmlSchemaUri",
        v: "urn:schemas-microsoft-com:vml",
        html: "http://www.w3.org/TR/REC-html40"
    };
    function De(e, r) {
        var t = 1 - 2 * (e[r + 7] >>> 7);
        var a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15);
        var n = e[r + 6] & 15;
        for (var s = 5; s >= 0; --s)
            n = n * 256 + e[r + s];
        if (a == 2047)
            return n == 0 ? t * Infinity : NaN;
        if (a == 0)
            a = -1022;
        else {
            a -= 1023;
            n += Math.pow(2, 52)
        }
        return t * Math.pow(2, a - 52) * n
    }
    function Oe(e, r, t) {
        var a = (r < 0 || 1 / r == -Infinity ? 1 : 0) << 7
          , n = 0
          , s = 0;
        var i = a ? -r : r;
        if (!isFinite(i)) {
            n = 2047;
            s = isNaN(r) ? 26985 : 0
        } else {
            n = Math.floor(Math.log(i) * Math.LOG2E);
            s = r * Math.pow(2, 52 - n);
            if (n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52))) {
                n = -1022
            } else {
                s -= Math.pow(2, 52);
                n += 1023
            }
        }
        for (var f = 0; f <= 5; ++f,
        s /= 256)
            e[t + f] = s & 255;
        e[t + 6] = (n & 15) << 4 | s & 15;
        e[t + 7] = n >> 4 | a
    }
    var Fe, Pe;
    Fe = Pe = function e(r) {
        var t = [];
        for (var a = 0; a < r[0].length; ++a) {
            t.push.apply(t, r[0][a])
        }
        return t
    }
    ;
    var ye, Ne;
    ye = Ne = function e(r, t, a) {
        var n = [];
        for (var s = t; s < a; s += 2)
            n.push(String.fromCharCode(qe(r, s)));
        return n.join("")
    }
    ;
    var _e, Me;
    _e = Me = function e(r, t, a) {
        return r.slice(t, t + a).map(function(e) {
            return (e < 16 ? "0" : "") + e.toString(16)
        }).join("")
    }
    ;
    var Le, Ue;
    Le = Ue = function(e, r, t) {
        var a = [];
        for (var n = r; n < t; n++)
            a.push(String.fromCharCode(Ze(e, n)));
        return a.join("")
    }
    ;
    var He, Ve;
    He = Ve = function e(r, t) {
        var a = er(r, t);
        return a > 0 ? Le(r, t + 4, t + 4 + a - 1) : ""
    }
    ;
    var We, Xe;
    We = Xe = function e(r, t) {
        var a = 2 * er(r, t);
        return a > 0 ? Le(r, t + 4, t + 4 + a - 1) : ""
    }
    ;
    var Ge, je;
    Ge = je = function e(r, t) {
        var a = er(r, t);
        return a > 0 ? ye(r, t + 4, t + 4 + a) : ""
    }
    ;
    var ze, Ke;
    ze = Ke = function e(r, t) {
        var a = er(r, t);
        return a > 0 ? Le(r, t + 4, t + 4 + a) : ""
    }
    ;
    var Ye, $e;
    Ye = $e = function(e, r) {
        return De(e, r)
    }
    ;
    var Qe = function e(r) {
        return Array.isArray(r)
    };
    if (u) {
        ye = function e(r, t, a) {
            if (!Buffer.isBuffer(r))
                return Ne(r, t, a);
            return r.toString("utf16le", t, a)
        }
        ;
        _e = function(e, r, t) {
            return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Me(e, r, t)
        }
        ;
        He = function e(r, t) {
            if (!Buffer.isBuffer(r))
                return Ve(r, t);
            var a = r.readUInt32LE(t);
            return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : ""
        }
        ;
        We = function e(r, t) {
            if (!Buffer.isBuffer(r))
                return Xe(r, t);
            var a = 2 * r.readUInt32LE(t);
            return r.toString("utf16le", t + 4, t + 4 + a - 1)
        }
        ;
        Ge = function e(r, t) {
            if (!Buffer.isBuffer(r))
                return je(r, t);
            var a = r.readUInt32LE(t);
            return r.toString("utf16le", t + 4, t + 4 + a)
        }
        ;
        ze = function e(r, t) {
            if (!Buffer.isBuffer(r))
                return Ke(r, t);
            var a = r.readUInt32LE(t);
            return r.toString("utf8", t + 4, t + 4 + a)
        }
        ;
        Le = function e(r, t, a) {
            return r.toString("utf8", t, a)
        }
        ;
        Fe = function(e) {
            return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0]) : Pe(e)
        }
        ;
        v = function(e) {
            return Buffer.isBuffer(e[0]) ? Buffer.concat(e) : [].concat.apply([], e)
        }
        ;
        Ye = function e(r, t) {
            if (Buffer.isBuffer(r))
                return r.readDoubleLE(t);
            return $e(r, t)
        }
        ;
        Qe = function e(r) {
            return Buffer.isBuffer(r) || Array.isArray(r)
        }
    }
    if (typeof cptable !== "undefined") {
        ye = function(e, r, t) {
            return cptable.utils.decode(1200, e.slice(r, t))
        }
        ;
        Le = function(e, r, t) {
            return cptable.utils.decode(65001, e.slice(r, t))
        }
        ;
        He = function(e, r) {
            var a = er(e, r);
            return a > 0 ? cptable.utils.decode(t, e.slice(r + 4, r + 4 + a - 1)) : ""
        }
        ;
        We = function(e, r) {
            var t = 2 * er(e, r);
            return t > 0 ? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1)) : ""
        }
        ;
        Ge = function(e, r) {
            var t = er(e, r);
            return t > 0 ? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : ""
        }
        ;
        ze = function(e, r) {
            var t = er(e, r);
            return t > 0 ? cptable.utils.decode(65001, e.slice(r + 4, r + 4 + t)) : ""
        }
    }
    var Ze = function(e, r) {
        return e[r]
    };
    var qe = function(e, r) {
        return e[r + 1] * (1 << 8) + e[r]
    };
    var Je = function(e, r) {
        var t = e[r + 1] * (1 << 8) + e[r];
        return t < 32768 ? t : (65535 - t + 1) * -1
    };
    var er = function(e, r) {
        return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r]
    };
    var rr = function(e, r) {
        return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]
    };
    var tr = function(e) {
        return e.match(/../g).map(function(e) {
            return parseInt(e, 16)
        })
    };
    var ar = typeof Buffer !== "undefined" ? function(e) {
        return Buffer.isBuffer(e) ? new Buffer(e,"hex") : tr(e)
    }
    : tr;
    function nr(e, r) {
        var a = "", n, s, i = [], c, l, o, h;
        switch (r) {
        case "dbcs":
            h = this.l;
            if (u && Buffer.isBuffer(this))
                a = this.slice(this.l, this.l + 2 * e).toString("utf16le");
            else
                for (o = 0; o != e; ++o) {
                    a += String.fromCharCode(qe(this, h));
                    h += 2
                }
            e *= 2;
            break;
        case "utf8":
            a = Le(this, this.l, this.l + e);
            break;
        case "utf16le":
            e *= 2;
            a = ye(this, this.l, this.l + e);
            break;
        case "wstr":
            if (typeof cptable !== "undefined")
                a = cptable.utils.decode(t, this.slice(this.l, this.l + 2 * e));
            else
                return nr.call(this, e, "dbcs");
            e = 2 * e;
            break;
        case "lpstr":
            a = He(this, this.l);
            e = 5 + a.length;
            break;
        case "lpwstr":
            a = We(this, this.l);
            e = 5 + a.length;
            if (a[a.length - 1] == "\0")
                e += 2;
            break;
        case "lpp4":
            e = 4 + er(this, this.l);
            a = Ge(this, this.l);
            if (e & 2)
                e += 2;
            break;
        case "8lpp4":
            e = 4 + er(this, this.l);
            a = ze(this, this.l);
            if (e & 3)
                e += 4 - (e & 3);
            break;
        case "cstr":
            e = 0;
            a = "";
            while ((c = Ze(this, this.l + e++)) !== 0)
                i.push(f(c));
            a = i.join("");
            break;
        case "_wstr":
            e = 0;
            a = "";
            while ((c = qe(this, this.l + e)) !== 0) {
                i.push(f(c));
                e += 2
            }
            e += 2;
            a = i.join("");
            break;
        case "dbcs-cont":
            a = "";
            h = this.l;
            for (o = 0; o != e; ++o) {
                if (this.lens && this.lens.indexOf(h) !== -1) {
                    c = Ze(this, h);
                    this.l = h + 1;
                    l = nr.call(this, e - o, c ? "dbcs-cont" : "sbcs-cont");
                    return i.join("") + l
                }
                i.push(f(qe(this, h)));
                h += 2
            }
            a = i.join("");
            e *= 2;
            break;
        case "sbcs-cont":
            a = "";
            h = this.l;
            for (o = 0; o != e; ++o) {
                if (this.lens && this.lens.indexOf(h) !== -1) {
                    c = Ze(this, h);
                    this.l = h + 1;
                    l = nr.call(this, e - o, c ? "dbcs-cont" : "sbcs-cont");
                    return i.join("") + l
                }
                i.push(f(Ze(this, h)));
                h += 1
            }
            a = i.join("");
            break;
        default:
            switch (e) {
            case 1:
                n = Ze(this, this.l);
                this.l++;
                return n;
            case 2:
                n = (r === "i" ? Je : qe)(this, this.l);
                this.l += 2;
                return n;
            case 4:
                if (r === "i" || (this[this.l + 3] & 128) === 0) {
                    n = rr(this, this.l);
                    this.l += 4;
                    return n
                } else {
                    s = er(this, this.l);
                    this.l += 4
                }
                return s;
            case 8:
                if (r === "f") {
                    s = Ye(this, this.l);
                    this.l += 8;
                    return s
                }
            case 16:
                a = _e(this, this.l, e);
                break
            }
        }
        this.l += e;
        return a
    }
    var sr = function(e, r, t) {
        e[t] = r & 255;
        e[t + 1] = r >>> 8 & 255
    };
    var ir = function(e, r, t) {
        e[t] = r & 255;
        e[t + 1] = r >>> 8 & 255;
        e[t + 2] = r >>> 16 & 255;
        e[t + 3] = r >>> 24 & 255
    };
    var fr = function(e, r, t) {
        e[t] = r & 255;
        e[t + 1] = r >> 8 & 255;
        e[t + 2] = r >> 16 & 255;
        e[t + 3] = r >> 24 & 255
    };
    function cr(e, r, t) {
        var a = 0
          , n = 0;
        if (t === "dbcs") {
            for (n = 0; n != r.length; ++n)
                sr(this, r.charCodeAt(n), this.l + 2 * n);
            a = 2 * r.length
        } else if (t === "sbcs") {
            for (n = 0; n != r.length; ++n)
                this[this.l + n] = r.charCodeAt(n) & 255;
            a = r.length
        } else
            switch (e) {
            case 1:
                a = 1;
                this[this.l] = r & 255;
                break;
            case 2:
                a = 2;
                this[this.l] = r & 255;
                r >>>= 8;
                this[this.l + 1] = r & 255;
                break;
            case 3:
                a = 3;
                this[this.l] = r & 255;
                r >>>= 8;
                this[this.l + 1] = r & 255;
                r >>>= 8;
                this[this.l + 2] = r & 255;
                break;
            case 4:
                a = 4;
                ir(this, r, this.l);
                break;
            case 8:
                a = 8;
                if (t === "f") {
                    Oe(this, r, this.l);
                    break
                }
            case 16:
                break;
            case -4:
                a = 4;
                fr(this, r, this.l);
                break
            }
        this.l += a;
        return this
    }
    function lr(e, r) {
        var t = _e(this, this.l, e.length >> 1);
        if (t !== e)
            throw r + "Expected " + e + " saw " + t;
        this.l += e.length >> 1
    }
    function or(e, r) {
        e.l = r;
        e.read_shift = nr;
        e.chk = lr;
        e.write_shift = cr
    }
    function ur(e, r) {
        e.l += r
    }
    function hr(e, r) {
        if (typeof console != "undefined")
            console.log(e.slice(e.l, e.l + r));
        e.l += r
    }
    function dr(e, r) {
        e.l += r
    }
    function vr(e) {
        var r = h(e);
        or(r, 0);
        return r
    }
    function br(e, r, t) {
        if (!e)
            return;
        var a, n, s;
        or(e, e.l || 0);
        var i = e.length
          , f = 0
          , c = 0;
        while (e.l < i) {
            f = e.read_shift(1);
            if (f & 128)
                f = (f & 127) + ((e.read_shift(1) & 127) << 7);
            var l = Qg[f] || Qg[65535];
            a = e.read_shift(1);
            s = a & 127;
            for (n = 1; n < 4 && a & 128; ++n)
                s += ((a = e.read_shift(1)) & 127) << 7 * n;
            c = e.l + s;
            var o = l.f(e, s, t);
            e.l = c;
            if (r(o, l.n, f))
                return
        }
    }
    function pr() {
        var e = []
          , r = 2048;
        var t = function e(r) {
            var t = vr(r);
            or(t, 0);
            return t
        };
        var a = t(r);
        var n = function r() {
            if (!a)
                return;
            if (a.length > a.l)
                a = a.slice(0, a.l);
            if (a.length > 0)
                e.push(a);
            a = null
        };
        var s = function e(s) {
            if (a && s < a.length - a.l)
                return a;
            n();
            return a = t(Math.max(s + 1, r))
        };
        var i = function r() {
            n();
            return Fe([e])
        };
        var f = function e(t) {
            n();
            a = t;
            s(r)
        };
        return {
            next: s,
            push: f,
            end: i,
            _bufs: e
        }
    }
    function mr(e, r, t, a) {
        var n = Number(Zg[r]), s;
        if (isNaN(n))
            return;
        if (!a)
            a = Qg[n].p || (t || []).length || 0;
        s = 1 + (n >= 128 ? 1 : 0) + 1 + a;
        if (a >= 128)
            ++s;
        if (a >= 16384)
            ++s;
        if (a >= 2097152)
            ++s;
        var i = e.next(s);
        if (n <= 127)
            i.write_shift(1, n);
        else {
            i.write_shift(1, (n & 127) + 128);
            i.write_shift(1, n >> 7)
        }
        for (var f = 0; f != 4; ++f) {
            if (a >= 128) {
                i.write_shift(1, (a & 127) + 128);
                a >>= 7
            } else {
                i.write_shift(1, a);
                break
            }
        }
        if (a > 0 && Qe(t))
            e.push(t)
    }
    function gr(e, r, t) {
        var a = _(e);
        if (r.s) {
            if (a.cRel)
                a.c += r.s.c;
            if (a.rRel)
                a.r += r.s.r
        } else {
            a.c += r.c;
            a.r += r.r
        }
        if (!t || t.biff < 12) {
            while (a.c >= 256)
                a.c -= 256;
            while (a.r >= 65536)
                a.r -= 65536
        }
        return a
    }
    function Er(e, r, t) {
        var a = _(e);
        a.s = gr(a.s, r.s, t);
        a.e = gr(a.e, r.s, t);
        return a
    }
    function Sr(e) {
        var r = yr(e);
        if (e.cRel === 0)
            r = Dr(r);
        if (e.rRel === 0)
            r = Ir(r);
        return r
    }
    function kr(e, r) {
        if (e.s.r == 0 && !e.s.rRel) {
            if (e.e.r == r.biff >= 12 ? 1048575 : 65535 && !e.e.rRel) {
                return (e.s.cRel ? "" : "$") + xr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + xr(e.e.c)
            }
        }
        if (e.s.c == 0 && !e.s.cRel) {
            if (e.e.c == r.biff >= 12 ? 65535 : 255 && !e.e.cRel) {
                return (e.s.rRel ? "" : "$") + wr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + wr(e.e.r)
            }
        }
        return Sr(e.s) + ":" + Sr(e.e)
    }
    var Br = {};
    var Cr = function(e, r) {
        var t;
        if (typeof r !== "undefined")
            t = r;
        else if (typeof require !== "undefined") {
            try {
                t = require("crypto")
            } catch (e) {
                t = null
            }
        }
        e.rc4 = function(e, r) {
            var t = new Array(256);
            var a = 0
              , n = 0
              , s = 0
              , i = 0;
            for (n = 0; n != 256; ++n)
                t[n] = n;
            for (n = 0; n != 256; ++n) {
                s = s + t[n] + e[n % e.length].charCodeAt(0) & 255;
                i = t[n];
                t[n] = t[s];
                t[s] = i
            }
            n = s = 0;
            var f = Buffer(r.length);
            for (a = 0; a != r.length; ++a) {
                n = n + 1 & 255;
                s = (s + t[n]) % 256;
                i = t[n];
                t[n] = t[s];
                t[s] = i;
                f[a] = r[a] ^ t[t[n] + t[s] & 255]
            }
            return f
        }
        ;
        e.md5 = function(e) {
            if (!t)
                throw new Error("Unsupported crypto");
            return t.createHash("md5").update(e).digest("hex")
        }
    };
    Cr(Br, typeof crypto !== "undefined" ? crypto : undefined);
    function Tr(e) {
        return parseInt(Ar(e), 10) - 1
    }
    function wr(e) {
        return "" + (e + 1)
    }
    function Ir(e) {
        return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")
    }
    function Ar(e) {
        return e.replace(/\$(\d+)$/, "$1")
    }
    function Rr(e) {
        var r = Or(e)
          , t = 0
          , a = 0;
        for (; a !== r.length; ++a)
            t = 26 * t + r.charCodeAt(a) - 64;
        return t - 1
    }
    function xr(e) {
        var r = "";
        for (++e; e; e = Math.floor((e - 1) / 26))
            r = String.fromCharCode((e - 1) % 26 + 65) + r;
        return r
    }
    function Dr(e) {
        return e.replace(/^([A-Z])/, "$$$1")
    }
    function Or(e) {
        return e.replace(/^\$([A-Z])/, "$1")
    }
    function Fr(e) {
        return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",")
    }
    function Pr(e) {
        var r = Fr(e);
        return {
            c: Rr(r[0]),
            r: Tr(r[1])
        }
    }
    function yr(e) {
        return xr(e.c) + wr(e.r)
    }
    function Nr(e) {
        return Dr(Ir(e))
    }
    function _r(e) {
        return Or(Ar(e))
    }
    function Mr(e) {
        var r = e.split(":").map(Pr);
        return {
            s: r[0],
            e: r[r.length - 1]
        }
    }
    function Lr(e, r) {
        if (typeof r === "undefined" || typeof r === "number") {
            return Lr(e.s, e.e)
        }
        if (typeof e !== "string")
            e = yr(e);
        if (typeof r !== "string")
            r = yr(r);
        return e == r ? e : e + ":" + r
    }
    function Ur(e) {
        var r = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        };
        var t = 0
          , a = 0
          , n = 0;
        var s = e.length;
        for (t = 0; a < s; ++a) {
            if ((n = e.charCodeAt(a) - 64) < 1 || n > 26)
                break;
            t = 26 * t + n
        }
        r.s.c = --t;
        for (t = 0; a < s; ++a) {
            if ((n = e.charCodeAt(a) - 48) < 0 || n > 9)
                break;
            t = 10 * t + n
        }
        r.s.r = --t;
        if (a === s || e.charCodeAt(++a) === 58) {
            r.e.c = r.s.c;
            r.e.r = r.s.r;
            return r
        }
        for (t = 0; a != s; ++a) {
            if ((n = e.charCodeAt(a) - 64) < 1 || n > 26)
                break;
            t = 26 * t + n
        }
        r.e.c = --t;
        for (t = 0; a != s; ++a) {
            if ((n = e.charCodeAt(a) - 48) < 0 || n > 9)
                break;
            t = 10 * t + n
        }
        r.e.r = --t;
        return r
    }
    function Hr(e, r) {
        var t = e.t == "d" && r instanceof Date;
        if (e.z != null)
            try {
                return e.w = m.format(e.z, t ? R(r) : r)
            } catch (e) {}
        try {
            return e.w = m.format((e.XF || {}).ifmt || (t ? 14 : 0), t ? R(r) : r)
        } catch (e) {
            return "" + r
        }
    }
    function Vr(e, r, t) {
        if (e == null || e.t == null || e.t == "z")
            return "";
        if (e.w !== undefined)
            return e.w;
        if (e.t == "d" && !e.z && t && t.dateNF)
            e.z = t.dateNF;
        if (r == undefined)
            return Hr(e, e.v, t);
        return Hr(e, r, t)
    }
    function Wr(e, r) {
        var t = r && r.sheet ? r.sheet : "Sheet1";
        var a = {};
        a[t] = e;
        return {
            SheetNames: [t],
            Sheets: a
        }
    }
    function Xr(e, r) {
        var t = r || {};
        if (c != null && t.dense == null)
            t.dense = c;
        var a = t.dense ? [] : {};
        var n = {
            s: {
                c: 1e7,
                r: 1e7
            },
            e: {
                c: 0,
                r: 0
            }
        };
        for (var s = 0; s != e.length; ++s) {
            for (var i = 0; i != e[s].length; ++i) {
                if (typeof e[s][i] === "undefined")
                    continue;
                var f = {
                    v: e[s][i]
                };
                if (n.s.r > s)
                    n.s.r = s;
                if (n.s.c > i)
                    n.s.c = i;
                if (n.e.r < s)
                    n.e.r = s;
                if (n.e.c < i)
                    n.e.c = i;
                if (f.v === null) {
                    if (!t.cellStubs)
                        continue;
                    f.t = "z"
                } else if (typeof f.v === "number")
                    f.t = "n";
                else if (typeof f.v === "boolean")
                    f.t = "b";
                else if (f.v instanceof Date) {
                    f.z = t.dateNF || m._table[14];
                    if (t.cellDates) {
                        f.t = "d";
                        f.w = m.format(f.z, R(f.v))
                    } else {
                        f.t = "n";
                        f.v = R(f.v);
                        f.w = m.format(f.z, f.v)
                    }
                } else
                    f.t = "s";
                if (t.dense) {
                    if (!a[s])
                        a[s] = [];
                    a[s][i] = f
                } else {
                    var l = yr({
                        c: i,
                        r: s
                    });
                    a[l] = f
                }
            }
        }
        if (n.s.c < 1e7)
            a["!ref"] = Lr(n);
        return a
    }
    function Gr(e, r) {
        if (!r)
            r = vr(4);
        r.write_shift(4, e);
        return r
    }
    function jr(e) {
        var r = e.read_shift(4);
        return r === 0 ? "" : e.read_shift(r, "dbcs")
    }
    function zr(e, r) {
        var t = false;
        if (r == null) {
            t = true;
            r = vr(4 + 2 * e.length)
        }
        r.write_shift(4, e.length);
        if (e.length > 0)
            r.write_shift(0, e, "dbcs");
        return t ? r.slice(0, r.l) : r
    }
    function Kr(e, r) {
        return {
            ich: e.read_shift(2),
            ifnt: e.read_shift(2)
        }
    }
    function Yr(e, r) {
        if (!r)
            r = vr(4);
        r.write_shift(2, e.ich || 0);
        r.write_shift(2, e.ifnt || 0);
        return r
    }
    function $r(e, r) {
        var t = e.l;
        var a = e.read_shift(1);
        var n = jr(e);
        var s = [];
        var i = {
            t: n,
            h: n
        };
        if ((a & 1) !== 0) {
            var f = e.read_shift(4);
            for (var c = 0; c != f; ++c)
                s.push(Kr(e));
            i.r = s
        } else
            i.r = [{
                ich: 0,
                ifnt: 0
            }];
        e.l = t + r;
        return i
    }
    function Qr(e, r) {
        var t = false;
        if (r == null) {
            t = true;
            r = vr(15 + 4 * e.t.length)
        }
        r.write_shift(1, 0);
        zr(e.t, r);
        return t ? r.slice(0, r.l) : r
    }
    var Zr = $r;
    function qr(e, r) {
        var t = false;
        if (r == null) {
            t = true;
            r = vr(23 + 4 * e.t.length)
        }
        r.write_shift(1, 1);
        zr(e.t, r);
        r.write_shift(4, 1);
        Yr({
            ich: 0,
            ifnt: 0
        }, r);
        return t ? r.slice(0, r.l) : r
    }
    function Jr(e) {
        var r = e.read_shift(4);
        var t = e.read_shift(2);
        t += e.read_shift(1) << 16;
        var a = e.read_shift(1);
        return {
            c: r,
            iStyleRef: t
        }
    }
    function et(e, r) {
        if (r == null)
            r = vr(8);
        r.write_shift(-4, e.c);
        r.write_shift(3, e.iStyleRef || e.s);
        r.write_shift(1, 0);
        return r
    }
    var rt = jr;
    var tt = zr;
    function at(e) {
        var r = e.read_shift(4);
        return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs")
    }
    function nt(e, r) {
        var t = false;
        if (r == null) {
            t = true;
            r = vr(127)
        }
        r.write_shift(4, e.length > 0 ? e.length : 4294967295);
        if (e.length > 0)
            r.write_shift(0, e, "dbcs");
        return t ? r.slice(0, r.l) : r
    }
    var st = jr;
    var it = zr;
    var ft = at;
    var ct = nt;
    function lt(e) {
        var r = e.slice(e.l, e.l + 4);
        var t = r[0] & 1
          , a = r[0] & 2;
        e.l += 4;
        r[0] &= 252;
        var n = a === 0 ? Ye([0, 0, 0, 0, r[0], r[1], r[2], r[3]], 0) : rr(r, 0) >> 2;
        return t ? n / 100 : n
    }
    function ot(e, r) {
        if (r == null)
            r = vr(4);
        var t = 0
          , a = 0
          , n = e * 100;
        if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29) {
            a = 1
        } else if (n == (n | 0) && n >= -(1 << 29) && n < 1 << 29) {
            a = 1;
            t = 1
        }
        if (a)
            r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
        else
            throw new Error("unsupported RkNumber " + e)
    }
    function ut(e) {
        var r = {
            s: {},
            e: {}
        };
        r.s.r = e.read_shift(4);
        r.e.r = e.read_shift(4);
        r.s.c = e.read_shift(4);
        r.e.c = e.read_shift(4);
        return r
    }
    function ht(e, r) {
        if (!r)
            r = vr(16);
        r.write_shift(4, e.s.r);
        r.write_shift(4, e.e.r);
        r.write_shift(4, e.s.c);
        r.write_shift(4, e.e.c);
        return r
    }
    var dt = ut;
    var vt = ht;
    function bt(e, r) {
        return e.read_shift(8, "f")
    }
    function pt(e, r) {
        return (r || vr(8)).write_shift(8, e, "f")
    }
    var mt = {
        0: "#NULL!",
        7: "#DIV/0!",
        15: "#VALUE!",
        23: "#REF!",
        29: "#NAME?",
        36: "#NUM!",
        42: "#N/A",
        43: "#GETTING_DATA",
        255: "#WTF?"
    };
    var gt = I(mt);
    function Et(e, r) {
        var t = {};
        var a = e.read_shift(1);
        var n = a & 1;
        var s = a >>> 1;
        var i = e.read_shift(1);
        var f = e.read_shift(2, "i");
        var c = e.read_shift(1);
        var l = e.read_shift(1);
        var o = e.read_shift(1);
        var u = e.read_shift(1);
        switch (s) {
        case 0:
            t.auto = 1;
            break;
        case 1:
            t.index = i;
            var h = Wt[i];
            if (h)
                t.rgb = h[0].toString(16) + h[1].toString(16) + h[2].toString(16);
            break;
        case 2:
            t.rgb = c.toString(16) + l.toString(16) + o.toString(16);
            break;
        case 3:
            t.theme = i;
            break
        }
        if (f != 0)
            t.tint = f > 0 ? f / 32767 : f / 32768;
        return t
    }
    function St(e, r) {
        if (!r)
            r = vr(8);
        if (!e || e.auto) {
            r.write_shift(4, 0);
            r.write_shift(4, 0);
            return r
        }
        if (e.index) {
            r.write_shift(1, 2);
            r.write_shift(1, e.index)
        } else if (e.theme) {
            r.write_shift(1, 6);
            r.write_shift(1, e.theme)
        } else {
            r.write_shift(1, 5);
            r.write_shift(1, 0)
        }
        var t = e.tint || 0;
        if (t > 0)
            t *= 32767;
        else if (t < 0)
            t *= 32768;
        r.write_shift(2, t);
        if (!e.rgb) {
            r.write_shift(2, 0);
            r.write_shift(1, 0);
            r.write_shift(1, 0)
        } else {
            var a = e.rgb || "FFFFFF";
            r.write_shift(1, parseInt(a.substr(0, 2), 16));
            r.write_shift(1, parseInt(a.substr(2, 2), 16));
            r.write_shift(1, parseInt(a.substr(4, 2), 16));
            r.write_shift(1, 255)
        }
        return r
    }
    function kt(e, r, t) {
        var a = e.read_shift(1);
        e.l++;
        var n = {
            fItalic: a & 2,
            fStrikeout: a & 8,
            fOutline: a & 16,
            fShadow: a & 32,
            fCondense: a & 64,
            fExtend: a & 128
        };
        return n
    }
    function Bt(e, r) {
        if (!r)
            r = vr(2);
        var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
        r.write_shift(1, t);
        r.write_shift(1, 0);
        return r
    }
    {
        var Ct = 2;
        var Tt = 3;
        var wt = 11;
        var It = 12;
        var At = 19;
        var Rt = 21;
        var xt = 30;
        var Dt = 64;
        var Ot = 71;
        var Ft = 4096;
        var Pt = 80;
        var yt = 81;
        var Nt = [Pt, yt]
    }
    var _t = {
        1: {
            n: "CodePage",
            t: Ct
        },
        2: {
            n: "Category",
            t: Pt
        },
        3: {
            n: "PresentationFormat",
            t: Pt
        },
        4: {
            n: "ByteCount",
            t: Tt
        },
        5: {
            n: "LineCount",
            t: Tt
        },
        6: {
            n: "ParagraphCount",
            t: Tt
        },
        7: {
            n: "SlideCount",
            t: Tt
        },
        8: {
            n: "NoteCount",
            t: Tt
        },
        9: {
            n: "HiddenCount",
            t: Tt
        },
        10: {
            n: "MultimediaClipCount",
            t: Tt
        },
        11: {
            n: "Scale",
            t: wt
        },
        12: {
            n: "HeadingPair",
            t: Ft | It
        },
        13: {
            n: "DocParts",
            t: Ft | xt
        },
        14: {
            n: "Manager",
            t: Pt
        },
        15: {
            n: "Company",
            t: Pt
        },
        16: {
            n: "LinksDirty",
            t: wt
        },
        17: {
            n: "CharacterCount",
            t: Tt
        },
        19: {
            n: "SharedDoc",
            t: wt
        },
        22: {
            n: "HLinksChanged",
            t: wt
        },
        23: {
            n: "AppVersion",
            t: Tt,
            p: "version"
        },
        26: {
            n: "ContentType",
            t: Pt
        },
        27: {
            n: "ContentStatus",
            t: Pt
        },
        28: {
            n: "Language",
            t: Pt
        },
        29: {
            n: "Version",
            t: Pt
        },
        255: {}
    };
    var Mt = {
        1: {
            n: "CodePage",
            t: Ct
        },
        2: {
            n: "Title",
            t: Pt
        },
        3: {
            n: "Subject",
            t: Pt
        },
        4: {
            n: "Author",
            t: Pt
        },
        5: {
            n: "Keywords",
            t: Pt
        },
        6: {
            n: "Comments",
            t: Pt
        },
        7: {
            n: "Template",
            t: Pt
        },
        8: {
            n: "LastAuthor",
            t: Pt
        },
        9: {
            n: "RevNumber",
            t: Pt
        },
        10: {
            n: "EditTime",
            t: Dt
        },
        11: {
            n: "LastPrinted",
            t: Dt
        },
        12: {
            n: "CreatedDate",
            t: Dt
        },
        13: {
            n: "ModifiedDate",
            t: Dt
        },
        14: {
            n: "PageCount",
            t: Tt
        },
        15: {
            n: "WordCount",
            t: Tt
        },
        16: {
            n: "CharCount",
            t: Tt
        },
        17: {
            n: "Thumbnail",
            t: Ot
        },
        18: {
            n: "ApplicationName",
            t: xt
        },
        19: {
            n: "DocumentSecurity",
            t: Tt
        },
        255: {}
    };
    var Lt = {
        2147483648: {
            n: "Locale",
            t: At
        },
        2147483651: {
            n: "Behavior",
            t: At
        },
        1919054434: {}
    };
    (function() {
        for (var e in Lt)
            if (Lt.hasOwnProperty(e))
                _t[e] = Mt[e] = Lt[e]
    }
    )();
    var Ut = {
        1: "US",
        2: "CA",
        3: "",
        7: "RU",
        20: "EG",
        30: "GR",
        31: "NL",
        32: "BE",
        33: "FR",
        34: "ES",
        36: "HU",
        39: "IT",
        41: "CH",
        43: "AT",
        44: "GB",
        45: "DK",
        46: "SE",
        47: "NO",
        48: "PL",
        49: "DE",
        52: "MX",
        55: "BR",
        61: "AU",
        64: "NZ",
        66: "TH",
        81: "JP",
        82: "KR",
        84: "VN",
        86: "CN",
        90: "TR",
        105: "JS",
        213: "DZ",
        216: "MA",
        218: "LY",
        351: "PT",
        354: "IS",
        358: "FI",
        420: "CZ",
        886: "TW",
        961: "LB",
        962: "JO",
        963: "SY",
        964: "IQ",
        965: "KW",
        966: "SA",
        971: "AE",
        972: "IL",
        974: "QA",
        981: "IR",
        65535: "US"
    };
    var Ht = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
    function Vt(e) {
        return e.map(function(e) {
            return [e >> 16 & 255, e >> 8 & 255, e & 255]
        })
    }
    var Wt = Vt([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    var Xt = {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
        "application/vnd.ms-excel.binIndexWs": "TODO",
        "application/vnd.ms-excel.intlmacrosheet": "TODO",
        "application/vnd.ms-excel.binIndexMs": "TODO",
        "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
        "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
        "application/vnd.ms-excel.pivotTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
        "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
        "application/vnd.ms-office.chartstyle+xml": "TODO",
        "application/vnd.ms-excel.calcChain": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
        "application/vnd.ms-office.activeX": "TODO",
        "application/vnd.ms-office.activeX+xml": "TODO",
        "application/vnd.ms-excel.attachedToolbars": "TODO",
        "application/vnd.ms-excel.connections": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
        "application/vnd.ms-excel.externalLink": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "TODO",
        "application/vnd.ms-excel.sheetMetadata": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
        "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
        "application/vnd.ms-excel.pivotCacheRecords": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
        "application/vnd.ms-excel.queryTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
        "application/vnd.ms-excel.userNames": "TODO",
        "application/vnd.ms-excel.revisionHeaders": "TODO",
        "application/vnd.ms-excel.revisionLog": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
        "application/vnd.ms-excel.tableSingleCells": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
        "application/vnd.ms-excel.slicer": "TODO",
        "application/vnd.ms-excel.slicerCache": "TODO",
        "application/vnd.ms-excel.slicer+xml": "TODO",
        "application/vnd.ms-excel.slicerCache+xml": "TODO",
        "application/vnd.ms-excel.wsSortMap": "TODO",
        "application/vnd.ms-excel.table": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
        "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
        "application/vnd.ms-excel.Timeline+xml": "TODO",
        "application/vnd.ms-excel.TimelineCache+xml": "TODO",
        "application/vnd.ms-office.vbaProject": "vba",
        "application/vnd.ms-office.vbaProjectSignature": "vba",
        "application/vnd.ms-office.volatileDependencies": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
        "application/vnd.ms-excel.controlproperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.model+data": "TODO",
        "application/vnd.ms-excel.Survey+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
        "application/vnd.openxmlformats-package.relationships+xml": "rels",
        "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
        "image/png": "TODO",
        sheet: "js"
    };
    var Gt = function() {
        var e = {
            workbooks: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
                xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
                xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
            },
            strs: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
                xlsb: "application/vnd.ms-excel.sharedStrings"
            },
            comments: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
                xlsb: "application/vnd.ms-excel.comments"
            },
            sheets: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
                xlsb: "application/vnd.ms-excel.worksheet"
            },
            charts: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
                xlsb: "application/vnd.ms-excel.chartsheet"
            },
            dialogs: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
                xlsb: "application/vnd.ms-excel.dialogsheet"
            },
            macros: {
                xlsx: "application/vnd.ms-excel.macrosheet+xml",
                xlsb: "application/vnd.ms-excel.macrosheet"
            },
            styles: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
                xlsb: "application/vnd.ms-excel.styles"
            }
        };
        C(e).forEach(function(r) {
            if (!e[r].xlsm)
                e[r].xlsm = e[r].xlsx
        });
        C(e).forEach(function(r) {
            C(e[r]).forEach(function(t) {
                Xt[e[r][t]] = r
            })
        });
        return e
    }();
    var jt = A(Xt);
    Re.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
    function zt(e, r) {
        var t = {
            workbooks: [],
            sheets: [],
            charts: [],
            dialogs: [],
            macros: [],
            rels: [],
            strs: [],
            comments: [],
            coreprops: [],
            extprops: [],
            custprops: [],
            themes: [],
            styles: [],
            calcchains: [],
            vba: [],
            drawings: [],
            TODO: [],
            xmlns: ""
        };
        if (!e || !e.match)
            return t;
        var a = {};
        (e.match($) || []).forEach(function(e) {
            var r = q(e);
            switch (r[0].replace(Q, "<")) {
            case "<?xml":
                break;
            case "<Types":
                t.xmlns = r["xmlns" + (r[0].match(/<(\w+):/) || ["", ""])[1]];
                break;
            case "<Default":
                a[r.Extension] = r.ContentType;
                break;
            case "<Override":
                if (t[Xt[r.ContentType]] !== undefined)
                    t[Xt[r.ContentType]].push(r.PartName);
                break
            }
        });
        if (t.xmlns !== Re.CT)
            throw new Error("Unknown Namespace: " + t.xmlns);
        t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "";
        t.sst = t.strs.length > 0 ? t.strs[0] : "";
        t.style = t.styles.length > 0 ? t.styles[0] : "";
        t.defaults = a;
        delete t.calcchains;
        return t
    }
    var Kt = Te("Types", null, {
        xmlns: Re.CT,
        "xmlns:xsd": Re.xsd,
        "xmlns:xsi": Re.xsi
    });
    var Yt = [["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", jt.rels[0]]].map(function(e) {
        return Te("Default", null, {
            Extension: e[0],
            ContentType: e[1]
        })
    });
    function $t(e, r) {
        var t = [], a;
        t[t.length] = Ae;
        t[t.length] = Kt;
        t = t.concat(Yt);
        var n = function(n) {
            if (e[n] && e[n].length > 0) {
                a = e[n][0];
                t[t.length] = Te("Override", null, {
                    PartName: (a[0] == "/" ? "" : "/") + a,
                    ContentType: Gt[n][r.bookType || "xlsx"]
                })
            }
        };
        var s = function(a) {
            (e[a] || []).forEach(function(e) {
                t[t.length] = Te("Override", null, {
                    PartName: (e[0] == "/" ? "" : "/") + e,
                    ContentType: Gt[a][r.bookType || "xlsx"]
                })
            })
        };
        var i = function(r) {
            (e[r] || []).forEach(function(e) {
                t[t.length] = Te("Override", null, {
                    PartName: (e[0] == "/" ? "" : "/") + e,
                    ContentType: jt[r][0]
                })
            })
        };
        n("workbooks");
        s("sheets");
        s("charts");
        i("themes");
        ["strs", "styles"].forEach(n);
        ["coreprops", "extprops", "custprops"].forEach(i);
        i("vba");
        i("comments");
        i("drawings");
        if (t.length > 2) {
            t[t.length] = "</Types>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    var Qt = {
        WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
        VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
    };
    function Zt(e) {
        var r = e.lastIndexOf("/");
        return e.substr(0, r + 1) + "_rels/" + e.substr(r + 1) + ".rels"
    }
    function qt(e, r) {
        if (!e)
            return e;
        if (r.charAt(0) !== "/") {
            r = "/" + r
        }
        var t = {};
        var a = {};
        (e.match($) || []).forEach(function(e) {
            var n = q(e);
            if (n[0] === "<Relationship") {
                var s = {};
                s.Type = n.Type;
                s.Target = n.Target;
                s.Id = n.Id;
                s.TargetMode = n.TargetMode;
                var i = n.TargetMode === "External" ? n.Target : K(n.Target, r);
                t[i] = s;
                a[n.Id] = s
            }
        });
        t["!id"] = a;
        return t
    }
    Re.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Jt = Te("Relationships", null, {
        xmlns: Re.RELS
    });
    function ea(e) {
        var r = [Ae, Jt];
        C(e["!id"]).forEach(function(t) {
            r[r.length] = Te("Relationship", null, e["!id"][t])
        });
        if (r.length > 2) {
            r[r.length] = "</Relationships>";
            r[1] = r[1].replace("/>", ">")
        }
        return r.join("")
    }
    function ra(e, r, t, a, n) {
        if (!n)
            n = {};
        if (!e["!id"])
            e["!id"] = {};
        if (r < 0)
            for (r = 1; e["!id"]["rId" + r]; ++r) {}
        n.Id = "rId" + r;
        n.Type = a;
        n.Target = t;
        if (n.Type == Qt.HLINK)
            n.TargetMode = "External";
        if (e["!id"][n.Id])
            throw new Error("Cannot rewrite rId " + r);
        e["!id"][n.Id] = n;
        e[("/" + n.Target).replace("//", "/")] = n;
        return r
    }
    var ta = "application/vnd.oasis.opendocument.spreadsheet";
    function aa(e, r) {
        var t = xg(e);
        var a;
        var n;
        while (a = Dg.exec(t))
            switch (a[3]) {
            case "manifest":
                break;
            case "file-entry":
                n = q(a[0], false);
                if (n.path == "/" && n.type !== ta)
                    throw new Error("This OpenDocument is not a spreadsheet");
                break;
            case "encryption-data":
            case "algorithm":
            case "start-key-generation":
            case "key-derivation":
                throw new Error("Unsupported ODS Encryption");
            default:
                if (r && r.WTF)
                    throw a
            }
    }
    function na(e, r) {
        var t = [Ae];
        t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n');
        t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');
        for (var a = 0; a < e.length; ++a)
            t.push('  <manifest:file-entry manifest:full-path="' + e[a][0] + '" manifest:media-type="' + e[a][1] + '"/>\n');
        t.push("</manifest:manifest>");
        return t.join("")
    }
    function sa(e, r, t) {
        return ['  <rdf:Description rdf:about="' + e + '">\n', '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + '"/>\n', "  </rdf:Description>\n"].join("")
    }
    function ia(e, r) {
        return ['  <rdf:Description rdf:about="' + e + '">\n', '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + '"/>\n', "  </rdf:Description>\n"].join("")
    }
    function fa(e, r) {
        var t = [Ae];
        t.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');
        for (var a = 0; a != e.length; ++a) {
            t.push(sa(e[a][0], e[a][1]));
            t.push(ia("", e[a][0]))
        }
        t.push(sa("", "Document", "pkg"));
        t.push("</rdf:RDF>");
        return t.join("")
    }
    var ca = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
    Re.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
    Qt.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    var la = function() {
        var e = new Array(ca.length);
        for (var r = 0; r < ca.length; ++r) {
            var t = ca[r];
            var a = "(?:" + t[0].substr(0, t[0].indexOf(":")) + ":)" + t[0].substr(t[0].indexOf(":") + 1);
            e[r] = new RegExp("<" + a + "[^>]*>(.*)</" + a + ">")
        }
        return e
    }();
    function oa(e) {
        var r = {};
        for (var t = 0; t < ca.length; ++t) {
            var a = ca[t]
              , n = e.match(la[t]);
            if (n != null && n.length > 0)
                r[a[1]] = n[1];
            if (a[2] === "date" && r[a[1]])
                r[a[1]] = P(r[a[1]])
        }
        return r
    }
    var ua = Te("cp:coreProperties", null, {
        "xmlns:cp": Re.CORE_PROPS,
        "xmlns:dc": Re.dc,
        "xmlns:dcterms": Re.dcterms,
        "xmlns:dcmitype": Re.dcmitype,
        "xmlns:xsi": Re.xsi
    });
    function ha(e, r, t, a, n) {
        if (n[e] != null || r == null || r === "")
            return;
        n[e] = r;
        a[a.length] = t ? Te(e, r, t) : Be(e, r)
    }
    function da(e, r) {
        var t = r || {};
        var a = [Ae, ua]
          , n = {};
        if (!e && !t.Props)
            return a.join("");
        if (e) {
            if (e.CreatedDate != null)
                ha("dcterms:created", typeof e.CreatedDate === "string" ? e.CreatedDate : we(e.CreatedDate, t.WTF), {
                    "xsi:type": "dcterms:W3CDTF"
                }, a, n);
            if (e.ModifiedDate != null)
                ha("dcterms:modified", typeof e.ModifiedDate === "string" ? e.ModifiedDate : we(e.ModifiedDate, t.WTF), {
                    "xsi:type": "dcterms:W3CDTF"
                }, a, n)
        }
        for (var s = 0; s != ca.length; ++s) {
            var i = ca[s];
            var f = t.Props && t.Props[i[1]] != null ? t.Props[i[1]] : e ? e[i[1]] : null;
            if (f === true)
                f = "1";
            else if (f === false)
                f = "0";
            else if (typeof f == "number")
                f = String(f);
            if (f != null)
                ha(i[0], f, null, a, n)
        }
        if (a.length > 2) {
            a[a.length] = "</cp:coreProperties>";
            a[1] = a[1].replace("/>", ">")
        }
        return a.join("")
    }
    var va = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
    Re.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
    Qt.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
    function ba(e, r) {
        var t = {};
        if (!r)
            r = {};
        va.forEach(function(a) {
            switch (a[2]) {
            case "string":
                r[a[1]] = (e.match(pe(a[0])) || [])[1];
                break;
            case "bool":
                r[a[1]] = (e.match(pe(a[0])) || [])[1] === "true";
                break;
            case "raw":
                var n = e.match(new RegExp("<" + a[0] + "[^>]*>(.*)</" + a[0] + ">"));
                if (n && n.length > 0)
                    t[a[1]] = n[1];
                break
            }
        });
        if (t.HeadingPairs && t.TitlesOfParts) {
            var a = Se(t.HeadingPairs);
            var n = Se(t.TitlesOfParts).map(function(e) {
                return e.v
            });
            var s = 0
              , i = 0;
            for (var f = 0; f !== a.length; f += 2) {
                i = +a[f + 1].v;
                switch (a[f].v) {
                case "Worksheets":
                case "工作表":
                case "Листы":
                case "ワークシート":
                case "גליונות עבודה":
                case "Arbeitsblätter":
                case "Çalışma Sayfaları":
                case "Feuilles de calcul":
                case "Fogli di lavoro":
                case "Folhas de cálculo":
                case "Planilhas":
                case "Werkbladen":
                    r.Worksheets = i;
                    r.SheetNames = n.slice(s, s + i);
                    break;
                case "Named Ranges":
                case "Benannte Bereiche":
                    r.NamedRanges = i;
                    r.DefinedNames = n.slice(s, s + i);
                    break;
                case "Charts":
                case "Diagramme":
                    r.Chartsheets = i;
                    r.ChartNames = n.slice(s, s + i);
                    break
                }
                s += i
            }
        }
        return r
    }
    var pa = Te("Properties", null, {
        xmlns: Re.EXT_PROPS,
        "xmlns:vt": Re.vt
    });
    function ma(e, r) {
        var t = []
          , a = {}
          , n = Te;
        if (!e)
            e = {};
        e.Application = "SheetJS";
        t[t.length] = Ae;
        t[t.length] = pa;
        va.forEach(function(r) {
            if (e[r[1]] === undefined)
                return;
            var a;
            switch (r[2]) {
            case "string":
                a = String(e[r[1]]);
                break;
            case "bool":
                a = e[r[1]] ? "true" : "false";
                break
            }
            if (a !== undefined)
                t[t.length] = n(r[0], a)
        });
        t[t.length] = n("HeadingPairs", n("vt:vector", n("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + n("vt:variant", n("vt:i4", String(e.Worksheets))), {
            size: 2,
            baseType: "variant"
        }));
        t[t.length] = n("TitlesOfParts", n("vt:vector", e.SheetNames.map(function(e) {
            return "<vt:lpstr>" + se(e) + "</vt:lpstr>"
        }).join(""), {
            size: e.Worksheets,
            baseType: "lpstr"
        }));
        if (t.length > 2) {
            t[t.length] = "</Properties>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    Re.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
    Qt.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
    var ga = /<[^>]+>[^<]*/g;
    function Ea(e, r) {
        var t = {}
          , a = "";
        var n = e.match(ga);
        if (n)
            for (var s = 0; s != n.length; ++s) {
                var i = n[s]
                  , f = q(i);
                switch (f[0]) {
                case "<?xml":
                    break;
                case "<Properties":
                    break;
                case "<property":
                    a = f.name;
                    break;
                case "</property>":
                    a = null;
                    break;
                default:
                    if (i.indexOf("<vt:") === 0) {
                        var c = i.split(">");
                        var l = c[0].substring(4)
                          , o = c[1];
                        switch (l) {
                        case "lpstr":
                        case "bstr":
                        case "lpwstr":
                            t[a] = te(o);
                            break;
                        case "bool":
                            t[a] = ue(o, "<vt:bool>");
                            break;
                        case "i1":
                        case "i2":
                        case "i4":
                        case "i8":
                        case "int":
                        case "uint":
                            t[a] = parseInt(o, 10);
                            break;
                        case "r4":
                        case "r8":
                        case "decimal":
                            t[a] = parseFloat(o);
                            break;
                        case "filetime":
                        case "date":
                            t[a] = P(o);
                            break;
                        case "cy":
                        case "error":
                            t[a] = te(o);
                            break;
                        default:
                            if (r.WTF && typeof console !== "undefined")
                                console.warn("Unexpected", i, l, c)
                        }
                    } else if (i.substr(0, 2) === "</") {} else if (r.WTF)
                        throw new Error(i)
                }
            }
        return t
    }
    var Sa = Te("Properties", null, {
        xmlns: Re.CUST_PROPS,
        "xmlns:vt": Re.vt
    });
    function ka(e, r) {
        var t = [Ae, Sa];
        if (!e)
            return t.join("");
        var a = 1;
        C(e).forEach(function r(n) {
            ++a;
            t[t.length] = Te("property", Ie(e[n]), {
                fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                pid: a,
                name: n
            })
        });
        if (t.length > 2) {
            t[t.length] = "</Properties>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    var Ba = {
        Title: "Title",
        Subject: "Subject",
        Author: "Author",
        Keywords: "Keywords",
        Comments: "Description",
        LastAuthor: "LastAuthor",
        RevNumber: "Revision",
        Application: "AppName",
        LastPrinted: "LastPrinted",
        CreatedDate: "Created",
        ModifiedDate: "LastSaved",
        Category: "Category",
        Manager: "Manager",
        Company: "Company",
        AppVersion: "Version",
        ContentStatus: "ContentStatus",
        Identifier: "Identifier",
        Language: "Language"
    };
    var Ca = w(Ba);
    function Ta(e, r, t) {
        r = Ca[r] || r;
        e[r] = t
    }
    function wa(e, r) {
        var t = [];
        C(Ba).map(function(e) {
            for (var r = 0; r < ca.length; ++r)
                if (ca[r][1] == e)
                    return ca[r];
            for (r = 0; r < va.length; ++r)
                if (va[r][1] == e)
                    return va[r];
            throw e
        }).forEach(function(a) {
            if (e[a[1]] == null)
                return;
            var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
            switch (a[2]) {
            case "date":
                n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
                break
            }
            if (typeof n == "number")
                n = String(n);
            else if (n === true || n === false) {
                n = n ? "1" : "0"
            } else if (n instanceof Date)
                n = new Date(n).toISOString().replace(/\.\d*Z/, "");
            t.push(Be(Ba[a[1]] || a[1], n))
        });
        return Te("DocumentProperties", t.join(""), {
            xmlns: xe.o
        })
    }
    function Ia(e, r, t) {
        var a = ["Worksheets", "SheetNames"];
        var n = "CustomDocumentProperties";
        var s = [];
        if (e)
            C(e).forEach(function(r) {
                if (!e.hasOwnProperty(r))
                    return;
                for (var t = 0; t < ca.length; ++t)
                    if (r == ca[t][1])
                        return;
                for (t = 0; t < va.length; ++t)
                    if (r == va[t][1])
                        return;
                for (t = 0; t < a.length; ++t)
                    if (r == a[t])
                        return;
                var n = e[r];
                var i = "string";
                if (typeof n == "number") {
                    i = "float";
                    n = String(n)
                } else if (n === true || n === false) {
                    i = "boolean";
                    n = n ? "1" : "0"
                } else
                    n = String(n);
                s.push(Te(ie(r), n, {
                    "dt:dt": i
                }))
            });
        if (r)
            C(r).forEach(function(e) {
                if (!r.hasOwnProperty(e))
                    return;
                var t = r[e];
                var a = "string";
                if (typeof t == "number") {
                    a = "float";
                    t = String(t)
                } else if (t === true || t === false) {
                    a = "boolean";
                    t = t ? "1" : "0"
                } else if (t instanceof Date) {
                    a = "dateTime.tz";
                    t = t.toISOString()
                } else
                    t = String(t);
                s.push(Te(ie(e), t, {
                    "dt:dt": a
                }))
            });
        return "<" + n + ' xmlns="' + xe.o + '">' + s.join("") + "</" + n + ">"
    }
    function Aa(e) {
        var r = e.read_shift(4)
          , t = e.read_shift(4);
        return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "")
    }
    function Ra(e, r, t) {
        var a = e.read_shift(0, "lpstr");
        if (t)
            e.l += 4 - (a.length + 1 & 3) & 3;
        return a
    }
    function xa(e, r, t) {
        var a = e.read_shift(0, "lpwstr");
        if (t)
            e.l += 4 - (a.length + 1 & 3) & 3;
        return a
    }
    function Da(e, r, t) {
        if (r === 31)
            return xa(e);
        return Ra(e, r, t)
    }
    function Oa(e, r, t) {
        return Da(e, r, t === false ? 0 : 4)
    }
    function Fa(e, r) {
        if (!r)
            throw new Error("dafuq?");
        return Da(e, r, 0)
    }
    function Pa(e) {
        var r = e.read_shift(4);
        var t = [];
        for (var a = 0; a != r; ++a)
            t[a] = e.read_shift(0, "lpstr");
        return t
    }
    function ya(e) {
        return Pa(e)
    }
    function Na(e) {
        var r = Wa(e, yt);
        var t = Wa(e, Tt);
        return [r, t]
    }
    function _a(e) {
        var r = e.read_shift(4);
        var t = [];
        for (var a = 0; a != r / 2; ++a)
            t.push(Na(e));
        return t
    }
    function Ma(e) {
        return _a(e)
    }
    function La(e, r) {
        var t = e.read_shift(4);
        var a = {};
        for (var n = 0; n != t; ++n) {
            var s = e.read_shift(4);
            var i = e.read_shift(4);
            a[s] = e.read_shift(i, r === 1200 ? "utf16le" : "utf8").replace(b, "").replace(p, "!")
        }
        if (e.l & 3)
            e.l = e.l >> 2 + 1 << 2;
        return a
    }
    function Ua(e) {
        var r = e.read_shift(4);
        var t = e.slice(e.l, e.l + r);
        if ((r & 3) > 0)
            e.l += 4 - (r & 3) & 3;
        return t
    }
    function Ha(e) {
        var r = {};
        r.Size = e.read_shift(4);
        e.l += r.Size;
        return r
    }
    function Va(e, r) {}
    function Wa(e, r, t) {
        var a = e.read_shift(2), n, s = t || {};
        e.l += 2;
        if (r !== It)
            if (a !== r && Nt.indexOf(r) === -1)
                throw new Error("Expected type " + r + " saw " + a);
        switch (r === It ? a : r) {
        case 2:
            n = e.read_shift(2, "i");
            if (!s.raw)
                e.l += 2;
            return n;
        case 3:
            n = e.read_shift(4, "i");
            return n;
        case 11:
            return e.read_shift(4) !== 0;
        case 19:
            n = e.read_shift(4);
            return n;
        case 30:
            return Ra(e, a, 4).replace(b, "");
        case 31:
            return xa(e);
        case 64:
            return Aa(e);
        case 65:
            return Ua(e);
        case 71:
            return Ha(e);
        case 80:
            return Oa(e, a, !s.raw && 4).replace(b, "");
        case 81:
            return Fa(e, a, 4).replace(b, "");
        case 4108:
            return Ma(e);
        case 4126:
            return ya(e);
        default:
            throw new Error("TypedPropertyValue unrecognized type " + r + " " + a)
        }
    }
    function Xa(e, r) {
        var t = e.l;
        var a = e.read_shift(4);
        var s = e.read_shift(4);
        var i = []
          , f = 0;
        var c = 0;
        var l = -1
          , o = {};
        for (f = 0; f != s; ++f) {
            var u = e.read_shift(4);
            var h = e.read_shift(4);
            i[f] = [u, h + t]
        }
        var d = {};
        for (f = 0; f != s; ++f) {
            if (e.l !== i[f][1]) {
                var v = true;
                if (f > 0 && r)
                    switch (r[i[f - 1][0]].t) {
                    case 2:
                        if (e.l + 2 === i[f][1]) {
                            e.l += 2;
                            v = false
                        }
                        break;
                    case 80:
                        if (e.l <= i[f][1]) {
                            e.l = i[f][1];
                            v = false
                        }
                        break;
                    case 4108:
                        if (e.l <= i[f][1]) {
                            e.l = i[f][1];
                            v = false
                        }
                        break
                    }
                if (!r && e.l <= i[f][1]) {
                    v = false;
                    e.l = i[f][1]
                }
                if (v)
                    throw new Error("Read Error: Expected address " + i[f][1] + " at " + e.l + " :" + f)
            }
            if (r) {
                var b = r[i[f][0]];
                d[b.n] = Wa(e, b.t, {
                    raw: true
                });
                if (b.p === "version")
                    d[b.n] = String(d[b.n] >> 16) + "." + String(d[b.n] & 65535);
                if (b.n == "CodePage")
                    switch (d[b.n]) {
                    case 0:
                        d[b.n] = 1252;
                    case 874:
                    case 932:
                    case 936:
                    case 949:
                    case 950:
                    case 1250:
                    case 1251:
                    case 1253:
                    case 1254:
                    case 1255:
                    case 1256:
                    case 1257:
                    case 1258:
                    case 1e4:
                    case 1200:
                    case 1201:
                    case 1252:
                    case 65e3:
                    case -536:
                    case 65001:
                    case -535:
                        n(c = d[b.n]);
                        break;
                    default:
                        throw new Error("Unsupported CodePage: " + d[b.n])
                    }
            } else {
                if (i[f][0] === 1) {
                    c = d.CodePage = Wa(e, Ct);
                    n(c);
                    if (l !== -1) {
                        var p = e.l;
                        e.l = i[l][1];
                        o = La(e, c);
                        e.l = p
                    }
                } else if (i[f][0] === 0) {
                    if (c === 0) {
                        l = f;
                        e.l = i[f + 1][1];
                        continue
                    }
                    o = La(e, c)
                } else {
                    var m = o[i[f][0]];
                    var g;
                    switch (e[e.l]) {
                    case 65:
                        e.l += 4;
                        g = Ua(e);
                        break;
                    case 30:
                        e.l += 4;
                        g = Oa(e, e[e.l - 4]);
                        break;
                    case 31:
                        e.l += 4;
                        g = Oa(e, e[e.l - 4]);
                        break;
                    case 3:
                        e.l += 4;
                        g = e.read_shift(4, "i");
                        break;
                    case 19:
                        e.l += 4;
                        g = e.read_shift(4);
                        break;
                    case 5:
                        e.l += 4;
                        g = e.read_shift(8, "f");
                        break;
                    case 11:
                        e.l += 4;
                        g = Ka(e, 4);
                        break;
                    case 64:
                        e.l += 4;
                        g = P(Aa(e));
                        break;
                    default:
                        throw new Error("unparsed value: " + e[e.l])
                    }
                    d[m] = g
                }
            }
        }
        e.l = t + a;
        return d
    }
    function Ga(e, r) {
        var t = e.content;
        or(t, 0);
        var a, n, s, i, f = 0;
        t.chk("feff", "Byte Order: ");
        var c = t.read_shift(2);
        var l = t.read_shift(4);
        t.chk(k.utils.consts.HEADER_CLSID, "CLSID: ");
        a = t.read_shift(4);
        if (a !== 1 && a !== 2)
            throw new Error("Unrecognized #Sets: " + a);
        n = t.read_shift(16);
        i = t.read_shift(4);
        if (a === 1 && i !== t.l)
            throw new Error("Length mismatch: " + i + " !== " + t.l);
        else if (a === 2) {
            s = t.read_shift(16);
            f = t.read_shift(4)
        }
        var o = Xa(t, r);
        var u = {
            SystemIdentifier: l
        };
        for (var h in o)
            u[h] = o[h];
        u.FMTID = n;
        if (a === 1)
            return u;
        if (t.l !== f)
            throw new Error("Length mismatch 2: " + t.l + " !== " + f);
        var d;
        try {
            d = Xa(t, null)
        } catch (e) {}
        for (h in d)
            u[h] = d[h];
        u.FMTID = [n, s];
        return u
    }
    function ja(e, r) {
        e.read_shift(r);
        return null
    }
    function za(e, r, t) {
        var a = []
          , n = e.l + r;
        while (e.l < n)
            a.push(t(e, n - e.l));
        if (n !== e.l)
            throw new Error("Slurp error");
        return a
    }
    function Ka(e, r) {
        return e.read_shift(r) === 1
    }
    function Ya(e) {
        return e.read_shift(2, "u")
    }
    function $a(e, r) {
        return za(e, r, Ya)
    }
    var Qa = Ka;
    function Za(e) {
        var r = e.read_shift(1)
          , t = e.read_shift(1);
        return t === 1 ? r : r === 1
    }
    function qa(e, r, a) {
        var n = e.read_shift(a && a.biff >= 12 ? 2 : 1);
        var s = 1
          , i = "sbcs-cont";
        var f = t;
        if (a && a.biff >= 8)
            t = 1200;
        if (!a || a.biff == 8) {
            var c = e.read_shift(1);
            if (c) {
                s = 2;
                i = "dbcs-cont"
            }
        } else if (a.biff == 12) {
            s = 2;
            i = "wstr"
        }
        var l = n ? e.read_shift(n, i) : "";
        t = f;
        return l
    }
    function Ja(e) {
        var r = t;
        t = 1200;
        var a = e.read_shift(2)
          , n = e.read_shift(1);
        var s = n & 1
          , i = n & 4
          , f = n & 8;
        var c = 1 + (n & 1);
        var l = 0, o;
        var u = {};
        if (f)
            l = e.read_shift(2);
        if (i)
            o = e.read_shift(4);
        var h = n & 1 ? "dbcs-cont" : "sbcs-cont";
        var d = a === 0 ? "" : e.read_shift(a, h);
        if (f)
            e.l += 4 * l;
        if (i)
            e.l += o;
        u.t = d;
        if (!f) {
            u.raw = "<t>" + u.t + "</t>";
            u.r = u.t
        }
        t = r;
        return u
    }
    function en(e, r, t) {
        var a;
        if (t) {
            if (t.biff >= 2 && t.biff <= 5)
                return e.read_shift(r, "sbcs-cont");
            if (t.biff >= 12)
                return e.read_shift(r, "dbcs-cont")
        }
        var n = e.read_shift(1);
        if (n === 0) {
            a = e.read_shift(r, "sbcs-cont")
        } else {
            a = e.read_shift(r, "dbcs-cont")
        }
        return a
    }
    function rn(e, r, t) {
        var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
        if (a === 0) {
            e.l++;
            return ""
        }
        return en(e, a, t)
    }
    function tn(e, r, t) {
        if (t.biff > 5)
            return rn(e, r, t);
        var a = e.read_shift(1);
        if (a === 0) {
            e.l++;
            return ""
        }
        return e.read_shift(a, "sbcs-cont")
    }
    var an = ur;
    var nn = function(e) {
        var r = e.read_shift(4)
          , t = e.l;
        var a = false;
        if (r > 24) {
            e.l += r - 24;
            if (e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763")
                a = true;
            e.l = t
        }
        var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(b, "");
        if (a)
            e.l += 24;
        return n
    };
    var sn = function(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(4);
        var n = e.read_shift(a, "cstr");
        var s = e.read_shift(2);
        var i = e.read_shift(2);
        var f = e.read_shift(4);
        if (f === 0)
            return n.replace(/\\/g, "/");
        var c = e.read_shift(4);
        var l = e.read_shift(2);
        var o = e.read_shift(c >> 1, "utf16le").replace(b, "");
        return o
    };
    var fn = function(e, r) {
        var t = e.read_shift(16);
        r -= 16;
        switch (t) {
        case "e0c9ea79f9bace118c8200aa004ba90b":
            return nn(e, r);
        case "0303000000000000c000000000000046":
            return sn(e, r);
        default:
            throw new Error("Unsupported Moniker " + t)
        }
    };
    var cn = function(e, r) {
        var t = e.read_shift(4);
        var a = e.read_shift(t, "utf16le").replace(b, "");
        return a
    };
    var ln = function(e, r) {
        var t = e.l + r;
        var a = e.read_shift(4);
        if (a !== 2)
            throw new Error("Unrecognized streamVersion: " + a);
        var n = e.read_shift(2);
        e.l += 2;
        var s, i, f, c, l, o, u;
        if (n & 16)
            s = cn(e, t - e.l);
        if (n & 128)
            i = cn(e, t - e.l);
        if ((n & 257) === 257)
            f = cn(e, t - e.l);
        if ((n & 257) === 1)
            c = fn(e, t - e.l);
        if (n & 8)
            l = cn(e, t - e.l);
        if (n & 32)
            o = e.read_shift(16);
        if (n & 64)
            u = Aa(e, 8);
        e.l = t;
        var h = i || f || c;
        if (l)
            h += "#" + l;
        return {
            Target: h
        }
    };
    function on(e, r) {
        var t = e.read_shift(1)
          , a = e.read_shift(1)
          , n = e.read_shift(1)
          , s = e.read_shift(1);
        return [t, a, n, s]
    }
    function un(e, r) {
        var t = on(e, r);
        t[3] = 0;
        return t
    }
    function hn(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        var n = e.read_shift(2);
        return {
            r: t,
            c: a,
            ixfe: n
        }
    }
    function dn(e) {
        var r = e.read_shift(2);
        var t = e.read_shift(2);
        e.l += 8;
        return {
            type: r,
            flags: t
        }
    }
    function vn(e, r, t) {
        return r === 0 ? "" : tn(e, r, t)
    }
    var bn = Ya;
    function pn(e, r) {
        var t = e.read_shift(2)
          , a = e.read_shift(2, "i")
          , n = e.read_shift(2, "i");
        return [t, a, n]
    }
    function mn(e, r) {
        var t = e.read_shift(2);
        var a = lt(e);
        return [t, a]
    }
    function gn(e, r, t) {
        e.l += 4;
        r -= 4;
        var a = e.l + r;
        var n = qa(e, r, t);
        var s = e.read_shift(2);
        a -= e.l;
        if (s !== a)
            throw new Error("Malformed AddinUdf: padding = " + a + " != " + s);
        e.l += s;
        return n
    }
    function En(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        var n = e.read_shift(2);
        var s = e.read_shift(2);
        return {
            s: {
                c: n,
                r: t
            },
            e: {
                c: s,
                r: a
            }
        }
    }
    function Sn(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        var n = e.read_shift(1);
        var s = e.read_shift(1);
        return {
            s: {
                c: n,
                r: t
            },
            e: {
                c: s,
                r: a
            }
        }
    }
    var kn = Sn;
    function Bn(e, r) {
        e.l += 4;
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        var n = e.read_shift(2);
        e.l += 12;
        return [a, t, n]
    }
    function Cn(e, r) {
        var t = {};
        e.l += 4;
        e.l += 16;
        t.fSharedNote = e.read_shift(2);
        e.l += 4;
        return t
    }
    function Tn(e, r) {
        var t = {};
        e.l += 4;
        e.cf = e.read_shift(2);
        return t
    }
    function wn(e, r) {
        e.l += 2;
        e.l += e.read_shift(2)
    }
    var In = {
        0: wn,
        4: wn,
        5: wn,
        6: wn,
        7: Tn,
        8: wn,
        9: wn,
        10: wn,
        11: wn,
        12: wn,
        13: Cn,
        14: wn,
        15: wn,
        16: wn,
        17: wn,
        18: wn,
        19: wn,
        20: wn,
        21: Bn
    };
    function An(e, r, t) {
        var a = e.l + r;
        var n = [];
        while (e.l < a) {
            var s = e.read_shift(2);
            e.l -= 2;
            try {
                n.push(In[s](e, a - e.l))
            } catch (r) {
                e.l = a;
                return n
            }
        }
        if (e.l != a)
            e.l = a;
        return n
    }
    var Rn = Ya;
    function xn(e, r) {
        var t = {
            BIFFVer: 0,
            dt: 0
        };
        t.BIFFVer = e.read_shift(2);
        r -= 2;
        if (r >= 2) {
            t.dt = e.read_shift(2);
            e.l -= 2
        }
        switch (t.BIFFVer) {
        case 1536:
        case 1280:
        case 2:
        case 7:
            break;
        default:
            if (r > 6)
                throw new Error("Unexpected BIFF Ver " + t.BIFFVer)
        }
        e.read_shift(r);
        return t
    }
    function Dn(e, r) {
        if (r === 0)
            return 1200;
        var t;
        if ((t = e.read_shift(2)) !== 1200) {}
        return 1200
    }
    function On(e, r, t) {
        if (t.enc) {
            e.l += r;
            return ""
        }
        var a = e.l;
        var n = rn(e, 0, t);
        e.read_shift(r + a - e.l);
        return n
    }
    function Fn(e, r, t) {
        var a = e.read_shift(4);
        var n = e.read_shift(1) & 3;
        var s = e.read_shift(1);
        switch (s) {
        case 0:
            s = "Worksheet";
            break;
        case 1:
            s = "Macrosheet";
            break;
        case 2:
            s = "Chartsheet";
            break;
        case 6:
            s = "VBAModule";
            break
        }
        var i = qa(e, 0, t);
        if (i.length === 0)
            i = "Sheet1";
        return {
            pos: a,
            hs: n,
            dt: s,
            name: i
        }
    }
    function Pn(e, r) {
        var t = e.read_shift(4);
        var a = e.read_shift(4);
        var n = [];
        for (var s = 0; s != a; ++s) {
            n.push(Ja(e))
        }
        n.Count = t;
        n.Unique = a;
        return n
    }
    function yn(e, r) {
        var t = {};
        t.dsst = e.read_shift(2);
        e.l += r - 2;
        return t
    }
    function Nn(e, r) {
        var t = {};
        t.r = e.read_shift(2);
        t.c = e.read_shift(2);
        t.cnt = e.read_shift(2) - t.c;
        var a = e.read_shift(2);
        e.l += 4;
        var n = e.read_shift(1);
        e.l += 3;
        if (n & 32)
            t.hidden = true;
        if (n & 64)
            t.hpt = a / 20;
        return t
    }
    function _n(e, r) {
        var t = dn(e);
        if (t.type != 2211)
            throw new Error("Invalid Future Record " + t.type);
        var a = e.read_shift(4);
        return a !== 0
    }
    var Mn = ja;
    function Ln(e, r) {
        e.read_shift(2);
        return e.read_shift(4)
    }
    function Un(e, r, t) {
        var a = 0;
        if (!(t && t.biff == 2)) {
            a = e.read_shift(2)
        }
        var n = e.read_shift(2);
        if (t && t.biff == 2) {
            a = 1 - (n >> 15);
            n &= 32767
        }
        var s = {
            Unsynced: a & 1,
            DyZero: (a & 2) >> 1,
            ExAsc: (a & 4) >> 2,
            ExDsc: (a & 8) >> 3
        };
        return [s, n]
    }
    function Hn(e, r) {
        var t = e.read_shift(2)
          , a = e.read_shift(2)
          , n = e.read_shift(2)
          , s = e.read_shift(2);
        var i = e.read_shift(2)
          , f = e.read_shift(2)
          , c = e.read_shift(2);
        var l = e.read_shift(2)
          , o = e.read_shift(2);
        return {
            Pos: [t, a],
            Dim: [n, s],
            Flags: i,
            CurTab: f,
            FirstTab: c,
            Selected: l,
            TabRatio: o
        }
    }
    function Vn(e, r, t) {
        var a = {
            dyHeight: e.read_shift(2),
            fl: e.read_shift(2)
        };
        switch (t && t.biff || 8) {
        case 2:
            break;
        case 3:
        case 4:
            e.l += 2;
            break;
        default:
            e.l += 10;
            break
        }
        a.name = qa(e, 0, t);
        return a
    }
    function Wn(e, r) {
        var t = hn(e);
        t.isst = e.read_shift(4);
        return t
    }
    function Xn(e, r, t) {
        var a = e.l + r;
        var n = hn(e, 6);
        if (t.biff == 2)
            e.l++;
        var s = rn(e, a - e.l, t);
        n.val = s;
        return n
    }
    function Gn(e, r, t) {
        var a = e.read_shift(2);
        var n = tn(e, 0, t);
        return [a, n]
    }
    var jn = tn;
    function zn(e, r, t) {
        var a = e.l + r;
        var n = t.biff == 8 || !t.biff ? 4 : 2;
        var s = e.read_shift(n)
          , i = e.read_shift(n);
        var f = e.read_shift(2)
          , c = e.read_shift(2);
        e.l = a;
        return {
            s: {
                r: s,
                c: f
            },
            e: {
                r: i,
                c: c
            }
        }
    }
    function Kn(e, r) {
        var t = e.read_shift(2)
          , a = e.read_shift(2);
        var n = mn(e);
        return {
            r: t,
            c: a,
            ixfe: n[0],
            rknum: n[1]
        }
    }
    function Yn(e, r) {
        var t = e.l + r - 2;
        var a = e.read_shift(2)
          , n = e.read_shift(2);
        var s = [];
        while (e.l < t)
            s.push(mn(e));
        if (e.l !== t)
            throw new Error("MulRK read error");
        var i = e.read_shift(2);
        if (s.length != i - n + 1)
            throw new Error("MulRK length mismatch");
        return {
            r: a,
            c: n,
            C: i,
            rkrec: s
        }
    }
    function $n(e, r) {
        var t = e.l + r - 2;
        var a = e.read_shift(2)
          , n = e.read_shift(2);
        var s = [];
        while (e.l < t)
            s.push(e.read_shift(2));
        if (e.l !== t)
            throw new Error("MulBlank read error");
        var i = e.read_shift(2);
        if (s.length != i - n + 1)
            throw new Error("MulBlank length mismatch");
        return {
            r: a,
            c: n,
            C: i,
            ixfe: s
        }
    }
    function Qn(e, r, t, a) {
        var n = {};
        var s = e.read_shift(4)
          , i = e.read_shift(4);
        var f = e.read_shift(4)
          , c = e.read_shift(2);
        n.patternType = Ht[f >> 26];
        if (!a.cellStyles)
            return n;
        n.alc = s & 7;
        n.fWrap = s >> 3 & 1;
        n.alcV = s >> 4 & 7;
        n.fJustLast = s >> 7 & 1;
        n.trot = s >> 8 & 255;
        n.cIndent = s >> 16 & 15;
        n.fShrinkToFit = s >> 20 & 1;
        n.iReadOrder = s >> 22 & 2;
        n.fAtrNum = s >> 26 & 1;
        n.fAtrFnt = s >> 27 & 1;
        n.fAtrAlc = s >> 28 & 1;
        n.fAtrBdr = s >> 29 & 1;
        n.fAtrPat = s >> 30 & 1;
        n.fAtrProt = s >> 31 & 1;
        n.dgLeft = i & 15;
        n.dgRight = i >> 4 & 15;
        n.dgTop = i >> 8 & 15;
        n.dgBottom = i >> 12 & 15;
        n.icvLeft = i >> 16 & 127;
        n.icvRight = i >> 23 & 127;
        n.grbitDiag = i >> 30 & 3;
        n.icvTop = f & 127;
        n.icvBottom = f >> 7 & 127;
        n.icvDiag = f >> 14 & 127;
        n.dgDiag = f >> 21 & 15;
        n.icvFore = c & 127;
        n.icvBack = c >> 7 & 127;
        n.fsxButton = c >> 14 & 1;
        return n
    }
    function Zn(e, r, t) {
        return Qn(e, r, 0, t)
    }
    function qn(e, r, t) {
        return Qn(e, r, 1, t)
    }
    function Jn(e, r, t) {
        var a = {};
        a.ifnt = e.read_shift(2);
        a.ifmt = e.read_shift(2);
        a.flags = e.read_shift(2);
        a.fStyle = a.flags >> 2 & 1;
        r -= 6;
        a.data = Qn(e, r, a.fStyle, t);
        return a
    }
    function es(e, r) {
        e.l += 4;
        var t = [e.read_shift(2), e.read_shift(2)];
        if (t[0] !== 0)
            t[0]--;
        if (t[1] !== 0)
            t[1]--;
        if (t[0] > 7 || t[1] > 7)
            throw new Error("Bad Gutters: " + t.join("|"));
        return t
    }
    function rs(e, r, t) {
        var a = hn(e, 6);
        if (t.biff == 2)
            ++e.l;
        var n = Za(e, 2);
        a.val = n;
        a.t = n === true || n === false ? "b" : "e";
        return a
    }
    function ts(e, r) {
        var t = hn(e, 6);
        var a = bt(e, 8);
        t.val = a;
        return t
    }
    var as = vn;
    function ns(e, r, t) {
        var a = e.l + r;
        var n = e.read_shift(2);
        var s = e.read_shift(2);
        var i;
        if (s >= 1 && s <= 255)
            i = en(e, s);
        var f = e.read_shift(a - e.l);
        t.sbcch = s;
        return [s, n, i, f]
    }
    function ss(e, r, t) {
        var a = e.read_shift(2);
        var n;
        var s = {
            fBuiltIn: a & 1,
            fWantAdvise: a >>> 1 & 1,
            fWantPict: a >>> 2 & 1,
            fOle: a >>> 3 & 1,
            fOleLink: a >>> 4 & 1,
            cf: a >>> 5 & 1023,
            fIcon: a >>> 15 & 1
        };
        if (t.sbcch === 14849)
            n = gn(e, r - 2, t);
        s.body = n || e.read_shift(r - 2);
        if (typeof n === "string")
            s.Name = n;
        return s
    }
    function is(e, r, t) {
        var a = e.l + r;
        var n = e.read_shift(2);
        var s = e.read_shift(1);
        var i = e.read_shift(1);
        var f = e.read_shift(t && t.biff == 2 ? 1 : 2);
        var c = 0;
        if (!t || t.biff >= 5) {
            e.l += 2;
            c = e.read_shift(2);
            e.l += 4
        }
        var l = en(e, i, t);
        var o = a - e.l;
        if (t && t.biff == 2)
            --o;
        var u = a == e.l || f == 0 ? [] : Rb(e, o, t, f);
        return {
            chKey: s,
            Name: l,
            itab: c,
            rgce: u
        }
    }
    function fs(e, r, t) {
        if (t.biff < 8)
            return qa(e, r, t);
        var a = []
          , n = e.l + r
          , s = e.read_shift(2);
        while (s-- !== 0)
            a.push(pn(e, 6));
        var i = [];
        return a
    }
    function cs(e, r, t) {
        if (t.biff < 8) {
            e.l += r;
            return
        }
        var a = e.read_shift(2);
        var n = e.read_shift(2);
        var s = en(e, a, t);
        var i = en(e, n, t);
        return [s, i]
    }
    function ls(e, r, t) {
        var a = Sn(e, 6);
        e.l++;
        var n = e.read_shift(1);
        r -= 8;
        return [Db(e, r, t), n]
    }
    function os(e, r, t) {
        var a = kn(e, 6);
        switch (t.biff) {
        case 2:
            e.l++;
            r -= 7;
            break;
        case 3:
        case 4:
            e.l += 2;
            r -= 8;
            break;
        default:
            e.l += 6;
            r -= 12
        }
        return [a, Ob(e, r, t, a)]
    }
    function us(e, r) {
        var t = e.read_shift(4) !== 0;
        var a = e.read_shift(4) !== 0;
        var n = e.read_shift(4);
        return [t, a, n]
    }
    function hs(e, r, t) {
        if (t.biff < 8)
            return;
        var a = e.read_shift(2)
          , n = e.read_shift(2);
        var s = e.read_shift(2)
          , i = e.read_shift(2);
        var f = tn(e, 0, t);
        if (t.biff < 8)
            e.read_shift(1);
        return [{
            r: a,
            c: n
        }, f, i, s]
    }
    function ds(e, r, t) {
        return hs(e, r, t)
    }
    function vs(e, r) {
        var t = [];
        var a = e.read_shift(2);
        while (a--)
            t.push(En(e, r));
        return t
    }
    function bs(e, r, t) {
        if (t && t.biff < 8)
            return ms(e, r, t);
        var a = Bn(e, 22);
        var n = An(e, r - 22, a[1]);
        return {
            cmo: a,
            ft: n
        }
    }
    var ps = [];
    ps[8] = function(e, r, t) {
        var a = e.l + r;
        e.l += 10;
        var n = e.read_shift(2);
        e.l += 4;
        var s = e.read_shift(2);
        e.l += 2;
        var i = e.read_shift(2);
        e.l += 4;
        var f = e.read_shift(1);
        e.l += f;
        e.l = a;
        return {
            fmt: n
        }
    }
    ;
    function ms(e, r, t) {
        var a = e.read_shift(4);
        var n = e.read_shift(2);
        var s = e.read_shift(2);
        var i = e.read_shift(2);
        var f = e.read_shift(2);
        var c = e.read_shift(2);
        var l = e.read_shift(2);
        var o = e.read_shift(2);
        var u = e.read_shift(2);
        var h = e.read_shift(2);
        var d = e.read_shift(2);
        var v = e.read_shift(2);
        var b = e.read_shift(2);
        e.l += 6;
        r -= 36;
        var p = [];
        p.push((ps[n] || ur)(e, r, t));
        return {
            cmo: [s, n, i],
            ft: p
        }
    }
    function gs(e, r, t) {
        var a = e.l;
        var n = "";
        try {
            e.l += 4;
            var s = (t.lastobj || {
                cmo: [0, 0]
            }).cmo[1];
            var i;
            if ([0, 5, 7, 11, 12, 14].indexOf(s) == -1)
                e.l += 6;
            else
                i = an(e, 6, t);
            var f = e.read_shift(2);
            var c = e.read_shift(2);
            var l = Rn(e, 2);
            var o = e.read_shift(2);
            e.l += o;
            for (var u = 1; u < e.lens.length - 1; ++u) {
                if (e.l - a != e.lens[u])
                    throw new Error("TxO: bad continue record");
                var h = e[e.l];
                var d = en(e, e.lens[u + 1] - e.lens[u] - 1);
                n += d;
                if (n.length >= (h ? f : 2 * f))
                    break
            }
            if (n.length !== f && n.length !== f * 2) {
                throw new Error("cchText: " + f + " != " + n.length)
            }
            e.l = a + r;
            return {
                t: n
            }
        } catch (t) {
            e.l = a + r;
            return {
                t: n
            }
        }
    }
    var Es = function(e, r) {
        var t = En(e, 8);
        e.l += 16;
        var a = ln(e, r - 24);
        return [t, a]
    };
    var Ss = function(e, r) {
        var t = e.l + r;
        e.read_shift(2);
        var a = En(e, 8);
        var n = e.read_shift((r - 10) / 2, "dbcs-cont");
        n = n.replace(b, "");
        return [a, n]
    };
    function ks(e, r) {
        var t = [], a;
        a = e.read_shift(2);
        t[0] = Ut[a] || a;
        a = e.read_shift(2);
        t[1] = Ut[a] || a;
        return t
    }
    function Bs(e, r) {
        var t = e.read_shift(2);
        var a = [];
        while (t-- > 0)
            a.push(un(e, 8));
        return a
    }
    function Cs(e, r) {
        var t = e.read_shift(2);
        var a = [];
        while (t-- > 0)
            a.push(un(e, 8));
        return a
    }
    function Ts(e, r) {
        e.l += 2;
        var t = {
            cxfs: 0,
            crc: 0
        };
        t.cxfs = e.read_shift(2);
        t.crc = e.read_shift(4);
        return t
    }
    function ws(e, r, t) {
        if (!t.cellStyles)
            return ur(e, r);
        var a = t && t.biff >= 12 ? 4 : 2;
        var n = e.read_shift(a);
        var s = e.read_shift(a);
        var i = e.read_shift(a);
        var f = e.read_shift(a);
        var c = e.read_shift(2);
        if (a == 2)
            e.l += 2;
        return {
            s: n,
            e: s,
            w: i,
            ixfe: f,
            flags: c
        }
    }
    function Is(e, r, t) {
        var a = {};
        e.l += 16;
        a.header = bt(e, 8);
        a.footer = bt(e, 8);
        e.l += 2;
        return a
    }
    function As(e, r, t) {
        var a = {
            area: false
        };
        if (t.biff != 5) {
            e.l += r;
            return a
        }
        var n = e.read_shift(1);
        e.l += 3;
        if (n & 16)
            a.area = true;
        return a
    }
    var Rs = ur;
    var xs = ur;
    var Ds = ur;
    var Os = Ka;
    var Fs = hn;
    var Ps = bt;
    var ys = Ya;
    var Ns = Ya;
    var _s = bt;
    var Ms = Ka;
    var Ls = Ya;
    var Us = Ka;
    var Hs = ja;
    var Vs = Ka;
    var Ws = Ya;
    var Xs = Ka;
    var Gs = Ka;
    var js = Ya;
    var zs = ja;
    var Ks = ja;
    var Ys = ja;
    var $s = ja;
    var Qs = ja;
    var Zs = Ya;
    var qs = as;
    var Js = Ya;
    var ei = Ka;
    var ri = as;
    var ti = bn;
    var ai = ja;
    var ni = bt;
    var si = ja;
    var ii = Ka;
    var fi = Ya;
    var ci = Ka;
    var li = Ka;
    var oi = Ya;
    var ui = Ka;
    var hi = Ya;
    var di = Ka;
    var vi = Ka;
    var bi = bt;
    var pi = $a;
    var mi = Ka;
    var gi = $a;
    var Ei = rn;
    var Si = Ka;
    var ki = bt;
    var Bi = Ka;
    var Ci = Ka;
    var Ti = Ka;
    var wi = ur;
    var Ii = ur;
    var Ai = ur;
    var Ri = ur;
    var xi = ur;
    var Di = ur;
    var Oi = ur;
    var Fi = ur;
    var Pi = ur;
    var yi = ur;
    var Ni = ur;
    var _i = ur;
    var Mi = ur;
    var Li = ur;
    var Ui = ur;
    var Hi = ur;
    var Vi = ur;
    var Wi = ur;
    var Xi = ur;
    var Gi = ur;
    var ji = ur;
    var zi = ur;
    var Ki = ur;
    var Yi = ur;
    var $i = ur;
    var Qi = ur;
    var Zi = ur;
    var qi = ur;
    var Ji = ur;
    var ef = ur;
    var rf = ur;
    var tf = ur;
    var af = ur;
    var nf = ur;
    var sf = ur;
    var ff = ur;
    var cf = ur;
    var lf = ur;
    var of = ur;
    var uf = ur;
    var hf = ur;
    var df = ur;
    var vf = ur;
    var bf = ur;
    var pf = ur;
    var mf = ur;
    var gf = ur;
    var Ef = ur;
    var Sf = ur;
    var kf = ur;
    var Bf = ur;
    var Cf = ur;
    var Tf = ur;
    var wf = ur;
    var If = ur;
    var Af = ur;
    var Rf = ur;
    var xf = ur;
    var Df = ur;
    var Of = ur;
    var Ff = ur;
    var Pf = ur;
    var yf = ur;
    var Nf = ur;
    var _f = ur;
    var Mf = ur;
    var Lf = ur;
    var Uf = ur;
    var Hf = ur;
    var Vf = ur;
    var Wf = ur;
    var Xf = ur;
    var Gf = ur;
    var jf = ur;
    var zf = ur;
    var Kf = ur;
    var Yf = ur;
    var $f = ur;
    var Qf = ur;
    var Zf = ur;
    var qf = ur;
    var Jf = ur;
    var ec = ur;
    var rc = ur;
    var tc = ur;
    var ac = ur;
    var nc = ur;
    var sc = ur;
    var ic = ur;
    var fc = ur;
    var cc = ur;
    var lc = ur;
    var oc = ur;
    var uc = ur;
    var hc = ur;
    var dc = ur;
    var vc = ur;
    var bc = ur;
    var pc = ur;
    var mc = ur;
    var gc = ur;
    var Ec = ur;
    var Sc = ur;
    var kc = ur;
    var Bc = ur;
    var Cc = ur;
    var Tc = ur;
    var wc = ur;
    var Ic = ur;
    var Ac = ur;
    var Rc = rn;
    var xc = ur;
    var Dc = ur;
    var Oc = ur;
    var Fc = ur;
    var Pc = ur;
    var yc = ur;
    var Nc = ur;
    var _c = ur;
    var Mc = ur;
    var Lc = ur;
    var Uc = ur;
    var Hc = ur;
    var Vc = ur;
    var Wc = ur;
    var Xc = ur;
    var Gc = ur;
    var jc = ur;
    var zc = ur;
    var Kc = ur;
    var Yc = ur;
    var $c = ur;
    var Qc = ur;
    var Zc = ur;
    var qc = ur;
    var Jc = ur;
    var el = ur;
    var rl = ur;
    var tl = ur;
    var al = ur;
    var nl = ur;
    var sl = ur;
    var il = ur;
    var fl = ur;
    var cl = ur;
    var ll = ur;
    var ol = ur;
    var ul = ur;
    var hl = ur;
    var dl = ur;
    var vl = ur;
    var bl = ur;
    var pl = ur;
    var ml = ur;
    var gl = ur;
    var El = ur;
    var Sl = ur;
    var kl = ur;
    var Bl = ur;
    var Cl = ur;
    var Tl = ur;
    var wl = ur;
    var Il = ur;
    var Al = ur;
    var Rl = ur;
    var xl = ur;
    var Dl = ur;
    var Ol = ur;
    var Fl = ur;
    var Pl = ur;
    var yl = ur;
    var Nl = ur;
    var _l = ur;
    var Ml = ur;
    var Ll = ur;
    var Ul = ur;
    var Hl = ur;
    var Vl = ur;
    var Wl = ur;
    var Xl = ur;
    var Gl = ur;
    var jl = ur;
    var zl = ur;
    var Kl = ur;
    var Yl = ur;
    var $l = ur;
    var Ql = ur;
    var Zl = ur;
    var ql = ur;
    var Jl = ur;
    var eo = ur;
    var ro = ur;
    var to = ur;
    var ao = ur;
    var no = ur;
    var so = ur;
    var io = ur;
    var fo = ur;
    var co = ur;
    var lo = ur;
    var oo = ur;
    var uo = ur;
    var ho = ur;
    var vo = ur;
    var bo = ur;
    var po = ur;
    var mo = ur;
    var go = ur;
    var Eo = ur;
    var So = ur;
    var ko = ur;
    var Bo = ur;
    var Co = ur;
    var To = ur;
    var wo = ur;
    var Io = ur;
    var Ao = ur;
    var Ro = ur;
    var xo = ur;
    var Do = ur;
    var Oo = ur;
    var Fo = ur;
    var Po = ur;
    var yo = ur;
    var No = ur;
    var _o = ur;
    var Mo = ur;
    var Lo = ur;
    var Uo = ur;
    var Ho = ur;
    var Vo = ur;
    var Wo = ur;
    var Xo = ur;
    var Go = ur;
    var jo = ur;
    var zo = ur;
    var Ko = ur;
    var Yo = ur;
    var $o = ur;
    var Qo = ur;
    var Zo = ur;
    var qo = ur;
    var Jo = ur;
    var eu = ur;
    var ru = ur;
    var tu = ur;
    var au = ur;
    var nu = ur;
    var su = ur;
    var iu = ur;
    var fu = ur;
    var cu = ur;
    var lu = ur;
    function ou(e, r, t) {
        var a = e.l + r;
        var n = e.read_shift(2);
        var s = e.read_shift(2);
        var i = e.read_shift(4);
        var f = {
            fmt: n,
            env: s,
            len: i,
            data: e.slice(e.l, e.l + i)
        };
        e.l += i;
        return f
    }
    function uu(e) {
        var r = e.read_shift(1);
        return e.read_shift(r, "sbcs-cont")
    }
    function hu(e, r, t) {
        var a = hn(e, 6);
        ++e.l;
        var n = tn(e, r - 7, t);
        a.t = "str";
        a.val = n;
        return a
    }
    function du(e, r, t) {
        var a = hn(e, 6);
        ++e.l;
        var n = bt(e, 8);
        a.t = "n";
        a.val = n;
        return a
    }
    function vu(e, r) {
        var t = hn(e, 6);
        ++e.l;
        var a = e.read_shift(2);
        t.t = "n";
        t.val = a;
        return t
    }
    function bu(e, r) {
        var t = e.read_shift(1);
        if (t === 0) {
            e.l++;
            return ""
        }
        return e.read_shift(t, "sbcs-cont")
    }
    function pu(e, r) {
        e.l += 6;
        e.l += 2;
        e.l += 1;
        e.l += 3;
        e.l += 1;
        e.l += r - 13
    }
    function mu(e, r, t) {
        var a = e.l + r;
        var n = hn(e, 6);
        var s = e.read_shift(2);
        var i = en(e, s, t);
        e.l = a;
        n.t = "str";
        n.val = i;
        return n
    }
    /* from js-harb (C) 2014-present  SheetJS */
    var gu = function() {
        var e = {
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127,
            8: 865,
            9: 437,
            10: 850,
            11: 437,
            13: 437,
            14: 850,
            15: 437,
            16: 850,
            17: 437,
            18: 850,
            19: 932,
            20: 850,
            21: 437,
            22: 850,
            23: 865,
            24: 437,
            25: 437,
            26: 850,
            27: 437,
            28: 863,
            29: 850,
            31: 852,
            34: 852,
            35: 852,
            36: 860,
            37: 850,
            38: 866,
            55: 850,
            64: 852,
            77: 936,
            78: 949,
            79: 950,
            80: 874,
            87: 1252,
            88: 1252,
            89: 1252,
            255: 16969
        };
        function r(r, t) {
            var a = [];
            var n = h(1);
            switch (t.type) {
            case "base64":
                n = d(o.decode(r));
                break;
            case "binary":
                n = d(r);
                break;
            case "buffer":
            case "array":
                n = r;
                break
            }
            or(n, 0);
            var s = n.read_shift(1);
            var i = false;
            var f = false;
            switch (s) {
            case 2:
            case 3:
                break;
            case 48:
                f = true;
                i = true;
                break;
            case 49:
                f = true;
                break;
            case 131:
                i = true;
                break;
            case 139:
                i = true;
                break;
            case 245:
                i = true;
                break;
            default:
                throw new Error("DBF Unsupported Version: " + s.toString(16))
            }
            var c = new Date
              , l = 0
              , u = 0;
            if (s == 2)
                l = n.read_shift(2);
            c = new Date(n.read_shift(1) + 1900,n.read_shift(1) - 1,n.read_shift(1));
            if (s != 2)
                l = n.read_shift(4);
            if (s != 2)
                u = n.read_shift(2);
            var v = n.read_shift(2);
            var b = 0
              , p = 1252;
            if (s != 2) {
                n.l += 16;
                b = n.read_shift(1);
                if (n[n.l] !== 0)
                    p = e[n[n.l]];
                n.l += 1;
                n.l += 2
            }
            var m = []
              , g = {};
            var E = u - 10 - (f ? 264 : 0);
            while (s == 2 ? n.l < n.length && n[n.l] != 13 : n.l < E) {
                g = {};
                g.name = cptable.utils.decode(p, n.slice(n.l, n.l + 10)).replace(/[\u0000\r\n].*$/g, "");
                n.l += 11;
                g.type = String.fromCharCode(n.read_shift(1));
                if (s != 2)
                    g.offset = n.read_shift(4);
                g.len = n.read_shift(1);
                if (s == 2)
                    g.offset = n.read_shift(2);
                g.dec = n.read_shift(1);
                if (g.name.length)
                    m.push(g);
                if (s != 2)
                    n.l += 14;
                switch (g.type) {
                case "C":
                    break;
                case "D":
                    break;
                case "F":
                    break;
                case "I":
                    break;
                case "L":
                    break;
                case "M":
                    break;
                case "N":
                    break;
                case "T":
                    break;
                case "Y":
                    break;
                case "0":
                    break;
                case "+":
                    break;
                case "@":
                    break;
                default:
                    throw new Error("Unknown Field Type: " + g.type)
                }
            }
            if (n[n.l] !== 13)
                n.l = u - 1;
            else if (s == 2)
                n.l = 521;
            if (s != 2) {
                if (n.read_shift(1) !== 13)
                    throw new Error("DBF Terminator not found " + n.l + " " + n[n.l]);
                n.l = u
            }
            var S = 0
              , k = 0;
            a[0] = [];
            for (k = 0; k != m.length; ++k)
                a[0][k] = m[k].name;
            while (l-- > 0) {
                if (n[n.l] === 42) {
                    n.l += v;
                    continue
                }
                ++n.l;
                a[++S] = [];
                k = 0;
                for (k = 0; k != m.length; ++k) {
                    var B = n.slice(n.l, n.l + m[k].len);
                    n.l += m[k].len;
                    or(B, 0);
                    var C = cptable.utils.decode(p, B);
                    switch (m[k].type) {
                    case "C":
                        a[S][k] = cptable.utils.decode(p, B);
                        a[S][k] = a[S][k].trim();
                        break;
                    case "D":
                        if (C.length === 8)
                            a[S][k] = new Date(+C.substr(0, 4),+C.substr(4, 2) - 1,+C.substr(6, 2));
                        else
                            a[S][k] = C;
                        break;
                    case "F":
                        a[S][k] = parseFloat(C.trim());
                        break;
                    case "I":
                        a[S][k] = B.read_shift(4, "i");
                        break;
                    case "L":
                        switch (C.toUpperCase()) {
                        case "Y":
                        case "T":
                            a[S][k] = true;
                            break;
                        case "N":
                        case "F":
                            a[S][k] = false;
                            break;
                        case " ":
                        case "?":
                            a[S][k] = false;
                            break;
                        default:
                            throw new Error("DBF Unrecognized L:|" + C + "|")
                        }
                        break;
                    case "M":
                        if (!i)
                            throw new Error("DBF Unexpected MEMO for type " + s.toString(16));
                        a[S][k] = "##MEMO##" + B.read_shift(4);
                        break;
                    case "N":
                        a[S][k] = +C.replace(/\u0000/g, "").trim();
                        break;
                    case "T":
                        var T = B.read_shift(4)
                          , w = B.read_shift(4);
                        throw new Error(T + " | " + w);
                    case "Y":
                        a[S][k] = B.read(4, "i") / 1e4;
                        break;
                    case "0":
                        if (m[k].name === "_NullFlags")
                            break;
                    default:
                        throw new Error("DBF Unsupported data type " + m[k].type)
                    }
                }
            }
            if (s != 2)
                if (n.l < n.length && n[n.l++] != 26)
                    throw new Error("DBF EOF Marker missing " + (n.l - 1) + " of " + n.length + " " + n[n.l - 1].toString(16));
            return a
        }
        function t(e, t) {
            var a = t || {};
            if (!a.dateNF)
                a.dateNF = "yyyymmdd";
            return Xr(r(e, a), a)
        }
        function a(e, r) {
            try {
                return Wr(t(e, r), r)
            } catch (e) {
                if (r && r.WTF)
                    throw e
            }
            return {
                SheetNames: [],
                Sheets: {}
            }
        }
        return {
            to_workbook: a,
            to_sheet: t
        }
    }();
    var Eu = function() {
        function e(e, t) {
            switch (t.type) {
            case "base64":
                return r(o.decode(e), t);
            case "binary":
                return r(e, t);
            case "buffer":
                return r(e.toString("binary"), t);
            case "array":
                return r(y(e), t)
            }
            throw new Error("Unrecognized type " + t.type)
        }
        function r(e, r) {
            var t = e.split(/[\n\r]+/)
              , a = -1
              , n = -1
              , s = 0
              , i = 0
              , f = [];
            var c = [];
            var l = null;
            var o = {}
              , u = []
              , h = []
              , d = [];
            var v = 0, b;
            for (; s !== t.length; ++s) {
                v = 0;
                var p = t[s].trim(), g = p.split(";"), E = g[0], S;
                if (p.length > 0)
                    switch (E) {
                    case "ID":
                        break;
                    case "E":
                        break;
                    case "B":
                        break;
                    case "O":
                        break;
                    case "P":
                        if (g[1].charAt(0) == "P")
                            c.push(p.substr(3).replace(/;;/g, ";"));
                        break;
                    case "C":
                        for (i = 1; i < g.length; ++i)
                            switch (g[i].charAt(0)) {
                            case "X":
                                n = parseInt(g[i].substr(1)) - 1;
                                break;
                            case "Y":
                                a = parseInt(g[i].substr(1)) - 1;
                                n = 0;
                                for (b = f.length; b <= a; ++b)
                                    f[b] = [];
                                break;
                            case "K":
                                S = g[i].substr(1);
                                if (S.charAt(0) === '"')
                                    S = S.substr(1, S.length - 2);
                                else if (S === "TRUE")
                                    S = true;
                                else if (S === "FALSE")
                                    S = false;
                                else if (+S === +S) {
                                    S = +S;
                                    if (l !== null && m.is_date(l))
                                        S = x(S)
                                }
                                f[a][n] = S;
                                l = null;
                                break;
                            case "E":
                                break;
                            default:
                                if (r && r.WTF)
                                    throw new Error("SYLK bad record " + p)
                            }
                        break;
                    case "F":
                        for (i = 1; i < g.length; ++i)
                            switch (g[i].charAt(0)) {
                            case "X":
                                n = parseInt(g[i].substr(1)) - 1;
                                break;
                            case "Y":
                                a = parseInt(g[i].substr(1)) - 1;
                                n = 0;
                                for (b = f.length; b <= a; ++b)
                                    f[b] = [];
                                break;
                            case "M":
                                v = parseInt(g[i].substr(1)) / 20;
                                break;
                            case "F":
                                break;
                            case "P":
                                l = c[parseInt(g[i].substr(1))];
                                break;
                            case "S":
                                break;
                            case "D":
                                break;
                            case "N":
                                break;
                            case "W":
                                d = g[i].substr(1).split(" ");
                                for (b = parseInt(d[0], 10); b <= parseInt(d[1], 10); ++b) {
                                    v = parseInt(d[2], 10);
                                    h[b - 1] = v == 0 ? {
                                        hidden: true
                                    } : {
                                        wch: v
                                    };
                                    Ih(h[b - 1])
                                }
                                break;
                            case "R":
                                a = parseInt(g[i].substr(1)) - 1;
                                u[a] = {};
                                if (v > 0) {
                                    u[a].hpt = v;
                                    u[a].hpx = Dh(v)
                                } else if (v == 0)
                                    u[a].hidden = true;
                                break;
                            default:
                                if (r && r.WTF)
                                    throw new Error("SYLK bad record " + p)
                            }
                        break;
                    default:
                        if (r && r.WTF)
                            throw new Error("SYLK bad record " + p)
                    }
            }
            if (u.length > 0)
                o["!rows"] = u;
            if (h.length > 0)
                o["!cols"] = h;
            f[f.length] = o;
            return f
        }
        function t(r, t) {
            var a = e(r, t);
            var n = a.pop();
            var s = Xr(a, t);
            C(n).forEach(function(e) {
                s[e] = n[e]
            });
            return s
        }
        function a(e, r) {
            return Wr(t(e, r), r)
        }
        function n(e, r, t, a, n) {
            var s = "C;Y" + (t + 1) + ";X" + (a + 1) + ";K";
            switch (e.t) {
            case "n":
                s += e.v || 0;
                if (e.f && !e.F)
                    s += ";E" + rv(e.f, {
                        r: t,
                        c: a
                    });
                break;
            case "b":
                s += e.v ? "TRUE" : "FALSE";
                break;
            case "e":
                s += e.w || e.v;
                break;
            case "d":
                s += '"' + (e.w || e.v) + '"';
                break;
            case "s":
                s += '"' + e.v.replace(/"/g, "") + '"';
                break
            }
            return s
        }
        function s(e, r) {
            r.forEach(function(r, t) {
                var a = "F;W" + (t + 1) + " " + (t + 1) + " ";
                if (r.hidden)
                    a += "0";
                else {
                    if (typeof r.width == "number")
                        r.wpx = gh(r.width);
                    if (typeof r.wpx == "number")
                        r.wch = Eh(r.wpx);
                    if (typeof r.wch == "number")
                        a += Math.round(r.wch)
                }
                if (a.charAt(a.length - 1) != " ")
                    e.push(a)
            })
        }
        function i(e, r) {
            r.forEach(function(r, t) {
                var a = "F;";
                if (r.hidden)
                    a += "M0;";
                else if (r.hpt)
                    a += "M" + 20 * r.hpt + ";";
                else if (r.hpx)
                    a += "M" + 20 * xh(r.hpx) + ";";
                if (a.length > 2)
                    e.push(a + "R" + (t + 1))
            })
        }
        function f(e, r) {
            var t = ["ID;PWXL;N;E"]
              , a = [];
            var f = Mr(e["!ref"]), c;
            var l = Array.isArray(e);
            var o = "\r\n";
            t.push("P;PGeneral");
            t.push("F;P0;DG0G8;M255");
            if (e["!cols"])
                s(t, e["!cols"]);
            if (e["!rows"])
                i(t, e["!rows"]);
            t.push("B;Y" + (f.e.r - f.s.r + 1) + ";X" + (f.e.c - f.s.c + 1) + ";D" + [f.s.c, f.s.r, f.e.c, f.e.r].join(" "));
            for (var u = f.s.r; u <= f.e.r; ++u) {
                for (var h = f.s.c; h <= f.e.c; ++h) {
                    var d = yr({
                        r: u,
                        c: h
                    });
                    c = l ? (e[u] || [])[h] : e[d];
                    if (!c || c.v == null && (!c.f || c.F))
                        continue;
                    a.push(n(c, e, u, h, r))
                }
            }
            return t.join(o) + o + a.join(o) + o + "E" + o
        }
        return {
            to_workbook: a,
            to_sheet: t,
            from_sheet: f
        }
    }();
    var Su = function() {
        function e(e, t) {
            switch (t.type) {
            case "base64":
                return r(o.decode(e), t);
            case "binary":
                return r(e, t);
            case "buffer":
                return r(e.toString("binary"), t);
            case "array":
                return r(y(e), t)
            }
            throw new Error("Unrecognized type " + t.type)
        }
        function r(e, r) {
            var t = e.split("\n")
              , a = -1
              , n = -1
              , s = 0
              , i = [];
            for (; s !== t.length; ++s) {
                if (t[s].trim() === "BOT") {
                    i[++a] = [];
                    n = 0;
                    continue
                }
                if (a < 0)
                    continue;
                var f = t[s].trim().split(",");
                var c = f[0]
                  , l = f[1];
                ++s;
                var o = t[s].trim();
                switch (+c) {
                case -1:
                    if (o === "BOT") {
                        i[++a] = [];
                        n = 0;
                        continue
                    } else if (o !== "EOD")
                        throw new Error("Unrecognized DIF special command " + o);
                    break;
                case 0:
                    if (o === "TRUE")
                        i[a][n] = true;
                    else if (o === "FALSE")
                        i[a][n] = false;
                    else if (+l == +l)
                        i[a][n] = +l;
                    else if (!isNaN(new Date(l).getDate()))
                        i[a][n] = P(l);
                    else
                        i[a][n] = l;
                    ++n;
                    break;
                case 1:
                    o = o.substr(1, o.length - 2);
                    i[a][n++] = o !== "" ? o : null;
                    break
                }
                if (o === "EOD")
                    break
            }
            return i
        }
        function t(r, t) {
            return Xr(e(r, t), t)
        }
        function a(e, r) {
            return Wr(t(e, r), r)
        }
        var n = function() {
            var e = function e(r, t, a, n, s) {
                r.push(t);
                r.push(a + "," + n);
                r.push('"' + s.replace(/"/g, '""') + '"')
            };
            var r = function e(r, t, a, n) {
                r.push(t + "," + a);
                r.push(t == 1 ? '"' + n.replace(/"/g, '""') + '"' : n)
            };
            return function t(a, n) {
                var s = [];
                var i = Mr(a["!ref"]), f;
                var c = Array.isArray(a);
                e(s, "TABLE", 0, 1, "sheetjs");
                e(s, "VECTORS", 0, i.e.r - i.s.r + 1, "");
                e(s, "TUPLES", 0, i.e.c - i.s.c + 1, "");
                e(s, "DATA", 0, 0, "");
                for (var o = i.s.r; o <= i.e.r; ++o) {
                    r(s, -1, 0, "BOT");
                    for (var u = i.s.c; u <= i.e.c; ++u) {
                        var h = yr({
                            r: o,
                            c: u
                        });
                        f = c ? (a[o] || [])[u] : a[h];
                        if (!f) {
                            r(s, 1, 0, "");
                            continue
                        }
                        switch (f.t) {
                        case "n":
                            var d = l ? f.w : f.v;
                            if (!d && f.v != null)
                                d = f.v;
                            if (d == null) {
                                if (l && f.f && !f.F)
                                    r(s, 1, 0, "=" + f.f);
                                else
                                    r(s, 1, 0, "")
                            } else
                                r(s, 0, d, "V");
                            break;
                        case "b":
                            r(s, 0, f.v ? 1 : 0, f.v ? "TRUE" : "FALSE");
                            break;
                        case "s":
                            r(s, 1, 0, !l || isNaN(f.v) ? f.v : '="' + f.v + '"');
                            break;
                        case "d":
                            if (!f.w)
                                f.w = m.format(f.z || m._table[14], R(P(f.v)));
                            if (l)
                                r(s, 0, f.w, "V");
                            else
                                r(s, 1, 0, f.w);
                            break;
                        default:
                            r(s, 1, 0, "")
                        }
                    }
                }
                r(s, -1, 0, "EOD");
                var v = "\r\n";
                var b = s.join(v);
                return b
            }
        }();
        return {
            to_workbook: a,
            to_sheet: t,
            from_sheet: n
        }
    }();
    var ku = function() {
        function e(e, r, t, a) {
            if (e === "TRUE")
                r[t][a] = true;
            else if (e === "FALSE")
                r[t][a] = false;
            else if (e === "") {} else if (+e == +e)
                r[t][a] = +e;
            else
                r[t][a] = e
        }
        function r(r, t) {
            var a = [];
            if (!r || r.length === 0)
                return a;
            var n = r.split(/[\r\n]/);
            var s = n.length - 1;
            while (s >= 0 && n[s].length === 0)
                --s;
            var i = 10
              , f = 0;
            var c = 0;
            for (; c <= s; ++c) {
                f = n[c].indexOf(" ");
                if (f == -1)
                    f = n[c].length;
                else
                    f++;
                i = Math.max(i, f)
            }
            for (c = 0; c <= s; ++c) {
                a[c] = [];
                var l = 0;
                e(n[c].slice(0, i).trim(), a, c, l);
                for (l = 1; l <= (n[c].length - i) / 10 + 1; ++l)
                    e(n[c].slice(i + (l - 1) * 10, i + l * 10).trim(), a, c, l)
            }
            return a
        }
        function t(e, r) {
            var t = r || {};
            var a = "";
            if (c != null && t.dense == null)
                t.dense = c;
            var n = t.dense ? [] : {};
            var s = {
                s: {
                    c: 0,
                    r: 0
                },
                e: {
                    c: 0,
                    r: 0
                }
            };
            if (e.substr(0, 4) == "sep=" && e.charCodeAt(5) == 10) {
                a = e.charAt(4);
                e = e.substr(6)
            } else if (e.substr(0, 1024).indexOf("\t") == -1)
                a = ",";
            else
                a = "\t";
            var i = 0
              , f = 0
              , l = 0;
            var o = 0
              , u = 0
              , h = a.charCodeAt(0)
              , d = false
              , v = 0;
            e = e.replace(/\r\n/gm, "\n");
            function b() {
                var r = e.slice(o, u);
                var a = {};
                if (r.charCodeAt(0) == 61) {
                    a.t = "n";
                    a.f = r.substr(1)
                } else if (r == "TRUE") {
                    a.t = "b";
                    a.v = true
                } else if (r == "FALSE") {
                    a.t = "b";
                    a.v = false
                } else if (!isNaN(l = +r)) {
                    a.t = "n";
                    a.w = r;
                    a.v = l
                } else if (!isNaN(new Date(r).getDate())) {
                    a.t = "d";
                    a.v = P(r)
                } else {
                    a.t = "s";
                    if (r.charAt(0) == '"' && r.charAt(r.length - 1) == '"')
                        r = r.slice(1, -1).replace(/""/g, '"');
                    a.v = r
                }
                if (t.dense) {
                    if (!n[i])
                        n[i] = [];
                    n[i][f] = a
                } else
                    n[yr({
                        c: f,
                        r: i
                    })] = a;
                o = u + 1;
                if (s.e.c < f)
                    s.e.c = f;
                if (s.e.r < i)
                    s.e.r = i;
                if (v == h)
                    ++f;
                else {
                    f = 0;
                    ++i
                }
            }
            for (; u < e.length; ++u)
                switch (v = e.charCodeAt(u)) {
                case 34:
                    if (d || u - o == 0)
                        d = !d;
                    break;
                case h:
                case 10:
                case 13:
                    if (!d)
                        b();
                    break;
                default:
                    break
                }
            if (u - o > 0)
                b();
            n["!ref"] = Lr(s);
            return n
        }
        function a(e, a) {
            if (e.substr(0, 4) == "sep=")
                return t(e, a);
            if (e.indexOf("\t") >= 0 || e.indexOf(",") >= 0)
                return t(e, a);
            return Xr(r(e, a), a)
        }
        function n(e, r) {
            switch (r.type) {
            case "base64":
                return a(o.decode(e), r);
            case "binary":
                return a(e, r);
            case "buffer":
                return a(e.toString("binary"), r);
            case "array":
                return a(y(e), r)
            }
            throw new Error("Unrecognized type " + r.type)
        }
        function s(e, r) {
            return Wr(n(e, r), r)
        }
        function i(e, r) {
            var t = [];
            var a = Mr(e["!ref"]), n;
            var s = Array.isArray(e);
            for (var i = a.s.r; i <= a.e.r; ++i) {
                var f = [];
                for (var c = a.s.c; c <= a.e.c; ++c) {
                    var l = yr({
                        r: i,
                        c: c
                    });
                    n = s ? (e[i] || [])[c] : e[l];
                    if (!n || n.v == null) {
                        f.push("          ");
                        continue
                    }
                    var o = (n.w || (Vr(n),
                    n.w) || "").substr(0, 10);
                    while (o.length < 10)
                        o += " ";
                    f.push(o + (c == 0 ? " " : ""))
                }
                t.push(f.join(""))
            }
            return t.join("\n")
        }
        return {
            to_workbook: s,
            to_sheet: n,
            from_sheet: i
        }
    }();
    var Bu = function() {
        function e(e, r, t) {
            if (!e)
                return;
            or(e, e.l || 0);
            var a = t.Enum || S;
            while (e.l < e.length) {
                var n = e.read_shift(2);
                var s = a[n] || a[255];
                var i = e.read_shift(2);
                var f = e.l + i;
                var c = s.f(e, i, t);
                e.l = f;
                if (r(c, s.n, n))
                    return
            }
        }
        function r(e, r) {
            switch (r.type) {
            case "base64":
                return t(d(o.decode(e)), r);
            case "binary":
                return t(d(e), r);
            case "buffer":
            case "array":
                return t(e, r)
            }
            throw "Unsupported type " + r.type
        }
        function t(r, t) {
            if (!r)
                return r;
            var a = t || {};
            if (c != null && a.dense == null)
                a.dense = c;
            var n = a.dense ? [] : {}
              , s = "Sheet1"
              , i = 0;
            var f = {}
              , l = [s];
            var o = {
                s: {
                    r: 0,
                    c: 0
                },
                e: {
                    r: 0,
                    c: 0
                }
            };
            if (r[2] == 2)
                a.Enum = S;
            else if (r[2] == 26)
                a.Enum = k;
            else if (r[2] == 14) {
                a.Enum = k;
                a.qpro = true;
                r.l = 0
            } else
                throw new Error("Unrecognized LOTUS BOF " + r[2]);
            e(r, function(e, t, c) {
                if (r[2] == 2)
                    switch (c) {
                    case 0:
                        a.vers = e;
                        if (e >= 4096)
                            a.qpro = true;
                        break;
                    case 6:
                        o = e;
                        break;
                    case 15:
                        if (!a.qpro)
                            e[1].v = e[1].v.substr(1);
                    case 13:
                    case 14:
                    case 16:
                    case 51:
                        if (a.dense) {
                            if (!n[e[0].r])
                                n[e[0].r] = [];
                            n[e[0].r][e[0].c] = e[1]
                        } else
                            n[yr(e[0])] = e[1];
                        break
                    }
                else
                    switch (c) {
                    case 22:
                        e[1].v = e[1].v.substr(1);
                    case 23:
                    case 24:
                    case 25:
                    case 37:
                    case 39:
                    case 40:
                        if (e[3] > i) {
                            n["!ref"] = Lr(o);
                            f[s] = n;
                            n = a.dense ? [] : {};
                            o = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            };
                            i = e[3];
                            s = "Sheet" + (i + 1);
                            l.push(s)
                        }
                        n[yr(e[0])] = e[1];
                        if (o.e.c < e[0].c)
                            o.e.c = e[0].c;
                        if (o.e.r < e[0].r)
                            o.e.r = e[0].r;
                        break;
                    default:
                        break
                    }
            }, a);
            n["!ref"] = Lr(o);
            f[s] = n;
            return {
                SheetNames: l,
                Sheets: f
            }
        }
        function a(e, r) {
            var t = {
                s: {
                    c: 0,
                    r: 0
                },
                e: {
                    c: 0,
                    r: 0
                }
            };
            t.s.c = e.read_shift(2);
            t.s.r = e.read_shift(2);
            t.e.c = e.read_shift(2);
            t.e.r = e.read_shift(2);
            if (t.s.c == 65535)
                t.s.c = t.e.c = t.s.r = t.e.r = 0;
            return t
        }
        function n(e, r, t) {
            var a = [{
                c: 0,
                r: 0
            }, {
                t: "n",
                v: 0
            }, 0];
            if (t.qpro && t.vers != 20768) {
                a[0].c = e.read_shift(1);
                e.l++;
                a[0].r = e.read_shift(2);
                e.l += 2
            } else {
                a[2] = e.read_shift(1);
                a[0].c = e.read_shift(2);
                a[0].r = e.read_shift(2)
            }
            return a
        }
        function s(e, r, t) {
            var a = e.l + r;
            var s = n(e, r, t);
            s[1].t = "s";
            if (t.vers == 20768) {
                e.l++;
                var i = e.read_shift(1);
                s[1].v = e.read_shift(i, "utf8");
                return s
            }
            if (t.qpro)
                e.l++;
            s[1].v = e.read_shift(a - e.l, "cstr");
            return s
        }
        function i(e, r, t) {
            var a = n(e, r, t);
            a[1].v = e.read_shift(2, "i");
            return a
        }
        function f(e, r, t) {
            var a = n(e, r, t);
            a[1].v = e.read_shift(8, "f");
            return a
        }
        function l(e, r, t) {
            var a = e.l + r;
            var s = n(e, r, t);
            s[1].v = e.read_shift(8, "f");
            if (t.qpro)
                e.l = a;
            else {
                var i = e.read_shift(2);
                e.l += i
            }
            return s
        }
        function u(e, r) {
            var t = [{
                c: 0,
                r: 0
            }, {
                t: "n",
                v: 0
            }, 0];
            t[0].r = e.read_shift(2);
            t[3] = e[e.l++];
            t[0].c = e[e.l++];
            return t
        }
        function h(e, r) {
            var t = u(e, r);
            t[1].t = "s";
            t[1].v = e.read_shift(r - 4, "cstr");
            return t
        }
        function v(e, r) {
            var t = u(e, r);
            t[1].v = e.read_shift(2);
            var a = t[1].v >> 1;
            if (t[1].v & 1) {
                switch (a & 7) {
                case 1:
                    a = (a >> 3) * 500;
                    break;
                case 2:
                    a = (a >> 3) / 20;
                    break;
                case 4:
                    a = (a >> 3) / 2e3;
                    break;
                case 6:
                    a = (a >> 3) / 16;
                    break;
                case 7:
                    a = (a >> 3) / 64;
                    break;
                default:
                    throw "unknown NUMBER_18 encoding " + (a & 7)
                }
            }
            t[1].v = a;
            return t
        }
        function b(e, r) {
            var t = u(e, r);
            var a = e.read_shift(4);
            var n = e.read_shift(4);
            var s = e.read_shift(2);
            if (s == 65535) {
                t[1].v = 0;
                return t
            }
            var i = s & 32768;
            s = (s & 32767) - 16446;
            t[1].v = (s > 0 ? n << s : n >>> -s) + (s > -32 ? a << s + 32 : a >>> -(s + 32));
            return t
        }
        function p(e, r) {
            var t = b(e, 14);
            e.l += r - 14;
            return t
        }
        function m(e, r) {
            var t = u(e, r);
            var a = e.read_shift(4);
            t[1].v = a >> 6;
            return t
        }
        function g(e, r) {
            var t = u(e, r);
            var a = e.read_shift(8, "f");
            t[1].v = a;
            return t
        }
        function E(e, r) {
            var t = g(e, 14);
            e.l += r - 10;
            return t
        }
        var S = {
            0: {
                n: "BOF",
                f: Ya
            },
            1: {
                n: "EOF",
                f: ur
            },
            2: {
                n: "CALCMODE",
                f: ur
            },
            3: {
                n: "CALCORDER",
                f: ur
            },
            4: {
                n: "SPLIT",
                f: ur
            },
            5: {
                n: "SYNC",
                f: ur
            },
            6: {
                n: "RANGE",
                f: a
            },
            7: {
                n: "WINDOW1",
                f: ur
            },
            8: {
                n: "COLW1",
                f: ur
            },
            9: {
                n: "WINTWO",
                f: ur
            },
            10: {
                n: "COLW2",
                f: ur
            },
            11: {
                n: "NAME",
                f: ur
            },
            12: {
                n: "BLANK",
                f: ur
            },
            13: {
                n: "INTEGER",
                f: i
            },
            14: {
                n: "NUMBER",
                f: f
            },
            15: {
                n: "LABEL",
                f: s
            },
            16: {
                n: "FORMULA",
                f: l
            },
            24: {
                n: "TABLE",
                f: ur
            },
            25: {
                n: "ORANGE",
                f: ur
            },
            26: {
                n: "PRANGE",
                f: ur
            },
            27: {
                n: "SRANGE",
                f: ur
            },
            28: {
                n: "FRANGE",
                f: ur
            },
            29: {
                n: "KRANGE1",
                f: ur
            },
            32: {
                n: "HRANGE",
                f: ur
            },
            35: {
                n: "KRANGE2",
                f: ur
            },
            36: {
                n: "PROTEC",
                f: ur
            },
            37: {
                n: "FOOTER",
                f: ur
            },
            38: {
                n: "HEADER",
                f: ur
            },
            39: {
                n: "SETUP",
                f: ur
            },
            40: {
                n: "MARGINS",
                f: ur
            },
            41: {
                n: "LABELFMT",
                f: ur
            },
            42: {
                n: "TITLES",
                f: ur
            },
            43: {
                n: "SHEETJS",
                f: ur
            },
            45: {
                n: "GRAPH",
                f: ur
            },
            46: {
                n: "NGRAPH",
                f: ur
            },
            47: {
                n: "CALCCOUNT",
                f: ur
            },
            48: {
                n: "UNFORMATTED",
                f: ur
            },
            49: {
                n: "CURSORW12",
                f: ur
            },
            50: {
                n: "WINDOW",
                f: ur
            },
            51: {
                n: "STRING",
                f: s
            },
            55: {
                n: "PASSWORD",
                f: ur
            },
            56: {
                n: "LOCKED",
                f: ur
            },
            60: {
                n: "QUERY",
                f: ur
            },
            61: {
                n: "QUERYNAME",
                f: ur
            },
            62: {
                n: "PRINT",
                f: ur
            },
            63: {
                n: "PRINTNAME",
                f: ur
            },
            64: {
                n: "GRAPH2",
                f: ur
            },
            65: {
                n: "GRAPHNAME",
                f: ur
            },
            66: {
                n: "ZOOM",
                f: ur
            },
            67: {
                n: "SYMSPLIT",
                f: ur
            },
            68: {
                n: "NSROWS",
                f: ur
            },
            69: {
                n: "NSCOLS",
                f: ur
            },
            70: {
                n: "RULER",
                f: ur
            },
            71: {
                n: "NNAME",
                f: ur
            },
            72: {
                n: "ACOMM",
                f: ur
            },
            73: {
                n: "AMACRO",
                f: ur
            },
            74: {
                n: "PARSE",
                f: ur
            },
            255: {
                n: "",
                f: ur
            }
        };
        var k = {
            0: {
                n: "BOF",
                f: ur
            },
            1: {
                n: "EOF",
                f: ur
            },
            3: {
                n: "??",
                f: ur
            },
            4: {
                n: "??",
                f: ur
            },
            5: {
                n: "??",
                f: ur
            },
            6: {
                n: "??",
                f: ur
            },
            7: {
                n: "??",
                f: ur
            },
            9: {
                n: "??",
                f: ur
            },
            10: {
                n: "??",
                f: ur
            },
            11: {
                n: "??",
                f: ur
            },
            12: {
                n: "??",
                f: ur
            },
            14: {
                n: "??",
                f: ur
            },
            15: {
                n: "??",
                f: ur
            },
            16: {
                n: "??",
                f: ur
            },
            17: {
                n: "??",
                f: ur
            },
            18: {
                n: "??",
                f: ur
            },
            19: {
                n: "??",
                f: ur
            },
            21: {
                n: "??",
                f: ur
            },
            22: {
                n: "LABEL16",
                f: h
            },
            23: {
                n: "NUMBER17",
                f: b
            },
            24: {
                n: "NUMBER18",
                f: v
            },
            25: {
                n: "FORMULA19",
                f: p
            },
            26: {
                n: "??",
                f: ur
            },
            27: {
                n: "??",
                f: ur
            },
            28: {
                n: "??",
                f: ur
            },
            29: {
                n: "??",
                f: ur
            },
            30: {
                n: "??",
                f: ur
            },
            31: {
                n: "??",
                f: ur
            },
            33: {
                n: "??",
                f: ur
            },
            37: {
                n: "NUMBER25",
                f: m
            },
            39: {
                n: "NUMBER27",
                f: g
            },
            40: {
                n: "FORMULA28",
                f: E
            },
            255: {
                n: "",
                f: ur
            }
        };
        return {
            to_workbook: r
        }
    }();
    var Cu = {
        0: 1252,
        1: 65001,
        2: 65001,
        77: 1e4,
        128: 932,
        129: 949,
        130: 1361,
        134: 936,
        136: 950,
        161: 1253,
        162: 1254,
        163: 1258,
        177: 1255,
        178: 1256,
        186: 1257,
        204: 1251,
        222: 874,
        238: 1250,
        255: 1252,
        69: 6969
    };
    var Tu = function e() {
        var r = pe("t")
          , t = pe("rPr")
          , a = /<(?:\w+:)?r>/g
          , n = /<\/(?:\w+:)?r>/
          , s = /\r\n/g;
        var i = function e(r, t, a) {
            var n = {}
              , s = 65001
              , i = "";
            var f = r.match($)
              , c = 0;
            if (f)
                for (; c != f.length; ++c) {
                    var l = q(f[c]);
                    switch (l[0].replace(/\w*:/g, "")) {
                    case "<condense":
                        break;
                    case "<extend":
                        break;
                    case "<shadow":
                        if (!l.val)
                            break;
                    case "<shadow>":
                    case "<shadow/>":
                        n.shadow = 1;
                        break;
                    case "</shadow>":
                        break;
                    case "<charset":
                        if (l.val == "1")
                            break;
                        s = Cu[parseInt(l.val, 10)];
                        break;
                    case "<outline":
                        if (!l.val)
                            break;
                    case "<outline>":
                    case "<outline/>":
                        n.outline = 1;
                        break;
                    case "</outline>":
                        break;
                    case "<rFont":
                        n.name = l.val;
                        break;
                    case "<sz":
                        n.sz = l.val;
                        break;
                    case "<strike":
                        if (!l.val)
                            break;
                    case "<strike>":
                    case "<strike/>":
                        n.strike = 1;
                        break;
                    case "</strike>":
                        break;
                    case "<u":
                        if (!l.val)
                            break;
                        switch (l.val) {
                        case "double":
                            n.uval = "double";
                            break;
                        case "singleAccounting":
                            n.uval = "single-accounting";
                            break;
                        case "doubleAccounting":
                            n.uval = "double-accounting";
                            break
                        }
                    case "<u>":
                    case "<u/>":
                        n.u = 1;
                        break;
                    case "</u>":
                        break;
                    case "<b":
                        if (l.val == "0")
                            break;
                    case "<b>":
                    case "<b/>":
                        n.b = 1;
                        break;
                    case "</b>":
                        break;
                    case "<i":
                        if (l.val == "0")
                            break;
                    case "<i>":
                    case "<i/>":
                        n.i = 1;
                        break;
                    case "</i>":
                        break;
                    case "<color":
                        if (l.rgb)
                            n.color = l.rgb.substr(2, 6);
                        break;
                    case "<family":
                        n.family = l.val;
                        break;
                    case "<vertAlign":
                        i = l.val;
                        break;
                    case "<scheme":
                        break;
                    default:
                        if (l[0].charCodeAt(1) !== 47)
                            throw "Unrecognized rich format " + l[0]
                    }
                }
            var o = [];
            if (n.u)
                o.push("text-decoration: underline;");
            if (n.uval)
                o.push("text-underline-style:" + n.uval + ";");
            if (n.sz)
                o.push("font-size:" + n.sz + ";");
            if (n.outline)
                o.push("text-effect: outline;");
            if (n.shadow)
                o.push("text-shadow: auto;");
            t.push('<span style="' + o.join("") + '">');
            if (n.b) {
                t.push("<b>");
                a.push("</b>")
            }
            if (n.i) {
                t.push("<i>");
                a.push("</i>")
            }
            if (n.strike) {
                t.push("<s>");
                a.push("</s>")
            }
            if (i == "superscript")
                i = "sup";
            else if (i == "subscript")
                i = "sub";
            if (i != "") {
                t.push("<" + i + ">");
                a.push("</" + i + ">")
            }
            a.push("</span>");
            return s
        };
        function f(e) {
            var a = [[], "", []];
            var n = e.match(r)
              , f = 65001;
            if (!B(n))
                return "";
            a[1] = n[1];
            var c = e.match(t);
            if (B(c))
                f = i(c[1], a[0], a[2]);
            return a[0].join("") + a[1].replace(s, "<br/>") + a[2].join("")
        }
        return function e(r) {
            return r.replace(a, "").split(n).map(f).join("")
        }
    }();
    var wu = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g
      , Iu = /<(?:\w+:)?r>/;
    var Au = /<(?:\w+:)?rPh.*?>(.*?)<\/(?:\w+:)?rPh>/g;
    function Ru(e, r) {
        var t = r ? r.cellHTML : true;
        var a = {};
        if (!e)
            return null;
        var n;
        if (e.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
            a.t = he(te(e.substr(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0]));
            a.r = he(e);
            if (t)
                a.h = ce(a.t)
        } else if (n = e.match(Iu)) {
            a.r = he(e);
            a.t = he(te((e.replace(Au, "").match(wu) || []).join("").replace($, "")));
            if (t)
                a.h = Tu(a.r)
        }
        return a
    }
    var xu = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
    var Du = /<(?:\w+:)?(?:si|sstItem)>/g;
    var Ou = /<\/(?:\w+:)?(?:si|sstItem)>/;
    function Fu(e, r) {
        var t = []
          , a = "";
        if (!e)
            return t;
        var n = e.match(xu);
        if (B(n)) {
            a = n[2].replace(Du, "").split(Ou);
            for (var s = 0; s != a.length; ++s) {
                var i = Ru(a[s].trim(), r);
                if (i != null)
                    t[t.length] = i
            }
            n = q(n[1]);
            t.Count = n.count;
            t.Unique = n.uniqueCount
        }
        return t
    }
    Qt.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
    var Pu = /^\s|\s$|[\t\n\r]/;
    function yu(e, r) {
        if (!r.bookSST)
            return "";
        var t = [Ae];
        t[t.length] = Te("sst", null, {
            xmlns: Re.main[0],
            count: e.Count,
            uniqueCount: e.Unique
        });
        for (var a = 0; a != e.length; ++a) {
            if (e[a] == null)
                continue;
            var n = e[a];
            var s = "<si>";
            if (n.r)
                s += n.r;
            else {
                s += "<t";
                if (!n.t)
                    n.t = "";
                if (n.t.match(Pu))
                    s += ' xml:space="preserve"';
                s += ">" + se(n.t) + "</t>"
            }
            s += "</si>";
            t[t.length] = s
        }
        if (t.length > 2) {
            t[t.length] = "</sst>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    function Nu(e, r) {
        return [e.read_shift(4), e.read_shift(4)]
    }
    function _u(e, r) {
        var t = [];
        var a = false;
        br(e, function e(n, s, i) {
            switch (i) {
            case 159:
                t.Count = n[0];
                t.Unique = n[1];
                break;
            case 19:
                t.push(n);
                break;
            case 160:
                return true;
            case 35:
                a = true;
                break;
            case 36:
                a = false;
                break;
            default:
                if (s.indexOf("Begin") > 0) {} else if (s.indexOf("End") > 0) {}
                if (!a || r.WTF)
                    throw new Error("Unexpected record " + i + " " + s)
            }
        });
        return t
    }
    function Mu(e, r) {
        if (!r)
            r = vr(8);
        r.write_shift(4, e.Count);
        r.write_shift(4, e.Unique);
        return r
    }
    var Lu = Qr;
    function Uu(e, r) {
        var t = pr();
        mr(t, "BrtBeginSst", Mu(e));
        for (var a = 0; a < e.length; ++a)
            mr(t, "BrtSSTItem", Lu(e[a]));
        mr(t, "BrtEndSst");
        return t.end()
    }
    function Hu(e) {
        if (typeof cptable !== "undefined")
            return cptable.utils.encode(1252, e);
        var r = []
          , t = e.split("");
        for (var a = 0; a < t.length; ++a)
            r[a] = t[a].charCodeAt(0);
        return r
    }
    function Vu(e, r) {
        var t = {};
        t.Major = e.read_shift(2);
        t.Minor = e.read_shift(2);
        return t
    }
    function Wu(e, r) {
        var t = {};
        t.id = e.read_shift(0, "lpp4");
        t.R = Vu(e, 4);
        t.U = Vu(e, 4);
        t.W = Vu(e, 4);
        return t
    }
    function Xu(e) {
        var r = e.read_shift(4);
        var t = e.l + r - 4;
        var a = {};
        var n = e.read_shift(4);
        var s = [];
        while (n-- > 0) {
            var i = {};
            i.t = e.read_shift(4);
            i.v = e.read_shift(0, "lpp4");
            s.push(i)
        }
        a.name = e.read_shift(0, "lpp4");
        a.comps = s;
        return a
    }
    function Gu(e, r) {
        var t = [];
        e.l += 4;
        var a = e.read_shift(4);
        while (a-- > 0)
            t.push(Xu(e));
        return t
    }
    function ju(e, r) {
        var t = [];
        e.l += 4;
        var a = e.read_shift(4);
        while (a-- > 0)
            t.push(e.read_shift(0, "lpp4"));
        return t
    }
    function zu(e, r) {
        var t = {};
        var a = e.read_shift(4);
        var n = e.l + a - 4;
        e.l += 4;
        t.id = e.read_shift(0, "lpp4");
        t.name = e.read_shift(0, "lpp4");
        t.R = Vu(e, 4);
        t.U = Vu(e, 4);
        t.W = Vu(e, 4);
        return t
    }
    function Ku(e, r) {
        var t = zu(e);
        t.ename = e.read_shift(0, "8lpp4");
        t.blksz = e.read_shift(4);
        t.cmode = e.read_shift(4);
        if (e.read_shift(4) != 4)
            throw new Error("Bad !Primary record");
        return t
    }
    function Yu(e, r) {
        var t = e.l + r;
        var a = {};
        a.Flags = e.read_shift(4) & 63;
        e.l += 4;
        a.AlgID = e.read_shift(4);
        var n = false;
        switch (a.AlgID) {
        case 26126:
        case 26127:
        case 26128:
            n = a.Flags == 36;
            break;
        case 26625:
            n = a.Flags == 4;
            break;
        case 0:
            n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
            break;
        default:
            throw "Unrecognized encryption algorithm: " + a.AlgID
        }
        if (!n)
            throw new Error("Encryption Flags/AlgID mismatch");
        a.AlgIDHash = e.read_shift(4);
        a.KeySize = e.read_shift(4);
        a.ProviderType = e.read_shift(4);
        e.l += 8;
        a.CSPName = e.read_shift(t - e.l >> 1, "utf16le").slice(0, -1);
        e.l = t;
        return a
    }
    function $u(e, r) {
        var t = {};
        e.l += 4;
        t.Salt = e.slice(e.l, e.l + 16);
        e.l += 16;
        t.Verifier = e.slice(e.l, e.l + 16);
        e.l += 16;
        var a = e.read_shift(4);
        t.VerifierHash = e.slice(e.l, e.l + a);
        e.l += a;
        return t
    }
    function Qu(e, r) {
        var t = Vu(e);
        switch (t.Minor) {
        case 2:
            return Zu(e, t);
        case 3:
            return qu(e, t);
        case 4:
            return Ju(e, t)
        }
        throw new Error("ECMA-376 Encryped file unrecognized Version: " + t.Minor)
    }
    function Zu(e, r) {
        var t = e.read_shift(4);
        if ((t & 63) != 36)
            throw new Error("EncryptionInfo mismatch");
        var a = e.read_shift(4);
        var n = e.l + a;
        var s = Yu(e, a);
        var i = $u(e, e.length - e.l);
        return {
            t: "Std",
            h: s,
            v: i
        }
    }
    function qu(e, r) {
        throw new Error("File is password-protected: ECMA-376 Extensible")
    }
    function Ju(e, r) {
        throw new Error("File is password-protected: ECMA-376 Agile")
    }
    function eh(e, r) {
        var t = {};
        var a = t.EncryptionVersionInfo = Vu(e, 4);
        r -= 4;
        if (a.Minor != 2)
            throw "unrecognized minor version code: " + a.Minor;
        if (a.Major > 4 || a.Major < 2)
            throw "unrecognized major version code: " + a.Major;
        t.Flags = e.read_shift(4);
        r -= 4;
        var n = e.read_shift(4);
        r -= 4;
        t.EncryptionHeader = Yu(e, n);
        r -= n;
        t.EncryptionVerifier = $u(e, r);
        return t
    }
    function rh(e, r) {
        var t = {};
        var a = t.EncryptionVersionInfo = Vu(e, 4);
        r -= 4;
        if (a.Major != 1 || a.Minor != 1)
            throw "unrecognized version code " + a.Major + " : " + a.Minor;
        t.Salt = e.read_shift(16);
        t.EncryptedVerifier = e.read_shift(16);
        t.EncryptedVerifierHash = e.read_shift(16);
        return t
    }
    function th(e) {
        var r = 0, t;
        var a = Hu(e);
        var n = a.length + 1, s, i;
        var f, c, l;
        t = h(n);
        t[0] = a.length;
        for (s = 1; s != n; ++s)
            t[s] = a[s - 1];
        for (s = n - 1; s >= 0; --s) {
            i = t[s];
            f = (r & 16384) === 0 ? 0 : 1;
            c = r << 1 & 32767;
            l = f | c;
            r = l ^ i
        }
        return r ^ 52811
    }
    var ah = function() {
        var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0];
        var r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163];
        var t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628];
        var a = function(e) {
            return (e / 2 | e * 128) & 255
        };
        var n = function(e, r) {
            return a(e ^ r)
        };
        var s = function(e) {
            var a = r[e.length - 1];
            var n = 104;
            for (var s = e.length - 1; s >= 0; --s) {
                var i = e[s];
                for (var f = 0; f != 7; ++f) {
                    if (i & 64)
                        a ^= t[n];
                    i *= 2;
                    --n
                }
            }
            return a
        };
        return function(r) {
            var t = Hu(r);
            var a = s(t);
            var i = t.length;
            var f = h(16);
            for (var c = 0; c != 16; ++c)
                f[c] = 0;
            var l, o, u;
            if ((i & 1) === 1) {
                l = a >> 8;
                f[i] = n(e[0], l);
                --i;
                l = a & 255;
                o = t[t.length - 1];
                f[i] = n(o, l)
            }
            while (i > 0) {
                --i;
                l = a >> 8;
                f[i] = n(t[i], l);
                --i;
                l = a & 255;
                f[i] = n(t[i], l)
            }
            i = 15;
            u = 15 - t.length;
            while (u > 0) {
                l = a >> 8;
                f[i] = n(e[u], l);
                --i;
                --u;
                l = a & 255;
                f[i] = n(t[i], l);
                --i;
                --u
            }
            return f
        }
    }();
    var nh = function(e, r, t, a, n) {
        if (!n)
            n = r;
        if (!a)
            a = ah(e);
        var s, i;
        for (s = 0; s != r.length; ++s) {
            i = r[s];
            i ^= a[t];
            i = (i >> 5 | i << 3) & 255;
            n[s] = i;
            ++t
        }
        return [n, t, a]
    };
    var sh = function(e) {
        var r = 0
          , t = ah(e);
        return function(e) {
            var a = nh("", e, r, t);
            r = a[1];
            return a[0]
        }
    };
    function ih(e, r, t, a) {
        var n = {
            key: Ya(e),
            verificationBytes: Ya(e)
        };
        if (t.password)
            n.verifier = th(t.password);
        a.valid = n.verificationBytes === n.verifier;
        if (a.valid)
            a.insitu_decrypt = sh(t.password);
        return n
    }
    function fh(e, r, t) {
        var a = t || {};
        a.Info = e.read_shift(2);
        e.l -= 2;
        if (a.Info === 1)
            a.Data = rh(e, r);
        else
            a.Data = eh(e, r);
        return a
    }
    function ch(e, r, t) {
        var a = {
            Type: e.read_shift(2)
        };
        if (a.Type)
            fh(e, r - 2, a);
        else
            ih(e, r - 2, t, a);
        return a
    }
    function lh(e) {
        var r = e.substr(e[0] === "#" ? 1 : 0, 6);
        return [parseInt(r.substr(0, 2), 16), parseInt(r.substr(2, 2), 16), parseInt(r.substr(4, 2), 16)]
    }
    function oh(e) {
        for (var r = 0, t = 1; r != 3; ++r)
            t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
        return t.toString(16).toUpperCase().substr(1)
    }
    function uh(e) {
        var r = e[0] / 255
          , t = e[1] / 255
          , a = e[2] / 255;
        var n = Math.max(r, t, a)
          , s = Math.min(r, t, a)
          , i = n - s;
        if (i === 0)
            return [0, 0, r];
        var f = 0
          , c = 0
          , l = n + s;
        c = i / (l > 1 ? 2 - l : l);
        switch (n) {
        case r:
            f = ((t - a) / i + 6) % 6;
            break;
        case t:
            f = (a - r) / i + 2;
            break;
        case a:
            f = (r - t) / i + 4;
            break
        }
        return [f / 6, c, l / 2]
    }
    function hh(e) {
        var r = e[0]
          , t = e[1]
          , a = e[2];
        var n = t * 2 * (a < .5 ? a : 1 - a)
          , s = a - n / 2;
        var i = [s, s, s]
          , f = 6 * r;
        var c;
        if (t !== 0)
            switch (f | 0) {
            case 0:
            case 6:
                c = n * f;
                i[0] += n;
                i[1] += c;
                break;
            case 1:
                c = n * (2 - f);
                i[0] += c;
                i[1] += n;
                break;
            case 2:
                c = n * (f - 2);
                i[1] += n;
                i[2] += c;
                break;
            case 3:
                c = n * (4 - f);
                i[1] += c;
                i[2] += n;
                break;
            case 4:
                c = n * (f - 4);
                i[2] += n;
                i[0] += c;
                break;
            case 5:
                c = n * (6 - f);
                i[2] += c;
                i[0] += n;
                break
            }
        for (var l = 0; l != 3; ++l)
            i[l] = Math.round(i[l] * 255);
        return i
    }
    function dh(e, r) {
        if (r === 0)
            return e;
        var t = uh(lh(e));
        if (r < 0)
            t[2] = t[2] * (1 + r);
        else
            t[2] = 1 - (1 - t[2]) * (1 - r);
        return oh(hh(t))
    }
    var vh = 6
      , bh = 15
      , ph = 1
      , mh = vh;
    function gh(e) {
        return Math.floor((e + Math.round(128 / mh) / 256) * mh)
    }
    function Eh(e) {
        return Math.floor((e - 5) / mh * 100 + .5) / 100
    }
    function Sh(e) {
        return Math.round((e * mh + 5) / mh * 256) / 256
    }
    function kh(e) {
        return ((e - 5) / mh * 100 + .5) / 100
    }
    function Bh(e) {
        return (e * mh + 5) / mh * 256 / 256
    }
    function Ch(e) {
        return Sh(Eh(gh(e)))
    }
    function Th(e) {
        var r = Infinity
          , t = ph;
        for (mh = ph; mh < bh; ++mh)
            if (Math.abs(e - Ch(e)) <= r) {
                r = Math.abs(e - Ch(e));
                t = mh
            }
        mh = t
    }
    function wh(e) {
        var r = Infinity
          , t = 0
          , a = ph;
        for (mh = ph; mh < bh; ++mh) {
            t = Bh(kh(e)) * 256;
            t = t % 1;
            if (t > .5)
                t--;
            if (Math.abs(t) < r) {
                r = Math.abs(t);
                a = mh
            }
        }
        mh = a
    }
    function Ih(e) {
        if (e.width) {
            e.wpx = gh(e.width);
            e.wch = Eh(e.wpx);
            e.MDW = mh
        } else if (e.wpx) {
            e.wch = Eh(e.wpx);
            e.width = Sh(e.wch);
            e.MDW = mh
        } else if (typeof e.wch == "number") {
            e.width = Sh(e.wch);
            e.wpx = gh(e.width);
            e.MDW = mh
        }
        if (e.customWidth)
            delete e.customWidth
    }
    var Ah = 96
      , Rh = Ah;
    function xh(e) {
        return e * 96 / Rh
    }
    function Dh(e) {
        return e * Rh / 96
    }
    var Oh = {
        None: "none",
        Solid: "solid",
        Gray50: "mediumGray",
        Gray75: "darkGray",
        Gray25: "lightGray",
        HorzStripe: "darkHorizontal",
        VertStripe: "darkVertical",
        ReverseDiagStripe: "darkDown",
        DiagStripe: "darkUp",
        DiagCross: "darkGrid",
        ThickDiagCross: "darkTrellis",
        ThinHorzStripe: "lightHorizontal",
        ThinVertStripe: "lightVertical",
        ThinReverseDiagStripe: "lightDown",
        ThinHorzCross: "lightGrid"
    };
    function Fh(e, r, t, a) {
        r.Borders = [];
        var n = {}
          , s = {};
        e[0].match($).forEach(function(e) {
            var t = q(e);
            switch (t[0]) {
            case "<borders":
            case "<borders>":
            case "</borders>":
                break;
            case "<border":
            case "<border>":
                n = {};
                if (t.diagonalUp) {
                    n.diagonalUp = t.diagonalUp
                }
                if (t.diagonalDown) {
                    n.diagonalDown = t.diagonalDown
                }
                r.Borders.push(n);
                break;
            case "</border>":
                break;
            case "<left":
            case "<left/>":
                break;
            case "</left>":
                break;
            case "<right":
            case "<right/>":
                break;
            case "</right>":
                break;
            case "<top":
            case "<top/>":
                break;
            case "</top>":
                break;
            case "<bottom":
            case "<bottom/>":
                break;
            case "</bottom>":
                break;
            case "<diagonal":
            case "<diagonal/>":
                break;
            case "</diagonal>":
                break;
            case "<horizontal":
            case "<horizontal/>":
                break;
            case "</horizontal>":
                break;
            case "<vertical":
            case "<vertical/>":
                break;
            case "</vertical>":
                break;
            case "<start":
            case "<start/>":
                break;
            case "</start>":
                break;
            case "<end":
            case "<end/>":
                break;
            case "</end>":
                break;
            case "<color":
            case "<color/>":
                break;
            case "</color>":
                break;
            default:
                if (a && a.WTF)
                    throw new Error("unrecognized " + t[0] + " in borders")
            }
        })
    }
    function Ph(e, r, t, a) {
        r.Fills = [];
        var n = {};
        e[0].match($).forEach(function(e) {
            var t = q(e);
            switch (t[0]) {
            case "<fills":
            case "<fills>":
            case "</fills>":
                break;
            case "<fill>":
                break;
            case "</fill>":
                r.Fills.push(n);
                n = {};
                break;
            case "<gradientFill>":
                break;
            case "</gradientFill>":
                r.Fills.push(n);
                n = {};
                break;
            case "<patternFill":
            case "<patternFill>":
                if (t.patternType)
                    n.patternType = t.patternType;
                break;
            case "<patternFill/>":
            case "</patternFill>":
                break;
            case "<bgColor":
                if (!n.bgColor)
                    n.bgColor = {};
                if (t.indexed)
                    n.bgColor.indexed = parseInt(t.indexed, 10);
                if (t.theme)
                    n.bgColor.theme = parseInt(t.theme, 10);
                if (t.tint)
                    n.bgColor.tint = parseFloat(t.tint);
                if (t.rgb)
                    n.bgColor.rgb = t.rgb.slice(-6);
                break;
            case "<bgColor/>":
            case "</bgColor>":
                break;
            case "<fgColor":
                if (!n.fgColor)
                    n.fgColor = {};
                if (t.theme)
                    n.fgColor.theme = parseInt(t.theme, 10);
                if (t.tint)
                    n.fgColor.tint = parseFloat(t.tint);
                if (t.rgb)
                    n.fgColor.rgb = t.rgb.slice(-6);
                break;
            case "<fgColor/>":
            case "</fgColor>":
                break;
            case "<stop":
            case "<stop/>":
                break;
            case "</stop>":
                break;
            case "<color":
            case "<color/>":
                break;
            case "</color>":
                break;
            default:
                if (a && a.WTF)
                    throw new Error("unrecognized " + t[0] + " in fills")
            }
        })
    }
    function yh(e, r, t, a) {
        r.Fonts = [];
        var n = {};
        e[0].match($).forEach(function(e) {
            var s = q(e);
            switch (s[0]) {
            case "<fonts":
            case "<fonts>":
            case "</fonts>":
                break;
            case "<font":
            case "<font>":
                break;
            case "</font>":
            case "<font/>":
                r.Fonts.push(n);
                n = {};
                break;
            case "<name":
                if (s.val)
                    n.name = s.val;
                break;
            case "<name/>":
            case "</name>":
                break;
            case "<b":
                n.bold = s.val ? ue(s.val) : 1;
                break;
            case "<b/>":
                n.bold = 1;
                break;
            case "<i":
                n.italic = s.val ? ue(s.val) : 1;
                break;
            case "<i/>":
                n.italic = 1;
                break;
            case "<u":
                switch (s.val) {
                case "none":
                    n.underline = 0;
                    break;
                case "single":
                    n.underline = 1;
                    break;
                case "double":
                    n.underline = 2;
                    break;
                case "singleAccounting":
                    n.underline = 33;
                    break;
                case "doubleAccounting":
                    n.underline = 34;
                    break
                }
                break;
            case "<u/>":
                n.underline = 1;
                break;
            case "<strike":
                n.strike = s.val ? ue(s.val) : 1;
                break;
            case "<strike/>":
                n.strike = 1;
                break;
            case "<outline":
                n.outline = s.val ? ue(s.val) : 1;
                break;
            case "<outline/>":
                n.outline = 1;
                break;
            case "<shadow":
                n.shadow = s.val ? ue(s.val) : 1;
                break;
            case "<shadow/>":
                n.shadow = 1;
                break;
            case "<condense":
                n.condense = s.val ? ue(s.val) : 1;
                break;
            case "<condense/>":
                n.condense = 1;
                break;
            case "<extend":
                n.extend = s.val ? ue(s.val) : 1;
                break;
            case "<extend/>":
                n.extend = 1;
                break;
            case "<sz":
                if (s.val)
                    n.sz = +s.val;
                break;
            case "<sz/>":
            case "</sz>":
                break;
            case "<vertAlign":
                if (s.val)
                    n.vertAlign = s.val;
                break;
            case "<vertAlign/>":
            case "</vertAlign>":
                break;
            case "<family":
                if (s.val)
                    n.family = parseInt(s.val, 10);
                break;
            case "<family/>":
            case "</family>":
                break;
            case "<scheme":
                if (s.val)
                    n.scheme = s.val;
                break;
            case "<scheme/>":
            case "</scheme>":
                break;
            case "<charset":
                if (s.val == "1")
                    break;
                s.codepage = Cu[parseInt(s.val, 10)];
                break;
            case "<color":
                if (!n.color)
                    n.color = {};
                if (s.auto)
                    n.color.auto = ue(s.auto);
                if (s.rgb)
                    n.color.rgb = s.rgb;
                else if (s.indexed) {
                    n.color.index = parseInt(s.indexed, 10);
                    var i = Wt[n.color.index];
                    if (n.color.index == 81)
                        i = Wt[1];
                    if (!i)
                        throw new Error(e);
                    n.color.rgb = i[0].toString(16) + i[1].toString(16) + i[2].toString(16)
                } else if (s.theme) {
                    n.color.theme = parseInt(s.theme, 10);
                    if (s.tint)
                        n.color.tint = parseFloat(s.tint);
                    if (s.theme && t.themeElements && t.themeElements.clrScheme) {
                        n.color.rgb = dh(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)
                    }
                }
                break;
            case "<color/>":
            case "</color>":
                break;
            default:
                if (a && a.WTF)
                    throw new Error("unrecognized " + s[0] + " in fonts")
            }
        })
    }
    function Nh(e, r, t) {
        r.NumberFmt = [];
        var a = C(m._table);
        for (var n = 0; n < a.length; ++n)
            r.NumberFmt[a[n]] = m._table[a[n]];
        var s = e[0].match($);
        if (!s)
            return;
        for (n = 0; n < s.length; ++n) {
            var i = q(s[n]);
            switch (i[0]) {
            case "<numFmts":
            case "</numFmts>":
            case "<numFmts/>":
            case "<numFmts>":
                break;
            case "<numFmt":
                {
                    var f = te(he(i.formatCode))
                      , c = parseInt(i.numFmtId, 10);
                    r.NumberFmt[c] = f;
                    if (c > 0)
                        m.load(f, c)
                }
                break;
            case "</numFmt>":
                break;
            default:
                if (t.WTF)
                    throw new Error("unrecognized " + i[0] + " in numFmts")
            }
        }
    }
    function _h(e, r) {
        var t = ["<numFmts>"];
        [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(r) {
            for (var a = r[0]; a <= r[1]; ++a)
                if (e[a] != null)
                    t[t.length] = Te("numFmt", null, {
                        numFmtId: a,
                        formatCode: se(e[a])
                    })
        });
        if (t.length === 1)
            return "";
        t[t.length] = "</numFmts>";
        t[0] = Te("numFmts", null, {
            count: t.length - 2
        }).replace("/>", ">");
        return t.join("")
    }
    function Mh(e, r, t) {
        r.CellXf = [];
        var a;
        e[0].match($).forEach(function(e) {
            var n = q(e);
            switch (n[0]) {
            case "<cellXfs":
            case "<cellXfs>":
            case "<cellXfs/>":
            case "</cellXfs>":
                break;
            case "<xf":
                a = n;
                delete a[0];
                if (a.numFmtId)
                    a.numFmtId = parseInt(a.numFmtId, 10);
                if (a.fillId)
                    a.fillId = parseInt(a.fillId, 10);
                r.CellXf.push(a);
                break;
            case "</xf>":
                break;
            case "<alignment":
            case "<alignment/>":
                var s = {};
                if (n.vertical)
                    s.vertical = n.vertical;
                if (n.horizontal)
                    s.horizontal = n.horizontal;
                if (n.textRotation != null)
                    s.textRotation = n.textRotation;
                if (n.indent)
                    s.indent = n.indent;
                if (n.wrapText)
                    s.wrapText = n.wrapText;
                a.alignment = s;
                break;
            case "</alignment>":
                break;
            case "<protection":
            case "</protection>":
            case "<protection/>":
                break;
            case "<extLst":
            case "</extLst>":
                break;
            case "<ext":
                break;
            default:
                if (t.WTF)
                    throw new Error("unrecognized " + n[0] + " in cellXfs")
            }
        })
    }
    function Lh(e) {
        var r = [];
        r[r.length] = Te("cellXfs", null);
        e.forEach(function(e) {
            r[r.length] = Te("xf", null, e)
        });
        r[r.length] = "</cellXfs>";
        if (r.length === 2)
            return "";
        r[0] = Te("cellXfs", null, {
            count: r.length - 2
        }).replace("/>", ">");
        return r.join("")
    }
    var Uh = function e() {
        var r = /<numFmts([^>]*)>.*<\/numFmts>/;
        var t = /<cellXfs([^>]*)>.*<\/cellXfs>/;
        var a = /<fills([^>]*)>.*<\/fills>/;
        var n = /<fonts([^>]*)>.*<\/fonts>/;
        var s = /<borders([^>]*)>.*<\/borders>/;
        return function e(i, f, c) {
            var l = {};
            if (!i)
                return l;
            var o;
            if (o = i.match(r))
                Nh(o, l, c);
            if (o = i.match(n))
                yh(o, l, f, c);
            if (o = i.match(a))
                Ph(o, l, f, c);
            if (o = i.match(s))
                Fh(o, l, f, c);
            if (o = i.match(t))
                Mh(o, l, c);
            return l
        }
    }();
    var Hh = Te("styleSheet", null, {
        xmlns: Re.main[0],
        "xmlns:vt": Re.vt
    });
    Qt.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    function Vh(e, r) {
        var t = [Ae, Hh], a;
        if (e.SSF && (a = _h(e.SSF)) != null)
            t[t.length] = a;
        t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
        t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
        t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
        t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
        if (a = Lh(r.cellXfs))
            t[t.length] = a;
        t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
        t[t.length] = '<dxfs count="0"/>';
        t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
        if (t.length > 2) {
            t[t.length] = "</styleSheet>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    function Wh(e, r) {
        var t = e.read_shift(2);
        var a = jr(e, r - 2);
        return [t, a]
    }
    function Xh(e, r, t) {
        if (!t)
            t = vr(6 + 4 * r.length);
        t.write_shift(2, e);
        zr(r, t);
        return t.length > t.l ? t.slice(0, t.l) : t
    }
    function Gh(e, r, t) {
        var a = {};
        a.sz = e.read_shift(2) / 20;
        var n = kt(e, 2, t);
        if (n.fCondense)
            a.condense = 1;
        if (n.fExtend)
            a.extend = 1;
        if (n.fShadow)
            a.shadow = 1;
        if (n.fOutline)
            a.outline = 1;
        if (n.fStrikeout)
            a.strike = 1;
        if (n.fItalic)
            a.italic = 1;
        var s = e.read_shift(2);
        if (s === 700)
            a.bold = 1;
        switch (e.read_shift(2)) {
        case 1:
            a.vertAlign = "superscript";
            break;
        case 2:
            a.vertAlign = "subscript";
            break
        }
        var i = e.read_shift(1);
        if (i != 0)
            a.underline = i;
        var f = e.read_shift(1);
        if (f > 0)
            a.family = f;
        var c = e.read_shift(1);
        if (c > 0)
            a.charset = c;
        e.l++;
        a.color = Et(e, 8);
        switch (e.read_shift(1)) {
        case 1:
            a.scheme = "major";
            break;
        case 2:
            a.scheme = "minor";
            break
        }
        a.name = jr(e, r - 21);
        return a
    }
    function jh(e, r) {
        if (!r)
            r = vr(25 + 4 * 32);
        r.write_shift(2, e.sz * 20);
        Bt(e, r);
        r.write_shift(2, e.bold ? 700 : 400);
        var t = 0;
        if (e.vertAlign == "superscript")
            t = 1;
        else if (e.vertAlign == "subscript")
            t = 2;
        r.write_shift(2, t);
        r.write_shift(1, e.underline || 0);
        r.write_shift(1, e.family || 0);
        r.write_shift(1, e.charset || 0);
        r.write_shift(1, 0);
        St(e.color, r);
        var a = 0;
        if (e.scheme == "major")
            a = 1;
        if (e.scheme == "minor")
            a = 2;
        r.write_shift(1, a);
        zr(e.name, r);
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    var zh = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
    var Kh = w(zh);
    function Yh(e, r) {
        if (!r)
            r = vr(4 * 3 + 8 * 7 + 16 * 1);
        var t = Kh[e.patternType];
        if (t == null)
            t = 40;
        r.write_shift(4, t);
        var a = 0;
        if (t != 40) {
            St({
                auto: 1
            }, r);
            St({
                auto: 1
            }, r);
            for (; a < 12; ++a)
                r.write_shift(4, 0)
        } else {
            for (; a < 4; ++a)
                r.write_shift(4, 0);
            for (; a < 12; ++a)
                r.write_shift(4, 0)
        }
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    function $h(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        ur(e, r - 4);
        return {
            ixfe: t,
            ifmt: a
        }
    }
    function Qh(e, r, t) {
        if (!t)
            t = vr(16);
        t.write_shift(2, r || 0);
        t.write_shift(2, e.numFmtId || 0);
        t.write_shift(2, 0);
        t.write_shift(2, 0);
        t.write_shift(2, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
        t.write_shift(1, 0);
        return t
    }
    function Zh(e, r) {
        if (!r)
            r = vr(10);
        r.write_shift(1, 0);
        r.write_shift(1, 0);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        return r
    }
    function qh(e, r) {
        if (!r)
            r = vr(51);
        r.write_shift(1, 0);
        Zh(null, r);
        Zh(null, r);
        Zh(null, r);
        Zh(null, r);
        Zh(null, r);
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    function Jh(e, r) {
        if (!r)
            r = vr(12 + 4 * 10);
        r.write_shift(4, e.xfId);
        r.write_shift(2, 1);
        r.write_shift(1, +e.builtinId);
        r.write_shift(1, 0);
        nt(e.name || "", r);
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    function ed(e, r, t) {
        var a = vr(4 + 256 * 2 * 4);
        a.write_shift(4, e);
        nt(r, a);
        nt(t, a);
        return a.length > a.l ? a.slice(0, a.l) : a
    }
    function rd(e, r, t) {
        var a = {};
        a.NumberFmt = [];
        for (var n in m._table)
            a.NumberFmt[n] = m._table[n];
        a.CellXf = [];
        a.Fonts = [];
        var s = [];
        var i = false;
        br(e, function e(n, f, c) {
            switch (c) {
            case 44:
                a.NumberFmt[n[0]] = n[1];
                m.load(n[1], n[0]);
                break;
            case 43:
                a.Fonts.push(n);
                if (n.color.theme != null && r && r.themeElements && r.themeElements.clrScheme) {
                    n.color.rgb = dh(r.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)
                }
                break;
            case 1025:
                break;
            case 45:
                break;
            case 46:
                break;
            case 47:
                if (s[s.length - 1] == "BrtBeginCellXFs") {
                    a.CellXf.push(n)
                }
                break;
            case 48:
            case 507:
            case 572:
            case 475:
                break;
            case 1171:
            case 2102:
            case 1130:
            case 512:
            case 2095:
                break;
            case 35:
                i = true;
                break;
            case 36:
                i = false;
                break;
            case 37:
                s.push(f);
                break;
            case 38:
                s.pop();
                break;
            default:
                if ((f || "").indexOf("Begin") > 0)
                    s.push(f);
                else if ((f || "").indexOf("End") > 0)
                    s.pop();
                else if (!i || t.WTF)
                    throw new Error("Unexpected record " + c + " " + f)
            }
        });
        return a
    }
    function td(e, r) {
        if (!r)
            return;
        var t = 0;
        [[5, 8], [23, 26], [41, 44], [57, 392]].forEach(function(e) {
            for (var a = e[0]; a <= e[1]; ++a)
                if (r[a] != null)
                    ++t
        });
        if (t == 0)
            return;
        mr(e, "BrtBeginFmts", Gr(t));
        [[5, 8], [23, 26], [41, 44], [57, 392]].forEach(function(t) {
            for (var a = t[0]; a <= t[1]; ++a)
                if (r[a] != null)
                    mr(e, "BrtFmt", Xh(a, r[a]))
        });
        mr(e, "BrtEndFmts")
    }
    function ad(e, r) {
        var t = 1;
        if (t == 0)
            return;
        mr(e, "BrtBeginFonts", Gr(t));
        mr(e, "BrtFont", jh({
            sz: 12,
            color: {
                theme: 1
            },
            name: "Calibri",
            family: 2,
            scheme: "minor"
        }));
        mr(e, "BrtEndFonts")
    }
    function nd(e, r) {
        var t = 2;
        if (t == 0)
            return;
        mr(e, "BrtBeginFills", Gr(t));
        mr(e, "BrtFill", Yh({
            patternType: "none"
        }));
        mr(e, "BrtFill", Yh({
            patternType: "gray125"
        }));
        mr(e, "BrtEndFills")
    }
    function sd(e, r) {
        var t = 1;
        if (t == 0)
            return;
        mr(e, "BrtBeginBorders", Gr(t));
        mr(e, "BrtBorder", qh({}));
        mr(e, "BrtEndBorders")
    }
    function id(e, r) {
        var t = 1;
        mr(e, "BrtBeginCellStyleXFs", Gr(t));
        mr(e, "BrtXF", Qh({
            numFmtId: 0,
            fontId: 0,
            fillId: 0,
            borderId: 0
        }, 65535));
        mr(e, "BrtEndCellStyleXFs")
    }
    function fd(e, r) {
        mr(e, "BrtBeginCellXFs", Gr(r.length));
        r.forEach(function(r) {
            mr(e, "BrtXF", Qh(r, 0))
        });
        mr(e, "BrtEndCellXFs")
    }
    function cd(e, r) {
        var t = 1;
        mr(e, "BrtBeginStyles", Gr(1));
        mr(e, "BrtStyle", Jh({
            xfId: 0,
            builtinId: 0,
            name: "Normal"
        }));
        mr(e, "BrtEndStyles")
    }
    function ld(e, r) {
        var t = 0;
        mr(e, "BrtBeginDXFs", Gr(t));
        mr(e, "BrtEndDXFs")
    }
    function od(e, r) {
        var t = 0;
        mr(e, "BrtBeginTableStyles", ed(t, "TableStyleMedium9", "PivotStyleMedium4"));
        mr(e, "BrtEndTableStyles")
    }
    function ud(e, r) {
        return
    }
    function hd(e, r) {
        var t = pr();
        mr(t, "BrtBeginStyleSheet");
        td(t, e.SSF);
        ad(t, e);
        nd(t, e);
        sd(t, e);
        id(t, e);
        fd(t, r.cellXfs);
        cd(t, e);
        ld(t, e);
        od(t, e);
        ud(t, e);
        mr(t, "BrtEndStyleSheet");
        return t.end()
    }
    Qt.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
    function dd(e, r, t) {
        r.themeElements.clrScheme = [];
        var a = {};
        (e[0].match($) || []).forEach(function(e) {
            var n = q(e);
            switch (n[0]) {
            case "<a:clrScheme":
            case "</a:clrScheme>":
                break;
            case "<a:srgbClr":
                a.rgb = n.val;
                break;
            case "<a:sysClr":
                a.rgb = n.lastClr;
                break;
            case "<a:dk1>":
            case "</a:dk1>":
            case "<a:lt1>":
            case "</a:lt1>":
            case "<a:dk2>":
            case "</a:dk2>":
            case "<a:lt2>":
            case "</a:lt2>":
            case "<a:accent1>":
            case "</a:accent1>":
            case "<a:accent2>":
            case "</a:accent2>":
            case "<a:accent3>":
            case "</a:accent3>":
            case "<a:accent4>":
            case "</a:accent4>":
            case "<a:accent5>":
            case "</a:accent5>":
            case "<a:accent6>":
            case "</a:accent6>":
            case "<a:hlink>":
            case "</a:hlink>":
            case "<a:folHlink>":
            case "</a:folHlink>":
                if (n[0][1] === "/") {
                    r.themeElements.clrScheme.push(a);
                    a = {}
                } else {
                    a.name = n[0].substring(3, n[0].length - 1)
                }
                break;
            default:
                if (t && t.WTF)
                    throw new Error("Unrecognized " + n[0] + " in clrScheme")
            }
        })
    }
    function vd(e, r, t) {}
    function bd(e, r, t) {}
    var pd = /<a:clrScheme([^>]*)>[^\u2603]*<\/a:clrScheme>/;
    var md = /<a:fontScheme([^>]*)>[^\u2603]*<\/a:fontScheme>/;
    var gd = /<a:fmtScheme([^>]*)>[^\u2603]*<\/a:fmtScheme>/;
    function Ed(e, r, t) {
        r.themeElements = {};
        var a;
        [["clrScheme", pd, dd], ["fontScheme", md, vd], ["fmtScheme", gd, bd]].forEach(function(n) {
            if (!(a = e.match(n[1])))
                throw new Error(n[0] + " not found in themeElements");
            n[2](a, r, t)
        })
    }
    var Sd = /<a:themeElements([^>]*)>[^\u2603]*<\/a:themeElements>/;
    function kd(e, r) {
        if (!e || e.length === 0)
            return kd(Bd());
        var t;
        var a = {};
        if (!(t = e.match(Sd)))
            throw new Error("themeElements not found in theme");
        Ed(t[0], a, r);
        return a
    }
    function Bd(e, r) {
        if (r && r.themeXLSX)
            return r.themeXLSX;
        var t = [Ae];
        t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
        t[t.length] = "<a:themeElements>";
        t[t.length] = '<a:clrScheme name="Office">';
        t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
        t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
        t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
        t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
        t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
        t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
        t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
        t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
        t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
        t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
        t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
        t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
        t[t.length] = "</a:clrScheme>";
        t[t.length] = '<a:fontScheme name="Office">';
        t[t.length] = "<a:majorFont>";
        t[t.length] = '<a:latin typeface="Cambria"/>';
        t[t.length] = '<a:ea typeface=""/>';
        t[t.length] = '<a:cs typeface=""/>';
        t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
        t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
        t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
        t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
        t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
        t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
        t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
        t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
        t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
        t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
        t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
        t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
        t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
        t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
        t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
        t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
        t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
        t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
        t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
        t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
        t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
        t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
        t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
        t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
        t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
        t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
        t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
        t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
        t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
        t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
        t[t.length] = "</a:majorFont>";
        t[t.length] = "<a:minorFont>";
        t[t.length] = '<a:latin typeface="Calibri"/>';
        t[t.length] = '<a:ea typeface=""/>';
        t[t.length] = '<a:cs typeface=""/>';
        t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
        t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
        t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
        t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
        t[t.length] = '<a:font script="Arab" typeface="Arial"/>';
        t[t.length] = '<a:font script="Hebr" typeface="Arial"/>';
        t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
        t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
        t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
        t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
        t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
        t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
        t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
        t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
        t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
        t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
        t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
        t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
        t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
        t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
        t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
        t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
        t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
        t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
        t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
        t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
        t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
        t[t.length] = '<a:font script="Viet" typeface="Arial"/>';
        t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
        t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
        t[t.length] = "</a:minorFont>";
        t[t.length] = "</a:fontScheme>";
        t[t.length] = '<a:fmtScheme name="Office">';
        t[t.length] = "<a:fillStyleLst>";
        t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
        t[t.length] = '<a:gradFill rotWithShape="1">';
        t[t.length] = "<a:gsLst>";
        t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t[t.length] = "</a:gsLst>";
        t[t.length] = '<a:lin ang="16200000" scaled="1"/>';
        t[t.length] = "</a:gradFill>";
        t[t.length] = '<a:gradFill rotWithShape="1">';
        t[t.length] = "<a:gsLst>";
        t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t[t.length] = "</a:gsLst>";
        t[t.length] = '<a:lin ang="16200000" scaled="0"/>';
        t[t.length] = "</a:gradFill>";
        t[t.length] = "</a:fillStyleLst>";
        t[t.length] = "<a:lnStyleLst>";
        t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
        t[t.length] = "</a:lnStyleLst>";
        t[t.length] = "<a:effectStyleLst>";
        t[t.length] = "<a:effectStyle>";
        t[t.length] = "<a:effectLst>";
        t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
        t[t.length] = "</a:effectLst>";
        t[t.length] = "</a:effectStyle>";
        t[t.length] = "<a:effectStyle>";
        t[t.length] = "<a:effectLst>";
        t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
        t[t.length] = "</a:effectLst>";
        t[t.length] = "</a:effectStyle>";
        t[t.length] = "<a:effectStyle>";
        t[t.length] = "<a:effectLst>";
        t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
        t[t.length] = "</a:effectLst>";
        t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
        t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
        t[t.length] = "</a:effectStyle>";
        t[t.length] = "</a:effectStyleLst>";
        t[t.length] = "<a:bgFillStyleLst>";
        t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
        t[t.length] = '<a:gradFill rotWithShape="1">';
        t[t.length] = "<a:gsLst>";
        t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
        t[t.length] = "</a:gsLst>";
        t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
        t[t.length] = "</a:gradFill>";
        t[t.length] = '<a:gradFill rotWithShape="1">';
        t[t.length] = "<a:gsLst>";
        t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
        t[t.length] = "</a:gsLst>";
        t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
        t[t.length] = "</a:gradFill>";
        t[t.length] = "</a:bgFillStyleLst>";
        t[t.length] = "</a:fmtScheme>";
        t[t.length] = "</a:themeElements>";
        t[t.length] = "<a:objectDefaults>";
        t[t.length] = "<a:spDef>";
        t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
        t[t.length] = "</a:spDef>";
        t[t.length] = "<a:lnDef>";
        t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
        t[t.length] = "</a:lnDef>";
        t[t.length] = "</a:objectDefaults>";
        t[t.length] = "<a:extraClrSchemeLst/>";
        t[t.length] = "</a:theme>";
        return t.join("")
    }
    function Cd(e, r, t) {
        var a = e.read_shift(4);
        if (a === 124226)
            return;
        e.l += r - 4
    }
    function Td(e, r) {
        return e.read_shift(4)
    }
    function wd(e, r) {
        var t = {};
        t.xclrType = e.read_shift(2);
        t.nTintShade = e.read_shift(2);
        switch (t.xclrType) {
        case 0:
            e.l += 4;
            break;
        case 1:
            t.xclrValue = Id(e, 4);
            break;
        case 2:
            t.xclrValue = on(e, 4);
            break;
        case 3:
            t.xclrValue = Td(e, 4);
            break;
        case 4:
            e.l += 4;
            break
        }
        e.l += 8;
        return t
    }
    function Id(e, r) {
        return ur(e, r)
    }
    function Ad(e, r) {
        return ur(e, r)
    }
    function Rd(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(2);
        var n = [t];
        switch (t) {
        case 4:
        case 5:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
            n[1] = wd(e, a);
            break;
        case 6:
            n[1] = Ad(e, a);
            break;
        case 14:
        case 15:
            n[1] = e.read_shift(a === 5 ? 1 : 2);
            break;
        default:
            throw new Error("Unrecognized ExtProp type: " + t + " " + a)
        }
        return n
    }
    function xd(e, r) {
        var t = e.l + r;
        e.l += 2;
        var a = e.read_shift(2);
        e.l += 2;
        var n = e.read_shift(2);
        var s = [];
        while (n-- > 0)
            s.push(Rd(e, t - e.l));
        return {
            ixfe: a,
            ext: s
        }
    }
    function Dd(e, r) {
        r.forEach(function(e) {
            switch (e[0]) {
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break
            }
        })
    }
    function Od(e, r) {
        var t = [];
        if (!e)
            return t;
        var a = 0
          , n = 1;
        (e.match($) || []).forEach(function(e) {
            var r = q(e);
            switch (r[0]) {
            case "<?xml":
                break;
            case "<calcChain":
            case "<calcChain>":
            case "</calcChain>":
                break;
            case "<c":
                delete r[0];
                if (r.i)
                    n = r.i;
                else
                    r.i = n;
                t.push(r);
                break
            }
        });
        return t
    }
    function Fd(e, r) {}
    function Pd(e, r) {
        var t = {};
        t.i = e.read_shift(4);
        var a = {};
        a.r = e.read_shift(4);
        a.c = e.read_shift(4);
        t.r = yr(a);
        var n = e.read_shift(1);
        if (n & 2)
            t.l = "1";
        if (n & 8)
            t.a = "1";
        return t
    }
    function yd(e, r) {
        var t = [];
        var a = false;
        br(e, function e(n, s, i) {
            switch (i) {
            case 63:
                t.push(n);
                break;
            default:
                if ((s || "").indexOf("Begin") > 0) {} else if ((s || "").indexOf("End") > 0) {} else if (!a || r.WTF)
                    throw new Error("Unexpected record " + i + " " + s)
            }
        });
        return t
    }
    function Nd(e, r) {}
    Qt.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
    Qt.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
    function _d(e, r) {
        if (!e)
            return "??";
        var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
        return r["!id"][t].Target
    }
    var Md = 1024;
    function Ld(e, r) {
        var t = [21600, 21600];
        var a = ["m0,0l0", t[1], t[0], t[1], t[0], "0xe"].join(",");
        var n = [Te("xml", null, {
            "xmlns:v": xe.v,
            "xmlns:o": xe.o,
            "xmlns:x": xe.x,
            "xmlns:mv": xe.mv
        }).replace(/\/>/, ">"), Te("o:shapelayout", Te("o:idmap", null, {
            "v:ext": "edit",
            data: e
        }), {
            "v:ext": "edit"
        }), Te("v:shapetype", [Te("v:stroke", null, {
            joinstyle: "miter"
        }), Te("v:path", null, {
            gradientshapeok: "t",
            "o:connecttype": "rect"
        })].join(""), {
            id: "_x0000_t202",
            "o:spt": 202,
            coordsize: t.join(","),
            path: a
        })];
        while (Md < e * 1e3)
            Md += 1e3;
        r.map(function(e) {
            return Pr(e[0])
        }).forEach(function(e, r) {
            n = n.concat(["<v:shape" + Ce({
                id: "_x0000_s" + ++Md,
                type: "#_x0000_t202",
                style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10;visibility:hidden",
                fillcolor: "#ECFAD4",
                strokecolor: "#edeaa1"
            }) + ">", Te("v:fill", Te("o:fill", null, {
                type: "gradientUnscaled",
                "v:ext": "view"
            }), {
                color2: "#BEFF82",
                angle: "-180",
                type: "gradient"
            }), Te("v:shadow", null, {
                on: "t",
                obscured: "t"
            }), Te("v:path", null, {
                "o:connecttype": "none"
            }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", Be("x:Anchor", [e.c, 0, e.r, 0, e.c + 3, 100, e.r + 5, 100].join(",")), Be("x:AutoFill", "False"), Be("x:Row", String(e.r)), Be("x:Column", String(e.c)), "<x:Visible/>", "</x:ClientData>", "</v:shape>"])
        });
        n.push("</xml>");
        return n.join("")
    }
    Qt.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
    function Ud(e, r, t, a, n) {
        for (var s = 0; s != r.length; ++s) {
            var i = r[s];
            var f = og(X(e, i.replace(/^\//, ""), true), i, n);
            if (!f || !f.length)
                continue;
            var c = C(t);
            for (var l = 0; l != c.length; ++l) {
                var o = c[l];
                var u = a[o];
                if (u) {
                    var h = u[i];
                    if (h)
                        Hd(o, t[o], f)
                }
            }
        }
    }
    function Hd(e, r, t) {
        var a = Array.isArray(r);
        var n, s;
        t.forEach(function(e) {
            if (a) {
                s = Pr(e.ref);
                if (!r[s.r])
                    r[s.r] = [];
                n = r[s.r][s.c]
            } else
                n = r[e.ref];
            if (!n) {
                n = {};
                if (a)
                    r[s.r][s.c] = n;
                else
                    r[e.ref] = n;
                var t = Ur(r["!ref"] || "BDWGO1000001:A1");
                var i = Pr(e.ref);
                if (t.s.r > i.r)
                    t.s.r = i.r;
                if (t.e.r < i.r)
                    t.e.r = i.r;
                if (t.s.c > i.c)
                    t.s.c = i.c;
                if (t.e.c < i.c)
                    t.e.c = i.c;
                var f = Lr(t);
                if (f !== r["!ref"])
                    r["!ref"] = f
            }
            if (!n.c)
                n.c = [];
            var c = {
                a: e.author,
                t: e.t,
                r: e.r
            };
            if (e.h)
                c.h = e.h;
            n.c.push(c)
        })
    }
    function Vd(e, r) {
        if (e.match(/<(?:\w+:)?comments *\/>/))
            return [];
        var t = [];
        var a = [];
        var n = e.match(/<(?:\w+:)?authors>([^\u2603]*)<\/(?:\w+:)?authors>/);
        if (n && n[1])
            n[1].split(/<\/\w*:?author>/).forEach(function(e) {
                if (e === "" || e.trim() === "")
                    return;
                var r = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
                if (r)
                    t.push(r[1])
            });
        var s = e.match(/<(?:\w+:)?commentList>([^\u2603]*)<\/(?:\w+:)?commentList>/);
        if (s && s[1])
            s[1].split(/<\/\w*:?comment>/).forEach(function(e, n) {
                if (e === "" || e.trim() === "")
                    return;
                var s = e.match(/<(?:\w+:)?comment[^>]*>/);
                if (!s)
                    return;
                var i = q(s[0]);
                var f = {
                    author: i.authorId && t[i.authorId] ? t[i.authorId] : "sheetjsghost",
                    ref: i.ref,
                    guid: i.guid
                };
                var c = Pr(i.ref);
                if (r.sheetRows && r.sheetRows <= c.r)
                    return;
                var l = e.match(/<(?:\w+:)?text>([^\u2603]*)<\/(?:\w+:)?text>/);
                var o = !!l && !!l[1] && Ru(l[1]) || {
                    r: "",
                    t: "",
                    h: ""
                };
                f.r = o.r;
                if (o.r == "<t></t>")
                    o.t = o.h = "";
                f.t = o.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                if (r.cellHTML)
                    f.h = o.h;
                a.push(f)
            });
        return a
    }
    var Wd = Te("comments", null, {
        xmlns: Re.main[0]
    });
    function Xd(e, r) {
        var t = [Ae, Wd];
        var a = [];
        t.push("<authors>");
        e.map(function(e) {
            return e[1]
        }).forEach(function(e) {
            e.map(function(e) {
                return se(e.a)
            }).forEach(function(e) {
                if (a.indexOf(e) > -1)
                    return;
                a.push(e);
                t.push("<author>" + e + "</author>")
            })
        });
        t.push("</authors>");
        t.push("<commentList>");
        e.forEach(function(e) {
            e[1].forEach(function(r) {
                t.push('<comment ref="' + e[0] + '" authorId="' + a.indexOf(se(r.a)) + '"><text>');
                t.push(Be("t", r.t == null ? "" : r.t));
                t.push("</text></comment>")
            })
        });
        t.push("</commentList>");
        if (t.length > 2) {
            t[t.length] = "</comments>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    function Gd(e, r) {
        var t = {};
        t.iauthor = e.read_shift(4);
        var a = dt(e, 16);
        t.rfx = a.s;
        t.ref = yr(a.s);
        e.l += 16;
        return t
    }
    function jd(e, r) {
        if (r == null)
            r = vr(36);
        r.write_shift(4, e[1].iauthor);
        vt(e[0], r);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        return r
    }
    var zd = jr;
    function Kd(e, r) {
        var t = [];
        var a = [];
        var n = {};
        var s = false;
        br(e, function e(i, f, c) {
            switch (c) {
            case 632:
                a.push(i);
                break;
            case 635:
                n = i;
                break;
            case 637:
                n.t = i.t;
                n.h = i.h;
                n.r = i.r;
                break;
            case 636:
                n.author = a[n.iauthor];
                delete n.iauthor;
                if (r.sheetRows && r.sheetRows <= n.rfx.r)
                    break;
                if (!n.t)
                    n.t = "";
                delete n.rfx;
                t.push(n);
                break;
            case 35:
                s = true;
                break;
            case 36:
                s = false;
                break;
            case 37:
                break;
            case 38:
                break;
            default:
                if ((f || "").indexOf("Begin") > 0) {} else if ((f || "").indexOf("End") > 0) {} else if (!s || r.WTF)
                    throw new Error("Unexpected record " + c + " " + f)
            }
        });
        return t
    }
    function Yd(e, r) {
        var t = pr();
        var a = [];
        mr(t, "BrtBeginComments");
        {
            mr(t, "BrtBeginCommentAuthors");
            e.forEach(function(e) {
                e[1].forEach(function(e) {
                    if (a.indexOf(e.a) > -1)
                        return;
                    a.push(e.a.substr(0, 54));
                    mr(t, "BrtCommentAuthor", zr(e.a.substr(0, 54)))
                })
            });
            mr(t, "BrtEndCommentAuthors")
        }
        {
            mr(t, "BrtBeginCommentList");
            e.forEach(function(e) {
                e[1].forEach(function(r) {
                    r.iauthor = a.indexOf(r.a);
                    var n = {
                        s: Pr(e[0]),
                        e: Pr(e[0])
                    };
                    mr(t, "BrtBeginComment", jd([n, r]));
                    if (r.t && r.t.length > 0)
                        mr(t, "BrtCommentText", qr(r));
                    mr(t, "BrtEndComment");
                    delete r.iauthor
                })
            });
            mr(t, "BrtEndCommentList")
        }
        mr(t, "BrtEndComments");
        return t.end()
    }
    Qt.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
    Qt.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
    function $d() {
        return {
            "!type": "dialog"
        }
    }
    function Qd() {
        return {
            "!type": "dialog"
        }
    }
    function Zd() {
        return {
            "!type": "macro"
        }
    }
    function qd() {
        return {
            "!type": "macro"
        }
    }
    var Jd = function() {
        var e = /(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g;
        var r = {
            r: 0,
            c: 0
        };
        function t(e, t, a, n, s, i) {
            var f = n.length > 0 ? parseInt(n, 10) | 0 : 0
              , c = i.length > 0 ? parseInt(i, 10) | 0 : 0;
            if (c < 0 && s.length === 0)
                c = 0;
            var l = false
              , o = false;
            if (s.length > 0 || i.length == 0)
                l = true;
            if (l)
                c += r.c;
            else
                --c;
            if (a.length > 0 || n.length == 0)
                o = true;
            if (o)
                f += r.r;
            else
                --f;
            return t + (l ? "" : "$") + xr(c) + (o ? "" : "$") + wr(f)
        }
        return function a(n, s) {
            r = s;
            return n.replace(e, t)
        }
    }();
    var ev = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g;
    var rv = function() {
        return function e(r, t) {
            return r.replace(ev, function(e, r, a, n, s, i, f, c) {
                var l = Rr(n) - t.c;
                var o = Tr(i) - t.r;
                return r + "R" + (o == 0 ? "" : "[" + o + "]") + "C" + (l == 0 ? "" : "[" + l + "]")
            })
        }
    }();
    function tv(e, r) {
        return e.replace(ev, function(e, t, a, n, s, i, f, c) {
            return t + (a == "$" ? a + n : xr(Rr(n) + r.c)) + (s == "$" ? s + i : wr(Tr(i) + r.r))
        })
    }
    function av(e, r, t) {
        var a = Mr(r)
          , n = a.s
          , s = Pr(t);
        var i = {
            r: s.r - n.r,
            c: s.c - n.c
        };
        return tv(e, i)
    }
    function nv(e) {
        return function(r, t) {
            r.l += e;
            return
        }
    }
    function sv(e) {
        e.l += 1;
        return
    }
    function iv(e, r) {
        var t = e.read_shift(r == 1 ? 1 : 2);
        return [t & 16383, t >> 14 & 1, t >> 15 & 1]
    }
    function fv(e, r, t) {
        var a = 2;
        if (t) {
            if (t.biff >= 2 && t.biff <= 5)
                return cv(e, r, t);
            else if (t.biff == 12)
                a = 4
        }
        var n = e.read_shift(a)
          , s = e.read_shift(a);
        var i = iv(e, 2);
        var f = iv(e, 2);
        return {
            s: {
                r: n,
                c: i[0],
                cRel: i[1],
                rRel: i[2]
            },
            e: {
                r: s,
                c: f[0],
                cRel: f[1],
                rRel: f[2]
            }
        }
    }
    function cv(e) {
        var r = iv(e, 2)
          , t = iv(e, 2);
        var a = e.read_shift(1);
        var n = e.read_shift(1);
        return {
            s: {
                r: r[0],
                c: a,
                cRel: r[1],
                rRel: r[2]
            },
            e: {
                r: t[0],
                c: n,
                cRel: t[1],
                rRel: t[2]
            }
        }
    }
    function lv(e, r) {
        var t = e.read_shift(r == 12 ? 4 : 2)
          , a = e.read_shift(r == 12 ? 4 : 2);
        var n = iv(e, 2);
        var s = iv(e, 2);
        return {
            s: {
                r: t,
                c: n[0],
                cRel: n[1],
                rRel: n[2]
            },
            e: {
                r: a,
                c: s[0],
                cRel: s[1],
                rRel: s[2]
            }
        }
    }
    function ov(e, r, t) {
        if (t && t.biff >= 2 && t.biff <= 5)
            return uv(e, r, t);
        var a = e.read_shift(t && t.biff == 12 ? 4 : 2);
        var n = iv(e, 2);
        return {
            r: a,
            c: n[0],
            cRel: n[1],
            rRel: n[2]
        }
    }
    function uv(e, r, t) {
        var a = iv(e, 2);
        var n = e.read_shift(1);
        return {
            r: a[0],
            c: n,
            cRel: a[1],
            rRel: a[2]
        }
    }
    function hv(e, r, t) {
        var a = t && t.biff ? t.biff : 8;
        if (a >= 2 && a <= 5)
            return dv(e, r, t);
        var n = e.read_shift(a >= 12 ? 4 : 2);
        var s = e.read_shift(2);
        var i = (s & 32768) >> 15
          , f = (s & 16384) >> 14;
        s &= 16383;
        if (f == 1)
            while (n > 524287)
                n -= 1048576;
        if (i == 1)
            while (s > 8191)
                s = s - 16384;
        return {
            r: n,
            c: s,
            cRel: i,
            rRel: f
        }
    }
    function dv(e, r) {
        var t = e.read_shift(2);
        var a = e.read_shift(1);
        var n = (t & 32768) >> 15
          , s = (t & 16384) >> 14;
        t &= 16383;
        if (n == 1 && t >= 8192)
            t = t - 16384;
        if (s == 1 && a >= 128)
            a = a - 256;
        return {
            r: t,
            c: a,
            cRel: s,
            rRel: n
        }
    }
    function vv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        var n = fv(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
        return [a, n]
    }
    function bv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        var n = e.read_shift(2, "i");
        var s = 8;
        if (t)
            switch (t.biff) {
            case 5:
                e.l += 12;
                s = 6;
                break;
            case 12:
                s = 12;
                break
            }
        var i = fv(e, s, t);
        return [a, n, i]
    }
    function pv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        e.l += t && t.biff > 8 ? 12 : 8;
        return [a]
    }
    function mv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        var n = e.read_shift(2);
        var s = 8;
        if (t)
            switch (t.biff) {
            case 5:
                e.l += 12;
                s = 6;
                break;
            case 12:
                s = 12;
                break
            }
        e.l += s;
        return [a, n]
    }
    function gv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        var n = lv(e, t && t.biff > 8 ? 12 : 8, t);
        return [a, n]
    }
    function Ev(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7;
        return [a]
    }
    function Sv(e, r) {
        var t = e[e.l + 1] & 1;
        var a = 1;
        e.l += 4;
        return [t, a]
    }
    function kv(e, r, t) {
        e.l += 2;
        var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
        var n = [];
        for (var s = 0; s <= a; ++s)
            n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
        return n
    }
    function Bv(e, r, t) {
        var a = e[e.l + 1] & 255 ? 1 : 0;
        e.l += 2;
        return [a, e.read_shift(t && t.biff == 2 ? 1 : 2)]
    }
    function Cv(e, r, t) {
        var a = e[e.l + 1] & 255 ? 1 : 0;
        e.l += 2;
        return [a, e.read_shift(t && t.biff == 2 ? 1 : 2)]
    }
    function Tv(e, r) {
        var t = e[e.l + 1] & 255 ? 1 : 0;
        e.l += 2;
        return [t, e.read_shift(2)]
    }
    function wv(e, r, t) {
        var a = e[e.l + 1] & 255 ? 1 : 0;
        e.l += t && t.biff == 2 ? 3 : 4;
        return [a]
    }
    function Iv(e, r) {
        var t = e.read_shift(1)
          , a = e.read_shift(1);
        return [t, a]
    }
    function Av(e, r) {
        e.read_shift(2);
        return Iv(e, 2)
    }
    function Rv(e, r) {
        e.read_shift(2);
        return Iv(e, 2)
    }
    function xv(e, r, t) {
        var a = e[e.l] & 31;
        var n = (e[e.l] & 96) >> 5;
        e.l += 1;
        var s = ov(e, 0, t);
        return [n, s]
    }
    function Dv(e, r, t) {
        var a = (e[e.l] & 96) >> 5;
        e.l += 1;
        var n = hv(e, 0, t);
        return [a, n]
    }
    function Ov(e, r, t) {
        var a = (e[e.l] & 96) >> 5;
        e.l += 1;
        var n = e.read_shift(2);
        var s = ov(e, 0, t);
        return [a, n, s]
    }
    function Fv(e, r, t) {
        var a = e[e.l] & 31;
        var n = (e[e.l] & 96) >> 5;
        e.l += 1;
        var s = e.read_shift(t && t.biff <= 3 ? 1 : 2);
        return [Gb[s], Xb[s], n]
    }
    function Pv(e, r, t) {
        e.l++;
        var a = e.read_shift(1)
          , n = t && t.biff <= 3 ? [0, e.read_shift(1)] : yv(e);
        return [a, (n[0] === 0 ? Xb : Wb)[n[1]]]
    }
    function yv(e, r) {
        return [e[e.l + 1] >> 7, e.read_shift(2) & 32767]
    }
    function Nv(e, r, t) {
        e.l += t && t.biff == 2 ? 3 : 4;
        return
    }
    var _v = sv;
    function Mv(e, r, t) {
        e.l++;
        if (t && t.biff == 12)
            return [e.read_shift(4, "i"), 0];
        var a = e.read_shift(2);
        var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
        return [a, n]
    }
    function Lv(e, r) {
        e.l++;
        return mt[e.read_shift(1)]
    }
    function Uv(e, r) {
        e.l++;
        return e.read_shift(2)
    }
    function Hv(e, r) {
        e.l++;
        return e.read_shift(1) !== 0
    }
    function Vv(e, r) {
        e.l++;
        return bt(e, 8)
    }
    function Wv(e, r, t) {
        e.l++;
        return qa(e, r - 1, t)
    }
    function Xv(e, r) {
        var t = [e.read_shift(1)];
        if (r == 12)
            switch (t[0]) {
            case 2:
                t[0] = 4;
                break;
            case 4:
                t[0] = 16;
                break;
            case 0:
                t[0] = 1;
                break;
            case 1:
                t[0] = 2;
                break
            }
        switch (t[0]) {
        case 4:
            t[1] = Ka(e, 1) ? "TRUE" : "FALSE";
            e.l += 7;
            break;
        case 16:
            t[1] = mt[e[e.l]];
            e.l += 8;
            break;
        case 0:
            e.l += 8;
            break;
        case 1:
            t[1] = bt(e, 8);
            break;
        case 2:
            t[1] = tn(e, 0, {
                biff: r > 0 && r < 8 ? 2 : r
            });
            break
        }
        return t
    }
    function Gv(e, r) {
        var t = e.read_shift(2);
        var a = [];
        for (var n = 0; n != t; ++n)
            a.push(En(e, 8));
        return a
    }
    function jv(e, r, t) {
        var a = 0
          , n = 0;
        if (t.biff == 12) {
            a = e.read_shift(4);
            n = e.read_shift(4)
        } else {
            n = 1 + e.read_shift(1);
            a = 1 + e.read_shift(2)
        }
        if (t.biff >= 2 && t.biff < 8) {
            --a;
            if (--n == 0)
                n = 256
        }
        for (var s = 0, i = []; s != a && (i[s] = []); ++s)
            for (var f = 0; f != n; ++f)
                i[s][f] = Xv(e, t.biff);
        return i
    }
    function zv(e, r, t) {
        var a = e.read_shift(1) >>> 5 & 3;
        var n = !t || t.biff >= 8 ? 4 : 2;
        var s = e.read_shift(n);
        switch (t.biff) {
        case 2:
            e.l += 5;
            break;
        case 3:
        case 4:
            e.l += 8;
            break;
        case 5:
            e.l += 12;
            break
        }
        return [a, 0, s]
    }
    function Kv(e, r, t) {
        if (t.biff == 5)
            return Yv(e, r, t);
        var a = e.read_shift(1) >>> 5 & 3;
        var n = e.read_shift(2);
        var s = e.read_shift(4);
        return [a, n, s]
    }
    function Yv(e, r, t) {
        var a = e.read_shift(1) >>> 5 & 3;
        var n = e.read_shift(2, "i");
        e.l += 8;
        var s = e.read_shift(2);
        e.l += 12;
        return [a, n, s]
    }
    function $v(e, r, t) {
        var a = e.read_shift(1) >>> 5 & 3;
        e.l += t && t.biff == 2 ? 3 : 4;
        var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
        return [a, n]
    }
    function Qv(e, r, t) {
        var a = e.read_shift(1) >>> 5 & 3;
        var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
        return [a, n]
    }
    function Zv(e, r, t) {
        var a = e.read_shift(1) >>> 5 & 3;
        e.l += 4;
        if (t.biff == 12)
            e.l += 2;
        return [a]
    }
    function qv(e, r, t) {
        var a = (e[e.l++] & 96) >> 5;
        var n = e.read_shift(2);
        var s = 4;
        if (t)
            switch (t.biff) {
            case 5:
                throw new Error("PtgRefErr3d -- 5");
            case 12:
                s = 6;
                break
            }
        e.l += s;
        return [a, n]
    }
    var Jv = sv;
    var eb = sv;
    var rb = sv;
    var tb = sv;
    var ab = sv;
    var nb = sv;
    var sb = sv;
    var ib = sv;
    var fb = sv;
    var cb = sv;
    var lb = sv;
    var ob = sv;
    var ub = sv;
    var hb = sv;
    var db = sv;
    var vb = sv;
    var bb = sv;
    var pb = sv;
    var mb = sv;
    var gb = ur;
    var Eb = ur;
    var Sb = ur;
    var kb = {
        1: {
            n: "PtgExp",
            f: Mv
        },
        2: {
            n: "PtgTbl",
            f: Sb
        },
        3: {
            n: "PtgAdd",
            f: Jv
        },
        4: {
            n: "PtgSub",
            f: vb
        },
        5: {
            n: "PtgMul",
            f: cb
        },
        6: {
            n: "PtgDiv",
            f: eb
        },
        7: {
            n: "PtgPower",
            f: hb
        },
        8: {
            n: "PtgConcat",
            f: _v
        },
        9: {
            n: "PtgLt",
            f: ib
        },
        10: {
            n: "PtgLe",
            f: sb
        },
        11: {
            n: "PtgEq",
            f: rb
        },
        12: {
            n: "PtgGe",
            f: tb
        },
        13: {
            n: "PtgGt",
            f: ab
        },
        14: {
            n: "PtgNe",
            f: lb
        },
        15: {
            n: "PtgIsect",
            f: nb
        },
        16: {
            n: "PtgUnion",
            f: pb
        },
        17: {
            n: "PtgRange",
            f: db
        },
        18: {
            n: "PtgUplus",
            f: mb
        },
        19: {
            n: "PtgUminus",
            f: bb
        },
        20: {
            n: "PtgPercent",
            f: ub
        },
        21: {
            n: "PtgParen",
            f: ob
        },
        22: {
            n: "PtgMissArg",
            f: fb
        },
        23: {
            n: "PtgStr",
            f: Wv
        },
        28: {
            n: "PtgErr",
            f: Lv
        },
        29: {
            n: "PtgBool",
            f: Hv
        },
        30: {
            n: "PtgInt",
            f: Uv
        },
        31: {
            n: "PtgNum",
            f: Vv
        },
        32: {
            n: "PtgArray",
            f: Ev
        },
        33: {
            n: "PtgFunc",
            f: Fv
        },
        34: {
            n: "PtgFuncVar",
            f: Pv
        },
        35: {
            n: "PtgName",
            f: zv
        },
        36: {
            n: "PtgRef",
            f: xv
        },
        37: {
            n: "PtgArea",
            f: vv
        },
        38: {
            n: "PtgMemArea",
            f: $v
        },
        39: {
            n: "PtgMemErr",
            f: gb
        },
        40: {
            n: "PtgMemNoMem",
            f: Eb
        },
        41: {
            n: "PtgMemFunc",
            f: Qv
        },
        42: {
            n: "PtgRefErr",
            f: Zv
        },
        43: {
            n: "PtgAreaErr",
            f: pv
        },
        44: {
            n: "PtgRefN",
            f: Dv
        },
        45: {
            n: "PtgAreaN",
            f: gv
        },
        57: {
            n: "PtgNameX",
            f: Kv
        },
        58: {
            n: "PtgRef3d",
            f: Ov
        },
        59: {
            n: "PtgArea3d",
            f: bv
        },
        60: {
            n: "PtgRefErr3d",
            f: qv
        },
        61: {
            n: "PtgAreaErr3d",
            f: mv
        },
        255: {}
    };
    var Bb = {
        64: 32,
        96: 32,
        65: 33,
        97: 33,
        66: 34,
        98: 34,
        67: 35,
        99: 35,
        68: 36,
        100: 36,
        69: 37,
        101: 37,
        70: 38,
        102: 38,
        71: 39,
        103: 39,
        72: 40,
        104: 40,
        73: 41,
        105: 41,
        74: 42,
        106: 42,
        75: 43,
        107: 43,
        76: 44,
        108: 44,
        77: 45,
        109: 45,
        89: 57,
        121: 57,
        90: 58,
        122: 58,
        91: 59,
        123: 59,
        92: 60,
        124: 60,
        93: 61,
        125: 61
    };
    (function() {
        for (var e in Bb)
            kb[e] = kb[Bb[e]]
    }
    )();
    var Cb = {};
    var Tb = {
        1: {
            n: "PtgAttrSemi",
            f: wv
        },
        2: {
            n: "PtgAttrIf",
            f: Cv
        },
        4: {
            n: "PtgAttrChoose",
            f: kv
        },
        8: {
            n: "PtgAttrGoto",
            f: Bv
        },
        16: {
            n: "PtgAttrSum",
            f: Nv
        },
        32: {
            n: "PtgAttrBaxcel",
            f: Sv
        },
        64: {
            n: "PtgAttrSpace",
            f: Av
        },
        65: {
            n: "PtgAttrSpaceSemi",
            f: Rv
        },
        128: {
            n: "PtgAttrIfError",
            f: Tv
        },
        255: {}
    };
    function wb(e, r, t) {
        var a = e.l + r;
        var n = hn(e, 6);
        if (t.biff == 2)
            ++e.l;
        var s = Ib(e, 8);
        var i = e.read_shift(1);
        if (t.biff != 2) {
            e.read_shift(1);
            if (t.biff >= 5) {
                var f = e.read_shift(4)
            }
        }
        var c = xb(e, a - e.l, t);
        return {
            cell: n,
            val: s[0],
            formula: c,
            shared: i >> 3 & 1,
            tt: s[1]
        }
    }
    function Ib(e) {
        var r;
        if (qe(e, e.l + 6) !== 65535)
            return [bt(e), "n"];
        switch (e[e.l]) {
        case 0:
            e.l += 8;
            return ["String", "s"];
        case 1:
            r = e[e.l + 2] === 1;
            e.l += 8;
            return [r, "b"];
        case 2:
            r = e[e.l + 2];
            e.l += 8;
            return [r, "e"];
        case 3:
            e.l += 8;
            return ["", "s"]
        }
        return []
    }
    function Ab(e, r, t, a) {
        if (a.biff < 8)
            return ur(e, r);
        var n = e.l + r;
        var s = [];
        for (var i = 0; i !== t.length; ++i) {
            switch (t[i][0]) {
            case "PtgArray":
                t[i][1] = jv(e, 0, a);
                s.push(t[i][1]);
                break;
            case "PtgMemArea":
                t[i][2] = Gv(e, t[i][1]);
                s.push(t[i][2]);
                break;
            case "PtgExp":
                if (a && a.biff == 12) {
                    t[i][1][1] = e.read_shift(4);
                    s.push(t[i][1])
                }
                break;
            default:
                break
            }
        }
        r = n - e.l;
        if (r !== 0)
            s.push(ur(e, r));
        return s
    }
    function Rb(e, r, t, a) {
        var n = e.l + r;
        var s = Fb(e, a, t);
        var i;
        if (n !== e.l)
            i = Ab(e, n - e.l, s, t);
        return [s, i]
    }
    function xb(e, r, t) {
        var a = e.l + r
          , n = t.biff == 2 ? 1 : 2;
        var s, i = e.read_shift(n);
        if (i == 65535)
            return [[], ur(e, r - 2)];
        var f = Fb(e, i, t);
        if (r !== i + n)
            s = Ab(e, r - i - n, f, t);
        return [f, s]
    }
    function Db(e, r, t) {
        var a = e.l + r;
        var n, s = e.read_shift(2);
        var i = Fb(e, s, t);
        if (s == 65535)
            return [[], ur(e, r - 2)];
        if (r !== s + 2)
            n = Ab(e, a - s - 2, i, t);
        return [i, n]
    }
    function Ob(e, r, t, a) {
        var n = e.l + r
          , s = t.biff == 2 ? 1 : 2;
        var i, f = e.read_shift(s);
        if (f == 65535)
            return [[], ur(e, r - 2)];
        var c = Fb(e, f, t);
        if (r !== f + s)
            i = Ab(e, r - f - s, c, t);
        return [c, i]
    }
    function Fb(e, r, t) {
        var a = e.l + r;
        var n, s, i = [];
        while (a != e.l) {
            r = a - e.l;
            s = e[e.l];
            n = kb[s];
            if (s === 24 || s === 25) {
                s = e[e.l + 1];
                n = (s === 24 ? Cb : Tb)[s]
            }
            if (!n || !n.f) {
                ur(e, r)
            } else {
                i.push([n.n, n.f(e, r, t)])
            }
        }
        return i
    }
    function Pb(e) {
        var r = [];
        for (var t = 0; t < e.length; ++t) {
            var a = e[t]
              , n = [];
            for (var s = 0; s < a.length; ++s) {
                var i = a[s];
                if (i)
                    switch (i[0]) {
                    case 2:
                        n.push('"' + i[1].replace(/"/g, '""') + '"');
                        break;
                    default:
                        n.push(i[1])
                    }
                else
                    n.push("")
            }
            r.push(n.join(","))
        }
        return r.join(";")
    }
    var yb = {
        PtgAdd: "+",
        PtgConcat: "&",
        PtgDiv: "/",
        PtgEq: "=",
        PtgGe: ">=",
        PtgGt: ">",
        PtgLe: "<=",
        PtgLt: "<",
        PtgMul: "*",
        PtgNe: "<>",
        PtgPower: "^",
        PtgSub: "-"
    };
    function Nb(e, r, t, a, n) {
        var s = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        };
        var i = [], f, c, l, o, u = 0, h = 0, d, v = "";
        if (!e[0] || !e[0][0])
            return "";
        var b = -1
          , p = "";
        for (var m = 0, g = e[0].length; m < g; ++m) {
            var E = e[0][m];
            switch (E[0]) {
            case "PtgUminus":
                i.push("-" + i.pop());
                break;
            case "PtgUplus":
                i.push("+" + i.pop());
                break;
            case "PtgPercent":
                i.push(i.pop() + "%");
                break;
            case "PtgAdd":
            case "PtgConcat":
            case "PtgDiv":
            case "PtgEq":
            case "PtgGe":
            case "PtgGt":
            case "PtgLe":
            case "PtgLt":
            case "PtgMul":
            case "PtgNe":
            case "PtgPower":
            case "PtgSub":
                f = i.pop();
                c = i.pop();
                if (b >= 0) {
                    switch (e[0][b][1][0]) {
                    case 0:
                        p = M(" ", e[0][b][1][1]);
                        break;
                    case 1:
                        p = M("\r", e[0][b][1][1]);
                        break;
                    default:
                        p = "";
                        if (n.WTF)
                            throw new Error("Unexpected PtgAttrSpaceType " + e[0][b][1][0])
                    }
                    c = c + p;
                    b = -1
                }
                i.push(c + yb[E[0]] + f);
                break;
            case "PtgIsect":
                f = i.pop();
                c = i.pop();
                i.push(c + " " + f);
                break;
            case "PtgUnion":
                f = i.pop();
                c = i.pop();
                i.push(c + "," + f);
                break;
            case "PtgRange":
                f = i.pop();
                c = i.pop();
                i.push(c + ":" + f);
                break;
            case "PtgAttrChoose":
                break;
            case "PtgAttrGoto":
                break;
            case "PtgAttrIf":
                break;
            case "PtgAttrIfError":
                break;
            case "PtgRef":
                l = E[1][0];
                o = gr(E[1][1], s, n);
                i.push(Sr(o));
                break;
            case "PtgRefN":
                l = E[1][0];
                o = t ? gr(E[1][1], t, n) : E[1][1];
                i.push(Sr(o));
                break;
            case "PtgRef3d":
                l = E[1][0];
                u = E[1][1];
                o = gr(E[1][2], s, n);
                v = a.SheetNames[u];
                var S = v;
                i.push(v + "!" + Sr(o));
                break;
            case "PtgFunc":
            case "PtgFuncVar":
                var k = E[1][0]
                  , B = E[1][1];
                if (!k)
                    k = 0;
                var C = k == 0 ? [] : i.slice(-k);
                i.length -= k;
                if (B === "User")
                    B = C.shift();
                i.push(B + "(" + C.join(",") + ")");
                break;
            case "PtgBool":
                i.push(E[1] ? "TRUE" : "FALSE");
                break;
            case "PtgInt":
                i.push(E[1]);
                break;
            case "PtgNum":
                i.push(String(E[1]));
                break;
            case "PtgStr":
                i.push('"' + E[1] + '"');
                break;
            case "PtgErr":
                i.push(E[1]);
                break;
            case "PtgAreaN":
                l = E[1][0];
                d = Er(E[1][1], s, n);
                i.push(kr(d, n));
                break;
            case "PtgArea":
                l = E[1][0];
                d = Er(E[1][1], s, n);
                i.push(kr(d, n));
                break;
            case "PtgArea3d":
                l = E[1][0];
                u = E[1][1];
                d = E[1][2];
                v = a && a[1] ? a[1][u + 1] : "**MISSING**";
                i.push(v + "!" + Lr(d));
                break;
            case "PtgAttrSum":
                i.push("SUM(" + i.pop() + ")");
                break;
            case "PtgAttrSemi":
                break;
            case "PtgName":
                h = E[1][2];
                var T = (a.names || [])[h - 1] || (a[0] || [])[h];
                var w = T ? T.Name : "**MISSING**" + String(h);
                if (w in jb)
                    w = jb[w];
                i.push(w);
                break;
            case "PtgNameX":
                var I = E[1][1];
                h = E[1][2];
                var A;
                if (n.biff <= 5) {
                    if (I < 0)
                        I = -I;
                    if (a[I])
                        A = a[I][h]
                } else {
                    var R = a.SheetNames[I];
                    var x = "";
                    if (((a[I] || [])[0] || [])[0] == 14849) {} else if (((a[I] || [])[0] || [])[0] == 1025) {
                        if (a[I][h] && a[I][h].itab > 0) {
                            x = a.SheetNames[a[I][h].itab - 1] + "!"
                        }
                    } else
                        x = a.SheetNames[h - 1] + "!";
                    if (a[I] && a[I][h])
                        x += a[I][h].Name;
                    else if (a[0] && a[0][h])
                        x += a[0][h].Name;
                    else
                        x += "??NAMEX??";
                    i.push(x);
                    break
                }
                if (!A)
                    A = {
                        Name: "??NAMEX??"
                    };
                i.push(A.Name);
                break;
            case "PtgParen":
                var D = "("
                  , O = ")";
                if (b >= 0) {
                    p = "";
                    switch (e[0][b][1][0]) {
                    case 2:
                        D = M(" ", e[0][b][1][1]) + D;
                        break;
                    case 3:
                        D = M("\r", e[0][b][1][1]) + D;
                        break;
                    case 4:
                        O = M(" ", e[0][b][1][1]) + O;
                        break;
                    case 5:
                        O = M("\r", e[0][b][1][1]) + O;
                        break;
                    default:
                        if (n.WTF)
                            throw new Error("Unexpected PtgAttrSpaceType " + e[0][b][1][0])
                    }
                    b = -1
                }
                i.push(D + i.pop() + O);
                break;
            case "PtgRefErr":
                i.push("#REF!");
                break;
            case "PtgRefErr3d":
                i.push("#REF!");
                break;
            case "PtgExp":
                o = {
                    c: E[1][1],
                    r: E[1][0]
                };
                var F = {
                    c: t.c,
                    r: t.r
                };
                if (a.sharedf[yr(o)]) {
                    var P = a.sharedf[yr(o)];
                    i.push(Nb(P, s, F, a, n))
                } else {
                    var y = false;
                    for (f = 0; f != a.arrayf.length; ++f) {
                        c = a.arrayf[f];
                        if (o.c < c[0].s.c || o.c > c[0].e.c)
                            continue;
                        if (o.r < c[0].s.r || o.r > c[0].e.r)
                            continue;
                        i.push(Nb(c[1], s, F, a, n));
                        y = true;
                        break
                    }
                    if (!y)
                        i.push(E[1])
                }
                break;
            case "PtgArray":
                i.push("{" + Pb(E[1]) + "}");
                break;
            case "PtgMemArea":
                break;
            case "PtgAttrSpace":
            case "PtgAttrSpaceSemi":
                b = m;
                break;
            case "PtgTbl":
                break;
            case "PtgMemErr":
                break;
            case "PtgMissArg":
                i.push("");
                break;
            case "PtgAreaErr":
                i.push("#REF!");
                break;
            case "PtgAreaErr3d":
                i.push("#REF!");
                break;
            case "PtgMemFunc":
                break;
            default:
                throw new Error("Unrecognized Formula Token: " + String(E))
            }
            var N = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
            if (b >= 0 && N.indexOf(e[0][m][0]) == -1) {
                E = e[0][b];
                var _ = true;
                switch (E[1][0]) {
                case 4:
                    _ = false;
                case 0:
                    p = M(" ", E[1][1]);
                    break;
                case 5:
                    _ = false;
                case 1:
                    p = M("\r", E[1][1]);
                    break;
                default:
                    p = "";
                    if (n.WTF)
                        throw new Error("Unexpected PtgAttrSpaceType " + E[1][0])
                }
                i.push((_ ? p : "") + i.pop() + (_ ? "" : p));
                b = -1
            }
        }
        if (i.length > 1 && n.WTF)
            throw new Error("bad formula stack");
        return i[0]
    }
    function _b(e, r, t) {
        var a = e.l + r;
        var n = e.read_shift(4);
        var s = Fb(e, n, t);
        var i = e.read_shift(4);
        var f = i > 0 ? Ab(e, i, s, t) : null;
        return [s, f]
    }
    var Mb = _b;
    var Lb = _b;
    var Ub = _b;
    var Hb = _b;
    var Vb = {
        1: "REFERENCE",
        2: "VALUE",
        3: "ARRAY"
    };
    var Wb = {
        0: "BEEP",
        1: "OPEN",
        2: "OPEN.LINKS",
        3: "CLOSE.ALL",
        4: "SAVE",
        5: "SAVE.AS",
        6: "FILE.DELETE",
        7: "PAGE.SETUP",
        8: "PRINT",
        9: "PRINTER.SETUP",
        10: "QUIT",
        11: "NEW.WINDOW",
        12: "ARRANGE.ALL",
        13: "WINDOW.SIZE",
        14: "WINDOW.MOVE",
        15: "FULL",
        16: "CLOSE",
        17: "RUN",
        22: "SET.PRINT.AREA",
        23: "SET.PRINT.TITLES",
        24: "SET.PAGE.BREAK",
        25: "REMOVE.PAGE.BREAK",
        26: "FONT",
        27: "DISPLAY",
        28: "PROTECT.DOCUMENT",
        29: "PRECISION",
        30: "A1.R1C1",
        31: "CALCULATE.NOW",
        32: "CALCULATION",
        34: "DATA.FIND",
        35: "EXTRACT",
        36: "DATA.DELETE",
        37: "SET.DATABASE",
        38: "SET.CRITERIA",
        39: "SORT",
        40: "DATA.SERIES",
        41: "TABLE",
        42: "FORMAT.NUMBER",
        43: "ALIGNMENT",
        44: "STYLE",
        45: "BORDER",
        46: "CELL.PROTECTION",
        47: "COLUMN.WIDTH",
        48: "UNDO",
        49: "CUT",
        50: "COPY",
        51: "PASTE",
        52: "CLEAR",
        53: "PASTE.SPECIAL",
        54: "EDIT.DELETE",
        55: "INSERT",
        56: "FILL.RIGHT",
        57: "FILL.DOWN",
        61: "DEFINE.NAME",
        62: "CREATE.NAMES",
        63: "FORMULA.GOTO",
        64: "FORMULA.FIND",
        65: "SELECT.LAST.CELL",
        66: "SHOW.ACTIVE.CELL",
        67: "GALLERY.AREA",
        68: "GALLERY.BAR",
        69: "GALLERY.COLUMN",
        70: "GALLERY.LINE",
        71: "GALLERY.PIE",
        72: "GALLERY.SCATTER",
        73: "COMBINATION",
        74: "PREFERRED",
        75: "ADD.OVERLAY",
        76: "GRIDLINES",
        77: "SET.PREFERRED",
        78: "AXES",
        79: "LEGEND",
        80: "ATTACH.TEXT",
        81: "ADD.ARROW",
        82: "SELECT.CHART",
        83: "SELECT.PLOT.AREA",
        84: "PATTERNS",
        85: "MAIN.CHART",
        86: "OVERLAY",
        87: "SCALE",
        88: "FORMAT.LEGEND",
        89: "FORMAT.TEXT",
        90: "EDIT.REPEAT",
        91: "PARSE",
        92: "JUSTIFY",
        93: "HIDE",
        94: "UNHIDE",
        95: "WORKSPACE",
        96: "FORMULA",
        97: "FORMULA.FILL",
        98: "FORMULA.ARRAY",
        99: "DATA.FIND.NEXT",
        100: "DATA.FIND.PREV",
        101: "FORMULA.FIND.NEXT",
        102: "FORMULA.FIND.PREV",
        103: "ACTIVATE",
        104: "ACTIVATE.NEXT",
        105: "ACTIVATE.PREV",
        106: "UNLOCKED.NEXT",
        107: "UNLOCKED.PREV",
        108: "COPY.PICTURE",
        109: "SELECT",
        110: "DELETE.NAME",
        111: "DELETE.FORMAT",
        112: "VLINE",
        113: "HLINE",
        114: "VPAGE",
        115: "HPAGE",
        116: "VSCROLL",
        117: "HSCROLL",
        118: "ALERT",
        119: "NEW",
        120: "CANCEL.COPY",
        121: "SHOW.CLIPBOARD",
        122: "MESSAGE",
        124: "PASTE.LINK",
        125: "APP.ACTIVATE",
        126: "DELETE.ARROW",
        127: "ROW.HEIGHT",
        128: "FORMAT.MOVE",
        129: "FORMAT.SIZE",
        130: "FORMULA.REPLACE",
        131: "SEND.KEYS",
        132: "SELECT.SPECIAL",
        133: "APPLY.NAMES",
        134: "REPLACE.FONT",
        135: "FREEZE.PANES",
        136: "SHOW.INFO",
        137: "SPLIT",
        138: "ON.WINDOW",
        139: "ON.DATA",
        140: "DISABLE.INPUT",
        142: "OUTLINE",
        143: "LIST.NAMES",
        144: "FILE.CLOSE",
        145: "SAVE.WORKBOOK",
        146: "DATA.FORM",
        147: "COPY.CHART",
        148: "ON.TIME",
        149: "WAIT",
        150: "FORMAT.FONT",
        151: "FILL.UP",
        152: "FILL.LEFT",
        153: "DELETE.OVERLAY",
        155: "SHORT.MENUS",
        159: "SET.UPDATE.STATUS",
        161: "COLOR.PALETTE",
        162: "DELETE.STYLE",
        163: "WINDOW.RESTORE",
        164: "WINDOW.MAXIMIZE",
        166: "CHANGE.LINK",
        167: "CALCULATE.DOCUMENT",
        168: "ON.KEY",
        169: "APP.RESTORE",
        170: "APP.MOVE",
        171: "APP.SIZE",
        172: "APP.MINIMIZE",
        173: "APP.MAXIMIZE",
        174: "BRING.TO.FRONT",
        175: "SEND.TO.BACK",
        185: "MAIN.CHART.TYPE",
        186: "OVERLAY.CHART.TYPE",
        187: "SELECT.END",
        188: "OPEN.MAIL",
        189: "SEND.MAIL",
        190: "STANDARD.FONT",
        191: "CONSOLIDATE",
        192: "SORT.SPECIAL",
        193: "GALLERY.3D.AREA",
        194: "GALLERY.3D.COLUMN",
        195: "GALLERY.3D.LINE",
        196: "GALLERY.3D.PIE",
        197: "VIEW.3D",
        198: "GOAL.SEEK",
        199: "WORKGROUP",
        200: "FILL.GROUP",
        201: "UPDATE.LINK",
        202: "PROMOTE",
        203: "DEMOTE",
        204: "SHOW.DETAIL",
        206: "UNGROUP",
        207: "OBJECT.PROPERTIES",
        208: "SAVE.NEW.OBJECT",
        209: "SHARE",
        210: "SHARE.NAME",
        211: "DUPLICATE",
        212: "APPLY.STYLE",
        213: "ASSIGN.TO.OBJECT",
        214: "OBJECT.PROTECTION",
        215: "HIDE.OBJECT",
        216: "SET.EXTRACT",
        217: "CREATE.PUBLISHER",
        218: "SUBSCRIBE.TO",
        219: "ATTRIBUTES",
        220: "SHOW.TOOLBAR",
        222: "PRINT.PREVIEW",
        223: "EDIT.COLOR",
        224: "SHOW.LEVELS",
        225: "FORMAT.MAIN",
        226: "FORMAT.OVERLAY",
        227: "ON.RECALC",
        228: "EDIT.SERIES",
        229: "DEFINE.STYLE",
        240: "LINE.PRINT",
        243: "ENTER.DATA",
        249: "GALLERY.RADAR",
        250: "MERGE.STYLES",
        251: "EDITION.OPTIONS",
        252: "PASTE.PICTURE",
        253: "PASTE.PICTURE.LINK",
        254: "SPELLING",
        256: "ZOOM",
        259: "INSERT.OBJECT",
        260: "WINDOW.MINIMIZE",
        265: "SOUND.NOTE",
        266: "SOUND.PLAY",
        267: "FORMAT.SHAPE",
        268: "EXTEND.POLYGON",
        269: "FORMAT.AUTO",
        272: "GALLERY.3D.BAR",
        273: "GALLERY.3D.SURFACE",
        274: "FILL.AUTO",
        276: "CUSTOMIZE.TOOLBAR",
        277: "ADD.TOOL",
        278: "EDIT.OBJECT",
        279: "ON.DOUBLECLICK",
        280: "ON.ENTRY",
        281: "WORKBOOK.ADD",
        282: "WORKBOOK.MOVE",
        283: "WORKBOOK.COPY",
        284: "WORKBOOK.OPTIONS",
        285: "SAVE.WORKSPACE",
        288: "CHART.WIZARD",
        289: "DELETE.TOOL",
        290: "MOVE.TOOL",
        291: "WORKBOOK.SELECT",
        292: "WORKBOOK.ACTIVATE",
        293: "ASSIGN.TO.TOOL",
        295: "COPY.TOOL",
        296: "RESET.TOOL",
        297: "CONSTRAIN.NUMERIC",
        298: "PASTE.TOOL",
        302: "WORKBOOK.NEW",
        305: "SCENARIO.CELLS",
        306: "SCENARIO.DELETE",
        307: "SCENARIO.ADD",
        308: "SCENARIO.EDIT",
        309: "SCENARIO.SHOW",
        310: "SCENARIO.SHOW.NEXT",
        311: "SCENARIO.SUMMARY",
        312: "PIVOT.TABLE.WIZARD",
        313: "PIVOT.FIELD.PROPERTIES",
        314: "PIVOT.FIELD",
        315: "PIVOT.ITEM",
        316: "PIVOT.ADD.FIELDS",
        318: "OPTIONS.CALCULATION",
        319: "OPTIONS.EDIT",
        320: "OPTIONS.VIEW",
        321: "ADDIN.MANAGER",
        322: "MENU.EDITOR",
        323: "ATTACH.TOOLBARS",
        324: "VBAActivate",
        325: "OPTIONS.CHART",
        328: "VBA.INSERT.FILE",
        330: "VBA.PROCEDURE.DEFINITION",
        336: "ROUTING.SLIP",
        338: "ROUTE.DOCUMENT",
        339: "MAIL.LOGON",
        342: "INSERT.PICTURE",
        343: "EDIT.TOOL",
        344: "GALLERY.DOUGHNUT",
        350: "CHART.TREND",
        352: "PIVOT.ITEM.PROPERTIES",
        354: "WORKBOOK.INSERT",
        355: "OPTIONS.TRANSITION",
        356: "OPTIONS.GENERAL",
        370: "FILTER.ADVANCED",
        373: "MAIL.ADD.MAILER",
        374: "MAIL.DELETE.MAILER",
        375: "MAIL.REPLY",
        376: "MAIL.REPLY.ALL",
        377: "MAIL.FORWARD",
        378: "MAIL.NEXT.LETTER",
        379: "DATA.LABEL",
        380: "INSERT.TITLE",
        381: "FONT.PROPERTIES",
        382: "MACRO.OPTIONS",
        383: "WORKBOOK.HIDE",
        384: "WORKBOOK.UNHIDE",
        385: "WORKBOOK.DELETE",
        386: "WORKBOOK.NAME",
        388: "GALLERY.CUSTOM",
        390: "ADD.CHART.AUTOFORMAT",
        391: "DELETE.CHART.AUTOFORMAT",
        392: "CHART.ADD.DATA",
        393: "AUTO.OUTLINE",
        394: "TAB.ORDER",
        395: "SHOW.DIALOG",
        396: "SELECT.ALL",
        397: "UNGROUP.SHEETS",
        398: "SUBTOTAL.CREATE",
        399: "SUBTOTAL.REMOVE",
        400: "RENAME.OBJECT",
        412: "WORKBOOK.SCROLL",
        413: "WORKBOOK.NEXT",
        414: "WORKBOOK.PREV",
        415: "WORKBOOK.TAB.SPLIT",
        416: "FULL.SCREEN",
        417: "WORKBOOK.PROTECT",
        420: "SCROLLBAR.PROPERTIES",
        421: "PIVOT.SHOW.PAGES",
        422: "TEXT.TO.COLUMNS",
        423: "FORMAT.CHARTTYPE",
        424: "LINK.FORMAT",
        425: "TRACER.DISPLAY",
        430: "TRACER.NAVIGATE",
        431: "TRACER.CLEAR",
        432: "TRACER.ERROR",
        433: "PIVOT.FIELD.GROUP",
        434: "PIVOT.FIELD.UNGROUP",
        435: "CHECKBOX.PROPERTIES",
        436: "LABEL.PROPERTIES",
        437: "LISTBOX.PROPERTIES",
        438: "EDITBOX.PROPERTIES",
        439: "PIVOT.REFRESH",
        440: "LINK.COMBO",
        441: "OPEN.TEXT",
        442: "HIDE.DIALOG",
        443: "SET.DIALOG.FOCUS",
        444: "ENABLE.OBJECT",
        445: "PUSHBUTTON.PROPERTIES",
        446: "SET.DIALOG.DEFAULT",
        447: "FILTER",
        448: "FILTER.SHOW.ALL",
        449: "CLEAR.OUTLINE",
        450: "FUNCTION.WIZARD",
        451: "ADD.LIST.ITEM",
        452: "SET.LIST.ITEM",
        453: "REMOVE.LIST.ITEM",
        454: "SELECT.LIST.ITEM",
        455: "SET.CONTROL.VALUE",
        456: "SAVE.COPY.AS",
        458: "OPTIONS.LISTS.ADD",
        459: "OPTIONS.LISTS.DELETE",
        460: "SERIES.AXES",
        461: "SERIES.X",
        462: "SERIES.Y",
        463: "ERRORBAR.X",
        464: "ERRORBAR.Y",
        465: "FORMAT.CHART",
        466: "SERIES.ORDER",
        467: "MAIL.LOGOFF",
        468: "CLEAR.ROUTING.SLIP",
        469: "APP.ACTIVATE.MICROSOFT",
        470: "MAIL.EDIT.MAILER",
        471: "ON.SHEET",
        472: "STANDARD.WIDTH",
        473: "SCENARIO.MERGE",
        474: "SUMMARY.INFO",
        475: "FIND.FILE",
        476: "ACTIVE.CELL.FONT",
        477: "ENABLE.TIPWIZARD",
        478: "VBA.MAKE.ADDIN",
        480: "INSERTDATATABLE",
        481: "WORKGROUP.OPTIONS",
        482: "MAIL.SEND.MAILER",
        485: "AUTOCORRECT",
        489: "POST.DOCUMENT",
        491: "PICKLIST",
        493: "VIEW.SHOW",
        494: "VIEW.DEFINE",
        495: "VIEW.DELETE",
        509: "SHEET.BACKGROUND",
        510: "INSERT.MAP.OBJECT",
        511: "OPTIONS.MENONO",
        517: "MSOCHECKS",
        518: "NORMAL",
        519: "LAYOUT",
        520: "RM.PRINT.AREA",
        521: "CLEAR.PRINT.AREA",
        522: "ADD.PRINT.AREA",
        523: "MOVE.BRK",
        545: "HIDECURR.NOTE",
        546: "HIDEALL.NOTES",
        547: "DELETE.NOTE",
        548: "TRAVERSE.NOTES",
        549: "ACTIVATE.NOTES",
        620: "PROTECT.REVISIONS",
        621: "UNPROTECT.REVISIONS",
        647: "OPTIONS.ME",
        653: "WEB.PUBLISH",
        667: "NEWWEBQUERY",
        673: "PIVOT.TABLE.CHART",
        753: "OPTIONS.SAVE",
        755: "OPTIONS.SPELL",
        808: "HIDEALL.INKANNOTS"
    };
    var Xb = {
        0: "COUNT",
        1: "IF",
        2: "ISNA",
        3: "ISERROR",
        4: "SUM",
        5: "AVERAGE",
        6: "MIN",
        7: "MAX",
        8: "ROW",
        9: "COLUMN",
        10: "NA",
        11: "NPV",
        12: "STDEV",
        13: "DOLLAR",
        14: "FIXED",
        15: "SIN",
        16: "COS",
        17: "TAN",
        18: "ATAN",
        19: "PI",
        20: "SQRT",
        21: "EXP",
        22: "LN",
        23: "LOG10",
        24: "ABS",
        25: "INT",
        26: "SIGN",
        27: "ROUND",
        28: "LOOKUP",
        29: "INDEX",
        30: "REPT",
        31: "MID",
        32: "LEN",
        33: "VALUE",
        34: "TRUE",
        35: "FALSE",
        36: "AND",
        37: "OR",
        38: "NOT",
        39: "MOD",
        40: "DCOUNT",
        41: "DSUM",
        42: "DAVERAGE",
        43: "DMIN",
        44: "DMAX",
        45: "DSTDEV",
        46: "VAR",
        47: "DVAR",
        48: "TEXT",
        49: "LINEST",
        50: "TREND",
        51: "LOGEST",
        52: "GROWTH",
        53: "GOTO",
        54: "HALT",
        55: "RETURN",
        56: "PV",
        57: "FV",
        58: "NPER",
        59: "PMT",
        60: "RATE",
        61: "MIRR",
        62: "IRR",
        63: "RAND",
        64: "MATCH",
        65: "DATE",
        66: "TIME",
        67: "DAY",
        68: "MONTH",
        69: "YEAR",
        70: "WEEKDAY",
        71: "HOUR",
        72: "MINUTE",
        73: "SECOND",
        74: "NOW",
        75: "AREAS",
        76: "ROWS",
        77: "COLUMNS",
        78: "OFFSET",
        79: "ABSREF",
        80: "RELREF",
        81: "ARGUMENT",
        82: "SEARCH",
        83: "TRANSPOSE",
        84: "ERROR",
        85: "STEP",
        86: "TYPE",
        87: "ECHO",
        88: "SET.NAME",
        89: "CALLER",
        90: "DEREF",
        91: "WINDOWS",
        92: "SERIES",
        93: "DOCUMENTS",
        94: "ACTIVE.CELL",
        95: "SELECTION",
        96: "RESULT",
        97: "ATAN2",
        98: "ASIN",
        99: "ACOS",
        100: "CHOOSE",
        101: "HLOOKUP",
        102: "VLOOKUP",
        103: "LINKS",
        104: "INPUT",
        105: "ISREF",
        106: "GET.FORMULA",
        107: "GET.NAME",
        108: "SET.VALUE",
        109: "LOG",
        110: "EXEC",
        111: "CHAR",
        112: "LOWER",
        113: "UPPER",
        114: "PROPER",
        115: "LEFT",
        116: "RIGHT",
        117: "EXACT",
        118: "TRIM",
        119: "REPLACE",
        120: "SUBSTITUTE",
        121: "CODE",
        122: "NAMES",
        123: "DIRECTORY",
        124: "FIND",
        125: "CELL",
        126: "ISERR",
        127: "ISTEXT",
        128: "ISNUMBER",
        129: "ISBLANK",
        130: "T",
        131: "N",
        132: "FOPEN",
        133: "FCLOSE",
        134: "FSIZE",
        135: "FREADLN",
        136: "FREAD",
        137: "FWRITELN",
        138: "FWRITE",
        139: "FPOS",
        140: "DATEVALUE",
        141: "TIMEVALUE",
        142: "SLN",
        143: "SYD",
        144: "DDB",
        145: "GET.DEF",
        146: "REFTEXT",
        147: "TEXTREF",
        148: "INDIRECT",
        149: "REGISTER",
        150: "CALL",
        151: "ADD.BAR",
        152: "ADD.MENU",
        153: "ADD.COMMAND",
        154: "ENABLE.COMMAND",
        155: "CHECK.COMMAND",
        156: "RENAME.COMMAND",
        157: "SHOW.BAR",
        158: "DELETE.MENU",
        159: "DELETE.COMMAND",
        160: "GET.CHART.ITEM",
        161: "DIALOG.BOX",
        162: "CLEAN",
        163: "MDETERM",
        164: "MINVERSE",
        165: "MMULT",
        166: "FILES",
        167: "IPMT",
        168: "PPMT",
        169: "COUNTA",
        170: "CANCEL.KEY",
        171: "FOR",
        172: "WHILE",
        173: "BREAK",
        174: "NEXT",
        175: "INITIATE",
        176: "REQUEST",
        177: "POKE",
        178: "EXECUTE",
        179: "TERMINATE",
        180: "RESTART",
        181: "HELP",
        182: "GET.BAR",
        183: "PRODUCT",
        184: "FACT",
        185: "GET.CELL",
        186: "GET.WORKSPACE",
        187: "GET.WINDOW",
        188: "GET.DOCUMENT",
        189: "DPRODUCT",
        190: "ISNONTEXT",
        191: "GET.NOTE",
        192: "NOTE",
        193: "STDEVP",
        194: "VARP",
        195: "DSTDEVP",
        196: "DVARP",
        197: "TRUNC",
        198: "ISLOGICAL",
        199: "DCOUNTA",
        200: "DELETE.BAR",
        201: "UNREGISTER",
        204: "USDOLLAR",
        205: "FINDB",
        206: "SEARCHB",
        207: "REPLACEB",
        208: "LEFTB",
        209: "RIGHTB",
        210: "MIDB",
        211: "LENB",
        212: "ROUNDUP",
        213: "ROUNDDOWN",
        214: "ASC",
        215: "DBCS",
        216: "RANK",
        219: "ADDRESS",
        220: "DAYS360",
        221: "TODAY",
        222: "VDB",
        223: "ELSE",
        224: "ELSE.IF",
        225: "END.IF",
        226: "FOR.CELL",
        227: "MEDIAN",
        228: "SUMPRODUCT",
        229: "SINH",
        230: "COSH",
        231: "TANH",
        232: "ASINH",
        233: "ACOSH",
        234: "ATANH",
        235: "DGET",
        236: "CREATE.OBJECT",
        237: "VOLATILE",
        238: "LAST.ERROR",
        239: "CUSTOM.UNDO",
        240: "CUSTOM.REPEAT",
        241: "FORMULA.CONVERT",
        242: "GET.LINK.INFO",
        243: "TEXT.BOX",
        244: "INFO",
        245: "GROUP",
        246: "GET.OBJECT",
        247: "DB",
        248: "PAUSE",
        251: "RESUME",
        252: "FREQUENCY",
        253: "ADD.TOOLBAR",
        254: "DELETE.TOOLBAR",
        255: "User",
        256: "RESET.TOOLBAR",
        257: "EVALUATE",
        258: "GET.TOOLBAR",
        259: "GET.TOOL",
        260: "SPELLING.CHECK",
        261: "ERROR.TYPE",
        262: "APP.TITLE",
        263: "WINDOW.TITLE",
        264: "SAVE.TOOLBAR",
        265: "ENABLE.TOOL",
        266: "PRESS.TOOL",
        267: "REGISTER.ID",
        268: "GET.WORKBOOK",
        269: "AVEDEV",
        270: "BETADIST",
        271: "GAMMALN",
        272: "BETAINV",
        273: "BINOMDIST",
        274: "CHIDIST",
        275: "CHIINV",
        276: "COMBIN",
        277: "CONFIDENCE",
        278: "CRITBINOM",
        279: "EVEN",
        280: "EXPONDIST",
        281: "FDIST",
        282: "FINV",
        283: "FISHER",
        284: "FISHERINV",
        285: "FLOOR",
        286: "GAMMADIST",
        287: "GAMMAINV",
        288: "CEILING",
        289: "HYPGEOMDIST",
        290: "LOGNORMDIST",
        291: "LOGINV",
        292: "NEGBINOMDIST",
        293: "NORMDIST",
        294: "NORMSDIST",
        295: "NORMINV",
        296: "NORMSINV",
        297: "STANDARDIZE",
        298: "ODD",
        299: "PERMUT",
        300: "POISSON",
        301: "TDIST",
        302: "WEIBULL",
        303: "SUMXMY2",
        304: "SUMX2MY2",
        305: "SUMX2PY2",
        306: "CHITEST",
        307: "CORREL",
        308: "COVAR",
        309: "FORECAST",
        310: "FTEST",
        311: "INTERCEPT",
        312: "PEARSON",
        313: "RSQ",
        314: "STEYX",
        315: "SLOPE",
        316: "TTEST",
        317: "PROB",
        318: "DEVSQ",
        319: "GEOMEAN",
        320: "HARMEAN",
        321: "SUMSQ",
        322: "KURT",
        323: "SKEW",
        324: "ZTEST",
        325: "LARGE",
        326: "SMALL",
        327: "QUARTILE",
        328: "PERCENTILE",
        329: "PERCENTRANK",
        330: "MODE",
        331: "TRIMMEAN",
        332: "TINV",
        334: "MOVIE.COMMAND",
        335: "GET.MOVIE",
        336: "CONCATENATE",
        337: "POWER",
        338: "PIVOT.ADD.DATA",
        339: "GET.PIVOT.TABLE",
        340: "GET.PIVOT.FIELD",
        341: "GET.PIVOT.ITEM",
        342: "RADIANS",
        343: "DEGREES",
        344: "SUBTOTAL",
        345: "SUMIF",
        346: "COUNTIF",
        347: "COUNTBLANK",
        348: "SCENARIO.GET",
        349: "OPTIONS.LISTS.GET",
        350: "ISPMT",
        351: "DATEDIF",
        352: "DATESTRING",
        353: "NUMBERSTRING",
        354: "ROMAN",
        355: "OPEN.DIALOG",
        356: "SAVE.DIALOG",
        357: "VIEW.GET",
        358: "GETPIVOTDATA",
        359: "HYPERLINK",
        360: "PHONETIC",
        361: "AVERAGEA",
        362: "MAXA",
        363: "MINA",
        364: "STDEVPA",
        365: "VARPA",
        366: "STDEVA",
        367: "VARA",
        368: "BAHTTEXT",
        369: "THAIDAYOFWEEK",
        370: "THAIDIGIT",
        371: "THAIMONTHOFYEAR",
        372: "THAINUMSOUND",
        373: "THAINUMSTRING",
        374: "THAISTRINGLENGTH",
        375: "ISTHAIDIGIT",
        376: "ROUNDBAHTDOWN",
        377: "ROUNDBAHTUP",
        378: "THAIYEAR",
        379: "RTD",
        380: "CUBEVALUE",
        381: "CUBEMEMBER",
        382: "CUBEMEMBERPROPERTY",
        383: "CUBERANKEDMEMBER",
        384: "HEX2BIN",
        385: "HEX2DEC",
        386: "HEX2OCT",
        387: "DEC2BIN",
        388: "DEC2HEX",
        389: "DEC2OCT",
        390: "OCT2BIN",
        391: "OCT2HEX",
        392: "OCT2DEC",
        393: "BIN2DEC",
        394: "BIN2OCT",
        395: "BIN2HEX",
        396: "IMSUB",
        397: "IMDIV",
        398: "IMPOWER",
        399: "IMABS",
        400: "IMSQRT",
        401: "IMLN",
        402: "IMLOG2",
        403: "IMLOG10",
        404: "IMSIN",
        405: "IMCOS",
        406: "IMEXP",
        407: "IMARGUMENT",
        408: "IMCONJUGATE",
        409: "IMAGINARY",
        410: "IMREAL",
        411: "COMPLEX",
        412: "IMSUM",
        413: "IMPRODUCT",
        414: "SERIESSUM",
        415: "FACTDOUBLE",
        416: "SQRTPI",
        417: "QUOTIENT",
        418: "DELTA",
        419: "GESTEP",
        420: "ISEVEN",
        421: "ISODD",
        422: "MROUND",
        423: "ERF",
        424: "ERFC",
        425: "BESSELJ",
        426: "BESSELK",
        427: "BESSELY",
        428: "BESSELI",
        429: "XIRR",
        430: "XNPV",
        431: "PRICEMAT",
        432: "YIELDMAT",
        433: "INTRATE",
        434: "RECEIVED",
        435: "DISC",
        436: "PRICEDISC",
        437: "YIELDDISC",
        438: "TBILLEQ",
        439: "TBILLPRICE",
        440: "TBILLYIELD",
        441: "PRICE",
        442: "YIELD",
        443: "DOLLARDE",
        444: "DOLLARFR",
        445: "NOMINAL",
        446: "EFFECT",
        447: "CUMPRINC",
        448: "CUMIPMT",
        449: "EDATE",
        450: "EOMONTH",
        451: "YEARFRAC",
        452: "COUPDAYBS",
        453: "COUPDAYS",
        454: "COUPDAYSNC",
        455: "COUPNCD",
        456: "COUPNUM",
        457: "COUPPCD",
        458: "DURATION",
        459: "MDURATION",
        460: "ODDLPRICE",
        461: "ODDLYIELD",
        462: "ODDFPRICE",
        463: "ODDFYIELD",
        464: "RANDBETWEEN",
        465: "WEEKNUM",
        466: "AMORDEGRC",
        467: "AMORLINC",
        468: "CONVERT",
        724: "SHEETJS",
        469: "ACCRINT",
        470: "ACCRINTM",
        471: "WORKDAY",
        472: "NETWORKDAYS",
        473: "GCD",
        474: "MULTINOMIAL",
        475: "LCM",
        476: "FVSCHEDULE",
        477: "CUBEKPIMEMBER",
        478: "CUBESET",
        479: "CUBESETCOUNT",
        480: "IFERROR",
        481: "COUNTIFS",
        482: "SUMIFS",
        483: "AVERAGEIF",
        484: "AVERAGEIFS"
    };
    var Gb = {
        2: 1,
        3: 1,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 0,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 2,
        30: 2,
        31: 3,
        32: 1,
        33: 1,
        38: 1,
        39: 2,
        40: 3,
        41: 3,
        42: 3,
        43: 3,
        44: 3,
        45: 3,
        47: 3,
        48: 2,
        53: 1,
        61: 3,
        65: 3,
        66: 3,
        67: 1,
        68: 1,
        69: 1,
        70: 1,
        71: 1,
        72: 1,
        73: 1,
        75: 1,
        76: 1,
        77: 1,
        79: 2,
        80: 2,
        83: 1,
        85: 0,
        86: 1,
        90: 1,
        97: 2,
        98: 1,
        99: 1,
        101: 3,
        102: 3,
        105: 1,
        111: 1,
        112: 1,
        113: 1,
        114: 1,
        117: 2,
        118: 1,
        119: 4,
        121: 1,
        126: 1,
        127: 1,
        128: 1,
        129: 1,
        130: 1,
        131: 1,
        133: 1,
        134: 1,
        135: 1,
        136: 2,
        137: 2,
        138: 2,
        140: 1,
        141: 1,
        142: 3,
        143: 4,
        144: 4,
        162: 1,
        163: 1,
        164: 1,
        165: 2,
        172: 1,
        175: 2,
        176: 2,
        177: 3,
        178: 2,
        179: 1,
        184: 1,
        189: 3,
        190: 1,
        195: 3,
        196: 3,
        197: 1,
        198: 1,
        199: 3,
        201: 1,
        207: 4,
        210: 3,
        211: 1,
        212: 2,
        213: 2,
        214: 1,
        215: 1,
        229: 1,
        230: 1,
        231: 1,
        232: 1,
        233: 1,
        234: 1,
        235: 3,
        244: 1,
        247: 4,
        252: 2,
        257: 1,
        261: 1,
        271: 1,
        273: 4,
        274: 2,
        275: 2,
        276: 2,
        277: 3,
        278: 3,
        279: 1,
        280: 3,
        281: 3,
        282: 3,
        283: 1,
        284: 1,
        285: 2,
        286: 4,
        287: 3,
        288: 2,
        289: 4,
        290: 3,
        291: 3,
        292: 3,
        293: 4,
        294: 1,
        295: 3,
        296: 1,
        297: 3,
        298: 1,
        299: 2,
        300: 3,
        301: 3,
        302: 4,
        303: 2,
        304: 2,
        305: 2,
        306: 2,
        307: 2,
        308: 2,
        309: 3,
        310: 2,
        311: 2,
        312: 2,
        313: 2,
        314: 2,
        315: 2,
        316: 4,
        325: 2,
        326: 2,
        327: 2,
        328: 2,
        331: 2,
        332: 2,
        337: 2,
        342: 1,
        343: 1,
        346: 2,
        347: 1,
        350: 4,
        351: 3,
        352: 1,
        353: 2,
        360: 1,
        368: 1,
        369: 1,
        370: 1,
        371: 1,
        372: 1,
        373: 1,
        374: 1,
        375: 1,
        376: 1,
        377: 1,
        378: 1,
        382: 3,
        385: 1,
        392: 1,
        393: 1,
        396: 2,
        397: 2,
        398: 2,
        399: 1,
        400: 1,
        401: 1,
        402: 1,
        403: 1,
        404: 1,
        405: 1,
        406: 1,
        407: 1,
        408: 1,
        409: 1,
        410: 1,
        414: 4,
        415: 1,
        416: 1,
        417: 2,
        420: 1,
        421: 1,
        422: 2,
        424: 1,
        425: 2,
        426: 2,
        427: 2,
        428: 2,
        430: 3,
        438: 3,
        439: 3,
        440: 3,
        443: 2,
        444: 2,
        445: 2,
        446: 2,
        447: 6,
        448: 6,
        449: 2,
        450: 2,
        464: 2,
        468: 3,
        476: 2,
        479: 1,
        480: 2,
        65535: 0
    };
    var jb = {
        "_xlfn.ACOT": "ACOT",
        "_xlfn.ACOTH": "ACOTH",
        "_xlfn.AGGREGATE": "AGGREGATE",
        "_xlfn.ARABIC": "ARABIC",
        "_xlfn.AVERAGEIF": "AVERAGEIF",
        "_xlfn.AVERAGEIFS": "AVERAGEIFS",
        "_xlfn.BASE": "BASE",
        "_xlfn.BETA.DIST": "BETA.DIST",
        "_xlfn.BETA.INV": "BETA.INV",
        "_xlfn.BINOM.DIST": "BINOM.DIST",
        "_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
        "_xlfn.BINOM.INV": "BINOM.INV",
        "_xlfn.BITAND": "BITAND",
        "_xlfn.BITLSHIFT": "BITLSHIFT",
        "_xlfn.BITOR": "BITOR",
        "_xlfn.BITRSHIFT": "BITRSHIFT",
        "_xlfn.BITXOR": "BITXOR",
        "_xlfn.CEILING.MATH": "CEILING.MATH",
        "_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
        "_xlfn.CHISQ.DIST": "CHISQ.DIST",
        "_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
        "_xlfn.CHISQ.INV": "CHISQ.INV",
        "_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
        "_xlfn.CHISQ.TEST": "CHISQ.TEST",
        "_xlfn.COMBINA": "COMBINA",
        "_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
        "_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
        "_xlfn.COT": "COT",
        "_xlfn.COTH": "COTH",
        "_xlfn.COUNTIFS": "COUNTIFS",
        "_xlfn.COVARIANCE.P": "COVARIANCE.P",
        "_xlfn.COVARIANCE.S": "COVARIANCE.S",
        "_xlfn.CSC": "CSC",
        "_xlfn.CSCH": "CSCH",
        "_xlfn.DAYS": "DAYS",
        "_xlfn.DECIMAL": "DECIMAL",
        "_xlfn.ECMA.CEILING": "ECMA.CEILING",
        "_xlfn.ERF.PRECISE": "ERF.PRECISE",
        "_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
        "_xlfn.EXPON.DIST": "EXPON.DIST",
        "_xlfn.F.DIST": "F.DIST",
        "_xlfn.F.DIST.RT": "F.DIST.RT",
        "_xlfn.F.INV": "F.INV",
        "_xlfn.F.INV.RT": "F.INV.RT",
        "_xlfn.F.TEST": "F.TEST",
        "_xlfn.FILTERXML": "FILTERXML",
        "_xlfn.FLOOR.MATH": "FLOOR.MATH",
        "_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
        "_xlfn.FORMULATEXT": "FORMULATEXT",
        "_xlfn.GAMMA": "GAMMA",
        "_xlfn.GAMMA.DIST": "GAMMA.DIST",
        "_xlfn.GAMMA.INV": "GAMMA.INV",
        "_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
        "_xlfn.GAUSS": "GAUSS",
        "_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
        "_xlfn.IFNA": "IFNA",
        "_xlfn.IFERROR": "IFERROR",
        "_xlfn.IMCOSH": "IMCOSH",
        "_xlfn.IMCOT": "IMCOT",
        "_xlfn.IMCSC": "IMCSC",
        "_xlfn.IMCSCH": "IMCSCH",
        "_xlfn.IMSEC": "IMSEC",
        "_xlfn.IMSECH": "IMSECH",
        "_xlfn.IMSINH": "IMSINH",
        "_xlfn.IMTAN": "IMTAN",
        "_xlfn.ISFORMULA": "ISFORMULA",
        "_xlfn.ISO.CEILING": "ISO.CEILING",
        "_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
        "_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
        "_xlfn.LOGNORM.INV": "LOGNORM.INV",
        "_xlfn.MODE.MULT": "MODE.MULT",
        "_xlfn.MODE.SNGL": "MODE.SNGL",
        "_xlfn.MUNIT": "MUNIT",
        "_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
        "_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
        "_xlfn.NIGBINOM": "NIGBINOM",
        "_xlfn.NORM.DIST": "NORM.DIST",
        "_xlfn.NORM.INV": "NORM.INV",
        "_xlfn.NORM.S.DIST": "NORM.S.DIST",
        "_xlfn.NORM.S.INV": "NORM.S.INV",
        "_xlfn.NUMBERVALUE": "NUMBERVALUE",
        "_xlfn.PDURATION": "PDURATION",
        "_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
        "_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
        "_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
        "_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
        "_xlfn.PERMUTATIONA": "PERMUTATIONA",
        "_xlfn.PHI": "PHI",
        "_xlfn.POISSON.DIST": "POISSON.DIST",
        "_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
        "_xlfn.QUARTILE.INC": "QUARTILE.INC",
        "_xlfn.QUERYSTRING": "QUERYSTRING",
        "_xlfn.RANK.AVG": "RANK.AVG",
        "_xlfn.RANK.EQ": "RANK.EQ",
        "_xlfn.RRI": "RRI",
        "_xlfn.SEC": "SEC",
        "_xlfn.SECH": "SECH",
        "_xlfn.SHEET": "SHEET",
        "_xlfn.SHEETS": "SHEETS",
        "_xlfn.SKEW.P": "SKEW.P",
        "_xlfn.STDEV.P": "STDEV.P",
        "_xlfn.STDEV.S": "STDEV.S",
        "_xlfn.SUMIFS": "SUMIFS",
        "_xlfn.T.DIST": "T.DIST",
        "_xlfn.T.DIST.2T": "T.DIST.2T",
        "_xlfn.T.DIST.RT": "T.DIST.RT",
        "_xlfn.T.INV": "T.INV",
        "_xlfn.T.INV.2T": "T.INV.2T",
        "_xlfn.T.TEST": "T.TEST",
        "_xlfn.UNICHAR": "UNICHAR",
        "_xlfn.UNICODE": "UNICODE",
        "_xlfn.VAR.P": "VAR.P",
        "_xlfn.VAR.S": "VAR.S",
        "_xlfn.WEBSERVICE": "WEBSERVICE",
        "_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
        "_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
        "_xlfn.XOR": "XOR",
        "_xlfn.Z.TEST": "Z.TEST"
    };
    function zb(e) {
        if (e.substr(0, 3) == "of:")
            e = e.substr(3);
        if (e.charCodeAt(0) == 61) {
            e = e.substr(1);
            if (e.charCodeAt(0) == 61)
                e = e.substr(1)
        }
        e = e.replace(/COM\.MICROSOFT\./g, "");
        e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(e, r) {
            return r.replace(/\./g, "")
        });
        e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1");
        return e.replace(/[;~]/g, ",").replace(/\|/g, ";")
    }
    function Kb(e) {
        var r = "of:=" + e.replace(ev, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
        return r.replace(/;/g, "|").replace(/,/g, ";")
    }
    function Yb(e) {
        var r = e.split(":");
        var t = r[0].split(".")[0];
        return [t, r[0].split(".")[1] + ":" + r[1].split(".")[1]]
    }
    var $b = {};
    var Qb = {};
    Qt.WS = ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"];
    function Zb(e, r) {
        for (var t = 0, a = e.length; t < a; ++t)
            if (e[t].t === r) {
                e.Count++;
                return t
            }
        e[a] = {
            t: r
        };
        e.Count++;
        e.Unique++;
        return a
    }
    function qb(e, r) {
        var t = {
            min: e + 1,
            max: e + 1
        };
        var a = -1;
        if (r.MDW)
            mh = r.MDW;
        if (r.width != null)
            t.customWidth = 1;
        else if (r.wpx != null)
            a = Eh(r.wpx);
        else if (r.wch != null)
            a = r.wch;
        if (a > -1) {
            t.width = Sh(a);
            t.customWidth = 1
        } else if (r.width != null)
            t.width = r.width;
        if (r.hidden)
            t.hidden = true;
        return t
    }
    function Jb(e, r) {
        if (!e)
            return;
        var t = [.7, .7, .75, .75, .3, .3];
        if (r == "xlml")
            t = [1, 1, 1, 1, .5, .5];
        if (e.left == null)
            e.left = t[0];
        if (e.right == null)
            e.right = t[1];
        if (e.top == null)
            e.top = t[2];
        if (e.bottom == null)
            e.bottom = t[3];
        if (e.header == null)
            e.header = t[4];
        if (e.footer == null)
            e.footer = t[5]
    }
    function ep(e, r, t) {
        var a = t.revssf[r.z != null ? r.z : "General"];
        var n = 60
          , s = e.length;
        if (a == null && t.ssf) {
            for (; n < 392; ++n)
                if (t.ssf[n] == null) {
                    m.load(r.z, n);
                    t.ssf[n] = r.z;
                    t.revssf[r.z] = a = n;
                    break
                }
        }
        for (n = 0; n != s; ++n)
            if (e[n].numFmtId === a)
                return n;
        e[s] = {
            numFmtId: a,
            fontId: 0,
            fillId: 0,
            borderId: 0,
            xfId: 0,
            applyNumberFormat: 1
        };
        return s
    }
    function rp(e, r, t, a, n, s) {
        if (e.t === "z")
            return;
        if (e.t === "d" && typeof e.v === "string")
            e.v = P(e.v);
        try {
            if (a.cellNF)
                e.z = m._table[r]
        } catch (e) {
            if (a.WTF)
                throw e
        }
        if (!a || a.cellText !== false)
            try {
                if (e.t === "e")
                    e.w = e.w || mt[e.v];
                else if (r === 0) {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v)
                            e.w = m._general_int(e.v, Qb);
                        else
                            e.w = m._general_num(e.v, Qb)
                    } else if (e.t === "d") {
                        var i = R(e.v);
                        if ((i | 0) === i)
                            e.w = m._general_int(i, Qb);
                        else
                            e.w = m._general_num(i, Qb)
                    } else if (e.v === undefined)
                        return "";
                    else
                        e.w = m._general(e.v, Qb)
                } else if (e.t === "d")
                    e.w = m.format(r, R(e.v), Qb);
                else
                    e.w = m.format(r, e.v, Qb)
            } catch (e) {
                if (a.WTF)
                    throw e
            }
        if (t)
            try {
                e.s = s.Fills[t];
                if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
                    e.s.fgColor.rgb = dh(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0);
                    if (a.WTF)
                        e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb
                }
                if (e.s.bgColor && e.s.bgColor.theme) {
                    e.s.bgColor.rgb = dh(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0);
                    if (a.WTF)
                        e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb
                }
            } catch (e) {
                if (a.WTF)
                    throw e
            }
    }
    function tp(e, r) {
        var t = Ur(r);
        if (t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0)
            e["!ref"] = Lr(t)
    }
    var ap = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
    var np = /<(?:\w+:)?sheetData>([^\u2603]*)<\/(?:\w+:)?sheetData>/;
    var sp = /<(?:\w:)?hyperlink [^>]*>/gm;
    var ip = /"(\w*:\w*)"/;
    var fp = /<(?:\w:)?col[^>]*[\/]?>/g;
    var cp = /<(?:\w:)?autoFilter[^>]*([\/]|>([^\u2603]*)<\/(?:\w:)?autoFilter)>/g;
    var lp = /<(?:\w:)?pageMargins[^>]*\/>/g;
    function op(e, r, t, a, n, s) {
        if (!e)
            return e;
        if (c != null && r.dense == null)
            r.dense = c;
        var i = r.dense ? [] : {};
        var f = {
            s: {
                r: 2e6,
                c: 2e6
            },
            e: {
                r: 0,
                c: 0
            }
        };
        var l = ""
          , o = "";
        var u = e.match(np);
        if (u) {
            l = e.substr(0, u.index);
            o = e.substr(u.index + u[0].length)
        } else
            l = o = e;
        var h = (l.match(/<(?:\w*:)?dimension/) || {
            index: -1
        }).index;
        if (h > 0) {
            var d = l.substr(h, 50).match(ip);
            if (d)
                tp(i, d[1])
        }
        var v = [];
        if (r.cellStyles) {
            var b = l.match(fp);
            if (b)
                pp(v, b)
        }
        if (u)
            Bp(u[1], i, r, f, n, s);
        var p = o.match(cp);
        if (p)
            i["!autofilter"] = gp(p[0]);
        var m = [];
        var g = o.match(ap);
        if (g)
            for (h = 0; h != g.length; ++h)
                m[h] = Ur(g[h].substr(g[h].indexOf('"') + 1));
        var E = o.match(sp);
        if (E)
            dp(i, E, t);
        var S = o.match(lp);
        if (S)
            i["!margins"] = vp(q(S[0]));
        if (!i["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r)
            i["!ref"] = Lr(f);
        if (r.sheetRows > 0 && i["!ref"]) {
            var k = Ur(i["!ref"]);
            if (r.sheetRows < +k.e.r) {
                k.e.r = r.sheetRows - 1;
                if (k.e.r > f.e.r)
                    k.e.r = f.e.r;
                if (k.e.r < k.s.r)
                    k.s.r = k.e.r;
                if (k.e.c > f.e.c)
                    k.e.c = f.e.c;
                if (k.e.c < k.s.c)
                    k.s.c = k.e.c;
                i["!fullref"] = i["!ref"];
                i["!ref"] = Lr(k)
            }
        }
        if (m.length > 0)
            i["!merges"] = m;
        if (v.length > 0)
            i["!cols"] = v;
        return i
    }
    function up(e) {
        if (e.length == 0)
            return "";
        var r = '<mergeCells count="' + e.length + '">';
        for (var t = 0; t != e.length; ++t)
            r += '<mergeCell ref="' + Lr(e[t]) + '"/>';
        return r + "</mergeCells>"
    }
    function hp(e) {
        var r = {
            sheet: 1
        };
        var t = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
        var a = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
        t.forEach(function(t) {
            if (e[t] != null && e[t])
                r[t] = "1"
        });
        a.forEach(function(t) {
            if (e[t] != null && !e[t])
                r[t] = "0"
        });
        if (e.password)
            r.password = th(e.password).toString(16).toUpperCase();
        return Te("sheetProtection", null, r)
    }
    function dp(e, r, t) {
        var a = Array.isArray(e);
        for (var n = 0; n != r.length; ++n) {
            var s = q(r[n], true);
            if (!s.ref)
                return;
            var i = t ? t["!id"][s.id] : null;
            if (i) {
                s.Target = i.Target;
                if (s.location)
                    s.Target += "#" + s.location;
                s.Rel = i
            } else {
                s.Target = s.location;
                i = {
                    Target: s.location,
                    TargetMode: "Internal"
                };
                s.Rel = i
            }
            if (s.tooltip) {
                s.Tooltip = s.tooltip;
                delete s.tooltip
            }
            var f = Ur(s.ref);
            for (var c = f.s.r; c <= f.e.r; ++c)
                for (var l = f.s.c; l <= f.e.c; ++l) {
                    var o = yr({
                        c: l,
                        r: c
                    });
                    if (a) {
                        if (!e[c])
                            e[c] = [];
                        if (!e[c][l])
                            e[c][l] = {
                                t: "z",
                                v: undefined
                            };
                        e[c][l].l = s
                    } else {
                        if (!e[o])
                            e[o] = {
                                t: "z",
                                v: undefined
                            };
                        e[o].l = s
                    }
                }
        }
    }
    function vp(e) {
        var r = {};
        ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
            if (e[t])
                r[t] = parseFloat(e[t])
        });
        return r
    }
    function bp(e) {
        Jb(e);
        return Te("pageMargins", null, e)
    }
    function pp(e, r) {
        var t = false;
        for (var a = 0; a != r.length; ++a) {
            var n = q(r[a], true);
            if (n.hidden)
                n.hidden = ue(n.hidden);
            var s = parseInt(n.min, 10) - 1
              , i = parseInt(n.max, 10) - 1;
            delete n.min;
            delete n.max;
            n.width = +n.width;
            if (!t && n.width) {
                t = true;
                Th(n.width)
            }
            Ih(n);
            while (s <= i)
                e[s++] = _(n)
        }
    }
    function mp(e, r) {
        var t = ["<cols>"], a, n;
        for (var s = 0; s != r.length; ++s) {
            if (!(a = r[s]))
                continue;
            t[t.length] = Te("col", null, qb(s, a))
        }
        t[t.length] = "</cols>";
        return t.join("")
    }
    function gp(e) {
        var r = {
            ref: (e.match(/ref="([^"]*)"/) || [])[1]
        };
        return r
    }
    function Ep(e) {
        return Te("autoFilter", null, {
            ref: e.ref
        })
    }
    function Sp(e, r, t, a) {
        return Te("sheetViews", Te("sheetView", null, {
            workbookViewId: "0"
        }), {})
    }
    function kp(e, r, t, a, n, s) {
        if (e.v === undefined && e.f === undefined || e.t === "z")
            return "";
        var i = "";
        var f = e.t
          , c = e.v;
        switch (e.t) {
        case "b":
            i = e.v ? "1" : "0";
            break;
        case "n":
            i = "" + e.v;
            break;
        case "e":
            i = mt[e.v];
            break;
        case "d":
            if (a.cellDates)
                i = P(e.v).toISOString();
            else {
                e.t = "n";
                i = "" + (e.v = R(P(e.v)));
                if (typeof e.z === "undefined")
                    e.z = m._table[14]
            }
            break;
        default:
            i = e.v;
            break
        }
        var l = Be("v", se(i))
          , o = {
            r: r
        };
        var u = ep(a.cellXfs, e, a);
        if (u !== 0)
            o.s = u;
        switch (e.t) {
        case "n":
            break;
        case "d":
            o.t = "d";
            break;
        case "b":
            o.t = "b";
            break;
        case "e":
            o.t = "e";
            break;
        default:
            if (e.v == null) {
                delete e.t;
                break
            }
            if (a.bookSST) {
                l = Be("v", "" + Zb(a.Strings, e.v));
                o.t = "s";
                break
            }
            o.t = "str";
            break
        }
        if (e.t != f) {
            e.t = f;
            e.v = c
        }
        if (e.f) {
            var h = e.F && e.F.substr(0, r.length) == r ? {
                t: "array",
                ref: e.F
            } : null;
            l = Te("f", se(e.f), h) + (e.v != null ? l : "")
        }
        if (e.l)
            t["!links"].push([r, e.l]);
        if (e.c)
            t["!comments"].push([r, e.c]);
        return Te("c", l, o)
    }
    var Bp = function e() {
        var r = /<(?:\w+:)?c[ >]/
          , t = /<\/(?:\w+:)?row>/;
        var a = /r=["']([^"']*)["']/
          , n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
        var s = /ref=["']([^"']*)["']/;
        var i = pe("v")
          , f = pe("f");
        return function e(c, l, o, u, h, d) {
            var v = 0, b = "", p = [], g = [], E = 0, S = 0, k = 0, B = "", C;
            var T, w = 0, I = 0;
            var A, x;
            var D = 0, O = 0, F = Array.isArray(d.CellXf), y;
            var N = [];
            var _ = [];
            var M = Array.isArray(l);
            var L = []
              , U = {}
              , H = false;
            for (var V = c.split(t), W = 0, X = V.length; W != X; ++W) {
                b = V[W].trim();
                var G = b.length;
                if (G === 0)
                    continue;
                for (v = 0; v < G; ++v)
                    if (b.charCodeAt(v) === 62)
                        break;
                ++v;
                T = q(b.substr(0, v), true);
                w = T.r != null ? parseInt(T.r, 10) : w + 1;
                I = -1;
                if (o.sheetRows && o.sheetRows < w)
                    continue;
                if (u.s.r > w - 1)
                    u.s.r = w - 1;
                if (u.e.r < w - 1)
                    u.e.r = w - 1;
                if (o && o.cellStyles) {
                    U = {};
                    H = false;
                    if (T.ht) {
                        H = true;
                        U.hpt = parseFloat(T.ht);
                        U.hpx = Dh(U.hpt)
                    }
                    if (T.hidden == "1") {
                        H = true;
                        U.hidden = true
                    }
                    if (H)
                        L[w - 1] = U
                }
                p = b.substr(v).split(r);
                for (v = 0; v != p.length; ++v) {
                    b = p[v].trim();
                    if (b.length === 0)
                        continue;
                    g = b.match(a);
                    E = v;
                    S = 0;
                    k = 0;
                    b = "<c " + (b.substr(0, 1) == "<" ? ">" : "") + b;
                    if (g != null && g.length === 2) {
                        E = 0;
                        B = g[1];
                        for (S = 0; S != B.length; ++S) {
                            if ((k = B.charCodeAt(S) - 64) < 1 || k > 26)
                                break;
                            E = 26 * E + k
                        }
                        --E;
                        I = E
                    } else
                        ++I;
                    for (S = 0; S != b.length; ++S)
                        if (b.charCodeAt(S) === 62)
                            break;
                    ++S;
                    T = q(b.substr(0, S), true);
                    if (!T.r)
                        T.r = yr({
                            r: w - 1,
                            c: I
                        });
                    B = b.substr(S);
                    C = {
                        t: ""
                    };
                    if ((g = B.match(i)) != null && g[1] !== "")
                        C.v = te(g[1]);
                    if (o.cellFormula) {
                        if ((g = B.match(f)) != null && g[1] !== "") {
                            C.f = te(he(g[1])).replace(/_xlfn\./, "");
                            if (g[0].indexOf('t="array"') > -1) {
                                C.F = (B.match(s) || [])[1];
                                if (C.F.indexOf(":") > -1)
                                    N.push([Ur(C.F), C.F])
                            } else if (g[0].indexOf('t="shared"') > -1) {
                                x = q(g[0]);
                                _[parseInt(x.si, 10)] = [x, te(he(g[1]))]
                            }
                        } else if (g = B.match(/<f[^>]*\/>/)) {
                            x = q(g[0]);
                            if (_[x.si])
                                C.f = av(_[x.si][1], _[x.si][0].ref, T.r)
                        }
                        var j = Pr(T.r);
                        for (S = 0; S < N.length; ++S)
                            if (j.r >= N[S][0].s.r && j.r <= N[S][0].e.r)
                                if (j.c >= N[S][0].s.c && j.c <= N[S][0].e.c)
                                    C.F = N[S][1]
                    }
                    if (T.t == null && C.v === undefined) {
                        if (!o.sheetStubs)
                            continue;
                        C.t = "z"
                    } else
                        C.t = T.t || "n";
                    if (u.s.c > E)
                        u.s.c = E;
                    if (u.e.c < E)
                        u.e.c = E;
                    switch (C.t) {
                    case "n":
                        C.v = parseFloat(C.v);
                        break;
                    case "s":
                        A = $b[parseInt(C.v, 10)];
                        if (typeof C.v == "undefined") {
                            if (!o.sheetStubs)
                                continue;
                            C.t = "z"
                        }
                        C.v = A.t;
                        C.r = A.r;
                        if (o.cellHTML)
                            C.h = A.h;
                        break;
                    case "str":
                        C.t = "s";
                        C.v = C.v != null ? he(C.v) : "";
                        if (o.cellHTML)
                            C.h = ce(C.v);
                        break;
                    case "inlineStr":
                        g = B.match(n);
                        C.t = "s";
                        if (g != null && (A = Ru(g[1])))
                            C.v = A.t;
                        else
                            C.v = "";
                        break;
                    case "b":
                        C.v = ue(C.v);
                        break;
                    case "d":
                        if (!o.cellDates) {
                            C.v = R(P(C.v));
                            C.t = "n"
                        }
                        break;
                    case "e":
                        if (!o || o.cellText !== false)
                            C.w = C.v;
                        C.v = gt[C.v];
                        break
                    }
                    D = O = 0;
                    if (F && T.s !== undefined) {
                        y = d.CellXf[T.s];
                        if (y != null) {
                            if (y.numFmtId != null)
                                D = y.numFmtId;
                            if (o.cellStyles && y.fillId != null)
                                O = y.fillId
                        }
                    }
                    rp(C, D, O, o, h, d);
                    if (o.cellDates && F && C.t == "n" && m.is_date(m._table[D])) {
                        var z = m.parse_date_code(C.v);
                        if (z) {
                            C.t = "d";
                            C.v = new Date(Date.UTC(z.y, z.m - 1, z.d, z.H, z.M, z.S, z.u))
                        }
                    }
                    if (M) {
                        var K = Pr(T.r);
                        if (!l[K.r])
                            l[K.r] = [];
                        l[K.r][K.c] = C
                    } else
                        l[T.r] = C
                }
            }
            if (L.length > 0)
                l["!rows"] = L
        }
    }();
    function Cp(e, r, t, a, n) {
        var s = [], i = [], f = Ur(e["!ref"]), c, l, o = "", u = [], h = 0, d = 0, v = e["!rows"];
        var b = Array.isArray(e);
        for (d = f.s.c; d <= f.e.c; ++d)
            u[d] = xr(d);
        for (h = f.s.r; h <= f.e.r; ++h) {
            i = [];
            o = wr(h);
            for (d = f.s.c; d <= f.e.c; ++d) {
                l = u[d] + o;
                var p = b ? (e[h] || [])[d] : e[l];
                if (p === undefined)
                    continue;
                if ((c = kp(p, l, e, r, t, a)) != null)
                    i.push(c)
            }
            if (i.length > 0) {
                var m = {
                    r: o
                };
                if (v && v[h]) {
                    var g = v[h];
                    if (g.hidden)
                        m.hidden = 1;
                    var E = -1;
                    if (g.hpx)
                        E = xh(g.hpx);
                    else if (g.hpt)
                        E = g.hpt;
                    if (E > -1) {
                        m.ht = E;
                        m.customHeight = 1
                    }
                }
                s[s.length] = Te("row", i.join(""), m)
            }
        }
        return s.join("")
    }
    var Tp = Te("worksheet", null, {
        xmlns: Re.main[0],
        "xmlns:r": Re.r
    });
    function wp(e, r, t, a) {
        var n = [Ae, Tp];
        var s = t.SheetNames[e]
          , i = 0
          , f = "";
        var c = t.Sheets[s];
        if (c == null)
            c = {};
        var l = c["!ref"];
        if (l == null)
            l = "A1";
        if (!a)
            a = {};
        c["!comments"] = [];
        c["!drawing"] = [];
        n[n.length] = Te("sheetPr", null, {
            codeName: se(t.SheetNames[e])
        });
        n[n.length] = Te("dimension", null, {
            ref: l
        });
        n[n.length] = Sp(c, r, e, t);
        if (r.sheetFormat)
            n[n.length] = Te("sheetFormatPr", null, {
                defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
                baseColWidth: r.sheetFormat.baseColWidth || "10"
            });
        if (c["!cols"] != null && c["!cols"].length > 0)
            n[n.length] = mp(c, c["!cols"]);
        n[i = n.length] = "<sheetData/>";
        c["!links"] = [];
        if (c["!ref"] != null) {
            f = Cp(c, r, e, t, a);
            if (f.length > 0)
                n[n.length] = f
        }
        if (n.length > i + 1) {
            n[n.length] = "</sheetData>";
            n[i] = n[i].replace("/>", ">")
        }
        if (c["!protect"] != null)
            n[n.length] = hp(c["!protect"]);
        if (c["!autofilter"] != null)
            n[n.length] = Ep(c["!autofilter"]);
        if (c["!merges"] != null && c["!merges"].length > 0)
            n[n.length] = up(c["!merges"]);
        var o = -1, u, h = -1;
        if (c["!links"].length > 0) {
            n[n.length] = "<hyperlinks>";
            c["!links"].forEach(function(e) {
                if (!e[1].Target)
                    return;
                h = ra(a, -1, se(e[1].Target).replace(/#.*$/, ""), Qt.HLINK);
                u = {
                    ref: e[0],
                    "r:id": "rId" + h
                };
                if ((o = e[1].Target.indexOf("#")) > -1)
                    u.location = se(e[1].Target.substr(o + 1));
                if (e[1].Tooltip)
                    u.tooltip = se(e[1].Tooltip);
                n[n.length] = Te("hyperlink", null, u)
            });
            n[n.length] = "</hyperlinks>"
        }
        delete c["!links"];
        if (c["!margins"] != null)
            n[n.length] = bp(c["!margins"]);
        var d = n.length;
        n[n.length] = "";
        if (c["!drawing"].length > 0) {
            h = ra(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Qt.DRAW);
            c["!drawing"].rid = h;
            n[n.length] = Te("drawing", null, {
                "r:id": "rId" + h
            })
        } else
            delete c["!drawing"];
        if (c["!comments"].length > 0) {
            h = ra(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Qt.VML);
            n[n.length] = Te("legacyDrawing", null, {
                "r:id": "rId" + h
            });
            c["!legacy"] = h
        }
        if (n.length > 2) {
            n[n.length] = "</worksheet>";
            n[1] = n[1].replace("/>", ">")
        }
        return n.join("")
    }
    function Ip(e, r) {
        var t = {};
        var a = e.l + r;
        t.r = e.read_shift(4);
        e.l += 4;
        var n = e.read_shift(2);
        e.l += 1;
        var s = e.read_shift(1);
        e.l = a;
        if (s & 16)
            t.hidden = true;
        if (s & 32)
            t.hpt = n / 20;
        return t
    }
    function Ap(e, r, t) {
        var a = vr(17 + 8 * 16);
        var n = (t["!rows"] || [])[e] || {};
        a.write_shift(4, e);
        a.write_shift(4, 0);
        var s = 320;
        if (n.hpx)
            s = xh(n.hpx) * 20;
        else if (n.hpt)
            s = n.hpt * 20;
        a.write_shift(2, s);
        a.write_shift(1, 0);
        var i = 0;
        if (n.hidden)
            i |= 16;
        if (n.hpx || n.hpt)
            i |= 32;
        a.write_shift(1, i);
        a.write_shift(1, 0);
        var f = 0
          , c = a.l;
        a.l += 4;
        var l = {
            r: e,
            c: 0
        };
        for (var o = 0; o < 16; ++o) {
            if (r.s.c > o + 1 << 10 || r.e.c < o << 10)
                continue;
            var u = -1
              , h = -1;
            for (var d = o << 10; d < o + 1 << 10; ++d) {
                l.c = d;
                var v = Array.isArray(t) ? (t[l.r] || [])[l.c] : t[yr(l)];
                if (v) {
                    if (u < 0)
                        u = d;
                    h = d
                }
            }
            if (u < 0)
                continue;
            ++f;
            a.write_shift(4, u);
            a.write_shift(4, h)
        }
        var b = a.l;
        a.l = c;
        a.write_shift(4, f);
        a.l = b;
        return a.length > a.l ? a.slice(0, a.l) : a
    }
    function Rp(e, r, t, a) {
        var n = Ap(a, t, r);
        if (n.length > 17)
            mr(e, "BrtRowHdr", n)
    }
    var xp = dt;
    var Dp = vt;
    function Op(e, r) {
        var t = {};
        e.l += 19;
        t.name = rt(e, r - 19);
        return t
    }
    function Fp(e, r) {
        if (r == null)
            r = vr(84 + 4 * e.length);
        for (var t = 0; t < 3; ++t)
            r.write_shift(1, 0);
        St({
            auto: 1
        }, r);
        r.write_shift(-4, -1);
        r.write_shift(-4, -1);
        tt(e, r);
        return r.slice(0, r.l)
    }
    function Pp(e, r) {
        var t = Jr(e);
        return [t]
    }
    function yp(e, r, t) {
        if (t == null)
            t = vr(8);
        return et(r, t)
    }
    function Np(e, r) {
        var t = Jr(e);
        var a = e.read_shift(1);
        return [t, a, "b"]
    }
    function _p(e, r, t) {
        if (t == null)
            t = vr(9);
        et(r, t);
        t.write_shift(1, e.v ? 1 : 0);
        return t
    }
    function Mp(e, r) {
        var t = Jr(e);
        var a = e.read_shift(1);
        return [t, a, "e"]
    }
    function Lp(e, r) {
        var t = Jr(e);
        var a = e.read_shift(4);
        return [t, a, "s"]
    }
    function Up(e, r, t) {
        if (t == null)
            t = vr(12);
        et(r, t);
        t.write_shift(4, r.v);
        return t
    }
    function Hp(e, r) {
        var t = Jr(e);
        var a = bt(e);
        return [t, a, "n"]
    }
    function Vp(e, r, t) {
        if (t == null)
            t = vr(16);
        et(r, t);
        pt(e.v, t);
        return t
    }
    function Wp(e, r) {
        var t = Jr(e);
        var a = lt(e);
        return [t, a, "n"]
    }
    function Xp(e, r, t) {
        if (t == null)
            t = vr(12);
        et(r, t);
        ot(e.v, t);
        return t
    }
    function Gp(e, r) {
        var t = Jr(e);
        var a = jr(e);
        return [t, a, "str"]
    }
    function jp(e, r, t) {
        if (t == null)
            t = vr(12 + 4 * e.v.length);
        et(r, t);
        zr(e.v, t);
        return t.length > t.l ? t.slice(0, t.l) : t
    }
    function zp(e, r, t) {
        var a = e.l + r;
        var n = Jr(e);
        n.r = t["!row"];
        var s = e.read_shift(1);
        var i = [n, s, "b"];
        if (t.cellFormula) {
            e.l += 2;
            var f = Lb(e, a - e.l, t);
            i[3] = Nb(f, null, n, t.supbooks, t)
        } else
            e.l = a;
        return i
    }
    function Kp(e, r, t) {
        var a = e.l + r;
        var n = Jr(e);
        n.r = t["!row"];
        var s = e.read_shift(1);
        var i = [n, s, "e"];
        if (t.cellFormula) {
            e.l += 2;
            var f = Lb(e, a - e.l, t);
            i[3] = Nb(f, null, n, t.supbooks, t)
        } else
            e.l = a;
        return i
    }
    function Yp(e, r, t) {
        var a = e.l + r;
        var n = Jr(e);
        n.r = t["!row"];
        var s = bt(e);
        var i = [n, s, "n"];
        if (t.cellFormula) {
            e.l += 2;
            var f = Lb(e, a - e.l, t);
            i[3] = Nb(f, null, n, t.supbooks, t)
        } else
            e.l = a;
        return i
    }
    function $p(e, r, t) {
        var a = e.l + r;
        var n = Jr(e);
        n.r = t["!row"];
        var s = jr(e);
        var i = [n, s, "str"];
        if (t.cellFormula) {
            e.l += 2;
            var f = Lb(e, a - e.l, t);
            i[3] = Nb(f, null, n, t.supbooks, t)
        } else
            e.l = a;
        return i
    }
    var Qp = dt;
    var Zp = vt;
    function qp(e, r) {
        if (r == null)
            r = vr(4);
        r.write_shift(4, e);
        return r
    }
    function Jp(e, r, t) {
        var a = e.l + r;
        var n = dt(e, 16);
        var s = at(e);
        var i = jr(e);
        var f = jr(e);
        var c = jr(e);
        e.l = a;
        return {
            rfx: n,
            relId: s,
            loc: i,
            Tooltip: f,
            display: c
        }
    }
    function em(e, r, t) {
        if (t == null)
            t = vr(50 + 4 * e[1].Target.length);
        vt({
            s: Pr(e[0]),
            e: Pr(e[0])
        }, t);
        ct("rId" + r, t);
        var a = e[1].Target.indexOf("#");
        var n = a == -1 ? "" : e[1].Target.substr(a + 1);
        zr(n || "", t);
        zr(e[1].Tooltip || "", t);
        zr("", t);
        return t.slice(0, t.l)
    }
    function rm(e, r, t) {
        var a = e.l + r;
        var n = ut(e, 16);
        var s = e.read_shift(1);
        var i = [n];
        i[2] = s;
        if (t.cellFormula) {
            var f = Mb(e, a - e.l, t);
            i[1] = f
        } else
            e.l = a;
        return i
    }
    function tm(e, r, t) {
        var a = e.l + r;
        var n = dt(e, 16);
        var s = [n];
        if (t.cellFormula) {
            var i = Hb(e, a - e.l, t);
            s[1] = i;
            e.l = a
        } else
            e.l = a;
        return s
    }
    function am(e, r, t) {
        if (t == null)
            t = vr(18);
        var a = qb(e, r);
        t.write_shift(-4, e);
        t.write_shift(-4, e);
        t.write_shift(4, (a.width || 10) * 256);
        t.write_shift(4, 0);
        var n = 0;
        if (r.hidden)
            n |= 1;
        if (typeof a.width == "number")
            n |= 2;
        t.write_shift(1, n);
        t.write_shift(1, 0);
        return t
    }
    function nm(e, r, t) {
        return {
            left: bt(e, 8),
            right: bt(e, 8),
            top: bt(e, 8),
            bottom: bt(e, 8),
            header: bt(e, 8),
            footer: bt(e, 8)
        }
    }
    function sm(e, r) {
        if (r == null)
            r = vr(6 * 8);
        Jb(e);
        pt(e.left, r);
        pt(e.right, r);
        pt(e.top, r);
        pt(e.bottom, r);
        pt(e.header, r);
        pt(e.footer, r);
        return r
    }
    function im(e, r) {
        if (r == null)
            r = vr(30);
        r.write_shift(2, 924);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        r.write_shift(1, 0);
        r.write_shift(1, 0);
        r.write_shift(2, 0);
        r.write_shift(2, 100);
        r.write_shift(2, 0);
        r.write_shift(2, 0);
        r.write_shift(2, 0);
        r.write_shift(4, 0);
        return r
    }
    function fm(e, r) {
        if (r == null)
            r = vr(16 * 4 + 2);
        r.write_shift(2, e.password ? th(e.password) : 0);
        r.write_shift(4, 1);
        [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
            if (t[1])
                r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0);
            else
                r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1)
        });
        return r
    }
    function cm(e, r, t, a, n, s) {
        if (!e)
            return e;
        var i = r || {};
        if (!t)
            t = {
                "!id": {}
            };
        if (c != null && i.dense == null)
            i.dense = c;
        var f = i.dense ? [] : {};
        var l;
        var o = {
            s: {
                r: 2e6,
                c: 2e6
            },
            e: {
                r: 0,
                c: 0
            }
        };
        var u = false
          , h = false;
        var d, v, b, p, g, E, S, k, B;
        var C = [];
        i.biff = 12;
        i["!row"] = 0;
        var T = 0
          , w = false;
        var I = [];
        var A = {};
        var R = [[]];
        R.sharedf = A;
        R.arrayf = I;
        R.SheetNames = a.SheetNames || a.Sheets.map(function(e) {
            return e.name
        });
        i.supbooks = R;
        for (var x = 0; x < a.Names.length; ++x)
            R[0][x + 1] = a.Names[x];
        var D = []
          , O = [];
        var F = 0
          , P = 0;
        var y = false;
        br(e, function e(r, a, c) {
            if (h)
                return;
            switch (c) {
            case 148:
                l = r;
                break;
            case 0:
                d = r;
                if (i.sheetRows && i.sheetRows <= d.r)
                    h = true;
                k = wr(p = d.r);
                i["!row"] = d.r;
                if (r.hidden || r.hpt) {
                    if (r.hpt)
                        r.hpx = Dh(r.hpt);
                    O[r.r] = r
                }
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                v = {
                    t: r[2]
                };
                switch (r[2]) {
                case "n":
                    v.v = r[1];
                    break;
                case "s":
                    S = $b[r[1]];
                    v.v = S.t;
                    v.r = S.r;
                    break;
                case "b":
                    v.v = r[1] ? true : false;
                    break;
                case "e":
                    v.v = r[1];
                    if (i.cellText !== false)
                        v.w = mt[v.v];
                    break;
                case "str":
                    v.t = "s";
                    v.v = he(r[1]);
                    break
                }
                if (b = s.CellXf[r[0].iStyleRef])
                    rp(v, b.ifmt, null, i, n, s);
                g = r[0].c;
                if (i.dense) {
                    if (!f[p])
                        f[p] = [];
                    f[p][g] = v
                } else
                    f[xr(g) + k] = v;
                if (i.cellFormula) {
                    w = false;
                    for (T = 0; T < I.length; ++T) {
                        var x = I[T];
                        if (d.r >= x[0].s.r && d.r <= x[0].e.r)
                            if (g >= x[0].s.c && g <= x[0].e.c) {
                                v.F = Lr(x[0]);
                                w = true
                            }
                    }
                    if (!w && r.length > 3)
                        v.f = r[3]
                }
                if (o.s.r > d.r)
                    o.s.r = d.r;
                if (o.s.c > g)
                    o.s.c = g;
                if (o.e.r < d.r)
                    o.e.r = d.r;
                if (o.e.c < g)
                    o.e.c = g;
                if (i.cellDates && b && v.t == "n" && m.is_date(m._table[b.ifmt])) {
                    var F = m.parse_date_code(v.v);
                    if (F) {
                        v.t = "d";
                        v.v = new Date(Date.UTC(F.y, F.m - 1, F.d, F.H, F.M, F.S, F.u))
                    }
                }
                break;
            case 1:
                if (!i.sheetStubs)
                    break;
                v = {
                    t: "z",
                    v: undefined
                };
                g = r[0].c;
                if (i.dense) {
                    if (!f[p])
                        f[p] = [];
                    f[p][g] = v
                } else
                    f[xr(g) + k] = v;
                if (o.s.r > d.r)
                    o.s.r = d.r;
                if (o.s.c > g)
                    o.s.c = g;
                if (o.e.r < d.r)
                    o.e.r = d.r;
                if (o.e.c < g)
                    o.e.c = g;
                break;
            case 176:
                C.push(r);
                break;
            case 494:
                var P = t["!id"][r.relId];
                if (P) {
                    r.Target = P.Target;
                    if (r.loc)
                        r.Target += "#" + r.loc;
                    r.Rel = P
                }
                for (p = r.rfx.s.r; p <= r.rfx.e.r; ++p)
                    for (g = r.rfx.s.c; g <= r.rfx.e.c; ++g) {
                        if (i.dense) {
                            if (!f[p])
                                f[p] = [];
                            if (!f[p][g])
                                f[p][g] = {
                                    t: "z",
                                    v: undefined
                                };
                            f[p][g].l = r
                        } else {
                            E = yr({
                                c: g,
                                r: p
                            });
                            if (!f[E])
                                f[E] = {
                                    t: "z",
                                    v: undefined
                                };
                            f[E].l = r
                        }
                    }
                break;
            case 426:
                if (!i.cellFormula)
                    break;
                I.push(r);
                B = i.dense ? f[p][g] : f[xr(g) + k];
                B.f = Nb(r[1], o, {
                    r: d.r,
                    c: g
                }, R, i);
                B.F = Lr(r[0]);
                break;
            case 427:
                if (!i.cellFormula)
                    break;
                A[yr(r[0].s)] = r[1];
                B = i.dense ? f[p][g] : f[xr(g) + k];
                B.f = Nb(r[1], o, {
                    r: d.r,
                    c: g
                }, R, i);
                break;
            case 60:
                if (!i.cellStyles)
                    break;
                while (r.e >= r.s) {
                    D[r.e--] = {
                        width: r.w / 256,
                        hidden: !!(r.flags & 1)
                    };
                    if (!y) {
                        y = true;
                        Th(r.w / 256)
                    }
                    Ih(D[r.e + 1])
                }
                break;
            case 161:
                f["!autofilter"] = {
                    ref: Lr(r)
                };
                break;
            case 476:
                f["!margins"] = r;
                break;
            case 175:
            case 644:
            case 625:
            case 562:
            case 396:
            case 1112:
            case 1146:
            case 471:
            case 1050:
            case 649:
            case 1105:
            case 49:
            case 589:
            case 607:
            case 564:
            case 1055:
            case 168:
            case 174:
            case 1180:
            case 499:
            case 64:
            case 1053:
            case 550:
            case 171:
            case 167:
            case 1177:
            case 169:
            case 1181:
            case 551:
            case 552:
            case 661:
            case 639:
            case 478:
            case 151:
            case 537:
            case 477:
            case 536:
            case 1103:
            case 680:
            case 1104:
            case 1024:
            case 152:
            case 663:
            case 535:
            case 678:
            case 504:
            case 1043:
            case 428:
            case 170:
            case 50:
            case 2070:
            case 485:
            case 1045:
            case 147:
                break;
            case 35:
                u = true;
                break;
            case 36:
                u = false;
                break;
            case 37:
                break;
            case 38:
                break;
            default:
                if ((a || "").indexOf("Begin") > 0) {} else if ((a || "").indexOf("End") > 0) {} else if (!u || i.WTF)
                    throw new Error("Unexpected record " + c + " " + a)
            }
        }, i);
        delete i.supbooks;
        delete i["!row"];
        if (!f["!ref"] && (o.s.r < 2e6 || l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0)))
            f["!ref"] = Lr(l || o);
        if (i.sheetRows && f["!ref"]) {
            var N = Ur(f["!ref"]);
            if (i.sheetRows < +N.e.r) {
                N.e.r = i.sheetRows - 1;
                if (N.e.r > o.e.r)
                    N.e.r = o.e.r;
                if (N.e.r < N.s.r)
                    N.s.r = N.e.r;
                if (N.e.c > o.e.c)
                    N.e.c = o.e.c;
                if (N.e.c < N.s.c)
                    N.s.c = N.e.c;
                f["!fullref"] = f["!ref"];
                f["!ref"] = Lr(N)
            }
        }
        if (C.length > 0)
            f["!merges"] = C;
        if (D.length > 0)
            f["!cols"] = D;
        if (O.length > 0)
            f["!rows"] = O;
        return f
    }
    function lm(e, r, t, a, n, s) {
        if (r.v === undefined)
            return "";
        var i = "";
        var f = null;
        switch (r.t) {
        case "b":
            i = r.v ? "1" : "0";
            break;
        case "d":
            r.z = r.z || m._table[14];
            f = r.v;
            r.v = R(r.v);
            r.t = "n";
            break;
        case "n":
        case "e":
            i = "" + r.v;
            break;
        default:
            i = r.v;
            break
        }
        var c = {
            r: t,
            c: a
        };
        c.s = ep(n.cellXfs, r, n);
        if (r.l)
            s["!links"].push([yr(c), r.l]);
        if (r.c)
            s["!comments"].push([yr(c), r.c]);
        switch (r.t) {
        case "s":
        case "str":
            if (n.bookSST) {
                i = Zb(n.Strings, r.v);
                c.t = "s";
                c.v = i;
                mr(e, "BrtCellIsst", Up(r, c))
            } else {
                c.t = "str";
                mr(e, "BrtCellSt", jp(r, c))
            }
            return;
        case "n":
            if (r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3)
                mr(e, "BrtCellRk", Xp(r, c));
            else
                mr(e, "BrtCellReal", Vp(r, c));
            if (f) {
                r.t = "d";
                r.v = f
            }
            return;
        case "b":
            c.t = "b";
            mr(e, "BrtCellBool", _p(r, c));
            return;
        case "e":
            c.t = "e";
            break
        }
        mr(e, "BrtCellBlank", yp(r, c))
    }
    function om(e, r, t, a, n) {
        var s = Ur(r["!ref"] || "A1"), i, f = "", c = [];
        mr(e, "BrtBeginSheetData");
        var l = Array.isArray(r);
        for (var o = s.s.r; o <= s.e.r; ++o) {
            f = wr(o);
            Rp(e, r, s, o);
            for (var u = s.s.c; u <= s.e.c; ++u) {
                if (o === s.s.r)
                    c[u] = xr(u);
                i = c[u] + f;
                var h = l ? (r[o] || [])[u] : r[i];
                if (!h)
                    continue;
                lm(e, h, o, u, a, r)
            }
        }
        mr(e, "BrtEndSheetData")
    }
    function um(e, r) {
        if (!r || !r["!merges"])
            return;
        mr(e, "BrtBeginMergeCells", qp(r["!merges"].length));
        r["!merges"].forEach(function(r) {
            mr(e, "BrtMergeCell", Zp(r))
        });
        mr(e, "BrtEndMergeCells")
    }
    function hm(e, r, t, a, n) {
        if (!r || !r["!cols"])
            return;
        mr(e, "BrtBeginColInfos");
        r["!cols"].forEach(function(r, t) {
            if (r)
                mr(e, "BrtColInfo", am(t, r))
        });
        mr(e, "BrtEndColInfos")
    }
    function dm(e, r, t) {
        r["!links"].forEach(function(r) {
            if (!r[1].Target)
                return;
            var a = ra(t, -1, r[1].Target.replace(/#.*$/, ""), Qt.HLINK);
            mr(e, "BrtHLink", em(r, a))
        });
        delete r["!links"]
    }
    function vm(e, r, t, a) {
        if (r["!comments"].length > 0) {
            var n = ra(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", Qt.VML);
            mr(e, "BrtLegacyDrawing", ct("rId" + n));
            r["!legacy"] = n
        }
    }
    function bm(e, r) {
        if (!r["!autofilter"])
            return;
        mr(e, "BrtBeginAFilter", vt(Mr(r["!autofilter"].ref)));
        mr(e, "BrtEndAFilter")
    }
    function pm(e, r) {
        mr(e, "BrtBeginWsViews");
        {
            mr(e, "BrtBeginWsView", im(r));
            mr(e, "BrtEndWsView")
        }
        mr(e, "BrtEndWsViews")
    }
    function mm(e, r) {}
    function gm(e, r) {
        if (!r["!protect"])
            return;
        mr(e, "BrtSheetProtection", fm(r["!protect"]))
    }
    function Em(e, r, t, a) {
        var n = pr();
        var s = t.SheetNames[e]
          , i = t.Sheets[s] || {};
        var f = Ur(i["!ref"] || "A1");
        i["!links"] = [];
        i["!comments"] = [];
        mr(n, "BrtBeginSheet");
        mr(n, "BrtWsProp", Fp(s));
        mr(n, "BrtWsDim", Dp(f));
        pm(n, i);
        mm(n, i);
        hm(n, i, e, r, t);
        om(n, i, e, r, t);
        gm(n, i);
        bm(n, i);
        um(n, i);
        dm(n, i, a);
        if (i["!margins"])
            mr(n, "BrtMargins", sm(i["!margins"]));
        vm(n, i, e, a);
        mr(n, "BrtEndSheet");
        return n.end()
    }
    function Sm(e) {
        var r = [];
        (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function(e) {
            var t = e.match(/<c:pt idx="(.*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
            if (!t)
                return;
            r[+t[1]] = +t[2]
        });
        var t = te((e.match(/<c:formatCode>(.*?)<\/c:formatCode>/) || ["", "General"])[1]);
        return [r, t]
    }
    function km(e, r, t, a, n, s) {
        var i = s || {
            "!type": "chart"
        };
        if (!e)
            return s;
        var f = 0
          , c = 0
          , l = "A";
        var o = {
            s: {
                r: 2e6,
                c: 2e6
            },
            e: {
                r: 0,
                c: 0
            }
        };
        (e.match(/<c:numCache>.*?<\/c:numCache>/gm) || []).forEach(function(e) {
            var r = Sm(e);
            o.s.r = o.s.c = 0;
            o.e.c = f;
            l = xr(f);
            r[0].forEach(function(e, t) {
                i[l + wr(t)] = {
                    t: "n",
                    v: e,
                    z: r[1]
                };
                c = t
            });
            if (o.e.r < c)
                o.e.r = c;
            ++f
        });
        if (f > 0)
            i["!ref"] = Lr(o);
        return i
    }
    Qt.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
    var Bm = Te("chartsheet", null, {
        xmlns: Re.main[0],
        "xmlns:r": Re.r
    });
    function Cm(e, r, t, a, n, s) {
        if (!e)
            return e;
        if (!t)
            t = {
                "!id": {}
            };
        var i = {
            "!type": "chart",
            "!chart": null,
            "!rel": ""
        };
        var f;
        if (f = e.match(/drawing r:id="(.*?)"/))
            i["!rel"] = f[1];
        if (t["!id"][i["!rel"]])
            i["!chart"] = t["!id"][i["!rel"]];
        return i
    }
    function Tm(e, r, t, a) {
        var n = [Ae, Bm];
        n[n.length] = Te("drawing", null, {
            "r:id": "rId1"
        });
        ra(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Qt.DRAW);
        if (n.length > 2) {
            n[n.length] = "</chartsheet>";
            n[1] = n[1].replace("/>", ">")
        }
        return n.join("")
    }
    function wm(e, r, t, a, n, s) {
        if (!e)
            return e;
        if (!t)
            t = {
                "!id": {}
            };
        var i = {
            "!type": "chart",
            "!chart": null,
            "!rel": ""
        };
        var f = [];
        var c = false;
        br(e, function e(t, a, n) {
            switch (n) {
            case 550:
                i["!rel"] = t;
                break;
            case 562:
            case 652:
            case 651:
            case 669:
            case 679:
            case 551:
            case 552:
            case 476:
                break;
            case 35:
                c = true;
                break;
            case 36:
                c = false;
                break;
            case 37:
                f.push(a);
                break;
            case 38:
                f.pop();
                break;
            default:
                if ((a || "").indexOf("Begin") > 0)
                    f.push(a);
                else if ((a || "").indexOf("End") > 0)
                    f.pop();
                else if (!c || r.WTF)
                    throw new Error("Unexpected record " + n + " " + a)
            }
        }, r);
        if (t["!id"][i["!rel"]])
            i["!chart"] = t["!id"][i["!rel"]];
        return i
    }
    function Im(e, r, t, a) {
        var n = pr();
        mr(n, "BrtBeginSheet");
        mr(n, "BrtEndSheet");
        return n.end()
    }
    var Am = [["allowRefreshQuery", "0"], ["autoCompressPictures", "1"], ["backupFile", "0"], ["checkCompatibility", "0"], ["codeName", ""], ["date1904", "0"], ["dateCompatibility", "1"], ["filterPrivacy", "0"], ["hidePivotFieldList", "0"], ["promptedSolutions", "0"], ["publishItems", "0"], ["refreshAllConnections", false], ["saveExternalLinkValues", "1"], ["showBorderUnselectedTables", "1"], ["showInkAnnotation", "1"], ["showObjects", "all"], ["showPivotChartFilter", "0"]];
    var Rm = [["activeTab", "0"], ["autoFilterDateGrouping", "1"], ["firstSheet", "0"], ["minimized", "0"], ["showHorizontalScroll", "1"], ["showSheetTabs", "1"], ["showVerticalScroll", "1"], ["tabRatio", "600"], ["visibility", "visible"]];
    var xm = [];
    var Dm = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
    var Om = [["autoUpdate", "false"], ["changesSavedWin", "false"], ["includeHiddenRowCol", "true"], ["includePrintSettings", "true"], ["maximized", "false"], ["minimized", "false"], ["onlySync", "false"], ["personalView", "false"], ["showComments", "commIndicator"], ["showFormulaBar", "true"], ["showHorizontalScroll", "true"], ["showObjects", "all"], ["showSheetTabs", "true"], ["showStatusbar", "true"], ["showVerticalScroll", "true"], ["tabRatio", "600"], ["xWindow", "0"], ["yWindow", "0"]];
    function Fm(e, r) {
        for (var t = 0; t != e.length; ++t) {
            var a = e[t];
            for (var n = 0; n != r.length; ++n) {
                var s = r[n];
                if (a[s[0]] == null)
                    a[s[0]] = s[1]
            }
        }
    }
    function Pm(e, r) {
        for (var t = 0; t != r.length; ++t) {
            var a = r[t];
            if (e[a[0]] == null)
                e[a[0]] = a[1]
        }
    }
    function ym(e) {
        Pm(e.WBProps, Am);
        Pm(e.CalcPr, Dm);
        Fm(e.WBView, Rm);
        Fm(e.Sheets, xm);
        Qb.date1904 = ue(e.WBProps.date1904, "date1904")
    }
    function Nm(e) {
        var r = "][*?/\\".split("");
        e.forEach(function(t, a) {
            r.forEach(function(e) {
                if (t.indexOf(e) > -1)
                    throw new Error("Sheet name cannot contain : \\ / ? * [ ]")
            });
            if (t.length > 31)
                throw new Error("Sheet names cannot exceed 31 chars");
            for (var n = 0; n < a; ++n)
                if (t == e[n])
                    throw new Error("Duplicate Sheet Name: " + t)
        })
    }
    function _m(e) {
        if (!e || !e.SheetNames || !e.Sheets)
            throw new Error("Invalid Workbook");
        Nm(e.SheetNames)
    }
    var Mm = /<\w+:workbook/;
    function Lm(e, r) {
        if (!e)
            throw new Error("Could not find file");
        var t = {
            AppVersion: {},
            WBProps: {},
            WBView: [],
            Sheets: [],
            CalcPr: {},
            Names: [],
            xmlns: ""
        };
        var a = false
          , n = "xmlns";
        var s = {}
          , i = 0;
        e.replace($, function f(c, l) {
            var o = q(c);
            switch (J(o[0])) {
            case "<?xml":
                break;
            case "<workbook":
                if (c.match(Mm))
                    n = "xmlns" + c.match(/<(\w+):/)[1];
                t.xmlns = o[n];
                break;
            case "</workbook>":
                break;
            case "<fileVersion":
                delete o[0];
                t.AppVersion = o;
                break;
            case "<fileVersion/>":
            case "</fileVersion>":
                break;
            case "<fileSharing":
            case "<fileSharing/>":
                break;
            case "<workbookPr":
                delete o[0];
                t.WBProps = o;
                break;
            case "<workbookPr/>":
                delete o[0];
                t.WBProps = o;
                break;
            case "</workbookPr>":
                break;
            case "<workbookProtection":
                break;
            case "<workbookProtection/>":
                break;
            case "<bookViews>":
            case "</bookViews>":
                break;
            case "<workbookView":
                delete o[0];
                t.WBView.push(o);
                break;
            case "</workbookView>":
                break;
            case "<sheets>":
            case "</sheets>":
                break;
            case "<sheet":
                switch (o.state) {
                case "hidden":
                    o.Hidden = 1;
                    break;
                case "veryHidden":
                    o.Hidden = 2;
                    break;
                default:
                    o.Hidden = 0
                }
                delete o.state;
                o.name = te(he(o.name));
                delete o[0];
                t.Sheets.push(o);
                break;
            case "</sheet>":
                break;
            case "<functionGroups":
            case "<functionGroups/>":
                break;
            case "<functionGroup":
                break;
            case "<externalReferences":
            case "</externalReferences>":
            case "<externalReferences>":
                break;
            case "<externalReference":
                break;
            case "<definedNames/>":
                break;
            case "<definedNames>":
            case "<definedNames":
                a = true;
                break;
            case "</definedNames>":
                a = false;
                break;
            case "<definedName":
                {
                    s = {};
                    s.Name = o.name;
                    if (o.comment)
                        s.Comment = o.comment;
                    if (o.localSheetId)
                        s.Sheet = +o.localSheetId;
                    i = l + c.length
                }
                break;
            case "</definedName>":
                {
                    s.Ref = e.slice(i, l);
                    t.Names.push(s)
                }
                break;
            case "<definedName/>":
                break;
            case "<calcPr":
                delete o[0];
                t.CalcPr = o;
                break;
            case "<calcPr/>":
                delete o[0];
                t.CalcPr = o;
                break;
            case "</calcPr>":
                break;
            case "<oleSize":
                break;
            case "<customWorkbookViews>":
            case "</customWorkbookViews>":
            case "<customWorkbookViews":
                break;
            case "<customWorkbookView":
            case "</customWorkbookView>":
                break;
            case "<pivotCaches>":
            case "</pivotCaches>":
            case "<pivotCaches":
                break;
            case "<pivotCache":
                break;
            case "<smartTagPr":
            case "<smartTagPr/>":
                break;
            case "<smartTagTypes":
            case "<smartTagTypes>":
            case "</smartTagTypes>":
                break;
            case "<smartTagType":
                break;
            case "<webPublishing":
            case "<webPublishing/>":
                break;
            case "<fileRecoveryPr":
            case "<fileRecoveryPr/>":
                break;
            case "<webPublishObjects>":
            case "<webPublishObjects":
            case "</webPublishObjects>":
                break;
            case "<webPublishObject":
                break;
            case "<extLst>":
            case "</extLst>":
            case "<extLst/>":
                break;
            case "<ext":
                a = true;
                break;
            case "</ext>":
                a = false;
                break;
            case "<ArchID":
                break;
            case "<AlternateContent":
                a = true;
                break;
            case "</AlternateContent>":
                a = false;
                break;
            default:
                if (!a && r.WTF)
                    throw new Error("unrecognized " + o[0] + " in workbook")
            }
            return c
        });
        if (Re.main.indexOf(t.xmlns) === -1)
            throw new Error("Unknown Namespace: " + t.xmlns);
        ym(t);
        return t
    }
    var Um = Te("workbook", null, {
        xmlns: Re.main[0],
        "xmlns:r": Re.r
    });
    function Hm(e) {
        if (!e.Workbook)
            return "false";
        if (!e.Workbook.WBProps)
            return "false";
        return ue(e.Workbook.WBProps.date1904) ? "true" : "false"
    }
    function Vm(e, r) {
        var t = [Ae];
        t[t.length] = Um;
        var a = e.Workbook && (e.Workbook.Names || []).length > 0;
        t[t.length] = Te("workbookPr", null, {
            date1904: Hm(e),
            codeName: "ThisWorkbook"
        });
        t[t.length] = "<sheets>";
        var n = e.Workbook && e.Workbook.Sheets || [];
        for (var s = 0; s != e.SheetNames.length; ++s) {
            var i = {
                name: se(e.SheetNames[s].substr(0, 31))
            };
            i.sheetId = "" + (s + 1);
            i["r:id"] = "rId" + (s + 1);
            if (n[s])
                switch (n[s].Hidden) {
                case 1:
                    i.state = "hidden";
                    break;
                case 2:
                    i.state = "veryHidden";
                    break
                }
            t[t.length] = Te("sheet", null, i)
        }
        t[t.length] = "</sheets>";
        if (a) {
            t[t.length] = "<definedNames>";
            if (e.Workbook && e.Workbook.Names)
                e.Workbook.Names.forEach(function(e) {
                    var r = {
                        name: e.Name
                    };
                    if (e.Comment)
                        r.comment = e.Comment;
                    if (e.Sheet != null)
                        r.localSheetId = "" + e.Sheet;
                    if (!e.Ref)
                        return;
                    t[t.length] = Te("definedName", String(e.Ref), r)
                });
            t[t.length] = "</definedNames>"
        }
        if (t.length > 2) {
            t[t.length] = "</workbook>";
            t[1] = t[1].replace("/>", ">")
        }
        return t.join("")
    }
    function Wm(e, r) {
        var t = {};
        t.Hidden = e.read_shift(4);
        t.iTabID = e.read_shift(4);
        t.strRelID = ft(e, r - 8);
        t.name = jr(e);
        return t
    }
    function Xm(e, r) {
        if (!r)
            r = vr(127);
        r.write_shift(4, e.Hidden);
        r.write_shift(4, e.iTabID);
        ct(e.strRelID, r);
        zr(e.name.substr(0, 31), r);
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    function Gm(e, r) {
        e.read_shift(4);
        var t = e.read_shift(4);
        var a = r > 8 ? jr(e) : "";
        return [t, a]
    }
    function jm(e, r) {
        if (!r)
            r = vr(72);
        r.write_shift(4, 0);
        r.write_shift(4, 0);
        tt("ThisWorkbook", r);
        return r.slice(0, r.l)
    }
    function zm(e, r) {
        var t = {};
        e.read_shift(4);
        t.ArchID = e.read_shift(4);
        e.l += r - 8;
        return t
    }
    function Km(e, r, t) {
        var a = e.l + r;
        var n = e.read_shift(4);
        var s = e.read_shift(1);
        var i = e.read_shift(4);
        var f = st(e);
        var c = Ub(e, 0, t);
        var l = at(e);
        e.l = a;
        var o = {
            Name: f,
            Ptg: c,
            Comment: l
        };
        if (i < 268435455)
            o.Sheet = i;
        return o
    }
    function Ym(e, r) {
        var t = {
            AppVersion: {},
            WBProps: {},
            WBView: [],
            Sheets: [],
            CalcPr: {},
            xmlns: ""
        };
        var a = false, n;
        if (!r)
            r = {};
        r.biff = 12;
        var s = [];
        var i = [];
        i.SheetNames = [];
        br(e, function e(n, f, c) {
            switch (c) {
            case 156:
                i.SheetNames.push(n.name);
                t.Sheets.push(n);
                break;
            case 39:
                n.Ref = Nb(n.Ptg, null, null, i, r);
                delete n.Ptg;
                s.push(n);
                break;
            case 1036:
                break;
            case 2071:
            case 534:
            case 677:
            case 158:
            case 157:
            case 610:
            case 2050:
            case 362:
            case 155:
            case 548:
            case 676:
            case 128:
            case 665:
            case 2128:
            case 2125:
            case 549:
            case 2053:
            case 361:
            case 596:
            case 667:
            case 355:
            case 358:
            case 357:
            case 2076:
            case 2075:
            case 2082:
            case 397:
            case 154:
            case 153:
            case 1117:
            case 553:
            case 2091:
                break;
            case 35:
                a = true;
                break;
            case 36:
                a = false;
                break;
            case 37:
                break;
            case 38:
                break;
            case 16:
                break;
            default:
                if ((f || "").indexOf("Begin") > 0) {} else if ((f || "").indexOf("End") > 0) {} else if (!a || r.WTF)
                    throw new Error("Unexpected record " + c + " " + f)
            }
        }, r);
        ym(t);
        t.Names = s;
        return t
    }
    function $m(e, r, t) {
        mr(e, "BrtBeginBundleShs");
        for (var a = 0; a != r.SheetNames.length; ++a) {
            var n = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[a] && r.Workbook.Sheets[a].Hidden || 0;
            var s = {
                Hidden: n,
                iTabID: a + 1,
                strRelID: "rId" + (a + 1),
                name: r.SheetNames[a]
            };
            mr(e, "BrtBundleSh", Xm(s))
        }
        mr(e, "BrtEndBundleShs")
    }
    function Qm(e, t) {
        if (!t)
            t = vr(127);
        for (var a = 0; a != 4; ++a)
            t.write_shift(4, 0);
        zr("SheetJS", t);
        zr(r.version, t);
        zr(r.version, t);
        zr("7262", t);
        t.length = t.l;
        return t.length > t.l ? t.slice(0, t.l) : t
    }
    function Zm(e, r) {
        if (!r)
            r = vr(29);
        r.write_shift(-4, 0);
        r.write_shift(-4, 460);
        r.write_shift(4, 28800);
        r.write_shift(4, 17600);
        r.write_shift(4, 500);
        r.write_shift(4, e);
        r.write_shift(4, e);
        var t = 120;
        r.write_shift(1, t);
        return r.length > r.l ? r.slice(0, r.l) : r
    }
    function qm(e, r, t) {
        if (!r.Workbook || !r.Workbook.Sheets)
            return;
        var a = r.Workbook.Sheets;
        var n = 0
          , s = -1
          , i = -1;
        for (; n < a.length; ++n) {
            if (!a[n] || !a[n].Hidden && s == -1)
                s = n;
            else if (a[n].Hidden == 1 && i == -1)
                i = n
        }
        if (i > s)
            return;
        mr(e, "BrtBeginBookViews");
        mr(e, "BrtBookView", Zm(s));
        mr(e, "BrtEndBookViews")
    }
    function Jm(e, r) {
        if (!r)
            r = vr(26);
        r.write_shift(4, 0);
        r.write_shift(4, 1);
        r.write_shift(4, 0);
        pt(0, r);
        r.write_shift(-4, 1023);
        r.write_shift(1, 51);
        r.write_shift(1, 0);
        return r
    }
    function eg(e, r) {
        if (!r)
            r = vr(1);
        r.write_shift(1, 0);
        return r
    }
    function rg(e, r) {
        var t = pr();
        mr(t, "BrtBeginBook");
        mr(t, "BrtFileVersion", Qm());
        mr(t, "BrtWbProp", jm());
        qm(t, e, r);
        $m(t, e, r);
        mr(t, "BrtEndBook");
        return t.end()
    }
    function tg(e, r, t) {
        if (r.slice(-4) === ".bin")
            return Ym(e, t);
        return Lm(e, t)
    }
    function ag(e, r, t, a, n, s, i) {
        if (r.slice(-4) === ".bin")
            return cm(e, t, a, n, s, i);
        return op(e, t, a, n, s, i)
    }
    function ng(e, r, t, a, n, s, i) {
        if (r.slice(-4) === ".bin")
            return wm(e, t, a, n, s, i);
        return Cm(e, t, a, n, s, i)
    }
    function sg(e, r, t, a, n, s, i) {
        if (r.slice(-4) === ".bin")
            return Zd(e, t, a, n, s, i);
        return qd(e, t, a, n, s, i)
    }
    function ig(e, r, t, a, n, s, i) {
        if (r.slice(-4) === ".bin")
            return $d(e, t, a, n, s, i);
        return Qd(e, t, a, n, s, i)
    }
    function fg(e, r, t, a) {
        if (r.slice(-4) === ".bin")
            return rd(e, t, a);
        return Uh(e, t, a)
    }
    function cg(e, r, t) {
        return kd(e, t)
    }
    function lg(e, r, t) {
        if (r.slice(-4) === ".bin")
            return _u(e, t);
        return Fu(e, t)
    }
    function og(e, r, t) {
        if (r.slice(-4) === ".bin")
            return Kd(e, t);
        return Vd(e, t)
    }
    function ug(e, r, t) {
        if (r.slice(-4) === ".bin")
            return yd(e, t);
        return Od(e, t)
    }
    function hg(e, r, t) {
        return (r.slice(-4) === ".bin" ? rg : Vm)(e, t)
    }
    function dg(e, r, t, a, n) {
        return (r.slice(-4) === ".bin" ? Em : wp)(e, t, a, n)
    }
    function vg(e, r, t, a, n) {
        return (r.slice(-4) === ".bin" ? Im : Tm)(e, t, a, n)
    }
    function bg(e, r, t) {
        return (r.slice(-4) === ".bin" ? hd : Vh)(e, t)
    }
    function pg(e, r, t) {
        return (r.slice(-4) === ".bin" ? Uu : yu)(e, t)
    }
    function mg(e, r, t) {
        return (r.slice(-4) === ".bin" ? Yd : Xd)(e, t)
    }
    var gg = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
    var Eg = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
    var Sg = function(e) {
        return String.fromCharCode(e)
    };
    function kg(e, r) {
        var t = e.split(/\s+/);
        var a = [];
        if (!r)
            a[0] = t[0];
        if (t.length === 1)
            return a;
        var n = e.match(gg), s, i, f, c;
        if (n)
            for (c = 0; c != n.length; ++c) {
                s = n[c].match(Eg);
                if ((i = s[1].indexOf(":")) === -1)
                    a[s[1]] = s[2].substr(1, s[2].length - 2);
                else {
                    if (s[1].substr(0, 6) === "xmlns:")
                        f = "xmlns" + s[1].substr(6);
                    else
                        f = s[1].substr(i + 1);
                    a[f] = s[2].substr(1, s[2].length - 2)
                }
            }
        return a
    }
    function Bg(e) {
        var r = e.split(/\s+/);
        var t = {};
        if (r.length === 1)
            return t;
        var a = e.match(gg), n, s, i, f;
        if (a)
            for (f = 0; f != a.length; ++f) {
                n = a[f].match(Eg);
                if ((s = n[1].indexOf(":")) === -1)
                    t[n[1]] = n[2].substr(1, n[2].length - 2);
                else {
                    if (n[1].substr(0, 6) === "xmlns:")
                        i = "xmlns" + n[1].substr(6);
                    else
                        i = n[1].substr(s + 1);
                    t[i] = n[2].substr(1, n[2].length - 2)
                }
            }
        return t
    }
    function Cg(e, r) {
        var t = E[e] || te(e);
        if (t === "General")
            return m._general(r);
        return m.format(t, r)
    }
    function Tg(e, r, t, a) {
        var n = a;
        switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
        case "boolean":
            n = ue(a);
            break;
        case "i2":
        case "int":
            n = parseInt(a, 10);
            break;
        case "r4":
        case "float":
            n = parseFloat(a);
            break;
        case "date":
        case "dateTime.tz":
            n = P(a);
            break;
        case "i8":
        case "string":
        case "fixed":
        case "uuid":
        case "bin.base64":
            break;
        default:
            throw new Error("bad custprop:" + t[0])
        }
        e[te(r[3])] = n
    }
    function wg(e, r, t) {
        if (e.t === "z")
            return;
        if (!t || t.cellText !== false)
            try {
                if (e.t === "e") {
                    e.w = e.w || mt[e.v]
                } else if (r === "General") {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v)
                            e.w = m._general_int(e.v);
                        else
                            e.w = m._general_num(e.v)
                    } else
                        e.w = m._general(e.v)
                } else
                    e.w = Cg(r || "General", e.v)
            } catch (e) {
                if (t.WTF)
                    throw e
            }
        try {
            var a = E[r] || r || "General";
            if (t.cellNF)
                e.z = a;
            if (t.cellDates && e.t == "n" && m.is_date(a)) {
                var n = m.parse_date_code(e.v);
                if (n) {
                    e.t = "d";
                    e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u))
                }
            }
        } catch (e) {
            if (t.WTF)
                throw e
        }
    }
    function Ig(e, r, t) {
        if (t.cellStyles) {
            if (r.Interior) {
                var a = r.Interior;
                if (a.Pattern)
                    a.patternType = Oh[a.Pattern] || a.Pattern
            }
        }
        e[r.ID] = r
    }
    function Ag(e, r, t, a, n, s, i, f, c, l) {
        var o = "General"
          , u = a.StyleID
          , h = {};
        l = l || {};
        var d = [];
        var v = 0;
        if (u === undefined && f)
            u = f.StyleID;
        if (u === undefined && i)
            u = i.StyleID;
        while (s[u] !== undefined) {
            if (s[u].nf)
                o = s[u].nf;
            if (s[u].Interior)
                d.push(s[u].Interior);
            if (!s[u].Parent)
                break;
            u = s[u].Parent
        }
        switch (t.Type) {
        case "Boolean":
            a.t = "b";
            a.v = ue(e);
            break;
        case "String":
            a.t = "s";
            a.r = le(te(e));
            a.v = e.indexOf("<") > -1 ? te(r) : a.r;
            break;
        case "DateTime":
            a.v = (P(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3);
            if (a.v !== a.v)
                a.v = te(e);
            else if (a.v < 60)
                a.v = a.v - 1;
            if (!o || o == "General")
                o = "yyyy-mm-dd";
        case "Number":
            if (a.v === undefined)
                a.v = +e;
            if (!a.t)
                a.t = "n";
            break;
        case "Error":
            a.t = "e";
            a.v = gt[e];
            if (l.cellText !== false)
                a.w = e;
            break;
        default:
            a.t = "s";
            a.v = le(r || e);
            break
        }
        wg(a, o, l);
        if (l.cellFormula !== false) {
            if (a.Formula) {
                var b = te(a.Formula);
                if (b.charCodeAt(0) == 61)
                    b = b.substr(1);
                a.f = Jd(b, n);
                delete a.Formula;
                if (a.ArrayRange == "RC")
                    a.F = Jd("RC:RC", n);
                else if (a.ArrayRange) {
                    a.F = Jd(a.ArrayRange, n);
                    c.push([Ur(a.F), a.F])
                }
            } else {
                for (v = 0; v < c.length; ++v)
                    if (n.r >= c[v][0].s.r && n.r <= c[v][0].e.r)
                        if (n.c >= c[v][0].s.c && n.c <= c[v][0].e.c)
                            a.F = c[v][1]
            }
        }
        if (l.cellStyles) {
            d.forEach(function(e) {
                if (!h.patternType && e.patternType)
                    h.patternType = e.patternType
            });
            a.s = h
        }
        a.ixfe = a.StyleID !== undefined ? a.StyleID : "Default"
    }
    function Rg(e) {
        e.t = e.v || "";
        e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        e.v = e.w = e.ixfe = undefined
    }
    function xg(e) {
        if (u && Buffer.isBuffer(e))
            return e.toString("utf8");
        if (typeof e === "string")
            return e;
        throw new Error("Bad input format: expected Buffer or string")
    }
    var Dg = /<(\/?)([^\s?>!\/:]*:|)([^\s?>]*[^\s?>\/])[^>]*>/gm;
    function Og(e, r) {
        g(m);
        var t = i(xg(e));
        if (r && r.type == "binary" && typeof cptable !== "undefined")
            t = cptable.utils.decode(65001, s(t));
        if (t.substr(0, 1e3).indexOf("<html") >= 0)
            return lE.to_workbook(t, r);
        var a;
        var n = [], f;
        if (c != null && r.dense == null)
            r.dense = c;
        var l = {}
          , o = []
          , u = r.dense ? [] : {}
          , h = "";
        var d = {}
          , v = {}
          , b = {};
        var p = kg('<Data ss:Type="String">')
          , S = 0;
        var k = 0
          , B = 0;
        var C = {
            s: {
                r: 2e6,
                c: 2e6
            },
            e: {
                r: 0,
                c: 0
            }
        };
        var T = {}
          , w = {};
        var I = ""
          , A = 0;
        var R = [];
        var x = {}
          , D = {}
          , O = 0
          , F = {};
        var P = []
          , y = {};
        var N = [], M, L = false;
        var U = [];
        var H = []
          , V = {};
        var W = {
            Sheets: []
        }
          , X = {};
        Dg.lastIndex = 0;
        t = t.replace(/<!--([^\u2603]*?)-->/gm, "");
        while (a = Dg.exec(t))
            switch (a[3]) {
            case "Data":
                if (n[n.length - 1][1])
                    break;
                if (a[1] === "/")
                    Ag(t.slice(S, a.index), I, p, n[n.length - 1][0] == "Comment" ? y : v, {
                        c: k,
                        r: B
                    }, T, N[k], b, U, r);
                else {
                    I = "";
                    p = kg(a[0]);
                    S = a.index + a[0].length
                }
                break;
            case "Cell":
                if (a[1] === "/") {
                    if (P.length > 0)
                        v.c = P;
                    if ((!r.sheetRows || r.sheetRows > B) && v.v !== undefined) {
                        if (r.dense) {
                            if (!u[B])
                                u[B] = [];
                            u[B][k] = v
                        } else
                            u[xr(k) + wr(B)] = v
                    }
                    if (v.HRef) {
                        v.l = {
                            Target: v.HRef,
                            Tooltip: v.HRefScreenTip
                        };
                        delete v.HRef;
                        delete v.HRefScreenTip
                    }
                    if (v.MergeAcross || v.MergeDown) {
                        var G = k + (parseInt(v.MergeAcross, 10) | 0);
                        var j = B + (parseInt(v.MergeDown, 10) | 0);
                        R.push({
                            s: {
                                c: k,
                                r: B
                            },
                            e: {
                                c: G,
                                r: j
                            }
                        })
                    }
                    if (!r.sheetStubs) {
                        if (v.MergeAcross)
                            k = G + 1;
                        else
                            ++k
                    } else if (v.MergeAcross || v.MergeDown) {
                        for (var z = k; z <= G; ++z) {
                            for (var K = B; K <= j; ++K) {
                                if (z > k || K > B) {
                                    if (r.dense) {
                                        if (!u[K])
                                            u[K] = [];
                                        u[K][z] = {
                                            t: "z"
                                        }
                                    } else
                                        u[xr(z) + wr(K)] = {
                                            t: "z"
                                        }
                                }
                            }
                        }
                        k = G + 1
                    } else
                        ++k
                } else {
                    v = Bg(a[0]);
                    if (v.Index)
                        k = +v.Index - 1;
                    if (k < C.s.c)
                        C.s.c = k;
                    if (k > C.e.c)
                        C.e.c = k;
                    if (a[0].slice(-2) === "/>")
                        ++k;
                    P = []
                }
                break;
            case "Row":
                if (a[1] === "/" || a[0].slice(-2) === "/>") {
                    if (B < C.s.r)
                        C.s.r = B;
                    if (B > C.e.r)
                        C.e.r = B;
                    if (a[0].slice(-2) === "/>") {
                        b = kg(a[0]);
                        if (b.Index)
                            B = +b.Index - 1
                    }
                    k = 0;
                    ++B
                } else {
                    b = kg(a[0]);
                    if (b.Index)
                        B = +b.Index - 1;
                    V = {};
                    if (b.AutoFitHeight == "0") {
                        V.hpx = parseInt(b.Height, 10);
                        V.hpt = xh(V.hpx);
                        H[B] = V
                    }
                    if (b.Hidden == "1") {
                        V.hidden = true;
                        H[B] = V
                    }
                }
                break;
            case "Worksheet":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"));
                    o.push(h);
                    if (C.s.r <= C.e.r && C.s.c <= C.e.c)
                        u["!ref"] = Lr(C);
                    if (R.length)
                        u["!merges"] = R;
                    if (N.length > 0)
                        u["!cols"] = N;
                    if (H.length > 0)
                        u["!rows"] = H;
                    l[h] = u
                } else {
                    C = {
                        s: {
                            r: 2e6,
                            c: 2e6
                        },
                        e: {
                            r: 0,
                            c: 0
                        }
                    };
                    B = k = 0;
                    n.push([a[3], false]);
                    f = kg(a[0]);
                    h = te(f.Name);
                    u = r.dense ? [] : {};
                    R = [];
                    U = [];
                    H = [];
                    X = {
                        name: h,
                        Hidden: 0
                    };
                    W.Sheets.push(X)
                }
                break;
            case "Table":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"))
                } else if (a[0].slice(-2) == "/>")
                    break;
                else {
                    d = kg(a[0]);
                    n.push([a[3], false]);
                    N = [];
                    L = false
                }
                break;
            case "Style":
                if (a[1] === "/")
                    Ig(T, w, r);
                else
                    w = kg(a[0]);
                break;
            case "NumberFormat":
                w.nf = te(kg(a[0]).Format || "General");
                if (E[w.nf])
                    w.nf = E[w.nf];
                for (var Y = 0; Y != 392; ++Y)
                    if (m._table[Y] == w.nf)
                        break;
                if (Y == 392)
                    for (Y = 57; Y != 392; ++Y)
                        if (m._table[Y] == null) {
                            m.load(w.nf, Y);
                            break
                        }
                break;
            case "Column":
                if (n[n.length - 1][0] !== "Table")
                    break;
                M = kg(a[0]);
                if (M.Hidden) {
                    M.hidden = true;
                    delete M.Hidden
                }
                if (M.Width)
                    M.wpx = parseInt(M.Width, 10);
                if (!L && M.wpx > 10) {
                    L = true;
                    mh = vh;
                    for (var $ = 0; $ < N.length; ++$)
                        if (N[$])
                            Ih(N[$])
                }
                if (L)
                    Ih(M);
                N[M.Index - 1 || N.length] = M;
                for (var Q = 0; Q < +M.Span; ++Q)
                    N[N.length] = _(M);
                break;
            case "NamedRange":
                if (!W.Names)
                    W.Names = [];
                var Z = q(a[0]);
                var J = {
                    Name: Z.Name,
                    Ref: Jd(Z.RefersTo.substr(1))
                };
                if (W.Sheets.length > 0)
                    J.Sheet = W.Sheets.length - 1;
                W.Names.push(J);
                break;
            case "NamedCell":
                break;
            case "B":
                break;
            case "I":
                break;
            case "U":
                break;
            case "S":
                break;
            case "Sub":
                break;
            case "Sup":
                break;
            case "Span":
                break;
            case "Border":
                break;
            case "Alignment":
                break;
            case "Borders":
                break;
            case "Font":
                if (a[0].slice(-2) === "/>")
                    break;
                else if (a[1] === "/")
                    I += t.slice(A, a.index);
                else
                    A = a.index + a[0].length;
                break;
            case "Interior":
                if (!r.cellStyles)
                    break;
                w.Interior = kg(a[0]);
                break;
            case "Protection":
                break;
            case "Author":
            case "Title":
            case "Description":
            case "Created":
            case "Keywords":
            case "Subject":
            case "Category":
            case "Company":
            case "LastAuthor":
            case "LastSaved":
            case "LastPrinted":
            case "Version":
            case "Revision":
            case "TotalTime":
            case "HyperlinkBase":
            case "Manager":
            case "ContentStatus":
            case "Identifier":
            case "Language":
                if (a[0].slice(-2) === "/>")
                    break;
                else if (a[1] === "/")
                    Ta(x, a[3], t.slice(O, a.index));
                else
                    O = a.index + a[0].length;
                break;
            case "Paragraphs":
                break;
            case "Styles":
            case "Workbook":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"))
                } else
                    n.push([a[3], false]);
                break;
            case "Comment":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"));
                    Rg(y);
                    P.push(y)
                } else {
                    n.push([a[3], false]);
                    f = kg(a[0]);
                    y = {
                        a: f.Author
                    }
                }
                break;
            case "AutoFilter":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"))
                } else if (a[0].charAt(a[0].length - 2) !== "/") {
                    var ee = kg(a[0]);
                    u["!autofilter"] = {
                        ref: Jd(ee.Range).replace(/\$/g, "")
                    };
                    n.push([a[3], true])
                }
                break;
            case "Name":
                break;
            case "ComponentOptions":
            case "DocumentProperties":
            case "CustomDocumentProperties":
            case "OfficeDocumentSettings":
            case "PivotTable":
            case "PivotCache":
            case "Names":
            case "MapInfo":
            case "PageBreaks":
            case "QueryTable":
            case "DataValidation":
            case "Sorting":
            case "Schema":
            case "data":
            case "ConditionalFormatting":
            case "SmartTagType":
            case "SmartTags":
            case "ExcelWorkbook":
            case "WorkbookOptions":
            case "WorksheetOptions":
                if (a[1] === "/") {
                    if ((f = n.pop())[0] !== a[3])
                        throw new Error("Bad state: " + f.join("|"))
                } else if (a[0].charAt(a[0].length - 2) !== "/")
                    n.push([a[3], true]);
                break;
            default:
                if (n.length == 0 && a[3] == "document")
                    return BE(t, r);
                if (n.length == 0 && a[3] == "UOF")
                    return BE(t, r);
                var re = true;
                switch (n[n.length - 1][0]) {
                case "OfficeDocumentSettings":
                    switch (a[3]) {
                    case "AllowPNG":
                        break;
                    case "RemovePersonalInformation":
                        break;
                    case "DownloadComponents":
                        break;
                    case "LocationOfComponents":
                        break;
                    case "Colors":
                        break;
                    case "Color":
                        break;
                    case "Index":
                        break;
                    case "RGB":
                        break;
                    case "PixelsPerInch":
                        break;
                    case "TargetScreenSize":
                        break;
                    case "ReadOnlyRecommended":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "ComponentOptions":
                    switch (a[3]) {
                    case "Toolbar":
                        break;
                    case "HideOfficeLogo":
                        break;
                    case "SpreadsheetAutoFit":
                        break;
                    case "Label":
                        break;
                    case "Caption":
                        break;
                    case "MaxHeight":
                        break;
                    case "MaxWidth":
                        break;
                    case "NextSheetNumber":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "ExcelWorkbook":
                    switch (a[3]) {
                    case "WindowHeight":
                        break;
                    case "WindowWidth":
                        break;
                    case "WindowTopX":
                        break;
                    case "WindowTopY":
                        break;
                    case "TabRatio":
                        break;
                    case "ProtectStructure":
                        break;
                    case "ProtectWindows":
                        break;
                    case "ActiveSheet":
                        break;
                    case "DisplayInkNotes":
                        break;
                    case "FirstVisibleSheet":
                        break;
                    case "SupBook":
                        break;
                    case "SheetName":
                        break;
                    case "SheetIndex":
                        break;
                    case "SheetIndexFirst":
                        break;
                    case "SheetIndexLast":
                        break;
                    case "Dll":
                        break;
                    case "AcceptLabelsInFormulas":
                        break;
                    case "DoNotSaveLinkValues":
                        break;
                    case "Date1904":
                        break;
                    case "Iteration":
                        break;
                    case "MaxIterations":
                        break;
                    case "MaxChange":
                        break;
                    case "Path":
                        break;
                    case "Xct":
                        break;
                    case "Count":
                        break;
                    case "SelectedSheets":
                        break;
                    case "Calculation":
                        break;
                    case "Uncalced":
                        break;
                    case "StartupPrompt":
                        break;
                    case "Crn":
                        break;
                    case "ExternName":
                        break;
                    case "Formula":
                        break;
                    case "ColFirst":
                        break;
                    case "ColLast":
                        break;
                    case "WantAdvise":
                        break;
                    case "Boolean":
                        break;
                    case "Error":
                        break;
                    case "Text":
                        break;
                    case "OLE":
                        break;
                    case "NoAutoRecover":
                        break;
                    case "PublishObjects":
                        break;
                    case "DoNotCalculateBeforeSave":
                        break;
                    case "Number":
                        break;
                    case "RefModeR1C1":
                        break;
                    case "EmbedSaveSmartTags":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "WorkbookOptions":
                    switch (a[3]) {
                    case "OWCVersion":
                        break;
                    case "Height":
                        break;
                    case "Width":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "WorksheetOptions":
                    switch (a[3]) {
                    case "Visible":
                        if (a[0].slice(-2) === "/>") {} else if (a[1] === "/")
                            switch (t.slice(O, a.index)) {
                            case "SheetHidden":
                                X.Hidden = 1;
                                break;
                            case "SheetVeryHidden":
                                X.Hidden = 2;
                                break
                            }
                        else
                            O = a.index + a[0].length;
                        break;
                    case "Header":
                        if (!u["!margins"])
                            Jb(u["!margins"] = {}, "xlml");
                        u["!margins"].header = q(a[0]).Margin;
                        break;
                    case "Footer":
                        if (!u["!margins"])
                            Jb(u["!margins"] = {}, "xlml");
                        u["!margins"].footer = q(a[0]).Margin;
                        break;
                    case "PageMargins":
                        var ae = q(a[0]);
                        if (!u["!margins"])
                            Jb(u["!margins"] = {}, "xlml");
                        if (ae.Top)
                            u["!margins"].top = ae.Top;
                        if (ae.Left)
                            u["!margins"].left = ae.Left;
                        if (ae.Right)
                            u["!margins"].right = ae.Right;
                        if (ae.Bottom)
                            u["!margins"].bottom = ae.Bottom;
                        break;
                    case "Unsynced":
                        break;
                    case "Print":
                        break;
                    case "Panes":
                        break;
                    case "Scale":
                        break;
                    case "Pane":
                        break;
                    case "Number":
                        break;
                    case "Layout":
                        break;
                    case "PageSetup":
                        break;
                    case "Selected":
                        break;
                    case "ProtectObjects":
                        break;
                    case "EnableSelection":
                        break;
                    case "ProtectScenarios":
                        break;
                    case "ValidPrinterInfo":
                        break;
                    case "HorizontalResolution":
                        break;
                    case "VerticalResolution":
                        break;
                    case "NumberofCopies":
                        break;
                    case "ActiveRow":
                        break;
                    case "ActiveCol":
                        break;
                    case "ActivePane":
                        break;
                    case "TopRowVisible":
                        break;
                    case "TopRowBottomPane":
                        break;
                    case "LeftColumnVisible":
                        break;
                    case "LeftColumnRightPane":
                        break;
                    case "FitToPage":
                        break;
                    case "RangeSelection":
                        break;
                    case "PaperSizeIndex":
                        break;
                    case "PageLayoutZoom":
                        break;
                    case "PageBreakZoom":
                        break;
                    case "FilterOn":
                        break;
                    case "DoNotDisplayGridlines":
                        break;
                    case "SplitHorizontal":
                        break;
                    case "SplitVertical":
                        break;
                    case "FreezePanes":
                        break;
                    case "FrozenNoSplit":
                        break;
                    case "FitWidth":
                        break;
                    case "FitHeight":
                        break;
                    case "CommentsLayout":
                        break;
                    case "Zoom":
                        break;
                    case "LeftToRight":
                        break;
                    case "Gridlines":
                        break;
                    case "AllowSort":
                        break;
                    case "AllowFilter":
                        break;
                    case "AllowInsertRows":
                        break;
                    case "AllowDeleteRows":
                        break;
                    case "AllowInsertCols":
                        break;
                    case "AllowDeleteCols":
                        break;
                    case "AllowInsertHyperlinks":
                        break;
                    case "AllowFormatCells":
                        break;
                    case "AllowSizeCols":
                        break;
                    case "AllowSizeRows":
                        break;
                    case "NoSummaryRowsBelowDetail":
                        break;
                    case "TabColorIndex":
                        break;
                    case "DoNotDisplayHeadings":
                        break;
                    case "ShowPageLayoutZoom":
                        break;
                    case "NoSummaryColumnsRightDetail":
                        break;
                    case "BlackAndWhite":
                        break;
                    case "DoNotDisplayZeros":
                        break;
                    case "DisplayPageBreak":
                        break;
                    case "RowColHeadings":
                        break;
                    case "DoNotDisplayOutline":
                        break;
                    case "NoOrientation":
                        break;
                    case "AllowUsePivotTables":
                        break;
                    case "ZeroHeight":
                        break;
                    case "ViewableRange":
                        break;
                    case "Selection":
                        break;
                    case "ProtectContents":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "PivotTable":
                case "PivotCache":
                    switch (a[3]) {
                    case "ImmediateItemsOnDrop":
                        break;
                    case "ShowPageMultipleItemLabel":
                        break;
                    case "CompactRowIndent":
                        break;
                    case "Location":
                        break;
                    case "PivotField":
                        break;
                    case "Orientation":
                        break;
                    case "LayoutForm":
                        break;
                    case "LayoutSubtotalLocation":
                        break;
                    case "LayoutCompactRow":
                        break;
                    case "Position":
                        break;
                    case "PivotItem":
                        break;
                    case "DataType":
                        break;
                    case "DataField":
                        break;
                    case "SourceName":
                        break;
                    case "ParentField":
                        break;
                    case "PTLineItems":
                        break;
                    case "PTLineItem":
                        break;
                    case "CountOfSameItems":
                        break;
                    case "Item":
                        break;
                    case "ItemType":
                        break;
                    case "PTSource":
                        break;
                    case "CacheIndex":
                        break;
                    case "ConsolidationReference":
                        break;
                    case "FileName":
                        break;
                    case "Reference":
                        break;
                    case "NoColumnGrand":
                        break;
                    case "NoRowGrand":
                        break;
                    case "BlankLineAfterItems":
                        break;
                    case "Hidden":
                        break;
                    case "Subtotal":
                        break;
                    case "BaseField":
                        break;
                    case "MapChildItems":
                        break;
                    case "Function":
                        break;
                    case "RefreshOnFileOpen":
                        break;
                    case "PrintSetTitles":
                        break;
                    case "MergeLabels":
                        break;
                    case "DefaultVersion":
                        break;
                    case "RefreshName":
                        break;
                    case "RefreshDate":
                        break;
                    case "RefreshDateCopy":
                        break;
                    case "VersionLastRefresh":
                        break;
                    case "VersionLastUpdate":
                        break;
                    case "VersionUpdateableMin":
                        break;
                    case "VersionRefreshableMin":
                        break;
                    case "Calculation":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "PageBreaks":
                    switch (a[3]) {
                    case "ColBreaks":
                        break;
                    case "ColBreak":
                        break;
                    case "RowBreaks":
                        break;
                    case "RowBreak":
                        break;
                    case "ColStart":
                        break;
                    case "ColEnd":
                        break;
                    case "RowEnd":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "AutoFilter":
                    switch (a[3]) {
                    case "AutoFilterColumn":
                        break;
                    case "AutoFilterCondition":
                        break;
                    case "AutoFilterAnd":
                        break;
                    case "AutoFilterOr":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "QueryTable":
                    switch (a[3]) {
                    case "Id":
                        break;
                    case "AutoFormatFont":
                        break;
                    case "AutoFormatPattern":
                        break;
                    case "QuerySource":
                        break;
                    case "QueryType":
                        break;
                    case "EnableRedirections":
                        break;
                    case "RefreshedInXl9":
                        break;
                    case "URLString":
                        break;
                    case "HTMLTables":
                        break;
                    case "Connection":
                        break;
                    case "CommandText":
                        break;
                    case "RefreshInfo":
                        break;
                    case "NoTitles":
                        break;
                    case "NextId":
                        break;
                    case "ColumnInfo":
                        break;
                    case "OverwriteCells":
                        break;
                    case "DoNotPromptForFile":
                        break;
                    case "TextWizardSettings":
                        break;
                    case "Source":
                        break;
                    case "Number":
                        break;
                    case "Decimal":
                        break;
                    case "ThousandSeparator":
                        break;
                    case "TrailingMinusNumbers":
                        break;
                    case "FormatSettings":
                        break;
                    case "FieldType":
                        break;
                    case "Delimiters":
                        break;
                    case "Tab":
                        break;
                    case "Comma":
                        break;
                    case "AutoFormatName":
                        break;
                    case "VersionLastEdit":
                        break;
                    case "VersionLastRefresh":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "Sorting":
                case "ConditionalFormatting":
                case "DataValidation":
                    switch (a[3]) {
                    case "Range":
                        break;
                    case "Type":
                        break;
                    case "Min":
                        break;
                    case "Max":
                        break;
                    case "Sort":
                        break;
                    case "Descending":
                        break;
                    case "Order":
                        break;
                    case "CaseSensitive":
                        break;
                    case "Value":
                        break;
                    case "ErrorStyle":
                        break;
                    case "ErrorMessage":
                        break;
                    case "ErrorTitle":
                        break;
                    case "CellRangeList":
                        break;
                    case "InputMessage":
                        break;
                    case "InputTitle":
                        break;
                    case "ComboHide":
                        break;
                    case "InputHide":
                        break;
                    case "Condition":
                        break;
                    case "Qualifier":
                        break;
                    case "UseBlank":
                        break;
                    case "Value1":
                        break;
                    case "Value2":
                        break;
                    case "Format":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "MapInfo":
                case "Schema":
                case "data":
                    switch (a[3]) {
                    case "Map":
                        break;
                    case "Entry":
                        break;
                    case "Range":
                        break;
                    case "XPath":
                        break;
                    case "Field":
                        break;
                    case "XSDType":
                        break;
                    case "FilterOn":
                        break;
                    case "Aggregate":
                        break;
                    case "ElementType":
                        break;
                    case "AttributeType":
                        break;
                    case "schema":
                    case "element":
                    case "complexType":
                    case "datatype":
                    case "all":
                    case "attribute":
                    case "extends":
                        break;
                    case "row":
                        break;
                    default:
                        re = false
                    }
                    break;
                case "SmartTags":
                    break;
                default:
                    re = false;
                    break
                }
                if (re)
                    break;
                if (!n[n.length - 1][1])
                    throw "Unrecognized tag: " + a[3] + "|" + n.join("|");
                if (n[n.length - 1][0] === "CustomDocumentProperties") {
                    if (a[0].slice(-2) === "/>")
                        break;
                    else if (a[1] === "/")
                        Tg(D, a, F, t.slice(O, a.index));
                    else {
                        F = a;
                        O = a.index + a[0].length
                    }
                    break
                }
                if (r.WTF)
                    throw "Unrecognized tag: " + a[3] + "|" + n.join("|")
            }
        var ne = {};
        if (!r.bookSheets && !r.bookProps)
            ne.Sheets = l;
        ne.SheetNames = o;
        ne.Workbook = W;
        ne.SSF = m.get_table();
        ne.Props = x;
        ne.Custprops = D;
        return ne
    }
    function Fg(e, r) {
        wE(r = r || {});
        switch (r.type || "base64") {
        case "base64":
            return Og(o.decode(e), r);
        case "binary":
        case "buffer":
        case "file":
            return Og(e, r);
        case "array":
            return Og(e.map(Sg).join(""), r)
        }
    }
    function Pg(e, r) {
        var t = [];
        if (e.Props)
            t.push(wa(e.Props, r));
        if (e.Custprops)
            t.push(Ia(e.Props, e.Custprops, r));
        return t.join("")
    }
    function yg(e, r) {
        return ""
    }
    function Ng(e, r) {
        return ""
    }
    function _g(e, r, t, a) {
        if (!e)
            return "";
        var n = [];
        if (e["!margins"]) {
            n.push("<PageSetup>");
            if (e["!margins"].header)
                n.push(Te("Header", null, {
                    "x:Margin": e["!margins"].header
                }));
            if (e["!margins"].footer)
                n.push(Te("Footer", null, {
                    "x:Margin": e["!margins"].footer
                }));
            n.push(Te("PageMargins", null, {
                "x:Bottom": e["!margins"].bottom || "0.75",
                "x:Left": e["!margins"].left || "0.7",
                "x:Right": e["!margins"].right || "0.7",
                "x:Top": e["!margins"].top || "0.75"
            }));
            n.push("</PageSetup>")
        }
        if (a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) {
            if (a.Workbook.Sheets[t].Hidden)
                n.push(Te("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
            else {
                for (var s = 0; s < t; ++s)
                    if (a.Workbook.Sheets[s] && !a.Workbook.Sheets[s].Hidden)
                        break;
                if (s == t)
                    n.push("<Selected/>")
            }
        }
        if (e["!protect"]) {
            n.push(Be("ProtectContents", "True"));
            if (e["!protect"].objects)
                n.push(Be("ProtectObjects", "True"));
            if (e["!protect"].scenarios)
                n.push(Be("ProtectScenarios", "True"));
            if (e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells)
                n.push(Be("EnableSelection", "NoSelection"));
            else if (e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells)
                n.push(Be("EnableSelection", "UnlockedCells"));
            [["formatColumns", "AllowFormatCells"], ["formatRows", "AllowSizeCols"], ["formatCells", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function(r) {
                if (e["!protect"][r[0]])
                    n.push("<" + r[1] + "/>")
            })
        }
        if (n.length == 0)
            return "";
        return Te("WorksheetOptions", n.join(""), {
            xmlns: xe.x
        })
    }
    function Mg(e) {
        return e.map(function(e) {
            var r = oe(e.t || "");
            var t = Te("ss:Data", r, {
                xmlns: "http://www.w3.org/TR/REC-html40"
            });
            return Te("Comment", t, {
                "ss:Author": e.a
            })
        }).join("")
    }
    function Lg(e, r, t, a, n, s, i) {
        if (!e || e.v == undefined && e.f == undefined)
            return "<Cell></Cell>";
        var f = {};
        if (e.f)
            f["ss:Formula"] = "=" + se(rv(e.f, i));
        if (e.F && e.F.substr(0, r.length) == r) {
            var c = Pr(e.F.substr(r.length + 1));
            f["ss:ArrayRange"] = "RC:R" + (c.r == i.r ? "" : "[" + (c.r - i.r) + "]") + "C" + (c.c == i.c ? "" : "[" + (c.c - i.c) + "]")
        }
        if (e.l && e.l.Target) {
            f["ss:HRef"] = se(e.l.Target);
            if (e.l.Tooltip)
                f["x:HRefScreenTip"] = se(e.l.Tooltip)
        }
        if (t["!merges"]) {
            var l = t["!merges"];
            for (var o = 0; o != l.length; ++o) {
                if (l[o].s.c != i.c || l[o].s.r != i.r)
                    continue;
                if (l[o].e.c > l[o].s.c)
                    f["ss:MergeAcross"] = l[o].e.c - l[o].s.c;
                if (l[o].e.r > l[o].s.r)
                    f["ss:MergeDown"] = l[o].e.r - l[o].s.r
            }
        }
        var u = ""
          , h = "";
        switch (e.t) {
        case "z":
            return "";
        case "n":
            u = "Number";
            h = String(e.v);
            break;
        case "b":
            u = "Boolean";
            h = e.v ? "1" : "0";
            break;
        case "e":
            u = "Error";
            h = mt[e.v];
            break;
        case "d":
            u = "DateTime";
            h = new Date(e.v).toISOString();
            break;
        case "s":
            u = "String";
            h = se(e.v || "");
            break
        }
        var d = e.v != null ? h : "";
        if (a && a.type == "binary" && typeof cptable !== "undefined" && e.t == "s") {
            d = cptable.utils.encode(65001, d);
            var v = "";
            for (var b = 0; b < d.length; ++b)
                v += String.fromCharCode(d[b]);
            d = v
        }
        var p = '<Data ss:Type="' + u + '">' + d + "</Data>";
        if ((e.c || []).length > 0)
            p += Mg(e.c);
        return Te("Cell", p, f)
    }
    function Ug(e, r) {
        var t = '<Row ss:Index="' + (e + 1) + '"';
        if (r) {
            if (r.hpt && !r.hpx)
                r.hpx = Dh(r.hpt);
            if (r.hpx)
                t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"';
            if (r.hidden)
                t += ' ss:Hidden="1"'
        }
        return t + ">"
    }
    function Hg(e, r, t, a) {
        if (!e["!ref"])
            return "";
        var n = Ur(e["!ref"]);
        var s = e["!merges"] || []
          , i = 0;
        var f = [];
        if (e["!cols"])
            e["!cols"].forEach(function(e, r) {
                Ih(e);
                var t = !!e.width;
                var a = qb(r, e);
                var n = {
                    "ss:Index": r + 1
                };
                if (t)
                    n["ss:Width"] = gh(a.width);
                if (e.hidden)
                    n["ss:Hidden"] = "1";
                f.push(Te("Column", null, n))
            });
        var c = Array.isArray(e);
        for (var l = n.s.r; l <= n.e.r; ++l) {
            var o = [Ug(l, (e["!rows"] || [])[l])];
            for (var u = n.s.c; u <= n.e.c; ++u) {
                var h = false;
                for (i = 0; i != s.length; ++i) {
                    if (s[i].s.c > u)
                        continue;
                    if (s[i].s.r > l)
                        continue;
                    if (s[i].e.c < u)
                        continue;
                    if (s[i].e.r < l)
                        continue;
                    if (s[i].s.c != u || s[i].s.r != l)
                        h = true;
                    break
                }
                if (h)
                    continue;
                var d = {
                    r: l,
                    c: u
                };
                var v = yr(d)
                  , b = c ? (e[l] || [])[u] : e[v];
                o.push(Lg(b, v, e, r, t, a, d))
            }
            o.push("</Row>");
            if (o.length > 2)
                f.push(o.join(""))
        }
        return f.join("")
    }
    function Vg(e, r, t) {
        var a = [];
        var n = t.SheetNames[e];
        var s = t.Sheets[n];
        var i = s ? Hg(s, r, e, t) : "";
        if (i.length > 0)
            a.push("<Table>" + i + "</Table>");
        a.push(_g(s, r, e, t));
        return a.join("")
    }
    function Wg(e, r) {
        var t = [];
        t.push(Pg(e, r));
        t.push(yg(e, r));
        t.push(Ng(e, r));
        for (var a = 0; a < e.SheetNames.length; ++a)
            t.push(Te("Worksheet", Vg(a, r, e), {
                "ss:Name": se(e.SheetNames[a])
            }));
        return Ae + Te("Workbook", t.join(""), {
            xmlns: xe.ss,
            "xmlns:o": xe.o,
            "xmlns:x": xe.x,
            "xmlns:ss": xe.ss,
            "xmlns:dt": xe.dt,
            "xmlns:html": xe.html
        })
    }
    function Xg(e) {
        var r = {};
        var t = e.content;
        var a = 28, n;
        n = He(t, a);
        a += 4 + er(t, a);
        r.UserType = n;
        n = er(t, a);
        a += 4;
        switch (n) {
        case 0:
            break;
        case 4294967295:
        case 4294967294:
            a += 4;
            break;
        default:
            if (n > 400)
                throw new Error("Unsupported Clipboard: " + n.toString(16));
            a += n
        }
        n = He(t, a);
        a += n.length === 0 ? 0 : 5 + n.length;
        r.Reserved1 = n;
        if ((n = er(t, a)) !== 1907550708)
            return r;
        throw new Error("Unsupported Unicode Extension")
    }
    function Gg(e, r, t, a) {
        var n = t;
        var s = [];
        var i = r.slice(r.l, r.l + n);
        if (a && a.enc && a.enc.insitu_decrypt)
            switch (e.n) {
            case "BOF":
            case "FilePass":
            case "FileLock":
            case "InterfaceHdr":
            case "RRDInfo":
            case "RRDHead":
            case "UsrExcl":
                break;
            default:
                if (i.length === 0)
                    break;
                a.enc.insitu_decrypt(i)
            }
        s.push(i);
        r.l += n;
        var f = qg[qe(r, r.l)];
        while (f != null && f.n === "Continue") {
            n = qe(r, r.l + 2);
            s.push(r.slice(r.l + 4, r.l + 4 + n));
            r.l += 4 + n;
            f = qg[qe(r, r.l)]
        }
        var c = v(s);
        or(c, 0);
        var l = 0;
        c.lens = [];
        for (var o = 0; o < s.length; ++o) {
            c.lens.push(l);
            l += s[o].length
        }
        return e.f(c, c.length, a)
    }
    function jg(e, r, t) {
        if (e.t === "z")
            return;
        if (!e.XF)
            return;
        try {
            var a = e.z || e.XF.ifmt || 0;
            if (r.cellNF)
                e.z = m._table[a]
        } catch (e) {
            if (r.WTF)
                throw e
        }
        if (!r || r.cellText !== false)
            try {
                if (e.t === "e") {
                    e.w = e.w || mt[e.v]
                } else if (a === 0) {
                    if (e.t === "n") {
                        if ((e.v | 0) === e.v)
                            e.w = m._general_int(e.v);
                        else
                            e.w = m._general_num(e.v)
                    } else
                        e.w = m._general(e.v)
                } else
                    e.w = m.format(a, e.v, {
                        date1904: !!t
                    });
                if (r.cellDates && a && e.t == "n" && m.is_date(m._table[a])) {
                    var n = m.parse_date_code(e.v);
                    if (n) {
                        e.t = "d";
                        e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u))
                    }
                }
            } catch (e) {
                if (r.WTF)
                    throw e
            }
    }
    function zg(e, r, t) {
        return {
            v: e,
            ixfe: r,
            t: t
        }
    }
    function Kg(e, r) {
        var t = {
            opts: {}
        };
        var a = {};
        if (c != null && r.dense == null)
            r.dense = c;
        var s = r.dense ? [] : {};
        var i = {};
        var f = false;
        var l = {};
        var o = null;
        var u = [];
        var h = "";
        var d = {};
        var v, b = "", p, g, E, S, k;
        var B = {};
        var C = [];
        var T;
        var w;
        var I = true;
        var A = [];
        var R = [];
        var x = {
            Sheets: []
        }
          , D = {};
        var O = function e(r) {
            if (r < 8)
                return Wt[r];
            if (r < 64)
                return R[r - 8] || Wt[r];
            return Wt[r]
        };
        var F = function e(r, t, a) {
            var n = t.XF.data;
            if (!n || !n.patternType || !a || !a.cellStyles)
                return;
            t.s = {};
            t.s.patternType = n.patternType;
            var s;
            if (s = oh(O(n.icvFore))) {
                t.s.fgColor = {
                    rgb: s
                }
            }
            if (s = oh(O(n.icvBack))) {
                t.s.bgColor = {
                    rgb: s
                }
            }
        };
        var P = function e(r, t, a) {
            if (G > 1)
                return;
            if (!I)
                return;
            if (a.cellStyles && t.XF && t.XF.data)
                F(r, t, a);
            v = r;
            b = yr(r);
            if (l.s) {
                if (r.r < l.s.r)
                    l.s.r = r.r;
                if (r.c < l.s.c)
                    l.s.c = r.c
            }
            if (l.e) {
                if (r.r + 1 > l.e.r)
                    l.e.r = r.r + 1;
                if (r.c + 1 > l.e.c)
                    l.e.c = r.c + 1
            }
            if (a.cellFormula && t.f) {
                for (var n = 0; n < C.length; ++n) {
                    if (C[n][0].s.c > r.c)
                        continue;
                    if (C[n][0].s.r > r.r)
                        continue;
                    if (C[n][0].e.c < r.c)
                        continue;
                    if (C[n][0].e.r < r.r)
                        continue;
                    t.F = Lr(C[n][0]);
                    if (C[n][0].s.c != r.c)
                        delete t.f;
                    if (C[n][0].s.r != r.r)
                        delete t.f;
                    if (t.f)
                        t.f = "" + Nb(C[n][1], l, r, W, y);
                    break
                }
            }
            if (a.sheetRows && v.r >= a.sheetRows)
                I = false;
            else {
                if (a.dense) {
                    if (!s[r.r])
                        s[r.r] = [];
                    s[r.r][r.c] = t
                } else
                    s[b] = t
            }
        };
        var y = {
            enc: false,
            sbcch: 0,
            snames: [],
            sharedf: B,
            arrayf: C,
            rrtabid: [],
            lastuser: "",
            biff: 8,
            codepage: 0,
            winlocked: 0,
            cellStyles: !!r && !!r.cellStyles,
            WTF: !!r && !!r.wtf
        };
        if (r.password)
            y.password = r.password;
        var N = [];
        var _ = [];
        var M = []
          , L = [];
        var U = 0
          , H = 0;
        var V = false;
        var W = [];
        W.SheetNames = y.snames;
        W.sharedf = y.sharedf;
        W.arrayf = y.arrayf;
        W.names = [];
        W.XTI = [];
        var X = "";
        var G = 0;
        var j = 0;
        var z = [];
        var K = [];
        var Y;
        y.codepage = 1200;
        n(1200);
        while (e.l < e.length - 1) {
            var $ = e.l;
            var Q = e.read_shift(2);
            if (Q === 0 && X === "EOF")
                break;
            var Z = e.l === e.length ? 0 : e.read_shift(2), q;
            var J = qg[Q];
            if (J && J.f) {
                if (r.bookSheets) {
                    if (X === "BoundSheet8" && J.n !== "BoundSheet8")
                        break
                }
                X = J.n;
                if (J.r === 2 || J.r == 12) {
                    var ee = e.read_shift(2);
                    Z -= 2;
                    if (!y.enc && ee !== Q)
                        throw "rt mismatch";
                    if (J.r == 12) {
                        e.l += 10;
                        Z -= 10
                    }
                }
                var re;
                if (J.n === "EOF")
                    re = J.f(e, Z, y);
                else
                    re = Gg(J, e, Z, y);
                var te = J.n;
                switch (te) {
                case "Date1904":
                    t.opts.Date1904 = re;
                    break;
                case "WriteProtect":
                    t.opts.WriteProtect = true;
                    break;
                case "FilePass":
                    if (!y.enc)
                        e.l = 0;
                    y.enc = re;
                    if (y.WTF)
                        console.error(re);
                    if (!r.password)
                        throw new Error("File is password-protected");
                    if (re.Type !== 0)
                        throw new Error("Encryption scheme unsupported");
                    if (!re.valid)
                        throw new Error("Password is incorrect");
                    break;
                case "WriteAccess":
                    y.lastuser = re;
                    break;
                case "FileSharing":
                    break;
                case "CodePage":
                    if (re === 21010)
                        re = 1200;
                    else if (re === 32769)
                        re = 1252;
                    y.codepage = re;
                    n(re);
                    break;
                case "RRTabId":
                    y.rrtabid = re;
                    break;
                case "WinProtect":
                    y.winlocked = re;
                    break;
                case "Template":
                    break;
                case "RefreshAll":
                    t.opts.RefreshAll = re;
                    break;
                case "BookBool":
                    break;
                case "UsesELFs":
                    break;
                case "MTRSettings":
                    break;
                case "CalcCount":
                    t.opts.CalcCount = re;
                    break;
                case "CalcDelta":
                    t.opts.CalcDelta = re;
                    break;
                case "CalcIter":
                    t.opts.CalcIter = re;
                    break;
                case "CalcMode":
                    t.opts.CalcMode = re;
                    break;
                case "CalcPrecision":
                    t.opts.CalcPrecision = re;
                    break;
                case "CalcSaveRecalc":
                    t.opts.CalcSaveRecalc = re;
                    break;
                case "CalcRefMode":
                    y.CalcRefMode = re;
                    break;
                case "Uncalced":
                    break;
                case "ForceFullCalculation":
                    t.opts.FullCalc = re;
                    break;
                case "WsBool":
                    break;
                case "XF":
                    A.push(re);
                    break;
                case "ExtSST":
                    break;
                case "BookExt":
                    break;
                case "RichTextStream":
                    break;
                case "BkHim":
                    break;
                case "SupBook":
                    W.push([re]);
                    W[W.length - 1].XTI = [];
                    break;
                case "ExternName":
                    W[W.length - 1].push(re);
                    break;
                case "Index":
                    break;
                case "Lbl":
                    Y = {
                        Name: re.Name,
                        Ref: Nb(re.rgce, l, null, W, y)
                    };
                    if (re.itab > 0)
                        Y.Sheet = re.itab - 1;
                    W.names.push(Y);
                    if (!W[0])
                        W[0] = [];
                    W[W.length - 1].push(re);
                    if (re.Name == "\r" && re.itab > 0)
                        if (re.rgce && re.rgce[0] && re.rgce[0][0] && re.rgce[0][0][0] == "PtgArea3d")
                            K[re.itab - 1] = {
                                ref: Lr(re.rgce[0][0][1][2])
                            };
                    break;
                case "ExternSheet":
                    if (W.length == 0) {
                        W[0] = [];
                        W[0].XTI = []
                    }
                    W[W.length - 1].XTI = W[W.length - 1].XTI.concat(re);
                    W.XTI = W.XTI.concat(re);
                    break;
                case "NameCmt":
                    if (y.biff < 8)
                        break;
                    Y.Comment = re[1];
                    break;
                case "Protect":
                    s["!protect"] = re;
                    break;
                case "Password":
                    if (re !== 0 && y.WTF)
                        console.error("Password verifier: " + re);
                    break;
                case "Prot4Rev":
                case "Prot4RevPass":
                    break;
                case "BoundSheet8":
                    {
                        i[re.pos] = re;
                        y.snames.push(re.name)
                    }
                    break;
                case "EOF":
                    {
                        if (--G)
                            break;
                        if (l.e) {
                            if (l.e.r > 0 && l.e.c > 0) {
                                l.e.r--;
                                l.e.c--;
                                s["!ref"] = Lr(l);
                                l.e.r++;
                                l.e.c++
                            }
                            if (N.length > 0)
                                s["!merges"] = N;
                            if (_.length > 0)
                                s["!objects"] = _;
                            if (M.length > 0)
                                s["!cols"] = M;
                            if (L.length > 0)
                                s["!rows"] = L;
                            x.Sheets.push(D)
                        }
                        if (h === "")
                            d = s;
                        else
                            a[h] = s;
                        s = r.dense ? [] : {}
                    }
                    break;
                case "BOF":
                    {
                        if (y.biff !== 8) {} else if (Q === 9)
                            y.biff = 2;
                        else if (Q === 521)
                            y.biff = 3;
                        else if (Q === 1033)
                            y.biff = 4;
                        else if (re.BIFFVer === 1280)
                            y.biff = 5;
                        else if (re.BIFFVer === 1536)
                            y.biff = 8;
                        else if (re.BIFFVer === 2)
                            y.biff = 2;
                        else if (re.BIFFVer === 7)
                            y.biff = 2;
                        if (G++)
                            break;
                        I = true;
                        s = r.dense ? [] : {};
                        if (y.biff < 5) {
                            if (h === "")
                                h = "Sheet1";
                            l = {
                                s: {
                                    r: 0,
                                    c: 0
                                },
                                e: {
                                    r: 0,
                                    c: 0
                                }
                            };
                            var ae = {
                                pos: e.l - Z,
                                name: h
                            };
                            i[ae.pos] = ae;
                            y.snames.push(h)
                        } else
                            h = (i[$] || {
                                name: ""
                            }).name;
                        if (re.dt == 32)
                            s["!type"] = "chart";
                        N = [];
                        _ = [];
                        C = [];
                        y.arrayf = C;
                        M = [];
                        L = [];
                        U = H = 0;
                        V = false;
                        D = {
                            Hidden: (i[$] || {
                                hs: 0
                            }).hs,
                            name: h
                        }
                    }
                    break;
                case "Number":
                case "BIFF2NUM":
                case "BIFF2INT":
                    {
                        if (s["!type"] == "chart")
                            if (r.dense ? (s[re.r] || [])[re.c] : s[yr({
                                c: re.c,
                                r: re.r
                            })])
                                ++re.c;
                        T = {
                            ixfe: re.ixfe,
                            XF: A[re.ixfe] || {},
                            v: re.val,
                            t: "n"
                        };
                        if (j > 0)
                            T.z = z[T.ixfe >> 8 & 31];
                        jg(T, r, t.opts.Date1904);
                        P({
                            c: re.c,
                            r: re.r
                        }, T, r)
                    }
                    break;
                case "BoolErr":
                    {
                        T = {
                            ixfe: re.ixfe,
                            XF: A[re.ixfe],
                            v: re.val,
                            t: re.t
                        };
                        if (j > 0)
                            T.z = z[T.ixfe >> 8 & 31];
                        jg(T, r, t.opts.Date1904);
                        P({
                            c: re.c,
                            r: re.r
                        }, T, r)
                    }
                    break;
                case "RK":
                    {
                        T = {
                            ixfe: re.ixfe,
                            XF: A[re.ixfe],
                            v: re.rknum,
                            t: "n"
                        };
                        if (j > 0)
                            T.z = z[T.ixfe >> 8 & 31];
                        jg(T, r, t.opts.Date1904);
                        P({
                            c: re.c,
                            r: re.r
                        }, T, r)
                    }
                    break;
                case "MulRk":
                    {
                        for (var ne = re.c; ne <= re.C; ++ne) {
                            var se = re.rkrec[ne - re.c][0];
                            T = {
                                ixfe: se,
                                XF: A[se],
                                v: re.rkrec[ne - re.c][1],
                                t: "n"
                            };
                            if (j > 0)
                                T.z = z[T.ixfe >> 8 & 31];
                            jg(T, r, t.opts.Date1904);
                            P({
                                c: ne,
                                r: re.r
                            }, T, r)
                        }
                    }
                    break;
                case "Formula":
                    {
                        if (re.val == "String") {
                            o = re;
                            break
                        }
                        T = {
                            v: re.val,
                            ixfe: re.cell.ixfe,
                            t: re.tt
                        };
                        T.XF = A[T.ixfe];
                        if (r.cellFormula) {
                            var ie = re.formula;
                            if (ie && ie[0] && ie[0][0] && ie[0][0][0] == "PtgExp") {
                                var fe = ie[0][0][1][0]
                                  , ce = ie[0][0][1][1];
                                var le = yr({
                                    r: fe,
                                    c: ce
                                });
                                if (B[le])
                                    T.f = "" + Nb(re.formula, l, re.cell, W, y);
                                else
                                    T.F = ((r.dense ? (s[fe] || [])[ce] : s[le]) || {}).F
                            } else
                                T.f = "" + Nb(re.formula, l, re.cell, W, y)
                        }
                        if (j > 0)
                            T.z = z[T.ixfe >> 8 & 31];
                        jg(T, r, t.opts.Date1904);
                        P(re.cell, T, r);
                        o = re
                    }
                    break;
                case "String":
                    {
                        if (o) {
                            o.val = re;
                            T = {
                                v: re,
                                ixfe: o.cell.ixfe,
                                t: "s"
                            };
                            T.XF = A[T.ixfe];
                            if (r.cellFormula) {
                                T.f = "" + Nb(o.formula, l, o.cell, W, y)
                            }
                            if (j > 0)
                                T.z = z[T.ixfe >> 8 & 31];
                            jg(T, r, t.opts.Date1904);
                            P(o.cell, T, r);
                            o = null
                        } else
                            throw new Error("String record expects Formula")
                    }
                    break;
                case "Array":
                    {
                        C.push(re);
                        var oe = yr(re[0].s);
                        p = r.dense ? (s[re[0].s.r] || [])[re[0].s.c] : s[oe];
                        if (r.cellFormula && p) {
                            if (!o)
                                break;
                            if (!oe || !p)
                                break;
                            p.f = "" + Nb(re[1], l, re[0], W, y);
                            p.F = Lr(re[0])
                        }
                    }
                    break;
                case "ShrFmla":
                    {
                        if (!I)
                            break;
                        if (!r.cellFormula)
                            break;
                        if (b) {
                            if (!o)
                                break;
                            B[yr(o.cell)] = re[0];
                            p = r.dense ? (s[o.cell.r] || [])[o.cell.c] : s[yr(o.cell)];
                            (p || {}).f = "" + Nb(re[0], l, v, W, y)
                        }
                    }
                    break;
                case "LabelSst":
                    T = zg(u[re.isst].t, re.ixfe, "s");
                    T.XF = A[T.ixfe];
                    if (j > 0)
                        T.z = z[T.ixfe >> 8 & 31];
                    jg(T, r, t.opts.Date1904);
                    P({
                        c: re.c,
                        r: re.r
                    }, T, r);
                    break;
                case "Blank":
                    if (r.sheetStubs) {
                        T = {
                            ixfe: re.ixfe,
                            XF: A[re.ixfe],
                            t: "z"
                        };
                        if (j > 0)
                            T.z = z[T.ixfe >> 8 & 31];
                        jg(T, r, t.opts.Date1904);
                        P({
                            c: re.c,
                            r: re.r
                        }, T, r)
                    }
                    break;
                case "MulBlank":
                    if (r.sheetStubs) {
                        for (var ue = re.c; ue <= re.C; ++ue) {
                            var he = re.ixfe[ue - re.c];
                            T = {
                                ixfe: he,
                                XF: A[he],
                                t: "z"
                            };
                            if (j > 0)
                                T.z = z[T.ixfe >> 8 & 31];
                            jg(T, r, t.opts.Date1904);
                            P({
                                c: ue,
                                r: re.r
                            }, T, r)
                        }
                    }
                    break;
                case "RString":
                case "Label":
                case "BIFF2STR":
                    T = zg(re.val, re.ixfe, "s");
                    T.XF = A[T.ixfe];
                    if (j > 0)
                        T.z = z[T.ixfe >> 8 & 31];
                    jg(T, r, t.opts.Date1904);
                    P({
                        c: re.c,
                        r: re.r
                    }, T, r);
                    break;
                case "Dimensions":
                    {
                        if (G === 1)
                            l = re
                    }
                    break;
                case "SST":
                    {
                        u = re
                    }
                    break;
                case "Format":
                    {
                        m.load(re[1], re[0])
                    }
                    break;
                case "BIFF2FORMAT":
                    {
                        z[j++] = re;
                        for (var de = 0; de < j + 163; ++de)
                            if (m._table[de] == re)
                                break;
                        if (de >= 163)
                            m.load(re, j + 163)
                    }
                    break;
                case "MergeCells":
                    N = N.concat(re);
                    break;
                case "Obj":
                    _[re.cmo[0]] = y.lastobj = re;
                    break;
                case "TxO":
                    y.lastobj.TxO = re;
                    break;
                case "ImData":
                    y.lastobj.ImData = re;
                    break;
                case "HLink":
                    {
                        for (k = re[0].s.r; k <= re[0].e.r; ++k)
                            for (S = re[0].s.c; S <= re[0].e.c; ++S) {
                                p = r.dense ? (s[k] || [])[S] : s[yr({
                                    c: S,
                                    r: k
                                })];
                                if (p)
                                    p.l = re[1]
                            }
                    }
                    break;
                case "HLinkTooltip":
                    {
                        for (k = re[0].s.r; k <= re[0].e.r; ++k)
                            for (S = re[0].s.c; S <= re[0].e.c; ++S) {
                                p = r.dense ? (s[k] || [])[S] : s[yr({
                                    c: S,
                                    r: k
                                })];
                                if (p)
                                    p.l.Tooltip = re[1]
                            }
                    }
                    break;
                case "Note":
                    {
                        if (y.biff <= 5 && y.biff >= 2)
                            break;
                        p = r.dense ? (s[re[0].r] || [])[re[0].c] : s[yr(re[0])];
                        var ve = _[re[2]];
                        if (!p)
                            break;
                        if (!p.c)
                            p.c = [];
                        g = {
                            a: re[1],
                            t: ve.TxO.t
                        };
                        p.c.push(g)
                    }
                    break;
                default:
                    switch (J.n) {
                    case "ClrtClient":
                        break;
                    case "XFExt":
                        Dd(A[re.ixfe], re.ext);
                        break;
                    case "DefColWidth":
                        U = re;
                        break;
                    case "DefaultRowHeight":
                        H = re[1];
                        break;
                    case "ColInfo":
                        {
                            if (!y.cellStyles)
                                break;
                            while (re.e >= re.s) {
                                M[re.e--] = {
                                    width: re.w / 256
                                };
                                if (!V) {
                                    V = true;
                                    Th(re.w / 256)
                                }
                                Ih(M[re.e + 1])
                            }
                        }
                        break;
                    case "Row":
                        {
                            var be = {};
                            if (re.hidden) {
                                L[re.r] = be;
                                be.hidden = true
                            }
                            if (re.hpt) {
                                L[re.r] = be;
                                be.hpt = re.hpt;
                                be.hpx = Dh(re.hpt)
                            }
                        }
                        break;
                    case "LeftMargin":
                    case "RightMargin":
                    case "TopMargin":
                    case "BottomMargin":
                        if (!s["!margins"])
                            Jb(s["!margins"] = {});
                        switch (te) {
                        case "LeftMargin":
                            s["!margins"].left = re;
                            break;
                        case "RightMargin":
                            s["!margins"].right = re;
                            break;
                        case "TopMargin":
                            s["!margins"].top = re;
                            break;
                        case "BottomMargin":
                            s["!margins"].bottom = re;
                            break
                        }
                        break;
                    case "Setup":
                        if (!s["!margins"])
                            Jb(s["!margins"] = {});
                        s["!margins"].header = re.header;
                        s["!margins"].footer = re.footer;
                        break;
                    case "Header":
                        break;
                    case "Footer":
                        break;
                    case "HCenter":
                        break;
                    case "VCenter":
                        break;
                    case "Pls":
                        break;
                    case "GCW":
                        break;
                    case "LHRecord":
                        break;
                    case "DBCell":
                        break;
                    case "EntExU2":
                        break;
                    case "SxView":
                        break;
                    case "Sxvd":
                        break;
                    case "SXVI":
                        break;
                    case "SXVDEx":
                        break;
                    case "SxIvd":
                        break;
                    case "SXDI":
                        break;
                    case "SXLI":
                        break;
                    case "SXEx":
                        break;
                    case "QsiSXTag":
                        break;
                    case "Selection":
                        break;
                    case "Feat":
                        break;
                    case "FeatHdr":
                    case "FeatHdr11":
                        break;
                    case "Feature11":
                    case "Feature12":
                    case "List12":
                        break;
                    case "Country":
                        w = re;
                        break;
                    case "RecalcId":
                        break;
                    case "DxGCol":
                        break;
                    case "Fbi":
                    case "Fbi2":
                    case "GelFrame":
                        break;
                    case "Font":
                        break;
                    case "XFCRC":
                        break;
                    case "Style":
                        break;
                    case "StyleExt":
                        break;
                    case "Palette":
                        R = re;
                        break;
                    case "Theme":
                        break;
                    case "ScenarioProtect":
                        break;
                    case "ObjProtect":
                        break;
                    case "CondFmt12":
                        break;
                    case "Table":
                        break;
                    case "TableStyles":
                        break;
                    case "TableStyle":
                        break;
                    case "TableStyleElement":
                        break;
                    case "SXStreamID":
                        break;
                    case "SXVS":
                        break;
                    case "DConRef":
                        break;
                    case "SXAddl":
                        break;
                    case "DConBin":
                        break;
                    case "DConName":
                        break;
                    case "SXPI":
                        break;
                    case "SxFormat":
                        break;
                    case "SxSelect":
                        break;
                    case "SxRule":
                        break;
                    case "SxFilt":
                        break;
                    case "SxItm":
                        break;
                    case "SxDXF":
                        break;
                    case "ScenMan":
                        break;
                    case "DCon":
                        break;
                    case "CellWatch":
                        break;
                    case "PrintRowCol":
                        break;
                    case "PrintGrid":
                        break;
                    case "PrintSize":
                        break;
                    case "XCT":
                        break;
                    case "CRN":
                        break;
                    case "Scl":
                        {}
                        break;
                    case "SheetExt":
                        {}
                        break;
                    case "SheetExtOptional":
                        {}
                        break;
                    case "ObNoMacros":
                        {}
                        break;
                    case "ObProj":
                        {}
                        break;
                    case "CodeName":
                        {}
                        break;
                    case "GUIDTypeLib":
                        {}
                        break;
                    case "WOpt":
                        break;
                    case "PhoneticInfo":
                        break;
                    case "OleObjectSize":
                        break;
                    case "DXF":
                    case "DXFN":
                    case "DXFN12":
                    case "DXFN12List":
                    case "DXFN12NoCB":
                        break;
                    case "Dv":
                    case "DVal":
                        break;
                    case "BRAI":
                    case "Series":
                    case "SeriesText":
                        break;
                    case "DConn":
                        break;
                    case "DbOrParamQry":
                        break;
                    case "DBQueryExt":
                        break;
                    case "IFmtRecord":
                        break;
                    case "CondFmt":
                    case "CF":
                    case "CF12":
                    case "CFEx":
                        break;
                    case "Excel9File":
                        break;
                    case "Units":
                        break;
                    case "InterfaceHdr":
                    case "Mms":
                    case "InterfaceEnd":
                    case "DSF":
                    case "BuiltInFnGroupCount":
                        break;
                    case "Window1":
                    case "Window2":
                    case "HideObj":
                    case "GridSet":
                    case "Guts":
                    case "UserBView":
                    case "UserSViewBegin":
                    case "UserSViewEnd":
                    case "Pane":
                        break;
                    default:
                        switch (J.n) {
                        case "Dat":
                        case "Begin":
                        case "End":
                        case "StartBlock":
                        case "EndBlock":
                        case "Frame":
                        case "Area":
                        case "Axis":
                        case "AxisLine":
                        case "Tick":
                            break;
                        case "AxesUsed":
                        case "CrtLayout12":
                        case "CrtLayout12A":
                        case "CrtLink":
                        case "CrtLine":
                        case "CrtMlFrt":
                        case "CrtMlFrtContinue":
                            break;
                        case "LineFormat":
                        case "AreaFormat":
                        case "Chart":
                        case "Chart3d":
                        case "Chart3DBarShape":
                        case "ChartFormat":
                        case "ChartFrtInfo":
                            break;
                        case "PlotArea":
                        case "PlotGrowth":
                            break;
                        case "SeriesList":
                        case "SerParent":
                        case "SerAuxTrend":
                            break;
                        case "DataFormat":
                        case "SerToCrt":
                        case "FontX":
                            break;
                        case "CatSerRange":
                        case "AxcExt":
                        case "SerFmt":
                            break;
                        case "ShtProps":
                            break;
                        case "DefaultText":
                        case "Text":
                        case "CatLab":
                            break;
                        case "DataLabExtContents":
                            break;
                        case "Legend":
                        case "LegendException":
                            break;
                        case "Pie":
                        case "Scatter":
                            break;
                        case "PieFormat":
                        case "MarkerFormat":
                            break;
                        case "StartObject":
                        case "EndObject":
                            break;
                        case "AlRuns":
                        case "ObjectLink":
                            break;
                        case "SIIndex":
                            break;
                        case "AttachedLabel":
                        case "YMult":
                            break;
                        case "Line":
                        case "Bar":
                            break;
                        case "Surf":
                            break;
                        case "AxisParent":
                            break;
                        case "Pos":
                            break;
                        case "ValueRange":
                            break;
                        case "SXViewEx9":
                            break;
                        case "SXViewLink":
                            break;
                        case "PivotChartBits":
                            break;
                        case "SBaseRef":
                            break;
                        case "TextPropsStream":
                            break;
                        case "LnExt":
                            break;
                        case "MkrExt":
                            break;
                        case "CrtCoopt":
                            break;
                        case "Qsi":
                        case "Qsif":
                        case "Qsir":
                        case "QsiSXTag":
                            break;
                        case "TxtQry":
                            break;
                        case "FilterMode":
                            break;
                        case "AutoFilter":
                        case "AutoFilterInfo":
                            break;
                        case "AutoFilter12":
                            break;
                        case "DropDownObjIds":
                            break;
                        case "Sort":
                            break;
                        case "SortData":
                            break;
                        case "ShapePropsStream":
                            break;
                        case "MsoDrawing":
                        case "MsoDrawingGroup":
                        case "MsoDrawingSelection":
                            break;
                        case "WebPub":
                        case "AutoWebPub":
                            break;
                        case "HeaderFooter":
                        case "HFPicture":
                        case "PLV":
                        case "HorizontalPageBreaks":
                        case "VerticalPageBreaks":
                            break;
                        case "Backup":
                        case "CompressPictures":
                        case "Compat12":
                            break;
                        case "Continue":
                        case "ContinueFrt12":
                            break;
                        case "FrtFontList":
                        case "FrtWrapper":
                            break;
                        default:
                            switch (J.n) {
                            case "ExternCount":
                                break;
                            case "TabIdConf":
                            case "Radar":
                            case "RadarArea":
                            case "DropBar":
                            case "Intl":
                            case "CoordList":
                            case "SerAuxErrBar":
                                break;
                            case "BIFF2FONTCLR":
                            case "BIFF2FMTCNT":
                            case "BIFF2FONTXTRA":
                                break;
                            case "BIFF2XF":
                            case "BIFF3XF":
                            case "BIFF4XF":
                                break;
                            case "BIFF4FMTCNT":
                            case "BIFF2ROW":
                            case "BIFF2WINDOW2":
                                break;
                            case "SCENARIO":
                            case "DConBin":
                            case "PicF":
                            case "DataLabExt":
                            case "Lel":
                            case "BopPop":
                            case "BopPopCustom":
                            case "RealTimeData":
                            case "Name":
                                break;
                            default:
                                if (r.WTF)
                                    throw "Unrecognized Record " + J.n
                            }
                        }
                    }
                }
            } else
                e.l += Z
        }
        var pe = Object.keys(i).sort(function(e, r) {
            return Number(e) - Number(r)
        }).map(function(e) {
            return i[e].name
        });
        var me = pe.slice();
        t.Directory = pe;
        t.SheetNames = pe;
        if (!r.bookSheets)
            t.Sheets = a;
        if (t.Sheets)
            K.forEach(function(e, r) {
                t.Sheets[t.SheetNames[r]]["!autofilter"] = e
            });
        t.Preamble = d;
        t.Strings = u;
        t.SSF = m.get_table();
        if (y.enc)
            t.Encryption = y.enc;
        t.Metadata = {};
        if (w !== undefined)
            t.Metadata.Country = w;
        if (W.names.length > 0)
            x.Names = W.names;
        t.Workbook = x;
        return t
    }
    function Yg(e) {
        var r = e.find("!DocumentSummaryInformation");
        if (r)
            try {
                e.DocSummary = Ga(r, _t)
            } catch (e) {}
        var t = e.find("!SummaryInformation");
        if (t)
            try {
                e.Summary = Ga(t, Mt)
            } catch (e) {}
    }
    function $g(e, r) {
        if (!r)
            r = {};
        wE(r);
        a();
        var t, n, s;
        if (e.FullPaths) {
            t = e.find("!CompObj");
            n = e.find("!SummaryInformation");
            s = e.find("/Workbook")
        } else {
            or(e, 0);
            s = {
                content: e
            }
        }
        if (!s)
            s = e.find("/Book");
        var i, f, c;
        if (t)
            i = Xg(t);
        if (r.bookProps && !r.bookSheets)
            c = {};
        else {
            if (s)
                c = Kg(s.content, r, !!s.find);
            else if (e.find("PerfectOffice_MAIN"))
                c = Bu.to_workbook(e.find("PerfectOffice_MAIN").content, r);
            else if (e.find("NativeContent_MAIN"))
                c = Bu.to_workbook(e.find("NativeContent_MAIN").content, r);
            else
                throw new Error("Cannot find Workbook stream")
        }
        if (e.FullPaths)
            Yg(e);
        var l = {};
        for (var o in e.Summary)
            l[o] = e.Summary[o];
        for (o in e.DocSummary)
            l[o] = e.DocSummary[o];
        c.Props = c.Custprops = l;
        if (r.bookFiles)
            c.cfb = e;
        return c
    }
    var Qg = {
        0: {
            n: "BrtRowHdr",
            f: Ip
        },
        1: {
            n: "BrtCellBlank",
            f: Pp
        },
        2: {
            n: "BrtCellRk",
            f: Wp
        },
        3: {
            n: "BrtCellError",
            f: Mp
        },
        4: {
            n: "BrtCellBool",
            f: Np
        },
        5: {
            n: "BrtCellReal",
            f: Hp
        },
        6: {
            n: "BrtCellSt",
            f: Gp
        },
        7: {
            n: "BrtCellIsst",
            f: Lp
        },
        8: {
            n: "BrtFmlaString",
            f: $p
        },
        9: {
            n: "BrtFmlaNum",
            f: Yp
        },
        10: {
            n: "BrtFmlaBool",
            f: zp
        },
        11: {
            n: "BrtFmlaError",
            f: Kp
        },
        16: {
            n: "BrtFRTArchID$",
            f: zm
        },
        19: {
            n: "BrtSSTItem",
            f: $r
        },
        20: {
            n: "BrtPCDIMissing",
            f: ur
        },
        21: {
            n: "BrtPCDINumber",
            f: ur
        },
        22: {
            n: "BrtPCDIBoolean",
            f: ur
        },
        23: {
            n: "BrtPCDIError",
            f: ur
        },
        24: {
            n: "BrtPCDIString",
            f: ur
        },
        25: {
            n: "BrtPCDIDatetime",
            f: ur
        },
        26: {
            n: "BrtPCDIIndex",
            f: ur
        },
        27: {
            n: "BrtPCDIAMissing",
            f: ur
        },
        28: {
            n: "BrtPCDIANumber",
            f: ur
        },
        29: {
            n: "BrtPCDIABoolean",
            f: ur
        },
        30: {
            n: "BrtPCDIAError",
            f: ur
        },
        31: {
            n: "BrtPCDIAString",
            f: ur
        },
        32: {
            n: "BrtPCDIADatetime",
            f: ur
        },
        33: {
            n: "BrtPCRRecord",
            f: ur
        },
        34: {
            n: "BrtPCRRecordDt",
            f: ur
        },
        35: {
            n: "BrtFRTBegin",
            f: ur
        },
        36: {
            n: "BrtFRTEnd",
            f: ur
        },
        37: {
            n: "BrtACBegin",
            f: ur
        },
        38: {
            n: "BrtACEnd",
            f: ur
        },
        39: {
            n: "BrtName",
            f: Km
        },
        40: {
            n: "BrtIndexRowBlock",
            f: ur
        },
        42: {
            n: "BrtIndexBlock",
            f: ur
        },
        43: {
            n: "BrtFont",
            f: Gh
        },
        44: {
            n: "BrtFmt",
            f: Wh
        },
        45: {
            n: "BrtFill",
            f: ur
        },
        46: {
            n: "BrtBorder",
            f: ur
        },
        47: {
            n: "BrtXF",
            f: $h
        },
        48: {
            n: "BrtStyle",
            f: ur
        },
        49: {
            n: "BrtCellMeta",
            f: ur
        },
        50: {
            n: "BrtValueMeta",
            f: ur
        },
        51: {
            n: "BrtMdb",
            f: ur
        },
        52: {
            n: "BrtBeginFmd",
            f: ur
        },
        53: {
            n: "BrtEndFmd",
            f: ur
        },
        54: {
            n: "BrtBeginMdx",
            f: ur
        },
        55: {
            n: "BrtEndMdx",
            f: ur
        },
        56: {
            n: "BrtBeginMdxTuple",
            f: ur
        },
        57: {
            n: "BrtEndMdxTuple",
            f: ur
        },
        58: {
            n: "BrtMdxMbrIstr",
            f: ur
        },
        59: {
            n: "BrtStr",
            f: ur
        },
        60: {
            n: "BrtColInfo",
            f: ws
        },
        62: {
            n: "BrtCellRString",
            f: ur
        },
        63: {
            n: "BrtCalcChainItem$",
            f: Pd
        },
        64: {
            n: "BrtDVal",
            f: ur
        },
        65: {
            n: "BrtSxvcellNum",
            f: ur
        },
        66: {
            n: "BrtSxvcellStr",
            f: ur
        },
        67: {
            n: "BrtSxvcellBool",
            f: ur
        },
        68: {
            n: "BrtSxvcellErr",
            f: ur
        },
        69: {
            n: "BrtSxvcellDate",
            f: ur
        },
        70: {
            n: "BrtSxvcellNil",
            f: ur
        },
        128: {
            n: "BrtFileVersion",
            f: ur
        },
        129: {
            n: "BrtBeginSheet",
            f: ur
        },
        130: {
            n: "BrtEndSheet",
            f: ur
        },
        131: {
            n: "BrtBeginBook",
            f: ur,
            p: 0
        },
        132: {
            n: "BrtEndBook",
            f: ur
        },
        133: {
            n: "BrtBeginWsViews",
            f: ur
        },
        134: {
            n: "BrtEndWsViews",
            f: ur
        },
        135: {
            n: "BrtBeginBookViews",
            f: ur
        },
        136: {
            n: "BrtEndBookViews",
            f: ur
        },
        137: {
            n: "BrtBeginWsView",
            f: ur
        },
        138: {
            n: "BrtEndWsView",
            f: ur
        },
        139: {
            n: "BrtBeginCsViews",
            f: ur
        },
        140: {
            n: "BrtEndCsViews",
            f: ur
        },
        141: {
            n: "BrtBeginCsView",
            f: ur
        },
        142: {
            n: "BrtEndCsView",
            f: ur
        },
        143: {
            n: "BrtBeginBundleShs",
            f: ur
        },
        144: {
            n: "BrtEndBundleShs",
            f: ur
        },
        145: {
            n: "BrtBeginSheetData",
            f: ur
        },
        146: {
            n: "BrtEndSheetData",
            f: ur
        },
        147: {
            n: "BrtWsProp",
            f: Op
        },
        148: {
            n: "BrtWsDim",
            f: xp,
            p: 16
        },
        151: {
            n: "BrtPane",
            f: ur
        },
        152: {
            n: "BrtSel",
            f: ur
        },
        153: {
            n: "BrtWbProp",
            f: Gm
        },
        154: {
            n: "BrtWbFactoid",
            f: ur
        },
        155: {
            n: "BrtFileRecover",
            f: ur
        },
        156: {
            n: "BrtBundleSh",
            f: Wm
        },
        157: {
            n: "BrtCalcProp",
            f: ur
        },
        158: {
            n: "BrtBookView",
            f: ur
        },
        159: {
            n: "BrtBeginSst",
            f: Nu
        },
        160: {
            n: "BrtEndSst",
            f: ur
        },
        161: {
            n: "BrtBeginAFilter",
            f: dt
        },
        162: {
            n: "BrtEndAFilter",
            f: ur
        },
        163: {
            n: "BrtBeginFilterColumn",
            f: ur
        },
        164: {
            n: "BrtEndFilterColumn",
            f: ur
        },
        165: {
            n: "BrtBeginFilters",
            f: ur
        },
        166: {
            n: "BrtEndFilters",
            f: ur
        },
        167: {
            n: "BrtFilter",
            f: ur
        },
        168: {
            n: "BrtColorFilter",
            f: ur
        },
        169: {
            n: "BrtIconFilter",
            f: ur
        },
        170: {
            n: "BrtTop10Filter",
            f: ur
        },
        171: {
            n: "BrtDynamicFilter",
            f: ur
        },
        172: {
            n: "BrtBeginCustomFilters",
            f: ur
        },
        173: {
            n: "BrtEndCustomFilters",
            f: ur
        },
        174: {
            n: "BrtCustomFilter",
            f: ur
        },
        175: {
            n: "BrtAFilterDateGroupItem",
            f: ur
        },
        176: {
            n: "BrtMergeCell",
            f: Qp
        },
        177: {
            n: "BrtBeginMergeCells",
            f: ur
        },
        178: {
            n: "BrtEndMergeCells",
            f: ur
        },
        179: {
            n: "BrtBeginPivotCacheDef",
            f: ur
        },
        180: {
            n: "BrtEndPivotCacheDef",
            f: ur
        },
        181: {
            n: "BrtBeginPCDFields",
            f: ur
        },
        182: {
            n: "BrtEndPCDFields",
            f: ur
        },
        183: {
            n: "BrtBeginPCDField",
            f: ur
        },
        184: {
            n: "BrtEndPCDField",
            f: ur
        },
        185: {
            n: "BrtBeginPCDSource",
            f: ur
        },
        186: {
            n: "BrtEndPCDSource",
            f: ur
        },
        187: {
            n: "BrtBeginPCDSRange",
            f: ur
        },
        188: {
            n: "BrtEndPCDSRange",
            f: ur
        },
        189: {
            n: "BrtBeginPCDFAtbl",
            f: ur
        },
        190: {
            n: "BrtEndPCDFAtbl",
            f: ur
        },
        191: {
            n: "BrtBeginPCDIRun",
            f: ur
        },
        192: {
            n: "BrtEndPCDIRun",
            f: ur
        },
        193: {
            n: "BrtBeginPivotCacheRecords",
            f: ur
        },
        194: {
            n: "BrtEndPivotCacheRecords",
            f: ur
        },
        195: {
            n: "BrtBeginPCDHierarchies",
            f: ur
        },
        196: {
            n: "BrtEndPCDHierarchies",
            f: ur
        },
        197: {
            n: "BrtBeginPCDHierarchy",
            f: ur
        },
        198: {
            n: "BrtEndPCDHierarchy",
            f: ur
        },
        199: {
            n: "BrtBeginPCDHFieldsUsage",
            f: ur
        },
        200: {
            n: "BrtEndPCDHFieldsUsage",
            f: ur
        },
        201: {
            n: "BrtBeginExtConnection",
            f: ur
        },
        202: {
            n: "BrtEndExtConnection",
            f: ur
        },
        203: {
            n: "BrtBeginECDbProps",
            f: ur
        },
        204: {
            n: "BrtEndECDbProps",
            f: ur
        },
        205: {
            n: "BrtBeginECOlapProps",
            f: ur
        },
        206: {
            n: "BrtEndECOlapProps",
            f: ur
        },
        207: {
            n: "BrtBeginPCDSConsol",
            f: ur
        },
        208: {
            n: "BrtEndPCDSConsol",
            f: ur
        },
        209: {
            n: "BrtBeginPCDSCPages",
            f: ur
        },
        210: {
            n: "BrtEndPCDSCPages",
            f: ur
        },
        211: {
            n: "BrtBeginPCDSCPage",
            f: ur
        },
        212: {
            n: "BrtEndPCDSCPage",
            f: ur
        },
        213: {
            n: "BrtBeginPCDSCPItem",
            f: ur
        },
        214: {
            n: "BrtEndPCDSCPItem",
            f: ur
        },
        215: {
            n: "BrtBeginPCDSCSets",
            f: ur
        },
        216: {
            n: "BrtEndPCDSCSets",
            f: ur
        },
        217: {
            n: "BrtBeginPCDSCSet",
            f: ur
        },
        218: {
            n: "BrtEndPCDSCSet",
            f: ur
        },
        219: {
            n: "BrtBeginPCDFGroup",
            f: ur
        },
        220: {
            n: "BrtEndPCDFGroup",
            f: ur
        },
        221: {
            n: "BrtBeginPCDFGItems",
            f: ur
        },
        222: {
            n: "BrtEndPCDFGItems",
            f: ur
        },
        223: {
            n: "BrtBeginPCDFGRange",
            f: ur
        },
        224: {
            n: "BrtEndPCDFGRange",
            f: ur
        },
        225: {
            n: "BrtBeginPCDFGDiscrete",
            f: ur
        },
        226: {
            n: "BrtEndPCDFGDiscrete",
            f: ur
        },
        227: {
            n: "BrtBeginPCDSDTupleCache",
            f: ur
        },
        228: {
            n: "BrtEndPCDSDTupleCache",
            f: ur
        },
        229: {
            n: "BrtBeginPCDSDTCEntries",
            f: ur
        },
        230: {
            n: "BrtEndPCDSDTCEntries",
            f: ur
        },
        231: {
            n: "BrtBeginPCDSDTCEMembers",
            f: ur
        },
        232: {
            n: "BrtEndPCDSDTCEMembers",
            f: ur
        },
        233: {
            n: "BrtBeginPCDSDTCEMember",
            f: ur
        },
        234: {
            n: "BrtEndPCDSDTCEMember",
            f: ur
        },
        235: {
            n: "BrtBeginPCDSDTCQueries",
            f: ur
        },
        236: {
            n: "BrtEndPCDSDTCQueries",
            f: ur
        },
        237: {
            n: "BrtBeginPCDSDTCQuery",
            f: ur
        },
        238: {
            n: "BrtEndPCDSDTCQuery",
            f: ur
        },
        239: {
            n: "BrtBeginPCDSDTCSets",
            f: ur
        },
        240: {
            n: "BrtEndPCDSDTCSets",
            f: ur
        },
        241: {
            n: "BrtBeginPCDSDTCSet",
            f: ur
        },
        242: {
            n: "BrtEndPCDSDTCSet",
            f: ur
        },
        243: {
            n: "BrtBeginPCDCalcItems",
            f: ur
        },
        244: {
            n: "BrtEndPCDCalcItems",
            f: ur
        },
        245: {
            n: "BrtBeginPCDCalcItem",
            f: ur
        },
        246: {
            n: "BrtEndPCDCalcItem",
            f: ur
        },
        247: {
            n: "BrtBeginPRule",
            f: ur
        },
        248: {
            n: "BrtEndPRule",
            f: ur
        },
        249: {
            n: "BrtBeginPRFilters",
            f: ur
        },
        250: {
            n: "BrtEndPRFilters",
            f: ur
        },
        251: {
            n: "BrtBeginPRFilter",
            f: ur
        },
        252: {
            n: "BrtEndPRFilter",
            f: ur
        },
        253: {
            n: "BrtBeginPNames",
            f: ur
        },
        254: {
            n: "BrtEndPNames",
            f: ur
        },
        255: {
            n: "BrtBeginPName",
            f: ur
        },
        256: {
            n: "BrtEndPName",
            f: ur
        },
        257: {
            n: "BrtBeginPNPairs",
            f: ur
        },
        258: {
            n: "BrtEndPNPairs",
            f: ur
        },
        259: {
            n: "BrtBeginPNPair",
            f: ur
        },
        260: {
            n: "BrtEndPNPair",
            f: ur
        },
        261: {
            n: "BrtBeginECWebProps",
            f: ur
        },
        262: {
            n: "BrtEndECWebProps",
            f: ur
        },
        263: {
            n: "BrtBeginEcWpTables",
            f: ur
        },
        264: {
            n: "BrtEndECWPTables",
            f: ur
        },
        265: {
            n: "BrtBeginECParams",
            f: ur
        },
        266: {
            n: "BrtEndECParams",
            f: ur
        },
        267: {
            n: "BrtBeginECParam",
            f: ur
        },
        268: {
            n: "BrtEndECParam",
            f: ur
        },
        269: {
            n: "BrtBeginPCDKPIs",
            f: ur
        },
        270: {
            n: "BrtEndPCDKPIs",
            f: ur
        },
        271: {
            n: "BrtBeginPCDKPI",
            f: ur
        },
        272: {
            n: "BrtEndPCDKPI",
            f: ur
        },
        273: {
            n: "BrtBeginDims",
            f: ur
        },
        274: {
            n: "BrtEndDims",
            f: ur
        },
        275: {
            n: "BrtBeginDim",
            f: ur
        },
        276: {
            n: "BrtEndDim",
            f: ur
        },
        277: {
            n: "BrtIndexPartEnd",
            f: ur
        },
        278: {
            n: "BrtBeginStyleSheet",
            f: ur
        },
        279: {
            n: "BrtEndStyleSheet",
            f: ur
        },
        280: {
            n: "BrtBeginSXView",
            f: ur
        },
        281: {
            n: "BrtEndSXVI",
            f: ur
        },
        282: {
            n: "BrtBeginSXVI",
            f: ur
        },
        283: {
            n: "BrtBeginSXVIs",
            f: ur
        },
        284: {
            n: "BrtEndSXVIs",
            f: ur
        },
        285: {
            n: "BrtBeginSXVD",
            f: ur
        },
        286: {
            n: "BrtEndSXVD",
            f: ur
        },
        287: {
            n: "BrtBeginSXVDs",
            f: ur
        },
        288: {
            n: "BrtEndSXVDs",
            f: ur
        },
        289: {
            n: "BrtBeginSXPI",
            f: ur
        },
        290: {
            n: "BrtEndSXPI",
            f: ur
        },
        291: {
            n: "BrtBeginSXPIs",
            f: ur
        },
        292: {
            n: "BrtEndSXPIs",
            f: ur
        },
        293: {
            n: "BrtBeginSXDI",
            f: ur
        },
        294: {
            n: "BrtEndSXDI",
            f: ur
        },
        295: {
            n: "BrtBeginSXDIs",
            f: ur
        },
        296: {
            n: "BrtEndSXDIs",
            f: ur
        },
        297: {
            n: "BrtBeginSXLI",
            f: ur
        },
        298: {
            n: "BrtEndSXLI",
            f: ur
        },
        299: {
            n: "BrtBeginSXLIRws",
            f: ur
        },
        300: {
            n: "BrtEndSXLIRws",
            f: ur
        },
        301: {
            n: "BrtBeginSXLICols",
            f: ur
        },
        302: {
            n: "BrtEndSXLICols",
            f: ur
        },
        303: {
            n: "BrtBeginSXFormat",
            f: ur
        },
        304: {
            n: "BrtEndSXFormat",
            f: ur
        },
        305: {
            n: "BrtBeginSXFormats",
            f: ur
        },
        306: {
            n: "BrtEndSxFormats",
            f: ur
        },
        307: {
            n: "BrtBeginSxSelect",
            f: ur
        },
        308: {
            n: "BrtEndSxSelect",
            f: ur
        },
        309: {
            n: "BrtBeginISXVDRws",
            f: ur
        },
        310: {
            n: "BrtEndISXVDRws",
            f: ur
        },
        311: {
            n: "BrtBeginISXVDCols",
            f: ur
        },
        312: {
            n: "BrtEndISXVDCols",
            f: ur
        },
        313: {
            n: "BrtEndSXLocation",
            f: ur
        },
        314: {
            n: "BrtBeginSXLocation",
            f: ur
        },
        315: {
            n: "BrtEndSXView",
            f: ur
        },
        316: {
            n: "BrtBeginSXTHs",
            f: ur
        },
        317: {
            n: "BrtEndSXTHs",
            f: ur
        },
        318: {
            n: "BrtBeginSXTH",
            f: ur
        },
        319: {
            n: "BrtEndSXTH",
            f: ur
        },
        320: {
            n: "BrtBeginISXTHRws",
            f: ur
        },
        321: {
            n: "BrtEndISXTHRws",
            f: ur
        },
        322: {
            n: "BrtBeginISXTHCols",
            f: ur
        },
        323: {
            n: "BrtEndISXTHCols",
            f: ur
        },
        324: {
            n: "BrtBeginSXTDMPS",
            f: ur
        },
        325: {
            n: "BrtEndSXTDMPs",
            f: ur
        },
        326: {
            n: "BrtBeginSXTDMP",
            f: ur
        },
        327: {
            n: "BrtEndSXTDMP",
            f: ur
        },
        328: {
            n: "BrtBeginSXTHItems",
            f: ur
        },
        329: {
            n: "BrtEndSXTHItems",
            f: ur
        },
        330: {
            n: "BrtBeginSXTHItem",
            f: ur
        },
        331: {
            n: "BrtEndSXTHItem",
            f: ur
        },
        332: {
            n: "BrtBeginMetadata",
            f: ur
        },
        333: {
            n: "BrtEndMetadata",
            f: ur
        },
        334: {
            n: "BrtBeginEsmdtinfo",
            f: ur
        },
        335: {
            n: "BrtMdtinfo",
            f: ur
        },
        336: {
            n: "BrtEndEsmdtinfo",
            f: ur
        },
        337: {
            n: "BrtBeginEsmdb",
            f: ur
        },
        338: {
            n: "BrtEndEsmdb",
            f: ur
        },
        339: {
            n: "BrtBeginEsfmd",
            f: ur
        },
        340: {
            n: "BrtEndEsfmd",
            f: ur
        },
        341: {
            n: "BrtBeginSingleCells",
            f: ur
        },
        342: {
            n: "BrtEndSingleCells",
            f: ur
        },
        343: {
            n: "BrtBeginList",
            f: ur
        },
        344: {
            n: "BrtEndList",
            f: ur
        },
        345: {
            n: "BrtBeginListCols",
            f: ur
        },
        346: {
            n: "BrtEndListCols",
            f: ur
        },
        347: {
            n: "BrtBeginListCol",
            f: ur
        },
        348: {
            n: "BrtEndListCol",
            f: ur
        },
        349: {
            n: "BrtBeginListXmlCPr",
            f: ur
        },
        350: {
            n: "BrtEndListXmlCPr",
            f: ur
        },
        351: {
            n: "BrtListCCFmla",
            f: ur
        },
        352: {
            n: "BrtListTrFmla",
            f: ur
        },
        353: {
            n: "BrtBeginExternals",
            f: ur
        },
        354: {
            n: "BrtEndExternals",
            f: ur
        },
        355: {
            n: "BrtSupBookSrc",
            f: ur
        },
        357: {
            n: "BrtSupSelf",
            f: ur
        },
        358: {
            n: "BrtSupSame",
            f: ur
        },
        359: {
            n: "BrtSupTabs",
            f: ur
        },
        360: {
            n: "BrtBeginSupBook",
            f: ur
        },
        361: {
            n: "BrtPlaceholderName",
            f: ur
        },
        362: {
            n: "BrtExternSheet",
            f: ur
        },
        363: {
            n: "BrtExternTableStart",
            f: ur
        },
        364: {
            n: "BrtExternTableEnd",
            f: ur
        },
        366: {
            n: "BrtExternRowHdr",
            f: ur
        },
        367: {
            n: "BrtExternCellBlank",
            f: ur
        },
        368: {
            n: "BrtExternCellReal",
            f: ur
        },
        369: {
            n: "BrtExternCellBool",
            f: ur
        },
        370: {
            n: "BrtExternCellError",
            f: ur
        },
        371: {
            n: "BrtExternCellString",
            f: ur
        },
        372: {
            n: "BrtBeginEsmdx",
            f: ur
        },
        373: {
            n: "BrtEndEsmdx",
            f: ur
        },
        374: {
            n: "BrtBeginMdxSet",
            f: ur
        },
        375: {
            n: "BrtEndMdxSet",
            f: ur
        },
        376: {
            n: "BrtBeginMdxMbrProp",
            f: ur
        },
        377: {
            n: "BrtEndMdxMbrProp",
            f: ur
        },
        378: {
            n: "BrtBeginMdxKPI",
            f: ur
        },
        379: {
            n: "BrtEndMdxKPI",
            f: ur
        },
        380: {
            n: "BrtBeginEsstr",
            f: ur
        },
        381: {
            n: "BrtEndEsstr",
            f: ur
        },
        382: {
            n: "BrtBeginPRFItem",
            f: ur
        },
        383: {
            n: "BrtEndPRFItem",
            f: ur
        },
        384: {
            n: "BrtBeginPivotCacheIDs",
            f: ur
        },
        385: {
            n: "BrtEndPivotCacheIDs",
            f: ur
        },
        386: {
            n: "BrtBeginPivotCacheID",
            f: ur
        },
        387: {
            n: "BrtEndPivotCacheID",
            f: ur
        },
        388: {
            n: "BrtBeginISXVIs",
            f: ur
        },
        389: {
            n: "BrtEndISXVIs",
            f: ur
        },
        390: {
            n: "BrtBeginColInfos",
            f: ur
        },
        391: {
            n: "BrtEndColInfos",
            f: ur
        },
        392: {
            n: "BrtBeginRwBrk",
            f: ur
        },
        393: {
            n: "BrtEndRwBrk",
            f: ur
        },
        394: {
            n: "BrtBeginColBrk",
            f: ur
        },
        395: {
            n: "BrtEndColBrk",
            f: ur
        },
        396: {
            n: "BrtBrk",
            f: ur
        },
        397: {
            n: "BrtUserBookView",
            f: ur
        },
        398: {
            n: "BrtInfo",
            f: ur
        },
        399: {
            n: "BrtCUsr",
            f: ur
        },
        400: {
            n: "BrtUsr",
            f: ur
        },
        401: {
            n: "BrtBeginUsers",
            f: ur
        },
        403: {
            n: "BrtEOF",
            f: ur
        },
        404: {
            n: "BrtUCR",
            f: ur
        },
        405: {
            n: "BrtRRInsDel",
            f: ur
        },
        406: {
            n: "BrtRREndInsDel",
            f: ur
        },
        407: {
            n: "BrtRRMove",
            f: ur
        },
        408: {
            n: "BrtRREndMove",
            f: ur
        },
        409: {
            n: "BrtRRChgCell",
            f: ur
        },
        410: {
            n: "BrtRREndChgCell",
            f: ur
        },
        411: {
            n: "BrtRRHeader",
            f: ur
        },
        412: {
            n: "BrtRRUserView",
            f: ur
        },
        413: {
            n: "BrtRRRenSheet",
            f: ur
        },
        414: {
            n: "BrtRRInsertSh",
            f: ur
        },
        415: {
            n: "BrtRRDefName",
            f: ur
        },
        416: {
            n: "BrtRRNote",
            f: ur
        },
        417: {
            n: "BrtRRConflict",
            f: ur
        },
        418: {
            n: "BrtRRTQSIF",
            f: ur
        },
        419: {
            n: "BrtRRFormat",
            f: ur
        },
        420: {
            n: "BrtRREndFormat",
            f: ur
        },
        421: {
            n: "BrtRRAutoFmt",
            f: ur
        },
        422: {
            n: "BrtBeginUserShViews",
            f: ur
        },
        423: {
            n: "BrtBeginUserShView",
            f: ur
        },
        424: {
            n: "BrtEndUserShView",
            f: ur
        },
        425: {
            n: "BrtEndUserShViews",
            f: ur
        },
        426: {
            n: "BrtArrFmla",
            f: rm
        },
        427: {
            n: "BrtShrFmla",
            f: tm
        },
        428: {
            n: "BrtTable",
            f: ur
        },
        429: {
            n: "BrtBeginExtConnections",
            f: ur
        },
        430: {
            n: "BrtEndExtConnections",
            f: ur
        },
        431: {
            n: "BrtBeginPCDCalcMems",
            f: ur
        },
        432: {
            n: "BrtEndPCDCalcMems",
            f: ur
        },
        433: {
            n: "BrtBeginPCDCalcMem",
            f: ur
        },
        434: {
            n: "BrtEndPCDCalcMem",
            f: ur
        },
        435: {
            n: "BrtBeginPCDHGLevels",
            f: ur
        },
        436: {
            n: "BrtEndPCDHGLevels",
            f: ur
        },
        437: {
            n: "BrtBeginPCDHGLevel",
            f: ur
        },
        438: {
            n: "BrtEndPCDHGLevel",
            f: ur
        },
        439: {
            n: "BrtBeginPCDHGLGroups",
            f: ur
        },
        440: {
            n: "BrtEndPCDHGLGroups",
            f: ur
        },
        441: {
            n: "BrtBeginPCDHGLGroup",
            f: ur
        },
        442: {
            n: "BrtEndPCDHGLGroup",
            f: ur
        },
        443: {
            n: "BrtBeginPCDHGLGMembers",
            f: ur
        },
        444: {
            n: "BrtEndPCDHGLGMembers",
            f: ur
        },
        445: {
            n: "BrtBeginPCDHGLGMember",
            f: ur
        },
        446: {
            n: "BrtEndPCDHGLGMember",
            f: ur
        },
        447: {
            n: "BrtBeginQSI",
            f: ur
        },
        448: {
            n: "BrtEndQSI",
            f: ur
        },
        449: {
            n: "BrtBeginQSIR",
            f: ur
        },
        450: {
            n: "BrtEndQSIR",
            f: ur
        },
        451: {
            n: "BrtBeginDeletedNames",
            f: ur
        },
        452: {
            n: "BrtEndDeletedNames",
            f: ur
        },
        453: {
            n: "BrtBeginDeletedName",
            f: ur
        },
        454: {
            n: "BrtEndDeletedName",
            f: ur
        },
        455: {
            n: "BrtBeginQSIFs",
            f: ur
        },
        456: {
            n: "BrtEndQSIFs",
            f: ur
        },
        457: {
            n: "BrtBeginQSIF",
            f: ur
        },
        458: {
            n: "BrtEndQSIF",
            f: ur
        },
        459: {
            n: "BrtBeginAutoSortScope",
            f: ur
        },
        460: {
            n: "BrtEndAutoSortScope",
            f: ur
        },
        461: {
            n: "BrtBeginConditionalFormatting",
            f: ur
        },
        462: {
            n: "BrtEndConditionalFormatting",
            f: ur
        },
        463: {
            n: "BrtBeginCFRule",
            f: ur
        },
        464: {
            n: "BrtEndCFRule",
            f: ur
        },
        465: {
            n: "BrtBeginIconSet",
            f: ur
        },
        466: {
            n: "BrtEndIconSet",
            f: ur
        },
        467: {
            n: "BrtBeginDatabar",
            f: ur
        },
        468: {
            n: "BrtEndDatabar",
            f: ur
        },
        469: {
            n: "BrtBeginColorScale",
            f: ur
        },
        470: {
            n: "BrtEndColorScale",
            f: ur
        },
        471: {
            n: "BrtCFVO",
            f: ur
        },
        472: {
            n: "BrtExternValueMeta",
            f: ur
        },
        473: {
            n: "BrtBeginColorPalette",
            f: ur
        },
        474: {
            n: "BrtEndColorPalette",
            f: ur
        },
        475: {
            n: "BrtIndexedColor",
            f: ur
        },
        476: {
            n: "BrtMargins",
            f: nm
        },
        477: {
            n: "BrtPrintOptions",
            f: ur
        },
        478: {
            n: "BrtPageSetup",
            f: ur
        },
        479: {
            n: "BrtBeginHeaderFooter",
            f: ur
        },
        480: {
            n: "BrtEndHeaderFooter",
            f: ur
        },
        481: {
            n: "BrtBeginSXCrtFormat",
            f: ur
        },
        482: {
            n: "BrtEndSXCrtFormat",
            f: ur
        },
        483: {
            n: "BrtBeginSXCrtFormats",
            f: ur
        },
        484: {
            n: "BrtEndSXCrtFormats",
            f: ur
        },
        485: {
            n: "BrtWsFmtInfo",
            f: ur
        },
        486: {
            n: "BrtBeginMgs",
            f: ur
        },
        487: {
            n: "BrtEndMGs",
            f: ur
        },
        488: {
            n: "BrtBeginMGMaps",
            f: ur
        },
        489: {
            n: "BrtEndMGMaps",
            f: ur
        },
        490: {
            n: "BrtBeginMG",
            f: ur
        },
        491: {
            n: "BrtEndMG",
            f: ur
        },
        492: {
            n: "BrtBeginMap",
            f: ur
        },
        493: {
            n: "BrtEndMap",
            f: ur
        },
        494: {
            n: "BrtHLink",
            f: Jp
        },
        495: {
            n: "BrtBeginDCon",
            f: ur
        },
        496: {
            n: "BrtEndDCon",
            f: ur
        },
        497: {
            n: "BrtBeginDRefs",
            f: ur
        },
        498: {
            n: "BrtEndDRefs",
            f: ur
        },
        499: {
            n: "BrtDRef",
            f: ur
        },
        500: {
            n: "BrtBeginScenMan",
            f: ur
        },
        501: {
            n: "BrtEndScenMan",
            f: ur
        },
        502: {
            n: "BrtBeginSct",
            f: ur
        },
        503: {
            n: "BrtEndSct",
            f: ur
        },
        504: {
            n: "BrtSlc",
            f: ur
        },
        505: {
            n: "BrtBeginDXFs",
            f: ur
        },
        506: {
            n: "BrtEndDXFs",
            f: ur
        },
        507: {
            n: "BrtDXF",
            f: ur
        },
        508: {
            n: "BrtBeginTableStyles",
            f: ur
        },
        509: {
            n: "BrtEndTableStyles",
            f: ur
        },
        510: {
            n: "BrtBeginTableStyle",
            f: ur
        },
        511: {
            n: "BrtEndTableStyle",
            f: ur
        },
        512: {
            n: "BrtTableStyleElement",
            f: ur
        },
        513: {
            n: "BrtTableStyleClient",
            f: ur
        },
        514: {
            n: "BrtBeginVolDeps",
            f: ur
        },
        515: {
            n: "BrtEndVolDeps",
            f: ur
        },
        516: {
            n: "BrtBeginVolType",
            f: ur
        },
        517: {
            n: "BrtEndVolType",
            f: ur
        },
        518: {
            n: "BrtBeginVolMain",
            f: ur
        },
        519: {
            n: "BrtEndVolMain",
            f: ur
        },
        520: {
            n: "BrtBeginVolTopic",
            f: ur
        },
        521: {
            n: "BrtEndVolTopic",
            f: ur
        },
        522: {
            n: "BrtVolSubtopic",
            f: ur
        },
        523: {
            n: "BrtVolRef",
            f: ur
        },
        524: {
            n: "BrtVolNum",
            f: ur
        },
        525: {
            n: "BrtVolErr",
            f: ur
        },
        526: {
            n: "BrtVolStr",
            f: ur
        },
        527: {
            n: "BrtVolBool",
            f: ur
        },
        528: {
            n: "BrtBeginCalcChain$",
            f: ur
        },
        529: {
            n: "BrtEndCalcChain$",
            f: ur
        },
        530: {
            n: "BrtBeginSortState",
            f: ur
        },
        531: {
            n: "BrtEndSortState",
            f: ur
        },
        532: {
            n: "BrtBeginSortCond",
            f: ur
        },
        533: {
            n: "BrtEndSortCond",
            f: ur
        },
        534: {
            n: "BrtBookProtection",
            f: ur
        },
        535: {
            n: "BrtSheetProtection",
            f: ur
        },
        536: {
            n: "BrtRangeProtection",
            f: ur
        },
        537: {
            n: "BrtPhoneticInfo",
            f: ur
        },
        538: {
            n: "BrtBeginECTxtWiz",
            f: ur
        },
        539: {
            n: "BrtEndECTxtWiz",
            f: ur
        },
        540: {
            n: "BrtBeginECTWFldInfoLst",
            f: ur
        },
        541: {
            n: "BrtEndECTWFldInfoLst",
            f: ur
        },
        542: {
            n: "BrtBeginECTwFldInfo",
            f: ur
        },
        548: {
            n: "BrtFileSharing",
            f: ur
        },
        549: {
            n: "BrtOleSize",
            f: ur
        },
        550: {
            n: "BrtDrawing",
            f: ft
        },
        551: {
            n: "BrtLegacyDrawing",
            f: ur
        },
        552: {
            n: "BrtLegacyDrawingHF",
            f: ur
        },
        553: {
            n: "BrtWebOpt",
            f: ur
        },
        554: {
            n: "BrtBeginWebPubItems",
            f: ur
        },
        555: {
            n: "BrtEndWebPubItems",
            f: ur
        },
        556: {
            n: "BrtBeginWebPubItem",
            f: ur
        },
        557: {
            n: "BrtEndWebPubItem",
            f: ur
        },
        558: {
            n: "BrtBeginSXCondFmt",
            f: ur
        },
        559: {
            n: "BrtEndSXCondFmt",
            f: ur
        },
        560: {
            n: "BrtBeginSXCondFmts",
            f: ur
        },
        561: {
            n: "BrtEndSXCondFmts",
            f: ur
        },
        562: {
            n: "BrtBkHim",
            f: ur
        },
        564: {
            n: "BrtColor",
            f: ur
        },
        565: {
            n: "BrtBeginIndexedColors",
            f: ur
        },
        566: {
            n: "BrtEndIndexedColors",
            f: ur
        },
        569: {
            n: "BrtBeginMRUColors",
            f: ur
        },
        570: {
            n: "BrtEndMRUColors",
            f: ur
        },
        572: {
            n: "BrtMRUColor",
            f: ur
        },
        573: {
            n: "BrtBeginDVals",
            f: ur
        },
        574: {
            n: "BrtEndDVals",
            f: ur
        },
        577: {
            n: "BrtSupNameStart",
            f: ur
        },
        578: {
            n: "BrtSupNameValueStart",
            f: ur
        },
        579: {
            n: "BrtSupNameValueEnd",
            f: ur
        },
        580: {
            n: "BrtSupNameNum",
            f: ur
        },
        581: {
            n: "BrtSupNameErr",
            f: ur
        },
        582: {
            n: "BrtSupNameSt",
            f: ur
        },
        583: {
            n: "BrtSupNameNil",
            f: ur
        },
        584: {
            n: "BrtSupNameBool",
            f: ur
        },
        585: {
            n: "BrtSupNameFmla",
            f: ur
        },
        586: {
            n: "BrtSupNameBits",
            f: ur
        },
        587: {
            n: "BrtSupNameEnd",
            f: ur
        },
        588: {
            n: "BrtEndSupBook",
            f: ur
        },
        589: {
            n: "BrtCellSmartTagProperty",
            f: ur
        },
        590: {
            n: "BrtBeginCellSmartTag",
            f: ur
        },
        591: {
            n: "BrtEndCellSmartTag",
            f: ur
        },
        592: {
            n: "BrtBeginCellSmartTags",
            f: ur
        },
        593: {
            n: "BrtEndCellSmartTags",
            f: ur
        },
        594: {
            n: "BrtBeginSmartTags",
            f: ur
        },
        595: {
            n: "BrtEndSmartTags",
            f: ur
        },
        596: {
            n: "BrtSmartTagType",
            f: ur
        },
        597: {
            n: "BrtBeginSmartTagTypes",
            f: ur
        },
        598: {
            n: "BrtEndSmartTagTypes",
            f: ur
        },
        599: {
            n: "BrtBeginSXFilters",
            f: ur
        },
        600: {
            n: "BrtEndSXFilters",
            f: ur
        },
        601: {
            n: "BrtBeginSXFILTER",
            f: ur
        },
        602: {
            n: "BrtEndSXFilter",
            f: ur
        },
        603: {
            n: "BrtBeginFills",
            f: ur
        },
        604: {
            n: "BrtEndFills",
            f: ur
        },
        605: {
            n: "BrtBeginCellWatches",
            f: ur
        },
        606: {
            n: "BrtEndCellWatches",
            f: ur
        },
        607: {
            n: "BrtCellWatch",
            f: ur
        },
        608: {
            n: "BrtBeginCRErrs",
            f: ur
        },
        609: {
            n: "BrtEndCRErrs",
            f: ur
        },
        610: {
            n: "BrtCrashRecErr",
            f: ur
        },
        611: {
            n: "BrtBeginFonts",
            f: ur
        },
        612: {
            n: "BrtEndFonts",
            f: ur
        },
        613: {
            n: "BrtBeginBorders",
            f: ur
        },
        614: {
            n: "BrtEndBorders",
            f: ur
        },
        615: {
            n: "BrtBeginFmts",
            f: ur
        },
        616: {
            n: "BrtEndFmts",
            f: ur
        },
        617: {
            n: "BrtBeginCellXFs",
            f: ur
        },
        618: {
            n: "BrtEndCellXFs",
            f: ur
        },
        619: {
            n: "BrtBeginStyles",
            f: ur
        },
        620: {
            n: "BrtEndStyles",
            f: ur
        },
        625: {
            n: "BrtBigName",
            f: ur
        },
        626: {
            n: "BrtBeginCellStyleXFs",
            f: ur
        },
        627: {
            n: "BrtEndCellStyleXFs",
            f: ur
        },
        628: {
            n: "BrtBeginComments",
            f: ur
        },
        629: {
            n: "BrtEndComments",
            f: ur
        },
        630: {
            n: "BrtBeginCommentAuthors",
            f: ur
        },
        631: {
            n: "BrtEndCommentAuthors",
            f: ur
        },
        632: {
            n: "BrtCommentAuthor",
            f: zd
        },
        633: {
            n: "BrtBeginCommentList",
            f: ur
        },
        634: {
            n: "BrtEndCommentList",
            f: ur
        },
        635: {
            n: "BrtBeginComment",
            f: Gd
        },
        636: {
            n: "BrtEndComment",
            f: ur
        },
        637: {
            n: "BrtCommentText",
            f: Zr
        },
        638: {
            n: "BrtBeginOleObjects",
            f: ur
        },
        639: {
            n: "BrtOleObject",
            f: ur
        },
        640: {
            n: "BrtEndOleObjects",
            f: ur
        },
        641: {
            n: "BrtBeginSxrules",
            f: ur
        },
        642: {
            n: "BrtEndSxRules",
            f: ur
        },
        643: {
            n: "BrtBeginActiveXControls",
            f: ur
        },
        644: {
            n: "BrtActiveX",
            f: ur
        },
        645: {
            n: "BrtEndActiveXControls",
            f: ur
        },
        646: {
            n: "BrtBeginPCDSDTCEMembersSortBy",
            f: ur
        },
        648: {
            n: "BrtBeginCellIgnoreECs",
            f: ur
        },
        649: {
            n: "BrtCellIgnoreEC",
            f: ur
        },
        650: {
            n: "BrtEndCellIgnoreECs",
            f: ur
        },
        651: {
            n: "BrtCsProp",
            f: ur
        },
        652: {
            n: "BrtCsPageSetup",
            f: ur
        },
        653: {
            n: "BrtBeginUserCsViews",
            f: ur
        },
        654: {
            n: "BrtEndUserCsViews",
            f: ur
        },
        655: {
            n: "BrtBeginUserCsView",
            f: ur
        },
        656: {
            n: "BrtEndUserCsView",
            f: ur
        },
        657: {
            n: "BrtBeginPcdSFCIEntries",
            f: ur
        },
        658: {
            n: "BrtEndPCDSFCIEntries",
            f: ur
        },
        659: {
            n: "BrtPCDSFCIEntry",
            f: ur
        },
        660: {
            n: "BrtBeginListParts",
            f: ur
        },
        661: {
            n: "BrtListPart",
            f: ur
        },
        662: {
            n: "BrtEndListParts",
            f: ur
        },
        663: {
            n: "BrtSheetCalcProp",
            f: ur
        },
        664: {
            n: "BrtBeginFnGroup",
            f: ur
        },
        665: {
            n: "BrtFnGroup",
            f: ur
        },
        666: {
            n: "BrtEndFnGroup",
            f: ur
        },
        667: {
            n: "BrtSupAddin",
            f: ur
        },
        668: {
            n: "BrtSXTDMPOrder",
            f: ur
        },
        669: {
            n: "BrtCsProtection",
            f: ur
        },
        671: {
            n: "BrtBeginWsSortMap",
            f: ur
        },
        672: {
            n: "BrtEndWsSortMap",
            f: ur
        },
        673: {
            n: "BrtBeginRRSort",
            f: ur
        },
        674: {
            n: "BrtEndRRSort",
            f: ur
        },
        675: {
            n: "BrtRRSortItem",
            f: ur
        },
        676: {
            n: "BrtFileSharingIso",
            f: ur
        },
        677: {
            n: "BrtBookProtectionIso",
            f: ur
        },
        678: {
            n: "BrtSheetProtectionIso",
            f: ur
        },
        679: {
            n: "BrtCsProtectionIso",
            f: ur
        },
        680: {
            n: "BrtRangeProtectionIso",
            f: ur
        },
        1024: {
            n: "BrtRwDescent",
            f: ur
        },
        1025: {
            n: "BrtKnownFonts",
            f: ur
        },
        1026: {
            n: "BrtBeginSXTupleSet",
            f: ur
        },
        1027: {
            n: "BrtEndSXTupleSet",
            f: ur
        },
        1028: {
            n: "BrtBeginSXTupleSetHeader",
            f: ur
        },
        1029: {
            n: "BrtEndSXTupleSetHeader",
            f: ur
        },
        1030: {
            n: "BrtSXTupleSetHeaderItem",
            f: ur
        },
        1031: {
            n: "BrtBeginSXTupleSetData",
            f: ur
        },
        1032: {
            n: "BrtEndSXTupleSetData",
            f: ur
        },
        1033: {
            n: "BrtBeginSXTupleSetRow",
            f: ur
        },
        1034: {
            n: "BrtEndSXTupleSetRow",
            f: ur
        },
        1035: {
            n: "BrtSXTupleSetRowItem",
            f: ur
        },
        1036: {
            n: "BrtNameExt",
            f: ur
        },
        1037: {
            n: "BrtPCDH14",
            f: ur
        },
        1038: {
            n: "BrtBeginPCDCalcMem14",
            f: ur
        },
        1039: {
            n: "BrtEndPCDCalcMem14",
            f: ur
        },
        1040: {
            n: "BrtSXTH14",
            f: ur
        },
        1041: {
            n: "BrtBeginSparklineGroup",
            f: ur
        },
        1042: {
            n: "BrtEndSparklineGroup",
            f: ur
        },
        1043: {
            n: "BrtSparkline",
            f: ur
        },
        1044: {
            n: "BrtSXDI14",
            f: ur
        },
        1045: {
            n: "BrtWsFmtInfoEx14",
            f: ur
        },
        1046: {
            n: "BrtBeginConditionalFormatting14",
            f: ur
        },
        1047: {
            n: "BrtEndConditionalFormatting14",
            f: ur
        },
        1048: {
            n: "BrtBeginCFRule14",
            f: ur
        },
        1049: {
            n: "BrtEndCFRule14",
            f: ur
        },
        1050: {
            n: "BrtCFVO14",
            f: ur
        },
        1051: {
            n: "BrtBeginDatabar14",
            f: ur
        },
        1052: {
            n: "BrtBeginIconSet14",
            f: ur
        },
        1053: {
            n: "BrtDVal14",
            f: ur
        },
        1054: {
            n: "BrtBeginDVals14",
            f: ur
        },
        1055: {
            n: "BrtColor14",
            f: ur
        },
        1056: {
            n: "BrtBeginSparklines",
            f: ur
        },
        1057: {
            n: "BrtEndSparklines",
            f: ur
        },
        1058: {
            n: "BrtBeginSparklineGroups",
            f: ur
        },
        1059: {
            n: "BrtEndSparklineGroups",
            f: ur
        },
        1061: {
            n: "BrtSXVD14",
            f: ur
        },
        1062: {
            n: "BrtBeginSxview14",
            f: ur
        },
        1063: {
            n: "BrtEndSxview14",
            f: ur
        },
        1066: {
            n: "BrtBeginPCD14",
            f: ur
        },
        1067: {
            n: "BrtEndPCD14",
            f: ur
        },
        1068: {
            n: "BrtBeginExtConn14",
            f: ur
        },
        1069: {
            n: "BrtEndExtConn14",
            f: ur
        },
        1070: {
            n: "BrtBeginSlicerCacheIDs",
            f: ur
        },
        1071: {
            n: "BrtEndSlicerCacheIDs",
            f: ur
        },
        1072: {
            n: "BrtBeginSlicerCacheID",
            f: ur
        },
        1073: {
            n: "BrtEndSlicerCacheID",
            f: ur
        },
        1075: {
            n: "BrtBeginSlicerCache",
            f: ur
        },
        1076: {
            n: "BrtEndSlicerCache",
            f: ur
        },
        1077: {
            n: "BrtBeginSlicerCacheDef",
            f: ur
        },
        1078: {
            n: "BrtEndSlicerCacheDef",
            f: ur
        },
        1079: {
            n: "BrtBeginSlicersEx",
            f: ur
        },
        1080: {
            n: "BrtEndSlicersEx",
            f: ur
        },
        1081: {
            n: "BrtBeginSlicerEx",
            f: ur
        },
        1082: {
            n: "BrtEndSlicerEx",
            f: ur
        },
        1083: {
            n: "BrtBeginSlicer",
            f: ur
        },
        1084: {
            n: "BrtEndSlicer",
            f: ur
        },
        1085: {
            n: "BrtSlicerCachePivotTables",
            f: ur
        },
        1086: {
            n: "BrtBeginSlicerCacheOlapImpl",
            f: ur
        },
        1087: {
            n: "BrtEndSlicerCacheOlapImpl",
            f: ur
        },
        1088: {
            n: "BrtBeginSlicerCacheLevelsData",
            f: ur
        },
        1089: {
            n: "BrtEndSlicerCacheLevelsData",
            f: ur
        },
        1090: {
            n: "BrtBeginSlicerCacheLevelData",
            f: ur
        },
        1091: {
            n: "BrtEndSlicerCacheLevelData",
            f: ur
        },
        1092: {
            n: "BrtBeginSlicerCacheSiRanges",
            f: ur
        },
        1093: {
            n: "BrtEndSlicerCacheSiRanges",
            f: ur
        },
        1094: {
            n: "BrtBeginSlicerCacheSiRange",
            f: ur
        },
        1095: {
            n: "BrtEndSlicerCacheSiRange",
            f: ur
        },
        1096: {
            n: "BrtSlicerCacheOlapItem",
            f: ur
        },
        1097: {
            n: "BrtBeginSlicerCacheSelections",
            f: ur
        },
        1098: {
            n: "BrtSlicerCacheSelection",
            f: ur
        },
        1099: {
            n: "BrtEndSlicerCacheSelections",
            f: ur
        },
        1100: {
            n: "BrtBeginSlicerCacheNative",
            f: ur
        },
        1101: {
            n: "BrtEndSlicerCacheNative",
            f: ur
        },
        1102: {
            n: "BrtSlicerCacheNativeItem",
            f: ur
        },
        1103: {
            n: "BrtRangeProtection14",
            f: ur
        },
        1104: {
            n: "BrtRangeProtectionIso14",
            f: ur
        },
        1105: {
            n: "BrtCellIgnoreEC14",
            f: ur
        },
        1111: {
            n: "BrtList14",
            f: ur
        },
        1112: {
            n: "BrtCFIcon",
            f: ur
        },
        1113: {
            n: "BrtBeginSlicerCachesPivotCacheIDs",
            f: ur
        },
        1114: {
            n: "BrtEndSlicerCachesPivotCacheIDs",
            f: ur
        },
        1115: {
            n: "BrtBeginSlicers",
            f: ur
        },
        1116: {
            n: "BrtEndSlicers",
            f: ur
        },
        1117: {
            n: "BrtWbProp14",
            f: ur
        },
        1118: {
            n: "BrtBeginSXEdit",
            f: ur
        },
        1119: {
            n: "BrtEndSXEdit",
            f: ur
        },
        1120: {
            n: "BrtBeginSXEdits",
            f: ur
        },
        1121: {
            n: "BrtEndSXEdits",
            f: ur
        },
        1122: {
            n: "BrtBeginSXChange",
            f: ur
        },
        1123: {
            n: "BrtEndSXChange",
            f: ur
        },
        1124: {
            n: "BrtBeginSXChanges",
            f: ur
        },
        1125: {
            n: "BrtEndSXChanges",
            f: ur
        },
        1126: {
            n: "BrtSXTupleItems",
            f: ur
        },
        1128: {
            n: "BrtBeginSlicerStyle",
            f: ur
        },
        1129: {
            n: "BrtEndSlicerStyle",
            f: ur
        },
        1130: {
            n: "BrtSlicerStyleElement",
            f: ur
        },
        1131: {
            n: "BrtBeginStyleSheetExt14",
            f: ur
        },
        1132: {
            n: "BrtEndStyleSheetExt14",
            f: ur
        },
        1133: {
            n: "BrtBeginSlicerCachesPivotCacheID",
            f: ur
        },
        1134: {
            n: "BrtEndSlicerCachesPivotCacheID",
            f: ur
        },
        1135: {
            n: "BrtBeginConditionalFormattings",
            f: ur
        },
        1136: {
            n: "BrtEndConditionalFormattings",
            f: ur
        },
        1137: {
            n: "BrtBeginPCDCalcMemExt",
            f: ur
        },
        1138: {
            n: "BrtEndPCDCalcMemExt",
            f: ur
        },
        1139: {
            n: "BrtBeginPCDCalcMemsExt",
            f: ur
        },
        1140: {
            n: "BrtEndPCDCalcMemsExt",
            f: ur
        },
        1141: {
            n: "BrtPCDField14",
            f: ur
        },
        1142: {
            n: "BrtBeginSlicerStyles",
            f: ur
        },
        1143: {
            n: "BrtEndSlicerStyles",
            f: ur
        },
        1144: {
            n: "BrtBeginSlicerStyleElements",
            f: ur
        },
        1145: {
            n: "BrtEndSlicerStyleElements",
            f: ur
        },
        1146: {
            n: "BrtCFRuleExt",
            f: ur
        },
        1147: {
            n: "BrtBeginSXCondFmt14",
            f: ur
        },
        1148: {
            n: "BrtEndSXCondFmt14",
            f: ur
        },
        1149: {
            n: "BrtBeginSXCondFmts14",
            f: ur
        },
        1150: {
            n: "BrtEndSXCondFmts14",
            f: ur
        },
        1152: {
            n: "BrtBeginSortCond14",
            f: ur
        },
        1153: {
            n: "BrtEndSortCond14",
            f: ur
        },
        1154: {
            n: "BrtEndDVals14",
            f: ur
        },
        1155: {
            n: "BrtEndIconSet14",
            f: ur
        },
        1156: {
            n: "BrtEndDatabar14",
            f: ur
        },
        1157: {
            n: "BrtBeginColorScale14",
            f: ur
        },
        1158: {
            n: "BrtEndColorScale14",
            f: ur
        },
        1159: {
            n: "BrtBeginSxrules14",
            f: ur
        },
        1160: {
            n: "BrtEndSxrules14",
            f: ur
        },
        1161: {
            n: "BrtBeginPRule14",
            f: ur
        },
        1162: {
            n: "BrtEndPRule14",
            f: ur
        },
        1163: {
            n: "BrtBeginPRFilters14",
            f: ur
        },
        1164: {
            n: "BrtEndPRFilters14",
            f: ur
        },
        1165: {
            n: "BrtBeginPRFilter14",
            f: ur
        },
        1166: {
            n: "BrtEndPRFilter14",
            f: ur
        },
        1167: {
            n: "BrtBeginPRFItem14",
            f: ur
        },
        1168: {
            n: "BrtEndPRFItem14",
            f: ur
        },
        1169: {
            n: "BrtBeginCellIgnoreECs14",
            f: ur
        },
        1170: {
            n: "BrtEndCellIgnoreECs14",
            f: ur
        },
        1171: {
            n: "BrtDxf14",
            f: ur
        },
        1172: {
            n: "BrtBeginDxF14s",
            f: ur
        },
        1173: {
            n: "BrtEndDxf14s",
            f: ur
        },
        1177: {
            n: "BrtFilter14",
            f: ur
        },
        1178: {
            n: "BrtBeginCustomFilters14",
            f: ur
        },
        1180: {
            n: "BrtCustomFilter14",
            f: ur
        },
        1181: {
            n: "BrtIconFilter14",
            f: ur
        },
        1182: {
            n: "BrtPivotCacheConnectionName",
            f: ur
        },
        2048: {
            n: "BrtBeginDecoupledPivotCacheIDs",
            f: ur
        },
        2049: {
            n: "BrtEndDecoupledPivotCacheIDs",
            f: ur
        },
        2050: {
            n: "BrtDecoupledPivotCacheID",
            f: ur
        },
        2051: {
            n: "BrtBeginPivotTableRefs",
            f: ur
        },
        2052: {
            n: "BrtEndPivotTableRefs",
            f: ur
        },
        2053: {
            n: "BrtPivotTableRef",
            f: ur
        },
        2054: {
            n: "BrtSlicerCacheBookPivotTables",
            f: ur
        },
        2055: {
            n: "BrtBeginSxvcells",
            f: ur
        },
        2056: {
            n: "BrtEndSxvcells",
            f: ur
        },
        2057: {
            n: "BrtBeginSxRow",
            f: ur
        },
        2058: {
            n: "BrtEndSxRow",
            f: ur
        },
        2060: {
            n: "BrtPcdCalcMem15",
            f: ur
        },
        2067: {
            n: "BrtQsi15",
            f: ur
        },
        2068: {
            n: "BrtBeginWebExtensions",
            f: ur
        },
        2069: {
            n: "BrtEndWebExtensions",
            f: ur
        },
        2070: {
            n: "BrtWebExtension",
            f: ur
        },
        2071: {
            n: "BrtAbsPath15",
            f: ur
        },
        2072: {
            n: "BrtBeginPivotTableUISettings",
            f: ur
        },
        2073: {
            n: "BrtEndPivotTableUISettings",
            f: ur
        },
        2075: {
            n: "BrtTableSlicerCacheIDs",
            f: ur
        },
        2076: {
            n: "BrtTableSlicerCacheID",
            f: ur
        },
        2077: {
            n: "BrtBeginTableSlicerCache",
            f: ur
        },
        2078: {
            n: "BrtEndTableSlicerCache",
            f: ur
        },
        2079: {
            n: "BrtSxFilter15",
            f: ur
        },
        2080: {
            n: "BrtBeginTimelineCachePivotCacheIDs",
            f: ur
        },
        2081: {
            n: "BrtEndTimelineCachePivotCacheIDs",
            f: ur
        },
        2082: {
            n: "BrtTimelineCachePivotCacheID",
            f: ur
        },
        2083: {
            n: "BrtBeginTimelineCacheIDs",
            f: ur
        },
        2084: {
            n: "BrtEndTimelineCacheIDs",
            f: ur
        },
        2085: {
            n: "BrtBeginTimelineCacheID",
            f: ur
        },
        2086: {
            n: "BrtEndTimelineCacheID",
            f: ur
        },
        2087: {
            n: "BrtBeginTimelinesEx",
            f: ur
        },
        2088: {
            n: "BrtEndTimelinesEx",
            f: ur
        },
        2089: {
            n: "BrtBeginTimelineEx",
            f: ur
        },
        2090: {
            n: "BrtEndTimelineEx",
            f: ur
        },
        2091: {
            n: "BrtWorkBookPr15",
            f: ur
        },
        2092: {
            n: "BrtPCDH15",
            f: ur
        },
        2093: {
            n: "BrtBeginTimelineStyle",
            f: ur
        },
        2094: {
            n: "BrtEndTimelineStyle",
            f: ur
        },
        2095: {
            n: "BrtTimelineStyleElement",
            f: ur
        },
        2096: {
            n: "BrtBeginTimelineStylesheetExt15",
            f: ur
        },
        2097: {
            n: "BrtEndTimelineStylesheetExt15",
            f: ur
        },
        2098: {
            n: "BrtBeginTimelineStyles",
            f: ur
        },
        2099: {
            n: "BrtEndTimelineStyles",
            f: ur
        },
        2100: {
            n: "BrtBeginTimelineStyleElements",
            f: ur
        },
        2101: {
            n: "BrtEndTimelineStyleElements",
            f: ur
        },
        2102: {
            n: "BrtDxf15",
            f: ur
        },
        2103: {
            n: "BrtBeginDxfs15",
            f: ur
        },
        2104: {
            n: "brtEndDxfs15",
            f: ur
        },
        2105: {
            n: "BrtSlicerCacheHideItemsWithNoData",
            f: ur
        },
        2106: {
            n: "BrtBeginItemUniqueNames",
            f: ur
        },
        2107: {
            n: "BrtEndItemUniqueNames",
            f: ur
        },
        2108: {
            n: "BrtItemUniqueName",
            f: ur
        },
        2109: {
            n: "BrtBeginExtConn15",
            f: ur
        },
        2110: {
            n: "BrtEndExtConn15",
            f: ur
        },
        2111: {
            n: "BrtBeginOledbPr15",
            f: ur
        },
        2112: {
            n: "BrtEndOledbPr15",
            f: ur
        },
        2113: {
            n: "BrtBeginDataFeedPr15",
            f: ur
        },
        2114: {
            n: "BrtEndDataFeedPr15",
            f: ur
        },
        2115: {
            n: "BrtTextPr15",
            f: ur
        },
        2116: {
            n: "BrtRangePr15",
            f: ur
        },
        2117: {
            n: "BrtDbCommand15",
            f: ur
        },
        2118: {
            n: "BrtBeginDbTables15",
            f: ur
        },
        2119: {
            n: "BrtEndDbTables15",
            f: ur
        },
        2120: {
            n: "BrtDbTable15",
            f: ur
        },
        2121: {
            n: "BrtBeginDataModel",
            f: ur
        },
        2122: {
            n: "BrtEndDataModel",
            f: ur
        },
        2123: {
            n: "BrtBeginModelTables",
            f: ur
        },
        2124: {
            n: "BrtEndModelTables",
            f: ur
        },
        2125: {
            n: "BrtModelTable",
            f: ur
        },
        2126: {
            n: "BrtBeginModelRelationships",
            f: ur
        },
        2127: {
            n: "BrtEndModelRelationships",
            f: ur
        },
        2128: {
            n: "BrtModelRelationship",
            f: ur
        },
        2129: {
            n: "BrtBeginECTxtWiz15",
            f: ur
        },
        2130: {
            n: "BrtEndECTxtWiz15",
            f: ur
        },
        2131: {
            n: "BrtBeginECTWFldInfoLst15",
            f: ur
        },
        2132: {
            n: "BrtEndECTWFldInfoLst15",
            f: ur
        },
        2133: {
            n: "BrtBeginECTWFldInfo15",
            f: ur
        },
        2134: {
            n: "BrtFieldListActiveItem",
            f: ur
        },
        2135: {
            n: "BrtPivotCacheIdVersion",
            f: ur
        },
        2136: {
            n: "BrtSXDI15",
            f: ur
        },
        65535: {
            n: "",
            f: ur
        }
    };
    var Zg = T(Qg, "n");
    var qg = {
        3: {
            n: "BIFF2NUM",
            f: du
        },
        4: {
            n: "BIFF2STR",
            f: hu
        },
        6: {
            n: "Formula",
            f: wb
        },
        9: {
            n: "BOF",
            f: xn
        },
        10: {
            n: "EOF",
            f: Ys
        },
        12: {
            n: "CalcCount",
            f: Ns
        },
        13: {
            n: "CalcMode",
            f: Ls
        },
        14: {
            n: "CalcPrecision",
            f: Us
        },
        15: {
            n: "CalcRefMode",
            f: Hs
        },
        16: {
            n: "CalcDelta",
            f: _s
        },
        17: {
            n: "CalcIter",
            f: Ms
        },
        18: {
            n: "Protect",
            f: di
        },
        19: {
            n: "Password",
            f: fi
        },
        20: {
            n: "Header",
            f: ri
        },
        21: {
            n: "Footer",
            f: qs
        },
        23: {
            n: "ExternSheet",
            f: fs
        },
        24: {
            n: "Lbl",
            f: is
        },
        25: {
            n: "WinProtect",
            f: Ti
        },
        26: {
            n: "VerticalPageBreaks",
            f: Ii
        },
        27: {
            n: "HorizontalPageBreaks",
            f: Ai
        },
        28: {
            n: "Note",
            f: ds
        },
        29: {
            n: "Selection",
            f: Ri
        },
        34: {
            n: "Date1904",
            f: Gs
        },
        35: {
            n: "ExternName",
            f: ss
        },
        38: {
            n: "LeftMargin",
            f: ni
        },
        39: {
            n: "RightMargin",
            f: bi
        },
        40: {
            n: "TopMargin",
            f: ki
        },
        41: {
            n: "BottomMargin",
            f: Ps
        },
        42: {
            n: "PrintRowCol",
            f: li
        },
        43: {
            n: "PrintGrid",
            f: ci
        },
        47: {
            n: "FilePass",
            f: ch
        },
        49: {
            n: "Font",
            f: Vn
        },
        51: {
            n: "PrintSize",
            f: oi
        },
        60: {
            n: "Continue",
            f: xi
        },
        61: {
            n: "Window1",
            f: Hn
        },
        64: {
            n: "Backup",
            f: Os
        },
        65: {
            n: "Pane",
            f: Di
        },
        66: {
            n: "CodePage",
            f: Ws
        },
        77: {
            n: "Pls",
            f: Oi
        },
        80: {
            n: "DCon",
            f: Fi
        },
        81: {
            n: "DConRef",
            f: Pi
        },
        82: {
            n: "DConName",
            f: yi
        },
        85: {
            n: "DefColWidth",
            f: js
        },
        89: {
            n: "XCT",
            f: Ni
        },
        90: {
            n: "CRN",
            f: _i
        },
        91: {
            n: "FileSharing",
            f: Mi
        },
        92: {
            n: "WriteAccess",
            f: On
        },
        93: {
            n: "Obj",
            f: bs
        },
        94: {
            n: "Uncalced",
            f: Li
        },
        95: {
            n: "CalcSaveRecalc",
            f: Vs
        },
        96: {
            n: "Template",
            f: Ui
        },
        97: {
            n: "Intl",
            f: Hi
        },
        99: {
            n: "ObjProtect",
            f: ii
        },
        125: {
            n: "ColInfo",
            f: ws
        },
        128: {
            n: "Guts",
            f: es
        },
        129: {
            n: "WsBool",
            f: Vi
        },
        130: {
            n: "GridSet",
            f: Js
        },
        131: {
            n: "HCenter",
            f: ei
        },
        132: {
            n: "VCenter",
            f: Ci
        },
        133: {
            n: "BoundSheet8",
            f: Fn
        },
        134: {
            n: "WriteProtect",
            f: wi
        },
        140: {
            n: "Country",
            f: ks
        },
        141: {
            n: "HideObj",
            f: ti
        },
        144: {
            n: "Sort",
            f: Wi
        },
        146: {
            n: "Palette",
            f: Cs
        },
        151: {
            n: "Sync",
            f: Xi
        },
        152: {
            n: "LPr",
            f: Gi
        },
        153: {
            n: "DxGCol",
            f: ji
        },
        154: {
            n: "FnGroupName",
            f: zi
        },
        155: {
            n: "FilterMode",
            f: Ki
        },
        156: {
            n: "BuiltInFnGroupCount",
            f: ys
        },
        157: {
            n: "AutoFilterInfo",
            f: Yi
        },
        158: {
            n: "AutoFilter",
            f: $i
        },
        160: {
            n: "Scl",
            f: gi
        },
        161: {
            n: "Setup",
            f: Is
        },
        174: {
            n: "ScenMan",
            f: Qi
        },
        175: {
            n: "SCENARIO",
            f: Zi
        },
        176: {
            n: "SxView",
            f: qi
        },
        177: {
            n: "Sxvd",
            f: Ji
        },
        178: {
            n: "SXVI",
            f: ef
        },
        180: {
            n: "SxIvd",
            f: rf
        },
        181: {
            n: "SXLI",
            f: tf
        },
        182: {
            n: "SXPI",
            f: af
        },
        184: {
            n: "DocRoute",
            f: nf
        },
        185: {
            n: "RecipName",
            f: sf
        },
        189: {
            n: "MulRk",
            f: Yn
        },
        190: {
            n: "MulBlank",
            f: $n
        },
        193: {
            n: "Mms",
            f: si
        },
        197: {
            n: "SXDI",
            f: ff
        },
        198: {
            n: "SXDB",
            f: cf
        },
        199: {
            n: "SXFDB",
            f: lf
        },
        200: {
            n: "SXDBB",
            f: of
        },
        201: {
            n: "SXNum",
            f: uf
        },
        202: {
            n: "SxBool",
            f: Si
        },
        203: {
            n: "SxErr",
            f: hf
        },
        204: {
            n: "SXInt",
            f: df
        },
        205: {
            n: "SXString",
            f: vf
        },
        206: {
            n: "SXDtr",
            f: bf
        },
        207: {
            n: "SxNil",
            f: pf
        },
        208: {
            n: "SXTbl",
            f: mf
        },
        209: {
            n: "SXTBRGIITM",
            f: gf
        },
        210: {
            n: "SxTbpg",
            f: Ef
        },
        211: {
            n: "ObProj",
            f: Sf
        },
        213: {
            n: "SXStreamID",
            f: kf
        },
        215: {
            n: "DBCell",
            f: Bf
        },
        216: {
            n: "SXRng",
            f: Cf
        },
        217: {
            n: "SxIsxoper",
            f: Tf
        },
        218: {
            n: "BookBool",
            f: wf
        },
        220: {
            n: "DbOrParamQry",
            f: If
        },
        221: {
            n: "ScenarioProtect",
            f: mi
        },
        222: {
            n: "OleObjectSize",
            f: Af
        },
        224: {
            n: "XF",
            f: Jn
        },
        225: {
            n: "InterfaceHdr",
            f: Dn
        },
        226: {
            n: "InterfaceEnd",
            f: ai
        },
        227: {
            n: "SXVS",
            f: Rf
        },
        229: {
            n: "MergeCells",
            f: vs
        },
        233: {
            n: "BkHim",
            f: xf
        },
        235: {
            n: "MsoDrawingGroup",
            f: Df
        },
        236: {
            n: "MsoDrawing",
            f: Of
        },
        237: {
            n: "MsoDrawingSelection",
            f: Ff
        },
        239: {
            n: "PhoneticInfo",
            f: Pf
        },
        240: {
            n: "SxRule",
            f: yf
        },
        241: {
            n: "SXEx",
            f: Nf
        },
        242: {
            n: "SxFilt",
            f: _f
        },
        244: {
            n: "SxDXF",
            f: Mf
        },
        245: {
            n: "SxItm",
            f: Lf
        },
        246: {
            n: "SxName",
            f: Uf
        },
        247: {
            n: "SxSelect",
            f: Hf
        },
        248: {
            n: "SXPair",
            f: Vf
        },
        249: {
            n: "SxFmla",
            f: Wf
        },
        251: {
            n: "SxFormat",
            f: Xf
        },
        252: {
            n: "SST",
            f: Pn
        },
        253: {
            n: "LabelSst",
            f: Wn
        },
        255: {
            n: "ExtSST",
            f: yn
        },
        256: {
            n: "SXVDEx",
            f: Gf
        },
        259: {
            n: "SXFormula",
            f: jf
        },
        290: {
            n: "SXDBEx",
            f: zf
        },
        311: {
            n: "RRDInsDel",
            f: Kf
        },
        312: {
            n: "RRDHead",
            f: Yf
        },
        315: {
            n: "RRDChgCell",
            f: $f
        },
        317: {
            n: "RRTabId",
            f: pi
        },
        318: {
            n: "RRDRenSheet",
            f: Qf
        },
        319: {
            n: "RRSort",
            f: Zf
        },
        320: {
            n: "RRDMove",
            f: qf
        },
        330: {
            n: "RRFormat",
            f: Jf
        },
        331: {
            n: "RRAutoFmt",
            f: ec
        },
        333: {
            n: "RRInsertSh",
            f: rc
        },
        334: {
            n: "RRDMoveBegin",
            f: tc
        },
        335: {
            n: "RRDMoveEnd",
            f: ac
        },
        336: {
            n: "RRDInsDelBegin",
            f: nc
        },
        337: {
            n: "RRDInsDelEnd",
            f: sc
        },
        338: {
            n: "RRDConflict",
            f: ic
        },
        339: {
            n: "RRDDefName",
            f: fc
        },
        340: {
            n: "RRDRstEtxp",
            f: cc
        },
        351: {
            n: "LRng",
            f: lc
        },
        352: {
            n: "UsesELFs",
            f: Bi
        },
        353: {
            n: "DSF",
            f: zs
        },
        401: {
            n: "CUsr",
            f: oc
        },
        402: {
            n: "CbUsr",
            f: uc
        },
        403: {
            n: "UsrInfo",
            f: hc
        },
        404: {
            n: "UsrExcl",
            f: dc
        },
        405: {
            n: "FileLock",
            f: vc
        },
        406: {
            n: "RRDInfo",
            f: bc
        },
        407: {
            n: "BCUsrs",
            f: pc
        },
        408: {
            n: "UsrChk",
            f: mc
        },
        425: {
            n: "UserBView",
            f: gc
        },
        426: {
            n: "UserSViewBegin",
            f: Ec
        },
        427: {
            n: "UserSViewEnd",
            f: Sc
        },
        428: {
            n: "RRDUserView",
            f: kc
        },
        429: {
            n: "Qsi",
            f: Bc
        },
        430: {
            n: "SupBook",
            f: ns
        },
        431: {
            n: "Prot4Rev",
            f: ui
        },
        432: {
            n: "CondFmt",
            f: Cc
        },
        433: {
            n: "CF",
            f: Tc
        },
        434: {
            n: "DVal",
            f: wc
        },
        437: {
            n: "DConBin",
            f: Ic
        },
        438: {
            n: "TxO",
            f: gs
        },
        439: {
            n: "RefreshAll",
            f: vi
        },
        440: {
            n: "HLink",
            f: Es
        },
        441: {
            n: "Lel",
            f: Ac
        },
        442: {
            n: "CodeName",
            f: Rc
        },
        443: {
            n: "SXFDBType",
            f: xc
        },
        444: {
            n: "Prot4RevPass",
            f: hi
        },
        445: {
            n: "ObNoMacros",
            f: Dc
        },
        446: {
            n: "Dv",
            f: Oc
        },
        448: {
            n: "Excel9File",
            f: $s
        },
        449: {
            n: "RecalcId",
            f: Ln,
            r: 2
        },
        450: {
            n: "EntExU2",
            f: Ks
        },
        512: {
            n: "Dimensions",
            f: zn
        },
        513: {
            n: "Blank",
            f: Fs
        },
        515: {
            n: "Number",
            f: ts
        },
        516: {
            n: "Label",
            f: Xn
        },
        517: {
            n: "BoolErr",
            f: rs
        },
        518: {
            n: "Formula",
            f: wb
        },
        519: {
            n: "String",
            f: Ei
        },
        520: {
            n: "Row",
            f: Nn
        },
        523: {
            n: "Index",
            f: Fc
        },
        545: {
            n: "Array",
            f: os
        },
        549: {
            n: "DefaultRowHeight",
            f: Un
        },
        566: {
            n: "Table",
            f: Pc
        },
        574: {
            n: "Window2",
            f: Ds
        },
        638: {
            n: "RK",
            f: Kn
        },
        659: {
            n: "Style",
            f: Rs
        },
        1030: {
            n: "Formula",
            f: wb
        },
        1048: {
            n: "BigName",
            f: yc
        },
        1054: {
            n: "Format",
            f: Gn
        },
        1084: {
            n: "ContinueBigName",
            f: Nc
        },
        1212: {
            n: "ShrFmla",
            f: ls
        },
        2048: {
            n: "HLinkTooltip",
            f: Ss
        },
        2049: {
            n: "WebPub",
            f: _c
        },
        2050: {
            n: "QsiSXTag",
            f: Mc
        },
        2051: {
            n: "DBQueryExt",
            f: Lc
        },
        2052: {
            n: "ExtString",
            f: Uc
        },
        2053: {
            n: "TxtQry",
            f: Hc
        },
        2054: {
            n: "Qsir",
            f: Vc
        },
        2055: {
            n: "Qsif",
            f: Wc
        },
        2056: {
            n: "RRDTQSIF",
            f: Xc
        },
        2057: {
            n: "BOF",
            f: xn
        },
        2058: {
            n: "OleDbConn",
            f: Gc
        },
        2059: {
            n: "WOpt",
            f: jc
        },
        2060: {
            n: "SXViewEx",
            f: zc
        },
        2061: {
            n: "SXTH",
            f: Kc
        },
        2062: {
            n: "SXPIEx",
            f: Yc
        },
        2063: {
            n: "SXVDTEx",
            f: $c
        },
        2064: {
            n: "SXViewEx9",
            f: Qc
        },
        2066: {
            n: "ContinueFrt",
            f: Zc
        },
        2067: {
            n: "RealTimeData",
            f: qc
        },
        2128: {
            n: "ChartFrtInfo",
            f: Jc
        },
        2129: {
            n: "FrtWrapper",
            f: el
        },
        2130: {
            n: "StartBlock",
            f: rl
        },
        2131: {
            n: "EndBlock",
            f: tl
        },
        2132: {
            n: "StartObject",
            f: al
        },
        2133: {
            n: "EndObject",
            f: nl
        },
        2134: {
            n: "CatLab",
            f: sl
        },
        2135: {
            n: "YMult",
            f: il
        },
        2136: {
            n: "SXViewLink",
            f: fl
        },
        2137: {
            n: "PivotChartBits",
            f: cl
        },
        2138: {
            n: "FrtFontList",
            f: ll
        },
        2146: {
            n: "SheetExt",
            f: ol
        },
        2147: {
            n: "BookExt",
            f: ul,
            r: 12
        },
        2148: {
            n: "SXAddl",
            f: hl
        },
        2149: {
            n: "CrErr",
            f: dl
        },
        2150: {
            n: "HFPicture",
            f: vl
        },
        2151: {
            n: "FeatHdr",
            f: Qs
        },
        2152: {
            n: "Feat",
            f: bl
        },
        2154: {
            n: "DataLabExt",
            f: pl
        },
        2155: {
            n: "DataLabExtContents",
            f: ml
        },
        2156: {
            n: "CellWatch",
            f: gl
        },
        2161: {
            n: "FeatHdr11",
            f: El
        },
        2162: {
            n: "Feature11",
            f: Sl
        },
        2164: {
            n: "DropDownObjIds",
            f: kl
        },
        2165: {
            n: "ContinueFrt11",
            f: Bl
        },
        2166: {
            n: "DConn",
            f: Cl
        },
        2167: {
            n: "List12",
            f: Tl
        },
        2168: {
            n: "Feature12",
            f: wl
        },
        2169: {
            n: "CondFmt12",
            f: Il
        },
        2170: {
            n: "CF12",
            f: Al
        },
        2171: {
            n: "CFEx",
            f: Rl
        },
        2172: {
            n: "XFCRC",
            f: Ts,
            r: 12
        },
        2173: {
            n: "XFExt",
            f: xd,
            r: 12
        },
        2174: {
            n: "AutoFilter12",
            f: xl
        },
        2175: {
            n: "ContinueFrt12",
            f: Dl
        },
        2180: {
            n: "MDTInfo",
            f: Ol
        },
        2181: {
            n: "MDXStr",
            f: Fl
        },
        2182: {
            n: "MDXTuple",
            f: Pl
        },
        2183: {
            n: "MDXSet",
            f: yl
        },
        2184: {
            n: "MDXProp",
            f: Nl
        },
        2185: {
            n: "MDXKPI",
            f: _l
        },
        2186: {
            n: "MDB",
            f: Ml
        },
        2187: {
            n: "PLV",
            f: Ll
        },
        2188: {
            n: "Compat12",
            f: Xs,
            r: 12
        },
        2189: {
            n: "DXF",
            f: Ul
        },
        2190: {
            n: "TableStyles",
            f: Hl,
            r: 12
        },
        2191: {
            n: "TableStyle",
            f: Vl
        },
        2192: {
            n: "TableStyleElement",
            f: Wl
        },
        2194: {
            n: "StyleExt",
            f: xs
        },
        2195: {
            n: "NamePublish",
            f: Xl
        },
        2196: {
            n: "NameCmt",
            f: cs,
            r: 12
        },
        2197: {
            n: "SortData",
            f: Gl
        },
        2198: {
            n: "Theme",
            f: Cd,
            r: 12
        },
        2199: {
            n: "GUIDTypeLib",
            f: jl
        },
        2200: {
            n: "FnGrp12",
            f: zl
        },
        2201: {
            n: "NameFnGrp12",
            f: Kl
        },
        2202: {
            n: "MTRSettings",
            f: us,
            r: 12
        },
        2203: {
            n: "CompressPictures",
            f: Mn
        },
        2204: {
            n: "HeaderFooter",
            f: Yl
        },
        2205: {
            n: "CrtLayout12",
            f: $l
        },
        2206: {
            n: "CrtMlFrt",
            f: Ql
        },
        2207: {
            n: "CrtMlFrtContinue",
            f: Zl
        },
        2211: {
            n: "ForceFullCalculation",
            f: _n
        },
        2212: {
            n: "ShapePropsStream",
            f: ql
        },
        2213: {
            n: "TextPropsStream",
            f: Jl
        },
        2214: {
            n: "RichTextStream",
            f: eo
        },
        2215: {
            n: "CrtLayout12A",
            f: ro
        },
        4097: {
            n: "Units",
            f: to
        },
        4098: {
            n: "Chart",
            f: ao
        },
        4099: {
            n: "Series",
            f: no
        },
        4102: {
            n: "DataFormat",
            f: so
        },
        4103: {
            n: "LineFormat",
            f: io
        },
        4105: {
            n: "MarkerFormat",
            f: fo
        },
        4106: {
            n: "AreaFormat",
            f: co
        },
        4107: {
            n: "PieFormat",
            f: lo
        },
        4108: {
            n: "AttachedLabel",
            f: oo
        },
        4109: {
            n: "SeriesText",
            f: uo
        },
        4116: {
            n: "ChartFormat",
            f: ho
        },
        4117: {
            n: "Legend",
            f: vo
        },
        4118: {
            n: "SeriesList",
            f: bo
        },
        4119: {
            n: "Bar",
            f: po
        },
        4120: {
            n: "Line",
            f: mo
        },
        4121: {
            n: "Pie",
            f: go
        },
        4122: {
            n: "Area",
            f: Eo
        },
        4123: {
            n: "Scatter",
            f: So
        },
        4124: {
            n: "CrtLine",
            f: ko
        },
        4125: {
            n: "Axis",
            f: Bo
        },
        4126: {
            n: "Tick",
            f: Co
        },
        4127: {
            n: "ValueRange",
            f: To
        },
        4128: {
            n: "CatSerRange",
            f: wo
        },
        4129: {
            n: "AxisLine",
            f: Io
        },
        4130: {
            n: "CrtLink",
            f: Ao
        },
        4132: {
            n: "DefaultText",
            f: Ro
        },
        4133: {
            n: "Text",
            f: xo
        },
        4134: {
            n: "FontX",
            f: Zs
        },
        4135: {
            n: "ObjectLink",
            f: Do
        },
        4146: {
            n: "Frame",
            f: Oo
        },
        4147: {
            n: "Begin",
            f: Fo
        },
        4148: {
            n: "End",
            f: Po
        },
        4149: {
            n: "PlotArea",
            f: yo
        },
        4154: {
            n: "Chart3d",
            f: No
        },
        4156: {
            n: "PicF",
            f: _o
        },
        4157: {
            n: "DropBar",
            f: Mo
        },
        4158: {
            n: "Radar",
            f: Lo
        },
        4159: {
            n: "Surf",
            f: Uo
        },
        4160: {
            n: "RadarArea",
            f: Ho
        },
        4161: {
            n: "AxisParent",
            f: Vo
        },
        4163: {
            n: "LegendException",
            f: Wo
        },
        4164: {
            n: "ShtProps",
            f: As
        },
        4165: {
            n: "SerToCrt",
            f: Xo
        },
        4166: {
            n: "AxesUsed",
            f: Go
        },
        4168: {
            n: "SBaseRef",
            f: jo
        },
        4170: {
            n: "SerParent",
            f: zo
        },
        4171: {
            n: "SerAuxTrend",
            f: Ko
        },
        4174: {
            n: "IFmtRecord",
            f: Yo
        },
        4175: {
            n: "Pos",
            f: $o
        },
        4176: {
            n: "AlRuns",
            f: Qo
        },
        4177: {
            n: "BRAI",
            f: Zo
        },
        4187: {
            n: "SerAuxErrBar",
            f: qo
        },
        4188: {
            n: "ClrtClient",
            f: Bs
        },
        4189: {
            n: "SerFmt",
            f: Jo
        },
        4191: {
            n: "Chart3DBarShape",
            f: eu
        },
        4192: {
            n: "Fbi",
            f: ru
        },
        4193: {
            n: "BopPop",
            f: tu
        },
        4194: {
            n: "AxcExt",
            f: au
        },
        4195: {
            n: "Dat",
            f: nu
        },
        4196: {
            n: "PlotGrowth",
            f: su
        },
        4197: {
            n: "SIIndex",
            f: iu
        },
        4198: {
            n: "GelFrame",
            f: fu
        },
        4199: {
            n: "BopPopCustom",
            f: cu
        },
        4200: {
            n: "Fbi2",
            f: lu
        },
        0: {
            n: "Dimensions",
            f: zn
        },
        2: {
            n: "BIFF2INT",
            f: vu
        },
        5: {
            n: "BoolErr",
            f: rs
        },
        7: {
            n: "String",
            f: bu
        },
        8: {
            n: "BIFF2ROW",
            f: ur
        },
        11: {
            n: "Index",
            f: Fc
        },
        22: {
            n: "ExternCount",
            f: ur
        },
        30: {
            n: "BIFF2FORMAT",
            f: jn
        },
        31: {
            n: "BIFF2FMTCNT",
            f: ur
        },
        32: {
            n: "BIFF2COLINFO",
            f: ur
        },
        33: {
            n: "Array",
            f: os
        },
        37: {
            n: "DefaultRowHeight",
            f: Un
        },
        50: {
            n: "BIFF2FONTXTRA",
            f: pu
        },
        62: {
            n: "BIFF2WINDOW2",
            f: ur
        },
        69: {
            n: "BIFF2FONTCLR",
            f: ur
        },
        86: {
            n: "BIFF4FMTCNT",
            f: ur
        },
        126: {
            n: "RK",
            f: ur
        },
        127: {
            n: "ImData",
            f: ou
        },
        135: {
            n: "Addin",
            f: ur
        },
        136: {
            n: "Edg",
            f: ur
        },
        137: {
            n: "Pub",
            f: ur
        },
        145: {
            n: "Sub",
            f: ur
        },
        148: {
            n: "LHRecord",
            f: ur
        },
        149: {
            n: "LHNGraph",
            f: ur
        },
        150: {
            n: "Sound",
            f: ur
        },
        169: {
            n: "CoordList",
            f: ur
        },
        171: {
            n: "GCW",
            f: ur
        },
        188: {
            n: "ShrFmla",
            f: ur
        },
        194: {
            n: "AddMenu",
            f: ur
        },
        195: {
            n: "DelMenu",
            f: ur
        },
        214: {
            n: "RString",
            f: mu
        },
        223: {
            n: "UDDesc",
            f: ur
        },
        234: {
            n: "TabIdConf",
            f: ur
        },
        354: {
            n: "XL5Modify",
            f: ur
        },
        421: {
            n: "FileSharing2",
            f: ur
        },
        521: {
            n: "BOF",
            f: xn
        },
        536: {
            n: "Lbl",
            f: is
        },
        547: {
            n: "ExternName",
            f: ss
        },
        561: {
            n: "Font",
            f: ur
        },
        1033: {
            n: "BOF",
            f: xn
        },
        2157: {
            n: "FeatInfo",
            f: ur
        },
        2163: {
            n: "FeatInfo11",
            f: ur
        },
        2177: {
            n: "SXAddl12",
            f: ur
        },
        2240: {
            n: "AutoWebPub",
            f: ur
        },
        2241: {
            n: "ListObj",
            f: ur
        },
        2242: {
            n: "ListField",
            f: ur
        },
        2243: {
            n: "ListDV",
            f: ur
        },
        2244: {
            n: "ListCondFmt",
            f: ur
        },
        2245: {
            n: "ListCF",
            f: ur
        },
        2246: {
            n: "FMQry",
            f: ur
        },
        2247: {
            n: "FMSQry",
            f: ur
        },
        2248: {
            n: "PLV",
            f: ur
        },
        2249: {
            n: "LnExt",
            f: ur
        },
        2250: {
            n: "MkrExt",
            f: ur
        },
        2251: {
            n: "CrtCoopt",
            f: ur
        },
        67: {
            n: "BIFF2XF",
            f: ur
        },
        579: {
            n: "BIFF3XF",
            f: ur
        },
        1091: {
            n: "BIFF4XF",
            f: ur
        },
        29282: {}
    };
    function Jg(e, r, t, a) {
        var n = a || (t || []).length;
        var s = e.next(4 + n);
        s.write_shift(2, r);
        s.write_shift(2, n);
        if (n > 0 && Qe(t))
            e.push(t)
    }
    function eE(e, r) {
        if (r.bookType != "biff2")
            throw "unsupported BIFF version";
        var t = vr(4);
        t.write_shift(2, 2);
        t.write_shift(2, 16);
        return t
    }
    function rE(e, r, t) {
        if (!e)
            e = vr(7);
        e.write_shift(2, r);
        e.write_shift(2, t);
        e.write_shift(1, 0);
        e.write_shift(1, 0);
        e.write_shift(1, 0);
        return e
    }
    function tE(e, r, t) {
        var a = vr(9);
        rE(a, e, r);
        a.write_shift(2, t);
        return a
    }
    function aE(e, r, t) {
        var a = vr(15);
        rE(a, e, r);
        a.write_shift(8, t, "f");
        return a
    }
    function nE(e, r, t, a) {
        var n = vr(9);
        rE(n, e, r);
        if (a == "e") {
            n.write_shift(1, t);
            n.write_shift(1, 1)
        } else {
            n.write_shift(1, t ? 1 : 0);
            n.write_shift(1, 0)
        }
        return n
    }
    function sE(e, r, t) {
        var a = vr(8 + 2 * t.length);
        rE(a, e, r);
        a.write_shift(1, t.length);
        a.write_shift(t.length, t, "sbcs");
        return a.l < a.length ? a.slice(0, a.l) : a
    }
    function iE(e, r, t, a, n) {
        if (r.v != null)
            switch (r.t) {
            case "d":
            case "n":
                var s = r.t == "d" ? R(r.v) : r.v;
                if (s == (s | 0) && s >= 0 && s < 65536)
                    Jg(e, 2, tE(t, a, s));
                else
                    Jg(e, 3, aE(t, a, s));
                return;
            case "b":
            case "e":
                Jg(e, 5, nE(t, a, r.v, r.t));
                return;
            case "s":
            case "str":
                Jg(e, 4, sE(t, a, r.v));
                return
            }
        Jg(e, 1, rE(null, t, a))
    }
    function fE(e, r, t, a, n) {
        var s = Array.isArray(r);
        var i = Ur(r["!ref"] || "A1"), f, c = "", l = [];
        for (var o = i.s.r; o <= i.e.r; ++o) {
            c = wr(o);
            for (var u = i.s.c; u <= i.e.c; ++u) {
                if (o === i.s.r)
                    l[u] = xr(u);
                f = l[u] + c;
                var h = s ? r[o][u] : r[f];
                if (!h)
                    continue;
                iE(e, h, o, u, a)
            }
        }
    }
    function cE(e, r) {
        var t = r || {};
        if (c != null && t.dense == null)
            t.dense = c;
        var a = pr();
        var n = 0;
        for (var s = 0; s < e.SheetNames.length; ++s)
            if (e.SheetNames[s] == t.sheet)
                n = s;
        if (n == 0 && !!t.sheet && e.SheetNames[0] != t.sheet)
            throw new Error("Sheet not found: " + t.sheet);
        Jg(a, 9, eE(e, t));
        fE(a, e.Sheets[e.SheetNames[n]], n, t, e);
        Jg(a, 10);
        return a.end()
    }
    var lE = function() {
        function e(e, r) {
            var t = r || {};
            if (c != null && t.dense == null)
                t.dense = c;
            var a = t.dense ? [] : {};
            var n = e.indexOf("<table")
              , s = e.indexOf("</table");
            if (n == -1 || s == -1)
                throw new Error("Invalid HTML: missing <table> / </table> pair");
            var i = e.slice(n, s).split(/(:?<tr[^>]*>)/);
            var f = -1
              , l = 0
              , o = 0
              , u = 0;
            var h = {
                s: {
                    r: 1e7,
                    c: 1e7
                },
                e: {
                    r: 0,
                    c: 0
                }
            };
            var d = []
              , v = 0;
            for (n = 0; n < i.length; ++n) {
                var b = i[n].trim();
                if (b.substr(0, 3) == "<tr") {
                    ++f;
                    l = 0;
                    continue
                }
                if (b.substr(0, 3) != "<td")
                    continue;
                var p = b.split("</td>");
                for (s = 0; s < p.length; ++s) {
                    var m = p[s].trim();
                    if (m.substr(0, 3) != "<td")
                        continue;
                    var g = m
                      , E = 0;
                    while (g.charAt(0) == "<" && (E = g.indexOf(">")) > -1)
                        g = g.slice(E + 1);
                    while (g.indexOf(">") > -1)
                        g = g.slice(0, g.lastIndexOf("<"));
                    var S = q(m.slice(0, m.indexOf(">")));
                    u = S.colspan ? +S.colspan : 1;
                    if ((o = +S.rowspan) > 0 || u > 1)
                        d.push({
                            s: {
                                r: f,
                                c: l
                            },
                            e: {
                                r: f + (o || 1) - 1,
                                c: l + u - 1
                            }
                        });
                    if (!g.length) {
                        l += u;
                        continue
                    }
                    g = te(g).replace(/[\r\n]/g, "");
                    if (h.s.r > f)
                        h.s.r = f;
                    if (h.e.r < f)
                        h.e.r = f;
                    if (h.s.c > l)
                        h.s.c = l;
                    if (h.e.c < l)
                        h.e.c = l;
                    if (t.dense) {
                        if (!a[f])
                            a[f] = [];
                        if (Number(g) == Number(g))
                            a[f][l] = {
                                t: "n",
                                v: +g
                            };
                        else
                            a[f][l] = {
                                t: "s",
                                v: g
                            }
                    } else {
                        var k = yr({
                            r: f,
                            c: l
                        });
                        if (Number(g) == Number(g))
                            a[k] = {
                                t: "n",
                                v: +g
                            };
                        else
                            a[k] = {
                                t: "s",
                                v: g
                            }
                    }
                    l += u
                }
            }
            a["!ref"] = Lr(h);
            return a
        }
        function r(r, t) {
            return Wr(e(r, t), t)
        }
        function t(e, r, t, a) {
            var n = e["!merges"] || [];
            var s = [];
            for (var i = r.s.c; i <= r.e.c; ++i) {
                var f = 0
                  , c = 0;
                for (var l = 0; l < n.length; ++l) {
                    if (n[l].s.r > t || n[l].s.c > i)
                        continue;
                    if (n[l].e.r < t || n[l].e.c < i)
                        continue;
                    if (n[l].s.r < t || n[l].s.c < i) {
                        f = -1;
                        break
                    }
                    f = n[l].e.r - n[l].s.r + 1;
                    c = n[l].e.c - n[l].s.c + 1;
                    break
                }
                if (f < 0)
                    continue;
                var o = yr({
                    r: t,
                    c: i
                });
                var u = a.dense ? (e[t] || [])[i] : e[o];
                if (!u || u.v == null) {
                    s.push("<td></td>");
                    continue
                }
                var h = u.h || se(u.w || (Vr(u),
                u.w) || "");
                var d = {};
                if (f > 1)
                    d.rowspan = f;
                if (c > 1)
                    d.colspan = c;
                s.push(Te("td", h, d))
            }
            return "<tr>" + s.join("") + "</tr>"
        }
        function a(e, r) {
            var a = [];
            var n = Mr(e["!ref"]);
            a.dense = Array.isArray(e);
            for (var s = n.s.r; s <= n.e.r; ++s)
                a.push(t(e, n, s, a));
            return "<html><body><table>" + a.join("") + "</table></body></html>"
        }
        return {
            to_workbook: r,
            to_sheet: e,
            _row: t,
            from_sheet: a
        }
    }();
    function oE(e, r) {
        var t = r || {};
        if (c != null)
            t.dense = c;
        var a = t.dense ? [] : {};
        var n = e.getElementsByTagName("tr");
        var s = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: n.length - 1,
                c: 0
            }
        };
        var i = []
          , f = 0;
        var l = 0
          , o = 0
          , u = 0
          , h = 0
          , d = 0;
        for (; l < n.length; ++l) {
            var v = n[l];
            var b = v.children;
            for (o = u = 0; o < b.length; ++o) {
                var p = b[o]
                  , m = b[o].innerText;
                for (f = 0; f < i.length; ++f) {
                    var g = i[f];
                    if (g.s.c == u && g.s.r <= l && l <= g.e.r) {
                        u = g.e.c + 1;
                        f = -1
                    }
                }
                d = +p.getAttribute("colspan") || 1;
                if ((h = +p.getAttribute("rowspan")) > 0 || d > 1)
                    i.push({
                        s: {
                            r: l,
                            c: u
                        },
                        e: {
                            r: l + (h || 1) - 1,
                            c: u + d - 1
                        }
                    });
                var E = {
                    t: "s",
                    v: m
                };
                if (m != null && m.length && !isNaN(Number(m)))
                    E = {
                        t: "n",
                        v: Number(m)
                    };
                if (t.dense) {
                    if (!a[l])
                        a[l] = [];
                    a[l][u] = E
                } else
                    a[yr({
                        c: u,
                        r: l
                    })] = E;
                if (s.e.c < u)
                    s.e.c = u;
                u += d
            }
        }
        a["!merges"] = i;
        a["!ref"] = Lr(s);
        return a
    }
    function uE(e, r) {
        return Wr(oE(e, r), r)
    }
    var hE = function() {
        var e = function(e, r) {
            return te(e.replace(/<text:s\/>/g, " ").replace(/<[^>]*>/g, ""))
        };
        var r = {
            day: ["d", "dd"],
            month: ["m", "mm"],
            year: ["y", "yy"],
            hours: ["h", "hh"],
            minutes: ["m", "mm"],
            seconds: ["s", "ss"],
            "am-pm": ["A/P", "AM/PM"],
            "day-of-week": ["ddd", "dddd"]
        };
        return function t(a, n) {
            var s = n || {};
            if (c != null && s.dense == null)
                s.dense = c;
            var i = xg(a);
            var f = [], l;
            var o;
            var u = {
                name: ""
            }
              , h = ""
              , d = 0;
            var v;
            var b;
            var p = {}
              , m = [];
            var g = s.dense ? [] : {};
            var E, S;
            var k = {
                value: ""
            };
            var B = "", C = 0, T;
            var w = -1
              , I = -1
              , A = {
                s: {
                    r: 1e6,
                    c: 1e7
                },
                e: {
                    r: 0,
                    c: 0
                }
            };
            var x = {};
            var O = []
              , F = {}
              , y = 0
              , N = 0;
            var M = [];
            var L = []
              , U = {};
            var H = ""
              , V = 0;
            var W = 1
              , X = false;
            var G = 0;
            Dg.lastIndex = 0;
            i = i.replace(/<!--([^\u2603]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
            while (E = Dg.exec(i))
                switch (E[3] = E[3].replace(/_.*$/, "")) {
                case "table":
                case "工作表":
                    if (E[1] === "/") {
                        if (A.e.c >= A.s.c && A.e.r >= A.s.r)
                            g["!ref"] = Lr(A);
                        if (O.length)
                            g["!merges"] = O;
                        v.name = he(v["名称"] || v.name);
                        m.push(v.name);
                        p[v.name] = g
                    } else if (E[0].charAt(E[0].length - 2) !== "/") {
                        v = q(E[0], false);
                        w = I = -1;
                        A.s.r = A.s.c = 1e7;
                        A.e.r = A.e.c = 0;
                        g = s.dense ? [] : {};
                        O = []
                    }
                    break;
                case "table-row":
                case "行":
                    if (E[1] === "/")
                        break;
                    b = q(E[0], false);
                    if (b["行号"])
                        w = b["行号"] - 1;
                    else
                        ++w;
                    I = -1;
                    break;
                case "covered-table-cell":
                    ++I;
                    if (s.sheetStubs) {
                        if (s.dense) {
                            if (!g[w])
                                g[w] = [];
                            g[w][I] = {
                                t: "z"
                            }
                        } else
                            g[yr({
                                r: w,
                                c: I
                            })] = {
                                t: "z"
                            }
                    }
                    break;
                case "table-cell":
                case "数据":
                    if (E[0].charAt(E[0].length - 2) === "/") {
                        k = q(E[0], false);
                        if (k["number-columns-repeated"])
                            I += parseInt(k["number-columns-repeated"], 10);
                        else
                            ++I
                    } else if (E[1] !== "/") {
                        ++I;
                        W = 1;
                        if (I > A.e.c)
                            A.e.c = I;
                        if (w > A.e.r)
                            A.e.r = w;
                        if (I < A.s.c)
                            A.s.c = I;
                        if (w < A.s.r)
                            A.s.r = w;
                        k = q(E[0], false);
                        L = [];
                        U = {};
                        S = {
                            t: k["数据类型"] || k["value-type"],
                            v: null
                        };
                        if (s.cellFormula) {
                            if (k.formula)
                                k.formula = te(k.formula);
                            if (k["number-matrix-columns-spanned"] && k["number-matrix-rows-spanned"]) {
                                y = parseInt(k["number-matrix-rows-spanned"], 10) || 0;
                                N = parseInt(k["number-matrix-columns-spanned"], 10) || 0;
                                F = {
                                    s: {
                                        r: w,
                                        c: I
                                    },
                                    e: {
                                        r: w + y - 1,
                                        c: I + N - 1
                                    }
                                };
                                S.F = Lr(F);
                                M.push([F, S.F])
                            }
                            if (k.formula)
                                S.f = zb(k.formula);
                            else
                                for (G = 0; G < M.length; ++G)
                                    if (w >= M[G][0].s.r && w <= M[G][0].e.r)
                                        if (I >= M[G][0].s.c && I <= M[G][0].e.c)
                                            S.F = M[G][1]
                        }
                        if (k["number-columns-spanned"] || k["number-rows-spanned"]) {
                            y = parseInt(k["number-rows-spanned"], 10) || 0;
                            N = parseInt(k["number-columns-spanned"], 10) || 0;
                            F = {
                                s: {
                                    r: w,
                                    c: I
                                },
                                e: {
                                    r: w + y - 1,
                                    c: I + N - 1
                                }
                            };
                            O.push(F)
                        }
                        if (k["number-columns-repeated"])
                            W = parseInt(k["number-columns-repeated"], 10);
                        switch (S.t) {
                        case "boolean":
                            S.t = "b";
                            S.v = ue(k["boolean-value"]);
                            break;
                        case "float":
                            S.t = "n";
                            S.v = parseFloat(k.value);
                            break;
                        case "percentage":
                            S.t = "n";
                            S.v = parseFloat(k.value);
                            break;
                        case "currency":
                            S.t = "n";
                            S.v = parseFloat(k.value);
                            break;
                        case "date":
                            S.t = "d";
                            S.v = P(k["date-value"]);
                            if (!s.cellDates) {
                                S.t = "n";
                                S.v = R(S.v)
                            }
                            S.z = "m/d/yy";
                            break;
                        case "time":
                            S.t = "n";
                            S.v = D(k["time-value"]) / 86400;
                            break;
                        case "number":
                            S.t = "n";
                            S.v = parseFloat(k["数据数值"]);
                            break;
                        default:
                            if (S.t === "string" || S.t === "text" || !S.t) {
                                S.t = "s";
                                if (k["string-value"] != null)
                                    B = te(k["string-value"])
                            } else
                                throw new Error("Unsupported value type " + S.t)
                        }
                    } else {
                        X = false;
                        if (S.t === "s") {
                            S.v = B || "";
                            X = C == 0
                        }
                        if (L.length > 0) {
                            S.c = L;
                            L = []
                        }
                        if (B && s.cellText !== false)
                            S.w = B;
                        if (!X || s.sheetStubs) {
                            if (!(s.sheetRows && s.sheetRows < w)) {
                                if (s.dense) {
                                    if (!g[w])
                                        g[w] = [];
                                    g[w][I] = S;
                                    while (--W > 0)
                                        g[w][++I] = _(S)
                                } else {
                                    g[yr({
                                        r: w,
                                        c: I
                                    })] = S;
                                    while (--W > 0)
                                        g[yr({
                                            r: w,
                                            c: ++I
                                        })] = _(S)
                                }
                                if (A.e.c <= I)
                                    A.e.c = I
                            }
                        } else {
                            I += W;
                            W = 0
                        }
                        S = {};
                        B = ""
                    }
                    break;
                case "document":
                case "document-content":
                case "电子表格文档":
                case "spreadsheet":
                case "主体":
                case "scripts":
                case "styles":
                case "font-face-decls":
                    if (E[1] === "/") {
                        if ((l = f.pop())[0] !== E[3])
                            throw "Bad state: " + l
                    } else if (E[0].charAt(E[0].length - 2) !== "/")
                        f.push([E[3], true]);
                    break;
                case "annotation":
                    if (E[1] === "/") {
                        if ((l = f.pop())[0] !== E[3])
                            throw "Bad state: " + l;
                        U.t = B;
                        U.a = H;
                        L.push(U)
                    } else if (E[0].charAt(E[0].length - 2) !== "/") {
                        f.push([E[3], false])
                    }
                    H = "";
                    V = 0;
                    B = "";
                    C = 0;
                    break;
                case "creator":
                    if (E[1] === "/") {
                        H = i.slice(V, E.index)
                    } else
                        V = E.index + E[0].length;
                    break;
                case "meta":
                case "元数据":
                case "settings":
                case "config-item-set":
                case "config-item-map-indexed":
                case "config-item-map-entry":
                case "config-item-map-named":
                case "shapes":
                case "frame":
                case "text-box":
                case "image":
                case "data-pilot-tables":
                case "list-style":
                case "form":
                case "dde-links":
                case "event-listeners":
                    if (E[1] === "/") {
                        if ((l = f.pop())[0] !== E[3])
                            throw "Bad state: " + l
                    } else if (E[0].charAt(E[0].length - 2) !== "/")
                        f.push([E[3], false]);
                    B = "";
                    C = 0;
                    break;
                case "scientific-number":
                    break;
                case "currency-symbol":
                    break;
                case "currency-style":
                    break;
                case "number-style":
                case "percentage-style":
                case "date-style":
                case "time-style":
                    if (E[1] === "/") {
                        x[u.name] = h;
                        if ((l = f.pop())[0] !== E[3])
                            throw "Bad state: " + l
                    } else if (E[0].charAt(E[0].length - 2) !== "/") {
                        h = "";
                        u = q(E[0], false);
                        f.push([E[3], true])
                    }
                    break;
                case "script":
                    break;
                case "libraries":
                    break;
                case "automatic-styles":
                    break;
                case "master-styles":
                    break;
                case "default-style":
                case "page-layout":
                    break;
                case "style":
                    break;
                case "map":
                    break;
                case "font-face":
                    break;
                case "paragraph-properties":
                    break;
                case "table-properties":
                    break;
                case "table-column-properties":
                    break;
                case "table-row-properties":
                    break;
                case "table-cell-properties":
                    break;
                case "number":
                    switch (f[f.length - 1][0]) {
                    case "time-style":
                    case "date-style":
                        o = q(E[0], false);
                        h += r[E[3]][o.style === "long" ? 1 : 0];
                        break
                    }
                    break;
                case "fraction":
                    break;
                case "day":
                case "month":
                case "year":
                case "era":
                case "day-of-week":
                case "week-of-year":
                case "quarter":
                case "hours":
                case "minutes":
                case "seconds":
                case "am-pm":
                    switch (f[f.length - 1][0]) {
                    case "time-style":
                    case "date-style":
                        o = q(E[0], false);
                        h += r[E[3]][o.style === "long" ? 1 : 0];
                        break
                    }
                    break;
                case "boolean-style":
                    break;
                case "boolean":
                    break;
                case "text-style":
                    break;
                case "text":
                    if (E[0].slice(-2) === "/>")
                        break;
                    else if (E[1] === "/")
                        switch (f[f.length - 1][0]) {
                        case "number-style":
                        case "date-style":
                        case "time-style":
                            h += i.slice(d, E.index);
                            break
                        }
                    else
                        d = E.index + E[0].length;
                    break;
                case "text-content":
                    break;
                case "text-properties":
                    break;
                case "body":
                case "电子表格":
                    break;
                case "forms":
                    break;
                case "table-column":
                    break;
                case "null-date":
                    break;
                case "graphic-properties":
                    break;
                case "calculation-settings":
                    break;
                case "named-expressions":
                    break;
                case "named-range":
                    break;
                case "named-expression":
                    break;
                case "sort":
                    break;
                case "sort-by":
                    break;
                case "sort-groups":
                    break;
                case "span":
                    break;
                case "line-break":
                    break;
                case "p":
                case "文本串":
                    if (E[1] === "/")
                        B = (B.length > 0 ? B + "\n" : "") + e(i.slice(C, E.index), T);
                    else {
                        T = q(E[0], false);
                        C = E.index + E[0].length
                    }
                    break;
                case "database-range":
                    if (E[1] === "/")
                        break;
                    try {
                        var j = Yb(q(E[0])["target-range-address"]);
                        p[j[0]]["!autofilter"] = {
                            ref: j[1]
                        }
                    } catch (e) {}
                    break;
                case "s":
                    break;
                case "date":
                    break;
                case "object":
                    break;
                case "title":
                case "标题":
                    break;
                case "desc":
                    break;
                case "table-source":
                    break;
                case "iteration":
                    break;
                case "content-validations":
                    break;
                case "content-validation":
                    break;
                case "error-message":
                    break;
                case "database-ranges":
                    break;
                case "filter":
                    break;
                case "filter-and":
                    break;
                case "filter-or":
                    break;
                case "filter-condition":
                    break;
                case "list-level-style-bullet":
                    break;
                case "list-level-style-number":
                    break;
                case "list-level-properties":
                    break;
                case "sender-firstname":
                case "sender-lastname":
                case "sender-initials":
                case "sender-title":
                case "sender-position":
                case "sender-email":
                case "sender-phone-private":
                case "sender-fax":
                case "sender-company":
                case "sender-phone-work":
                case "sender-street":
                case "sender-city":
                case "sender-postal-code":
                case "sender-country":
                case "sender-state-or-province":
                case "author-name":
                case "author-initials":
                case "chapter":
                case "file-name":
                case "template-name":
                case "sheet-name":
                    break;
                case "event-listener":
                    break;
                case "initial-creator":
                case "creation-date":
                case "generator":
                case "document-statistic":
                case "user-defined":
                    break;
                case "config-item":
                    break;
                case "page-number":
                    break;
                case "page-count":
                    break;
                case "time":
                    break;
                case "data-pilot-table":
                case "source-cell-range":
                case "source-service":
                case "data-pilot-field":
                case "data-pilot-level":
                case "data-pilot-subtotals":
                case "data-pilot-subtotal":
                case "data-pilot-members":
                case "data-pilot-member":
                case "data-pilot-display-info":
                case "data-pilot-sort-info":
                case "data-pilot-layout-info":
                case "data-pilot-field-reference":
                case "data-pilot-groups":
                case "data-pilot-group":
                case "data-pilot-group-member":
                    break;
                case "rect":
                    break;
                case "dde-connection-decls":
                case "dde-connection-decl":
                case "dde-link":
                case "dde-source":
                    break;
                case "properties":
                    break;
                case "property":
                    break;
                case "a":
                    break;
                case "table-protection":
                    break;
                case "data-pilot-grand-total":
                    break;
                default:
                    if (E[2] === "dc:")
                        break;
                    if (E[2] === "draw:")
                        break;
                    if (E[2] === "style:")
                        break;
                    if (E[2] === "calcext:")
                        break;
                    if (E[2] === "loext:")
                        break;
                    if (E[2] === "uof:")
                        break;
                    if (E[2] === "表:")
                        break;
                    if (E[2] === "字:")
                        break;
                    if (s.WTF)
                        throw new Error(E)
                }
            var z = {
                Sheets: p,
                SheetNames: m
            };
            return z
        }
    }();
    var dE = function() {
        var e = "          <table:table-cell />\n";
        var r = "          <table:covered-table-cell/>\n";
        var t = function(t, a, n, s) {
            var i = [];
            i.push('      <table:table table:name="' + se(a.SheetNames[n]) + '">\n');
            var f = 0
              , c = 0
              , l = Mr(t["!ref"]);
            var o = t["!merges"] || []
              , u = 0;
            var h = Array.isArray(t);
            for (f = 0; f < l.s.r; ++f)
                i.push("        <table:table-row></table:table-row>\n");
            for (; f <= l.e.r; ++f) {
                i.push("        <table:table-row>\n");
                for (c = 0; c < l.s.c; ++c)
                    i.push(e);
                for (; c <= l.e.c; ++c) {
                    var d = false
                      , v = {}
                      , b = "";
                    for (u = 0; u != o.length; ++u) {
                        if (o[u].s.c > c)
                            continue;
                        if (o[u].s.r > f)
                            continue;
                        if (o[u].e.c < c)
                            continue;
                        if (o[u].e.r < f)
                            continue;
                        if (o[u].s.c != c || o[u].s.r != f)
                            d = true;
                        v["table:number-columns-spanned"] = o[u].e.c - o[u].s.c + 1;
                        v["table:number-rows-spanned"] = o[u].e.r - o[u].s.r + 1;
                        break
                    }
                    if (d) {
                        i.push(r);
                        continue
                    }
                    var p = yr({
                        r: f,
                        c: c
                    })
                      , m = h ? (t[f] || [])[c] : t[p];
                    if (m && m.f) {
                        v["table:formula"] = se(Kb(m.f));
                        if (m.F) {
                            if (m.F.substr(0, p.length) == p) {
                                var g = Mr(m.F);
                                v["table:number-matrix-columns-spanned"] = g.e.c - g.s.c + 1;
                                v["table:number-matrix-rows-spanned"] = g.e.r - g.s.r + 1
                            }
                        }
                    }
                    if (!m) {
                        i.push(e);
                        continue
                    }
                    switch (m.t) {
                    case "b":
                        b = m.v ? "TRUE" : "FALSE";
                        v["office:value-type"] = "boolean";
                        v["office:boolean-value"] = m.v ? "true" : "false";
                        break;
                    case "n":
                        b = m.w || String(m.v || 0);
                        v["office:value-type"] = "float";
                        v["office:value"] = m.v || 0;
                        break;
                    case "s":
                    case "str":
                        b = se(m.v);
                        v["office:value-type"] = "string";
                        break;
                    case "d":
                        b = m.w || P(m.v).toISOString();
                        v["office:value-type"] = "date";
                        v["office:date-value"] = P(m.v).toISOString();
                        v["table:style-name"] = "ce1";
                        break;
                    default:
                        i.push(e);
                        continue
                    }
                    i.push(Te("table:table-cell", Te("text:p", b, {}), v))
                }
                i.push("        </table:table-row>\n")
            }
            i.push("      </table:table>\n");
            return i.join("")
        };
        var a = function(e) {
            e.push(" <office:automatic-styles>\n");
            e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n');
            e.push('   <number:month number:style="long"/>\n');
            e.push("   <number:text>/</number:text>\n");
            e.push('   <number:day number:style="long"/>\n');
            e.push("   <number:text>/</number:text>\n");
            e.push("   <number:year/>\n");
            e.push("  </number:date-style>\n");
            e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n');
            e.push(" </office:automatic-styles>\n")
        };
        return function e(r, n) {
            var s = [Ae];
            var i = Ce({
                "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                "xmlns:ooo": "http://openoffice.org/2004/office",
                "xmlns:ooow": "http://openoffice.org/2004/writer",
                "xmlns:oooc": "http://openoffice.org/2004/calc",
                "xmlns:dom": "http://www.w3.org/2001/xml-events",
                "xmlns:xforms": "http://www.w3.org/2002/xforms",
                "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                "xmlns:rpt": "http://openoffice.org/2005/report",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                "xmlns:tableooo": "http://openoffice.org/2009/table",
                "xmlns:drawooo": "http://openoffice.org/2010/draw",
                "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                "office:version": "1.2"
            });
            var f = Ce({
                "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
            });
            if (n.bookType == "fods")
                s.push("<office:document" + i + f + ">\n");
            else
                s.push("<office:document-content" + i + ">\n");
            a(s);
            s.push("  <office:body>\n");
            s.push("    <office:spreadsheet>\n");
            for (var c = 0; c != r.SheetNames.length; ++c)
                s.push(t(r.Sheets[r.SheetNames[c]], r, c, n));
            s.push("    </office:spreadsheet>\n");
            s.push("  </office:body>\n");
            if (n.bookType == "fods")
                s.push("</office:document>");
            else
                s.push("</office:document-content>");
            return s.join("")
        }
    }();
    function vE(e) {
        return function r(t, a) {
            var n = 0;
            for (var s = 0; s < t.SheetNames.length; ++s)
                if (t.SheetNames[s] == a.sheet)
                    n = s;
            if (n == 0 && !!a.sheet && t.SheetNames[0] != a.sheet)
                throw new Error("Sheet not found: " + a.sheet);
            return e.from_sheet(t.Sheets[t.SheetNames[n]], a)
        }
    }
    var bE = vE(lE);
    var pE = vE({
        from_sheet: ZE
    });
    var mE = vE(Eu);
    var gE = vE(Su);
    var EE = vE(ku);
    var SE = vE({
        from_sheet: qE
    });
    function kE(e, r) {
        r = r || {};
        var t = !!V(e, "objectdata");
        if (t)
            var a = aa(X(e, "META-INF/manifest.xml"), r);
        var n = G(e, "content.xml");
        if (!n)
            throw new Error("Missing content.xml in " + (t ? "ODS" : "UOF") + " file");
        return hE(t ? n : he(n), r)
    }
    function BE(e, r) {
        return hE(e, r)
    }
    function CE(e, r) {
        if (r.bookType == "fods")
            return dE(e, r);
        var t = new z;
        var a = "";
        var n = [];
        var s = [];
        a = "mimetype";
        t.file(a, "application/vnd.oasis.opendocument.spreadsheet");
        a = "content.xml";
        t.file(a, dE(e, r));
        n.push([a, "text/xml"]);
        s.push([a, "ContentFile"]);
        a = "manifest.rdf";
        t.file(a, fa(s, r));
        n.push([a, "application/rdf+xml"]);
        a = "META-INF/manifest.xml";
        t.file(a, na(n, r));
        return t
    }
    function TE(e) {
        return function r(t) {
            for (var a = 0; a != e.length; ++a) {
                var n = e[a];
                if (t[n[0]] === undefined)
                    t[n[0]] = n[1];
                if (n[2] === "n")
                    t[n[0]] = Number(t[n[0]])
            }
        }
    }
    var wE = TE([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]]);
    var IE = TE([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]]);
    function AE(e) {
        if (Qt.WS.indexOf(e) > -1)
            return "sheet";
        if (Qt.CS && e == Qt.CS)
            return "chart";
        if (Qt.DS && e == Qt.DS)
            return "dialog";
        if (Qt.MS && e == Qt.MS)
            return "macro";
        if (!e || !e.length)
            return "sheet";
        return e
    }
    function RE(e, r) {
        if (!e)
            return 0;
        try {
            e = r.map(function r(t) {
                if (!t.id)
                    t.id = t.strRelID;
                return [t.name, e["!id"][t.id].Target, AE(e["!id"][t.id].Type)]
            })
        } catch (e) {
            return null
        }
        return !e || e.length === 0 ? null : e
    }
    function xE(e, r, t, a, n, s, i, f, c, l, o) {
        try {
            n[a] = qt(G(e, t, true), r);
            var u = X(e, r);
            switch (i) {
            case "sheet":
                s[a] = ag(u, r, f, n[a], c, l, o);
                break;
            case "chart":
                var h = ng(u, r, f, n[a], c, l, o);
                s[a] = h;
                if (!h || !h["!chart"])
                    break;
                var d = K(h["!chart"].Target, r);
                var v = Zt(d);
                var b = _d(G(e, d, true), qt(G(e, v, true), d));
                var p = K(b, d);
                var m = Zt(p);
                h = km(G(e, p, true), p, f, qt(G(e, m, true), p), c, h);
                break;
            case "macro":
                s[a] = sg(u, r, f, n[a], c, l, o);
                break;
            case "dialog":
                s[a] = ig(u, r, f, n[a], c, l, o);
                break
            }
        } catch (e) {
            if (f.WTF)
                throw e
        }
    }
    var DE = function e(r) {
        return r.slice(-1) != "/"
    };
    function OE(e, r) {
        g(m);
        r = r || {};
        wE(r);
        a();
        if (V(e, "META-INF/manifest.xml"))
            return kE(e, r);
        if (V(e, "objectdata.xml"))
            return kE(e, r);
        var t = C(e.files).filter(DE).sort();
        var s = zt(G(e, "[Content_Types].xml"), r);
        var i = false;
        var f, c;
        if (s.workbooks.length === 0) {
            c = "xl/workbook.xml";
            if (X(e, c, true))
                s.workbooks.push(c)
        }
        if (s.workbooks.length === 0) {
            c = "xl/workbook.bin";
            if (!W(e, c, true))
                throw new Error("Could not find workbook");
            s.workbooks.push(c);
            i = true
        }
        if (s.workbooks[0].slice(-3) == "bin")
            i = true;
        if (i)
            n(1200);
        var l = {};
        var o = {};
        if (!r.bookSheets && !r.bookProps) {
            $b = [];
            if (s.sst)
                $b = lg(X(e, s.sst.replace(/^\//, "")), s.sst, r);
            if (r.cellStyles && s.themes.length)
                l = cg(G(e, s.themes[0].replace(/^\//, ""), true) || "", s.themes[0], r);
            if (s.style)
                o = fg(X(e, s.style.replace(/^\//, "")), s.style, l, r)
        }
        var u = tg(X(e, s.workbooks[0].replace(/^\//, "")), s.workbooks[0], r);
        var h = {}
          , d = "";
        if (s.coreprops.length !== 0) {
            d = G(e, s.coreprops[0].replace(/^\//, ""), true);
            if (d)
                h = oa(d);
            if (s.extprops.length !== 0) {
                d = G(e, s.extprops[0].replace(/^\//, ""), true);
                if (d)
                    ba(d, h)
            }
        }
        var v = {};
        if (!r.bookSheets || r.bookProps) {
            if (s.custprops.length !== 0) {
                d = G(e, s.custprops[0].replace(/^\//, ""), true);
                if (d)
                    v = Ea(d, r)
            }
        }
        var b = {};
        if (r.bookSheets || r.bookProps) {
            if (u.Sheets)
                f = u.Sheets.map(function e(r) {
                    return r.name
                });
            else if (h.Worksheets && h.SheetNames.length > 0)
                f = h.SheetNames;
            if (r.bookProps) {
                b.Props = h;
                b.Custprops = v
            }
            if (r.bookSheets && typeof f !== "undefined")
                b.SheetNames = f;
            if (r.bookSheets ? b.SheetNames : r.bookProps)
                return b
        }
        f = {};
        var p = {};
        if (r.bookDeps && s.calcchain)
            p = ug(X(e, s.calcchain.replace(/^\//, "")), s.calcchain, r);
        var E = 0;
        var S = {};
        var k, B;
        {
            var T = u.Sheets;
            h.Worksheets = T.length;
            h.SheetNames = [];
            for (var w = 0; w != T.length; ++w) {
                h.SheetNames[w] = T[w].name
            }
        }
        var I = i ? "bin" : "xml";
        var A = "xl/_rels/workbook." + I + ".rels";
        var R = qt(G(e, A, true), A);
        if (R)
            R = RE(R, u.Sheets);
        var x = X(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
        for (E = 0; E != h.Worksheets; ++E) {
            var D = "sheet";
            if (R && R[E]) {
                k = "xl/" + R[E][1].replace(/[\/]?xl\//, "");
                D = R[E][2]
            } else {
                k = "xl/worksheets/sheet" + (E + 1 - x) + "." + I;
                k = k.replace(/sheet0\./, "sheet.")
            }
            B = k.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
            xE(e, k, B, h.SheetNames[E], S, f, D, r, u, l, o)
        }
        if (s.comments)
            Ud(e, s.comments, f, S, r);
        b = {
            Directory: s,
            Workbook: u,
            Props: h,
            Custprops: v,
            Deps: p,
            Sheets: f,
            SheetNames: h.SheetNames,
            Strings: $b,
            Styles: o,
            Themes: l,
            SSF: m.get_table()
        };
        if (r.bookFiles) {
            b.keys = t;
            b.files = e.files
        }
        if (r.bookVBA) {
            if (s.vba.length > 0)
                b.vbaraw = X(e, s.vba[0].replace(/^\//, ""), true);
            else if (s.defaults && s.defaults.bin === "application/vnd.ms-office.vbaProject")
                b.vbaraw = X(e, "xl/vbaProject.bin", true)
        }
        return b
    }
    function FE(e, r) {
        var t = "Version";
        var a = e.find(t);
        if (!a)
            throw new Error("ECMA-376 Encrypted file missing " + t);
        var n = Wu(a.content);
        t = "DataSpaceMap";
        a = e.find(t);
        if (!a)
            throw new Error("ECMA-376 Encrypted file missing " + t);
        var s = Gu(a.content);
        if (s.length != 1 || s[0].comps.length != 1 || s[0].comps[0].t != 0 || s[0].name != "StrongEncryptionDataSpace" || s[0].comps[0].v != "EncryptedPackage")
            throw new Error("ECMA-376 Encrypted file bad " + t);
        t = "StrongEncryptionDataSpace";
        a = e.find(t);
        if (!a)
            throw new Error("ECMA-376 Encrypted file missing " + t);
        var i = ju(a.content);
        if (i.length != 1 || i[0] != "StrongEncryptionTransform")
            throw new Error("ECMA-376 Encrypted file bad " + t);
        t = "!Primary";
        a = e.find(t);
        if (!a)
            throw new Error("ECMA-376 Encrypted file missing " + t);
        var f = Ku(a.content);
        t = "EncryptionInfo";
        a = e.find(t);
        if (!a)
            throw new Error("ECMA-376 Encrypted file missing " + t);
        var c = Qu(a.content);
        throw new Error("File is password-protected")
    }
    function PE(e, r) {
        Md = 1024;
        if (r.bookType == "ods")
            return CE(e, r);
        if (e && !e.SSF) {
            e.SSF = m.get_table()
        }
        if (e && e.SSF) {
            g(m);
            m.load_table(e.SSF);
            r.revssf = I(e.SSF);
            r.revssf[e.SSF[65535]] = 0;
            r.ssf = e.SSF
        }
        r.rels = {};
        r.wbrels = {};
        r.Strings = [];
        r.Strings.Count = 0;
        r.Strings.Unique = 0;
        var t = r.bookType == "xlsb" ? "bin" : "xml";
        var a = r.bookType == "xlsb" || r.bookType == "xlsm";
        var n = {
            workbooks: [],
            sheets: [],
            charts: [],
            dialogs: [],
            macros: [],
            rels: [],
            strs: [],
            comments: [],
            coreprops: [],
            extprops: [],
            custprops: [],
            themes: [],
            styles: [],
            calcchains: [],
            vba: [],
            drawings: [],
            TODO: [],
            xmlns: ""
        };
        IE(r = r || {});
        var s = new z;
        var i = ""
          , f = 0;
        r.cellXfs = [];
        ep(r.cellXfs, {}, {
            revssf: {
                General: 0
            }
        });
        if (!e.Props)
            e.Props = {};
        i = "docProps/core.xml";
        s.file(i, da(e.Props, r));
        n.coreprops.push(i);
        ra(r.rels, 2, i, Qt.CORE_PROPS);
        i = "docProps/app.xml";
        if (e.Props && e.Props.SheetNames) {} else if (!e.Workbook || !e.Workbook.Sheets)
            e.Props.SheetNames = e.SheetNames;
        else
            e.Props.SheetNames = e.SheetNames.map(function(r, t) {
                return [(e.Workbook.Sheets[t] || {}).Hidden != 2, r]
            }).filter(function(e) {
                return e[0]
            }).map(function(e) {
                return e[1]
            });
        e.Props.Worksheets = e.Props.SheetNames.length;
        s.file(i, ma(e.Props, r));
        n.extprops.push(i);
        ra(r.rels, 3, i, Qt.EXT_PROPS);
        if (e.Custprops !== e.Props && C(e.Custprops || {}).length > 0) {
            i = "docProps/custom.xml";
            s.file(i, ka(e.Custprops, r));
            n.custprops.push(i);
            ra(r.rels, 4, i, Qt.CUST_PROPS)
        }
        i = "xl/workbook." + t;
        s.file(i, hg(e, i, r));
        n.workbooks.push(i);
        ra(r.rels, 1, i, Qt.WB);
        for (f = 1; f <= e.SheetNames.length; ++f) {
            var c = {
                "!id": {}
            };
            var l = e.Sheets[e.SheetNames[f - 1]];
            var o = (l || {})["!type"] || "sheet";
            switch (o) {
            case "chart":
            default:
                i = "xl/worksheets/sheet" + f + "." + t;
                s.file(i, dg(f - 1, i, r, e, c));
                n.sheets.push(i);
                ra(r.wbrels, -1, "worksheets/sheet" + f + "." + t, Qt.WS[0])
            }
            if (l) {
                var u = l["!comments"];
                if (u && u.length > 0) {
                    var h = "xl/comments" + f + "." + t;
                    s.file(h, mg(u, h, r));
                    n.comments.push(h);
                    ra(c, -1, "../comments" + f + "." + t, Qt.CMNT)
                }
                if (l["!legacy"]) {
                    s.file("xl/drawings/vmlDrawing" + f + ".vml", Ld(f, l["!comments"]))
                }
                delete l["!comments"];
                delete l["!legacy"]
            }
            if (c["!id"].rId1)
                s.file(Zt(i), ea(c))
        }
        if (r.Strings != null && r.Strings.length > 0) {
            i = "xl/sharedStrings." + t;
            s.file(i, pg(r.Strings, i, r));
            n.strs.push(i);
            ra(r.wbrels, -1, "sharedStrings." + t, Qt.SST)
        }
        i = "xl/theme/theme1.xml";
        s.file(i, Bd(e.Themes, r));
        n.themes.push(i);
        ra(r.wbrels, -1, "theme/theme1.xml", Qt.THEME);
        i = "xl/styles." + t;
        s.file(i, bg(e, i, r));
        n.styles.push(i);
        ra(r.wbrels, -1, "styles." + t, Qt.STY);
        if (e.vbaraw && a) {
            i = "xl/vbaProject.bin";
            s.file(i, e.vbaraw);
            n.vba.push(i);
            ra(r.wbrels, -1, "vbaProject.bin", Qt.VBA)
        }
        s.file("[Content_Types].xml", $t(n, r));
        s.file("_rels/.rels", ea(r.rels));
        s.file("xl/_rels/workbook." + t + ".rels", ea(r.wbrels));
        delete r.revssf;
        delete r.ssf;
        return s
    }
    function yE(e, r) {
        var t = "";
        switch ((r || {}).type || "base64") {
        case "buffer":
            return [e[0], e[1], e[2], e[3]];
        case "base64":
            t = o.decode(e.substr(0, 24));
            break;
        case "binary":
            t = e;
            break;
        case "array":
            return [e[0], e[1], e[2], e[3]];
        default:
            throw new Error("Unrecognized type " + (r ? r.type : "undefined"))
        }
        return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]
    }
    function NE(e, r) {
        if (e.find("EncryptedPackage"))
            return FE(e, r);
        return $g(e, r)
    }
    function _E(e, r) {
        var t, a = e;
        var n = r || {};
        if (!n.type)
            n.type = u && Buffer.isBuffer(e) ? "buffer" : "base64";
        switch (n.type) {
        case "base64":
            t = new z(a,{
                base64: true
            });
            break;
        case "binary":
        case "array":
            t = new z(a,{
                base64: false
            });
            break;
        case "buffer":
            t = new z(a);
            break;
        default:
            throw new Error("Unrecognized type " + n.type)
        }
        return OE(t, n)
    }
    function ME(e, r) {
        var t = e;
        if (r.type == "base64")
            t = o.decode(t);
        t = cptable.utils.decode(1200, t.slice(2));
        r.type = "binary";
        if (t.charCodeAt(0) == 60)
            return Fg(t, r);
        return ku.to_workbook(t, r)
    }
    function LE(e, r) {
        var t, a = e, n = [0];
        var s = r || {};
        Qb = {};
        if (s.dateNF)
            Qb.dateNF = s.dateNF;
        if (!s.type)
            s.type = u && Buffer.isBuffer(e) ? "buffer" : "base64";
        if (s.type == "file") {
            s.type = "buffer";
            a = j.readFileSync(e)
        }
        switch ((n = yE(a, s))[0]) {
        case 208:
            return NE(k.read(a, s), s);
        case 9:
            return $g(d(s.type === "base64" ? o.decode(a) : a), s);
        case 60:
            return Fg(a, s);
        case 73:
            if (n[1] == 68)
                return Eu.to_workbook(a, s);
            break;
        case 84:
            if (n[1] == 65 && n[2] == 66 && n[3] == 76)
                return Su.to_workbook(a, s);
            break;
        case 80:
            if (n[1] == 75 && n[2] < 32 && n[3] < 32)
                return _E(a, s);
            break;
        case 239:
            return Fg(a, s);
        case 255:
            if (n[1] == 254) {
                return ME(a, s)
            }
            break;
        case 0:
            if (n[1] == 0 && n[2] >= 2 && n[3] == 0)
                return Bu.to_workbook(a, s);
            break;
        case 3:
        case 131:
        case 139:
            return gu.to_workbook(a, s)
        }
        if (n[2] <= 12 && n[3] <= 31)
            return gu.to_workbook(a, s);
        if (32 > n[0] || n[0] > 127)
            throw new Error("Unsupported file " + n.join("|"));
        return ku.to_workbook(a, s)
    }
    function UE(e, r) {
        var t = r || {};
        t.type = "file";
        return LE(e, t)
    }
    function HE(e, r) {
        var t = r || {};
        var a = PE(e, t);
        var n = {};
        if (t.compression)
            n.compression = "DEFLATE";
        switch (t.type) {
        case "base64":
            n.type = "base64";
            break;
        case "binary":
            n.type = "string";
            break;
        case "buffer":
        case "file":
            n.type = "nodebuffer";
            break;
        default:
            throw new Error("Unrecognized type " + t.type)
        }
        if (t.type === "file")
            return j.writeFileSync(t.file, a.generate(n));
        return a.generate(n)
    }
    function VE(e, r) {
        switch (r.type) {
        case "base64":
            return o.encode(e);
        case "binary":
            return e;
        case "file":
            return j.writeFileSync(r.file, e, "binary");
        case "buffer":
            {
                if (u)
                    return new Buffer(e,"utf8");
                else
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    })
            }
        }
        throw new Error("Unrecognized type " + r.type)
    }
    function WE(e, r) {
        switch (r.type) {
        case "base64":
            return o.encode(e);
        case "binary":
            return e;
        case "file":
            return j.writeFileSync(r.file, e, "utf8");
        case "buffer":
            {
                if (u)
                    return new Buffer(e,"utf8");
                else
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    })
            }
        }
        throw new Error("Unrecognized type " + r.type)
    }
    function XE(e, r) {
        switch (r.type) {
        case "base64":
        case "binary":
            var t = "";
            for (var a = 0; a < e.length; ++a)
                t += String.fromCharCode(e[a]);
            return r.type == "base64" ? o.encode(t) : t;
        case "file":
            return j.writeFileSync(r.file, e);
        case "buffer":
            return e;
        default:
            throw new Error("Unrecognized type " + r.type)
        }
    }
    function GE(e, r) {
        _m(e);
        var t = r || {};
        switch (t.bookType || "xlsb") {
        case "xml":
        case "xlml":
            return WE(Wg(e, t), t);
        case "slk":
        case "sylk":
            return WE(mE(e, t), t);
        case "html":
            return WE(bE(e, t), t);
        case "txt":
            return VE(SE(e, t), t);
        case "csv":
            return WE(pE(e, t), t);
        case "dif":
            return WE(gE(e, t), t);
        case "prn":
            return WE(EE(e, t), t);
        case "fods":
            return WE(CE(e, t), t);
        case "biff2":
            return XE(cE(e, t), t);
        case "xlsx":
        case "xlsm":
        case "xlsb":
        case "ods":
            return HE(e, t);
        default:
            throw new Error("Unrecognized bookType |" + t.bookType + "|")
        }
    }
    function jE(e) {
        if (!e.bookType)
            switch (e.file.slice(e.file.lastIndexOf(".")).toLowerCase()) {
            case ".xlsx":
                e.bookType = "xlsx";
                break;
            case ".xlsm":
                e.bookType = "xlsm";
                break;
            case ".xlsb":
                e.bookType = "xlsb";
                break;
            case ".fods":
                e.bookType = "fods";
                break;
            case ".xlml":
                e.bookType = "xlml";
                break;
            case ".sylk":
                e.bookType = "sylk";
                break;
            case ".html":
                e.bookType = "html";
                break;
            case ".xls":
                e.bookType = "biff2";
                break;
            case ".xml":
                e.bookType = "xml";
                break;
            case ".ods":
                e.bookType = "ods";
                break;
            case ".csv":
                e.bookType = "csv";
                break;
            case ".txt":
                e.bookType = "txt";
                break;
            case ".dif":
                e.bookType = "dif";
                break;
            case ".prn":
                e.bookType = "prn";
                break;
            case ".slk":
                e.bookType = "sylk";
                break;
            case ".htm":
                e.bookType = "html";
                break
            }
    }
    function zE(e, r, t) {
        var a = t || {};
        a.type = "file";
        a.file = r;
        jE(a);
        return GE(e, a)
    }
    function KE(e, r, t, a) {
        var n = t || {};
        n.type = "file";
        n.file = e;
        jE(n);
        n.type = "buffer";
        var s = a;
        if (!(s instanceof Function))
            s = t;
        return j.writeFile(e, GE(r, n), s)
    }
    function YE(e, r) {
        if (e == null || e["!ref"] == null)
            return [];
        var t = {
            t: "n",
            v: 0
        }
          , a = 0
          , n = 1
          , s = []
          , i = true
          , f = 0
          , c = "";
        var l = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: 0,
                c: 0
            }
        };
        var o = r != null ? r : {};
        var u = o.raw;
        var h = o.defval;
        var d = o.range != null ? o.range : e["!ref"];
        if (o.header === 1)
            a = 1;
        else if (o.header === "A")
            a = 2;
        else if (Array.isArray(o.header))
            a = 3;
        switch (typeof d) {
        case "string":
            l = Ur(d);
            break;
        case "number":
            l = Ur(e["!ref"]);
            l.s.r = d;
            break;
        default:
            l = d
        }
        if (a > 0)
            n = 0;
        var v = wr(l.s.r);
        var b = new Array(l.e.c - l.s.c + 1);
        var p = new Array(l.e.r - l.s.r - n + 1);
        var m = 0
          , g = 0;
        var E = Array.isArray(e);
        var S = l.s.r
          , k = 0
          , B = 0;
        if (!e[S])
            e[S] = [];
        for (k = l.s.c; k <= l.e.c; ++k) {
            b[k] = xr(k);
            t = E ? e[S][k] : e[b[k] + v];
            switch (a) {
            case 1:
                s[k] = k - l.s.c;
                break;
            case 2:
                s[k] = b[k];
                break;
            case 3:
                s[k] = o.header[k - l.s.c];
                break;
            default:
                if (t == null)
                    continue;
                c = f = Vr(t, null, o);
                g = 0;
                for (B = 0; B < s.length; ++B)
                    if (s[B] == c)
                        c = f + "_" + ++g;
                s[k] = c
            }
        }
        var C = a === 1 ? [] : {};
        for (S = l.s.r + n; S <= l.e.r; ++S) {
            v = wr(S);
            i = true;
            if (a === 1)
                C = [];
            else {
                C = {};
                if (Object.defineProperty)
                    try {
                        Object.defineProperty(C, "__rowNum__", {
                            value: S,
                            enumerable: false
                        })
                    } catch (e) {
                        C.__rowNum__ = S
                    }
                else
                    C.__rowNum__ = S
            }
            if (!E || e[S])
                for (k = l.s.c; k <= l.e.c; ++k) {
                    t = E ? e[S][k] : e[b[k] + v];
                    if (t === undefined || t.t === undefined) {
                        if (h === undefined)
                            continue;
                        if (s[k] != null) {
                            C[s[k]] = h;
                            i = false
                        }
                        continue
                    }
                    f = t.v;
                    switch (t.t) {
                    case "z":
                        if (f == null)
                            break;
                        continue;
                    case "e":
                        continue;
                    case "s":
                    case "d":
                    case "b":
                    case "n":
                        break;
                    default:
                        throw new Error("unrecognized type " + t.t)
                    }
                    if (s[k] != null) {
                        if (f == null) {
                            if (h !== undefined)
                                C[s[k]] = h;
                            else if (u && f === null)
                                C[s[k]] = null;
                            else
                                continue
                        } else {
                            C[s[k]] = u ? f : Vr(t, f, o)
                        }
                        i = false
                    }
                }
            if (i === false || (a === 1 ? o.blankrows !== false : !!o.blankrows))
                p[m++] = C
        }
        p.length = m;
        return p
    }
    var $E = /"/g;
    function QE(e, r, t, a, n, s, i, f) {
        var c = true;
        var l = ""
          , o = ""
          , u = wr(t);
        for (var h = r.s.c; h <= r.e.c; ++h) {
            var d = f.dense ? (e[t] || [])[h] : e[a[h] + u];
            if (d == null)
                o = "";
            else if (d.v != null) {
                c = false;
                o = "" + Vr(d, null, f);
                for (var v = 0, b = 0; v !== o.length; ++v)
                    if ((b = o.charCodeAt(v)) === n || b === s || b === 34) {
                        o = '"' + o.replace($E, '""') + '"';
                        break
                    }
            } else if (d.f != null && !d.F) {
                c = false;
                o = "=" + d.f;
                if (o.indexOf(",") >= 0)
                    o = '"' + o.replace($E, '""') + '"'
            } else
                o = "";
            l += (h === r.s.c ? "" : i) + o
        }
        if (f.blankrows === false && c)
            return null;
        return l
    }
    function ZE(e, r) {
        var t = [];
        var a = r == null ? {} : r;
        if (e == null || e["!ref"] == null)
            return "";
        var n = Ur(e["!ref"]);
        var s = a.FS !== undefined ? a.FS : ","
          , i = s.charCodeAt(0);
        var f = a.RS !== undefined ? a.RS : "\n"
          , c = f.charCodeAt(0);
        var l = new RegExp((s == "|" ? "\\|" : s) + "+$");
        var o = ""
          , u = [];
        a.dense = Array.isArray(e);
        for (var h = n.s.c; h <= n.e.c; ++h)
            u[h] = xr(h);
        for (var d = n.s.r; d <= n.e.r; ++d) {
            o = QE(e, n, d, u, i, c, s, a);
            if (o == null) {
                continue
            }
            if (a.strip)
                o = o.replace(l, "");
            t.push(o + f)
        }
        delete a.dense;
        return t.join("")
    }
    function qE(e, r) {
        if (!r)
            r = {};
        r.FS = "\t";
        r.RS = "\n";
        var t = ZE(e, r);
        if (typeof cptable == "undefined")
            return t;
        var a = cptable.utils.encode(1200, t);
        return "ÿþ" + a
    }
    function JE(e) {
        var r = "", t, a = "";
        if (e == null || e["!ref"] == null)
            return [];
        var n = Ur(e["!ref"]), s = "", i = [], f;
        var c = new Array((n.e.r - n.s.r + 1) * (n.e.c - n.s.c + 1));
        var l = 0;
        var o = Array.isArray(e);
        for (f = n.s.c; f <= n.e.c; ++f)
            i[f] = xr(f);
        for (var u = n.s.r; u <= n.e.r; ++u) {
            s = wr(u);
            for (f = n.s.c; f <= n.e.c; ++f) {
                r = i[f] + s;
                t = o ? (e[u] || [])[f] : e[r];
                a = "";
                if (t === undefined)
                    continue;
                else if (t.F != null) {
                    r = t.F;
                    if (!t.f)
                        continue;
                    a = t.f;
                    if (r.indexOf(":") == -1)
                        r = r + ":" + r
                }
                if (t.f != null)
                    a = t.f;
                else if (t.t == "z")
                    continue;
                else if (t.t == "n" && t.v != null)
                    a = "" + t.v;
                else if (t.t == "b")
                    a = t.v ? "TRUE" : "FALSE";
                else if (t.w !== undefined)
                    a = "'" + t.w;
                else if (t.v === undefined)
                    continue;
                else if (t.t == "s")
                    a = "'" + t.v;
                else
                    a = "" + t.v;
                c[l++] = r + "=" + a
            }
        }
        c.length = l;
        return c
    }
    var eS = {
        encode_col: xr,
        encode_row: wr,
        encode_cell: yr,
        encode_range: Lr,
        decode_col: Rr,
        decode_row: Tr,
        split_cell: Fr,
        decode_cell: Pr,
        decode_range: Mr,
        format_cell: Vr,
        get_formulae: JE,
        make_csv: ZE,
        make_json: YE,
        make_formulae: JE,
        aoa_to_sheet: Xr,
        table_to_sheet: oE,
        table_to_book: uE,
        sheet_to_csv: ZE,
        sheet_to_json: YE,
        sheet_to_formulae: JE,
        sheet_to_row_object_array: YE
    };
    if (u && typeof require != "undefined")
        (function() {
            var e = require("stream").Readable;
            var t = function(r, t) {
                var a = e();
                var n = "";
                var s = t == null ? {} : t;
                if (r == null || r["!ref"] == null) {
                    a.push(null);
                    return a
                }
                var i = Ur(r["!ref"]);
                var f = s.FS !== undefined ? s.FS : ","
                  , c = f.charCodeAt(0);
                var l = s.RS !== undefined ? s.RS : "\n"
                  , o = l.charCodeAt(0);
                var u = new RegExp((f == "|" ? "\\|" : f) + "+$");
                var h = ""
                  , d = [];
                s.dense = Array.isArray(r);
                for (var v = i.s.c; v <= i.e.c; ++v)
                    d[v] = xr(v);
                var b = i.s.r;
                a._read = function() {
                    if (b > i.e.r)
                        return a.push(null);
                    while (b <= i.e.r) {
                        h = QE(r, i, b, d, c, o, f, s);
                        if (h == null) {
                            ++b;
                            continue
                        }
                        if (s.strip)
                            h = h.replace(u, "");
                        a.push(h + l);
                        ++b;
                        break
                    }
                }
                ;
                return a
            };
            var a = "<html><body><table>";
            var n = "</table></body></html>";
            var s = function(r, t) {
                var s = e();
                var i = [];
                var f = Mr(r["!ref"]), c;
                i.dense = Array.isArray(r);
                s.push(a);
                var l = f.s.r;
                var o = false;
                s._read = function() {
                    if (l > f.e.r) {
                        if (!o) {
                            o = true;
                            s.push(n)
                        }
                        return s.push(null)
                    }
                    while (l <= f.e.r) {
                        s.push(lE._row(r, f, l, i));
                        ++l;
                        break
                    }
                }
                ;
                return s
            };
            r.stream = {
                to_html: s,
                to_csv: t
            }
        }
        )();
    r.parse_xlscfb = $g;
    r.parse_ods = kE;
    r.parse_fods = BE;
    r.write_ods = CE;
    r.parse_zip = OE;
    r.read = LE;
    r.readFile = UE;
    r.readFileSync = UE;
    r.write = GE;
    r.writeFile = zE;
    r.writeFileSync = zE;
    r.writeFileAsync = KE;
    r.utils = eS;
    r.CFB = k;
    r.SSF = m
}
)(typeof exports !== "undefined" ? exports : XLSX);
var XLS = XLSX;
var ODS = XLSX;
//# sourceMappingURL=xlsx.js.map
