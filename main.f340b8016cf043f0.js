'use strict';
(self.webpackChunkwww = self.webpackChunkwww || []).push([
  [179],
  {
    2976: (Re, q, C) => {
      C.d(q, { l: () => l });
      const l = {
        VIEWPORT: {
          MOBILE_MIN: 0,
          MOBILE_MAX: 767,
          TABLET_MIN: 768,
          TABLET_MAX: 1199,
          DESKTOP_MIN: 1200,
          DESKTOP_MAX: 99999,
        },
        PATTERN: {
          SYSTEM_CODE: '^[a-zA-Z0-9\\._-]{2,32}$',
          ERC20_ADDRESS: '^0x[a-fA-F0-9]{40}$',
          TRC20_ADDRESS: '^T[A-Za-z1-9]{33}$',
          IPV4_ADDRESS:
            '^(?!0)(?!.*\\.$)((1?\\d?\\d|25[0-5]|2[0-4]\\d)(\\.|$)){4}$',
          HTTP_ADDRESS:
            "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
          USERNAME: '^[a-zA-Z0-9\\._-]{3,32}$',
          TELEGRAM: '^@[a-zA-Z0-9\\._-]{2,32}$',
          CONTACT: '^(?:@)?[a-zA-Z0-9\\._-]{2,32}$',
          PHONE: '^([+]?[\\s0-9]+)?(\\d{3}|[(]?[0-9]+[)])?([-]?[\\s]?[0-9])+$',
          URL: "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
          YOUTUBE_URL:
            '(?:http?s?:\\/\\/)?(?:www.)?(?:m.)?(?:music.)?youtu(?:\\.?be)(?:\\.com)?(?:(?:\\w*.?:\\/\\/)?\\w*.?\\w*-?.?\\w*\\/(?:embed|e|v|watch|.*\\/)?\\??(?:feature=\\w*\\.?\\w*)?&?(?:v=)?\\/?)([\\w\\d_-]{11})(?:\\S+)?',
          INTEGER: '^[\\d]+$',
          PINCODE: '^[\\d]{6}$',
          OTP: '^[\\d]{6}$',
        },
      };
    },
    900: (Re, q, C) => {
      C.d(q, { z: () => X });
      var l = C(1135),
        v = C(8505),
        k = C(2976),
        j = C(4650),
        H = C(529),
        V = C(1303),
        $ = C(2849),
        Z = C(3416);
      let X = (() => {
        class Q {
          get appName() {
            return this.config.appName;
          }
          get company() {
            return this.config.company;
          }
          get user() {
            return this.config.user;
          }
          get language() {
            return this.config.language;
          }
          get languages() {
            return this.config.languages;
          }
          get currency() {
            return this.config.currency;
          }
          get currencies() {
            return this.config.currencies;
          }
          get authState() {
            return {
              isLogged: this.config.isLogged,
              isGuest: this.config.isGuest,
            };
          }
          get isLogged() {
            return this.config.isLogged;
          }
          get isGuest() {
            return this.config.isGuest;
          }
          constructor(L, se, te, De) {
            (this.http = L),
              (this.storage = se),
              (this.event = te),
              (this.translateService = De),
              (this.viewParams = {
                address: [
                  {
                    link: 'https://goo.gl/maps/SLztmePmuHzPFPDA8',
                    value:
                      '2/6 Gilmer Terrace, Wellington Central, Wellington 6011, New Zealand',
                  },
                  {
                    link: 'https://goo.gl/maps/PjVuiWMzHwtAXKnq5',
                    value: '32 London Bridge Street, London SE1 9SG',
                  },
                  {
                    link: 'https://goo.gl/maps/mcJ3XMcXaYmM6afc8',
                    value:
                      '\u5104\u4eac\u5ee3\u5834 2 \u671f Cheung Yue St, Cheung Sha Wan, Hong Kong ',
                  },
                ],
                company: { number: 8833418 },
              }),
              (this.viewport$ = new l.X(null)),
              (this.pathname$ = new l.X('/')),
              (this.burgerState$ = new l.X(!0)),
              (this.displayBalances$ = new l.X(!0));
          }
          init() {
            return this.http.post('/init', {}).pipe(
              (0, v.b)((L) => {
                const se = this.storage.get(
                    'language',
                    L.languages[0].code.toLowerCase()
                  ),
                  te = this.storage.get(
                    'currency',
                    L.currencies[0].code.toLowerCase()
                  ),
                  De =
                    L.languages.find((Ne) => Ne.code === se) || L.languages[0],
                  ke =
                    L.currencies.find((Ne) => Ne.code === te) ||
                    L.currencies[0],
                  de = this.storage.get('displayBalances', !0);
                this.setConfig({ ...L, language: De, currency: ke }),
                  this.storage.set({
                    language: De.code.toLowerCase(),
                    currency: ke.code.toLowerCase(),
                  }),
                  this.translateService.setDefaultLang(
                    L.languages[0].code ?? 'en'
                  ),
                  this.translateService.use(De.code),
                  this.displayBalances$.next(de),
                  this.event.trigger('init', L);
              })
            );
          }
          setConfig(L, se = !0) {
            (this.config = { ...this.config, ...L }),
              se && this.event.trigger('configChanged', L);
          }
          setLanguage(L, se = !0) {
            (this.config.language = L),
              this.storage.set({ language: L.code.toLowerCase() }),
              se && this.event.trigger('languageChanged', L),
              location.reload();
          }
          setCurrency(L, se = !0) {
            (this.config.currency = L),
              this.storage.set({ currency: L.code.toLowerCase() }),
              se && this.event.trigger('currencyChanged', L);
          }
          setUser(L, se = !0) {
            (this.config.user = { ...Object(this.config.user), ...L }),
              se && this.event.trigger('userChanged', L);
          }
          showBurger() {
            this.burgerState$.next(!0), this.lockBody(!0);
          }
          hideBurger() {
            this.burgerState$.next(!1), this.lockBody(!1);
          }
          getViewportParams(L = !0, se = !0) {
            const te = window.innerWidth,
              De = window.innerHeight,
              ke = k.l.VIEWPORT,
              de = {
                width: te,
                height: De,
                type: 'desktop',
                isDesktop: !1,
                isTablet: !1,
                isMobile: !1,
              };
            return (
              te <= ke.MOBILE_MAX
                ? ((de.type = 'mobile'),
                  (de.isDesktop = !1),
                  (de.isTablet = !1),
                  (de.isMobile = !0))
                : te >= ke.TABLET_MIN && te <= ke.TABLET_MAX
                ? ((de.type = 'tablet'),
                  (de.isDesktop = !1),
                  (de.isTablet = !0),
                  (de.isMobile = !1))
                : te >= ke.DESKTOP_MIN &&
                  ((de.type = 'desktop'),
                  (de.isDesktop = !0),
                  (de.isTablet = !1),
                  (de.isMobile = !1)),
              this.viewport$.next(de),
              L && this.event.trigger('viewportChanged', de),
              se && this.adjustViewHeightVar(de.height),
              de
            );
          }
          lockBody(L) {
            const se = document.querySelectorAll('.js-paddingOffset');
            if (L) {
              const te = window.innerWidth - document.body.offsetWidth + 'px';
              se.forEach((De) => (De.style.paddingRight = te)),
                (document.body.style.paddingRight = te),
                (document.body.style.overflowY = 'hidden');
            } else
              se.forEach((te) => (te.style.paddingRight = '0px')),
                (document.body.style.paddingRight = '0px'),
                (document.body.style.overflowY = 'auto');
          }
          setUpline(L) {
            return this.http.post('/facade/setUpline', { hash: L }).pipe(
              (0, v.b)((se) => {
                setTimeout(() => this.event.trigger('uplineChanged', se), 1e3);
              })
            );
          }
          logout() {
            this.setConfig({ isGuest: !0, isLogged: !1, user: null }),
              this.event.trigger('logout', null);
          }
          setBalanceVisibility(L) {
            this.displayBalances$.next(L),
              this.storage.set({ displayBalances: L });
          }
          adjustViewHeightVar(L = window.innerHeight) {
            document.documentElement.style.setProperty('--vh', 0.01 * L + 'px');
          }
        }
        return (
          (Q.ɵfac = function (L) {
            return new (L || Q)(
              j.LFG(H.eN),
              j.LFG(V.V),
              j.LFG($.P),
              j.LFG(Z.sK)
            );
          }),
          (Q.ɵprov = j.Yz7({ token: Q, factory: Q.ɵfac, providedIn: 'root' })),
          Q
        );
      })();
    },
    384: (Re, q, C) => {
      C.d(q, { e: () => k });
      var l = C(4650),
        v = C(529);
      let k = (() => {
        class j {
          constructor(V) {
            this.http = V;
          }
          doSignin(V) {
            return this.http.post('/auth/doSignin', V);
          }
          getSignup() {
            return this.http.post('/auth/getSignup', {});
          }
          doSignup(V) {
            return this.http.post('/auth/doSignup', V);
          }
          doReset(V) {
            return this.http.post('/auth/doReset', V);
          }
          doResetConfirm(V) {
            return this.http.post('/auth/doResetConfirm', { hash: V });
          }
          doLogout() {
            return this.http.post('/auth/doLogout', {});
          }
        }
        return (
          (j.ɵfac = function (V) {
            return new (V || j)(l.LFG(v.eN));
          }),
          (j.ɵprov = l.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
    },
    7355: (Re, q, C) => {
      C.d(q, { Z: () => H });
      var l = C(7579),
        v = C(4128),
        k = C(590),
        j = C(4650);
      let H = (() => {
        class V {
          constructor() {
            (this.show$ = new l.x()), (this.hide$ = new l.x());
          }
          show(Z, X = {}) {
            X.resolve
              ? (0, v.D)(X.resolve)
                  .pipe((0, k.P)())
                  .subscribe((Q) => {
                    delete X.resolve,
                      this.show$.next({
                        component: Z,
                        payload: { ...X, ...Q },
                      });
                  })
              : this.show$.next({ component: Z, payload: X });
          }
          hide() {
            this.hide$.next();
          }
        }
        return (
          (V.ɵfac = function (Z) {
            return new (Z || V)();
          }),
          (V.ɵprov = j.Yz7({ token: V, factory: V.ɵfac, providedIn: 'root' })),
          V
        );
      })();
    },
    9154: (Re, q, C) => {
      C.d(q, { k: () => j });
      var l = C(7579),
        v = C(4650),
        k = (() => {
          return (
            ((H = k || (k = {})).Info = 'info'),
            (H.Warning = 'warning'),
            (H.Success = 'success'),
            (H.Error = 'error'),
            k
          );
          var H;
        })();
      let j = (() => {
        class H {
          constructor() {
            (this.interval = 7e3), (this.queue$ = new l.x());
          }
          success($, Z) {
            this.show({
              type: k.Success,
              typeClass: 'green',
              title: 'msg.title.success',
              message: $,
              ...Z,
            });
          }
          error($, Z) {
            this.show({
              type: k.Error,
              typeClass: 'red',
              title: 'msg.title.error',
              message: $,
              ...Z,
            });
          }
          warning($, Z) {
            this.show({
              type: k.Warning,
              typeClass: 'yellow',
              title: 'msg.title.warning',
              message: $,
              ...Z,
            });
          }
          info($, Z) {
            this.show({
              type: k.Info,
              typeClass: 'blue',
              title: 'msg.title.info',
              message: $,
              ...Z,
            });
          }
          show($) {
            ($.timeout = $.timeout ?? this.interval), this.queue$.next($);
          }
        }
        return (
          (H.ɵfac = function ($) {
            return new ($ || H)();
          }),
          (H.ɵprov = v.Yz7({ token: H, factory: H.ɵfac, providedIn: 'root' })),
          H
        );
      })();
    },
    2849: (Re, q, C) => {
      C.d(q, { P: () => V });
      var l = C(7579),
        v = C(9300),
        k = C(4004),
        j = C(2340),
        H = C(4650);
      let V = (() => {
        class $ {
          constructor() {
            this.events$ = new l.x();
          }
          trigger(X, Q, U = j.N.debugEvents) {
            return (
              U && console.info('%s', X, Q),
              this.events$.next({ event: X, data: Q })
            );
          }
          bind(X) {
            return this.events$.pipe(
              (0, v.h)((Q) => Q.event === X),
              (0, k.U)((Q) => Q.data)
            );
          }
        }
        return (
          ($.ɵfac = function (X) {
            return new (X || $)();
          }),
          ($.ɵprov = H.Yz7({ token: $, factory: $.ɵfac, providedIn: 'root' })),
          $
        );
      })();
    },
    1303: (Re, q, C) => {
      C.d(q, { V: () => k });
      var l = C(2340),
        v = C(4650);
      let k = (() => {
        class j {
          constructor() {
            this.key = l.N.storageKey;
          }
          use(V) {
            this.key = V;
          }
          has(V) {
            return void 0 !== this.readStorage()[V];
          }
          set(V) {
            let $ = this.readStorage(),
              Z = 0;
            return (
              Object.entries(V).forEach((X) => {
                const Q = X[0],
                  U = X[1];
                $[Q] !== U && (++Z, ($[Q] = U));
              }),
              this.writeStorage($),
              Z > 0
            );
          }
          get(V, $) {
            const Z = this.readStorage();
            return void 0 !== Z[V] ? Z[V] : void 0 !== $ ? $ : null;
          }
          unset(V) {
            const $ = this.readStorage();
            return void 0 !== $[V] && (delete $[V], this.writeStorage($), !0);
          }
          clear(V) {
            if (V && V.length) {
              const $ = this.readStorage();
              let Z = 0;
              return (
                V.forEach((X) => {
                  void 0 !== $[X] && (delete $[X], ++Z);
                }),
                this.writeStorage($),
                Z > 0
              );
            }
            return this.clearStorage(), !0;
          }
          readStorage() {
            const V = localStorage.getItem(this.key);
            return null !== V ? JSON.parse(V) ?? {} : {};
          }
          writeStorage(V) {
            localStorage.setItem(this.key, JSON.stringify(V));
          }
          clearStorage() {
            localStorage.removeItem(this.key);
          }
        }
        return (
          (j.ɵfac = function (V) {
            return new (V || j)();
          }),
          (j.ɵprov = v.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
    },
    7153: (Re, q, C) => {
      C.d(q, { y: () => k });
      var l = C(1135),
        v = C(4650);
      let k = (() => {
        class j {
          constructor() {
            this.obs$ = new l.X(null);
          }
        }
        return (
          (j.ɵfac = function (V) {
            return new (V || j)();
          }),
          (j.ɵprov = v.Yz7({ token: j, factory: j.ɵfac, providedIn: 'root' })),
          j
        );
      })();
    },
    4466: (Re, q, C) => {
      C.d(q, { m: () => Z });
      var l = C(6895),
        v = C(3082),
        k = C(4006),
        j = C(3447),
        H = C(3416),
        V = C(2340),
        $ = C(4650);
      let Z = (() => {
        class X {}
        return (
          (X.ɵfac = function (U) {
            return new (U || X)();
          }),
          (X.ɵmod = $.oAB({ type: X })),
          (X.ɵinj = $.cJS({
            providers: [(0, l.WL)(V.N.imagekit.urlEndpoint)],
            imports: [
              l.ez,
              v.Bz,
              k.u5,
              k.UX,
              j.Iq,
              H.aw,
              l.ez,
              v.Bz,
              k.u5,
              k.UX,
              j.Iq,
              H.aw,
            ],
          })),
          X
        );
      })();
    },
    2340: (Re, q, C) => {
      C.d(q, { N: () => l });
      const l = {
        production: !0,
        apiUrl: '/api',
        i18nUrl:
          'https://cdn.simplelocalize.io/e9fe3aac1004476d9cb3004923b01f88/_latest',
        timezone: 'UTC',
        debugEvents: !1,
        debugForms: !1,
        storageKey: 'sxStorage_1603',
        datePipeOptions: { dateFormat: 'shortDate', timezone: '+0000' },
        turnstile: { siteKey: '0x4AAAAAAADhhC80LU48XVa-' },
        imagekit: {
          urlEndpoint: 'https://ik.imagekit.io/ovaxglobal',
          size: { width: 40, height: 40 },
        },
        pusher: { key: '8f02af3afd9e129e8459', cluster: 'eu' },
      };
    },
    6306: (Re, q, C) => {
      var l = C(1481),
        v = C(4650),
        k = C(3082),
        j = C(529),
        H = C(262),
        V = C(2843),
        $ = C(2340),
        Z = C(9154),
        X = C(900);
      let Q = (() => {
          class b {
            constructor() {
              (this.router = (0, v.f3M)(k.F0)),
                (this.toastService = (0, v.f3M)(Z.k)),
                (this.appService = (0, v.f3M)(X.z)),
                (this.getHttpErrorMessage = (O) => {
                  const Te = [
                    { code: 0, msg: 'Unknown application error' },
                    { code: 400, msg: 'Invalid request' },
                    { code: 401, msg: 'Authorization required' },
                    { code: 403, msg: 'Forbidden' },
                    { code: 404, msg: 'The requested page was not found' },
                    { code: 500, msg: 'Internal server error' },
                  ].find((He) => He.code === O.status);
                  return Te ? Te.msg : O.statusText;
                });
            }
            intercept(O, B) {
              const Te = O.clone({
                url:
                  O.url.startsWith('assets') || O.url.startsWith('http')
                    ? O.url
                    : $.N.apiUrl + O.url,
              });
              return B.handle(Te).pipe(
                (0, H.K)((He) => {
                  if (401 === He.status)
                    this.appService.logout(),
                      this.router.navigate(['signin']).then();
                  else if (301 === He.status && void 0 !== He.error.data.url)
                    this.router.navigate([He.error.data.url]).then();
                  else {
                    const rt = He.error && He.error.message,
                      Ze = rt
                        ? He.error.message.trim()
                        : this.getHttpErrorMessage(He);
                    this.toastService.error(Ze, {
                      title: rt ? 'msg.title.error' : `HTTP ${He.status}`,
                    });
                  }
                  return (0, V._)(() => He);
                })
              );
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵprov = v.Yz7({ token: b, factory: b.ɵfac })),
            b
          );
        })(),
        U = (() => {
          class b {}
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵmod = v.oAB({ type: b })),
            (b.ɵinj = v.cJS({
              providers: [{ provide: j.TP, useClass: Q, multi: !0 }],
              imports: [j.JF],
            })),
            b
          );
        })();
      var L = C(4466),
        se = C(4707);
      function te(b, P) {
        return (O, B) => !b.call(P, O, B);
      }
      var De = C(9300),
        ke = C(8421),
        Ne = C(6451),
        Me = C(5963),
        We = C(8746),
        be = C(3900),
        Ee = C(4482),
        Ye = C(5032),
        nt = C(5403);
      function Pe(b) {
        return (0, Ee.e)((P, O) => {
          let B = !1,
            Te = null,
            He = null;
          const rt = () => {
            if ((He?.unsubscribe(), (He = null), B)) {
              B = !1;
              const Ze = Te;
              (Te = null), O.next(Ze);
            }
          };
          P.subscribe(
            (0, nt.x)(
              O,
              (Ze) => {
                He?.unsubscribe(),
                  (B = !0),
                  (Te = Ze),
                  (He = (0, nt.x)(O, rt, Ye.Z)),
                  (0, ke.Xf)(b(Ze)).subscribe(He);
              },
              () => {
                rt(), O.complete();
              },
              void 0,
              () => {
                Te = He = null;
              }
            )
          );
        });
      }
      var Se = C(1884),
        xe = C(8505),
        we = C(6895);
      function Le(b, P) {
        1 & b && v.GkF(0);
      }
      function ot(b, P) {
        if ((1 & b && v._UZ(0, 'sk-cube-grid', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function Ke(b, P) {
        if ((1 & b && v._UZ(0, 'sk-chasing-dots', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function oe(b, P) {
        if ((1 & b && v._UZ(0, 'sk-double-bounce', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function ie(b, P) {
        if ((1 & b && v._UZ(0, 'sk-rotating-plane', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function he(b, P) {
        if ((1 & b && v._UZ(0, 'sk-spinner-pulse', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function ve(b, P) {
        if ((1 & b && v._UZ(0, 'sk-three-bounce', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function _e(b, P) {
        if ((1 & b && v._UZ(0, 'sk-wandering-cubes', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      function Y(b, P) {
        if ((1 & b && v._UZ(0, 'sk-wave', 4), 2 & b)) {
          const O = v.oxw(2);
          v.Q6J('backgroundColor', O.backgroundColor);
        }
      }
      const me = function (b) {
        return { 'background-color': b };
      };
      function F(b, P) {
        if (
          (1 & b &&
            (v.TgZ(0, 'div', 1),
            v.YNc(1, Le, 1, 0, 'ng-container', 2),
            v.YNc(2, ot, 1, 1, 'sk-cube-grid', 3),
            v.YNc(3, Ke, 1, 1, 'sk-chasing-dots', 3),
            v.YNc(4, oe, 1, 1, 'sk-double-bounce', 3),
            v.YNc(5, ie, 1, 1, 'sk-rotating-plane', 3),
            v.YNc(6, he, 1, 1, 'sk-spinner-pulse', 3),
            v.YNc(7, ve, 1, 1, 'sk-three-bounce', 3),
            v.YNc(8, _e, 1, 1, 'sk-wandering-cubes', 3),
            v.YNc(9, Y, 1, 1, 'sk-wave', 3),
            v.qZA()),
          2 & b)
        ) {
          const O = v.oxw();
          v.Udp('opacity', O.opacity),
            v.ekj('backdrop', O.backdrop),
            v.Q6J(
              'ngStyle',
              v.VKq(
                14,
                me,
                O.backdrop ? O.backdropBackgroundColor : 'transparent'
              )
            ),
            v.xp6(1),
            v.Q6J('ngComponentOutlet', O.entryComponent),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skCubeGrid),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skChasingDots),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skDoubleBounce),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skRotatingPlane),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skSpinnerPulse),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skThreeBounce),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skWanderingCubes),
            v.xp6(1),
            v.Q6J('ngIf', O.spinner === O.spinkit.skWave);
        }
      }
      let re = (() => {
          class b {}
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵdir = v.lG2({
              type: b,
              inputs: { backgroundColor: 'backgroundColor' },
            })),
            b
          );
        })(),
        ce = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-chasing-dots']],
              features: [v.qOj],
              decls: 3,
              vars: 6,
              consts: [
                [1, 'sk-chasing-dots'],
                [1, 'sk-child', 'sk-dot1'],
                [1, 'sk-child', 'sk-dot2'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-chasing-dots[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;animation:_ngcontent-%COMP%_sk-chasingDotsRotate 2s infinite linear}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;animation:_ngcontent-%COMP%_sk-chasingDotsBounce 2s infinite ease-in-out}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-dot2[_ngcontent-%COMP%]{top:auto;bottom:0;animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-chasingDotsRotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-chasingDotsBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}',
              ],
            })),
            b
          );
        })(),
        Ie = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-cube-grid']],
              features: [v.qOj],
              decls: 10,
              vars: 20,
              consts: [
                [1, 'sk-cube-grid'],
                [1, 'sk-cube', 'sk-cube1'],
                [1, 'sk-cube', 'sk-cube2'],
                [1, 'sk-cube', 'sk-cube3'],
                [1, 'sk-cube', 'sk-cube4'],
                [1, 'sk-cube', 'sk-cube5'],
                [1, 'sk-cube', 'sk-cube6'],
                [1, 'sk-cube', 'sk-cube7'],
                [1, 'sk-cube', 'sk-cube8'],
                [1, 'sk-cube', 'sk-cube9'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'div', 4)(
                    5,
                    'div',
                    5
                  )(6, 'div', 6)(7, 'div', 7)(8, 'div', 8)(9, 'div', 9),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-cube-grid[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:33.33%;height:33.33%;float:left;animation:_ngcontent-%COMP%_sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]{animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%]{animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%]{animation-delay:.2s}@keyframes _ngcontent-%COMP%_sk-cubeGridScaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}',
              ],
            })),
            b
          );
        })(),
        Oe = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-double-bounce']],
              features: [v.qOj],
              decls: 3,
              vars: 6,
              consts: [
                [1, 'sk-double-bounce'],
                [1, 'sk-child', 'sk-double-bounce1'],
                [1, 'sk-child', 'sk-double-bounce2'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-double-bounce[_ngcontent-%COMP%]{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-doubleBounce 2s infinite ease-in-out}.sk-double-bounce[_ngcontent-%COMP%]   .sk-double-bounce2[_ngcontent-%COMP%]{animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-doubleBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}',
              ],
            })),
            b
          );
        })(),
        ct = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-rotating-plane']],
              features: [v.qOj],
              decls: 1,
              vars: 2,
              consts: [[1, 'sk-rotating-plane', 'colored-parent']],
              template: function (O, B) {
                1 & O && v._UZ(0, 'div', 0),
                  2 & O && v.Udp('background-color', B.backgroundColor);
              },
              styles: [
                '.sk-rotating-plane[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;animation:_ngcontent-%COMP%_sk-rotatePlane 1.2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}',
              ],
            })),
            b
          );
        })(),
        Dt = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-spinner-pulse']],
              features: [v.qOj],
              decls: 1,
              vars: 2,
              consts: [[1, 'sk-spinner', 'sk-spinner-pulse', 'colored-parent']],
              template: function (O, B) {
                1 & O && v._UZ(0, 'div', 0),
                  2 & O && v.Udp('background-color', B.backgroundColor);
              },
              styles: [
                '.sk-spinner-pulse[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;animation:_ngcontent-%COMP%_sk-pulseScaleOut 1s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}',
              ],
            })),
            b
          );
        })(),
        Mt = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-three-bounce']],
              features: [v.qOj],
              decls: 4,
              vars: 8,
              consts: [
                [1, 'sk-three-bounce'],
                [1, 'sk-child', 'sk-bounce1'],
                [1, 'sk-child', 'sk-bounce2'],
                [1, 'sk-child', 'sk-bounce3'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2)(3, 'div', 3),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-three-bounce[_ngcontent-%COMP%]{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-three-bounce 1.4s ease-in-out 0s infinite both}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes _ngcontent-%COMP%_sk-three-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}',
              ],
            })),
            b
          );
        })(),
        At = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-wandering-cubes']],
              features: [v.qOj],
              decls: 3,
              vars: 6,
              consts: [
                [1, 'sk-wandering-cubes'],
                [1, 'sk-cube', 'sk-cube1'],
                [1, 'sk-cube', 'sk-cube2'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-wandering-cubes[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:10px;height:10px;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-wanderingCube 1.8s ease-in-out -1.8s infinite both}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:-.9s}@keyframes _ngcontent-%COMP%_sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translate(30px) rotate(-90deg) scale(.5)}50%{transform:translate(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translate(30px) translateY(30px) rotate(-180deg)}75%{transform:translate(0) translateY(30px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}',
              ],
            })),
            b
          );
        })(),
        Wt = (() => {
          class b extends re {}
          return (
            (b.ɵfac = (function () {
              let P;
              return function (B) {
                return (P || (P = v.n5z(b)))(B || b);
              };
            })()),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['sk-wave']],
              features: [v.qOj],
              decls: 6,
              vars: 12,
              consts: [
                [1, 'sk-wave'],
                [1, 'sk-rect', 'sk-rect1'],
                [1, 'sk-rect', 'sk-rect2'],
                [1, 'sk-rect', 'sk-rect3'],
                [1, 'sk-rect', 'sk-rect4'],
                [1, 'sk-rect', 'sk-rect5'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0),
                  v._UZ(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'div', 4)(
                    5,
                    'div',
                    5
                  ),
                  v.qZA()),
                  2 & O &&
                    (v.ekj('colored', !B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor),
                    v.xp6(1),
                    v.Udp('background-color', B.backgroundColor));
              },
              styles: [
                '.sk-wave[_ngcontent-%COMP%]{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave[_ngcontent-%COMP%]   .sk-rect[_ngcontent-%COMP%]{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;animation:_ngcontent-%COMP%_sk-waveStretchDelay 1.2s infinite ease-in-out}.sk-wave[_ngcontent-%COMP%]   .sk-rect1[_ngcontent-%COMP%]{animation-delay:-1.2s}.sk-wave[_ngcontent-%COMP%]   .sk-rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect3[_ngcontent-%COMP%]{animation-delay:-1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.sk-wave[_ngcontent-%COMP%]   .sk-rect5[_ngcontent-%COMP%]{animation-delay:-.8s}@keyframes _ngcontent-%COMP%_sk-waveStretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}',
              ],
            })),
            b
          );
        })();
      const Ve = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
      };
      let Vn = (() => {
        class b {
          constructor() {
            (this._pendingRequests = 0),
              (this._pendingRequestsStatus$ = new se.t(1)),
              (this._filteredUrlPatterns = []),
              (this._filteredMethods = []),
              (this._filteredHeaders = []),
              (this._forceByPass = !1);
          }
          get pendingRequestsStatus$() {
            return this._pendingRequestsStatus$.asObservable();
          }
          get pendingRequests() {
            return this._pendingRequests;
          }
          get filteredUrlPatterns() {
            return this._filteredUrlPatterns;
          }
          set filteredMethods(O) {
            this._filteredMethods = O;
          }
          set filteredHeaders(O) {
            this._filteredHeaders = O;
          }
          set forceByPass(O) {
            this._forceByPass = O;
          }
          shouldBypassUrl(O) {
            return this._filteredUrlPatterns.some((B) => B.test(O));
          }
          shouldBypassMethod(O) {
            return this._filteredMethods.some(
              (B) => B.toUpperCase() === O.method.toUpperCase()
            );
          }
          shouldBypassHeader(O) {
            return this._filteredHeaders.some((B) => O.headers.has(B));
          }
          shouldBypass(O) {
            return (
              this._forceByPass ||
              this.shouldBypassUrl(O.urlWithParams) ||
              this.shouldBypassMethod(O) ||
              this.shouldBypassHeader(O)
            );
          }
          intercept(O, B) {
            const Te = this.shouldBypass(O);
            return (
              Te ||
                (this._pendingRequests++,
                1 === this._pendingRequests &&
                  this._pendingRequestsStatus$.next(!0)),
              B.handle(O).pipe(
                (0, We.x)(() => {
                  Te ||
                    (this._pendingRequests--,
                    0 === this._pendingRequests &&
                      this._pendingRequestsStatus$.next(!1));
                })
              )
            );
          }
        }
        return (
          (b.ɵfac = function (O) {
            return new (O || b)();
          }),
          (b.ɵprov = v.Yz7({ token: b, factory: b.ɵfac, providedIn: 'root' })),
          b
        );
      })();
      const fn = [{ provide: j.TP, useExisting: Vn, multi: !0 }];
      let ur = (() => {
          class b {
            constructor(O) {
              (this.pendingRequestsInterceptor = O),
                (this._visibility$ = new se.t(1));
            }
            get visibility$() {
              return this._visibility$.asObservable();
            }
            show() {
              (this.pendingRequestsInterceptor.forceByPass = !0),
                this._visibility$.next(!0);
            }
            hide() {
              this._visibility$.next(!1),
                (this.pendingRequestsInterceptor.forceByPass = !1);
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)(v.LFG(Vn));
            }),
            (b.ɵprov = v.Yz7({
              token: b,
              factory: b.ɵfac,
              providedIn: 'root',
            })),
            b
          );
        })(),
        kt = (() => {
          class b {
            constructor(O, B) {
              (this.pendingRequestsInterceptor = O),
                (this.spinnerVisibility = B),
                (this.spinkit = Ve),
                (this.visibleUntil = Date.now()),
                (this.backdrop = !0),
                (this.debounceDelay = 0),
                (this.entryComponent = null),
                (this.extraDuration = 0),
                (this.filteredHeaders = []),
                (this.filteredMethods = []),
                (this.filteredUrlPatterns = []),
                (this.minDuration = 0),
                (this.opacity = '.7'),
                (this.backdropBackgroundColor = '#f1f1f1'),
                (this.spinner = Ve.skWave);
            }
            ngOnInit() {
              this.initIsvisibleObservable(),
                this.nullifySpinnerIfEntryComponentIsDefined(),
                this.initFilters();
            }
            initIsvisibleObservable() {
              const [O, B] = (function de(b, P, O) {
                return [
                  (0, De.h)(P, O)((0, ke.Xf)(b)),
                  (0, De.h)(te(P, O))((0, ke.Xf)(b)),
                ];
              })(
                this.pendingRequestsInterceptor.pendingRequestsStatus$,
                (Te) => Te
              );
              this.isVisible$ = (0, Ne.T)(
                this.pendingRequestsInterceptor.pendingRequestsStatus$.pipe(
                  (0, be.w)(() =>
                    O.pipe(Pe(() => (0, Me.H)(this.debounceDelay)))
                  )
                ),
                O.pipe(
                  (0, be.w)(() => B.pipe(Pe(() => this.getVisibilityTimer$())))
                ),
                this.spinnerVisibility.visibility$
              ).pipe(
                (0, Se.x)(),
                (0, xe.b)((Te) => this.updateExpirationDelay(Te))
              );
            }
            nullifySpinnerIfEntryComponentIsDefined() {
              this.entryComponent && (this.spinner = null);
            }
            initFilters() {
              this.initFilteredUrlPatterns(),
                this.initFilteredMethods(),
                this.initFilteredHeaders();
            }
            initFilteredUrlPatterns() {
              this.filteredUrlPatterns.length &&
                this.filteredUrlPatterns.forEach((O) =>
                  this.pendingRequestsInterceptor.filteredUrlPatterns.push(
                    new RegExp(O)
                  )
                );
            }
            initFilteredMethods() {
              this.pendingRequestsInterceptor.filteredMethods =
                this.filteredMethods;
            }
            initFilteredHeaders() {
              this.pendingRequestsInterceptor.filteredHeaders =
                this.filteredHeaders;
            }
            updateExpirationDelay(O) {
              O && (this.visibleUntil = Date.now() + this.minDuration);
            }
            getVisibilityTimer$() {
              return (0, Me.H)(
                Math.max(this.extraDuration, this.visibleUntil - Date.now())
              );
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)(v.Y36(Vn), v.Y36(ur));
            }),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['ng-http-loader']],
              inputs: {
                backdrop: 'backdrop',
                backgroundColor: 'backgroundColor',
                debounceDelay: 'debounceDelay',
                entryComponent: 'entryComponent',
                extraDuration: 'extraDuration',
                filteredHeaders: 'filteredHeaders',
                filteredMethods: 'filteredMethods',
                filteredUrlPatterns: 'filteredUrlPatterns',
                minDuration: 'minDuration',
                opacity: 'opacity',
                backdropBackgroundColor: 'backdropBackgroundColor',
                spinner: 'spinner',
              },
              decls: 2,
              vars: 3,
              consts: [
                [
                  'id',
                  'spinner',
                  3,
                  'backdrop',
                  'opacity',
                  'ngStyle',
                  4,
                  'ngIf',
                ],
                ['id', 'spinner', 3, 'ngStyle'],
                [4, 'ngComponentOutlet'],
                [3, 'backgroundColor', 4, 'ngIf'],
                [3, 'backgroundColor'],
              ],
              template: function (O, B) {
                1 & O && (v.YNc(0, F, 10, 16, 'div', 0), v.ALo(1, 'async')),
                  2 & O && v.Q6J('ngIf', v.lcZ(1, 1, B.isVisible$));
              },
              dependencies: [
                we.$G,
                we.O5,
                we.PC,
                Ie,
                ce,
                Oe,
                ct,
                Dt,
                Mt,
                At,
                Wt,
                we.Ov,
              ],
              styles: [
                '#spinner[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop[_ngcontent-%COMP%]{top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transform:none}  .colored-parent,   .colored>div{background-color:#333}',
              ],
            })),
            b
          );
        })(),
        Vt = (() => {
          class b {
            static forRoot() {
              return { ngModule: b, providers: [fn] };
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵmod = v.oAB({ type: b })),
            (b.ɵinj = v.cJS({ imports: [we.ez] })),
            b
          );
        })();
      var qe = C(590),
        yn = C(4004),
        cr = C(9646);
      let $t = (() => {
        class b {
          constructor(O) {
            this.app = O;
          }
          canActivate() {
            return this.app.init().pipe(
              (0, qe.P)(),
              (0, yn.U)(() => !0),
              (0, H.K)(() => (0, cr.of)(!1))
            );
          }
        }
        return (
          (b.ɵfac = function (O) {
            return new (O || b)(v.LFG(X.z));
          }),
          (b.ɵprov = v.Yz7({ token: b, factory: b.ɵfac, providedIn: 'root' })),
          b
        );
      })();
      var _t = C(3416),
        In = C(7153);
      let it = (() => {
        class b extends k.eV {
          constructor(O, B, Te, He) {
            super(),
              (this.app = O),
              (this.title = B),
              (this.trans = Te),
              (this.titleService = He);
          }
          updateTitle(O) {
            const B = this.buildTitle(O),
              Te = this.app.config.appName;
            void 0 === B
              ? this.title.setTitle(Te)
              : this.trans.get(B).subscribe((He) => {
                  this.title.setTitle(`${He} - ${Te}`),
                    this.titleService.obs$.next(He);
                });
          }
        }
        return (
          (b.ɵfac = function (O) {
            return new (O || b)(
              v.LFG(X.z),
              v.LFG(l.Dx),
              v.LFG(_t.sK),
              v.LFG(In.y)
            );
          }),
          (b.ɵprov = v.Yz7({ token: b, factory: b.ɵfac })),
          b
        );
      })();
      !(function (b) {
        (b.ng = b.ng || {}),
          (b.ng.common = b.ng.common || {}),
          (b.ng.common.locales = b.ng.common.locales || {});
        const P = void 0;
        b.ng.common.locales['en-gb'] = [
          'en-GB',
          [['a', 'p'], ['am', 'pm'], P],
          [['am', 'pm'], P, P],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          ],
          P,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sept',
              'Oct',
              'Nov',
              'Dec',
            ],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          ],
          P,
          [
            ['B', 'A'],
            ['BC', 'AD'],
            ['Before Christ', 'Anno Domini'],
          ],
          1,
          [6, 0],
          ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
          ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
          ['{1}, {0}', P, "{1} 'at' {0}", P],
          [
            '.',
            ',',
            ';',
            '%',
            '+',
            '-',
            'E',
            '\xd7',
            '\u2030',
            '\u221e',
            'NaN',
            ':',
          ],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          'GBP',
          '\xa3',
          'British Pound',
          { JPY: ['JP\xa5', '\xa5'], USD: ['US$', '$'] },
          'ltr',
          function O(B) {
            const He = Math.floor(Math.abs(B)),
              rt = B.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === He && 0 === rt ? 1 : 5;
          },
          [
            [
              [
                'mi',
                'n',
                'in the morning',
                'in the afternoon',
                'in the evening',
                'at night',
              ],
              [
                'midnight',
                'noon',
                'in the morning',
                'in the afternoon',
                'in the evening',
                'at night',
              ],
              P,
            ],
            [
              ['midnight', 'noon', 'morning', 'afternoon', 'evening', 'night'],
              P,
              P,
            ],
            [
              '00:00',
              '12:00',
              ['06:00', '12:00'],
              ['12:00', '18:00'],
              ['18:00', '21:00'],
              ['21:00', '06:00'],
            ],
          ],
        ];
      })(
        (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window)
      );
      class tt {
        constructor() {
          this.http = (0, v.f3M)(j.eN);
        }
        getTranslation(P) {
          let O = `${$.N.i18nUrl}/${P.toLowerCase()}`;
          return (
            $.N.production || (O += '.json'),
            this.http.get(`${O}?v=` + new Date().getTime())
          );
        }
      }
      let Be = (() => {
        class b {}
        return (
          (b.ɵfac = function (O) {
            return new (O || b)();
          }),
          (b.ɵcmp = v.Xpm({
            type: b,
            selectors: [['ng-component']],
            standalone: !0,
            features: [v.jDz],
            decls: 1,
            vars: 0,
            consts: [[1, 'spinner']],
            template: function (O, B) {
              1 & O && v._UZ(0, 'span', 0);
            },
            styles: [
              '.spinner[_ngcontent-%COMP%]{width:68px;height:68px;border:5px dotted #FFF;border-style:solid solid dotted dotted;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 2s linear infinite}.spinner[_ngcontent-%COMP%]:after{content:"";box-sizing:border-box;position:absolute;inset:0;margin:auto;border:5px dotted #F12A23;border-style:solid solid dotted;width:44px;height:44px;border-radius:50%;animation:_ngcontent-%COMP%_rotationBack 1s linear infinite;transform-origin:center center}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_rotationBack{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}',
            ],
            changeDetection: 0,
          })),
          b
        );
      })();
      var Cn = C(7355),
        En = C(384),
        Zt = C(2849),
        rn = C(7579),
        Gt = C(2722);
      const Mr = ['app-modal', ''];
      let Tt = (() => {
        class b {
          constructor(O, B, Te) {
            (this.app = O),
              (this.modal = B),
              (this.viewContainerRef = Te),
              (this.destroy$ = new rn.x());
          }
          ngOnInit() {
            this.modal.show$
              .pipe((0, Gt.R)(this.destroy$))
              .subscribe((O) => this.createModal(O)),
              this.modal.hide$
                .pipe((0, Gt.R)(this.destroy$))
                .subscribe(() => this.destroyModal());
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete();
          }
          createModal(O) {
            this.viewContainerRef.clear(),
              (this.componentRef = this.viewContainerRef.createComponent(
                O.component
              )),
              (this.componentRef.instance._payload = O.payload),
              this.app.lockBody(!0);
          }
          destroyModal() {
            this.viewContainerRef.clear(),
              this.componentRef && this.componentRef.destroy(),
              (this.componentRef = void 0),
              this.app.lockBody(!1);
          }
        }
        return (
          (b.ɵfac = function (O) {
            return new (O || b)(v.Y36(X.z), v.Y36(Cn.Z), v.Y36(v.s_b));
          }),
          (b.ɵcmp = v.Xpm({
            type: b,
            selectors: [['', 'app-modal', '']],
            attrs: Mr,
            decls: 0,
            vars: 0,
            template: function (O, B) {},
            encapsulation: 2,
            changeDetection: 0,
          })),
          b
        );
      })();
      class Dn {
        constructor(P, O) {
          (this.callback = P), (this.delay = O), this.resume();
        }
        pause() {
          (this.paused = !0),
            clearTimeout(this.id),
            (this.delay -= Date.now() - this.start);
        }
        resume() {
          (this.paused = !1),
            (this.start = Date.now()),
            clearTimeout(this.id),
            (this.id = setTimeout(this.callback, this.delay));
        }
        clear() {
          clearTimeout(this.id);
        }
      }
      function Ue(b, P) {
        if (1 & b) {
          const O = v.EpF();
          v.TgZ(0, 'div', 2),
            v.NdJ('mouseenter', function () {
              const He = v.CHM(O).$implicit,
                rt = v.oxw();
              return v.KtG(rt.pause(He));
            })('mouseleave', function () {
              const He = v.CHM(O).$implicit,
                rt = v.oxw();
              return v.KtG(rt.resume(He));
            }),
            v.TgZ(1, 'div', 3),
            v.NdJ('click', function () {
              const He = v.CHM(O).$implicit,
                rt = v.oxw();
              return v.KtG(rt.close(He));
            }),
            v.O4$(),
            v.TgZ(2, 'svg'),
            v._UZ(3, 'use', 4),
            v.qZA()(),
            v.kcU(),
            v.TgZ(4, 'h3'),
            v._uU(5),
            v.ALo(6, 'translate'),
            v.qZA(),
            v._UZ(7, 'p', 5),
            v.ALo(8, 'translate'),
            v.qZA();
        }
        if (2 & b) {
          const O = P.$implicit;
          v.Q6J('ngClass', O.typeClass),
            v.xp6(5),
            v.Oqu(v.lcZ(6, 3, O.title)),
            v.xp6(2),
            v.Q6J('innerHTML', v.lcZ(8, 5, O.message), v.oJD);
        }
      }
      let Jt = (() => {
          class b {
            constructor() {
              (this.cdr = (0, v.f3M)(v.sBO)),
                (this.destroy$ = new rn.x()),
                (this.toastService = (0, v.f3M)(Z.k)),
                (this.toasts = new Set());
            }
            ngOnInit() {
              this.initToastQueueObserver();
            }
            ngOnDestroy() {
              this.clear(), this.destroy$.next(), this.destroy$.unsubscribe();
            }
            pause(O) {
              O.timer && O.timer.pause();
            }
            resume(O) {
              O.timer && O.timer.resume();
            }
            close(O) {
              O.timer && O.timer.clear(),
                this.toasts.delete(O),
                this.cdr.markForCheck();
            }
            clear() {
              this.toasts.size &&
                (this.toasts.forEach((O) => {
                  O.timer && O.timer.clear();
                }),
                this.toasts.clear(),
                this.cdr.markForCheck());
            }
            initToastQueueObserver() {
              this.toastService.queue$
                .pipe((0, Gt.R)(this.destroy$))
                .subscribe((O) => {
                  this.clear(),
                    O.timeout &&
                      (O.timer = new Dn(() => this.close(O), O.timeout)),
                    this.toasts.add(O),
                    this.cdr.markForCheck();
                });
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['app-toast']],
              hostBindings: function (O, B) {
                1 & O &&
                  v.NdJ(
                    'keydown.escape',
                    function () {
                      return B.clear();
                    },
                    !1,
                    v.evT
                  );
              },
              decls: 2,
              vars: 1,
              consts: [
                [1, 'modal-notify', 'active'],
                [
                  'class',
                  'modal-notify__item animate__animated animate__faster animate__fadeInUp',
                  3,
                  'ngClass',
                  'mouseenter',
                  'mouseleave',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  1,
                  'modal-notify__item',
                  'animate__animated',
                  'animate__faster',
                  'animate__fadeInUp',
                  3,
                  'ngClass',
                  'mouseenter',
                  'mouseleave',
                ],
                [1, 'modal-notify__close', 3, 'click'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#close-3'],
                [3, 'innerHTML'],
              ],
              template: function (O, B) {
                1 & O &&
                  (v.TgZ(0, 'div', 0), v.YNc(1, Ue, 9, 7, 'div', 1), v.qZA()),
                  2 & O && (v.xp6(1), v.Q6J('ngForOf', B.toasts));
              },
              dependencies: [we.mk, we.sg, _t.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            b
          );
        })(),
        An = (() => {
          class b {
            constructor() {
              this.source =
                "\n      window.__lc = window.__lc || {};\n      window.__lc.license = 15806469;\n      ;(function(n, t, c){\n         function i(n){\n            return e._h ? e._h.apply(null, n) : e._q.push(n);\n         }\n   \n         var e = {\n            _q:[], _h:null, _v:'2.0', on:function(){\n               i(['on', c.call(arguments)]);\n            }, once:function(){\n               i(['once', c.call(arguments)]);\n            }, off:function(){\n               i(['off', c.call(arguments)]);\n            }, get:function(){\n               if(!e._h) throw new Error('[LiveChatWidget] You can\\'t use getters before load.');\n               return i(['get', c.call(arguments)]);\n            }, call:function(){\n               i(['call', c.call(arguments)]);\n            }, init:function(){\n               var n = t.createElement('script');\n               n.async = !0, n.type = 'text/javascript', n.src = 'https://cdn.livechatinc.com/tracking.js', t.head.appendChild(n);\n            },\n         };\n         !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e;\n      }(window, document, [].slice));";
            }
            ngAfterViewInit() {
              $.N.production && this.initChat();
            }
            initChat() {
              const O = document.createElement('script');
              (O.text = this.source), document.body.appendChild(O);
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)();
            }),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['support-chat']],
              decls: 0,
              vars: 0,
              template: function (O, B) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            b
          );
        })(),
        pt = (() => {
          class b {
            constructor(O, B, Te, He, rt, Ze) {
              (this.app = O),
                (this.modal = B),
                (this.router = Te),
                (this.authService = He),
                (this.toast = rt),
                (this.event = Ze),
                (this.urlParams = new URLSearchParams(window.location.search)),
                (this.spinner = Be),
                (this.filteredUrlPatterns = [
                  'account/getDashReferralStats',
                  'account/getWeather',
                  'account/doRefill',
                  'account/getCoinPrice',
                  'account/getFeedMessage',
                  'account/doFeedRead',
                ]);
            }
            ngOnInit() {
              this.router.events
                .pipe((0, De.h)((O) => O instanceof k.m2))
                .subscribe(() => {
                  window.scrollTo(0, 0),
                    this.modal.hide(),
                    this.app.hideBurger(),
                    this.setPathname();
                }),
                this.event.bind('init').subscribe((O) => {
                  this.appName = O.appName ?? '';
                  const B = this.urlParams.get('act'),
                    Te = this.urlParams.get('ref');
                  'reset' === (Te && this.app.setUpline(Te).subscribe(), B) &&
                    this.processReset();
                });
            }
            ngAfterViewInit() {
              this.app.getViewportParams();
            }
            onWindowResize() {
              this.app.getViewportParams();
            }
            onWindowPopState() {
              this.app.hideBurger(), this.modal.hide();
            }
            processReset() {
              const O = this.urlParams.get('hash');
              O &&
                this.authService
                  .doResetConfirm(O)
                  .pipe((0, De.h)((B) => B))
                  .subscribe(() => this.toast.success('msg.021'));
            }
            setPathname() {
              let O = location.pathname;
              O.includes('/news/') && (O = '/news_single'),
                this.app.pathname$.next(O);
            }
          }
          return (
            (b.ɵfac = function (O) {
              return new (O || b)(
                v.Y36(X.z),
                v.Y36(Cn.Z),
                v.Y36(k.F0),
                v.Y36(En.e),
                v.Y36(Z.k),
                v.Y36(Zt.P)
              );
            }),
            (b.ɵcmp = v.Xpm({
              type: b,
              selectors: [['app-root']],
              hostBindings: function (O, B) {
                1 & O &&
                  v.NdJ(
                    'resize',
                    function () {
                      return B.onWindowResize();
                    },
                    !1,
                    v.Jf7
                  )(
                    'popstate',
                    function () {
                      return B.onWindowPopState();
                    },
                    !1,
                    v.Jf7
                  );
              },
              decls: 5,
              vars: 5,
              consts: [
                [
                  3,
                  'debounceDelay',
                  'extraDuration',
                  'backdropBackgroundColor',
                  'entryComponent',
                  'filteredUrlPatterns',
                ],
                ['app-modal', '', 1, 'cab-modals'],
              ],
              template: function (O, B) {
                1 & O &&
                  v._UZ(0, 'ng-http-loader', 0)(1, 'router-outlet')(
                    2,
                    'support-chat'
                  )(
                    3,
                    'div',
                    1
                  )(4, 'app-toast'),
                  2 & O &&
                    v.Q6J('debounceDelay', 150)('extraDuration', 100)(
                      'backdropBackgroundColor',
                      '#CCC'
                    )('entryComponent', B.spinner)(
                      'filteredUrlPatterns',
                      B.filteredUrlPatterns
                    );
              },
              dependencies: [k.lC, kt, Tt, Jt, An],
              encapsulation: 2,
            })),
            b
          );
        })();
      const wn = [
        {
          path: '',
          canActivate: [$t],
          children: [
            {
              path: 'auth',
              loadChildren: () =>
                Promise.all([C.e(592), C.e(601)])
                  .then(C.bind(C, 6601))
                  .then((b) => b.AuthModule),
            },
            {
              path: 'account',
              loadChildren: () =>
                Promise.all([C.e(155), C.e(592), C.e(332)])
                  .then(C.bind(C, 4332))
                  .then((b) => b.AccountModule),
            },
            {
              path: 'not-found',
              loadChildren: () =>
                C.e(262)
                  .then(C.bind(C, 6262))
                  .then((b) => b.ErrorModule),
            },
            {
              path: '',
              loadChildren: () =>
                Promise.all([C.e(155), C.e(592), C.e(533)])
                  .then(C.bind(C, 1533))
                  .then((b) => b.FacadeModule),
            },
            { path: '**', redirectTo: 'not-found' },
          ],
        },
      ];
      let ue = (() => {
        class b {}
        return (
          (b.ɵfac = function (O) {
            return new (O || b)();
          }),
          (b.ɵmod = v.oAB({ type: b, bootstrap: [pt] })),
          (b.ɵinj = v.cJS({
            providers: [
              { provide: v.soG, useValue: 'en-GB' },
              { provide: we.Kl, useValue: $.N.datePipeOptions },
              { provide: k.eV, useClass: it },
            ],
            imports: [
              U,
              L.m,
              l.b2,
              j.JF,
              k.Bz.forRoot(wn),
              Vt.forRoot(),
              _t.aw.forRoot({
                loader: { provide: _t.Zw, useClass: tt, deps: [j.eN] },
              }),
            ],
          })),
          b
        );
      })();
      $.N.production && (0, v.G48)(),
        l
          .q6()
          .bootstrapModule(ue)
          .catch((b) => console.error(b));
    },
    1135: (Re, q, C) => {
      C.d(q, { X: () => v });
      var l = C(7579);
      class v extends l.x {
        constructor(j) {
          super(), (this._value = j);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(j) {
          const H = super._subscribe(j);
          return !H.closed && j.next(this._value), H;
        }
        getValue() {
          const { hasError: j, thrownError: H, _value: V } = this;
          if (j) throw H;
          return this._throwIfClosed(), V;
        }
        next(j) {
          super.next((this._value = j));
        }
      }
    },
    9751: (Re, q, C) => {
      C.d(q, { y: () => Z });
      var l = C(930),
        v = C(727),
        k = C(8822),
        j = C(9635),
        H = C(2416),
        V = C(576),
        $ = C(2806);
      let Z = (() => {
        class L {
          constructor(te) {
            te && (this._subscribe = te);
          }
          lift(te) {
            const De = new L();
            return (De.source = this), (De.operator = te), De;
          }
          subscribe(te, De, ke) {
            const de = (function U(L) {
              return (
                (L && L instanceof l.Lv) ||
                ((function Q(L) {
                  return (
                    L &&
                    (0, V.m)(L.next) &&
                    (0, V.m)(L.error) &&
                    (0, V.m)(L.complete)
                  );
                })(L) &&
                  (0, v.Nn)(L))
              );
            })(te)
              ? te
              : new l.Hp(te, De, ke);
            return (
              (0, $.x)(() => {
                const { operator: Ne, source: Me } = this;
                de.add(
                  Ne
                    ? Ne.call(de, Me)
                    : Me
                    ? this._subscribe(de)
                    : this._trySubscribe(de)
                );
              }),
              de
            );
          }
          _trySubscribe(te) {
            try {
              return this._subscribe(te);
            } catch (De) {
              te.error(De);
            }
          }
          forEach(te, De) {
            return new (De = X(De))((ke, de) => {
              const Ne = new l.Hp({
                next: (Me) => {
                  try {
                    te(Me);
                  } catch (We) {
                    de(We), Ne.unsubscribe();
                  }
                },
                error: de,
                complete: ke,
              });
              this.subscribe(Ne);
            });
          }
          _subscribe(te) {
            var De;
            return null === (De = this.source) || void 0 === De
              ? void 0
              : De.subscribe(te);
          }
          [k.L]() {
            return this;
          }
          pipe(...te) {
            return (0, j.U)(te)(this);
          }
          toPromise(te) {
            return new (te = X(te))((De, ke) => {
              let de;
              this.subscribe(
                (Ne) => (de = Ne),
                (Ne) => ke(Ne),
                () => De(de)
              );
            });
          }
        }
        return (L.create = (se) => new L(se)), L;
      })();
      function X(L) {
        var se;
        return null !== (se = L ?? H.v.Promise) && void 0 !== se ? se : Promise;
      }
    },
    4707: (Re, q, C) => {
      C.d(q, { t: () => k });
      var l = C(7579),
        v = C(6063);
      class k extends l.x {
        constructor(H = 1 / 0, V = 1 / 0, $ = v.l) {
          super(),
            (this._bufferSize = H),
            (this._windowTime = V),
            (this._timestampProvider = $),
            (this._buffer = []),
            (this._infiniteTimeWindow = !0),
            (this._infiniteTimeWindow = V === 1 / 0),
            (this._bufferSize = Math.max(1, H)),
            (this._windowTime = Math.max(1, V));
        }
        next(H) {
          const {
            isStopped: V,
            _buffer: $,
            _infiniteTimeWindow: Z,
            _timestampProvider: X,
            _windowTime: Q,
          } = this;
          V || ($.push(H), !Z && $.push(X.now() + Q)),
            this._trimBuffer(),
            super.next(H);
        }
        _subscribe(H) {
          this._throwIfClosed(), this._trimBuffer();
          const V = this._innerSubscribe(H),
            { _infiniteTimeWindow: $, _buffer: Z } = this,
            X = Z.slice();
          for (let Q = 0; Q < X.length && !H.closed; Q += $ ? 1 : 2)
            H.next(X[Q]);
          return this._checkFinalizedStatuses(H), V;
        }
        _trimBuffer() {
          const {
              _bufferSize: H,
              _timestampProvider: V,
              _buffer: $,
              _infiniteTimeWindow: Z,
            } = this,
            X = (Z ? 1 : 2) * H;
          if ((H < 1 / 0 && X < $.length && $.splice(0, $.length - X), !Z)) {
            const Q = V.now();
            let U = 0;
            for (let L = 1; L < $.length && $[L] <= Q; L += 2) U = L;
            U && $.splice(0, U + 1);
          }
        }
      }
    },
    7579: (Re, q, C) => {
      C.d(q, { u: () => Z, x: () => $ });
      var l = C(9751),
        v = C(727);
      const j = (0, C(3888).d)(
        (X) =>
          function () {
            X(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          }
      );
      var H = C(8737),
        V = C(2806);
      let $ = (() => {
        class X extends l.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(U) {
            const L = new Z(this, this);
            return (L.operator = U), L;
          }
          _throwIfClosed() {
            if (this.closed) throw new j();
          }
          next(U) {
            (0, V.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const L of this.currentObservers) L.next(U);
              }
            });
          }
          error(U) {
            (0, V.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = U);
                const { observers: L } = this;
                for (; L.length; ) L.shift().error(U);
              }
            });
          }
          complete() {
            (0, V.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: U } = this;
                for (; U.length; ) U.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var U;
            return (
              (null === (U = this.observers) || void 0 === U
                ? void 0
                : U.length) > 0
            );
          }
          _trySubscribe(U) {
            return this._throwIfClosed(), super._trySubscribe(U);
          }
          _subscribe(U) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(U),
              this._innerSubscribe(U)
            );
          }
          _innerSubscribe(U) {
            const { hasError: L, isStopped: se, observers: te } = this;
            return L || se
              ? v.Lc
              : ((this.currentObservers = null),
                te.push(U),
                new v.w0(() => {
                  (this.currentObservers = null), (0, H.P)(te, U);
                }));
          }
          _checkFinalizedStatuses(U) {
            const { hasError: L, thrownError: se, isStopped: te } = this;
            L ? U.error(se) : te && U.complete();
          }
          asObservable() {
            const U = new l.y();
            return (U.source = this), U;
          }
        }
        return (X.create = (Q, U) => new Z(Q, U)), X;
      })();
      class Z extends $ {
        constructor(Q, U) {
          super(), (this.destination = Q), (this.source = U);
        }
        next(Q) {
          var U, L;
          null ===
            (L =
              null === (U = this.destination) || void 0 === U
                ? void 0
                : U.next) ||
            void 0 === L ||
            L.call(U, Q);
        }
        error(Q) {
          var U, L;
          null ===
            (L =
              null === (U = this.destination) || void 0 === U
                ? void 0
                : U.error) ||
            void 0 === L ||
            L.call(U, Q);
        }
        complete() {
          var Q, U;
          null ===
            (U =
              null === (Q = this.destination) || void 0 === Q
                ? void 0
                : Q.complete) ||
            void 0 === U ||
            U.call(Q);
        }
        _subscribe(Q) {
          var U, L;
          return null !==
            (L =
              null === (U = this.source) || void 0 === U
                ? void 0
                : U.subscribe(Q)) && void 0 !== L
            ? L
            : v.Lc;
        }
      }
    },
    930: (Re, q, C) => {
      C.d(q, { Hp: () => ke, Lv: () => L });
      var l = C(576),
        v = C(727),
        k = C(2416),
        j = C(7849),
        H = C(5032);
      const V = X('C', void 0, void 0);
      function X(be, Ee, Ye) {
        return { kind: be, value: Ee, error: Ye };
      }
      var Q = C(3410),
        U = C(2806);
      class L extends v.w0 {
        constructor(Ee) {
          super(),
            (this.isStopped = !1),
            Ee
              ? ((this.destination = Ee), (0, v.Nn)(Ee) && Ee.add(this))
              : (this.destination = We);
        }
        static create(Ee, Ye, nt) {
          return new ke(Ee, Ye, nt);
        }
        next(Ee) {
          this.isStopped
            ? Me(
                (function Z(be) {
                  return X('N', be, void 0);
                })(Ee),
                this
              )
            : this._next(Ee);
        }
        error(Ee) {
          this.isStopped
            ? Me(
                (function $(be) {
                  return X('E', void 0, be);
                })(Ee),
                this
              )
            : ((this.isStopped = !0), this._error(Ee));
        }
        complete() {
          this.isStopped
            ? Me(V, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(Ee) {
          this.destination.next(Ee);
        }
        _error(Ee) {
          try {
            this.destination.error(Ee);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const se = Function.prototype.bind;
      function te(be, Ee) {
        return se.call(be, Ee);
      }
      class De {
        constructor(Ee) {
          this.partialObserver = Ee;
        }
        next(Ee) {
          const { partialObserver: Ye } = this;
          if (Ye.next)
            try {
              Ye.next(Ee);
            } catch (nt) {
              de(nt);
            }
        }
        error(Ee) {
          const { partialObserver: Ye } = this;
          if (Ye.error)
            try {
              Ye.error(Ee);
            } catch (nt) {
              de(nt);
            }
          else de(Ee);
        }
        complete() {
          const { partialObserver: Ee } = this;
          if (Ee.complete)
            try {
              Ee.complete();
            } catch (Ye) {
              de(Ye);
            }
        }
      }
      class ke extends L {
        constructor(Ee, Ye, nt) {
          let Pe;
          if ((super(), (0, l.m)(Ee) || !Ee))
            Pe = {
              next: Ee ?? void 0,
              error: Ye ?? void 0,
              complete: nt ?? void 0,
            };
          else {
            let Se;
            this && k.v.useDeprecatedNextContext
              ? ((Se = Object.create(Ee)),
                (Se.unsubscribe = () => this.unsubscribe()),
                (Pe = {
                  next: Ee.next && te(Ee.next, Se),
                  error: Ee.error && te(Ee.error, Se),
                  complete: Ee.complete && te(Ee.complete, Se),
                }))
              : (Pe = Ee);
          }
          this.destination = new De(Pe);
        }
      }
      function de(be) {
        k.v.useDeprecatedSynchronousErrorHandling ? (0, U.O)(be) : (0, j.h)(be);
      }
      function Me(be, Ee) {
        const { onStoppedNotification: Ye } = k.v;
        Ye && Q.z.setTimeout(() => Ye(be, Ee));
      }
      const We = {
        closed: !0,
        next: H.Z,
        error: function Ne(be) {
          throw be;
        },
        complete: H.Z,
      };
    },
    727: (Re, q, C) => {
      C.d(q, { Lc: () => V, w0: () => H, Nn: () => $ });
      var l = C(576);
      const k = (0, C(3888).d)(
        (X) =>
          function (U) {
            X(this),
              (this.message = U
                ? `${U.length} errors occurred during unsubscription:\n${U.map(
                    (L, se) => `${se + 1}) ${L.toString()}`
                  ).join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = U);
          }
      );
      var j = C(8737);
      class H {
        constructor(Q) {
          (this.initialTeardown = Q),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Q;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: U } = this;
            if (U)
              if (((this._parentage = null), Array.isArray(U)))
                for (const te of U) te.remove(this);
              else U.remove(this);
            const { initialTeardown: L } = this;
            if ((0, l.m)(L))
              try {
                L();
              } catch (te) {
                Q = te instanceof k ? te.errors : [te];
              }
            const { _finalizers: se } = this;
            if (se) {
              this._finalizers = null;
              for (const te of se)
                try {
                  Z(te);
                } catch (De) {
                  (Q = Q ?? []),
                    De instanceof k ? (Q = [...Q, ...De.errors]) : Q.push(De);
                }
            }
            if (Q) throw new k(Q);
          }
        }
        add(Q) {
          var U;
          if (Q && Q !== this)
            if (this.closed) Z(Q);
            else {
              if (Q instanceof H) {
                if (Q.closed || Q._hasParent(this)) return;
                Q._addParent(this);
              }
              (this._finalizers =
                null !== (U = this._finalizers) && void 0 !== U ? U : []).push(
                Q
              );
            }
        }
        _hasParent(Q) {
          const { _parentage: U } = this;
          return U === Q || (Array.isArray(U) && U.includes(Q));
        }
        _addParent(Q) {
          const { _parentage: U } = this;
          this._parentage = Array.isArray(U) ? (U.push(Q), U) : U ? [U, Q] : Q;
        }
        _removeParent(Q) {
          const { _parentage: U } = this;
          U === Q
            ? (this._parentage = null)
            : Array.isArray(U) && (0, j.P)(U, Q);
        }
        remove(Q) {
          const { _finalizers: U } = this;
          U && (0, j.P)(U, Q), Q instanceof H && Q._removeParent(this);
        }
      }
      H.EMPTY = (() => {
        const X = new H();
        return (X.closed = !0), X;
      })();
      const V = H.EMPTY;
      function $(X) {
        return (
          X instanceof H ||
          (X &&
            'closed' in X &&
            (0, l.m)(X.remove) &&
            (0, l.m)(X.add) &&
            (0, l.m)(X.unsubscribe))
        );
      }
      function Z(X) {
        (0, l.m)(X) ? X() : X.unsubscribe();
      }
    },
    2416: (Re, q, C) => {
      C.d(q, { v: () => l });
      const l = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    7272: (Re, q, C) => {
      C.d(q, { z: () => H });
      var l = C(8189),
        k = C(3269),
        j = C(2076);
      function H(...V) {
        return (function v() {
          return (0, l.J)(1);
        })()((0, j.D)(V, (0, k.yG)(V)));
      }
    },
    9770: (Re, q, C) => {
      C.d(q, { P: () => k });
      var l = C(9751),
        v = C(8421);
      function k(j) {
        return new l.y((H) => {
          (0, v.Xf)(j()).subscribe(H);
        });
      }
    },
    515: (Re, q, C) => {
      C.d(q, { E: () => v });
      const v = new (C(9751).y)((H) => H.complete());
    },
    4128: (Re, q, C) => {
      C.d(q, { D: () => Z });
      var l = C(9751),
        v = C(4742),
        k = C(8421),
        j = C(3269),
        H = C(5403),
        V = C(3268),
        $ = C(1810);
      function Z(...X) {
        const Q = (0, j.jO)(X),
          { args: U, keys: L } = (0, v.D)(X),
          se = new l.y((te) => {
            const { length: De } = U;
            if (!De) return void te.complete();
            const ke = new Array(De);
            let de = De,
              Ne = De;
            for (let Me = 0; Me < De; Me++) {
              let We = !1;
              (0, k.Xf)(U[Me]).subscribe(
                (0, H.x)(
                  te,
                  (be) => {
                    We || ((We = !0), Ne--), (ke[Me] = be);
                  },
                  () => de--,
                  void 0,
                  () => {
                    (!de || !We) &&
                      (Ne || te.next(L ? (0, $.n)(L, ke) : ke), te.complete());
                  }
                )
              );
            }
          });
        return Q ? se.pipe((0, V.Z)(Q)) : se;
      }
    },
    2076: (Re, q, C) => {
      C.d(q, { D: () => nt });
      var l = C(8421),
        v = C(9672),
        k = C(4482),
        j = C(5403);
      function H(Pe, Se = 0) {
        return (0, k.e)((xe, we) => {
          xe.subscribe(
            (0, j.x)(
              we,
              (Le) => (0, v.f)(we, Pe, () => we.next(Le), Se),
              () => (0, v.f)(we, Pe, () => we.complete(), Se),
              (Le) => (0, v.f)(we, Pe, () => we.error(Le), Se)
            )
          );
        });
      }
      function V(Pe, Se = 0) {
        return (0, k.e)((xe, we) => {
          we.add(Pe.schedule(() => xe.subscribe(we), Se));
        });
      }
      var X = C(9751),
        U = C(2202),
        L = C(576);
      function te(Pe, Se) {
        if (!Pe) throw new Error('Iterable cannot be null');
        return new X.y((xe) => {
          (0, v.f)(xe, Se, () => {
            const we = Pe[Symbol.asyncIterator]();
            (0, v.f)(
              xe,
              Se,
              () => {
                we.next().then((Le) => {
                  Le.done ? xe.complete() : xe.next(Le.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var De = C(3670),
        ke = C(8239),
        de = C(1144),
        Ne = C(6495),
        Me = C(2206),
        We = C(4532),
        be = C(3260);
      function nt(Pe, Se) {
        return Se
          ? (function Ye(Pe, Se) {
              if (null != Pe) {
                if ((0, De.c)(Pe))
                  return (function $(Pe, Se) {
                    return (0, l.Xf)(Pe).pipe(V(Se), H(Se));
                  })(Pe, Se);
                if ((0, de.z)(Pe))
                  return (function Q(Pe, Se) {
                    return new X.y((xe) => {
                      let we = 0;
                      return Se.schedule(function () {
                        we === Pe.length
                          ? xe.complete()
                          : (xe.next(Pe[we++]), xe.closed || this.schedule());
                      });
                    });
                  })(Pe, Se);
                if ((0, ke.t)(Pe))
                  return (function Z(Pe, Se) {
                    return (0, l.Xf)(Pe).pipe(V(Se), H(Se));
                  })(Pe, Se);
                if ((0, Me.D)(Pe)) return te(Pe, Se);
                if ((0, Ne.T)(Pe))
                  return (function se(Pe, Se) {
                    return new X.y((xe) => {
                      let we;
                      return (
                        (0, v.f)(xe, Se, () => {
                          (we = Pe[U.h]()),
                            (0, v.f)(
                              xe,
                              Se,
                              () => {
                                let Le, ot;
                                try {
                                  ({ value: Le, done: ot } = we.next());
                                } catch (Ke) {
                                  return void xe.error(Ke);
                                }
                                ot ? xe.complete() : xe.next(Le);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, L.m)(we?.return) && we.return()
                      );
                    });
                  })(Pe, Se);
                if ((0, be.L)(Pe))
                  return (function Ee(Pe, Se) {
                    return te((0, be.Q)(Pe), Se);
                  })(Pe, Se);
              }
              throw (0, We.z)(Pe);
            })(Pe, Se)
          : (0, l.Xf)(Pe);
      }
    },
    8421: (Re, q, C) => {
      C.d(q, { Xf: () => se });
      var l = C(655),
        v = C(1144),
        k = C(8239),
        j = C(9751),
        H = C(3670),
        V = C(2206),
        $ = C(4532),
        Z = C(6495),
        X = C(3260),
        Q = C(576),
        U = C(7849),
        L = C(8822);
      function se(be) {
        if (be instanceof j.y) return be;
        if (null != be) {
          if ((0, H.c)(be))
            return (function te(be) {
              return new j.y((Ee) => {
                const Ye = be[L.L]();
                if ((0, Q.m)(Ye.subscribe)) return Ye.subscribe(Ee);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              });
            })(be);
          if ((0, v.z)(be))
            return (function De(be) {
              return new j.y((Ee) => {
                for (let Ye = 0; Ye < be.length && !Ee.closed; Ye++)
                  Ee.next(be[Ye]);
                Ee.complete();
              });
            })(be);
          if ((0, k.t)(be))
            return (function ke(be) {
              return new j.y((Ee) => {
                be.then(
                  (Ye) => {
                    Ee.closed || (Ee.next(Ye), Ee.complete());
                  },
                  (Ye) => Ee.error(Ye)
                ).then(null, U.h);
              });
            })(be);
          if ((0, V.D)(be)) return Ne(be);
          if ((0, Z.T)(be))
            return (function de(be) {
              return new j.y((Ee) => {
                for (const Ye of be) if ((Ee.next(Ye), Ee.closed)) return;
                Ee.complete();
              });
            })(be);
          if ((0, X.L)(be))
            return (function Me(be) {
              return Ne((0, X.Q)(be));
            })(be);
        }
        throw (0, $.z)(be);
      }
      function Ne(be) {
        return new j.y((Ee) => {
          (function We(be, Ee) {
            var Ye, nt, Pe, Se;
            return (0, l.mG)(this, void 0, void 0, function* () {
              try {
                for (Ye = (0, l.KL)(be); !(nt = yield Ye.next()).done; )
                  if ((Ee.next(nt.value), Ee.closed)) return;
              } catch (xe) {
                Pe = { error: xe };
              } finally {
                try {
                  nt && !nt.done && (Se = Ye.return) && (yield Se.call(Ye));
                } finally {
                  if (Pe) throw Pe.error;
                }
              }
              Ee.complete();
            });
          })(be, Ee).catch((Ye) => Ee.error(Ye));
        });
      }
    },
    6451: (Re, q, C) => {
      C.d(q, { T: () => V });
      var l = C(8189),
        v = C(8421),
        k = C(515),
        j = C(3269),
        H = C(2076);
      function V(...$) {
        const Z = (0, j.yG)($),
          X = (0, j._6)($, 1 / 0),
          Q = $;
        return Q.length
          ? 1 === Q.length
            ? (0, v.Xf)(Q[0])
            : (0, l.J)(X)((0, H.D)(Q, Z))
          : k.E;
      }
    },
    9646: (Re, q, C) => {
      C.d(q, { of: () => k });
      var l = C(3269),
        v = C(2076);
      function k(...j) {
        const H = (0, l.yG)(j);
        return (0, v.D)(j, H);
      }
    },
    2843: (Re, q, C) => {
      C.d(q, { _: () => k });
      var l = C(9751),
        v = C(576);
      function k(j, H) {
        const V = (0, v.m)(j) ? j : () => j,
          $ = (Z) => Z.error(V());
        return new l.y(H ? (Z) => H.schedule($, 0, Z) : $);
      }
    },
    5963: (Re, q, C) => {
      C.d(q, { H: () => H });
      var l = C(9751),
        v = C(4049),
        k = C(3532);
      function H(V = 0, $, Z = v.P) {
        let X = -1;
        return (
          null != $ && ((0, k.K)($) ? (Z = $) : (X = $)),
          new l.y((Q) => {
            let U = (function j(V) {
              return V instanceof Date && !isNaN(V);
            })(V)
              ? +V - Z.now()
              : V;
            U < 0 && (U = 0);
            let L = 0;
            return Z.schedule(function () {
              Q.closed ||
                (Q.next(L++), 0 <= X ? this.schedule(void 0, X) : Q.complete());
            }, U);
          })
        );
      }
    },
    5403: (Re, q, C) => {
      C.d(q, { Q: () => k, x: () => v });
      var l = C(930);
      function v(j, H, V, $, Z) {
        return new k(j, H, V, $, Z);
      }
      class k extends l.Lv {
        constructor(H, V, $, Z, X, Q) {
          super(H),
            (this.onFinalize = X),
            (this.shouldUnsubscribe = Q),
            (this._next = V
              ? function (U) {
                  try {
                    V(U);
                  } catch (L) {
                    H.error(L);
                  }
                }
              : super._next),
            (this._error = Z
              ? function (U) {
                  try {
                    Z(U);
                  } catch (L) {
                    H.error(L);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = $
              ? function () {
                  try {
                    $();
                  } catch (U) {
                    H.error(U);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var H;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: V } = this;
            super.unsubscribe(),
              !V &&
                (null === (H = this.onFinalize) ||
                  void 0 === H ||
                  H.call(this));
          }
        }
      }
    },
    262: (Re, q, C) => {
      C.d(q, { K: () => j });
      var l = C(8421),
        v = C(5403),
        k = C(4482);
      function j(H) {
        return (0, k.e)((V, $) => {
          let Q,
            Z = null,
            X = !1;
          (Z = V.subscribe(
            (0, v.x)($, void 0, void 0, (U) => {
              (Q = (0, l.Xf)(H(U, j(H)(V)))),
                Z ? (Z.unsubscribe(), (Z = null), Q.subscribe($)) : (X = !0);
            })
          )),
            X && (Z.unsubscribe(), (Z = null), Q.subscribe($));
        });
      }
    },
    4351: (Re, q, C) => {
      C.d(q, { b: () => k });
      var l = C(5577),
        v = C(576);
      function k(j, H) {
        return (0, v.m)(H) ? (0, l.z)(j, H, 1) : (0, l.z)(j, 1);
      }
    },
    6590: (Re, q, C) => {
      C.d(q, { d: () => k });
      var l = C(4482),
        v = C(5403);
      function k(j) {
        return (0, l.e)((H, V) => {
          let $ = !1;
          H.subscribe(
            (0, v.x)(
              V,
              (Z) => {
                ($ = !0), V.next(Z);
              },
              () => {
                $ || V.next(j), V.complete();
              }
            )
          );
        });
      }
    },
    1884: (Re, q, C) => {
      C.d(q, { x: () => j });
      var l = C(4671),
        v = C(4482),
        k = C(5403);
      function j(V, $ = l.y) {
        return (
          (V = V ?? H),
          (0, v.e)((Z, X) => {
            let Q,
              U = !0;
            Z.subscribe(
              (0, k.x)(X, (L) => {
                const se = $(L);
                (U || !V(Q, se)) && ((U = !1), (Q = se), X.next(L));
              })
            );
          })
        );
      }
      function H(V, $) {
        return V === $;
      }
    },
    9300: (Re, q, C) => {
      C.d(q, { h: () => k });
      var l = C(4482),
        v = C(5403);
      function k(j, H) {
        return (0, l.e)((V, $) => {
          let Z = 0;
          V.subscribe((0, v.x)($, (X) => j.call(H, X, Z++) && $.next(X)));
        });
      }
    },
    8746: (Re, q, C) => {
      C.d(q, { x: () => v });
      var l = C(4482);
      function v(k) {
        return (0, l.e)((j, H) => {
          try {
            j.subscribe(H);
          } finally {
            H.add(k);
          }
        });
      }
    },
    590: (Re, q, C) => {
      C.d(q, { P: () => $ });
      var l = C(6805),
        v = C(9300),
        k = C(5698),
        j = C(6590),
        H = C(8068),
        V = C(4671);
      function $(Z, X) {
        const Q = arguments.length >= 2;
        return (U) =>
          U.pipe(
            Z ? (0, v.h)((L, se) => Z(L, se, U)) : V.y,
            (0, k.q)(1),
            Q ? (0, j.d)(X) : (0, H.T)(() => new l.K())
          );
      }
    },
    4004: (Re, q, C) => {
      C.d(q, { U: () => k });
      var l = C(4482),
        v = C(5403);
      function k(j, H) {
        return (0, l.e)((V, $) => {
          let Z = 0;
          V.subscribe(
            (0, v.x)($, (X) => {
              $.next(j.call(H, X, Z++));
            })
          );
        });
      }
    },
    9718: (Re, q, C) => {
      C.d(q, { h: () => v });
      var l = C(4004);
      function v(k) {
        return (0, l.U)(() => k);
      }
    },
    8189: (Re, q, C) => {
      C.d(q, { J: () => k });
      var l = C(5577),
        v = C(4671);
      function k(j = 1 / 0) {
        return (0, l.z)(v.y, j);
      }
    },
    5577: (Re, q, C) => {
      C.d(q, { z: () => Z });
      var l = C(4004),
        v = C(8421),
        k = C(4482),
        j = C(9672),
        H = C(5403),
        $ = C(576);
      function Z(X, Q, U = 1 / 0) {
        return (0, $.m)(Q)
          ? Z(
              (L, se) =>
                (0, l.U)((te, De) => Q(L, te, se, De))((0, v.Xf)(X(L, se))),
              U
            )
          : ('number' == typeof Q && (U = Q),
            (0, k.e)((L, se) =>
              (function V(X, Q, U, L, se, te, De, ke) {
                const de = [];
                let Ne = 0,
                  Me = 0,
                  We = !1;
                const be = () => {
                    We && !de.length && !Ne && Q.complete();
                  },
                  Ee = (nt) => (Ne < L ? Ye(nt) : de.push(nt)),
                  Ye = (nt) => {
                    te && Q.next(nt), Ne++;
                    let Pe = !1;
                    (0, v.Xf)(U(nt, Me++)).subscribe(
                      (0, H.x)(
                        Q,
                        (Se) => {
                          se?.(Se), te ? Ee(Se) : Q.next(Se);
                        },
                        () => {
                          Pe = !0;
                        },
                        void 0,
                        () => {
                          if (Pe)
                            try {
                              for (Ne--; de.length && Ne < L; ) {
                                const Se = de.shift();
                                De ? (0, j.f)(Q, De, () => Ye(Se)) : Ye(Se);
                              }
                              be();
                            } catch (Se) {
                              Q.error(Se);
                            }
                        }
                      )
                    );
                  };
                return (
                  X.subscribe(
                    (0, H.x)(Q, Ee, () => {
                      (We = !0), be();
                    })
                  ),
                  () => {
                    ke?.();
                  }
                );
              })(L, se, X, U)
            ));
      }
    },
    7359: (Re, q, C) => {
      C.d(q, { U: () => v });
      var l = C(5403);
      function v(k, j, H, V, $) {
        return (Z, X) => {
          let Q = H,
            U = j,
            L = 0;
          Z.subscribe(
            (0, l.x)(
              X,
              (se) => {
                const te = L++;
                (U = Q ? k(U, se, te) : ((Q = !0), se)), V && X.next(U);
              },
              $ &&
                (() => {
                  Q && X.next(U), X.complete();
                })
            )
          );
        };
      }
    },
    3099: (Re, q, C) => {
      C.d(q, { B: () => H });
      var l = C(8421),
        v = C(7579),
        k = C(930),
        j = C(4482);
      function H($ = {}) {
        const {
          connector: Z = () => new v.x(),
          resetOnError: X = !0,
          resetOnComplete: Q = !0,
          resetOnRefCountZero: U = !0,
        } = $;
        return (L) => {
          let se,
            te,
            De,
            ke = 0,
            de = !1,
            Ne = !1;
          const Me = () => {
              te?.unsubscribe(), (te = void 0);
            },
            We = () => {
              Me(), (se = De = void 0), (de = Ne = !1);
            },
            be = () => {
              const Ee = se;
              We(), Ee?.unsubscribe();
            };
          return (0, j.e)((Ee, Ye) => {
            ke++, !Ne && !de && Me();
            const nt = (De = De ?? Z());
            Ye.add(() => {
              ke--, 0 === ke && !Ne && !de && (te = V(be, U));
            }),
              nt.subscribe(Ye),
              !se &&
                ke > 0 &&
                ((se = new k.Hp({
                  next: (Pe) => nt.next(Pe),
                  error: (Pe) => {
                    (Ne = !0), Me(), (te = V(We, X, Pe)), nt.error(Pe);
                  },
                  complete: () => {
                    (de = !0), Me(), (te = V(We, Q)), nt.complete();
                  },
                })),
                (0, l.Xf)(Ee).subscribe(se));
          })(L);
        };
      }
      function V($, Z, ...X) {
        if (!0 === Z) return void $();
        if (!1 === Z) return;
        const Q = new k.Hp({
          next: () => {
            Q.unsubscribe(), $();
          },
        });
        return Z(...X).subscribe(Q);
      }
    },
    8675: (Re, q, C) => {
      C.d(q, { O: () => j });
      var l = C(7272),
        v = C(3269),
        k = C(4482);
      function j(...H) {
        const V = (0, v.yG)(H);
        return (0, k.e)(($, Z) => {
          (V ? (0, l.z)(H, $, V) : (0, l.z)(H, $)).subscribe(Z);
        });
      }
    },
    3900: (Re, q, C) => {
      C.d(q, { w: () => j });
      var l = C(8421),
        v = C(4482),
        k = C(5403);
      function j(H, V) {
        return (0, v.e)(($, Z) => {
          let X = null,
            Q = 0,
            U = !1;
          const L = () => U && !X && Z.complete();
          $.subscribe(
            (0, k.x)(
              Z,
              (se) => {
                X?.unsubscribe();
                let te = 0;
                const De = Q++;
                (0, l.Xf)(H(se, De)).subscribe(
                  (X = (0, k.x)(
                    Z,
                    (ke) => Z.next(V ? V(se, ke, De, te++) : ke),
                    () => {
                      (X = null), L();
                    }
                  ))
                );
              },
              () => {
                (U = !0), L();
              }
            )
          );
        });
      }
    },
    5698: (Re, q, C) => {
      C.d(q, { q: () => j });
      var l = C(515),
        v = C(4482),
        k = C(5403);
      function j(H) {
        return H <= 0
          ? () => l.E
          : (0, v.e)((V, $) => {
              let Z = 0;
              V.subscribe(
                (0, k.x)($, (X) => {
                  ++Z <= H && ($.next(X), H <= Z && $.complete());
                })
              );
            });
      }
    },
    2722: (Re, q, C) => {
      C.d(q, { R: () => H });
      var l = C(4482),
        v = C(5403),
        k = C(8421),
        j = C(5032);
      function H(V) {
        return (0, l.e)(($, Z) => {
          (0, k.Xf)(V).subscribe((0, v.x)(Z, () => Z.complete(), j.Z)),
            !Z.closed && $.subscribe(Z);
        });
      }
    },
    8505: (Re, q, C) => {
      C.d(q, { b: () => H });
      var l = C(576),
        v = C(4482),
        k = C(5403),
        j = C(4671);
      function H(V, $, Z) {
        const X =
          (0, l.m)(V) || $ || Z ? { next: V, error: $, complete: Z } : V;
        return X
          ? (0, v.e)((Q, U) => {
              var L;
              null === (L = X.subscribe) || void 0 === L || L.call(X);
              let se = !0;
              Q.subscribe(
                (0, k.x)(
                  U,
                  (te) => {
                    var De;
                    null === (De = X.next) || void 0 === De || De.call(X, te),
                      U.next(te);
                  },
                  () => {
                    var te;
                    (se = !1),
                      null === (te = X.complete) || void 0 === te || te.call(X),
                      U.complete();
                  },
                  (te) => {
                    var De;
                    (se = !1),
                      null === (De = X.error) ||
                        void 0 === De ||
                        De.call(X, te),
                      U.error(te);
                  },
                  () => {
                    var te, De;
                    se &&
                      (null === (te = X.unsubscribe) ||
                        void 0 === te ||
                        te.call(X)),
                      null === (De = X.finalize) || void 0 === De || De.call(X);
                  }
                )
              );
            })
          : j.y;
      }
    },
    8068: (Re, q, C) => {
      C.d(q, { T: () => j });
      var l = C(6805),
        v = C(4482),
        k = C(5403);
      function j(V = H) {
        return (0, v.e)(($, Z) => {
          let X = !1;
          $.subscribe(
            (0, k.x)(
              Z,
              (Q) => {
                (X = !0), Z.next(Q);
              },
              () => (X ? Z.complete() : Z.error(V()))
            )
          );
        });
      }
      function H() {
        return new l.K();
      }
    },
    4049: (Re, q, C) => {
      C.d(q, { P: () => Q, z: () => X });
      var l = C(727);
      class v extends l.w0 {
        constructor(L, se) {
          super();
        }
        schedule(L, se = 0) {
          return this;
        }
      }
      const k = {
        setInterval(U, L, ...se) {
          const { delegate: te } = k;
          return te?.setInterval
            ? te.setInterval(U, L, ...se)
            : setInterval(U, L, ...se);
        },
        clearInterval(U) {
          const { delegate: L } = k;
          return (L?.clearInterval || clearInterval)(U);
        },
        delegate: void 0,
      };
      var j = C(8737),
        V = C(6063);
      class $ {
        constructor(L, se = $.now) {
          (this.schedulerActionCtor = L), (this.now = se);
        }
        schedule(L, se = 0, te) {
          return new this.schedulerActionCtor(this, L).schedule(te, se);
        }
      }
      $.now = V.l.now;
      const X = new (class Z extends $ {
          constructor(L, se = $.now) {
            super(L, se), (this.actions = []), (this._active = !1);
          }
          flush(L) {
            const { actions: se } = this;
            if (this._active) return void se.push(L);
            let te;
            this._active = !0;
            do {
              if ((te = L.execute(L.state, L.delay))) break;
            } while ((L = se.shift()));
            if (((this._active = !1), te)) {
              for (; (L = se.shift()); ) L.unsubscribe();
              throw te;
            }
          }
        })(
          class H extends v {
            constructor(L, se) {
              super(L, se),
                (this.scheduler = L),
                (this.work = se),
                (this.pending = !1);
            }
            schedule(L, se = 0) {
              var te;
              if (this.closed) return this;
              this.state = L;
              const De = this.id,
                ke = this.scheduler;
              return (
                null != De && (this.id = this.recycleAsyncId(ke, De, se)),
                (this.pending = !0),
                (this.delay = se),
                (this.id =
                  null !== (te = this.id) && void 0 !== te
                    ? te
                    : this.requestAsyncId(ke, this.id, se)),
                this
              );
            }
            requestAsyncId(L, se, te = 0) {
              return k.setInterval(L.flush.bind(L, this), te);
            }
            recycleAsyncId(L, se, te = 0) {
              if (null != te && this.delay === te && !1 === this.pending)
                return se;
              null != se && k.clearInterval(se);
            }
            execute(L, se) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              const te = this._execute(L, se);
              if (te) return te;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }
            _execute(L, se) {
              let De,
                te = !1;
              try {
                this.work(L);
              } catch (ke) {
                (te = !0),
                  (De = ke || new Error('Scheduled action threw falsy error'));
              }
              if (te) return this.unsubscribe(), De;
            }
            unsubscribe() {
              if (!this.closed) {
                const { id: L, scheduler: se } = this,
                  { actions: te } = se;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, j.P)(te, this),
                  null != L && (this.id = this.recycleAsyncId(se, L, null)),
                  (this.delay = null),
                  super.unsubscribe();
              }
            }
          }
        ),
        Q = X;
    },
    6063: (Re, q, C) => {
      C.d(q, { l: () => l });
      const l = { now: () => (l.delegate || Date).now(), delegate: void 0 };
    },
    3410: (Re, q, C) => {
      C.d(q, { z: () => l });
      const l = {
        setTimeout(v, k, ...j) {
          const { delegate: H } = l;
          return H?.setTimeout
            ? H.setTimeout(v, k, ...j)
            : setTimeout(v, k, ...j);
        },
        clearTimeout(v) {
          const { delegate: k } = l;
          return (k?.clearTimeout || clearTimeout)(v);
        },
        delegate: void 0,
      };
    },
    2202: (Re, q, C) => {
      C.d(q, { h: () => v });
      const v = (function l() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
    },
    8822: (Re, q, C) => {
      C.d(q, { L: () => l });
      const l =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    6805: (Re, q, C) => {
      C.d(q, { K: () => v });
      const v = (0, C(3888).d)(
        (k) =>
          function () {
            k(this),
              (this.name = 'EmptyError'),
              (this.message = 'no elements in sequence');
          }
      );
    },
    3269: (Re, q, C) => {
      C.d(q, { _6: () => V, jO: () => j, yG: () => H });
      var l = C(576),
        v = C(3532);
      function k($) {
        return $[$.length - 1];
      }
      function j($) {
        return (0, l.m)(k($)) ? $.pop() : void 0;
      }
      function H($) {
        return (0, v.K)(k($)) ? $.pop() : void 0;
      }
      function V($, Z) {
        return 'number' == typeof k($) ? $.pop() : Z;
      }
    },
    4742: (Re, q, C) => {
      C.d(q, { D: () => H });
      const { isArray: l } = Array,
        { getPrototypeOf: v, prototype: k, keys: j } = Object;
      function H($) {
        if (1 === $.length) {
          const Z = $[0];
          if (l(Z)) return { args: Z, keys: null };
          if (
            (function V($) {
              return $ && 'object' == typeof $ && v($) === k;
            })(Z)
          ) {
            const X = j(Z);
            return { args: X.map((Q) => Z[Q]), keys: X };
          }
        }
        return { args: $, keys: null };
      }
    },
    8737: (Re, q, C) => {
      function l(v, k) {
        if (v) {
          const j = v.indexOf(k);
          0 <= j && v.splice(j, 1);
        }
      }
      C.d(q, { P: () => l });
    },
    3888: (Re, q, C) => {
      function l(v) {
        const j = v((H) => {
          Error.call(H), (H.stack = new Error().stack);
        });
        return (
          (j.prototype = Object.create(Error.prototype)),
          (j.prototype.constructor = j),
          j
        );
      }
      C.d(q, { d: () => l });
    },
    1810: (Re, q, C) => {
      function l(v, k) {
        return v.reduce((j, H, V) => ((j[H] = k[V]), j), {});
      }
      C.d(q, { n: () => l });
    },
    2806: (Re, q, C) => {
      C.d(q, { O: () => j, x: () => k });
      var l = C(2416);
      let v = null;
      function k(H) {
        if (l.v.useDeprecatedSynchronousErrorHandling) {
          const V = !v;
          if ((V && (v = { errorThrown: !1, error: null }), H(), V)) {
            const { errorThrown: $, error: Z } = v;
            if (((v = null), $)) throw Z;
          }
        } else H();
      }
      function j(H) {
        l.v.useDeprecatedSynchronousErrorHandling &&
          v &&
          ((v.errorThrown = !0), (v.error = H));
      }
    },
    9672: (Re, q, C) => {
      function l(v, k, j, H = 0, V = !1) {
        const $ = k.schedule(function () {
          j(), V ? v.add(this.schedule(null, H)) : this.unsubscribe();
        }, H);
        if ((v.add($), !V)) return $;
      }
      C.d(q, { f: () => l });
    },
    4671: (Re, q, C) => {
      function l(v) {
        return v;
      }
      C.d(q, { y: () => l });
    },
    1144: (Re, q, C) => {
      C.d(q, { z: () => l });
      const l = (v) =>
        v && 'number' == typeof v.length && 'function' != typeof v;
    },
    2206: (Re, q, C) => {
      C.d(q, { D: () => v });
      var l = C(576);
      function v(k) {
        return Symbol.asyncIterator && (0, l.m)(k?.[Symbol.asyncIterator]);
      }
    },
    576: (Re, q, C) => {
      function l(v) {
        return 'function' == typeof v;
      }
      C.d(q, { m: () => l });
    },
    3670: (Re, q, C) => {
      C.d(q, { c: () => k });
      var l = C(8822),
        v = C(576);
      function k(j) {
        return (0, v.m)(j[l.L]);
      }
    },
    6495: (Re, q, C) => {
      C.d(q, { T: () => k });
      var l = C(2202),
        v = C(576);
      function k(j) {
        return (0, v.m)(j?.[l.h]);
      }
    },
    8239: (Re, q, C) => {
      C.d(q, { t: () => v });
      var l = C(576);
      function v(k) {
        return (0, l.m)(k?.then);
      }
    },
    3260: (Re, q, C) => {
      C.d(q, { L: () => j, Q: () => k });
      var l = C(655),
        v = C(576);
      function k(H) {
        return (0, l.FC)(this, arguments, function* () {
          const $ = H.getReader();
          try {
            for (;;) {
              const { value: Z, done: X } = yield (0, l.qq)($.read());
              if (X) return yield (0, l.qq)(void 0);
              yield yield (0, l.qq)(Z);
            }
          } finally {
            $.releaseLock();
          }
        });
      }
      function j(H) {
        return (0, v.m)(H?.getReader);
      }
    },
    3532: (Re, q, C) => {
      C.d(q, { K: () => v });
      var l = C(576);
      function v(k) {
        return k && (0, l.m)(k.schedule);
      }
    },
    4482: (Re, q, C) => {
      C.d(q, { A: () => v, e: () => k });
      var l = C(576);
      function v(j) {
        return (0, l.m)(j?.lift);
      }
      function k(j) {
        return (H) => {
          if (v(H))
            return H.lift(function (V) {
              try {
                return j(V, this);
              } catch ($) {
                this.error($);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    3268: (Re, q, C) => {
      C.d(q, { Z: () => j });
      var l = C(4004);
      const { isArray: v } = Array;
      function j(H) {
        return (0, l.U)((V) =>
          (function k(H, V) {
            return v(V) ? H(...V) : H(V);
          })(H, V)
        );
      }
    },
    5032: (Re, q, C) => {
      function l() {}
      C.d(q, { Z: () => l });
    },
    9635: (Re, q, C) => {
      C.d(q, { U: () => k, z: () => v });
      var l = C(4671);
      function v(...j) {
        return k(j);
      }
      function k(j) {
        return 0 === j.length
          ? l.y
          : 1 === j.length
          ? j[0]
          : function (V) {
              return j.reduce(($, Z) => Z($), V);
            };
      }
    },
    7849: (Re, q, C) => {
      C.d(q, { h: () => k });
      var l = C(2416),
        v = C(3410);
      function k(j) {
        v.z.setTimeout(() => {
          const { onUnhandledError: H } = l.v;
          if (!H) throw j;
          H(j);
        });
      }
    },
    4532: (Re, q, C) => {
      function l(v) {
        return new TypeError(
          `You provided ${
            null !== v && 'object' == typeof v ? 'an invalid object' : `'${v}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      C.d(q, { z: () => l });
    },
    655: (Re, q, C) => {
      function L(oe, ie, he, ve) {
        return new (he || (he = Promise))(function (Y, me) {
          function F(Ie) {
            try {
              ce(ve.next(Ie));
            } catch (Oe) {
              me(Oe);
            }
          }
          function re(Ie) {
            try {
              ce(ve.throw(Ie));
            } catch (Oe) {
              me(Oe);
            }
          }
          function ce(Ie) {
            Ie.done
              ? Y(Ie.value)
              : (function _e(Y) {
                  return Y instanceof he
                    ? Y
                    : new he(function (me) {
                        me(Y);
                      });
                })(Ie.value).then(F, re);
          }
          ce((ve = ve.apply(oe, ie || [])).next());
        });
      }
      function be(oe) {
        return this instanceof be ? ((this.v = oe), this) : new be(oe);
      }
      function Ee(oe, ie, he) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var _e,
          ve = he.apply(oe, ie || []),
          Y = [];
        return (
          (_e = {}),
          me('next'),
          me('throw'),
          me('return'),
          (_e[Symbol.asyncIterator] = function () {
            return this;
          }),
          _e
        );
        function me(ct) {
          ve[ct] &&
            (_e[ct] = function (Dt) {
              return new Promise(function (Mt, At) {
                Y.push([ct, Dt, Mt, At]) > 1 || F(ct, Dt);
              });
            });
        }
        function F(ct, Dt) {
          try {
            !(function re(ct) {
              ct.value instanceof be
                ? Promise.resolve(ct.value.v).then(ce, Ie)
                : Oe(Y[0][2], ct);
            })(ve[ct](Dt));
          } catch (Mt) {
            Oe(Y[0][3], Mt);
          }
        }
        function ce(ct) {
          F('next', ct);
        }
        function Ie(ct) {
          F('throw', ct);
        }
        function Oe(ct, Dt) {
          ct(Dt), Y.shift(), Y.length && F(Y[0][0], Y[0][1]);
        }
      }
      function nt(oe) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var he,
          ie = oe[Symbol.asyncIterator];
        return ie
          ? ie.call(oe)
          : ((oe = (function ke(oe) {
              var ie = 'function' == typeof Symbol && Symbol.iterator,
                he = ie && oe[ie],
                ve = 0;
              if (he) return he.call(oe);
              if (oe && 'number' == typeof oe.length)
                return {
                  next: function () {
                    return (
                      oe && ve >= oe.length && (oe = void 0),
                      { value: oe && oe[ve++], done: !oe }
                    );
                  },
                };
              throw new TypeError(
                ie
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.'
              );
            })(oe)),
            (he = {}),
            ve('next'),
            ve('throw'),
            ve('return'),
            (he[Symbol.asyncIterator] = function () {
              return this;
            }),
            he);
        function ve(Y) {
          he[Y] =
            oe[Y] &&
            function (me) {
              return new Promise(function (F, re) {
                !(function _e(Y, me, F, re) {
                  Promise.resolve(re).then(function (ce) {
                    Y({ value: ce, done: F });
                  }, me);
                })(F, re, (me = oe[Y](me)).done, me.value);
              });
            };
        }
      }
      C.d(q, { FC: () => Ee, KL: () => nt, mG: () => L, qq: () => be });
    },
    6895: (Re, q, C) => {
      C.d(q, {
        $G: () => dt,
        Do: () => Me,
        ED: () => bn,
        EM: () => Gr,
        HT: () => j,
        JF: () => so,
        JJ: () => li,
        K0: () => V,
        Kl: () => Ir,
        Mx: () => Eo,
        O5: () => no,
        OU: () => Go,
        Ov: () => Hr,
        PC: () => Tn,
        RF: () => an,
        S$: () => ke,
        V_: () => X,
        WL: () => _,
        Ye: () => We,
        Zd: () => To,
        b0: () => Ne,
        bD: () => Wo,
        ez: () => ci,
        gd: () => ln,
        mk: () => ze,
        n9: () => ro,
        p6: () => Cn,
        q: () => k,
        sg: () => xt,
        tP: () => dr,
        uU: () => tr,
        w_: () => H,
      });
      var l = C(4650);
      let v = null;
      function k() {
        return v;
      }
      function j(f) {
        v || (v = f);
      }
      class H {}
      const V = new l.OlP('DocumentToken');
      let $ = (() => {
        class f {
          historyGo(p) {
            throw new Error('Not implemented');
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)();
          }),
          (f.ɵprov = l.Yz7({
            token: f,
            factory: function () {
              return (function Z() {
                return (0, l.LFG)(Q);
              })();
            },
            providedIn: 'platform',
          })),
          f
        );
      })();
      const X = new l.OlP('Location Initialized');
      let Q = (() => {
        class f extends $ {
          constructor(p) {
            super(),
              (this._doc = p),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return k().getBaseHref(this._doc);
          }
          onPopState(p) {
            const M = k().getGlobalEventTarget(this._doc, 'window');
            return (
              M.addEventListener('popstate', p, !1),
              () => M.removeEventListener('popstate', p)
            );
          }
          onHashChange(p) {
            const M = k().getGlobalEventTarget(this._doc, 'window');
            return (
              M.addEventListener('hashchange', p, !1),
              () => M.removeEventListener('hashchange', p)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(p) {
            this._location.pathname = p;
          }
          pushState(p, M, N) {
            U() ? this._history.pushState(p, M, N) : (this._location.hash = N);
          }
          replaceState(p, M, N) {
            U()
              ? this._history.replaceState(p, M, N)
              : (this._location.hash = N);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(p = 0) {
            this._history.go(p);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)(l.LFG(V));
          }),
          (f.ɵprov = l.Yz7({
            token: f,
            factory: function () {
              return (function L() {
                return new Q((0, l.LFG)(V));
              })();
            },
            providedIn: 'platform',
          })),
          f
        );
      })();
      function U() {
        return !!window.history.pushState;
      }
      function se(f, w) {
        if (0 == f.length) return w;
        if (0 == w.length) return f;
        let p = 0;
        return (
          f.endsWith('/') && p++,
          w.startsWith('/') && p++,
          2 == p ? f + w.substring(1) : 1 == p ? f + w : f + '/' + w
        );
      }
      function te(f) {
        const w = f.match(/#|\?|$/),
          p = (w && w.index) || f.length;
        return f.slice(0, p - ('/' === f[p - 1] ? 1 : 0)) + f.slice(p);
      }
      function De(f) {
        return f && '?' !== f[0] ? '?' + f : f;
      }
      let ke = (() => {
        class f {
          historyGo(p) {
            throw new Error('Not implemented');
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)();
          }),
          (f.ɵprov = l.Yz7({
            token: f,
            factory: function () {
              return (0, l.f3M)(Ne);
            },
            providedIn: 'root',
          })),
          f
        );
      })();
      const de = new l.OlP('appBaseHref');
      let Ne = (() => {
          class f extends ke {
            constructor(p, M) {
              super(),
                (this._platformLocation = p),
                (this._removeListenerFns = []),
                (this._baseHref =
                  M ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, l.f3M)(V).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(p) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(p),
                this._platformLocation.onHashChange(p)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(p) {
              return se(this._baseHref, p);
            }
            path(p = !1) {
              const M =
                  this._platformLocation.pathname +
                  De(this._platformLocation.search),
                N = this._platformLocation.hash;
              return N && p ? `${M}${N}` : M;
            }
            pushState(p, M, N, ne) {
              const le = this.prepareExternalUrl(N + De(ne));
              this._platformLocation.pushState(p, M, le);
            }
            replaceState(p, M, N, ne) {
              const le = this.prepareExternalUrl(N + De(ne));
              this._platformLocation.replaceState(p, M, le);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(p = 0) {
              this._platformLocation.historyGo?.(p);
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.LFG($), l.LFG(de, 8));
            }),
            (f.ɵprov = l.Yz7({
              token: f,
              factory: f.ɵfac,
              providedIn: 'root',
            })),
            f
          );
        })(),
        Me = (() => {
          class f extends ke {
            constructor(p, M) {
              super(),
                (this._platformLocation = p),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != M && (this._baseHref = M);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(p) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(p),
                this._platformLocation.onHashChange(p)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(p = !1) {
              let M = this._platformLocation.hash;
              return null == M && (M = '#'), M.length > 0 ? M.substring(1) : M;
            }
            prepareExternalUrl(p) {
              const M = se(this._baseHref, p);
              return M.length > 0 ? '#' + M : M;
            }
            pushState(p, M, N, ne) {
              let le = this.prepareExternalUrl(N + De(ne));
              0 == le.length && (le = this._platformLocation.pathname),
                this._platformLocation.pushState(p, M, le);
            }
            replaceState(p, M, N, ne) {
              let le = this.prepareExternalUrl(N + De(ne));
              0 == le.length && (le = this._platformLocation.pathname),
                this._platformLocation.replaceState(p, M, le);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(p = 0) {
              this._platformLocation.historyGo?.(p);
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.LFG($), l.LFG(de, 8));
            }),
            (f.ɵprov = l.Yz7({ token: f, factory: f.ɵfac })),
            f
          );
        })(),
        We = (() => {
          class f {
            constructor(p) {
              (this._subject = new l.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = p);
              const M = this._locationStrategy.getBaseHref();
              (this._basePath = (function nt(f) {
                if (new RegExp('^(https?:)?//').test(f)) {
                  const [, p] = f.split(/\/\/[^\/]+/);
                  return p;
                }
                return f;
              })(te(Ye(M)))),
                this._locationStrategy.onPopState((N) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: N.state,
                    type: N.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(p = !1) {
              return this.normalize(this._locationStrategy.path(p));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(p, M = '') {
              return this.path() == this.normalize(p + De(M));
            }
            normalize(p) {
              return f.stripTrailingSlash(
                (function Ee(f, w) {
                  if (!f || !w.startsWith(f)) return w;
                  const p = w.substring(f.length);
                  return '' === p || ['/', ';', '?', '#'].includes(p[0])
                    ? p
                    : w;
                })(this._basePath, Ye(p))
              );
            }
            prepareExternalUrl(p) {
              return (
                p && '/' !== p[0] && (p = '/' + p),
                this._locationStrategy.prepareExternalUrl(p)
              );
            }
            go(p, M = '', N = null) {
              this._locationStrategy.pushState(N, '', p, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(p + De(M)),
                  N
                );
            }
            replaceState(p, M = '', N = null) {
              this._locationStrategy.replaceState(N, '', p, M),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(p + De(M)),
                  N
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(p = 0) {
              this._locationStrategy.historyGo?.(p);
            }
            onUrlChange(p) {
              return (
                this._urlChangeListeners.push(p),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((M) => {
                    this._notifyUrlChangeListeners(M.url, M.state);
                  })),
                () => {
                  const M = this._urlChangeListeners.indexOf(p);
                  this._urlChangeListeners.splice(M, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(p = '', M) {
              this._urlChangeListeners.forEach((N) => N(p, M));
            }
            subscribe(p, M, N) {
              return this._subject.subscribe({
                next: p,
                error: M,
                complete: N,
              });
            }
          }
          return (
            (f.normalizeQueryParams = De),
            (f.joinWithSlash = se),
            (f.stripTrailingSlash = te),
            (f.ɵfac = function (p) {
              return new (p || f)(l.LFG(ke));
            }),
            (f.ɵprov = l.Yz7({
              token: f,
              factory: function () {
                return (function be() {
                  return new We((0, l.LFG)(ke));
                })();
              },
              providedIn: 'root',
            })),
            f
          );
        })();
      function Ye(f) {
        return f.replace(/\/index.html$/, '');
      }
      var Se = (() => (
          ((Se = Se || {})[(Se.Decimal = 0)] = 'Decimal'),
          (Se[(Se.Percent = 1)] = 'Percent'),
          (Se[(Se.Currency = 2)] = 'Currency'),
          (Se[(Se.Scientific = 3)] = 'Scientific'),
          Se
        ))(),
        we = (() => (
          ((we = we || {})[(we.Format = 0)] = 'Format'),
          (we[(we.Standalone = 1)] = 'Standalone'),
          we
        ))(),
        Le = (() => (
          ((Le = Le || {})[(Le.Narrow = 0)] = 'Narrow'),
          (Le[(Le.Abbreviated = 1)] = 'Abbreviated'),
          (Le[(Le.Wide = 2)] = 'Wide'),
          (Le[(Le.Short = 3)] = 'Short'),
          Le
        ))(),
        ot = (() => (
          ((ot = ot || {})[(ot.Short = 0)] = 'Short'),
          (ot[(ot.Medium = 1)] = 'Medium'),
          (ot[(ot.Long = 2)] = 'Long'),
          (ot[(ot.Full = 3)] = 'Full'),
          ot
        ))(),
        Ke = (() => (
          ((Ke = Ke || {})[(Ke.Decimal = 0)] = 'Decimal'),
          (Ke[(Ke.Group = 1)] = 'Group'),
          (Ke[(Ke.List = 2)] = 'List'),
          (Ke[(Ke.PercentSign = 3)] = 'PercentSign'),
          (Ke[(Ke.PlusSign = 4)] = 'PlusSign'),
          (Ke[(Ke.MinusSign = 5)] = 'MinusSign'),
          (Ke[(Ke.Exponential = 6)] = 'Exponential'),
          (Ke[(Ke.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
          (Ke[(Ke.PerMille = 8)] = 'PerMille'),
          (Ke[(Ke.Infinity = 9)] = 'Infinity'),
          (Ke[(Ke.NaN = 10)] = 'NaN'),
          (Ke[(Ke.TimeSeparator = 11)] = 'TimeSeparator'),
          (Ke[(Ke.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
          (Ke[(Ke.CurrencyGroup = 13)] = 'CurrencyGroup'),
          Ke
        ))();
      function re(f, w) {
        return kt((0, l.cg1)(f)[l.wAp.DateFormat], w);
      }
      function ce(f, w) {
        return kt((0, l.cg1)(f)[l.wAp.TimeFormat], w);
      }
      function Ie(f, w) {
        return kt((0, l.cg1)(f)[l.wAp.DateTimeFormat], w);
      }
      function Oe(f, w) {
        const p = (0, l.cg1)(f),
          M = p[l.wAp.NumberSymbols][w];
        if (typeof M > 'u') {
          if (w === Ke.CurrencyDecimal)
            return p[l.wAp.NumberSymbols][Ke.Decimal];
          if (w === Ke.CurrencyGroup) return p[l.wAp.NumberSymbols][Ke.Group];
        }
        return M;
      }
      function Kt(f) {
        if (!f[l.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              f[l.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function kt(f, w) {
        for (let p = w; p > -1; p--) if (typeof f[p] < 'u') return f[p];
        throw new Error('Locale data API: locale data undefined');
      }
      function Vt(f) {
        const [w, p] = f.split(':');
        return { hours: +w, minutes: +p };
      }
      const $t =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        _t = {},
        In =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var it = (() => (
          ((it = it || {})[(it.Short = 0)] = 'Short'),
          (it[(it.ShortGMT = 1)] = 'ShortGMT'),
          (it[(it.Long = 2)] = 'Long'),
          (it[(it.Extended = 3)] = 'Extended'),
          it
        ))(),
        tt = (() => (
          ((tt = tt || {})[(tt.FullYear = 0)] = 'FullYear'),
          (tt[(tt.Month = 1)] = 'Month'),
          (tt[(tt.Date = 2)] = 'Date'),
          (tt[(tt.Hours = 3)] = 'Hours'),
          (tt[(tt.Minutes = 4)] = 'Minutes'),
          (tt[(tt.Seconds = 5)] = 'Seconds'),
          (tt[(tt.FractionalSeconds = 6)] = 'FractionalSeconds'),
          (tt[(tt.Day = 7)] = 'Day'),
          tt
        ))(),
        Be = (() => (
          ((Be = Be || {})[(Be.DayPeriods = 0)] = 'DayPeriods'),
          (Be[(Be.Days = 1)] = 'Days'),
          (Be[(Be.Months = 2)] = 'Months'),
          (Be[(Be.Eras = 3)] = 'Eras'),
          Be
        ))();
      function Cn(f, w, p, M) {
        let N = (function Et(f) {
          if (z(f)) return f;
          if ('number' == typeof f && !isNaN(f)) return new Date(f);
          if ('string' == typeof f) {
            if (((f = f.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(f))) {
              const [N, ne = 1, le = 1] = f.split('-').map((Xe) => +Xe);
              return En(N, ne - 1, le);
            }
            const p = parseFloat(f);
            if (!isNaN(f - p)) return new Date(p);
            let M;
            if ((M = f.match($t)))
              return (function on(f) {
                const w = new Date(0);
                let p = 0,
                  M = 0;
                const N = f[8] ? w.setUTCFullYear : w.setFullYear,
                  ne = f[8] ? w.setUTCHours : w.setHours;
                f[9] &&
                  ((p = Number(f[9] + f[10])), (M = Number(f[9] + f[11]))),
                  N.call(w, Number(f[1]), Number(f[2]) - 1, Number(f[3]));
                const le = Number(f[4] || 0) - p,
                  Xe = Number(f[5] || 0) - M,
                  Ct = Number(f[6] || 0),
                  It = Math.floor(1e3 * parseFloat('0.' + (f[7] || 0)));
                return ne.call(w, le, Xe, Ct, It), w;
              })(M);
          }
          const w = new Date(f);
          if (!z(w)) throw new Error(`Unable to convert "${f}" into a date`);
          return w;
        })(f);
        w = Zt(p, w) || w;
        let Xe,
          le = [];
        for (; w; ) {
          if (((Xe = In.exec(w)), !Xe)) {
            le.push(w);
            break;
          }
          {
            le = le.concat(Xe.slice(1));
            const Ot = le.pop();
            if (!Ot) break;
            w = Ot;
          }
        }
        let Ct = N.getTimezoneOffset();
        M &&
          ((Ct = He(M, Ct)),
          (N = (function Ze(f, w, p) {
            const M = p ? -1 : 1,
              N = f.getTimezoneOffset();
            return (function rt(f, w) {
              return (
                (f = new Date(f.getTime())).setMinutes(f.getMinutes() + w), f
              );
            })(f, M * (He(w, N) - N));
          })(N, M, !0)));
        let It = '';
        return (
          le.forEach((Ot) => {
            const vt = (function Te(f) {
              if (B[f]) return B[f];
              let w;
              switch (f) {
                case 'G':
                case 'GG':
                case 'GGG':
                  w = Ue(Be.Eras, Le.Abbreviated);
                  break;
                case 'GGGG':
                  w = Ue(Be.Eras, Le.Wide);
                  break;
                case 'GGGGG':
                  w = Ue(Be.Eras, Le.Narrow);
                  break;
                case 'y':
                  w = Tt(tt.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  w = Tt(tt.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  w = Tt(tt.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  w = Tt(tt.FullYear, 4, 0, !1, !0);
                  break;
                case 'Y':
                  w = O(1);
                  break;
                case 'YY':
                  w = O(2, !0);
                  break;
                case 'YYY':
                  w = O(3);
                  break;
                case 'YYYY':
                  w = O(4);
                  break;
                case 'M':
                case 'L':
                  w = Tt(tt.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  w = Tt(tt.Month, 2, 1);
                  break;
                case 'MMM':
                  w = Ue(Be.Months, Le.Abbreviated);
                  break;
                case 'MMMM':
                  w = Ue(Be.Months, Le.Wide);
                  break;
                case 'MMMMM':
                  w = Ue(Be.Months, Le.Narrow);
                  break;
                case 'LLL':
                  w = Ue(Be.Months, Le.Abbreviated, we.Standalone);
                  break;
                case 'LLLL':
                  w = Ue(Be.Months, Le.Wide, we.Standalone);
                  break;
                case 'LLLLL':
                  w = Ue(Be.Months, Le.Narrow, we.Standalone);
                  break;
                case 'w':
                  w = P(1);
                  break;
                case 'ww':
                  w = P(2);
                  break;
                case 'W':
                  w = P(1, !0);
                  break;
                case 'd':
                  w = Tt(tt.Date, 1);
                  break;
                case 'dd':
                  w = Tt(tt.Date, 2);
                  break;
                case 'c':
                case 'cc':
                  w = Tt(tt.Day, 1);
                  break;
                case 'ccc':
                  w = Ue(Be.Days, Le.Abbreviated, we.Standalone);
                  break;
                case 'cccc':
                  w = Ue(Be.Days, Le.Wide, we.Standalone);
                  break;
                case 'ccccc':
                  w = Ue(Be.Days, Le.Narrow, we.Standalone);
                  break;
                case 'cccccc':
                  w = Ue(Be.Days, Le.Short, we.Standalone);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  w = Ue(Be.Days, Le.Abbreviated);
                  break;
                case 'EEEE':
                  w = Ue(Be.Days, Le.Wide);
                  break;
                case 'EEEEE':
                  w = Ue(Be.Days, Le.Narrow);
                  break;
                case 'EEEEEE':
                  w = Ue(Be.Days, Le.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  w = Ue(Be.DayPeriods, Le.Abbreviated);
                  break;
                case 'aaaa':
                  w = Ue(Be.DayPeriods, Le.Wide);
                  break;
                case 'aaaaa':
                  w = Ue(Be.DayPeriods, Le.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  w = Ue(Be.DayPeriods, Le.Abbreviated, we.Standalone, !0);
                  break;
                case 'bbbb':
                  w = Ue(Be.DayPeriods, Le.Wide, we.Standalone, !0);
                  break;
                case 'bbbbb':
                  w = Ue(Be.DayPeriods, Le.Narrow, we.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  w = Ue(Be.DayPeriods, Le.Abbreviated, we.Format, !0);
                  break;
                case 'BBBB':
                  w = Ue(Be.DayPeriods, Le.Wide, we.Format, !0);
                  break;
                case 'BBBBB':
                  w = Ue(Be.DayPeriods, Le.Narrow, we.Format, !0);
                  break;
                case 'h':
                  w = Tt(tt.Hours, 1, -12);
                  break;
                case 'hh':
                  w = Tt(tt.Hours, 2, -12);
                  break;
                case 'H':
                  w = Tt(tt.Hours, 1);
                  break;
                case 'HH':
                  w = Tt(tt.Hours, 2);
                  break;
                case 'm':
                  w = Tt(tt.Minutes, 1);
                  break;
                case 'mm':
                  w = Tt(tt.Minutes, 2);
                  break;
                case 's':
                  w = Tt(tt.Seconds, 1);
                  break;
                case 'ss':
                  w = Tt(tt.Seconds, 2);
                  break;
                case 'S':
                  w = Tt(tt.FractionalSeconds, 1);
                  break;
                case 'SS':
                  w = Tt(tt.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  w = Tt(tt.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  w = An(it.Short);
                  break;
                case 'ZZZZZ':
                  w = An(it.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  w = An(it.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  w = An(it.Long);
                  break;
                default:
                  return null;
              }
              return (B[f] = w), w;
            })(Ot);
            It += vt
              ? vt(N, p, Ct)
              : "''" === Ot
              ? "'"
              : Ot.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          It
        );
      }
      function En(f, w, p) {
        const M = new Date(0);
        return M.setFullYear(f, w, p), M.setHours(0, 0, 0), M;
      }
      function Zt(f, w) {
        const p = (function ie(f) {
          return (0, l.cg1)(f)[l.wAp.LocaleId];
        })(f);
        if (((_t[p] = _t[p] || {}), _t[p][w])) return _t[p][w];
        let M = '';
        switch (w) {
          case 'shortDate':
            M = re(f, ot.Short);
            break;
          case 'mediumDate':
            M = re(f, ot.Medium);
            break;
          case 'longDate':
            M = re(f, ot.Long);
            break;
          case 'fullDate':
            M = re(f, ot.Full);
            break;
          case 'shortTime':
            M = ce(f, ot.Short);
            break;
          case 'mediumTime':
            M = ce(f, ot.Medium);
            break;
          case 'longTime':
            M = ce(f, ot.Long);
            break;
          case 'fullTime':
            M = ce(f, ot.Full);
            break;
          case 'short':
            const N = Zt(f, 'shortTime'),
              ne = Zt(f, 'shortDate');
            M = rn(Ie(f, ot.Short), [N, ne]);
            break;
          case 'medium':
            const le = Zt(f, 'mediumTime'),
              Xe = Zt(f, 'mediumDate');
            M = rn(Ie(f, ot.Medium), [le, Xe]);
            break;
          case 'long':
            const Ct = Zt(f, 'longTime'),
              It = Zt(f, 'longDate');
            M = rn(Ie(f, ot.Long), [Ct, It]);
            break;
          case 'full':
            const Ot = Zt(f, 'fullTime'),
              vt = Zt(f, 'fullDate');
            M = rn(Ie(f, ot.Full), [Ot, vt]);
        }
        return M && (_t[p][w] = M), M;
      }
      function rn(f, w) {
        return (
          w &&
            (f = f.replace(/\{([^}]+)}/g, function (p, M) {
              return null != w && M in w ? w[M] : p;
            })),
          f
        );
      }
      function Gt(f, w, p = '-', M, N) {
        let ne = '';
        (f < 0 || (N && f <= 0)) && (N ? (f = 1 - f) : ((f = -f), (ne = p)));
        let le = String(f);
        for (; le.length < w; ) le = '0' + le;
        return M && (le = le.slice(le.length - w)), ne + le;
      }
      function Tt(f, w, p = 0, M = !1, N = !1) {
        return function (ne, le) {
          let Xe = (function Dn(f, w) {
            switch (f) {
              case tt.FullYear:
                return w.getFullYear();
              case tt.Month:
                return w.getMonth();
              case tt.Date:
                return w.getDate();
              case tt.Hours:
                return w.getHours();
              case tt.Minutes:
                return w.getMinutes();
              case tt.Seconds:
                return w.getSeconds();
              case tt.FractionalSeconds:
                return w.getMilliseconds();
              case tt.Day:
                return w.getDay();
              default:
                throw new Error(`Unknown DateType value "${f}".`);
            }
          })(f, ne);
          if (((p > 0 || Xe > -p) && (Xe += p), f === tt.Hours))
            0 === Xe && -12 === p && (Xe = 12);
          else if (f === tt.FractionalSeconds)
            return (function Mr(f, w) {
              return Gt(f, 3).substring(0, w);
            })(Xe, w);
          const Ct = Oe(le, Ke.MinusSign);
          return Gt(Xe, w, Ct, M, N);
        };
      }
      function Ue(f, w, p = we.Format, M = !1) {
        return function (N, ne) {
          return (function Jt(f, w, p, M, N, ne) {
            switch (p) {
              case Be.Months:
                return (function _e(f, w, p) {
                  const M = (0, l.cg1)(f),
                    ne = kt(
                      [M[l.wAp.MonthsFormat], M[l.wAp.MonthsStandalone]],
                      w
                    );
                  return kt(ne, p);
                })(w, N, M)[f.getMonth()];
              case Be.Days:
                return (function ve(f, w, p) {
                  const M = (0, l.cg1)(f),
                    ne = kt([M[l.wAp.DaysFormat], M[l.wAp.DaysStandalone]], w);
                  return kt(ne, p);
                })(w, N, M)[f.getDay()];
              case Be.DayPeriods:
                const le = f.getHours(),
                  Xe = f.getMinutes();
                if (ne) {
                  const It = (function Vn(f) {
                      const w = (0, l.cg1)(f);
                      return (
                        Kt(w),
                        (w[l.wAp.ExtraData][2] || []).map((M) =>
                          'string' == typeof M ? Vt(M) : [Vt(M[0]), Vt(M[1])]
                        )
                      );
                    })(w),
                    Ot = (function fn(f, w, p) {
                      const M = (0, l.cg1)(f);
                      Kt(M);
                      const ne =
                        kt([M[l.wAp.ExtraData][0], M[l.wAp.ExtraData][1]], w) ||
                        [];
                      return kt(ne, p) || [];
                    })(w, N, M),
                    vt = It.findIndex((un) => {
                      if (Array.isArray(un)) {
                        const [Nt, nn] = un,
                          xr = le >= Nt.hours && Xe >= Nt.minutes,
                          Hn =
                            le < nn.hours ||
                            (le === nn.hours && Xe < nn.minutes);
                        if (Nt.hours < nn.hours) {
                          if (xr && Hn) return !0;
                        } else if (xr || Hn) return !0;
                      } else if (un.hours === le && un.minutes === Xe)
                        return !0;
                      return !1;
                    });
                  if (-1 !== vt) return Ot[vt];
                }
                return (function he(f, w, p) {
                  const M = (0, l.cg1)(f),
                    ne = kt(
                      [
                        M[l.wAp.DayPeriodsFormat],
                        M[l.wAp.DayPeriodsStandalone],
                      ],
                      w
                    );
                  return kt(ne, p);
                })(w, N, M)[le < 12 ? 0 : 1];
              case Be.Eras:
                return (function Y(f, w) {
                  return kt((0, l.cg1)(f)[l.wAp.Eras], w);
                })(w, M)[f.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${p}`);
            }
          })(N, ne, f, w, p, M);
        };
      }
      function An(f) {
        return function (w, p, M) {
          const N = -1 * M,
            ne = Oe(p, Ke.MinusSign),
            le = N > 0 ? Math.floor(N / 60) : Math.ceil(N / 60);
          switch (f) {
            case it.Short:
              return (
                (N >= 0 ? '+' : '') +
                Gt(le, 2, ne) +
                Gt(Math.abs(N % 60), 2, ne)
              );
            case it.ShortGMT:
              return 'GMT' + (N >= 0 ? '+' : '') + Gt(le, 1, ne);
            case it.Long:
              return (
                'GMT' +
                (N >= 0 ? '+' : '') +
                Gt(le, 2, ne) +
                ':' +
                Gt(Math.abs(N % 60), 2, ne)
              );
            case it.Extended:
              return 0 === M
                ? 'Z'
                : (N >= 0 ? '+' : '') +
                    Gt(le, 2, ne) +
                    ':' +
                    Gt(Math.abs(N % 60), 2, ne);
            default:
              throw new Error(`Unknown zone width "${f}"`);
          }
        };
      }
      const pt = 0,
        wn = 4;
      function b(f) {
        return En(
          f.getFullYear(),
          f.getMonth(),
          f.getDate() + (wn - f.getDay())
        );
      }
      function P(f, w = !1) {
        return function (p, M) {
          let N;
          if (w) {
            const ne = new Date(p.getFullYear(), p.getMonth(), 1).getDay() - 1,
              le = p.getDate();
            N = 1 + Math.floor((le + ne) / 7);
          } else {
            const ne = b(p),
              le = (function ue(f) {
                const w = En(f, pt, 1).getDay();
                return En(f, 0, 1 + (w <= wn ? wn : wn + 7) - w);
              })(ne.getFullYear()),
              Xe = ne.getTime() - le.getTime();
            N = 1 + Math.round(Xe / 6048e5);
          }
          return Gt(N, f, Oe(M, Ke.MinusSign));
        };
      }
      function O(f, w = !1) {
        return function (p, M) {
          return Gt(b(p).getFullYear(), f, Oe(M, Ke.MinusSign), w);
        };
      }
      const B = {};
      function He(f, w) {
        f = f.replace(/:/g, '');
        const p = Date.parse('Jan 01, 1970 00:00:00 ' + f) / 6e4;
        return isNaN(p) ? w : p;
      }
      function z(f) {
        return f instanceof Date && !isNaN(f.valueOf());
      }
      const G = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
        R = 22,
        W = '.',
        fe = '0',
        Fe = ';',
        Je = ',',
        St = '#';
      function Xt(f) {
        const w = parseInt(f);
        if (isNaN(w))
          throw new Error('Invalid integer literal when parsing ' + f);
        return w;
      }
      function Eo(f, w) {
        w = encodeURIComponent(w);
        for (const p of f.split(';')) {
          const M = p.indexOf('='),
            [N, ne] = -1 == M ? [p, ''] : [p.slice(0, M), p.slice(M + 1)];
          if (N.trim() === w) return decodeURIComponent(ne);
        }
        return null;
      }
      const Xn = /\s+/,
        tn = [];
      let ze = (() => {
          class f {
            constructor(p, M, N, ne) {
              (this._iterableDiffers = p),
                (this._keyValueDiffers = M),
                (this._ngEl = N),
                (this._renderer = ne),
                (this.initialClasses = tn),
                (this.stateMap = new Map());
            }
            set klass(p) {
              this.initialClasses = null != p ? p.trim().split(Xn) : tn;
            }
            set ngClass(p) {
              this.rawClass = 'string' == typeof p ? p.trim().split(Xn) : p;
            }
            ngDoCheck() {
              for (const M of this.initialClasses) this._updateState(M, !0);
              const p = this.rawClass;
              if (Array.isArray(p) || p instanceof Set)
                for (const M of p) this._updateState(M, !0);
              else if (null != p)
                for (const M of Object.keys(p))
                  this._updateState(M, Boolean(p[M]));
              this._applyStateDiff();
            }
            _updateState(p, M) {
              const N = this.stateMap.get(p);
              void 0 !== N
                ? (N.enabled !== M && ((N.changed = !0), (N.enabled = M)),
                  (N.touched = !0))
                : this.stateMap.set(p, {
                    enabled: M,
                    changed: !0,
                    touched: !0,
                  });
            }
            _applyStateDiff() {
              for (const p of this.stateMap) {
                const M = p[0],
                  N = p[1];
                N.changed
                  ? (this._toggleClass(M, N.enabled), (N.changed = !1))
                  : N.touched ||
                    (N.enabled && this._toggleClass(M, !1),
                    this.stateMap.delete(M)),
                  (N.touched = !1);
              }
            }
            _toggleClass(p, M) {
              (p = p.trim()).length > 0 &&
                p.split(Xn).forEach((N) => {
                  M
                    ? this._renderer.addClass(this._ngEl.nativeElement, N)
                    : this._renderer.removeClass(this._ngEl.nativeElement, N);
                });
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(
                l.Y36(l.ZZ4),
                l.Y36(l.aQg),
                l.Y36(l.SBq),
                l.Y36(l.Qsj)
              );
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngClass', '']],
              inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
              standalone: !0,
            })),
            f
          );
        })(),
        dt = (() => {
          class f {
            constructor(p) {
              (this._viewContainerRef = p), (this.ngComponentOutlet = null);
            }
            ngOnChanges(p) {
              const {
                _viewContainerRef: M,
                ngComponentOutletNgModule: N,
                ngComponentOutletNgModuleFactory: ne,
              } = this;
              if (
                (M.clear(),
                (this._componentRef = void 0),
                this.ngComponentOutlet)
              ) {
                const le = this.ngComponentOutletInjector || M.parentInjector;
                (p.ngComponentOutletNgModule ||
                  p.ngComponentOutletNgModuleFactory) &&
                  (this._moduleRef && this._moduleRef.destroy(),
                  (this._moduleRef = N
                    ? (0, l.Lck)(N, Rt(le))
                    : ne
                    ? ne.create(Rt(le))
                    : void 0)),
                  (this._componentRef = M.createComponent(
                    this.ngComponentOutlet,
                    {
                      index: M.length,
                      injector: le,
                      ngModuleRef: this._moduleRef,
                      projectableNodes: this.ngComponentOutletContent,
                    }
                  ));
              }
            }
            ngOnDestroy() {
              this._moduleRef && this._moduleRef.destroy();
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.s_b));
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngComponentOutlet', '']],
              inputs: {
                ngComponentOutlet: 'ngComponentOutlet',
                ngComponentOutletInjector: 'ngComponentOutletInjector',
                ngComponentOutletContent: 'ngComponentOutletContent',
                ngComponentOutletNgModule: 'ngComponentOutletNgModule',
                ngComponentOutletNgModuleFactory:
                  'ngComponentOutletNgModuleFactory',
              },
              standalone: !0,
              features: [l.TTD],
            })),
            f
          );
        })();
      function Rt(f) {
        return f.get(l.h0i).injector;
      }
      class xn {
        constructor(w, p, M, N) {
          (this.$implicit = w),
            (this.ngForOf = p),
            (this.index = M),
            (this.count = N);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let xt = (() => {
        class f {
          set ngForOf(p) {
            (this._ngForOf = p), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(p) {
            this._trackByFn = p;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(p, M, N) {
            (this._viewContainer = p),
              (this._template = M),
              (this._differs = N),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(p) {
            p && (this._template = p);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const p = this._ngForOf;
              !this._differ &&
                p &&
                (this._differ = this._differs
                  .find(p)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const p = this._differ.diff(this._ngForOf);
              p && this._applyChanges(p);
            }
          }
          _applyChanges(p) {
            const M = this._viewContainer;
            p.forEachOperation((N, ne, le) => {
              if (null == N.previousIndex)
                M.createEmbeddedView(
                  this._template,
                  new xn(N.item, this._ngForOf, -1, -1),
                  null === le ? void 0 : le
                );
              else if (null == le) M.remove(null === ne ? void 0 : ne);
              else if (null !== ne) {
                const Xe = M.get(ne);
                M.move(Xe, le), Qn(Xe, N);
              }
            });
            for (let N = 0, ne = M.length; N < ne; N++) {
              const Xe = M.get(N).context;
              (Xe.index = N), (Xe.count = ne), (Xe.ngForOf = this._ngForOf);
            }
            p.forEachIdentityChange((N) => {
              Qn(M.get(N.currentIndex), N);
            });
          }
          static ngTemplateContextGuard(p, M) {
            return !0;
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(l.ZZ4));
          }),
          (f.ɵdir = l.lG2({
            type: f,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          })),
          f
        );
      })();
      function Qn(f, w) {
        f.context.$implicit = w.item;
      }
      let no = (() => {
        class f {
          constructor(p, M) {
            (this._viewContainer = p),
              (this._context = new Br()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = M);
          }
          set ngIf(p) {
            (this._context.$implicit = this._context.ngIf = p),
              this._updateView();
          }
          set ngIfThen(p) {
            ut('ngIfThen', p),
              (this._thenTemplateRef = p),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(p) {
            ut('ngIfElse', p),
              (this._elseTemplateRef = p),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(p, M) {
            return !0;
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)(l.Y36(l.s_b), l.Y36(l.Rgc));
          }),
          (f.ɵdir = l.lG2({
            type: f,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
            standalone: !0,
          })),
          f
        );
      })();
      class Br {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function ut(f, w) {
        if (w && !w.createEmbeddedView)
          throw new Error(
            `${f} must be a TemplateRef, but received '${(0, l.AaK)(w)}'.`
          );
      }
      class qn {
        constructor(w, p) {
          (this._viewContainerRef = w),
            (this._templateRef = p),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(w) {
          w && !this._created
            ? this.create()
            : !w && this._created && this.destroy();
        }
      }
      let an = (() => {
          class f {
            constructor() {
              (this._defaultViews = []),
                (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(p) {
              (this._ngSwitch = p),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(p) {
              this._defaultViews.push(p);
            }
            _matchCase(p) {
              const M = p == this._ngSwitch;
              return (
                (this._lastCasesMatched = this._lastCasesMatched || M),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                M
              );
            }
            _updateDefaultCases(p) {
              if (this._defaultViews.length > 0 && p !== this._defaultUsed) {
                this._defaultUsed = p;
                for (const M of this._defaultViews) M.enforceState(p);
              }
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)();
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            })),
            f
          );
        })(),
        ro = (() => {
          class f {
            constructor(p, M, N) {
              (this.ngSwitch = N), N._addCase(), (this._view = new qn(p, M));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase)
              );
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(an, 9));
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            })),
            f
          );
        })(),
        bn = (() => {
          class f {
            constructor(p, M, N) {
              N._addDefault(new qn(p, M));
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(an, 9));
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngSwitchDefault', '']],
              standalone: !0,
            })),
            f
          );
        })(),
        Tn = (() => {
          class f {
            constructor(p, M, N) {
              (this._ngEl = p),
                (this._differs = M),
                (this._renderer = N),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(p) {
              (this._ngStyle = p),
                !this._differ &&
                  p &&
                  (this._differ = this._differs.find(p).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const p = this._differ.diff(this._ngStyle);
                p && this._applyChanges(p);
              }
            }
            _setStyle(p, M) {
              const [N, ne] = p.split('.'),
                le = -1 === N.indexOf('-') ? void 0 : l.JOm.DashCase;
              null != M
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    N,
                    ne ? `${M}${ne}` : M,
                    le
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, N, le);
            }
            _applyChanges(p) {
              p.forEachRemovedItem((M) => this._setStyle(M.key, null)),
                p.forEachAddedItem((M) =>
                  this._setStyle(M.key, M.currentValue)
                ),
                p.forEachChangedItem((M) =>
                  this._setStyle(M.key, M.currentValue)
                );
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.SBq), l.Y36(l.aQg), l.Y36(l.Qsj));
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0,
            })),
            f
          );
        })(),
        dr = (() => {
          class f {
            constructor(p) {
              (this._viewContainerRef = p),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(p) {
              if (p.ngTemplateOutlet || p.ngTemplateOutletInjector) {
                const M = this._viewContainerRef;
                if (
                  (this._viewRef && M.remove(M.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: N,
                    ngTemplateOutletContext: ne,
                    ngTemplateOutletInjector: le,
                  } = this;
                  this._viewRef = M.createEmbeddedView(
                    N,
                    ne,
                    le ? { injector: le } : void 0
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  p.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.s_b));
            }),
            (f.ɵdir = l.lG2({
              type: f,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: {
                ngTemplateOutletContext: 'ngTemplateOutletContext',
                ngTemplateOutlet: 'ngTemplateOutlet',
                ngTemplateOutletInjector: 'ngTemplateOutletInjector',
              },
              standalone: !0,
              features: [l.TTD],
            })),
            f
          );
        })();
      function gt(f, w) {
        return new l.vHH(2100, !1);
      }
      class ii {
        createSubscription(w, p) {
          return w.subscribe({
            next: p,
            error: (M) => {
              throw M;
            },
          });
        }
        dispose(w) {
          w.unsubscribe();
        }
      }
      class wo {
        createSubscription(w, p) {
          return w.then(p, (M) => {
            throw M;
          });
        }
        dispose(w) {}
      }
      const si = new wo(),
        Ur = new ii();
      let Hr = (() => {
          class f {
            constructor(p) {
              (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null),
                (this._ref = p);
            }
            ngOnDestroy() {
              this._subscription && this._dispose(), (this._ref = null);
            }
            transform(p) {
              return this._obj
                ? p !== this._obj
                  ? (this._dispose(), this.transform(p))
                  : this._latestValue
                : (p && this._subscribe(p), this._latestValue);
            }
            _subscribe(p) {
              (this._obj = p),
                (this._strategy = this._selectStrategy(p)),
                (this._subscription = this._strategy.createSubscription(
                  p,
                  (M) => this._updateLatestValue(p, M)
                ));
            }
            _selectStrategy(p) {
              if ((0, l.QGY)(p)) return si;
              if ((0, l.F4k)(p)) return Ur;
              throw gt();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(p, M) {
              p === this._obj &&
                ((this._latestValue = M), this._ref.markForCheck());
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.sBO, 16));
            }),
            (f.ɵpipe = l.Yjl({
              name: 'async',
              type: f,
              pure: !1,
              standalone: !0,
            })),
            f
          );
        })(),
        ln = (() => {
          class f {
            transform(p) {
              if (null == p) return null;
              if ('string' != typeof p) throw gt();
              return p.toUpperCase();
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)();
            }),
            (f.ɵpipe = l.Yjl({
              name: 'uppercase',
              type: f,
              pure: !0,
              standalone: !0,
            })),
            f
          );
        })();
      const jr = new l.OlP('DATE_PIPE_DEFAULT_TIMEZONE'),
        Ir = new l.OlP('DATE_PIPE_DEFAULT_OPTIONS');
      let tr = (() => {
          class f {
            constructor(p, M, N) {
              (this.locale = p),
                (this.defaultTimezone = M),
                (this.defaultOptions = N);
            }
            transform(p, M, N, ne) {
              if (null == p || '' === p || p != p) return null;
              try {
                return Cn(
                  p,
                  M ?? this.defaultOptions?.dateFormat ?? 'mediumDate',
                  ne || this.locale,
                  N ??
                    this.defaultOptions?.timezone ??
                    this.defaultTimezone ??
                    void 0
                );
              } catch (le) {
                throw gt();
              }
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(
                l.Y36(l.soG, 16),
                l.Y36(jr, 24),
                l.Y36(Ir, 24)
              );
            }),
            (f.ɵpipe = l.Yjl({
              name: 'date',
              type: f,
              pure: !0,
              standalone: !0,
            })),
            f
          );
        })(),
        li = (() => {
          class f {
            constructor(p) {
              this._locale = p;
            }
            transform(p, M, N) {
              if (
                !(function $r(f) {
                  return !(null == f || '' === f || f != f);
                })(p)
              )
                return null;
              N = N || this._locale;
              try {
                return (function Jn(f, w, p) {
                  return (function Rn(f, w, p, M, N, ne, le = !1) {
                    let Xe = '',
                      Ct = !1;
                    if (isFinite(f)) {
                      let It = (function Co(f) {
                        let M,
                          N,
                          ne,
                          le,
                          Xe,
                          w = Math.abs(f) + '',
                          p = 0;
                        for (
                          (N = w.indexOf(W)) > -1 && (w = w.replace(W, '')),
                            (ne = w.search(/e/i)) > 0
                              ? (N < 0 && (N = ne),
                                (N += +w.slice(ne + 1)),
                                (w = w.substring(0, ne)))
                              : N < 0 && (N = w.length),
                            ne = 0;
                          w.charAt(ne) === fe;
                          ne++
                        );
                        if (ne === (Xe = w.length)) (M = [0]), (N = 1);
                        else {
                          for (Xe--; w.charAt(Xe) === fe; ) Xe--;
                          for (N -= ne, M = [], le = 0; ne <= Xe; ne++, le++)
                            M[le] = Number(w.charAt(ne));
                        }
                        return (
                          N > R &&
                            ((M = M.splice(0, R - 1)), (p = N - 1), (N = 1)),
                          { digits: M, exponent: p, integerLen: N }
                        );
                      })(f);
                      le &&
                        (It = (function Uo(f) {
                          if (0 === f.digits[0]) return f;
                          const w = f.digits.length - f.integerLen;
                          return (
                            f.exponent
                              ? (f.exponent += 2)
                              : (0 === w
                                  ? f.digits.push(0, 0)
                                  : 1 === w && f.digits.push(0),
                                (f.integerLen += 2)),
                            f
                          );
                        })(It));
                      let Ot = w.minInt,
                        vt = w.minFrac,
                        un = w.maxFrac;
                      if (ne) {
                        const _r = ne.match(G);
                        if (null === _r)
                          throw new Error(`${ne} is not a valid digit info`);
                        const ho = _r[1],
                          Kn = _r[3],
                          ei = _r[5];
                        null != ho && (Ot = Xt(ho)),
                          null != Kn && (vt = Xt(Kn)),
                          null != ei
                            ? (un = Xt(ei))
                            : null != Kn && vt > un && (un = vt);
                      }
                      !(function wt(f, w, p) {
                        if (w > p)
                          throw new Error(
                            `The minimum number of digits after fraction (${w}) is higher than the maximum (${p}).`
                          );
                        let M = f.digits,
                          N = M.length - f.integerLen;
                        const ne = Math.min(Math.max(w, N), p);
                        let le = ne + f.integerLen,
                          Xe = M[le];
                        if (le > 0) {
                          M.splice(Math.max(f.integerLen, le));
                          for (let vt = le; vt < M.length; vt++) M[vt] = 0;
                        } else {
                          (N = Math.max(0, N)),
                            (f.integerLen = 1),
                            (M.length = Math.max(1, (le = ne + 1))),
                            (M[0] = 0);
                          for (let vt = 1; vt < le; vt++) M[vt] = 0;
                        }
                        if (Xe >= 5)
                          if (le - 1 < 0) {
                            for (let vt = 0; vt > le; vt--)
                              M.unshift(0), f.integerLen++;
                            M.unshift(1), f.integerLen++;
                          } else M[le - 1]++;
                        for (; N < Math.max(0, ne); N++) M.push(0);
                        let Ct = 0 !== ne;
                        const It = w + f.integerLen,
                          Ot = M.reduceRight(function (vt, un, Nt, nn) {
                            return (
                              (nn[Nt] = (un += vt) < 10 ? un : un - 10),
                              Ct &&
                                (0 === nn[Nt] && Nt >= It
                                  ? nn.pop()
                                  : (Ct = !1)),
                              un >= 10 ? 1 : 0
                            );
                          }, 0);
                        Ot && (M.unshift(Ot), f.integerLen++);
                      })(It, vt, un);
                      let Nt = It.digits,
                        nn = It.integerLen;
                      const xr = It.exponent;
                      let Hn = [];
                      for (Ct = Nt.every((_r) => !_r); nn < Ot; nn++)
                        Nt.unshift(0);
                      for (; nn < 0; nn++) Nt.unshift(0);
                      nn > 0
                        ? (Hn = Nt.splice(nn, Nt.length))
                        : ((Hn = Nt), (Nt = [0]));
                      const kn = [];
                      for (
                        Nt.length >= w.lgSize &&
                        kn.unshift(Nt.splice(-w.lgSize, Nt.length).join(''));
                        Nt.length > w.gSize;

                      )
                        kn.unshift(Nt.splice(-w.gSize, Nt.length).join(''));
                      Nt.length && kn.unshift(Nt.join('')),
                        (Xe = kn.join(Oe(p, M))),
                        Hn.length && (Xe += Oe(p, N) + Hn.join('')),
                        xr && (Xe += Oe(p, Ke.Exponential) + '+' + xr);
                    } else Xe = Oe(p, Ke.Infinity);
                    return (
                      (Xe =
                        f < 0 && !Ct
                          ? w.negPre + Xe + w.negSuf
                          : w.posPre + Xe + w.posSuf),
                      Xe
                    );
                  })(
                    f,
                    (function Sr(f, w = '-') {
                      const p = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: '',
                          posSuf: '',
                          negPre: '',
                          negSuf: '',
                          gSize: 0,
                          lgSize: 0,
                        },
                        M = f.split(Fe),
                        N = M[0],
                        ne = M[1],
                        le =
                          -1 !== N.indexOf(W)
                            ? N.split(W)
                            : [
                                N.substring(0, N.lastIndexOf(fe) + 1),
                                N.substring(N.lastIndexOf(fe) + 1),
                              ],
                        Xe = le[0],
                        Ct = le[1] || '';
                      p.posPre = Xe.substring(0, Xe.indexOf(St));
                      for (let Ot = 0; Ot < Ct.length; Ot++) {
                        const vt = Ct.charAt(Ot);
                        vt === fe
                          ? (p.minFrac = p.maxFrac = Ot + 1)
                          : vt === St
                          ? (p.maxFrac = Ot + 1)
                          : (p.posSuf += vt);
                      }
                      const It = Xe.split(Je);
                      if (
                        ((p.gSize = It[1] ? It[1].length : 0),
                        (p.lgSize =
                          It[2] || It[1] ? (It[2] || It[1]).length : 0),
                        ne)
                      ) {
                        const Ot = N.length - p.posPre.length - p.posSuf.length,
                          vt = ne.indexOf(St);
                        (p.negPre = ne.substring(0, vt).replace(/'/g, '')),
                          (p.negSuf = ne.slice(vt + Ot).replace(/'/g, ''));
                      } else (p.negPre = w + p.posPre), (p.negSuf = p.posSuf);
                      return p;
                    })(
                      (function ct(f, w) {
                        return (0, l.cg1)(f)[l.wAp.NumberFormats][w];
                      })(w, Se.Decimal),
                      Oe(w, Ke.MinusSign)
                    ),
                    w,
                    Ke.Group,
                    Ke.Decimal,
                    p
                  );
                })(
                  (function Tr(f) {
                    if (
                      'string' == typeof f &&
                      !isNaN(Number(f) - parseFloat(f))
                    )
                      return Number(f);
                    if ('number' != typeof f)
                      throw new Error(`${f} is not a number`);
                    return f;
                  })(p),
                  N,
                  M
                );
              } catch (ne) {
                throw gt();
              }
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)(l.Y36(l.soG, 16));
            }),
            (f.ɵpipe = l.Yjl({
              name: 'number',
              type: f,
              pure: !0,
              standalone: !0,
            })),
            f
          );
        })();
      let Go = (() => {
          class f {
            transform(p, M, N) {
              if (null == p) return null;
              if (!this.supports(p)) throw gt();
              return p.slice(M, N);
            }
            supports(p) {
              return 'string' == typeof p || Array.isArray(p);
            }
          }
          return (
            (f.ɵfac = function (p) {
              return new (p || f)();
            }),
            (f.ɵpipe = l.Yjl({
              name: 'slice',
              type: f,
              pure: !1,
              standalone: !0,
            })),
            f
          );
        })(),
        ci = (() => {
          class f {}
          return (
            (f.ɵfac = function (p) {
              return new (p || f)();
            }),
            (f.ɵmod = l.oAB({ type: f })),
            (f.ɵinj = l.cJS({})),
            f
          );
        })();
      const Wo = 'browser';
      let Gr = (() => {
        class f {}
        return (
          (f.ɵprov = (0, l.Yz7)({
            token: f,
            providedIn: 'root',
            factory: () => new Mo((0, l.LFG)(V), window),
          })),
          f
        );
      })();
      class Mo {
        constructor(w, p) {
          (this.document = w), (this.window = p), (this.offset = () => [0, 0]);
        }
        setOffset(w) {
          this.offset = Array.isArray(w) ? () => w : w;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(w) {
          this.supportsScrolling() && this.window.scrollTo(w[0], w[1]);
        }
        scrollToAnchor(w) {
          if (!this.supportsScrolling()) return;
          const p = (function mr(f, w) {
            const p = f.getElementById(w) || f.getElementsByName(w)[0];
            if (p) return p;
            if (
              'function' == typeof f.createTreeWalker &&
              f.body &&
              (f.body.createShadowRoot || f.body.attachShadow)
            ) {
              const M = f.createTreeWalker(f.body, NodeFilter.SHOW_ELEMENT);
              let N = M.currentNode;
              for (; N; ) {
                const ne = N.shadowRoot;
                if (ne) {
                  const le =
                    ne.getElementById(w) || ne.querySelector(`[name="${w}"]`);
                  if (le) return le;
                }
                N = M.nextNode();
              }
            }
            return null;
          })(this.document, w);
          p && (this.scrollToElement(p), p.focus());
        }
        setHistoryScrollRestoration(w) {
          if (this.supportScrollRestoration()) {
            const p = this.window.history;
            p && p.scrollRestoration && (p.scrollRestoration = w);
          }
        }
        scrollToElement(w) {
          const p = w.getBoundingClientRect(),
            M = p.left + this.window.pageXOffset,
            N = p.top + this.window.pageYOffset,
            ne = this.offset();
          this.window.scrollTo(M - ne[0], N - ne[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const w =
              Ko(this.window.history) ||
              Ko(Object.getPrototypeOf(this.window.history));
            return !(!w || (!w.writable && !w.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              'pageXOffset' in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function Ko(f) {
        return Object.getOwnPropertyDescriptor(f, 'scrollRestoration');
      }
      class so {}
      function hi(f) {
        return f.startsWith('/') ? f.slice(1) : f;
      }
      const jt = (f) => f.src,
        Li = new l.OlP('ImageLoader', {
          providedIn: 'root',
          factory: () => jt,
        });
      function rr(f, w) {
        return function (M) {
          return (
            (function Mn(f) {
              if ('string' != typeof f || '' === f.trim()) return !1;
              try {
                return new URL(f), !0;
              } catch {
                return !1;
              }
            })(M) ||
              (function Pn(f, w) {
                throw new l.vHH(2959, !1);
              })(),
            (M = (function So(f) {
              return f.endsWith('/') ? f.slice(0, -1) : f;
            })(M)),
            [
              {
                provide: Li,
                useValue: (le) => (
                  (function Kr(f) {
                    return /^https?:\/\//.test(f);
                  })(le.src) &&
                    (function Yo(f, w) {
                      throw new l.vHH(2959, !1);
                    })(),
                  f(M, { ...le, src: hi(le.src) })
                ),
              },
            ]
          );
        };
      }
      const _ = rr(y);
      function y(f, w) {
        let p = 'tr:q-auto';
        return w.width && (p += `,w-${w.width}`), `${f}/${p}/${w.src}`;
      }
      const lo = new l.OlP('NG_OPTIMIZED_PRELOADED_IMAGES', {
        providedIn: 'root',
        factory: () => new Set(),
      });
      let Rr = (() => {
        class f {
          constructor() {
            (this.preloadedImages = (0, l.f3M)(lo)),
              (this.document = (0, l.f3M)(V));
          }
          createPreloadLinkTag(p, M, N, ne) {
            if (this.preloadedImages.has(M)) return;
            this.preloadedImages.add(M);
            const le = p.createElement('link');
            p.setAttribute(le, 'as', 'image'),
              p.setAttribute(le, 'href', M),
              p.setAttribute(le, 'rel', 'preload'),
              p.setAttribute(le, 'fetchpriority', 'high'),
              ne && p.setAttribute(le, 'imageSizes', ne),
              N && p.setAttribute(le, 'imageSrcset', N),
              p.appendChild(this.document.head, le);
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)();
          }),
          (f.ɵprov = l.Yz7({ token: f, factory: f.ɵfac, providedIn: 'root' })),
          f
        );
      })();
      const Is = /^((\s*\d+w\s*(,|$)){1,})$/,
        Hi = [1, 2],
        Io = {
          breakpoints: [
            16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920,
            2048, 3840,
          ],
        },
        Ao = new l.OlP('ImageConfig', {
          providedIn: 'root',
          factory: () => Io,
        });
      let To = (() => {
        class f {
          constructor() {
            (this.imageLoader = (0, l.f3M)(Li)),
              (this.config = (function $i(f) {
                let w = {};
                return (
                  f.breakpoints &&
                    (w.breakpoints = f.breakpoints.sort((p, M) => p - M)),
                  Object.assign({}, Io, f, w)
                );
              })((0, l.f3M)(Ao))),
              (this.renderer = (0, l.f3M)(l.Qsj)),
              (this.imgElement = (0, l.f3M)(l.SBq).nativeElement),
              (this.injector = (0, l.f3M)(l.zs3)),
              (this.isServer = (function Or(f) {
                return 'server' === f;
              })((0, l.f3M)(l.Lbi))),
              (this.preloadLinkChecker = (0, l.f3M)(Rr)),
              (this.lcpObserver = null),
              (this._renderedSrc = null),
              (this._priority = !1),
              (this._disableOptimizedSrcset = !1),
              (this._fill = !1);
          }
          set width(p) {
            this._width = Xo(p);
          }
          get width() {
            return this._width;
          }
          set height(p) {
            this._height = Xo(p);
          }
          get height() {
            return this._height;
          }
          set priority(p) {
            this._priority = vi(p);
          }
          get priority() {
            return this._priority;
          }
          set disableOptimizedSrcset(p) {
            this._disableOptimizedSrcset = vi(p);
          }
          get disableOptimizedSrcset() {
            return this._disableOptimizedSrcset;
          }
          set fill(p) {
            this._fill = vi(p);
          }
          get fill() {
            return this._fill;
          }
          ngOnInit() {
            this.setHostAttributes();
          }
          setHostAttributes() {
            this.fill
              ? this.sizes || (this.sizes = '100vw')
              : (this.setHostAttribute('width', this.width.toString()),
                this.setHostAttribute('height', this.height.toString())),
              this.setHostAttribute('loading', this.getLoadingBehavior()),
              this.setHostAttribute('fetchpriority', this.getFetchPriority()),
              this.setHostAttribute('ng-img', 'true');
            const p = this.getRewrittenSrc();
            let M;
            this.setHostAttribute('src', p),
              this.sizes && this.setHostAttribute('sizes', this.sizes),
              this.ngSrcset
                ? (M = this.getRewrittenSrcset())
                : this.shouldGenerateAutomaticSrcset() &&
                  (M = this.getAutomaticSrcset()),
              M && this.setHostAttribute('srcset', M),
              this.isServer &&
                this.priority &&
                this.preloadLinkChecker.createPreloadLinkTag(
                  this.renderer,
                  p,
                  M,
                  this.sizes
                );
          }
          ngOnChanges(p) {}
          callImageLoader(p) {
            let M = p;
            return (
              this.loaderParams && (M.loaderParams = this.loaderParams),
              this.imageLoader(M)
            );
          }
          getLoadingBehavior() {
            return this.priority || void 0 === this.loading
              ? this.priority
                ? 'eager'
                : 'lazy'
              : this.loading;
          }
          getFetchPriority() {
            return this.priority ? 'high' : 'auto';
          }
          getRewrittenSrc() {
            return (
              this._renderedSrc ||
                (this._renderedSrc = this.callImageLoader({ src: this.ngSrc })),
              this._renderedSrc
            );
          }
          getRewrittenSrcset() {
            const p = Is.test(this.ngSrcset);
            return this.ngSrcset
              .split(',')
              .filter((N) => '' !== N)
              .map((N) => {
                N = N.trim();
                const ne = p ? parseFloat(N) : parseFloat(N) * this.width;
                return `${this.callImageLoader({
                  src: this.ngSrc,
                  width: ne,
                })} ${N}`;
              })
              .join(', ');
          }
          getAutomaticSrcset() {
            return this.sizes
              ? this.getResponsiveSrcset()
              : this.getFixedSrcset();
          }
          getResponsiveSrcset() {
            const { breakpoints: p } = this.config;
            let M = p;
            return (
              '100vw' === this.sizes?.trim() &&
                (M = p.filter((ne) => ne >= 640)),
              M.map(
                (ne) =>
                  `${this.callImageLoader({
                    src: this.ngSrc,
                    width: ne,
                  })} ${ne}w`
              ).join(', ')
            );
          }
          getFixedSrcset() {
            return Hi.map(
              (M) =>
                `${this.callImageLoader({
                  src: this.ngSrc,
                  width: this.width * M,
                })} ${M}x`
            ).join(', ');
          }
          shouldGenerateAutomaticSrcset() {
            return (
              !this._disableOptimizedSrcset &&
              !this.srcset &&
              this.imageLoader !== jt &&
              !(this.width > 1920 || this.height > 1080)
            );
          }
          ngOnDestroy() {}
          setHostAttribute(p, M) {
            this.renderer.setAttribute(this.imgElement, p, M);
          }
        }
        return (
          (f.ɵfac = function (p) {
            return new (p || f)();
          }),
          (f.ɵdir = l.lG2({
            type: f,
            selectors: [['img', 'ngSrc', '']],
            hostVars: 8,
            hostBindings: function (p, M) {
              2 & p &&
                l.Udp('position', M.fill ? 'absolute' : null)(
                  'width',
                  M.fill ? '100%' : null
                )('height', M.fill ? '100%' : null)(
                  'inset',
                  M.fill ? '0px' : null
                );
            },
            inputs: {
              ngSrc: 'ngSrc',
              ngSrcset: 'ngSrcset',
              sizes: 'sizes',
              width: 'width',
              height: 'height',
              loading: 'loading',
              priority: 'priority',
              loaderParams: 'loaderParams',
              disableOptimizedSrcset: 'disableOptimizedSrcset',
              fill: 'fill',
              src: 'src',
              srcset: 'srcset',
            },
            standalone: !0,
            features: [l.TTD],
          })),
          f
        );
      })();
      function Xo(f) {
        return 'string' == typeof f ? parseInt(f, 10) : f;
      }
      function vi(f) {
        return null != f && 'false' != `${f}`;
      }
    },
    529: (Re, q, C) => {
      C.d(q, { JF: () => An, LE: () => Ne, TP: () => Y, eN: () => ie });
      var l = C(6895),
        v = C(4650),
        k = C(9646),
        j = C(9751),
        H = C(4351),
        V = C(9300),
        $ = C(4004);
      class Z {}
      class X {}
      class Q {
        constructor(b) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            b
              ? (this.lazyInit =
                  'string' == typeof b
                    ? () => {
                        (this.headers = new Map()),
                          b.split('\n').forEach((P) => {
                            const O = P.indexOf(':');
                            if (O > 0) {
                              const B = P.slice(0, O),
                                Te = B.toLowerCase(),
                                He = P.slice(O + 1).trim();
                              this.maybeSetNormalizedName(B, Te),
                                this.headers.has(Te)
                                  ? this.headers.get(Te).push(He)
                                  : this.headers.set(Te, [He]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(b).forEach((P) => {
                            let O = b[P];
                            const B = P.toLowerCase();
                            'string' == typeof O && (O = [O]),
                              O.length > 0 &&
                                (this.headers.set(B, O),
                                this.maybeSetNormalizedName(P, B));
                          });
                      })
              : (this.headers = new Map());
        }
        has(b) {
          return this.init(), this.headers.has(b.toLowerCase());
        }
        get(b) {
          this.init();
          const P = this.headers.get(b.toLowerCase());
          return P && P.length > 0 ? P[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(b) {
          return this.init(), this.headers.get(b.toLowerCase()) || null;
        }
        append(b, P) {
          return this.clone({ name: b, value: P, op: 'a' });
        }
        set(b, P) {
          return this.clone({ name: b, value: P, op: 's' });
        }
        delete(b, P) {
          return this.clone({ name: b, value: P, op: 'd' });
        }
        maybeSetNormalizedName(b, P) {
          this.normalizedNames.has(P) || this.normalizedNames.set(P, b);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Q
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((b) => this.applyUpdate(b)),
              (this.lazyUpdate = null)));
        }
        copyFrom(b) {
          b.init(),
            Array.from(b.headers.keys()).forEach((P) => {
              this.headers.set(P, b.headers.get(P)),
                this.normalizedNames.set(P, b.normalizedNames.get(P));
            });
        }
        clone(b) {
          const P = new Q();
          return (
            (P.lazyInit =
              this.lazyInit && this.lazyInit instanceof Q
                ? this.lazyInit
                : this),
            (P.lazyUpdate = (this.lazyUpdate || []).concat([b])),
            P
          );
        }
        applyUpdate(b) {
          const P = b.name.toLowerCase();
          switch (b.op) {
            case 'a':
            case 's':
              let O = b.value;
              if (('string' == typeof O && (O = [O]), 0 === O.length)) return;
              this.maybeSetNormalizedName(b.name, P);
              const B = ('a' === b.op ? this.headers.get(P) : void 0) || [];
              B.push(...O), this.headers.set(P, B);
              break;
            case 'd':
              const Te = b.value;
              if (Te) {
                let He = this.headers.get(P);
                if (!He) return;
                (He = He.filter((rt) => -1 === Te.indexOf(rt))),
                  0 === He.length
                    ? (this.headers.delete(P), this.normalizedNames.delete(P))
                    : this.headers.set(P, He);
              } else this.headers.delete(P), this.normalizedNames.delete(P);
          }
        }
        forEach(b) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((P) =>
              b(this.normalizedNames.get(P), this.headers.get(P))
            );
        }
      }
      class L {
        encodeKey(b) {
          return ke(b);
        }
        encodeValue(b) {
          return ke(b);
        }
        decodeKey(b) {
          return decodeURIComponent(b);
        }
        decodeValue(b) {
          return decodeURIComponent(b);
        }
      }
      const te = /%(\d[a-f0-9])/gi,
        De = {
          40: '@',
          '3A': ':',
          24: '$',
          '2C': ',',
          '3B': ';',
          '3D': '=',
          '3F': '?',
          '2F': '/',
        };
      function ke(ue) {
        return encodeURIComponent(ue).replace(te, (b, P) => De[P] ?? b);
      }
      function de(ue) {
        return `${ue}`;
      }
      class Ne {
        constructor(b = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = b.encoder || new L()),
            b.fromString)
          ) {
            if (b.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function se(ue, b) {
              const P = new Map();
              return (
                ue.length > 0 &&
                  ue
                    .replace(/^\?/, '')
                    .split('&')
                    .forEach((B) => {
                      const Te = B.indexOf('='),
                        [He, rt] =
                          -1 == Te
                            ? [b.decodeKey(B), '']
                            : [
                                b.decodeKey(B.slice(0, Te)),
                                b.decodeValue(B.slice(Te + 1)),
                              ],
                        Ze = P.get(He) || [];
                      Ze.push(rt), P.set(He, Ze);
                    }),
                P
              );
            })(b.fromString, this.encoder);
          } else
            b.fromObject
              ? ((this.map = new Map()),
                Object.keys(b.fromObject).forEach((P) => {
                  const O = b.fromObject[P],
                    B = Array.isArray(O) ? O.map(de) : [de(O)];
                  this.map.set(P, B);
                }))
              : (this.map = null);
        }
        has(b) {
          return this.init(), this.map.has(b);
        }
        get(b) {
          this.init();
          const P = this.map.get(b);
          return P ? P[0] : null;
        }
        getAll(b) {
          return this.init(), this.map.get(b) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(b, P) {
          return this.clone({ param: b, value: P, op: 'a' });
        }
        appendAll(b) {
          const P = [];
          return (
            Object.keys(b).forEach((O) => {
              const B = b[O];
              Array.isArray(B)
                ? B.forEach((Te) => {
                    P.push({ param: O, value: Te, op: 'a' });
                  })
                : P.push({ param: O, value: B, op: 'a' });
            }),
            this.clone(P)
          );
        }
        set(b, P) {
          return this.clone({ param: b, value: P, op: 's' });
        }
        delete(b, P) {
          return this.clone({ param: b, value: P, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((b) => {
                const P = this.encoder.encodeKey(b);
                return this.map
                  .get(b)
                  .map((O) => P + '=' + this.encoder.encodeValue(O))
                  .join('&');
              })
              .filter((b) => '' !== b)
              .join('&')
          );
        }
        clone(b) {
          const P = new Ne({ encoder: this.encoder });
          return (
            (P.cloneFrom = this.cloneFrom || this),
            (P.updates = (this.updates || []).concat(b)),
            P
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((b) => this.map.set(b, this.cloneFrom.map.get(b))),
              this.updates.forEach((b) => {
                switch (b.op) {
                  case 'a':
                  case 's':
                    const P =
                      ('a' === b.op ? this.map.get(b.param) : void 0) || [];
                    P.push(de(b.value)), this.map.set(b.param, P);
                    break;
                  case 'd':
                    if (void 0 === b.value) {
                      this.map.delete(b.param);
                      break;
                    }
                    {
                      let O = this.map.get(b.param) || [];
                      const B = O.indexOf(de(b.value));
                      -1 !== B && O.splice(B, 1),
                        O.length > 0
                          ? this.map.set(b.param, O)
                          : this.map.delete(b.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class We {
        constructor() {
          this.map = new Map();
        }
        set(b, P) {
          return this.map.set(b, P), this;
        }
        get(b) {
          return (
            this.map.has(b) || this.map.set(b, b.defaultValue()),
            this.map.get(b)
          );
        }
        delete(b) {
          return this.map.delete(b), this;
        }
        has(b) {
          return this.map.has(b);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Ee(ue) {
        return typeof ArrayBuffer < 'u' && ue instanceof ArrayBuffer;
      }
      function Ye(ue) {
        return typeof Blob < 'u' && ue instanceof Blob;
      }
      function nt(ue) {
        return typeof FormData < 'u' && ue instanceof FormData;
      }
      class Se {
        constructor(b, P, O, B) {
          let Te;
          if (
            ((this.url = P),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = b.toUpperCase()),
            (function be(ue) {
              switch (ue) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || B
              ? ((this.body = void 0 !== O ? O : null), (Te = B))
              : (Te = O),
            Te &&
              ((this.reportProgress = !!Te.reportProgress),
              (this.withCredentials = !!Te.withCredentials),
              Te.responseType && (this.responseType = Te.responseType),
              Te.headers && (this.headers = Te.headers),
              Te.context && (this.context = Te.context),
              Te.params && (this.params = Te.params)),
            this.headers || (this.headers = new Q()),
            this.context || (this.context = new We()),
            this.params)
          ) {
            const He = this.params.toString();
            if (0 === He.length) this.urlWithParams = P;
            else {
              const rt = P.indexOf('?');
              this.urlWithParams =
                P + (-1 === rt ? '?' : rt < P.length - 1 ? '&' : '') + He;
            }
          } else (this.params = new Ne()), (this.urlWithParams = P);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ee(this.body) ||
              Ye(this.body) ||
              nt(this.body) ||
              (function Pe(ue) {
                return (
                  typeof URLSearchParams < 'u' && ue instanceof URLSearchParams
                );
              })(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof Ne
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || nt(this.body)
            ? null
            : Ye(this.body)
            ? this.body.type || null
            : Ee(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Ne
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(b = {}) {
          const P = b.method || this.method,
            O = b.url || this.url,
            B = b.responseType || this.responseType,
            Te = void 0 !== b.body ? b.body : this.body,
            He =
              void 0 !== b.withCredentials
                ? b.withCredentials
                : this.withCredentials,
            rt =
              void 0 !== b.reportProgress
                ? b.reportProgress
                : this.reportProgress;
          let Ze = b.headers || this.headers,
            Et = b.params || this.params;
          const on = b.context ?? this.context;
          return (
            void 0 !== b.setHeaders &&
              (Ze = Object.keys(b.setHeaders).reduce(
                (z, G) => z.set(G, b.setHeaders[G]),
                Ze
              )),
            b.setParams &&
              (Et = Object.keys(b.setParams).reduce(
                (z, G) => z.set(G, b.setParams[G]),
                Et
              )),
            new Se(P, O, Te, {
              params: Et,
              headers: Ze,
              context: on,
              reportProgress: rt,
              responseType: B,
              withCredentials: He,
            })
          );
        }
      }
      var xe = (() => (
        ((xe = xe || {})[(xe.Sent = 0)] = 'Sent'),
        (xe[(xe.UploadProgress = 1)] = 'UploadProgress'),
        (xe[(xe.ResponseHeader = 2)] = 'ResponseHeader'),
        (xe[(xe.DownloadProgress = 3)] = 'DownloadProgress'),
        (xe[(xe.Response = 4)] = 'Response'),
        (xe[(xe.User = 5)] = 'User'),
        xe
      ))();
      class we {
        constructor(b, P = 200, O = 'OK') {
          (this.headers = b.headers || new Q()),
            (this.status = void 0 !== b.status ? b.status : P),
            (this.statusText = b.statusText || O),
            (this.url = b.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Le extends we {
        constructor(b = {}) {
          super(b), (this.type = xe.ResponseHeader);
        }
        clone(b = {}) {
          return new Le({
            headers: b.headers || this.headers,
            status: void 0 !== b.status ? b.status : this.status,
            statusText: b.statusText || this.statusText,
            url: b.url || this.url || void 0,
          });
        }
      }
      class ot extends we {
        constructor(b = {}) {
          super(b),
            (this.type = xe.Response),
            (this.body = void 0 !== b.body ? b.body : null);
        }
        clone(b = {}) {
          return new ot({
            body: void 0 !== b.body ? b.body : this.body,
            headers: b.headers || this.headers,
            status: void 0 !== b.status ? b.status : this.status,
            statusText: b.statusText || this.statusText,
            url: b.url || this.url || void 0,
          });
        }
      }
      class Ke extends we {
        constructor(b) {
          super(b, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${b.url || '(unknown url)'}`
                : `Http failure response for ${b.url || '(unknown url)'}: ${
                    b.status
                  } ${b.statusText}`),
            (this.error = b.error || null);
        }
      }
      function oe(ue, b) {
        return {
          body: b,
          headers: ue.headers,
          context: ue.context,
          observe: ue.observe,
          params: ue.params,
          reportProgress: ue.reportProgress,
          responseType: ue.responseType,
          withCredentials: ue.withCredentials,
        };
      }
      let ie = (() => {
        class ue {
          constructor(P) {
            this.handler = P;
          }
          request(P, O, B = {}) {
            let Te;
            if (P instanceof Se) Te = P;
            else {
              let Ze, Et;
              (Ze = B.headers instanceof Q ? B.headers : new Q(B.headers)),
                B.params &&
                  (Et =
                    B.params instanceof Ne
                      ? B.params
                      : new Ne({ fromObject: B.params })),
                (Te = new Se(P, O, void 0 !== B.body ? B.body : null, {
                  headers: Ze,
                  context: B.context,
                  params: Et,
                  reportProgress: B.reportProgress,
                  responseType: B.responseType || 'json',
                  withCredentials: B.withCredentials,
                }));
            }
            const He = (0, k.of)(Te).pipe(
              (0, H.b)((Ze) => this.handler.handle(Ze))
            );
            if (P instanceof Se || 'events' === B.observe) return He;
            const rt = He.pipe((0, V.h)((Ze) => Ze instanceof ot));
            switch (B.observe || 'body') {
              case 'body':
                switch (Te.responseType) {
                  case 'arraybuffer':
                    return rt.pipe(
                      (0, $.U)((Ze) => {
                        if (
                          null !== Ze.body &&
                          !(Ze.body instanceof ArrayBuffer)
                        )
                          throw new Error('Response is not an ArrayBuffer.');
                        return Ze.body;
                      })
                    );
                  case 'blob':
                    return rt.pipe(
                      (0, $.U)((Ze) => {
                        if (null !== Ze.body && !(Ze.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return Ze.body;
                      })
                    );
                  case 'text':
                    return rt.pipe(
                      (0, $.U)((Ze) => {
                        if (null !== Ze.body && 'string' != typeof Ze.body)
                          throw new Error('Response is not a string.');
                        return Ze.body;
                      })
                    );
                  default:
                    return rt.pipe((0, $.U)((Ze) => Ze.body));
                }
              case 'response':
                return rt;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${B.observe}}`
                );
            }
          }
          delete(P, O = {}) {
            return this.request('DELETE', P, O);
          }
          get(P, O = {}) {
            return this.request('GET', P, O);
          }
          head(P, O = {}) {
            return this.request('HEAD', P, O);
          }
          jsonp(P, O) {
            return this.request('JSONP', P, {
              params: new Ne().append(O, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(P, O = {}) {
            return this.request('OPTIONS', P, O);
          }
          patch(P, O, B = {}) {
            return this.request('PATCH', P, oe(B, O));
          }
          post(P, O, B = {}) {
            return this.request('POST', P, oe(B, O));
          }
          put(P, O, B = {}) {
            return this.request('PUT', P, oe(B, O));
          }
        }
        return (
          (ue.ɵfac = function (P) {
            return new (P || ue)(v.LFG(Z));
          }),
          (ue.ɵprov = v.Yz7({ token: ue, factory: ue.ɵfac })),
          ue
        );
      })();
      function he(ue, b) {
        return b(ue);
      }
      function ve(ue, b) {
        return (P, O) => b.intercept(P, { handle: (B) => ue(B, O) });
      }
      const Y = new v.OlP('HTTP_INTERCEPTORS'),
        me = new v.OlP('HTTP_INTERCEPTOR_FNS');
      function F() {
        let ue = null;
        return (b, P) => (
          null === ue &&
            (ue = ((0, v.f3M)(Y, { optional: !0 }) ?? []).reduceRight(ve, he)),
          ue(b, P)
        );
      }
      let re = (() => {
        class ue extends Z {
          constructor(P, O) {
            super(),
              (this.backend = P),
              (this.injector = O),
              (this.chain = null);
          }
          handle(P) {
            if (null === this.chain) {
              const O = Array.from(new Set(this.injector.get(me)));
              this.chain = O.reduceRight(
                (B, Te) =>
                  (function _e(ue, b, P) {
                    return (O, B) =>
                      P.runInContext(() => b(O, (Te) => ue(Te, B)));
                  })(B, Te, this.injector),
                he
              );
            }
            return this.chain(P, (O) => this.backend.handle(O));
          }
        }
        return (
          (ue.ɵfac = function (P) {
            return new (P || ue)(v.LFG(X), v.LFG(v.lqb));
          }),
          (ue.ɵprov = v.Yz7({ token: ue, factory: ue.ɵfac })),
          ue
        );
      })();
      const fn = /^\)\]\}',?\n/;
      let kt = (() => {
        class ue {
          constructor(P) {
            this.xhrFactory = P;
          }
          handle(P) {
            if ('JSONP' === P.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
              );
            return new j.y((O) => {
              const B = this.xhrFactory.build();
              if (
                (B.open(P.method, P.urlWithParams),
                P.withCredentials && (B.withCredentials = !0),
                P.headers.forEach((R, W) => B.setRequestHeader(R, W.join(','))),
                P.headers.has('Accept') ||
                  B.setRequestHeader(
                    'Accept',
                    'application/json, text/plain, */*'
                  ),
                !P.headers.has('Content-Type'))
              ) {
                const R = P.detectContentTypeHeader();
                null !== R && B.setRequestHeader('Content-Type', R);
              }
              if (P.responseType) {
                const R = P.responseType.toLowerCase();
                B.responseType = 'json' !== R ? R : 'text';
              }
              const Te = P.serializeBody();
              let He = null;
              const rt = () => {
                  if (null !== He) return He;
                  const R = B.statusText || 'OK',
                    W = new Q(B.getAllResponseHeaders()),
                    fe =
                      (function ur(ue) {
                        return 'responseURL' in ue && ue.responseURL
                          ? ue.responseURL
                          : /^X-Request-URL:/m.test(ue.getAllResponseHeaders())
                          ? ue.getResponseHeader('X-Request-URL')
                          : null;
                      })(B) || P.url;
                  return (
                    (He = new Le({
                      headers: W,
                      status: B.status,
                      statusText: R,
                      url: fe,
                    })),
                    He
                  );
                },
                Ze = () => {
                  let { headers: R, status: W, statusText: fe, url: Fe } = rt(),
                    Je = null;
                  204 !== W &&
                    (Je =
                      typeof B.response > 'u' ? B.responseText : B.response),
                    0 === W && (W = Je ? 200 : 0);
                  let St = W >= 200 && W < 300;
                  if ('json' === P.responseType && 'string' == typeof Je) {
                    const Ht = Je;
                    Je = Je.replace(fn, '');
                    try {
                      Je = '' !== Je ? JSON.parse(Je) : null;
                    } catch (Zn) {
                      (Je = Ht),
                        St && ((St = !1), (Je = { error: Zn, text: Je }));
                    }
                  }
                  St
                    ? (O.next(
                        new ot({
                          body: Je,
                          headers: R,
                          status: W,
                          statusText: fe,
                          url: Fe || void 0,
                        })
                      ),
                      O.complete())
                    : O.error(
                        new Ke({
                          error: Je,
                          headers: R,
                          status: W,
                          statusText: fe,
                          url: Fe || void 0,
                        })
                      );
                },
                Et = (R) => {
                  const { url: W } = rt(),
                    fe = new Ke({
                      error: R,
                      status: B.status || 0,
                      statusText: B.statusText || 'Unknown Error',
                      url: W || void 0,
                    });
                  O.error(fe);
                };
              let on = !1;
              const z = (R) => {
                  on || (O.next(rt()), (on = !0));
                  let W = { type: xe.DownloadProgress, loaded: R.loaded };
                  R.lengthComputable && (W.total = R.total),
                    'text' === P.responseType &&
                      B.responseText &&
                      (W.partialText = B.responseText),
                    O.next(W);
                },
                G = (R) => {
                  let W = { type: xe.UploadProgress, loaded: R.loaded };
                  R.lengthComputable && (W.total = R.total), O.next(W);
                };
              return (
                B.addEventListener('load', Ze),
                B.addEventListener('error', Et),
                B.addEventListener('timeout', Et),
                B.addEventListener('abort', Et),
                P.reportProgress &&
                  (B.addEventListener('progress', z),
                  null !== Te &&
                    B.upload &&
                    B.upload.addEventListener('progress', G)),
                B.send(Te),
                O.next({ type: xe.Sent }),
                () => {
                  B.removeEventListener('error', Et),
                    B.removeEventListener('abort', Et),
                    B.removeEventListener('load', Ze),
                    B.removeEventListener('timeout', Et),
                    P.reportProgress &&
                      (B.removeEventListener('progress', z),
                      null !== Te &&
                        B.upload &&
                        B.upload.removeEventListener('progress', G)),
                    B.readyState !== B.DONE && B.abort();
                }
              );
            });
          }
        }
        return (
          (ue.ɵfac = function (P) {
            return new (P || ue)(v.LFG(l.JF));
          }),
          (ue.ɵprov = v.Yz7({ token: ue, factory: ue.ɵfac })),
          ue
        );
      })();
      const Vt = new v.OlP('XSRF_ENABLED'),
        yn = new v.OlP('XSRF_COOKIE_NAME', {
          providedIn: 'root',
          factory: () => 'XSRF-TOKEN',
        }),
        $t = new v.OlP('XSRF_HEADER_NAME', {
          providedIn: 'root',
          factory: () => 'X-XSRF-TOKEN',
        });
      class _t {}
      let In = (() => {
        class ue {
          constructor(P, O, B) {
            (this.doc = P),
              (this.platform = O),
              (this.cookieName = B),
              (this.lastCookieString = ''),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ('server' === this.platform) return null;
            const P = this.doc.cookie || '';
            return (
              P !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = (0, l.Mx)(P, this.cookieName)),
                (this.lastCookieString = P)),
              this.lastToken
            );
          }
        }
        return (
          (ue.ɵfac = function (P) {
            return new (P || ue)(v.LFG(l.K0), v.LFG(v.Lbi), v.LFG(yn));
          }),
          (ue.ɵprov = v.Yz7({ token: ue, factory: ue.ɵfac })),
          ue
        );
      })();
      function it(ue, b) {
        const P = ue.url.toLowerCase();
        if (
          !(0, v.f3M)(Vt) ||
          'GET' === ue.method ||
          'HEAD' === ue.method ||
          P.startsWith('http://') ||
          P.startsWith('https://')
        )
          return b(ue);
        const O = (0, v.f3M)(_t).getToken(),
          B = (0, v.f3M)($t);
        return (
          null != O &&
            !ue.headers.has(B) &&
            (ue = ue.clone({ headers: ue.headers.set(B, O) })),
          b(ue)
        );
      }
      var Be = (() => (
        ((Be = Be || {})[(Be.Interceptors = 0)] = 'Interceptors'),
        (Be[(Be.LegacyInterceptors = 1)] = 'LegacyInterceptors'),
        (Be[(Be.CustomXsrfConfiguration = 2)] = 'CustomXsrfConfiguration'),
        (Be[(Be.NoXsrfProtection = 3)] = 'NoXsrfProtection'),
        (Be[(Be.JsonpSupport = 4)] = 'JsonpSupport'),
        (Be[(Be.RequestsMadeViaParent = 5)] = 'RequestsMadeViaParent'),
        Be
      ))();
      function Cn(ue, b) {
        return { ɵkind: ue, ɵproviders: b };
      }
      function En(...ue) {
        const b = [
          ie,
          kt,
          re,
          { provide: Z, useExisting: re },
          { provide: X, useExisting: kt },
          { provide: me, useValue: it, multi: !0 },
          { provide: Vt, useValue: !0 },
          { provide: _t, useClass: In },
        ];
        for (const P of ue) b.push(...P.ɵproviders);
        return (0, v.MR2)(b);
      }
      const rn = new v.OlP('LEGACY_INTERCEPTOR_FN');
      let An = (() => {
        class ue {}
        return (
          (ue.ɵfac = function (P) {
            return new (P || ue)();
          }),
          (ue.ɵmod = v.oAB({ type: ue })),
          (ue.ɵinj = v.cJS({
            providers: [
              En(
                Cn(Be.LegacyInterceptors, [
                  { provide: rn, useFactory: F },
                  { provide: me, useExisting: rn, multi: !0 },
                ])
              ),
            ],
          })),
          ue
        );
      })();
    },
    4650: (Re, q, C) => {
      C.d(q, {
        $8M: () => Us,
        $WT: () => Bn,
        $Z: () => rf,
        AFp: () => lg,
        ALo: () => Ip,
        AaK: () => Z,
        AsE: () => ku,
        BQk: () => Ya,
        CHM: () => ki,
        CRH: () => Bp,
        CZH: () => sl,
        CqO: () => Bf,
        D6c: () => O0,
        DdM: () => vp,
        Dn7: () => Op,
        EJc: () => zC,
        EiD: () => Dd,
        EpF: () => kf,
        F$t: () => zf,
        F4k: () => Vf,
        FYo: () => Fd,
        FiY: () => ar,
        G48: () => f0,
        Gf: () => kp,
        GfV: () => Nd,
        GkF: () => Mu,
        Gpc: () => U,
        Gre: () => Ch,
        HOy: () => Bu,
        Hsn: () => Wf,
        JOm: () => po,
        JVY: () => Bm,
        JZr: () => ke,
        Jf7: () => Ld,
        KtG: () => Vi,
        L6k: () => Um,
        LAX: () => jm,
        LFG: () => pt,
        LSH: () => $l,
        Lbi: () => jC,
        Lck: () => z_,
        MAs: () => Lf,
        MMx: () => Yu,
        MR2: () => ov,
        NdJ: () => Iu,
        O4$: () => Os,
        OlP: () => Lt,
        Oqu: () => Lu,
        P3R: () => Ed,
        PXZ: () => a0,
        Q6J: () => Eu,
        QGY: () => Su,
        Qsj: () => Dv,
        R0b: () => Vr,
        RDi: () => Rm,
        Rgc: () => la,
        SBq: () => Ys,
        Sil: () => KC,
        Suo: () => Vp,
        TTD: () => Gr,
        TgZ: () => za,
        Tol: () => lh,
        Udp: () => xu,
        VKq: () => yp,
        W1O: () => $p,
        WLB: () => Dp,
        XFs: () => qe,
        Xpm: () => Ht,
        Xts: () => Gl,
        Y36: () => us,
        YKP: () => lp,
        YNc: () => Nf,
        Yjl: () => Co,
        Yz7: () => Oe,
        Z0I: () => At,
        ZZ4: () => _c,
        _Bn: () => ap,
        _UZ: () => bu,
        _Vd: () => Ks,
        _c5: () => A0,
        _uU: () => gh,
        aQg: () => Cc,
        c2e: () => $C,
        cJS: () => Dt,
        cg1: () => Uu,
        dDg: () => n0,
        dqk: () => it,
        eBb: () => Hm,
        eFA: () => Cg,
        eJc: () => oc,
        ekj: () => Fu,
        eoX: () => vg,
        evT: () => kd,
        f3M: () => ue,
        g9A: () => cg,
        h0i: () => ws,
        hGG: () => T0,
        hij: () => Xa,
        iGM: () => Lp,
        ifc: () => Et,
        ip1: () => ag,
        jDz: () => cp,
        kEZ: () => _p,
        kL8: () => xh,
        kcU: () => Ps,
        kuF: () => Ne,
        l5B: () => Cp,
        lG2: () => Uo,
        lcZ: () => Ap,
        lnq: () => Vu,
        lqb: () => Ti,
        lri: () => gg,
        mCW: () => Ra,
        n5z: () => _a,
        oAB: () => _o,
        oJD: () => _d,
        oxw: () => Gf,
        pB0: () => $m,
        q3G: () => mn,
        qLn: () => Zs,
        qOj: () => yu,
        qZA: () => Wa,
        qzn: () => os,
        rWj: () => mg,
        s9C: () => Au,
        sBO: () => h0,
        s_b: () => rl,
        soG: () => al,
        tb: () => Dg,
        tp0: () => Er,
        uIk: () => Cu,
        vHH: () => de,
        vpe: () => Do,
        wAp: () => st,
        xi3: () => Tp,
        xp6: () => Gd,
        ynx: () => Ka,
        z2F: () => ll,
        z3N: () => No,
        zSh: () => Yl,
        zs3: () => Oi,
      });
      var l = C(7579),
        v = C(727),
        k = C(9751),
        j = C(6451),
        H = C(3099);
      function V(e) {
        for (let t in e) if (e[t] === V) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function $(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Z(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Z).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function X(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const Q = V({ __forward_ref__: V });
      function U(e) {
        return (
          (e.__forward_ref__ = U),
          (e.toString = function () {
            return Z(this());
          }),
          e
        );
      }
      function L(e) {
        return se(e) ? e() : e;
      }
      function se(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(Q) &&
          e.__forward_ref__ === U
        );
      }
      function te(e) {
        return e && !!e.ɵproviders;
      }
      const ke = 'https://g.co/ng/security#xss';
      class de extends Error {
        constructor(t, n) {
          super(Ne(t, n)), (this.code = t);
        }
      }
      function Ne(e, t) {
        return `NG0${Math.abs(e)}${t ? ': ' + t.trim() : ''}`;
      }
      function Me(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function nt(e, t) {
        throw new de(-201, !1);
      }
      function me(e, t) {
        null == e &&
          (function F(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, '!=');
      }
      function Oe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Dt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Mt(e) {
        return Wt(e, fn) || Wt(e, kt);
      }
      function At(e) {
        return null !== Mt(e);
      }
      function Wt(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Vn(e) {
        return e && (e.hasOwnProperty(ur) || e.hasOwnProperty(Vt))
          ? e[ur]
          : null;
      }
      const fn = V({ ɵprov: V }),
        ur = V({ ɵinj: V }),
        kt = V({ ngInjectableDef: V }),
        Vt = V({ ngInjectorDef: V });
      var qe = (() => (
        ((qe = qe || {})[(qe.Default = 0)] = 'Default'),
        (qe[(qe.Host = 1)] = 'Host'),
        (qe[(qe.Self = 2)] = 'Self'),
        (qe[(qe.SkipSelf = 4)] = 'SkipSelf'),
        (qe[(qe.Optional = 8)] = 'Optional'),
        qe
      ))();
      let yn;
      function $t(e) {
        const t = yn;
        return (yn = e), t;
      }
      function _t(e, t, n) {
        const r = Mt(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & qe.Optional
          ? null
          : void 0 !== t
          ? t
          : void nt(Z(e));
      }
      const it = (() =>
          (typeof globalThis < 'u' && globalThis) ||
          (typeof global < 'u' && global) ||
          (typeof window < 'u' && window) ||
          (typeof self < 'u' &&
            typeof WorkerGlobalScope < 'u' &&
            self instanceof WorkerGlobalScope &&
            self))(),
        En = {},
        Zt = '__NG_DI_FLAG__',
        rn = 'ngTempTokenPath',
        Gt = 'ngTokenPath',
        Mr = /\n/gm,
        Tt = '\u0275',
        Dn = '__source';
      let Ue;
      function Jt(e) {
        const t = Ue;
        return (Ue = e), t;
      }
      function An(e, t = qe.Default) {
        if (void 0 === Ue) throw new de(-203, !1);
        return null === Ue
          ? _t(e, void 0, t)
          : Ue.get(e, t & qe.Optional ? null : void 0, t);
      }
      function pt(e, t = qe.Default) {
        return (
          (function cr() {
            return yn;
          })() || An
        )(L(e), t);
      }
      function ue(e, t = qe.Default) {
        return pt(e, b(t));
      }
      function b(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function P(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = L(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new de(900, !1);
            let o,
              i = qe.Default;
            for (let a = 0; a < r.length; a++) {
              const d = r[a],
                g = B(d);
              'number' == typeof g
                ? -1 === g
                  ? (o = d.token)
                  : (i |= g)
                : (o = d);
            }
            t.push(pt(o, i));
          } else t.push(pt(r));
        }
        return t;
      }
      function O(e, t) {
        return (e[Zt] = t), (e.prototype[Zt] = t), e;
      }
      function B(e) {
        return e[Zt];
      }
      function rt(e) {
        return { toString: e }.toString();
      }
      var Ze = (() => (
          ((Ze = Ze || {})[(Ze.OnPush = 0)] = 'OnPush'),
          (Ze[(Ze.Default = 1)] = 'Default'),
          Ze
        ))(),
        Et = (() => {
          return (
            ((e = Et || (Et = {}))[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            Et
          );
          var e;
        })();
      const on = {},
        z = [],
        G = V({ ɵcmp: V }),
        R = V({ ɵdir: V }),
        W = V({ ɵpipe: V }),
        fe = V({ ɵmod: V }),
        Fe = V({ ɵfac: V }),
        Je = V({ __NG_ELEMENT_ID__: V });
      let St = 0;
      function Ht(e) {
        return rt(() => {
          const t = to(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Ze.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              data: e.data || {},
              encapsulation: e.encapsulation || Et.Emulated,
              id: 'c' + St++,
              styles: e.styles || z,
              _: null,
              schemas: e.schemas || null,
              tView: null,
            };
          Eo(n);
          const r = e.dependencies;
          return (n.directiveDefs = Xn(r, !1)), (n.pipeDefs = Xn(r, !0)), n;
        });
      }
      function Rn(e) {
        return wt(e) || Xt(e);
      }
      function eo(e) {
        return null !== e;
      }
      function _o(e) {
        return rt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || z,
          declarations: e.declarations || z,
          imports: e.imports || z,
          exports: e.exports || z,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Sr(e, t) {
        if (null == e) return on;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      function Uo(e) {
        return rt(() => {
          const t = to(e);
          return Eo(t), t;
        });
      }
      function Co(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function wt(e) {
        return e[G] || null;
      }
      function Xt(e) {
        return e[R] || null;
      }
      function Bt(e) {
        return e[W] || null;
      }
      function Bn(e) {
        const t = wt(e) || Xt(e) || Bt(e);
        return null !== t && t.standalone;
      }
      function en(e, t) {
        const n = e[fe] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Z(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function to(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          selectors: e.selectors || z,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Sr(e.inputs, t),
          outputs: Sr(e.outputs),
        };
      }
      function Eo(e) {
        e.features?.forEach((t) => t(e));
      }
      function Xn(e, t) {
        if (!e) return null;
        const n = t ? Bt : Rn;
        return () =>
          ('function' == typeof e ? e() : e).map((r) => n(r)).filter(eo);
      }
      const tn = 0,
        ze = 1,
        dt = 2,
        Rt = 3,
        sn = 4,
        xn = 5,
        xt = 6,
        Qn = 7,
        Pt = 8,
        no = 9,
        Br = 10,
        ut = 11,
        qn = 12,
        an = 13,
        ro = 14,
        bn = 15,
        Qt = 16,
        Un = 17,
        er = 18,
        Tn = 19,
        dr = 20,
        Ho = 21,
        gt = 22,
        wo = 1,
        si = 2,
        Ur = 7,
        Hr = 8,
        fr = 9,
        hn = 10;
      function ln(e) {
        return Array.isArray(e) && 'object' == typeof e[wo];
      }
      function Fn(e) {
        return Array.isArray(e) && !0 === e[wo];
      }
      function jr(e) {
        return 0 != (4 & e.flags);
      }
      function Ir(e) {
        return e.componentOffset > -1;
      }
      function tr(e) {
        return 1 == (1 & e.flags);
      }
      function On(e) {
        return !!e.template;
      }
      function Ar(e) {
        return 0 != (256 & e[dt]);
      }
      function nr(e, t) {
        return e.hasOwnProperty(Fe) ? e[Fe] : null;
      }
      class fi {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Gr() {
        return Mo;
      }
      function Mo(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = mr), Ko;
      }
      function Ko() {
        const e = so(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === on) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function mr(e, t, n, r) {
        const o = this.declaredInputs[n],
          i =
            so(e) ||
            (function Wr(e, t) {
              return (e[zr] = t);
            })(e, { previous: on, current: null }),
          a = i.current || (i.current = {}),
          d = i.previous,
          g = d[o];
        (a[o] = new fi(g && g.currentValue, t, d === on)), (e[r] = t);
      }
      Gr.ngInherit = !0;
      const zr = '__ngSimpleChanges__';
      function so(e) {
        return e[zr] || null;
      }
      const Mn = function (e, t, n) {},
        So = 'svg';
      function jt(e) {
        for (; Array.isArray(e); ) e = e[tn];
        return e;
      }
      function rr(e, t) {
        return jt(t[e]);
      }
      function Pn(e, t) {
        return jt(t[e.index]);
      }
      function Zo(e, t) {
        return e.data[t];
      }
      function vr(e, t) {
        return e[t];
      }
      function Ft(e, t) {
        const n = t[e];
        return ln(n) ? n : n[tn];
      }
      function yr(e) {
        return 64 == (64 & e[dt]);
      }
      function Dr(e, t) {
        return null == t ? null : e[t];
      }
      function Jo(e) {
        e[er] = 0;
      }
      function Pr(e, t) {
        e[xn] += t;
        let n = e,
          r = e[Rt];
        for (
          ;
          null !== r && ((1 === t && 1 === n[xn]) || (-1 === t && 0 === n[xn]));

        )
          (r[xn] += t), (n = r), (r = r[Rt]);
      }
      const lt = { lFrame: zi(null), bindingsEnabled: !0 };
      function et() {
        return lt.bindingsEnabled;
      }
      function ye() {
        return lt.lFrame.lView;
      }
      function mt() {
        return lt.lFrame.tView;
      }
      function ki(e) {
        return (lt.lFrame.contextLView = e), e[Pt];
      }
      function Vi(e) {
        return (lt.lFrame.contextLView = null), e;
      }
      function pn() {
        let e = ca();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ca() {
        return lt.lFrame.currentTNode;
      }
      function Wn(e, t) {
        const n = lt.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function lo() {
        return lt.lFrame.isParent;
      }
      function Rr() {
        lt.lFrame.isParent = !1;
      }
      function gn() {
        const e = lt.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Ln() {
        return lt.lFrame.bindingIndex;
      }
      function uo() {
        return lt.lFrame.bindingIndex++;
      }
      function or(e) {
        const t = lt.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function As(e, t) {
        const n = lt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Io(t);
      }
      function Io(e) {
        lt.lFrame.currentDirectiveIndex = e;
      }
      function To() {
        return lt.lFrame.currentQueryIndex;
      }
      function Xo(e) {
        lt.lFrame.currentQueryIndex = e;
      }
      function vi(e) {
        const t = e[ze];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[xt] : null;
      }
      function $i(e, t, n) {
        if (n & qe.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & qe.Host ||
              ((o = vi(i)), null === o || ((i = i[bn]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (lt.lFrame = Qo());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Gi(e) {
        const t = Qo(),
          n = e[ze];
        (lt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Qo() {
        const e = lt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? zi(e) : t;
      }
      function zi(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Wi() {
        const e = lt.lFrame;
        return (
          (lt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const qo = Wi;
      function co() {
        const e = Wi();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function _n() {
        return lt.lFrame.selectedIndex;
      }
      function fo(e) {
        lt.lFrame.selectedIndex = e;
      }
      function zt() {
        const e = lt.lFrame;
        return Zo(e.tView, e.selectedIndex);
      }
      function Os() {
        lt.lFrame.currentNamespace = So;
      }
      function Ps() {
        !(function Rs() {
          lt.lFrame.currentNamespace = null;
        })();
      }
      function yi(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: d,
              ngAfterViewInit: g,
              ngAfterViewChecked: E,
              ngOnDestroy: I,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            d &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, d),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)),
            g && (e.viewHooks || (e.viewHooks = [])).push(-n, g),
            E &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, E),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, E)),
            null != I && (e.destroyHooks || (e.destroyHooks = [])).push(n, I);
        }
      }
      function Di(e, t, n) {
        p(e, t, 3, n);
      }
      function f(e, t, n, r) {
        (3 & e[dt]) === n && p(e, t, n, r);
      }
      function w(e, t) {
        let n = e[dt];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[dt] = n));
      }
      function p(e, t, n, r) {
        const i = r ?? -1,
          a = t.length - 1;
        let d = 0;
        for (let g = void 0 !== r ? 65535 & e[er] : 0; g < a; g++)
          if ('number' == typeof t[g + 1]) {
            if (((d = t[g]), null != r && d >= r)) break;
          } else
            t[g] < 0 && (e[er] += 65536),
              (d < i || -1 == i) &&
                (M(e, n, t, g), (e[er] = (4294901760 & e[er]) + g + 2)),
              g++;
      }
      function M(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          d = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[dt] >> 11 < e[er] >> 16 && (3 & e[dt]) === t) {
            (e[dt] += 2048), Mn(4, d, i);
            try {
              i.call(d);
            } finally {
              Mn(5, d, i);
            }
          }
        } else {
          Mn(4, d, i);
          try {
            i.call(d);
          } finally {
            Mn(5, d, i);
          }
        }
      }
      const N = -1;
      class ne {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function nn(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              a = n[r++],
              d = n[r++];
            e.setAttribute(t, a, d, i);
          } else {
            const i = o,
              a = n[++r];
            Hn(i) ? e.setProperty(t, i, a) : e.setAttribute(t, i, a), r++;
          }
        }
        return r;
      }
      function xr(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Hn(e) {
        return 64 === e.charCodeAt(0);
      }
      function kn(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n ||
                  _r(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function _r(e, t, n, r, o) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const d = e[i++];
            if ('number' == typeof d) {
              if (d === t) {
                a = -1;
                break;
              }
              if (d > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const d = e[i];
          if ('number' == typeof d) break;
          if (d === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function ho(e) {
        return e !== N;
      }
      function Kn(e) {
        return 32767 & e;
      }
      function Ki(e, t) {
        let n = (function ei(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[bn]), n--;
        return r;
      }
      let Yi = !0;
      function Po(e) {
        const t = Yi;
        return (Yi = e), t;
      }
      const Fs = 255,
        Zi = 5;
      let fl = 0;
      const Fr = {};
      function Ji(e, t) {
        const n = _i(e, t);
        if (-1 !== n) return n;
        const r = t[ze];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Ns(r.data, e),
          Ns(t, null),
          Ns(r.blueprint, null));
        const o = Ls(e, t),
          i = e.injectorIndex;
        if (ho(o)) {
          const a = Kn(o),
            d = Ki(o, t),
            g = d[ze].data;
          for (let E = 0; E < 8; E++) t[i + E] = d[a + E] | g[a + E];
        }
        return (t[i + 8] = o), i;
      }
      function Ns(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function _i(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Ls(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = $n(o)), null === r)) return N;
          if ((n++, (o = o[bn]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return N;
      }
      function ks(e, t, n) {
        !(function hl(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Je) && (r = n[Je]),
            null == r && (r = n[Je] = fl++);
          const o = r & Fs;
          t.data[e + (o >> Zi)] |= 1 << o;
        })(e, t, n);
      }
      function pa(e, t, n) {
        if (n & qe.Optional || void 0 !== e) return e;
        nt();
      }
      function ga(e, t, n, r) {
        if (
          (n & qe.Optional && void 0 === r && (r = null),
          !(n & (qe.Self | qe.Host)))
        ) {
          const o = e[no],
            i = $t(void 0);
          try {
            return o ? o.get(t, r, n & qe.Optional) : _t(t, r, n & qe.Optional);
          } finally {
            $t(i);
          }
        }
        return pa(r, 0, n);
      }
      function ma(e, t, n, r = qe.Default, o) {
        if (null !== e) {
          if (1024 & t[dt]) {
            const a = (function Ca(e, t, n, r, o) {
              let i = e,
                a = t;
              for (
                ;
                null !== i && null !== a && 1024 & a[dt] && !(256 & a[dt]);

              ) {
                const d = va(i, a, n, r | qe.Self, Fr);
                if (d !== Fr) return d;
                let g = i.parent;
                if (!g) {
                  const E = a[Ho];
                  if (E) {
                    const I = E.get(n, Fr, r);
                    if (I !== Fr) return I;
                  }
                  (g = $n(a)), (a = a[bn]);
                }
                i = g;
              }
              return o;
            })(e, t, n, r, Fr);
            if (a !== Fr) return a;
          }
          const i = va(e, t, n, r, Fr);
          if (i !== Fr) return i;
        }
        return ga(t, n, r, o);
      }
      function va(e, t, n, r, o) {
        const i = (function ya(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Je) ? e[Je] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & Fs : Ec) : t;
        })(n);
        if ('function' == typeof i) {
          if (!$i(t, e, r)) return r & qe.Host ? pa(o, 0, r) : ga(t, n, r, o);
          try {
            const a = i(r);
            if (null != a || r & qe.Optional) return a;
            nt();
          } finally {
            qo();
          }
        } else if ('number' == typeof i) {
          let a = null,
            d = _i(e, t),
            g = N,
            E = r & qe.Host ? t[Qt][xt] : null;
          for (
            (-1 === d || r & qe.SkipSelf) &&
            ((g = -1 === d ? Ls(e, t) : t[d + 8]),
            g !== N && Bs(r, !1)
              ? ((a = t[ze]), (d = Kn(g)), (t = Ki(g, t)))
              : (d = -1));
            -1 !== d;

          ) {
            const I = t[ze];
            if (Da(i, d, I.data)) {
              const x = jn(d, t, n, a, r, E);
              if (x !== Fr) return x;
            }
            (g = t[d + 8]),
              g !== N && Bs(r, t[ze].data[d + 8] === E) && Da(i, d, t)
                ? ((a = I), (d = Kn(g)), (t = Ki(g, t)))
                : (d = -1);
          }
        }
        return o;
      }
      function jn(e, t, n, r, o, i) {
        const a = t[ze],
          d = a.data[e + 8],
          I = Xi(
            d,
            a,
            n,
            null == r ? Ir(d) && Yi : r != a && 0 != (3 & d.type),
            o & qe.Host && i === d
          );
        return null !== I ? Nr(t, a, I, d) : Fr;
      }
      function Xi(e, t, n, r, o) {
        const i = e.providerIndexes,
          a = t.data,
          d = 1048575 & i,
          g = e.directiveStart,
          I = i >> 20,
          K = o ? d + I : e.directiveEnd;
        for (let ee = r ? d : d + I; ee < K; ee++) {
          const pe = a[ee];
          if ((ee < g && n === pe) || (ee >= g && pe.type === n)) return ee;
        }
        if (o) {
          const ee = a[g];
          if (ee && On(ee) && ee.type === n) return g;
        }
        return null;
      }
      function Nr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function le(e) {
            return e instanceof ne;
          })(o)
        ) {
          const a = o;
          a.resolving &&
            (function be(e, t) {
              const n = t ? `. Dependency path: ${t.join(' > ')} > ${e}` : '';
              throw new de(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function We(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : Me(e);
              })(i[n])
            );
          const d = Po(a.canSeeViewProviders);
          a.resolving = !0;
          const g = a.injectImpl ? $t(a.injectImpl) : null;
          $i(e, r, qe.Default);
          try {
            (o = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function ha(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const a = Mo(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== g && $t(g), Po(d), (a.resolving = !1), qo();
          }
        }
        return o;
      }
      function Da(e, t, n) {
        return !!(n[t + (e >> Zi)] & (1 << e));
      }
      function Bs(e, t) {
        return !(e & qe.Self || (e & qe.Host && t));
      }
      class Ci {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return ma(this._tNode, this._lView, t, b(r), n);
        }
      }
      function Ec() {
        return new Ci(pn(), ye());
      }
      function _a(e) {
        return rt(() => {
          const t = e.prototype.constructor,
            n = t[Fe] || Ei(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Fe] || Ei(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function Ei(e) {
        return se(e)
          ? () => {
              const t = Ei(L(e));
              return t && t();
            }
          : nr(e);
      }
      function $n(e) {
        const t = e[ze],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[xt] : null;
      }
      function Us(e) {
        return (function Vs(e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (xr(i)) break;
              if (0 === i) o += 2;
              else if ('number' == typeof i)
                for (o++; o < r && 'string' == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(pn(), e);
      }
      const wi = '__parameters__';
      function ti(e, t, n) {
        return rt(() => {
          const r = (function bi(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const a = new o(...i);
            return (d.annotation = a), d;
            function d(g, E, I) {
              const x = g.hasOwnProperty(wi)
                ? g[wi]
                : Object.defineProperty(g, wi, { value: [] })[wi];
              for (; x.length <= I; ) x.push(null);
              return (x[I] = x[I] || []).push(a), g;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class Lt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Oe({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function xo(e, t) {
        e.forEach((n) => (Array.isArray(n) ? xo(n, t) : t(n)));
      }
      function ba(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function qi(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Mi(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function sr(e, t, n) {
        let r = c(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Ma(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function u(e, t) {
        const n = c(e, t);
        if (n >= 0) return e[1 | n];
      }
      function c(e, t) {
        return (function h(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const ar = O(ti('Optional'), 8),
        Er = O(ti('SkipSelf'), 4);
      var po = (() => (
        ((po = po || {})[(po.Important = 1)] = 'Important'),
        (po[(po.DashCase = 2)] = 'DashCase'),
        po
      ))();
      const El = new Map();
      let tm = 0;
      const bl = '__ngContext__';
      function Gn(e, t) {
        ln(t)
          ? ((e[bl] = t[dr]),
            (function rm(e) {
              El.set(e[dr], e);
            })(t))
          : (e[bl] = t);
      }
      let Ml;
      function Sl(e, t) {
        return Ml(e, t);
      }
      function $s(e) {
        const t = e[Rt];
        return Fn(t) ? t[Rt] : t;
      }
      function Il(e) {
        return Kc(e[an]);
      }
      function Al(e) {
        return Kc(e[sn]);
      }
      function Kc(e) {
        for (; null !== e && !Fn(e); ) e = e[sn];
        return e;
      }
      function ns(e, t, n, r, o) {
        if (null != r) {
          let i,
            a = !1;
          Fn(r) ? (i = r) : ln(r) && ((a = !0), (r = r[tn]));
          const d = jt(r);
          0 === e && null !== n
            ? null == o
              ? qc(t, n, d)
              : Si(t, n, d, o || null, !0)
            : 1 === e && null !== n
            ? Si(t, n, d, o || null, !0)
            : 2 === e
            ? (function Nl(e, t, n) {
                const r = Ia(e, t);
                r &&
                  (function wm(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, d, a)
            : 3 === e && t.destroyNode(d),
            null != i &&
              (function Sm(e, t, n, r, o) {
                const i = n[Ur];
                i !== jt(n) && ns(t, e, r, i, o);
                for (let d = hn; d < n.length; d++) {
                  const g = n[d];
                  Gs(g[ze], g, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Ol(e, t, n) {
        return e.createElement(t, n);
      }
      function Zc(e, t) {
        const n = e[fr],
          r = n.indexOf(t),
          o = t[Rt];
        512 & t[dt] && ((t[dt] &= -513), Pr(o, -1)), n.splice(r, 1);
      }
      function Pl(e, t) {
        if (e.length <= hn) return;
        const n = hn + t,
          r = e[n];
        if (r) {
          const o = r[Un];
          null !== o && o !== e && Zc(o, r), t > 0 && (e[n - 1][sn] = r[sn]);
          const i = qi(e, hn + t);
          !(function gm(e, t) {
            Gs(e, t, t[ut], 2, null, null), (t[tn] = null), (t[xt] = null);
          })(r[ze], r);
          const a = i[Tn];
          null !== a && a.detachView(i[ze]),
            (r[Rt] = null),
            (r[sn] = null),
            (r[dt] &= -65);
        }
        return r;
      }
      function Jc(e, t) {
        if (!(128 & t[dt])) {
          const n = t[ut];
          n.destroyNode && Gs(e, t, n, 3, null, null),
            (function ym(e) {
              let t = e[an];
              if (!t) return Rl(e[ze], e);
              for (; t; ) {
                let n = null;
                if (ln(t)) n = t[an];
                else {
                  const r = t[hn];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[sn] && t !== e; )
                    ln(t) && Rl(t[ze], t), (t = t[Rt]);
                  null === t && (t = e),
                    ln(t) && Rl(t[ze], t),
                    (n = t && t[sn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Rl(e, t) {
        if (!(128 & t[dt])) {
          (t[dt] &= -65),
            (t[dt] |= 128),
            (function Em(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof ne)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const d = o[i[a]],
                          g = i[a + 1];
                        Mn(4, d, g);
                        try {
                          g.call(d);
                        } finally {
                          Mn(5, d, g);
                        }
                      }
                    else {
                      Mn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Mn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function Cm(e, t) {
              const n = e.cleanup,
                r = t[Qn];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const a = n[i + 3];
                    a >= 0 ? r[(o = a)]() : r[(o = -a)].unsubscribe(), (i += 2);
                  } else {
                    const a = r[(o = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[Qn] = null;
              }
            })(e, t),
            1 === t[ze].type && t[ut].destroy();
          const n = t[Un];
          if (null !== n && Fn(t[Rt])) {
            n !== t[Rt] && Zc(n, t);
            const r = t[Tn];
            null !== r && r.detachView(e);
          }
          !(function om(e) {
            El.delete(e[dr]);
          })(t);
        }
      }
      function Xc(e, t, n) {
        return (function Qc(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[tn];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === Et.None || i === Et.Emulated) return null;
            }
            return Pn(r, n);
          }
        })(e, t.parent, n);
      }
      function Si(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function qc(e, t, n) {
        e.appendChild(t, n);
      }
      function ed(e, t, n, r, o) {
        null !== r ? Si(e, t, n, r, o) : qc(e, t, n);
      }
      function Ia(e, t) {
        return e.parentNode(t);
      }
      function td(e, t, n) {
        return rd(e, t, n);
      }
      let xl,
        Oa,
        Vl,
        Pa,
        rd = function nd(e, t, n) {
          return 40 & e.type ? Pn(e, n) : null;
        };
      function Aa(e, t, n, r) {
        const o = Xc(e, r, t),
          i = t[ut],
          d = td(r.parent || t[xt], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let g = 0; g < n.length; g++) ed(i, o, n[g], d, !1);
          else ed(i, o, n, d, !1);
        void 0 !== xl && xl(i, r, t, n, o);
      }
      function Ta(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Pn(t, e);
          if (4 & n) return Fl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Ta(e, r);
            {
              const o = e[t.index];
              return Fn(o) ? Fl(-1, o) : jt(o);
            }
          }
          if (32 & n) return Sl(t, e)() || jt(e[t.index]);
          {
            const r = id(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Ta($s(e[Qt]), r)
              : Ta(e, t.next);
          }
        }
        return null;
      }
      function id(e, t) {
        return null !== t ? e[Qt][xt].projection[t.projection] : null;
      }
      function Fl(e, t) {
        const n = hn + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[ze].firstChild;
          if (null !== o) return Ta(r, o);
        }
        return t[Ur];
      }
      function Ll(e, t, n, r, o, i, a) {
        for (; null != n; ) {
          const d = r[n.index],
            g = n.type;
          if (
            (a && 0 === t && (d && Gn(jt(d), r), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & g) Ll(e, t, n.child, r, o, i, !1), ns(t, e, o, d, i);
            else if (32 & g) {
              const E = Sl(n, r);
              let I;
              for (; (I = E()); ) ns(t, e, o, I, i);
              ns(t, e, o, d, i);
            } else 16 & g ? sd(e, t, r, n, o, i) : ns(t, e, o, d, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function Gs(e, t, n, r, o, i) {
        Ll(n, r, e.firstChild, t, o, i, !1);
      }
      function sd(e, t, n, r, o, i) {
        const a = n[Qt],
          g = a[xt].projection[r.projection];
        if (Array.isArray(g))
          for (let E = 0; E < g.length; E++) ns(t, e, o, g[E], i);
        else Ll(e, t, g, a[Rt], o, i, !0);
      }
      function ad(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function ld(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && nn(e, t, r),
          null !== o && ad(e, t, o),
          null !== i &&
            (function Am(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      function rs(e) {
        return (
          (function kl() {
            if (void 0 === Oa && ((Oa = null), it.trustedTypes))
              try {
                Oa = it.trustedTypes.createPolicy('angular', {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return Oa;
          })()?.createHTML(e) || e
        );
      }
      function Rm(e) {
        Vl = e;
      }
      function Bl() {
        if (void 0 === Pa && ((Pa = null), it.trustedTypes))
          try {
            Pa = it.trustedTypes.createPolicy('angular#unsafe-bypass', {
              createHTML: (e) => e,
              createScript: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch {}
        return Pa;
      }
      function cd(e) {
        return Bl()?.createHTML(e) || e;
      }
      function fd(e) {
        return Bl()?.createScriptURL(e) || e;
      }
      class Ii {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ke})`;
        }
      }
      class xm extends Ii {
        getTypeName() {
          return 'HTML';
        }
      }
      class Fm extends Ii {
        getTypeName() {
          return 'Style';
        }
      }
      class Nm extends Ii {
        getTypeName() {
          return 'Script';
        }
      }
      class Lm extends Ii {
        getTypeName() {
          return 'URL';
        }
      }
      class km extends Ii {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function No(e) {
        return e instanceof Ii ? e.changingThisBreaksApplicationSecurity : e;
      }
      function os(e, t) {
        const n = (function Vm(e) {
          return (e instanceof Ii && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${ke})`);
        }
        return n === t;
      }
      function Bm(e) {
        return new xm(e);
      }
      function Um(e) {
        return new Fm(e);
      }
      function Hm(e) {
        return new Nm(e);
      }
      function jm(e) {
        return new Lm(e);
      }
      function $m(e) {
        return new km(e);
      }
      class Gm {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const n = new window.DOMParser().parseFromString(
              rs(t),
              'text/html'
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch {
            return null;
          }
        }
      }
      class zm {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert'
              ));
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement('template');
          return (n.innerHTML = rs(t)), n;
        }
      }
      const Km =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      function Ra(e) {
        return (e = String(e)).match(Km) ? e : 'unsafe:' + e;
      }
      function Lo(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function zs(...e) {
        const t = {};
        for (const n of e)
          for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const pd = Lo('area,br,col,hr,img,wbr'),
        gd = Lo('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        md = Lo('rp,rt'),
        Ul = zs(
          pd,
          zs(
            gd,
            Lo(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          zs(
            md,
            Lo(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          zs(md, gd)
        ),
        Hl = Lo('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        vd = zs(
          Hl,
          Lo(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Lo(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Ym = Lo('script,style,template');
      class Zm {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let o = this.checkClobberedElement(n, n.nextSibling);
                if (o) {
                  n = o;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Ul.hasOwnProperty(n))
            return (this.sanitizedSomething = !0), !Ym.hasOwnProperty(n);
          this.buf.push('<'), this.buf.push(n);
          const r = t.attributes;
          for (let o = 0; o < r.length; o++) {
            const i = r.item(o),
              a = i.name,
              d = a.toLowerCase();
            if (!vd.hasOwnProperty(d)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let g = i.value;
            Hl[d] && (g = Ra(g)), this.buf.push(' ', a, '="', yd(g), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Ul.hasOwnProperty(n) &&
            !pd.hasOwnProperty(n) &&
            (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(yd(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
            );
          return n;
        }
      }
      const Jm = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Xm = /([^\#-~ |!])/g;
      function yd(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Jm, function (t) {
            return (
              '&#' +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(Xm, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let xa;
      function Dd(e, t) {
        let n = null;
        try {
          xa =
            xa ||
            (function hd(e) {
              const t = new zm(e);
              return (function Wm() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    rs(''),
                    'text/html'
                  );
                } catch {
                  return !1;
                }
              })()
                ? new Gm(t)
                : t;
            })(e);
          let r = t ? String(t) : '';
          n = xa.getInertBodyElement(r);
          let o = 5,
            i = r;
          do {
            if (0 === o)
              throw new Error(
                'Failed to sanitize html because the input is unstable'
              );
            o--, (r = i), (i = n.innerHTML), (n = xa.getInertBodyElement(r));
          } while (r !== i);
          return rs(new Zm().sanitizeChildren(jl(n) || n));
        } finally {
          if (n) {
            const r = jl(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function jl(e) {
        return 'content' in e &&
          (function Qm(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var mn = (() => (
        ((mn = mn || {})[(mn.NONE = 0)] = 'NONE'),
        (mn[(mn.HTML = 1)] = 'HTML'),
        (mn[(mn.STYLE = 2)] = 'STYLE'),
        (mn[(mn.SCRIPT = 3)] = 'SCRIPT'),
        (mn[(mn.URL = 4)] = 'URL'),
        (mn[(mn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        mn
      ))();
      function _d(e) {
        const t = Ws();
        return t
          ? cd(t.sanitize(mn.HTML, e) || '')
          : os(e, 'HTML')
          ? cd(No(e))
          : Dd(
              (function ud() {
                return void 0 !== Vl
                  ? Vl
                  : typeof document < 'u'
                  ? document
                  : void 0;
              })(),
              Me(e)
            );
      }
      function $l(e) {
        const t = Ws();
        return t
          ? t.sanitize(mn.URL, e) || ''
          : os(e, 'URL')
          ? No(e)
          : Ra(Me(e));
      }
      function Cd(e) {
        const t = Ws();
        if (t) return fd(t.sanitize(mn.RESOURCE_URL, e) || '');
        if (os(e, 'ResourceURL')) return fd(No(e));
        throw new de(904, !1);
      }
      function Ed(e, t, n) {
        return (function rv(e, t) {
          return ('src' === t &&
            ('embed' === e ||
              'frame' === e ||
              'iframe' === e ||
              'media' === e ||
              'script' === e)) ||
            ('href' === t && ('base' === e || 'link' === e))
            ? Cd
            : $l;
        })(
          t,
          n
        )(e);
      }
      function Ws() {
        const e = ye();
        return e && e[qn];
      }
      const Gl = new Lt('ENVIRONMENT_INITIALIZER'),
        wd = new Lt('INJECTOR', -1),
        bd = new Lt('INJECTOR_DEF_TYPES');
      class Md {
        get(t, n = En) {
          if (n === En) {
            const r = new Error(`NullInjectorError: No provider for ${Z(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      function ov(e) {
        return { ɵproviders: e };
      }
      function iv(...e) {
        return { ɵproviders: Sd(0, e), ɵfromNgModule: !0 };
      }
      function Sd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          xo(t, (i) => {
            const a = i;
            zl(a, n, [], r) && (o || (o = []), o.push(a));
          }),
          void 0 !== o && Id(o, n),
          n
        );
      }
      function Id(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Wl(o, (i) => {
            t.push(i);
          });
        }
      }
      function zl(e, t, n, r) {
        if (!(e = L(e))) return !1;
        let o = null,
          i = Vn(e);
        const a = !i && wt(e);
        if (i || a) {
          if (a && !a.standalone) return !1;
          o = e;
        } else {
          const g = e.ngModule;
          if (((i = Vn(g)), !i)) return !1;
          o = g;
        }
        const d = r.has(o);
        if (a) {
          if (d) return !1;
          if ((r.add(o), a.dependencies)) {
            const g =
              'function' == typeof a.dependencies
                ? a.dependencies()
                : a.dependencies;
            for (const E of g) zl(E, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !d) {
              let E;
              r.add(o);
              try {
                xo(i.imports, (I) => {
                  zl(I, t, n, r) && (E || (E = []), E.push(I));
                });
              } finally {
              }
              void 0 !== E && Id(E, t);
            }
            if (!d) {
              const E = nr(o) || (() => new o());
              t.push(
                { provide: o, useFactory: E, deps: z },
                { provide: bd, useValue: o, multi: !0 },
                { provide: Gl, useValue: () => pt(o), multi: !0 }
              );
            }
            const g = i.providers;
            null == g ||
              d ||
              Wl(g, (I) => {
                t.push(I);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Wl(e, t) {
        for (let n of e)
          te(n) && (n = n.ɵproviders), Array.isArray(n) ? Wl(n, t) : t(n);
      }
      const sv = V({ provide: String, useValue: V });
      function Kl(e) {
        return null !== e && 'object' == typeof e && sv in e;
      }
      function Ai(e) {
        return 'function' == typeof e;
      }
      const Yl = new Lt('Set Injector scope.'),
        Fa = {},
        lv = {};
      let Zl;
      function Na() {
        return void 0 === Zl && (Zl = new Md()), Zl;
      }
      class Ti {}
      class Od extends Ti {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Xl(t, (a) => this.processProvider(a)),
            this.records.set(wd, is(void 0, this)),
            o.has('environment') && this.records.set(Ti, is(void 0, this));
          const i = this.records.get(Yl);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(bd.multi, z, qe.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = Jt(this),
            r = $t(void 0);
          try {
            return t();
          } finally {
            Jt(n), $t(r);
          }
        }
        get(t, n = En, r = qe.Default) {
          this.assertNotDestroyed(), (r = b(r));
          const o = Jt(this),
            i = $t(void 0);
          try {
            if (!(r & qe.SkipSelf)) {
              let d = this.records.get(t);
              if (void 0 === d) {
                const g =
                  (function hv(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof Lt)
                    );
                  })(t) && Mt(t);
                (d = g && this.injectableDefInScope(g) ? is(Jl(t), Fa) : null),
                  this.records.set(t, d);
              }
              if (null != d) return this.hydrate(t, d);
            }
            return (r & qe.Self ? Na() : this.parent).get(
              t,
              (n = r & qe.Optional && n === En ? null : n)
            );
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[rn] = a[rn] || []).unshift(Z(t)), o)) throw a;
              return (function Te(e, t, n, r) {
                const o = e[rn];
                throw (
                  (t[Dn] && o.unshift(t[Dn]),
                  (e.message = (function He(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && e.charAt(1) == Tt
                        ? e.slice(2)
                        : e;
                    let o = Z(t);
                    if (Array.isArray(t)) o = t.map(Z).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let d = t[a];
                          i.push(
                            a +
                              ':' +
                              ('string' == typeof d ? JSON.stringify(d) : Z(d))
                          );
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(
                      Mr,
                      '\n  '
                    )}`;
                  })('\n' + e.message, o, n, r)),
                  (e[Gt] = o),
                  (e[rn] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            $t(i), Jt(o);
          }
        }
        resolveInjectorInitializers() {
          const t = Jt(this),
            n = $t(void 0);
          try {
            const r = this.get(Gl.multi, z, qe.Self);
            for (const o of r) o();
          } finally {
            Jt(t), $t(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Z(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new de(205, !1);
        }
        processProvider(t) {
          let n = Ai((t = L(t))) ? t : L(t && t.provide);
          const r = (function cv(e) {
            return Kl(e) ? is(void 0, e.useValue) : is(Pd(e), Fa);
          })(t);
          if (Ai(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = is(void 0, Fa, !0)),
              (o.factory = () => P(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Fa && ((n.value = lv), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              (function fv(e) {
                return (
                  null !== e &&
                  'object' == typeof e &&
                  'function' == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = L(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Jl(e) {
        const t = Mt(e),
          n = null !== t ? t.factory : nr(e);
        if (null !== n) return n;
        if (e instanceof Lt) throw new de(204, !1);
        if (e instanceof Function)
          return (function uv(e) {
            const t = e.length;
            if (t > 0) throw (Mi(t, '?'), new de(204, !1));
            const n = (function Ve(e) {
              const t = e && (e[fn] || e[kt]);
              return t
                ? ((function Kt(e) {
                    if (e.hasOwnProperty('name')) return e.name;
                    ('' + e).match(/^function\s*([^\s(]+)/);
                  })(e),
                  t)
                : null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new de(204, !1);
      }
      function Pd(e, t, n) {
        let r;
        if (Ai(e)) {
          const o = L(e);
          return nr(o) || Jl(o);
        }
        if (Kl(e)) r = () => L(e.useValue);
        else if (
          (function Td(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...P(e.deps || []));
        else if (
          (function Ad(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => pt(L(e.useExisting));
        else {
          const o = L(e && (e.useClass || e.provide));
          if (
            !(function dv(e) {
              return !!e.deps;
            })(e)
          )
            return nr(o) || Jl(o);
          r = () => new o(...P(e.deps));
        }
        return r;
      }
      function is(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Xl(e, t) {
        for (const n of e)
          Array.isArray(n) ? Xl(n, t) : n && te(n) ? Xl(n.ɵproviders, t) : t(n);
      }
      class pv {}
      class Rd {}
      class mv {
        resolveComponentFactory(t) {
          throw (function gv(e) {
            const t = Error(
              `No component factory found for ${Z(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ks = (() => {
        class e {}
        return (e.NULL = new mv()), e;
      })();
      function vv() {
        return ss(pn(), ye());
      }
      function ss(e, t) {
        return new Ys(Pn(e, t));
      }
      let Ys = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = vv), e;
      })();
      function yv(e) {
        return e instanceof Ys ? e.nativeElement : e;
      }
      class Fd {}
      let Dv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function _v() {
                const e = ye(),
                  n = Ft(pn().index, e);
                return (ln(n) ? n : e)[ut];
              })()),
            e
          );
        })(),
        Cv = (() => {
          class e {}
          return (
            (e.ɵprov = Oe({
              token: e,
              providedIn: 'root',
              factory: () => null,
            })),
            e
          );
        })();
      class Nd {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Ev = new Nd('15.2.3'),
        Ql = {},
        ql = 'ngOriginalError';
      function eu(e) {
        return e[ql];
      }
      class Zs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && eu(t);
          for (; n && eu(n); ) n = eu(n);
          return n || null;
        }
      }
      function Ld(e) {
        return e.ownerDocument.defaultView;
      }
      function kd(e) {
        return e.ownerDocument;
      }
      function ko(e) {
        return e instanceof Function ? e() : e;
      }
      function Bd(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Ud = 'ng-template';
      function Pv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && 'class' === o) {
            if (((o = e[r]), -1 !== Bd(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && 'string' == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Hd(e) {
        return 4 === e.type && e.value !== Ud;
      }
      function Rv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Ud);
      }
      function xv(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function Lv(e) {
            for (let t = 0; t < e.length; t++) if (xr(e[t])) return t;
            return e.length;
          })(o);
        let a = !1;
        for (let d = 0; d < t.length; d++) {
          const g = t[d];
          if ('number' != typeof g) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== g && !Rv(e, g, n)) || ('' === g && 1 === t.length))
                ) {
                  if (Jr(r)) return !1;
                  a = !0;
                }
              } else {
                const E = 8 & r ? g : t[++d];
                if (8 & r && null !== e.attrs) {
                  if (!Pv(e.attrs, E, n)) {
                    if (Jr(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const x = Fv(8 & r ? 'class' : g, o, Hd(e), n);
                if (-1 === x) {
                  if (Jr(r)) return !1;
                  a = !0;
                  continue;
                }
                if ('' !== E) {
                  let K;
                  K = x > i ? '' : o[x + 1].toLowerCase();
                  const ee = 8 & r ? K : null;
                  if ((ee && -1 !== Bd(ee, E, 0)) || (2 & r && E !== K)) {
                    if (Jr(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !Jr(r) && !Jr(g)) return !1;
            if (a && Jr(g)) continue;
            (a = !1), (r = g | (1 & r));
          }
        }
        return Jr(r) || a;
      }
      function Jr(e) {
        return 0 == (1 & e);
      }
      function Fv(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const a = t[o];
            if (a === e) return o;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let d = t[++o];
                for (; 'string' == typeof d; ) d = t[++o];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function kv(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function jd(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (xv(e, t[r], n)) return !0;
        return !1;
      }
      function Vv(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function $d(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Bv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = '',
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ('string' == typeof a)
            if (2 & r) {
              const d = e[++n];
              o += '[' + a + (d.length > 0 ? '="' + d + '"' : '') + ']';
            } else 8 & r ? (o += '.' + a) : 4 & r && (o += ' ' + a);
          else
            '' !== o && !Jr(a) && ((t += $d(i, o)), (o = '')),
              (r = a),
              (i = i || !Jr(r));
          n++;
        }
        return '' !== o && (t += $d(i, o)), t;
      }
      const ht = {};
      function Gd(e) {
        zd(mt(), ye(), _n() + e, !1);
      }
      function zd(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[dt])) {
            const i = e.preOrderCheckHooks;
            null !== i && Di(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && f(t, i, 0, n);
          }
        fo(n);
      }
      function Zd(e, t = null, n = null, r) {
        const o = Jd(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Jd(e, t = null, n = null, r, o = new Set()) {
        const i = [n || z, iv(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : Z(e))),
          new Od(i, t || Na(), r || null, o)
        );
      }
      let Oi = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return Zd({ name: '' }, r, n, '');
            {
              const o = n.name ?? '';
              return Zd({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = En),
          (e.NULL = new Md()),
          (e.ɵprov = Oe({
            token: e,
            providedIn: 'any',
            factory: () => pt(wd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function us(e, t = qe.Default) {
        const n = ye();
        return null === n ? pt(e, t) : ma(pn(), n, L(e), t);
      }
      function rf() {
        throw new Error('invalid');
      }
      function sf(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              Xo(n[r]), a.contentQueries(2, t[i], i);
            }
          }
      }
      function ka(e, t, n, r, o, i, a, d, g, E, I) {
        const x = t.blueprint.slice();
        return (
          (x[tn] = o),
          (x[dt] = 76 | r),
          (null !== I || (e && 1024 & e[dt])) && (x[dt] |= 1024),
          Jo(x),
          (x[Rt] = x[bn] = e),
          (x[Pt] = n),
          (x[Br] = a || (e && e[Br])),
          (x[ut] = d || (e && e[ut])),
          (x[qn] = g || (e && e[qn]) || null),
          (x[no] = E || (e && e[no]) || null),
          (x[xt] = i),
          (x[dr] = (function nm() {
            return tm++;
          })()),
          (x[Ho] = I),
          (x[Qt] = 2 == t.type ? e[Qt] : x),
          x
        );
      }
      function cs(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function iu(e, t, n, r, o) {
            const i = ca(),
              a = lo(),
              g = (e.data[t] = (function dy(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tView: null,
                  next: null,
                  prev: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = g),
              null !== i &&
                (a
                  ? null == i.child && null !== g.parent && (i.child = g)
                  : null === i.next && ((i.next = g), (g.prev = i))),
              g
            );
          })(e, t, n, r, o)),
            (function ji() {
              return lt.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const a = (function ao() {
            const e = lt.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return Wn(i, !0), i;
      }
      function Js(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function su(e, t, n) {
        Gi(t);
        try {
          const r = e.viewQuery;
          null !== r && mu(1, r, n);
          const o = e.template;
          null !== o && af(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && sf(e, t),
            e.staticViewQueries && mu(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function ly(e, t) {
              for (let n = 0; n < t.length; n++) Oy(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[dt] &= -5), co();
        }
      }
      function Va(e, t, n, r) {
        const o = t[dt];
        if (128 != (128 & o)) {
          Gi(t);
          try {
            Jo(t),
              (function Hi(e) {
                return (lt.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && af(e, t, n, 2, r);
            const a = 3 == (3 & o);
            if (a) {
              const E = e.preOrderCheckHooks;
              null !== E && Di(t, E, null);
            } else {
              const E = e.preOrderHooks;
              null !== E && f(t, E, 0, null), w(t, 0);
            }
            if (
              ((function Ay(e) {
                for (let t = Il(e); null !== t; t = Al(t)) {
                  if (!t[si]) continue;
                  const n = t[fr];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    512 & o[dt] || Pr(o[Rt], 1), (o[dt] |= 512);
                  }
                }
              })(t),
              (function Iy(e) {
                for (let t = Il(e); null !== t; t = Al(t))
                  for (let n = hn; n < t.length; n++) {
                    const r = t[n],
                      o = r[ze];
                    yr(r) && Va(o, r, o.template, r[Pt]);
                  }
              })(t),
              null !== e.contentQueries && sf(e, t),
              a)
            ) {
              const E = e.contentCheckHooks;
              null !== E && Di(t, E);
            } else {
              const E = e.contentHooks;
              null !== E && f(t, E, 1), w(t, 1);
            }
            !(function sy(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) fo(~o);
                    else {
                      const i = o,
                        a = n[++r],
                        d = n[++r];
                      As(a, i), d(2, t[i]);
                    }
                  }
                } finally {
                  fo(-1);
                }
            })(e, t);
            const d = e.components;
            null !== d &&
              (function ay(e, t) {
                for (let n = 0; n < t.length; n++) Ty(e, t[n]);
              })(t, d);
            const g = e.viewQuery;
            if ((null !== g && mu(2, g, r), a)) {
              const E = e.viewCheckHooks;
              null !== E && Di(t, E);
            } else {
              const E = e.viewHooks;
              null !== E && f(t, E, 2), w(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[dt] &= -41),
              512 & t[dt] && ((t[dt] &= -513), Pr(t[Rt], -1));
          } finally {
            co();
          }
        }
      }
      function af(e, t, n, r, o) {
        const i = _n(),
          a = 2 & r;
        try {
          fo(-1),
            a && t.length > gt && zd(e, t, gt, !1),
            Mn(a ? 2 : 0, o),
            n(r, o);
        } finally {
          fo(i), Mn(a ? 3 : 1, o);
        }
      }
      function au(e, t, n) {
        if (jr(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        }
      }
      function lu(e, t, n) {
        et() &&
          ((function vy(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            Ir(n) &&
              (function by(e, t, n) {
                const r = Pn(t, e),
                  o = lf(n),
                  i = e[Br],
                  a = Ba(
                    e,
                    ka(
                      e,
                      o,
                      null,
                      n.onPush ? 32 : 16,
                      r,
                      t,
                      i,
                      i.createRenderer(r, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || Ji(n, t),
              Gn(r, t);
            const a = n.initialInputs;
            for (let d = o; d < i; d++) {
              const g = e.data[d],
                E = Nr(t, e, d, n);
              Gn(E, t),
                null !== a && My(0, d - o, E, g, 0, a),
                On(g) && (Ft(n.index, t)[Pt] = Nr(t, e, d, n));
            }
          })(e, t, n, Pn(n, t)),
          64 == (64 & n.flags) && pf(e, t, n));
      }
      function uu(e, t, n = Pn) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              d = -1 === a ? n(t, e) : e[a];
            e[o++] = d;
          }
        }
      }
      function lf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = cu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function cu(e, t, n, r, o, i, a, d, g, E) {
        const I = gt + r,
          x = I + o,
          K = (function uy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : ht);
            return n;
          })(I, x),
          ee = 'function' == typeof E ? E() : E;
        return (K[ze] = {
          type: e,
          blueprint: K,
          template: n,
          queries: null,
          viewQuery: d,
          declTNode: t,
          data: K.slice().fill(null, I),
          bindingStartIndex: I,
          expandoStartIndex: x,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof a ? a() : a,
          firstChild: null,
          schemas: g,
          consts: ee,
          incompleteFirstPass: !1,
        });
      }
      function uf(e, t, n, r) {
        const o = mf(t);
        null === n
          ? o.push(r)
          : (o.push(n), e.firstCreatePass && vf(e).push(r, o.length - 1));
      }
      function cf(e, t, n, r) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            n = null === n ? {} : n;
            const i = e[o];
            null === r
              ? df(n, t, o, i)
              : r.hasOwnProperty(o) && df(n, t, r[o], i);
          }
        return n;
      }
      function df(e, t, n, r) {
        e.hasOwnProperty(n) ? e[n].push(t, r) : (e[n] = [t, r]);
      }
      function br(e, t, n, r, o, i, a, d) {
        const g = Pn(t, n);
        let I,
          E = t.inputs;
        !d && null != E && (I = E[r])
          ? (vu(e, n, I, r, o), Ir(t) && ff(n, t.index))
          : 3 & t.type &&
            ((r = (function hy(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (o = null != a ? a(o, t.value || '', r) : o),
            i.setProperty(g, r, o));
      }
      function ff(e, t) {
        const n = Ft(t, e);
        16 & n[dt] || (n[dt] |= 32);
      }
      function du(e, t, n, r) {
        if (et()) {
          const o = null === r ? null : { '': -1 },
            i = (function Dy(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const a = n[i];
                  if (jd(t, a.selectors, !1))
                    if ((r || (r = []), On(a)))
                      if (null !== a.findHostDirectiveDefs) {
                        const d = [];
                        (o = o || new Map()),
                          a.findHostDirectiveDefs(a, d, o),
                          r.unshift(...d, a),
                          fu(e, t, d.length);
                      } else r.unshift(a), fu(e, t, 0);
                    else
                      (o = o || new Map()),
                        a.findHostDirectiveDefs?.(a, r, o),
                        r.push(a);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let a, d;
          null === i ? (a = d = null) : ([a, d] = i),
            null !== a && hf(e, t, n, a, o, d),
            o &&
              (function _y(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new de(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = kn(n.mergedAttrs, n.attrs);
      }
      function hf(e, t, n, r, o, i) {
        for (let E = 0; E < r.length; E++) ks(Ji(n, t), e, r[E].type);
        !(function Ey(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let E = 0; E < r.length; E++) {
          const I = r[E];
          I.providersResolver && I.providersResolver(I);
        }
        let a = !1,
          d = !1,
          g = Js(e, t, r.length, null);
        for (let E = 0; E < r.length; E++) {
          const I = r[E];
          (n.mergedAttrs = kn(n.mergedAttrs, I.hostAttrs)),
            wy(e, n, t, g, I),
            Cy(g, I, o),
            null !== I.contentQueries && (n.flags |= 4),
            (null !== I.hostBindings ||
              null !== I.hostAttrs ||
              0 !== I.hostVars) &&
              (n.flags |= 64);
          const x = I.type.prototype;
          !a &&
            (x.ngOnChanges || x.ngOnInit || x.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (a = !0)),
            !d &&
              (x.ngOnChanges || x.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                n.index
              ),
              (d = !0)),
            g++;
        }
        !(function fy(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            a = t.attrs,
            d = [];
          let g = null,
            E = null;
          for (let I = t.directiveStart; I < o; I++) {
            const x = i[I],
              K = n ? n.get(x) : null,
              pe = K ? K.outputs : null;
            (g = cf(x.inputs, I, g, K ? K.inputs : null)),
              (E = cf(x.outputs, I, E, pe));
            const Ae = null === g || null === a || Hd(t) ? null : Sy(g, I, a);
            d.push(Ae);
          }
          null !== g &&
            (g.hasOwnProperty('class') && (t.flags |= 8),
            g.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = d),
            (t.inputs = g),
            (t.outputs = E);
        })(e, n, i);
      }
      function pf(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          a = (function mi() {
            return lt.lFrame.currentDirectiveIndex;
          })();
        try {
          fo(i);
          for (let d = r; d < o; d++) {
            const g = e.data[d],
              E = t[d];
            Io(d),
              (null !== g.hostBindings ||
                0 !== g.hostVars ||
                null !== g.hostAttrs) &&
                yy(g, E);
          }
        } finally {
          fo(-1), Io(a);
        }
      }
      function yy(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function fu(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function Cy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          On(t) && (n[''] = e);
        }
      }
      function wy(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = nr(o.type)),
          a = new ne(i, On(o), us);
        (e.blueprint[r] = a),
          (n[r] = a),
          (function gy(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let a = e.hostBindingOpCodes;
              null === a && (a = e.hostBindingOpCodes = []);
              const d = ~t.index;
              (function my(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(a) != d && a.push(d),
                a.push(n, r, i);
            }
          })(e, t, r, Js(e, n, o.hostVars, ht), o);
      }
      function go(e, t, n, r, o, i) {
        const a = Pn(e, t);
        !(function hu(e, t, n, r, o, i, a) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const d = null == a ? Me(i) : a(i, r || '', o);
            e.setAttribute(t, o, d, n);
          }
        })(t[ut], a, i, e.value, n, r, o);
      }
      function My(e, t, n, r, o, i) {
        const a = i[t];
        if (null !== a) {
          const d = r.setInput;
          for (let g = 0; g < a.length; ) {
            const E = a[g++],
              I = a[g++],
              x = a[g++];
            null !== d ? r.setInput(n, x, E, I) : (n[I] = x);
          }
        }
      }
      function Sy(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const a = e[i];
                for (let d = 0; d < a.length; d += 2)
                  if (a[d] === t) {
                    r.push(i, a[d + 1], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function gf(e, t, n, r) {
        return [e, !0, !1, t, null, 0, r, n, null, null];
      }
      function Ty(e, t) {
        const n = Ft(t, e);
        if (yr(n)) {
          const r = n[ze];
          48 & n[dt] ? Va(r, n, r.template, n[Pt]) : n[xn] > 0 && pu(n);
        }
      }
      function pu(e) {
        for (let r = Il(e); null !== r; r = Al(r))
          for (let o = hn; o < r.length; o++) {
            const i = r[o];
            if (yr(i))
              if (512 & i[dt]) {
                const a = i[ze];
                Va(a, i, a.template, i[Pt]);
              } else i[xn] > 0 && pu(i);
          }
        const n = e[ze].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = Ft(n[r], e);
            yr(o) && o[xn] > 0 && pu(o);
          }
      }
      function Oy(e, t) {
        const n = Ft(t, e),
          r = n[ze];
        (function Py(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          su(r, n, n[Pt]);
      }
      function Ba(e, t) {
        return e[an] ? (e[ro][sn] = t) : (e[an] = t), (e[ro] = t), t;
      }
      function gu(e) {
        for (; e; ) {
          e[dt] |= 32;
          const t = $s(e);
          if (Ar(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Ua(e, t, n, r = !0) {
        const o = t[Br];
        o.begin && o.begin();
        try {
          Va(e, t, e.template, n);
        } catch (a) {
          throw (r && Df(t, a), a);
        } finally {
          o.end && o.end();
        }
      }
      function mu(e, t, n) {
        Xo(0), t(e, n);
      }
      function mf(e) {
        return e[Qn] || (e[Qn] = []);
      }
      function vf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Df(e, t) {
        const n = e[no],
          r = n ? n.get(Zs, null) : null;
        r && r.handleError(t);
      }
      function vu(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            d = n[i++],
            g = t[a],
            E = e.data[a];
          null !== E.setInput ? E.setInput(g, o, r, d) : (g[d] = o);
        }
      }
      function Vo(e, t, n) {
        const r = rr(t, e);
        !(function Yc(e, t, n) {
          e.setValue(t, n);
        })(e[ut], r, n);
      }
      function Ha(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const d = t[a];
            'number' == typeof d
              ? (i = d)
              : 1 == i
              ? (o = X(o, d))
              : 2 == i && (r = X(r, d + ': ' + t[++a] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function ja(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(jt(i)), Fn(i)))
            for (let d = hn; d < i.length; d++) {
              const g = i[d],
                E = g[ze].firstChild;
              null !== E && ja(g[ze], g, E, r);
            }
          const a = n.type;
          if (8 & a) ja(e, t, n.child, r);
          else if (32 & a) {
            const d = Sl(n, t);
            let g;
            for (; (g = d()); ) r.push(g);
          } else if (16 & a) {
            const d = id(t, n);
            if (Array.isArray(d)) r.push(...d);
            else {
              const g = $s(t[Qt]);
              ja(g[ze], g, d, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class Xs {
        get rootNodes() {
          const t = this._lView,
            n = t[ze];
          return ja(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Pt];
        }
        set context(t) {
          this._lView[Pt] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[dt]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Rt];
            if (Fn(t)) {
              const n = t[Hr],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Pl(t, r), qi(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Jc(this._lView[ze], this._lView);
        }
        onDestroy(t) {
          uf(this._lView[ze], this._lView, null, t);
        }
        markForCheck() {
          gu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[dt] &= -65;
        }
        reattach() {
          this._lView[dt] |= 64;
        }
        detectChanges() {
          Ua(this._lView[ze], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new de(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function vm(e, t) {
              Gs(e, t, t[ut], 2, null, null);
            })(this._lView[ze], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new de(902, !1);
          this._appRef = t;
        }
      }
      class Ry extends Xs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Ua(t[ze], t, t[Pt], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class _f extends Ks {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = wt(t);
          return new Qs(n, this.ngModule);
        }
      }
      function Cf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Fy {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = b(r);
          const o = this.injector.get(t, Ql, r);
          return o !== Ql || n === Ql ? o : this.parentInjector.get(t, n, r);
        }
      }
      class Qs extends Rd {
        get inputs() {
          return Cf(this.componentDef.inputs);
        }
        get outputs() {
          return Cf(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Uv(e) {
              return e.map(Bv).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof Ti ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const a = i ? new Fy(t, i) : t,
            d = a.get(Fd, null);
          if (null === d) throw new de(407, !1);
          const g = a.get(Cv, null),
            E = d.createRenderer(null, this.componentDef),
            I = this.componentDef.selectors[0][0] || 'div',
            x = r
              ? (function cy(e, t, n) {
                  return e.selectRootElement(t, n === Et.ShadowDom);
                })(E, r, this.componentDef.encapsulation)
              : Ol(
                  E,
                  I,
                  (function xy(e) {
                    const t = e.toLowerCase();
                    return 'svg' === t ? So : 'math' === t ? 'math' : null;
                  })(I)
                ),
            K = this.componentDef.onPush ? 288 : 272,
            ee = cu(0, null, null, 1, 0, null, null, null, null, null),
            pe = ka(null, ee, null, K, null, null, d, E, g, a, null);
          let Ae, Ge;
          Gi(pe);
          try {
            const Qe = this.componentDef;
            let at,
              Ce = null;
            Qe.findHostDirectiveDefs
              ? ((at = []),
                (Ce = new Map()),
                Qe.findHostDirectiveDefs(Qe, at, Ce),
                at.push(Qe))
              : (at = [Qe]);
            const ft = (function Ly(e, t) {
                const n = e[ze],
                  r = gt;
                return (e[r] = t), cs(n, r, 2, '#host', null);
              })(pe, x),
              qt = (function ky(e, t, n, r, o, i, a, d) {
                const g = o[ze];
                !(function Vy(e, t, n, r) {
                  for (const o of e)
                    t.mergedAttrs = kn(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    (Ha(t, t.mergedAttrs, !0), null !== n && ld(r, n, t));
                })(r, e, t, a);
                const E = i.createRenderer(t, n),
                  I = ka(
                    o,
                    lf(n),
                    null,
                    n.onPush ? 32 : 16,
                    o[e.index],
                    e,
                    i,
                    E,
                    d || null,
                    null,
                    null
                  );
                return (
                  g.firstCreatePass && fu(g, e, r.length - 1),
                  Ba(o, I),
                  (o[e.index] = I)
                );
              })(ft, x, Qe, at, pe, d, E);
            (Ge = Zo(ee, gt)),
              x &&
                (function Uy(e, t, n, r) {
                  if (r) nn(e, n, ['ng-version', Ev.full]);
                  else {
                    const { attrs: o, classes: i } = (function Hv(e) {
                      const t = [],
                        n = [];
                      let r = 1,
                        o = 2;
                      for (; r < e.length; ) {
                        let i = e[r];
                        if ('string' == typeof i)
                          2 === o
                            ? '' !== i && t.push(i, e[++r])
                            : 8 === o && n.push(i);
                        else {
                          if (!Jr(o)) break;
                          o = i;
                        }
                        r++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    o && nn(e, n, o),
                      i && i.length > 0 && ad(e, n, i.join(' '));
                  }
                })(E, Qe, x, r),
              void 0 !== n &&
                (function Hy(e, t, n) {
                  const r = (e.projection = []);
                  for (let o = 0; o < t.length; o++) {
                    const i = n[o];
                    r.push(null != i ? Array.from(i) : null);
                  }
                })(Ge, this.ngContentSelectors, n),
              (Ae = (function By(e, t, n, r, o, i) {
                const a = pn(),
                  d = o[ze],
                  g = Pn(a, o);
                hf(d, o, a, n, null, r);
                for (let I = 0; I < n.length; I++)
                  Gn(Nr(o, d, a.directiveStart + I, a), o);
                pf(d, o, a), g && Gn(g, o);
                const E = Nr(o, d, a.directiveStart + a.componentOffset, a);
                if (((e[Pt] = o[Pt] = E), null !== i))
                  for (const I of i) I(E, t);
                return au(d, a, e), E;
              })(qt, Qe, at, Ce, pe, [jy])),
              su(ee, pe, null);
          } finally {
            co();
          }
          return new Ny(this.componentType, Ae, ss(Ge, pe), pe, Ge);
        }
      }
      class Ny extends pv {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Ry(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            vu(i[ze], i, o, t, n), ff(i, this._tNode.index);
          }
        }
        get injector() {
          return new Ci(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function jy() {
        const e = pn();
        yi(ye()[ze], e);
      }
      function yu(e) {
        let t = (function Ef(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (On(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new de(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const a = e;
              (a.inputs = Du(e.inputs)),
                (a.declaredInputs = Du(e.declaredInputs)),
                (a.outputs = Du(e.outputs));
              const d = o.hostBindings;
              d && Wy(e, d);
              const g = o.viewQuery,
                E = o.contentQueries;
              if (
                (g && Gy(e, g),
                E && zy(e, E),
                $(e.inputs, o.inputs),
                $(e.declaredInputs, o.declaredInputs),
                $(e.outputs, o.outputs),
                On(o) && o.data.animation)
              ) {
                const I = e.data;
                I.animation = (I.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const d = i[a];
                d && d.ngInherit && d(e), d === yu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function $y(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = kn(o.hostAttrs, (n = kn(n, o.hostAttrs))));
          }
        })(r);
      }
      function Du(e) {
        return e === on ? {} : e === z ? [] : e;
      }
      function Gy(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function zy(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function Wy(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function $a(e) {
        return (
          !!_u(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function _u(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function mo(e, t, n) {
        return (e[t] = n);
      }
      function zn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Pi(e, t, n, r) {
        const o = zn(e, t, n);
        return zn(e, t + 1, r) || o;
      }
      function Ga(e, t, n, r, o) {
        const i = Pi(e, t, n, r);
        return zn(e, t + 2, o) || i;
      }
      function kr(e, t, n, r, o, i) {
        const a = Pi(e, t, n, r);
        return Pi(e, t + 2, o, i) || a;
      }
      function Cu(e, t, n, r) {
        const o = ye();
        return zn(o, uo(), t) && (mt(), go(zt(), o, e, t, n, r)), Cu;
      }
      function fs(e, t, n, r) {
        return zn(e, uo(), n) ? t + Me(n) + r : ht;
      }
      function Nf(e, t, n, r, o, i, a, d) {
        const g = ye(),
          E = mt(),
          I = e + gt,
          x = E.firstCreatePass
            ? (function nD(e, t, n, r, o, i, a, d, g) {
                const E = t.consts,
                  I = cs(t, e, 4, a || null, Dr(E, d));
                du(t, n, I, Dr(E, g)), yi(t, I);
                const x = (I.tView = cu(
                  2,
                  I,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  E
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, I),
                    (x.queries = t.queries.embeddedTView(I))),
                  I
                );
              })(I, E, g, t, n, r, o, i, a)
            : E.data[I];
        Wn(x, !1);
        const K = g[ut].createComment('');
        Aa(E, g, K, x),
          Gn(K, g),
          Ba(g, (g[I] = gf(K, g, K, x))),
          tr(x) && lu(E, g, x),
          null != a && uu(g, x, d);
      }
      function Lf(e) {
        return vr(
          (function Bi() {
            return lt.lFrame.contextLView;
          })(),
          gt + e
        );
      }
      function Eu(e, t, n) {
        const r = ye();
        return zn(r, uo(), t) && br(mt(), zt(), r, e, t, r[ut], n, !1), Eu;
      }
      function wu(e, t, n, r, o) {
        const a = o ? 'class' : 'style';
        vu(e, n, t.inputs[a], a, r);
      }
      function za(e, t, n, r) {
        const o = ye(),
          i = mt(),
          a = gt + e,
          d = o[ut],
          g = i.firstCreatePass
            ? (function oD(e, t, n, r, o, i) {
                const a = t.consts,
                  g = cs(t, e, 2, r, Dr(a, o));
                return (
                  du(t, n, g, Dr(a, i)),
                  null !== g.attrs && Ha(g, g.attrs, !1),
                  null !== g.mergedAttrs && Ha(g, g.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, g),
                  g
                );
              })(a, i, o, t, n, r)
            : i.data[a],
          E = (o[a] = Ol(
            d,
            t,
            (function fa() {
              return lt.lFrame.currentNamespace;
            })()
          )),
          I = tr(g);
        return (
          Wn(g, !0),
          ld(d, E, g),
          32 != (32 & g.flags) && Aa(i, o, E, g),
          0 ===
            (function m() {
              return lt.lFrame.elementDepthCount;
            })() && Gn(E, o),
          (function A() {
            lt.lFrame.elementDepthCount++;
          })(),
          I && (lu(i, o, g), au(i, g, o)),
          null !== r && uu(o, g),
          za
        );
      }
      function Wa() {
        let e = pn();
        lo() ? Rr() : ((e = e.parent), Wn(e, !1));
        const t = e;
        !(function ae() {
          lt.lFrame.elementDepthCount--;
        })();
        const n = mt();
        return (
          n.firstCreatePass && (yi(n, e), jr(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Ot(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            wu(n, t, ye(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function vt(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            wu(n, t, ye(), t.stylesWithoutHost, !1),
          Wa
        );
      }
      function bu(e, t, n, r) {
        return za(e, t, n, r), Wa(), bu;
      }
      function Ka(e, t, n) {
        const r = ye(),
          o = mt(),
          i = e + gt,
          a = o.firstCreatePass
            ? (function iD(e, t, n, r, o) {
                const i = t.consts,
                  a = Dr(i, r),
                  d = cs(t, e, 8, 'ng-container', a);
                return (
                  null !== a && Ha(d, a, !0),
                  du(t, n, d, Dr(i, o)),
                  null !== t.queries && t.queries.elementStart(t, d),
                  d
                );
              })(i, o, r, t, n)
            : o.data[i];
        Wn(a, !0);
        const d = (r[i] = r[ut].createComment(''));
        return (
          Aa(o, r, d, a),
          Gn(d, r),
          tr(a) && (lu(o, r, a), au(o, a, r)),
          null != n && uu(r, a),
          Ka
        );
      }
      function Ya() {
        let e = pn();
        const t = mt();
        return (
          lo() ? Rr() : ((e = e.parent), Wn(e, !1)),
          t.firstCreatePass && (yi(t, e), jr(e) && t.queries.elementEnd(e)),
          Ya
        );
      }
      function Mu(e, t, n) {
        return Ka(e, t, n), Ya(), Mu;
      }
      function kf() {
        return ye();
      }
      function Su(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Vf(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Bf = Vf;
      function Iu(e, t, n, r) {
        const o = ye(),
          i = mt(),
          a = pn();
        return (
          (function Hf(e, t, n, r, o, i, a) {
            const d = tr(r),
              E = e.firstCreatePass && vf(e),
              I = t[Pt],
              x = mf(t);
            let K = !0;
            if (3 & r.type || a) {
              const Ae = Pn(r, t),
                Ge = a ? a(Ae) : Ae,
                Qe = x.length,
                at = a ? (ft) => a(jt(ft[r.index])) : r.index;
              let Ce = null;
              if (
                (!a &&
                  d &&
                  (Ce = (function sD(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const a = o[i];
                        if (a === n && o[i + 1] === r) {
                          const d = t[Qn],
                            g = o[i + 2];
                          return d.length > g ? d[g] : null;
                        }
                        'string' == typeof a && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== Ce)
              )
                ((Ce.__ngLastListenerFn__ || Ce).__ngNextListenerFn__ = i),
                  (Ce.__ngLastListenerFn__ = i),
                  (K = !1);
              else {
                i = $f(r, t, I, i, !1);
                const ft = n.listen(Ge, o, i);
                x.push(i, ft), E && E.push(o, at, Qe, Qe + 1);
              }
            } else i = $f(r, t, I, i, !1);
            const ee = r.outputs;
            let pe;
            if (K && null !== ee && (pe = ee[o])) {
              const Ae = pe.length;
              if (Ae)
                for (let Ge = 0; Ge < Ae; Ge += 2) {
                  const qt = t[pe[Ge]][pe[Ge + 1]].subscribe(i),
                    vn = x.length;
                  x.push(i, qt), E && E.push(o, r.index, vn, -(vn + 1));
                }
            }
          })(i, o, o[ut], a, e, t, r),
          Iu
        );
      }
      function jf(e, t, n, r) {
        try {
          return Mn(6, t, n), !1 !== n(r);
        } catch (o) {
          return Df(e, o), !1;
        } finally {
          Mn(7, t, n);
        }
      }
      function $f(e, t, n, r, o) {
        return function i(a) {
          if (a === Function) return r;
          gu(e.componentOffset > -1 ? Ft(e.index, t) : t);
          let g = jf(t, n, r, a),
            E = i.__ngNextListenerFn__;
          for (; E; ) (g = jf(t, n, E, a) && g), (E = E.__ngNextListenerFn__);
          return o && !1 === g && (a.preventDefault(), (a.returnValue = !1)), g;
        };
      }
      function Gf(e = 1) {
        return (function Ts(e) {
          return (lt.lFrame.contextLView = (function Oo(e, t) {
            for (; e > 0; ) (t = t[bn]), e--;
            return t;
          })(e, lt.lFrame.contextLView))[Pt];
        })(e);
      }
      function aD(e, t) {
        let n = null;
        const r = (function Nv(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          if ('*' !== i) {
            if (null === r ? jd(e, i, !0) : Vv(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function zf(e) {
        const t = ye()[Qt][xt];
        if (!t.projection) {
          const r = (t.projection = Mi(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            const a = e ? aD(i, e) : 0;
            null !== a &&
              (o[a] ? (o[a].projectionNext = i) : (r[a] = i), (o[a] = i)),
              (i = i.next);
          }
        }
      }
      function Wf(e, t = 0, n) {
        const r = ye(),
          o = mt(),
          i = cs(o, gt + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          Rr(),
          32 != (32 & i.flags) &&
            (function Mm(e, t, n) {
              sd(t[ut], 0, t, n, Xc(e, n, t), td(n.parent || t[xt], n, t));
            })(o, r, i);
      }
      function Au(e, t, n) {
        return Tu(e, '', t, '', n), Au;
      }
      function Tu(e, t, n, r, o) {
        const i = ye(),
          a = fs(i, t, n, r);
        return a !== ht && br(mt(), zt(), i, e, a, i[ut], o, !1), Tu;
      }
      function Za(e, t) {
        return (e << 17) | (t << 2);
      }
      function ri(e) {
        return (e >> 17) & 32767;
      }
      function Ou(e) {
        return 2 | e;
      }
      function Ri(e) {
        return (131068 & e) >> 2;
      }
      function Pu(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Ru(e) {
        return 1 | e;
      }
      function th(e, t, n, r, o) {
        const i = e[n + 1],
          a = null === t;
        let d = r ? ri(i) : Ri(i),
          g = !1;
        for (; 0 !== d && (!1 === g || a); ) {
          const I = e[d + 1];
          hD(e[d], t) && ((g = !0), (e[d + 1] = r ? Ru(I) : Ou(I))),
            (d = r ? ri(I) : Ri(I));
        }
        g && (e[n + 1] = r ? Ou(i) : Ru(i));
      }
      function hD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && c(e, t) >= 0)
        );
      }
      const Sn = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function nh(e) {
        return e.substring(Sn.key, Sn.keyEnd);
      }
      function rh(e, t) {
        const n = Sn.textEnd;
        return n === t
          ? -1
          : ((t = Sn.keyEnd =
              (function vD(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (Sn.key = t), n)),
            _s(e, t, n));
      }
      function _s(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function xu(e, t, n) {
        return Xr(e, t, n, !1), xu;
      }
      function Fu(e, t) {
        return Xr(e, t, null, !0), Fu;
      }
      function lh(e) {
        Qr(sr, yo, e, !0);
      }
      function yo(e, t) {
        for (
          let n = (function gD(e) {
            return (
              (function ih(e) {
                (Sn.key = 0),
                  (Sn.keyEnd = 0),
                  (Sn.value = 0),
                  (Sn.valueEnd = 0),
                  (Sn.textEnd = e.length);
              })(e),
              rh(e, _s(e, 0, Sn.textEnd))
            );
          })(t);
          n >= 0;
          n = rh(t, n)
        )
          sr(e, nh(t), !0);
      }
      function Xr(e, t, n, r) {
        const o = ye(),
          i = mt(),
          a = or(2);
        i.firstUpdatePass && ch(i, e, a, r),
          t !== ht &&
            zn(o, a, t) &&
            fh(
              i,
              i.data[_n()],
              o,
              o[ut],
              e,
              (o[a + 1] = (function ID(e, t) {
                return (
                  null == e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = Z(No(e)))),
                  e
                );
              })(t, n)),
              r,
              a
            );
      }
      function Qr(e, t, n, r) {
        const o = mt(),
          i = or(2);
        o.firstUpdatePass && ch(o, null, i, r);
        const a = ye();
        if (n !== ht && zn(a, i, n)) {
          const d = o.data[_n()];
          if (ph(d, r) && !uh(o, i)) {
            let g = r ? d.classesWithoutHost : d.stylesWithoutHost;
            null !== g && (n = X(g, n || '')), wu(o, d, a, n, r);
          } else
            !(function SD(e, t, n, r, o, i, a, d) {
              o === ht && (o = z);
              let g = 0,
                E = 0,
                I = 0 < o.length ? o[0] : null,
                x = 0 < i.length ? i[0] : null;
              for (; null !== I || null !== x; ) {
                const K = g < o.length ? o[g + 1] : void 0,
                  ee = E < i.length ? i[E + 1] : void 0;
                let Ae,
                  pe = null;
                I === x
                  ? ((g += 2), (E += 2), K !== ee && ((pe = x), (Ae = ee)))
                  : null === x || (null !== I && I < x)
                  ? ((g += 2), (pe = I))
                  : ((E += 2), (pe = x), (Ae = ee)),
                  null !== pe && fh(e, t, n, r, pe, Ae, a, d),
                  (I = g < o.length ? o[g] : null),
                  (x = E < i.length ? i[E] : null);
              }
            })(
              o,
              d,
              a,
              a[ut],
              a[i + 1],
              (a[i + 1] = (function MD(e, t, n) {
                if (null == n || '' === n) return z;
                const r = [],
                  o = No(n);
                if (Array.isArray(o))
                  for (let i = 0; i < o.length; i++) e(r, o[i], !0);
                else if ('object' == typeof o)
                  for (const i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
                else 'string' == typeof o && t(r, o);
                return r;
              })(e, t, n)),
              r,
              i
            );
        }
      }
      function uh(e, t) {
        return t >= e.expandoStartIndex;
      }
      function ch(e, t, n, r) {
        const o = e.data;
        if (null === o[n + 1]) {
          const i = o[_n()],
            a = uh(e, n);
          ph(i, r) && null === t && !a && (t = !1),
            (t = (function CD(e, t, n, r) {
              const o = (function Ao(e) {
                const t = lt.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let i = r ? t.residualClasses : t.residualStyles;
              if (null === o)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = ea((n = Nu(null, e, t, n, r)), t.attrs, r)),
                  (i = null));
              else {
                const a = t.directiveStylingLast;
                if (-1 === a || e[a] !== o)
                  if (((n = Nu(o, e, t, n, r)), null === i)) {
                    let g = (function ED(e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Ri(r)) return e[ri(r)];
                    })(e, t, r);
                    void 0 !== g &&
                      Array.isArray(g) &&
                      ((g = Nu(null, e, t, g[1], r)),
                      (g = ea(g, t.attrs, r)),
                      (function wD(e, t, n, r) {
                        e[ri(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, g));
                  } else
                    i = (function bD(e, t, n) {
                      let r;
                      const o = t.directiveEnd;
                      for (let i = 1 + t.directiveStylingLast; i < o; i++)
                        r = ea(r, e[i].hostAttrs, n);
                      return ea(r, t.attrs, n);
                    })(e, t, r);
              }
              return (
                void 0 !== i &&
                  (r ? (t.residualClasses = i) : (t.residualStyles = i)),
                n
              );
            })(o, i, t, r)),
            (function dD(e, t, n, r, o, i) {
              let a = i ? t.classBindings : t.styleBindings,
                d = ri(a),
                g = Ri(a);
              e[r] = n;
              let I,
                E = !1;
              if (
                (Array.isArray(n)
                  ? ((I = n[1]), (null === I || c(n, I) > 0) && (E = !0))
                  : (I = n),
                o)
              )
                if (0 !== g) {
                  const K = ri(e[d + 1]);
                  (e[r + 1] = Za(K, d)),
                    0 !== K && (e[K + 1] = Pu(e[K + 1], r)),
                    (e[d + 1] = (function uD(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[d + 1], r));
                } else
                  (e[r + 1] = Za(d, 0)),
                    0 !== d && (e[d + 1] = Pu(e[d + 1], r)),
                    (d = r);
              else
                (e[r + 1] = Za(g, 0)),
                  0 === d ? (d = r) : (e[g + 1] = Pu(e[g + 1], r)),
                  (g = r);
              E && (e[r + 1] = Ou(e[r + 1])),
                th(e, I, r, !0),
                th(e, I, r, !1),
                (function fD(e, t, n, r, o) {
                  const i = o ? e.residualClasses : e.residualStyles;
                  null != i &&
                    'string' == typeof t &&
                    c(i, t) >= 0 &&
                    (n[r + 1] = Ru(n[r + 1]));
                })(t, I, e, r, i),
                (a = Za(d, g)),
                i ? (t.classBindings = a) : (t.styleBindings = a);
            })(o, i, t, n, a, r);
        }
      }
      function Nu(e, t, n, r, o) {
        let i = null;
        const a = n.directiveEnd;
        let d = n.directiveStylingLast;
        for (
          -1 === d ? (d = n.directiveStart) : d++;
          d < a && ((i = t[d]), (r = ea(r, i.hostAttrs, o)), i !== e);

        )
          d++;
        return null !== e && (n.directiveStylingLast = d), r;
      }
      function ea(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            'number' == typeof a
              ? (o = a)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                sr(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function fh(e, t, n, r, o, i, a, d) {
        if (!(3 & t.type)) return;
        const g = e.data,
          E = g[d + 1],
          I = (function cD(e) {
            return 1 == (1 & e);
          })(E)
            ? hh(g, t, n, o, Ri(E), a)
            : void 0;
        Ja(I) ||
          (Ja(i) ||
            ((function lD(e) {
              return 2 == (2 & e);
            })(E) &&
              (i = hh(g, null, n, o, d, a))),
          (function Im(e, t, n, r, o) {
            if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
            else {
              let i = -1 === r.indexOf('-') ? void 0 : po.DashCase;
              null == o
                ? e.removeStyle(n, r, i)
                : ('string' == typeof o &&
                    o.endsWith('!important') &&
                    ((o = o.slice(0, -10)), (i |= po.Important)),
                  e.setStyle(n, r, o, i));
            }
          })(r, a, rr(_n(), n), o, i));
      }
      function hh(e, t, n, r, o, i) {
        const a = null === t;
        let d;
        for (; o > 0; ) {
          const g = e[o],
            E = Array.isArray(g),
            I = E ? g[1] : g,
            x = null === I;
          let K = n[o + 1];
          K === ht && (K = x ? z : void 0);
          let ee = x ? u(K, r) : I === r ? K : void 0;
          if ((E && !Ja(ee) && (ee = u(g, r)), Ja(ee) && ((d = ee), a)))
            return d;
          const pe = e[o + 1];
          o = a ? ri(pe) : Ri(pe);
        }
        if (null !== t) {
          let g = i ? t.residualClasses : t.residualStyles;
          null != g && (d = u(g, r));
        }
        return d;
      }
      function Ja(e) {
        return void 0 !== e;
      }
      function ph(e, t) {
        return 0 != (e.flags & (t ? 8 : 16));
      }
      function gh(e, t = '') {
        const n = ye(),
          r = mt(),
          o = e + gt,
          i = r.firstCreatePass ? cs(r, o, 1, t, null) : r.data[o],
          a = (n[o] = (function Tl(e, t) {
            return e.createText(t);
          })(n[ut], t));
        Aa(r, n, a, i), Wn(i, !1);
      }
      function Lu(e) {
        return Xa('', e, ''), Lu;
      }
      function Xa(e, t, n) {
        const r = ye(),
          o = fs(r, e, t, n);
        return o !== ht && Vo(r, _n(), o), Xa;
      }
      function ku(e, t, n, r, o) {
        const i = ye(),
          a = (function hs(e, t, n, r, o, i) {
            const d = Pi(e, Ln(), n, o);
            return or(2), d ? t + Me(n) + r + Me(o) + i : ht;
          })(i, e, t, n, r, o);
        return a !== ht && Vo(i, _n(), a), ku;
      }
      function Vu(e, t, n, r, o, i, a) {
        const d = ye(),
          g = (function ps(e, t, n, r, o, i, a, d) {
            const E = Ga(e, Ln(), n, o, a);
            return or(3), E ? t + Me(n) + r + Me(o) + i + Me(a) + d : ht;
          })(d, e, t, n, r, o, i, a);
        return g !== ht && Vo(d, _n(), g), Vu;
      }
      function Bu(e, t, n, r, o, i, a, d, g) {
        const E = ye(),
          I = (function gs(e, t, n, r, o, i, a, d, g, E) {
            const x = kr(e, Ln(), n, o, a, g);
            return (
              or(4), x ? t + Me(n) + r + Me(o) + i + Me(a) + d + Me(g) + E : ht
            );
          })(E, e, t, n, r, o, i, a, d, g);
        return I !== ht && Vo(E, _n(), I), Bu;
      }
      function Ch(e, t, n) {
        Qr(sr, yo, fs(ye(), e, t, n), !0);
      }
      const xi = void 0;
      var WD = [
        'en',
        [['a', 'p'], ['AM', 'PM'], xi],
        [['AM', 'PM'], xi, xi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        xi,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        xi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', xi, "{1} 'at' {0}", xi],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function zD(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let Cs = {};
      function Uu(e) {
        const t = (function KD(e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = Fh(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Fh(r)), n)) return n;
        if ('en' === r) return WD;
        throw new de(701, !1);
      }
      function xh(e) {
        return Uu(e)[st.PluralCase];
      }
      function Fh(e) {
        return (
          e in Cs ||
            (Cs[e] =
              it.ng &&
              it.ng.common &&
              it.ng.common.locales &&
              it.ng.common.locales[e]),
          Cs[e]
        );
      }
      var st = (() => (
        ((st = st || {})[(st.LocaleId = 0)] = 'LocaleId'),
        (st[(st.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (st[(st.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (st[(st.DaysFormat = 3)] = 'DaysFormat'),
        (st[(st.DaysStandalone = 4)] = 'DaysStandalone'),
        (st[(st.MonthsFormat = 5)] = 'MonthsFormat'),
        (st[(st.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (st[(st.Eras = 7)] = 'Eras'),
        (st[(st.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (st[(st.WeekendRange = 9)] = 'WeekendRange'),
        (st[(st.DateFormat = 10)] = 'DateFormat'),
        (st[(st.TimeFormat = 11)] = 'TimeFormat'),
        (st[(st.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (st[(st.NumberSymbols = 13)] = 'NumberSymbols'),
        (st[(st.NumberFormats = 14)] = 'NumberFormats'),
        (st[(st.CurrencyCode = 15)] = 'CurrencyCode'),
        (st[(st.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (st[(st.CurrencyName = 17)] = 'CurrencyName'),
        (st[(st.Currencies = 18)] = 'Currencies'),
        (st[(st.Directionality = 19)] = 'Directionality'),
        (st[(st.PluralCase = 20)] = 'PluralCase'),
        (st[(st.ExtraData = 21)] = 'ExtraData'),
        st
      ))();
      const Es = 'en-US';
      let Nh = Es;
      function $u(e, t, n, r, o) {
        if (((e = L(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) $u(e[i], t, n, r, o);
        else {
          const i = mt(),
            a = ye();
          let d = Ai(e) ? e : L(e.provide),
            g = Pd(e);
          const E = pn(),
            I = 1048575 & E.providerIndexes,
            x = E.directiveStart,
            K = E.providerIndexes >> 20;
          if (Ai(e) || !e.multi) {
            const ee = new ne(g, o, us),
              pe = zu(d, t, o ? I : I + K, x);
            -1 === pe
              ? (ks(Ji(E, a), i, d),
                Gu(i, e, t.length),
                t.push(d),
                E.directiveStart++,
                E.directiveEnd++,
                o && (E.providerIndexes += 1048576),
                n.push(ee),
                a.push(ee))
              : ((n[pe] = ee), (a[pe] = ee));
          } else {
            const ee = zu(d, t, I + K, x),
              pe = zu(d, t, I, I + K),
              Ge = pe >= 0 && n[pe];
            if ((o && !Ge) || (!o && !(ee >= 0 && n[ee]))) {
              ks(Ji(E, a), i, d);
              const Qe = (function G_(e, t, n, r, o) {
                const i = new ne(e, n, us);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  sp(i, o, r && !n),
                  i
                );
              })(o ? $_ : j_, n.length, o, r, g);
              !o && Ge && (n[pe].providerFactory = Qe),
                Gu(i, e, t.length, 0),
                t.push(d),
                E.directiveStart++,
                E.directiveEnd++,
                o && (E.providerIndexes += 1048576),
                n.push(Qe),
                a.push(Qe);
            } else Gu(i, e, ee > -1 ? ee : pe, sp(n[o ? pe : ee], g, !o && r));
            !o && r && Ge && n[pe].componentProviders++;
          }
        }
      }
      function Gu(e, t, n, r) {
        const o = Ai(t),
          i = (function av(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const g = (i ? L(t.useClass) : t).prototype.ngOnDestroy;
          if (g) {
            const E = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const I = E.indexOf(n);
              -1 === I ? E.push(n, [r, g]) : E[I + 1].push(r, g);
            } else E.push(n, g);
          }
        }
      }
      function sp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function zu(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function j_(e, t, n, r) {
        return Wu(this.multi, []);
      }
      function $_(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            d = Nr(n, n[ze], this.providerFactory.index, r);
          (i = d.slice(0, a)), Wu(o, i);
          for (let g = a; g < d.length; g++) i.push(d[g]);
        } else (i = []), Wu(o, i);
        return i;
      }
      function Wu(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function ap(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function H_(e, t, n) {
              const r = mt();
              if (r.firstCreatePass) {
                const o = On(e);
                $u(n, r.data, r.blueprint, o, !0),
                  $u(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class ws {}
      class lp {}
      function z_(e, t) {
        return new up(e, t ?? null);
      }
      class up extends ws {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new _f(this));
          const r = en(t);
          (this._bootstrapComponents = ko(r.bootstrap)),
            (this._r3Injector = Jd(
              t,
              n,
              [
                { provide: ws, useValue: this },
                { provide: Ks, useValue: this.componentFactoryResolver },
              ],
              Z(t),
              new Set(['environment'])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Ku extends lp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new up(this.moduleType, t);
        }
      }
      class W_ extends ws {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new _f(this)),
            (this.instance = null);
          const o = new Od(
            [
              ...t,
              { provide: ws, useValue: this },
              { provide: Ks, useValue: this.componentFactoryResolver },
            ],
            n || Na(),
            r,
            new Set(['environment'])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function Yu(e, t, n = null) {
        return new W_(e, t, n).injector;
      }
      let K_ = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = Sd(0, n.type),
                o =
                  r.length > 0
                    ? Yu([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = Oe({
            token: e,
            providedIn: 'environment',
            factory: () => new e(pt(Ti)),
          })),
          e
        );
      })();
      function cp(e) {
        e.getStandaloneInjector = (t) =>
          t.get(K_).getOrCreateStandaloneInjector(e);
      }
      function vp(e, t, n) {
        const r = gn() + e,
          o = ye();
        return o[r] === ht
          ? mo(o, r, n ? t.call(n) : t())
          : (function qs(e, t) {
              return e[t];
            })(o, r);
      }
      function yp(e, t, n, r) {
        return Ep(ye(), gn(), e, t, n, r);
      }
      function Dp(e, t, n, r, o) {
        return wp(ye(), gn(), e, t, n, r, o);
      }
      function _p(e, t, n, r, o, i) {
        return bp(ye(), gn(), e, t, n, r, o, i);
      }
      function Cp(e, t, n, r, o, i, a) {
        return (function Mp(e, t, n, r, o, i, a, d, g) {
          const E = t + n;
          return kr(e, E, o, i, a, d)
            ? mo(e, E + 4, g ? r.call(g, o, i, a, d) : r(o, i, a, d))
            : sa(e, E + 4);
        })(ye(), gn(), e, t, n, r, o, i, a);
      }
      function sa(e, t) {
        const n = e[t];
        return n === ht ? void 0 : n;
      }
      function Ep(e, t, n, r, o, i) {
        const a = t + n;
        return zn(e, a, o)
          ? mo(e, a + 1, i ? r.call(i, o) : r(o))
          : sa(e, a + 1);
      }
      function wp(e, t, n, r, o, i, a) {
        const d = t + n;
        return Pi(e, d, o, i)
          ? mo(e, d + 2, a ? r.call(a, o, i) : r(o, i))
          : sa(e, d + 2);
      }
      function bp(e, t, n, r, o, i, a, d) {
        const g = t + n;
        return Ga(e, g, o, i, a)
          ? mo(e, g + 3, d ? r.call(d, o, i, a) : r(o, i, a))
          : sa(e, g + 3);
      }
      function Ip(e, t) {
        const n = mt();
        let r;
        const o = e + gt;
        n.firstCreatePass
          ? ((r = (function aC(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
          : (r = n.data[o]);
        const i = r.factory || (r.factory = nr(r.type)),
          a = $t(us);
        try {
          const d = Po(!1),
            g = i();
          return (
            Po(d),
            (function rD(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, ye(), o, g),
            g
          );
        } finally {
          $t(a);
        }
      }
      function Ap(e, t, n) {
        const r = e + gt,
          o = ye(),
          i = vr(o, r);
        return aa(o, r) ? Ep(o, gn(), t, i.transform, n, i) : i.transform(n);
      }
      function Tp(e, t, n, r) {
        const o = e + gt,
          i = ye(),
          a = vr(i, o);
        return aa(i, o)
          ? wp(i, gn(), t, a.transform, n, r, a)
          : a.transform(n, r);
      }
      function Op(e, t, n, r, o) {
        const i = e + gt,
          a = ye(),
          d = vr(a, i);
        return aa(a, i)
          ? bp(a, gn(), t, d.transform, n, r, o, d)
          : d.transform(n, r, o);
      }
      function aa(e, t) {
        return e[ze].data[t].pure;
      }
      function Ju(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Do = class cC extends l.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            a = r;
          if (t && 'object' == typeof t) {
            const g = t;
            (o = g.next?.bind(g)),
              (i = g.error?.bind(g)),
              (a = g.complete?.bind(g));
          }
          this.__isAsync && ((i = Ju(i)), o && (o = Ju(o)), a && (a = Ju(a)));
          const d = super.subscribe({ next: o, error: i, complete: a });
          return t instanceof v.w0 && t.add(d), d;
        }
      };
      function dC() {
        return this._results[Symbol.iterator]();
      }
      class Xu {
        get changes() {
          return this._changes || (this._changes = new Do());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Xu.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = dC);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = (function ir(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function ml(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o),
            (r.length = o.length),
            (r.last = o[this.length - 1]),
            (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let la = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = pC), e;
      })();
      const fC = la,
        hC = class extends fC {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tView,
              o = ka(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[Un] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[Tn];
            return (
              null !== a && (o[Tn] = a.createEmbeddedView(r)),
              su(r, o, t),
              new Xs(o)
            );
          }
        };
      function pC() {
        return nl(pn(), ye());
      }
      function nl(e, t) {
        return 4 & e.type ? new hC(t, e, ss(e, t)) : null;
      }
      let rl = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = gC), e;
      })();
      function gC() {
        return xp(pn(), ye());
      }
      const mC = rl,
        Pp = class extends mC {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return ss(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ci(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Ls(this._hostTNode, this._hostLView);
            if (ho(t)) {
              const n = Ki(t, this._hostLView),
                r = Kn(t);
              return new Ci(n[ze].data[r + 8], n);
            }
            return new Ci(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Rp(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - hn;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const a = t.createEmbeddedView(n || {}, i);
            return this.insert(a, o), a;
          }
          createComponent(t, n, r, o, i) {
            const a =
              t &&
              !(function ni(e) {
                return 'function' == typeof e;
              })(t);
            let d;
            if (a) d = n;
            else {
              const x = n || {};
              (d = x.index),
                (r = x.injector),
                (o = x.projectableNodes),
                (i = x.environmentInjector || x.ngModuleRef);
            }
            const g = a ? t : new Qs(wt(t)),
              E = r || this.parentInjector;
            if (!i && null == g.ngModule) {
              const K = (a ? E : this.parentInjector).get(Ti, null);
              K && (i = K);
            }
            const I = g.create(E, o, void 0, i);
            return this.insert(I.hostView, d), I;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[ze];
            if (
              (function Ss(e) {
                return Fn(e[Rt]);
              })(r)
            ) {
              const I = this.indexOf(t);
              if (-1 !== I) this.detach(I);
              else {
                const x = r[Rt],
                  K = new Pp(x, x[xt], x[Rt]);
                K.detach(K.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function Dm(e, t, n, r) {
              const o = hn + r,
                i = n.length;
              r > 0 && (n[o - 1][sn] = t),
                r < i - hn
                  ? ((t[sn] = n[o]), ba(n, hn + r, t))
                  : (n.push(t), (t[sn] = null)),
                (t[Rt] = n);
              const a = t[Un];
              null !== a &&
                n !== a &&
                (function _m(e, t) {
                  const n = e[fr];
                  t[Qt] !== t[Rt][Rt][Qt] && (e[si] = !0),
                    null === n ? (e[fr] = [t]) : n.push(t);
                })(a, t);
              const d = t[Tn];
              null !== d && d.insertView(e), (t[dt] |= 64);
            })(o, r, a, i);
            const d = Fl(i, a),
              g = r[ut],
              E = Ia(g, a[Ur]);
            return (
              null !== E &&
                (function mm(e, t, n, r, o, i) {
                  (r[tn] = o), (r[xt] = t), Gs(e, r, n, 1, o, i);
                })(o, a[xt], g, r, E, d),
              t.attachToViewContainerRef(),
              ba(Qu(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Rp(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Pl(this._lContainer, n);
            r && (qi(Qu(this._lContainer), n), Jc(r[ze], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Pl(this._lContainer, n);
            return r && null != qi(Qu(this._lContainer), n) ? new Xs(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Rp(e) {
        return e[Hr];
      }
      function Qu(e) {
        return e[Hr] || (e[Hr] = []);
      }
      function xp(e, t) {
        let n;
        const r = t[e.index];
        if (Fn(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = jt(r);
          else {
            const i = t[ut];
            o = i.createComment('');
            const a = Pn(e, t);
            Si(
              i,
              Ia(i, a),
              o,
              (function bm(e, t) {
                return e.nextSibling(t);
              })(i, a),
              !1
            );
          }
          (t[e.index] = n = gf(r, t, o, e)), Ba(t, n);
        }
        return new Pp(n, e, t);
      }
      class qu {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new qu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class ec {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              o.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new ec(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== jp(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Fp {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class tc {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new tc(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class nc {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new nc(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, vC(n, i)),
                this.matchTNodeWithReadOption(t, n, Xi(n, t, i, !1, !1));
            }
          else
            r === la
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Xi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Ys || o === rl || (o === la && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Xi(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function vC(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function DC(e, t, n, r) {
        return -1 === n
          ? (function yC(e, t) {
              return 11 & e.type ? ss(e, t) : 4 & e.type ? nl(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function _C(e, t, n) {
              return n === Ys
                ? ss(t, e)
                : n === la
                ? nl(t, e)
                : n === rl
                ? xp(t, e)
                : void 0;
            })(e, t, r)
          : Nr(e, e[ze], n, t);
      }
      function Np(e, t, n, r) {
        const o = t[Tn].queries[r];
        if (null === o.matches) {
          const i = e.data,
            a = n.matches,
            d = [];
          for (let g = 0; g < a.length; g += 2) {
            const E = a[g];
            d.push(E < 0 ? null : DC(t, i[E], a[g + 1], n.metadata.read));
          }
          o.matches = d;
        }
        return o.matches;
      }
      function rc(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const a = Np(e, t, o, n);
          for (let d = 0; d < i.length; d += 2) {
            const g = i[d];
            if (g > 0) r.push(a[d / 2]);
            else {
              const E = i[d + 1],
                I = t[-g];
              for (let x = hn; x < I.length; x++) {
                const K = I[x];
                K[Un] === K[Rt] && rc(K[ze], K, E, r);
              }
              if (null !== I[fr]) {
                const x = I[fr];
                for (let K = 0; K < x.length; K++) {
                  const ee = x[K];
                  rc(ee[ze], ee, E, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Lp(e) {
        const t = ye(),
          n = mt(),
          r = To();
        Xo(r + 1);
        const o = jp(n, r);
        if (
          e.dirty &&
          (function pi(e) {
            return 4 == (4 & e[dt]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? rc(n, t, r, []) : Np(n, t, o, r);
            e.reset(i, yv), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function kp(e, t, n) {
        const r = mt();
        r.firstCreatePass &&
          (Hp(r, new Fp(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Up(r, ye(), t);
      }
      function Vp(e, t, n, r) {
        const o = mt();
        if (o.firstCreatePass) {
          const i = pn();
          Hp(o, new Fp(t, n, r), i.index),
            (function EC(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        Up(o, ye(), n);
      }
      function Bp() {
        return (function CC(e, t) {
          return e[Tn].queries[t].queryList;
        })(ye(), To());
      }
      function Up(e, t, n) {
        const r = new Xu(4 == (4 & n));
        uf(e, t, r, r.destroy),
          null === t[Tn] && (t[Tn] = new ec()),
          t[Tn].queries.push(new qu(r));
      }
      function Hp(e, t, n) {
        null === e.queries && (e.queries = new tc()),
          e.queries.track(new nc(t, n));
      }
      function jp(e, t) {
        return e.queries.getByIndex(t);
      }
      function $p(e, t) {
        return nl(e, t);
      }
      function oc(e) {
        return !!en(e);
      }
      function il(...e) {}
      const ag = new Lt('Application Initializer');
      let sl = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = il),
              (this.reject = il),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Su(i)) n.push(i);
                else if (Bf(i)) {
                  const a = new Promise((d, g) => {
                    i.subscribe({ complete: d, error: g });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pt(ag, 8));
          }),
          (e.ɵprov = Oe({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const lg = new Lt('AppId', {
        providedIn: 'root',
        factory: function ug() {
          return `${uc()}${uc()}${uc()}`;
        },
      });
      function uc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const cg = new Lt('Platform Initializer'),
        jC = new Lt('Platform ID', {
          providedIn: 'platform',
          factory: () => 'unknown',
        });
      let $C = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Oe({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      const al = new Lt('LocaleId', {
          providedIn: 'root',
          factory: () =>
            ue(al, qe.Optional | qe.SkipSelf) ||
            (function GC() {
              return (typeof $localize < 'u' && $localize.locale) || Es;
            })(),
        }),
        zC = new Lt('DefaultCurrencyCode', {
          providedIn: 'root',
          factory: () => 'USD',
        });
      class WC {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let KC = (() => {
        class e {
          compileModuleSync(n) {
            return new Ku(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = ko(en(n).declarations).reduce((a, d) => {
                const g = wt(d);
                return g && a.push(new Qs(g)), a;
              }, []);
            return new WC(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Oe({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const JC = (() => Promise.resolve(0))();
      function cc(e) {
        typeof Zone > 'u'
          ? JC.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class Vr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Do(!1)),
            (this.onMicrotaskEmpty = new Do(!1)),
            (this.onStable = new Do(!1)),
            (this.onError = new Do(!1)),
            typeof Zone > 'u')
          )
            throw new de(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function XC() {
              let e = it.requestAnimationFrame,
                t = it.cancelAnimationFrame;
              if (typeof Zone < 'u' && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function e0(e) {
              const t = () => {
                !(function qC(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(it, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            'fakeTopEventTask',
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                fc(e),
                                (e.isCheckStableRunning = !0),
                                dc(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    fc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, a, d) => {
                  try {
                    return hg(e), n.invokeTask(o, i, a, d);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      pg(e);
                  }
                },
                onInvoke: (n, r, o, i, a, d, g) => {
                  try {
                    return hg(e), n.invoke(o, i, a, d, g);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), pg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          fc(e),
                          dc(e))
                        : 'macroTask' == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Vr.isInAngularZone()) throw new de(909, !1);
        }
        static assertNotInAngularZone() {
          if (Vr.isInAngularZone()) throw new de(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            a = i.scheduleEventTask('NgZoneEvent: ' + o, t, QC, il, il);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const QC = {};
      function dc(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function fc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function hg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function pg(e) {
        e._nesting--, dc(e);
      }
      class t0 {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Do()),
            (this.onMicrotaskEmpty = new Do()),
            (this.onStable = new Do()),
            (this.onError = new Do());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const gg = new Lt(''),
        mg = new Lt('');
      let hc,
        n0 = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                hc ||
                  ((function r0(e) {
                    hc = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > 'u'
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Vr.assertNotInAngularZone(),
                        cc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                cc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(pt(Vr), pt(vg), pt(mg));
            }),
            (e.ɵprov = Oe({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        vg = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return hc?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Oe({
              token: e,
              factory: e.ɵfac,
              providedIn: 'platform',
            })),
            e
          );
        })();
      const Bo = !1;
      let oi = null;
      const yg = new Lt('AllowMultipleToken'),
        pc = new Lt('PlatformDestroyListeners'),
        Dg = new Lt('appBootstrapListener');
      class a0 {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function Cg(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new Lt(r);
        return (i = []) => {
          let a = gc();
          if (!a || a.injector.get(yg, !1)) {
            const d = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(d)
              : (function l0(e) {
                  if (oi && !oi.get(yg, !1)) throw new de(400, !1);
                  oi = e;
                  const t = e.get(wg);
                  (function _g(e) {
                    const t = e.get(cg, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function Eg(e = [], t) {
                    return Oi.create({
                      name: t,
                      providers: [
                        { provide: Yl, useValue: 'platform' },
                        { provide: pc, useValue: new Set([() => (oi = null)]) },
                        ...e,
                      ],
                    });
                  })(d, r)
                );
          }
          return (function c0(e) {
            const t = gc();
            if (!t) throw new de(401, !1);
            return t;
          })();
        };
      }
      function gc() {
        return oi?.get(wg) ?? null;
      }
      let wg = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function Mg(e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new t0()
                      : ('zone.js' === e ? void 0 : e) || new Vr(t)),
                  n
                );
              })(
                r?.ngZone,
                (function bg(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: Vr, useValue: o }];
            return o.run(() => {
              const a = Oi.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                d = n.create(a),
                g = d.injector.get(Zs, null);
              if (!g) throw new de(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const E = o.onError.subscribe({
                    next: (I) => {
                      g.handleError(I);
                    },
                  });
                  d.onDestroy(() => {
                    ul(this._modules, d), E.unsubscribe();
                  });
                }),
                (function Sg(e, t, n) {
                  try {
                    const r = n();
                    return Su(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(g, o, () => {
                  const E = d.injector.get(sl);
                  return (
                    E.runInitializers(),
                    E.donePromise.then(
                      () => (
                        (function Lh(e) {
                          me(e, 'Expected localeId to be defined'),
                            'string' == typeof e &&
                              (Nh = e.toLowerCase().replace(/_/g, '-'));
                        })(d.injector.get(al, Es) || Es),
                        this._moduleDoBootstrap(d),
                        d
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = Ig({}, r);
            return (function o0(e, t, n) {
              const r = new Ku(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(ll);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new de(-403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new de(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(pc, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pt(Oi));
          }),
          (e.ɵprov = Oe({ token: e, factory: e.ɵfac, providedIn: 'platform' })),
          e
        );
      })();
      function Ig(e, t) {
        return Array.isArray(t) ? t.reduce(Ig, e) : { ...e, ...t };
      }
      let ll = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new k.y((d) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    d.next(this._stable), d.complete();
                  });
              }),
              a = new k.y((d) => {
                let g;
                this._zone.runOutsideAngular(() => {
                  g = this._zone.onStable.subscribe(() => {
                    Vr.assertNotInAngularZone(),
                      cc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), d.next(!0));
                      });
                  });
                });
                const E = this._zone.onUnstable.subscribe(() => {
                  Vr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        d.next(!1);
                      }));
                });
                return () => {
                  g.unsubscribe(), E.unsubscribe();
                };
              });
            this.isStable = (0, j.T)(i, a.pipe((0, H.B)()));
          }
          bootstrap(n, r) {
            const o = n instanceof Rd;
            if (!this._injector.get(sl).done) {
              !o && Bn(n);
              throw new de(405, Bo);
            }
            let a;
            (a = o ? n : this._injector.get(Ks).resolveComponentFactory(n)),
              this.componentTypes.push(a.componentType);
            const d = (function s0(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(ws),
              E = a.create(Oi.NULL, [], r || a.selector, d),
              I = E.location.nativeElement,
              x = E.injector.get(gg, null);
            return (
              x?.registerApplication(I),
              E.onDestroy(() => {
                this.detachView(E.hostView),
                  ul(this.components, E),
                  x?.unregisterApplication(I);
              }),
              this._loadComponent(E),
              E
            );
          }
          tick() {
            if (this._runningTick) throw new de(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            ul(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(Dg, []);
            r.push(...this._bootstrapListeners), r.forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => ul(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new de(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pt(Vr), pt(Ti), pt(Zs));
          }),
          (e.ɵprov = Oe({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      function ul(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function f0() {}
      let h0 = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = p0), e;
      })();
      function p0(e) {
        return (function g0(e, t, n) {
          if (Ir(e) && !n) {
            const r = Ft(e.index, t);
            return new Xs(r, r);
          }
          return 47 & e.type ? new Xs(t[Qt], t) : null;
        })(pn(), ye(), 16 == (16 & e));
      }
      class Rg {
        constructor() {}
        supports(t) {
          return $a(t);
        }
        create(t) {
          return new C0(t);
        }
      }
      const _0 = (e, t) => t;
      class C0 {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || _0);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < Fg(r, o, i)) ? n : r,
              d = Fg(a, o, i),
              g = a.currentIndex;
            if (a === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) o++;
            else {
              i || (i = []);
              const E = d - o,
                I = g - o;
              if (E != I) {
                for (let K = 0; K < E; K++) {
                  const ee = K < i.length ? i[K] : (i[K] = 0),
                    pe = ee + K;
                  I <= pe && pe < E && (i[K] = ee + 1);
                }
                i[a.previousIndex] = I - E;
              }
            }
            d !== g && t(a, d, g);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !$a(t))) throw new de(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let d = 0; d < this.length; d++)
              (i = t[d]),
                (a = this._trackByFn(d, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, d)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, d)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function qy(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (d) => {
                (a = this._trackByFn(o, d)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, d, a, o)),
                      Object.is(n.item, d) || this._addIdentityChange(n, d))
                    : ((n = this._mismatch(n, d, a, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new E0(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new xg()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new xg()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class E0 {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class w0 {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class xg {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new w0()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Fg(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class Ng {
        constructor() {}
        supports(t) {
          return t instanceof Map || _u(t);
        }
        create() {
          return new b0();
        }
      }
      class b0 {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || _u(t))) throw new de(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              a = o._next;
            return (
              i && (i._next = a),
              a && (a._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new M0(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class M0 {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Lg() {
        return new _c([new Rg()]);
      }
      let _c = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Lg()),
              deps: [[e, new Er(), new ar()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new de(901, !1);
          }
        }
        return (e.ɵprov = Oe({ token: e, providedIn: 'root', factory: Lg })), e;
      })();
      function kg() {
        return new Cc([new Ng()]);
      }
      let Cc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || kg()),
              deps: [[e, new Er(), new ar()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new de(901, !1);
          }
        }
        return (e.ɵprov = Oe({ token: e, providedIn: 'root', factory: kg })), e;
      })();
      const A0 = Cg(null, 'core', []);
      let T0 = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pt(ll));
          }),
          (e.ɵmod = _o({ type: e })),
          (e.ɵinj = Dt({})),
          e
        );
      })();
      function O0(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
    },
    4006: (Re, q, C) => {
      C.d(q, {
        EJ: () => $r,
        Fj: () => te,
        JJ: () => kt,
        JL: () => Vt,
        JU: () => Z,
        Kr: () => bo,
        NI: () => Pt,
        Oe: () => Zo,
        UX: () => lt,
        Wl: () => Q,
        YN: () => Tr,
        _Y: () => Ho,
        a5: () => Kt,
        cw: () => Ze,
        gN: () => Ve,
        kI: () => be,
        nD: () => So,
        oH: () => jr,
        sg: () => tr,
        u: () => oo,
        u5: () => Pr,
        x0: () => Ar,
      });
      var l = C(4650),
        v = C(6895),
        k = C(2076),
        j = C(4128),
        H = C(4004);
      let V = (() => {
          class _ {
            constructor(m, A) {
              (this._renderer = m),
                (this._elementRef = A),
                (this.onChange = (ae) => {}),
                (this.onTouched = () => {});
            }
            setProperty(m, A) {
              this._renderer.setProperty(this._elementRef.nativeElement, m, A);
            }
            registerOnTouched(m) {
              this.onTouched = m;
            }
            registerOnChange(m) {
              this.onChange = m;
            }
            setDisabledState(m) {
              this.setProperty('disabled', m);
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)(l.Y36(l.Qsj), l.Y36(l.SBq));
            }),
            (_.ɵdir = l.lG2({ type: _ })),
            _
          );
        })(),
        $ = (() => {
          class _ extends V {}
          return (
            (_.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = l.n5z(_)))(A || _);
              };
            })()),
            (_.ɵdir = l.lG2({ type: _, features: [l.qOj] })),
            _
          );
        })();
      const Z = new l.OlP('NgValueAccessor'),
        X = { provide: Z, useExisting: (0, l.Gpc)(() => Q), multi: !0 };
      let Q = (() => {
        class _ extends $ {
          writeValue(m) {
            this.setProperty('checked', m);
          }
        }
        return (
          (_.ɵfac = (function () {
            let y;
            return function (A) {
              return (y || (y = l.n5z(_)))(A || _);
            };
          })()),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', ''],
            ],
            hostBindings: function (m, A) {
              1 & m &&
                l.NdJ('change', function (et) {
                  return A.onChange(et.target.checked);
                })('blur', function () {
                  return A.onTouched();
                });
            },
            features: [l._Bn([X]), l.qOj],
          })),
          _
        );
      })();
      const U = { provide: Z, useExisting: (0, l.Gpc)(() => te), multi: !0 },
        se = new l.OlP('CompositionEventMode');
      let te = (() => {
        class _ extends V {
          constructor(m, A, ae) {
            super(m, A),
              (this._compositionMode = ae),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function L() {
                  const _ = (0, v.q)() ? (0, v.q)().getUserAgent() : '';
                  return /android (\d+)/.test(_.toLowerCase());
                })());
          }
          writeValue(m) {
            this.setProperty('value', m ?? '');
          }
          _handleInput(m) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(m);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(m) {
            (this._composing = !1), this._compositionMode && this.onChange(m);
          }
        }
        return (
          (_.ɵfac = function (m) {
            return new (m || _)(l.Y36(l.Qsj), l.Y36(l.SBq), l.Y36(se, 8));
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (m, A) {
              1 & m &&
                l.NdJ('input', function (et) {
                  return A._handleInput(et.target.value);
                })('blur', function () {
                  return A.onTouched();
                })('compositionstart', function () {
                  return A._compositionStart();
                })('compositionend', function (et) {
                  return A._compositionEnd(et.target.value);
                });
            },
            features: [l._Bn([U]), l.qOj],
          })),
          _
        );
      })();
      const De = !1;
      function ke(_) {
        return (
          null == _ ||
          (('string' == typeof _ || Array.isArray(_)) && 0 === _.length)
        );
      }
      function de(_) {
        return null != _ && 'number' == typeof _.length;
      }
      const Ne = new l.OlP('NgValidators'),
        Me = new l.OlP('NgAsyncValidators'),
        We =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class be {
        static min(y) {
          return (function Ee(_) {
            return (y) => {
              if (ke(y.value) || ke(_)) return null;
              const m = parseFloat(y.value);
              return !isNaN(m) && m < _
                ? { min: { min: _, actual: y.value } }
                : null;
            };
          })(y);
        }
        static max(y) {
          return (function Ye(_) {
            return (y) => {
              if (ke(y.value) || ke(_)) return null;
              const m = parseFloat(y.value);
              return !isNaN(m) && m > _
                ? { max: { max: _, actual: y.value } }
                : null;
            };
          })(y);
        }
        static required(y) {
          return (function nt(_) {
            return ke(_.value) ? { required: !0 } : null;
          })(y);
        }
        static requiredTrue(y) {
          return (function Pe(_) {
            return !0 === _.value ? null : { required: !0 };
          })(y);
        }
        static email(y) {
          return (function Se(_) {
            return ke(_.value) || We.test(_.value) ? null : { email: !0 };
          })(y);
        }
        static minLength(y) {
          return (function xe(_) {
            return (y) =>
              ke(y.value) || !de(y.value)
                ? null
                : y.value.length < _
                ? {
                    minlength: {
                      requiredLength: _,
                      actualLength: y.value.length,
                    },
                  }
                : null;
          })(y);
        }
        static maxLength(y) {
          return we(y);
        }
        static pattern(y) {
          return (function Le(_) {
            if (!_) return ot;
            let y, m;
            return (
              'string' == typeof _
                ? ((m = ''),
                  '^' !== _.charAt(0) && (m += '^'),
                  (m += _),
                  '$' !== _.charAt(_.length - 1) && (m += '$'),
                  (y = new RegExp(m)))
                : ((m = _.toString()), (y = _)),
              (A) => {
                if (ke(A.value)) return null;
                const ae = A.value;
                return y.test(ae)
                  ? null
                  : { pattern: { requiredPattern: m, actualValue: ae } };
              }
            );
          })(y);
        }
        static nullValidator(y) {
          return null;
        }
        static compose(y) {
          return Y(y);
        }
        static composeAsync(y) {
          return F(y);
        }
      }
      function we(_) {
        return (y) =>
          de(y.value) && y.value.length > _
            ? { maxlength: { requiredLength: _, actualLength: y.value.length } }
            : null;
      }
      function ot(_) {
        return null;
      }
      function Ke(_) {
        return null != _;
      }
      function oe(_) {
        const y = (0, l.QGY)(_) ? (0, k.D)(_) : _;
        if (De && !(0, l.CqO)(y)) {
          let m = 'Expected async validator to return Promise or Observable.';
          throw (
            ('object' == typeof _ &&
              (m +=
                ' Are you using a synchronous validator where an async validator is expected?'),
            new l.vHH(-1101, m))
          );
        }
        return y;
      }
      function ie(_) {
        let y = {};
        return (
          _.forEach((m) => {
            y = null != m ? { ...y, ...m } : y;
          }),
          0 === Object.keys(y).length ? null : y
        );
      }
      function he(_, y) {
        return y.map((m) => m(_));
      }
      function _e(_) {
        return _.map((y) =>
          (function ve(_) {
            return !_.validate;
          })(y)
            ? y
            : (m) => y.validate(m)
        );
      }
      function Y(_) {
        if (!_) return null;
        const y = _.filter(Ke);
        return 0 == y.length
          ? null
          : function (m) {
              return ie(he(m, y));
            };
      }
      function me(_) {
        return null != _ ? Y(_e(_)) : null;
      }
      function F(_) {
        if (!_) return null;
        const y = _.filter(Ke);
        return 0 == y.length
          ? null
          : function (m) {
              const A = he(m, y).map(oe);
              return (0, j.D)(A).pipe((0, H.U)(ie));
            };
      }
      function re(_) {
        return null != _ ? F(_e(_)) : null;
      }
      function ce(_, y) {
        return null === _ ? [y] : Array.isArray(_) ? [..._, y] : [_, y];
      }
      function Ie(_) {
        return _._rawValidators;
      }
      function Oe(_) {
        return _._rawAsyncValidators;
      }
      function ct(_) {
        return _ ? (Array.isArray(_) ? _ : [_]) : [];
      }
      function Dt(_, y) {
        return Array.isArray(_) ? _.includes(y) : _ === y;
      }
      function Mt(_, y) {
        const m = ct(y);
        return (
          ct(_).forEach((ae) => {
            Dt(m, ae) || m.push(ae);
          }),
          m
        );
      }
      function At(_, y) {
        return ct(y).filter((m) => !Dt(_, m));
      }
      class Wt {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(y) {
          (this._rawValidators = y || []),
            (this._composedValidatorFn = me(this._rawValidators));
        }
        _setAsyncValidators(y) {
          (this._rawAsyncValidators = y || []),
            (this._composedAsyncValidatorFn = re(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(y) {
          this._onDestroyCallbacks.push(y);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((y) => y()),
            (this._onDestroyCallbacks = []);
        }
        reset(y) {
          this.control && this.control.reset(y);
        }
        hasError(y, m) {
          return !!this.control && this.control.hasError(y, m);
        }
        getError(y, m) {
          return this.control ? this.control.getError(y, m) : null;
        }
      }
      class Ve extends Wt {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Kt extends Wt {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Vn {
        constructor(y) {
          this._cd = y;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let kt = (() => {
          class _ extends Vn {
            constructor(m) {
              super(m);
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)(l.Y36(Kt, 2));
            }),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (m, A) {
                2 & m &&
                  l.ekj('ng-untouched', A.isUntouched)(
                    'ng-touched',
                    A.isTouched
                  )('ng-pristine', A.isPristine)('ng-dirty', A.isDirty)(
                    'ng-valid',
                    A.isValid
                  )('ng-invalid', A.isInvalid)('ng-pending', A.isPending);
              },
              features: [l.qOj],
            })),
            _
          );
        })(),
        Vt = (() => {
          class _ extends Vn {
            constructor(m) {
              super(m);
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)(l.Y36(Ve, 10));
            }),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (m, A) {
                2 & m &&
                  l.ekj('ng-untouched', A.isUntouched)(
                    'ng-touched',
                    A.isTouched
                  )('ng-pristine', A.isPristine)('ng-dirty', A.isDirty)(
                    'ng-valid',
                    A.isValid
                  )('ng-invalid', A.isInvalid)('ng-pending', A.isPending)(
                    'ng-submitted',
                    A.isSubmitted
                  );
              },
              features: [l.qOj],
            })),
            _
          );
        })();
      function Gt(_, y) {
        return _ ? `with name: '${y}'` : `at index: ${y}`;
      }
      const Ue = !1,
        Jt = 'VALID',
        An = 'INVALID',
        pt = 'PENDING',
        wn = 'DISABLED';
      function ue(_) {
        return (B(_) ? _.validators : _) || null;
      }
      function P(_, y) {
        return (B(y) ? y.asyncValidators : _) || null;
      }
      function B(_) {
        return null != _ && !Array.isArray(_) && 'object' == typeof _;
      }
      function Te(_, y, m) {
        const A = _.controls;
        if (!(y ? Object.keys(A) : A).length)
          throw new l.vHH(
            1e3,
            Ue
              ? (function Mr(_) {
                  return `\n    There are no form controls registered with this ${
                    _ ? 'group' : 'array'
                  } yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `;
                })(y)
              : ''
          );
        if (!A[m])
          throw new l.vHH(
            1001,
            Ue
              ? (function Tt(_, y) {
                  return `Cannot find form control ${Gt(_, y)}`;
                })(y, m)
              : ''
          );
      }
      function He(_, y, m) {
        _._forEachChild((A, ae) => {
          if (void 0 === m[ae])
            throw new l.vHH(
              1002,
              Ue
                ? (function Dn(_, y) {
                    return `Must supply a value for form control ${Gt(_, y)}`;
                  })(y, ae)
                : ''
            );
        });
      }
      class rt {
        constructor(y, m) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(y),
            this._assignAsyncValidators(m);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(y) {
          this._rawValidators = this._composedValidatorFn = y;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(y) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = y;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Jt;
        }
        get invalid() {
          return this.status === An;
        }
        get pending() {
          return this.status == pt;
        }
        get disabled() {
          return this.status === wn;
        }
        get enabled() {
          return this.status !== wn;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(y) {
          this._assignValidators(y);
        }
        setAsyncValidators(y) {
          this._assignAsyncValidators(y);
        }
        addValidators(y) {
          this.setValidators(Mt(y, this._rawValidators));
        }
        addAsyncValidators(y) {
          this.setAsyncValidators(Mt(y, this._rawAsyncValidators));
        }
        removeValidators(y) {
          this.setValidators(At(y, this._rawValidators));
        }
        removeAsyncValidators(y) {
          this.setAsyncValidators(At(y, this._rawAsyncValidators));
        }
        hasValidator(y) {
          return Dt(this._rawValidators, y);
        }
        hasAsyncValidator(y) {
          return Dt(this._rawAsyncValidators, y);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(y = {}) {
          (this.touched = !0),
            this._parent && !y.onlySelf && this._parent.markAsTouched(y);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((y) => y.markAllAsTouched());
        }
        markAsUntouched(y = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((m) => {
              m.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        markAsDirty(y = {}) {
          (this.pristine = !1),
            this._parent && !y.onlySelf && this._parent.markAsDirty(y);
        }
        markAsPristine(y = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((m) => {
              m.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        markAsPending(y = {}) {
          (this.status = pt),
            !1 !== y.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !y.onlySelf && this._parent.markAsPending(y);
        }
        disable(y = {}) {
          const m = this._parentMarkedDirty(y.onlySelf);
          (this.status = wn),
            (this.errors = null),
            this._forEachChild((A) => {
              A.disable({ ...y, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...y, skipPristineCheck: m }),
            this._onDisabledChange.forEach((A) => A(!0));
        }
        enable(y = {}) {
          const m = this._parentMarkedDirty(y.onlySelf);
          (this.status = Jt),
            this._forEachChild((A) => {
              A.enable({ ...y, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            }),
            this._updateAncestors({ ...y, skipPristineCheck: m }),
            this._onDisabledChange.forEach((A) => A(!1));
        }
        _updateAncestors(y) {
          this._parent &&
            !y.onlySelf &&
            (this._parent.updateValueAndValidity(y),
            y.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(y) {
          this._parent = y;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(y = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Jt || this.status === pt) &&
                this._runAsyncValidator(y.emitEvent)),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !y.onlySelf &&
              this._parent.updateValueAndValidity(y);
        }
        _updateTreeValidity(y = { emitEvent: !0 }) {
          this._forEachChild((m) => m._updateTreeValidity(y)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? wn : Jt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(y) {
          if (this.asyncValidator) {
            (this.status = pt), (this._hasOwnPendingAsyncValidator = !0);
            const m = oe(this.asyncValidator(this));
            this._asyncValidationSubscription = m.subscribe((A) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(A, { emitEvent: y });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(y, m = {}) {
          (this.errors = y), this._updateControlsErrors(!1 !== m.emitEvent);
        }
        get(y) {
          let m = y;
          return null == m ||
            (Array.isArray(m) || (m = m.split('.')), 0 === m.length)
            ? null
            : m.reduce((A, ae) => A && A._find(ae), this);
        }
        getError(y, m) {
          const A = m ? this.get(m) : this;
          return A && A.errors ? A.errors[y] : null;
        }
        hasError(y, m) {
          return !!this.getError(y, m);
        }
        get root() {
          let y = this;
          for (; y._parent; ) y = y._parent;
          return y;
        }
        _updateControlsErrors(y) {
          (this.status = this._calculateStatus()),
            y && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(y);
        }
        _initObservables() {
          (this.valueChanges = new l.vpe()), (this.statusChanges = new l.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? wn
            : this.errors
            ? An
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(pt)
            ? pt
            : this._anyControlsHaveStatus(An)
            ? An
            : Jt;
        }
        _anyControlsHaveStatus(y) {
          return this._anyControls((m) => m.status === y);
        }
        _anyControlsDirty() {
          return this._anyControls((y) => y.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((y) => y.touched);
        }
        _updatePristine(y = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        _updateTouched(y = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        _registerOnCollectionChange(y) {
          this._onCollectionChange = y;
        }
        _setUpdateStrategy(y) {
          B(y) && null != y.updateOn && (this._updateOn = y.updateOn);
        }
        _parentMarkedDirty(y) {
          return (
            !y &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(y) {
          return null;
        }
        _assignValidators(y) {
          (this._rawValidators = Array.isArray(y) ? y.slice() : y),
            (this._composedValidatorFn = (function b(_) {
              return Array.isArray(_) ? me(_) : _ || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(y) {
          (this._rawAsyncValidators = Array.isArray(y) ? y.slice() : y),
            (this._composedAsyncValidatorFn = (function O(_) {
              return Array.isArray(_) ? re(_) : _ || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ze extends rt {
        constructor(y, m, A) {
          super(ue(m), P(A, m)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(m),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(y, m) {
          return this.controls[y]
            ? this.controls[y]
            : ((this.controls[y] = m),
              m.setParent(this),
              m._registerOnCollectionChange(this._onCollectionChange),
              m);
        }
        addControl(y, m, A = {}) {
          this.registerControl(y, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(y, m = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            this.updateValueAndValidity({ emitEvent: m.emitEvent }),
            this._onCollectionChange();
        }
        setControl(y, m, A = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            m && this.registerControl(y, m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        contains(y) {
          return this.controls.hasOwnProperty(y) && this.controls[y].enabled;
        }
        setValue(y, m = {}) {
          He(this, !0, y),
            Object.keys(y).forEach((A) => {
              Te(this, !0, A),
                this.controls[A].setValue(y[A], {
                  onlySelf: !0,
                  emitEvent: m.emitEvent,
                });
            }),
            this.updateValueAndValidity(m);
        }
        patchValue(y, m = {}) {
          null != y &&
            (Object.keys(y).forEach((A) => {
              const ae = this.controls[A];
              ae &&
                ae.patchValue(y[A], { onlySelf: !0, emitEvent: m.emitEvent });
            }),
            this.updateValueAndValidity(m));
        }
        reset(y = {}, m = {}) {
          this._forEachChild((A, ae) => {
            A.reset(y[ae], { onlySelf: !0, emitEvent: m.emitEvent });
          }),
            this._updatePristine(m),
            this._updateTouched(m),
            this.updateValueAndValidity(m);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (y, m, A) => ((y[A] = m.getRawValue()), y)
          );
        }
        _syncPendingControls() {
          let y = this._reduceChildren(
            !1,
            (m, A) => !!A._syncPendingControls() || m
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          Object.keys(this.controls).forEach((m) => {
            const A = this.controls[m];
            A && y(A, m);
          });
        }
        _setUpControls() {
          this._forEachChild((y) => {
            y.setParent(this),
              y._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(y) {
          for (const [m, A] of Object.entries(this.controls))
            if (this.contains(m) && y(A)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (m, A, ae) => ((A.enabled || this.disabled) && (m[ae] = A.value), m)
          );
        }
        _reduceChildren(y, m) {
          let A = y;
          return (
            this._forEachChild((ae, et) => {
              A = m(A, ae, et);
            }),
            A
          );
        }
        _allControlsDisabled() {
          for (const y of Object.keys(this.controls))
            if (this.controls[y].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(y) {
          return this.controls.hasOwnProperty(y) ? this.controls[y] : null;
        }
      }
      const R = new l.OlP('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => W,
        }),
        W = 'always';
      function fe(_, y) {
        return [...y.path, _];
      }
      function Fe(_, y, m = W) {
        Zn(_, y),
          y.valueAccessor.writeValue(_.value),
          (_.disabled || 'always' === m) &&
            y.valueAccessor.setDisabledState?.(_.disabled),
          (function eo(_, y) {
            y.valueAccessor.registerOnChange((m) => {
              (_._pendingValue = m),
                (_._pendingChange = !0),
                (_._pendingDirty = !0),
                'change' === _.updateOn && Jn(_, y);
            });
          })(_, y),
          (function Sr(_, y) {
            const m = (A, ae) => {
              y.valueAccessor.writeValue(A), ae && y.viewToModelUpdate(A);
            };
            _.registerOnChange(m),
              y._registerOnDestroy(() => {
                _._unregisterOnChange(m);
              });
          })(_, y),
          (function _o(_, y) {
            y.valueAccessor.registerOnTouched(() => {
              (_._pendingTouched = !0),
                'blur' === _.updateOn && _._pendingChange && Jn(_, y),
                'submit' !== _.updateOn && _.markAsTouched();
            });
          })(_, y),
          (function Ht(_, y) {
            if (y.valueAccessor.setDisabledState) {
              const m = (A) => {
                y.valueAccessor.setDisabledState(A);
              };
              _.registerOnDisabledChange(m),
                y._registerOnDestroy(() => {
                  _._unregisterOnDisabledChange(m);
                });
            }
          })(_, y);
      }
      function Je(_, y, m = !0) {
        const A = () => {};
        y.valueAccessor &&
          (y.valueAccessor.registerOnChange(A),
          y.valueAccessor.registerOnTouched(A)),
          Rn(_, y),
          _ &&
            (y._invokeOnDestroyCallbacks(),
            _._registerOnCollectionChange(() => {}));
      }
      function St(_, y) {
        _.forEach((m) => {
          m.registerOnValidatorChange && m.registerOnValidatorChange(y);
        });
      }
      function Zn(_, y) {
        const m = Ie(_);
        null !== y.validator
          ? _.setValidators(ce(m, y.validator))
          : 'function' == typeof m && _.setValidators([m]);
        const A = Oe(_);
        null !== y.asyncValidator
          ? _.setAsyncValidators(ce(A, y.asyncValidator))
          : 'function' == typeof A && _.setAsyncValidators([A]);
        const ae = () => _.updateValueAndValidity();
        St(y._rawValidators, ae), St(y._rawAsyncValidators, ae);
      }
      function Rn(_, y) {
        let m = !1;
        if (null !== _) {
          if (null !== y.validator) {
            const ae = Ie(_);
            if (Array.isArray(ae) && ae.length > 0) {
              const et = ae.filter((Ut) => Ut !== y.validator);
              et.length !== ae.length && ((m = !0), _.setValidators(et));
            }
          }
          if (null !== y.asyncValidator) {
            const ae = Oe(_);
            if (Array.isArray(ae) && ae.length > 0) {
              const et = ae.filter((Ut) => Ut !== y.asyncValidator);
              et.length !== ae.length && ((m = !0), _.setAsyncValidators(et));
            }
          }
        }
        const A = () => {};
        return St(y._rawValidators, A), St(y._rawAsyncValidators, A), m;
      }
      function Jn(_, y) {
        _._pendingDirty && _.markAsDirty(),
          _.setValue(_._pendingValue, { emitModelToViewChange: !1 }),
          y.viewToModelUpdate(_._pendingValue),
          (_._pendingChange = !1);
      }
      function to(_, y) {
        if (!_.hasOwnProperty('model')) return !1;
        const m = _.model;
        return !!m.isFirstChange() || !Object.is(y, m.currentValue);
      }
      function tn(_, y) {
        if (!y) return null;
        let m, A, ae;
        return (
          Array.isArray(y),
          y.forEach((et) => {
            et.constructor === te
              ? (m = et)
              : (function Eo(_) {
                  return Object.getPrototypeOf(_.constructor) === $;
                })(et)
              ? (A = et)
              : (ae = et);
          }),
          ae || A || m || null
        );
      }
      function xt(_, y) {
        const m = _.indexOf(y);
        m > -1 && _.splice(m, 1);
      }
      function Qn(_) {
        return (
          'object' == typeof _ &&
          null !== _ &&
          2 === Object.keys(_).length &&
          'value' in _ &&
          'disabled' in _
        );
      }
      const Pt = class extends rt {
        constructor(y = null, m, A) {
          super(ue(m), P(A, m)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(y),
            this._setUpdateStrategy(m),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            B(m) &&
              (m.nonNullable || m.initialValueIsDefault) &&
              (this.defaultValue = Qn(y) ? y.value : y);
        }
        setValue(y, m = {}) {
          (this.value = this._pendingValue = y),
            this._onChange.length &&
              !1 !== m.emitModelToViewChange &&
              this._onChange.forEach((A) =>
                A(this.value, !1 !== m.emitViewToModelChange)
              ),
            this.updateValueAndValidity(m);
        }
        patchValue(y, m = {}) {
          this.setValue(y, m);
        }
        reset(y = this.defaultValue, m = {}) {
          this._applyFormState(y),
            this.markAsPristine(m),
            this.markAsUntouched(m),
            this.setValue(this.value, m),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(y) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(y) {
          this._onChange.push(y);
        }
        _unregisterOnChange(y) {
          xt(this._onChange, y);
        }
        registerOnDisabledChange(y) {
          this._onDisabledChange.push(y);
        }
        _unregisterOnDisabledChange(y) {
          xt(this._onDisabledChange, y);
        }
        _forEachChild(y) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(y) {
          Qn(y)
            ? ((this.value = this._pendingValue = y.value),
              y.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = y);
        }
      };
      let ut = (() => {
          class _ extends Ve {
            ngOnInit() {
              this._checkParentType(), this.formDirective.addFormGroup(this);
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeFormGroup(this);
            }
            get control() {
              return this.formDirective.getFormGroup(this);
            }
            get path() {
              return fe(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
          }
          return (
            (_.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = l.n5z(_)))(A || _);
              };
            })()),
            (_.ɵdir = l.lG2({ type: _, features: [l.qOj] })),
            _
          );
        })(),
        Ho = (() => {
          class _ {}
          return (
            (_.ɵfac = function (m) {
              return new (m || _)();
            }),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
              ],
              hostAttrs: ['novalidate', ''],
            })),
            _
          );
        })(),
        Ur = (() => {
          class _ {}
          return (
            (_.ɵfac = function (m) {
              return new (m || _)();
            }),
            (_.ɵmod = l.oAB({ type: _ })),
            (_.ɵinj = l.cJS({})),
            _
          );
        })();
      const ln = new l.OlP('NgModelWithFormControlWarning'),
        Fn = { provide: Kt, useExisting: (0, l.Gpc)(() => jr) };
      let jr = (() => {
        class _ extends Kt {
          set isDisabled(m) {}
          constructor(m, A, ae, et, Ut) {
            super(),
              (this._ngModelWarningConfig = et),
              (this.callSetDisabledState = Ut),
              (this.update = new l.vpe()),
              (this._ngModelWarningSent = !1),
              this._setValidators(m),
              this._setAsyncValidators(A),
              (this.valueAccessor = tn(0, ae));
          }
          ngOnChanges(m) {
            if (this._isControlChanged(m)) {
              const A = m.form.previousValue;
              A && Je(A, this, !1),
                Fe(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            to(m, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && Je(this.form, this, !1);
          }
          get path() {
            return [];
          }
          get control() {
            return this.form;
          }
          viewToModelUpdate(m) {
            (this.viewModel = m), this.update.emit(m);
          }
          _isControlChanged(m) {
            return m.hasOwnProperty('form');
          }
        }
        return (
          (_._ngModelWarningSentOnce = !1),
          (_.ɵfac = function (m) {
            return new (m || _)(
              l.Y36(Ne, 10),
              l.Y36(Me, 10),
              l.Y36(Z, 10),
              l.Y36(ln, 8),
              l.Y36(R, 8)
            );
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: ['formControl', 'form'],
              isDisabled: ['disabled', 'isDisabled'],
              model: ['ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [l._Bn([Fn]), l.qOj, l.TTD],
          })),
          _
        );
      })();
      const Ir = { provide: Ve, useExisting: (0, l.Gpc)(() => tr) };
      let tr = (() => {
        class _ extends Ve {
          constructor(m, A, ae) {
            super(),
              (this.callSetDisabledState = ae),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new l.vpe()),
              this._setValidators(m),
              this._setAsyncValidators(A);
          }
          ngOnChanges(m) {
            this._checkFormPresent(),
              m.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (Rn(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(m) {
            const A = this.form.get(m.path);
            return (
              Fe(A, m, this.callSetDisabledState),
              A.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(m),
              A
            );
          }
          getControl(m) {
            return this.form.get(m.path);
          }
          removeControl(m) {
            Je(m.control || null, m, !1),
              (function ze(_, y) {
                const m = _.indexOf(y);
                m > -1 && _.splice(m, 1);
              })(this.directives, m);
          }
          addFormGroup(m) {
            this._setUpFormContainer(m);
          }
          removeFormGroup(m) {
            this._cleanUpFormContainer(m);
          }
          getFormGroup(m) {
            return this.form.get(m.path);
          }
          addFormArray(m) {
            this._setUpFormContainer(m);
          }
          removeFormArray(m) {
            this._cleanUpFormContainer(m);
          }
          getFormArray(m) {
            return this.form.get(m.path);
          }
          updateModel(m, A) {
            this.form.get(m.path).setValue(A);
          }
          onSubmit(m) {
            return (
              (this.submitted = !0),
              (function Xn(_, y) {
                _._syncPendingControls(),
                  y.forEach((m) => {
                    const A = m.control;
                    'submit' === A.updateOn &&
                      A._pendingChange &&
                      (m.viewToModelUpdate(A._pendingValue),
                      (A._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(m),
              'dialog' === m?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(m) {
            this.form.reset(m), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((m) => {
              const A = m.control,
                ae = this.form.get(m.path);
              A !== ae &&
                (Je(A || null, m),
                ((_) => _ instanceof Pt)(ae) &&
                  (Fe(ae, m, this.callSetDisabledState), (m.control = ae)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(m) {
            const A = this.form.get(m.path);
            (function Uo(_, y) {
              Zn(_, y);
            })(A, m),
              A.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(m) {
            if (this.form) {
              const A = this.form.get(m.path);
              A &&
                (function Co(_, y) {
                  return Rn(_, y);
                })(A, m) &&
                A.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Zn(this.form, this), this._oldForm && Rn(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (_.ɵfac = function (m) {
            return new (m || _)(l.Y36(Ne, 10), l.Y36(Me, 10), l.Y36(R, 8));
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (m, A) {
              1 & m &&
                l.NdJ('submit', function (et) {
                  return A.onSubmit(et);
                })('reset', function () {
                  return A.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [l._Bn([Ir]), l.qOj, l.TTD],
          })),
          _
        );
      })();
      const On = { provide: Ve, useExisting: (0, l.Gpc)(() => Ar) };
      let Ar = (() => {
        class _ extends ut {
          constructor(m, A, ae) {
            super(),
              (this._parent = m),
              this._setValidators(A),
              this._setAsyncValidators(ae);
          }
          _checkParentType() {
            hr(this._parent);
          }
        }
        return (
          (_.ɵfac = function (m) {
            return new (m || _)(l.Y36(Ve, 13), l.Y36(Ne, 10), l.Y36(Me, 10));
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [['', 'formGroupName', '']],
            inputs: { name: ['formGroupName', 'name'] },
            features: [l._Bn([On]), l.qOj],
          })),
          _
        );
      })();
      const $o = { provide: Ve, useExisting: (0, l.Gpc)(() => Nn) };
      let Nn = (() => {
        class _ extends Ve {
          constructor(m, A, ae) {
            super(),
              (this._parent = m),
              this._setValidators(A),
              this._setAsyncValidators(ae);
          }
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormArray(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormArray(this);
          }
          get control() {
            return this.formDirective.getFormArray(this);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get path() {
            return fe(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          _checkParentType() {
            hr(this._parent);
          }
        }
        return (
          (_.ɵfac = function (m) {
            return new (m || _)(l.Y36(Ve, 13), l.Y36(Ne, 10), l.Y36(Me, 10));
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [['', 'formArrayName', '']],
            inputs: { name: ['formArrayName', 'name'] },
            features: [l._Bn([$o]), l.qOj],
          })),
          _
        );
      })();
      function hr(_) {
        return !(_ instanceof Ar || _ instanceof tr || _ instanceof Nn);
      }
      const ai = { provide: Kt, useExisting: (0, l.Gpc)(() => oo) };
      let oo = (() => {
        class _ extends Kt {
          set isDisabled(m) {}
          constructor(m, A, ae, et, Ut) {
            super(),
              (this._ngModelWarningConfig = Ut),
              (this._added = !1),
              (this.update = new l.vpe()),
              (this._ngModelWarningSent = !1),
              (this._parent = m),
              this._setValidators(A),
              this._setAsyncValidators(ae),
              (this.valueAccessor = tn(0, et));
          }
          ngOnChanges(m) {
            this._added || this._setUpControl(),
              to(m, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(m) {
            (this.viewModel = m), this.update.emit(m);
          }
          get path() {
            return fe(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              (this._added = !0);
          }
        }
        return (
          (_._ngModelWarningSentOnce = !1),
          (_.ɵfac = function (m) {
            return new (m || _)(
              l.Y36(Ve, 13),
              l.Y36(Ne, 10),
              l.Y36(Me, 10),
              l.Y36(Z, 10),
              l.Y36(ln, 8)
            );
          }),
          (_.ɵdir = l.lG2({
            type: _,
            selectors: [['', 'formControlName', '']],
            inputs: {
              name: ['formControlName', 'name'],
              isDisabled: ['disabled', 'isDisabled'],
              model: ['ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            features: [l._Bn([ai]), l.qOj, l.TTD],
          })),
          _
        );
      })();
      const li = { provide: Z, useExisting: (0, l.Gpc)(() => $r), multi: !0 };
      function pr(_, y) {
        return null == _
          ? `${y}`
          : (y && 'object' == typeof y && (y = 'Object'),
            `${_}: ${y}`.slice(0, 50));
      }
      let $r = (() => {
          class _ extends $ {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              this.value = m;
              const ae = pr(this._getOptionId(m), m);
              this.setProperty('value', ae);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                (this.value = this._getOptionValue(A)), m(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A), m)) return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function ui(_) {
                return _.split(':')[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A) : m;
            }
          }
          return (
            (_.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = l.n5z(_)))(A || _);
              };
            })()),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['select', 'formControlName', '', 3, 'multiple', ''],
                ['select', 'formControl', '', 3, 'multiple', ''],
                ['select', 'ngModel', '', 3, 'multiple', ''],
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  l.NdJ('change', function (et) {
                    return A.onChange(et.target.value);
                  })('blur', function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [l._Bn([li]), l.qOj],
            })),
            _
          );
        })(),
        Tr = (() => {
          class _ {
            constructor(m, A, ae) {
              (this._element = m),
                (this._renderer = A),
                (this._select = ae),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(m) {
              null != this._select &&
                (this._select._optionMap.set(this.id, m),
                this._setElementValue(pr(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._setElementValue(m),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'value',
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)(l.Y36(l.SBq), l.Y36(l.Qsj), l.Y36($r, 9));
            }),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [['option']],
              inputs: { ngValue: 'ngValue', value: 'value' },
            })),
            _
          );
        })();
      const Go = { provide: Z, useExisting: (0, l.Gpc)(() => io), multi: !0 };
      function zo(_, y) {
        return null == _
          ? `${y}`
          : ('string' == typeof y && (y = `'${y}'`),
            y && 'object' == typeof y && (y = 'Object'),
            `${_}: ${y}`.slice(0, 50));
      }
      let io = (() => {
          class _ extends $ {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              let A;
              if (((this.value = m), Array.isArray(m))) {
                const ae = m.map((et) => this._getOptionId(et));
                A = (et, Ut) => {
                  et._setSelected(ae.indexOf(Ut.toString()) > -1);
                };
              } else
                A = (ae, et) => {
                  ae._setSelected(!1);
                };
              this._optionMap.forEach(A);
            }
            registerOnChange(m) {
              this.onChange = (A) => {
                const ae = [],
                  et = A.selectedOptions;
                if (void 0 !== et) {
                  const Ut = et;
                  for (let bt = 0; bt < Ut.length; bt++) {
                    const mt = this._getOptionValue(Ut[bt].value);
                    ae.push(mt);
                  }
                } else {
                  const Ut = A.options;
                  for (let bt = 0; bt < Ut.length; bt++) {
                    const ye = Ut[bt];
                    if (ye.selected) {
                      const mt = this._getOptionValue(ye.value);
                      ae.push(mt);
                    }
                  }
                }
                (this.value = ae), m(ae);
              };
            }
            _registerOption(m) {
              const A = (this._idCounter++).toString();
              return this._optionMap.set(A, m), A;
            }
            _getOptionId(m) {
              for (const A of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(A)._value, m))
                  return A;
              return null;
            }
            _getOptionValue(m) {
              const A = (function ci(_) {
                return _.split(':')[0];
              })(m);
              return this._optionMap.has(A) ? this._optionMap.get(A)._value : m;
            }
          }
          return (
            (_.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = l.n5z(_)))(A || _);
              };
            })()),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['select', 'multiple', '', 'formControlName', ''],
                ['select', 'multiple', '', 'formControl', ''],
                ['select', 'multiple', '', 'ngModel', ''],
              ],
              hostBindings: function (m, A) {
                1 & m &&
                  l.NdJ('change', function (et) {
                    return A.onChange(et.target);
                  })('blur', function () {
                    return A.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [l._Bn([Go]), l.qOj],
            })),
            _
          );
        })(),
        bo = (() => {
          class _ {
            constructor(m, A, ae) {
              (this._element = m),
                (this._renderer = A),
                (this._select = ae),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(m) {
              null != this._select &&
                ((this._value = m),
                this._setElementValue(zo(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._select
                ? ((this._value = m),
                  this._setElementValue(zo(this.id, m)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(m);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'value',
                m
              );
            }
            _setSelected(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'selected',
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)(l.Y36(l.SBq), l.Y36(l.Qsj), l.Y36(io, 9));
            }),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [['option']],
              inputs: { ngValue: 'ngValue', value: 'value' },
            })),
            _
          );
        })();
      let Or = (() => {
        class _ {
          constructor() {
            this._validator = ot;
          }
          ngOnChanges(m) {
            if (this.inputName in m) {
              const A = this.normalizeInput(m[this.inputName].currentValue);
              (this._enabled = this.enabled(A)),
                (this._validator = this._enabled
                  ? this.createValidator(A)
                  : ot),
                this._onChange && this._onChange();
            }
          }
          validate(m) {
            return this._validator(m);
          }
          registerOnValidatorChange(m) {
            this._onChange = m;
          }
          enabled(m) {
            return null != m;
          }
        }
        return (
          (_.ɵfac = function (m) {
            return new (m || _)();
          }),
          (_.ɵdir = l.lG2({ type: _, features: [l.TTD] })),
          _
        );
      })();
      const Mn = { provide: Ne, useExisting: (0, l.Gpc)(() => So), multi: !0 };
      let So = (() => {
          class _ extends Or {
            constructor() {
              super(...arguments),
                (this.inputName = 'maxlength'),
                (this.normalizeInput = (m) =>
                  (function gr(_) {
                    return 'number' == typeof _ ? _ : parseInt(_, 10);
                  })(m)),
                (this.createValidator = (m) => we(m));
            }
          }
          return (
            (_.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = l.n5z(_)))(A || _);
              };
            })()),
            (_.ɵdir = l.lG2({
              type: _,
              selectors: [
                ['', 'maxlength', '', 'formControlName', ''],
                ['', 'maxlength', '', 'formControl', ''],
                ['', 'maxlength', '', 'ngModel', ''],
              ],
              hostVars: 1,
              hostBindings: function (m, A) {
                2 & m && l.uIk('maxlength', A._enabled ? A.maxlength : null);
              },
              inputs: { maxlength: 'maxlength' },
              features: [l._Bn([Mn]), l.qOj],
            })),
            _
          );
        })(),
        Yo = (() => {
          class _ {}
          return (
            (_.ɵfac = function (m) {
              return new (m || _)();
            }),
            (_.ɵmod = l.oAB({ type: _ })),
            (_.ɵinj = l.cJS({ imports: [Ur] })),
            _
          );
        })();
      class Zo extends rt {
        constructor(y, m, A) {
          super(ue(m), P(A, m)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(m),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(y) {
          return this.controls[this._adjustIndex(y)];
        }
        push(y, m = {}) {
          this.controls.push(y),
            this._registerControl(y),
            this.updateValueAndValidity({ emitEvent: m.emitEvent }),
            this._onCollectionChange();
        }
        insert(y, m, A = {}) {
          this.controls.splice(y, 0, m),
            this._registerControl(m),
            this.updateValueAndValidity({ emitEvent: A.emitEvent });
        }
        removeAt(y, m = {}) {
          let A = this._adjustIndex(y);
          A < 0 && (A = 0),
            this.controls[A] &&
              this.controls[A]._registerOnCollectionChange(() => {}),
            this.controls.splice(A, 1),
            this.updateValueAndValidity({ emitEvent: m.emitEvent });
        }
        setControl(y, m, A = {}) {
          let ae = this._adjustIndex(y);
          ae < 0 && (ae = 0),
            this.controls[ae] &&
              this.controls[ae]._registerOnCollectionChange(() => {}),
            this.controls.splice(ae, 1),
            m && (this.controls.splice(ae, 0, m), this._registerControl(m)),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(y, m = {}) {
          He(this, !1, y),
            y.forEach((A, ae) => {
              Te(this, !1, ae),
                this.at(ae).setValue(A, {
                  onlySelf: !0,
                  emitEvent: m.emitEvent,
                });
            }),
            this.updateValueAndValidity(m);
        }
        patchValue(y, m = {}) {
          null != y &&
            (y.forEach((A, ae) => {
              this.at(ae) &&
                this.at(ae).patchValue(A, {
                  onlySelf: !0,
                  emitEvent: m.emitEvent,
                });
            }),
            this.updateValueAndValidity(m));
        }
        reset(y = [], m = {}) {
          this._forEachChild((A, ae) => {
            A.reset(y[ae], { onlySelf: !0, emitEvent: m.emitEvent });
          }),
            this._updatePristine(m),
            this._updateTouched(m),
            this.updateValueAndValidity(m);
        }
        getRawValue() {
          return this.controls.map((y) => y.getRawValue());
        }
        clear(y = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((m) => m._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: y.emitEvent }));
        }
        _adjustIndex(y) {
          return y < 0 ? y + this.length : y;
        }
        _syncPendingControls() {
          let y = this.controls.reduce(
            (m, A) => !!A._syncPendingControls() || m,
            !1
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          this.controls.forEach((m, A) => {
            y(m, A);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((y) => y.enabled || this.disabled)
            .map((y) => y.value);
        }
        _anyControls(y) {
          return this.controls.some((m) => m.enabled && y(m));
        }
        _setUpControls() {
          this._forEachChild((y) => this._registerControl(y));
        }
        _allControlsDisabled() {
          for (const y of this.controls) if (y.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(y) {
          y.setParent(this),
            y._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(y) {
          return this.at(y) ?? null;
        }
      }
      let Pr = (() => {
          class _ {
            static withConfig(m) {
              return {
                ngModule: _,
                providers: [
                  { provide: R, useValue: m.callSetDisabledState ?? W },
                ],
              };
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)();
            }),
            (_.ɵmod = l.oAB({ type: _ })),
            (_.ɵinj = l.cJS({ imports: [Yo] })),
            _
          );
        })(),
        lt = (() => {
          class _ {
            static withConfig(m) {
              return {
                ngModule: _,
                providers: [
                  {
                    provide: ln,
                    useValue: m.warnOnNgModelWithFormControl ?? 'always',
                  },
                  { provide: R, useValue: m.callSetDisabledState ?? W },
                ],
              };
            }
          }
          return (
            (_.ɵfac = function (m) {
              return new (m || _)();
            }),
            (_.ɵmod = l.oAB({ type: _ })),
            (_.ɵinj = l.cJS({ imports: [Yo] })),
            _
          );
        })();
    },
    1481: (Re, q, C) => {
      C.d(q, { Dx: () => it, H7: () => rt, b2: () => yn, q6: () => ur });
      var l = C(6895),
        v = C(4650);
      class k extends l.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class j extends k {
        static makeCurrent() {
          (0, l.HT)(new j());
        }
        onAndCancel(G, R, W) {
          return (
            G.addEventListener(R, W, !1),
            () => {
              G.removeEventListener(R, W, !1);
            }
          );
        }
        dispatchEvent(G, R) {
          G.dispatchEvent(R);
        }
        remove(G) {
          G.parentNode && G.parentNode.removeChild(G);
        }
        createElement(G, R) {
          return (R = R || this.getDefaultDocument()).createElement(G);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(G) {
          return G.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(G) {
          return G instanceof DocumentFragment;
        }
        getGlobalEventTarget(G, R) {
          return 'window' === R
            ? window
            : 'document' === R
            ? G
            : 'body' === R
            ? G.body
            : null;
        }
        getBaseHref(G) {
          const R = (function V() {
            return (
              (H = H || document.querySelector('base')),
              H ? H.getAttribute('href') : null
            );
          })();
          return null == R
            ? null
            : (function Z(z) {
                ($ = $ || document.createElement('a')),
                  $.setAttribute('href', z);
                const G = $.pathname;
                return '/' === G.charAt(0) ? G : `/${G}`;
              })(R);
        }
        resetBaseElement() {
          H = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(G) {
          return (0, l.Mx)(document.cookie, G);
        }
      }
      let $,
        H = null;
      const X = new v.OlP('TRANSITION_ID'),
        U = [
          {
            provide: v.ip1,
            useFactory: function Q(z, G, R) {
              return () => {
                R.get(v.CZH).donePromise.then(() => {
                  const W = (0, l.q)(),
                    fe = G.querySelectorAll(`style[ng-transition="${z}"]`);
                  for (let Fe = 0; Fe < fe.length; Fe++) W.remove(fe[Fe]);
                });
              };
            },
            deps: [X, l.K0, v.zs3],
            multi: !0,
          },
        ];
      let se = (() => {
        class z {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (z.ɵfac = function (R) {
            return new (R || z)();
          }),
          (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const te = new v.OlP('EventManagerPlugins');
      let De = (() => {
        class z {
          constructor(R, W) {
            (this._zone = W),
              (this._eventNameToPlugin = new Map()),
              R.forEach((fe) => {
                fe.manager = this;
              }),
              (this._plugins = R.slice().reverse());
          }
          addEventListener(R, W, fe) {
            return this._findPluginFor(W).addEventListener(R, W, fe);
          }
          addGlobalEventListener(R, W, fe) {
            return this._findPluginFor(W).addGlobalEventListener(R, W, fe);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(R) {
            const W = this._eventNameToPlugin.get(R);
            if (W) return W;
            const fe = this._plugins;
            for (let Fe = 0; Fe < fe.length; Fe++) {
              const Je = fe[Fe];
              if (Je.supports(R)) return this._eventNameToPlugin.set(R, Je), Je;
            }
            throw new Error(`No event manager plugin found for event ${R}`);
          }
        }
        return (
          (z.ɵfac = function (R) {
            return new (R || z)(v.LFG(te), v.LFG(v.R0b));
          }),
          (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class ke {
        constructor(G) {
          this._doc = G;
        }
        addGlobalEventListener(G, R, W) {
          const fe = (0, l.q)().getGlobalEventTarget(this._doc, G);
          if (!fe)
            throw new Error(`Unsupported event target ${fe} for event ${R}`);
          return this.addEventListener(fe, R, W);
        }
      }
      let de = (() => {
          class z {
            constructor() {
              this.usageCount = new Map();
            }
            addStyles(R) {
              for (const W of R)
                1 === this.changeUsageCount(W, 1) && this.onStyleAdded(W);
            }
            removeStyles(R) {
              for (const W of R)
                0 === this.changeUsageCount(W, -1) && this.onStyleRemoved(W);
            }
            onStyleRemoved(R) {}
            onStyleAdded(R) {}
            getAllStyles() {
              return this.usageCount.keys();
            }
            changeUsageCount(R, W) {
              const fe = this.usageCount;
              let Fe = fe.get(R) ?? 0;
              return (Fe += W), Fe > 0 ? fe.set(R, Fe) : fe.delete(R), Fe;
            }
            ngOnDestroy() {
              for (const R of this.getAllStyles()) this.onStyleRemoved(R);
              this.usageCount.clear();
            }
          }
          return (
            (z.ɵfac = function (R) {
              return new (R || z)();
            }),
            (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })(),
        Ne = (() => {
          class z extends de {
            constructor(R) {
              super(),
                (this.doc = R),
                (this.styleRef = new Map()),
                (this.hostNodes = new Set()),
                this.resetHostNodes();
            }
            onStyleAdded(R) {
              for (const W of this.hostNodes) this.addStyleToHost(W, R);
            }
            onStyleRemoved(R) {
              const W = this.styleRef;
              W.get(R)?.forEach((Fe) => Fe.remove()), W.delete(R);
            }
            ngOnDestroy() {
              super.ngOnDestroy(), this.styleRef.clear(), this.resetHostNodes();
            }
            addHost(R) {
              this.hostNodes.add(R);
              for (const W of this.getAllStyles()) this.addStyleToHost(R, W);
            }
            removeHost(R) {
              this.hostNodes.delete(R);
            }
            addStyleToHost(R, W) {
              const fe = this.doc.createElement('style');
              (fe.textContent = W), R.appendChild(fe);
              const Fe = this.styleRef.get(W);
              Fe ? Fe.push(fe) : this.styleRef.set(W, [fe]);
            }
            resetHostNodes() {
              const R = this.hostNodes;
              R.clear(), R.add(this.doc.head);
            }
          }
          return (
            (z.ɵfac = function (R) {
              return new (R || z)(v.LFG(l.K0));
            }),
            (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      const Me = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/MathML/',
        },
        We = /%COMP%/g,
        Se = new v.OlP('RemoveStylesOnCompDestory', {
          providedIn: 'root',
          factory: () => !1,
        });
      function Le(z, G) {
        return G.flat(100).map((R) => R.replace(We, z));
      }
      function ot(z) {
        return (G) => {
          if ('__ngUnwrap__' === G) return z;
          !1 === z(G) && (G.preventDefault(), (G.returnValue = !1));
        };
      }
      let Ke = (() => {
        class z {
          constructor(R, W, fe, Fe) {
            (this.eventManager = R),
              (this.sharedStylesHost = W),
              (this.appId = fe),
              (this.removeStylesOnCompDestory = Fe),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new oe(R));
          }
          createRenderer(R, W) {
            if (!R || !W) return this.defaultRenderer;
            const fe = this.getOrCreateRenderer(R, W);
            return (
              fe instanceof me
                ? fe.applyToHost(R)
                : fe instanceof Y && fe.applyStyles(),
              fe
            );
          }
          getOrCreateRenderer(R, W) {
            const fe = this.rendererByCompId;
            let Fe = fe.get(W.id);
            if (!Fe) {
              const Je = this.eventManager,
                St = this.sharedStylesHost,
                Ht = this.removeStylesOnCompDestory;
              switch (W.encapsulation) {
                case v.ifc.Emulated:
                  Fe = new me(Je, St, W, this.appId, Ht);
                  break;
                case v.ifc.ShadowDom:
                  return new _e(Je, St, R, W);
                default:
                  Fe = new Y(Je, St, W, Ht);
              }
              (Fe.onDestroy = () => fe.delete(W.id)), fe.set(W.id, Fe);
            }
            return Fe;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          begin() {}
          end() {}
        }
        return (
          (z.ɵfac = function (R) {
            return new (R || z)(v.LFG(De), v.LFG(Ne), v.LFG(v.AFp), v.LFG(Se));
          }),
          (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class oe {
        constructor(G) {
          (this.eventManager = G),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(G, R) {
          return R
            ? document.createElementNS(Me[R] || R, G)
            : document.createElement(G);
        }
        createComment(G) {
          return document.createComment(G);
        }
        createText(G) {
          return document.createTextNode(G);
        }
        appendChild(G, R) {
          (ve(G) ? G.content : G).appendChild(R);
        }
        insertBefore(G, R, W) {
          G && (ve(G) ? G.content : G).insertBefore(R, W);
        }
        removeChild(G, R) {
          G && G.removeChild(R);
        }
        selectRootElement(G, R) {
          let W = 'string' == typeof G ? document.querySelector(G) : G;
          if (!W)
            throw new Error(`The selector "${G}" did not match any elements`);
          return R || (W.textContent = ''), W;
        }
        parentNode(G) {
          return G.parentNode;
        }
        nextSibling(G) {
          return G.nextSibling;
        }
        setAttribute(G, R, W, fe) {
          if (fe) {
            R = fe + ':' + R;
            const Fe = Me[fe];
            Fe ? G.setAttributeNS(Fe, R, W) : G.setAttribute(R, W);
          } else G.setAttribute(R, W);
        }
        removeAttribute(G, R, W) {
          if (W) {
            const fe = Me[W];
            fe ? G.removeAttributeNS(fe, R) : G.removeAttribute(`${W}:${R}`);
          } else G.removeAttribute(R);
        }
        addClass(G, R) {
          G.classList.add(R);
        }
        removeClass(G, R) {
          G.classList.remove(R);
        }
        setStyle(G, R, W, fe) {
          fe & (v.JOm.DashCase | v.JOm.Important)
            ? G.style.setProperty(R, W, fe & v.JOm.Important ? 'important' : '')
            : (G.style[R] = W);
        }
        removeStyle(G, R, W) {
          W & v.JOm.DashCase ? G.style.removeProperty(R) : (G.style[R] = '');
        }
        setProperty(G, R, W) {
          G[R] = W;
        }
        setValue(G, R) {
          G.nodeValue = R;
        }
        listen(G, R, W) {
          return 'string' == typeof G
            ? this.eventManager.addGlobalEventListener(G, R, ot(W))
            : this.eventManager.addEventListener(G, R, ot(W));
        }
      }
      function ve(z) {
        return 'TEMPLATE' === z.tagName && void 0 !== z.content;
      }
      class _e extends oe {
        constructor(G, R, W, fe) {
          super(G),
            (this.sharedStylesHost = R),
            (this.hostEl = W),
            (this.shadowRoot = W.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Fe = Le(fe.id, fe.styles);
          for (const Je of Fe) {
            const St = document.createElement('style');
            (St.textContent = Je), this.shadowRoot.appendChild(St);
          }
        }
        nodeOrShadowRoot(G) {
          return G === this.hostEl ? this.shadowRoot : G;
        }
        appendChild(G, R) {
          return super.appendChild(this.nodeOrShadowRoot(G), R);
        }
        insertBefore(G, R, W) {
          return super.insertBefore(this.nodeOrShadowRoot(G), R, W);
        }
        removeChild(G, R) {
          return super.removeChild(this.nodeOrShadowRoot(G), R);
        }
        parentNode(G) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(G))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class Y extends oe {
        constructor(G, R, W, fe, Fe = W.id) {
          super(G),
            (this.sharedStylesHost = R),
            (this.removeStylesOnCompDestory = fe),
            (this.rendererUsageCount = 0),
            (this.styles = Le(Fe, W.styles));
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles),
            this.rendererUsageCount++;
        }
        destroy() {
          this.removeStylesOnCompDestory &&
            (this.sharedStylesHost.removeStyles(this.styles),
            this.rendererUsageCount--,
            0 === this.rendererUsageCount && this.onDestroy?.());
        }
      }
      class me extends Y {
        constructor(G, R, W, fe, Fe) {
          const Je = fe + '-' + W.id;
          super(G, R, W, Fe, Je),
            (this.contentAttr = (function xe(z) {
              return '_ngcontent-%COMP%'.replace(We, z);
            })(Je)),
            (this.hostAttr = (function we(z) {
              return '_nghost-%COMP%'.replace(We, z);
            })(Je));
        }
        applyToHost(G) {
          this.applyStyles(), this.setAttribute(G, this.hostAttr, '');
        }
        createElement(G, R) {
          const W = super.createElement(G, R);
          return super.setAttribute(W, this.contentAttr, ''), W;
        }
      }
      let F = (() => {
        class z extends ke {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return !0;
          }
          addEventListener(R, W, fe) {
            return (
              R.addEventListener(W, fe, !1),
              () => this.removeEventListener(R, W, fe)
            );
          }
          removeEventListener(R, W, fe) {
            return R.removeEventListener(W, fe);
          }
        }
        return (
          (z.ɵfac = function (R) {
            return new (R || z)(v.LFG(l.K0));
          }),
          (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const re = ['alt', 'control', 'meta', 'shift'],
        ce = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Ie = {
          alt: (z) => z.altKey,
          control: (z) => z.ctrlKey,
          meta: (z) => z.metaKey,
          shift: (z) => z.shiftKey,
        };
      let Oe = (() => {
        class z extends ke {
          constructor(R) {
            super(R);
          }
          supports(R) {
            return null != z.parseEventName(R);
          }
          addEventListener(R, W, fe) {
            const Fe = z.parseEventName(W),
              Je = z.eventCallback(Fe.fullKey, fe, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, l.q)().onAndCancel(R, Fe.domEventName, Je)
              );
          }
          static parseEventName(R) {
            const W = R.toLowerCase().split('.'),
              fe = W.shift();
            if (0 === W.length || ('keydown' !== fe && 'keyup' !== fe))
              return null;
            const Fe = z._normalizeKey(W.pop());
            let Je = '',
              St = W.indexOf('code');
            if (
              (St > -1 && (W.splice(St, 1), (Je = 'code.')),
              re.forEach((Zn) => {
                const Rn = W.indexOf(Zn);
                Rn > -1 && (W.splice(Rn, 1), (Je += Zn + '.'));
              }),
              (Je += Fe),
              0 != W.length || 0 === Fe.length)
            )
              return null;
            const Ht = {};
            return (Ht.domEventName = fe), (Ht.fullKey = Je), Ht;
          }
          static matchEventFullKeyCode(R, W) {
            let fe = ce[R.key] || R.key,
              Fe = '';
            return (
              W.indexOf('code.') > -1 && ((fe = R.code), (Fe = 'code.')),
              !(null == fe || !fe) &&
                ((fe = fe.toLowerCase()),
                ' ' === fe ? (fe = 'space') : '.' === fe && (fe = 'dot'),
                re.forEach((Je) => {
                  Je !== fe && (0, Ie[Je])(R) && (Fe += Je + '.');
                }),
                (Fe += fe),
                Fe === W)
            );
          }
          static eventCallback(R, W, fe) {
            return (Fe) => {
              z.matchEventFullKeyCode(Fe, R) && fe.runGuarded(() => W(Fe));
            };
          }
          static _normalizeKey(R) {
            return 'esc' === R ? 'escape' : R;
          }
        }
        return (
          (z.ɵfac = function (R) {
            return new (R || z)(v.LFG(l.K0));
          }),
          (z.ɵprov = v.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const ur = (0, v.eFA)(v._c5, 'browser', [
          { provide: v.Lbi, useValue: l.bD },
          {
            provide: v.g9A,
            useValue: function Ve() {
              j.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: l.K0,
            useFactory: function Vn() {
              return (0, v.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        kt = new v.OlP(''),
        Vt = [
          {
            provide: v.rWj,
            useClass: class L {
              addToWindow(G) {
                (v.dqk.getAngularTestability = (W, fe = !0) => {
                  const Fe = G.findTestabilityInTree(W, fe);
                  if (null == Fe)
                    throw new Error('Could not find testability for element.');
                  return Fe;
                }),
                  (v.dqk.getAllAngularTestabilities = () =>
                    G.getAllTestabilities()),
                  (v.dqk.getAllAngularRootElements = () =>
                    G.getAllRootElements()),
                  v.dqk.frameworkStabilizers ||
                    (v.dqk.frameworkStabilizers = []),
                  v.dqk.frameworkStabilizers.push((W) => {
                    const fe = v.dqk.getAllAngularTestabilities();
                    let Fe = fe.length,
                      Je = !1;
                    const St = function (Ht) {
                      (Je = Je || Ht), Fe--, 0 == Fe && W(Je);
                    };
                    fe.forEach(function (Ht) {
                      Ht.whenStable(St);
                    });
                  });
              }
              findTestabilityInTree(G, R, W) {
                return null == R
                  ? null
                  : G.getTestability(R) ??
                      (W
                        ? (0, l.q)().isShadowRoot(R)
                          ? this.findTestabilityInTree(G, R.host, !0)
                          : this.findTestabilityInTree(G, R.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: v.lri, useClass: v.dDg, deps: [v.R0b, v.eoX, v.rWj] },
          { provide: v.dDg, useClass: v.dDg, deps: [v.R0b, v.eoX, v.rWj] },
        ],
        qe = [
          { provide: v.zSh, useValue: 'root' },
          {
            provide: v.qLn,
            useFactory: function Kt() {
              return new v.qLn();
            },
            deps: [],
          },
          { provide: te, useClass: F, multi: !0, deps: [l.K0, v.R0b, v.Lbi] },
          { provide: te, useClass: Oe, multi: !0, deps: [l.K0] },
          { provide: Ke, useClass: Ke, deps: [De, Ne, v.AFp, Se] },
          { provide: v.FYo, useExisting: Ke },
          { provide: de, useExisting: Ne },
          { provide: Ne, useClass: Ne, deps: [l.K0] },
          { provide: De, useClass: De, deps: [te, v.R0b] },
          { provide: l.JF, useClass: se, deps: [] },
          [],
        ];
      let yn = (() => {
          class z {
            constructor(R) {}
            static withServerTransition(R) {
              return {
                ngModule: z,
                providers: [
                  { provide: v.AFp, useValue: R.appId },
                  { provide: X, useExisting: v.AFp },
                  U,
                ],
              };
            }
          }
          return (
            (z.ɵfac = function (R) {
              return new (R || z)(v.LFG(kt, 12));
            }),
            (z.ɵmod = v.oAB({ type: z })),
            (z.ɵinj = v.cJS({
              providers: [...qe, ...Vt],
              imports: [l.ez, v.hGG],
            })),
            z
          );
        })(),
        it = (() => {
          class z {
            constructor(R) {
              this._doc = R;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(R) {
              this._doc.title = R || '';
            }
          }
          return (
            (z.ɵfac = function (R) {
              return new (R || z)(v.LFG(l.K0));
            }),
            (z.ɵprov = v.Yz7({
              token: z,
              factory: function (R) {
                let W = null;
                return (
                  (W = R
                    ? new R()
                    : (function In() {
                        return new it((0, v.LFG)(l.K0));
                      })()),
                  W
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
      typeof window < 'u' && window;
      let rt = (() => {
          class z {}
          return (
            (z.ɵfac = function (R) {
              return new (R || z)();
            }),
            (z.ɵprov = v.Yz7({
              token: z,
              factory: function (R) {
                let W = null;
                return (W = R ? new (R || z)() : v.LFG(Et)), W;
              },
              providedIn: 'root',
            })),
            z
          );
        })(),
        Et = (() => {
          class z extends rt {
            constructor(R) {
              super(), (this._doc = R);
            }
            sanitize(R, W) {
              if (null == W) return null;
              switch (R) {
                case v.q3G.NONE:
                  return W;
                case v.q3G.HTML:
                  return (0, v.qzn)(W, 'HTML')
                    ? (0, v.z3N)(W)
                    : (0, v.EiD)(this._doc, String(W)).toString();
                case v.q3G.STYLE:
                  return (0, v.qzn)(W, 'Style') ? (0, v.z3N)(W) : W;
                case v.q3G.SCRIPT:
                  if ((0, v.qzn)(W, 'Script')) return (0, v.z3N)(W);
                  throw new Error('unsafe value used in a script context');
                case v.q3G.URL:
                  return (0, v.qzn)(W, 'URL')
                    ? (0, v.z3N)(W)
                    : (0, v.mCW)(String(W));
                case v.q3G.RESOURCE_URL:
                  if ((0, v.qzn)(W, 'ResourceURL')) return (0, v.z3N)(W);
                  throw new Error(
                    `unsafe value used in a resource URL context (see ${v.JZr})`
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${R} (see ${v.JZr})`
                  );
              }
            }
            bypassSecurityTrustHtml(R) {
              return (0, v.JVY)(R);
            }
            bypassSecurityTrustStyle(R) {
              return (0, v.L6k)(R);
            }
            bypassSecurityTrustScript(R) {
              return (0, v.eBb)(R);
            }
            bypassSecurityTrustUrl(R) {
              return (0, v.LAX)(R);
            }
            bypassSecurityTrustResourceUrl(R) {
              return (0, v.pB0)(R);
            }
          }
          return (
            (z.ɵfac = function (R) {
              return new (R || z)(v.LFG(l.K0));
            }),
            (z.ɵprov = v.Yz7({
              token: z,
              factory: function (R) {
                let W = null;
                return (
                  (W = R
                    ? new R()
                    : (function Ze(z) {
                        return new Et(z.get(l.K0));
                      })(v.LFG(v.zs3))),
                  W
                );
              },
              providedIn: 'root',
            })),
            z
          );
        })();
    },
    3082: (Re, q, C) => {
      C.d(q, {
        gz: () => pr,
        m2: () => bn,
        F0: () => jn,
        rH: () => Nr,
        Od: () => ya,
        Bz: () => xo,
        lC: () => so,
        eV: () => Zi,
      });
      var l = C(4650),
        v = C(2076),
        k = C(9646),
        j = C(1135),
        H = C(6805),
        V = C(9751),
        $ = C(4742),
        Z = C(4671),
        X = C(3268),
        Q = C(3269),
        U = C(1810),
        L = C(5403),
        se = C(9672);
      function te(...u) {
        const c = (0, Q.yG)(u),
          s = (0, Q.jO)(u),
          { args: h, keys: D } = (0, $.D)(u);
        if (0 === h.length) return (0, v.D)([], c);
        const S = new V.y(
          (function De(u, c, s = Z.y) {
            return (h) => {
              ke(
                c,
                () => {
                  const { length: D } = u,
                    S = new Array(D);
                  let T = D,
                    J = D;
                  for (let ge = 0; ge < D; ge++)
                    ke(
                      c,
                      () => {
                        const je = (0, v.D)(u[ge], c);
                        let $e = !1;
                        je.subscribe(
                          (0, L.x)(
                            h,
                            (yt) => {
                              (S[ge] = yt),
                                $e || (($e = !0), J--),
                                J || h.next(s(S.slice()));
                            },
                            () => {
                              --T || h.complete();
                            }
                          )
                        );
                      },
                      h
                    );
                },
                h
              );
            };
          })(h, c, D ? (T) => (0, U.n)(D, T) : Z.y)
        );
        return s ? S.pipe((0, X.Z)(s)) : S;
      }
      function ke(u, c, s) {
        u ? (0, se.f)(s, u, c) : c();
      }
      var de = C(7272),
        Ne = C(9770),
        Me = C(9635),
        We = C(2843),
        be = C(515),
        Ee = C(727),
        Ye = C(4482);
      function nt() {
        return (0, Ye.e)((u, c) => {
          let s = null;
          u._refCount++;
          const h = (0, L.x)(c, void 0, void 0, void 0, () => {
            if (!u || u._refCount <= 0 || 0 < --u._refCount)
              return void (s = null);
            const D = u._connection,
              S = s;
            (s = null),
              D && (!S || D === S) && D.unsubscribe(),
              c.unsubscribe();
          });
          u.subscribe(h), h.closed || (s = u.connect());
        });
      }
      class Pe extends V.y {
        constructor(c, s) {
          super(),
            (this.source = c),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Ye.A)(c) && (this.lift = c.lift);
        }
        _subscribe(c) {
          return this.getSubject().subscribe(c);
        }
        getSubject() {
          const c = this._subject;
          return (
            (!c || c.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: c } = this;
          (this._subject = this._connection = null), c?.unsubscribe();
        }
        connect() {
          let c = this._connection;
          if (!c) {
            c = this._connection = new Ee.w0();
            const s = this.getSubject();
            c.add(
              this.source.subscribe(
                (0, L.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (h) => {
                    this._teardown(), s.error(h);
                  },
                  () => this._teardown()
                )
              )
            ),
              c.closed && ((this._connection = null), (c = Ee.w0.EMPTY));
          }
          return c;
        }
        refCount() {
          return nt()(this);
        }
      }
      var Se = C(7579),
        xe = C(6895),
        we = C(4004),
        Le = C(3900),
        ot = C(5698),
        Ke = C(8675),
        oe = C(9300),
        ie = C(5577),
        he = C(590),
        ve = C(4351),
        _e = C(8505),
        Y = C(262),
        me = C(7359);
      function F(u, c) {
        return (0, Ye.e)((0, me.U)(u, c, arguments.length >= 2, !0));
      }
      function re(u) {
        return u <= 0
          ? () => be.E
          : (0, Ye.e)((c, s) => {
              let h = [];
              c.subscribe(
                (0, L.x)(
                  s,
                  (D) => {
                    h.push(D), u < h.length && h.shift();
                  },
                  () => {
                    for (const D of h) s.next(D);
                    s.complete();
                  },
                  void 0,
                  () => {
                    h = null;
                  }
                )
              );
            });
      }
      var ce = C(8068),
        Ie = C(6590);
      function Oe(u, c) {
        const s = arguments.length >= 2;
        return (h) =>
          h.pipe(
            u ? (0, oe.h)((D, S) => u(D, S, h)) : Z.y,
            re(1),
            s ? (0, Ie.d)(c) : (0, ce.T)(() => new H.K())
          );
      }
      var Dt = C(9718),
        Mt = C(8746),
        At = C(8189),
        Wt = C(1481);
      const Ve = 'primary',
        Kt = Symbol('RouteTitle');
      class Vn {
        constructor(c) {
          this.params = c || {};
        }
        has(c) {
          return Object.prototype.hasOwnProperty.call(this.params, c);
        }
        get(c) {
          if (this.has(c)) {
            const s = this.params[c];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(c) {
          if (this.has(c)) {
            const s = this.params[c];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function fn(u) {
        return new Vn(u);
      }
      function ur(u, c, s) {
        const h = s.path.split('/');
        if (
          h.length > u.length ||
          ('full' === s.pathMatch && (c.hasChildren() || h.length < u.length))
        )
          return null;
        const D = {};
        for (let S = 0; S < h.length; S++) {
          const T = h[S],
            J = u[S];
          if (T.startsWith(':')) D[T.substring(1)] = J;
          else if (T !== J.path) return null;
        }
        return { consumed: u.slice(0, h.length), posParams: D };
      }
      function Vt(u, c) {
        const s = u ? Object.keys(u) : void 0,
          h = c ? Object.keys(c) : void 0;
        if (!s || !h || s.length != h.length) return !1;
        let D;
        for (let S = 0; S < s.length; S++)
          if (((D = s[S]), !qe(u[D], c[D]))) return !1;
        return !0;
      }
      function qe(u, c) {
        if (Array.isArray(u) && Array.isArray(c)) {
          if (u.length !== c.length) return !1;
          const s = [...u].sort(),
            h = [...c].sort();
          return s.every((D, S) => h[S] === D);
        }
        return u === c;
      }
      function yn(u) {
        return Array.prototype.concat.apply([], u);
      }
      function cr(u) {
        return u.length > 0 ? u[u.length - 1] : null;
      }
      function _t(u, c) {
        for (const s in u) u.hasOwnProperty(s) && c(u[s], s);
      }
      function In(u) {
        return (0, l.CqO)(u)
          ? u
          : (0, l.QGY)(u)
          ? (0, v.D)(Promise.resolve(u))
          : (0, k.of)(u);
      }
      const it = !1,
        tt = {
          exact: function Zt(u, c, s) {
            if (
              !pt(u.segments, c.segments) ||
              !Tt(u.segments, c.segments, s) ||
              u.numberOfChildren !== c.numberOfChildren
            )
              return !1;
            for (const h in c.children)
              if (!u.children[h] || !Zt(u.children[h], c.children[h], s))
                return !1;
            return !0;
          },
          subset: Gt,
        },
        Be = {
          exact: function En(u, c) {
            return Vt(u, c);
          },
          subset: function rn(u, c) {
            return (
              Object.keys(c).length <= Object.keys(u).length &&
              Object.keys(c).every((s) => qe(u[s], c[s]))
            );
          },
          ignored: () => !0,
        };
      function Cn(u, c, s) {
        return (
          tt[s.paths](u.root, c.root, s.matrixParams) &&
          Be[s.queryParams](u.queryParams, c.queryParams) &&
          !('exact' === s.fragment && u.fragment !== c.fragment)
        );
      }
      function Gt(u, c, s) {
        return Mr(u, c, c.segments, s);
      }
      function Mr(u, c, s, h) {
        if (u.segments.length > s.length) {
          const D = u.segments.slice(0, s.length);
          return !(!pt(D, s) || c.hasChildren() || !Tt(D, s, h));
        }
        if (u.segments.length === s.length) {
          if (!pt(u.segments, s) || !Tt(u.segments, s, h)) return !1;
          for (const D in c.children)
            if (!u.children[D] || !Gt(u.children[D], c.children[D], h))
              return !1;
          return !0;
        }
        {
          const D = s.slice(0, u.segments.length),
            S = s.slice(u.segments.length);
          return (
            !!(pt(u.segments, D) && Tt(u.segments, D, h) && u.children[Ve]) &&
            Mr(u.children[Ve], c, S, h)
          );
        }
      }
      function Tt(u, c, s) {
        return c.every((h, D) => Be[s](u[D].parameters, h.parameters));
      }
      class Dn {
        constructor(c = new Ue([], {}), s = {}, h = null) {
          (this.root = c), (this.queryParams = s), (this.fragment = h);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = fn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return P.serialize(this);
        }
      }
      class Ue {
        constructor(c, s) {
          (this.segments = c),
            (this.children = s),
            (this.parent = null),
            _t(s, (h, D) => (h.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return O(this);
        }
      }
      class Jt {
        constructor(c, s) {
          (this.path = c), (this.parameters = s);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = fn(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return z(this);
        }
      }
      function pt(u, c) {
        return u.length === c.length && u.every((s, h) => s.path === c[h].path);
      }
      let ue = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = l.Yz7({
            token: u,
            factory: function () {
              return new b();
            },
            providedIn: 'root',
          })),
          u
        );
      })();
      class b {
        parse(c) {
          const s = new Zn(c);
          return new Dn(
            s.parseRootSegment(),
            s.parseQueryParams(),
            s.parseFragment()
          );
        }
        serialize(c) {
          const s = `/${B(c.root, !0)}`,
            h = (function R(u) {
              const c = Object.keys(u)
                .map((s) => {
                  const h = u[s];
                  return Array.isArray(h)
                    ? h.map((D) => `${He(s)}=${He(D)}`).join('&')
                    : `${He(s)}=${He(h)}`;
                })
                .filter((s) => !!s);
              return c.length ? `?${c.join('&')}` : '';
            })(c.queryParams);
          return `${s}${h}${
            'string' == typeof c.fragment
              ? `#${(function rt(u) {
                  return encodeURI(u);
                })(c.fragment)}`
              : ''
          }`;
        }
      }
      const P = new b();
      function O(u) {
        return u.segments.map((c) => z(c)).join('/');
      }
      function B(u, c) {
        if (!u.hasChildren()) return O(u);
        if (c) {
          const s = u.children[Ve] ? B(u.children[Ve], !1) : '',
            h = [];
          return (
            _t(u.children, (D, S) => {
              S !== Ve && h.push(`${S}:${B(D, !1)}`);
            }),
            h.length > 0 ? `${s}(${h.join('//')})` : s
          );
        }
        {
          const s = (function wn(u, c) {
            let s = [];
            return (
              _t(u.children, (h, D) => {
                D === Ve && (s = s.concat(c(h, D)));
              }),
              _t(u.children, (h, D) => {
                D !== Ve && (s = s.concat(c(h, D)));
              }),
              s
            );
          })(u, (h, D) =>
            D === Ve ? [B(u.children[Ve], !1)] : [`${D}:${B(h, !1)}`]
          );
          return 1 === Object.keys(u.children).length && null != u.children[Ve]
            ? `${O(u)}/${s[0]}`
            : `${O(u)}/(${s.join('//')})`;
        }
      }
      function Te(u) {
        return encodeURIComponent(u)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function He(u) {
        return Te(u).replace(/%3B/gi, ';');
      }
      function Ze(u) {
        return Te(u)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Et(u) {
        return decodeURIComponent(u);
      }
      function on(u) {
        return Et(u.replace(/\+/g, '%20'));
      }
      function z(u) {
        return `${Ze(u.path)}${(function G(u) {
          return Object.keys(u)
            .map((c) => `;${Ze(c)}=${Ze(u[c])}`)
            .join('');
        })(u.parameters)}`;
      }
      const W = /^[^\/()?;=#]+/;
      function fe(u) {
        const c = u.match(W);
        return c ? c[0] : '';
      }
      const Fe = /^[^=?&#]+/,
        St = /^[^&#]+/;
      class Zn {
        constructor(c) {
          (this.url = c), (this.remaining = c);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new Ue([], {})
              : new Ue([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const c = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(c);
            } while (this.consumeOptional('&'));
          return c;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const c = [];
          for (
            this.peekStartsWith('(') || c.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), c.push(this.parseSegment());
          let s = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (s = this.parseParens(!0)));
          let h = {};
          return (
            this.peekStartsWith('(') && (h = this.parseParens(!1)),
            (c.length > 0 || Object.keys(s).length > 0) &&
              (h[Ve] = new Ue(c, s)),
            h
          );
        }
        parseSegment() {
          const c = fe(this.remaining);
          if ('' === c && this.peekStartsWith(';')) throw new l.vHH(4009, it);
          return this.capture(c), new Jt(Et(c), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const c = {};
          for (; this.consumeOptional(';'); ) this.parseParam(c);
          return c;
        }
        parseParam(c) {
          const s = fe(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = '';
          if (this.consumeOptional('=')) {
            const D = fe(this.remaining);
            D && ((h = D), this.capture(h));
          }
          c[Et(s)] = Et(h);
        }
        parseQueryParam(c) {
          const s = (function Je(u) {
            const c = u.match(Fe);
            return c ? c[0] : '';
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = '';
          if (this.consumeOptional('=')) {
            const T = (function Ht(u) {
              const c = u.match(St);
              return c ? c[0] : '';
            })(this.remaining);
            T && ((h = T), this.capture(h));
          }
          const D = on(s),
            S = on(h);
          if (c.hasOwnProperty(D)) {
            let T = c[D];
            Array.isArray(T) || ((T = [T]), (c[D] = T)), T.push(S);
          } else c[D] = S;
        }
        parseParens(c) {
          const s = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const h = fe(this.remaining),
              D = this.remaining[h.length];
            if ('/' !== D && ')' !== D && ';' !== D) throw new l.vHH(4010, it);
            let S;
            h.indexOf(':') > -1
              ? ((S = h.slice(0, h.indexOf(':'))),
                this.capture(S),
                this.capture(':'))
              : c && (S = Ve);
            const T = this.parseChildren();
            (s[S] = 1 === Object.keys(T).length ? T[Ve] : new Ue([], T)),
              this.consumeOptional('//');
          }
          return s;
        }
        peekStartsWith(c) {
          return this.remaining.startsWith(c);
        }
        consumeOptional(c) {
          return (
            !!this.peekStartsWith(c) &&
            ((this.remaining = this.remaining.substring(c.length)), !0)
          );
        }
        capture(c) {
          if (!this.consumeOptional(c)) throw new l.vHH(4011, it);
        }
      }
      function Rn(u) {
        return u.segments.length > 0 ? new Ue([], { [Ve]: u }) : u;
      }
      function eo(u) {
        const c = {};
        for (const h of Object.keys(u.children)) {
          const S = eo(u.children[h]);
          (S.segments.length > 0 || S.hasChildren()) && (c[h] = S);
        }
        return (function _o(u) {
          if (1 === u.numberOfChildren && u.children[Ve]) {
            const c = u.children[Ve];
            return new Ue(u.segments.concat(c.segments), c.children);
          }
          return u;
        })(new Ue(u.segments, c));
      }
      function Jn(u) {
        return u instanceof Dn;
      }
      const Sr = !1;
      function Xt(u, c, s, h, D) {
        if (0 === s.length) return en(c.root, c.root, c.root, h, D);
        const S = (function Xn(u) {
          if ('string' == typeof u[0] && 1 === u.length && '/' === u[0])
            return new Eo(!0, 0, u);
          let c = 0,
            s = !1;
          const h = u.reduce((D, S, T) => {
            if ('object' == typeof S && null != S) {
              if (S.outlets) {
                const J = {};
                return (
                  _t(S.outlets, (ge, je) => {
                    J[je] = 'string' == typeof ge ? ge.split('/') : ge;
                  }),
                  [...D, { outlets: J }]
                );
              }
              if (S.segmentPath) return [...D, S.segmentPath];
            }
            return 'string' != typeof S
              ? [...D, S]
              : 0 === T
              ? (S.split('/').forEach((J, ge) => {
                  (0 == ge && '.' === J) ||
                    (0 == ge && '' === J
                      ? (s = !0)
                      : '..' === J
                      ? c++
                      : '' != J && D.push(J));
                }),
                D)
              : [...D, S];
          }, []);
          return new Eo(s, c, h);
        })(s);
        return S.toRoot()
          ? en(c.root, c.root, new Ue([], {}), h, D)
          : (function T(ge) {
              const je = (function dt(u, c, s, h) {
                  if (u.isAbsolute) return new tn(c.root, !0, 0);
                  if (-1 === h) return new tn(s, s === c.root, 0);
                  return (function Rt(u, c, s) {
                    let h = u,
                      D = c,
                      S = s;
                    for (; S > D; ) {
                      if (((S -= D), (h = h.parent), !h))
                        throw new l.vHH(4005, Sr && "Invalid number of '../'");
                      D = h.segments.length;
                    }
                    return new tn(h, !1, D - S);
                  })(s, h + (Bt(u.commands[0]) ? 0 : 1), u.numberOfDoubleDots);
                })(S, c, u.snapshot?._urlSegment, ge),
                $e = je.processChildren
                  ? xt(je.segmentGroup, je.index, S.commands)
                  : xn(je.segmentGroup, je.index, S.commands);
              return en(c.root, je.segmentGroup, $e, h, D);
            })(u.snapshot?._lastPathIndex);
      }
      function Bt(u) {
        return (
          'object' == typeof u && null != u && !u.outlets && !u.segmentPath
        );
      }
      function Bn(u) {
        return 'object' == typeof u && null != u && u.outlets;
      }
      function en(u, c, s, h, D) {
        let T,
          S = {};
        h &&
          _t(h, (ge, je) => {
            S[je] = Array.isArray(ge) ? ge.map(($e) => `${$e}`) : `${ge}`;
          }),
          (T = u === c ? s : to(u, c, s));
        const J = Rn(eo(T));
        return new Dn(J, S, D);
      }
      function to(u, c, s) {
        const h = {};
        return (
          _t(u.children, (D, S) => {
            h[S] = D === c ? s : to(D, c, s);
          }),
          new Ue(u.segments, h)
        );
      }
      class Eo {
        constructor(c, s, h) {
          if (
            ((this.isAbsolute = c),
            (this.numberOfDoubleDots = s),
            (this.commands = h),
            c && h.length > 0 && Bt(h[0]))
          )
            throw new l.vHH(
              4003,
              Sr && 'Root segment cannot have matrix parameters'
            );
          const D = h.find(Bn);
          if (D && D !== cr(h))
            throw new l.vHH(
              4004,
              Sr && '{outlets:{}} has to be the last command'
            );
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class tn {
        constructor(c, s, h) {
          (this.segmentGroup = c), (this.processChildren = s), (this.index = h);
        }
      }
      function xn(u, c, s) {
        if (
          (u || (u = new Ue([], {})),
          0 === u.segments.length && u.hasChildren())
        )
          return xt(u, c, s);
        const h = (function Qn(u, c, s) {
            let h = 0,
              D = c;
            const S = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; D < u.segments.length; ) {
              if (h >= s.length) return S;
              const T = u.segments[D],
                J = s[h];
              if (Bn(J)) break;
              const ge = `${J}`,
                je = h < s.length - 1 ? s[h + 1] : null;
              if (D > 0 && void 0 === ge) break;
              if (ge && je && 'object' == typeof je && void 0 === je.outlets) {
                if (!ut(ge, je, T)) return S;
                h += 2;
              } else {
                if (!ut(ge, {}, T)) return S;
                h++;
              }
              D++;
            }
            return { match: !0, pathIndex: D, commandIndex: h };
          })(u, c, s),
          D = s.slice(h.commandIndex);
        if (h.match && h.pathIndex < u.segments.length) {
          const S = new Ue(u.segments.slice(0, h.pathIndex), {});
          return (
            (S.children[Ve] = new Ue(
              u.segments.slice(h.pathIndex),
              u.children
            )),
            xt(S, 0, D)
          );
        }
        return h.match && 0 === D.length
          ? new Ue(u.segments, {})
          : h.match && !u.hasChildren()
          ? Pt(u, c, s)
          : h.match
          ? xt(u, 0, D)
          : Pt(u, c, s);
      }
      function xt(u, c, s) {
        if (0 === s.length) return new Ue(u.segments, {});
        {
          const h = (function sn(u) {
              return Bn(u[0]) ? u[0].outlets : { [Ve]: u };
            })(s),
            D = {};
          return !h[Ve] &&
            u.children[Ve] &&
            1 === u.numberOfChildren &&
            0 === u.children[Ve].segments.length
            ? xt(u.children[Ve], c, s)
            : (_t(h, (S, T) => {
                'string' == typeof S && (S = [S]),
                  null !== S && (D[T] = xn(u.children[T], c, S));
              }),
              _t(u.children, (S, T) => {
                void 0 === h[T] && (D[T] = S);
              }),
              new Ue(u.segments, D));
        }
      }
      function Pt(u, c, s) {
        const h = u.segments.slice(0, c);
        let D = 0;
        for (; D < s.length; ) {
          const S = s[D];
          if (Bn(S)) {
            const ge = no(S.outlets);
            return new Ue(h, ge);
          }
          if (0 === D && Bt(s[0])) {
            h.push(new Jt(u.segments[c].path, Br(s[0]))), D++;
            continue;
          }
          const T = Bn(S) ? S.outlets[Ve] : `${S}`,
            J = D < s.length - 1 ? s[D + 1] : null;
          T && J && Bt(J)
            ? (h.push(new Jt(T, Br(J))), (D += 2))
            : (h.push(new Jt(T, {})), D++);
        }
        return new Ue(h, {});
      }
      function no(u) {
        const c = {};
        return (
          _t(u, (s, h) => {
            'string' == typeof s && (s = [s]),
              null !== s && (c[h] = Pt(new Ue([], {}), 0, s));
          }),
          c
        );
      }
      function Br(u) {
        const c = {};
        return _t(u, (s, h) => (c[h] = `${s}`)), c;
      }
      function ut(u, c, s) {
        return u == s.path && Vt(c, s.parameters);
      }
      const qn = 'imperative';
      class an {
        constructor(c, s) {
          (this.id = c), (this.url = s);
        }
      }
      class ro extends an {
        constructor(c, s, h = 'imperative', D = null) {
          super(c, s),
            (this.type = 0),
            (this.navigationTrigger = h),
            (this.restoredState = D);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class bn extends an {
        constructor(c, s, h) {
          super(c, s), (this.urlAfterRedirects = h), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Qt extends an {
        constructor(c, s, h, D) {
          super(c, s), (this.reason = h), (this.code = D), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Un extends an {
        constructor(c, s, h, D) {
          super(c, s), (this.reason = h), (this.code = D), (this.type = 16);
        }
      }
      class er extends an {
        constructor(c, s, h, D) {
          super(c, s), (this.error = h), (this.target = D), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Tn extends an {
        constructor(c, s, h, D) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = D),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class dr extends an {
        constructor(c, s, h, D) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = D),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ho extends an {
        constructor(c, s, h, D, S) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = D),
            (this.shouldActivate = S),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class gt extends an {
        constructor(c, s, h, D) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = D),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ii extends an {
        constructor(c, s, h, D) {
          super(c, s),
            (this.urlAfterRedirects = h),
            (this.state = D),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class wo {
        constructor(c) {
          (this.route = c), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class si {
        constructor(c) {
          (this.route = c), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ur {
        constructor(c) {
          (this.snapshot = c), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Hr {
        constructor(c) {
          (this.snapshot = c), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class fr {
        constructor(c) {
          (this.snapshot = c), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class hn {
        constructor(c) {
          (this.snapshot = c), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class jo {
        constructor(c, s, h) {
          (this.routerEvent = c),
            (this.position = s),
            (this.anchor = h),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let jr = (() => {
          class u {
            createUrlTree(s, h, D, S, T, J) {
              return Xt(s || h.root, D, S, T, J);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac })),
            u
          );
        })(),
        tr = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: function (c) {
                return jr.ɵfac(c);
              },
              providedIn: 'root',
            })),
            u
          );
        })();
      class On {
        constructor(c) {
          this._root = c;
        }
        get root() {
          return this._root.value;
        }
        parent(c) {
          const s = this.pathFromRoot(c);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(c) {
          const s = Ar(c, this._root);
          return s ? s.children.map((h) => h.value) : [];
        }
        firstChild(c) {
          const s = Ar(c, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(c) {
          const s = $o(c, this._root);
          return s.length < 2
            ? []
            : s[s.length - 2].children
                .map((D) => D.value)
                .filter((D) => D !== c);
        }
        pathFromRoot(c) {
          return $o(c, this._root).map((s) => s.value);
        }
      }
      function Ar(u, c) {
        if (u === c.value) return c;
        for (const s of c.children) {
          const h = Ar(u, s);
          if (h) return h;
        }
        return null;
      }
      function $o(u, c) {
        if (u === c.value) return [c];
        for (const s of c.children) {
          const h = $o(u, s);
          if (h.length) return h.unshift(c), h;
        }
        return [];
      }
      class Nn {
        constructor(c, s) {
          (this.value = c), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function hr(u) {
        const c = {};
        return u && u.children.forEach((s) => (c[s.value.outlet] = s)), c;
      }
      class ai extends On {
        constructor(c, s) {
          super(c), (this.snapshot = s), zo(this, c);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function oo(u, c) {
        const s = (function li(u, c) {
            const T = new Tr([], {}, {}, '', {}, Ve, c, null, u.root, -1, {});
            return new Go('', new Nn(T, []));
          })(u, c),
          h = new j.X([new Jt('', {})]),
          D = new j.X({}),
          S = new j.X({}),
          T = new j.X({}),
          J = new j.X(''),
          ge = new pr(h, D, T, J, S, Ve, c, s.root);
        return (ge.snapshot = s.root), new ai(new Nn(ge, []), s);
      }
      class pr {
        constructor(c, s, h, D, S, T, J, ge) {
          (this.url = c),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = D),
            (this.data = S),
            (this.outlet = T),
            (this.component = J),
            (this.title =
              this.data?.pipe((0, we.U)((je) => je[Kt])) ?? (0, k.of)(void 0)),
            (this._futureSnapshot = ge);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, we.U)((c) => fn(c)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, we.U)((c) => fn(c))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function ui(u, c = 'emptyOnly') {
        const s = u.pathFromRoot;
        let h = 0;
        if ('always' !== c)
          for (h = s.length - 1; h >= 1; ) {
            const D = s[h],
              S = s[h - 1];
            if (D.routeConfig && '' === D.routeConfig.path) h--;
            else {
              if (S.component) break;
              h--;
            }
          }
        return (function $r(u) {
          return u.reduce(
            (c, s) => ({
              params: { ...c.params, ...s.params },
              data: { ...c.data, ...s.data },
              resolve: {
                ...s.data,
                ...c.resolve,
                ...s.routeConfig?.data,
                ...s._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(s.slice(h));
      }
      class Tr {
        get title() {
          return this.data?.[Kt];
        }
        constructor(c, s, h, D, S, T, J, ge, je, $e, yt) {
          (this.url = c),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = D),
            (this.data = S),
            (this.outlet = T),
            (this.component = J),
            (this.routeConfig = ge),
            (this._urlSegment = je),
            (this._lastPathIndex = $e),
            (this._resolve = yt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = fn(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = fn(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((h) => h.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Go extends On {
        constructor(c, s) {
          super(s), (this.url = c), zo(this, s);
        }
        toString() {
          return ci(this._root);
        }
      }
      function zo(u, c) {
        (c.value._routerState = u), c.children.forEach((s) => zo(u, s));
      }
      function ci(u) {
        const c =
          u.children.length > 0 ? ` { ${u.children.map(ci).join(', ')} } ` : '';
        return `${u.value}${c}`;
      }
      function Wo(u) {
        if (u.snapshot) {
          const c = u.snapshot,
            s = u._futureSnapshot;
          (u.snapshot = s),
            Vt(c.queryParams, s.queryParams) ||
              u.queryParams.next(s.queryParams),
            c.fragment !== s.fragment && u.fragment.next(s.fragment),
            Vt(c.params, s.params) || u.params.next(s.params),
            (function kt(u, c) {
              if (u.length !== c.length) return !1;
              for (let s = 0; s < u.length; ++s) if (!Vt(u[s], c[s])) return !1;
              return !0;
            })(c.url, s.url) || u.url.next(s.url),
            Vt(c.data, s.data) || u.data.next(s.data);
        } else
          (u.snapshot = u._futureSnapshot), u.data.next(u._futureSnapshot.data);
      }
      function io(u, c) {
        const s =
          Vt(u.params, c.params) &&
          (function An(u, c) {
            return (
              pt(u, c) && u.every((s, h) => Vt(s.parameters, c[h].parameters))
            );
          })(u.url, c.url);
        return (
          s &&
          !(!u.parent != !c.parent) &&
          (!u.parent || io(u.parent, c.parent))
        );
      }
      function gr(u, c, s) {
        if (s && u.shouldReuseRoute(c.value, s.value.snapshot)) {
          const h = s.value;
          h._futureSnapshot = c.value;
          const D = (function Ni(u, c, s) {
            return c.children.map((h) => {
              for (const D of s.children)
                if (u.shouldReuseRoute(h.value, D.value.snapshot))
                  return gr(u, h, D);
              return gr(u, h);
            });
          })(u, c, s);
          return new Nn(h, D);
        }
        {
          if (u.shouldAttach(c.value)) {
            const S = u.retrieve(c.value);
            if (null !== S) {
              const T = S.route;
              return (
                (T.value._futureSnapshot = c.value),
                (T.children = c.children.map((J) => gr(u, J))),
                T
              );
            }
          }
          const h = (function Or(u) {
              return new pr(
                new j.X(u.url),
                new j.X(u.params),
                new j.X(u.queryParams),
                new j.X(u.fragment),
                new j.X(u.data),
                u.outlet,
                u.component,
                u
              );
            })(c.value),
            D = c.children.map((S) => gr(u, S));
          return new Nn(h, D);
        }
      }
      const di = 'ngNavigationCancelingError';
      function nr(u, c) {
        const { redirectTo: s, navigationBehaviorOptions: h } = Jn(c)
            ? { redirectTo: c, navigationBehaviorOptions: void 0 }
            : c,
          D = fi(!1, 0, c);
        return (D.url = s), (D.navigationBehaviorOptions = h), D;
      }
      function fi(u, c, s) {
        const h = new Error('NavigationCancelingError: ' + (u || ''));
        return (h[di] = !0), (h.cancellationCode = c), s && (h.url = s), h;
      }
      function Gr(u) {
        return Mo(u) && Jn(u.url);
      }
      function Mo(u) {
        return u && u[di];
      }
      class Ko {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new mr()),
            (this.attachRef = null);
        }
      }
      let mr = (() => {
        class u {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, h) {
            const D = this.getOrCreateContext(s);
            (D.outlet = h), this.contexts.set(s, D);
          }
          onChildOutletDestroyed(s) {
            const h = this.getContext(s);
            h && ((h.outlet = null), (h.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let h = this.getContext(s);
            return h || ((h = new Ko()), this.contexts.set(s, h)), h;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const zr = !1;
      let so = (() => {
        class u {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Ve),
              (this.activateEvents = new l.vpe()),
              (this.deactivateEvents = new l.vpe()),
              (this.attachEvents = new l.vpe()),
              (this.detachEvents = new l.vpe()),
              (this.parentContexts = (0, l.f3M)(mr)),
              (this.location = (0, l.f3M)(l.s_b)),
              (this.changeDetector = (0, l.f3M)(l.sBO)),
              (this.environmentInjector = (0, l.f3M)(l.lqb));
          }
          ngOnChanges(s) {
            if (s.name) {
              const { firstChange: h, previousValue: D } = s.name;
              if (h) return;
              this.isTrackedInParentContexts(D) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(D)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(s) {
            return this.parentContexts.getContext(s)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const s = this.parentContexts.getContext(this.name);
            s?.route &&
              (s.attachRef
                ? this.attach(s.attachRef, s.route)
                : this.activateWith(s.route, s.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new l.vHH(4012, zr);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new l.vHH(4012, zr);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new l.vHH(4012, zr);
            this.location.detach();
            const s = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(s.instance),
              s
            );
          }
          attach(s, h) {
            (this.activated = s),
              (this._activatedRoute = h),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, h) {
            if (this.isActivated) throw new l.vHH(4013, zr);
            this._activatedRoute = s;
            const D = this.location,
              T = s.snapshot.component,
              J = this.parentContexts.getOrCreateContext(this.name).children,
              ge = new Wr(s, J, D.injector);
            if (
              h &&
              (function Kr(u) {
                return !!u.resolveComponentFactory;
              })(h)
            ) {
              const je = h.resolveComponentFactory(T);
              this.activated = D.createComponent(je, D.length, ge);
            } else
              this.activated = D.createComponent(T, {
                index: D.length,
                injector: ge,
                environmentInjector: h ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵdir = l.lG2({
            type: u,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [l.TTD],
          })),
          u
        );
      })();
      class Wr {
        constructor(c, s, h) {
          (this.route = c), (this.childContexts = s), (this.parent = h);
        }
        get(c, s) {
          return c === pr
            ? this.route
            : c === mr
            ? this.childContexts
            : this.parent.get(c, s);
        }
      }
      let Yr = (() => {
        class u {}
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵcmp = l.Xpm({
            type: u,
            selectors: [['ng-component']],
            standalone: !0,
            features: [l.jDz],
            decls: 1,
            vars: 0,
            template: function (s, h) {
              1 & s && l._UZ(0, 'router-outlet');
            },
            dependencies: [so],
            encapsulation: 2,
          })),
          u
        );
      })();
      function Mn(u, c) {
        return (
          u.providers &&
            !u._injector &&
            (u._injector = (0, l.MMx)(u.providers, c, `Route: ${u.path}`)),
          u._injector ?? c
        );
      }
      function vr(u) {
        const c = u.children && u.children.map(vr),
          s = c ? { ...u, children: c } : { ...u };
        return (
          !s.component &&
            !s.loadComponent &&
            (c || s.loadChildren) &&
            s.outlet &&
            s.outlet !== Ve &&
            (s.component = Yr),
          s
        );
      }
      function Ft(u) {
        return u.outlet || Ve;
      }
      function pi(u, c) {
        const s = u.filter((h) => Ft(h) === c);
        return s.push(...u.filter((h) => Ft(h) !== c)), s;
      }
      function yr(u) {
        if (!u) return null;
        if (u.routeConfig?._injector) return u.routeConfig._injector;
        for (let c = u.parent; c; c = c.parent) {
          const s = c.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class Dr {
        constructor(c, s, h, D) {
          (this.routeReuseStrategy = c),
            (this.futureState = s),
            (this.currState = h),
            (this.forwardEvent = D);
        }
        activate(c) {
          const s = this.futureState._root,
            h = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, h, c),
            Wo(this.futureState.root),
            this.activateChildRoutes(s, h, c);
        }
        deactivateChildRoutes(c, s, h) {
          const D = hr(s);
          c.children.forEach((S) => {
            const T = S.value.outlet;
            this.deactivateRoutes(S, D[T], h), delete D[T];
          }),
            _t(D, (S, T) => {
              this.deactivateRouteAndItsChildren(S, h);
            });
        }
        deactivateRoutes(c, s, h) {
          const D = c.value,
            S = s ? s.value : null;
          if (D === S)
            if (D.component) {
              const T = h.getContext(D.outlet);
              T && this.deactivateChildRoutes(c, s, T.children);
            } else this.deactivateChildRoutes(c, s, h);
          else S && this.deactivateRouteAndItsChildren(s, h);
        }
        deactivateRouteAndItsChildren(c, s) {
          c.value.component &&
          this.routeReuseStrategy.shouldDetach(c.value.snapshot)
            ? this.detachAndStoreRouteSubtree(c, s)
            : this.deactivateRouteAndOutlet(c, s);
        }
        detachAndStoreRouteSubtree(c, s) {
          const h = s.getContext(c.value.outlet),
            D = h && c.value.component ? h.children : s,
            S = hr(c);
          for (const T of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[T], D);
          if (h && h.outlet) {
            const T = h.outlet.detach(),
              J = h.children.onOutletDeactivated();
            this.routeReuseStrategy.store(c.value.snapshot, {
              componentRef: T,
              route: c,
              contexts: J,
            });
          }
        }
        deactivateRouteAndOutlet(c, s) {
          const h = s.getContext(c.value.outlet),
            D = h && c.value.component ? h.children : s,
            S = hr(c);
          for (const T of Object.keys(S))
            this.deactivateRouteAndItsChildren(S[T], D);
          h &&
            h.outlet &&
            (h.outlet.deactivate(),
            h.children.onOutletDeactivated(),
            (h.attachRef = null),
            (h.resolver = null),
            (h.route = null));
        }
        activateChildRoutes(c, s, h) {
          const D = hr(s);
          c.children.forEach((S) => {
            this.activateRoutes(S, D[S.value.outlet], h),
              this.forwardEvent(new hn(S.value.snapshot));
          }),
            c.children.length && this.forwardEvent(new Hr(c.value.snapshot));
        }
        activateRoutes(c, s, h) {
          const D = c.value,
            S = s ? s.value : null;
          if ((Wo(D), D === S))
            if (D.component) {
              const T = h.getOrCreateContext(D.outlet);
              this.activateChildRoutes(c, s, T.children);
            } else this.activateChildRoutes(c, s, h);
          else if (D.component) {
            const T = h.getOrCreateContext(D.outlet);
            if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
              const J = this.routeReuseStrategy.retrieve(D.snapshot);
              this.routeReuseStrategy.store(D.snapshot, null),
                T.children.onOutletReAttached(J.contexts),
                (T.attachRef = J.componentRef),
                (T.route = J.route.value),
                T.outlet && T.outlet.attach(J.componentRef, J.route.value),
                Wo(J.route.value),
                this.activateChildRoutes(c, null, T.children);
            } else {
              const J = yr(D.snapshot),
                ge = J?.get(l._Vd) ?? null;
              (T.attachRef = null),
                (T.route = D),
                (T.resolver = ge),
                (T.injector = J),
                T.outlet && T.outlet.activateWith(D, T.injector),
                this.activateChildRoutes(c, null, T.children);
            }
          } else this.activateChildRoutes(c, null, h);
        }
      }
      class Jo {
        constructor(c) {
          (this.path = c), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Pr {
        constructor(c, s) {
          (this.component = c), (this.route = s);
        }
      }
      function lt(u, c, s) {
        const h = u._root;
        return m(h, c ? c._root : null, s, [h.value]);
      }
      function y(u, c) {
        const s = Symbol(),
          h = c.get(u, s);
        return h === s
          ? 'function' != typeof u || (0, l.Z0I)(u)
            ? c.get(u)
            : u
          : h;
      }
      function m(
        u,
        c,
        s,
        h,
        D = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const S = hr(c);
        return (
          u.children.forEach((T) => {
            (function A(
              u,
              c,
              s,
              h,
              D = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const S = u.value,
                T = c ? c.value : null,
                J = s ? s.getContext(u.value.outlet) : null;
              if (T && S.routeConfig === T.routeConfig) {
                const ge = (function ae(u, c, s) {
                  if ('function' == typeof s) return s(u, c);
                  switch (s) {
                    case 'pathParamsChange':
                      return !pt(u.url, c.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !pt(u.url, c.url) || !Vt(u.queryParams, c.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !io(u, c) || !Vt(u.queryParams, c.queryParams);
                    default:
                      return !io(u, c);
                  }
                })(T, S, S.routeConfig.runGuardsAndResolvers);
                ge
                  ? D.canActivateChecks.push(new Jo(h))
                  : ((S.data = T.data), (S._resolvedData = T._resolvedData)),
                  m(u, c, S.component ? (J ? J.children : null) : s, h, D),
                  ge &&
                    J &&
                    J.outlet &&
                    J.outlet.isActivated &&
                    D.canDeactivateChecks.push(new Pr(J.outlet.component, T));
              } else
                T && et(c, J, D),
                  D.canActivateChecks.push(new Jo(h)),
                  m(u, null, S.component ? (J ? J.children : null) : s, h, D);
            })(T, S[T.value.outlet], s, h.concat([T.value]), D),
              delete S[T.value.outlet];
          }),
          _t(S, (T, J) => et(T, s.getContext(J), D)),
          D
        );
      }
      function et(u, c, s) {
        const h = hr(u),
          D = u.value;
        _t(h, (S, T) => {
          et(S, D.component ? (c ? c.children.getContext(T) : null) : c, s);
        }),
          s.canDeactivateChecks.push(
            new Pr(
              D.component && c && c.outlet && c.outlet.isActivated
                ? c.outlet.component
                : null,
              D
            )
          );
      }
      function Ut(u) {
        return 'function' == typeof u;
      }
      function Wn(u) {
        return u instanceof H.K || 'EmptyError' === u?.name;
      }
      const lo = Symbol('INITIAL_VALUE');
      function Rr() {
        return (0, Le.w)((u) =>
          te(u.map((c) => c.pipe((0, ot.q)(1), (0, Ke.O)(lo)))).pipe(
            (0, we.U)((c) => {
              for (const s of c)
                if (!0 !== s) {
                  if (s === lo) return lo;
                  if (!1 === s || s instanceof Dn) return s;
                }
              return !0;
            }),
            (0, oe.h)((c) => c !== lo),
            (0, ot.q)(1)
          )
        );
      }
      function gi(u) {
        return (0, Me.z)(
          (0, _e.b)((c) => {
            if (Jn(c)) throw nr(0, c);
          }),
          (0, we.U)((c) => !0 === c)
        );
      }
      const mi = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Io(u, c, s, h, D) {
        const S = Ao(u, c, s);
        return S.matched
          ? (function As(u, c, s, h) {
              const D = c.canMatch;
              if (!D || 0 === D.length) return (0, k.of)(!0);
              const S = D.map((T) => {
                const J = y(T, u);
                return In(
                  (function pn(u) {
                    return u && Ut(u.canMatch);
                  })(J)
                    ? J.canMatch(c, s)
                    : u.runInContext(() => J(c, s))
                );
              });
              return (0, k.of)(S).pipe(Rr(), gi());
            })((h = Mn(c, h)), c, s).pipe(
              (0, we.U)((T) => (!0 === T ? S : { ...mi }))
            )
          : (0, k.of)(S);
      }
      function Ao(u, c, s) {
        if ('' === c.path)
          return 'full' === c.pathMatch && (u.hasChildren() || s.length > 0)
            ? { ...mi }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: s,
                parameters: {},
                positionalParamSegments: {},
              };
        const D = (c.matcher || ur)(s, u, c);
        if (!D) return { ...mi };
        const S = {};
        _t(D.posParams, (J, ge) => {
          S[ge] = J.path;
        });
        const T =
          D.consumed.length > 0
            ? { ...S, ...D.consumed[D.consumed.length - 1].parameters }
            : S;
        return {
          matched: !0,
          consumedSegments: D.consumed,
          remainingSegments: s.slice(D.consumed.length),
          parameters: T,
          positionalParamSegments: D.posParams ?? {},
        };
      }
      function To(u, c, s, h) {
        if (
          s.length > 0 &&
          (function $i(u, c, s) {
            return s.some((h) => Qo(u, c, h) && Ft(h) !== Ve);
          })(u, s, h)
        ) {
          const S = new Ue(
            c,
            (function vi(u, c, s, h) {
              const D = {};
              (D[Ve] = h),
                (h._sourceSegment = u),
                (h._segmentIndexShift = c.length);
              for (const S of s)
                if ('' === S.path && Ft(S) !== Ve) {
                  const T = new Ue([], {});
                  (T._sourceSegment = u),
                    (T._segmentIndexShift = c.length),
                    (D[Ft(S)] = T);
                }
              return D;
            })(u, c, h, new Ue(s, u.children))
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = c.length),
            { segmentGroup: S, slicedSegments: [] }
          );
        }
        if (
          0 === s.length &&
          (function Gi(u, c, s) {
            return s.some((h) => Qo(u, c, h));
          })(u, s, h)
        ) {
          const S = new Ue(
            u.segments,
            (function Xo(u, c, s, h, D) {
              const S = {};
              for (const T of h)
                if (Qo(u, s, T) && !D[Ft(T)]) {
                  const J = new Ue([], {});
                  (J._sourceSegment = u),
                    (J._segmentIndexShift = c.length),
                    (S[Ft(T)] = J);
                }
              return { ...D, ...S };
            })(u, c, s, h, u.children)
          );
          return (
            (S._sourceSegment = u),
            (S._segmentIndexShift = c.length),
            { segmentGroup: S, slicedSegments: s }
          );
        }
        const D = new Ue(u.segments, u.children);
        return (
          (D._sourceSegment = u),
          (D._segmentIndexShift = c.length),
          { segmentGroup: D, slicedSegments: s }
        );
      }
      function Qo(u, c, s) {
        return (
          (!(u.hasChildren() || c.length > 0) || 'full' !== s.pathMatch) &&
          '' === s.path
        );
      }
      function zi(u, c, s, h) {
        return (
          !!(Ft(u) === h || (h !== Ve && Qo(c, s, u))) &&
          ('**' === u.path || Ao(c, u, s).matched)
        );
      }
      function Wi(u, c, s) {
        return 0 === c.length && !u.children[s];
      }
      const qo = !1;
      class co {
        constructor(c) {
          this.segmentGroup = c || null;
        }
      }
      class Ts {
        constructor(c) {
          this.urlTree = c;
        }
      }
      function Oo(u) {
        return (0, We._)(new co(u));
      }
      function _n(u) {
        return (0, We._)(new Ts(u));
      }
      class da {
        constructor(c, s, h, D, S) {
          (this.injector = c),
            (this.configLoader = s),
            (this.urlSerializer = h),
            (this.urlTree = D),
            (this.config = S),
            (this.allowRedirects = !0);
        }
        apply() {
          const c = To(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new Ue(c.segments, c.children);
          return this.expandSegmentGroup(this.injector, this.config, s, Ve)
            .pipe(
              (0, we.U)((S) =>
                this.createUrlTree(
                  eo(S),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              (0, Y.K)((S) => {
                if (S instanceof Ts)
                  return (this.allowRedirects = !1), this.match(S.urlTree);
                throw S instanceof co ? this.noMatchError(S) : S;
              })
            );
        }
        match(c) {
          return this.expandSegmentGroup(this.injector, this.config, c.root, Ve)
            .pipe(
              (0, we.U)((D) =>
                this.createUrlTree(eo(D), c.queryParams, c.fragment)
              )
            )
            .pipe(
              (0, Y.K)((D) => {
                throw D instanceof co ? this.noMatchError(D) : D;
              })
            );
        }
        noMatchError(c) {
          return new l.vHH(4002, qo);
        }
        createUrlTree(c, s, h) {
          const D = Rn(c);
          return new Dn(D, s, h);
        }
        expandSegmentGroup(c, s, h, D) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.expandChildren(c, s, h).pipe((0, we.U)((S) => new Ue([], S)))
            : this.expandSegment(c, h, s, h.segments, D, !0);
        }
        expandChildren(c, s, h) {
          const D = [];
          for (const S of Object.keys(h.children))
            'primary' === S ? D.unshift(S) : D.push(S);
          return (0, v.D)(D).pipe(
            (0, ve.b)((S) => {
              const T = h.children[S],
                J = pi(s, S);
              return this.expandSegmentGroup(c, J, T, S).pipe(
                (0, we.U)((ge) => ({ segment: ge, outlet: S }))
              );
            }),
            F((S, T) => ((S[T.outlet] = T.segment), S), {}),
            Oe()
          );
        }
        expandSegment(c, s, h, D, S, T) {
          return (0, v.D)(h).pipe(
            (0, ve.b)((J) =>
              this.expandSegmentAgainstRoute(c, s, h, J, D, S, T).pipe(
                (0, Y.K)((je) => {
                  if (je instanceof co) return (0, k.of)(null);
                  throw je;
                })
              )
            ),
            (0, he.P)((J) => !!J),
            (0, Y.K)((J, ge) => {
              if (Wn(J)) return Wi(s, D, S) ? (0, k.of)(new Ue([], {})) : Oo(s);
              throw J;
            })
          );
        }
        expandSegmentAgainstRoute(c, s, h, D, S, T, J) {
          return zi(D, s, S, T)
            ? void 0 === D.redirectTo
              ? this.matchSegmentAgainstRoute(c, s, D, S, T)
              : J && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(c, s, h, D, S, T)
              : Oo(s)
            : Oo(s);
        }
        expandSegmentAgainstRouteUsingRedirect(c, s, h, D, S, T) {
          return '**' === D.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(c, h, D, T)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                c,
                s,
                h,
                D,
                S,
                T
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(c, s, h, D) {
          const S = this.applyRedirectCommands([], h.redirectTo, {});
          return h.redirectTo.startsWith('/')
            ? _n(S)
            : this.lineralizeSegments(h, S).pipe(
                (0, ie.z)((T) => {
                  const J = new Ue(T, {});
                  return this.expandSegment(c, J, s, T, D, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(c, s, h, D, S, T) {
          const {
            matched: J,
            consumedSegments: ge,
            remainingSegments: je,
            positionalParamSegments: $e,
          } = Ao(s, D, S);
          if (!J) return Oo(s);
          const yt = this.applyRedirectCommands(ge, D.redirectTo, $e);
          return D.redirectTo.startsWith('/')
            ? _n(yt)
            : this.lineralizeSegments(D, yt).pipe(
                (0, ie.z)((cn) =>
                  this.expandSegment(c, s, h, cn.concat(je), T, !1)
                )
              );
        }
        matchSegmentAgainstRoute(c, s, h, D, S) {
          return '**' === h.path
            ? ((c = Mn(h, c)),
              h.loadChildren
                ? (h._loadedRoutes
                    ? (0, k.of)({
                        routes: h._loadedRoutes,
                        injector: h._loadedInjector,
                      })
                    : this.configLoader.loadChildren(c, h)
                  ).pipe(
                    (0, we.U)(
                      (J) => (
                        (h._loadedRoutes = J.routes),
                        (h._loadedInjector = J.injector),
                        new Ue(D, {})
                      )
                    )
                  )
                : (0, k.of)(new Ue(D, {})))
            : Io(s, h, D, c).pipe(
                (0, Le.w)(
                  ({
                    matched: T,
                    consumedSegments: J,
                    remainingSegments: ge,
                  }) =>
                    T
                      ? this.getChildConfig((c = h._injector ?? c), h, D).pipe(
                          (0, ie.z)(($e) => {
                            const yt = $e.injector ?? c,
                              cn = $e.routes,
                              { segmentGroup: ar, slicedSegments: Lr } = To(
                                s,
                                J,
                                ge,
                                cn
                              ),
                              Er = new Ue(ar.segments, ar.children);
                            if (0 === Lr.length && Er.hasChildren())
                              return this.expandChildren(yt, cn, Er).pipe(
                                (0, we.U)((es) => new Ue(J, es))
                              );
                            if (0 === cn.length && 0 === Lr.length)
                              return (0, k.of)(new Ue(J, {}));
                            const wr = Ft(h) === S;
                            return this.expandSegment(
                              yt,
                              Er,
                              cn,
                              Lr,
                              wr ? Ve : S,
                              !0
                            ).pipe(
                              (0, we.U)(
                                (Fo) =>
                                  new Ue(J.concat(Fo.segments), Fo.children)
                              )
                            );
                          })
                        )
                      : Oo(s)
                )
              );
        }
        getChildConfig(c, s, h) {
          return s.children
            ? (0, k.of)({ routes: s.children, injector: c })
            : s.loadChildren
            ? void 0 !== s._loadedRoutes
              ? (0, k.of)({
                  routes: s._loadedRoutes,
                  injector: s._loadedInjector,
                })
              : (function ji(u, c, s, h) {
                  const D = c.canLoad;
                  if (void 0 === D || 0 === D.length) return (0, k.of)(!0);
                  const S = D.map((T) => {
                    const J = y(T, u);
                    return In(
                      (function ye(u) {
                        return u && Ut(u.canLoad);
                      })(J)
                        ? J.canLoad(c, s)
                        : u.runInContext(() => J(c, s))
                    );
                  });
                  return (0, k.of)(S).pipe(Rr(), gi());
                })(c, s, h).pipe(
                  (0, ie.z)((D) =>
                    D
                      ? this.configLoader.loadChildren(c, s).pipe(
                          (0, _e.b)((S) => {
                            (s._loadedRoutes = S.routes),
                              (s._loadedInjector = S.injector);
                          })
                        )
                      : (function zt(u) {
                          return (0, We._)(fi(qo, 3));
                        })()
                  )
                )
            : (0, k.of)({ routes: [], injector: c });
        }
        lineralizeSegments(c, s) {
          let h = [],
            D = s.root;
          for (;;) {
            if (((h = h.concat(D.segments)), 0 === D.numberOfChildren))
              return (0, k.of)(h);
            if (D.numberOfChildren > 1 || !D.children[Ve])
              return c.redirectTo, (0, We._)(new l.vHH(4e3, qo));
            D = D.children[Ve];
          }
        }
        applyRedirectCommands(c, s, h) {
          return this.applyRedirectCreateUrlTree(
            s,
            this.urlSerializer.parse(s),
            c,
            h
          );
        }
        applyRedirectCreateUrlTree(c, s, h, D) {
          const S = this.createSegmentGroup(c, s.root, h, D);
          return new Dn(
            S,
            this.createQueryParams(s.queryParams, this.urlTree.queryParams),
            s.fragment
          );
        }
        createQueryParams(c, s) {
          const h = {};
          return (
            _t(c, (D, S) => {
              if ('string' == typeof D && D.startsWith(':')) {
                const J = D.substring(1);
                h[S] = s[J];
              } else h[S] = D;
            }),
            h
          );
        }
        createSegmentGroup(c, s, h, D) {
          const S = this.createSegments(c, s.segments, h, D);
          let T = {};
          return (
            _t(s.children, (J, ge) => {
              T[ge] = this.createSegmentGroup(c, J, h, D);
            }),
            new Ue(S, T)
          );
        }
        createSegments(c, s, h, D) {
          return s.map((S) =>
            S.path.startsWith(':')
              ? this.findPosParam(c, S, D)
              : this.findOrReturn(S, h)
          );
        }
        findPosParam(c, s, h) {
          const D = h[s.path.substring(1)];
          if (!D) throw new l.vHH(4001, qo);
          return D;
        }
        findOrReturn(c, s) {
          let h = 0;
          for (const D of s) {
            if (D.path === c.path) return s.splice(h), D;
            h++;
          }
          return c;
        }
      }
      class fa {}
      class Di {
        constructor(c, s, h, D, S, T, J) {
          (this.injector = c),
            (this.rootComponentType = s),
            (this.config = h),
            (this.urlTree = D),
            (this.url = S),
            (this.paramsInheritanceStrategy = T),
            (this.urlSerializer = J);
        }
        recognize() {
          const c = To(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            c,
            Ve
          ).pipe(
            (0, we.U)((s) => {
              if (null === s) return null;
              const h = new Tr(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Ve,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                D = new Nn(h, s),
                S = new Go(this.url, D);
              return this.inheritParamsAndData(S._root), S;
            })
          );
        }
        inheritParamsAndData(c) {
          const s = c.value,
            h = ui(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(h.params)),
            (s.data = Object.freeze(h.data)),
            c.children.forEach((D) => this.inheritParamsAndData(D));
        }
        processSegmentGroup(c, s, h, D) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.processChildren(c, s, h)
            : this.processSegment(c, s, h, h.segments, D);
        }
        processChildren(c, s, h) {
          return (0, v.D)(Object.keys(h.children)).pipe(
            (0, ve.b)((D) => {
              const S = h.children[D],
                T = pi(s, D);
              return this.processSegmentGroup(c, T, S, D);
            }),
            F((D, S) => (D && S ? (D.push(...S), D) : null)),
            (function ct(u, c = !1) {
              return (0, Ye.e)((s, h) => {
                let D = 0;
                s.subscribe(
                  (0, L.x)(h, (S) => {
                    const T = u(S, D++);
                    (T || c) && h.next(S), !T && h.complete();
                  })
                );
              });
            })((D) => null !== D),
            (0, Ie.d)(null),
            Oe(),
            (0, we.U)((D) => {
              if (null === D) return null;
              const S = M(D);
              return (
                (function f(u) {
                  u.sort((c, s) =>
                    c.value.outlet === Ve
                      ? -1
                      : s.value.outlet === Ve
                      ? 1
                      : c.value.outlet.localeCompare(s.value.outlet)
                  );
                })(S),
                S
              );
            })
          );
        }
        processSegment(c, s, h, D, S) {
          return (0, v.D)(s).pipe(
            (0, ve.b)((T) =>
              this.processSegmentAgainstRoute(T._injector ?? c, T, h, D, S)
            ),
            (0, he.P)((T) => !!T),
            (0, Y.K)((T) => {
              if (Wn(T)) return Wi(h, D, S) ? (0, k.of)([]) : (0, k.of)(null);
              throw T;
            })
          );
        }
        processSegmentAgainstRoute(c, s, h, D, S) {
          if (s.redirectTo || !zi(s, h, D, S)) return (0, k.of)(null);
          let T;
          if ('**' === s.path) {
            const J = D.length > 0 ? cr(D).parameters : {},
              ge = le(h) + D.length,
              je = new Tr(
                D,
                J,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Ct(s),
                Ft(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                ne(h),
                ge,
                It(s)
              );
            T = (0, k.of)({
              snapshot: je,
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            T = Io(h, s, D, c).pipe(
              (0, we.U)(
                ({
                  matched: J,
                  consumedSegments: ge,
                  remainingSegments: je,
                  parameters: $e,
                }) => {
                  if (!J) return null;
                  const yt = le(h) + ge.length;
                  return {
                    snapshot: new Tr(
                      ge,
                      $e,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      Ct(s),
                      Ft(s),
                      s.component ?? s._loadedComponent ?? null,
                      s,
                      ne(h),
                      yt,
                      It(s)
                    ),
                    consumedSegments: ge,
                    remainingSegments: je,
                  };
                }
              )
            );
          return T.pipe(
            (0, Le.w)((J) => {
              if (null === J) return (0, k.of)(null);
              const {
                snapshot: ge,
                consumedSegments: je,
                remainingSegments: $e,
              } = J;
              c = s._injector ?? c;
              const yt = s._loadedInjector ?? c,
                cn = (function w(u) {
                  return u.children
                    ? u.children
                    : u.loadChildren
                    ? u._loadedRoutes
                    : [];
                })(s),
                { segmentGroup: ar, slicedSegments: Lr } = To(
                  h,
                  je,
                  $e,
                  cn.filter((wr) => void 0 === wr.redirectTo)
                );
              if (0 === Lr.length && ar.hasChildren())
                return this.processChildren(yt, cn, ar).pipe(
                  (0, we.U)((wr) => (null === wr ? null : [new Nn(ge, wr)]))
                );
              if (0 === cn.length && 0 === Lr.length)
                return (0, k.of)([new Nn(ge, [])]);
              const Er = Ft(s) === S;
              return this.processSegment(yt, cn, ar, Lr, Er ? Ve : S).pipe(
                (0, we.U)((wr) => (null === wr ? null : [new Nn(ge, wr)]))
              );
            })
          );
        }
      }
      function p(u) {
        const c = u.value.routeConfig;
        return c && '' === c.path && void 0 === c.redirectTo;
      }
      function M(u) {
        const c = [],
          s = new Set();
        for (const h of u) {
          if (!p(h)) {
            c.push(h);
            continue;
          }
          const D = c.find((S) => h.value.routeConfig === S.value.routeConfig);
          void 0 !== D ? (D.children.push(...h.children), s.add(D)) : c.push(h);
        }
        for (const h of s) {
          const D = M(h.children);
          c.push(new Nn(h.value, D));
        }
        return c.filter((h) => !s.has(h));
      }
      function ne(u) {
        let c = u;
        for (; c._sourceSegment; ) c = c._sourceSegment;
        return c;
      }
      function le(u) {
        let c = u,
          s = c._segmentIndexShift ?? 0;
        for (; c._sourceSegment; )
          (c = c._sourceSegment), (s += c._segmentIndexShift ?? 0);
        return s - 1;
      }
      function Ct(u) {
        return u.data || {};
      }
      function It(u) {
        return u.resolve || {};
      }
      function Hn(u) {
        return 'string' == typeof u.title || null === u.title;
      }
      function kn(u) {
        return (0, Le.w)((c) => {
          const s = u(c);
          return s ? (0, v.D)(s).pipe((0, we.U)(() => c)) : (0, k.of)(c);
        });
      }
      const Kn = new l.OlP('ROUTES');
      let ei = (() => {
        class u {
          constructor(s, h) {
            (this.injector = s),
              (this.compiler = h),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s))
              return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, k.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const h = In(s.loadComponent()).pipe(
                (0, we.U)(Yi),
                (0, _e.b)((S) => {
                  this.onLoadEndListener && this.onLoadEndListener(s),
                    (s._loadedComponent = S);
                }),
                (0, Mt.x)(() => {
                  this.componentLoaders.delete(s);
                })
              ),
              D = new Pe(h, () => new Se.x()).pipe(nt());
            return this.componentLoaders.set(s, D), D;
          }
          loadChildren(s, h) {
            if (this.childrenLoaders.get(h)) return this.childrenLoaders.get(h);
            if (h._loadedRoutes)
              return (0, k.of)({
                routes: h._loadedRoutes,
                injector: h._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(h);
            const S = this.loadModuleFactoryOrRoutes(h.loadChildren).pipe(
                (0, we.U)((J) => {
                  this.onLoadEndListener && this.onLoadEndListener(h);
                  let ge,
                    je,
                    $e = !1;
                  Array.isArray(J)
                    ? (je = J)
                    : ((ge = J.create(s).injector),
                      (je = yn(ge.get(Kn, [], l.XFs.Self | l.XFs.Optional))));
                  return { routes: je.map(vr), injector: ge };
                }),
                (0, Mt.x)(() => {
                  this.childrenLoaders.delete(h);
                })
              ),
              T = new Pe(S, () => new Se.x()).pipe(nt());
            return this.childrenLoaders.set(h, T), T;
          }
          loadModuleFactoryOrRoutes(s) {
            return In(s()).pipe(
              (0, we.U)(Yi),
              (0, ie.z)((D) =>
                D instanceof l.YKP || Array.isArray(D)
                  ? (0, k.of)(D)
                  : (0, v.D)(this.compiler.compileModuleAsync(D))
              )
            );
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(l.LFG(l.zs3), l.LFG(l.Sil));
          }),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      function Yi(u) {
        return (function Ki(u) {
          return u && 'object' == typeof u && 'default' in u;
        })(u)
          ? u.default
          : u;
      }
      let xs = (() => {
        class u {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Se.x()),
              (this.configLoader = (0, l.f3M)(ei)),
              (this.environmentInjector = (0, l.f3M)(l.lqb)),
              (this.urlSerializer = (0, l.f3M)(ue)),
              (this.rootContexts = (0, l.f3M)(mr)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, k.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (D) =>
                this.events.next(new si(D))),
              (this.configLoader.onLoadStartListener = (D) =>
                this.events.next(new wo(D)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(s) {
            const h = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...s, id: h });
          }
          setupNavigations(s) {
            return (
              (this.transitions = new j.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: s.currentUrlTree,
                currentRawUrl: s.currentUrlTree,
                extractedUrl: s.urlHandlingStrategy.extract(s.currentUrlTree),
                urlAfterRedirects: s.urlHandlingStrategy.extract(
                  s.currentUrlTree
                ),
                rawUrl: s.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: qn,
                restoredState: null,
                currentSnapshot: s.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: s.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, oe.h)((h) => 0 !== h.id),
                (0, we.U)((h) => ({
                  ...h,
                  extractedUrl: s.urlHandlingStrategy.extract(h.rawUrl),
                })),
                (0, Le.w)((h) => {
                  let D = !1,
                    S = !1;
                  return (0, k.of)(h).pipe(
                    (0, _e.b)((T) => {
                      this.currentNavigation = {
                        id: T.id,
                        initialUrl: T.rawUrl,
                        extractedUrl: T.extractedUrl,
                        trigger: T.source,
                        extras: T.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    (0, Le.w)((T) => {
                      const J = s.browserUrlTree.toString(),
                        ge =
                          !s.navigated ||
                          T.extractedUrl.toString() !== J ||
                          J !== s.currentUrlTree.toString();
                      if (
                        !ge &&
                        'reload' !==
                          (T.extras.onSameUrlNavigation ??
                            s.onSameUrlNavigation)
                      ) {
                        const $e = '';
                        return (
                          this.events.next(
                            new Un(T.id, s.serializeUrl(h.rawUrl), $e, 0)
                          ),
                          (s.rawUrlTree = T.rawUrl),
                          T.resolve(null),
                          be.E
                        );
                      }
                      if (s.urlHandlingStrategy.shouldProcessUrl(T.rawUrl))
                        return (
                          Fs(T.source) && (s.browserUrlTree = T.extractedUrl),
                          (0, k.of)(T).pipe(
                            (0, Le.w)(($e) => {
                              const yt = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new ro(
                                    $e.id,
                                    this.urlSerializer.serialize(
                                      $e.extractedUrl
                                    ),
                                    $e.source,
                                    $e.restoredState
                                  )
                                ),
                                yt !== this.transitions?.getValue()
                                  ? be.E
                                  : Promise.resolve($e)
                              );
                            }),
                            (function Ps(u, c, s, h) {
                              return (0, Le.w)((D) =>
                                (function Os(u, c, s, h, D) {
                                  return new da(u, c, s, h, D).apply();
                                })(u, c, s, D.extractedUrl, h).pipe(
                                  (0, we.U)((S) => ({
                                    ...D,
                                    urlAfterRedirects: S,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              s.config
                            ),
                            (0, _e.b)(($e) => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: $e.urlAfterRedirects,
                              }),
                                (h.urlAfterRedirects = $e.urlAfterRedirects);
                            }),
                            (function Ot(u, c, s, h, D) {
                              return (0, ie.z)((S) =>
                                (function yi(
                                  u,
                                  c,
                                  s,
                                  h,
                                  D,
                                  S,
                                  T = 'emptyOnly'
                                ) {
                                  return new Di(u, c, s, h, D, T, S)
                                    .recognize()
                                    .pipe(
                                      (0, Le.w)((J) =>
                                        null === J
                                          ? (function ha(u) {
                                              return new V.y((c) => c.error(u));
                                            })(new fa())
                                          : (0, k.of)(J)
                                      )
                                    );
                                })(
                                  u,
                                  c,
                                  s,
                                  S.urlAfterRedirects,
                                  h.serialize(S.urlAfterRedirects),
                                  h,
                                  D
                                ).pipe(
                                  (0, we.U)((T) => ({
                                    ...S,
                                    targetSnapshot: T,
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              s.config,
                              this.urlSerializer,
                              s.paramsInheritanceStrategy
                            ),
                            (0, _e.b)(($e) => {
                              if (
                                ((h.targetSnapshot = $e.targetSnapshot),
                                'eager' === s.urlUpdateStrategy)
                              ) {
                                if (!$e.extras.skipLocationChange) {
                                  const cn = s.urlHandlingStrategy.merge(
                                    $e.urlAfterRedirects,
                                    $e.rawUrl
                                  );
                                  s.setBrowserUrl(cn, $e);
                                }
                                s.browserUrlTree = $e.urlAfterRedirects;
                              }
                              const yt = new Tn(
                                $e.id,
                                this.urlSerializer.serialize($e.extractedUrl),
                                this.urlSerializer.serialize(
                                  $e.urlAfterRedirects
                                ),
                                $e.targetSnapshot
                              );
                              this.events.next(yt);
                            })
                          )
                        );
                      if (
                        ge &&
                        s.urlHandlingStrategy.shouldProcessUrl(s.rawUrlTree)
                      ) {
                        const {
                            id: $e,
                            extractedUrl: yt,
                            source: cn,
                            restoredState: ar,
                            extras: Lr,
                          } = T,
                          Er = new ro(
                            $e,
                            this.urlSerializer.serialize(yt),
                            cn,
                            ar
                          );
                        this.events.next(Er);
                        const wr = oo(yt, this.rootComponentType).snapshot;
                        return (
                          (h = {
                            ...T,
                            targetSnapshot: wr,
                            urlAfterRedirects: yt,
                            extras: {
                              ...Lr,
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            },
                          }),
                          (0, k.of)(h)
                        );
                      }
                      {
                        const $e = '';
                        return (
                          this.events.next(
                            new Un(T.id, s.serializeUrl(h.extractedUrl), $e, 1)
                          ),
                          (s.rawUrlTree = T.rawUrl),
                          T.resolve(null),
                          be.E
                        );
                      }
                    }),
                    (0, _e.b)((T) => {
                      const J = new dr(
                        T.id,
                        this.urlSerializer.serialize(T.extractedUrl),
                        this.urlSerializer.serialize(T.urlAfterRedirects),
                        T.targetSnapshot
                      );
                      this.events.next(J);
                    }),
                    (0, we.U)(
                      (T) =>
                        (h = {
                          ...T,
                          guards: lt(
                            T.targetSnapshot,
                            T.currentSnapshot,
                            this.rootContexts
                          ),
                        })
                    ),
                    (function Bi(u, c) {
                      return (0, ie.z)((s) => {
                        const {
                          targetSnapshot: h,
                          currentSnapshot: D,
                          guards: {
                            canActivateChecks: S,
                            canDeactivateChecks: T,
                          },
                        } = s;
                        return 0 === T.length && 0 === S.length
                          ? (0, k.of)({ ...s, guardsResult: !0 })
                          : (function Is(u, c, s, h) {
                              return (0, v.D)(u).pipe(
                                (0, ie.z)((D) =>
                                  (function or(u, c, s, h, D) {
                                    const S =
                                      c && c.routeConfig
                                        ? c.routeConfig.canDeactivate
                                        : null;
                                    if (!S || 0 === S.length)
                                      return (0, k.of)(!0);
                                    const T = S.map((J) => {
                                      const ge = yr(c) ?? D,
                                        je = y(J, ge);
                                      return In(
                                        (function Vi(u) {
                                          return u && Ut(u.canDeactivate);
                                        })(je)
                                          ? je.canDeactivate(u, c, s, h)
                                          : ge.runInContext(() =>
                                              je(u, c, s, h)
                                            )
                                      ).pipe((0, he.P)());
                                    });
                                    return (0, k.of)(T).pipe(Rr());
                                  })(D.component, D.route, s, c, h)
                                ),
                                (0, he.P)((D) => !0 !== D, !0)
                              );
                            })(T, h, D, u).pipe(
                              (0, ie.z)((J) =>
                                J &&
                                (function bt(u) {
                                  return 'boolean' == typeof u;
                                })(J)
                                  ? (function Ui(u, c, s, h) {
                                      return (0, v.D)(c).pipe(
                                        (0, ve.b)((D) =>
                                          (0, de.z)(
                                            (function Ln(u, c) {
                                              return (
                                                null !== u && c && c(new Ur(u)),
                                                (0, k.of)(!0)
                                              );
                                            })(D.route.parent, h),
                                            (function gn(u, c) {
                                              return (
                                                null !== u && c && c(new fr(u)),
                                                (0, k.of)(!0)
                                              );
                                            })(D.route, h),
                                            (function uo(u, c, s) {
                                              const h = c[c.length - 1],
                                                S = c
                                                  .slice(0, c.length - 1)
                                                  .reverse()
                                                  .map((T) =>
                                                    (function _(u) {
                                                      const c = u.routeConfig
                                                        ? u.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return c && 0 !== c.length
                                                        ? { node: u, guards: c }
                                                        : null;
                                                    })(T)
                                                  )
                                                  .filter((T) => null !== T)
                                                  .map((T) =>
                                                    (0, Ne.P)(() => {
                                                      const J = T.guards.map(
                                                        (ge) => {
                                                          const je =
                                                              yr(T.node) ?? s,
                                                            $e = y(ge, je);
                                                          return In(
                                                            (function ki(u) {
                                                              return (
                                                                u &&
                                                                Ut(
                                                                  u.canActivateChild
                                                                )
                                                              );
                                                            })($e)
                                                              ? $e.canActivateChild(
                                                                  h,
                                                                  u
                                                                )
                                                              : je.runInContext(
                                                                  () => $e(h, u)
                                                                )
                                                          ).pipe((0, he.P)());
                                                        }
                                                      );
                                                      return (0, k.of)(J).pipe(
                                                        Rr()
                                                      );
                                                    })
                                                  );
                                              return (0, k.of)(S).pipe(Rr());
                                            })(u, D.path, s),
                                            (function Hi(u, c, s) {
                                              const h = c.routeConfig
                                                ? c.routeConfig.canActivate
                                                : null;
                                              if (!h || 0 === h.length)
                                                return (0, k.of)(!0);
                                              const D = h.map((S) =>
                                                (0, Ne.P)(() => {
                                                  const T = yr(c) ?? s,
                                                    J = y(S, T);
                                                  return In(
                                                    (function mt(u) {
                                                      return (
                                                        u && Ut(u.canActivate)
                                                      );
                                                    })(J)
                                                      ? J.canActivate(c, u)
                                                      : T.runInContext(() =>
                                                          J(c, u)
                                                        )
                                                  ).pipe((0, he.P)());
                                                })
                                              );
                                              return (0, k.of)(D).pipe(Rr());
                                            })(u, D.route, s)
                                          )
                                        ),
                                        (0, he.P)((D) => !0 !== D, !0)
                                      );
                                    })(h, S, u, c)
                                  : (0, k.of)(J)
                              ),
                              (0, we.U)((J) => ({ ...s, guardsResult: J }))
                            );
                      });
                    })(this.environmentInjector, (T) => this.events.next(T)),
                    (0, _e.b)((T) => {
                      if (
                        ((h.guardsResult = T.guardsResult), Jn(T.guardsResult))
                      )
                        throw nr(0, T.guardsResult);
                      const J = new Ho(
                        T.id,
                        this.urlSerializer.serialize(T.extractedUrl),
                        this.urlSerializer.serialize(T.urlAfterRedirects),
                        T.targetSnapshot,
                        !!T.guardsResult
                      );
                      this.events.next(J);
                    }),
                    (0, oe.h)(
                      (T) =>
                        !!T.guardsResult ||
                        (s.restoreHistory(T),
                        this.cancelNavigationTransition(T, '', 3),
                        !1)
                    ),
                    kn((T) => {
                      if (T.guards.canActivateChecks.length)
                        return (0, k.of)(T).pipe(
                          (0, _e.b)((J) => {
                            const ge = new gt(
                              J.id,
                              this.urlSerializer.serialize(J.extractedUrl),
                              this.urlSerializer.serialize(J.urlAfterRedirects),
                              J.targetSnapshot
                            );
                            this.events.next(ge);
                          }),
                          (0, Le.w)((J) => {
                            let ge = !1;
                            return (0, k.of)(J).pipe(
                              (function vt(u, c) {
                                return (0, ie.z)((s) => {
                                  const {
                                    targetSnapshot: h,
                                    guards: { canActivateChecks: D },
                                  } = s;
                                  if (!D.length) return (0, k.of)(s);
                                  let S = 0;
                                  return (0, v.D)(D).pipe(
                                    (0, ve.b)((T) =>
                                      (function un(u, c, s, h) {
                                        const D = u.routeConfig,
                                          S = u._resolve;
                                        return (
                                          void 0 !== D?.title &&
                                            !Hn(D) &&
                                            (S[Kt] = D.title),
                                          (function Nt(u, c, s, h) {
                                            const D = (function nn(u) {
                                              return [
                                                ...Object.keys(u),
                                                ...Object.getOwnPropertySymbols(
                                                  u
                                                ),
                                              ];
                                            })(u);
                                            if (0 === D.length)
                                              return (0, k.of)({});
                                            const S = {};
                                            return (0, v.D)(D).pipe(
                                              (0, ie.z)((T) =>
                                                (function xr(u, c, s, h) {
                                                  const D = yr(c) ?? h,
                                                    S = y(u, D);
                                                  return In(
                                                    S.resolve
                                                      ? S.resolve(c, s)
                                                      : D.runInContext(() =>
                                                          S(c, s)
                                                        )
                                                  );
                                                })(u[T], c, s, h).pipe(
                                                  (0, he.P)(),
                                                  (0, _e.b)((J) => {
                                                    S[T] = J;
                                                  })
                                                )
                                              ),
                                              re(1),
                                              (0, Dt.h)(S),
                                              (0, Y.K)((T) =>
                                                Wn(T) ? be.E : (0, We._)(T)
                                              )
                                            );
                                          })(S, u, c, h).pipe(
                                            (0, we.U)(
                                              (T) => (
                                                (u._resolvedData = T),
                                                (u.data = ui(u, s).resolve),
                                                D &&
                                                  Hn(D) &&
                                                  (u.data[Kt] = D.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(T.route, h, u, c)
                                    ),
                                    (0, _e.b)(() => S++),
                                    re(1),
                                    (0, ie.z)((T) =>
                                      S === D.length ? (0, k.of)(s) : be.E
                                    )
                                  );
                                });
                              })(
                                s.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              (0, _e.b)({
                                next: () => (ge = !0),
                                complete: () => {
                                  ge ||
                                    (s.restoreHistory(J),
                                    this.cancelNavigationTransition(J, '', 2));
                                },
                              })
                            );
                          }),
                          (0, _e.b)((J) => {
                            const ge = new ii(
                              J.id,
                              this.urlSerializer.serialize(J.extractedUrl),
                              this.urlSerializer.serialize(J.urlAfterRedirects),
                              J.targetSnapshot
                            );
                            this.events.next(ge);
                          })
                        );
                    }),
                    kn((T) => {
                      const J = (ge) => {
                        const je = [];
                        ge.routeConfig?.loadComponent &&
                          !ge.routeConfig._loadedComponent &&
                          je.push(
                            this.configLoader
                              .loadComponent(ge.routeConfig)
                              .pipe(
                                (0, _e.b)(($e) => {
                                  ge.component = $e;
                                }),
                                (0, we.U)(() => {})
                              )
                          );
                        for (const $e of ge.children) je.push(...J($e));
                        return je;
                      };
                      return te(J(T.targetSnapshot.root)).pipe(
                        (0, Ie.d)(),
                        (0, ot.q)(1)
                      );
                    }),
                    kn(() => this.afterPreactivation()),
                    (0, we.U)((T) => {
                      const J = (function bo(u, c, s) {
                        const h = gr(u, c._root, s ? s._root : void 0);
                        return new ai(h, c);
                      })(
                        s.routeReuseStrategy,
                        T.targetSnapshot,
                        T.currentRouterState
                      );
                      return (h = { ...T, targetRouterState: J });
                    }),
                    (0, _e.b)((T) => {
                      (s.currentUrlTree = T.urlAfterRedirects),
                        (s.rawUrlTree = s.urlHandlingStrategy.merge(
                          T.urlAfterRedirects,
                          T.rawUrl
                        )),
                        (s.routerState = T.targetRouterState),
                        'deferred' === s.urlUpdateStrategy &&
                          (T.extras.skipLocationChange ||
                            s.setBrowserUrl(s.rawUrlTree, T),
                          (s.browserUrlTree = T.urlAfterRedirects));
                    }),
                    ((u, c, s) =>
                      (0, we.U)(
                        (h) => (
                          new Dr(
                            c,
                            h.targetRouterState,
                            h.currentRouterState,
                            s
                          ).activate(u),
                          h
                        )
                      ))(this.rootContexts, s.routeReuseStrategy, (T) =>
                      this.events.next(T)
                    ),
                    (0, _e.b)({
                      next: (T) => {
                        (D = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (s.navigated = !0),
                          this.events.next(
                            new bn(
                              T.id,
                              this.urlSerializer.serialize(T.extractedUrl),
                              this.urlSerializer.serialize(s.currentUrlTree)
                            )
                          ),
                          s.titleStrategy?.updateTitle(
                            T.targetRouterState.snapshot
                          ),
                          T.resolve(!0);
                      },
                      complete: () => {
                        D = !0;
                      },
                    }),
                    (0, Mt.x)(() => {
                      D || S || this.cancelNavigationTransition(h, '', 1),
                        this.currentNavigation?.id === h.id &&
                          (this.currentNavigation = null);
                    }),
                    (0, Y.K)((T) => {
                      if (((S = !0), Mo(T))) {
                        Gr(T) || ((s.navigated = !0), s.restoreHistory(h, !0));
                        const J = new Qt(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          T.message,
                          T.cancellationCode
                        );
                        if ((this.events.next(J), Gr(T))) {
                          const ge = s.urlHandlingStrategy.merge(
                              T.url,
                              s.rawUrlTree
                            ),
                            je = {
                              skipLocationChange: h.extras.skipLocationChange,
                              replaceUrl:
                                'eager' === s.urlUpdateStrategy || Fs(h.source),
                            };
                          s.scheduleNavigation(ge, qn, null, je, {
                            resolve: h.resolve,
                            reject: h.reject,
                            promise: h.promise,
                          });
                        } else h.resolve(!1);
                      } else {
                        s.restoreHistory(h, !0);
                        const J = new er(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          T,
                          h.targetSnapshot ?? void 0
                        );
                        this.events.next(J);
                        try {
                          h.resolve(s.errorHandler(T));
                        } catch (ge) {
                          h.reject(ge);
                        }
                      }
                      return be.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(s, h, D) {
            const S = new Qt(
              s.id,
              this.urlSerializer.serialize(s.extractedUrl),
              h,
              D
            );
            this.events.next(S), s.resolve(!1);
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)();
          }),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      function Fs(u) {
        return u !== qn;
      }
      let Zi = (() => {
          class u {
            buildTitle(s) {
              let h,
                D = s.root;
              for (; void 0 !== D; )
                (h = this.getResolvedTitleForRoute(D) ?? h),
                  (D = D.children.find((S) => S.outlet === Ve));
              return h;
            }
            getResolvedTitleForRoute(s) {
              return s.data[Kt];
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: function () {
                return (0, l.f3M)(fl);
              },
              providedIn: 'root',
            })),
            u
          );
        })(),
        fl = (() => {
          class u extends Zi {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const h = this.buildTitle(s);
              void 0 !== h && this.title.setTitle(h);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(l.LFG(Wt.Dx));
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: 'root',
            })),
            u
          );
        })(),
        Fr = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: function () {
                return (0, l.f3M)(Ji);
              },
              providedIn: 'root',
            })),
            u
          );
        })();
      class hl {
        shouldDetach(c) {
          return !1;
        }
        store(c, s) {}
        shouldAttach(c) {
          return !1;
        }
        retrieve(c) {
          return null;
        }
        shouldReuseRoute(c, s) {
          return c.routeConfig === s.routeConfig;
        }
      }
      let Ji = (() => {
        class u extends hl {}
        return (
          (u.ɵfac = (function () {
            let c;
            return function (h) {
              return (c || (c = l.n5z(u)))(h || u);
            };
          })()),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const _i = new l.OlP('', { providedIn: 'root', factory: () => ({}) });
      let Ls = (() => {
          class u {}
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: function () {
                return (0, l.f3M)(ks);
              },
              providedIn: 'root',
            })),
            u
          );
        })(),
        ks = (() => {
          class u {
            shouldProcessUrl(s) {
              return !0;
            }
            extract(s) {
              return s;
            }
            merge(s, h) {
              return s;
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: 'root',
            })),
            u
          );
        })();
      function pa(u) {
        throw u;
      }
      function ga(u, c, s) {
        return c.parse('/');
      }
      const ma = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        va = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let jn = (() => {
          class u {
            get navigationId() {
              return this.navigationTransitions.navigationId;
            }
            get browserPageId() {
              return this.location.getState()?.ɵrouterPageId;
            }
            get events() {
              return this.navigationTransitions.events;
            }
            constructor() {
              (this.disposed = !1),
                (this.currentPageId = 0),
                (this.console = (0, l.f3M)(l.c2e)),
                (this.isNgZoneEnabled = !1),
                (this.options = (0, l.f3M)(_i, { optional: !0 }) || {}),
                (this.errorHandler = this.options.errorHandler || pa),
                (this.malformedUriErrorHandler =
                  this.options.malformedUriErrorHandler || ga),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.urlHandlingStrategy = (0, l.f3M)(Ls)),
                (this.routeReuseStrategy = (0, l.f3M)(Fr)),
                (this.urlCreationStrategy = (0, l.f3M)(tr)),
                (this.titleStrategy = (0, l.f3M)(Zi)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.paramsInheritanceStrategy =
                  this.options.paramsInheritanceStrategy || 'emptyOnly'),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.config = yn((0, l.f3M)(Kn, { optional: !0 }) ?? [])),
                (this.navigationTransitions = (0, l.f3M)(xs)),
                (this.urlSerializer = (0, l.f3M)(ue)),
                (this.location = (0, l.f3M)(xe.Ye)),
                (this.isNgZoneEnabled =
                  (0, l.f3M)(l.R0b) instanceof l.R0b &&
                  l.R0b.isInAngularZone()),
                this.resetConfig(this.config),
                (this.currentUrlTree = new Dn()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.routerState = oo(this.currentUrlTree, null)),
                this.navigationTransitions.setupNavigations(this).subscribe(
                  (s) => {
                    (this.lastSuccessfulId = s.id),
                      (this.currentPageId = s.targetPageId);
                  },
                  (s) => {
                    this.console.warn(`Unhandled Navigation Error: ${s}`);
                  }
                );
            }
            resetRootComponentType(s) {
              (this.routerState.root.component = s),
                (this.navigationTransitions.rootComponentType = s);
            }
            initialNavigation() {
              if (
                (this.setUpLocationChangeListener(),
                !this.navigationTransitions.hasRequestedNavigation)
              ) {
                const s = this.location.getState();
                this.navigateToSyncWithBrowser(this.location.path(!0), qn, s);
              }
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((s) => {
                  const h = 'popstate' === s.type ? 'popstate' : 'hashchange';
                  'popstate' === h &&
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(s.url, h, s.state);
                    }, 0);
                }));
            }
            navigateToSyncWithBrowser(s, h, D) {
              const S = { replaceUrl: !0 },
                T = D?.navigationId ? D : null;
              if (D) {
                const ge = { ...D };
                delete ge.navigationId,
                  delete ge.ɵrouterPageId,
                  0 !== Object.keys(ge).length && (S.state = ge);
              }
              const J = this.parseUrl(s);
              this.scheduleNavigation(J, h, T, S);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            resetConfig(s) {
              (this.config = s.map(vr)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(s, h = {}) {
              const {
                  relativeTo: D,
                  queryParams: S,
                  fragment: T,
                  queryParamsHandling: J,
                  preserveFragment: ge,
                } = h,
                je = ge ? this.currentUrlTree.fragment : T;
              let $e = null;
              switch (J) {
                case 'merge':
                  $e = { ...this.currentUrlTree.queryParams, ...S };
                  break;
                case 'preserve':
                  $e = this.currentUrlTree.queryParams;
                  break;
                default:
                  $e = S || null;
              }
              return (
                null !== $e && ($e = this.removeEmptyProps($e)),
                this.urlCreationStrategy.createUrlTree(
                  D,
                  this.routerState,
                  this.currentUrlTree,
                  s,
                  $e,
                  je ?? null
                )
              );
            }
            navigateByUrl(s, h = { skipLocationChange: !1 }) {
              const D = Jn(s) ? s : this.parseUrl(s),
                S = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
              return this.scheduleNavigation(S, qn, null, h);
            }
            navigate(s, h = { skipLocationChange: !1 }) {
              return (
                (function Xi(u) {
                  for (let c = 0; c < u.length; c++) {
                    const s = u[c];
                    if (null == s) throw new l.vHH(4008, false);
                  }
                })(s),
                this.navigateByUrl(this.createUrlTree(s, h), h)
              );
            }
            serializeUrl(s) {
              return this.urlSerializer.serialize(s);
            }
            parseUrl(s) {
              let h;
              try {
                h = this.urlSerializer.parse(s);
              } catch (D) {
                h = this.malformedUriErrorHandler(D, this.urlSerializer, s);
              }
              return h;
            }
            isActive(s, h) {
              let D;
              if (
                ((D = !0 === h ? { ...ma } : !1 === h ? { ...va } : h), Jn(s))
              )
                return Cn(this.currentUrlTree, s, D);
              const S = this.parseUrl(s);
              return Cn(this.currentUrlTree, S, D);
            }
            removeEmptyProps(s) {
              return Object.keys(s).reduce((h, D) => {
                const S = s[D];
                return null != S && (h[D] = S), h;
              }, {});
            }
            scheduleNavigation(s, h, D, S, T) {
              if (this.disposed) return Promise.resolve(!1);
              let J, ge, je, $e;
              return (
                T
                  ? ((J = T.resolve), (ge = T.reject), (je = T.promise))
                  : (je = new Promise((yt, cn) => {
                      (J = yt), (ge = cn);
                    })),
                ($e =
                  'computed' === this.canceledNavigationResolution
                    ? D && D.ɵrouterPageId
                      ? D.ɵrouterPageId
                      : S.replaceUrl || S.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1
                    : 0),
                this.navigationTransitions.handleNavigationRequest({
                  targetPageId: $e,
                  source: h,
                  restoredState: D,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: s,
                  extras: S,
                  resolve: J,
                  reject: ge,
                  promise: je,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                je.catch((yt) => Promise.reject(yt))
              );
            }
            setBrowserUrl(s, h) {
              const D = this.urlSerializer.serialize(s),
                S = {
                  ...h.extras.state,
                  ...this.generateNgRouterState(h.id, h.targetPageId),
                };
              this.location.isCurrentPathEqualTo(D) || h.extras.replaceUrl
                ? this.location.replaceState(D, '', S)
                : this.location.go(D, '', S);
            }
            restoreHistory(s, h = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const D = this.currentPageId - s.targetPageId;
                ('popstate' !== s.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !==
                    this.getCurrentNavigation()?.finalUrl) ||
                0 === D
                  ? this.currentUrlTree ===
                      this.getCurrentNavigation()?.finalUrl &&
                    0 === D &&
                    (this.resetState(s),
                    (this.browserUrlTree = s.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(D);
              } else
                'replace' === this.canceledNavigationResolution &&
                  (h && this.resetState(s), this.resetUrlToCurrentUrlTree());
            }
            resetState(s) {
              (this.routerState = s.currentRouterState),
                (this.currentUrlTree = s.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  s.rawUrl
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            generateNgRouterState(s, h) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: s, ɵrouterPageId: h }
                : { navigationId: s };
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)();
            }),
            (u.ɵprov = l.Yz7({
              token: u,
              factory: u.ɵfac,
              providedIn: 'root',
            })),
            u
          );
        })(),
        Nr = (() => {
          class u {
            constructor(s, h, D, S, T, J) {
              (this.router = s),
                (this.route = h),
                (this.tabIndexAttribute = D),
                (this.renderer = S),
                (this.el = T),
                (this.locationStrategy = J),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new Se.x());
              const ge = T.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === ge || 'area' === ge),
                this.isAnchorElement
                  ? (this.subscription = s.events.subscribe((je) => {
                      je instanceof bn && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, l.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, l.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, l.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(s) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', s);
            }
            ngOnChanges(s) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(s) {
              null != s
                ? ((this.commands = Array.isArray(s) ? s : [s]),
                  this.setTabIndexIfNotOnNativeEl('0'))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(s, h, D, S, T) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== s ||
                      h ||
                      D ||
                      S ||
                      T ||
                      ('string' == typeof this.target &&
                        '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const s =
                null === this.href
                  ? null
                  : (0, l.P3R)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      'href'
                    );
              this.applyAttributeValue('href', s);
            }
            applyAttributeValue(s, h) {
              const D = this.renderer,
                S = this.el.nativeElement;
              null !== h ? D.setAttribute(S, s, h) : D.removeAttribute(S, s);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(
                l.Y36(jn),
                l.Y36(pr),
                l.$8M('tabindex'),
                l.Y36(l.Qsj),
                l.Y36(l.SBq),
                l.Y36(xe.S$)
              );
            }),
            (u.ɵdir = l.lG2({
              type: u,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (s, h) {
                1 & s &&
                  l.NdJ('click', function (S) {
                    return h.onClick(
                      S.button,
                      S.ctrlKey,
                      S.shiftKey,
                      S.altKey,
                      S.metaKey
                    );
                  }),
                  2 & s && l.uIk('target', h.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                relativeTo: 'relativeTo',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [l.TTD],
            })),
            u
          );
        })(),
        ya = (() => {
          class u {
            get isActive() {
              return this._isActive;
            }
            constructor(s, h, D, S, T) {
              (this.router = s),
                (this.element = h),
                (this.renderer = D),
                (this.cdr = S),
                (this.link = T),
                (this.classes = []),
                (this._isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new l.vpe()),
                (this.routerEventsSubscription = s.events.subscribe((J) => {
                  J instanceof bn && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, k.of)(this.links.changes, (0, k.of)(null))
                .pipe((0, At.J)())
                .subscribe((s) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const s = [...this.links.toArray(), this.link]
                .filter((h) => !!h)
                .map((h) => h.onChanges);
              this.linkInputChangesSubscription = (0, v.D)(s)
                .pipe((0, At.J)())
                .subscribe((h) => {
                  this._isActive !== this.isLinkActive(this.router)(h) &&
                    this.update();
                });
            }
            set routerLinkActive(s) {
              const h = Array.isArray(s) ? s : s.split(' ');
              this.classes = h.filter((D) => !!D);
            }
            ngOnChanges(s) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const s = this.hasActiveLinks();
                  this._isActive !== s &&
                    ((this._isActive = s),
                    this.cdr.markForCheck(),
                    this.classes.forEach((h) => {
                      s
                        ? this.renderer.addClass(this.element.nativeElement, h)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            h
                          );
                    }),
                    s && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          'aria-current',
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          'aria-current'
                        ),
                    this.isActiveChange.emit(s));
                });
            }
            isLinkActive(s) {
              const h = (function Da(u) {
                return !!u.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (D) => !!D.urlTree && s.isActive(D.urlTree, h);
            }
            hasActiveLinks() {
              const s = this.isLinkActive(this.router);
              return (this.link && s(this.link)) || this.links.some(s);
            }
          }
          return (
            (u.ɵfac = function (s) {
              return new (s || u)(
                l.Y36(jn),
                l.Y36(l.SBq),
                l.Y36(l.Qsj),
                l.Y36(l.sBO),
                l.Y36(Nr, 8)
              );
            }),
            (u.ɵdir = l.lG2({
              type: u,
              selectors: [['', 'routerLinkActive', '']],
              contentQueries: function (s, h, D) {
                if ((1 & s && l.Suo(D, Nr, 5), 2 & s)) {
                  let S;
                  l.iGM((S = l.CRH())) && (h.links = S);
                }
              },
              inputs: {
                routerLinkActiveOptions: 'routerLinkActiveOptions',
                ariaCurrentWhenActive: 'ariaCurrentWhenActive',
                routerLinkActive: 'routerLinkActive',
              },
              outputs: { isActiveChange: 'isActiveChange' },
              exportAs: ['routerLinkActive'],
              standalone: !0,
              features: [l.TTD],
            })),
            u
          );
        })();
      class Bs {}
      let _a = (() => {
        class u {
          constructor(s, h, D, S, T) {
            (this.router = s),
              (this.injector = D),
              (this.preloadingStrategy = S),
              (this.loader = T);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, oe.h)((s) => s instanceof bn),
                (0, ve.b)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(s, h) {
            const D = [];
            for (const S of h) {
              S.providers &&
                !S._injector &&
                (S._injector = (0, l.MMx)(S.providers, s, `Route: ${S.path}`));
              const T = S._injector ?? s,
                J = S._loadedInjector ?? T;
              (S.loadChildren && !S._loadedRoutes && void 0 === S.canLoad) ||
              (S.loadComponent && !S._loadedComponent)
                ? D.push(this.preloadConfig(T, S))
                : (S.children || S._loadedRoutes) &&
                  D.push(this.processRoutes(J, S.children ?? S._loadedRoutes));
            }
            return (0, v.D)(D).pipe((0, At.J)());
          }
          preloadConfig(s, h) {
            return this.preloadingStrategy.preload(h, () => {
              let D;
              D =
                h.loadChildren && void 0 === h.canLoad
                  ? this.loader.loadChildren(s, h)
                  : (0, k.of)(null);
              const S = D.pipe(
                (0, ie.z)((T) =>
                  null === T
                    ? (0, k.of)(void 0)
                    : ((h._loadedRoutes = T.routes),
                      (h._loadedInjector = T.injector),
                      this.processRoutes(T.injector ?? s, T.routes))
                )
              );
              if (h.loadComponent && !h._loadedComponent) {
                const T = this.loader.loadComponent(h);
                return (0, v.D)([S, T]).pipe((0, At.J)());
              }
              return S;
            });
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(
              l.LFG(jn),
              l.LFG(l.Sil),
              l.LFG(l.lqb),
              l.LFG(Bs),
              l.LFG(ei)
            );
          }),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac, providedIn: 'root' })),
          u
        );
      })();
      const Ei = new l.OlP('');
      let Ca = (() => {
        class u {
          constructor(s, h, D, S, T = {}) {
            (this.urlSerializer = s),
              (this.transitions = h),
              (this.viewportScroller = D),
              (this.zone = S),
              (this.options = T),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (T.scrollPositionRestoration =
                T.scrollPositionRestoration || 'disabled'),
              (T.anchorScrolling = T.anchorScrolling || 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof ro
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = s.navigationTrigger),
                  (this.restoredId = s.restoredState
                    ? s.restoredState.navigationId
                    : 0))
                : s instanceof bn &&
                  ((this.lastId = s.id),
                  this.scheduleScrollEvent(
                    s,
                    this.urlSerializer.parse(s.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((s) => {
              s instanceof jo &&
                (s.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(s.position)
                  : s.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(s.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(s, h) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new jo(
                      s,
                      'popstate' === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      h
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (u.ɵfac = function (s) {
            l.$Z();
          }),
          (u.ɵprov = l.Yz7({ token: u, factory: u.ɵfac })),
          u
        );
      })();
      var $n = (() => (
        (($n = $n || {})[($n.COMPLETE = 0)] = 'COMPLETE'),
        ($n[($n.FAILED = 1)] = 'FAILED'),
        ($n[($n.REDIRECTING = 2)] = 'REDIRECTING'),
        $n
      ))();
      const Cr = !1;
      function Zr(u, c) {
        return { ɵkind: u, ɵproviders: c };
      }
      const bi = new l.OlP('', { providedIn: 'root', factory: () => !1 });
      function Lt() {
        const u = (0, l.f3M)(l.zs3);
        return (c) => {
          const s = u.get(l.z2F);
          if (c !== s.components[0]) return;
          const h = u.get(jn),
            D = u.get(pl);
          1 === u.get(Ea) && h.initialNavigation(),
            u.get(gl, null, l.XFs.Optional)?.setUpPreloading(),
            u.get(Ei, null, l.XFs.Optional)?.init(),
            h.resetRootComponentType(s.componentTypes[0]),
            D.closed || (D.next(), D.unsubscribe());
        };
      }
      const pl = new l.OlP(Cr ? 'bootstrap done indicator' : '', {
          factory: () => new Se.x(),
        }),
        Ea = new l.OlP(Cr ? 'initial navigation' : '', {
          providedIn: 'root',
          factory: () => 1,
        });
      function Sc() {
        let u = [];
        return (
          (u = Cr
            ? [
                {
                  provide: l.Xts,
                  multi: !0,
                  useFactory: () => {
                    const c = (0, l.f3M)(jn);
                    return () =>
                      c.events.subscribe((s) => {
                        console.group?.(`Router Event: ${s.constructor.name}`),
                          console.log(
                            (function ln(u) {
                              if (!('type' in u))
                                return `Unknown Router Event: ${u.constructor.name}`;
                              switch (u.type) {
                                case 14:
                                  return `ActivationEnd(path: '${
                                    u.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 13:
                                  return `ActivationStart(path: '${
                                    u.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 12:
                                  return `ChildActivationEnd(path: '${
                                    u.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 11:
                                  return `ChildActivationStart(path: '${
                                    u.snapshot.routeConfig?.path || ''
                                  }')`;
                                case 8:
                                  return `GuardsCheckEnd(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}', state: ${u.state}, shouldActivate: ${u.shouldActivate})`;
                                case 7:
                                  return `GuardsCheckStart(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}', state: ${u.state})`;
                                case 2:
                                  return `NavigationCancel(id: ${u.id}, url: '${u.url}')`;
                                case 16:
                                  return `NavigationSkipped(id: ${u.id}, url: '${u.url}')`;
                                case 1:
                                  return `NavigationEnd(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}')`;
                                case 3:
                                  return `NavigationError(id: ${u.id}, url: '${u.url}', error: ${u.error})`;
                                case 0:
                                  return `NavigationStart(id: ${u.id}, url: '${u.url}')`;
                                case 6:
                                  return `ResolveEnd(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}', state: ${u.state})`;
                                case 5:
                                  return `ResolveStart(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}', state: ${u.state})`;
                                case 10:
                                  return `RouteConfigLoadEnd(path: ${u.route.path})`;
                                case 9:
                                  return `RouteConfigLoadStart(path: ${u.route.path})`;
                                case 4:
                                  return `RoutesRecognized(id: ${u.id}, url: '${u.url}', urlAfterRedirects: '${u.urlAfterRedirects}', state: ${u.state})`;
                                case 15:
                                  return `Scroll(anchor: '${
                                    u.anchor
                                  }', position: '${
                                    u.position
                                      ? `${u.position[0]}, ${u.position[1]}`
                                      : null
                                  }')`;
                              }
                            })(s)
                          ),
                          console.log(s),
                          console.groupEnd?.();
                      });
                  },
                },
              ]
            : []),
          Zr(1, u)
        );
      }
      const gl = new l.OlP(Cr ? 'router preloader' : '');
      function Ic(u) {
        return Zr(0, [
          { provide: gl, useExisting: _a },
          { provide: Bs, useExisting: u },
        ]);
      }
      const Yt = !1,
        ni = new l.OlP(
          Yt ? 'router duplicate forRoot guard' : 'ROUTER_FORROOT_GUARD'
        ),
        ml = [
          xe.Ye,
          { provide: ue, useClass: b },
          jn,
          mr,
          {
            provide: pr,
            useFactory: function Ro(u) {
              return u.routerState.root;
            },
            deps: [jn],
          },
          ei,
          Yt ? { provide: bi, useValue: !0 } : [],
        ];
      function ir() {
        return new l.PXZ('Router', jn);
      }
      let xo = (() => {
        class u {
          constructor(s) {}
          static forRoot(s, h) {
            return {
              ngModule: u,
              providers: [
                ml,
                Yt && h?.enableTracing ? Sc().ɵproviders : [],
                { provide: Kn, multi: !0, useValue: s },
                {
                  provide: ni,
                  useFactory: vl,
                  deps: [[jn, new l.FiY(), new l.tp0()]],
                },
                { provide: _i, useValue: h || {} },
                h?.useHash
                  ? { provide: xe.S$, useClass: xe.Do }
                  : { provide: xe.S$, useClass: xe.b0 },
                {
                  provide: Ei,
                  useFactory: () => {
                    const u = (0, l.f3M)(xe.EM),
                      c = (0, l.f3M)(l.R0b),
                      s = (0, l.f3M)(_i),
                      h = (0, l.f3M)(xs),
                      D = (0, l.f3M)(ue);
                    return (
                      s.scrollOffset && u.setOffset(s.scrollOffset),
                      new Ca(D, h, u, c, s)
                    );
                  },
                },
                h?.preloadingStrategy
                  ? Ic(h.preloadingStrategy).ɵproviders
                  : [],
                { provide: l.PXZ, multi: !0, useFactory: ir },
                h?.initialNavigation ? Ac(h) : [],
                [
                  { provide: Ma, useFactory: Lt },
                  { provide: l.tb, multi: !0, useExisting: Ma },
                ],
              ],
            };
          }
          static forChild(s) {
            return {
              ngModule: u,
              providers: [{ provide: Kn, multi: !0, useValue: s }],
            };
          }
        }
        return (
          (u.ɵfac = function (s) {
            return new (s || u)(l.LFG(ni, 8));
          }),
          (u.ɵmod = l.oAB({ type: u })),
          (u.ɵinj = l.cJS({ imports: [Yr] })),
          u
        );
      })();
      function vl(u) {
        if (Yt && u)
          throw new l.vHH(
            4007,
            "The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return 'guarded';
      }
      function Ac(u) {
        return [
          'disabled' === u.initialNavigation
            ? Zr(3, [
                {
                  provide: l.ip1,
                  multi: !0,
                  useFactory: () => {
                    const c = (0, l.f3M)(jn);
                    return () => {
                      c.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: Ea, useValue: 2 },
              ]).ɵproviders
            : [],
          'enabledBlocking' === u.initialNavigation
            ? Zr(2, [
                { provide: Ea, useValue: 0 },
                {
                  provide: l.ip1,
                  multi: !0,
                  deps: [l.zs3],
                  useFactory: (c) => {
                    const s = c.get(xe.V_, Promise.resolve());
                    return () =>
                      s.then(
                        () =>
                          new Promise((h) => {
                            const D = c.get(jn),
                              S = c.get(pl);
                            (function Us(u, c) {
                              u.events
                                .pipe(
                                  (0, oe.h)(
                                    (s) =>
                                      s instanceof bn ||
                                      s instanceof Qt ||
                                      s instanceof er ||
                                      s instanceof Un
                                  ),
                                  (0, we.U)((s) =>
                                    s instanceof bn || s instanceof Un
                                      ? $n.COMPLETE
                                      : s instanceof Qt &&
                                        (0 === s.code || 1 === s.code)
                                      ? $n.REDIRECTING
                                      : $n.FAILED
                                  ),
                                  (0, oe.h)((s) => s !== $n.REDIRECTING),
                                  (0, ot.q)(1)
                                )
                                .subscribe(() => {
                                  c();
                                });
                            })(D, () => {
                              h(!0);
                            }),
                              (c.get(xs).afterPreactivation = () => (
                                h(!0), S.closed ? (0, k.of)(void 0) : S
                              )),
                              D.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const Ma = new l.OlP(Yt ? 'Router Initializer' : '');
    },
    3416: (Re, q, C) => {
      C.d(q, { Zw: () => ke, aw: () => _e, X$: () => ve, sK: () => ie });
      var l = C(4650),
        v = C(9646),
        k = C(9751),
        j = C(576);
      function H(Y) {
        return (
          !!Y &&
          (Y instanceof k.y || ((0, j.m)(Y.lift) && (0, j.m)(Y.subscribe)))
        );
      }
      var V = C(4128),
        $ = C(7272),
        Z = C(9770),
        X = C(5698),
        Q = C(4707),
        U = C(3099);
      function L(Y, me, F) {
        let re,
          ce = !1;
        return (
          Y && 'object' == typeof Y
            ? ({
                bufferSize: re = 1 / 0,
                windowTime: me = 1 / 0,
                refCount: ce = !1,
                scheduler: F,
              } = Y)
            : (re = Y ?? 1 / 0),
          (0, U.B)({
            connector: () => new Q.t(re, me, F),
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: ce,
          })
        );
      }
      var se = C(4004),
        te = C(4351),
        De = C(3900);
      class ke {}
      let de = (() => {
        class Y extends ke {
          getTranslation(F) {
            return (0, v.of)({});
          }
        }
        return (
          (Y.ɵfac = (function () {
            let me;
            return function (re) {
              return (me || (me = l.n5z(Y)))(re || Y);
            };
          })()),
          (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
          Y
        );
      })();
      class Ne {}
      let Me = (() => {
        class Y {
          handle(F) {
            return F.key;
          }
        }
        return (
          (Y.ɵfac = function (F) {
            return new (F || Y)();
          }),
          (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
          Y
        );
      })();
      function We(Y, me) {
        if (Y === me) return !0;
        if (null === Y || null === me) return !1;
        if (Y != Y && me != me) return !0;
        let ce,
          Ie,
          Oe,
          F = typeof Y;
        if (F == typeof me && 'object' == F) {
          if (!Array.isArray(Y)) {
            if (Array.isArray(me)) return !1;
            for (Ie in ((Oe = Object.create(null)), Y)) {
              if (!We(Y[Ie], me[Ie])) return !1;
              Oe[Ie] = !0;
            }
            for (Ie in me) if (!(Ie in Oe) && typeof me[Ie] < 'u') return !1;
            return !0;
          }
          if (!Array.isArray(me)) return !1;
          if ((ce = Y.length) == me.length) {
            for (Ie = 0; Ie < ce; Ie++) if (!We(Y[Ie], me[Ie])) return !1;
            return !0;
          }
        }
        return !1;
      }
      function be(Y) {
        return typeof Y < 'u' && null !== Y;
      }
      function Ee(Y) {
        return Y && 'object' == typeof Y && !Array.isArray(Y);
      }
      function Ye(Y, me) {
        let F = Object.assign({}, Y);
        return (
          Ee(Y) &&
            Ee(me) &&
            Object.keys(me).forEach((re) => {
              Ee(me[re])
                ? re in Y
                  ? (F[re] = Ye(Y[re], me[re]))
                  : Object.assign(F, { [re]: me[re] })
                : Object.assign(F, { [re]: me[re] });
            }),
          F
        );
      }
      class nt {}
      let Pe = (() => {
        class Y extends nt {
          constructor() {
            super(...arguments),
              (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(F, re) {
            let ce;
            return (
              (ce =
                'string' == typeof F
                  ? this.interpolateString(F, re)
                  : 'function' == typeof F
                  ? this.interpolateFunction(F, re)
                  : F),
              ce
            );
          }
          getValue(F, re) {
            let ce = 'string' == typeof re ? re.split('.') : [re];
            re = '';
            do {
              (re += ce.shift()),
                !be(F) || !be(F[re]) || ('object' != typeof F[re] && ce.length)
                  ? ce.length
                    ? (re += '.')
                    : (F = void 0)
                  : ((F = F[re]), (re = ''));
            } while (ce.length);
            return F;
          }
          interpolateFunction(F, re) {
            return F(re);
          }
          interpolateString(F, re) {
            return re
              ? F.replace(this.templateMatcher, (ce, Ie) => {
                  let Oe = this.getValue(re, Ie);
                  return be(Oe) ? Oe : ce;
                })
              : F;
          }
        }
        return (
          (Y.ɵfac = (function () {
            let me;
            return function (re) {
              return (me || (me = l.n5z(Y)))(re || Y);
            };
          })()),
          (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
          Y
        );
      })();
      class Se {}
      let xe = (() => {
        class Y extends Se {
          compile(F, re) {
            return F;
          }
          compileTranslations(F, re) {
            return F;
          }
        }
        return (
          (Y.ɵfac = (function () {
            let me;
            return function (re) {
              return (me || (me = l.n5z(Y)))(re || Y);
            };
          })()),
          (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
          Y
        );
      })();
      class we {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new l.vpe()),
            (this.onLangChange = new l.vpe()),
            (this.onDefaultLangChange = new l.vpe());
        }
      }
      const Le = new l.OlP('USE_STORE'),
        ot = new l.OlP('USE_DEFAULT_LANG'),
        Ke = new l.OlP('DEFAULT_LANGUAGE'),
        oe = new l.OlP('USE_EXTEND');
      let ie = (() => {
          class Y {
            constructor(F, re, ce, Ie, Oe, ct = !0, Dt = !1, Mt = !1, At) {
              (this.store = F),
                (this.currentLoader = re),
                (this.compiler = ce),
                (this.parser = Ie),
                (this.missingTranslationHandler = Oe),
                (this.useDefaultLang = ct),
                (this.isolate = Dt),
                (this.extend = Mt),
                (this.pending = !1),
                (this._onTranslationChange = new l.vpe()),
                (this._onLangChange = new l.vpe()),
                (this._onDefaultLangChange = new l.vpe()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {}),
                At && this.setDefaultLang(At);
            }
            get onTranslationChange() {
              return this.isolate
                ? this._onTranslationChange
                : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate
                ? this._onLangChange
                : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate
                ? this._onDefaultLangChange
                : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(F) {
              this.isolate
                ? (this._defaultLang = F)
                : (this.store.defaultLang = F);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(F) {
              this.isolate
                ? (this._currentLang = F)
                : (this.store.currentLang = F);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(F) {
              this.isolate ? (this._langs = F) : (this.store.langs = F);
            }
            get translations() {
              return this.isolate
                ? this._translations
                : this.store.translations;
            }
            set translations(F) {
              this.isolate
                ? (this._translations = F)
                : (this.store.translations = F);
            }
            setDefaultLang(F) {
              if (F === this.defaultLang) return;
              let re = this.retrieveTranslations(F);
              typeof re < 'u'
                ? (null == this.defaultLang && (this.defaultLang = F),
                  re.pipe((0, X.q)(1)).subscribe((ce) => {
                    this.changeDefaultLang(F);
                  }))
                : this.changeDefaultLang(F);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(F) {
              if (F === this.currentLang)
                return (0, v.of)(this.translations[F]);
              let re = this.retrieveTranslations(F);
              return typeof re < 'u'
                ? (this.currentLang || (this.currentLang = F),
                  re.pipe((0, X.q)(1)).subscribe((ce) => {
                    this.changeLang(F);
                  }),
                  re)
                : (this.changeLang(F), (0, v.of)(this.translations[F]));
            }
            retrieveTranslations(F) {
              let re;
              return (
                (typeof this.translations[F] > 'u' || this.extend) &&
                  ((this._translationRequests[F] =
                    this._translationRequests[F] || this.getTranslation(F)),
                  (re = this._translationRequests[F])),
                re
              );
            }
            getTranslation(F) {
              this.pending = !0;
              const re = this.currentLoader
                .getTranslation(F)
                .pipe(L(1), (0, X.q)(1));
              return (
                (this.loadingTranslations = re.pipe(
                  (0, se.U)((ce) => this.compiler.compileTranslations(ce, F)),
                  L(1),
                  (0, X.q)(1)
                )),
                this.loadingTranslations.subscribe({
                  next: (ce) => {
                    (this.translations[F] =
                      this.extend && this.translations[F]
                        ? { ...ce, ...this.translations[F] }
                        : ce),
                      this.updateLangs(),
                      (this.pending = !1);
                  },
                  error: (ce) => {
                    this.pending = !1;
                  },
                }),
                re
              );
            }
            setTranslation(F, re, ce = !1) {
              (re = this.compiler.compileTranslations(re, F)),
                (this.translations[F] =
                  (ce || this.extend) && this.translations[F]
                    ? Ye(this.translations[F], re)
                    : re),
                this.updateLangs(),
                this.onTranslationChange.emit({
                  lang: F,
                  translations: this.translations[F],
                });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(F) {
              F.forEach((re) => {
                -1 === this.langs.indexOf(re) && this.langs.push(re);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(F, re, ce) {
              let Ie;
              if (re instanceof Array) {
                let Oe = {},
                  ct = !1;
                for (let Dt of re)
                  (Oe[Dt] = this.getParsedResult(F, Dt, ce)),
                    H(Oe[Dt]) && (ct = !0);
                if (ct) {
                  const Dt = re.map((Mt) =>
                    H(Oe[Mt]) ? Oe[Mt] : (0, v.of)(Oe[Mt])
                  );
                  return (0, V.D)(Dt).pipe(
                    (0, se.U)((Mt) => {
                      let At = {};
                      return (
                        Mt.forEach((Wt, Ve) => {
                          At[re[Ve]] = Wt;
                        }),
                        At
                      );
                    })
                  );
                }
                return Oe;
              }
              if (
                (F &&
                  (Ie = this.parser.interpolate(
                    this.parser.getValue(F, re),
                    ce
                  )),
                typeof Ie > 'u' &&
                  null != this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (Ie = this.parser.interpolate(
                    this.parser.getValue(
                      this.translations[this.defaultLang],
                      re
                    ),
                    ce
                  )),
                typeof Ie > 'u')
              ) {
                let Oe = { key: re, translateService: this };
                typeof ce < 'u' && (Oe.interpolateParams = ce),
                  (Ie = this.missingTranslationHandler.handle(Oe));
              }
              return typeof Ie < 'u' ? Ie : re;
            }
            get(F, re) {
              if (!be(F) || !F.length)
                throw new Error('Parameter "key" required');
              if (this.pending)
                return this.loadingTranslations.pipe(
                  (0, te.b)((ce) =>
                    H((ce = this.getParsedResult(ce, F, re)))
                      ? ce
                      : (0, v.of)(ce)
                  )
                );
              {
                let ce = this.getParsedResult(
                  this.translations[this.currentLang],
                  F,
                  re
                );
                return H(ce) ? ce : (0, v.of)(ce);
              }
            }
            getStreamOnTranslationChange(F, re) {
              if (!be(F) || !F.length)
                throw new Error('Parameter "key" required');
              return (0, $.z)(
                (0, Z.P)(() => this.get(F, re)),
                this.onTranslationChange.pipe(
                  (0, De.w)((ce) => {
                    const Ie = this.getParsedResult(ce.translations, F, re);
                    return 'function' == typeof Ie.subscribe
                      ? Ie
                      : (0, v.of)(Ie);
                  })
                )
              );
            }
            stream(F, re) {
              if (!be(F) || !F.length)
                throw new Error('Parameter "key" required');
              return (0, $.z)(
                (0, Z.P)(() => this.get(F, re)),
                this.onLangChange.pipe(
                  (0, De.w)((ce) => {
                    const Ie = this.getParsedResult(ce.translations, F, re);
                    return H(Ie) ? Ie : (0, v.of)(Ie);
                  })
                )
              );
            }
            instant(F, re) {
              if (!be(F) || !F.length)
                throw new Error('Parameter "key" required');
              let ce = this.getParsedResult(
                this.translations[this.currentLang],
                F,
                re
              );
              if (H(ce)) {
                if (F instanceof Array) {
                  let Ie = {};
                  return (
                    F.forEach((Oe, ct) => {
                      Ie[F[ct]] = F[ct];
                    }),
                    Ie
                  );
                }
                return F;
              }
              return ce;
            }
            set(F, re, ce = this.currentLang) {
              (this.translations[ce][F] = this.compiler.compile(re, ce)),
                this.updateLangs(),
                this.onTranslationChange.emit({
                  lang: ce,
                  translations: this.translations[ce],
                });
            }
            changeLang(F) {
              (this.currentLang = F),
                this.onLangChange.emit({
                  lang: F,
                  translations: this.translations[F],
                }),
                null == this.defaultLang && this.changeDefaultLang(F);
            }
            changeDefaultLang(F) {
              (this.defaultLang = F),
                this.onDefaultLangChange.emit({
                  lang: F,
                  translations: this.translations[F],
                });
            }
            reloadLang(F) {
              return this.resetLang(F), this.getTranslation(F);
            }
            resetLang(F) {
              (this._translationRequests[F] = void 0),
                (this.translations[F] = void 0);
            }
            getBrowserLang() {
              if (typeof window > 'u' || typeof window.navigator > 'u') return;
              let F = window.navigator.languages
                ? window.navigator.languages[0]
                : null;
              return (
                (F =
                  F ||
                  window.navigator.language ||
                  window.navigator.browserLanguage ||
                  window.navigator.userLanguage),
                typeof F > 'u'
                  ? void 0
                  : (-1 !== F.indexOf('-') && (F = F.split('-')[0]),
                    -1 !== F.indexOf('_') && (F = F.split('_')[0]),
                    F)
              );
            }
            getBrowserCultureLang() {
              if (typeof window > 'u' || typeof window.navigator > 'u') return;
              let F = window.navigator.languages
                ? window.navigator.languages[0]
                : null;
              return (
                (F =
                  F ||
                  window.navigator.language ||
                  window.navigator.browserLanguage ||
                  window.navigator.userLanguage),
                F
              );
            }
          }
          return (
            (Y.ɵfac = function (F) {
              return new (F || Y)(
                l.LFG(we),
                l.LFG(ke),
                l.LFG(Se),
                l.LFG(nt),
                l.LFG(Ne),
                l.LFG(ot),
                l.LFG(Le),
                l.LFG(oe),
                l.LFG(Ke)
              );
            }),
            (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
            Y
          );
        })(),
        ve = (() => {
          class Y {
            constructor(F, re) {
              (this.translate = F),
                (this._ref = re),
                (this.value = ''),
                (this.lastKey = null),
                (this.lastParams = []);
            }
            updateValue(F, re, ce) {
              let Ie = (Oe) => {
                (this.value = void 0 !== Oe ? Oe : F),
                  (this.lastKey = F),
                  this._ref.markForCheck();
              };
              if (ce) {
                let Oe = this.translate.getParsedResult(ce, F, re);
                H(Oe.subscribe) ? Oe.subscribe(Ie) : Ie(Oe);
              }
              this.translate.get(F, re).subscribe(Ie);
            }
            transform(F, ...re) {
              if (!F || !F.length) return F;
              if (We(F, this.lastKey) && We(re, this.lastParams))
                return this.value;
              let ce;
              if (be(re[0]) && re.length)
                if ('string' == typeof re[0] && re[0].length) {
                  let Ie = re[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                  try {
                    ce = JSON.parse(Ie);
                  } catch {
                    throw new SyntaxError(
                      `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${re[0]}`
                    );
                  }
                } else
                  'object' == typeof re[0] &&
                    !Array.isArray(re[0]) &&
                    (ce = re[0]);
              return (
                (this.lastKey = F),
                (this.lastParams = re),
                this.updateValue(F, ce),
                this._dispose(),
                this.onTranslationChange ||
                  (this.onTranslationChange =
                    this.translate.onTranslationChange.subscribe((Ie) => {
                      this.lastKey &&
                        Ie.lang === this.translate.currentLang &&
                        ((this.lastKey = null),
                        this.updateValue(F, ce, Ie.translations));
                    })),
                this.onLangChange ||
                  (this.onLangChange = this.translate.onLangChange.subscribe(
                    (Ie) => {
                      this.lastKey &&
                        ((this.lastKey = null),
                        this.updateValue(F, ce, Ie.translations));
                    }
                  )),
                this.onDefaultLangChange ||
                  (this.onDefaultLangChange =
                    this.translate.onDefaultLangChange.subscribe(() => {
                      this.lastKey &&
                        ((this.lastKey = null), this.updateValue(F, ce));
                    })),
                this.value
              );
            }
            _dispose() {
              typeof this.onTranslationChange < 'u' &&
                (this.onTranslationChange.unsubscribe(),
                (this.onTranslationChange = void 0)),
                typeof this.onLangChange < 'u' &&
                  (this.onLangChange.unsubscribe(),
                  (this.onLangChange = void 0)),
                typeof this.onDefaultLangChange < 'u' &&
                  (this.onDefaultLangChange.unsubscribe(),
                  (this.onDefaultLangChange = void 0));
            }
            ngOnDestroy() {
              this._dispose();
            }
          }
          return (
            (Y.ɵfac = function (F) {
              return new (F || Y)(l.Y36(ie, 16), l.Y36(l.sBO, 16));
            }),
            (Y.ɵpipe = l.Yjl({ name: 'translate', type: Y, pure: !1 })),
            (Y.ɵprov = l.Yz7({ token: Y, factory: Y.ɵfac })),
            Y
          );
        })(),
        _e = (() => {
          class Y {
            static forRoot(F = {}) {
              return {
                ngModule: Y,
                providers: [
                  F.loader || { provide: ke, useClass: de },
                  F.compiler || { provide: Se, useClass: xe },
                  F.parser || { provide: nt, useClass: Pe },
                  F.missingTranslationHandler || { provide: Ne, useClass: Me },
                  we,
                  { provide: Le, useValue: F.isolate },
                  { provide: ot, useValue: F.useDefaultLang },
                  { provide: oe, useValue: F.extend },
                  { provide: Ke, useValue: F.defaultLanguage },
                  ie,
                ],
              };
            }
            static forChild(F = {}) {
              return {
                ngModule: Y,
                providers: [
                  F.loader || { provide: ke, useClass: de },
                  F.compiler || { provide: Se, useClass: xe },
                  F.parser || { provide: nt, useClass: Pe },
                  F.missingTranslationHandler || { provide: Ne, useClass: Me },
                  { provide: Le, useValue: F.isolate },
                  { provide: ot, useValue: F.useDefaultLang },
                  { provide: oe, useValue: F.extend },
                  { provide: Ke, useValue: F.defaultLanguage },
                  ie,
                ],
              };
            }
          }
          return (
            (Y.ɵfac = function (F) {
              return new (F || Y)();
            }),
            (Y.ɵmod = l.oAB({ type: Y })),
            (Y.ɵinj = l.cJS({})),
            Y
          );
        })();
    },
    3447: (Re, q, C) => {
      C.d(q, { Iq: () => Z, Yv: () => H });
      var l = C(6895),
        v = C(4650);
      const k = new v.OlP(
        'WindowToken',
        typeof window < 'u' && window.document
          ? { providedIn: 'root', factory: () => window }
          : { providedIn: 'root', factory: () => {} }
      );
      var j = C(7579);
      let H = (() => {
          class X {
            constructor(U, L, se) {
              (this.ngZone = U),
                (this.document = L),
                (this.window = se),
                (this.copySubject = new j.x()),
                (this.copyResponse$ = this.copySubject.asObservable()),
                (this.config = {});
            }
            configure(U) {
              this.config = U;
            }
            copy(U) {
              if (!this.isSupported || !U)
                return this.pushCopyResponse({ isSuccess: !1, content: U });
              const L = this.copyFromContent(U);
              return this.pushCopyResponse(
                L ? { content: U, isSuccess: L } : { isSuccess: !1, content: U }
              );
            }
            get isSupported() {
              return (
                !!this.document.queryCommandSupported &&
                !!this.document.queryCommandSupported('copy') &&
                !!this.window
              );
            }
            isTargetValid(U) {
              if (
                U instanceof HTMLInputElement ||
                U instanceof HTMLTextAreaElement
              ) {
                if (U.hasAttribute('disabled'))
                  throw new Error(
                    'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                  );
                return !0;
              }
              throw new Error('Target should be input or textarea');
            }
            copyFromInputElement(U, L = !0) {
              try {
                this.selectTarget(U);
                const se = this.copyText();
                return (
                  this.clearSelection(L ? U : void 0, this.window),
                  se && this.isCopySuccessInIE11()
                );
              } catch {
                return !1;
              }
            }
            isCopySuccessInIE11() {
              const U = this.window.clipboardData;
              return !(U && U.getData && !U.getData('Text'));
            }
            copyFromContent(U, L = this.document.body) {
              if (
                (this.tempTextArea &&
                  !L.contains(this.tempTextArea) &&
                  this.destroy(this.tempTextArea.parentElement || void 0),
                !this.tempTextArea)
              ) {
                this.tempTextArea = this.createTempTextArea(
                  this.document,
                  this.window
                );
                try {
                  L.appendChild(this.tempTextArea);
                } catch {
                  throw new Error('Container should be a Dom element');
                }
              }
              this.tempTextArea.value = U;
              const se = this.copyFromInputElement(this.tempTextArea, !1);
              return (
                this.config.cleanUpAfterCopy &&
                  this.destroy(this.tempTextArea.parentElement || void 0),
                se
              );
            }
            destroy(U = this.document.body) {
              this.tempTextArea &&
                (U.removeChild(this.tempTextArea),
                (this.tempTextArea = void 0));
            }
            selectTarget(U) {
              return (
                U.select(),
                U.setSelectionRange(0, U.value.length),
                U.value.length
              );
            }
            copyText() {
              return this.document.execCommand('copy');
            }
            clearSelection(U, L) {
              U && U.focus(), L.getSelection()?.removeAllRanges();
            }
            createTempTextArea(U, L) {
              const se = 'rtl' === U.documentElement.getAttribute('dir');
              let te;
              return (
                (te = U.createElement('textarea')),
                (te.style.fontSize = '12pt'),
                (te.style.border = '0'),
                (te.style.padding = '0'),
                (te.style.margin = '0'),
                (te.style.position = 'absolute'),
                (te.style[se ? 'right' : 'left'] = '-9999px'),
                (te.style.top =
                  (L.pageYOffset || U.documentElement.scrollTop) + 'px'),
                te.setAttribute('readonly', ''),
                te
              );
            }
            pushCopyResponse(U) {
              this.copySubject.observers.length > 0 &&
                this.ngZone.run(() => {
                  this.copySubject.next(U);
                });
            }
            pushCopyReponse(U) {
              this.pushCopyResponse(U);
            }
          }
          return (
            (X.ɵfac = function (U) {
              return new (U || X)(v.LFG(v.R0b), v.LFG(l.K0), v.LFG(k, 8));
            }),
            (X.ɵprov = v.Yz7({
              token: X,
              factory: X.ɵfac,
              providedIn: 'root',
            })),
            X
          );
        })(),
        Z = (() => {
          class X {}
          return (
            (X.ɵfac = function (U) {
              return new (U || X)();
            }),
            (X.ɵmod = v.oAB({ type: X })),
            (X.ɵinj = v.cJS({ imports: [[l.ez]] })),
            X
          );
        })();
    },
  },
  (Re) => {
    Re((Re.s = 6306));
  },
]);
