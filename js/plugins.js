/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});



/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
! function (t, n) {
    function e(t) {
        return "object" == typeof t
    }

    function o(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "number" == typeof t
    }

    function a(t) {
        return t === n
    }

    function r() {
        q = google.maps, A || (A = {
            verbose: !1,
            queryLimit: {
                attempt: 5,
                delay: 250,
                random: 250
            },
            classes: function () {
                var n = {};
                return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (t, e) {
                    n[e] = q[e]
                }), n
            }(),
            map: {
                mapTypeId: q.MapTypeId.ROADMAP,
                center: [46.578498, 2.457275],
                zoom: 2
            },
            overlay: {
                pane: "floatPane",
                content: "",
                offset: {
                    x: 0,
                    y: 0
                }
            },
            geoloc: {
                getCurrentPosition: {
                    maximumAge: 6e4,
                    timeout: 5e3
                }
            }
        })
    }

    function s(t, n) {
        return a(t) ? "gmap3_" + (n ? Z + 1 : ++Z) : t
    }

    function u(t) {
        var n, e = q.version.split(".");
        for (t = t.split("."), n = 0; n < e.length; n++) e[n] = parseInt(e[n], 10);
        for (n = 0; n < t.length; n++) {
            if (t[n] = parseInt(t[n], 10), !e.hasOwnProperty(n)) return !1;
            if (e[n] < t[n]) return !1
        }
        return !0
    }

    function l(n, e, o, i, a) {
        function r(e, i) {
            e && t.each(e, function (t, e) {
                var r = n,
                    s = e;
                R(e) && (r = e[0], s = e[1]), i(o, t, function (t) {
                    s.apply(r, [a || o, t, u])
                })
            })
        }
        var s = e.td || {},
            u = {
                id: i,
                data: s.data,
                tag: s.tag
            };
        r(s.events, q.event.addListener), r(s.onces, q.event.addListenerOnce)
    }

    function d(t) {
        var n, e = [];
        for (n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    }

    function c(t, n) {
        var e, o = arguments;
        for (e = 2; e < o.length; e++)
            if (n in o[e] && o[e].hasOwnProperty(n)) return void(t[n] = o[e][n])
    }

    function p(n, e) {
        var o, i, a = ["data", "tag", "id", "events", "onces"],
            r = {};
        if (n.td)
            for (o in n.td) n.td.hasOwnProperty(o) && "options" !== o && "values" !== o && (r[o] = n.td[o]);
        for (i = 0; i < a.length; i++) c(r, a[i], e, n.td);
        return r.options = t.extend({}, n.opts || {}, e.options || {}), r
    }

    function f() {
        if (A.verbose) {
            var t, n = [];
            if (window.console && z(console.error)) {
                for (t = 0; t < arguments.length; t++) n.push(arguments[t]);
                console.error.apply(console, n)
            } else {
                for (n = "", t = 0; t < arguments.length; t++) n += arguments[t].toString() + " ";
                alert(n)
            }
        }
    }

    function g(t) {
        return (i(t) || o(t)) && "" !== t && !isNaN(t)
    }

    function h(t) {
        var n, o = [];
        if (!a(t))
            if (e(t))
                if (i(t.length)) o = t;
                else
                    for (n in t) o.push(t[n]);
        else o.push(t);
        return o
    }

    function v(n) {
        return n ? z(n) ? n : (n = h(n), function (o) {
            var i;
            if (a(o)) return !1;
            if (e(o)) {
                for (i = 0; i < o.length; i++)
                    if (t.inArray(o[i], n) >= 0) return !0;
                return !1
            }
            return t.inArray(o, n) >= 0
        }) : void 0
    }

    function m(t, n, e) {
        var i = n ? t : null;
        return !t || o(t) ? i : t.latLng ? m(t.latLng) : t instanceof q.LatLng ? t : g(t.lat) ? new q.LatLng(t.lat, t.lng) : !e && R(t) && g(t[0]) && g(t[1]) ? new q.LatLng(t[0], t[1]) : i
    }

    function y(t) {
        var n, e;
        return !t || t instanceof q.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (n = m(t[0]), e = m(t[1])) : 4 === t.length && (n = m([t[0], t[1]]), e = m([t[2], t[3]])) : "ne" in t && "sw" in t ? (n = m(t.ne), e = m(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (n = m([t.n, t.e]), e = m([t.s, t.w])), n && e ? new q.LatLngBounds(e, n) : null)
    }

    function w(t, n, e, i, a) {
        var r = e ? m(i.td, !1, !0) : !1,
            s = r ? {
                latLng: r
            } : i.td.address ? o(i.td.address) ? {
                address: i.td.address
            } : i.td.address : !1,
            u = s ? G.get(s) : !1,
            l = this;
        s ? (a = a || 0, u ? (i.latLng = u.results[0].geometry.location, i.results = u.results, i.status = u.status, n.apply(t, [i])) : (s.location && (s.location = m(s.location)), s.bounds && (s.bounds = y(s.bounds)), M().geocode(s, function (o, r) {
            r === q.GeocoderStatus.OK ? (G.store(s, {
                results: o,
                status: r
            }), i.latLng = o[0].geometry.location, i.results = o, i.status = r, n.apply(t, [i])) : r === q.GeocoderStatus.OVER_QUERY_LIMIT && a < A.queryLimit.attempt ? setTimeout(function () {
                w.apply(l, [t, n, e, i, a + 1])
            }, A.queryLimit.delay + Math.floor(Math.random() * A.queryLimit.random)) : (f("geocode failed", r, s), i.latLng = i.results = !1, i.status = r, n.apply(t, [i]))
        }))) : (i.latLng = m(i.td, !1, !0), n.apply(t, [i]))
    }

    function L(n, e, o, i) {
        function a() {
            do s++; while (s < n.length && !("address" in n[s]));
            return s >= n.length ? void o.apply(e, [i]) : void w(r, function (e) {
                delete e.td, t.extend(n[s], e), a.apply(r, [])
            }, !0, {
                td: n[s]
            })
        }
        var r = this,
            s = -1;
        a()
    }

    function b(t, n, e) {
        var o = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (i) {
            o || (o = !0, e.latLng = new q.LatLng(i.coords.latitude, i.coords.longitude), n.apply(t, [e]))
        }, function () {
            o || (o = !0, e.latLng = !1, n.apply(t, [e]))
        }, e.opts.getCurrentPosition) : (e.latLng = !1, n.apply(t, [e]))
    }

    function x(t) {
        var n, o = !1;
        if (e(t) && t.hasOwnProperty("get")) {
            for (n in t)
                if ("get" !== n) return !1;
            o = !t.get.hasOwnProperty("callback")
        }
        return o
    }

    function M() {
        return V.geocoder || (V.geocoder = new q.Geocoder), V.geocoder
    }

    function I() {
        var t = [];
        this.get = function (n) {
            if (t.length) {
                var o, i, a, r, s, u = d(n);
                for (o = 0; o < t.length; o++) {
                    for (r = t[o], s = u.length === r.keys.length, i = 0; i < u.length && s; i++) a = u[i], s = a in r.request, s && (s = e(n[a]) && "equals" in n[a] && z(n[a]) ? n[a].equals(r.request[a]) : n[a] === r.request[a]);
                    if (s) return r.results
                }
            }
        }, this.store = function (n, e) {
            t.push({
                request: n,
                keys: d(n),
                results: e
            })
        }
    }

    function P() {
        var t = [],
            n = this;
        n.empty = function () {
            return !t.length
        }, n.add = function (n) {
            t.push(n)
        }, n.get = function () {
            return t.length ? t[0] : !1
        }, n.ack = function () {
            t.shift()
        }
    }

    function k() {
        function n(t) {
            return {
                id: t.id,
                name: t.name,
                object: t.obj,
                tag: t.tag,
                data: t.data
            }
        }

        function e(t) {
            z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null
        }
        var o = {},
            i = {},
            r = this;
        r.add = function (t, n, e, a) {
            var u = t.td || {},
                l = s(u.id);
            return o[n] || (o[n] = []), l in i && r.clearById(l), i[l] = {
                obj: e,
                sub: a,
                name: n,
                id: l,
                tag: u.tag,
                data: u.data
            }, o[n].push(l), l
        }, r.getById = function (t, e, o) {
            var a = !1;
            return t in i && (a = e ? i[t].sub : o ? n(i[t]) : i[t].obj), a
        }, r.get = function (t, e, a, r) {
            var s, u, l = v(a);
            if (!o[t] || !o[t].length) return null;
            for (s = o[t].length; s;)
                if (s--, u = o[t][e ? s : o[t].length - s - 1], u && i[u]) {
                    if (l && !l(i[u].tag)) continue;
                    return r ? n(i[u]) : i[u].obj
                } return null
        }, r.all = function (t, e, r) {
            var s = [],
                u = v(e),
                l = function (t) {
                    var e, a;
                    for (e = 0; e < o[t].length; e++)
                        if (a = o[t][e], a && i[a]) {
                            if (u && !u(i[a].tag)) continue;
                            s.push(r ? n(i[a]) : i[a].obj)
                        }
                };
            if (t in o) l(t);
            else if (a(t))
                for (t in o) l(t);
            return s
        }, r.rm = function (t, n, e) {
            var a, s;
            if (!o[t]) return !1;
            if (n)
                if (e)
                    for (a = o[t].length - 1; a >= 0 && (s = o[t][a], !n(i[s].tag)); a--);
                else
                    for (a = 0; a < o[t].length && (s = o[t][a], !n(i[s].tag)); a++);
            else a = e ? o[t].length - 1 : 0;
            return a in o[t] ? r.clearById(o[t][a], a) : !1
        }, r.clearById = function (t, n) {
            if (t in i) {
                var r, s = i[t].name;
                for (r = 0; a(n) && r < o[s].length; r++) t === o[s][r] && (n = r);
                return e(i[t].obj), i[t].sub && e(i[t].sub), delete i[t], o[s].splice(n, 1), !0
            }
            return !1
        }, r.objGetById = function (t) {
            var n, e;
            if (o.clusterer)
                for (e in o.clusterer)
                    if ((n = i[o.clusterer[e]].obj.getById(t)) !== !1) return n;
            return !1
        }, r.objClearById = function (t) {
            var n;
            if (o.clusterer)
                for (n in o.clusterer)
                    if (i[o.clusterer[n]].obj.clearById(t)) return !0;
            return null
        }, r.clear = function (t, n, e, i) {
            var a, s, u, l = v(i);
            if (t && t.length) t = h(t);
            else {
                t = [];
                for (a in o) t.push(a)
            }
            for (s = 0; s < t.length; s++)
                if (u = t[s], n) r.rm(u, l, !0);
                else if (e) r.rm(u, l, !1);
            else
                for (; r.rm(u, l, !1););
        }, r.objClear = function (n, e, a, r) {
            var s;
            if (o.clusterer && (t.inArray("marker", n) >= 0 || !n.length))
                for (s in o.clusterer) i[o.clusterer[s]].obj.clear(e, a, r)
        }
    }

    function B(n, e, i) {
        function a(t) {
            var n = {};
            return n[t] = {}, n
        }

        function r() {
            var t;
            for (t in i)
                if (i.hasOwnProperty(t) && !u.hasOwnProperty(t)) return t
        }
        var s, u = {},
            l = this,
            d = {
                latLng: {
                    map: !1,
                    marker: !1,
                    infowindow: !1,
                    circle: !1,
                    overlay: !1,
                    getlatlng: !1,
                    getmaxzoom: !1,
                    getelevation: !1,
                    streetviewpanorama: !1,
                    getaddress: !0
                },
                geoloc: {
                    getgeoloc: !0
                }
            };
        o(i) && (i = a(i)), l.run = function () {
            for (var o, a; o = r();) {
                if (z(n[o])) return s = o, a = t.extend(!0, {}, A[o] || {}, i[o].options || {}), void(o in d.latLng ? i[o].values ? L(i[o].values, n, n[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : w(n, n[o], d.latLng[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : o in d.geoloc ? b(n, n[o], {
                    td: i[o],
                    opts: a,
                    session: u
                }) : n[o].apply(n, [{
                    td: i[o],
                    opts: a,
                    session: u
                }]));
                u[o] = null
            }
            e.apply(n, [i, u])
        }, l.ack = function (t) {
            u[s] = t, l.run.apply(l, [])
        }
    }

    function j() {
        return V.ds || (V.ds = new q.DirectionsService), V.ds
    }

    function O() {
        return V.dms || (V.dms = new q.DistanceMatrixService), V.dms
    }

    function C() {
        return V.mzs || (V.mzs = new q.MaxZoomService), V.mzs
    }

    function E() {
        return V.es || (V.es = new q.ElevationService), V.es
    }

    function S(t) {
        function n() {
            var t = this;
            return t.onAdd = function () {}, t.onRemove = function () {}, t.draw = function () {}, A.classes.OverlayView.apply(t, [])
        }
        n.prototype = A.classes.OverlayView.prototype;
        var e = new n;
        return e.setMap(t), e
    }

    function T(n, o, i) {
        function a(t) {
            T[t] || (delete _[t].options.map, T[t] = new A.classes.Marker(_[t].options), l(n, {
                td: _[t]
            }, T[t], _[t].id))
        }

        function r() {
            return (y = U.getProjection()) ? (P = !0, j.push(q.event.addListener(o, "zoom_changed", f)), j.push(q.event.addListener(o, "bounds_changed", f)), void h()) : void setTimeout(function () {
                r.apply(B, [])
            }, 25)
        }

        function u(t) {
            e(O[t]) ? (z(O[t].obj.setMap) && O[t].obj.setMap(null), z(O[t].obj.remove) && O[t].obj.remove(), z(O[t].shadow.remove) && O[t].obj.remove(), z(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : T[t] && T[t].setMap(null), delete O[t]
        }

        function d() {
            var t, n, e, o, i, a, r, s, u = Math.cos,
                l = Math.sin,
                d = arguments;
            return d[0] instanceof q.LatLng ? (t = d[0].lat(), e = d[0].lng(), d[1] instanceof q.LatLng ? (n = d[1].lat(), o = d[1].lng()) : (n = d[1], o = d[2])) : (t = d[0], e = d[1], d[2] instanceof q.LatLng ? (n = d[2].lat(), o = d[2].lng()) : (n = d[2], o = d[3])), i = Math.PI * t / 180, a = Math.PI * e / 180, r = Math.PI * n / 180, s = Math.PI * o / 180, 6371e3 * Math.acos(Math.min(u(i) * u(r) * u(a) * u(s) + u(i) * l(a) * u(r) * l(s) + l(i) * l(r), 1))
        }

        function c() {
            var t = d(o.getCenter(), o.getBounds().getNorthEast()),
                n = new q.Circle({
                    center: o.getCenter(),
                    radius: 1.25 * t
                });
            return n.getBounds()
        }

        function p() {
            var t, n = {};
            for (t in O) n[t] = !0;
            return n
        }

        function f() {
            clearTimeout(m), m = setTimeout(h, 25)
        }

        function g(t) {
            var n = y.fromLatLngToDivPixel(t),
                e = y.fromDivPixelToLatLng(new q.Point(n.x + i.radius, n.y - i.radius)),
                o = y.fromDivPixelToLatLng(new q.Point(n.x - i.radius, n.y + i.radius));
            return new q.LatLngBounds(o, e)
        }

        function h() {
            if (!x && !I && P) {
                var n, e, a, r, s, l, d, f, h, v, m, y = !1,
                    b = [],
                    B = {},
                    j = o.getZoom(),
                    C = "maxZoom" in i && j > i.maxZoom,
                    E = p();
                for (M = !1, j > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), n = 0; n < _.length; n++) !_[n] || y && !s.contains(_[n].options.position) || w && !w(D[n]) || b.push(n);
                for (;;) {
                    for (n = 0; B[n] && n < b.length;) n++;
                    if (n === b.length) break;
                    if (r = [], k && !C) {
                        m = 10;
                        do
                            for (f = r, r = [], m--, d = f.length ? s.getCenter() : _[b[n]].options.position, s = g(d), e = n; e < b.length; e++) B[e] || s.contains(_[b[e]].options.position) && r.push(e); while (f.length < r.length && r.length > 1 && m)
                    } else
                        for (e = n; e < b.length; e++)
                            if (!B[e]) {
                                r.push(e);
                                break
                            } for (l = {
                            indexes: [],
                            ref: []
                        }, h = v = 0, a = 0; a < r.length; a++) B[r[a]] = !0, l.indexes.push(b[r[a]]), l.ref.push(b[r[a]]), h += _[b[r[a]]].options.position.lat(), v += _[b[r[a]]].options.position.lng();
                    h /= r.length, v /= r.length, l.latLng = new q.LatLng(h, v), l.ref = l.ref.join("-"), l.ref in E ? delete E[l.ref] : (1 === r.length && (O[l.ref] = !0), L(l))
                }
                t.each(E, function (t) {
                    u(t)
                }), I = !1
            }
        }
        var m, y, w, L, b, x = !1,
            M = !1,
            I = !1,
            P = !1,
            k = !0,
            B = this,
            j = [],
            O = {},
            C = {},
            E = {},
            T = [],
            _ = [],
            D = [],
            U = S(o, i.radius);
        r(), B.getById = function (t) {
            return t in C ? (a(C[t]), T[C[t]]) : !1
        }, B.rm = function (t) {
            var n = C[t];
            T[n] && T[n].setMap(null), delete T[n], T[n] = !1, delete _[n], _[n] = !1, delete D[n], D[n] = !1, delete C[t], delete E[n], M = !0
        }, B.clearById = function (t) {
            return t in C ? (B.rm(t), !0) : void 0
        }, B.clear = function (t, n, e) {
            var o, i, a, r, s, u = [],
                l = v(e);
            for (t ? (o = _.length - 1, i = -1, a = -1) : (o = 0, i = _.length, a = 1), r = o; r !== i && (!_[r] || l && !l(_[r].tag) || (u.push(E[r]), !n && !t)); r += a);
            for (s = 0; s < u.length; s++) B.rm(u[s])
        }, B.add = function (t, n) {
            t.id = s(t.id), B.clearById(t.id), C[t.id] = T.length, E[T.length] = t.id, T.push(null), _.push(t), D.push(n), M = !0
        }, B.addMarker = function (t, e) {
            e = e || {}, e.id = s(e.id), B.clearById(e.id), e.options || (e.options = {}), e.options.position = t.getPosition(), l(n, {
                td: e
            }, t, e.id), C[e.id] = T.length, E[T.length] = e.id, T.push(t), _.push(e), D.push(e.data || {}), M = !0
        }, B.td = function (t) {
            return _[t]
        }, B.value = function (t) {
            return D[t]
        }, B.marker = function (t) {
            return t in T ? (a(t), T[t]) : !1
        }, B.markerIsSet = function (t) {
            return Boolean(T[t])
        }, B.setMarker = function (t, n) {
            T[t] = n
        }, B.store = function (t, n, e) {
            O[t.ref] = {
                obj: n,
                shadow: e
            }
        }, B.free = function () {
            var n;
            for (n = 0; n < j.length; n++) q.event.removeListener(j[n]);
            j = [], t.each(O, function (t) {
                u(t)
            }), O = {}, t.each(_, function (t) {
                _[t] = null
            }), _ = [], t.each(T, function (t) {
                T[t] && (T[t].setMap(null), delete T[t])
            }), T = [], t.each(D, function (t) {
                delete D[t]
            }), D = [], C = {}, E = {}
        }, B.filter = function (t) {
            w = t, h()
        }, B.enable = function (t) {
            k !== t && (k = t, h())
        }, B.display = function (t) {
            L = t
        }, B.error = function (t) {
            b = t
        }, B.beginUpdate = function () {
            x = !0
        }, B.endUpdate = function () {
            x = !1, M && h()
        }, B.autofit = function (t) {
            var n;
            for (n = 0; n < _.length; n++) _[n] && t.extend(_[n].options.position)
        }
    }

    function _(t, n) {
        var e = this;
        e.id = function () {
            return t
        }, e.filter = function (t) {
            n.filter(t)
        }, e.enable = function () {
            n.enable(!0)
        }, e.disable = function () {
            n.enable(!1)
        }, e.add = function (t, e, o) {
            o || n.beginUpdate(), n.addMarker(t, e), o || n.endUpdate()
        }, e.getById = function (t) {
            return n.getById(t)
        }, e.clearById = function (t, e) {
            var o;
            return e || n.beginUpdate(), o = n.clearById(t), e || n.endUpdate(), o
        }, e.clear = function (t, e, o, i) {
            i || n.beginUpdate(), n.clear(t, e, o), i || n.endUpdate()
        }
    }

    function D(n, e, o, i) {
        var a = this,
            r = [];
        A.classes.OverlayView.call(a), a.setMap(n), a.onAdd = function () {
            var n = a.getPanes();
            e.pane in n && t(n[e.pane]).append(i), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (n, e) {
                r.push(q.event.addDomListener(i[0], e, function (n) {
                    t.Event(n).stopPropagation(), q.event.trigger(a, e, [n]), a.draw()
                }))
            }), r.push(q.event.addDomListener(i[0], "contextmenu", function (n) {
                t.Event(n).stopPropagation(), q.event.trigger(a, "rightclick", [n]), a.draw()
            }))
        }, a.getPosition = function () {
            return o
        }, a.setPosition = function (t) {
            o = t, a.draw()
        }, a.draw = function () {
            var t = a.getProjection().fromLatLngToDivPixel(o);
            i.css("left", t.x + e.offset.x + "px").css("top", t.y + e.offset.y + "px")
        }, a.onRemove = function () {
            var t;
            for (t = 0; t < r.length; t++) q.event.removeListener(r[t]);
            i.remove()
        }, a.hide = function () {
            i.hide()
        }, a.show = function () {
            i.show()
        }, a.toggle = function () {
            i && (i.is(":visible") ? a.show() : a.hide())
        }, a.toggleDOM = function () {
            a.setMap(a.getMap() ? null : n)
        }, a.getDOMElement = function () {
            return i[0]
        }
    }

    function U(i) {
        function r() {
            !b && (b = M.get()) && b.run()
        }

        function d() {
            b = null, M.ack(), r.call(x)
        }

        function c(t) {
            var n, e = t.td.callback;
            e && (n = Array.prototype.slice.call(arguments, 1), z(e) ? e.apply(i, n) : R(e) && z(e[1]) && e[1].apply(e[0], n))
        }

        function g(t, n, e) {
            e && l(i, t, n, e), c(t, n), b.ack(n)
        }

        function v(n, e) {
            e = e || {};
            var o = e.td && e.td.options ? e.td.options : 0;
            S ? o && (o.center && (o.center = m(o.center)), S.setOptions(o)) : (o = e.opts || t.extend(!0, {}, A.map, o || {}), o.center = n || m(o.center), S = new A.classes.Map(i.get(0), o))
        }

        function w(e) {
            var o, a, r = new T(i, S, e),
                s = {},
                u = {},
                d = [],
                c = /^[0-9]+$/;
            for (a in e) c.test(a) ? (d.push(1 * a), u[a] = e[a], u[a].width = u[a].width || 0, u[a].height = u[a].height || 0) : s[a] = e[a];
            return d.sort(function (t, n) {
                return t > n
            }), o = s.calculator ? function (n) {
                var e = [];
                return t.each(n, function (t, n) {
                    e.push(r.value(n))
                }), s.calculator.apply(i, [e])
            } : function (t) {
                return t.length
            }, r.error(function () {
                f.apply(x, arguments)
            }), r.display(function (a) {
                var c, p, f, g, h, v, y = o(a.indexes);
                if (e.force || y > 1)
                    for (c = 0; c < d.length; c++) d[c] <= y && (p = u[d[c]]);
                p ? (h = p.offset || [-p.width / 2, -p.height / 2], f = t.extend({}, s), f.options = t.extend({
                    pane: "overlayLayer",
                    content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                    offset: {
                        x: ("x" in h ? h.x : h[0]) || 0,
                        y: ("y" in h ? h.y : h[1]) || 0
                    }
                }, s.options || {}), g = x.overlay({
                    td: f,
                    opts: f.options,
                    latLng: m(a)
                }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                    cursor: "pointer"
                }), v = x.overlay({
                    td: f,
                    opts: f.options,
                    latLng: m(a)
                }, !0), s.data = {
                    latLng: m(a),
                    markers: []
                }, t.each(a.indexes, function (t, n) {
                    s.data.markers.push(r.value(n)), r.markerIsSet(n) && r.marker(n).setMap(null)
                }), l(i, {
                    td: s
                }, v, n, {
                    main: g,
                    shadow: v
                }), r.store(a, g, v)) : t.each(a.indexes, function (t, n) {
                    r.marker(n).setMap(S)
                })
            }), r
        }

        function L(n, e, o) {
            var a = [],
                r = "values" in n.td;
            return r || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (v(), t.each(n.td.values, function (t, r) {
                var s, u, d, c, f = p(n, r);
                if (f.options[o])
                    if (f.options[o][0][0] && R(f.options[o][0][0]))
                        for (u = 0; u < f.options[o].length; u++)
                            for (d = 0; d < f.options[o][u].length; d++) f.options[o][u][d] = m(f.options[o][u][d]);
                    else
                        for (u = 0; u < f.options[o].length; u++) f.options[o][u] = m(f.options[o][u]);
                f.options.map = S, c = new q[e](f.options), a.push(c), s = I.add({
                    td: f
                }, e.toLowerCase(), c), l(i, {
                    td: f
                }, c, s)
            }), void g(n, r ? a : a[0])) : void g(n, !1)
        }
        var b, x = this,
            M = new P,
            I = new k,
            S = null;
        x._plan = function (t) {
            var n;
            for (n = 0; n < t.length; n++) M.add(new B(x, d, t[n]));
            r()
        }, x.map = function (t) {
            v(t.latLng, t), l(i, t, S), g(t, S)
        }, x.destroy = function (t) {
            I.clear(), i.empty(), S && (S = null), g(t, !0)
        }, x.overlay = function (n, e) {
            var o = [],
                a = "values" in n.td;
            return a || (n.td.values = [{
                latLng: n.latLng,
                options: n.opts
            }]), n.td.values.length ? (D.__initialised || (D.prototype = new A.classes.OverlayView, D.__initialised = !0), t.each(n.td.values, function (a, r) {
                var s, u, d = p(n, r),
                    c = t(document.createElement("div")).css({
                        border: "none",
                        borderWidth: 0,
                        position: "absolute"
                    });
                c.append(d.options.content), u = new D(S, d.options, m(d) || m(r), c), o.push(u), c = null, e || (s = I.add(n, "overlay", u), l(i, {
                    td: d
                }, u, s))
            }), e ? o[0] : void g(n, a ? o : o[0])) : void g(n, !1)
        }, x.marker = function (n) {
            var e, o, a, r = "values" in n.td,
                u = !S;
            return r || (n.opts.position = n.latLng || m(n.opts.position), n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (u && v(), n.td.cluster && !S.getBounds() ? void q.event.addListenerOnce(S, "bounds_changed", function () {
                x.marker.apply(x, [n])
            }) : void(n.td.cluster ? (n.td.cluster instanceof _ ? (o = n.td.cluster, a = I.getById(o.id(), !0)) : (a = w(n.td.cluster), o = new _(s(n.td.id, !0), a), I.add(n, "clusterer", o, a)), a.beginUpdate(), t.each(n.td.values, function (t, e) {
                var o = p(n, e);
                o.options.position = m(o.options.position ? o.options.position : e), o.options.position && (o.options.map = S, u && (S.setCenter(o.options.position), u = !1), a.add(o, e))
            }), a.endUpdate(), g(n, o)) : (e = [], t.each(n.td.values, function (t, o) {
                var a, r, s = p(n, o);
                s.options.position = m(s.options.position ? s.options.position : o), s.options.position && (s.options.map = S, u && (S.setCenter(s.options.position), u = !1), r = new A.classes.Marker(s.options), e.push(r), a = I.add({
                    td: s
                }, "marker", r), l(i, {
                    td: s
                }, r, a))
            }), g(n, r ? e : e[0])))) : void g(n, !1)
        }, x.getroute = function (t) {
            t.opts.origin = m(t.opts.origin, !0), t.opts.destination = m(t.opts.destination, !0), j().route(t.opts, function (n, e) {
                c(t, e === q.DirectionsStatus.OK ? n : !1, e), b.ack()
            })
        }, x.getdistance = function (t) {
            var n;
            for (t.opts.origins = h(t.opts.origins), n = 0; n < t.opts.origins.length; n++) t.opts.origins[n] = m(t.opts.origins[n], !0);
            for (t.opts.destinations = h(t.opts.destinations), n = 0; n < t.opts.destinations.length; n++) t.opts.destinations[n] = m(t.opts.destinations[n], !0);
            O().getDistanceMatrix(t.opts, function (n, e) {
                c(t, e === q.DistanceMatrixStatus.OK ? n : !1, e), b.ack()
            })
        }, x.infowindow = function (e) {
            var o = [],
                r = "values" in e.td;
            r || (e.latLng && (e.opts.position = e.latLng), e.td.values = [{
                options: e.opts
            }]), t.each(e.td.values, function (t, s) {
                var u, d, c = p(e, s);
                c.options.position = m(c.options.position ? c.options.position : s.latLng), S || v(c.options.position), d = new A.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(S, c.anchor || n) : d.open(S, c.anchor || (e.latLng ? n : e.session.marker ? e.session.marker : n))), o.push(d), u = I.add({
                    td: c
                }, "infowindow", d), l(i, {
                    td: c
                }, d, u)
            }), g(e, r ? o : o[0])
        }, x.circle = function (n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.opts.center = n.latLng || m(n.opts.center), n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                var a, r, s = p(n, o);
                s.options.center = m(s.options.center ? s.options.center : o), S || v(s.options.center), s.options.map = S, r = new A.classes.Circle(s.options), e.push(r), a = I.add({
                    td: s
                }, "circle", r), l(i, {
                    td: s
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.getaddress = function (t) {
            c(t, t.results, t.status), b.ack()
        }, x.getlatlng = function (t) {
            c(t, t.results, t.status), b.ack()
        }, x.getmaxzoom = function (t) {
            C().getMaxZoomAtLatLng(t.latLng, function (n) {
                c(t, n.status === q.MaxZoomStatus.OK ? n.zoom : !1, status), b.ack()
            })
        }, x.getelevation = function (t) {
            var n, e = [],
                o = function (n, e) {
                    c(t, e === q.ElevationStatus.OK ? n : !1, e), b.ack()
                };
            if (t.latLng) e.push(t.latLng);
            else
                for (e = h(t.td.locations || []), n = 0; n < e.length; n++) e[n] = m(e[n]);
            if (e.length) E().getElevationForLocations({
                locations: e
            }, o);
            else {
                if (t.td.path && t.td.path.length)
                    for (n = 0; n < t.td.path.length; n++) e.push(m(t.td.path[n]));
                e.length ? E().getElevationAlongPath({
                    path: e,
                    samples: t.td.samples
                }, o) : b.ack()
            }
        }, x.defaults = function (n) {
            t.each(n.td, function (n, o) {
                A[n] = e(A[n]) ? t.extend({}, A[n], o) : o
            }), b.ack(!0)
        }, x.rectangle = function (n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                var a, r, s = p(n, o);
                s.options.bounds = y(s.options.bounds ? s.options.bounds : o), S || v(s.options.bounds.getCenter()), s.options.map = S, r = new A.classes.Rectangle(s.options), e.push(r), a = I.add({
                    td: s
                }, "rectangle", r), l(i, {
                    td: s
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.polyline = function (t) {
            L(t, "Polyline", "path")
        }, x.polygon = function (t) {
            L(t, "Polygon", "paths")
        }, x.trafficlayer = function (t) {
            v();
            var n = I.get("trafficlayer");
            n || (n = new A.classes.TrafficLayer, n.setMap(S), I.add(t, "trafficlayer", n)), g(t, n)
        }, x.bicyclinglayer = function (t) {
            v();
            var n = I.get("bicyclinglayer");
            n || (n = new A.classes.BicyclingLayer, n.setMap(S), I.add(t, "bicyclinglayer", n)), g(t, n)
        }, x.groundoverlay = function (t) {
            t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
            var n, e = new A.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
            e.setMap(S), n = I.add(t, "groundoverlay", e), g(t, e, n)
        }, x.streetviewpanorama = function (n) {
            n.opts.opts || (n.opts.opts = {}), n.latLng ? n.opts.opts.position = n.latLng : n.opts.opts.position && (n.opts.opts.position = m(n.opts.opts.position)), n.td.divId ? n.opts.container = document.getElementById(n.td.divId) : n.opts.container && (n.opts.container = t(n.opts.container).get(0));
            var e, o = new A.classes.StreetViewPanorama(n.opts.container, n.opts.opts);
            o && S.setStreetView(o), e = I.add(n, "streetviewpanorama", o), g(n, o, e)
        }, x.kmllayer = function (n) {
            var e = [],
                o = "values" in n.td;
            return o || (n.td.values = [{
                options: n.opts
            }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                var a, r, s, d = p(n, o);
                S || v(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = S, r = u("3.10") ? new A.classes.KmlLayer(s) : new A.classes.KmlLayer(s.url, s), e.push(r), a = I.add({
                    td: d
                }, "kmllayer", r), l(i, {
                    td: d
                }, r, a)
            }), void g(n, o ? e : e[0])) : void g(n, !1)
        }, x.panel = function (n) {
            v();
            var e, o, r = 0,
                s = 0,
                u = t(document.createElement("div"));
            u.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }), n.opts.content && (o = t(n.opts.content), u.append(o), i.first().prepend(u), a(n.opts.left) ? a(n.opts.right) ? n.opts.center && (r = (i.width() - o.width()) / 2) : r = i.width() - o.width() - n.opts.right : r = n.opts.left, a(n.opts.top) ? a(n.opts.bottom) ? n.opts.middle && (s = (i.height() - o.height()) / 2) : s = i.height() - o.height() - n.opts.bottom : s = n.opts.top, u.css({
                top: s,
                left: r,
                visibility: "visible"
            })), e = I.add(n, "panel", u), g(n, u, e), u = null
        }, x.directionsrenderer = function (n) {
            n.opts.map = S;
            var e, o = new q.DirectionsRenderer(n.opts);
            n.td.divId ? o.setPanel(document.getElementById(n.td.divId)) : n.td.container && o.setPanel(t(n.td.container).get(0)), e = I.add(n, "directionsrenderer", o), g(n, o, e)
        }, x.getgeoloc = function (t) {
            g(t, t.latLng)
        }, x.styledmaptype = function (t) {
            v();
            var n = new A.classes.StyledMapType(t.td.styles, t.opts);
            S.mapTypes.set(t.td.id, n), g(t, n)
        }, x.imagemaptype = function (t) {
            v();
            var n = new A.classes.ImageMapType(t.opts);
            S.mapTypes.set(t.td.id, n), g(t, n)
        }, x.autofit = function (n) {
            var e = new q.LatLngBounds;
            t.each(I.all(), function (t, n) {
                n.getPosition ? e.extend(n.getPosition()) : n.getBounds ? (e.extend(n.getBounds().getNorthEast()), e.extend(n.getBounds().getSouthWest())) : n.getPaths ? n.getPaths().forEach(function (t) {
                    t.forEach(function (t) {
                        e.extend(t)
                    })
                }) : n.getPath ? n.getPath().forEach(function (t) {
                    e.extend(t)
                }) : n.getCenter ? e.extend(n.getCenter()) : "function" == typeof _ && n instanceof _ && (n = I.getById(n.id(), !0), n && n.autofit(e))
            }), e.isEmpty() || S.getBounds() && S.getBounds().equals(e) || ("maxZoom" in n.td && q.event.addListenerOnce(S, "bounds_changed", function () {
                this.getZoom() > n.td.maxZoom && this.setZoom(n.td.maxZoom)
            }), S.fitBounds(e)), g(n, !0)
        }, x.clear = function (n) {
            if (o(n.td)) {
                if (I.clearById(n.td) || I.objClearById(n.td)) return void g(n, !0);
                n.td = {
                    name: n.td
                }
            }
            n.td.id ? t.each(h(n.td.id), function (t, n) {
                I.clearById(n) || I.objClearById(n)
            }) : (I.clear(h(n.td.name), n.td.last, n.td.first, n.td.tag), I.objClear(h(n.td.name), n.td.last, n.td.first, n.td.tag)), g(n, !0)
        }, x.get = function (e, i, a) {
            var r, s, u = i ? e : e.td;
            return i || (a = u.full), o(u) ? (s = I.getById(u, !1, a) || I.objGetById(u), s === !1 && (r = u, u = {})) : r = u.name, "map" === r && (s = S), s || (s = [], u.id ? (t.each(h(u.id), function (t, n) {
                s.push(I.getById(n, !1, a) || I.objGetById(n))
            }), R(u.id) || (s = s[0])) : (t.each(r ? h(r) : [n], function (n, e) {
                var o;
                u.first ? (o = I.get(e, !1, u.tag, a), o && s.push(o)) : u.all ? t.each(I.all(e, u.tag, a), function (t, n) {
                    s.push(n)
                }) : (o = I.get(e, !0, u.tag, a), o && s.push(o))
            }), u.all || R(r) || (s = s[0]))), s = R(s) || !u.all ? s : [s], i ? s : void g(e, s)
        }, x.exec = function (n) {
            t.each(h(n.td.func), function (e, o) {
                t.each(x.get(n.td, !0, n.td.hasOwnProperty("full") ? n.td.full : !0), function (t, n) {
                    o.call(i, n)
                })
            }), g(n, !0)
        }, x.trigger = function (n) {
            if (o(n.td)) q.event.trigger(S, n.td);
            else {
                var e = [S, n.td.eventName];
                n.td.var_args && t.each(n.td.var_args, function (t, n) {
                    e.push(n)
                }), q.event.trigger.apply(q.event, e)
            }
            c(n), b.ack()
        }
    }
    var A, q, Z = 0,
        z = t.isFunction,
        R = t.isArray,
        V = {},
        G = new I;
    t.fn.gmap3 = function () {
        var n, e = [],
            o = !0,
            i = [];
        for (r(), n = 0; n < arguments.length; n++) arguments[n] && e.push(arguments[n]);
        return e.length || e.push("map"), t.each(this, function () {
            var n = t(this),
                a = n.data("gmap3");
            o = !1, a || (a = new U(n), n.data("gmap3", a)), 1 !== e.length || "get" !== e[0] && !x(e[0]) ? a._plan(e) : i.push("get" === e[0] ? a.get("map", !0) : a.get(e[0].get, !0, e[0].get.full))
        }), i.length ? 1 === i.length ? i[0] : i : this
    }
}(jQuery);


/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        s = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o)
            if (o.hasOwnProperty(r))
                for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function () {};
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function (e, n, i) {
            e[n + i] = i.handleEvent ? function () {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function () {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function () {};
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" == f.call(e)
        }

        function s(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e, t, n) {
            if (!(this instanceof o)) return new o(e, t, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function () {
                r.check()
            })
        }

        function h(e) {
            this.img = e
        }

        function a(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var u = e.jQuery,
            c = e.console,
            f = Object.prototype.toString;
        o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var e = 0; e < this.elements.length; e++) {
                var t = this.elements[e];
                this.addElementImages(t)
            }
        }, o.prototype.addElementImages = function (e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && d[t]) {
                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var s = e.querySelectorAll(this.options.background);
                    for (i = 0; i < s.length; i++) {
                        var o = s[i];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        o.prototype.addElementBackgroundImages = function (e) {
            for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[1];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
        };
        var m = e.getComputedStyle || function (e) {
            return e.currentStyle
        };
        return o.prototype.addImage = function (e) {
            var t = new h(e);
            this.images.push(t)
        }, o.prototype.addBackground = function (e, t) {
            var n = new a(e, t);
            this.images.push(n)
        }, o.prototype.check = function () {
            function e(e, n, i) {
                setTimeout(function () {
                    t.progress(e, n, i)
                })
            }
            var t = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var n = 0; n < this.images.length; n++) {
                var i = this.images[n];
                i.once("progress", e), i.check()
            }
        }, o.prototype.progress = function (e, t, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
        }, o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, h.prototype = new t, h.prototype.check = function () {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.img, t)
        }, h.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function () {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype = new h, a.prototype.check = function () {
            n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function () {
            n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.element, t)
        }, o.makeJQueryPlugin = function (t) {
            t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(u(this))
            })
        }, o.makeJQueryPlugin(), o
    });


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function (a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function () {};
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {};
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function (a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function () {
                            var a = d ? function (a) {
                                return d(a, null)
                            } : function (a) {
                                return a.currentStyle
                            };
                            return function (b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function (a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function (a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function () {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function (a, b, c) {
        var d = {};
        d.extend = function (a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function (a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function (a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function (a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
            return a.indexOf(b)
        } : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function (a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
            return a instanceof HTMLElement
        } : function (a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function () {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function (a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function (a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function (a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function (a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function () {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function () {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function (a) {
            return a.replace(/(.)([A-Z])/g, function (a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function (c, e) {
            b(function () {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function (a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function (a) {
                return i(a, null)
            } : function (a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            } [k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function () {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function () {
            this.size = c(this.element)
        }, g.prototype.css = function (a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function () {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function () {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function (a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function (a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function (a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function (a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function (a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function (a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function (a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function () {
            this.css(t)
        }, g.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function () {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function () {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function (a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function () {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
            e.extend(this.options, a)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function (a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function () {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function (a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function (a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function (a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function (a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function (a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function (a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function (a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function (a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function (a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function (a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function (a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function (a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function (a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function (a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function (a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function (a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function (a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function (a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function (a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function () {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function (a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function (a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function (a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function () {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function () {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function (a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function () {
            function a(a) {
                return function () {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function () {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function (a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function () {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function (a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function (a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function () {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function (a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function (a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function () {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function () {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function (a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function () {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.y
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function (a, b, c, d, e, f, g) {
        function h(a, b) {
            return function (c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function (a) {
                return a.trim()
            } : function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function (a) {
                return a.textContent
            } : function (a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function () {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function () {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function (a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function () {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function (a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function () {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function () {
                b = !0, a()
            }), this.once("hideComplete", function () {
                c = !0, a()
            }), this.once("revealComplete", function () {
                d = !0, a()
            })
        }, m.prototype._filter = function (a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function (a) {
            return i && this.options.isJQueryFiltering ? function (b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function (b) {
                return a(b.element)
            } : function (b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function (a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function () {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function (a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function () {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function (a) {
                    return a && h(g(a))
                } : function (a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function (b) {
                    return b.getAttribute(a)
                } : function (a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function (a) {
                return parseInt(a, 10)
            },
            parseFloat: function (a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function () {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function () {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function () {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function (a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function (a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function (a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function (a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function () {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function (a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function () {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });


/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.appear = function (f, o) {
        var s = $.extend({
            one: true
        }, o);
        return this.each(function () {
            var t = $(this);
            t.appeared = false;
            if (!f) {
                t.trigger('appear', s.data);
                return;
            }
            var w = $(window);
            var c = function () {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
                    if (!t.appeared) t.trigger('appear', s.data);
                } else {
                    t.appeared = false;
                }
            };
            var m = function () {
                t.appeared = true;
                if (s.one) {
                    w.unbind('scroll', c);
                    var i = $.inArray(c, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                f.apply(this, arguments);
            };
            if (s.one) t.one('appear', s.data, m);
            else t.bind('appear', s.data, m);
            w.scroll(c);
            $.fn.appear.checks.push(c);
            (c)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
            var l = $.fn.appear.checks.length;
            if (l > 0)
                while (l--)($.fn.appear.checks[l])();
        },
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
        var u = $.fn[n];
        if (u) {
            $.fn[n] = function () {
                var r = u.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);



// jQuery CountTo
! function (t) {
    "use strict";

    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    t.fn.countTo = function (e) {
        return e = e || {}, t(this).each(function () {
            function a() {
                s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(i, s), c >= r && (f.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(i, s))
            }

            function n(t) {
                var e = o.formatter.call(i, t, o);
                f.text(e)
            }
            var o = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from"),
                    to: t(this).data("to"),
                    speed: t(this).data("speed"),
                    refreshInterval: t(this).data("refresh-interval"),
                    decimals: t(this).data("decimals")
                }, e),
                r = Math.ceil(o.speed / o.refreshInterval),
                l = (o.to - o.from) / r,
                i = this,
                f = t(this),
                c = 0,
                s = o.from,
                d = f.data("countTo") || {};
            f.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
        })
    }, t.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }
}(jQuery);



/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
! function (a, b) {
    "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
}(this, function (a) {
    var b = function (a, b) {
            var c, d = document.createElement("canvas");
            a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
            var e = d.getContext("2d");
            d.width = d.height = b.size;
            var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
            var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
            var h = function (a, b, c) {
                    c = Math.min(Math.max(-1, c || 0), 1);
                    var d = 0 >= c ? !0 : !1;
                    e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                },
                i = function () {
                    var a, c;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                    for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore()
                },
                j = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                        window.setTimeout(a, 1e3 / 60)
                    }
                }(),
                k = function () {
                    b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                };
            this.getCanvas = function () {
                return d
            }, this.getCtx = function () {
                return e
            }, this.clear = function () {
                e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
            }, this.draw = function (a) {
                b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
            }.bind(this), this.animate = function (a, c) {
                var d = Date.now();
                b.onStart(a, c);
                var e = function () {
                    var f = Math.min(Date.now() - d, b.animate.duration),
                        g = b.easing(this, f, a, c - a, b.animate.duration);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                }.bind(this);
                j(e)
            }.bind(this)
        },
        c = function (a, c) {
            var d = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function (a, b, c, d, e) {
                    return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                },
                onStart: function () {},
                onStep: function () {},
                onStop: function () {}
            };
            if ("undefined" != typeof b) d.renderer = b;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer
            }
            var e = {},
                f = 0,
                g = function () {
                    this.el = a, this.options = e;
                    for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                    e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                        duration: e.animate,
                        enabled: !0
                    }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                        duration: 1e3,
                        enabled: e.animate
                    }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                }.bind(this);
            this.update = function (a) {
                return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
            }.bind(this), this.disableAnimation = function () {
                return e.animate.enabled = !1, this
            }, this.enableAnimation = function () {
                return e.animate.enabled = !0, this
            }, g()
        };
    a.fn.easyPieChart = function (b) {
        return this.each(function () {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
});


/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
! function (t) {
    "use strict";
    t.fn.fitVids = function (e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                d = document.createElement("div");
            d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function () {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function (e) {
                var i = t(this);
                if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                        o = a / d;
                    if (!i.attr("id")) {
                        var h = "fitvid" + e;
                        i.attr("id", h)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);


/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function ($) {
    var e = !0;
    $.flexslider = function (t, a) {
        var n = $(t);
        n.vars = $.extend({}, $.flexslider.defaults, a);
        var i = n.vars.namespace,
            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            o = "click touchend MSPointerUp keyup",
            l = "",
            c, d = "vertical" === n.vars.direction,
            u = n.vars.reverse,
            v = n.vars.itemWidth > 0,
            p = "fade" === n.vars.animation,
            m = "" !== n.vars.asNavFor,
            f = {};
        $.data(t, "flexslider", n), f = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
                    e.preventDefault();
                    var s = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(s, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), r && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), s ? (t._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var t = $(this),
                                a = t.index();
                            $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(o, function (e) {
                        e.preventDefault();
                        var t = $(this),
                            a = t.index(),
                            s = t.offset().left - $(n).scrollLeft();
                        0 >= s && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                        t = 1,
                        a, s;
                    if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1)
                        for (var r = 0; r < n.pagingCount; r++) {
                            if (s = n.slides.eq(r), void 0 === s.attr("data-thumb-alt") && s.attr("data-thumb-alt", ""), altText = "" !== s.attr("data-thumb-alt") ? altText = ' alt="' + s.attr("data-thumb-alt") + '"' : "", a = "thumbnails" === n.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var c = s.attr("data-thumbcaption");
                                "" !== c && void 0 !== c && (a += '<span class="' + i + 'caption">' + c + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + a + "</li>"), t++
                        }
                    n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this),
                                a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this),
                                a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function () {
                    n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                },
                update: function (e, t) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
                        e.preventDefault();
                        var t;
                        ("" === l || l === e.type) && (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var e = i + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
                        e.preventDefault(), ("" === l || l === e.type) && ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                update: function (e) {
                    "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                }
            },
            touch: function () {
                function e(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
                }

                function a(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX,
                            i = -e.translationY;
                        return T += d ? i : n, m = T, x = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            t._gesture.stop()
                        }) : void((!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = T / (0 === a.currentSlide && 0 > T || a.currentSlide === a.last && T > 0 ? Math.abs(T) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
                    }
                }

                function i(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !x && null !== m) {
                            var a = u ? -m : m,
                                n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = null, o = null, m = null, l = null, T = 0
                    }
                }
                var r, o, l, c, m, f, g, h, S, x = !1,
                    y = 0,
                    b = 0,
                    T = 0;
                s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function (e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, r = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
                }, h = function (e) {
                    y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? r - b : r - y, x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!x || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
                }, S = function (e) {
                    if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
                        var a = u ? -m : m,
                            i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
                }, t.addEventListener("touchstart", g, !1))
            },
            resize: function () {
                !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function (e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({
                        height: n.slides.eq(n.animatingTo).height()
                    }, e) : t.height(n.slides.eq(n.animatingTo).height())
                }
            },
            sync: function (e) {
                var t = $(n.vars.sync).data("flexslider"),
                    a = n.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function () {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1
                },
                getHiddenProp: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(c), c = setTimeout(function () {
                    l = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, t, a, s, o) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
                if (m && s) {
                    var l = $(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var c = d ? n.slides.filter(":first").height() : n.computedW,
                        g, h, S;
                    v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(c)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(c)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (e) {
            p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && e && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
        }, n.getTarget = function (e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (e, t, a) {
            var i = function () {
                var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                    i = function () {
                        if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                        switch (t) {
                            case "setTotal":
                                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                            case "setTouch":
                                return u ? e : e;
                            case "jumpEnd":
                                return u ? e : n.count * e;
                            case "jumpStart":
                                return u ? n.count * e : e;
                            default:
                                return e
                        }
                    }();
                return -1 * i + "px"
            }();
            n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function (e) {
            if (p) n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
            else {
                var t, a;
                "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var e = n.slides.first(),
                t = n.vars.itemMargin,
                a = n.vars.minItems,
                i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
        }, n.update = function (e, t) {
            n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function (e, t) {
            var a = $(e);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var t = isNaN(e) ? n.slides.index($(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, $(window).blur(function (t) {
        e = !1
    }).focus(function (t) {
        e = !0
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    }, $.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
            var t = $(this),
                a = e.selector ? e.selector : ".slides > li",
                n = t.find(a);
            1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
        });
        var t = $(this).data("flexslider");
        switch (e) {
            case "play":
                t.play();
                break;
            case "pause":
                t.pause();
                break;
            case "stop":
                t.stop();
                break;
            case "next":
                t.flexAnimate(t.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                t.flexAnimate(t.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && t.flexAnimate(e, !0)
        }
    }
}(jQuery);



/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.0
 */
;
(function (a) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], a)
    } else {
        a(jQuery)
    }
}(function ($) {
    var g = location.href.replace(/#.*/, '');
    var h = $.localScroll = function (a) {
        $('body').localScroll(a)
    };
    h.defaults = {
        duration: 1000,
        axis: 'y',
        event: 'click',
        stop: true,
        target: window
    };
    $.fn.localScroll = function (a) {
        a = $.extend({}, h.defaults, a);
        if (a.hash && location.hash) {
            if (a.target) window.scrollTo(0, 0);
            scroll(0, location, a)
        }
        return a.lazy ? this.on(a.event, 'a,area', function (e) {
            if (filter.call(this)) {
                scroll(e, this, a)
            }
        }) : this.find('a,area').filter(filter).bind(a.event, function (e) {
            scroll(e, this, a)
        }).end().end();

        function filter() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, '') === g && (!a.filter || $(this).is(a.filter))
        }
    };
    h.hash = function () {};

    function scroll(e, a, b) {
        var c = a.hash.slice(1),
            elem = document.getElementById(c) || document.getElementsByName(c)[0];
        if (!elem) return;
        if (e) e.preventDefault();
        var d = $(b.target);
        if (b.lock && d.is(':animated') || b.onBefore && b.onBefore(e, elem, d) === false) return;
        if (b.stop) {
            d.stop(true)
        }
        if (b.hash) {
            var f = elem.id === c ? 'id' : 'name',
                $a = $('<a> </a>').attr(f, c).css({
                    position: 'absolute',
                    top: $(window).scrollTop(),
                    left: $(window).scrollLeft()
                });
            elem[f] = '';
            $('body').prepend($a);
            location.hash = a.hash;
            $a.remove();
            elem[f] = c
        }
        d.scrollTo(elem, b).trigger('notify.serialScroll', [elem])
    }
    return h
}));


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;
(function (f) {
    "use strict";
    "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function ($) {
    "use strict";

    function n(a) {
        return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function h(a) {
        return $.isFunction(a) || $.isPlainObject(a) ? a : {
            top: a,
            left: a
        }
    }
    var p = $.scrollTo = function (a, d, b) {
        return $(window).scrollTo(a, d, b)
    };
    p.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    };
    $.fn.scrollTo = function (a, d, b) {
        "object" === typeof d && (b = d, d = 0);
        "function" === typeof b && (b = {
            onAfter: b
        });
        "max" === a && (a = 9E9);
        b = $.extend({}, p.defaults, b);
        d = d || b.duration;
        var u = b.queue && 1 < b.axis.length;
        u && (d /= 2);
        b.offset = h(b.offset);
        b.over = h(b.over);
        return this.each(function () {
            function k(a) {
                var k = $.extend({}, b, {
                    queue: !0,
                    duration: d,
                    complete: a && function () {
                        a.call(q, e, b)
                    }
                });
                r.animate(f, k)
            }
            if (null !== a) {
                var l = n(this),
                    q = l ? this.contentWindow || window : this,
                    r = $(q),
                    e = a,
                    f = {},
                    t;
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = h(e);
                            break
                        }
                        e = l ? $(e) : $(e, q);
                        if (!e.length) return;
                    case "object":
                        if (e.is || e.style) t = (e = $(e)).offset()
                }
                var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                $.each(b.axis.split(""), function (a, c) {
                    var d = "x" === c ? "Left" : "Top",
                        m = d.toLowerCase(),
                        g = "scroll" + d,
                        h = r[g](),
                        n = p.max(q, c);
                    t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                    b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                    !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
                });
                k(b.onAfter)
            }
        })
    };
    p.max = function (a, d) {
        var b = "x" === d ? "Width" : "Height",
            h = "scroll" + b;
        if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
        var b = "client" + b,
            k = a.ownerDocument || a.document,
            l = k.documentElement,
            k = k.body;
        return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
    };
    $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function (a) {
            return $(a.elem)[a.prop]()
        },
        set: function (a) {
            var d = this.get(a);
            if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
            var b = Math.round(a.now);
            d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
        }
    };
    return p
});


// Simple Text Rotator
! function (e) {
    var t = {
        animation: "dissolve",
        separator: ",",
        speed: 2e3
    };
    e.fn.textrotator = function (n) {
        var r = e.extend({}, t, n);
        return this.each(function () {
            var t = e(this);
            var n = [];
            e.each(t.text().split(r.separator), function (e, t) {
                n.push(t)
            });
            t.text(n[0]);
            var i = function () {
                switch (r.animation) {
                    case "dissolve":
                        t.animate({
                            textShadowBlur: 20,
                            opacity: 0
                        }, 500, function () {
                            s = e.inArray(t.text(), n);
                            if (s + 1 == n.length) s = -1;
                            t.text(n[s + 1]).animate({
                                textShadowBlur: 0,
                                opacity: 1
                            }, 500)
                        });
                        break;
                    case "flip":
                        if (t.find(".back").length > 0) {
                            t.html(t.find(".back").html())
                        }
                        var i = t.text();
                        var s = e.inArray(i, n);
                        if (s + 1 == n.length) s = -1;
                        t.html("");
                        e("<span class='front'>" + i + "</span>").appendTo(t);
                        e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                            "-webkit-transform": " rotateY(-180deg)",
                            "-moz-transform": " rotateY(-180deg)",
                            "-o-transform": " rotateY(-180deg)",
                            transform: " rotateY(-180deg)"
                        });
                        break;
                    case "flipUp":
                        if (t.find(".back").length > 0) {
                            t.html(t.find(".back").html())
                        }
                        var i = t.text();
                        var s = e.inArray(i, n);
                        if (s + 1 == n.length) s = -1;
                        t.html("");
                        e("<span class='front'>" + i + "</span>").appendTo(t);
                        e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                            "-webkit-transform": " rotateX(-180deg)",
                            "-moz-transform": " rotateX(-180deg)",
                            "-o-transform": " rotateX(-180deg)",
                            transform: " rotateX(-180deg)"
                        });
                        break;
                    case "flipCube":
                        if (t.find(".back").length > 0) {
                            t.html(t.find(".back").html())
                        }
                        var i = t.text();
                        var s = e.inArray(i, n);
                        if (s + 1 == n.length) s = -1;
                        t.html("");
                        e("<span class='front'>" + i + "</span>").appendTo(t);
                        e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                            "-webkit-transform": " rotateY(180deg)",
                            "-moz-transform": " rotateY(180deg)",
                            "-o-transform": " rotateY(180deg)",
                            transform: " rotateY(180deg)"
                        });
                        break;
                    case "flipCubeUp":
                        if (t.find(".back").length > 0) {
                            t.html(t.find(".back").html())
                        }
                        var i = t.text();
                        var s = e.inArray(i, n);
                        if (s + 1 == n.length) s = -1;
                        t.html("");
                        e("<span class='front'>" + i + "</span>").appendTo(t);
                        e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
                        t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                            "-webkit-transform": " rotateX(180deg)",
                            "-moz-transform": " rotateX(180deg)",
                            "-o-transform": " rotateX(180deg)",
                            transform: " rotateX(180deg)"
                        });
                        break;
                    case "spin":
                        if (t.find(".rotating").length > 0) {
                            t.html(t.find(".rotating").html())
                        }
                        s = e.inArray(t.text(), n);
                        if (s + 1 == n.length) s = -1;
                        t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n[s + 1]).show().css({
                            "-webkit-transform": " rotate(0) scale(1)",
                            "-moz-transform": "rotate(0) scale(1)",
                            "-o-transform": "rotate(0) scale(1)",
                            transform: "rotate(0) scale(1)"
                        });
                        break;
                    case "fade":
                        t.fadeOut(r.speed, function () {
                            s = e.inArray(t.text(), n);
                            if (s + 1 == n.length) s = -1;
                            t.text(n[s + 1]).fadeIn(r.speed)
                        });
                        break
                }
            };
            setInterval(i, r.speed)
        })
    }
}(window.jQuery)


/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function (a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }
    var f = "stellar",
        g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (a) {
                a.hide()
            },
            showElement: function (a) {
                a.show()
            }
        },
        h = {
            scroll: {
                getLeft: function (a) {
                    return a.scrollLeft()
                },
                setLeft: function (a, b) {
                    a.scrollLeft(b)
                },
                getTop: function (a) {
                    return a.scrollTop()
                },
                setTop: function (a, b) {
                    a.scrollTop(b)
                }
            },
            position: {
                getLeft: function (a) {
                    return -1 * parseInt(a.css("left"), 10)
                },
                getTop: function (a) {
                    return -1 * parseInt(a.css("top"), 10)
                }
            },
            margin: {
                getLeft: function (a) {
                    return -1 * parseInt(a.css("margin-left"), 10)
                },
                getTop: function (a) {
                    return -1 * parseInt(a.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        i = {
            position: {
                setLeft: function (a, b) {
                    a.css("left", b)
                },
                setTop: function (a, b) {
                    a.css("top", b)
                }
            },
            transform: {
                setPosition: function (a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
                }
            }
        },
        j = function () {
            var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break
                } return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                function (a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
                }
        }(),
        k = j("transform"),
        l = a("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== d,
        m = l ? function (a, b, c) {
            a.css({
                "background-position-x": b,
                "background-position-y": c
            })
        } : function (a, b, c) {
            a.css("background-position", b + " " + c)
        },
        n = l ? function (a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function (a) {
            return a.css("background-position").split(" ")
        },
        o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function () {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function () {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function () {
            var a = this,
                b = h[a.options.scrollProperty];
            this._getScrollLeft = function () {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function () {
                return b.getTop(a.$scrollElement)
            }
        },
        _defineSetters: function () {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function (a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
                b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
            }
        },
        _handleWindowLoadAndResize: function () {
            var c = this,
                d = a(b);
            c.options.responsive && d.bind("load." + this.name, function () {
                c.refresh()
            }), d.bind("resize." + this.name, function () {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        },
        refresh: function (c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
                var a = d._getScrollLeft(),
                    b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        },
        _detectViewport: function () {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        },
        _findParticles: function () {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)
                for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                var c, e, f, g, h, i, j, k, l, m = a(this),
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this) return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function () {
            var b, c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
                var b, g, h, i, j, k, l, o = a(this),
                    p = n(o),
                    q = 0,
                    r = 0,
                    s = 0,
                    t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this) return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function () {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        },
        destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function () {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function () {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        },
        _handleScrollEvent: function () {
            var a = this,
                b = !1,
                c = function () {
                    a._repositionElements(), b = !1
                },
                d = function () {
                    b || (o(c), b = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        },
        _startAnimationLoop: function () {
            var a = this;
            this._animationLoop = function () {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function (b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function () {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function () {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


// Owl Carousel
"function" != typeof Object.create && (Object.create = function (t) {
        function i() {}
        return i.prototype = t, new i
    }),
    function (t, i, s) {
        var e = {
            init: function (i, s) {
                this.$elem = t(s), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), i), this.userOptions = i, this.loadContent()
            },
            loadContent: function () {
                function i(t) {
                    var i, s = "";
                    if ("function" == typeof e.options.jsonSuccess) e.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (i in t.owl) t.owl.hasOwnProperty(i) && (s += t.owl[i].item);
                        e.$elem.html(s)
                    }
                    e.logIn()
                }
                var s, e = this;
                "function" == typeof e.options.beforeInit && e.options.beforeInit.apply(this, [e.$elem]), "string" == typeof e.options.jsonPath ? (s = e.options.jsonPath, t.getJSON(s, i)) : e.logIn()
            },
            logIn: function () {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                    opacity: 0
                }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
            },
            setVars: function () {
                return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
            },
            onStartup: function () {
                this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function () {
                !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function () {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function () {
                var t = this;
                i.setTimeout(function () {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function () {
                var t = this;
                return !1 !== t.$elem.is(":visible") ? !1 : (t.$elem.css({
                    opacity: 0
                }), i.clearInterval(t.autoPlayInterval), i.clearInterval(t.checkVisible), void(t.checkVisible = i.setInterval(function () {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), i.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function () {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
            },
            baseClass: function () {
                var t = this.$elem.hasClass(this.options.baseClass),
                    i = this.$elem.hasClass(this.options.theme);
                t || this.$elem.addClass(this.options.baseClass), i || this.$elem.addClass(this.options.theme)
            },
            updateItems: function () {
                var i, s;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (i = t(this.options.responsiveBaseWidth).width(), i > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function (t, i) {
                            return t[0] - i[0]
                        }), s = 0; s < this.options.itemsCustom.length; s += 1) this.options.itemsCustom[s][0] <= i && (this.options.items = this.options.itemsCustom[s][1]);
                else i <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), i <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), i <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), i <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), i <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function () {
                var s, e, o = this;
                return !0 !== o.options.responsive ? !1 : (e = t(i).width(), o.resizer = function () {
                    t(i).width() !== e && (!1 !== o.options.autoPlay && i.clearInterval(o.autoPlayInterval), i.clearTimeout(s), s = i.setTimeout(function () {
                        e = t(i).width(), o.updateVars()
                    }, o.options.responsiveRefreshRate))
                }, void t(i).resize(o.resizer))
            },
            updatePosition: function () {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function () {
                var i = this,
                    s = 0,
                    e = i.itemsAmount - i.options.items;
                i.$owlItems.each(function (o) {
                    var n = t(this);
                    n.css({
                        width: i.itemWidth
                    }).data("owl-item", Number(o)), (0 === o % i.options.items || o === e) && (o > e || (s += 1)), n.data("owl-roundPages", s)
                })
            },
            appendWrapperSizes: function () {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function () {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function () {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function () {
                var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
            },
            min: function () {
                return 0
            },
            loops: function () {
                var i, s, e = 0,
                    o = 0;
                for (this.positionsInArray = [0], this.pagesInArray = [], i = 0; i < this.itemsAmount; i += 1) o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && (s = t(this.$owlItems[i]), s = s.data("owl-roundPages"), s !== e && (this.pagesInArray[e] = this.positionsInArray[i], e = s))
            },
            buildControls: function () {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function () {
                var i = this,
                    s = t('<div class="owl-buttons"/>');
                i.owlControls.append(s), i.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: i.options.navigationText[0] || ""
                }), i.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: i.options.navigationText[1] || ""
                }), s.append(i.buttonPrev).append(i.buttonNext), s.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                    t.preventDefault()
                }), s.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (s) {
                    s.preventDefault(), t(this).hasClass("owl-next") ? i.next() : i.prev()
                })
            },
            buildPagination: function () {
                var i = this;
                i.paginationWrapper = t('<div class="owl-pagination"/>'), i.owlControls.append(i.paginationWrapper), i.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (s) {
                    s.preventDefault(), Number(t(this).data("owl-page")) !== i.currentItem && i.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function () {
                var i, s, e, o, n, a;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), i = 0, s = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1) 0 === o % this.options.items && (i += 1, s === o && (e = this.itemsAmount - this.options.items), n = t("<div/>", {
                    "class": "owl-page"
                }), a = t("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? i : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), n.append(a), n.data("owl-page", s === o ? e : o), n.data("owl-roundPages", i), this.paginationWrapper.append(n));
                this.checkPagination()
            },
            checkPagination: function () {
                var i = this;
                return !1 === i.options.pagination ? !1 : void i.paginationWrapper.find(".owl-page").each(function () {
                    t(this).data("owl-roundPages") === t(i.$owlItems[i.currentItem]).data("owl-roundPages") && (i.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function () {
                return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
            },
            updateControls: function () {
                this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function () {
                this.owlControls && this.owlControls.remove()
            },
            next: function (t) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                    this.currentItem = 0, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            prev: function (t) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                    this.currentItem = this.maximumItem, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            goTo: function (t, s, e) {
                var o = this;
                return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), t >= o.maximumItem ? t = o.maximumItem : 0 >= t && (t = 0), o.currentItem = o.owl.currentItem = t, !1 !== o.options.transitionStyle && "drag" !== e && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1), o.afterGo(), o.singleItemTransition(), !1) : (t = o.positionsInArray[t], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === s ? (o.swapSpeed("paginationSpeed"), i.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.paginationSpeed)) : "rewind" === s ? (o.swapSpeed(o.options.rewindSpeed), i.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), i.setTimeout(function () {
                    o.isCss3Finish = !0
                }, o.options.slideSpeed)), o.transition3d(t)) : !0 === s ? o.css2slide(t, o.options.paginationSpeed) : "rewind" === s ? o.css2slide(t, o.options.rewindSpeed) : o.css2slide(t, o.options.slideSpeed), void o.afterGo()))
            },
            jumpTo: function (t) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
            },
            afterGo: function () {
                this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function () {
                this.apStatus = "stop", i.clearInterval(this.autoPlayInterval)
            },
            checkAp: function () {
                "stop" !== this.apStatus && this.play()
            },
            play: function () {
                var t = this;
                return t.apStatus = "play", !1 === t.options.autoPlay ? !1 : (i.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = i.setInterval(function () {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function (t) {
                "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
            },
            addCssSpeed: function (t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function () {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function (t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function (t) {
                this.$owlWrapper.css(this.doTranslate(t))
            },
            css2move: function (t) {
                this.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function (t, i) {
                var s = this;
                s.isCssFinish = !1, s.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: i || s.options.slideSpeed,
                    complete: function () {
                        s.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function () {
                var t = s.createElement("div");
                t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                    support3d: null !== t && 1 === t.length,
                    isTouch: "ontouchstart" in i || i.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function () {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function () {
                var t = ["s", "e", "x"];
                this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
            },
            disabledEvents: function () {
                this.$elem.on("dragstart.owl", function (t) {
                    t.preventDefault()
                }), this.$elem.on("mousedown.disableTextSelect", function (i) {
                    return t(i.target).is("input, textarea, select, option")
                })
            },
            gestures: function () {
                function e(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function o(i) {
                    "on" === i ? (t(s).on(r.ev_types.move, n), t(s).on(r.ev_types.end, a)) : "off" === i && (t(s).off(r.ev_types.move), t(s).off(r.ev_types.end))
                }

                function n(o) {
                    o = o.originalEvent || o || i.event, r.newPosX = e(o).x - l.offsetX, r.newPosY = e(o).y - l.offsetY, r.newRelativeX = r.newPosX - l.relativePos, "function" == typeof r.options.startDragging && !0 !== l.dragging && 0 !== r.newRelativeX && (l.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === l.sliding && t(s).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function a(s) {
                    s = s.originalEvent || s || i.event;
                    var e;
                    s.target = s.target || s.srcElement, l.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = 0 > r.newRelativeX ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", 0 !== r.newRelativeX && (e = r.getNewPosition(), r.goTo(e, !1, "drag"), l.targetElement === s.target && !0 !== r.browser.isTouch && (t(s.target).on("click.disable", function (i) {
                        i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), t(i.target).off("click.disable")
                    }), s = t._data(s.target, "events").click, e = s.pop(), s.splice(0, 0, e))), o("off")
                }
                var r = this,
                    l = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", function (s) {
                    s = s.originalEvent || s || i.event;
                    var n;
                    if (3 === s.which) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
                        !1 !== r.options.autoPlay && i.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, t(this).css(r.removeTransition()), n = t(this).position(), l.relativePos = n.left, l.offsetX = e(s).x - n.left, l.offsetY = e(s).y - n.top, o("on"), l.sliding = !1, l.targetElement = s.target || s.srcElement
                    }
                })
            },
            getNewPosition: function () {
                var t = this.closestItem();
                return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
            },
            closestItem: function () {
                var i = this,
                    s = !0 === i.options.scrollPerPage ? i.pagesInArray : i.positionsInArray,
                    e = i.newPosX,
                    o = null;
                return t.each(s, function (n, a) {
                    e - i.itemWidth / 20 > s[n + 1] && e - i.itemWidth / 20 < a && "left" === i.moveDirection() ? (o = a, i.currentItem = !0 === i.options.scrollPerPage ? t.inArray(o, i.positionsInArray) : n) : e + i.itemWidth / 20 < a && e + i.itemWidth / 20 > (s[n + 1] || s[n] - i.itemWidth) && "right" === i.moveDirection() && (!0 === i.options.scrollPerPage ? (o = s[n + 1] || s[s.length - 1], i.currentItem = t.inArray(o, i.positionsInArray)) : (o = s[n + 1], i.currentItem = n + 1))
                }), i.currentItem
            },
            moveDirection: function () {
                var t;
                return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
            },
            customEvents: function () {
                var t = this;
                t.$elem.on("owl.next", function () {
                    t.next()
                }), t.$elem.on("owl.prev", function () {
                    t.prev()
                }), t.$elem.on("owl.play", function (i, s) {
                    t.options.autoPlay = s, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function () {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function (i, s) {
                    t.goTo(s)
                }), t.$elem.on("owl.jumpTo", function (i, s) {
                    t.jumpTo(s)
                })
            },
            stopOnHover: function () {
                var t = this;
                !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function () {
                    t.stop()
                }), t.$elem.on("mouseout", function () {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function () {
                var i, s, e, o, n;
                if (!1 === this.options.lazyLoad) return !1;
                for (i = 0; i < this.itemsAmount; i += 1) s = t(this.$owlItems[i]), "loaded" !== s.data("owl-loaded") && (e = s.data("owl-item"), o = s.find(".lazyOwl"), "string" != typeof o.data("src") ? s.data("owl-loaded", "loaded") : (void 0 === s.data("owl-loaded") && (o.hide(), s.addClass("loading").data("owl-loaded", "checked")), (n = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && o.length && this.lazyPreload(s, o)))
            },
            lazyPreload: function (t, s) {
                function e() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), s.removeAttr("data-src"), "fade" === a.options.lazyEffect ? s.fadeIn(400) : s.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
                }

                function o() {
                    r += 1, a.completeImg(s.get(0)) || !0 === n ? e() : 100 >= r ? i.setTimeout(o, 100) : e()
                }
                var n, a = this,
                    r = 0;
                "DIV" === s.prop("tagName") ? (s.css("background-image", "url(" + s.data("src") + ")"), n = !0) : s[0].src = s.data("src"), o()
            },
            autoHeight: function () {
                function s() {
                    var s = t(n.$owlItems[n.currentItem]).height();
                    n.wrapperOuter.css("height", s + "px"), n.wrapperOuter.hasClass("autoHeight") || i.setTimeout(function () {
                        n.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function e() {
                    o += 1, n.completeImg(a.get(0)) ? s() : 100 >= o ? i.setTimeout(e, 100) : n.wrapperOuter.css("height", "")
                }
                var o, n = this,
                    a = t(n.$owlItems[n.currentItem]).find("img");
                void 0 !== a.get(0) ? (o = 0, e()) : s()
            },
            completeImg: function (t) {
                return !t.complete || "undefined" != typeof t.naturalWidth && 0 === t.naturalWidth ? !1 : !0
            },
            onVisibleItems: function () {
                var i;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], i = this.currentItem; i < this.currentItem + this.options.items; i += 1) this.visibleItems.push(i), !0 === this.options.addClassActive && t(this.$owlItems[i]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function (t) {
                this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function () {
                var t = this,
                    i = t.outClass,
                    s = t.inClass,
                    e = t.$owlItems.eq(t.currentItem),
                    o = t.$owlItems.eq(t.prevItem),
                    n = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
                t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": a + "px",
                    "-moz-perspective-origin": a + "px",
                    "perspective-origin": a + "px"
                }), o.css({
                    position: "relative",
                    left: n + "px"
                }).addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                    t.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(o, i)
                }), e.addClass(s).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                    t.endCurrent = !0, e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(e, s)
                })
            },
            clearTransStyle: function (t, i) {
                t.css({
                    position: "",
                    left: ""
                }).removeClass(i), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function () {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function () {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), t(s).off(".owl owl"), t(i).off("resize", this.resizer)
            },
            unWrap: function () {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function () {
                this.stop(), i.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function (i) {
                i = t.extend({}, this.userOptions, i), this.unWrap(), this.init(i, this.$elem)
            },
            addItem: function (t, i) {
                var s;
                return t ? 0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), s = void 0 === i || -1 === i ? -1 : i, s >= this.$userItems.length || -1 === s ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(s).before(t), void this.setVars()) : !1
            },
            removeItem: function (t) {
                return 0 === this.$elem.children().length ? !1 : (t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), void this.setVars())
            }
        };
        t.fn.owlCarousel = function (i) {
            return this.each(function () {
                if (!0 === t(this).data("owl-init")) return !1;
                t(this).data("owl-init", !0);
                var s = Object.create(e);
                s.init(i, this), t.data(this, "owlCarousel", s)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: i,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);



//
// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//
! function () {
    function e() {
        z.keyboardSupport && m("keydown", a)
    }

    function t() {
        if (!A && document.body) {
            A = !0;
            var t = document.body,
                o = document.documentElement,
                n = window.innerHeight,
                r = t.scrollHeight;
            if (B = document.compatMode.indexOf("CSS") >= 0 ? o : t, D = t, e(), top != self) X = !0;
            else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
                var a = document.createElement("div");
                a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + B.scrollHeight + "px", document.body.appendChild(a);
                var i;
                T = function () {
                    i || (i = setTimeout(function () {
                        L || (a.style.height = "0", a.style.height = B.scrollHeight + "px", i = null)
                    }, 500))
                }, setTimeout(T, 10), m("resize", T);
                var l = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if (M = new V(T), M.observe(t, l), B.offsetHeight <= n) {
                    var c = document.createElement("div");
                    c.style.clear = "both", t.appendChild(c)
                }
            }
            z.fixedBackground || L || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
        }
    }

    function o() {
        M && M.disconnect(), h(I, r), h("mousedown", i), h("keydown", a), h("resize", T), h("load", t)
    }

    function n(e, t, o) {
        if (p(t, o), 1 != z.accelerationMax) {
            var n = Date.now(),
                r = n - R;
            if (r < z.accelerationDelta) {
                var a = (1 + 50 / r) / 2;
                a > 1 && (a = Math.min(a, z.accelerationMax), t *= a, o *= a)
            }
            R = Date.now()
        }
        if (q.push({
                x: t,
                y: o,
                lastX: 0 > t ? .99 : -.99,
                lastY: 0 > o ? .99 : -.99,
                start: Date.now()
            }), !P) {
            var i = e === document.body,
                l = function (n) {
                    for (var r = Date.now(), a = 0, c = 0, u = 0; u < q.length; u++) {
                        var d = q[u],
                            s = r - d.start,
                            f = s >= z.animationTime,
                            m = f ? 1 : s / z.animationTime;
                        z.pulseAlgorithm && (m = x(m));
                        var h = d.x * m - d.lastX >> 0,
                            w = d.y * m - d.lastY >> 0;
                        a += h, c += w, d.lastX += h, d.lastY += w, f && (q.splice(u, 1), u--)
                    }
                    i ? window.scrollBy(a, c) : (a && (e.scrollLeft += a), c && (e.scrollTop += c)), t || o || (q = []), q.length ? _(l, e, 1e3 / z.frameRate + 1) : P = !1
                };
            _(l, e, 0), P = !0
        }
    }

    function r(e) {
        A || t();
        var o = e.target,
            r = u(o);
        if (!r || e.defaultPrevented || e.ctrlKey) return !0;
        if (w(D, "embed") || w(o, "embed") && /\.pdf/i.test(o.src) || w(D, "object")) return !0;
        var a = -e.wheelDeltaX || e.deltaX || 0,
            i = -e.wheelDeltaY || e.deltaY || 0;
        return K && (e.wheelDeltaX && b(e.wheelDeltaX, 120) && (a = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))), e.wheelDeltaY && b(e.wheelDeltaY, 120) && (i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))), a || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (a *= 40, i *= 40), !z.touchpadSupport && v(i) ? !0 : (Math.abs(a) > 1.2 && (a *= z.stepSize / 120), Math.abs(i) > 1.2 && (i *= z.stepSize / 120), n(r, a, i), e.preventDefault(), void l())
    }

    function a(e) {
        var t = e.target,
            o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== N.spacebar;
        document.contains(D) || (D = document.activeElement);
        var r = /^(textarea|select|embed|object)$/i,
            a = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (r.test(t.nodeName) || w(t, "input") && !a.test(t.type) || w(D, "video") || y(e) || t.isContentEditable || e.defaultPrevented || o) return !0;
        if ((w(t, "button") || w(t, "input") && a.test(t.type)) && e.keyCode === N.spacebar) return !0;
        var i, c = 0,
            d = 0,
            s = u(D),
            f = s.clientHeight;
        switch (s == document.body && (f = window.innerHeight), e.keyCode) {
            case N.up:
                d = -z.arrowScroll;
                break;
            case N.down:
                d = z.arrowScroll;
                break;
            case N.spacebar:
                i = e.shiftKey ? 1 : -1, d = -i * f * .9;
                break;
            case N.pageup:
                d = .9 * -f;
                break;
            case N.pagedown:
                d = .9 * f;
                break;
            case N.home:
                d = -s.scrollTop;
                break;
            case N.end:
                var m = s.scrollHeight - s.scrollTop - f;
                d = m > 0 ? m + 10 : 0;
                break;
            case N.left:
                c = -z.arrowScroll;
                break;
            case N.right:
                c = z.arrowScroll;
                break;
            default:
                return !0
        }
        n(s, c, d), e.preventDefault(), l()
    }

    function i(e) {
        D = e.target
    }

    function l() {
        clearTimeout(E), E = setInterval(function () {
            F = {}
        }, 1e3)
    }

    function c(e, t) {
        for (var o = e.length; o--;) F[j(e[o])] = t;
        return t
    }

    function u(e) {
        var t = [],
            o = document.body,
            n = B.scrollHeight;
        do {
            var r = F[j(e)];
            if (r) return c(t, r);
            if (t.push(e), n === e.scrollHeight) {
                var a = s(B) && s(o),
                    i = a || f(B);
                if (X && d(B) || !X && i) return c(t, $())
            } else if (d(e) && f(e)) return c(t, e)
        } while (e = e.parentElement)
    }

    function d(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function s(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "hidden" !== t
    }

    function f(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function m(e, t) {
        window.addEventListener(e, t, !1)
    }

    function h(e, t) {
        window.removeEventListener(e, t, !1)
    }

    function w(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function p(e, t) {
        e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (Y.x !== e || Y.y !== t) && (Y.x = e, Y.y = t, q = [], R = 0)
    }

    function v(e) {
        return e ? (O.length || (O = [e, e, e]), e = Math.abs(e), O.push(e), O.shift(), clearTimeout(H), H = setTimeout(function () {
            window.localStorage && (localStorage.SS_deltaBuffer = O.join(","))
        }, 1e3), !g(120) && !g(100)) : void 0
    }

    function b(e, t) {
        return Math.floor(e / t) == e / t
    }

    function g(e) {
        return b(O[0], e) && b(O[1], e) && b(O[2], e)
    }

    function y(e) {
        var t = e.target,
            o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
            do
                if (o = t.classList && t.classList.contains("html5-video-controls")) break; while (t = t.parentNode);
        return o
    }

    function S(e) {
        var t, o, n;
        return e *= z.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * z.pulseNormalize
    }

    function x(e) {
        return e >= 1 ? 1 : 0 >= e ? 0 : (1 == z.pulseNormalize && (z.pulseNormalize /= S(1)), S(e))
    }

    function k(e) {
        for (var t in e) C.hasOwnProperty(t) && (z[t] = e[t])
    }
    var D, M, T, E, H, C = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !1,
            fixedBackground: !0,
            excluded: ""
        },
        z = C,
        L = !1,
        X = !1,
        Y = {
            x: 0,
            y: 0
        },
        A = !1,
        B = document.documentElement,
        O = [],
        K = /^Mac/.test(navigator.platform),
        N = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        q = [],
        P = !1,
        R = Date.now(),
        j = function () {
            var e = 0;
            return function (t) {
                return t.uniqueID || (t.uniqueID = e++)
            }
        }(),
        F = {};
    window.localStorage && localStorage.SS_deltaBuffer && (O = localStorage.SS_deltaBuffer.split(","));
    var I, _ = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
                window.setTimeout(e, o || 1e3 / 60)
            }
        }(),
        V = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        $ = function () {
            var e;
            return function () {
                if (!e) {
                    var t = document.createElement("div");
                    t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                    var o = document.body.scrollTop;
                    document.documentElement.scrollTop;
                    window.scrollBy(0, 1), e = document.body.scrollTop != o ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(t)
                }
                return e
            }
        }(),
        U = window.navigator.userAgent,
        W = /Edge/.test(U),
        G = /chrome/i.test(U) && !W,
        J = /safari/i.test(U) && !W,
        Q = /mobile/i.test(U),
        Z = (G || J) && !Q;
    "onwheel" in document.createElement("div") ? I = "wheel" : "onmousewheel" in document.createElement("div") && (I = "mousewheel"), I && Z && (m(I, r), m("mousedown", i), m("load", t)), k.destroy = o, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
        return k
    }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}();


/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d, e, f = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function () {
        function a() {}
        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function () {}, a
    }()), d = this.getComputedStyle || function (a) {
        return this.getPropertyValue = function (b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);



/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
                if (void 0 === c || c === !1) return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(p + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            },
            getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H)
        },
        K = function () {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function (d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L), L = setInterval(function () {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function () {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function () {
                            b.prev()
                        }), f[h](function () {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function (a) {
                    return a.src.replace(/\.\w+$/, function (a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function (b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }),
        function () {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function () {
                    v.off("touchmove" + f + " touchend" + f)
                },
                e = "mfpFastClick",
                f = "." + e;
            a.fn.mfpFastClick = function (e) {
                return a(this).each(function () {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function (a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                            }).on("touchend" + f, function (a) {
                                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                                    g = !1
                                }, b), e())
                            })
                        })
                    }
                    h.on("click" + f, function () {
                        g || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function () {
                a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
            }
        }(), A()
});



/*!
 * Flickity PACKAGED v1.1.1
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function (t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var c = this[a],
                            h = t.data(c, e);
                        if (h)
                            if (t.isFunction(h[o]) && "_" !== o.charAt(0)) {
                                var p = h[o].apply(h, s);
                                if (void 0 !== p) return p
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function (t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }
    var n, o, r;
    "classList" in document.documentElement ? (n = function (t, e) {
        return t.classList.contains(e)
    }, o = function (t, e) {
        t.classList.add(e)
    }, r = function (t, e) {
        t.classList.remove(e)
    }) : (n = function (t, i) {
        return e(i).test(t.className)
    }, o = function (t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function (t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {
        hasClass: n,
        addClass: o,
        removeClass: r,
        toggleClass: i,
        has: n,
        add: o,
        remove: r,
        toggle: i
    };
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function () {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function (t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener ? n = function (t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function (t, i, n) {
            t[i + n] = n.handleEvent ? function () {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function () {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function () {};
        i.removeEventListener ? o = function (t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(window),
    function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++)
                    if (e = i[o] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function (t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function o(i) {
            function o() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (c = function () {
                            var t = n ? function (t) {
                                return n(t, null)
                            } : function (t) {
                                return t.currentStyle
                            };
                            return function (e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), h = i("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[h] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(o);
                        var a = c(o);
                        p = 200 === e(a.width), s.removeChild(o)
                    }
                }
            }

            function a(t) {
                if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = c(t);
                    if ("none" === i.display) return n();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, u = s.length; u > d; d++) {
                        var f = s[d],
                            v = i[f];
                        v = l(t, v);
                        var y = parseFloat(v);
                        r[f] = isNaN(y) ? 0 : y
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        m = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        S = r.marginTop + r.marginBottom,
                        x = r.borderLeftWidth + r.borderRightWidth,
                        w = r.borderTopWidth + r.borderBottomWidth,
                        C = a && p,
                        E = e(i.width);
                    E !== !1 && (r.width = E + (C ? 0 : g + x));
                    var P = e(i.height);
                    return P !== !1 && (r.height = P + (C ? 0 : m + w)), r.innerWidth = r.width - (g + x), r.innerHeight = r.height - (m + w), r.outerWidth = r.width + b, r.outerHeight = r.height + S, r
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    o = n.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
            }
            var c, h, p, d = !1;
            return a
        }
        var r = "undefined" == typeof console ? i : function (t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
        }
        var r = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window),
    function (t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var r, s = function () {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                l = e(a, "div");
            r = l ? e : o
        } else r = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function (t, e, i) {
        var n = {};
        n.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function (t, e) {
            return (t % e + e) % e
        };
        var o = Object.prototype.toString;
        n.isArray = function (t) {
            return "[object Array]" == o.call(t)
        }, n.makeArray = function (t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function (t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
            return t instanceof HTMLElement
        } : function (t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function () {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function (t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function (t, e) {
            t = n.makeArray(t);
            for (var o = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && o.push(a);
                        for (var l = a.querySelectorAll(e), c = 0, h = l.length; h > c; c++) o.push(l[c])
                    } else o.push(a)
            }
            return o
        }, n.debounceMethod = function (t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function () {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, n.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var r = t.console;
        return n.htmlInit = function (i, o) {
            e(function () {
                for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, c = s.length; c > l; l++) {
                    var h, p = s[l],
                        d = p.getAttribute(a);
                    try {
                        h = d && JSON.parse(d)
                    } catch (u) {
                        r && r.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + u);
                        continue
                    }
                    var f = new i(p, h),
                        v = t.jQuery;
                    v && v.data(p, o, f)
                }
            })
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function (t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = "attachEvent" in t;
        return i.prototype.create = function () {
            this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
        }, i.prototype.destroy = function () {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, i.prototype.getSize = function () {
            this.size = e(this.element)
        }, i.prototype.setPosition = function (t) {
            this.x = t, this.setDefaultTarget(), this.renderPosition(t)
        }, i.prototype.setDefaultTarget = function () {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, i.prototype.renderPosition = function (t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, i.prototype.wrapShift = function (t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, i.prototype.remove = function () {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function (t, e, i) {
        for (var n, o = 0, r = "webkit moz ms o".split(" "), s = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < r.length && (!s || !a); l++) n = r[l], s = s || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
        s && a || (s = function (e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - o)),
                r = t.setTimeout(function () {
                    e(i + n)
                }, n);
            return o = i + n, r
        }, a = function (e) {
            t.clearTimeout(e)
        });
        var c = {};
        c.startAnimation = function () {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, c.animate = function () {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                s(function () {
                    e.animate()
                })
            }
        };
        var h = e("transform"),
            p = !!e("perspective");
        return c.positionSlider = function () {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && h ? -t : t;
            var e = this.getPositionValue(t);
            h ? this.slider.style[h] = p && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
        }, c.positionSliderAtSelected = function () {
            if (this.cells.length) {
                var t = this.cells[this.selectedIndex];
                this.x = -t.target, this.positionSlider()
            }
        }, c.getPositionValue = function (t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, c.settle = function (t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, p && this.positionSlider(), this.dispatchEvent("settle"))
        }, c.shiftWrapCells = function (t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, c._shiftCells = function (t, e, i) {
            for (var n = 0, o = t.length; o > n; n++) {
                var r = t[n],
                    s = e > 0 ? i : 0;
                r.wrapShift(s), e -= r.size.outerWidth
            }
        }, c._unshiftCells = function (t) {
            if (t && t.length)
                for (var e = 0, i = t.length; i > e; e++) t[e].wrapShift(0)
        }, c.integratePhysics = function () {
            this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
        }, c.applyForce = function (t) {
            this.accel += t
        }, c.getFrictionFactor = function () {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, c.getRestingPosition = function () {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, c.applyDragForce = function () {
            if (this.isPointerDown) {
                var t = this.dragX - this.x,
                    e = t - this.velocity;
                this.applyForce(e)
            }
        }, c.applySelectedAttraction = function () {
            var t = this.cells.length;
            if (!this.isPointerDown && !this.isFreeScrolling && t) {
                var e = this.cells[this.selectedIndex],
                    i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0,
                    n = -1 * (e.target + i) - this.x,
                    o = n * this.options.selectedAttraction;
                this.applyForce(o)
            }
        }, c
    }),
    function (t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function (i, n, o, r, s, a, l) {
            return e(t, i, n, o, r, s, a, l)
        });
        else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
        }
    }(window, function (t, e, i, n, o, r, s, a) {
        function l(t, e) {
            for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function c(t, e) {
            var i = r.getQueryElement(t);
            return i ? (this.element = i, h && (this.$element = h(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(d && d.error("Bad element for Flickity: " + (i || t)))
        }
        var h = t.jQuery,
            p = t.getComputedStyle,
            d = t.console,
            u = 0,
            f = {};
        c.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, c.createMethods = [], r.extend(c.prototype, i.prototype), c.prototype._create = function () {
            var e = this.guid = ++u;
            this.element.flickityGUID = e, f[e] = this, this.selectedIndex = this.options.initialIndex || 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", c.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
            for (var i = 0, o = c.createMethods.length; o > i; i++) {
                var r = c.createMethods[i];
                this[r]()
            }
            this.options.watchCSS ? this.watchCSS() : this.activate()
        }, c.prototype.option = function (t) {
            r.extend(this.options, t)
        }, c.prototype.activate = function () {
            if (!this.isActive) {
                this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl"), this.getSize();
                var t = this._filterFindCellElements(this.element.children);
                l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate"), this.positionSliderAtSelected(), this.select(this.selectedIndex)
            }
        }, c.prototype._createSlider = function () {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, c.prototype._filterFindCellElements = function (t) {
            return r.filterFindElements(t, this.options.cellSelector)
        }, c.prototype.reloadCells = function () {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, c.prototype._makeCells = function (t) {
            for (var e = this._filterFindCellElements(t), i = [], n = 0, o = e.length; o > n; n++) {
                var r = e[n],
                    a = new s(r, this);
                i.push(a)
            }
            return i
        }, c.prototype.getLastCell = function () {
            return this.cells[this.cells.length - 1]
        }, c.prototype.positionCells = function () {
            this._sizeCells(this.cells), this._positionCells(0)
        }, c.prototype._positionCells = function (t) {
            t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n, o = this.cells.length, r = t; o > r; r++) n = this.cells[r], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
            this.slideableWidth = e, this._containCells()
        }, c.prototype._sizeCells = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                n.getSize()
            }
        }, c.prototype._init = c.prototype.reposition = function () {
            this.positionCells(), this.positionSliderAtSelected()
        }, c.prototype.getSize = function () {
            this.size = o(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var v = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        c.prototype.setCellAlign = function () {
            var t = v[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, c.prototype.setGallerySize = function () {
            this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
        }, c.prototype._getWrapShiftCells = function () {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, c.prototype._getGapCells = function (t, e, i) {
            for (var n = []; t > 0;) {
                var o = this.cells[e];
                if (!o) break;
                n.push(o), e += i, t -= o.size.outerWidth
            }
            return n
        }, c.prototype._containCells = function () {
            if (this.options.contain && !this.options.wrapAround && this.cells.length)
                for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), o = this.slideableWidth - n.size[e], r = o - this.size.innerWidth * (1 - this.cellAlign), s = o < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
                    var c = this.cells[a];
                    c.setDefaultTarget(), s ? c.target = o * this.cellAlign : (c.target = Math.max(c.target, this.cursorPosition + i), c.target = Math.min(c.target, r))
                }
        }, c.prototype.dispatchEvent = function (t, e, i) {
            var n = [e].concat(i);
            if (this.emitEvent(t, n), h && this.$element)
                if (e) {
                    var o = h.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, c.prototype.select = function (t, e) {
            if (this.isActive) {
                var i = this.cells.length;
                this.options.wrapAround && i > 1 && (0 > t ? this.x -= this.slideableWidth : t >= i && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = r.modulo(t, i)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), this.startAnimation(), this.dispatchEvent("cellSelect"))
            }
        }, c.prototype.previous = function (t) {
            this.select(this.selectedIndex - 1, t)
        }, c.prototype.next = function (t) {
            this.select(this.selectedIndex + 1, t)
        }, c.prototype.setSelectedCell = function () {
            this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
        }, c.prototype._removeSelectedCellClass = function () {
            this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
        }, c.prototype.getCell = function (t) {
            for (var e = 0, i = this.cells.length; i > e; e++) {
                var n = this.cells[e];
                if (n.element == t) return n
            }
        }, c.prototype.getCells = function (t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    s = this.getCell(o);
                s && e.push(s)
            }
            return e
        }, c.prototype.getCellElements = function () {
            for (var t = [], e = 0, i = this.cells.length; i > e; e++) t.push(this.cells[e].element);
            return t
        }, c.prototype.getParentCell = function (t) {
            var e = this.getCell(t);
            return e ? e : (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, c.prototype.getAdjacentCellElements = function (t, e) {
            if (!t) return [this.selectedElement];
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.cells.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var n = [], o = e - t; e + t >= o; o++) {
                var s = this.options.wrapAround ? r.modulo(o, i) : o,
                    a = this.cells[s];
                a && n.push(a.element)
            }
            return n
        }, c.prototype.uiChange = function () {
            this.emit("uiChange")
        }, c.prototype.childUIPointerDown = function (t) {
            this.emitEvent("childUIPointerDown", [t])
        }, c.prototype.onresize = function () {
            this.watchCSS(), this.resize()
        }, r.debounceMethod(c, "onresize", 150), c.prototype.resize = function () {
            this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
        };
        var y = c.supportsConditionalCSS = function () {
            var t;
            return function () {
                if (void 0 !== t) return t;
                if (!p) return void(t = !1);
                var e = document.createElement("style"),
                    i = document.createTextNode('body:after { content: "foo"; display: none; }');
                e.appendChild(i), document.head.appendChild(e);
                var n = p(document.body, ":after").content;
                return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
            }
        }();
        c.prototype.watchCSS = function () {
            var t = this.options.watchCSS;
            if (t) {
                var e = y();
                if (!e) {
                    var i = "fallbackOn" == t ? "activate" : "deactivate";
                    return void this[i]()
                }
                var n = p(this.element, ":after").content; - 1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
            }
        }, c.prototype.onkeydown = function (t) {
            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                if (37 == t.keyCode) {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]()
                } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[i]()
            }
        }, c.prototype.deactivate = function () {
            if (this.isActive) {
                e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
                for (var t = 0, i = this.cells.length; i > t; t++) {
                    var o = this.cells[t];
                    o.destroy()
                }
                this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
            }
        }, c.prototype.destroy = function () {
            this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), h && this.$element && h.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, r.extend(c.prototype, a);
        var g = "attachEvent" in t;
        return c.setUnselectable = function (t) {
            g && t.setAttribute("unselectable", "on")
        }, c.data = function (t) {
            t = r.getQueryElement(t);
            var e = t && t.flickityGUID;
            return e && f[e]
        }, r.htmlInit(c, "flickity"), h && h.bridget && h.bridget("flickity", c), c.Cell = s, c
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
    }(window, function (t, e, i) {
        function n() {}

        function o() {}
        o.prototype = new e, o.prototype.bindStartEvent = function (t) {
            this._bindStartEvent(t, !0)
        }, o.prototype.unbindStartEvent = function (t) {
            this._bindStartEvent(t, !1)
        }, o.prototype._bindStartEvent = function (e, n) {
            n = void 0 === n ? !0 : !!n;
            var o = n ? "bind" : "unbind";
            t.navigator.pointerEnabled ? i[o](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[o](e, "MSPointerDown", this) : (i[o](e, "mousedown", this), i[o](e, "touchstart", this))
        }, o.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.getTouch = function (t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, o.prototype.onmousedown = function (t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, o.prototype.ontouchstart = function (t) {
            this._pointerDown(t, t.changedTouches[0])
        }, o.prototype.onMSPointerDown = o.prototype.onpointerdown = function (t) {
            this._pointerDown(t, t)
        }, o.prototype._pointerDown = function (t, e) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, o.prototype.pointerDown = function (t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return o.prototype._bindPostStartEvents = function (e) {
            if (e) {
                for (var n = r[e.type], o = e.preventDefault ? t : document, s = 0, a = n.length; a > s; s++) {
                    var l = n[s];
                    i.bind(o, l, this)
                }
                this._boundPointerEvents = {
                    events: n,
                    node: o
                }
            }
        }, o.prototype._unbindPostStartEvents = function () {
            var t = this._boundPointerEvents;
            if (t && t.events) {
                for (var e = 0, n = t.events.length; n > e; e++) {
                    var o = t.events[e];
                    i.unbind(t.node, o, this)
                }
                delete this._boundPointerEvents
            }
        }, o.prototype.onmousemove = function (t) {
            this._pointerMove(t, t)
        }, o.prototype.onMSPointerMove = o.prototype.onpointermove = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, o.prototype.ontouchmove = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, o.prototype._pointerMove = function (t, e) {
            this.pointerMove(t, e)
        }, o.prototype.pointerMove = function (t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, o.prototype.onmouseup = function (t) {
            this._pointerUp(t, t)
        }, o.prototype.onMSPointerUp = o.prototype.onpointerup = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, o.prototype.ontouchend = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, o.prototype._pointerUp = function (t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, o.prototype.pointerUp = function (t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, o.prototype._pointerDone = function () {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, o.prototype.pointerDone = n, o.prototype.onMSPointerCancel = o.prototype.onpointercancel = function (t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, o.prototype.ontouchcancel = function (t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, o.prototype._pointerCancel = function (t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, o.prototype.pointerCancel = function (t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, o.getPointerPoint = function (t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        }, o
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
    }(window, function (t, e, i) {
        function n() {}

        function o(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function r() {}

        function s() {
            return !1
        }
        r.prototype = new i, r.prototype.bindHandles = function () {
            this._bindHandles(!0)
        }, r.prototype.unbindHandles = function () {
            this._bindHandles(!1)
        };
        var a = t.navigator;
        r.prototype._bindHandles = function (t) {
            t = void 0 === t ? !0 : !!t;
            var i;
            i = a.pointerEnabled ? function (e) {
                e.style.touchAction = t ? "none" : ""
            } : a.msPointerEnabled ? function (e) {
                e.style.msTouchAction = t ? "none" : ""
            } : function () {
                t && c(s)
            };
            for (var n = t ? "bind" : "unbind", o = 0, r = this.handles.length; r > o; o++) {
                var s = this.handles[o];
                this._bindStartEvent(s, t), i(s), e[n](s, "click", this)
            }
        };
        var l = "attachEvent" in document.documentElement,
            c = l ? function (t) {
                "IMG" == t.nodeName && (t.ondragstart = s);
                for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.ondragstart = s
                }
            } : n;
        r.prototype.pointerDown = function (i, n) {
            if ("INPUT" == i.target.nodeName && "range" == i.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(i, n);
            var o = document.activeElement;
            o && o.blur && o.blur(), this._bindPostStartEvents(i), this.pointerDownScroll = r.getScrollPosition(), e.bind(t, "scroll", this), this.emitEvent("pointerDown", [i, n])
        }, r.prototype._dragPointerDown = function (t, e) {
            this.pointerDownPoint = i.getPointerPoint(e);
            var n = "touchstart" == t.type,
                r = t.target.nodeName;
            n || "SELECT" == r || o(t)
        }, r.prototype.pointerMove = function (t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, r.prototype._dragPointerMove = function (t, e) {
            var n = i.getPointerPoint(e),
                o = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, e), o
        }, r.prototype.hasDragStarted = function (t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, r.prototype.pointerUp = function (t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, r.prototype._dragPointerUp = function (t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, i.prototype.pointerDone = function () {
            e.unbind(t, "scroll", this)
        }, r.prototype._dragStart = function (t, e) {
            this.isDragging = !0, this.dragStartPoint = r.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
        }, r.prototype.dragStart = function (t, e) {
            this.emitEvent("dragStart", [t, e])
        }, r.prototype._dragMove = function (t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, r.prototype.dragMove = function (t, e, i) {
            o(t), this.emitEvent("dragMove", [t, e, i])
        }, r.prototype._dragEnd = function (t, e) {
            this.isDragging = !1;
            var i = this;
            setTimeout(function () {
                delete i.isPreventingClicks
            }), this.dragEnd(t, e)
        }, r.prototype.dragEnd = function (t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, r.prototype.pointerDone = function () {
            e.unbind(t, "scroll", this), delete this.pointerDownScroll
        }, r.prototype.onclick = function (t) {
            this.isPreventingClicks && o(t)
        }, r.prototype._staticClick = function (t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var i = t.target.nodeName;
                if (("INPUT" == i || "TEXTAREA" == i) && t.target.focus(), this.staticClick(t, e), "mouseup" != t.type) {
                    this.isIgnoringMouseUp = !0;
                    var n = this;
                    setTimeout(function () {
                        delete n.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, r.prototype.staticClick = function (t, e) {
            this.emitEvent("staticClick", [t, e])
        }, r.prototype.onscroll = function () {
            var t = r.getScrollPosition(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, r.getPointerPoint = function (t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        };
        var h = void 0 !== t.pageYOffset;
        return r.getScrollPosition = function () {
            return {
                x: h ? t.pageXOffset : document.body.scrollLeft,
                y: h ? t.pageYOffset : document.body.scrollTop
            }
        }, r.getPointerPoint = i.getPointerPoint, r
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, o, r, s) {
            return e(t, i, n, o, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function (t, e, i, n, o, r) {
        function s(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function a(e) {
            var i = o.getPointerPoint(e);
            return i.y - t.pageYOffset
        }
        r.extend(n.defaults, {
            draggable: !0,
            touchVerticalScroll: !0
        }), n.createMethods.push("_createDrag"), r.extend(n.prototype, o.prototype), n.prototype._createDrag = function () {
            this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
        }, n.prototype.bindDrag = function () {
            this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
        }, n.prototype.unbindDrag = function () {
            this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
        }, n.prototype._uiChangeDrag = function () {
            delete this.isFreeScrolling
        }, n.prototype._childUIPointerDownDrag = function (t) {
            s(t), this.pointerDownFocus(t)
        }, n.prototype.pointerDown = function (n, r) {
            if ("INPUT" == n.target.nodeName && "range" == n.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(n, r);
            var s = document.activeElement;
            s && s.blur && s != this.element && s != document.body && s.blur(), this.pointerDownFocus(n), this.dragX = this.x, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(n), this.pointerDownScroll = o.getScrollPosition(), i.bind(t, "scroll", this), this.dispatchEvent("pointerDown", n, [r])
        };
        var l = {
                touchstart: !0,
                MSPointerDown: !0
            },
            c = {
                INPUT: !0,
                SELECT: !0
            };
        n.prototype.pointerDownFocus = function (t) {
            !this.options.accessibility || l[t.type] || c[t.target.nodeName] || this.element.focus()
        }, n.prototype.pointerMove = function (t, e) {
            var i = this._dragPointerMove(t, e);
            this.touchVerticalScrollMove(t, e, i), this._dragMove(t, e, i), this.dispatchEvent("pointerMove", t, [e, i])
        }, n.prototype.hasDragStarted = function (t) {
            return !this.isTouchScrolling && Math.abs(t.x) > 3
        }, n.prototype.pointerUp = function (t, i) {
            delete this.isTouchScrolling, e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
        };
        var h = {
            touchmove: !0,
            MSPointerMove: !0
        };
        return n.prototype.touchVerticalScrollMove = function (e, i, n) {
            var o = this.options.touchVerticalScroll,
                r = "withDrag" == o ? !o : this.isDragging || !o;
            !r && h[e.type] && !this.isTouchScrolling && Math.abs(n.y) > 10 && (this.startScrollY = t.pageYOffset, this.pointerWindowStartY = a(i), this.isTouchScrolling = !0)
        }, n.prototype.dragStart = function (t, e) {
            this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
        }, n.prototype.dragMove = function (t, e, i) {
            s(t), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1,
                o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.cells.length) {
                var r = Math.max(-this.cells[0].target, this.dragStartPosition);
                o = o > r ? .5 * (o + r) : o;
                var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
                o = a > o ? .5 * (o + a) : o
            }
            this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }, n.prototype.dragEnd = function (t, e) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.select(i), this.dispatchEvent("dragEnd", t, [e])
        }, n.prototype.dragEndRestingSelect = function () {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getCellDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1),
                o = i.distance < n.distance ? i.index : n.index;
            return o
        }, n.prototype._getClosestResting = function (t, e, i) {
            for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (t, e) {
                    return e >= t
                } : function (t, e) {
                    return e > t
                }; r(e, o) && (n += i, o = e, e = this.getCellDistance(-t, n), null !== e);) e = Math.abs(e);
            return {
                distance: o,
                index: n - i
            }
        }, n.prototype.getCellDistance = function (t, e) {
            var i = this.cells.length,
                n = this.options.wrapAround && i > 1,
                o = n ? r.modulo(e, i) : e,
                s = this.cells[o];
            if (!s) return null;
            var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (s.target + a)
        }, n.prototype.dragEndBoostSelect = function () {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getCellDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : 0 > t && 0 > e ? -1 : 0
        }, n.prototype.staticClick = function (t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                o = i && r.indexOf(this.cells, i);
            this.dispatchEvent("staticClick", t, [e, n, o])
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function (t, e) {
        function i(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function n(t) {
            this.bindTap(t)
        }
        n.prototype = new e, n.prototype.bindTap = function (t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.prototype.unbindTap = function () {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        };
        var o = n.prototype.pointerDown;
        n.prototype.pointerDown = function (t) {
            "touchstart" == t.type && i(t), o.apply(this, arguments)
        };
        var r = void 0 !== t.pageYOffset;
        return n.prototype.pointerUp = function (i, n) {
            var o = e.getPointerPoint(n),
                s = this.tapElement.getBoundingClientRect(),
                a = r ? t.pageXOffset : document.body.scrollLeft,
                l = r ? t.pageYOffset : document.body.scrollTop,
                c = o.x >= s.left + a && o.x <= s.right + a && o.y >= s.top + l && o.y <= s.bottom + l;
            c && this.emitEvent("tap", [i, n])
        }, n.prototype.destroy = function () {
            this.pointerDone(), this.unbindTap()
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function (t, e, i, n, o) {
        function r(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function s(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }
        var a = "http://www.w3.org/2000/svg",
            l = function () {
                function t() {
                    if (void 0 !== e) return e;
                    var t = document.createElement("div");
                    return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a
                }
                var e;
                return t
            }();
        return r.prototype = new n, r.prototype._create = function () {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), i.setUnselectable(e), l()) {
                var n = this.createSVG();
                e.appendChild(n)
            } else this.setArrowText(), e.className += " no-svg";
            var o = this;
            this.onCellSelect = function () {
                o.update()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function (t, e) {
                o.parent.childUIPointerDown(e)
            })
        }, r.prototype.activate = function () {
            this.update(), this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
        }, r.prototype.deactivate = function () {
            this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
        }, r.prototype.createSVG = function () {
            var t = document.createElementNS(a, "svg");
            t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(a, "path"),
                i = s(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, r.prototype.setArrowText = function () {
            var t = this.parent.options,
                e = this.isLeft ? t.leftArrowText : t.rightArrowText;
            o.setText(this.element, e)
        }, r.prototype.onTap = function () {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, r.prototype.handleEvent = o.handleEvent, r.prototype.onclick = function () {
            var t = document.activeElement;
            t && t == this.element && this.onTap()
        }, r.prototype.enable = function () {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, r.prototype.disable = function () {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, r.prototype.update = function () {
            var t = this.parent.cells;
            if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
            var e = t.length ? t.length - 1 : 0,
                i = this.isPrevious ? 0 : e,
                n = this.parent.selectedIndex == i ? "disable" : "enable";
            this[n]()
        }, r.prototype.destroy = function () {
            this.deactivate()
        }, o.extend(i.defaults, {
            prevNextButtons: !0,
            leftArrowText: "‹",
            rightArrowText: "›",
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function () {
            this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
        }, i.prototype.activatePrevNextButtons = function () {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, i.prototype.deactivatePrevNextButtons = function () {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, i.PrevNextButton = r, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function (t, e, i, n, o) {
        function r(t) {
            this.parent = t, this._create()
        }
        return r.prototype = new n, r.prototype._create = function () {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
            var t = this;
            this.onCellSelect = function () {
                t.updateSelected()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function (e, i) {
                t.parent.childUIPointerDown(i)
            })
        }, r.prototype.activate = function () {
            this.setDots(), this.updateSelected(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, r.prototype.deactivate = function () {
            this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
        }, r.prototype.setDots = function () {
            var t = this.parent.cells.length - this.dots.length;
            t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
        }, r.prototype.addDots = function (t) {
            for (var e = document.createDocumentFragment(), i = []; t;) {
                var n = document.createElement("li");
                n.className = "dot", e.appendChild(n), i.push(n), t--
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, r.prototype.removeDots = function (t) {
            for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
                var o = e[i];
                this.holder.removeChild(o)
            }
        }, r.prototype.updateSelected = function () {
            this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
        }, r.prototype.onTap = function (t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = o.indexOf(this.dots, e);
                this.parent.select(i)
            }
        }, r.prototype.destroy = function () {
            this.deactivate()
        }, i.PageDots = r, o.extend(i.defaults, {
            pageDots: !0
        }), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function () {
            this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
        }, i.prototype.activatePageDots = function () {
            this.pageDots.activate()
        }, i.prototype.onCellAddedRemovedPageDots = function () {
            this.pageDots.setDots()
        }, i.prototype.deactivatePageDots = function () {
            this.pageDots.deactivate()
        }, i.PageDots = r, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "./flickity"], function (t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("./flickity")) : e(t.EventEmitter, t.eventie, t.Flickity)
    }(window, function (t, e, i) {
        function n(t) {
            if (this.isPlaying = !1, this.parent = t, r) {
                var e = this;
                this.onVisibilityChange = function () {
                    e.visibilityChange()
                }
            }
        }
        var o, r;
        return "hidden" in document ? (o = "hidden", r = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", r = "webkitvisibilitychange"), n.prototype = new t, n.prototype.play = function () {
            this.isPlaying = !0, delete this.isPaused, r && document.addEventListener(r, this.onVisibilityChange, !1), this.tick()
        }, n.prototype.tick = function () {
            if (this.isPlaying && !this.isPaused) {
                this.tickTime = new Date;
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.timeout = setTimeout(function () {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function () {
            this.isPlaying = !1, delete this.isPaused, this.clear(), r && document.removeEventListener(r, this.onVisibilityChange, !1)
        }, n.prototype.clear = function () {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function () {
            this.isPlaying && (this.isPaused = !0, this.clear())
        }, n.prototype.unpause = function () {
            this.isPaused && this.play()
        }, n.prototype.visibilityChange = function () {
            var t = document[o];
            this[t ? "pause" : "unpause"]()
        }, i.createMethods.push("_createPlayer"), i.prototype._createPlayer = function () {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, i.prototype.activatePlayer = function () {
            this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
        }, i.prototype.stopPlayer = function () {
            this.player.stop()
        }, i.prototype.deactivatePlayer = function () {
            this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
        }, i.prototype.onmouseenter = function () {
            this.player.pause(), e.bind(this.element, "mouseleave", this)
        }, i.prototype.onmouseleave = function () {
            this.player.unpause(), e.unbind(this.element, "mouseleave", this)
        }, i.Player = n, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function (t, e, i) {
        function n(t) {
            for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
                var o = t[i];
                e.appendChild(o.element)
            }
            return e
        }
        return e.prototype.insert = function (t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var o = this.cells.length;
                e = void 0 === e ? o : e;
                var r = n(i),
                    s = e == o;
                if (s) this.slider.appendChild(r);
                else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(r, a)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var l = this.cells.splice(e, o - e);
                    this.cells = this.cells.concat(i).concat(l)
                }
                this._sizeCells(i);
                var c = e > this.selectedIndex ? 0 : i.length;
                this._cellAddedRemoved(e, c)
            }
        }, e.prototype.append = function (t) {
            this.insert(t, this.cells.length)
        }, e.prototype.prepend = function (t) {
            this.insert(t, 0)
        }, e.prototype.remove = function (t) {
            var e, n, o, r = this.getCells(t),
                s = 0;
            for (e = 0, n = r.length; n > e; e++) {
                o = r[e];
                var a = i.indexOf(this.cells, o) < this.selectedIndex;
                s -= a ? 1 : 0
            }
            for (e = 0, n = r.length; n > e; e++) o = r[e], o.remove(), i.removeFrom(this.cells, o);
            r.length && this._cellAddedRemoved(0, s)
        }, e.prototype._cellAddedRemoved = function (t, e) {
            e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t, !0)
        }, e.prototype.cellSizeChange = function (t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = i.indexOf(this.cells, e);
                this.cellChange(n)
            }
        }, e.prototype.cellChange = function (t, e) {
            var i = this.slideableWidth;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll ? (this.x += i - this.slideableWidth, this.positionSlider()) : (e && this.positionSliderAtSelected(), this.select(this.selectedIndex))
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function (i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : e(t, t.classie, t.eventie, t.Flickity, t.fizzyUIUtils)
    }(window, function (t, e, i, n, o) {
        function r(t) {
            if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
            var e = t.querySelectorAll("img[data-flickity-lazyload]");
            return o.makeArray(e)
        }

        function s(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        return n.createMethods.push("_createLazyload"), n.prototype._createLazyload = function () {
            this.on("cellSelect", this.lazyLoad)
        }, n.prototype.lazyLoad = function () {
            var t = this.options.lazyLoad;
            if (t) {
                for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [], o = 0, a = i.length; a > o; o++) {
                    var l = i[o],
                        c = r(l);
                    n = n.concat(c)
                }
                for (o = 0, a = n.length; a > o; o++) {
                    var h = n[o];
                    new s(h, this)
                }
            }
        }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () {
            i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
        }, s.prototype.onload = function (t) {
            this.complete(t, "flickity-lazyloaded")
        }, s.prototype.onerror = function () {
            this.complete(event, "flickity-lazyerror")
        }, s.prototype.complete = function (t, n) {
            i.unbind(this.img, "load", this), i.unbind(this.img, "error", this);
            var o = this.flickity.getParentCell(this.img),
                r = o && o.element;
            this.flickity.cellSizeChange(r), e.add(this.img, n), this.flickity.dispatchEvent("lazyLoad", t, r)
        }, n.LazyLoader = s, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function (t) {
        return t
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function (i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
    }(window, function (t, e, i, n) {
        return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function () {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function () {
                    e.setNavCompanion(t)
                })
            }
        }, i.prototype.setNavCompanion = function (t) {
            t = n.getQueryElement(t);
            var e = i.data(t);
            if (e && e != this) {
                this.navCompanion = e;
                var o = this;
                this.onNavCompanionSelect = function () {
                    o.navCompanionSelect()
                }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
            }
        }, i.prototype.navCompanionSelect = function () {
            if (this.navCompanion) {
                var t = this.navCompanion.selectedIndex;
                this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
            }
        }, i.prototype.activateAsNavFor = function () {
            this.navCompanionSelect()
        }, i.prototype.removeNavSelectedElement = function () {
            this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
        }, i.prototype.onNavStaticClick = function (t, e, i, n) {
            "number" == typeof n && this.navCompanion.select(n)
        }, i.prototype.deactivateAsNavFor = function () {
            this.removeNavSelectedElement()
        }, i.prototype.destroyAsNavFor = function () {
            this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function (t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === d.call(t)
        }

        function r(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var o = this;
            setTimeout(function () {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, u[t] = this
        }
        var c = t.jQuery,
            h = t.console,
            p = "undefined" != typeof h,
            d = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function () {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                        var a = o[r];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function (t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function () {
            function t(t, o) {
                return e.options.debug && p && h.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var o = 0; n > o; o++) {
                var r = this.images[o];
                r.on("confirm", t), r.check()
            }
        }, s.prototype.progress = function (t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function () {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function () {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, c && (c.fn.imagesLoaded = function (t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(c(this))
        }), a.prototype = new e, a.prototype.check = function () {
            var t = u[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function (t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var u = {};
        return l.prototype = new e, l.prototype.check = function () {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function (t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function (t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function (t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function (t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function (t, e, i) {
        return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function () {
            this.on("activate", this.imagesLoaded)
        }, e.prototype.imagesLoaded = function () {
            function t(t, i) {
                var n = e.getParentCell(i.img);
                e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var e = this;
                i(this.slider).on("progress", t)
            }
        }, e
    });



/*
 * jquery-match-height master by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = -1,
        o = -1,
        i = function (t) {
            return parseFloat(t) || 0
        },
        n = function (e) {
            var o = 1,
                n = t(e),
                a = null,
                r = [];
            return n.each(function () {
                var e = t(this),
                    n = e.offset().top - i(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(a - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), a = n
            }), r
        },
        a = function (e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function (e) {
            var o = a(e);
            if (o.remove) {
                var i = this;
                return this.css(o.property, ""), t.each(r._groups, function (t, e) {
                    e.elements = e.elements.not(i)
                }), this
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({
                elements: this,
                options: o
            }), r._apply(this, o), this)
        };
    r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = n, r._parse = i, r._parseOptions = a, r._apply = function (e, o) {
            var s = a(o),
                h = t(e),
                c = [h],
                l = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                d = h.parents().filter(":hidden");
            return d.each(function () {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
                var e = t(this),
                    o = e.css("display");
                "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = n(h), h.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(c, function (e, o) {
                var n = t(o),
                    a = 0;
                if (s.target) a = s.target.outerHeight(!1);
                else {
                    if (s.byRow && n.length <= 1) return void n.css(s.property, "");
                    n.each(function () {
                        var e = t(this),
                            o = e.css("display");
                        "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block");
                        var i = {
                            display: o
                        };
                        i[s.property] = "",
                            e.css(i), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                    })
                }
                n.each(function () {
                    var e = t(this),
                        o = 0;
                    s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, a - o + "px"))
                })
            }), d.each(function () {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function () {
            var e = {};
            t("[data-match-height], [data-mh]").each(function () {
                var o = t(this),
                    i = o.attr("data-mh") || o.attr("data-match-height");
                i in e ? e[i] = e[i].add(o) : e[i] = o
            }), t.each(e, function () {
                this.matchHeight(!0)
            })
        };
    var s = function (e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function (i, n) {
        if (n && "resize" === n.type) {
            var a = t(window).width();
            if (a === e) return;
            e = a
        }
        i ? -1 === o && (o = setTimeout(function () {
            s(n), o = -1
        }, r._throttle)) : s(n)
    }, t(r._applyDataApi), t(window).bind("load", function (t) {
        r._update(!1, t)
    }), t(window).bind("resize orientationchange", function (t) {
        r._update(!0, t)
    })
});