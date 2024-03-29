(() => {
    var e, t = {
        250: () => {
        }, 328: () => {
            const e = document.querySelectorAll("[data-map]");
            "undefined" != typeof mapboxgl && e.forEach((e => {
                const t = {
                    ...e.dataset.map ? JSON.parse(e.dataset.map) : {}, ...{
                        container: e,
                        style: "mapbox://styles/mapbox/light-v9",
                        scrollZoom: !1,
                        interactive: !1
                    }
                };
                mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map(t)
            }))
        }, 524: (e, t, a) => {
            "use strict";
            var n = a(169), o = a(367), l = a.n(o);
            document.querySelectorAll("[data-autosize]").forEach((e => {
                l()(e)
            })), window.autosize = l(), window.Alert = n.bZ, window.Button = n.zx, window.Carousel = n.lr, window.Collapse = n.UO, window.Dropdown = n.Lt, window.Modal = n.u_, window.Offcanvas = n.TB, window.Popover = n.J2, window.ScrollSpy = n.DA, window.Tab = n.OK, window.Toast = n.FN, window.Tooltip = n.u;
            var r = a(320);
            const s = document.querySelectorAll(".checklist");
            s && new r.Sortable(s, {
                draggable: ".form-check",
                handle: ".form-check-label",
                mirror: {constrainDimensions: !0}
            });
            var c = a(529), i = a.n(c);
            document.querySelectorAll("[data-choices]").forEach((e => {
                const t = {
                    ...e.dataset.choices ? JSON.parse(e.dataset.choices) : {}, ...{
                        classNames: {
                            containerInner: e.className,
                            input: "form-control",
                            inputCloned: "form-control-sm",
                            listDropdown: "dropdown-menu",
                            itemChoice: "dropdown-item",
                            activeState: "show",
                            selectedState: "active"
                        }, shouldSort: !1, callbackOnCreateTemplates: function (e) {
                            return {
                                choice: (t, a) => {
                                    const n = `${t.item} ${t.itemChoice} ${a.disabled ? t.itemDisabled : t.itemSelectable}`,
                                        o = a.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable",
                                        l = a.groupId > 0 ? 'role="treeitem"' : 'role="option"',
                                        r = this.config.itemSelectText,
                                        s = a.customProperties && a.customProperties.avatarSrc ? `\n            <div class="avatar avatar-xs me-3">\n              <img class="avatar-img rounded-circle" src="${a.customProperties.avatarSrc}" alt="${a.label}" >\n            </div> ${a.label}\n          ` : a.label;
                                    return e(`\n            <div class="${n}" data-select-text="${r}" data-choice ${o} data-id="${a.id}" data-value="${a.value}" ${l}>\n              ${s}\n            </div>\n          `)
                                }
                            }
                        }
                    }
                };
                new (i())(e, t)
            })), window.Choices = i();
            var d = a(25), u = a.n(d);
            u().autoDiscover = !1, u().thumbnailWidth = null, u().thumbnailHeight = null;
            document.querySelectorAll("[data-dropzone]").forEach((e => {
                let t;
                const a = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {}, n = {
                    previewsContainer: e.querySelector(".dz-preview"),
                    previewTemplate: e.querySelector(".dz-preview").innerHTML,
                    init: function () {
                        this.on("addedfile", (function (e) {
                            1 == a.maxFiles && t && this.removeFile(t), t = e
                        }))
                    }
                }, o = {...a, ...n};
                e.querySelector(".dz-preview").innerHTML = "", new (u())(e, o)
            })), window.Dropzone = u();
            var p = a(527);
            document.querySelectorAll("[data-flatpickr]").forEach((e => {
                const t = e.dataset.flatpickr ? JSON.parse(e.dataset.flatpickr) : {};
                (0, p.Z)(e, t)
            })), window.flatpickr = p.Z;
            var f = a(802), b = a.n(f), h = a(344), m = a.n(h), y = a(157), k = a.n(y);
            const g = document.querySelectorAll(".highlight");
            b().registerLanguage("xml", k()), b().registerLanguage("javascript", m()), g.forEach((e => {
                b().highlightBlock(e)
            })), window.hljs = b();
            var v = a(382), w = a.n(v);
            const L = document.querySelectorAll("[data-inputmask]");
            w()({rightAlign: !1}).mask(L), window.Inputmask = w();
            const S = document.querySelectorAll(".kanban-category"), C = document.querySelectorAll(".kanban-add-link"),
                E = document.querySelectorAll(".kanban-add-form");

            function A(e) {
                const t = e.closest(".kanban-add"), a = t.querySelector(".card"),
                    n = t.querySelector(".kanban-add-link"), o = t.querySelector(".kanban-add-form");
                n.classList.toggle("d-none"), o.classList.toggle("d-none"), a && a.classList.contains("card-sm") && (a.classList.contains("card-flush") ? a.classList.remove("card-flush") : a.classList.add("card-flush"))
            }

            S && new r.Sortable(S, {draggable: ".kanban-item", mirror: {constrainDimensions: !0}}), C.forEach((e => {
                e.addEventListener("click", (() => {
                    A(e)
                }))
            })), E.forEach((e => {
                e.addEventListener("reset", (function () {
                    A(e)
                })), e.addEventListener("submit", (function (e) {
                    e.preventDefault()
                }))
            })), window.Sortable = r.Sortable;
            var O = a(709), x = a.n(O);
            !function () {
                const e = document.querySelectorAll("[data-list]"), t = document.querySelectorAll("[data-sort]");

                function a(e, t, a) {
                    const n = [].slice.call(e).filter((function (e) {
                        return e.checked
                    }));
                    t && (n.length ? t.classList.add("show") : t.classList.remove("show"), a.innerHTML = n.length)
                }

                void 0 !== x() && e && [].forEach.call(e, (function (e) {
                    !function (e) {
                        const t = e.querySelector(".list-alert"), n = e.querySelector(".list-alert-count"),
                            o = e.querySelector(".list-alert .btn-close"), l = e.querySelectorAll(".list-checkbox"),
                            r = e.querySelector(".list-checkbox-all"), s = e.querySelectorAll(".list-pagination"),
                            c = e.querySelector(".list-pagination-prev"), i = e.querySelector(".list-pagination-next"),
                            d = e.dataset.list && JSON.parse(e.dataset.list), u = Object.assign({
                                listClass: "list",
                                searchClass: "list-search",
                                sortClass: "list-sort"
                            }, d), p = new (x())(e, u);
                        s && [].forEach.call(s, (function (e) {
                            e.addEventListener("click", (function (e) {
                                e.preventDefault()
                            }))
                        })), i && i.addEventListener("click", (function (e) {
                            e.preventDefault();
                            const t = parseInt(p.i) + parseInt(p.page);
                            t <= p.size() && p.show(t, p.page)
                        })), c && c.addEventListener("click", (function (e) {
                            e.preventDefault();
                            const t = parseInt(p.i) - parseInt(p.page);
                            t > 0 && p.show(t, p.page)
                        })), l && [].forEach.call(l, (function (e) {
                            e.addEventListener("change", (function () {
                                a(l, t, n), r && (r.checked = !1)
                            }))
                        })), r && r.addEventListener("change", (function () {
                            [].forEach.call(l, (function (e) {
                                e.checked = r.checked
                            })), a(l, t, n)
                        })), o && o.addEventListener("click", (function (e) {
                            e.preventDefault(), r && (r.checked = !1), [].forEach.call(l, (function (e) {
                                e.checked = !1
                            })), a(l, t, n)
                        }))
                    }(e)
                })), void 0 !== x() && t && [].forEach.call(t, (function (e) {
                    e.addEventListener("click", (function (e) {
                        e.preventDefault()
                    }))
                }))
            }();
            window.List = x();
            a(328);
            document.querySelectorAll(".navbar-nav .collapse").forEach((e => {
                const t = new n.UO(e, {toggle: !1});
                e.addEventListener("show.bs.collapse", (a => {
                    a.stopPropagation();
                    e.parentElement.closest(".collapse").querySelectorAll(".collapse").forEach((e => {
                        const a = n.UO.getInstance(e);
                        a !== t && a.hide()
                    }))
                })), e.addEventListener("hide.bs.collapse", (t => {
                    t.stopPropagation();
                    e.querySelectorAll(".collapse").forEach((e => {
                        n.UO.getInstance(e).hide()
                    }))
                }))
            }));
            const D = document.querySelectorAll(".navbar .dropup, .navbar .dropend, .navbar .dropdown, .navbar .dropstart");
            window.innerWidth > 767 && D.forEach((e => {
                const t = e.querySelector('[data-bs-toggle="dropdown"]'), a = new n.Lt(t);
                e.addEventListener("mouseenter", (() => {
                    a.show()
                })), e.addEventListener("mouseleave", (() => {
                    a.hide()
                }))
            }));
            document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e => {
                new n.J2(e)
            }));
            document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e => {
                new n.u(e)
            }));
            var q = a(95), I = a.n(q);
            document.querySelectorAll("[data-quill]").forEach((e => {
                const t = {
                    ...e.dataset.quill ? JSON.parse(e.dataset.quill) : {},
                    modules: {toolbar: [["bold", "italic"], ["link", "blockquote", "code", "image"], [{list: "ordered"}, {list: "bullet"}]]},
                    theme: "snow"
                };
                new (I())(e, t)
            })), window.Quill = I();
            document.querySelectorAll('[data-toggle="wizard"]').forEach((e => {
                e.addEventListener("click", (function (t) {
                    t.preventDefault();
                    new n.OK(e).show(), e.classList.remove("active")
                }))
            }));
            var T = a(181);

            function J(e) {
                return getComputedStyle(document.documentElement).getPropertyValue(e)
            }

            T.kL.register(T.qi, T.vn, T.ZL, T.N0, T.uw, T.WY, T.jI, T.Gu, T.De, T.f$, T.ST, T.jn, T.WV, T.tt, T.od, T.CV, T.Xi, T.l7, T.ho, T.FB, T.RM, T.Dx, T.u);
            const B = {
                    gray: {
                        300: J("--bs-chart-gray-300"),
                        600: J("--bs-chart-gray-600"),
                        700: J("--bs-chart-gray-700"),
                        800: J("--bs-chart-gray-800"),
                        900: J("--bs-chart-gray-900")
                    },
                    primary: {
                        100: J("--bs-chart-primary-100"),
                        300: J("--bs-chart-primary-300"),
                        700: J("--bs-chart-primary-700")
                    },
                    black: J("--bs-dark"),
                    white: J("--bs-white"),
                    transparent: "transparent"
                }, M = "Cerebri Sans", N = document.querySelectorAll('[data-toggle="chart"]'),
                $ = document.querySelectorAll('[data-toggle="legend"]');

            function j(e) {
                const {chart: t, tooltip: a} = e, n = function (e) {
                    let t = e.canvas.parentNode.querySelector("div");
                    if (!t) {
                        t = document.createElement("div"), t.setAttribute("id", "chart-tooltip"), t.setAttribute("role", "tooltip"), t.classList.add("popover", "bs-popover-top");
                        const a = document.createElement("div");
                        a.classList.add("popover-arrow", "translate-middle-x");
                        const n = document.createElement("div");
                        n.classList.add("popover-content"), t.appendChild(a), t.appendChild(n), e.canvas.parentNode.appendChild(t)
                    }
                    return t
                }(t);
                if (0 === a.opacity) return void (n.style.visibility = "hidden");
                if (a.body) {
                    const e = a.title || [], o = a.body.map((e => e.lines)), l = document.createElement("div");
                    e.forEach((e => {
                        const t = document.createElement("h3");
                        t.classList.add("popover-header", "text-center", "text-nowrap");
                        const a = document.createTextNode(e);
                        t.appendChild(a), l.appendChild(t)
                    }));
                    const r = document.createElement("div");
                    o.forEach(((e, n) => {
                        const l = a.labelColors[n], s = document.createElement("span");
                        s.classList.add("popover-body-indicator"), s.style.backgroundColor = "line" === t.config.type && "rgba(0,0,0,0.1)" !== l.borderColor ? l.borderColor : l.backgroundColor;
                        const c = document.createElement("div");
                        c.classList.add("popover-body", "d-flex", "align-items-center", "text-nowrap"), c.classList.add(o.length > 1 ? "justify-content-left" : "justify-content-center");
                        const i = document.createTextNode(e);
                        c.appendChild(s), c.appendChild(i), r.appendChild(c)
                    }));
                    const s = n.querySelector(".popover-content");
                    for (; s.firstChild;) s.firstChild.remove();
                    s.appendChild(l), s.appendChild(r)
                }
                const {offsetLeft: o, offsetTop: l} = t.canvas;
                n.style.visibility = "visible", n.style.left = o + a.caretX + "px", n.style.top = l + a.caretY + "px", n.style.transform = "translateX(-50%) translateY(-100%) translateY(-1rem)"
            }

            function F(e) {
                const t = e.chart.scales[e.dataset.yAxisID || "y"];
                return (e.chart.tooltip.dataPoints.length > 1 ? " " + e.dataset.label + " " : " ") + t.options.ticks.callback.apply(t, [e.parsed.y, 0, []])
            }

            T.kL.defaults.responsive = !0, T.kL.defaults.maintainAspectRatio = !1, T.kL.defaults.color = J("--bs-chart-default-color"), T.kL.defaults.font.family = M, T.kL.defaults.font.size = 13, T.kL.defaults.layout.padding = 0, T.kL.defaults.plugins.legend.display = !1, T.kL.defaults.elements.point.radius = 0, T.kL.defaults.elements.point.backgroundColor = B.primary[700], T.kL.defaults.elements.line.tension = .4, T.kL.defaults.elements.line.borderWidth = 3, T.kL.defaults.elements.line.borderColor = B.primary[700], T.kL.defaults.elements.line.backgroundColor = B.transparent, T.kL.defaults.elements.line.borderCapStyle = "rounded", T.kL.defaults.elements.bar.backgroundColor = B.primary[700], T.kL.defaults.elements.bar.borderWidth = 0, T.kL.defaults.elements.bar.borderRadius = 10, T.kL.defaults.elements.bar.borderSkipped = !1, T.kL.defaults.datasets.bar.maxBarThickness = 10, T.kL.defaults.elements.arc.backgroundColor = B.primary[700], T.kL.defaults.elements.arc.borderColor = J("--bs-chart-arc-border-color"), T.kL.defaults.elements.arc.borderWidth = 4, T.kL.defaults.elements.arc.hoverBorderColor = J("--bs-chart-arc-hover-border-color"), T.kL.defaults.plugins.tooltip.enabled = !1, T.kL.defaults.plugins.tooltip.mode = "index", T.kL.defaults.plugins.tooltip.intersect = !1, T.kL.defaults.plugins.tooltip.external = j, T.kL.defaults.plugins.tooltip.callbacks.label = F, T.kL.defaults.datasets.doughnut.cutout = "83%", T.kL.overrides.doughnut.plugins.tooltip.callbacks.title = function (e) {
                return e[0].label
            }, T.kL.overrides.doughnut.plugins.tooltip.callbacks.label = function (e) {
                const t = e.chart.options.plugins.tooltip.callbacks, a = t.beforeLabel() || "",
                    n = t.afterLabel() || "";
                return a + e.formattedValue + n
            }, T.kL.defaults.scales.linear.grid = {
                borderDash: [2],
                borderDashOffset: [2],
                color: J("--bs-chart-grid-line-color"),
                drawBorder: !1,
                drawTicks: !1
            }, T.kL.defaults.scales.linear.ticks.beginAtZero = !0, T.kL.defaults.scales.linear.ticks.padding = 10, T.kL.defaults.scales.linear.ticks.stepSize = 10, T.kL.defaults.scales.category.grid = {
                drawBorder: !1,
                drawOnChartArea: !1,
                drawTicks: !1
            }, T.kL.defaults.scales.category.ticks.padding = 20, N.forEach((function (e) {
                const t = e.dataset.trigger;
                e.addEventListener(t, (function () {
                    !function (e) {
                        const t = e.dataset.target, a = e.dataset.action, n = parseInt(e.dataset.dataset),
                            o = document.querySelector(t), l = T.kL.getChart(o);
                        if ("toggle" === a) {
                            const e = l.data.datasets, t = e.filter((function (e) {
                                return !e.hidden
                            }))[0];
                            let a = e.filter((function (e) {
                                return 1e3 === e.order
                            }))[0];
                            if (!a) {
                                a = {};
                                for (const e in t) "_meta" !== e && (a[e] = t[e]);
                                a.order = 1e3, a.hidden = !0, e.push(a)
                            }
                            const o = e[n] === t ? a : e[n];
                            for (const e in t) "_meta" !== e && (t[e] = o[e]);
                            l.update()
                        }
                        if ("add" === a) {
                            const e = l.data.datasets[n], t = e.hidden;
                            e.hidden = !t
                        }
                        l.update()
                    }(e)
                }))
            })), document.addEventListener("DOMContentLoaded", (function () {
                $.forEach((function (e) {
                    !function (e) {
                        const t = T.kL.getChart(e), a = document.createElement("div");
                        t.legend.legendItems?.forEach((e => {
                            a.innerHTML += `<span class="chart-legend-item"><span class="chart-legend-indicator" style="background-color: ${e.fillStyle}"></span>${e.text}</span>`
                        }));
                        const n = e.dataset.target;
                        document.querySelector(n).appendChild(a)
                    }(e)
                }))
            })), window.Chart = T.kL, T.kL.register(T.qi, T.vn, T.ZL, T.N0, T.uw, T.WY, T.jI, T.Gu, T.De, T.f$, T.ST, T.jn, T.WV, T.tt, T.od, T.CV, T.Xi, T.l7, T.ho, T.FB, T.RM, T.Dx, T.u);
            const z = document.getElementById("audienceChart");
            z && new T.kL(z, {
                type: "line",
                options: {
                    scales: {
                        yAxisOne: {
                            display: "auto",
                            grid: {color: "#283E59"},
                            ticks: {
                                callback: function (e) {
                                    return e + "k"
                                }
                            }
                        }, yAxisTwo: {
                            display: "auto", grid: {color: "#283E59"}, ticks: {
                                callback: function (e) {
                                    return e + "%"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Customers",
                        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                        yAxisID: "yAxisOne"
                    }, {
                        label: "Sessions",
                        data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
                        yAxisID: "yAxisOne",
                        hidden: !0
                    }, {
                        label: "Conversion",
                        data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
                        yAxisID: "yAxisTwo",
                        hidden: !0
                    }]
                }
            });
            const W = document.getElementById("conversionsChart");
            W && new T.kL(W, {
                type: "bar",
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function (e) {
                                    return e + "%"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12"],
                    datasets: [{label: "2020", data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]}, {
                        label: "2019",
                        data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                        backgroundColor: "#d2ddec",
                        hidden: !0
                    }]
                }
            });
            const P = document.getElementById("trafficChart");
            P && new T.kL(P, {
                type: "doughnut",
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                afterLabel: function () {
                                    return "%"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Direct", "Organic", "Referral"],
                    datasets: [{
                        data: [60, 25, 15],
                        backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"]
                    }, {data: [15, 45, 20], backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"], hidden: !0}]
                }
            });
            const Z = document.getElementById("trafficChartAlt");
            Z && new T.kL(Z, {
                type: "doughnut",
                options: {
                    plugins: {
                        tooltip: {
                            callbacks: {
                                afterLabel: function () {
                                    return "%"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Direct", "Organic", "Referral"],
                    datasets: [{
                        data: [60, 25, 15],
                        backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"]
                    }, {data: [15, 45, 20], backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"], hidden: !0}]
                }
            });
            const H = document.getElementById("salesChart");
            H && new T.kL(H, {
                type: "line",
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function (e) {
                                    return "$" + e + "k"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Oct 1", "Oct 3", "Oct 6", "Oct 9", "Oct 12", "Oct 5", "Oct 18", "Oct 21", "Oct 24", "Oct 27", "Oct 30"],
                    datasets: [{label: "All", data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25]}, {
                        label: "Direct",
                        data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
                        hidden: !0
                    }, {label: "Organic", data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15], hidden: !0}]
                }
            });
            const R = document.getElementById("ordersChart");
            R && new T.kL(R, {
                type: "bar",
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function (e) {
                                    return "$" + e + "k"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales",
                        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
                    }, {
                        label: "Affiliate",
                        data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                        backgroundColor: "#d2ddec",
                        hidden: !0
                    }]
                }
            });
            const U = document.getElementById("earningsChart");
            U && new T.kL(U, {
                type: "bar",
                options: {
                    scales: {
                        yAxisOne: {
                            display: "auto", ticks: {
                                callback: function (e) {
                                    return "$" + e + "k"
                                }
                            }
                        }, yAxisTwo: {
                            display: "auto", ticks: {
                                callback: function (e) {
                                    return e + "k"
                                }
                            }
                        }, yAxisThree: {
                            display: "auto", ticks: {
                                callback: function (e) {
                                    return e + "%"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: "Earnings",
                        data: [18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5, 15, 10, 20],
                        yAxisID: "yAxisOne"
                    }, {
                        label: "Sessions",
                        data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35, 25, 55, 19],
                        yAxisID: "yAxisTwo",
                        hidden: !0
                    }, {
                        label: "Bounce",
                        data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25, 50, 57, 29],
                        yAxisID: "yAxisThree",
                        hidden: !0
                    }]
                }
            });
            const V = document.getElementById("weeklyHoursChart");
            V && new T.kL(V, {
                type: "bar",
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function (e) {
                                    return e + "hrs"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{data: [21, 12, 28, 15, 5, 12, 17, 2]}]
                }
            });
            const _ = document.getElementById("overviewChart");
            _ && new T.kL(_, {
                type: "line",
                options: {
                    scales: {
                        yAxisOne: {
                            display: "auto", ticks: {
                                callback: function (e) {
                                    return "$" + e + "k"
                                }
                            }
                        }, yAxisTwo: {
                            display: "auto", ticks: {
                                callback: function (e) {
                                    return e + "hrs"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Earned",
                        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                        yAxisID: "yAxisOne"
                    }, {
                        label: "Hours Worked",
                        data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
                        yAxisID: "yAxisTwo",
                        hidden: !0
                    }]
                }
            });
            const X = document.getElementById("sparklineChart");
            X && new T.kL(X, {
                type: "line",
                options: {
                    scales: {y: {display: !1}, x: {display: !1}},
                    elements: {line: {borderWidth: 2}, point: {hoverRadius: 0}},
                    plugins: {tooltip: {external: () => !1}}
                },
                data: {
                    labels: new Array(12).fill("Label"),
                    datasets: [{data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]}]
                }
            });
            const Y = document.querySelectorAll("#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour");
            Y && [].forEach.call(Y, (function (e) {
                new T.kL(e, {
                    type: "line",
                    options: {
                        scales: {y: {display: !1}, x: {display: !1}},
                        elements: {line: {borderWidth: 2, borderColor: "#D2DDEC"}, point: {hoverRadius: 0}},
                        plugins: {tooltip: {external: () => !1}}
                    },
                    data: {
                        labels: new Array(12).fill("Label"),
                        datasets: [{data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]}]
                    }
                })
            }));
            const G = document.getElementById("feedChart");
            G && new T.kL(G, {
                type: "bar",
                options: {
                    scales: {
                        y: {
                            ticks: {
                                callback: function (e) {
                                    return "$" + e + "k"
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales",
                        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
                    }, {
                        label: "Affiliate",
                        data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
                        backgroundColor: "#d2ddec",
                        hidden: !0
                    }]
                }
            })
        }
    }, a = {};

    function n(e) {
        var o = a[e];
        if (void 0 !== o) return o.exports;
        var l = a[e] = {exports: {}};
        return t[e].call(l.exports, l, l.exports, n), l.exports
    }

    n.m = t, e = [], n.O = (t, a, o, l) => {
        if (!a) {
            var r = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [a, o, l] = e[d], s = !0, c = 0; c < a.length; c++) (!1 & l || r >= l) && Object.keys(n.O).every((e => n.O[e](a[c]))) ? a.splice(c--, 1) : (s = !1, l < r && (r = l));
                if (s) {
                    e.splice(d--, 1);
                    var i = o();
                    void 0 !== i && (t = i)
                }
            }
            return t
        }
        l = l || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
        e[d] = [a, o, l]
    }, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {enumerable: !0, get: t[a]})
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, (() => {
        var e = {505: 0};
        n.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var o, l, [r, s, c] = a, i = 0;
            if (r.some((t => 0 !== e[t]))) {
                for (o in s) n.o(s, o) && (n.m[o] = s[o]);
                if (c) var d = c(n)
            }
            for (t && t(a); i < r.length; i++) l = r[i], n.o(e, l) && e[l] && e[l][0](), e[r[i]] = 0;
            return n.O(d)
        }, a = self.webpackChunkdashkit = self.webpackChunkdashkit || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    })(), n.O(void 0, [736], (() => n(524)));
    var o = n.O(void 0, [736], (() => n(250)));
    o = n.O(o)
})();
//# sourceMappingURL=theme.bundle.js.map