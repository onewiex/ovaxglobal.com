(self.webpackChunkwww = self.webpackChunkwww || []).push([
  [533],
  {
    1533: (Ve, de, T) => {
      'use strict';
      T.r(de), T.d(de, { FacadeModule: () => Js });
      var e = T(4650),
        x = T(3082),
        z = T(4466),
        _e = T(7123),
        q = T(7579),
        D = T(1135),
        w = T(2722),
        U = T(900);
      let f = (() => {
          class t {
            constructor() {
              this.title$ = new D.X(null);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵprov = e.Yz7({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })(),
        H = (() => {
          class t {
            constructor() {
              this.videos$ = new D.X(null);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵprov = e.Yz7({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })();
      var r = T(6895),
        b = T(3447),
        L = T(9154);
      function p(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 2),
            e.O4$(),
            e.TgZ(1, 'svg'),
            e._UZ(2, 'use'),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.Q6J('href', a.value, e.LSH)('title', a.baggage.name),
            e.uIk('aria-label', a.type),
            e.xp6(2),
            e.uIk(
              'href',
              'assets/img/sprite.svg#' + a.baggage.code,
              null,
              'xlink'
            );
        }
      }
      const c = [[['', 'outside', '']], [['', 'inside', '']]],
        d = ['[outside]', '[inside]'];
      let _ = (() => {
        class t {
          constructor(a, i, o) {
            (this.app = a),
              (this.clipboardService = i),
              (this.toastService = o),
              (this.className = 'header-soc'),
              (this.socials = a.company.social);
          }
          copy(a) {
            this.clipboardService.copy(a.value),
              this.toastService.success('msg.001');
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z), e.Y36(b.Yv), e.Y36(L.k));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-socials']],
            inputs: { className: 'className' },
            ngContentSelectors: d,
            decls: 4,
            vars: 2,
            consts: [
              [3, 'className'],
              ['target', '_blank', 3, 'href', 'title', 4, 'ngFor', 'ngForOf'],
              ['target', '_blank', 3, 'href', 'title'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.F$t(c),
                e.Hsn(0),
                e.TgZ(1, 'div', 0),
                e.Hsn(2, 1),
                e.YNc(3, p, 3, 4, 'a', 1),
                e.qZA()),
                2 & a &&
                  (e.xp6(1),
                  e.Q6J('className', i.className),
                  e.xp6(2),
                  e.Q6J('ngForOf', i.socials));
            },
            dependencies: [r.sg],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var M = T(1104),
        Y = T(9515),
        C = T(6064),
        I = T(8505);
      let re = (() => {
        class t {
          constructor(a, i, o) {
            (this.app = a),
              (this.cdr = i),
              (this.elem = o),
              (this.destroy$ = new q.x());
          }
          ngOnInit() {
            this.app.burgerState$
              .pipe(
                (0, w.R)(this.destroy$),
                (0, I.b)((a) => this.app.lockBody(a))
              )
              .subscribe((a) => {
                (this.state = a), this.cdr.markForCheck();
              });
          }
          ngOnDestroy() {
            this.app.hideBurger(),
              setTimeout(() => {
                this.destroy$.next(), this.destroy$.unsubscribe();
              }, 10);
          }
          onDocumentClick(a) {
            if (!this.state) return;
            const i = this.elem.nativeElement,
              o = document.querySelector('.m-nav');
            if (i && o) {
              const s = i.contains(a.target),
                Z = o.contains(a.target);
              !s && !Z && this.app.hideBurger();
            }
          }
          toggle() {
            this.app.burgerState$.next(!this.state);
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z), e.Y36(e.sBO), e.Y36(e.SBq));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-burger']],
            hostBindings: function (a, i) {
              1 & a &&
                e.NdJ(
                  'click',
                  function (s) {
                    return i.onDocumentClick(s);
                  },
                  !1,
                  e.evT
                );
            },
            decls: 3,
            vars: 4,
            consts: [[1, 'header-burger', 3, 'click']],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0),
                e.NdJ('click', function () {
                  return i.toggle();
                }),
                e.ALo(1, 'async'),
                e._UZ(2, 'span'),
                e.qZA()),
                2 & a && e.ekj('active', e.lcZ(1, 2, i.app.burgerState$));
            },
            dependencies: [r.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var fe = T(9763),
        k = T(3416);
      function Ye(t, n) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, 'a', 2),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA(),
          e.BQk()),
          2 & t &&
            (e.xp6(2), e.hij('', e.lcZ(3, 1, 'home.header.btn.2'), ' \u2192'));
      }
      function Me(t, n) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, 'a', 3),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA(),
          e.TgZ(4, 'a', 4),
          e._uU(5),
          e.ALo(6, 'translate'),
          e.qZA(),
          e.BQk()),
          2 & t &&
            (e.xp6(2),
            e.Oqu(e.lcZ(3, 2, 'home.header.btn.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(6, 4, 'home.header.btn.1')));
      }
      let We = (() => {
        class t {
          constructor(a) {
            this.app = a;
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-header-buttons']],
            decls: 3,
            vars: 3,
            consts: [
              [1, 'header-btns', 3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              ['routerLink', '/account', 1, 'm-btn', 'm-btn_white'],
              ['routerLink', 'signin', 1, 'm-btn', 'm-btn_white'],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
              ],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0),
                e.YNc(1, Ye, 4, 3, 'ng-container', 1),
                e.YNc(2, Me, 7, 6, 'ng-container', 1),
                e.qZA()),
                2 & a &&
                  (e.Q6J('ngSwitch', i.app.isLogged),
                  e.xp6(1),
                  e.Q6J('ngSwitchCase', !0),
                  e.xp6(1),
                  e.Q6J('ngSwitchCase', !1));
            },
            dependencies: [r.RF, r.n9, x.rH, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var xt = T(2849),
        Ie = T(4953);
      const qt = function () {
          return { exact: !0 };
        },
        yt = function () {
          return ['/about', '/company-history', '/roadmap', '/legal'];
        },
        Lt = function () {
          return ['/offers', '/how', '/start', '/tariffs'];
        },
        $e = function () {
          return ['/referral-program', '/leadership-program'];
        };
      function je(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 1)(1, 'a', 2),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'div', 3),
            e.ALo(5, 'inArray'),
            e.TgZ(6, 'span', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(0));
            }),
            e._uU(7),
            e.ALo(8, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(9, 'svg', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(0));
            }),
            e._UZ(10, 'use', 5),
            e.qZA(),
            e.kcU(),
            e.TgZ(11, 'div', 6)(12, 'a', 7)(13, 'h3'),
            e._uU(14),
            e.ALo(15, 'translate'),
            e.qZA(),
            e.TgZ(16, 'p'),
            e._uU(17),
            e.ALo(18, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(19, 'svg'),
            e._UZ(20, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(21, 'a', 9)(22, 'h3'),
            e._uU(23),
            e.ALo(24, 'translate'),
            e.qZA(),
            e.TgZ(25, 'p'),
            e._uU(26),
            e.ALo(27, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(28, 'svg'),
            e._UZ(29, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(30, 'a', 10)(31, 'h3'),
            e._uU(32),
            e.ALo(33, 'translate'),
            e.qZA(),
            e.TgZ(34, 'p'),
            e._uU(35),
            e.ALo(36, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(37, 'svg'),
            e._UZ(38, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(39, 'a', 11)(40, 'h3'),
            e._uU(41),
            e.ALo(42, 'translate'),
            e.qZA(),
            e.TgZ(43, 'p'),
            e._uU(44),
            e.ALo(45, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(46, 'svg'),
            e._UZ(47, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(48, 'a', 12)(49, 'h3'),
            e._uU(50),
            e.ALo(51, 'translate'),
            e.qZA(),
            e.TgZ(52, 'p'),
            e._uU(53),
            e.ALo(54, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(55, 'svg'),
            e._UZ(56, 'use', 8),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(57, 'div', 3),
            e.ALo(58, 'inArray'),
            e.TgZ(59, 'span', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(1));
            }),
            e._uU(60),
            e.ALo(61, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(62, 'svg', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(1));
            }),
            e._UZ(63, 'use', 5),
            e.qZA(),
            e.kcU(),
            e.TgZ(64, 'div', 6)(65, 'a', 13)(66, 'h3'),
            e._uU(67),
            e.ALo(68, 'translate'),
            e.qZA(),
            e.TgZ(69, 'p'),
            e._uU(70),
            e.ALo(71, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(72, 'svg'),
            e._UZ(73, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(74, 'a', 14)(75, 'h3'),
            e._uU(76),
            e.ALo(77, 'translate'),
            e.qZA(),
            e.TgZ(78, 'p'),
            e._uU(79),
            e.ALo(80, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(81, 'svg'),
            e._UZ(82, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(83, 'a', 15)(84, 'h3'),
            e._uU(85),
            e.ALo(86, 'translate'),
            e.qZA(),
            e.TgZ(87, 'p'),
            e._uU(88),
            e.ALo(89, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(90, 'svg'),
            e._UZ(91, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(92, 'a', 16)(93, 'h3'),
            e._uU(94),
            e.ALo(95, 'translate'),
            e.qZA(),
            e.TgZ(96, 'p'),
            e._uU(97),
            e.ALo(98, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(99, 'svg'),
            e._UZ(100, 'use', 8),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(101, 'div', 3),
            e.ALo(102, 'inArray'),
            e.TgZ(103, 'span', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(2));
            }),
            e._uU(104),
            e.ALo(105, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(106, 'svg', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.toggle(2));
            }),
            e._UZ(107, 'use', 5),
            e.qZA(),
            e.kcU(),
            e.TgZ(108, 'div', 6)(109, 'a', 17)(110, 'h3'),
            e._uU(111),
            e.ALo(112, 'translate'),
            e.qZA(),
            e.TgZ(113, 'p'),
            e._uU(114),
            e.ALo(115, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(116, 'svg'),
            e._UZ(117, 'use', 8),
            e.qZA()(),
            e.kcU(),
            e.TgZ(118, 'a', 18)(119, 'h3'),
            e._uU(120),
            e.ALo(121, 'translate'),
            e.qZA(),
            e.TgZ(122, 'p'),
            e._uU(123),
            e.ALo(124, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(125, 'svg'),
            e._UZ(126, 'use', 8),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(127, 'a', 19),
            e._uU(128),
            e.ALo(129, 'translate'),
            e.qZA(),
            e.TgZ(130, 'a', 20),
            e._uU(131),
            e.ALo(132, 'translate'),
            e.qZA(),
            e.TgZ(133, 'a', 21),
            e._uU(134),
            e.ALo(135, 'translate'),
            e.qZA()();
        }
        if (2 & t) {
          const a = n.ngLet,
            i = e.oxw();
          e.xp6(1),
            e.Q6J('routerLinkActiveOptions', e.DdM(109, qt)),
            e.xp6(1),
            e.Oqu(e.lcZ(3, 42, 'home.page.link')),
            e.xp6(2),
            e.ekj('active', e.xi3(5, 44, a, e.DdM(110, yt))),
            e.xp6(3),
            e.Oqu(e.lcZ(8, 47, 'home.header.menu.0')),
            e.xp6(4),
            e.ekj('d-flex', i.mobile && i.items[0]),
            e.xp6(3),
            e.Oqu(e.lcZ(15, 49, 'about.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(18, 51, 'about.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(24, 53, 'company-history.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(27, 55, 'company-history.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(33, 57, 'legal.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(36, 59, 'legal.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(42, 61, 'roadmap.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(45, 63, 'roadmap.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(51, 65, 'contacts.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(54, 67, 'contacts.page.link.1')),
            e.xp6(4),
            e.ekj('active', e.xi3(58, 69, a, e.DdM(111, Lt))),
            e.xp6(3),
            e.Oqu(e.lcZ(61, 72, 'home.header.menu.1')),
            e.xp6(4),
            e.ekj('d-flex', i.mobile && i.items[1]),
            e.xp6(3),
            e.Oqu(e.lcZ(68, 74, 'offers.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(71, 76, 'offers.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(77, 78, 'how.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(80, 80, 'how.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(86, 82, 'start.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(89, 84, 'start.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(95, 86, 'tariffs.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(98, 88, 'tariffs.page.link.1')),
            e.xp6(4),
            e.ekj('active', e.xi3(102, 90, a, e.DdM(112, $e))),
            e.xp6(3),
            e.Oqu(e.lcZ(105, 93, 'home.header.menu.2')),
            e.xp6(4),
            e.ekj('d-flex', i.mobile && i.items[2]),
            e.xp6(3),
            e.Oqu(e.lcZ(112, 95, 'referral-program.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(115, 97, 'referral-program.page.link.1')),
            e.xp6(6),
            e.Oqu(e.lcZ(121, 99, 'leadership-program.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(124, 101, 'leadership-program.page.link.1')),
            e.xp6(5),
            e.Oqu(e.lcZ(129, 103, 'reviews.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(132, 105, 'news.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(135, 107, 'faq.page.link'));
        }
      }
      let Re = (() => {
        class t {
          constructor(a, i, o) {
            (this.app = a),
              (this.cdr = i),
              (this.event = o),
              (this.mobile = !1),
              (this.items = [!1, !1, !1]);
          }
          toggle(a) {
            if (!this.mobile) return;
            const i = this.items[a],
              o = this.items.map(() => !1);
            (o[a] = !i),
              (this.items = [...o]),
              this.cdr.markForCheck(),
              this.event.trigger('nicescroll', 'all');
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z), e.Y36(e.sBO), e.Y36(xt.P));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-header-menu']],
            inputs: { mobile: 'mobile' },
            decls: 2,
            vars: 3,
            consts: [
              ['class', 'header-menu', 4, 'ngLet'],
              [1, 'header-menu'],
              [
                'routerLink',
                '/',
                'routerLinkActive',
                'active',
                1,
                'header-menu__item',
                3,
                'routerLinkActiveOptions',
              ],
              [1, 'header-menu__item'],
              [3, 'click'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
              [1, 'header-menu__in'],
              ['routerLink', '/about', 'routerLinkActive', 'active'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
              ['routerLink', '/company-history', 'routerLinkActive', 'active'],
              ['routerLink', '/legal', 'routerLinkActive', 'active'],
              ['routerLink', '/roadmap', 'routerLinkActive', 'active'],
              ['routerLink', '/contacts', 'routerLinkActive', 'active'],
              ['routerLink', '/offers', 'routerLinkActive', 'active'],
              ['routerLink', '/how', 'routerLinkActive', 'active'],
              ['routerLink', '/start', 'routerLinkActive', 'active'],
              ['routerLink', '/tariffs', 'routerLinkActive', 'active'],
              ['routerLink', '/referral-program', 'routerLinkActive', 'active'],
              [
                'routerLink',
                '/leadership-program',
                'routerLinkActive',
                'active',
              ],
              [
                'routerLink',
                '/reviews',
                'routerLinkActive',
                'active',
                1,
                'header-menu__item',
              ],
              [
                'routerLink',
                '/news',
                'routerLinkActive',
                'active',
                1,
                'header-menu__item',
              ],
              [
                'routerLink',
                '/faq',
                'routerLinkActive',
                'active',
                1,
                'header-menu__item',
              ],
            ],
            template: function (a, i) {
              1 & a && (e.YNc(0, je, 136, 113, 'div', 0), e.ALo(1, 'async')),
                2 & a && e.Q6J('ngLet', e.lcZ(1, 1, i.app.pathname$));
            },
            dependencies: [x.rH, x.Od, M.h, r.Ov, k.X$, Ie.m],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      const Ke = ['*', [['', 'submenu', '']]],
        et = ['*', '[submenu]'];
      let Ut = (() => {
        class t {}
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-header-content']],
            ngContentSelectors: et,
            decls: 9,
            vars: 3,
            consts: [
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '0',
                1,
                'header-back',
              ],
              ['routerLink', '/'],
              ['src', 'assets/img/header-back.svg', 'alt', ''],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '200',
                1,
                'm-title',
                'm-title_white',
              ],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '400',
                1,
                'header-submenu',
              ],
            ],
            template: function (a, i) {
              1 & a &&
                (e.F$t(Ke),
                e.TgZ(0, 'div', 0)(1, 'span', 1),
                e._UZ(2, 'img', 2),
                e._uU(3),
                e.ALo(4, 'translate'),
                e.qZA()(),
                e.TgZ(5, 'div', 3),
                e.Hsn(6),
                e.qZA(),
                e.TgZ(7, 'div', 4),
                e.Hsn(8, 1),
                e.qZA()),
                2 & a &&
                  (e.xp6(3), e.hij(' ', e.lcZ(4, 1, 'home.header.back'), ' '));
            },
            dependencies: [x.rH, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var Qe = T(832);
      let tt = (() => {
        class t {
          constructor(a) {
            this.app = a;
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-mobile-menu']],
            decls: 7,
            vars: 5,
            consts: [
              [1, 'm-nav'],
              ['nicescroll', '', 1, 'nicescroll-box'],
              [1, 'wrap'],
              [3, 'mobile'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0),
                e.ALo(1, 'async'),
                e.TgZ(2, 'div', 1)(3, 'div', 2),
                e._UZ(4, 'facade-header-menu', 3)(5, 'app-socials')(
                  6,
                  'facade-header-buttons'
                ),
                e.qZA()()()),
                2 & a &&
                  (e.ekj('active', e.lcZ(1, 3, i.app.burgerState$)),
                  e.xp6(4),
                  e.Q6J('mobile', !0));
            },
            dependencies: [_, Qe.r, We, Re, r.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var we = T(5346);
      function bt(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 3)(1, 'div', 4), e._UZ(2, 'img', 5), e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(2), e.Q6J('src', 'assets/img/' + a + '.svg?v=2', e.LSH);
        }
      }
      let wt = (() => {
        class t {
          constructor() {
            (this.items = [
              'usd',
              'btc',
              'eth',
              'ltc',
              'trx',
              'usdt',
              'usdc',
              'busd',
              'bnb',
              'ada',
              'xrp',
              'bch',
              'dai',
              'sol',
              'cro',
              'ethc',
              'doge',
              'avax',
              'flow',
              'xmr',
              'link',
              'atom',
              'algo',
              'dot',
              'ftx',
              'xlm',
              'matic',
              'near',
              'tusd',
              'usdp',
            ]),
              (this.swiperParams = {
                loop: !0,
                slidesPerView: 8,
                spaceBetween: 8,
                speed: 300,
                autoplay: {
                  delay: 1e3,
                  disableOnInteraction: !1,
                  waitForTransition: !0,
                },
                breakpoints: {
                  991: { slidesPerView: 27 },
                  767: { slidesPerView: 20 },
                  479: { slidesPerView: 14 },
                },
              });
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-footer-systems']],
            decls: 3,
            vars: 2,
            consts: [
              [1, 'swiper', 3, 'swiper'],
              [1, 'swiper-wrapper'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [1, 'swiper-slide'],
              [1, 'footer-cur__item'],
              ['alt', '', 3, 'src'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e.YNc(2, bt, 3, 1, 'div', 2),
                e.qZA()()),
                2 & a &&
                  (e.Q6J('swiper', i.swiperParams),
                  e.xp6(2),
                  e.Q6J('ngForOf', i.items));
            },
            dependencies: [r.sg, we.T],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var m = T(4006);
      let at = (() => {
          class t {
            constructor(a) {
              (this.router = a),
                (this.btnClass = null),
                (this.email = new m.NI(null, [
                  m.kI.required,
                  m.kI.email,
                  m.kI.minLength(6),
                  m.kI.maxLength(64),
                ]));
            }
            submit() {
              const a = {};
              this.email.valid && (a.email = this.email.value?.trim()),
                this.router
                  .navigate(['https://ovaxglobal.com/?ref=837371457'], {
                    queryParams: a,
                  })
                  .then();
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(x.F0));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['facade-join-form']],
              inputs: { btnClass: 'btnClass' },
              decls: 6,
              vars: 8,
              consts: [
                [1, 'header-form'],
                [
                  'type',
                  'email',
                  'maxlength',
                  '64',
                  3,
                  'formControl',
                  'placeholder',
                  'keydown.enter',
                ],
                ['type', 'button', 1, 'm-btn', 3, 'ngClass', 'click'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'div', 0)(1, 'input', 1),
                  e.NdJ('keydown.enter', function () {
                    return i.submit();
                  }),
                  e.ALo(2, 'translate'),
                  e.qZA(),
                  e.TgZ(3, 'button', 2),
                  e.NdJ('click', function () {
                    return i.submit();
                  }),
                  e._uU(4),
                  e.ALo(5, 'translate'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(1),
                    e.s9C('placeholder', e.lcZ(2, 4, 'home.header.join.0')),
                    e.Q6J('formControl', i.email),
                    e.xp6(2),
                    e.Q6J('ngClass', i.btnClass),
                    e.xp6(1),
                    e.hij(' ', e.lcZ(5, 6, 'home.header.join.1'), ' '));
              },
              dependencies: [r.mk, m.Fj, m.JJ, m.nD, m.oH, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        Ot = (() => {
          class t {
            onClick() {
              $('html, body').animate(
                { scrollTop: $('.about').offset().top },
                500
              );
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵdir = e.lG2({
              type: t,
              selectors: [['', 'header-down', '']],
              hostBindings: function (a, i) {
                1 & a &&
                  e.NdJ('click', function () {
                    return i.onClick();
                  });
              },
            })),
            t
          );
        })();
      const Ct = ['ref1'],
        nt = ['ref2'];
      function He(t, n) {
        1 & t && e._UZ(0, 'facade-mobile-menu');
      }
      function De(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 89),
            e.O4$(),
            e.TgZ(1, 'svg'),
            e._UZ(2, 'use', 90),
            e.qZA(),
            e._uU(3),
            e.qZA()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.Q6J('linkTo', a.value), e.xp6(3), e.hij(' ', a.value, ' ');
        }
      }
      function it(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 91),
            e.O4$(),
            e.TgZ(1, 'svg'),
            e._UZ(2, 'use', 92),
            e.qZA(),
            e._uU(3),
            e.qZA()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.Q6J('linkTo', a.value), e.xp6(3), e.hij(' ', a.value, ' ');
        }
      }
      function ot(t, n) {
        1 & t && e._UZ(0, 'facade-header-menu');
      }
      function xe(t, n) {
        1 & t && e._UZ(0, 'app-burger');
      }
      function kt(t, n) {
        if ((1 & t && e.GkF(0, 93), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(9);
          e.Q6J('ngTemplateOutlet', a);
        }
      }
      const st = function () {
        return { $implicit: 'about.header' };
      };
      function qe(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(11);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, st));
        }
      }
      const rt = function () {
        return { $implicit: 'company-history.header' };
      };
      function R(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(11);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, rt));
        }
      }
      const lt = function () {
        return { $implicit: 'legal.header' };
      };
      function Ue(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(11);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, lt));
        }
      }
      const ct = function () {
        return { $implicit: 'roadmap.header' };
      };
      function dt(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(11);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, ct));
        }
      }
      const pt = function () {
        return { $implicit: 'offers.header' };
      };
      function l(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(13);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, pt));
        }
      }
      const g = function () {
        return { $implicit: 'how.header' };
      };
      function h(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(13);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, g));
        }
      }
      const v = function () {
        return { $implicit: 'start.header' };
      };
      function J(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(13);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, v));
        }
      }
      const B = function () {
        return { $implicit: 'tariffs.header' };
      };
      function X(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(13);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, B));
        }
      }
      const O = function () {
        return { $implicit: 'referral-program.header' };
      };
      function G(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(15);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, O));
        }
      }
      const P = function () {
        return { $implicit: 'leadership-program.header' };
      };
      function ie(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(15);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, P));
        }
      }
      const V = function () {
        return { $implicit: 'reviews.header' };
      };
      function ee(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(19);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, V));
        }
      }
      const oe = function () {
        return { $implicit: 'news.header' };
      };
      function ye(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(19);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, oe));
        }
      }
      const Ze = function (t) {
        return { $implicit: t };
      };
      function be(t, n) {
        if ((1 & t && (e.GkF(0, 94), e.ALo(1, 'async')), 2 & t)) {
          const a = e.oxw(2),
            i = e.MAs(17);
          e.Q6J('ngTemplateOutlet', i)(
            'ngTemplateOutletContext',
            e.VKq(4, Ze, e.lcZ(1, 2, a.newsPageService.title$))
          );
        }
      }
      const te = function () {
        return { $implicit: 'faq.header' };
      };
      function F(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(19);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, te));
        }
      }
      const W = function () {
        return { $implicit: 'contacts.header' };
      };
      function se(t, n) {
        if ((1 & t && e.GkF(0, 94), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(19);
          e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.DdM(2, W));
        }
      }
      function va(t, n) {
        if ((1 & t && e.GkF(0, 93), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(21);
          e.Q6J('ngTemplateOutlet', a);
        }
      }
      function ha(t, n) {
        if ((1 & t && e.GkF(0, 93), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(23);
          e.Q6J('ngTemplateOutlet', a);
        }
      }
      function Aa(t, n) {
        if ((1 & t && e.GkF(0, 93), 2 & t)) {
          e.oxw(2);
          const a = e.MAs(25);
          e.Q6J('ngTemplateOutlet', a);
        }
      }
      function Ta(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 95)(1, 'h3'),
            e._UZ(2, 'img', 96),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'a', 97),
            e._uU(6),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(3),
            e.hij(' ', e.lcZ(4, 3, 'home.header.phone'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function xa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 98)(1, 'h3'),
            e._UZ(2, 'img', 99),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'a', 100),
            e._uU(6),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(3),
            e.hij(' ', e.lcZ(4, 3, 'home.header.email'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function qa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 98)(1, 'h3'),
            e._UZ(2, 'img', 101),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'a', 100),
            e._uU(6),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(3),
            e.hij(' ', e.lcZ(4, 3, 'home.header.address'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.link),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function ya(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 13),
            e.YNc(1, He, 1, 0, 'facade-mobile-menu', 14),
            e.TgZ(2, 'header', 15)(3, 'div', 16)(4, 'div', 17)(5, 'div', 18)(
              6,
              'div',
              19
            )(7, 'div', 20)(8, 'a', 21),
            e._uU(9),
            e.ALo(10, 'translate'),
            e.O4$(),
            e.TgZ(11, 'svg'),
            e._UZ(12, 'use', 22),
            e.qZA()(),
            e.kcU(),
            e.TgZ(13, 'a', 23),
            e._uU(14),
            e.ALo(15, 'translate'),
            e.O4$(),
            e.TgZ(16, 'svg'),
            e._UZ(17, 'use', 22),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(18, 'div', 24),
            e.YNc(19, De, 4, 2, 'a', 25),
            e.TgZ(20, 'div', 26)(21, 'p'),
            e._uU(22),
            e.ALo(23, 'translate'),
            e.qZA(),
            e.YNc(24, it, 4, 2, 'a', 27),
            e.TgZ(25, 'a', 28),
            e.O4$(),
            e.TgZ(26, 'svg'),
            e._UZ(27, 'use', 29),
            e.qZA(),
            e._uU(28),
            e.ALo(29, 'translate'),
            e.qZA()(),
            e.kcU(),
            e.TgZ(30, 'app-socials', 30)(31, 'p', 31),
            e._uU(32),
            e.ALo(33, 'translate'),
            e.qZA()()()()()(),
            e.TgZ(34, 'div', 32, 33),
            e.ALo(36, 'async'),
            e.TgZ(37, 'div', 34, 35)(39, 'div', 36)(40, 'div', 18)(
              41,
              'div',
              37
            )(42, 'a', 38),
            e._UZ(43, 'img', 39),
            e.TgZ(44, 'div', 40),
            e._UZ(45, 'img', 41),
            e.qZA()()(),
            e.TgZ(46, 'div', 42)(47, 'div', 43),
            e.YNc(48, ot, 1, 0, 'facade-header-menu', 14),
            e._UZ(49, 'app-language', 44)(50, 'facade-header-buttons'),
            e.YNc(51, xe, 1, 0, 'app-burger', 14),
            e.qZA()()()()(),
            e.TgZ(52, 'div', 45),
            e.ALo(53, 'async'),
            e.YNc(54, kt, 1, 1, 'ng-container', 46),
            e.YNc(55, qe, 1, 3, 'ng-container', 47),
            e.YNc(56, R, 1, 3, 'ng-container', 47),
            e.YNc(57, Ue, 1, 3, 'ng-container', 47),
            e.YNc(58, dt, 1, 3, 'ng-container', 47),
            e.YNc(59, l, 1, 3, 'ng-container', 47),
            e.YNc(60, h, 1, 3, 'ng-container', 47),
            e.YNc(61, J, 1, 3, 'ng-container', 47),
            e.YNc(62, X, 1, 3, 'ng-container', 47),
            e.YNc(63, G, 1, 3, 'ng-container', 47),
            e.YNc(64, ie, 1, 3, 'ng-container', 47),
            e.YNc(65, ee, 1, 3, 'ng-container', 47),
            e.YNc(66, ye, 1, 3, 'ng-container', 47),
            e.YNc(67, be, 2, 6, 'ng-container', 47),
            e.YNc(68, F, 1, 3, 'ng-container', 47),
            e.YNc(69, se, 1, 3, 'ng-container', 47),
            e.qZA()()(),
            e.TgZ(70, 'main', 48),
            e._UZ(71, 'router-outlet'),
            e.qZA(),
            e.TgZ(72, 'footer', 49)(73, 'div', 50)(74, 'div', 51)(
              75,
              'div',
              45
            ),
            e.ALo(76, 'async'),
            e.YNc(77, va, 1, 1, 'ng-container', 46),
            e.YNc(78, ha, 1, 1, 'ng-container', 46),
            e.YNc(79, Aa, 1, 1, 'ng-container', 52),
            e.qZA()(),
            e.TgZ(80, 'div', 17)(81, 'div', 53)(82, 'div', 54)(83, 'a', 55),
            e._UZ(84, 'img', 39),
            e.qZA()()(),
            e.TgZ(85, 'div', 56)(86, 'div', 57)(87, 'div', 58),
            e._uU(88),
            e.ALo(89, 'translate'),
            e.qZA(),
            e.TgZ(90, 'div', 59)(91, 'a', 60),
            e._uU(92),
            e.ALo(93, 'translate'),
            e.qZA(),
            e.TgZ(94, 'a', 61),
            e._uU(95),
            e.ALo(96, 'translate'),
            e.qZA(),
            e.TgZ(97, 'a', 62),
            e._uU(98),
            e.ALo(99, 'translate'),
            e.qZA(),
            e.TgZ(100, 'a', 63),
            e._uU(101),
            e.ALo(102, 'translate'),
            e.qZA(),
            e.TgZ(103, 'a', 64),
            e._uU(104),
            e.ALo(105, 'translate'),
            e.qZA(),
            e.TgZ(106, 'a', 65),
            e._uU(107),
            e.ALo(108, 'translate'),
            e.qZA()()(),
            e.TgZ(109, 'div', 66)(110, 'div', 58),
            e._uU(111),
            e.ALo(112, 'translate'),
            e.qZA(),
            e.TgZ(113, 'div', 59)(114, 'a', 67),
            e._uU(115),
            e.ALo(116, 'translate'),
            e.qZA(),
            e.TgZ(117, 'a', 68),
            e._uU(118),
            e.ALo(119, 'translate'),
            e.qZA(),
            e.TgZ(120, 'a', 69),
            e._uU(121),
            e.ALo(122, 'translate'),
            e.qZA(),
            e.TgZ(123, 'a', 70),
            e._uU(124),
            e.ALo(125, 'translate'),
            e.qZA()()(),
            e.TgZ(126, 'div', 71)(127, 'div', 58),
            e._uU(128),
            e.ALo(129, 'translate'),
            e.qZA(),
            e.TgZ(130, 'div', 59)(131, 'a', 72),
            e._uU(132),
            e.ALo(133, 'translate'),
            e.qZA(),
            e.TgZ(134, 'a', 73),
            e._uU(135),
            e.ALo(136, 'translate'),
            e.qZA(),
            e.TgZ(137, 'a', 74),
            e._uU(138),
            e.ALo(139, 'translate'),
            e.TgZ(140, 'span'),
            e._uU(141),
            e.ALo(142, 'translate'),
            e.qZA()()()(),
            e.TgZ(143, 'div', 75)(144, 'div', 58),
            e._uU(145),
            e.ALo(146, 'translate'),
            e.qZA(),
            e.YNc(147, Ta, 7, 5, 'div', 76),
            e.YNc(148, xa, 7, 5, 'div', 77),
            e.YNc(149, qa, 7, 5, 'div', 77),
            e.qZA()(),
            e.TgZ(150, 'div', 56)(151, 'div', 78)(152, 'div', 79)(153, 'a', 80)(
              154,
              'span'
            ),
            e._uU(155),
            e.ALo(156, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(157, 'svg'),
            e._UZ(158, 'use', 22),
            e.qZA()(),
            e.kcU(),
            e.TgZ(159, 'a', 81)(160, 'span'),
            e._uU(161),
            e.ALo(162, 'translate'),
            e.qZA(),
            e.O4$(),
            e.TgZ(163, 'svg'),
            e._UZ(164, 'use', 22),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(165, 'div', 82)(166, 'app-socials')(167, 'div', 83),
            e._uU(168),
            e.ALo(169, 'translate'),
            e.qZA()()(),
            e.TgZ(170, 'div', 84)(171, 'div', 58),
            e._uU(172),
            e.ALo(173, 'translate'),
            e.qZA(),
            e._UZ(174, 'app-language', 85),
            e.qZA()(),
            e.TgZ(175, 'div', 86),
            e._UZ(176, 'facade-footer-systems'),
            e.qZA()()(),
            e.TgZ(177, 'div', 87)(178, 'div', 17)(179, 'div', 88),
            e._uU(180),
            e.ALo(181, 'translate'),
            e.qZA()()()()()),
          2 & t)
        ) {
          const a = n.ngLet,
            i = e.oxw();
          e.xp6(1),
            e.Q6J('ngIf', !a.isDesktop),
            e.xp6(8),
            e.hij(' ', e.lcZ(10, 57, 'home.header.links.0'), ' '),
            e.xp6(5),
            e.hij(' ', e.lcZ(15, 59, 'home.header.links.1'), ' '),
            e.xp6(5),
            e.Q6J('ngIf', i.app.company.phone[0]),
            e.xp6(3),
            e.Oqu(e.lcZ(23, 61, 'home.header.email')),
            e.xp6(2),
            e.Q6J('ngIf', i.app.company.email[0]),
            e.xp6(4),
            e.hij(' ', e.lcZ(29, 63, 'home.header.contacts'), ' '),
            e.xp6(4),
            e.Oqu(e.lcZ(33, 65, 'home.header.socials')),
            e.xp6(2),
            e.Q6J('ngClass', e.lcZ(36, 67, i.headerClassName$)),
            e.xp6(14),
            e.Q6J('ngIf', a.isDesktop),
            e.xp6(3),
            e.Q6J('ngIf', !a.isDesktop),
            e.xp6(1),
            e.Q6J('ngSwitch', e.lcZ(53, 69, i.app.pathname$)),
            e.xp6(2),
            e.Q6J('ngSwitchCase', '/'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/about'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/company-history'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/legal'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/roadmap'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/offers'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/how'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/start'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/tariffs'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/referral-program'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/leadership-program'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/reviews'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/news'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/news_single'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/faq'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/contacts'),
            e.xp6(6),
            e.Q6J('ngSwitch', e.lcZ(76, 71, i.app.pathname$)),
            e.xp6(2),
            e.Q6J('ngSwitchCase', '/'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', '/roadmap'),
            e.xp6(10),
            e.Oqu(e.lcZ(89, 73, 'home.footer.menu.0')),
            e.xp6(4),
            e.Oqu(e.lcZ(93, 75, 'about.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(96, 77, 'company-history.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(99, 79, 'legal.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(102, 81, 'contacts.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(105, 83, 'faq.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(108, 85, 'news.page.link')),
            e.xp6(4),
            e.Oqu(e.lcZ(112, 87, 'home.footer.menu.1')),
            e.xp6(4),
            e.Oqu(e.lcZ(116, 89, 'offers.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(119, 91, 'how.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(122, 93, 'start.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(125, 95, 'tariffs.page.link.0')),
            e.xp6(4),
            e.Oqu(e.lcZ(129, 97, 'home.footer.menu.2')),
            e.xp6(4),
            e.Oqu(e.lcZ(133, 99, 'referral-program.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(136, 101, 'leadership-program.page.link.0')),
            e.xp6(3),
            e.hij(' ', e.lcZ(139, 103, 'home.footer.menu.3'), ' '),
            e.xp6(3),
            e.Oqu(e.lcZ(142, 105, 'home.footer.soon')),
            e.xp6(4),
            e.Oqu(e.lcZ(146, 107, 'home.footer.contacts')),
            e.xp6(2),
            e.Q6J('ngIf', i.app.company.phone[0]),
            e.xp6(1),
            e.Q6J('ngIf', i.app.company.email[0]),
            e.xp6(1),
            e.Q6J('ngIf', i.app.viewParams.address[0]),
            e.xp6(6),
            e.Oqu(e.lcZ(156, 109, 'home.header.links.0')),
            e.xp6(6),
            e.Oqu(e.lcZ(162, 111, 'home.header.links.1')),
            e.xp6(7),
            e.Oqu(e.lcZ(169, 113, 'home.header.socials')),
            e.xp6(4),
            e.Oqu(e.lcZ(173, 115, 'home.footer.language')),
            e.xp6(8),
            e.hij('\xa9 ', e.lcZ(181, 117, 'home.footer.copyright'), '');
        }
      }
      function La(t, n) {
        1 & t &&
          (e.TgZ(0, 'a', 60),
          e._uU(1),
          e.ALo(2, 'translate'),
          e.qZA(),
          e.TgZ(3, 'a', 61),
          e._uU(4),
          e.ALo(5, 'translate'),
          e.qZA(),
          e.TgZ(6, 'a', 62),
          e._uU(7),
          e.ALo(8, 'translate'),
          e.qZA(),
          e.TgZ(9, 'a', 102),
          e._uU(10),
          e.ALo(11, 'translate'),
          e.qZA()),
          2 & t &&
            (e.xp6(1),
            e.Oqu(e.lcZ(2, 4, 'about.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 6, 'company-history.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(8, 8, 'legal.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(11, 10, 'roadmap.page.link.0')));
      }
      function Ua(t, n) {
        1 & t &&
          (e.TgZ(0, 'a', 67),
          e._uU(1),
          e.ALo(2, 'translate'),
          e.qZA(),
          e.TgZ(3, 'a', 68),
          e._uU(4),
          e.ALo(5, 'translate'),
          e.qZA(),
          e.TgZ(6, 'a', 69),
          e._uU(7),
          e.ALo(8, 'translate'),
          e.qZA(),
          e.TgZ(9, 'a', 70),
          e._uU(10),
          e.ALo(11, 'translate'),
          e.qZA()),
          2 & t &&
            (e.xp6(1),
            e.Oqu(e.lcZ(2, 4, 'offers.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 6, 'how.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(8, 8, 'start.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(11, 10, 'tariffs.page.link.0')));
      }
      function ba(t, n) {
        1 & t &&
          (e.TgZ(0, 'a', 72),
          e._uU(1),
          e.ALo(2, 'translate'),
          e.qZA(),
          e.TgZ(3, 'a', 73),
          e._uU(4),
          e.ALo(5, 'translate'),
          e.qZA()),
          2 & t &&
            (e.xp6(1),
            e.Oqu(e.lcZ(2, 2, 'referral-program.page.link.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(5, 4, 'leadership-program.page.link.0')));
      }
      function wa(t, n) {
        1 & t &&
          (e.TgZ(0, 'a', 114),
          e._UZ(1, 'img', 115),
          e.TgZ(2, 'div', 116),
          e.O4$(),
          e.TgZ(3, 'svg'),
          e._UZ(4, 'use', 117),
          e.qZA(),
          e.kcU(),
          e.TgZ(5, 'div', 118),
          e.O4$(),
          e.TgZ(6, 'svg'),
          e._UZ(7, 'use', 119),
          e.qZA()()()()),
          2 & t && e.Q6J('href', n.ngIf.value, e.LSH);
      }
      function Oa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 120),
            e._UZ(1, 'img', 121),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 22),
            e.qZA()()),
          2 & t)
        ) {
          const a = e.oxw(3);
          e.Q6J('href', a.youtubeChannelHref, e.LSH),
            e.xp6(2),
            e.hij(' ', e.lcZ(3, 2, 'home.header.video.3'), ' ');
        }
      }
      function Ca(t, n) {
        if (
          (1 & t &&
            (e.O4$(),
            e.kcU(),
            e.TgZ(0, 'div', 109)(1, 'div', 110),
            e.YNc(2, wa, 8, 1, 'a', 111),
            e.TgZ(3, 'div', 112)(4, 'h4'),
            e._uU(5),
            e.ALo(6, 'translate'),
            e.qZA(),
            e.TgZ(7, 'h3'),
            e._uU(8),
            e.ALo(9, 'translate'),
            e.qZA(),
            e.TgZ(10, 'p'),
            e._uU(11),
            e.ALo(12, 'translate'),
            e.qZA(),
            e.YNc(13, Oa, 6, 4, 'a', 113),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.ngIf,
            i = e.oxw(2);
          e.xp6(2),
            e.Q6J('ngIf', a[0]),
            e.xp6(3),
            e.Oqu(e.lcZ(6, 5, 'home.header.video.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(9, 7, 'home.header.video.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(12, 9, 'home.header.video.2')),
            e.xp6(2),
            e.Q6J('ngIf', i.youtubeChannelHref);
        }
      }
      function ka(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 56)(1, 'div', 103),
            e._UZ(2, 'div', 104),
            e.ALo(3, 'translate'),
            e._UZ(4, 'div', 105),
            e.ALo(5, 'translate'),
            e._UZ(6, 'facade-join-form'),
            e.TgZ(7, 'div', 106),
            e.O4$(),
            e.TgZ(8, 'svg'),
            e._UZ(9, 'use', 107),
            e.qZA()()(),
            e.YNc(10, Ca, 14, 11, 'div', 108),
            e.ALo(11, 'async'),
            e.qZA()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(3, 3, 'home.header.content.0'), e.oJD),
            e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(5, 5, 'home.header.content.1'), e.oJD),
            e.xp6(6),
            e.Q6J('ngIf', e.lcZ(11, 7, a.homePageService.videos$));
        }
      }
      function Ja(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'facade-header-content'),
            e._UZ(1, 'div', 122),
            e.ALo(2, 'translate'),
            e.GkF(3, 123),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(3);
          e.xp6(1),
            e.Q6J('innerHTML', e.lcZ(2, 2, a), e.oJD),
            e.xp6(2),
            e.Q6J('ngTemplateOutlet', i);
        }
      }
      function Fa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'facade-header-content'),
            e._UZ(1, 'div', 122),
            e.ALo(2, 'translate'),
            e.GkF(3, 123),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(5);
          e.xp6(1),
            e.Q6J('innerHTML', e.lcZ(2, 2, a), e.oJD),
            e.xp6(2),
            e.Q6J('ngTemplateOutlet', i);
        }
      }
      function Ma(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'facade-header-content'),
            e._UZ(1, 'div', 122),
            e.ALo(2, 'translate'),
            e.GkF(3, 123),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(7);
          e.xp6(1),
            e.Q6J('innerHTML', e.lcZ(2, 2, a), e.oJD),
            e.xp6(2),
            e.Q6J('ngTemplateOutlet', i);
        }
      }
      function Qa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 124)(1, 'span', 125),
            e._UZ(2, 'img', 126),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA()(),
            e.TgZ(5, 'div', 127)(6, 'div'),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.hij(' ', e.lcZ(4, 2, 'home.header.all_news'), ' '),
            e.xp6(4),
            e.Oqu(a);
        }
      }
      function Ha(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'facade-header-content'),
            e._UZ(1, 'div', 122),
            e.ALo(2, 'translate'),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(1), e.Q6J('innerHTML', e.lcZ(2, 1, a), e.oJD);
        }
      }
      function Da(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 136)(1, 'a', 114),
            e._UZ(2, 'img', 137),
            e.TgZ(3, 'div', 116),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 117),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'div', 118),
            e.O4$(),
            e.TgZ(7, 'svg'),
            e._UZ(8, 'use', 119),
            e.qZA()()()()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(1), e.Q6J('href', a.value, e.LSH);
        }
      }
      function Sa(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 129)(1, 'div', 130),
            e._UZ(2, 'div', 131),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'div', 132)(5, 'div', 133),
            e._uU(6),
            e.ALo(7, 'translate'),
            e.qZA()(),
            e.TgZ(8, 'div', 134),
            e.YNc(9, Da, 9, 1, 'div', 135),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(3, 3, 'home.footer.content1.0'), e.oJD),
            e.xp6(4),
            e.Oqu(e.lcZ(7, 5, 'home.footer.content1.1')),
            e.xp6(3),
            e.Q6J('ngIf', a[1]);
        }
      }
      function Pa(t, n) {
        if (
          (1 & t && (e.YNc(0, Sa, 10, 7, 'div', 128), e.ALo(1, 'async')), 2 & t)
        ) {
          const a = e.oxw();
          e.Q6J('ngIf', e.lcZ(1, 1, a.homePageService.videos$));
        }
      }
      function Na(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 138)(1, 'div', 139),
          e._UZ(2, 'div', 131),
          e.ALo(3, 'translate'),
          e.TgZ(4, 'div', 140)(5, 'p'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA()(),
          e.TgZ(8, 'a', 141),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()(),
          e.TgZ(11, 'div', 142)(12, 'div', 143),
          e._UZ(13, 'img', 144),
          e.qZA()()()),
          2 & t &&
            (e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(3, 3, 'home.footer.content2.0'), e.oJD),
            e.xp6(4),
            e.Oqu(e.lcZ(7, 5, 'home.footer.content2.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'home.footer.content2.2')));
      }
      function Ya(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 138)(1, 'div', 145),
          e._UZ(2, 'div', 131),
          e.ALo(3, 'translate'),
          e.TgZ(4, 'div', 140)(5, 'p'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA()(),
          e.TgZ(8, 'a', 141),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()(),
          e.TgZ(11, 'div', 146)(12, 'div', 147),
          e._UZ(13, 'img', 148),
          e.qZA()()()),
          2 & t &&
            (e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(3, 3, 'home.footer.content3.0'), e.oJD),
            e.xp6(4),
            e.Oqu(e.lcZ(7, 5, 'home.footer.content3.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'home.footer.content3.2')));
      }
      let Ia = (() => {
        class t {
          constructor(a, i, o) {
            (this.app = a),
              (this.newsPageService = i),
              (this.homePageService = o),
              (this.aosOptions = {
                disable: 'phone',
                startEvent: 'DOMContentLoaded',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate',
                useClassNames: !1,
                offset: 0,
                delay: 0,
                duration: 1200,
                easing: 'ease',
                once: !0,
                mirror: !1,
                anchorPlacement: 'top-bottom',
              }),
              (this.destroy$ = new q.x()),
              (this.headerClassName$ = new D.X(null)),
              (this.youtubeChannelHref = null);
            const s = a.company.social.find((Z) => 'youtube' === Z.type);
            s && (this.youtubeChannelHref = s.value);
          }
          ngOnInit() {
            this.app.pathname$.pipe((0, w.R)(this.destroy$)).subscribe((a) => {
              const i = this.getHeaderClassName(a.replace('/', ''));
              this.headerClassName$.next(i);
            });
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.unsubscribe();
          }
          ngAfterViewInit() {
            _e.init(this.aosOptions);
          }
          onWindowScroll(a) {
            this.ref2 && this.createStickyHeader();
          }
          createStickyHeader() {
            window.scrollY > this.ref2.nativeElement.offsetTop
              ? (this.ref1.nativeElement.classList.add('fixed'),
                this.ref2.nativeElement.classList.add('fixed'))
              : (this.ref1.nativeElement.classList.remove('fixed'),
                this.ref2.nativeElement.classList.remove('fixed'));
          }
          getHeaderClassName(a) {
            const i = {
              about: 'header-content_about',
              'company-history': 'header-content_his',
              legal: 'header-content_info',
              roadmap: 'header-content_road',
              offers: 'header-content_invest',
              how: 'header-content_earn',
              start: 'header-content_guide',
              tariffs: 'header-content_payment',
              'referral-program': 'header-content_refs',
              'leadership-program': 'header-content_career',
              reviews: 'header-content_reviews',
              news: 'header-content_news',
              news_single: 'header-content_news',
              faq: 'header-content_faq',
              contacts: 'header-content_cont',
            };
            return void 0 !== i[a] ? 'header-content_page ' + i[a] : null;
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(U.z), e.Y36(f), e.Y36(H));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            viewQuery: function (a, i) {
              if ((1 & a && (e.Gf(Ct, 5), e.Gf(nt, 5)), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.ref1 = o.first),
                  e.iGM((o = e.CRH())) && (i.ref2 = o.first);
              }
            },
            hostBindings: function (a, i) {
              1 & a &&
                e.NdJ(
                  'scroll',
                  function (s) {
                    return i.onWindowScroll(s);
                  },
                  !1,
                  e.Jf7
                );
            },
            decls: 26,
            vars: 3,
            consts: [
              ['class', 'wrapper', 4, 'ngLet'],
              ['headerSubmenu1', ''],
              ['headerSubmenu2', ''],
              ['headerSubmenu3', ''],
              ['headerContentHomeTpl', ''],
              ['headerContentAboutTpl', ''],
              ['headerContentOffersTpl', ''],
              ['headerContentReferralProgramTpl', ''],
              ['headerContentNewsTpl', ''],
              ['headerContentOtherTpl', ''],
              ['footerContent1', ''],
              ['footerContent2', ''],
              ['footerContent3', ''],
              [1, 'wrapper'],
              [4, 'ngIf'],
              [1, 'header'],
              ['data-aos', 'fade-down', 'data-aos-delay', '0', 1, 'header-top'],
              [1, 'container'],
              [1, 'row', 'd-flex', 'align-items-center'],
              [1, 'col-lg-2', 'col-sm-3'],
              [1, 'header-links'],
              [
                'target',
                '_blank',
                'href',
                '/docs/Ovax_Global_Privacy_Policy.pdf',
              ],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
              [
                'target',
                '_blank',
                'href',
                '/docs/Ovax_Global_User_Agreement.pdf',
              ],
              [
                1,
                'col-lg-10',
                'col-sm-9',
                'd-flex',
                'align-items-center',
                'justify-content-between',
              ],
              ['class', 'header-tel', 'type', 'phone', 3, 'linkTo', 4, 'ngIf'],
              [1, 'header-cont'],
              ['class', 'header-mail', 'type', 'email', 3, 'linkTo', 4, 'ngIf'],
              ['routerLink', '/contacts', 1, 'header-sup'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#sup'],
              [1, 'header-soc'],
              ['inside', ''],
              [1, 'header-content', 3, 'ngClass'],
              ['ref1', ''],
              [1, 'header-bot', 'js-paddingOffset'],
              ['ref2', ''],
              ['data-aos', 'fade-down', 'data-aos-delay', '0', 1, 'container'],
              [1, 'col-lg-2', 'col-md-4', 'col-6'],
              ['routerLink', '/', 1, 'header-logo'],
              ['src', 'assets/img/logo.svg', 'alt', ''],
              [1, 'header-logo__dark'],
              ['src', 'assets/img/logo-dark.svg', 'alt', ''],
              [1, 'col-lg-10', 'col-md-8', 'col-6'],
              [1, 'header-nav'],
              ['type', 'facade-header', 1, 'header-lang'],
              [1, 'container', 3, 'ngSwitch'],
              [3, 'ngTemplateOutlet', 4, 'ngSwitchCase'],
              [
                3,
                'ngTemplateOutlet',
                'ngTemplateOutletContext',
                4,
                'ngSwitchCase',
              ],
              [1, 'content'],
              [1, 'footer'],
              [1, 'footer-content'],
              [1, 'footer-top'],
              [3, 'ngTemplateOutlet', 4, 'ngSwitchDefault'],
              [1, 'row', 'd-flex', 'align-items-center', 'mb-3'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'col-lg-9',
                'col-sm-6',
              ],
              ['routerLink', '/', 1, 'footer-logo'],
              [1, 'row'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'footer-title'],
              [1, 'footer-menu'],
              ['routerLink', '/about', 'routerLinkActive', 'active'],
              ['routerLink', '/company-history', 'routerLinkActive', 'active'],
              ['routerLink', '/legal', 'routerLinkActive', 'active'],
              ['routerLink', '/contacts', 'routerLinkActive', 'active'],
              ['routerLink', '/faq', 'routerLinkActive', 'active'],
              ['routerLink', '/news', 'routerLinkActive', 'active'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '200',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              ['routerLink', '/offers', 'routerLinkActive', 'active'],
              ['routerLink', '/how', 'routerLinkActive', 'active'],
              ['routerLink', '/start', 'routerLinkActive', 'active'],
              ['routerLink', '/tariffs', 'routerLinkActive', 'active'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '400',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              ['routerLink', '/referral-program', 'routerLinkActive', 'active'],
              [
                'routerLink',
                '/leadership-program',
                'routerLinkActive',
                'active',
              ],
              ['href', 'javascript:void(0)', 1, 'soon'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '600',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              ['class', 'footer-cont footer-cont_tel', 4, 'ngIf'],
              ['class', 'footer-cont', 4, 'ngIf'],
              [
                'data-aos',
                'fade-zoom',
                'data-aos-delay',
                '200',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'footer-links'],
              [
                'target',
                '_blank',
                'href',
                '/docs/Ovax_Global_Privacy_Policy.pdf',
                1,
                'm-link',
                'm-link_white',
              ],
              [
                'target',
                '_blank',
                'href',
                '/docs/Ovax_Global_User_Agreement.pdf',
                1,
                'm-link',
                'm-link_white',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '400',
                1,
                'col-lg-6',
                'col-sm-6',
              ],
              ['outside', '', 1, 'footer-title'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '500', 1, 'col-lg-3'],
              ['type', 'facade-footer'],
              ['data-aos', 'fade-down', 'data-aos-delay', '0', 1, 'footer-cur'],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'footer-bot'],
              [1, 'footer-copy'],
              ['type', 'phone', 1, 'header-tel', 3, 'linkTo'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#tel'],
              ['type', 'email', 1, 'header-mail', 3, 'linkTo'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#mail'],
              [3, 'ngTemplateOutlet'],
              [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              [1, 'footer-cont', 'footer-cont_tel'],
              ['src', 'assets/img/footer-cont-1.svg', 'alt', ''],
              ['type', 'phone', 3, 'linkTo'],
              [1, 'footer-cont'],
              ['src', 'assets/img/footer-cont-2.svg', 'alt', ''],
              [3, 'linkTo'],
              ['src', 'assets/img/footer-cont-3.svg', 'alt', ''],
              ['routerLink', '/roadmap', 'routerLinkActive', 'active'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'col-lg-6',
                'col-md-7',
              ],
              [1, 'header-title', 3, 'innerHTML'],
              [1, 'header-text', 3, 'innerHTML'],
              ['header-down', '', 1, 'header-down'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-3'],
              [
                'class',
                'col-lg-5 offset-lg-1 col-md-5',
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                4,
                'ngIf',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'col-lg-5',
                'offset-lg-1',
                'col-md-5',
              ],
              [1, 'header-vid'],
              [
                'class',
                'header-vid__preview',
                'magnific-popup',
                '',
                'type',
                'iframe',
                3,
                'href',
                4,
                'ngIf',
              ],
              [1, 'header-vid__content'],
              [
                'class',
                'header-vid__more',
                'target',
                '_blank',
                3,
                'href',
                4,
                'ngIf',
              ],
              [
                'magnific-popup',
                '',
                'type',
                'iframe',
                1,
                'header-vid__preview',
                3,
                'href',
              ],
              ['src', 'assets/img/header-vid-img.png', 'alt', ''],
              [1, 'header-vid__play'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#play'],
              [1, 'header-vid__play-circle'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#play-circle'],
              ['target', '_blank', 1, 'header-vid__more', 3, 'href'],
              ['src', 'assets/img/yt-color.svg', 'alt', ''],
              [3, 'innerHTML'],
              ['submenu', '', 3, 'ngTemplateOutlet'],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '0',
                1,
                'header-back',
              ],
              ['routerLink', '/news'],
              ['src', 'assets/img/header-back.svg', 'alt', ''],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '200',
                1,
                'm-title',
                'm-title_white',
              ],
              ['class', 'row d-flex align-items-start', 4, 'ngIf'],
              [1, 'row', 'd-flex', 'align-items-start'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-4'],
              [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '400',
                1,
                'col-lg-3',
                'col-md-6',
              ],
              [1, 'footer-vid__btn'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'col-lg-5',
                'col-md-6',
              ],
              ['class', 'footer-vid', 4, 'ngIf'],
              [1, 'footer-vid'],
              ['src', 'assets/img/footer-vid-bg.png', 'alt', ''],
              [1, 'row', 'd-flex', 'align-items-end'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-5'],
              [1, 'm-text', 'm-text_white'],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
              ],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'col-lg-7'],
              [1, 'footer-img', 'footer-img_road'],
              ['src', 'assets/img/footer-tree.png', 'alt', ''],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-8'],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'col-lg-4'],
              [1, 'footer-img'],
              ['src', 'assets/img/footer-tel.png', 'alt', ''],
            ],
            template: function (a, i) {
              1 & a &&
                (e.YNc(0, ya, 182, 119, 'div', 0),
                e.ALo(1, 'async'),
                e.YNc(2, La, 12, 12, 'ng-template', null, 1, e.W1O),
                e.YNc(4, Ua, 12, 12, 'ng-template', null, 2, e.W1O),
                e.YNc(6, ba, 6, 6, 'ng-template', null, 3, e.W1O),
                e.YNc(8, ka, 12, 9, 'ng-template', null, 4, e.W1O),
                e.YNc(10, Ja, 4, 4, 'ng-template', null, 5, e.W1O),
                e.YNc(12, Fa, 4, 4, 'ng-template', null, 6, e.W1O),
                e.YNc(14, Ma, 4, 4, 'ng-template', null, 7, e.W1O),
                e.YNc(16, Qa, 8, 4, 'ng-template', null, 8, e.W1O),
                e.YNc(18, Ha, 3, 3, 'ng-template', null, 9, e.W1O),
                e.YNc(20, Pa, 2, 3, 'ng-template', null, 10, e.W1O),
                e.YNc(22, Na, 14, 9, 'ng-template', null, 11, e.W1O),
                e.YNc(24, Ya, 14, 9, 'ng-template', null, 12, e.W1O)),
                2 & a && e.Q6J('ngLet', e.lcZ(1, 1, i.app.viewport$));
            },
            dependencies: [
              r.mk,
              r.O5,
              r.tP,
              r.RF,
              r.n9,
              r.ED,
              x.lC,
              x.rH,
              x.Od,
              _,
              M.h,
              Y.C,
              C.V,
              re,
              fe.H,
              We,
              Re,
              Ut,
              tt,
              wt,
              at,
              Ot,
              r.Ov,
              k.X$,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function zt(t, n, a, i, o, s, Z) {
        try {
          var y = t[s](Z),
            S = y.value;
        } catch (me) {
          return void a(me);
        }
        y.done ? n(S) : Promise.resolve(S).then(i, o);
      }
      function pe(t) {
        return function () {
          var n = this,
            a = arguments;
          return new Promise(function (i, o) {
            var s = t.apply(n, a);
            function Z(S) {
              zt(s, i, o, Z, y, 'next', S);
            }
            function y(S) {
              zt(s, i, o, Z, y, 'throw', S);
            }
            Z(void 0);
          });
        };
      }
      const Xt = (t) => Array.isArray(t),
        Et = (t) => (Xt(t) ? t : [t]),
        Bt = (t) => Array.from(t),
        Jt = (t) => document.createTextNode(t);
      let Ft = (t) => (
        [...t.childNodes].forEach((n) => {
          if (n.nodeValue)
            return (
              [...n.nodeValue].forEach((a) => {
                n.parentNode.insertBefore(Jt(a), n);
              }),
              void n.remove()
            );
          Ft(n);
        }),
        t
      );
      const Gt = (t) => {
          let n = document.implementation.createHTMLDocument();
          return (n.body.innerHTML = t), Ft(n.body);
        },
        Vt = 'data-typeit-id',
        ke = 'ti-cursor',
        Ra = { started: !1, completed: !1, frozen: !1, destroyed: !1 },
        Se = {
          breakLines: !0,
          cursor: {
            autoPause: !0,
            autoPauseDelay: 500,
            animation: {
              frames: [0, 0, 1].map((t) => ({ opacity: t })),
              options: {
                iterations: 1 / 0,
                easing: 'steps(2, start)',
                fill: 'forwards',
              },
            },
          },
          cursorChar: '|',
          cursorSpeed: 1e3,
          deleteSpeed: null,
          html: !0,
          lifeLike: !0,
          loop: !1,
          loopDelay: 750,
          nextStringDelay: 750,
          speed: 100,
          startDelay: 250,
          startDelete: !1,
          strings: [],
          waitUntilVisible: !1,
          beforeString: () => {},
          afterString: () => {},
          beforeStep: () => {},
          afterStep: () => {},
          afterComplete: () => {},
        },
        za = `[${Vt}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;
      function Wt(t, n = !1, a = !1) {
        let s,
          i = t.querySelector(`.${ke}`),
          o = document.createTreeWalker(t, NodeFilter.SHOW_ALL, {
            acceptNode: (y) => {
              if (i && a) {
                if (y.classList?.contains(ke)) return NodeFilter.FILTER_ACCEPT;
                if (i.contains(y)) return NodeFilter.FILTER_REJECT;
              }
              return y.classList?.contains(ke)
                ? NodeFilter.FILTER_REJECT
                : NodeFilter.FILTER_ACCEPT;
            },
          }),
          Z = [];
        for (; (s = o.nextNode()); )
          s.originalParent || (s.originalParent = s.parentNode), Z.push(s);
        return n ? Z.reverse() : Z;
      }
      const ut = (t) => document.createElement(t),
        Kt = (t, n = '') => {
          let a = ut('style');
          (a.id = n), a.appendChild(Jt(t)), document.head.appendChild(a);
        },
        ea = (t) => (Xt(t) || (t = [t / 2, t / 2]), t),
        ta = (t, n) => Math.abs(Math.random() * (t + n - (t - n)) + (t - n));
      let aa = (t) => t / 2;
      const Mt = (t) => 'value' in t;
      let Pe = (t) => ('function' == typeof t ? t() : t);
      const na = (t) => Number.isInteger(t);
      let Qt = (t, n = document, a = !1) =>
        n['querySelector' + (a ? 'All' : '')](t);
      const ze = (t, n) => Object.assign({}, t, n),
        rn = (t) => /<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML);
      let ln = (t, n, a) =>
          new Promise((i) => {
            a.push(
              setTimeout(
                (function () {
                  var s = pe(function* () {
                    yield t(), i();
                  });
                  return function () {
                    return s.apply(this, arguments);
                  };
                })(),
                n || 0
              )
            );
          }),
        cn = {
          'font-family': '',
          'font-weight': '',
          'font-size': '',
          'font-style': '',
          'line-height': '',
          color: '',
          transform: 'translateX(-.125em)',
        };
      const mt = (t, n) => new Array(n).fill(t),
        ia = ({ queueItems: t, selector: n, cursorPosition: a, to: i }) => {
          if (na(n)) return -1 * n;
          let o = new RegExp('END', 'i').test(i),
            s = n
              ? [...t].reverse().findIndex(({ char: y }) => {
                  let S = y.parentElement,
                    me = S.matches(n);
                  return !(!o || !me) || (me && S.firstChild.isSameNode(y));
                })
              : -1;
          return s < 0 && (s = o ? 0 : t.length - 1), s - a + (o ? 0 : 1);
        };
      let gt = (t) =>
          new Promise((n) => {
            requestAnimationFrame(
              pe(function* () {
                n(yield t());
              })
            );
          }),
        oa = (t) =>
          t?.getAnimations().find((n) => n.id === t.dataset.tiAnimationId),
        sa = ({ cursor: t, frames: n, options: a }) => {
          let i = t.animate(n, a);
          return (
            i.pause(),
            (i.id = t.dataset.tiAnimationId),
            gt(() => {
              gt(() => {
                i.play();
              });
            }),
            i
          );
        },
        ra = (t) => t.func?.call(null),
        un = (function () {
          var t = pe(function* ({
            index: n,
            queueItems: a,
            wait: i,
            cursor: o,
            cursorOptions: s,
          }) {
            let Z = a[n][1],
              y = [],
              S = n,
              me = Z,
              le = () => me && !me.delay,
              he = Z.shouldPauseCursor() && s.autoPause;
            for (; le(); )
              y.push(me), le() && S++, (me = a[S] ? a[S][1] : null);
            if (y.length)
              return (
                yield gt(
                  pe(function* () {
                    for (let Ae of y) yield ra(Ae);
                  })
                ),
                S - 1
              );
            let E,
              K = oa(o);
            return (
              K &&
                (E = {
                  ...K.effect.getComputedTiming(),
                  delay: he ? s.autoPauseDelay : 0,
                }),
              yield i(
                pe(function* () {
                  K && he && K.cancel(),
                    yield gt(() => {
                      ra(Z);
                    });
                }),
                Z.delay
              ),
              yield (({ cursor: t, options: n, cursorOptions: a }) => {
                if (!t || !a) return;
                let o,
                  i = oa(t);
                i &&
                  ((n.delay = i.effect.getComputedTiming().delay),
                  (o = i.currentTime),
                  i.cancel());
                let s = sa({
                  cursor: t,
                  frames: a.animation.frames,
                  options: n,
                });
                return o && (s.currentTime = o), s;
              })({ cursor: o, options: E, cursorOptions: s }),
              n
            );
          });
          return function (a) {
            return t.apply(this, arguments);
          };
        })();
      const gn = function (t, n = {}) {
        var a = this;
        let i = (function () {
            var u = pe(function* (A, N, j = !1) {
              Le.frozen &&
                (yield new Promise((ce) => {
                  a.unfreeze = () => {
                    (Le.frozen = !1), ce();
                  };
                })),
                j || (yield Q.beforeStep(a)),
                yield ln(A, N, $t),
                j || (yield Q.afterStep(a));
            });
            return function (N, j) {
              return u.apply(this, arguments);
            };
          })(),
          o = (u, A) =>
            un({
              index: u,
              queueItems: A,
              wait: i,
              cursor: Je,
              cursorOptions: Q.cursor,
            }),
          s = (u) =>
            ((t, n) => {
              if (!t) return;
              let a = t.parentNode;
              (a.childNodes.length > 1 || a.isSameNode(n) ? t : a).remove();
            })(u, ne),
          Z = () => Mt(ne),
          y = (u = 0) =>
            (function Ba(t) {
              let { speed: n, deleteSpeed: a, lifeLike: i } = t;
              return (
                (a = null !== a ? a : n / 3),
                i ? [ta(n, aa(n)), ta(a, aa(a))] : [n, a]
              );
            })(Q)[u],
          S = () =>
            ((t) =>
              Mt(t)
                ? Bt(t.value)
                : Wt(t, !0).filter((n) => !(n.childNodes.length > 0)))(ne),
          le = (u, A) => (
            ve.add(u),
            ((u = {}) => {
              let A = u.delay;
              A && ve.add({ delay: A });
            })(A),
            this
          ),
          he = () => fa ?? Ne,
          K = (u = {}) => [{ func: () => At(u) }, { func: () => At(Q) }],
          E = (u) => {
            let A = Q.nextStringDelay;
            ve.add([{ delay: A[0] }, ...u, { delay: A[1] }]);
          },
          vt = (function () {
            var u = pe(function* () {
              if ((!Z() && Je && ne.appendChild(Je), Za)) {
                ((t, n) => {
                  let i = `[${Vt}='${t}'] .${ke}`,
                    o = getComputedStyle(n),
                    s = Object.entries(cn).reduce(
                      (Z, [y, S]) =>
                        `${Z} ${y}: var(--ti-cursor-${y}, ${S || o[y]});`,
                      ''
                    );
                  Kt(`${i} { display: inline-block; width: 0; ${s} }`, t);
                })(jt, ne),
                  (Je.dataset.tiAnimationId = jt);
                let { animation: A } = Q.cursor,
                  { frames: N, options: j } = A;
                sa({
                  frames: N,
                  cursor: Je,
                  options: { duration: Q.cursorSpeed, ...j },
                });
              }
            });
            return function () {
              return u.apply(this, arguments);
            };
          })(),
          Ms = (function () {
            var u = pe(function* (A) {
              let N = he();
              N && (yield _a({ value: N }));
              let j = S().map((ce) => [
                Symbol(),
                {
                  func: Tt,
                  delay: y(1),
                  deletable: !0,
                  shouldPauseCursor: () => !0,
                },
              ]);
              for (let ce = 0; ce < j.length; ce++) yield o(ce, j);
              ve.reset(), ve.set(0, { delay: A });
            });
            return function (N) {
              return u.apply(this, arguments);
            };
          })(),
          ht = (function () {
            var u = pe(function* (A = !0) {
              Le.started = !0;
              let N = (j) => {
                ve.done(j, !A);
              };
              try {
                let j = [...ve.getQueue()];
                for (let ge = 0; ge < j.length; ge++) {
                  let [Ce, Fe] = j[ge];
                  if (!Fe.done) {
                    if (!Fe.deletable || (Fe.deletable && S().length)) {
                      let Te = yield o(ge, j);
                      Array(Te - ge)
                        .fill(ge + 1)
                        .map((Ge, Rt) => Ge + Rt)
                        .forEach((Ge) => {
                          let [Rt] = j[Ge];
                          N(Rt);
                        }),
                        (ge = Te);
                    }
                    N(Ce);
                  }
                }
                if (!A) return a;
                if (((Le.completed = !0), yield Q.afterComplete(a), !Q.loop))
                  throw '';
                let ce = Q.loopDelay;
                i(
                  pe(function* () {
                    yield Ms(ce[0]), ht();
                  }),
                  ce[1]
                );
              } catch {}
              return a;
            });
            return function () {
              return u.apply(this, arguments);
            };
          })(),
          _a = (function () {
            var u = pe(function* (A) {
              (Ne = ((t, n, a) => Math.min(Math.max(n + t, 0), a.length))(
                A,
                Ne,
                S()
              )),
                ((t, n, a) => {
                  let i = n[a - 1],
                    o = Qt(`.${ke}`, t);
                  (t = i?.parentNode || t).insertBefore(o, i || null);
                })(ne, S(), Ne);
            });
            return function (N) {
              return u.apply(this, arguments);
            };
          })(),
          It = (u) =>
            ((t, n) => {
              if (Mt(t)) return void (t.value = `${t.value}${n.textContent}`);
              n.innerHTML = '';
              let a = ((t) => /body/i.test(t?.tagName))(n.originalParent)
                ? t
                : n.originalParent || t;
              a.insertBefore(n, Qt('.' + ke, a) || null);
            })(ne, u),
          At = (function () {
            var u = pe(function* (A) {
              return (Q = ze(Q, A));
            });
            return function (N) {
              return u.apply(this, arguments);
            };
          })(),
          Hs = (function () {
            var u = pe(function* () {
              Z() ? (ne.value = '') : S().forEach(s);
            });
            return function () {
              return u.apply(this, arguments);
            };
          })(),
          Tt = () => {
            let u = S();
            u.length && (Z() ? (ne.value = ne.value.slice(0, -1)) : s(u[Ne]));
          };
        (this.break = function (u) {
          return le({ func: () => It(ut('BR')), typeable: !0 }, u);
        }),
          (this.delete = function (u = null, A = {}) {
            u = Pe(u);
            let N = K(A),
              j = u,
              { instant: ce, to: ge } = A,
              Ce = ve.getTypeable(),
              Fe =
                null === j
                  ? Ce.length
                  : na(j)
                  ? j
                  : ia({
                      queueItems: Ce,
                      selector: j,
                      cursorPosition: he(),
                      to: ge,
                    });
            return le(
              [
                N[0],
                ...mt({ func: Tt, delay: ce ? 0 : y(1), deletable: !0 }, Fe),
                N[1],
              ],
              A
            );
          }),
          (this.empty = function (u = {}) {
            return le({ func: Hs }, u);
          }),
          (this.exec = function (u, A = {}) {
            let N = K(A);
            return le([N[0], { func: () => u(this) }, N[1]], A);
          }),
          (this.move = function (u, A = {}) {
            u = Pe(u);
            let N = K(A),
              { instant: j, to: ce } = A,
              ge = ia({
                queueItems: ve.getTypeable(),
                selector: null === u ? '' : u,
                to: ce,
                cursorPosition: he(),
              }),
              Ce = ge < 0 ? -1 : 1;
            return (
              (fa = he() + ge),
              le(
                [
                  N[0],
                  ...mt(
                    { func: () => _a(Ce), delay: j ? 0 : y(), cursorable: !0 },
                    Math.abs(ge)
                  ),
                  N[1],
                ],
                A
              )
            );
          }),
          (this.options = function (u, A = {}) {
            return (u = Pe(u)), At(u), le({}, A);
          }),
          (this.pause = function (u, A = {}) {
            return le({ delay: Pe(u) }, A);
          }),
          (this.type = function (u, A = {}) {
            var N = this;
            u = Pe(u);
            let { instant: j } = A,
              ce = K(A),
              Ce = (function Ea(t, n = !0) {
                return n
                  ? (function Xa(t) {
                      return Wt(Gt(t));
                    })(t)
                  : Bt(t).map(Jt);
              })(u, Q.html).map((Te) => ({
                func: () => It(Te),
                char: Te,
                delay: j || rn(Te) ? 0 : y(),
                typeable: Te.nodeType === Node.TEXT_NODE,
              })),
              Fe = [
                ce[0],
                {
                  func:
                    ((Te = pe(function* () {
                      return yield Q.beforeString(u, N);
                    })),
                    function () {
                      return Te.apply(this, arguments);
                    }),
                },
                ...Ce,
                {
                  func: (function () {
                    var Te = pe(function* () {
                      return yield Q.afterString(u, N);
                    });
                    return function () {
                      return Te.apply(this, arguments);
                    };
                  })(),
                },
                ce[1],
              ];
            var Te;
            return le(Fe, A);
          }),
          (this.is = function (u) {
            return Le[u];
          }),
          (this.destroy = function (u = !0) {
            ($t = ((t) => (t.forEach(clearTimeout), []))($t)),
              Pe(u) && Je && s(Je),
              (Le.destroyed = !0);
          }),
          (this.freeze = function () {
            Le.frozen = !0;
          }),
          (this.unfreeze = () => {}),
          (this.reset = function (u) {
            !this.is('destroyed') && this.destroy(),
              u ? (ve.wipe(), u(this)) : ve.reset(),
              (Ne = 0);
            for (let A in Le) Le[A] = !1;
            return (ne[Z() ? 'value' : 'innerHTML'] = ''), this;
          }),
          (this.go = function () {
            return Le.started
              ? this
              : (vt(),
                Q.waitUntilVisible
                  ? (((t, n) => {
                      new IntersectionObserver(
                        (i, o) => {
                          i.forEach((s) => {
                            s.isIntersecting && (n(), o.unobserve(t));
                          });
                        },
                        { threshold: 1 }
                      ).observe(t);
                    })(ne, ht.bind(this)),
                    this)
                  : (ht(), this));
          }),
          (this.flush = function (u = () => {}) {
            return vt(), ht(!1).then(u), this;
          }),
          (this.getQueue = () => ve),
          (this.getOptions = () => Q),
          (this.updateOptions = (u) => At(u)),
          (this.getElement = () => ne);
        let ne = (function sn(t) {
            return 'string' == typeof t ? Qt(t) : t;
          })(t),
          $t = [],
          Ne = 0,
          fa = null,
          Le = ze({}, Ra);
        n.cursor = ((t) => {
          if ('object' == typeof t) {
            let n = {},
              { frames: a, options: i } = Se.cursor.animation;
            return (
              (n.animation = t.animation || {}),
              (n.animation.frames = t.animation?.frames || a),
              (n.animation.options = ze(i, t.animation?.options || {})),
              (n.autoPause = t.autoPause ?? Se.cursor.autoPause),
              (n.autoPauseDelay = t.autoPauseDelay || Se.cursor.autoPauseDelay),
              n
            );
          }
          return !0 === t ? Se.cursor : t;
        })(n.cursor ?? Se.cursor);
        let Q = ze(Se, n);
        Q = ze(Q, {
          html: !Z() && Q.html,
          nextStringDelay: ea(Q.nextStringDelay),
          loopDelay: ea(Q.loopDelay),
        });
        let jt = Math.random().toString().substring(2, 9),
          ve = (function (t) {
            let n = function (E) {
                return (
                  Et(E).forEach((Ae) =>
                    K.set(Symbol(Ae.char?.innerText), o({ ...Ae }))
                  ),
                  this
                );
              },
              o = (E) => (
                (E.shouldPauseCursor = function () {
                  return Boolean(
                    this.typeable || this.cursorable || this.deletable
                  );
                }),
                E
              ),
              S = () => Array.from(K.values()),
              K = new Map();
            return (
              n(t),
              {
                add: n,
                set: function (E, Ae) {
                  let vt = [...K.keys()];
                  K.set(vt[E], o(Ae));
                },
                wipe: function () {
                  (K = new Map()), n(t);
                },
                reset: function () {
                  K.forEach((E) => delete E.done);
                },
                destroy: (E) => K.delete(E),
                done: (E, Ae = !1) => (Ae ? K.delete(E) : (K.get(E).done = !0)),
                getItems: (E = !1) => (E ? S() : S().filter((Ae) => !Ae.done)),
                getQueue: () => K,
                getTypeable: () => S().filter((E) => E.typeable),
              }
            );
          })([{ delay: Q.startDelay }]);
        (ne.dataset.typeitId = jt), Kt(za);
        let Za = !!Q.cursor && !Z(),
          Je = (() => {
            if (Z()) return;
            let u = ut('span');
            return (
              (u.className = ke),
              Za
                ? ((u.innerHTML = Gt(Q.cursorChar).innerHTML), u)
                : ((u.style.visibility = 'hidden'), u)
            );
          })();
        (Q.strings = ((u) => {
          let A = ne.innerHTML;
          return A
            ? ((ne.innerHTML = ''),
              Q.startDelete
                ? ((ne.innerHTML = A),
                  Ft(ne),
                  E(mt({ func: Tt, delay: y(1), deletable: !0 }, S().length)),
                  u)
                : A.replace(/<!--(.+?)-->/g, '')
                    .trim()
                    .split(/<br(?:\s*?)(?:\/)?>/)
                    .concat(u))
            : u;
        })(Et(Q.strings))),
          Q.strings.length &&
            (() => {
              let u = Q.strings.filter((A) => !!A);
              u.forEach((A, N) => {
                if ((this.type(A), N + 1 === u.length)) return;
                let j = Q.breakLines
                  ? [{ func: () => It(ut('BR')), typeable: !0 }]
                  : mt({ func: Tt, delay: y(1) }, ve.getTypeable().length);
                E(j);
              });
            })();
      };
      let _t = (() => {
        class t {
          constructor(a) {
            this.elem = a;
          }
          ngAfterViewInit() {
            $(this.elem.nativeElement).dynamicNumber({
              duration: 2e3,
              currency: {
                indicator: '',
                size: 3,
                decimals: '0',
                separator: ' ',
                decimalsPoint: '.',
              },
            });
          }
          start() {
            $(this.elem.nativeElement).dynamicNumber('start');
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(e.SBq));
          }),
          (t.ɵdir = e.lG2({ type: t, selectors: [['', 'dynamicNumber', '']] })),
          t
        );
      })();
      var Ht = T(1481);
      function _n(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 9)(1, 'div', 10),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use'),
            e.qZA()(),
            e._uU(4),
            e.TgZ(5, 'svg'),
            e._UZ(6, 'use', 11),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.Q6J(
            'href',
            '/docs/Ovax_Global_Company_Presentation_' + a.code + '.pdf',
            e.LSH
          ),
            e.xp6(3),
            e.uIk('href', 'assets/img/flags.svg#' + a.code, null, 'xlink'),
            e.xp6(1),
            e.hij(' ', a.name, ' ');
        }
      }
      let Dt = (() => {
          class t {
            constructor(a) {
              this.app = a;
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(U.z));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['facade-presentations']],
              decls: 11,
              vars: 7,
              consts: [
                [1, 'row', 'd-flex', 'align-items-center'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-8',
                ],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'career-pdf__title', 3, 'innerHTML'],
                [1, 'career-pdf__list'],
                [
                  'class',
                  'career-pdf__item',
                  'target',
                  '_blank',
                  3,
                  'href',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-4'],
                [1, 'career-pdf__img'],
                ['src', 'assets/img/career-pdf-img.png', 'alt', ''],
                ['target', '_blank', 1, 'career-pdf__item', 3, 'href'],
                [1, 'career-pdf__flag'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#download'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'div', 0)(1, 'div', 1),
                  e._UZ(2, 'div', 2),
                  e.ALo(3, 'translate'),
                  e._UZ(4, 'div', 3),
                  e.ALo(5, 'translate'),
                  e.TgZ(6, 'div', 4),
                  e.YNc(7, _n, 7, 3, 'a', 5),
                  e.qZA()(),
                  e.TgZ(8, 'div', 6)(9, 'div', 7),
                  e._UZ(10, 'img', 8),
                  e.qZA()()()),
                  2 & a &&
                    (e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(3, 3, 'about.pdf.0'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(5, 5, 'about.pdf.1'), e.oJD),
                    e.xp6(3),
                    e.Q6J('ngForOf', i.app.languages));
              },
              dependencies: [r.sg, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        Xe = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['facade-faq-ver1']],
              decls: 10,
              vars: 9,
              consts: [
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'faq-box',
                  'faq-box_title',
                ],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'm-text'],
                ['routerLink', '/faq', 1, 'faq-box__btn'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'div', 0),
                  e._UZ(1, 'div', 1),
                  e.ALo(2, 'translate'),
                  e.TgZ(3, 'div', 2)(4, 'p'),
                  e._uU(5),
                  e.ALo(6, 'translate'),
                  e.qZA()(),
                  e.TgZ(7, 'a', 3),
                  e._uU(8),
                  e.ALo(9, 'translate'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(1),
                    e.Q6J('innerHTML', e.lcZ(2, 3, 'about.faq.0'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(6, 5, 'about.faq.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(9, 7, 'about.faq.2')));
              },
              dependencies: [x.rH, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      var la = T(3017);
      const fn = ['typeRef'],
        Zn = ['numbersSectionRef'],
        vn = ['aboutSectionRef'];
      function hn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 72)(1, 'div', 98)(2, 'h3'),
            e._UZ(3, 'img', 99),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.TgZ(6, 'a', 100),
            e._UZ(7, 'img', 101),
            e.TgZ(8, 'div', 102)(9, 'div', 103),
            e.O4$(),
            e.TgZ(10, 'svg'),
            e._UZ(11, 'use', 104),
            e.qZA(),
            e.kcU(),
            e.TgZ(12, 'div', 105),
            e.O4$(),
            e.TgZ(13, 'svg'),
            e._UZ(14, 'use', 106),
            e.qZA()()(),
            e.kcU(),
            e.TgZ(15, 'p'),
            e._uU(16),
            e.ALo(17, 'translate'),
            e.qZA()()()()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'about.intro.3'), ' '),
            e.xp6(2),
            e.Q6J('href', a.videoHref, e.LSH),
            e.xp6(10),
            e.Oqu(e.lcZ(17, 5, 'about.intro.4'));
        }
      }
      function An(t, n) {
        if ((1 & t && (e._UZ(0, 'img', 111), e.ALo(1, 'imagekit')), 2 & t)) {
          const a = e.oxw().$implicit;
          e.Q6J('src', e.Dn7(1, 1, a.image, 78, 78), e.LSH);
        }
      }
      function Tn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 107)(1, 'div', 108)(2, 'div', 109),
            e.YNc(3, An, 2, 5, 'img', 110),
            e.qZA(),
            e.TgZ(4, 'h3')(5, 'span'),
            e._uU(6),
            e.qZA(),
            e._uU(7),
            e.ALo(8, 'date'),
            e.qZA(),
            e.TgZ(9, 'p'),
            e._uU(10),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.Q6J('ngIf', a.image),
            e.xp6(3),
            e.Oqu(a.name),
            e.xp6(1),
            e.hij(' ', e.xi3(8, 4, a.created_at, 'mediumDate'), ' '),
            e.xp6(3),
            e.Oqu(a.text);
        }
      }
      const xn = function () {
        return { act: 'add' };
      };
      function qn(t, n) {
        1 & t && (e.TgZ(0, 'a', 112), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t &&
            (e.Q6J('queryParams', e.DdM(4, xn)),
            e.xp6(1),
            e.hij(' ', e.lcZ(2, 2, 'about.reviews.2'), ' '));
      }
      function yn(t, n) {
        if (
          (1 & t && (e.TgZ(0, 'div', 113), e._UZ(1, 'img', 111), e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(1),
            e.Q6J('src', 'assets/img/about-partner-' + a + '.svg', e.LSH);
        }
      }
      let Ln = (() => {
          class t {
            constructor(a, i, o) {
              (this.app = a),
                (this.route = i),
                (this.sanitizer = o),
                (this.swiperParams = {
                  loop: !0,
                  direction: 'vertical',
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: !0,
                  allowTouchMove: !1,
                  autoplay: { delay: 3e3, disableOnInteraction: !0 },
                  navigation: {
                    nextEl: '.about-review .swiper-button-next',
                    prevEl: '.about-review .swiper-button-prev',
                  },
                  speed: 300,
                  breakpoints: { 480: { slidesPerView: 3, spaceBetween: 30 } },
                }),
                (this.dynamicInitialized = [!1, !1]),
                (this.videoHref = null),
                (this.aboutListSvg =
                  '<svg id="about-svg" viewbox="0 0 1920 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H1495.5C1549.62 1 1593.5 44.8761 1593.5 99V140.5V182C1593.5 236.124 1549.62 280 1495.5 280H490.5 M1379 280L424 280C369.876 280 326 323.876 326 378V461C326 515.124 369.876 559 424 559H1931" stroke="#E6E6E6" stroke-linecap="square"></path></svg>'),
                (this.partners = new Array(27).fill(0).map((Z, y) => ++y));
              const s = i.snapshot.data.article;
              s.videos[0] && (this.videoHref = s.videos[0].value),
                (this.reviews = i.snapshot.data.reviews),
                (this.aboutListSvg = this.sanitizer.bypassSecurityTrustHtml(
                  this.aboutListSvg
                ));
            }
            ngAfterViewInit() {
              new gn(this.typeRef.nativeElement, {
                speed: 50,
                startDelay: 0,
                loop: !1,
                loopDelay: 15e3,
              }).go();
            }
            onWindowScroll(a) {
              const i = window.scrollY + window.innerHeight;
              if (
                (!this.dynamicInitialized[0] &&
                  this.numbersSectionRef &&
                  i >= this.numbersSectionRef.nativeElement.offsetTop + 300 &&
                  ((this.dynamicInitialized[0] = !0),
                  this.dynamicNumbers.forEach((s) => s.start())),
                !this.dynamicInitialized[1] &&
                  this.aboutSectionRef &&
                  i >= this.aboutSectionRef.nativeElement.offsetTop + 200)
              ) {
                const s = document.getElementById('about-svg');
                s && s.classList.add('animate'),
                  (this.dynamicInitialized[1] = !0);
              }
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(U.z), e.Y36(x.gz), e.Y36(Ht.H7));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              viewQuery: function (a, i) {
                if (
                  (1 & a &&
                    (e.Gf(fn, 5), e.Gf(Zn, 5), e.Gf(vn, 5), e.Gf(_t, 5)),
                  2 & a)
                ) {
                  let o;
                  e.iGM((o = e.CRH())) && (i.typeRef = o.first),
                    e.iGM((o = e.CRH())) && (i.numbersSectionRef = o.first),
                    e.iGM((o = e.CRH())) && (i.aboutSectionRef = o.first),
                    e.iGM((o = e.CRH())) && (i.dynamicNumbers = o);
                }
              },
              hostBindings: function (a, i) {
                1 & a &&
                  e.NdJ(
                    'scroll',
                    function (s) {
                      return i.onWindowScroll(s);
                    },
                    !1,
                    e.Jf7
                  );
              },
              decls: 285,
              vars: 164,
              consts: [
                [1, 'about-page-top'],
                [1, 'container'],
                [1, 'row'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-6',
                ],
                [1, 'm-text'],
                [
                  'class',
                  'col-lg-6',
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  4,
                  'ngIf',
                ],
                [1, 'about-his'],
                [1, 'about-his__bg'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-his__head',
                ],
                [1, 'col-lg-5'],
                [1, 'm-title', 3, 'innerHTML'],
                ['routerLink', '/company-history', 1, 'guide-item__btn'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                [1, 'col-lg-7'],
                [3, 'innerHTML'],
                [1, 'row', 'about-hero'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-4'],
                [1, 'about-hero__img'],
                ['src', 'assets/img/about-his-hero.png', 'alt', ''],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-8'],
                [1, 'about-hero__quote'],
                ['typeRef', ''],
                [1, 'about-hero__name'],
                [1, 'about-hero__text'],
                [1, 'about-his__list', 'row', 'd-flex', 'align-items-center'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-4',
                ],
                [1, 'about-his__item'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '400', 1, 'col-lg-4'],
                [1, 'about-his__item', 'about-his__item_2'],
                [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
                [1, 'm-text', 'm-text_white'],
                ['routerLink', '/roadmap', 1, 'm-btn'],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-4'],
                [1, 'about-his__item', 'about-his__item_3'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-his__footer',
                ],
                [1, 'about-his__footer-top'],
                ['src', 'assets/img/about-footer-img.png', 'alt', ''],
                [1, 'about-his__footer-bot'],
                ['src', 'assets/img/about-book.svg', 'alt', ''],
                ['routerLink', '/legal', 1, 'guide-item__btn'],
                [1, 'about-num'],
                ['numbersSectionRef', ''],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-6',
                  'z-index',
                ],
                [1, 'about-num__item', 'about-num__item_big'],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '10000',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                [1, 'col-6'],
                [1, 'about-num__item'],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '98',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '35',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'about-stat'],
                [1, 'about-stat__logo'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#logo'],
                [1, 'about-stat__item'],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '100000000',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '80000000',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                [
                  'data-from',
                  '0',
                  'data-to',
                  '25000000',
                  'data-decimals',
                  '0',
                  'data-format',
                  'currency',
                  'dynamicNumber',
                  '',
                  1,
                  'dynamicNumber',
                ],
                [1, 'row', 'd-flex', 'align-items-center'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-7'],
                [1, 'about-review'],
                [1, 'swiper-button-prev'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
                [1, 'swiper-button-next'],
                [1, 'swiper', 3, 'swiper'],
                [1, 'swiper-wrapper'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-5'],
                [1, 'about-review__wrap'],
                [1, 'm-title'],
                [1, 'm-text', 'm-text_xl'],
                [
                  'class',
                  'm-btn',
                  'routerLink',
                  '/reviews',
                  3,
                  'queryParams',
                  4,
                  'ngIf',
                ],
                ['routerLink', '/reviews', 1, 'm-link'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'about-num__img'],
                ['src', 'assets/img/about-num-img.png', 'alt', ''],
                [1, 'about-us'],
                ['aboutSectionRef', ''],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  3,
                  'innerHTML',
                ],
                [1, 'about-us__list'],
                [1, 'about-us__line', 'svg-animate', 3, 'innerHTML'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-us__item',
                ],
                ['src', 'assets/img/about-us-1.svg', 'alt', ''],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '300',
                  1,
                  'about-us__item',
                ],
                ['src', 'assets/img/about-us-2.svg', 'alt', ''],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '600',
                  1,
                  'about-us__item',
                ],
                ['src', 'assets/img/about-us-3.svg', 'alt', ''],
                ['src', 'assets/img/about-us-4.svg', 'alt', ''],
                ['src', 'assets/img/about-us-5.svg', 'alt', ''],
                ['src', 'assets/img/about-us-6.svg', 'alt', ''],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  'm-title_center',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-partners',
                ],
                ['class', 'about-partners__item', 4, 'ngFor', 'ngForOf'],
                [1, 'about-refs'],
                [1, 'about-refs__content'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-refs__logo',
                ],
                ['src', 'assets/img/logo-text.svg', 'alt', ''],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'about-refs__text',
                  3,
                  'innerHTML',
                ],
                [1, 'about-page-bot'],
                [1, 'about-page-vid'],
                ['src', 'assets/img/about-page-video-arrow.svg', 'alt', ''],
                [
                  'magnific-popup',
                  '',
                  'type',
                  'iframe',
                  1,
                  'header-vid__preview',
                  3,
                  'href',
                ],
                ['src', 'assets/img/about-vid-img.png', 'alt', ''],
                [1, 'header-vid__play-wrap'],
                [1, 'header-vid__play'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#play'],
                [1, 'header-vid__play-circle'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#play-circle'],
                [1, 'swiper-slide'],
                [1, 'about-review__item'],
                [1, 'about-review__img'],
                ['alt', '', 3, 'src', 4, 'ngIf'],
                ['alt', '', 3, 'src'],
                ['routerLink', '/reviews', 1, 'm-btn', 3, 'queryParams'],
                [1, 'about-partners__item'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  )(
                    4,
                    'div',
                    4
                  )(5, 'p'),
                  e._uU(6),
                  e.ALo(7, 'translate'),
                  e.qZA(),
                  e.TgZ(8, 'p'),
                  e._uU(9),
                  e.ALo(10, 'translate'),
                  e.qZA(),
                  e.TgZ(11, 'p'),
                  e._uU(12),
                  e.ALo(13, 'translate'),
                  e.qZA()()(),
                  e.YNc(14, hn, 18, 7, 'div', 5),
                  e.qZA()()(),
                  e.TgZ(15, 'section', 6)(16, 'div', 7)(17, 'div', 1)(
                    18,
                    'div',
                    8
                  )(19, 'div', 2)(20, 'div', 9),
                  e._UZ(21, 'div', 10),
                  e.ALo(22, 'translate'),
                  e.TgZ(23, 'a', 11),
                  e._uU(24),
                  e.ALo(25, 'translate'),
                  e.O4$(),
                  e.TgZ(26, 'svg'),
                  e._UZ(27, 'use', 12),
                  e.qZA()()(),
                  e.kcU(),
                  e.TgZ(28, 'div', 13)(29, 'div', 4),
                  e._UZ(30, 'p', 14),
                  e.ALo(31, 'translate'),
                  e._UZ(32, 'p', 14),
                  e.ALo(33, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(34, 'div', 15)(35, 'div', 16)(36, 'div', 17),
                  e._UZ(37, 'img', 18),
                  e.qZA()(),
                  e.TgZ(38, 'div', 19)(39, 'div', 20, 21),
                  e._uU(41),
                  e.ALo(42, 'translate'),
                  e.qZA(),
                  e.TgZ(43, 'div', 22)(44, 'h3'),
                  e._uU(45),
                  e.ALo(46, 'translate'),
                  e.qZA(),
                  e.TgZ(47, 'p'),
                  e._uU(48),
                  e.ALo(49, 'translate'),
                  e.qZA()(),
                  e.TgZ(50, 'div', 23),
                  e._uU(51),
                  e.ALo(52, 'translate'),
                  e.qZA()()(),
                  e.TgZ(53, 'div', 24)(54, 'div', 25)(55, 'div', 26),
                  e._UZ(56, 'div', 10),
                  e.ALo(57, 'translate'),
                  e.TgZ(58, 'div', 4)(59, 'p'),
                  e._uU(60),
                  e.ALo(61, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(62, 'div', 27)(63, 'div', 28),
                  e._UZ(64, 'div', 29),
                  e.ALo(65, 'translate'),
                  e.TgZ(66, 'div', 30)(67, 'p'),
                  e._uU(68),
                  e.ALo(69, 'translate'),
                  e.qZA(),
                  e.TgZ(70, 'p'),
                  e._uU(71),
                  e.ALo(72, 'translate'),
                  e.qZA(),
                  e.TgZ(73, 'p'),
                  e._uU(74),
                  e.ALo(75, 'translate'),
                  e.qZA()(),
                  e.TgZ(76, 'h3'),
                  e._uU(77),
                  e.ALo(78, 'translate'),
                  e.qZA(),
                  e.TgZ(79, 'a', 31),
                  e._uU(80),
                  e.ALo(81, 'translate'),
                  e.qZA()()(),
                  e.TgZ(82, 'div', 32)(83, 'div', 33),
                  e._UZ(84, 'div', 10),
                  e.ALo(85, 'translate'),
                  e.TgZ(86, 'div', 4)(87, 'p'),
                  e._uU(88),
                  e.ALo(89, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(90, 'div', 34)(91, 'div', 35)(92, 'h3'),
                  e._uU(93),
                  e.ALo(94, 'translate'),
                  e.qZA(),
                  e.TgZ(95, 'p'),
                  e._uU(96),
                  e.ALo(97, 'translate'),
                  e.qZA(),
                  e._UZ(98, 'img', 36),
                  e.qZA(),
                  e.TgZ(99, 'div', 37)(100, 'h3'),
                  e._UZ(101, 'img', 38),
                  e._uU(102),
                  e.ALo(103, 'translate'),
                  e.qZA(),
                  e.TgZ(104, 'a', 39),
                  e._uU(105),
                  e.ALo(106, 'translate'),
                  e.O4$(),
                  e.TgZ(107, 'svg'),
                  e._UZ(108, 'use', 12),
                  e.qZA()()()()()()(),
                  e.kcU(),
                  e.TgZ(109, 'section', 40, 41)(111, 'div', 1)(112, 'div', 2)(
                    113,
                    'div',
                    42
                  ),
                  e._UZ(114, 'div', 10),
                  e.ALo(115, 'translate'),
                  e.TgZ(116, 'div', 43)(117, 'p')(118, 'span', 44),
                  e._uU(119, '0'),
                  e.qZA(),
                  e._uU(120, ' + '),
                  e.qZA(),
                  e.TgZ(121, 'h3'),
                  e._uU(122),
                  e.ALo(123, 'translate'),
                  e.qZA()(),
                  e.TgZ(124, 'div', 2)(125, 'div', 45)(126, 'div', 46)(
                    127,
                    'p'
                  )(128, 'span', 47),
                  e._uU(129, '0'),
                  e.qZA(),
                  e._uU(130, ' + '),
                  e.qZA(),
                  e.TgZ(131, 'h3'),
                  e._uU(132),
                  e.ALo(133, 'translate'),
                  e.qZA()()(),
                  e.TgZ(134, 'div', 45)(135, 'div', 46)(136, 'p')(
                    137,
                    'span',
                    48
                  ),
                  e._uU(138, '0'),
                  e.qZA(),
                  e._uU(139, ' + '),
                  e.qZA(),
                  e.TgZ(140, 'h3'),
                  e._uU(141),
                  e.ALo(142, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(143, 'div', 49)(144, 'div', 50)(145, 'div', 51),
                  e.O4$(),
                  e.TgZ(146, 'svg'),
                  e._UZ(147, 'use', 52),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(148, 'div', 53)(149, 'p'),
                  e._uU(150, ' $ '),
                  e.TgZ(151, 'span', 54),
                  e._uU(152, '0'),
                  e.qZA(),
                  e._uU(153, ' + '),
                  e.qZA(),
                  e.TgZ(154, 'h3'),
                  e._uU(155),
                  e.ALo(156, 'translate'),
                  e.qZA()(),
                  e.TgZ(157, 'div', 53)(158, 'p'),
                  e._uU(159, ' $ '),
                  e.TgZ(160, 'span', 55),
                  e._uU(161, '0'),
                  e.qZA(),
                  e._uU(162, ' + '),
                  e.qZA(),
                  e.TgZ(163, 'h3'),
                  e._uU(164),
                  e.ALo(165, 'translate'),
                  e.qZA()(),
                  e.TgZ(166, 'div', 53)(167, 'p'),
                  e._uU(168, ' $ '),
                  e.TgZ(169, 'span', 56),
                  e._uU(170, '0'),
                  e.qZA(),
                  e._uU(171, ' + '),
                  e.qZA(),
                  e.TgZ(172, 'h3'),
                  e._uU(173),
                  e.ALo(174, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(175, 'div', 57)(176, 'div', 58)(177, 'div', 59)(
                    178,
                    'div',
                    60
                  ),
                  e.O4$(),
                  e.TgZ(179, 'svg'),
                  e._UZ(180, 'use', 61),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(181, 'div', 62),
                  e.O4$(),
                  e.TgZ(182, 'svg'),
                  e._UZ(183, 'use', 61),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(184, 'div', 63)(185, 'div', 64),
                  e.YNc(186, Tn, 11, 7, 'div', 65),
                  e.qZA()()()(),
                  e.TgZ(187, 'div', 66)(188, 'div', 67)(189, 'div', 68),
                  e._uU(190),
                  e.ALo(191, 'translate'),
                  e.qZA(),
                  e.TgZ(192, 'div', 69)(193, 'p'),
                  e._uU(194),
                  e.ALo(195, 'translate'),
                  e.qZA()(),
                  e.YNc(196, qn, 3, 5, 'a', 70),
                  e.TgZ(197, 'a', 71)(198, 'span'),
                  e._uU(199),
                  e.ALo(200, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(201, 'svg'),
                  e._UZ(202, 'use', 12),
                  e.qZA()()()()(),
                  e.kcU(),
                  e.TgZ(203, 'div', 2)(204, 'div', 3)(205, 'div', 69)(206, 'p'),
                  e._uU(207),
                  e.ALo(208, 'translate'),
                  e.qZA(),
                  e.TgZ(209, 'p'),
                  e._uU(210),
                  e.ALo(211, 'translate'),
                  e.qZA()()(),
                  e.TgZ(212, 'div', 72)(213, 'div', 73),
                  e._UZ(214, 'img', 74),
                  e.qZA()()()()(),
                  e.TgZ(215, 'section', 75, 76)(217, 'div', 1),
                  e._UZ(218, 'div', 77),
                  e.ALo(219, 'translate'),
                  e.TgZ(220, 'div', 78),
                  e._UZ(221, 'div', 79),
                  e.TgZ(222, 'div', 80),
                  e._UZ(223, 'img', 81),
                  e.TgZ(224, 'h3'),
                  e._uU(225),
                  e.ALo(226, 'translate'),
                  e.qZA(),
                  e.TgZ(227, 'p'),
                  e._uU(228),
                  e.ALo(229, 'translate'),
                  e.qZA()(),
                  e.TgZ(230, 'div', 82),
                  e._UZ(231, 'img', 83),
                  e.TgZ(232, 'h3'),
                  e._uU(233),
                  e.ALo(234, 'translate'),
                  e.qZA(),
                  e.TgZ(235, 'p'),
                  e._uU(236),
                  e.ALo(237, 'translate'),
                  e.qZA()(),
                  e.TgZ(238, 'div', 84),
                  e._UZ(239, 'img', 85),
                  e.TgZ(240, 'h3'),
                  e._uU(241),
                  e.ALo(242, 'translate'),
                  e.qZA(),
                  e.TgZ(243, 'p'),
                  e._uU(244),
                  e.ALo(245, 'translate'),
                  e.qZA()(),
                  e.TgZ(246, 'div', 84),
                  e._UZ(247, 'img', 86),
                  e.TgZ(248, 'h3'),
                  e._uU(249),
                  e.ALo(250, 'translate'),
                  e.qZA(),
                  e.TgZ(251, 'p'),
                  e._uU(252),
                  e.ALo(253, 'translate'),
                  e.qZA()(),
                  e.TgZ(254, 'div', 82),
                  e._UZ(255, 'img', 87),
                  e.TgZ(256, 'h3'),
                  e._uU(257),
                  e.ALo(258, 'translate'),
                  e.qZA(),
                  e.TgZ(259, 'p'),
                  e._uU(260),
                  e.ALo(261, 'translate'),
                  e.qZA()(),
                  e.TgZ(262, 'div', 80),
                  e._UZ(263, 'img', 88),
                  e.TgZ(264, 'h3'),
                  e._uU(265),
                  e.ALo(266, 'translate'),
                  e.qZA(),
                  e.TgZ(267, 'p'),
                  e._uU(268),
                  e.ALo(269, 'translate'),
                  e.qZA()()(),
                  e._UZ(270, 'div', 89),
                  e.ALo(271, 'translate'),
                  e.TgZ(272, 'div', 90),
                  e.YNc(273, yn, 2, 1, 'div', 91),
                  e.qZA()()(),
                  e.TgZ(274, 'section', 92)(275, 'div', 93)(276, 'div', 1)(
                    277,
                    'div',
                    94
                  ),
                  e._UZ(278, 'img', 95),
                  e.qZA(),
                  e._UZ(279, 'div', 96),
                  e.ALo(280, 'translate'),
                  e.qZA()()(),
                  e.TgZ(281, 'section', 97)(282, 'div', 1),
                  e._UZ(283, 'facade-presentations')(284, 'facade-faq-ver1'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(3),
                    e.ekj('col-lg-12', !i.videoHref),
                    e.xp6(3),
                    e.Oqu(e.lcZ(7, 60, 'about.intro.0')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(10, 62, 'about.intro.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(13, 64, 'about.intro.2')),
                    e.xp6(2),
                    e.Q6J('ngIf', i.videoHref),
                    e.xp6(7),
                    e.Q6J('innerHTML', e.lcZ(22, 66, 'about.history.0'), e.oJD),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(25, 68, 'about.history.1'), ' '),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(31, 70, 'about.history.2'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(33, 72, 'about.history.3'), e.oJD),
                    e.xp6(9),
                    e.Oqu(e.lcZ(42, 74, 'about.director.0')),
                    e.xp6(4),
                    e.Oqu(e.lcZ(46, 76, 'about.director.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(49, 78, 'about.director.2')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(52, 80, 'about.director.3')),
                    e.xp6(5),
                    e.Q6J('innerHTML', e.lcZ(57, 82, 'about.blocks.0'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(61, 84, 'about.blocks.1')),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(65, 86, 'about.blocks.2'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(69, 88, 'about.blocks.3')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(72, 90, 'about.blocks.4')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(75, 92, 'about.blocks.5')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(78, 94, 'about.blocks.6')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(81, 96, 'about.blocks.7')),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(85, 98, 'about.blocks.8'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(89, 100, 'about.blocks.9')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(94, 102, 'about.legal.0')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(97, 104, 'about.legal.1')),
                    e.xp6(6),
                    e.hij(' ', e.lcZ(103, 106, 'about.legal.2'), ' '),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(106, 108, 'about.legal.3'), ' '),
                    e.xp6(9),
                    e.Q6J('innerHTML', e.lcZ(115, 110, 'about.stats.0'), e.oJD),
                    e.xp6(8),
                    e.Oqu(e.lcZ(123, 112, 'about.stats.1')),
                    e.xp6(10),
                    e.Oqu(e.lcZ(133, 114, 'about.stats.2')),
                    e.xp6(9),
                    e.Oqu(e.lcZ(142, 116, 'about.stats.3')),
                    e.xp6(14),
                    e.Oqu(e.lcZ(156, 118, 'about.stats.4')),
                    e.xp6(9),
                    e.Oqu(e.lcZ(165, 120, 'about.stats.5')),
                    e.xp6(9),
                    e.Oqu(e.lcZ(174, 122, 'about.stats.6')),
                    e.xp6(11),
                    e.Q6J('swiper', i.swiperParams),
                    e.xp6(2),
                    e.Q6J('ngForOf', i.reviews),
                    e.xp6(4),
                    e.Oqu(e.lcZ(191, 124, 'about.reviews.0')),
                    e.xp6(4),
                    e.Oqu(e.lcZ(195, 126, 'about.reviews.1')),
                    e.xp6(2),
                    e.Q6J('ngIf', i.app.isLogged),
                    e.xp6(3),
                    e.Oqu(e.lcZ(200, 128, 'about.reviews.3')),
                    e.xp6(8),
                    e.Oqu(e.lcZ(208, 130, 'about.noop.0')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(211, 132, 'about.noop.1')),
                    e.xp6(8),
                    e.Q6J('innerHTML', e.lcZ(219, 134, 'about.why.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', i.aboutListSvg, e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(226, 136, 'about.why.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(229, 138, 'about.why.2')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(234, 140, 'about.why.3')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(237, 142, 'about.why.4')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(242, 144, 'about.why.5')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(245, 146, 'about.why.6')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(250, 148, 'about.why.7')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(253, 150, 'about.why.8')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(258, 152, 'about.why.9')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(261, 154, 'about.why.10')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(266, 156, 'about.why.11')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(269, 158, 'about.why.12')),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(271, 160, 'about.partners.0'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J('ngForOf', i.partners),
                    e.xp6(6),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(280, 162, 'about.banner.0'),
                      e.oJD
                    ));
              },
              dependencies: [
                r.sg,
                r.O5,
                x.rH,
                we.T,
                fe.H,
                _t,
                Dt,
                Xe,
                r.uU,
                k.X$,
                la.P,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        Un = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 166,
              vars: 108,
              consts: [
                [1, 'his-top'],
                [1, 'his-hero__img'],
                ['src', 'assets/img/his-hero.png', 'alt', ''],
                [1, 'container'],
                [1, 'row'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'his-top__img'],
                ['src', 'assets/img/his-top-img.png', 'alt', ''],
                [1, 'his-top__map'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#map'],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'his-top__wrap'],
                [1, 'm-text', 'm-text_xl'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-5',
                ],
                [1, 'his-top__text'],
                ['routerLink', '/offers', 1, 'm-link'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-5',
                  'offset-lg-2',
                ],
                [1, 'his-hero__wrap'],
                [1, 'his-hero'],
                [3, 'innerHTML'],
                [1, 'his-hero__text'],
                ['src', 'assets/img/quote.svg', 'alt', ''],
                [1, 'his-hero__skills'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#check'],
                [1, 'his-invite'],
                [1, 'his-invite__box'],
                [1, 'row', 'd-flex', 'align-items-center'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-6',
                ],
                [1, 'his-invite__text'],
                ['src', 'assets/img/his-invite-icon.svg', 'alt', ''],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-5',
                  'offset-lg-1',
                ],
                [1, 'his-invite__title', 3, 'innerHTML'],
                [
                  'routerLink',
                  'https://ovaxglobal.com/?ref=837371457',
                  1,
                  'm-btn',
                  'm-btn_big',
                  'm-btn_white',
                ],
                [1, 'his-evo'],
                [1, 'his-text-wrap'],
                [1, 'm-title', 3, 'innerHTML'],
                ['data-text', '2020', 1, 'his-footer__img'],
                ['src', 'assets/img/his-footer-img.png', 'alt', ''],
                [1, 'his-footer'],
                [1, 'row', 'his-footer-row'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-4',
                ],
                [1, 'his-footer__pic'],
                ['src', 'assets/img/his-footer-pic.png', 'alt', ''],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-8'],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '400',
                  1,
                  'his-footer__wrap',
                ],
                [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
                ['routerLink', '/roadmap', 1, 'guide-item__btn'],
                [1, 'm-title'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1),
                  e._UZ(2, 'img', 2),
                  e.qZA(),
                  e.TgZ(3, 'div', 3)(4, 'div', 4)(5, 'div', 5)(6, 'div', 6),
                  e._UZ(7, 'img', 7),
                  e.TgZ(8, 'div', 8),
                  e.O4$(),
                  e.TgZ(9, 'svg'),
                  e._UZ(10, 'use', 9),
                  e.qZA(),
                  e.kcU(),
                  e.TgZ(11, 'p'),
                  e._uU(12),
                  e.ALo(13, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(14, 'div', 10)(15, 'div', 11)(16, 'div', 12)(17, 'h2'),
                  e._uU(18),
                  e.ALo(19, 'translate'),
                  e.qZA(),
                  e.TgZ(20, 'p'),
                  e._uU(21),
                  e.ALo(22, 'translate'),
                  e.qZA(),
                  e.TgZ(23, 'p'),
                  e._uU(24),
                  e.ALo(25, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(26, 'div', 4)(27, 'div', 13)(28, 'div', 12)(29, 'h2'),
                  e._uU(30),
                  e.ALo(31, 'translate'),
                  e.qZA(),
                  e.TgZ(32, 'p'),
                  e._uU(33),
                  e.ALo(34, 'translate'),
                  e.qZA()(),
                  e.TgZ(35, 'div', 14)(36, 'div', 12)(37, 'p'),
                  e._uU(38),
                  e.ALo(39, 'translate'),
                  e.qZA()()(),
                  e.TgZ(40, 'a', 15)(41, 'span'),
                  e._uU(42),
                  e.ALo(43, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(44, 'svg'),
                  e._UZ(45, 'use', 16),
                  e.qZA()()(),
                  e.kcU(),
                  e.TgZ(46, 'div', 17)(47, 'div', 18)(48, 'div', 19),
                  e.O4$(),
                  e.TgZ(49, 'svg'),
                  e._UZ(50, 'use', 16),
                  e.qZA(),
                  e.kcU(),
                  e.TgZ(51, 'h3'),
                  e._uU(52),
                  e.ALo(53, 'translate'),
                  e.qZA(),
                  e._UZ(54, 'p', 20),
                  e.ALo(55, 'translate'),
                  e.qZA(),
                  e.TgZ(56, 'div', 21),
                  e._uU(57),
                  e.ALo(58, 'translate'),
                  e._UZ(59, 'img', 22),
                  e.qZA(),
                  e.TgZ(60, 'div', 23)(61, 'p'),
                  e._uU(62),
                  e.ALo(63, 'translate'),
                  e.O4$(),
                  e.TgZ(64, 'svg'),
                  e._UZ(65, 'use', 24),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(66, 'p'),
                  e._uU(67),
                  e.ALo(68, 'translate'),
                  e.O4$(),
                  e.TgZ(69, 'svg'),
                  e._UZ(70, 'use', 24),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(71, 'p'),
                  e._uU(72),
                  e.ALo(73, 'translate'),
                  e.O4$(),
                  e.TgZ(74, 'svg'),
                  e._UZ(75, 'use', 24),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(76, 'p'),
                  e._uU(77),
                  e.ALo(78, 'translate'),
                  e.O4$(),
                  e.TgZ(79, 'svg'),
                  e._UZ(80, 'use', 24),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(81, 'p'),
                  e._uU(82),
                  e.ALo(83, 'translate'),
                  e.O4$(),
                  e.TgZ(84, 'svg'),
                  e._UZ(85, 'use', 24),
                  e.qZA()()()()()()()(),
                  e.kcU(),
                  e.TgZ(86, 'section', 25)(87, 'div', 26)(88, 'div', 3)(
                    89,
                    'div',
                    27
                  )(90, 'div', 28)(91, 'div', 29),
                  e._uU(92),
                  e.ALo(93, 'translate'),
                  e.TgZ(94, 'span'),
                  e._uU(95, ' 30 000 '),
                  e._UZ(96, 'img', 30),
                  e.qZA(),
                  e._uU(97),
                  e.ALo(98, 'translate'),
                  e.qZA()(),
                  e.TgZ(99, 'div', 31),
                  e._UZ(100, 'div', 32),
                  e.ALo(101, 'translate'),
                  e.TgZ(102, 'a', 33),
                  e._uU(103),
                  e.ALo(104, 'translate'),
                  e.qZA()()()()()(),
                  e.TgZ(105, 'section', 34)(106, 'div', 3)(107, 'div', 4)(
                    108,
                    'div',
                    28
                  )(109, 'div', 35),
                  e._UZ(110, 'div', 36),
                  e.ALo(111, 'translate'),
                  e.TgZ(112, 'div', 12),
                  e._UZ(113, 'p', 20),
                  e.ALo(114, 'translate'),
                  e._UZ(115, 'p', 20),
                  e.ALo(116, 'translate'),
                  e.qZA()()(),
                  e.TgZ(117, 'div', 5)(118, 'div', 37),
                  e._UZ(119, 'img', 38),
                  e.qZA()()(),
                  e.TgZ(120, 'div', 4)(121, 'div', 28)(122, 'div', 35)(
                    123,
                    'div',
                    12
                  ),
                  e._UZ(124, 'p', 20),
                  e.ALo(125, 'translate'),
                  e._UZ(126, 'p', 20),
                  e.ALo(127, 'translate'),
                  e._UZ(128, 'p', 20),
                  e.ALo(129, 'translate'),
                  e.qZA()()(),
                  e.TgZ(130, 'div', 10)(131, 'div', 12),
                  e._UZ(132, 'p', 20),
                  e.ALo(133, 'translate'),
                  e._UZ(134, 'p', 20),
                  e.ALo(135, 'translate'),
                  e._UZ(136, 'p', 20),
                  e.ALo(137, 'translate'),
                  e._UZ(138, 'p', 20),
                  e.ALo(139, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(140, 'section', 39)(141, 'div', 3)(142, 'div', 40)(
                    143,
                    'div',
                    41
                  )(144, 'div', 42),
                  e._UZ(145, 'img', 43),
                  e.qZA()(),
                  e.TgZ(146, 'div', 44)(147, 'div', 45),
                  e._UZ(148, 'div', 46),
                  e.ALo(149, 'translate'),
                  e.TgZ(150, 'a', 47),
                  e._uU(151),
                  e.ALo(152, 'translate'),
                  e.O4$(),
                  e.TgZ(153, 'svg'),
                  e._UZ(154, 'use', 16),
                  e.qZA()()(),
                  e.kcU(),
                  e.TgZ(155, 'div', 48),
                  e._uU(156),
                  e.ALo(157, 'translate'),
                  e.qZA(),
                  e.TgZ(158, 'div', 12),
                  e._UZ(159, 'p', 20),
                  e.ALo(160, 'translate'),
                  e._UZ(161, 'p', 20),
                  e.ALo(162, 'translate'),
                  e._UZ(163, 'p', 20),
                  e.ALo(164, 'translate'),
                  e.qZA()()(),
                  e._UZ(165, 'facade-faq-ver1'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(12),
                    e.Oqu(e.lcZ(13, 36, 'company-history.intro.0')),
                    e.xp6(6),
                    e.Oqu(e.lcZ(19, 38, 'company-history.intro.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(22, 40, 'company-history.intro.2')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(25, 42, 'company-history.intro.3')),
                    e.xp6(6),
                    e.Oqu(e.lcZ(31, 44, 'company-history.intro.4')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(34, 46, 'company-history.intro.5')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(39, 48, 'company-history.intro.6')),
                    e.xp6(4),
                    e.Oqu(e.lcZ(43, 50, 'company-history.intro.7')),
                    e.xp6(10),
                    e.Oqu(e.lcZ(53, 52, 'company-history.intro.8')),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(55, 54, 'company-history.intro.9'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(58, 56, 'company-history.intro.10'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(63, 58, 'company-history.intro.11'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(68, 60, 'company-history.intro.12'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(73, 62, 'company-history.intro.13'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(78, 64, 'company-history.intro.14'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(83, 66, 'company-history.intro.15'), ' '),
                    e.xp6(10),
                    e.hij(' ', e.lcZ(93, 68, 'company-history.banner.0'), ' '),
                    e.xp6(5),
                    e.hij(' ', e.lcZ(98, 70, 'company-history.banner.1'), ' '),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(101, 72, 'company-history.banner.2'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(104, 74, 'company-history.banner.3'), ' '),
                    e.xp6(7),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(111, 76, 'company-history.dev.0'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(114, 78, 'company-history.dev.1'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(116, 80, 'company-history.dev.2'),
                      e.oJD
                    ),
                    e.xp6(9),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(125, 82, 'company-history.dev.3'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(127, 84, 'company-history.dev.4'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(129, 86, 'company-history.dev.5'),
                      e.oJD
                    ),
                    e.xp6(4),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(133, 88, 'company-history.dev.6'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(135, 90, 'company-history.dev.7'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(137, 92, 'company-history.dev.8'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(139, 94, 'company-history.dev.9'),
                      e.oJD
                    ),
                    e.xp6(10),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(149, 96, 'company-history.now.0'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(152, 98, 'company-history.now.1'), ' '),
                    e.xp6(5),
                    e.Oqu(e.lcZ(157, 100, 'company-history.now.2')),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(160, 102, 'company-history.now.3'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(162, 104, 'company-history.now.4'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(164, 106, 'company-history.now.5'),
                      e.oJD
                    ));
              },
              dependencies: [x.rH, Xe, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      const bn = ['roadmapRef'];
      function wn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 60)(1, 'div', 61),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'h3'),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.TgZ(6, 'h2'),
            e._uU(7),
            e.ALo(8, 'translate'),
            e.qZA(),
            e.TgZ(9, 'p'),
            e._uU(10),
            e.ALo(11, 'translate'),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = e.oxw().$implicit;
          e.ekj('active', i < 2023 || (2023 === i && a < 3)),
            e.uIk('data-aos-delay', 200 * (a - 1)),
            e.xp6(2),
            e.hij('Q', a, ''),
            e.xp6(2),
            e.Oqu(e.lcZ(5, 7, 'roadmap.items.' + i + '.q' + a + '.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(8, 9, 'roadmap.items.' + i + '.q' + a + '.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(11, 11, 'roadmap.items.' + i + '.q' + a + '.2'));
        }
      }
      const On = function () {
        return [1, 2, 3, 4];
      };
      function Cn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 48)(1, 'div', 49)(2, 'div', 50),
            e.O4$(),
            e.TgZ(3, 'svg', 51),
            e._UZ(4, 'path', 52),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, 'div', 20),
            e.O4$(),
            e.TgZ(6, 'svg', 53),
            e._UZ(7, 'path', 54),
            e.qZA()(),
            e.kcU(),
            e.TgZ(8, 'div', 23),
            e.O4$(),
            e.TgZ(9, 'svg', 55),
            e._UZ(10, 'path', 56),
            e.qZA()()(),
            e.kcU(),
            e.TgZ(11, 'div', 57),
            e._UZ(12, 'img', 58),
            e.TgZ(13, 'span'),
            e._uU(14),
            e.qZA()(),
            e.YNc(15, wn, 12, 13, 'div', 59),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.ekj('active', a < 2023),
            e.xp6(14),
            e.Oqu(a),
            e.xp6(1),
            e.Q6J('ngForOf', e.DdM(4, On));
        }
      }
      let kn = (() => {
        class t {
          constructor() {
            (this.dynamicInitialized = [!1]),
              (this.years = [2020, 2021, 2022, 2023, 2024, 2025]);
          }
          onWindowScroll(a) {
            !this.dynamicInitialized[0] &&
              this.roadmapRef &&
              window.scrollY + window.innerHeight >=
                this.roadmapRef.nativeElement.offsetTop - 300 &&
              ((this.dynamicInitialized[0] = !0),
              this.roadmapRef.nativeElement.classList.add('animate'));
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            viewQuery: function (a, i) {
              if ((1 & a && e.Gf(bn, 5), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.roadmapRef = o.first);
              }
            },
            hostBindings: function (a, i) {
              1 & a &&
                e.NdJ(
                  'scroll',
                  function (s) {
                    return i.onWindowScroll(s);
                  },
                  !1,
                  e.Jf7
                );
            },
            decls: 109,
            vars: 67,
            consts: [
              [1, 'road-page'],
              [1, 'road-page__top'],
              [1, 'container'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [1, 'row'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-4'],
              [1, 'road-text-1'],
              [1, 'm-text', 'm-text_xl'],
              [3, 'innerHTML'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-4'],
              [1, 'road-img'],
              ['src', 'assets/img/road-img.png', 'alt', ''],
              ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-4'],
              [1, 'road-text-2'],
              [1, 'road-page__center'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_center',
              ],
              [1, 'road-map'],
              ['roadmapRef', ''],
              [1, 'road-map__head'],
              [1, 'road-map__line', 'road-map__line_head'],
              [1, 'road-map__line-back'],
              [
                'viewbox',
                '0 0 559 213',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M553 65V2H557V65C557 90.4051 536.405 111 511 111L54 111C27.4902 111 6 132.49 6 159C6 185.51 27.4902 207 54 207H456V211H54C25.2812 211 2 187.718 2 159C2 130.282 25.2812 107 54 107L511 107C534.196 107 553 88.196 553 65Z',
                'stroke',
                '#F9FAFE',
                'stroke-width',
                '4',
              ],
              [1, 'road-map__line-front'],
              [
                'xmlns',
                'http://www.w3.org/2000/svg',
                'viewbox',
                '0 0 555 211',
                'fill',
                'none',
              ],
              [
                'pathLength',
                '100',
                'd',
                'M553 0V58C553 86.1665 530.167 109 502 109H52C24.3858 109 2 131.386 2 159V159C2 186.614 24.3858 209 52 209H456',
                'stroke',
                '#F12A23',
                'stroke-width',
                '4',
              ],
              [1, 'road-map__wrap'],
              ['class', 'road-map__list', 3, 'active', 4, 'ngFor', 'ngForOf'],
              [1, 'road-info'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'road-info__text',
              ],
              ['src', 'assets/img/road-info-icon.png', 'alt', ''],
              [1, 'road-page__bot'],
              [1, 'col-lg-10', 'offset-lg-1'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_xl',
                'm-text_center',
              ],
              [1, 'road-hero'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'road-hero__item',
              ],
              [1, 'road-hero__head'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'road-hero__img'],
              ['src', 'assets/img/road-hero-1.png', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '200',
                1,
                'road-hero__item',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '400',
                1,
                'road-hero__item',
              ],
              ['src', 'assets/img/road-hero-3.png', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '600',
                1,
                'road-hero__item',
              ],
              ['src', 'assets/img/road-hero-4.png', 'alt', ''],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '800',
                1,
                'road-hero__item',
              ],
              ['src', 'assets/img/road-hero-smile.png', 'alt', ''],
              ['src', 'assets/img/road-hero-5.png', 'alt', ''],
              [1, 'road-map__list'],
              [1, 'road-map__line'],
              [1, 'road-map__line-decor'],
              [
                'viewbox',
                '0 0 32 307',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M31.4744 240.927C31.4744 267.148 19.279 290.52 0.25 305.681V305.041C18.9848 289.966 30.9744 266.846 30.9744 240.927V66.073C30.9744 40.1534 18.9848 17.034 0.25 1.95862V1.31806C19.279 16.4796 31.4744 39.8521 31.4744 66.073V240.927Z',
                'stroke',
                '#F12A23',
                'stroke-width',
                '0.5',
              ],
              [
                'viewbox',
                '0 0 1006 377',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'd',
                'M921 6H2V2H921C966.839 2 1004 39.1604 1004 85V292C1004 337.839 966.839 375 921 375H173V371H921C964.631 371 1000 335.631 1000 292V85C1000 41.3695 964.631 6 921 6Z',
                'stroke',
                '#F9FAFE',
                'stroke-width',
                '4',
              ],
              [
                'viewbox',
                '0 0 1004 373',
                'fill',
                'none',
                'xmlns',
                'http://www.w3.org/2000/svg',
              ],
              [
                'pathLength',
                '100',
                'd',
                'M0 2H920.999C965.734 2 1002 38.2572 1002 82.9928C1002 117.123 1002 156.122 1002 187.5C1002 218.275 1002 256.46 1002 290.015C1002 334.75 965.736 371 921.002 371H171',
                'stroke',
                '#F12A23',
                'stroke-width',
                '4',
              ],
              [1, 'road-map__date'],
              ['src', 'assets/img/road-date-icon.svg', 'alt', ''],
              [
                'class',
                'road-map__item',
                'data-aos',
                'zoom-in',
                3,
                'active',
                4,
                'ngFor',
                'ngForOf',
              ],
              ['data-aos', 'zoom-in', 1, 'road-map__item'],
              [1, 'road-map__icon'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2),
                e._UZ(3, 'div', 3),
                e.ALo(4, 'translate'),
                e.TgZ(5, 'div', 4)(6, 'div', 5)(7, 'div', 6)(8, 'div', 7)(
                  9,
                  'h3'
                ),
                e._uU(10),
                e.ALo(11, 'translate'),
                e.qZA(),
                e._UZ(12, 'p', 8),
                e.ALo(13, 'translate'),
                e._UZ(14, 'p', 8),
                e.ALo(15, 'translate'),
                e.qZA()()(),
                e.TgZ(16, 'div', 9)(17, 'div', 10),
                e._UZ(18, 'img', 11),
                e.qZA()(),
                e.TgZ(19, 'div', 12)(20, 'div', 13)(21, 'div', 7)(22, 'h3'),
                e._uU(23),
                e.ALo(24, 'translate'),
                e.qZA(),
                e._UZ(25, 'p', 8),
                e.ALo(26, 'translate'),
                e.qZA()()()()()(),
                e.TgZ(27, 'div', 14)(28, 'div', 2),
                e._UZ(29, 'div', 3),
                e.ALo(30, 'translate'),
                e.TgZ(31, 'div', 15),
                e._UZ(32, 'p', 8),
                e.ALo(33, 'translate'),
                e.qZA(),
                e.TgZ(34, 'div', 16, 17)(36, 'div', 18)(37, 'div', 19)(
                  38,
                  'div',
                  20
                ),
                e.O4$(),
                e.TgZ(39, 'svg', 21),
                e._UZ(40, 'path', 22),
                e.qZA()(),
                e.kcU(),
                e.TgZ(41, 'div', 23),
                e.O4$(),
                e.TgZ(42, 'svg', 24),
                e._UZ(43, 'path', 25),
                e.qZA()()(),
                e.kcU(),
                e.TgZ(44, 'span'),
                e._uU(45),
                e.ALo(46, 'translate'),
                e.qZA()(),
                e.TgZ(47, 'div', 26),
                e.YNc(48, Cn, 16, 5, 'div', 27),
                e.qZA()()(),
                e.TgZ(49, 'div', 28)(50, 'div', 2)(51, 'div', 29),
                e._UZ(52, 'img', 30)(53, 'p', 8),
                e.ALo(54, 'translate'),
                e.qZA()()()(),
                e.TgZ(55, 'div', 31)(56, 'div', 2)(57, 'div', 4)(58, 'div', 32),
                e._UZ(59, 'div', 3),
                e.ALo(60, 'translate'),
                e.TgZ(61, 'div', 33),
                e._UZ(62, 'p', 8),
                e.ALo(63, 'translate'),
                e.qZA(),
                e.TgZ(64, 'div', 34)(65, 'div', 35)(66, 'div', 36),
                e._UZ(67, 'div', 37),
                e.ALo(68, 'translate'),
                e.TgZ(69, 'p'),
                e._uU(70),
                e.ALo(71, 'translate'),
                e.qZA()(),
                e.TgZ(72, 'div', 38),
                e._UZ(73, 'img', 39),
                e.qZA()(),
                e.TgZ(74, 'div', 40)(75, 'div', 36),
                e._UZ(76, 'div', 37),
                e.ALo(77, 'translate'),
                e.TgZ(78, 'p'),
                e._uU(79),
                e.ALo(80, 'translate'),
                e.qZA()()(),
                e.TgZ(81, 'div', 41)(82, 'div', 36),
                e._UZ(83, 'div', 37),
                e.ALo(84, 'translate'),
                e.TgZ(85, 'p'),
                e._uU(86),
                e.ALo(87, 'translate'),
                e.qZA()(),
                e.TgZ(88, 'div', 38),
                e._UZ(89, 'img', 42),
                e.qZA()(),
                e.TgZ(90, 'div', 43)(91, 'div', 36),
                e._UZ(92, 'div', 37),
                e.ALo(93, 'translate'),
                e.TgZ(94, 'p'),
                e._uU(95),
                e.ALo(96, 'translate'),
                e.qZA()(),
                e.TgZ(97, 'div', 38),
                e._UZ(98, 'img', 44),
                e.qZA()(),
                e.TgZ(99, 'div', 45)(100, 'div', 36),
                e._UZ(101, 'div', 37),
                e.ALo(102, 'translate'),
                e._UZ(103, 'img', 46),
                e.TgZ(104, 'p'),
                e._uU(105),
                e.ALo(106, 'translate'),
                e.qZA()(),
                e.TgZ(107, 'div', 38),
                e._UZ(108, 'img', 47),
                e.qZA()()()()()()()()),
                2 & a &&
                  (e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(4, 23, 'roadmap.intro.0'), e.oJD),
                  e.xp6(7),
                  e.Oqu(e.lcZ(11, 25, 'roadmap.intro.1')),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(13, 27, 'roadmap.intro.2'), e.oJD),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(15, 29, 'roadmap.intro.3'), e.oJD),
                  e.xp6(9),
                  e.Oqu(e.lcZ(24, 31, 'roadmap.intro.4')),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(26, 33, 'roadmap.intro.5'), e.oJD),
                  e.xp6(4),
                  e.Q6J('innerHTML', e.lcZ(30, 35, 'roadmap.map.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(33, 37, 'roadmap.map.1'), e.oJD),
                  e.xp6(13),
                  e.Oqu(e.lcZ(46, 39, 'roadmap.map.2')),
                  e.xp6(3),
                  e.Q6J('ngForOf', i.years),
                  e.xp6(5),
                  e.Q6J('innerHTML', e.lcZ(54, 41, 'roadmap.map.3'), e.oJD),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(60, 43, 'roadmap.story.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(63, 45, 'roadmap.story.1'), e.oJD),
                  e.xp6(5),
                  e.Q6J('innerHTML', e.lcZ(68, 47, 'roadmap.story.2'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(71, 49, 'roadmap.story.3')),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(77, 51, 'roadmap.story.4'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(80, 53, 'roadmap.story.5')),
                  e.xp6(4),
                  e.Q6J('innerHTML', e.lcZ(84, 55, 'roadmap.story.6'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(87, 57, 'roadmap.story.7')),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(93, 59, 'roadmap.story.8'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(96, 61, 'roadmap.story.9')),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(102, 63, 'roadmap.story.10'), e.oJD),
                  e.xp6(4),
                  e.Oqu(e.lcZ(106, 65, 'roadmap.story.11')));
            },
            dependencies: [r.sg, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var Ee = T(2340),
        ae = T(8054),
        Oe = T(7842),
        ue = T(6541),
        St = T(9611);
      const Jn = ['captchaRef'];
      function Fn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 42)(1, 'div', 43),
            e._UZ(2, 'img', 44),
            e.qZA(),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngLet,
            i = e.oxw().$implicit;
          e.Q6J('ngClass', a)('href', i.value, e.LSH),
            e.xp6(2),
            e.Q6J('src', 'assets/img/cont-' + a + '.svg', e.LSH),
            e.xp6(2),
            e.Oqu(i.baggage.name);
        }
      }
      function Mn(t, n) {
        if (
          (1 & t && (e.TgZ(0, 'div', 40), e.YNc(1, Fn, 5, 4, 'a', 41), e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.uIk('data-aos-delay', 200 * n.index),
            e.xp6(1),
            e.Q6J('ngLet', a.baggage.code);
        }
      }
      function Qn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 47)(1, 'h3'),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 48),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'a', 49),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'contacts.list.1'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function Hn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 47)(1, 'h3'),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 48),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'a', 49),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'contacts.list.2'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function Dn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 47)(1, 'h3'),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 48),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'a', 49),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'contacts.list.3'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function Sn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 45),
            e.YNc(1, Qn, 8, 5, 'div', 46),
            e.YNc(2, Hn, 8, 5, 'div', 46),
            e.YNc(3, Dn, 8, 5, 'div', 46),
            e.qZA()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('ngIf', a.app.company.email[0]),
            e.xp6(1),
            e.Q6J('ngIf', a.app.company.email[1]),
            e.xp6(1),
            e.Q6J('ngIf', a.app.company.email[2]);
        }
      }
      function Pn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 51)(1, 'h3'),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 52),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'a', 53),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'contacts.list.4'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function Nn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 51)(1, 'h3'),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 52),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, 'a', 53),
            e._uU(7),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 3, 'contacts.list.5'), ' '),
            e.xp6(2),
            e.Q6J('linkTo', a.value),
            e.xp6(1),
            e.Oqu(a.value);
        }
      }
      function Yn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 45),
            e.YNc(1, Pn, 8, 5, 'div', 50),
            e.YNc(2, Nn, 8, 5, 'div', 50),
            e.qZA()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('ngIf', a.app.company.phone[0]),
            e.xp6(1),
            e.Q6J('ngIf', a.app.company.phone[1]);
        }
      }
      function In(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 54)(1, 'h3'),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 55),
            e.qZA()(),
            e.kcU(),
            e.TgZ(6, 'a', 56),
            e.O4$(),
            e.TgZ(7, 'svg'),
            e._UZ(8, 'use', 57),
            e.qZA(),
            e._uU(9),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(2),
            e.hij(' ', e.lcZ(3, 3, 'contacts.list.7'), ' '),
            e.xp6(4),
            e.Q6J('linkTo', a.link),
            e.xp6(3),
            e.hij(' ', a.value, ' ');
        }
      }
      function $n(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 54)(1, 'h3'),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 58),
            e.qZA()(),
            e.kcU(),
            e.TgZ(6, 'a', 56),
            e.O4$(),
            e.TgZ(7, 'svg'),
            e._UZ(8, 'use', 57),
            e.qZA(),
            e._uU(9),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(2),
            e.hij(' ', e.lcZ(3, 3, 'contacts.list.8'), ' '),
            e.xp6(4),
            e.Q6J('linkTo', a.link),
            e.xp6(3),
            e.hij(' ', a.value, ' ');
        }
      }
      function jn(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 54)(1, 'h3'),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 59),
            e.qZA()(),
            e.kcU(),
            e.TgZ(6, 'a', 56),
            e.O4$(),
            e.TgZ(7, 'svg'),
            e._UZ(8, 'use', 57),
            e.qZA(),
            e._uU(9),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.xp6(2),
            e.hij(' ', e.lcZ(3, 3, 'contacts.list.9'), ' '),
            e.xp6(4),
            e.Q6J('linkTo', a.link),
            e.xp6(3),
            e.hij(' ', a.value, ' ');
        }
      }
      function Rn(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 60)(1, 'ngx-turnstile', 61, 62),
            e.NdJ('resolved', function (o) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.onCaptchaResolve(o));
            }),
            e.qZA()();
        }
        if (2 & t) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('siteKey', a.captcha.key),
            e.uIk('data-language', a.captcha.lang);
        }
      }
      function zn(t, n) {
        1 & t &&
          (e.TgZ(0, 'label', 63),
          e._UZ(1, 'input', 64),
          e.TgZ(2, 'p'),
          e._uU(3),
          e.ALo(4, 'translate'),
          e.O4$(),
          e.TgZ(5, 'svg'),
          e._UZ(6, 'use', 65),
          e.qZA()()()),
          2 & t && (e.xp6(3), e.hij(' ', e.lcZ(4, 1, 'contacts.form.7'), ' '));
      }
      let Xn = (() => {
        class t {
          constructor(a, i, o, s) {
            (this.app = a),
              (this.cdr = i),
              (this.toast = o),
              (this.facadeService = s),
              (this.captcha = {
                status: !0,
                key: Ee.N.turnstile.siteKey,
                lang: 'en',
              }),
              (this.form = new m.cw({
                name: new m.NI(null, [
                  m.kI.required,
                  m.kI.minLength(2),
                  m.kI.maxLength(32),
                ]),
                email: new m.NI(null, [
                  m.kI.required,
                  m.kI.email,
                  m.kI.minLength(6),
                  m.kI.maxLength(64),
                ]),
                message: new m.NI(null, [
                  m.kI.required,
                  m.kI.minLength(2),
                  m.kI.maxLength(1e3),
                ]),
                rules: new m.NI(!0, {
                  nonNullable: !0,
                  validators: [m.kI.requiredTrue],
                }),
                captcha: new m.NI(null),
              })),
              (this.formBusy = !1),
              (this.telegramChannelHref = '#'),
              void 0 !== a.config.captcha.contacts &&
                (this.captcha.status = a.config.captcha.contacts),
              this.captcha.status &&
                ((this.captcha.lang = (0, ae.vR)(a.language.code)),
                this.form.get('captcha')?.addValidators([m.kI.required]));
            const Z = a.company.telegram.find(
              (y) => 'channel' === y.label?.toLowerCase()
            );
            Z && (this.telegramChannelHref = Z.value);
          }
          ngOnInit() {
            this.app.isLogged &&
              this.app.user &&
              this.form.patchValue({
                name: this.app.user.name,
                email: this.app.user.email,
              });
          }
          ngAfterViewInit() {
            const a = new URLSearchParams(window.location.search);
            a.has('act') &&
              'form' === a.get('act') &&
              (0, ae.RD)('.cont-form-title', -30);
          }
          onCaptchaResolve(a) {}
          submit() {
            this.form.invalid ||
              this.formBusy ||
              ((this.formBusy = !0),
              this.facadeService.doContacts(this.form.value).subscribe({
                error: () => this.onSubmitComplete(),
                complete: () => this.onSubmitComplete(),
                next: (a) => {
                  this.form.patchValue({ message: null }),
                    this.form.markAsUntouched(),
                    this.toast.success('msg.005');
                },
              }));
          }
          onSubmitComplete() {
            this.captchaRef && this.captchaRef.reset(),
              (this.formBusy = !1),
              this.cdr.markForCheck();
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(
              e.Y36(U.z),
              e.Y36(e.sBO),
              e.Y36(L.k),
              e.Y36(ue.e)
            );
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            viewQuery: function (a, i) {
              if ((1 & a && e.Gf(Jn, 5, Oe.os), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.captchaRef = o.first);
              }
            },
            decls: 89,
            vars: 66,
            consts: [
              [1, 'cont'],
              [1, 'container'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [1, 'row'],
              [1, 'col-lg-6'],
              ['class', 'col-4', 'data-aos', 'zoom-in', 4, 'ngFor', 'ngForOf'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '1000', 1, 'col-lg-6'],
              [1, 'cont-tg'],
              [1, 'cont-tg__bg'],
              ['data-num', '1', 1, 'cont-tg__icon'],
              ['src', 'assets/img/cont-tg-icon.png', 'alt', ''],
              [3, 'innerHTML'],
              ['target', '_blank', 'type', 'telegram', 3, 'linkTo'],
              [1, 'cont-bg'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-8'],
              [1, 'cont-title'],
              [1, 'cont-list'],
              ['class', 'col-md-6', 4, 'ngIf'],
              ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-4'],
              ['class', 'cont-address', 4, 'ngIf'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'cont-form-title',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'cont-form',
                3,
                'formGroup',
                'ngSubmit',
              ],
              [3, 'disabled'],
              [1, 'cont-input'],
              [
                'type',
                'text',
                'formControlName',
                'name',
                'maxlength',
                '32',
                3,
                'placeholder',
              ],
              [
                'type',
                'email',
                'formControlName',
                'email',
                'maxlength',
                '64',
                3,
                'placeholder',
              ],
              [
                'formControlName',
                'message',
                'maxlength',
                '1000',
                3,
                'placeholder',
              ],
              [1, 'row', 'd-flex', 'align-items-center'],
              [1, 'col-lg-8'],
              ['class', 'mb-4', 4, 'ngIf'],
              ['class', 'cont-check', 4, 'ngIf'],
              [1, 'col-lg-4', 'd-flex', 'justify-content-lg-end'],
              ['type', 'submit', 1, 'm-btn', 3, 'disabled'],
              [1, 'cont-bot-msg'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'container'],
              [
                'src',
                'assets/img/cont-msg-icon.svg',
                'loading',
                'lazy',
                'alt',
                '',
              ],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'faq-box',
                'faq-box_nobg',
              ],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'm-text'],
              ['routerLink', '/faq', 1, 'faq-box__btn'],
              ['data-aos', 'zoom-in', 1, 'col-4'],
              [
                'class',
                'cont-soc',
                'target',
                '_blank',
                3,
                'ngClass',
                'href',
                4,
                'ngLet',
              ],
              ['target', '_blank', 1, 'cont-soc', 3, 'ngClass', 'href'],
              [1, 'cont-soc__icon'],
              ['alt', '', 3, 'src'],
              [1, 'col-md-6'],
              ['class', 'cont-item', 4, 'ngIf'],
              [1, 'cont-item'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#mail'],
              ['type', 'email', 3, 'linkTo'],
              ['class', 'cont-item cont-item_phone', 4, 'ngIf'],
              [1, 'cont-item', 'cont-item_phone'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#phone'],
              ['type', 'phone', 3, 'linkTo'],
              [1, 'cont-address'],
              [0, 'xlink', 'href', 'assets/img/flags.svg#nz'],
              [3, 'linkTo'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#map'],
              [0, 'xlink', 'href', 'assets/img/flags.svg#gb'],
              [0, 'xlink', 'href', 'assets/img/flags.svg#hk'],
              [1, 'mb-4'],
              [
                'formControlName',
                'captcha',
                'action',
                'contacts',
                'theme',
                'light',
                3,
                'siteKey',
                'resolved',
              ],
              ['captchaRef', ''],
              [1, 'cont-check'],
              ['type', 'checkbox', 'formControlName', 'rules'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#check'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1),
                e._UZ(2, 'div', 2),
                e.ALo(3, 'translate'),
                e.TgZ(4, 'div', 3)(5, 'div', 4)(6, 'div', 3),
                e.YNc(7, Mn, 2, 2, 'div', 5),
                e.qZA()(),
                e.TgZ(8, 'div', 6)(9, 'div', 7),
                e._UZ(10, 'div', 8),
                e.TgZ(11, 'div', 9),
                e._UZ(12, 'img', 10),
                e.qZA(),
                e.TgZ(13, 'p'),
                e._uU(14),
                e.ALo(15, 'translate'),
                e.qZA(),
                e._UZ(16, 'h3', 11),
                e.ALo(17, 'translate'),
                e.TgZ(18, 'a', 12),
                e._uU(19),
                e.ALo(20, 'translate'),
                e.qZA()()()()(),
                e.TgZ(21, 'div', 13)(22, 'div', 1)(23, 'div', 3)(24, 'div', 14)(
                  25,
                  'div',
                  15
                ),
                e._uU(26),
                e.ALo(27, 'translate'),
                e.qZA(),
                e.TgZ(28, 'div', 16)(29, 'div', 3),
                e.YNc(30, Sn, 4, 3, 'div', 17),
                e.YNc(31, Yn, 3, 2, 'div', 17),
                e.qZA()()(),
                e.TgZ(32, 'div', 18)(33, 'div', 15),
                e._uU(34),
                e.ALo(35, 'translate'),
                e.qZA(),
                e.YNc(36, In, 10, 5, 'div', 19),
                e.YNc(37, $n, 10, 5, 'div', 19),
                e.YNc(38, jn, 10, 5, 'div', 19),
                e.qZA()(),
                e.TgZ(39, 'div', 3),
                e._UZ(40, 'div', 20),
                e.ALo(41, 'translate'),
                e.qZA(),
                e.TgZ(42, 'form', 21),
                e.NdJ('ngSubmit', function () {
                  return i.submit();
                }),
                e.TgZ(43, 'fieldset', 22)(44, 'div', 3)(45, 'div', 4)(
                  46,
                  'label',
                  23
                )(47, 'p'),
                e._uU(48),
                e.ALo(49, 'translate'),
                e.qZA(),
                e._UZ(50, 'input', 24),
                e.ALo(51, 'translate'),
                e.qZA()(),
                e.TgZ(52, 'div', 4)(53, 'label', 23)(54, 'p'),
                e._uU(55),
                e.ALo(56, 'translate'),
                e.qZA(),
                e._UZ(57, 'input', 25),
                e.ALo(58, 'translate'),
                e.qZA()()(),
                e.TgZ(59, 'label', 23)(60, 'p'),
                e._uU(61),
                e.ALo(62, 'translate'),
                e.qZA(),
                e._UZ(63, 'textarea', 26),
                e.ALo(64, 'translate'),
                e.qZA(),
                e.TgZ(65, 'div', 27)(66, 'div', 28),
                e.YNc(67, Rn, 3, 2, 'div', 29),
                e.YNc(68, zn, 7, 3, 'label', 30),
                e.qZA(),
                e.TgZ(69, 'div', 31)(70, 'button', 32),
                e._uU(71),
                e.ALo(72, 'translate'),
                e.qZA()()()()()(),
                e.TgZ(73, 'div', 33)(74, 'div', 34)(75, 'p'),
                e._UZ(76, 'img', 35),
                e._uU(77),
                e.ALo(78, 'translate'),
                e.qZA()()()(),
                e.TgZ(79, 'div', 1)(80, 'div', 36),
                e._UZ(81, 'div', 37),
                e.ALo(82, 'translate'),
                e.TgZ(83, 'div', 38),
                e._UZ(84, 'p', 11),
                e.ALo(85, 'translate'),
                e.qZA(),
                e.TgZ(86, 'a', 39),
                e._uU(87),
                e.ALo(88, 'translate'),
                e.qZA()()()()),
                2 & a &&
                  (e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(3, 30, 'contacts.socials.0'), e.oJD),
                  e.xp6(5),
                  e.Q6J('ngForOf', i.app.company.social),
                  e.xp6(7),
                  e.Oqu(e.lcZ(15, 32, 'contacts.socials.1')),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(17, 34, 'contacts.socials.2'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J('linkTo', i.telegramChannelHref),
                  e.xp6(1),
                  e.Oqu(e.lcZ(20, 36, 'contacts.socials.3')),
                  e.xp6(7),
                  e.Oqu(e.lcZ(27, 38, 'contacts.list.0')),
                  e.xp6(4),
                  e.Q6J('ngIf', i.app.company.email.length),
                  e.xp6(1),
                  e.Q6J('ngIf', i.app.company.phone.length),
                  e.xp6(3),
                  e.Oqu(e.lcZ(35, 40, 'contacts.list.6')),
                  e.xp6(2),
                  e.Q6J('ngIf', i.app.viewParams.address[0]),
                  e.xp6(1),
                  e.Q6J('ngIf', i.app.viewParams.address[1]),
                  e.xp6(1),
                  e.Q6J('ngIf', i.app.viewParams.address[2]),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(41, 42, 'contacts.form.0'), e.oJD),
                  e.xp6(2),
                  e.Q6J('formGroup', i.form),
                  e.xp6(1),
                  e.Q6J('disabled', i.formBusy),
                  e.xp6(5),
                  e.Oqu(e.lcZ(49, 44, 'contacts.form.1')),
                  e.xp6(2),
                  e.s9C('placeholder', e.lcZ(51, 46, 'contacts.form.2')),
                  e.xp6(5),
                  e.Oqu(e.lcZ(56, 48, 'contacts.form.3')),
                  e.xp6(2),
                  e.s9C('placeholder', e.lcZ(58, 50, 'contacts.form.4')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(62, 52, 'contacts.form.5')),
                  e.xp6(2),
                  e.s9C('placeholder', e.lcZ(64, 54, 'contacts.form.6')),
                  e.xp6(4),
                  e.Q6J('ngIf', i.captcha.status),
                  e.xp6(1),
                  e.Q6J('ngIf', !1),
                  e.xp6(2),
                  e.Q6J('disabled', i.form.invalid || i.formBusy),
                  e.xp6(1),
                  e.hij(' ', e.lcZ(72, 56, 'contacts.form.8'), ' '),
                  e.xp6(6),
                  e.hij(' ', e.lcZ(78, 58, 'contacts.form.9'), ' '),
                  e.xp6(4),
                  e.Q6J('innerHTML', e.lcZ(82, 60, 'contacts.faq.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(85, 62, 'contacts.faq.1'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(88, 64, 'contacts.faq.2')));
            },
            dependencies: [
              r.mk,
              r.sg,
              r.O5,
              x.rH,
              m._Y,
              m.Fj,
              m.Wl,
              m.JJ,
              m.JL,
              m.nD,
              m.sg,
              m.u,
              M.h,
              C.V,
              St.$,
              Oe.os,
              Oe.n,
              k.X$,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var Be = T(7355),
        En = T(8675),
        Bn = T(529);
      let ca = (() => {
          class t {
            constructor() {
              this.locationService = (0, e.f3M)(r.Ye);
            }
            set(a) {
              this.setParams(a);
            }
            unset() {
              this.setParams({});
            }
            setParams(a = {}) {
              const i = new Bn.LE().appendAll(a);
              this.locationService.replaceState(
                location.pathname,
                i.toString()
              );
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵprov = e.Yz7({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })(),
        Pt = (() => {
          class t {
            constructor(a) {
              (this.elem = a),
                (this.defaults = {}),
                (this.onChange = new e.vpe());
            }
            ngAfterViewInit() {
              (this.instance = $(this.elem.nativeElement).styler({
                ...this.defaults,
                ...this.params,
              })),
                this.instance.change(() => {
                  this.onChange.emit(this.instance[0].value);
                });
            }
            ngOnDestroy() {
              this.destroy();
            }
            refresh() {
              this.instance &&
                setTimeout(() => this.instance.trigger('refresh'), 30);
            }
            destroy() {
              this.instance && this.instance.styler('destroy');
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(e.SBq));
            }),
            (t.ɵdir = e.lG2({
              type: t,
              selectors: [['', 'styler', '']],
              inputs: { params: ['styler', 'params'] },
              outputs: { onChange: 'onChange' },
            })),
            t
          );
        })();
      var Gn = T(7797);
      let Vn = (() => {
        class t {
          constructor() {
            (this.value = 0), (this.onChange = new e.vpe());
          }
          ngAfterViewInit() {
            this.initAssets();
          }
          initAssets() {
            if (void 0 === jQuery.ui) {
              const i = document.createElement('script');
              (i.src = 'assets/js/jquery-ui.min.js?v=2'),
                (i.onload = () => this.initSlider()),
                document.body.appendChild(i);
            } else this.initSlider();
          }
          initSlider() {
            void 0 !== jQuery.ui &&
              $('#calc-slider').slider({
                range: 'min',
                min: 0,
                max: 100,
                step: 1,
                value: this.value,
                slide: (i, o) => {
                  this.onChange.emit(Number(o.value));
                },
              });
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-offer-calc-slider']],
            inputs: { value: 'value' },
            outputs: { onChange: 'onChange' },
            decls: 1,
            vars: 0,
            consts: [['id', 'calc-slider']],
            template: function (a, i) {
              1 & a && e._UZ(0, 'div', 0);
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var ft = T(4199);
      const Wn = ['offerStylerRef'],
        Kn = ['currStylerRef'];
      function ei(t, n) {
        if (
          (1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'number'), e.BQk()), 2 & t)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.AsE('', a.name, ' ', e.lcZ(2, 2, a.interest.max), '%');
        }
      }
      function ti(t, n) {
        if (
          (1 & t &&
            (e.ynx(0),
            e._uU(1),
            e.ALo(2, 'number'),
            e.ALo(3, 'number'),
            e.BQk()),
          2 & t)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1),
            e.lnq(
              '',
              a.name,
              ' ',
              e.lcZ(2, 3, a.interest.min),
              '% - ',
              e.lcZ(3, 5, a.interest.max),
              '%'
            );
        }
      }
      function ai(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'option', 29),
            e.ALo(1, 'async'),
            e.ALo(2, 'declension'),
            e.YNc(3, ei, 3, 4, 'ng-container', 30),
            e.YNc(4, ti, 4, 7, 'ng-container', 30),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.Q6J('value', a.id)('ngSwitch', a.interest.min >= a.interest.max),
            e.uIk(
              'data-text',
              '(' + e.lcZ(1, 5, e.Dn7(2, 7, a.term, 'days', !0)) + ')'
            ),
            e.xp6(3),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1);
        }
      }
      function ni(t, n) {
        if ((1 & t && (e.TgZ(0, 'option', 31), e._uU(1), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.Tol(a.code),
            e.Q6J('value', a.code),
            e.uIk('data-text', '(' + a.code + ')'),
            e.xp6(1),
            e.Oqu(a.name);
        }
      }
      function ii(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 32)(1, 'h3'),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'div', 33)(5, 'input', 34),
            e.NdJ('keydown', function () {
              e.CHM(a);
              const o = e.oxw(2);
              return e.KtG(o.onAmountChange());
            }),
            e.qZA()(),
            e.TgZ(6, 'div', 35)(7, 'span'),
            e._uU(8),
            e.ALo(9, 'translate'),
            e.ALo(10, 'number'),
            e.qZA(),
            e.TgZ(11, 'span'),
            e._uU(12),
            e.ALo(13, 'translate'),
            e.ALo(14, 'number'),
            e.qZA()(),
            e.TgZ(15, 'div', 36)(16, 'facade-offer-calc-slider', 37),
            e.NdJ('onChange', function (o) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG(s.setPercent(o));
            }),
            e.qZA()()();
        }
        if (2 & t) {
          const a = n.ngLet,
            i = e.oxw().ngLet,
            o = e.oxw();
          e.xp6(2),
            e.Oqu(e.lcZ(3, 8, 'offers.calc.amount')),
            e.xp6(3),
            e.Q6J('amount', o.clamp),
            e.xp6(3),
            e.lnq(
              '',
              e.lcZ(9, 10, 'offers.calc.min'),
              ' ',
              e.xi3(10, 12, a.min, '0.0-6'),
              ' ',
              i,
              ''
            ),
            e.xp6(4),
            e.lnq(
              '',
              e.lcZ(13, 15, 'offers.calc.max'),
              ' ',
              e.xi3(14, 17, a.max, '0.0-6'),
              ' ',
              i,
              ''
            );
        }
      }
      const oi = function (t, n) {
        return { plan_id: t, curr: n };
      };
      function si(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 1)(1, 'form', 2)(2, 'div', 3)(3, 'div', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.close());
            }),
            e.O4$(),
            e.TgZ(4, 'svg'),
            e._UZ(5, 'use', 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(6, 'div', 6)(7, 'h3'),
            e._uU(8),
            e.ALo(9, 'translate'),
            e.qZA(),
            e.TgZ(10, 'p'),
            e._uU(11),
            e.ALo(12, 'translate'),
            e.qZA()(),
            e.TgZ(13, 'div', 7)(14, 'div', 8),
            e.O4$(),
            e.TgZ(15, 'svg'),
            e._UZ(16, 'use', 9),
            e.qZA(),
            e.kcU(),
            e.TgZ(17, 'select', 10, 11),
            e.NdJ('onChange', function (o) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.setOffer(o));
            }),
            e.YNc(19, ai, 5, 11, 'option', 12),
            e.qZA(),
            e.TgZ(20, 'p'),
            e._uU(21),
            e.ALo(22, 'translate'),
            e.qZA()(),
            e.TgZ(23, 'div', 13),
            e.O4$(),
            e.TgZ(24, 'svg'),
            e._UZ(25, 'use', 9),
            e.qZA(),
            e.kcU(),
            e.TgZ(26, 'select', 14, 15),
            e.NdJ('onChange', function (o) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.setCurrency(o));
            }),
            e.YNc(28, ni, 2, 5, 'option', 16),
            e.qZA(),
            e.TgZ(29, 'p'),
            e._uU(30),
            e.ALo(31, 'translate'),
            e.qZA()()(),
            e.YNc(32, ii, 17, 20, 'div', 17),
            e.TgZ(33, 'a', 18),
            e._uU(34),
            e.ALo(35, 'translate'),
            e.qZA()(),
            e.TgZ(36, 'div', 19)(37, 'div', 4),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.close());
            }),
            e.O4$(),
            e.TgZ(38, 'svg'),
            e._UZ(39, 'use', 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(40, 'div', 6)(41, 'h3'),
            e._uU(42),
            e.ALo(43, 'translate'),
            e.qZA(),
            e.TgZ(44, 'p'),
            e._uU(45),
            e.ALo(46, 'translate'),
            e.qZA()(),
            e.TgZ(47, 'div', 20)(48, 'div', 21)(49, 'h3'),
            e._uU(50),
            e.ALo(51, 'translate'),
            e.qZA(),
            e.TgZ(52, 'p'),
            e._uU(53),
            e.ALo(54, 'number'),
            e._UZ(55, 'img', 22),
            e.qZA()(),
            e.TgZ(56, 'div', 21)(57, 'h3'),
            e._uU(58),
            e.ALo(59, 'translate'),
            e.qZA(),
            e.TgZ(60, 'p'),
            e._uU(61),
            e.ALo(62, 'number'),
            e._UZ(63, 'img', 22),
            e.qZA()(),
            e.TgZ(64, 'div', 21)(65, 'h3'),
            e._uU(66),
            e.ALo(67, 'translate'),
            e.qZA(),
            e.TgZ(68, 'p'),
            e._uU(69),
            e.ALo(70, 'async'),
            e.ALo(71, 'declension'),
            e._UZ(72, 'img', 22),
            e.qZA()()(),
            e.TgZ(73, 'div', 23)(74, 'div', 24)(75, 'h3'),
            e._uU(76),
            e.ALo(77, 'translate'),
            e.TgZ(78, 'span'),
            e._uU(79, '*'),
            e.qZA()(),
            e.TgZ(80, 'p', 25),
            e._uU(81),
            e.ALo(82, 'number'),
            e.qZA()(),
            e.TgZ(83, 'div', 24)(84, 'h3'),
            e._uU(85),
            e.ALo(86, 'translate'),
            e.TgZ(87, 'span'),
            e._uU(88, '*'),
            e.qZA()(),
            e.TgZ(89, 'p', 25),
            e._uU(90),
            e.ALo(91, 'number'),
            e.qZA()(),
            e.TgZ(92, 'div', 24)(93, 'h3'),
            e._uU(94),
            e.ALo(95, 'translate'),
            e.TgZ(96, 'span'),
            e._uU(97, '*'),
            e.qZA()(),
            e.TgZ(98, 'p', 25),
            e._uU(99),
            e.ALo(100, 'number'),
            e.qZA()()(),
            e.TgZ(101, 'div', 26)(102, 'div', 27),
            e._UZ(103, 'img', 28),
            e.qZA(),
            e.TgZ(104, 'span'),
            e._uU(105, '*'),
            e.qZA(),
            e._uU(106),
            e.ALo(107, 'translate'),
            e.qZA()()()();
        }
        if (2 & t) {
          const a = n.ngLet,
            i = e.oxw();
          e.xp6(1),
            e.Q6J('formGroup', i.form),
            e.xp6(7),
            e.Oqu(e.lcZ(9, 33, 'offers.calc.title')),
            e.xp6(3),
            e.Oqu(e.lcZ(12, 35, 'offers.calc.descr')),
            e.xp6(6),
            e.Q6J('styler', i.stylerParams[0]),
            e.xp6(2),
            e.Q6J('ngForOf', i.offers),
            e.xp6(2),
            e.Oqu(e.lcZ(22, 37, 'offers.calc.plan')),
            e.xp6(5),
            e.Q6J('styler', i.stylerParams[1]),
            e.xp6(2),
            e.Q6J('ngForOf', i.currencies),
            e.xp6(2),
            e.Oqu(e.lcZ(31, 39, 'offers.calc.currency')),
            e.xp6(2),
            e.Q6J('ngLet', i.clamp),
            e.xp6(1),
            e.Q6J('queryParams', e.WLB(82, oi, i.offer.id, i.currency.code)),
            e.xp6(1),
            e.hij(' ', e.lcZ(35, 41, 'offers.calc.btn'), ' '),
            e.xp6(8),
            e.Oqu(e.lcZ(43, 43, 'offers.calc.profit.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(46, 45, 'offers.calc.profit.1')),
            e.xp6(5),
            e.Oqu(e.lcZ(51, 47, 'offers.calc.profit.2')),
            e.xp6(3),
            e.hij(' ', e.xi3(54, 49, i.calc.profitMin, '0.0-6'), ' '),
            e.xp6(2),
            e.Q6J('src', 'assets/img/' + i.currency.code + '-2.svg', e.LSH),
            e.xp6(3),
            e.Oqu(e.lcZ(59, 52, 'offers.calc.profit.3')),
            e.xp6(3),
            e.hij(' ', e.xi3(62, 54, i.calc.profitMax, '0.0-6'), ' '),
            e.xp6(2),
            e.Q6J('src', 'assets/img/' + i.currency.code + '-2.svg', e.LSH),
            e.xp6(3),
            e.Oqu(e.lcZ(67, 57, 'offers.calc.profit.4')),
            e.xp6(3),
            e.hij(
              ' ',
              e.lcZ(70, 59, e.Dn7(71, 61, i.offer.term, 'days', !0)),
              ' '
            ),
            e.xp6(3),
            e.Q6J('src', 'assets/img/' + i.currency.code + '-2.svg', e.LSH),
            e.xp6(4),
            e.hij(' ', e.lcZ(77, 65, 'offers.calc.profit.5'), ' '),
            e.xp6(5),
            e.AsE(
              ' ~',
              e.xi3(82, 67, i.calc.profitWeekly, '0.0-6'),
              ' ',
              a,
              ' '
            ),
            e.xp6(4),
            e.hij(' ', e.lcZ(86, 70, 'offers.calc.profit.6'), ' '),
            e.xp6(5),
            e.AsE(' ~', e.xi3(91, 72, i.calc.profitNet, '0.0-6'), ' ', a, ' '),
            e.xp6(4),
            e.hij(' ', e.lcZ(95, 75, 'offers.calc.profit.7'), ' '),
            e.xp6(5),
            e.AsE(
              ' ~',
              e.xi3(100, 77, i.calc.profitTotal, '0.0-6'),
              ' ',
              a,
              ' '
            ),
            e.xp6(7),
            e.hij(' ', e.lcZ(107, 80, 'offers.calc.hint'), ' ');
        }
      }
      let da = (() => {
        class t {
          constructor() {
            (this.destroy$ = new q.x()),
              (this.modalService = (0, e.f3M)(Be.Z)),
              (this.appService = (0, e.f3M)(U.z)),
              (this.translateService = (0, e.f3M)(k.sK)),
              (this.queryParamsService = (0, e.f3M)(ca)),
              (this.daysStr =
                this.translateService.instant('declension.days.1')),
              (this.stylerParams = [
                { onSelectClosed: () => this.dressUpOfferStyler(!1) },
                { onSelectClosed: () => this.dressUpCurrencyStyler(!1) },
              ]),
              (this.form = new m.cw({
                offer: new m.NI(0, { nonNullable: !0 }),
                curr: new m.NI('usd', { nonNullable: !0 }),
                amount: new m.NI(0, { nonNullable: !0 }),
              })),
              (this.percentCtrl = new m.NI(0, { nonNullable: !0 })),
              (this.currencies = this.appService.currencies),
              (this.calc = {
                profitMin: 0,
                profitMax: 0,
                profitWeekly: 0,
                profitNet: 0,
                profitTotal: 0,
              });
          }
          get clamp() {
            const a = this.currency.code.toLowerCase();
            return {
              min: Number(this.offer.min[a] ?? 0),
              max: Number(this.offer.max[a] ?? 0),
              precision: this.currency.precision,
            };
          }
          ngOnInit() {
            (this.offers = [...this._payload.offers]),
              (this.offer = this.findOfferById(this._payload.offer_id)),
              (this.currency = this.findCurrencyByCode(this._payload.curr)),
              this.form.patchValue({
                offer: this.offer.id,
                curr: this.currency.code,
                amount: this.clamp.min,
              }),
              this.initFormChangeObserver(),
              this.initPercentChangeObserver(),
              this.queryParamsService.set({ calc: this.offer.id });
          }
          ngAfterViewInit() {
            this.dressUpOfferStyler(!0), this.dressUpCurrencyStyler(!0);
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete();
          }
          close() {
            this.modalService.hide(), this.queryParamsService.unset();
          }
          setOffer(a) {
            (a = Number(a)),
              (!this.offer || this.offer.id !== a) &&
                ((this.offer = this.findOfferById(a)),
                this.form.patchValue({
                  offer: this.offer.id,
                  amount: this.getPercentAmount(),
                }),
                this.queryParamsService.set({ calc: this.offer.id }));
          }
          setCurrency(a) {
            (this.currency && this.currency.code === a) ||
              ((this.currency = this.findCurrencyByCode(a)),
              this.form.patchValue({
                curr: a,
                amount: this.getPercentAmount(),
              }));
          }
          setPercent(a) {
            this.percentCtrl.setValue(a);
          }
          onAmountChange() {
            setTimeout(() => {
              const { min: a, max: i, precision: o } = this.clamp,
                Z =
                  (((0, ae.w$)(Number(this.form.value.amount), a, i, o) - a) /
                    (i - a)) *
                  100;
              $('#calc-slider').slider('value', Z);
            }, 15);
          }
          findOfferById(a) {
            return this.offers.find((i) => i.id === a) || this.offers[0];
          }
          findCurrencyByCode(a) {
            return (
              this.currencies.find((i) => i.code === a) || this.currencies[0]
            );
          }
          dressUpOfferStyler(a = !1) {
            this.offerStylerRef &&
              setTimeout(() => {
                const i = this.offerStylerRef.nativeElement.parentNode,
                  o = i.querySelector('.jq-selectbox__select-text');
                if (a) {
                  const s = this.offer,
                    Z = i.querySelectorAll('.jq-selectbox__dropdown li');
                  (o.innerHTML = `${s.name} ${s.interest.min}% - ${s.interest.max}% <span>(${s.term} ${this.daysStr})</span>`),
                    Z.forEach((y) => {
                      y.innerHTML =
                        y.innerText +
                        ' <span>' +
                        (y.dataset.text || '') +
                        '</span>';
                    });
                } else
                  o.innerHTML = i.querySelector('li.selected').innerHTML ?? '';
              }, 15);
          }
          dressUpCurrencyStyler(a = !1) {
            this.currStylerRef &&
              setTimeout(() => {
                const i = this.currStylerRef.nativeElement.parentNode,
                  o = i.querySelector('.jq-selectbox__select-text');
                if (a) {
                  const s = this.currency,
                    Z = i.querySelectorAll('.jq-selectbox__dropdown li');
                  (o.innerHTML = `${
                    s.name
                  } <span>(${s.code.toUpperCase()})</span>`),
                    Z.forEach((y) => {
                      y.innerHTML =
                        y.innerText +
                        ' <span>' +
                        (y.dataset.text || '') +
                        '</span>';
                    });
                } else
                  o.innerHTML = i.querySelector('li.selected').innerHTML ?? '';
              }, 15);
          }
          initPercentChangeObserver() {
            this.percentCtrl.valueChanges
              .pipe((0, w.R)(this.destroy$))
              .subscribe((a) => {
                this.form.patchValue({ amount: this.getPercentAmount(a) });
              });
          }
          initFormChangeObserver() {
            this.form.valueChanges
              .pipe((0, En.O)(this.form.value), (0, w.R)(this.destroy$))
              .subscribe(() => this.calculate());
          }
          getPercentAmount(a = this.percentCtrl.value) {
            const { min: i, max: o, precision: s } = this.clamp;
            return (0, ae.dN)((a / 100) * (o - i) + i, s);
          }
          calculate() {
            const { min: a, max: i, precision: o } = this.clamp,
              s = (0, ae.w$)(Number(this.form.value.amount), a, i, o),
              Z = this.offer.interest,
              S = (s * Z.max) / 100,
              me = ((s * Z.avg) / 100) * 5,
              le = ((s * Z.avg) / 100) * this.offer.term;
            let he = le;
            this.offer.flag[2] && (he += s),
              (this.calc = {
                profitMin: (0, ae.dN)((s * Z.min) / 100, o),
                profitMax: (0, ae.dN)(S, o),
                profitWeekly: (0, ae.dN)(me, o),
                profitNet: (0, ae.dN)(le, o),
                profitTotal: (0, ae.dN)(he, o),
              });
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            viewQuery: function (a, i) {
              if ((1 & a && (e.Gf(Wn, 5, e.SBq), e.Gf(Kn, 5, e.SBq)), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.offerStylerRef = o.first),
                  e.iGM((o = e.CRH())) && (i.currStylerRef = o.first);
              }
            },
            hostBindings: function (a, i) {
              1 & a &&
                e.NdJ(
                  'keydown.escape',
                  function () {
                    return i.close();
                  },
                  !1,
                  e.evT
                );
            },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'cab-modal active flex-row', 4, 'ngLet'],
              [1, 'cab-modal', 'active', 'flex-row'],
              [1, 'cab-modal__wrap', 'modal', 'modal_calc', 3, 'formGroup'],
              [1, 'modal-wrap'],
              [1, 'modal-close', 3, 'click'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#close-2'],
              [1, 'modal-title'],
              [1, 'modal-select__row'],
              [1, 'modal-select'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
              [
                'formControlName',
                'offer',
                1,
                'sel-text',
                3,
                'styler',
                'onChange',
              ],
              ['offerStylerRef', ''],
              [3, 'value', 'ngSwitch', 4, 'ngFor', 'ngForOf'],
              [1, 'modal-select', 'modal-select_icon'],
              [
                'formControlName',
                'curr',
                1,
                'sel-text',
                3,
                'styler',
                'onChange',
              ],
              ['currStylerRef', ''],
              [3, 'class', 'value', 4, 'ngFor', 'ngForOf'],
              ['class', 'modal-sum', 4, 'ngLet'],
              [
                'routerLink',
                '/account/deposits/create',
                1,
                'm-btn',
                'm-btn_full',
                3,
                'queryParams',
              ],
              [1, 'modal-stat'],
              [1, 'modal-info'],
              [1, 'modal-info__item'],
              ['alt', '', 3, 'src'],
              [1, 'modal-income'],
              [1, 'modal-income__item'],
              [1, 'text-nowrap'],
              [1, 'modal-msg'],
              [1, 'modal-msg__icon'],
              ['src', 'assets/img/modal-shield.svg', 'alt', ''],
              [3, 'value', 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [3, 'value'],
              [1, 'modal-sum'],
              [1, 'modal-sum__input'],
              [
                'type',
                'text',
                'formControlName',
                'amount',
                'maxlength',
                '10',
                'placeholder',
                '0.00',
                3,
                'amount',
                'keydown',
              ],
              [1, 'modal-sum__bar-info'],
              [1, 'modal-sum__bar'],
              [3, 'onChange'],
            ],
            template: function (a, i) {
              1 & a && e.YNc(0, si, 108, 85, 'div', 0),
                2 & a && e.Q6J('ngLet', i.currency.code.toUpperCase());
            },
            dependencies: [
              r.sg,
              r.RF,
              r.n9,
              x.rH,
              m._Y,
              m.YN,
              m.Kr,
              m.Fj,
              m.EJ,
              m.JJ,
              m.JL,
              m.nD,
              m.sg,
              m.u,
              M.h,
              Pt,
              St.$,
              Gn.i,
              Vn,
              r.Ov,
              r.JJ,
              k.X$,
              ft.V,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function ri(t, n) {
        if ((1 & t && (e.TgZ(0, 'option', 28), e._uU(1), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.Q6J('value', a.id), e.xp6(1), e.Oqu(a.name);
        }
      }
      function li(t, n) {
        if (
          (1 & t &&
            (e.ynx(0),
            e._uU(1),
            e.ALo(2, 'number'),
            e.ALo(3, 'number'),
            e.BQk()),
          2 & t)
        ) {
          const a = e.oxw(3);
          e.xp6(1),
            e.AsE(
              ' ',
              e.lcZ(2, 2, a.offer.interest.min),
              '% - ',
              e.lcZ(3, 4, a.offer.interest.max),
              '% '
            );
        }
      }
      function ci(t, n) {
        if (
          (1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'number'), e.BQk()), 2 & t)
        ) {
          const a = e.oxw(3);
          e.xp6(1), e.hij(' ', e.lcZ(2, 1, a.offer.interest.max), '% ');
        }
      }
      function di(t, n) {
        if (
          (1 & t &&
            (e.O4$(),
            e.kcU(),
            e.TgZ(0, 'div', 29),
            e.YNc(1, li, 4, 6, 'ng-container', 20),
            e.YNc(2, ci, 3, 3, 'ng-container', 20),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngLet;
          e.Q6J('ngSwitch', a.min !== a.max),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1),
            e.xp6(2),
            e.Oqu(e.lcZ(5, 4, 'offers.details.profit_daily'));
        }
      }
      function pi(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.details.strategy.1')));
      }
      function ui(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.details.strategy.2')));
      }
      function mi(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.details.strategy.3')));
      }
      function gi(t, n) {
        if (
          (1 & t &&
            (e.O4$(),
            e.kcU(),
            e.TgZ(0, 'div', 30)(1, 'div', 31)(2, 'h3'),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'p'),
            e._uU(6),
            e.ALo(7, 'number'),
            e.ALo(8, 'number'),
            e.qZA()(),
            e.TgZ(9, 'div', 31)(10, 'h3'),
            e._uU(11),
            e.ALo(12, 'translate'),
            e.qZA(),
            e.TgZ(13, 'p'),
            e._uU(14),
            e.ALo(15, 'async'),
            e.ALo(16, 'declension'),
            e.qZA()(),
            e.TgZ(17, 'div', 32)(18, 'h3'),
            e._uU(19),
            e.ALo(20, 'translate'),
            e.qZA(),
            e.YNc(21, pi, 3, 3, 'p', 20),
            e.YNc(22, ui, 3, 3, 'p', 20),
            e.YNc(23, mi, 3, 3, 'p', 20),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngLet,
            i = e.oxw().ngLet,
            o = e.oxw();
          e.xp6(3),
            e.Oqu(e.lcZ(4, 12, 'offers.details.amount')),
            e.xp6(3),
            e.HOy(
              '',
              e.xi3(7, 14, a.min, '0.0-6'),
              ' ',
              i,
              ' - ',
              e.xi3(8, 17, a.max, '0.0-6'),
              ' ',
              i,
              ''
            ),
            e.xp6(5),
            e.Oqu(e.lcZ(12, 20, 'offers.details.term')),
            e.xp6(3),
            e.Oqu(e.lcZ(15, 22, e.Dn7(16, 24, o.offer.term, 'days', !0))),
            e.xp6(3),
            e.Q6J('ngSwitch', o.offer.group.id),
            e.xp6(2),
            e.Oqu(e.lcZ(20, 28, 'offers.details.strategy.0')),
            e.xp6(2),
            e.Q6J('ngSwitchCase', 1),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 2),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 3);
        }
      }
      function _i(t, n) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, 'h3'),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA(),
          e.TgZ(4, 'p'),
          e._uU(5),
          e.ALo(6, 'translate'),
          e.qZA(),
          e.BQk()),
          2 & t &&
            (e.xp6(2),
            e.Oqu(e.lcZ(3, 2, 'offers.details.return.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(6, 4, 'offers.details.return.2')));
      }
      function fi(t, n) {
        1 & t &&
          (e.ynx(0),
          e.TgZ(1, 'h3'),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA(),
          e.TgZ(4, 'p'),
          e._uU(5),
          e.ALo(6, 'translate'),
          e.qZA(),
          e.BQk()),
          2 & t &&
            (e.xp6(2),
            e.Oqu(e.lcZ(3, 2, 'offers.details.return.3')),
            e.xp6(3),
            e.Oqu(e.lcZ(6, 4, 'offers.details.return.4')));
      }
      function Zi(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 33),
            e.YNc(1, _i, 7, 6, 'ng-container', 20),
            e.YNc(2, fi, 7, 6, 'ng-container', 20),
            e.O4$(),
            e.TgZ(3, 'svg'),
            e._UZ(4, 'use', 34),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.ngLet;
          e.ekj('active', a),
            e.Q6J('ngSwitch', a),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1);
        }
      }
      function vi(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t &&
            (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.details.withdrawal.2')));
      }
      function hi(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t &&
            (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.details.withdrawal.1')));
      }
      function Ai(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 35)(1, 'div', 36)(2, 'h3'),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'p'),
            e._uU(6),
            e.ALo(7, 'number'),
            e.qZA()(),
            e.TgZ(8, 'div', 36)(9, 'h3'),
            e._uU(10),
            e.ALo(11, 'translate'),
            e.qZA(),
            e.TgZ(12, 'p'),
            e._uU(13),
            e.ALo(14, 'number'),
            e.qZA()(),
            e.TgZ(15, 'div', 36)(16, 'h3'),
            e._uU(17),
            e.ALo(18, 'translate'),
            e.qZA(),
            e.TgZ(19, 'p'),
            e._uU(20),
            e.ALo(21, 'number'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = e.oxw(2);
          e.xp6(3),
            e.Oqu(e.lcZ(4, 6, 'offers.details.profit.0')),
            e.xp6(3),
            e.hij('~', e.lcZ(7, 8, a.calc.weekly), '%'),
            e.xp6(4),
            e.Oqu(e.lcZ(11, 10, 'offers.details.profit.1')),
            e.xp6(3),
            e.hij('~', e.lcZ(14, 12, a.calc.monthly), '%'),
            e.xp6(4),
            e.Oqu(e.lcZ(18, 14, 'offers.details.profit.2')),
            e.xp6(3),
            e.hij('~', e.lcZ(21, 16, a.calc.total), '%');
        }
      }
      const Ti = function (t, n) {
        return { plan_id: t, curr: n };
      };
      function xi(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 1)(1, 'div', 2)(2, 'div', 3),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.close());
            }),
            e.O4$(),
            e.TgZ(3, 'svg'),
            e._UZ(4, 'use', 4),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, 'div', 5)(6, 'div', 6)(7, 'div', 7),
            e.O4$(),
            e.TgZ(8, 'svg'),
            e._UZ(9, 'use', 8),
            e.qZA(),
            e.kcU(),
            e.TgZ(10, 'select', 9),
            e.NdJ('onChange', function (o) {
              e.CHM(a);
              const s = e.oxw();
              return e.KtG(s.setOffer(o));
            }),
            e.YNc(11, ri, 2, 2, 'option', 10),
            e.qZA()(),
            e.TgZ(12, 'p'),
            e._uU(13),
            e.ALo(14, 'translate'),
            e.qZA()(),
            e.TgZ(15, 'div', 11)(16, 'h3'),
            e._uU(17),
            e.ALo(18, 'translate'),
            e.qZA(),
            e.TgZ(19, 'p'),
            e._uU(20),
            e.ALo(21, 'translate'),
            e.qZA(),
            e.TgZ(22, 'a', 12),
            e.NdJ('click', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.showCalc());
            }),
            e.O4$(),
            e.TgZ(23, 'svg'),
            e._UZ(24, 'use', 13),
            e.qZA()()()(),
            e.YNc(25, di, 6, 6, 'div', 14),
            e.YNc(26, gi, 24, 30, 'div', 15),
            e.kcU(),
            e.TgZ(27, 'div', 16),
            e._uU(28),
            e.ALo(29, 'translate'),
            e.qZA(),
            e.YNc(30, Zi, 5, 5, 'div', 17),
            e.TgZ(31, 'div', 18)(32, 'div', 19)(33, 'h3'),
            e._uU(34),
            e.ALo(35, 'translate'),
            e.qZA(),
            e.TgZ(36, 'p'),
            e._uU(37),
            e.ALo(38, 'translate'),
            e.qZA()(),
            e.TgZ(39, 'div', 19)(40, 'h3'),
            e._uU(41),
            e.ALo(42, 'translate'),
            e.qZA(),
            e.YNc(43, vi, 3, 3, 'p', 20),
            e.YNc(44, hi, 3, 3, 'p', 21),
            e.qZA()(),
            e.YNc(45, Ai, 22, 18, 'div', 22),
            e.TgZ(46, 'div', 23)(47, 'div', 24),
            e.O4$(),
            e.TgZ(48, 'svg'),
            e._UZ(49, 'use', 25),
            e.qZA()(),
            e.kcU(),
            e.TgZ(50, 'h3'),
            e._uU(51),
            e.ALo(52, 'translate'),
            e.qZA()(),
            e.TgZ(53, 'div', 26)(54, 'a', 27),
            e._uU(55),
            e.ALo(56, 'translate'),
            e.qZA()()()();
        }
        if (2 & t) {
          const a = e.oxw();
          e.xp6(10),
            e.Q6J('formControl', a.offerCtrl),
            e.xp6(1),
            e.Q6J('ngForOf', a.offers),
            e.xp6(2),
            e.Oqu(e.lcZ(14, 18, 'offers.details.plan')),
            e.xp6(4),
            e.Oqu(e.lcZ(18, 20, 'offers.table.4')),
            e.xp6(3),
            e.Oqu(e.lcZ(21, 22, 'offers.table.5')),
            e.xp6(5),
            e.Q6J('ngLet', a.offer.interest),
            e.xp6(1),
            e.Q6J('ngLet', a.amounts),
            e.xp6(2),
            e.hij(' ', e.lcZ(29, 24, 'offers.details.return.0'), ' '),
            e.xp6(2),
            e.Q6J('ngLet', a.offer.flag[2]),
            e.xp6(1),
            e.Q6J('ngSwitch', a.offer.group.id),
            e.xp6(3),
            e.Oqu(e.lcZ(35, 26, 'offers.details.charges.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(38, 28, 'offers.details.charges.1')),
            e.xp6(4),
            e.Oqu(e.lcZ(42, 30, 'offers.details.withdrawal.0')),
            e.xp6(2),
            e.Q6J('ngSwitchCase', 3),
            e.xp6(2),
            e.Q6J('ngLet', a.calc),
            e.xp6(6),
            e.Oqu(e.lcZ(52, 32, 'offers.details.hint')),
            e.xp6(3),
            e.Q6J('queryParams', e.WLB(36, Ti, a.offer.id, a.currCode)),
            e.xp6(1),
            e.hij(' ', e.lcZ(56, 34, 'offers.details.btn'), ' ');
        }
      }
      let qi = (() => {
        class t {
          constructor() {
            (this.currCode = 'usd'),
              (this.offerCtrl = new m.NI(1)),
              (this.modalService = (0, e.f3M)(Be.Z)),
              (this.queryParamsService = (0, e.f3M)(ca));
          }
          get amounts() {
            return {
              min: Number(this.offer.min[this.currCode] ?? 0),
              max: Number(this.offer.max[this.currCode] ?? 0),
            };
          }
          get calc() {
            const a = this.offer.interest.avg,
              o = 30 * a,
              s = a * this.offer.term;
            return {
              weekly: (0, ae.dN)(5 * a, 3),
              monthly: (0, ae.dN)(o, 3),
              total: (0, ae.dN)(s, 3),
            };
          }
          ngOnInit() {
            (this.offers = [...this._payload.offers]),
              this.setOffer(this._payload.offer_id),
              (this.currCode = this._payload.curr.toLowerCase());
          }
          close() {
            this.modalService.hide(), this.queryParamsService.unset();
          }
          setOffer(a) {
            (a = Number(a)),
              (!this.offer || this.offer.id !== a) &&
                ((this.offer = this.findOfferById(a)),
                this.offerCtrl.setValue(this.offer.id),
                this.queryParamsService.set({ details: this.offer.id }));
          }
          showCalc() {
            this.modalService.show(da, {
              offers: this.offers,
              offer_id: this.offer.id,
              curr: this.currCode,
            });
          }
          findOfferById(a) {
            return this.offers.find((i) => i.id === a) || this.offers[0];
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            hostBindings: function (a, i) {
              1 & a &&
                e.NdJ(
                  'keydown.escape',
                  function () {
                    return i.close();
                  },
                  !1,
                  e.evT
                );
            },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'cab-modal modal_plan active', 4, 'ngLet'],
              [1, 'cab-modal', 'modal_plan', 'active'],
              [1, 'modal-wrap'],
              [1, 'modal-close', 3, 'click'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#close-2'],
              [1, 'modal-title', 'modal-title_row'],
              [1, 'modal-title__text'],
              [1, 'modal-title__select'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
              ['styler', '', 3, 'formControl', 'onChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'invest-table__calc'],
              [
                'href',
                'javascript:void(0)',
                1,
                'invest-table__calc-icon',
                3,
                'click',
              ],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#calc'],
              ['class', 'modal-plan__percent', 3, 'ngSwitch', 4, 'ngLet'],
              ['class', 'modal-plan__stat', 4, 'ngLet'],
              [1, 'modal-plan__title'],
              [
                'class',
                'modal-plan__return',
                3,
                'active',
                'ngSwitch',
                4,
                'ngLet',
              ],
              [1, 'modal-plan__info', 3, 'ngSwitch'],
              [1, 'modal-plan__info-item'],
              [4, 'ngSwitchCase'],
              [4, 'ngSwitchDefault'],
              ['class', 'modal-plan__list', 4, 'ngLet'],
              [1, 'sign-url'],
              [1, 'sign-url__icon'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#warning'],
              [1, 'modal-btn'],
              [
                'routerLink',
                '/account/deposits/create',
                1,
                'm-btn',
                3,
                'queryParams',
              ],
              [3, 'value'],
              [1, 'modal-plan__percent', 3, 'ngSwitch'],
              [1, 'modal-plan__stat'],
              [1, 'modal-plan__stat-item'],
              [1, 'modal-plan__stat-item', 3, 'ngSwitch'],
              [1, 'modal-plan__return', 3, 'ngSwitch'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#check'],
              [1, 'modal-plan__list'],
              [1, 'modal-plan__list-item'],
            ],
            template: function (a, i) {
              1 & a && e.YNc(0, xi, 57, 39, 'div', 0),
                2 & a && e.Q6J('ngLet', i.currCode.toUpperCase());
            },
            dependencies: [
              r.sg,
              r.RF,
              r.n9,
              r.ED,
              x.rH,
              m.YN,
              m.Kr,
              m.EJ,
              m.JJ,
              m.oH,
              M.h,
              Pt,
              r.Ov,
              r.JJ,
              k.X$,
              ft.V,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var yi = T(5356);
      let Zt = (() => {
        class t {}
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-faq-ver2']],
            decls: 14,
            vars: 12,
            consts: [
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'faq-box',
                'faq-box_btns',
              ],
              [1, 'faq-box__content'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'm-text'],
              [3, 'innerHTML'],
              [1, 'faq-box__btns'],
              ['routerLink', '/faq', 1, 'faq-box__btn', 'faq-box__btn_black'],
              ['routerLink', '/contacts', 1, 'faq-box__btn'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e._UZ(2, 'div', 2),
                e.ALo(3, 'translate'),
                e.TgZ(4, 'div', 3),
                e._UZ(5, 'p', 4),
                e.ALo(6, 'translate'),
                e.qZA()(),
                e.TgZ(7, 'div', 5)(8, 'a', 6),
                e._uU(9),
                e.ALo(10, 'translate'),
                e.qZA(),
                e.TgZ(11, 'a', 7),
                e._uU(12),
                e.ALo(13, 'translate'),
                e.qZA()()()),
                2 & a &&
                  (e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(3, 4, 'legal.faq.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(6, 6, 'legal.faq.1'), e.oJD),
                  e.xp6(4),
                  e.Oqu(e.lcZ(10, 8, 'legal.faq.2')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(13, 10, 'legal.faq.3')));
            },
            dependencies: [x.rH, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var Li = T(1303);
      const Ui = ['swiperRef'];
      function bi(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 14),
            e.NdJ('click', function () {
              const s = e.CHM(a).$implicit,
                Z = e.oxw();
              return e.KtG(Z.setOffer(s));
            }),
            e._uU(1),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 15),
            e.qZA()();
        }
        if (2 & t) {
          const a = n.$implicit,
            i = e.oxw();
          e.ekj('active', i.offer && i.offer.id === a.id),
            e.xp6(1),
            e.hij(' ', a.name, ' ');
        }
      }
      const wi = function (t) {
        return { 'height.%': t };
      };
      function Oi(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 23)(1, 'div', 24)(2, 'div', 25),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, 'div', 26)(5, 'div', 27),
            e._UZ(6, 'div', 28),
            e.qZA()(),
            e.ynx(7),
            e.TgZ(8, 'div', 29),
            e._uU(9),
            e.ALo(10, 'date'),
            e.qZA(),
            e.BQk(),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.hij('', a.rate, '%'),
            e.xp6(2),
            e.Q6J('ngStyle', e.VKq(6, wi, a.progress)),
            e.xp6(4),
            e.Oqu(e.xi3(10, 3, a.date, 'd MMM'));
        }
      }
      function Ci(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 16)(1, 'div', 17),
            e.O4$(),
            e.TgZ(2, 'svg'),
            e._UZ(3, 'use', 15),
            e.qZA()(),
            e.kcU(),
            e.TgZ(4, 'div', 18),
            e.O4$(),
            e.TgZ(5, 'svg'),
            e._UZ(6, 'use', 15),
            e.qZA()(),
            e.kcU(),
            e.TgZ(7, 'div', 19, 20)(9, 'div', 21),
            e.YNc(10, Oi, 11, 8, 'div', 22),
            e.qZA()()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(7),
            e.Q6J('swiper', a.swiperParams),
            e.xp6(3),
            e.Q6J('ngForOf', a.rates);
        }
      }
      function ki(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 30)(1, 'p'),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA()()),
          2 & t && (e.xp6(2), e.Oqu(e.lcZ(3, 1, 'offers.chart.6')));
      }
      let Ji = (() => {
        class t {
          constructor(a, i, o) {
            (this.cdr = a),
              (this.facadeService = i),
              (this.storage = o),
              (this.swiperParams = {
                loop: !1,
                slidesPerView: 5,
                spaceBetween: 0,
                navigation: {
                  nextEl: '.invest-plans .swiper-button-next',
                  prevEl: '.invest-plans .swiper-button-prev',
                },
                speed: 300,
                breakpoints: { 767: { slidesPerView: 10 } },
                initialSlide: 999,
              }),
              (this.offers = []),
              (this.type = 'daily'),
              (this.rates = []),
              (this.ready = !0),
              (this.type = this.getStorageType());
          }
          ngOnInit() {
            this.offers = this.offers.filter((i) => i.id <= 8);
            const a = this.getStorageOffer();
            this.setOffer(a);
          }
          setOffer(a) {
            (this.offer && this.offer.id === a.id) || this.getRates(a);
          }
          setType(a) {
            this.type !== a && ((this.type = a), this.getRates(this.offer));
          }
          getRates(a) {
            this.ready &&
              ((this.ready = !1),
              this.facadeService.getOfferRates(a.id, this.type).subscribe({
                error: () => this.onFormComplete(),
                complete: () => this.onFormComplete(),
                next: (i) => {
                  (this.offer = a),
                    (this.rates = i),
                    this.cdr.markForCheck(),
                    this.storage.set({
                      facadeOfferRatePlan: a.id,
                      facadeOfferRateType: this.type,
                    });
                },
              }));
          }
          onFormComplete() {
            (this.ready = !0), this.cdr.markForCheck();
          }
          getStorageType() {
            const a = this.storage.get('facadeOfferRateType', 'daily');
            return (0, ae.d3)(a, ['daily', 'weekly']) ? a : 'daily';
          }
          getStorageOffer() {
            const a = this.storage.get('facadeOfferRatePlan', null);
            return (
              (a && this.offers.find((i) => i.id === Number(a))) ||
              this.offers[0]
            );
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(e.sBO), e.Y36(ue.e), e.Y36(Li.V));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-offer-chart']],
            viewQuery: function (a, i) {
              if ((1 & a && e.Gf(Ui, 5, we.T), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.swiper = o.first);
              }
            },
            inputs: { offers: 'offers' },
            decls: 26,
            vars: 22,
            consts: [
              [1, 'invest-plans'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'invest-plans__icon',
              ],
              [
                'src',
                'assets/img/invest-plans-icon.png',
                'loading',
                'lazy',
                'alt',
                '',
              ],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_center',
              ],
              [3, 'innerHTML'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'invest-plans__title',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'invest-period__wrap',
              ],
              [1, 'invest-plans__tabs'],
              [
                'class',
                'invest-plans__tabs-item',
                3,
                'active',
                'click',
                4,
                'ngFor',
                'ngForOf',
              ],
              [
                'class',
                'invest-plans__slider',
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                4,
                'ngIf',
                'ngIfElse',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'invest-period',
              ],
              [1, 'invest-period__item', 3, 'click'],
              ['loading', ''],
              [1, 'invest-plans__tabs-item', 3, 'click'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'invest-plans__slider',
              ],
              [1, 'swiper-button-prev'],
              [1, 'swiper-button-next'],
              [1, 'swiper', 3, 'swiper'],
              ['swiperRef', ''],
              [1, 'swiper-wrapper'],
              ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
              [1, 'swiper-slide'],
              [1, 'invest-plan'],
              [1, 'invest-plan__percent'],
              [1, 'invest-plan__bar'],
              [1, 'invest-plan__bar-line', 3, 'ngStyle'],
              [1, 'invest-plan__bar-icon'],
              [1, 'invest-plan__date'],
              [
                'data-aos',
                'fade-in',
                'data-aos-delay',
                '0',
                1,
                'd-flex',
                'align-items-center',
                'justify-content-center',
                2,
                'height',
                '308px',
              ],
            ],
            template: function (a, i) {
              if (
                (1 & a &&
                  (e.TgZ(0, 'div', 0)(1, 'div', 1),
                  e._UZ(2, 'img', 2),
                  e.qZA(),
                  e._UZ(3, 'div', 3),
                  e.ALo(4, 'translate'),
                  e.TgZ(5, 'div', 4),
                  e._UZ(6, 'p', 5),
                  e.ALo(7, 'translate'),
                  e.qZA(),
                  e.TgZ(8, 'div', 6),
                  e._uU(9),
                  e.ALo(10, 'translate'),
                  e.qZA(),
                  e.TgZ(11, 'div', 7)(12, 'div', 8),
                  e.YNc(13, bi, 4, 3, 'div', 9),
                  e.qZA(),
                  e.YNc(14, Ci, 11, 2, 'div', 10),
                  e.qZA(),
                  e.TgZ(15, 'div', 11)(16, 'div', 12),
                  e.NdJ('click', function () {
                    return i.setType('daily');
                  }),
                  e.TgZ(17, 'span'),
                  e._uU(18),
                  e.ALo(19, 'translate'),
                  e.qZA()(),
                  e.TgZ(20, 'div', 12),
                  e.NdJ('click', function () {
                    return i.setType('weekly');
                  }),
                  e.TgZ(21, 'span'),
                  e._uU(22),
                  e.ALo(23, 'translate'),
                  e.qZA()()()(),
                  e.YNc(24, ki, 4, 3, 'ng-template', null, 13, e.W1O)),
                2 & a)
              ) {
                const o = e.MAs(25);
                e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(4, 12, 'offers.chart.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(7, 14, 'offers.chart.1'), e.oJD),
                  e.xp6(3),
                  e.Oqu(e.lcZ(10, 16, 'offers.chart.2')),
                  e.xp6(4),
                  e.Q6J('ngForOf', i.offers),
                  e.xp6(1),
                  e.Q6J('ngIf', i.ready)('ngIfElse', o),
                  e.xp6(2),
                  e.ekj('active', 'daily' === i.type),
                  e.xp6(2),
                  e.Oqu(e.lcZ(19, 18, 'offers.chart.4')),
                  e.xp6(2),
                  e.ekj('active', 'weekly' === i.type),
                  e.xp6(2),
                  e.Oqu(e.lcZ(23, 20, 'offers.chart.5'));
              }
            },
            dependencies: [r.sg, r.O5, r.PC, we.T, r.uU, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      const Fi = ['currStylerRef'];
      function Mi(t, n) {
        if ((1 & t && (e.TgZ(0, 'option', 103), e._uU(1), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.Q6J('ngClass', a.code)('value', a.code),
            e.uIk('data-text', a.name),
            e.xp6(1),
            e.hij(' ', a.code, ' ');
        }
      }
      const Nt = function (t) {
        return { $implicit: t };
      };
      function Qi(t, n) {
        if ((1 & t && (e.TgZ(0, 'div', 104), e.GkF(1, 105), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(303);
          e.xp6(1),
            e.Q6J('ngTemplateOutlet', i)(
              'ngTemplateOutletContext',
              e.VKq(2, Nt, a)
            );
        }
      }
      function Hi(t, n) {
        if ((1 & t && (e.TgZ(0, 'div', 104), e.GkF(1, 105), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(303);
          e.xp6(1),
            e.Q6J('ngTemplateOutlet', i)(
              'ngTemplateOutletContext',
              e.VKq(2, Nt, a)
            );
        }
      }
      function Di(t, n) {
        if ((1 & t && (e.TgZ(0, 'div', 104), e.GkF(1, 105), e.qZA()), 2 & t)) {
          const a = n.$implicit;
          e.oxw();
          const i = e.MAs(303);
          e.xp6(1),
            e.Q6J('ngTemplateOutlet', i)(
              'ngTemplateOutletContext',
              e.VKq(2, Nt, a)
            );
        }
      }
      function Si(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 106)(1, 'div', 107),
          e._UZ(2, 'img', 108)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 109),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'offers.steps.6'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'offers.steps.7')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'offers.steps.8')));
      }
      function Pi(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 110)(1, 'div', 107),
          e._UZ(2, 'img', 111)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 112),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'offers.steps.9'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'offers.steps.10')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'offers.steps.11')));
      }
      function Ni(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 113)(1, 'div', 107),
          e._UZ(2, 'img', 114)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 115),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'offers.steps.12'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'offers.steps.13')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'offers.steps.14')));
      }
      function Yi(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 116)(1, 'div', 107),
          e._UZ(2, 'img', 117)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 118),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'offers.steps.15'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'offers.steps.16')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'offers.steps.17')));
      }
      function Ii(t, n) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'div', 130)(2, 'p'),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'span'),
            e._uU(6),
            e.ALo(7, 'number'),
            e.TgZ(8, 'sub'),
            e._uU(9),
            e.ALo(10, 'translate'),
            e.qZA()()(),
            e.TgZ(11, 'div', 130)(12, 'p'),
            e._uU(13),
            e.ALo(14, 'translate'),
            e.qZA(),
            e.TgZ(15, 'span'),
            e._uU(16),
            e.ALo(17, 'number'),
            e.TgZ(18, 'sub'),
            e._uU(19),
            e.ALo(20, 'translate'),
            e.qZA()()(),
            e.BQk()),
          2 & t)
        ) {
          const a = e.oxw().ngLet;
          e.xp6(3),
            e.Oqu(e.lcZ(4, 6, 'offers.table.18')),
            e.xp6(3),
            e.hij('', e.lcZ(7, 8, a.min), '% '),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 10, 'offers.table.20')),
            e.xp6(4),
            e.Oqu(e.lcZ(14, 12, 'offers.table.19')),
            e.xp6(3),
            e.hij('', e.lcZ(17, 14, a.max), '% '),
            e.xp6(3),
            e.Oqu(e.lcZ(20, 16, 'offers.table.20'));
        }
      }
      function $i(t, n) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'div', 130)(2, 'p'),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA(),
            e.TgZ(5, 'span'),
            e._uU(6),
            e.ALo(7, 'number'),
            e.TgZ(8, 'sub'),
            e._uU(9),
            e.ALo(10, 'translate'),
            e.qZA()()(),
            e.BQk()),
          2 & t)
        ) {
          const a = e.oxw().ngLet;
          e.xp6(3),
            e.Oqu(e.lcZ(4, 3, 'offers.table.17')),
            e.xp6(3),
            e.hij('', e.lcZ(7, 5, a.max), '% '),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'offers.table.20'));
        }
      }
      function ji(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 128),
            e.YNc(1, Ii, 21, 18, 'ng-container', 129),
            e.YNc(2, $i, 11, 9, 'ng-container', 129),
            e.qZA()),
          2 & t)
        ) {
          const a = n.ngLet;
          e.Q6J('ngSwitch', a.min !== a.max),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1);
        }
      }
      function Ri(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 131), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.table.21')));
      }
      function zi(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 52)(1, 'div', 124),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'div', 132)(5, 'div', 130)(6, 'p'),
            e._uU(7),
            e.ALo(8, 'translate'),
            e.qZA(),
            e.TgZ(9, 'span', 133),
            e._uU(10),
            e.ALo(11, 'number'),
            e.qZA()(),
            e.TgZ(12, 'div', 130)(13, 'p'),
            e._uU(14),
            e.ALo(15, 'translate'),
            e.qZA(),
            e.TgZ(16, 'span', 133),
            e._uU(17),
            e.ALo(18, 'number'),
            e.qZA()()()()),
          2 & t)
        ) {
          const a = n.ngLet,
            i = e.oxw().$implicit;
          e.xp6(2),
            e.Oqu(e.lcZ(3, 7, 'offers.table.8')),
            e.xp6(5),
            e.Oqu(e.lcZ(8, 9, 'offers.table.22')),
            e.xp6(3),
            e.AsE('', e.xi3(11, 11, i.min[a], '0.0-6'), ' ', a, ''),
            e.xp6(4),
            e.Oqu(e.lcZ(15, 14, 'offers.table.23')),
            e.xp6(3),
            e.AsE('', e.xi3(18, 16, i.max[a], '0.0-6'), ' ', a, '');
        }
      }
      function Xi(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.table.9')));
      }
      function Ei(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.table.11')));
      }
      function Bi(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'offers.table.13')));
      }
      function Gi(t, n) {
        1 & t && (e.O4$(), e._UZ(0, 'use', 139));
      }
      function Vi(t, n) {
        1 & t && (e.O4$(), e._UZ(0, 'use', 140));
      }
      function Wi(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 52)(1, 'div', 134),
            e.YNc(2, Xi, 3, 3, 'ng-container', 129),
            e.YNc(3, Ei, 3, 3, 'ng-container', 129),
            e.YNc(4, Bi, 3, 3, 'ng-container', 129),
            e.qZA(),
            e.TgZ(5, 'div', 135),
            e.O4$(),
            e.TgZ(6, 'svg', 136),
            e.YNc(7, Gi, 1, 0, 'use', 137),
            e.YNc(8, Vi, 1, 0, 'use', 138),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = n.index;
          e.xp6(1),
            e.Q6J('ngSwitch', i),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 1),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 2),
            e.xp6(1),
            e.ekj('invest-table__check_gray', !a),
            e.xp6(1),
            e.Q6J('ngSwitch', a),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1);
        }
      }
      const Ki = function (t, n) {
          return { plan_id: t, curr: n };
        },
        eo = function () {
          return [3, 6, 9];
        };
      function to(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 47)(1, 'a', 119),
            e.NdJ('click', function () {
              const s = e.CHM(a).$implicit,
                Z = e.oxw();
              return e.KtG(Z.showDetails(s));
            }),
            e.TgZ(2, 'span'),
            e._uU(3, '?'),
            e.qZA(),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA(),
            e.TgZ(6, 'a', 120),
            e._uU(7),
            e.ALo(8, 'translate'),
            e.qZA()(),
            e.TgZ(9, 'div', 48)(10, 'div', 121),
            e._uU(11),
            e.qZA(),
            e.YNc(12, ji, 3, 3, 'div', 122),
            e.YNc(13, Ri, 3, 3, 'div', 123),
            e.ALo(14, 'inArray'),
            e.qZA(),
            e.TgZ(15, 'div', 51)(16, 'div', 52)(17, 'div', 124),
            e._uU(18),
            e.ALo(19, 'translate'),
            e.qZA(),
            e.TgZ(20, 'div', 125)(21, 'span'),
            e._uU(22),
            e.ALo(23, 'number'),
            e.qZA(),
            e.TgZ(24, 'p'),
            e._uU(25),
            e.ALo(26, 'async'),
            e.ALo(27, 'declension'),
            e.qZA()()(),
            e.YNc(28, zi, 19, 19, 'div', 126),
            e.YNc(29, Wi, 9, 9, 'div', 127),
            e.ALo(30, 'slice'),
            e.qZA();
        }
        if (2 & t) {
          const a = n.$implicit,
            i = e.oxw();
          e.xp6(4),
            e.hij(' ', e.lcZ(5, 11, 'offers.table.15'), ' '),
            e.xp6(2),
            e.Q6J('queryParams', e.WLB(32, Ki, a.id, i.currency.code)),
            e.xp6(1),
            e.hij(' ', e.lcZ(8, 13, 'offers.table.16'), ' '),
            e.xp6(4),
            e.Oqu(a.name),
            e.xp6(1),
            e.Q6J('ngLet', a.interest),
            e.xp6(1),
            e.Q6J('ngIf', e.xi3(14, 15, a.id, e.DdM(35, eo))),
            e.xp6(5),
            e.Oqu(e.lcZ(19, 18, 'offers.table.7')),
            e.xp6(4),
            e.Oqu(e.xi3(23, 20, a.term, '0.0')),
            e.xp6(3),
            e.Oqu(e.lcZ(26, 23, e.xi3(27, 25, a.term, 'days'))),
            e.xp6(3),
            e.Q6J('ngLet', i.currency.code.toLowerCase()),
            e.xp6(1),
            e.Q6J('ngForOf', e.Dn7(30, 28, a.flag, 0, 3));
        }
      }
      let ao = (() => {
          class t {
            constructor(a, i, o) {
              (this.app = a),
                (this.route = i),
                (this.cdr = o),
                (this.modalService = (0, e.f3M)(Be.Z)),
                (this.urlParams = new URLSearchParams(window.location.search)),
                (this.stylerParams = {
                  selectSearch: !0,
                  selectSearchPlaceholder: 'Search',
                  selectSearchNotFound: 'Nothing found',
                  onFormStyled: () => this.dressUpStyler(!0),
                  onSelectClosed: () => this.dressUpStyler(!1),
                }),
                (this.currCtrl = new m.NI('', { nonNullable: !0 })),
                (this.stepTab = 1),
                (this.offers = i.snapshot.data.offers),
                (this.currencies = a.currencies),
                (this.currency = a.currency),
                this.currCtrl.setValue(this.currency.code);
            }
            ngOnInit() {
              this.initUrlParams();
            }
            setCurrency(a) {
              this.currency =
                this.currencies.find((i) => i.code === a) || this.currencies[0];
            }
            setStepTab(a) {
              this.stepTab !== a &&
                ((this.stepTab = a), this.cdr.markForCheck());
            }
            showCalc(a = 1) {
              this.modalService.show(da, {
                offers: this.offers,
                offer_id: a,
                curr: this.currency.code,
              });
            }
            showDetails(a) {
              this.modalService.show(qi, {
                offers: this.offers,
                offer_id: a.id,
                curr: this.currency.code,
              });
            }
            showEcosystem() {
              this.modalService.show(yi.I);
            }
            dressUpStyler(a = !1) {
              this.currStyler &&
                setTimeout(() => {
                  const i = this.currStyler.nativeElement.parentNode,
                    o = i.querySelector('.jq-selectbox__select-text');
                  o && (o.innerHTML = `<span>${this.currency.name}</span>`),
                    a &&
                      i
                        .querySelectorAll('.jq-selectbox__dropdown li')
                        .forEach((Z) => {
                          Z.innerHTML =
                            Z.innerText +
                            '<span>' +
                            (Z.dataset.text || 'Unnamed') +
                            '</span>';
                        });
                }, 15);
            }
            initUrlParams() {
              if (this.urlParams.has('calc')) {
                const a = parseInt(this.urlParams.get('calc') || '1');
                isNaN(a) || this.showCalc(a);
              } else if (this.urlParams.has('details')) {
                const a = parseInt(this.urlParams.get('details') || '1');
                if (!isNaN(a)) {
                  const i = this.offers.find((o) => o.id === a);
                  i && this.showDetails(i);
                }
              }
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(U.z), e.Y36(x.gz), e.Y36(e.sBO));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              viewQuery: function (a, i) {
                if ((1 & a && e.Gf(Fi, 5), 2 & a)) {
                  let o;
                  e.iGM((o = e.CRH())) && (i.currStyler = o.first);
                }
              },
              decls: 304,
              vars: 196,
              consts: [
                [1, 'invest-top'],
                [1, 'container'],
                [1, 'row'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-6',
                ],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'm-text', 'm-text_xl'],
                [3, 'innerHTML'],
                [
                  'routerLink',
                  '/account/deposit/create',
                  1,
                  'm-btn',
                  'm-btn_mb',
                  'm-btn_xl',
                ],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'invest-img__1'],
                ['src', 'assets/img/invest-img-1.png', 'alt', ''],
                [1, 'invest-top__wrap'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  'm-title_center',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-text',
                  'm-text_xl',
                  'm-text_center',
                ],
                [1, 'col-12'],
                [1, 'invest-info'],
                [1, 'invest-info-icons'],
                [1, 'invest-info-icon'],
                ['src', 'assets/img/usd-2.svg', 'alt', ''],
                [1, 'invest-info-eq'],
                ['src', 'assets/img/usdt-2.svg', 'alt', ''],
                ['src', 'assets/img/usdc-2.svg', 'alt', ''],
                ['src', 'assets/img/busd-2.svg', 'alt', ''],
                ['src', 'assets/img/dai-2.svg', 'alt', ''],
                ['src', 'assets/img/tusd-2.svg', 'alt', ''],
                ['src', 'assets/img/usdp-2.svg', 'alt', ''],
                [1, 'invest-info-text'],
                [1, 'invest-info-more'],
                ['href', 'javascript:void(0)', 3, 'click'],
                [1, 'col-xl-12', 'col-md-6'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'invest-select',
                ],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
                [
                  1,
                  'sel-text',
                  'sel-search',
                  3,
                  'formControl',
                  'styler',
                  'onChange',
                ],
                ['currStylerRef', ''],
                [3, 'ngClass', 'value', 4, 'ngFor', 'ngForOf'],
                [1, 'invest-select__tooltip', 'tooltip', 'tooltip_mob-right'],
                [1, 'invest-select__tooltip-icon'],
                ['src', 'assets/img/tooltip-icon.svg', 'alt', ''],
                [1, 'tooltip-wrap'],
                [1, 'tooltip-text'],
                [1, 'col-xl-12', 'col-md-6', 'd-block', 'd-xl-none'],
                [1, 'invest-table__calc'],
                [
                  'href',
                  'javascript:void(0)',
                  1,
                  'invest-table__calc-icon',
                  3,
                  'click',
                ],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#calc'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'invest-table__wrap',
                ],
                [1, 'invest-table'],
                [1, 'invest-table__side'],
                [1, 'invest-table__btns'],
                [1, 'invest-table__head'],
                [
                  'href',
                  'javascript:void(0)',
                  1,
                  'popup',
                  'invest-table__calc-icon',
                  3,
                  'click',
                ],
                [1, 'invest-table__side-line'],
                [1, 'invest-table__content'],
                [1, 'invest-table__row'],
                [1, 'invest-table__title'],
                [1, 'tooltip', 'ml-1'],
                [1, 'tooltip-icon'],
                [1, 'invest-table__list'],
                [1, 'invest-table__group'],
                ['class', 'invest-table__item', 4, 'ngFor', 'ngForOf'],
                [1, 'invest-table__group', 'invest-table__group_2'],
                [1, 'invest-table__group', 'invest-table__group_3'],
                [1, 'invest-center'],
                [1, 'invest-center__wrap'],
                [3, 'offers'],
                [1, 'invest-steps__wrap'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-text',
                  'm-text_xl',
                ],
                [1, 'row', 'd-flex', 'align-items-center'],
                [1, 'invest-steps__tabs'],
                [
                  'data-tabs-btn',
                  '1',
                  1,
                  'invest-steps__tabs-item',
                  3,
                  'click',
                ],
                [
                  'data-tabs-btn',
                  '2',
                  1,
                  'invest-steps__tabs-item',
                  3,
                  'click',
                ],
                [
                  'data-tabs-btn',
                  '3',
                  1,
                  'invest-steps__tabs-item',
                  3,
                  'click',
                ],
                [
                  'data-tabs-btn',
                  '4',
                  1,
                  'invest-steps__tabs-item',
                  3,
                  'click',
                ],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'invest-steps__content'],
                ['class', 'invest-steps__item invest-steps__item_1', 4, 'ngIf'],
                ['class', 'invest-steps__item invest-steps__item_2', 4, 'ngIf'],
                ['class', 'invest-steps__item invest-steps__item_3', 4, 'ngIf'],
                ['class', 'invest-steps__item invest-steps__item_4', 4, 'ngIf'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'invest-why'],
                [1, 'invest-why__top'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '400',
                  1,
                  'invest-why__subtitle',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '600',
                  1,
                  'invest-why__title',
                  3,
                  'innerHTML',
                ],
                [1, 'invest-why__list'],
                [1, 'invest-why__item'],
                [1, 'invest-why__bot'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'invest-why__bot-text',
                ],
                [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
                [1, 'm-text', 'm-text_white', 'm-text_xl'],
                [
                  'routerLink',
                  'https://ovaxglobal.com/?ref=837371457',
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '400',
                  1,
                  'm-btn',
                  'm-btn_white',
                ],
                [1, 'invest-bot'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'career-list',
                ],
                [1, 'career-list__item'],
                [1, 'career-list__head'],
                [1, 'career-list__text'],
                [1, 'sign-url'],
                [1, 'sign-url__icon'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#warning'],
                [1, 'row', 'invest-row__1'],
                ['routerLink', '/referral-program', 1, 'm-btn', 'm-btn_mb'],
                [1, 'invest-img__2'],
                [
                  'src',
                  'assets/img/invest-img-2.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                ['planColumn', ''],
                [3, 'ngClass', 'value'],
                [1, 'invest-table__item'],
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
                [1, 'invest-steps__item', 'invest-steps__item_1'],
                [1, 'invest-steps__head'],
                ['src', 'assets/img/invest-steps-icon-1.svg', 'alt', ''],
                [
                  'routerLink',
                  'https://ovaxglobal.com/?ref=837371457',
                  1,
                  'm-btn',
                ],
                [1, 'invest-steps__item', 'invest-steps__item_2'],
                ['src', 'assets/img/invest-steps-icon-2.svg', 'alt', ''],
                ['routerLink', '/account/finances/refill', 1, 'm-btn'],
                [1, 'invest-steps__item', 'invest-steps__item_3'],
                ['src', 'assets/img/invest-steps-icon-3.svg', 'alt', ''],
                ['routerLink', '/account/deposits/create', 1, 'm-btn'],
                [1, 'invest-steps__item', 'invest-steps__item_4'],
                ['src', 'assets/img/invest-steps-icon-4.svg', 'alt', ''],
                ['routerLink', '/account/finances/withdrawal', 1, 'm-btn'],
                [
                  'href',
                  'javascript:void(0)',
                  1,
                  'invest-table__btn',
                  3,
                  'click',
                ],
                [
                  'routerLink',
                  '/account/deposits/create',
                  1,
                  'invest-table__btn',
                  'invest-table__btn_green',
                  3,
                  'queryParams',
                ],
                [1, 'invest-table__name'],
                ['class', 'invest-table__val', 3, 'ngSwitch', 4, 'ngLet'],
                ['class', 'invest-table__popular', 4, 'ngIf'],
                [1, 'title'],
                [1, 'invest-table__days'],
                ['class', 'invest-table__row', 4, 'ngLet'],
                ['class', 'invest-table__row', 4, 'ngFor', 'ngForOf'],
                [1, 'invest-table__val', 3, 'ngSwitch'],
                [4, 'ngSwitchCase'],
                [1, 'invest-table__val-text'],
                [1, 'invest-table__popular'],
                [1, 'invest-table__val'],
                [1, 'text-upper'],
                [1, 'title', 3, 'ngSwitch'],
                [1, 'invest-table__check'],
                [3, 'ngSwitch'],
                [
                  0,
                  'xlink',
                  'href',
                  'assets/img/sprite.svg#check',
                  4,
                  'ngSwitchCase',
                ],
                [
                  0,
                  'xlink',
                  'href',
                  'assets/img/sprite.svg#close',
                  4,
                  'ngSwitchCase',
                ],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#check'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#close'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  ),
                  e._UZ(4, 'div', 4),
                  e.ALo(5, 'translate'),
                  e.TgZ(6, 'div', 5),
                  e._UZ(7, 'p', 6),
                  e.ALo(8, 'translate'),
                  e._UZ(9, 'p', 6),
                  e.ALo(10, 'translate'),
                  e.qZA(),
                  e.TgZ(11, 'a', 7),
                  e._uU(12),
                  e.ALo(13, 'translate'),
                  e.qZA()(),
                  e.TgZ(14, 'div', 8)(15, 'div', 9),
                  e._UZ(16, 'img', 10),
                  e.qZA()()(),
                  e.TgZ(17, 'div', 11),
                  e._UZ(18, 'div', 12),
                  e.ALo(19, 'translate'),
                  e.TgZ(20, 'div', 13),
                  e._UZ(21, 'p', 6),
                  e.ALo(22, 'translate'),
                  e.qZA(),
                  e.TgZ(23, 'div', 2)(24, 'div', 14)(25, 'div', 15)(
                    26,
                    'div',
                    16
                  )(27, 'div', 17),
                  e._UZ(28, 'img', 18),
                  e.TgZ(29, 'span'),
                  e._uU(30, 'USD'),
                  e.qZA()(),
                  e.TgZ(31, 'div', 19),
                  e._uU(32, '='),
                  e.qZA(),
                  e.TgZ(33, 'div', 17),
                  e._UZ(34, 'img', 20),
                  e.TgZ(35, 'span'),
                  e._uU(36, 'USDT'),
                  e.qZA()(),
                  e.TgZ(37, 'div', 17),
                  e._UZ(38, 'img', 21),
                  e.TgZ(39, 'span'),
                  e._uU(40, 'USDC'),
                  e.qZA()(),
                  e.TgZ(41, 'div', 17),
                  e._UZ(42, 'img', 22),
                  e.TgZ(43, 'span'),
                  e._uU(44, 'BUSD'),
                  e.qZA()(),
                  e.TgZ(45, 'div', 17),
                  e._UZ(46, 'img', 23),
                  e.TgZ(47, 'span'),
                  e._uU(48, 'DAI'),
                  e.qZA()(),
                  e.TgZ(49, 'div', 17),
                  e._UZ(50, 'img', 24),
                  e.TgZ(51, 'span'),
                  e._uU(52, 'TUSD'),
                  e.qZA()(),
                  e.TgZ(53, 'div', 17),
                  e._UZ(54, 'img', 25),
                  e.TgZ(55, 'span'),
                  e._uU(56, 'USDP'),
                  e.qZA()()(),
                  e.TgZ(57, 'div', 26),
                  e._UZ(58, 'p', 6),
                  e.ALo(59, 'translate'),
                  e._UZ(60, 'p', 6),
                  e.ALo(61, 'translate'),
                  e.qZA(),
                  e.TgZ(62, 'div', 27)(63, 'p')(64, 'a', 28),
                  e.NdJ('click', function () {
                    return i.showEcosystem();
                  }),
                  e._uU(65),
                  e.ALo(66, 'translate'),
                  e.qZA(),
                  e._uU(67),
                  e.ALo(68, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(69, 'div', 29)(70, 'div', 30)(71, 'p'),
                  e._uU(72),
                  e.ALo(73, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(74, 'svg'),
                  e._UZ(75, 'use', 31),
                  e.qZA(),
                  e.kcU(),
                  e.TgZ(76, 'select', 32, 33),
                  e.NdJ('onChange', function (s) {
                    return i.setCurrency(s);
                  }),
                  e.YNc(78, Mi, 2, 4, 'option', 34),
                  e.qZA(),
                  e.TgZ(79, 'div', 35)(80, 'div', 36),
                  e._UZ(81, 'img', 37),
                  e.qZA(),
                  e.TgZ(82, 'div', 38)(83, 'div', 39),
                  e._uU(84),
                  e.ALo(85, 'translate'),
                  e.qZA()()()()(),
                  e.TgZ(86, 'div', 40)(87, 'div', 41)(88, 'h3'),
                  e._uU(89),
                  e.ALo(90, 'translate'),
                  e.qZA(),
                  e.TgZ(91, 'p'),
                  e._uU(92),
                  e.ALo(93, 'translate'),
                  e.qZA(),
                  e.TgZ(94, 'a', 42),
                  e.NdJ('click', function () {
                    return i.showCalc();
                  }),
                  e.O4$(),
                  e.TgZ(95, 'svg'),
                  e._UZ(96, 'use', 43),
                  e.qZA()()()()()(),
                  e.kcU(),
                  e.TgZ(97, 'div', 44)(98, 'div', 45)(99, 'div', 46),
                  e._UZ(100, 'div', 47),
                  e.TgZ(101, 'div', 48)(102, 'div', 41)(103, 'h3'),
                  e._uU(104),
                  e.ALo(105, 'translate'),
                  e.qZA(),
                  e.TgZ(106, 'p'),
                  e._uU(107),
                  e.ALo(108, 'translate'),
                  e.qZA(),
                  e.TgZ(109, 'a', 49),
                  e.NdJ('click', function () {
                    return i.showCalc();
                  }),
                  e.O4$(),
                  e.TgZ(110, 'svg'),
                  e._UZ(111, 'use', 43),
                  e.qZA()()(),
                  e.kcU(),
                  e.TgZ(112, 'div', 50),
                  e._uU(113),
                  e.ALo(114, 'translate'),
                  e.qZA()(),
                  e.TgZ(115, 'div', 51)(116, 'div', 52)(117, 'div', 53)(
                    118,
                    'span'
                  ),
                  e._uU(119),
                  e.ALo(120, 'translate'),
                  e.qZA()()(),
                  e.TgZ(121, 'div', 52)(122, 'div', 53)(123, 'span'),
                  e._uU(124),
                  e.ALo(125, 'translate'),
                  e.qZA()()(),
                  e.TgZ(126, 'div', 52)(127, 'div', 53)(128, 'span'),
                  e._uU(129),
                  e.ALo(130, 'translate'),
                  e.qZA(),
                  e.TgZ(131, 'div', 54)(132, 'div', 38)(133, 'div', 39),
                  e._uU(134),
                  e.ALo(135, 'translate'),
                  e.qZA()(),
                  e.TgZ(136, 'div', 55),
                  e._UZ(137, 'img', 37),
                  e.qZA()()()(),
                  e.TgZ(138, 'div', 52)(139, 'div', 53)(140, 'span'),
                  e._uU(141),
                  e.ALo(142, 'translate'),
                  e.qZA(),
                  e.TgZ(143, 'div', 54)(144, 'div', 38)(145, 'div', 39),
                  e._uU(146),
                  e.ALo(147, 'translate'),
                  e.qZA()(),
                  e.TgZ(148, 'div', 55),
                  e._UZ(149, 'img', 37),
                  e.qZA()()()(),
                  e.TgZ(150, 'div', 52)(151, 'div', 53)(152, 'span'),
                  e._uU(153),
                  e.ALo(154, 'translate'),
                  e.qZA(),
                  e.TgZ(155, 'div', 54)(156, 'div', 38)(157, 'div', 39),
                  e._uU(158),
                  e.ALo(159, 'translate'),
                  e.qZA()(),
                  e.TgZ(160, 'div', 55),
                  e._UZ(161, 'img', 37),
                  e.qZA()()()()()(),
                  e.TgZ(162, 'div', 56)(163, 'div', 57),
                  e.YNc(164, Qi, 2, 4, 'div', 58),
                  e.ALo(165, 'slice'),
                  e.qZA(),
                  e.TgZ(166, 'div', 59),
                  e.YNc(167, Hi, 2, 4, 'div', 58),
                  e.ALo(168, 'slice'),
                  e.qZA(),
                  e.TgZ(169, 'div', 60),
                  e.YNc(170, Di, 2, 4, 'div', 58),
                  e.ALo(171, 'slice'),
                  e.qZA()()()()()(),
                  e.TgZ(172, 'section', 61)(173, 'div', 62)(174, 'div', 1),
                  e._UZ(175, 'facade-offer-chart', 63),
                  e.TgZ(176, 'div', 64),
                  e._UZ(177, 'div', 65),
                  e.ALo(178, 'translate'),
                  e.TgZ(179, 'div', 66),
                  e._UZ(180, 'p', 6),
                  e.ALo(181, 'translate'),
                  e.qZA(),
                  e.TgZ(182, 'div', 67)(183, 'div', 3)(184, 'div', 68)(
                    185,
                    'div',
                    69
                  ),
                  e.NdJ('click', function () {
                    return i.setStepTab(1);
                  }),
                  e._uU(186),
                  e.ALo(187, 'translate'),
                  e.O4$(),
                  e.TgZ(188, 'svg'),
                  e._UZ(189, 'use', 31),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(190, 'div', 70),
                  e.NdJ('click', function () {
                    return i.setStepTab(2);
                  }),
                  e._uU(191),
                  e.ALo(192, 'translate'),
                  e.O4$(),
                  e.TgZ(193, 'svg'),
                  e._UZ(194, 'use', 31),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(195, 'div', 71),
                  e.NdJ('click', function () {
                    return i.setStepTab(3);
                  }),
                  e._uU(196),
                  e.ALo(197, 'translate'),
                  e.O4$(),
                  e.TgZ(198, 'svg'),
                  e._UZ(199, 'use', 31),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(200, 'div', 72),
                  e.NdJ('click', function () {
                    return i.setStepTab(4);
                  }),
                  e._uU(201),
                  e.ALo(202, 'translate'),
                  e.O4$(),
                  e.TgZ(203, 'svg'),
                  e._UZ(204, 'use', 31),
                  e.qZA()()()(),
                  e.kcU(),
                  e.TgZ(205, 'div', 73)(206, 'div', 74),
                  e.YNc(207, Si, 11, 9, 'div', 75),
                  e.YNc(208, Pi, 11, 9, 'div', 76),
                  e.YNc(209, Ni, 11, 9, 'div', 77),
                  e.YNc(210, Yi, 11, 9, 'div', 78),
                  e.qZA()()()(),
                  e.TgZ(211, 'div', 79)(212, 'div', 80),
                  e._UZ(213, 'div', 81),
                  e.ALo(214, 'translate'),
                  e._UZ(215, 'div', 82),
                  e.ALo(216, 'translate'),
                  e.TgZ(217, 'div', 83)(218, 'div', 84),
                  e._uU(219),
                  e.ALo(220, 'translate'),
                  e.qZA(),
                  e.TgZ(221, 'div', 84),
                  e._uU(222),
                  e.ALo(223, 'translate'),
                  e.qZA(),
                  e.TgZ(224, 'div', 84),
                  e._uU(225),
                  e.ALo(226, 'translate'),
                  e.qZA(),
                  e.TgZ(227, 'div', 84),
                  e._uU(228),
                  e.ALo(229, 'translate'),
                  e.qZA(),
                  e.TgZ(230, 'div', 84),
                  e._uU(231),
                  e.ALo(232, 'translate'),
                  e.qZA()()(),
                  e.TgZ(233, 'div', 85)(234, 'div', 86),
                  e._UZ(235, 'div', 87),
                  e.ALo(236, 'translate'),
                  e.TgZ(237, 'div', 88),
                  e._UZ(238, 'p', 6),
                  e.ALo(239, 'translate'),
                  e.qZA()(),
                  e.TgZ(240, 'a', 89),
                  e._uU(241),
                  e.ALo(242, 'translate'),
                  e.qZA()()()()()(),
                  e.TgZ(243, 'section', 90)(244, 'div', 1),
                  e._UZ(245, 'div', 65),
                  e.ALo(246, 'translate'),
                  e.TgZ(247, 'div', 91)(248, 'div', 92)(249, 'div', 93),
                  e._uU(250),
                  e.ALo(251, 'translate'),
                  e.qZA(),
                  e.TgZ(252, 'div', 94),
                  e._UZ(253, 'p', 6),
                  e.ALo(254, 'translate'),
                  e.qZA()(),
                  e.TgZ(255, 'div', 92)(256, 'div', 93),
                  e._uU(257),
                  e.ALo(258, 'translate'),
                  e.qZA(),
                  e.TgZ(259, 'div', 94),
                  e._UZ(260, 'p', 6),
                  e.ALo(261, 'translate'),
                  e.TgZ(262, 'div', 95)(263, 'div', 96),
                  e.O4$(),
                  e.TgZ(264, 'svg'),
                  e._UZ(265, 'use', 97),
                  e.qZA()(),
                  e.kcU(),
                  e._UZ(266, 'h3', 6),
                  e.ALo(267, 'translate'),
                  e.qZA()()(),
                  e.TgZ(268, 'div', 92)(269, 'div', 93),
                  e._uU(270),
                  e.ALo(271, 'translate'),
                  e.qZA(),
                  e.TgZ(272, 'div', 94),
                  e._UZ(273, 'p', 6),
                  e.ALo(274, 'translate'),
                  e.TgZ(275, 'div', 95)(276, 'div', 96),
                  e.O4$(),
                  e.TgZ(277, 'svg'),
                  e._UZ(278, 'use', 97),
                  e.qZA()(),
                  e.kcU(),
                  e._UZ(279, 'h3', 6),
                  e.ALo(280, 'translate'),
                  e.qZA()()(),
                  e.TgZ(281, 'div', 92)(282, 'div', 93),
                  e._uU(283),
                  e.ALo(284, 'translate'),
                  e.qZA(),
                  e.TgZ(285, 'div', 94),
                  e._UZ(286, 'p', 6),
                  e.ALo(287, 'translate'),
                  e.qZA()()(),
                  e.TgZ(288, 'div', 98)(289, 'div', 3),
                  e._UZ(290, 'div', 4),
                  e.ALo(291, 'translate'),
                  e.TgZ(292, 'div', 5),
                  e._UZ(293, 'p', 6),
                  e.ALo(294, 'translate'),
                  e.qZA(),
                  e.TgZ(295, 'a', 99),
                  e._uU(296),
                  e.ALo(297, 'translate'),
                  e.qZA()(),
                  e.TgZ(298, 'div', 8)(299, 'div', 100),
                  e._UZ(300, 'img', 101),
                  e.qZA()()(),
                  e._UZ(301, 'facade-faq-ver2'),
                  e.qZA()(),
                  e.YNc(302, to, 31, 36, 'ng-template', null, 102, e.W1O)),
                  2 & a &&
                    (e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(5, 74, 'offers.intro.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(8, 76, 'offers.intro.1'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(10, 78, 'offers.intro.2'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(13, 80, 'offers.intro.3')),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(19, 82, 'offers.table.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(22, 84, 'offers.table.1'), e.oJD),
                    e.xp6(37),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(59, 86, 'offers.ecosystem.0'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(61, 88, 'offers.ecosystem.1'),
                      e.oJD
                    ),
                    e.xp6(5),
                    e.Oqu(e.lcZ(66, 90, 'offers.ecosystem.2')),
                    e.xp6(2),
                    e.hij(' ', e.lcZ(68, 92, 'offers.ecosystem.3'), ' '),
                    e.xp6(5),
                    e.Oqu(e.lcZ(73, 94, 'offers.table.2')),
                    e.xp6(4),
                    e.Q6J('formControl', i.currCtrl)('styler', i.stylerParams),
                    e.xp6(2),
                    e.Q6J('ngForOf', i.currencies),
                    e.xp6(6),
                    e.Oqu(e.lcZ(85, 96, 'offers.table.3')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(90, 98, 'offers.table.4')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(93, 100, 'offers.table.5')),
                    e.xp6(12),
                    e.Oqu(e.lcZ(105, 102, 'offers.table.4')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(108, 104, 'offers.table.5')),
                    e.xp6(6),
                    e.Oqu(e.lcZ(114, 106, 'offers.table.6')),
                    e.xp6(6),
                    e.Oqu(e.lcZ(120, 108, 'offers.table.7')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(125, 110, 'offers.table.8')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(130, 112, 'offers.table.9')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(135, 114, 'offers.table.10')),
                    e.xp6(7),
                    e.Oqu(e.lcZ(142, 116, 'offers.table.11')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(147, 118, 'offers.table.12')),
                    e.xp6(7),
                    e.Oqu(e.lcZ(154, 120, 'offers.table.13')),
                    e.xp6(5),
                    e.Oqu(e.lcZ(159, 122, 'offers.table.14')),
                    e.xp6(6),
                    e.Q6J('ngForOf', e.Dn7(165, 124, i.offers, 0, 5)),
                    e.xp6(3),
                    e.Q6J('ngForOf', e.Dn7(168, 128, i.offers, 5, 8)),
                    e.xp6(3),
                    e.Q6J('ngForOf', e.Dn7(171, 132, i.offers, 8, 10)),
                    e.xp6(5),
                    e.Q6J('offers', i.offers),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(178, 136, 'offers.steps.0'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(181, 138, 'offers.steps.1'),
                      e.oJD
                    ),
                    e.xp6(5),
                    e.ekj('active', 1 === i.stepTab),
                    e.xp6(1),
                    e.hij(' ', e.lcZ(187, 140, 'offers.steps.2'), ' '),
                    e.xp6(4),
                    e.ekj('active', 2 === i.stepTab),
                    e.xp6(1),
                    e.hij(' ', e.lcZ(192, 142, 'offers.steps.3'), ' '),
                    e.xp6(4),
                    e.ekj('active', 3 === i.stepTab),
                    e.xp6(1),
                    e.hij(' ', e.lcZ(197, 144, 'offers.steps.4'), ' '),
                    e.xp6(4),
                    e.ekj('active', 4 === i.stepTab),
                    e.xp6(1),
                    e.hij(' ', e.lcZ(202, 146, 'offers.steps.5'), ' '),
                    e.xp6(6),
                    e.Q6J('ngIf', 1 === i.stepTab),
                    e.xp6(1),
                    e.Q6J('ngIf', 2 === i.stepTab),
                    e.xp6(1),
                    e.Q6J('ngIf', 3 === i.stepTab),
                    e.xp6(1),
                    e.Q6J('ngIf', 4 === i.stepTab),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(214, 148, 'offers.benefits.0'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(216, 150, 'offers.benefits.1'),
                      e.oJD
                    ),
                    e.xp6(4),
                    e.Oqu(e.lcZ(220, 152, 'offers.benefits.2')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(223, 154, 'offers.benefits.3')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(226, 156, 'offers.benefits.4')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(229, 158, 'offers.benefits.5')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(232, 160, 'offers.benefits.6')),
                    e.xp6(4),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(236, 162, 'offers.benefits.7'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(239, 164, 'offers.benefits.8'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Oqu(e.lcZ(242, 166, 'offers.benefits.9')),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(246, 168, 'offers.faq.0'), e.oJD),
                    e.xp6(5),
                    e.Oqu(e.lcZ(251, 170, 'offers.faq.1')),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(254, 172, 'offers.faq.2'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(258, 174, 'offers.faq.3')),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(261, 176, 'offers.faq.4'), e.oJD),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(267, 178, 'offers.faq.5'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(271, 180, 'offers.faq.6')),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(274, 182, 'offers.faq.7'), e.oJD),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(280, 184, 'offers.faq.8'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(284, 186, 'offers.faq.9')),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(287, 188, 'offers.faq.10'), e.oJD),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(291, 190, 'offers.more.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(294, 192, 'offers.more.1'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(297, 194, 'offers.more.2')));
              },
              dependencies: [
                r.mk,
                r.sg,
                r.O5,
                r.tP,
                r.RF,
                r.n9,
                x.rH,
                m.YN,
                m.Kr,
                m.EJ,
                m.JJ,
                m.oH,
                M.h,
                Pt,
                Zt,
                Ji,
                r.Ov,
                r.OU,
                r.JJ,
                k.X$,
                Ie.m,
                ft.V,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        no = (() => {
          class t {
            constructor(a) {
              (this.app = a), (this.links = a.company.links);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(U.z));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 105,
              vars: 63,
              consts: [
                [1, 'info'],
                [1, 'container'],
                [1, 'row'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-7',
                ],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'm-text', 'm-text_xl'],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-5'],
                [1, 'info-img'],
                ['src', 'assets/img/info-img-1.png', 'alt', ''],
                [1, 'info-list'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '200',
                  1,
                  'info-item',
                ],
                ['src', 'assets/img/info-map-1.svg', 'alt', ''],
                [1, 'col-lg-5'],
                ['data-num', '01', 1, 'info-item__img'],
                ['src', 'assets/img/info-cert-1.png', 'alt', ''],
                [1, 'col-lg-7'],
                [1, 'info-item__flag'],
                ['src', 'assets/img/info-flag-1.png', 'alt', ''],
                [1, 'info-item__text'],
                [3, 'innerHTML'],
                [1, 'info-item__btns'],
                [
                  'target',
                  '_blank',
                  'href',
                  '/docs/Ovax_Global_Limited_Company_Documents_(NZ).pdf',
                  1,
                  'm-btn',
                  'm-btn_gray',
                ],
                ['target', '_blank', 1, 'm-link', 3, 'href'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '400',
                  1,
                  'info-item',
                ],
                ['src', 'assets/img/info-map-2.svg', 'alt', ''],
                ['data-num', '02', 1, 'info-item__img'],
                ['src', 'assets/img/info-cert-2.png', 'alt', ''],
                ['src', 'assets/img/info-flag-2.png', 'alt', ''],
                [
                  'target',
                  '_blank',
                  'href',
                  '/docs/Ovax_Global_Limited_Company_Documents_(UK).pdf',
                  1,
                  'm-btn',
                  'm-btn_gray',
                ],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '600',
                  1,
                  'info-item',
                ],
                ['src', 'assets/img/info-map-3.svg', 'alt', ''],
                ['data-num', '03', 1, 'info-item__img'],
                ['src', 'assets/img/info-cert-3.png', 'alt', ''],
                ['src', 'assets/img/info-flag-3.png', 'alt', ''],
                [
                  'target',
                  '_blank',
                  'href',
                  '/docs/Ovax_Global_Limited_Company_Documents_(HK).pdf',
                  1,
                  'm-btn',
                  'm-btn_gray',
                ],
                ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'info-bot'],
                [1, 'info-bot__wrap'],
                [1, 'info-bot__title', 3, 'innerHTML'],
                [1, 'info-bot__text'],
                ['src', 'assets/img/info-bot-icon.svg', 'alt', ''],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  ),
                  e._UZ(4, 'div', 4),
                  e.ALo(5, 'translate'),
                  e.TgZ(6, 'div', 5)(7, 'p'),
                  e._uU(8),
                  e.ALo(9, 'translate'),
                  e.qZA(),
                  e.TgZ(10, 'p'),
                  e._uU(11),
                  e.ALo(12, 'translate'),
                  e.qZA()()(),
                  e.TgZ(13, 'div', 6)(14, 'div', 7),
                  e._UZ(15, 'img', 8),
                  e.qZA()()(),
                  e.TgZ(16, 'div', 9)(17, 'div', 10),
                  e._UZ(18, 'img', 11),
                  e.TgZ(19, 'div', 2)(20, 'div', 12)(21, 'div', 13),
                  e._UZ(22, 'img', 14),
                  e.qZA()(),
                  e.TgZ(23, 'div', 15)(24, 'div', 16),
                  e._uU(25),
                  e.ALo(26, 'translate'),
                  e._UZ(27, 'img', 17),
                  e.qZA(),
                  e.TgZ(28, 'div', 18),
                  e._UZ(29, 'h3', 19),
                  e.ALo(30, 'translate'),
                  e._UZ(31, 'p', 19),
                  e.ALo(32, 'translate'),
                  e.qZA(),
                  e.TgZ(33, 'div', 20)(34, 'a', 21),
                  e._uU(35),
                  e.ALo(36, 'translate'),
                  e.qZA(),
                  e.TgZ(37, 'a', 22)(38, 'span'),
                  e._uU(39),
                  e.ALo(40, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(41, 'svg'),
                  e._UZ(42, 'use', 23),
                  e.qZA()()()()()(),
                  e.kcU(),
                  e.TgZ(43, 'div', 24),
                  e._UZ(44, 'img', 25),
                  e.TgZ(45, 'div', 2)(46, 'div', 12)(47, 'div', 26),
                  e._UZ(48, 'img', 27),
                  e.qZA()(),
                  e.TgZ(49, 'div', 15)(50, 'div', 16),
                  e._uU(51),
                  e.ALo(52, 'translate'),
                  e._UZ(53, 'img', 28),
                  e.qZA(),
                  e.TgZ(54, 'div', 18),
                  e._UZ(55, 'h3', 19),
                  e.ALo(56, 'translate'),
                  e._UZ(57, 'p', 19),
                  e.ALo(58, 'translate'),
                  e.qZA(),
                  e.TgZ(59, 'div', 20)(60, 'a', 29),
                  e._uU(61),
                  e.ALo(62, 'translate'),
                  e.qZA(),
                  e.TgZ(63, 'a', 22)(64, 'span'),
                  e._uU(65),
                  e.ALo(66, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(67, 'svg'),
                  e._UZ(68, 'use', 23),
                  e.qZA()()()()()(),
                  e.kcU(),
                  e.TgZ(69, 'div', 30),
                  e._UZ(70, 'img', 31),
                  e.TgZ(71, 'div', 2)(72, 'div', 12)(73, 'div', 32),
                  e._UZ(74, 'img', 33),
                  e.qZA()(),
                  e.TgZ(75, 'div', 15)(76, 'div', 16),
                  e._uU(77),
                  e.ALo(78, 'translate'),
                  e._UZ(79, 'img', 34),
                  e.qZA(),
                  e.TgZ(80, 'div', 18),
                  e._UZ(81, 'h3', 19),
                  e.ALo(82, 'translate'),
                  e._UZ(83, 'p', 19),
                  e.ALo(84, 'translate'),
                  e.qZA(),
                  e.TgZ(85, 'div', 20)(86, 'a', 35),
                  e._uU(87),
                  e.ALo(88, 'translate'),
                  e.qZA(),
                  e.TgZ(89, 'a', 22)(90, 'span'),
                  e._uU(91),
                  e.ALo(92, 'translate'),
                  e.qZA(),
                  e.O4$(),
                  e.TgZ(93, 'svg'),
                  e._UZ(94, 'use', 23),
                  e.qZA()()()()()()(),
                  e.kcU(),
                  e._UZ(95, 'facade-faq-ver2'),
                  e.qZA()(),
                  e.TgZ(96, 'section', 36)(97, 'div', 37)(98, 'div', 1),
                  e._UZ(99, 'div', 38),
                  e.ALo(100, 'translate'),
                  e.TgZ(101, 'div', 39),
                  e._UZ(102, 'img', 40)(103, 'p', 19),
                  e.ALo(104, 'translate'),
                  e.qZA()()()()),
                  2 & a &&
                    (e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(5, 23, 'legal.intro.0'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(9, 25, 'legal.intro.1')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(12, 27, 'legal.intro.2')),
                    e.xp6(14),
                    e.hij(' ', e.lcZ(26, 29, 'legal.docs.0'), ' '),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(30, 31, 'legal.docs.1'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(32, 33, 'legal.docs.2'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(36, 35, 'legal.docs.3')),
                    e.xp6(2),
                    e.Q6J('href', i.links[0] || '#', e.LSH),
                    e.xp6(2),
                    e.Oqu(e.lcZ(40, 37, 'legal.docs.4')),
                    e.xp6(12),
                    e.hij(' ', e.lcZ(52, 39, 'legal.docs.5'), ' '),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(56, 41, 'legal.docs.6'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(58, 43, 'legal.docs.7'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(62, 45, 'legal.docs.8')),
                    e.xp6(2),
                    e.Q6J('href', i.links[1] || '#', e.LSH),
                    e.xp6(2),
                    e.Oqu(e.lcZ(66, 47, 'legal.docs.9')),
                    e.xp6(12),
                    e.hij(' ', e.lcZ(78, 49, 'legal.docs.10'), ' '),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(82, 51, 'legal.docs.11'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(84, 53, 'legal.docs.12'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(88, 55, 'legal.docs.13')),
                    e.xp6(2),
                    e.Q6J('href', i.links[2] || '#', e.LSH),
                    e.xp6(2),
                    e.Oqu(e.lcZ(92, 57, 'legal.docs.14')),
                    e.xp6(8),
                    e.Q6J('innerHTML', e.lcZ(100, 59, 'legal.banner.0'), e.oJD),
                    e.xp6(4),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(104, 61, 'legal.banner.1'),
                      e.oJD
                    ));
              },
              dependencies: [Zt, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      function io(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 9)(1, 'div', 10), e._UZ(2, 'img', 11), e.qZA()());
      }
      function oo(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'home.join.0')));
      }
      function so(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'how.join.0')));
      }
      function ro(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'home.join.1')));
      }
      function lo(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'how.join.1')));
      }
      let Yt = (() => {
        class t {
          constructor() {
            (this.scene = !1),
              (this.type = 'outer'),
              (this.baseClass = null),
              (this.btnClass = null);
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-join-box']],
            inputs: {
              scene: 'scene',
              type: 'type',
              baseClass: 'baseClass',
              btnClass: 'btnClass',
            },
            decls: 11,
            vars: 6,
            consts: [
              [1, 'call-box', 3, 'ngClass', 'ngSwitch'],
              ['class', 'call-scene parallax-scene', 4, 'ngIf'],
              [1, 'call-logo'],
              ['src', 'assets/img/logo-icon.svg', 'alt', ''],
              [1, 'm-title', 'm-title_center', 'm-title_white'],
              [4, 'ngSwitchCase'],
              [4, 'ngSwitchDefault'],
              [1, 'm-text', 'm-text_center', 'm-text_white'],
              [3, 'btnClass'],
              [1, 'call-scene', 'parallax-scene'],
              ['data-depth', '0.1'],
              ['src', 'assets/img/call-scene.png', 'alt', ''],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0),
                e.YNc(1, io, 3, 0, 'div', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'img', 3),
                e.qZA(),
                e.TgZ(4, 'div', 4),
                e.YNc(5, oo, 3, 3, 'ng-container', 5),
                e.YNc(6, so, 3, 3, 'ng-container', 6),
                e.qZA(),
                e.TgZ(7, 'div', 7),
                e.YNc(8, ro, 3, 3, 'p', 5),
                e.YNc(9, lo, 3, 3, 'p', 6),
                e.qZA(),
                e._UZ(10, 'facade-join-form', 8),
                e.qZA()),
                2 & a &&
                  (e.Q6J('ngClass', i.baseClass)('ngSwitch', i.type),
                  e.xp6(1),
                  e.Q6J('ngIf', i.scene),
                  e.xp6(4),
                  e.Q6J('ngSwitchCase', 'home'),
                  e.xp6(3),
                  e.Q6J('ngSwitchCase', 'home'),
                  e.xp6(2),
                  e.Q6J('btnClass', i.btnClass));
            },
            dependencies: [r.mk, r.O5, r.RF, r.n9, r.ED, at, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function co(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 51)(1, 'div', 52)(2, 'div', 53),
            e._UZ(3, 'img', 54),
            e.qZA(),
            e.TgZ(4, 'div', 53),
            e._UZ(5, 'img', 55),
            e.qZA()(),
            e.TgZ(6, 'div', 56),
            e._UZ(7, 'img', 57),
            e.qZA(),
            e.TgZ(8, 'p'),
            e._uU(9),
            e.ALo(10, 'translate'),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.Q6J('ngClass', 'earn-assets__item_' + a),
            e.xp6(7),
            e.Q6J('src', 'assets/img/earn-assets-' + a + '.png', e.LSH),
            e.xp6(2),
            e.Oqu(e.lcZ(10, 3, 'how.schema.item.' + (a - 1)));
        }
      }
      const po = function () {
        return [1, 2, 3, 4, 5, 6, 7, 8];
      };
      let uo = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 148,
              vars: 123,
              consts: [
                [1, 'earn'],
                [1, 'container'],
                [1, 'row', 'earn-row-1'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-6',
                ],
                [1, 'm-title', 'm-title_xl', 3, 'innerHTML'],
                [1, 'earn-text-wrap'],
                [1, 'm-text', 'm-text_sm'],
                [3, 'innerHTML'],
                [
                  'routerLink',
                  '/about',
                  1,
                  'guide-item__btn',
                  'guide-item__btn_right',
                ],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'earn-text-top'],
                [1, 'm-text', 'm-text_xl'],
                [1, 'row', 'earn-row-2'],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'earn-text', 3, 'innerHTML'],
                ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'earn-list'],
                [
                  'data-num',
                  '01',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_1',
                ],
                [1, 'earn-list__img'],
                [
                  'src',
                  'assets/img/earn-list-1.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '02',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_2',
                ],
                [
                  'src',
                  'assets/img/earn-list-2.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '03',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_3',
                ],
                [
                  'src',
                  'assets/img/earn-list-3.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '04',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_4',
                ],
                [
                  'src',
                  'assets/img/earn-list-4.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '05',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_5',
                ],
                [
                  'src',
                  'assets/img/earn-list-5.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '06',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_6',
                ],
                [
                  'src',
                  'assets/img/earn-list-6.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '07',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_7',
                ],
                [
                  'src',
                  'assets/img/earn-list-7.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-num',
                  '08',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-list__item',
                  'earn-list__item_8',
                ],
                [
                  'src',
                  'assets/img/earn-list-8.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [1, 'earn-bg'],
                [1, 'row', 'd-flex', 'align-items-center'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-7',
                ],
                ['routerLink', '/about', 1, 'm-btn'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-5'],
                [1, 'earn-img'],
                [
                  'src',
                  'assets/img/earn-img.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  'm-title_center',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-text',
                  'm-text_xl',
                  'm-text_center',
                ],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'earn-assets__wrap',
                ],
                [1, 'earn-assets'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '600',
                  1,
                  'earn-assets__content',
                ],
                [
                  'src',
                  'assets/img/logo-full.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [1, 'earn-assets__info'],
                [1, 'green'],
                [
                  'class',
                  'earn-assets__item',
                  3,
                  'ngClass',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [3, 'scene'],
                [1, 'earn-assets__item', 3, 'ngClass'],
                [1, 'earn-assets__arrow'],
                [1, 'earn-assets__arrow-item'],
                [
                  'src',
                  'assets/img/earn-arrow-orange.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'src',
                  'assets/img/earn-arrow-green.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [1, 'earn-assets__item-img'],
                ['loading', 'lazy', 'alt', '', 3, 'src'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  ),
                  e._UZ(4, 'div', 4),
                  e.ALo(5, 'translate'),
                  e.TgZ(6, 'div', 5)(7, 'div', 6),
                  e._UZ(8, 'p', 7),
                  e.ALo(9, 'translate'),
                  e.qZA()(),
                  e.TgZ(10, 'a', 8),
                  e._uU(11),
                  e.ALo(12, 'translate'),
                  e.O4$(),
                  e.TgZ(13, 'svg'),
                  e._UZ(14, 'use', 9),
                  e.qZA()()(),
                  e.kcU(),
                  e.TgZ(15, 'div', 10)(16, 'div', 11)(17, 'div', 12),
                  e._UZ(18, 'p', 7),
                  e.ALo(19, 'translate'),
                  e._UZ(20, 'p', 7),
                  e.ALo(21, 'translate'),
                  e._UZ(22, 'p', 7),
                  e.ALo(23, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(24, 'div', 13)(25, 'div', 3),
                  e._UZ(26, 'div', 14),
                  e.ALo(27, 'translate'),
                  e.qZA(),
                  e.TgZ(28, 'div', 10),
                  e._UZ(29, 'div', 15),
                  e.ALo(30, 'translate'),
                  e.qZA()(),
                  e.TgZ(31, 'div', 16)(32, 'div', 17)(33, 'div', 18),
                  e._UZ(34, 'img', 19),
                  e.qZA(),
                  e.TgZ(35, 'h4'),
                  e._uU(36),
                  e.ALo(37, 'translate'),
                  e.qZA(),
                  e._UZ(38, 'h3', 7),
                  e.ALo(39, 'translate'),
                  e._UZ(40, 'p', 7),
                  e.ALo(41, 'translate'),
                  e.qZA(),
                  e.TgZ(42, 'div', 20)(43, 'div', 18),
                  e._UZ(44, 'img', 21),
                  e.qZA(),
                  e.TgZ(45, 'h4'),
                  e._uU(46),
                  e.ALo(47, 'translate'),
                  e.qZA(),
                  e._UZ(48, 'h3', 7),
                  e.ALo(49, 'translate'),
                  e._UZ(50, 'p', 7),
                  e.ALo(51, 'translate'),
                  e.qZA(),
                  e.TgZ(52, 'div', 22)(53, 'div', 18),
                  e._UZ(54, 'img', 23),
                  e.qZA(),
                  e.TgZ(55, 'h4'),
                  e._uU(56),
                  e.ALo(57, 'translate'),
                  e.qZA(),
                  e._UZ(58, 'h3', 7),
                  e.ALo(59, 'translate'),
                  e._UZ(60, 'p', 7),
                  e.ALo(61, 'translate'),
                  e.qZA(),
                  e.TgZ(62, 'div', 24)(63, 'div', 18),
                  e._UZ(64, 'img', 25),
                  e.qZA(),
                  e.TgZ(65, 'h4'),
                  e._uU(66),
                  e.ALo(67, 'translate'),
                  e.qZA(),
                  e._UZ(68, 'h3', 7),
                  e.ALo(69, 'translate'),
                  e._UZ(70, 'p', 7),
                  e.ALo(71, 'translate'),
                  e.qZA(),
                  e.TgZ(72, 'div', 26)(73, 'div', 18),
                  e._UZ(74, 'img', 27),
                  e.qZA(),
                  e.TgZ(75, 'h4'),
                  e._uU(76),
                  e.ALo(77, 'translate'),
                  e.qZA(),
                  e._UZ(78, 'h3', 7),
                  e.ALo(79, 'translate'),
                  e._UZ(80, 'p', 7),
                  e.ALo(81, 'translate'),
                  e.qZA(),
                  e.TgZ(82, 'div', 28)(83, 'div', 18),
                  e._UZ(84, 'img', 29),
                  e.qZA(),
                  e.TgZ(85, 'h4'),
                  e._uU(86),
                  e.ALo(87, 'translate'),
                  e.qZA(),
                  e._UZ(88, 'h3', 7),
                  e.ALo(89, 'translate'),
                  e._UZ(90, 'p', 7),
                  e.ALo(91, 'translate'),
                  e.qZA(),
                  e.TgZ(92, 'div', 30)(93, 'div', 18),
                  e._UZ(94, 'img', 31),
                  e.qZA(),
                  e.TgZ(95, 'h4'),
                  e._uU(96),
                  e.ALo(97, 'translate'),
                  e.qZA(),
                  e._UZ(98, 'h3', 7),
                  e.ALo(99, 'translate'),
                  e._UZ(100, 'p', 7),
                  e.ALo(101, 'translate'),
                  e.qZA(),
                  e.TgZ(102, 'div', 32)(103, 'div', 18),
                  e._UZ(104, 'img', 33),
                  e.qZA(),
                  e.TgZ(105, 'h4'),
                  e._uU(106),
                  e.ALo(107, 'translate'),
                  e.qZA(),
                  e._UZ(108, 'h3', 7),
                  e.ALo(109, 'translate'),
                  e._UZ(110, 'p', 7),
                  e.ALo(111, 'translate'),
                  e.qZA()()(),
                  e.TgZ(112, 'div', 34)(113, 'div', 1)(114, 'div', 35)(
                    115,
                    'div',
                    36
                  ),
                  e._UZ(116, 'div', 14),
                  e.ALo(117, 'translate'),
                  e.TgZ(118, 'div', 12),
                  e._UZ(119, 'p', 7),
                  e.ALo(120, 'translate'),
                  e._UZ(121, 'p', 7),
                  e.ALo(122, 'translate'),
                  e.qZA(),
                  e.TgZ(123, 'a', 37),
                  e._uU(124),
                  e.ALo(125, 'translate'),
                  e.qZA()(),
                  e.TgZ(126, 'div', 38)(127, 'div', 39),
                  e._UZ(128, 'img', 40),
                  e.qZA()()()()(),
                  e.TgZ(129, 'div', 1),
                  e._UZ(130, 'div', 41),
                  e.ALo(131, 'translate'),
                  e.TgZ(132, 'div', 42),
                  e._UZ(133, 'p', 7),
                  e.ALo(134, 'translate'),
                  e.qZA(),
                  e.TgZ(135, 'div', 43)(136, 'div', 44)(137, 'div', 45),
                  e._UZ(138, 'img', 46),
                  e.TgZ(139, 'div', 47)(140, 'p'),
                  e._uU(141),
                  e.ALo(142, 'translate'),
                  e.qZA(),
                  e.TgZ(143, 'p', 48),
                  e._uU(144),
                  e.ALo(145, 'translate'),
                  e.qZA()()(),
                  e.YNc(146, co, 11, 5, 'div', 49),
                  e.qZA()(),
                  e._UZ(147, 'facade-join-box', 50),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(5, 42, 'how.intro.0'), e.oJD),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(9, 44, 'how.intro.1'), e.oJD),
                    e.xp6(3),
                    e.hij(' ', e.lcZ(12, 46, 'how.intro.2'), ' '),
                    e.xp6(7),
                    e.Q6J('innerHTML', e.lcZ(19, 48, 'how.intro.3'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(21, 50, 'how.intro.4'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(23, 52, 'how.intro.5'), e.oJD),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(27, 54, 'how.sources.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(30, 56, 'how.sources.1'), e.oJD),
                    e.xp6(7),
                    e.Oqu(e.lcZ(37, 58, 'how.sources.2')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(39, 60, 'how.sources.3'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(41, 62, 'how.sources.4'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(47, 64, 'how.sources.5')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(49, 66, 'how.sources.6'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(51, 68, 'how.sources.7'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(57, 70, 'how.sources.8')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(59, 72, 'how.sources.9'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(61, 74, 'how.sources.10'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(67, 76, 'how.sources.11')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(69, 78, 'how.sources.12'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(71, 80, 'how.sources.13'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(77, 82, 'how.sources.14')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(79, 84, 'how.sources.15'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(81, 86, 'how.sources.16'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(87, 88, 'how.sources.17')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(89, 90, 'how.sources.18'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(91, 92, 'how.sources.19'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(97, 94, 'how.sources.20')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(99, 96, 'how.sources.21'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(101, 98, 'how.sources.22'), e.oJD),
                    e.xp6(6),
                    e.Oqu(e.lcZ(107, 100, 'how.sources.23')),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(109, 102, 'how.sources.24'),
                      e.oJD
                    ),
                    e.xp6(2),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(111, 104, 'how.sources.25'),
                      e.oJD
                    ),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(117, 106, 'how.goals.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(120, 108, 'how.goals.1'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(122, 110, 'how.goals.2'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(125, 112, 'how.goals.3')),
                    e.xp6(6),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(131, 114, 'how.schema.text.0'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(134, 116, 'how.schema.text.1'),
                      e.oJD
                    ),
                    e.xp6(8),
                    e.Oqu(e.lcZ(142, 118, 'how.schema.text.2')),
                    e.xp6(3),
                    e.Oqu(e.lcZ(145, 120, 'how.schema.text.3')),
                    e.xp6(2),
                    e.Q6J('ngForOf', e.DdM(122, po)),
                    e.xp6(1),
                    e.Q6J('scene', !1));
              },
              dependencies: [r.mk, r.sg, x.rH, Yt, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        mo = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 108,
              vars: 81,
              consts: [
                [1, 'guide-page'],
                [1, 'container'],
                [1, 'row'],
                [1, 'col-lg-6'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  3,
                  'innerHTML',
                ],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-sm-6'],
                [1, 'm-text', 'm-text_xl'],
                [3, 'innerHTML'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '200', 1, 'col-sm-6'],
                ['data-aos', 'zoom-in', 'data-aos-delay', '400', 1, 'col-lg-6'],
                [1, 'guide-page__percent'],
                ['src', 'assets/img/guide-page-percent.png', 'alt', ''],
                [1, 'guide-page__content'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  'm-title_center',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'fade-up',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-text',
                  'm-text_xl',
                  'm-text_center',
                ],
                [1, 'guide-page__list'],
                [1, 'guide-page__item'],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'guide-page__item-img',
                ],
                [
                  'src',
                  'assets/img/guide-img-1.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '0',
                  1,
                  'guide-page__item-content',
                ],
                ['routerLink', '/account/finances/refill', 1, 'm-btn'],
                [
                  'src',
                  'assets/img/guide-img-2.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'guide-page__item-content',
                ],
                ['routerLink', '/account/deposits/create', 1, 'm-btn'],
                [
                  'src',
                  'assets/img/guide-img-3.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                ['routerLink', '/account/history', 1, 'm-btn'],
                [
                  'src',
                  'assets/img/guide-check.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'src',
                  'assets/img/guide-img-4.png',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [
                  'routerLink',
                  '/account/finances/withdrawal',
                  1,
                  'm-btn',
                  'm-btn_white',
                ],
                [1, 'row', 'guide-income__row'],
                ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'guide-income', 'guide-income_1'],
                [
                  'src',
                  'assets/img/guide-income-1.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                [1, 'guide-income__text'],
                [1, 'm-title', 'm-title_center', 3, 'innerHTML'],
                [1, 'text-center'],
                ['routerLink', '/referral-program', 1, 'm-btn', 'm-btn_gray'],
                [1, 'guide-income', 'guide-income_2'],
                [
                  'src',
                  'assets/img/guide-income-2.svg',
                  'loading',
                  'lazy',
                  'alt',
                  '',
                ],
                ['routerLink', '/offers', 1, 'm-btn'],
                ['baseClass', 'call-box_red', 'btnClass', 'm-btn_white'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  ),
                  e._UZ(4, 'div', 4),
                  e.ALo(5, 'translate'),
                  e.TgZ(6, 'div', 2)(7, 'div', 5)(8, 'div', 6),
                  e._UZ(9, 'p', 7),
                  e.ALo(10, 'translate'),
                  e._UZ(11, 'p', 7),
                  e.ALo(12, 'translate'),
                  e.qZA()(),
                  e.TgZ(13, 'div', 8)(14, 'div', 6),
                  e._UZ(15, 'p', 7),
                  e.ALo(16, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(17, 'div', 9)(18, 'div', 10),
                  e._UZ(19, 'img', 11),
                  e.qZA()()()(),
                  e.TgZ(20, 'div', 12)(21, 'div', 1),
                  e._UZ(22, 'div', 13),
                  e.ALo(23, 'translate'),
                  e.TgZ(24, 'div', 14),
                  e._UZ(25, 'p', 7),
                  e.ALo(26, 'translate'),
                  e.qZA(),
                  e.TgZ(27, 'div', 15)(28, 'div', 16)(29, 'div', 17),
                  e._UZ(30, 'img', 18),
                  e.qZA(),
                  e.TgZ(31, 'div', 19),
                  e._UZ(32, 'h3', 7),
                  e.ALo(33, 'translate'),
                  e._UZ(34, 'p', 7),
                  e.ALo(35, 'translate'),
                  e.TgZ(36, 'a', 20),
                  e._uU(37),
                  e.ALo(38, 'translate'),
                  e.qZA()()(),
                  e.TgZ(39, 'div', 16)(40, 'div', 17),
                  e._UZ(41, 'img', 21),
                  e.qZA(),
                  e.TgZ(42, 'div', 22),
                  e._UZ(43, 'h3', 7),
                  e.ALo(44, 'translate'),
                  e._UZ(45, 'p', 7),
                  e.ALo(46, 'translate'),
                  e.TgZ(47, 'a', 23),
                  e._uU(48),
                  e.ALo(49, 'translate'),
                  e.qZA()()(),
                  e.TgZ(50, 'div', 16)(51, 'div', 17),
                  e._UZ(52, 'img', 24),
                  e.qZA(),
                  e.TgZ(53, 'div', 19),
                  e._UZ(54, 'h3', 7),
                  e.ALo(55, 'translate'),
                  e._UZ(56, 'p', 7),
                  e.ALo(57, 'translate'),
                  e.TgZ(58, 'a', 25),
                  e._uU(59),
                  e.ALo(60, 'translate'),
                  e.qZA()()(),
                  e.TgZ(61, 'div', 16),
                  e._UZ(62, 'img', 26),
                  e.TgZ(63, 'div', 17),
                  e._UZ(64, 'img', 27),
                  e.qZA(),
                  e.TgZ(65, 'div', 22),
                  e._UZ(66, 'h3', 7),
                  e.ALo(67, 'translate'),
                  e._UZ(68, 'p', 7),
                  e.ALo(69, 'translate'),
                  e.TgZ(70, 'a', 28),
                  e._uU(71),
                  e.ALo(72, 'translate'),
                  e.qZA()()()()()(),
                  e.TgZ(73, 'div', 1),
                  e._UZ(74, 'div', 13),
                  e.ALo(75, 'translate'),
                  e.TgZ(76, 'div', 29)(77, 'div', 30)(78, 'div', 31),
                  e._UZ(79, 'img', 32),
                  e.TgZ(80, 'div', 33)(81, 'h3'),
                  e._uU(82),
                  e.ALo(83, 'translate'),
                  e.qZA(),
                  e._UZ(84, 'p', 7),
                  e.ALo(85, 'translate'),
                  e.qZA(),
                  e._UZ(86, 'div', 34),
                  e.ALo(87, 'translate'),
                  e.qZA(),
                  e.TgZ(88, 'div', 35)(89, 'a', 36),
                  e._uU(90),
                  e.ALo(91, 'translate'),
                  e.qZA()()(),
                  e.TgZ(92, 'div', 30)(93, 'div', 37),
                  e._UZ(94, 'img', 38),
                  e.TgZ(95, 'div', 33)(96, 'h3'),
                  e._uU(97),
                  e.ALo(98, 'translate'),
                  e.qZA(),
                  e._UZ(99, 'p', 7),
                  e.ALo(100, 'translate'),
                  e.qZA(),
                  e._UZ(101, 'div', 34),
                  e.ALo(102, 'translate'),
                  e.qZA(),
                  e.TgZ(103, 'div', 35)(104, 'a', 39),
                  e._uU(105),
                  e.ALo(106, 'translate'),
                  e.qZA()()()(),
                  e._UZ(107, 'facade-join-box', 40),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(5, 27, 'start.intro.0'), e.oJD),
                    e.xp6(5),
                    e.Q6J('innerHTML', e.lcZ(10, 29, 'start.intro.1'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(12, 31, 'start.intro.2'), e.oJD),
                    e.xp6(4),
                    e.Q6J('innerHTML', e.lcZ(16, 33, 'start.intro.3'), e.oJD),
                    e.xp6(7),
                    e.Q6J('innerHTML', e.lcZ(23, 35, 'start.steps.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(26, 37, 'start.steps.1'), e.oJD),
                    e.xp6(7),
                    e.Q6J('innerHTML', e.lcZ(33, 39, 'start.steps.2'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(35, 41, 'start.steps.3'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(38, 43, 'start.steps.4')),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(44, 45, 'start.steps.5'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(46, 47, 'start.steps.6'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(49, 49, 'start.steps.7')),
                    e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(55, 51, 'start.steps.8'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(57, 53, 'start.steps.9'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(60, 55, 'start.steps.10')),
                    e.xp6(7),
                    e.Q6J('innerHTML', e.lcZ(67, 57, 'start.steps.11'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(69, 59, 'start.steps.12'), e.oJD),
                    e.xp6(3),
                    e.Oqu(e.lcZ(72, 61, 'start.steps.13')),
                    e.xp6(3),
                    e.Q6J('innerHTML', e.lcZ(75, 63, 'start.more.0'), e.oJD),
                    e.xp6(8),
                    e.Oqu(e.lcZ(83, 65, 'start.more.1')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(85, 67, 'start.more.2'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(87, 69, 'start.more.3'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(91, 71, 'start.more.4')),
                    e.xp6(7),
                    e.Oqu(e.lcZ(98, 73, 'start.more.5')),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(100, 75, 'start.more.6'), e.oJD),
                    e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(102, 77, 'start.more.7'), e.oJD),
                    e.xp6(4),
                    e.Oqu(e.lcZ(106, 79, 'start.more.8')));
              },
              dependencies: [x.rH, Yt, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      var go = T(2365);
      function _o(t, n) {
        1 & t && (e.ynx(0), e._uU(1, 'Ethereum'), e.BQk());
      }
      function fo(t, n) {
        1 & t && (e.ynx(0), e._uU(1, 'Binance'), e.BQk());
      }
      function Zo(t, n) {
        1 & t && (e.ynx(0), e._uU(1, 'TRON'), e.BQk());
      }
      function vo(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'span', 30),
            e.YNc(1, _o, 2, 0, 'ng-container', 27),
            e.YNc(2, fo, 2, 0, 'ng-container', 27),
            e.YNc(3, Zo, 2, 0, 'ng-container', 27),
            e._uU(4),
            e.qZA()),
          2 & t)
        ) {
          const a = n.ngIf;
          e.Q6J('ngSwitch', a),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 'erc20'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 'bep20'),
            e.xp6(1),
            e.Q6J('ngSwitchCase', 'trc20'),
            e.xp6(1),
            e.hij(' ', a.toUpperCase(), ' ');
        }
      }
      function ho(t, n) {
        1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'translate'), e.BQk()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'tariffs.table.5')));
      }
      function Ao(t, n) {
        if (
          (1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'number'), e.BQk()), 2 & t)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.hij('', e.lcZ(2, 1, a.sci_fee), '%');
        }
      }
      function To(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'tr')(1, 'td')(2, 'div', 22),
            e._UZ(3, 'img', 23),
            e.TgZ(4, 'p', 24)(5, 'b'),
            e._uU(6),
            e.ALo(7, 'uppercase'),
            e.qZA(),
            e.YNc(8, vo, 5, 5, 'span', 25),
            e.qZA()()(),
            e.TgZ(9, 'td')(10, 'div', 26),
            e.YNc(11, ho, 3, 3, 'ng-container', 27),
            e.YNc(12, Ao, 3, 3, 'ng-container', 28),
            e.qZA()(),
            e.TgZ(13, 'td')(14, 'div', 29),
            e._uU(15),
            e.ALo(16, 'number'),
            e.TgZ(17, 'span'),
            e._uU(18),
            e.qZA()()(),
            e.TgZ(19, 'td')(20, 'div', 29),
            e._uU(21),
            e.ALo(22, 'number'),
            e.TgZ(23, 'span'),
            e._uU(24),
            e.qZA()()(),
            e.TgZ(25, 'td')(26, 'div', 29),
            e._uU(27),
            e.ALo(28, 'number'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.Q6J('src', 'assets/img/' + a.code + '-2.svg', e.LSH),
            e.xp6(3),
            e.AsE('', a.name, ' (', e.lcZ(7, 11, a.code), ')'),
            e.xp6(2),
            e.Q6J('ngIf', a.standard),
            e.xp6(2),
            e.Q6J('ngSwitch', a.sci_fee <= 0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(4),
            e.hij(' ', e.xi3(16, 13, a.api_min, '0.0-6'), ' '),
            e.xp6(3),
            e.Oqu(a.code),
            e.xp6(3),
            e.hij(' ', e.xi3(22, 16, a.api_fix, '0.0-6'), ' '),
            e.xp6(3),
            e.Oqu(a.code),
            e.xp6(3),
            e.hij(' ', e.lcZ(28, 19, a.sci_fee), '% ');
        }
      }
      let xo = (() => {
        class t {
          constructor() {
            (this.route = (0, e.f3M)(x.gz)),
              (this.tariffs = this.route.snapshot.data.tariffs);
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 82,
            vars: 52,
            consts: [
              [1, 'payment'],
              [1, 'container'],
              [1, 'row'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'm-text'],
              [3, 'innerHTML'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'payment-img'],
              ['src', 'assets/img/payment-img.png', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'payment-table',
              ],
              ['responsiveTable', '', 1, 'responsive'],
              [1, 'payment-table__title'],
              [4, 'ngFor', 'ngForOf'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'payment-quest',
              ],
              [1, 'payment-quest__head'],
              [1, 'payment-quest__body'],
              [1, 'sign-url'],
              [1, 'sign-url__icon'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#warning'],
              [1, 'payment-quest'],
              [1, 'payment-table__cur'],
              ['loading', 'lazy', 'alt', '', 3, 'src'],
              [1, 'text-nowrap'],
              [3, 'ngSwitch', 4, 'ngIf'],
              [1, 'payment-table__val', 3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [4, 'ngSwitchDefault'],
              [1, 'payment-table__val'],
              [3, 'ngSwitch'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3),
                e._UZ(4, 'div', 4),
                e.ALo(5, 'translate'),
                e.TgZ(6, 'div', 5),
                e._UZ(7, 'p', 6),
                e.ALo(8, 'translate'),
                e._UZ(9, 'p', 6),
                e.ALo(10, 'translate'),
                e.qZA()(),
                e.TgZ(11, 'div', 7)(12, 'div', 8),
                e._UZ(13, 'img', 9),
                e.qZA()()(),
                e.TgZ(14, 'div', 10)(15, 'table', 11)(16, 'thead')(17, 'tr')(
                  18,
                  'td'
                )(19, 'div', 12),
                e._uU(20),
                e.ALo(21, 'translate'),
                e.qZA()(),
                e.TgZ(22, 'td')(23, 'div', 12),
                e._uU(24),
                e.ALo(25, 'translate'),
                e.qZA()(),
                e.TgZ(26, 'td')(27, 'div', 12),
                e._uU(28),
                e.ALo(29, 'translate'),
                e.qZA()(),
                e.TgZ(30, 'td')(31, 'div', 12),
                e._uU(32),
                e.ALo(33, 'translate'),
                e.qZA()(),
                e.TgZ(34, 'td')(35, 'div', 12),
                e._uU(36),
                e.ALo(37, 'translate'),
                e.qZA()()()(),
                e.TgZ(38, 'tbody'),
                e.YNc(39, To, 29, 21, 'tr', 13),
                e.qZA()()(),
                e._UZ(40, 'div', 14),
                e.ALo(41, 'translate'),
                e.TgZ(42, 'div', 15)(43, 'div', 16)(44, 'b'),
                e._uU(45, '1'),
                e.TgZ(46, 'span'),
                e._uU(47, '.'),
                e.qZA()(),
                e.TgZ(48, 'h3'),
                e._uU(49),
                e.ALo(50, 'translate'),
                e.qZA()(),
                e.TgZ(51, 'div', 17),
                e._UZ(52, 'p', 6),
                e.ALo(53, 'translate'),
                e.TgZ(54, 'div', 18)(55, 'div', 19),
                e.O4$(),
                e.TgZ(56, 'svg'),
                e._UZ(57, 'use', 20),
                e.qZA()(),
                e.kcU(),
                e._UZ(58, 'h3', 6),
                e.ALo(59, 'translate'),
                e.qZA()()(),
                e.TgZ(60, 'div', 21)(61, 'div', 16)(62, 'b'),
                e._uU(63, '2'),
                e.TgZ(64, 'span'),
                e._uU(65, '.'),
                e.qZA()(),
                e._UZ(66, 'h3', 6),
                e.ALo(67, 'translate'),
                e.qZA(),
                e.TgZ(68, 'div', 17),
                e._UZ(69, 'p', 6),
                e.ALo(70, 'translate'),
                e._UZ(71, 'p', 6),
                e.ALo(72, 'translate'),
                e._UZ(73, 'p', 6),
                e.ALo(74, 'translate'),
                e.TgZ(75, 'div', 18)(76, 'div', 19),
                e.O4$(),
                e.TgZ(77, 'svg'),
                e._UZ(78, 'use', 20),
                e.qZA()(),
                e.kcU(),
                e._UZ(79, 'h3', 6),
                e.ALo(80, 'translate'),
                e.qZA()()(),
                e._UZ(81, 'facade-faq-ver2'),
                e.qZA()()),
                2 & a &&
                  (e.xp6(4),
                  e.Q6J('innerHTML', e.lcZ(5, 18, 'tariffs.intro.0'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(8, 20, 'tariffs.intro.1'), e.oJD),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(10, 22, 'tariffs.intro.2'), e.oJD),
                  e.xp6(11),
                  e.Oqu(e.lcZ(21, 24, 'tariffs.table.0')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(25, 26, 'tariffs.table.1')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(29, 28, 'tariffs.table.2')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(33, 30, 'tariffs.table.3')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(37, 32, 'tariffs.table.4')),
                  e.xp6(3),
                  e.Q6J('ngForOf', i.tariffs),
                  e.xp6(1),
                  e.Q6J('innerHTML', e.lcZ(41, 34, 'tariffs.faq.0'), e.oJD),
                  e.xp6(9),
                  e.Oqu(e.lcZ(50, 36, 'tariffs.faq.1')),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(53, 38, 'tariffs.faq.2'), e.oJD),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(59, 40, 'tariffs.faq.3'), e.oJD),
                  e.xp6(8),
                  e.Q6J('innerHTML', e.lcZ(67, 42, 'tariffs.faq.4'), e.oJD),
                  e.xp6(3),
                  e.Q6J('innerHTML', e.lcZ(70, 44, 'tariffs.faq.5'), e.oJD),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(72, 46, 'tariffs.faq.6'), e.oJD),
                  e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(74, 48, 'tariffs.faq.7'), e.oJD),
                  e.xp6(6),
                  e.Q6J('innerHTML', e.lcZ(80, 50, 'tariffs.faq.8'), e.oJD));
            },
            dependencies: [
              r.sg,
              r.O5,
              r.RF,
              r.n9,
              r.ED,
              go.O,
              Zt,
              r.gd,
              r.JJ,
              k.X$,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function qo(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 35)(1, 'div', 36)(2, 'span'),
            e._uU(3),
            e.ALo(4, 'translate'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.AsE('', a, ' ', e.lcZ(4, 2, 'referral-program.table.4'), '');
        }
      }
      function yo(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 91), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'referral-program.table.5')));
      }
      function Lo(t, n) {
        1 & t && (e.TgZ(0, 'div', 92), e._uU(1, 'N/A'), e.qZA());
      }
      const Uo = function (t, n, a) {
        return { green: t, aqua: n, blue: a };
      };
      function bo(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 94), e._uU(1), e.ALo(2, 'number'), e.qZA()),
          2 & t)
        ) {
          const a = n.ngIf,
            i = e.oxw().$implicit;
          e.Q6J('ngClass', e.kEZ(4, Uo, 1 === i, 2 === i, 3 === i)),
            e.xp6(1),
            e.hij(' ', e.lcZ(2, 2, a), '% ');
        }
      }
      function wo(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 35)(1, 'div', 85),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.YNc(4, bo, 3, 8, 'div', 93),
            e.qZA()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = e.oxw().$implicit;
          e.oxw();
          const o = e.MAs(227);
          e.xp6(2),
            e.AsE('', a, ' ', e.lcZ(3, 4, 'referral-program.table.4'), ''),
            e.xp6(2),
            e.Q6J('ngIf', i.rates[a - 1])('ngIfElse', o);
        }
      }
      function Oo(t, n) {
        1 & t && (e.TgZ(0, 'div', 95), e._uU(1, '0.5%'), e.qZA());
      }
      const Co = function (t) {
        return { show: t };
      };
      function ko(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 78)(1, 'div', 33)(2, 'div', 79),
            e._uU(3),
            e.qZA(),
            e.ynx(4, 80),
            e.YNc(5, yo, 3, 3, 'div', 81),
            e.YNc(6, Lo, 2, 0, 'div', 82),
            e.BQk(),
            e.TgZ(7, 'div', 83),
            e._uU(8),
            e.ALo(9, 'async'),
            e.ALo(10, 'declension'),
            e.qZA(),
            e.TgZ(11, 'div', 84),
            e._uU(12),
            e.ALo(13, 'translate'),
            e.qZA()(),
            e.TgZ(14, 'div', 34)(15, 'div', 35)(16, 'div', 85),
            e._uU(17),
            e.ALo(18, 'translate'),
            e.qZA(),
            e.TgZ(19, 'div', 86)(20, 'span'),
            e._uU(21),
            e.ALo(22, 'number'),
            e.qZA(),
            e.TgZ(23, 'p'),
            e._uU(24, 'USD'),
            e.qZA()()(),
            e.TgZ(25, 'div', 35)(26, 'div', 85),
            e._uU(27),
            e.ALo(28, 'translate'),
            e.qZA(),
            e.TgZ(29, 'div', 86)(30, 'span'),
            e._uU(31),
            e.ALo(32, 'number'),
            e.qZA(),
            e.TgZ(33, 'p'),
            e._uU(34, 'USD'),
            e.qZA()()(),
            e.YNc(35, wo, 5, 6, 'div', 37),
            e.TgZ(36, 'div', 38),
            e.YNc(37, Oo, 2, 0, 'div', 87),
            e.qZA(),
            e.TgZ(38, 'div', 88)(39, 'div', 89)(40, 'a', 90)(41, 'span'),
            e._uU(42, '?'),
            e.qZA(),
            e._uU(43),
            e.ALo(44, 'translate'),
            e.qZA()()()()()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = e.oxw();
          e.xp6(3),
            e.Oqu(a.name),
            e.xp6(1),
            e.Q6J('ngSwitch', a.bonus > 0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1),
            e.xp6(2),
            e.Oqu(e.lcZ(9, 15, e.Dn7(10, 17, a.depth, 'levels_r', !0))),
            e.xp6(4),
            e.AsE('', e.lcZ(13, 21, 'referral-program.table.6'), ' ', a.id, ''),
            e.xp6(5),
            e.Oqu(e.lcZ(18, 23, 'referral-program.table.2')),
            e.xp6(4),
            e.Oqu(e.xi3(22, 25, a.personal, '0.0-2')),
            e.xp6(6),
            e.Oqu(e.lcZ(28, 28, 'referral-program.table.3')),
            e.xp6(4),
            e.Oqu(e.xi3(32, 30, a.structure, '0.0-2')),
            e.xp6(4),
            e.Q6J('ngForOf', i.depthArr),
            e.xp6(2),
            e.Q6J('ngIf', a.id >= 10),
            e.xp6(3),
            e.Q6J('queryParams', e.VKq(35, Co, a.id)),
            e.xp6(3),
            e.hij(' ', e.lcZ(44, 33, 'referral-program.table.7'), ' ');
        }
      }
      function Jo(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 96)(1, 'div', 97),
          e._UZ(2, 'img', 98)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 99),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'referral-program.steps.6'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'referral-program.steps.7')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'referral-program.steps.8')));
      }
      function Fo(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 100)(1, 'div', 97),
          e._UZ(2, 'img', 101)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 102),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'referral-program.steps.9'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'referral-program.steps.10')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'referral-program.steps.11')));
      }
      function Mo(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 103)(1, 'div', 97),
          e._UZ(2, 'img', 104)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 102),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'referral-program.steps.12'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'referral-program.steps.13')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'referral-program.steps.14')));
      }
      function Qo(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 105)(1, 'div', 97),
          e._UZ(2, 'img', 106)(3, 'p', 6),
          e.ALo(4, 'translate'),
          e.qZA(),
          e.TgZ(5, 'h3'),
          e._uU(6),
          e.ALo(7, 'translate'),
          e.qZA(),
          e.TgZ(8, 'a', 99),
          e._uU(9),
          e.ALo(10, 'translate'),
          e.qZA()()),
          2 & t &&
            (e.xp6(3),
            e.Q6J('innerHTML', e.lcZ(4, 3, 'referral-program.steps.15'), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 5, 'referral-program.steps.16')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 7, 'referral-program.steps.17')));
      }
      function Ho(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 107),
          e.O4$(),
          e.TgZ(1, 'svg'),
          e._UZ(2, 'use', 108),
          e.qZA()());
      }
      let Do = (() => {
        class t {
          constructor(a, i, o) {
            (this.route = a),
              (this.cdr = i),
              (this.appService = o),
              (this.lang = 'en'),
              (this.stepTab = 1),
              (this.lines = a.snapshot.data.lines),
              (this.depthArr = (0, ae.kg)(15)),
              (this.lang = o.language.code);
          }
          setStepTab(a) {
            this.stepTab !== a && ((this.stepTab = a), this.cdr.markForCheck());
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(x.gz), e.Y36(e.sBO), e.Y36(U.z));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 228,
            vars: 162,
            consts: [
              [1, 'refs'],
              [1, 'container'],
              [1, 'row'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-7'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'm-text', 'm-text_xl'],
              [3, 'innerHTML'],
              [1, 'career-btns'],
              ['href', 'javascript:void(0)', 1, 'm-btn'],
              ['target', '_blank', 1, 'm-btn', 'm-btn_pdf', 3, 'href'],
              ['src', 'assets/img/pdf.svg', 'alt', ''],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#load'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-5'],
              [1, 'refs-img'],
              ['src', 'assets/img/refs-img.png', 'alt', ''],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [1, 'refs-benefits'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'refs-benefits__item',
              ],
              [1, 'refs-benefits__icon'],
              ['src', 'assets/img/refs-benefits-icon-1.svg', 'alt', ''],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '200',
                1,
                'refs-benefits__item',
              ],
              ['src', 'assets/img/refs-benefits-icon-2.svg', 'alt', ''],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '400',
                1,
                'refs-benefits__item',
              ],
              ['src', 'assets/img/refs-benefits-icon-3.svg', 'alt', ''],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '600',
                1,
                'refs-benefits__item',
              ],
              ['src', 'assets/img/refs-benefits-icon-4.svg', 'alt', ''],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '800',
                1,
                'refs-benefits__item',
              ],
              ['src', 'assets/img/refs-benefits-icon-5.svg', 'alt', ''],
              [1, 'refs-table'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_center',
                'm-text_xl',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'invest-table__wrap',
              ],
              [1, 'invest-table'],
              [1, 'invest-table__side'],
              [1, 'invest-table__head'],
              [1, 'invest-table__content'],
              [1, 'invest-table__row'],
              [1, 'invest-table__title'],
              ['class', 'invest-table__row', 4, 'ngFor', 'ngForOf'],
              [1, 'invest-table__row', 'invest-table__row_gr'],
              ['src', 'assets/img/invest-star.svg', 'alt', ''],
              [1, 'invest-table__list'],
              ['class', 'invest-table__item', 4, 'ngFor', 'ngForOf'],
              [1, 'refs-more'],
              [1, 'refs-more__img'],
              [
                'src',
                'assets/img/refs-more-img.png',
                'loading',
                'lazy',
                'alt',
                '',
              ],
              ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-7'],
              [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
              [1, 'm-text', 'm-text_white', 'm-text_xl'],
              ['routerLink', '/leadership-program', 1, 'm-btn'],
              [1, 'refs-steps'],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_xl',
              ],
              [1, 'row', 'd-flex', 'align-items-center'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'invest-steps__tabs'],
              ['data-tabs-btn', '1', 1, 'invest-steps__tabs-item', 3, 'click'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
              ['data-tabs-btn', '2', 1, 'invest-steps__tabs-item', 3, 'click'],
              ['data-tabs-btn', '3', 1, 'invest-steps__tabs-item', 3, 'click'],
              ['data-tabs-btn', '4', 1, 'invest-steps__tabs-item', 3, 'click'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'invest-steps__content'],
              ['class', 'invest-steps__item invest-steps__item_5', 4, 'ngIf'],
              ['class', 'invest-steps__item invest-steps__item_6', 4, 'ngIf'],
              ['class', 'invest-steps__item invest-steps__item_7', 4, 'ngIf'],
              ['class', 'invest-steps__item invest-steps__item_8', 4, 'ngIf'],
              [1, 'refs-why'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                'm-title_white',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'refs-why__list',
              ],
              [1, 'refs-why__item'],
              ['data-aos', 'fade-down', 'data-aos-delay', '0', 1, 'refs-start'],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
                'm-btn_white',
              ],
              [1, 'refs-bot'],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'career-list'],
              [1, 'career-list__item'],
              [1, 'career-list__head'],
              [1, 'career-list__text'],
              ['noRate', ''],
              [1, 'invest-table__item'],
              [1, 'invest-table__name'],
              [3, 'ngSwitch'],
              ['class', 'invest-table__bonus yellow', 4, 'ngSwitchCase'],
              ['class', 'invest-table__bonus', 4, 'ngSwitchCase'],
              [1, 'invest-table__lvl'],
              [1, 'invest-table__popular'],
              [1, 'title'],
              [1, 'invest-table__val'],
              ['class', 'invest-table__percent', 4, 'ngIf'],
              [1, 'invest-table__row', 'invest-table__row_btns'],
              [1, 'invest-table__btns'],
              [
                'routerLink',
                '/leadership-program',
                1,
                'invest-table__btn',
                'invest-table__btn_green',
                3,
                'queryParams',
              ],
              [1, 'invest-table__bonus', 'yellow'],
              [1, 'invest-table__bonus'],
              [
                'class',
                'invest-table__percent',
                3,
                'ngClass',
                4,
                'ngIf',
                'ngIfElse',
              ],
              [1, 'invest-table__percent', 3, 'ngClass'],
              [1, 'invest-table__percent'],
              [1, 'invest-steps__item', 'invest-steps__item_5'],
              [1, 'invest-steps__head'],
              ['src', 'assets/img/invest-steps-icon-5.svg', 'alt', ''],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
              ],
              [1, 'invest-steps__item', 'invest-steps__item_6'],
              ['src', 'assets/img/invest-steps-icon-6.svg', 'alt', ''],
              ['routerLink', '/account/referral/materials', 1, 'm-btn'],
              [1, 'invest-steps__item', 'invest-steps__item_7'],
              ['src', 'assets/img/invest-steps-icon-7.svg', 'alt', ''],
              [1, 'invest-steps__item', 'invest-steps__item_8'],
              ['src', 'assets/img/invest-steps-icon-8.svg', 'alt', ''],
              [1, 'invest-table__check', 'invest-table__check_gray'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#close'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3),
                e._UZ(4, 'div', 4),
                e.ALo(5, 'translate'),
                e.TgZ(6, 'div', 5),
                e._UZ(7, 'p', 6),
                e.ALo(8, 'translate'),
                e._UZ(9, 'p', 6),
                e.ALo(10, 'translate'),
                e.qZA(),
                e.TgZ(11, 'div', 7)(12, 'a', 8),
                e._uU(13),
                e.ALo(14, 'translate'),
                e.qZA(),
                e.TgZ(15, 'a', 9),
                e._UZ(16, 'img', 10),
                e._uU(17),
                e.ALo(18, 'translate'),
                e.O4$(),
                e.TgZ(19, 'svg'),
                e._UZ(20, 'use', 11),
                e.qZA()()()(),
                e.kcU(),
                e.TgZ(21, 'div', 12)(22, 'div', 13),
                e._UZ(23, 'img', 14),
                e.qZA()()(),
                e._UZ(24, 'div', 15),
                e.ALo(25, 'translate'),
                e.TgZ(26, 'div', 16)(27, 'div', 17)(28, 'div', 18),
                e._UZ(29, 'img', 19),
                e.qZA(),
                e.TgZ(30, 'h3'),
                e._uU(31),
                e.ALo(32, 'translate'),
                e.qZA()(),
                e.TgZ(33, 'div', 20)(34, 'div', 18),
                e._UZ(35, 'img', 21),
                e.qZA(),
                e.TgZ(36, 'h3'),
                e._uU(37),
                e.ALo(38, 'translate'),
                e.qZA()(),
                e.TgZ(39, 'div', 22)(40, 'div', 18),
                e._UZ(41, 'img', 23),
                e.qZA(),
                e.TgZ(42, 'h3'),
                e._uU(43),
                e.ALo(44, 'translate'),
                e.qZA()(),
                e.TgZ(45, 'div', 24)(46, 'div', 18),
                e._UZ(47, 'img', 25),
                e.qZA(),
                e.TgZ(48, 'h3'),
                e._uU(49),
                e.ALo(50, 'translate'),
                e.qZA()(),
                e.TgZ(51, 'div', 26)(52, 'div', 18),
                e._UZ(53, 'img', 27),
                e.qZA(),
                e.TgZ(54, 'h3'),
                e._uU(55),
                e.ALo(56, 'translate'),
                e.qZA()()()(),
                e.TgZ(57, 'div', 28)(58, 'div', 1),
                e._UZ(59, 'div', 15),
                e.ALo(60, 'translate'),
                e.TgZ(61, 'div', 29),
                e._UZ(62, 'p', 6),
                e.ALo(63, 'translate'),
                e.qZA(),
                e.TgZ(64, 'div', 30)(65, 'div', 31)(66, 'div', 32),
                e._UZ(67, 'div', 33),
                e.TgZ(68, 'div', 34)(69, 'div', 35)(70, 'div', 36)(71, 'span'),
                e._uU(72),
                e.ALo(73, 'translate'),
                e.qZA()()(),
                e.TgZ(74, 'div', 35)(75, 'div', 36)(76, 'span'),
                e._uU(77),
                e.ALo(78, 'translate'),
                e.qZA()()(),
                e.YNc(79, qo, 5, 4, 'div', 37),
                e.TgZ(80, 'div', 38)(81, 'div', 36),
                e._UZ(82, 'img', 39),
                e._uU(83),
                e.ALo(84, 'translate'),
                e.qZA()()()(),
                e.TgZ(85, 'div', 40),
                e.YNc(86, ko, 45, 37, 'div', 41),
                e.qZA()()()()(),
                e.TgZ(87, 'div', 42)(88, 'div', 1)(89, 'div', 2)(90, 'div', 12)(
                  91,
                  'div',
                  43
                ),
                e._UZ(92, 'img', 44),
                e.qZA()(),
                e.TgZ(93, 'div', 45),
                e._UZ(94, 'div', 46),
                e.ALo(95, 'translate'),
                e.TgZ(96, 'div', 47),
                e._UZ(97, 'p', 6),
                e.ALo(98, 'translate'),
                e.qZA(),
                e.TgZ(99, 'a', 48),
                e._uU(100),
                e.ALo(101, 'translate'),
                e.qZA()()()()(),
                e.TgZ(102, 'div', 49)(103, 'div', 1),
                e._UZ(104, 'div', 50),
                e.ALo(105, 'translate'),
                e.TgZ(106, 'div', 51),
                e._UZ(107, 'p', 6),
                e.ALo(108, 'translate'),
                e.qZA(),
                e.TgZ(109, 'div', 52)(110, 'div', 53)(111, 'div', 54)(
                  112,
                  'div',
                  55
                ),
                e.NdJ('click', function () {
                  return i.setStepTab(1);
                }),
                e._uU(113),
                e.ALo(114, 'translate'),
                e.O4$(),
                e.TgZ(115, 'svg'),
                e._UZ(116, 'use', 56),
                e.qZA()(),
                e.kcU(),
                e.TgZ(117, 'div', 57),
                e.NdJ('click', function () {
                  return i.setStepTab(2);
                }),
                e._uU(118),
                e.ALo(119, 'translate'),
                e.O4$(),
                e.TgZ(120, 'svg'),
                e._UZ(121, 'use', 56),
                e.qZA()(),
                e.kcU(),
                e.TgZ(122, 'div', 58),
                e.NdJ('click', function () {
                  return i.setStepTab(3);
                }),
                e._uU(123),
                e.ALo(124, 'translate'),
                e.O4$(),
                e.TgZ(125, 'svg'),
                e._UZ(126, 'use', 56),
                e.qZA()(),
                e.kcU(),
                e.TgZ(127, 'div', 59),
                e.NdJ('click', function () {
                  return i.setStepTab(4);
                }),
                e._uU(128),
                e.ALo(129, 'translate'),
                e.O4$(),
                e.TgZ(130, 'svg'),
                e._UZ(131, 'use', 56),
                e.qZA()()()(),
                e.kcU(),
                e.TgZ(132, 'div', 60)(133, 'div', 61),
                e.YNc(134, Jo, 11, 9, 'div', 62),
                e.YNc(135, Fo, 11, 9, 'div', 63),
                e.YNc(136, Mo, 11, 9, 'div', 64),
                e.YNc(137, Qo, 11, 9, 'div', 65),
                e.qZA()()()()(),
                e.TgZ(138, 'div', 66)(139, 'div', 1),
                e._UZ(140, 'div', 67),
                e.ALo(141, 'translate'),
                e.TgZ(142, 'div', 68)(143, 'div', 69)(144, 'h3'),
                e._uU(145),
                e.ALo(146, 'translate'),
                e.qZA(),
                e.TgZ(147, 'p'),
                e._uU(148),
                e.ALo(149, 'translate'),
                e.qZA()(),
                e.TgZ(150, 'div', 69)(151, 'h3'),
                e._uU(152),
                e.ALo(153, 'translate'),
                e.qZA(),
                e.TgZ(154, 'p'),
                e._uU(155),
                e.ALo(156, 'translate'),
                e.qZA()(),
                e.TgZ(157, 'div', 69)(158, 'h3'),
                e._uU(159),
                e.ALo(160, 'translate'),
                e.qZA(),
                e.TgZ(161, 'p'),
                e._uU(162),
                e.ALo(163, 'translate'),
                e.qZA()(),
                e.TgZ(164, 'div', 69)(165, 'h3'),
                e._uU(166),
                e.ALo(167, 'translate'),
                e.qZA(),
                e.TgZ(168, 'p'),
                e._uU(169),
                e.ALo(170, 'translate'),
                e.qZA()(),
                e.TgZ(171, 'div', 69)(172, 'h3'),
                e._uU(173),
                e.ALo(174, 'translate'),
                e.qZA(),
                e.TgZ(175, 'p'),
                e._uU(176),
                e.ALo(177, 'translate'),
                e.qZA()(),
                e.TgZ(178, 'div', 69)(179, 'h3'),
                e._uU(180),
                e.ALo(181, 'translate'),
                e.qZA(),
                e.TgZ(182, 'p'),
                e._uU(183),
                e.ALo(184, 'translate'),
                e.qZA()()(),
                e.TgZ(185, 'div', 70),
                e._UZ(186, 'div', 46),
                e.ALo(187, 'translate'),
                e.TgZ(188, 'a', 71),
                e._uU(189),
                e.ALo(190, 'translate'),
                e.qZA()()()(),
                e.TgZ(191, 'div', 72)(192, 'div', 1),
                e._UZ(193, 'div', 50),
                e.ALo(194, 'translate'),
                e.TgZ(195, 'div', 73)(196, 'div', 74)(197, 'div', 75),
                e._uU(198),
                e.ALo(199, 'translate'),
                e.qZA(),
                e.TgZ(200, 'div', 76),
                e._UZ(201, 'p', 6),
                e.ALo(202, 'translate'),
                e.qZA()(),
                e.TgZ(203, 'div', 74)(204, 'div', 75),
                e._uU(205),
                e.ALo(206, 'translate'),
                e.qZA(),
                e.TgZ(207, 'div', 76),
                e._UZ(208, 'p', 6),
                e.ALo(209, 'translate'),
                e.qZA()(),
                e.TgZ(210, 'div', 74)(211, 'div', 75),
                e._uU(212),
                e.ALo(213, 'translate'),
                e.qZA(),
                e.TgZ(214, 'div', 76),
                e._UZ(215, 'p', 6),
                e.ALo(216, 'translate'),
                e.qZA()(),
                e.TgZ(217, 'div', 74)(218, 'div', 75),
                e._uU(219),
                e.ALo(220, 'translate'),
                e.qZA(),
                e.TgZ(221, 'div', 76),
                e._UZ(222, 'p', 6),
                e.ALo(223, 'translate'),
                e.qZA()()(),
                e._UZ(224, 'facade-faq-ver1')(225, 'facade-presentations'),
                e.qZA()()(),
                e.YNc(226, Ho, 3, 0, 'ng-template', null, 77, e.W1O)),
                2 & a &&
                  (e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(5, 64, 'referral-program.intro.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(8, 66, 'referral-program.intro.1'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(10, 68, 'referral-program.intro.2'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(14, 70, 'referral-program.intro.3')),
                  e.xp6(2),
                  e.Q6J(
                    'href',
                    '/docs/Ovax_Global_Company_Presentation_' + i.lang + '.pdf',
                    e.LSH
                  ),
                  e.xp6(2),
                  e.hij(' ', e.lcZ(18, 72, 'referral-program.intro.4'), ' '),
                  e.xp6(7),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(25, 74, 'referral-program.intro.5'),
                    e.oJD
                  ),
                  e.xp6(7),
                  e.Oqu(e.lcZ(32, 76, 'referral-program.intro.6')),
                  e.xp6(6),
                  e.Oqu(e.lcZ(38, 78, 'referral-program.intro.7')),
                  e.xp6(6),
                  e.Oqu(e.lcZ(44, 80, 'referral-program.intro.8')),
                  e.xp6(6),
                  e.Oqu(e.lcZ(50, 82, 'referral-program.intro.9')),
                  e.xp6(6),
                  e.Oqu(e.lcZ(56, 84, 'referral-program.intro.10')),
                  e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(60, 86, 'referral-program.table.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(63, 88, 'referral-program.table.1'),
                    e.oJD
                  ),
                  e.xp6(10),
                  e.Oqu(e.lcZ(73, 90, 'referral-program.table.2')),
                  e.xp6(5),
                  e.Oqu(e.lcZ(78, 92, 'referral-program.table.3')),
                  e.xp6(2),
                  e.Q6J('ngForOf', i.depthArr),
                  e.xp6(4),
                  e.hij(
                    ' 16 - 100 ',
                    e.lcZ(84, 94, 'referral-program.table.4'),
                    ' '
                  ),
                  e.xp6(3),
                  e.Q6J('ngForOf', i.lines),
                  e.xp6(8),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(95, 96, 'referral-program.banner.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(98, 98, 'referral-program.banner.1'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Oqu(e.lcZ(101, 100, 'referral-program.banner.2')),
                  e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(105, 102, 'referral-program.steps.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(108, 104, 'referral-program.steps.1'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.ekj('active', 1 === i.stepTab),
                  e.xp6(1),
                  e.hij(' ', e.lcZ(114, 106, 'referral-program.steps.2'), ' '),
                  e.xp6(4),
                  e.ekj('active', 2 === i.stepTab),
                  e.xp6(1),
                  e.hij(' ', e.lcZ(119, 108, 'referral-program.steps.3'), ' '),
                  e.xp6(4),
                  e.ekj('active', 3 === i.stepTab),
                  e.xp6(1),
                  e.hij(' ', e.lcZ(124, 110, 'referral-program.steps.4'), ' '),
                  e.xp6(4),
                  e.ekj('active', 4 === i.stepTab),
                  e.xp6(1),
                  e.hij(' ', e.lcZ(129, 112, 'referral-program.steps.5'), ' '),
                  e.xp6(6),
                  e.Q6J('ngIf', 1 === i.stepTab),
                  e.xp6(1),
                  e.Q6J('ngIf', 2 === i.stepTab),
                  e.xp6(1),
                  e.Q6J('ngIf', 3 === i.stepTab),
                  e.xp6(1),
                  e.Q6J('ngIf', 4 === i.stepTab),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(141, 114, 'referral-program.solutions.0'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.Oqu(e.lcZ(146, 116, 'referral-program.solutions.1')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(149, 118, 'referral-program.solutions.2')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(153, 120, 'referral-program.solutions.3')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(156, 122, 'referral-program.solutions.4')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(160, 124, 'referral-program.solutions.5')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(163, 126, 'referral-program.solutions.6')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(167, 128, 'referral-program.solutions.7')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(170, 130, 'referral-program.solutions.8')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(174, 132, 'referral-program.solutions.9')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(177, 134, 'referral-program.solutions.10')),
                  e.xp6(4),
                  e.Oqu(e.lcZ(181, 136, 'referral-program.solutions.11')),
                  e.xp6(3),
                  e.Oqu(e.lcZ(184, 138, 'referral-program.solutions.12')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(187, 140, 'referral-program.solutions.13'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Oqu(e.lcZ(190, 142, 'referral-program.solutions.14')),
                  e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(194, 144, 'referral-program.faq.0'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.Oqu(e.lcZ(199, 146, 'referral-program.faq.1')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(202, 148, 'referral-program.faq.2'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(206, 150, 'referral-program.faq.3')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(209, 152, 'referral-program.faq.4'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(213, 154, 'referral-program.faq.5')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(216, 156, 'referral-program.faq.6'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(220, 158, 'referral-program.faq.7')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(223, 160, 'referral-program.faq.8'),
                    e.oJD
                  ));
            },
            dependencies: [
              r.mk,
              r.sg,
              r.O5,
              r.RF,
              r.n9,
              x.rH,
              Dt,
              Xe,
              r.Ov,
              r.JJ,
              k.X$,
              ft.V,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function So(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 94),
            e.NdJ('click', function () {
              const s = e.CHM(a).$implicit,
                Z = e.oxw();
              return e.KtG(Z.setLine(s));
            }),
            e._UZ(1, 'img', 29),
            e._uU(2),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.ALo(5, 'translate'),
            e.qZA()();
        }
        if (2 & t) {
          const a = n.$implicit,
            i = e.oxw();
          e.ekj('active', a.id === i.line.id),
            e.xp6(1),
            e.Q6J('src', 'assets/img/rank-' + a.id + '.png', e.LSH),
            e.xp6(1),
            e.hij(' ', a.name, ' '),
            e.xp6(2),
            e.AsE('', e.lcZ(5, 6, 'leadership-program.table.2'), ' ', a.id, '');
        }
      }
      function Po(t, n) {
        if ((1 & t && (e.TgZ(0, 'p'), e._uU(1), e.qZA()), 2 & t)) {
          const a = e.oxw(2).$implicit;
          e.xp6(1), e.hij('', a, '-100 lvl');
        }
      }
      function No(t, n) {
        if ((1 & t && (e.TgZ(0, 'p'), e._uU(1), e.qZA()), 2 & t)) {
          const a = e.oxw(2).$implicit;
          e.xp6(1), e.hij('', a, ' lvl');
        }
      }
      const Yo = function (t, n, a) {
          return { green: t, aqua: n, blue: a };
        },
        Io = function () {
          return [10, 11, 12];
        };
      function $o(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 96)(1, 'span'),
            e._uU(2),
            e.ALo(3, 'number'),
            e.qZA(),
            e.ynx(4, 97),
            e.ALo(5, 'inArray'),
            e.YNc(6, Po, 2, 1, 'p', 98),
            e.YNc(7, No, 2, 1, 'p', 99),
            e.BQk(),
            e.qZA()),
          2 & t)
        ) {
          const a = n.ngIf,
            i = e.oxw(),
            o = i.$implicit,
            s = i.last,
            Z = e.oxw();
          e.Q6J('ngClass', e.kEZ(9, Yo, 1 === o, 2 === o, 3 === o)),
            e.xp6(2),
            e.hij('', e.lcZ(3, 4, a), '%'),
            e.xp6(2),
            e.Q6J('ngSwitch', s && e.xi3(5, 6, Z.line.id, e.DdM(13, Io))),
            e.xp6(2),
            e.Q6J('ngSwitchCase', !0);
        }
      }
      function jo(t, n) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, $o, 8, 14, 'div', 95), e.BQk()), 2 & t)
        ) {
          const a = n.$implicit,
            i = e.oxw();
          e.xp6(1), e.Q6J('ngIf', i.line.rates[a - 1]);
        }
      }
      function Ro(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 100)(1, 'h3'),
            e._uU(2),
            e.ALo(3, 'number'),
            e.TgZ(4, 'span'),
            e._uU(5, 'USD'),
            e.qZA()(),
            e.TgZ(6, 'p'),
            e._uU(7),
            e.ALo(8, 'translate'),
            e.qZA()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(2),
            e.hij('', e.lcZ(3, 2, a.line.bonus), ' '),
            e.xp6(5),
            e.Oqu(e.lcZ(8, 4, 'leadership-program.table.8'));
        }
      }
      let zo = (() => {
        class t {
          constructor(a, i, o) {
            (this.route = a),
              (this.cdr = i),
              (this.appService = o),
              (this.lang = 'en'),
              (this.depthArr = (0, ae.kg)(15)),
              (this.lines = a.snapshot.data.lines),
              (this.line = this.lines[0]),
              (this.lang = o.language.code);
          }
          ngAfterViewInit() {
            const a = new URLSearchParams(window.location.search);
            if (a.has('show')) {
              const i = Number(a.get('show')),
                o = this.lines.find((s) => s.id === i);
              o && (this.setLine(o), (0, ae.RD)('.career-rank-box', -70));
            }
          }
          setLine(a) {
            this.line.id !== a.id && ((this.line = a), this.cdr.markForCheck());
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(x.gz), e.Y36(e.sBO), e.Y36(U.z));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 330,
            vars: 202,
            consts: [
              [1, 'career'],
              [1, 'container'],
              [1, 'row'],
              ['data-aos', 'fade-right', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'm-text', 'm-text_xl'],
              [3, 'innerHTML'],
              [1, 'career-btns'],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
              ],
              ['target', '_blank', 1, 'm-btn', 'm-btn_pdf', 3, 'href'],
              ['src', 'assets/img/pdf.svg', 'alt', ''],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#load'],
              [1, 'col-lg-6'],
              [
                'data-aos',
                'fade-left',
                'data-aos-delay',
                '0',
                1,
                'career-text',
                3,
                'innerHTML',
              ],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'career-img'],
              ['src', 'assets/img/career-img.svg', 'alt', ''],
              [1, 'career-rank'],
              [1, 'career-rank-box'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-text',
                'm-text_center',
              ],
              [1, 'career-rank-tabs__wrap'],
              ['nicescroll', '', 1, 'nicescroll-box'],
              [1, 'wrap'],
              [1, 'career-rank-tabs'],
              [
                'class',
                'career-rank-tabs__btn',
                3,
                'active',
                'click',
                4,
                'ngFor',
                'ngForOf',
              ],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
              [1, 'career-rank-wrap'],
              [1, 'career-rank-item'],
              [1, 'career-rank-head'],
              [1, 'career-rank-icon'],
              ['alt', '', 3, 'src'],
              [1, 'career-rank-info'],
              [1, 'career-rank-info__item'],
              [1, 'career-rank-info__text'],
              [1, 'tooltip', 'ml-1'],
              [1, 'tooltip-wrap'],
              [1, 'tooltip-text'],
              [1, 'tooltip-icon'],
              ['src', 'assets/img/tooltip-icon.svg', 'alt', ''],
              [1, 'career-rank-lvls'],
              [4, 'ngFor', 'ngForOf'],
              ['class', 'career-rank-bonus', 4, 'ngIf'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'career-rank-text',
              ],
              [1, 'sign-url__icon'],
              [0, 'xlink', 'href', 'assets/img/sprite.svg#warning'],
              [1, 'career-rules'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '200',
                1,
                'm-text',
                'm-text_xl',
                'text-center',
              ],
              [1, 'career-lvls'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'career-lvl'],
              [1, 'career-lvl__title'],
              [1, 'career-lvl__percent', 3, 'innerHTML'],
              [1, 'career-lvl__info'],
              [1, 'career-lvl__info-item'],
              [1, 'career-lvl__text', 3, 'innerHTML'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '200',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'career-lvl', 'career-lvl_2'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '400',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'career-lvl', 'career-lvl_3'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '600',
                1,
                'col-lg-3',
                'col-sm-6',
              ],
              [1, 'career-lvl', 'career-lvl_4'],
              ['src', 'assets/img/infinity.svg', 'alt', ''],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'career-lvls__text',
              ],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'career-invest',
              ],
              [1, 'row', 'd-flex', 'align-items-center'],
              [1, 'col-lg-8'],
              [1, 'm-title', 'm-title_white', 3, 'innerHTML'],
              [1, 'm-text', 'm-text_xl', 'm-text_white'],
              [1, 'col-lg-4'],
              ['routerLink', '/offers', 1, 'm-btn'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              [1, 'col-lg-2', 'col-md-4', 'col-6'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'career-prog'],
              [1, 'career-prog__icon'],
              ['src', 'assets/img/career-prog-1.svg', 'alt', ''],
              [1, 'career-prog__num'],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '200',
                1,
                'career-prog',
              ],
              ['src', 'assets/img/career-prog-2.svg', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '400',
                1,
                'career-prog',
              ],
              ['src', 'assets/img/career-prog-3.svg', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '600',
                1,
                'career-prog',
              ],
              ['src', 'assets/img/career-prog-4.svg', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '800',
                1,
                'career-prog',
              ],
              ['src', 'assets/img/career-prog-5.svg', 'alt', ''],
              [
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '1000',
                1,
                'career-prog',
              ],
              ['src', 'assets/img/career-prog-6.svg', 'alt', ''],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'career-box'],
              [1, 'col-lg-4', 'd-flex', 'fustify-content-lg-end'],
              [
                'routerLink',
                'https://ovaxglobal.com/?ref=837371457',
                1,
                'm-btn',
                'm-btn_white',
              ],
              [
                'data-aos',
                'fade-right',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                3,
                'innerHTML',
              ],
              ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'career-list'],
              [1, 'career-list__item'],
              [1, 'career-list__head', 3, 'innerHTML'],
              [1, 'career-list__text'],
              [1, 'career-rank-tabs__btn', 3, 'click'],
              ['class', 'career-rank-lvls__item', 3, 'ngClass', 4, 'ngIf'],
              [1, 'career-rank-lvls__item', 3, 'ngClass'],
              [3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [4, 'ngSwitchDefault'],
              [1, 'career-rank-bonus'],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3),
                e._UZ(4, 'div', 4),
                e.ALo(5, 'translate'),
                e.TgZ(6, 'div', 5),
                e._UZ(7, 'p', 6),
                e.ALo(8, 'translate'),
                e.qZA(),
                e.TgZ(9, 'div', 7)(10, 'a', 8),
                e._uU(11),
                e.ALo(12, 'translate'),
                e.qZA(),
                e.TgZ(13, 'a', 9),
                e._UZ(14, 'img', 10),
                e._uU(15),
                e.ALo(16, 'translate'),
                e.O4$(),
                e.TgZ(17, 'svg'),
                e._UZ(18, 'use', 11),
                e.qZA()()(),
                e.kcU(),
                e.TgZ(19, 'div', 5),
                e._UZ(20, 'p', 6),
                e.ALo(21, 'translate'),
                e._UZ(22, 'p', 6),
                e.ALo(23, 'translate'),
                e.qZA()(),
                e.TgZ(24, 'div', 12),
                e._UZ(25, 'div', 13),
                e.ALo(26, 'translate'),
                e.TgZ(27, 'div', 14),
                e._UZ(28, 'img', 15),
                e.qZA()()()()(),
                e.TgZ(29, 'section', 16)(30, 'div', 17)(31, 'div', 1)(
                  32,
                  'div',
                  18
                ),
                e._UZ(33, 'h3', 6),
                e.ALo(34, 'translate'),
                e._UZ(35, 'p', 6),
                e.ALo(36, 'translate'),
                e.qZA(),
                e.TgZ(37, 'div', 2)(38, 'div', 3)(39, 'div', 19)(40, 'div', 20)(
                  41,
                  'div',
                  21
                )(42, 'div', 22),
                e.YNc(43, So, 6, 8, 'div', 23),
                e.qZA()()()()(),
                e.TgZ(44, 'div', 24)(45, 'div', 25)(46, 'div', 26)(
                  47,
                  'div',
                  27
                )(48, 'span'),
                e._uU(49),
                e.ALo(50, 'translate'),
                e.qZA(),
                e.TgZ(51, 'h3'),
                e._uU(52),
                e.qZA()(),
                e.TgZ(53, 'div', 28),
                e._UZ(54, 'img', 29),
                e.qZA(),
                e.TgZ(55, 'div', 30)(56, 'div', 31)(57, 'h3'),
                e._uU(58),
                e.ALo(59, 'number'),
                e.TgZ(60, 'span'),
                e._uU(61, 'USD'),
                e.qZA()(),
                e.TgZ(62, 'div', 32)(63, 'p'),
                e._uU(64),
                e.ALo(65, 'translate'),
                e.qZA(),
                e.TgZ(66, 'div', 33)(67, 'div', 34)(68, 'div', 35),
                e._uU(69),
                e.ALo(70, 'translate'),
                e.qZA()(),
                e.TgZ(71, 'div', 36),
                e._UZ(72, 'img', 37),
                e.qZA()()()(),
                e.TgZ(73, 'div', 31)(74, 'h3'),
                e._uU(75),
                e.ALo(76, 'number'),
                e.TgZ(77, 'span'),
                e._uU(78, 'USD'),
                e.qZA()(),
                e.TgZ(79, 'div', 32)(80, 'p'),
                e._uU(81),
                e.ALo(82, 'translate'),
                e.qZA(),
                e.TgZ(83, 'div', 33)(84, 'div', 34)(85, 'div', 35),
                e._uU(86),
                e.ALo(87, 'translate'),
                e.qZA()(),
                e.TgZ(88, 'div', 36),
                e._UZ(89, 'img', 37),
                e.qZA()()()()(),
                e.TgZ(90, 'div', 38),
                e.YNc(91, jo, 2, 1, 'ng-container', 39),
                e.qZA(),
                e.TgZ(92, 'p'),
                e._uU(93),
                e.ALo(94, 'translate'),
                e.qZA(),
                e.YNc(95, Ro, 9, 6, 'div', 40),
                e.qZA()()()(),
                e.TgZ(96, 'div', 41)(97, 'div', 42),
                e.O4$(),
                e.TgZ(98, 'svg'),
                e._UZ(99, 'use', 43),
                e.qZA()(),
                e.kcU(),
                e._UZ(100, 'h3', 6),
                e.ALo(101, 'translate'),
                e._UZ(102, 'p', 6),
                e.ALo(103, 'translate'),
                e.qZA()()()(),
                e.TgZ(104, 'section', 44)(105, 'div', 1),
                e._UZ(106, 'div', 45),
                e.ALo(107, 'translate'),
                e.TgZ(108, 'div', 46),
                e._UZ(109, 'p', 6),
                e.ALo(110, 'translate'),
                e.qZA(),
                e.TgZ(111, 'div', 47)(112, 'div', 2)(113, 'div', 48)(
                  114,
                  'div',
                  49
                )(115, 'div', 50),
                e._uU(116),
                e.ALo(117, 'translate'),
                e.qZA(),
                e._UZ(118, 'div', 51),
                e.ALo(119, 'translate'),
                e.TgZ(120, 'div', 52)(121, 'div', 53)(122, 'h3'),
                e._uU(123, '10,000 '),
                e.TgZ(124, 'span'),
                e._uU(125, 'USD'),
                e.qZA()(),
                e.TgZ(126, 'p'),
                e._uU(127),
                e.ALo(128, 'translate'),
                e.qZA()(),
                e.TgZ(129, 'div', 53)(130, 'h3'),
                e._uU(131, '+10,000 '),
                e.TgZ(132, 'span'),
                e._uU(133, 'USD'),
                e.qZA()(),
                e._UZ(134, 'p', 6),
                e.ALo(135, 'translate'),
                e.qZA()(),
                e._UZ(136, 'div', 54),
                e.ALo(137, 'translate'),
                e.qZA()(),
                e.TgZ(138, 'div', 55)(139, 'div', 56)(140, 'div', 50),
                e._uU(141),
                e.ALo(142, 'translate'),
                e.qZA(),
                e._UZ(143, 'div', 51),
                e.ALo(144, 'translate'),
                e.TgZ(145, 'div', 52)(146, 'div', 53)(147, 'h3'),
                e._uU(148, '10,000 '),
                e.TgZ(149, 'span'),
                e._uU(150, 'USD'),
                e.qZA()(),
                e._UZ(151, 'p', 6),
                e.ALo(152, 'translate'),
                e.qZA(),
                e.TgZ(153, 'div', 53)(154, 'h3'),
                e._uU(155, '+5,000 '),
                e.TgZ(156, 'span'),
                e._uU(157, 'USD'),
                e.qZA()(),
                e.TgZ(158, 'p'),
                e._uU(159),
                e.ALo(160, 'translate'),
                e.qZA()()(),
                e._UZ(161, 'div', 54),
                e.ALo(162, 'translate'),
                e.qZA()(),
                e.TgZ(163, 'div', 57)(164, 'div', 58)(165, 'div', 50),
                e._uU(166),
                e.ALo(167, 'translate'),
                e.qZA(),
                e._UZ(168, 'div', 51),
                e.ALo(169, 'translate'),
                e.TgZ(170, 'div', 52)(171, 'div', 53)(172, 'h3'),
                e._uU(173, '10,000 '),
                e.TgZ(174, 'span'),
                e._uU(175, 'USD'),
                e.qZA()(),
                e._UZ(176, 'p', 6),
                e.ALo(177, 'translate'),
                e.qZA(),
                e.TgZ(178, 'div', 53)(179, 'h3'),
                e._uU(180, '+2,500 '),
                e.TgZ(181, 'span'),
                e._uU(182, 'USD'),
                e.qZA()(),
                e.TgZ(183, 'p'),
                e._uU(184),
                e.ALo(185, 'translate'),
                e.qZA()()(),
                e._UZ(186, 'div', 54),
                e.ALo(187, 'translate'),
                e.qZA()(),
                e.TgZ(188, 'div', 59)(189, 'div', 60)(190, 'div', 50),
                e._uU(191),
                e.ALo(192, 'translate'),
                e._UZ(193, 'img', 61),
                e.qZA(),
                e._UZ(194, 'div', 51),
                e.ALo(195, 'translate'),
                e.TgZ(196, 'div', 52)(197, 'div', 53)(198, 'h3'),
                e._uU(199, '10,000 '),
                e.TgZ(200, 'span'),
                e._uU(201, 'USD'),
                e.qZA()(),
                e._UZ(202, 'p', 6),
                e.ALo(203, 'translate'),
                e.qZA(),
                e.TgZ(204, 'div', 53)(205, 'h3'),
                e._uU(206, '+1,000 '),
                e.TgZ(207, 'span'),
                e._uU(208, 'USD'),
                e.qZA()(),
                e.TgZ(209, 'p'),
                e._uU(210),
                e.ALo(211, 'translate'),
                e.qZA()()(),
                e._UZ(212, 'div', 54),
                e.ALo(213, 'translate'),
                e.qZA()()(),
                e.TgZ(214, 'div', 62),
                e._UZ(215, 'h3', 6),
                e.ALo(216, 'translate'),
                e._UZ(217, 'p', 6),
                e.ALo(218, 'translate'),
                e._UZ(219, 'p', 6),
                e.ALo(220, 'translate'),
                e.qZA()(),
                e.TgZ(221, 'div', 63)(222, 'div', 64)(223, 'div', 65),
                e._UZ(224, 'div', 66),
                e.ALo(225, 'translate'),
                e.TgZ(226, 'div', 67),
                e._UZ(227, 'p', 6),
                e.ALo(228, 'translate'),
                e.qZA()(),
                e.TgZ(229, 'div', 68)(230, 'a', 69),
                e._uU(231),
                e.ALo(232, 'translate'),
                e.qZA()()()(),
                e._UZ(233, 'div', 70),
                e.ALo(234, 'translate'),
                e.TgZ(235, 'div', 2)(236, 'div', 71)(237, 'div', 72)(
                  238,
                  'div',
                  73
                ),
                e._UZ(239, 'img', 74),
                e.qZA(),
                e.TgZ(240, 'div', 75),
                e._uU(241, '01'),
                e.qZA(),
                e.TgZ(242, 'p'),
                e._uU(243),
                e.ALo(244, 'translate'),
                e.qZA()()(),
                e.TgZ(245, 'div', 71)(246, 'div', 76)(247, 'div', 73),
                e._UZ(248, 'img', 77),
                e.qZA(),
                e.TgZ(249, 'div', 75),
                e._uU(250, '02'),
                e.qZA(),
                e.TgZ(251, 'p'),
                e._uU(252),
                e.ALo(253, 'translate'),
                e.qZA()()(),
                e.TgZ(254, 'div', 71)(255, 'div', 78)(256, 'div', 73),
                e._UZ(257, 'img', 79),
                e.qZA(),
                e.TgZ(258, 'div', 75),
                e._uU(259, '03'),
                e.qZA(),
                e.TgZ(260, 'p'),
                e._uU(261),
                e.ALo(262, 'translate'),
                e.qZA()()(),
                e.TgZ(263, 'div', 71)(264, 'div', 80)(265, 'div', 73),
                e._UZ(266, 'img', 81),
                e.qZA(),
                e.TgZ(267, 'div', 75),
                e._uU(268, '04'),
                e.qZA(),
                e.TgZ(269, 'p'),
                e._uU(270),
                e.ALo(271, 'translate'),
                e.qZA()()(),
                e.TgZ(272, 'div', 71)(273, 'div', 82)(274, 'div', 73),
                e._UZ(275, 'img', 83),
                e.qZA(),
                e.TgZ(276, 'div', 75),
                e._uU(277, '05'),
                e.qZA(),
                e.TgZ(278, 'p'),
                e._uU(279),
                e.ALo(280, 'translate'),
                e.qZA()()(),
                e.TgZ(281, 'div', 71)(282, 'div', 84)(283, 'div', 73),
                e._UZ(284, 'img', 85),
                e.qZA(),
                e.TgZ(285, 'div', 75),
                e._uU(286, '06'),
                e.qZA(),
                e.TgZ(287, 'p'),
                e._uU(288),
                e.ALo(289, 'translate'),
                e.qZA()()()(),
                e._UZ(290, 'facade-presentations'),
                e.qZA(),
                e.TgZ(291, 'div', 86)(292, 'div', 1)(293, 'div', 64)(
                  294,
                  'div',
                  65
                ),
                e._UZ(295, 'div', 66),
                e.ALo(296, 'translate'),
                e.qZA(),
                e.TgZ(297, 'div', 87)(298, 'a', 88),
                e._uU(299),
                e.ALo(300, 'translate'),
                e.qZA()()()()(),
                e.TgZ(301, 'div', 1),
                e._UZ(302, 'div', 89),
                e.ALo(303, 'translate'),
                e.TgZ(304, 'div', 90)(305, 'div', 91),
                e._UZ(306, 'div', 92),
                e.ALo(307, 'translate'),
                e.TgZ(308, 'div', 93),
                e._UZ(309, 'p', 6),
                e.ALo(310, 'translate'),
                e.qZA()(),
                e.TgZ(311, 'div', 91),
                e._UZ(312, 'div', 92),
                e.ALo(313, 'translate'),
                e.TgZ(314, 'div', 93),
                e._UZ(315, 'p', 6),
                e.ALo(316, 'translate'),
                e.qZA()(),
                e.TgZ(317, 'div', 91),
                e._UZ(318, 'div', 92),
                e.ALo(319, 'translate'),
                e.TgZ(320, 'div', 93),
                e._UZ(321, 'p', 6),
                e.ALo(322, 'translate'),
                e.qZA()(),
                e.TgZ(323, 'div', 91),
                e._UZ(324, 'div', 92),
                e.ALo(325, 'translate'),
                e.TgZ(326, 'div', 93),
                e._UZ(327, 'p', 6),
                e.ALo(328, 'translate'),
                e.qZA()()(),
                e._UZ(329, 'facade-faq-ver1'),
                e.qZA()()),
                2 & a &&
                  (e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(5, 72, 'leadership-program.intro.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(8, 74, 'leadership-program.intro.1'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(12, 76, 'leadership-program.intro.2')),
                  e.xp6(2),
                  e.Q6J(
                    'href',
                    '/docs/Ovax_Global_Company_Presentation_' + i.lang + '.pdf',
                    e.LSH
                  ),
                  e.xp6(2),
                  e.hij(' ', e.lcZ(16, 78, 'leadership-program.intro.3'), ' '),
                  e.xp6(5),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(21, 80, 'leadership-program.intro.4'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(23, 82, 'leadership-program.intro.5'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(26, 84, 'leadership-program.intro.6'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(34, 86, 'leadership-program.table.0'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(36, 88, 'leadership-program.table.1'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Q6J('ngForOf', i.lines),
                  e.xp6(6),
                  e.AsE(
                    '',
                    e.lcZ(50, 90, 'leadership-program.table.2'),
                    ' ',
                    i.line.id,
                    ''
                  ),
                  e.xp6(3),
                  e.Oqu(i.line.name),
                  e.xp6(2),
                  e.Q6J('src', 'assets/img/rank-' + i.line.id + '.png', e.LSH),
                  e.xp6(4),
                  e.hij('', e.lcZ(59, 92, i.line.personal), ' '),
                  e.xp6(6),
                  e.Oqu(e.lcZ(65, 94, 'leadership-program.table.3')),
                  e.xp6(5),
                  e.Oqu(e.lcZ(70, 96, 'leadership-program.table.4')),
                  e.xp6(6),
                  e.hij('', e.lcZ(76, 98, i.line.structure), ' '),
                  e.xp6(6),
                  e.Oqu(e.lcZ(82, 100, 'leadership-program.table.5')),
                  e.xp6(5),
                  e.Oqu(e.lcZ(87, 102, 'leadership-program.table.6')),
                  e.xp6(5),
                  e.Q6J('ngForOf', i.depthArr),
                  e.xp6(2),
                  e.Oqu(e.lcZ(94, 104, 'leadership-program.table.7')),
                  e.xp6(2),
                  e.Q6J('ngIf', i.line.bonus > 0),
                  e.xp6(5),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(101, 106, 'leadership-program.table.9'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(103, 108, 'leadership-program.table.10'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(107, 110, 'leadership-program.turnover.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(110, 112, 'leadership-program.turnover.1'),
                    e.oJD
                  ),
                  e.xp6(7),
                  e.hij(
                    '1 ',
                    e.lcZ(117, 114, 'leadership-program.turnover.2'),
                    ''
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(119, 116, 'leadership-program.turnover.3'),
                    e.oJD
                  ),
                  e.xp6(9),
                  e.Oqu(e.lcZ(128, 118, 'leadership-program.turnover.4')),
                  e.xp6(7),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(135, 120, 'leadership-program.turnover.5'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(137, 122, 'leadership-program.turnover.6'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.hij(
                    '2 ',
                    e.lcZ(142, 124, 'leadership-program.turnover.2'),
                    ''
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(144, 126, 'leadership-program.turnover.7'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(152, 128, 'leadership-program.turnover.8'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Oqu(e.lcZ(160, 130, 'leadership-program.turnover.5')),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(162, 132, 'leadership-program.turnover.9'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.hij(
                    '3 ',
                    e.lcZ(167, 134, 'leadership-program.turnover.2'),
                    ''
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(169, 136, 'leadership-program.turnover.10'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(177, 138, 'leadership-program.turnover.11'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Oqu(e.lcZ(185, 140, 'leadership-program.turnover.5')),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(187, 142, 'leadership-program.turnover.12'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.hij(
                    ' 4 ',
                    e.lcZ(192, 144, 'leadership-program.turnover.2'),
                    ' - '
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(195, 146, 'leadership-program.turnover.13'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(203, 148, 'leadership-program.turnover.14'),
                    e.oJD
                  ),
                  e.xp6(8),
                  e.Oqu(e.lcZ(211, 150, 'leadership-program.turnover.5')),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(213, 152, 'leadership-program.turnover.15'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(216, 154, 'leadership-program.turnover.16'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(218, 156, 'leadership-program.turnover.17'),
                    e.oJD
                  ),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(220, 158, 'leadership-program.turnover.18'),
                    e.oJD
                  ),
                  e.xp6(5),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(225, 160, 'leadership-program.banner.0'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(228, 162, 'leadership-program.banner.1'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(232, 164, 'leadership-program.banner.2')),
                  e.xp6(2),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(234, 166, 'leadership-program.more.0'),
                    e.oJD
                  ),
                  e.xp6(10),
                  e.Oqu(e.lcZ(244, 168, 'leadership-program.more.1')),
                  e.xp6(9),
                  e.Oqu(e.lcZ(253, 170, 'leadership-program.more.2')),
                  e.xp6(9),
                  e.Oqu(e.lcZ(262, 172, 'leadership-program.more.3')),
                  e.xp6(9),
                  e.Oqu(e.lcZ(271, 174, 'leadership-program.more.4')),
                  e.xp6(9),
                  e.Oqu(e.lcZ(280, 176, 'leadership-program.more.5')),
                  e.xp6(9),
                  e.Oqu(e.lcZ(289, 178, 'leadership-program.more.6')),
                  e.xp6(7),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(296, 180, 'leadership-program.banner.3'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Oqu(e.lcZ(300, 182, 'leadership-program.banner.4')),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(303, 184, 'leadership-program.faq.0'),
                    e.oJD
                  ),
                  e.xp6(4),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(307, 186, 'leadership-program.faq.1'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(310, 188, 'leadership-program.faq.2'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(313, 190, 'leadership-program.faq.3'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(316, 192, 'leadership-program.faq.4'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(319, 194, 'leadership-program.faq.5'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(322, 196, 'leadership-program.faq.6'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(325, 198, 'leadership-program.faq.7'),
                    e.oJD
                  ),
                  e.xp6(3),
                  e.Q6J(
                    'innerHTML',
                    e.lcZ(328, 200, 'leadership-program.faq.8'),
                    e.oJD
                  ));
            },
            dependencies: [
              r.mk,
              r.sg,
              r.O5,
              r.RF,
              r.n9,
              r.ED,
              x.rH,
              Qe.r,
              Dt,
              Xe,
              r.JJ,
              k.X$,
              Ie.m,
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      function Xo(t, n) {
        if ((1 & t && e._UZ(0, 'img', 1), 2 & t)) {
          const a = e.oxw();
          e.Q6J('src', a.url, e.LSH);
        }
      }
      let Eo = (() => {
        class t {
          constructor() {
            (this.width = Ee.N.imagekit.size.width),
              (this.height = Ee.N.imagekit.size.height);
          }
          get url() {
            return `${Ee.N.imagekit.urlEndpoint}/tr:w-${this.width},h-${this.height}${this.src}`;
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ik-image']],
            inputs: { src: 'src', width: 'width', height: 'height' },
            decls: 1,
            vars: 1,
            consts: [
              ['alt', '', 3, 'src', 4, 'ngIf'],
              ['alt', '', 3, 'src'],
            ],
            template: function (a, i) {
              1 & a && e.YNc(0, Xo, 1, 1, 'img', 0),
                2 & a && e.Q6J('ngIf', i.src);
            },
            dependencies: [r.O5],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      const Bo = ['captchaRef'];
      function Go(t, n) {
        1 & t && e._UZ(0, 'ik-image', 15), 2 & t && e.Q6J('src', n.ngIf);
      }
      function Vo(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 9)(1, 'div', 10)(2, 'div', 11),
            e.YNc(3, Go, 1, 1, 'ik-image', 12),
            e.qZA()(),
            e.TgZ(4, 'div', 13),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, 'div', 14)(7, 'h3'),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, 'p'),
            e._uU(10),
            e.ALo(11, 'date'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.ngLet;
          e.xp6(3),
            e.Q6J('ngIf', a.image),
            e.xp6(2),
            e.hij('\u201c', a.text, '\u201d'),
            e.xp6(3),
            e.Oqu(a.name),
            e.xp6(2),
            e.Oqu(e.xi3(11, 4, a.created_at, 'mediumDate'));
        }
      }
      function Wo(t, n) {
        1 & t && e._UZ(0, 'ik-image', 15), 2 & t && e.Q6J('src', n.ngIf);
      }
      function Ko(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 16)(1, 'div', 10)(2, 'div', 11),
            e.YNc(3, Wo, 1, 1, 'ik-image', 12),
            e.qZA()(),
            e.TgZ(4, 'div', 13),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, 'div', 14)(7, 'h3'),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, 'p'),
            e._uU(10),
            e.ALo(11, 'date'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(3),
            e.Q6J('ngIf', a.image),
            e.xp6(2),
            e.hij('\u201c', a.text, '\u201d'),
            e.xp6(3),
            e.Oqu(a.name),
            e.xp6(2),
            e.Oqu(e.xi3(11, 4, a.created_at, 'mediumDate'));
        }
      }
      function es(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 5),
            e.YNc(1, Vo, 12, 7, 'div', 6),
            e.TgZ(2, 'div', 7),
            e.YNc(3, Ko, 12, 7, 'div', 8),
            e.ALo(4, 'slice'),
            e.qZA()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('ngLet', a.reviews[0]),
            e.xp6(2),
            e.Q6J('ngForOf', e.xi3(4, 2, a.reviews, 1));
        }
      }
      function ts(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 25)(1, 'ngx-turnstile', 26, 27),
            e.NdJ('resolved', function (o) {
              e.CHM(a);
              const s = e.oxw(2);
              return e.KtG(s.onCaptchaResolve(o));
            }),
            e.qZA()();
        }
        if (2 & t) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J('siteKey', a.captcha.key),
            e.uIk('data-language', a.captcha.lang);
        }
      }
      function as(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'form', 17),
            e.NdJ('ngSubmit', function () {
              e.CHM(a);
              const o = e.oxw();
              return e.KtG(o.submit());
            }),
            e.TgZ(1, 'fieldset', 18),
            e._UZ(2, 'div', 19),
            e.ALo(3, 'translate'),
            e.TgZ(4, 'label', 20)(5, 'p'),
            e._uU(6),
            e.ALo(7, 'translate'),
            e.qZA(),
            e._UZ(8, 'input', 21),
            e.ALo(9, 'translate'),
            e.qZA(),
            e.TgZ(10, 'label', 20)(11, 'p'),
            e._uU(12),
            e.ALo(13, 'translate'),
            e.qZA(),
            e._UZ(14, 'textarea', 22),
            e.ALo(15, 'translate'),
            e.qZA(),
            e.YNc(16, ts, 3, 2, 'div', 23),
            e.TgZ(17, 'button', 24),
            e._uU(18),
            e.ALo(19, 'translate'),
            e.qZA()()();
        }
        if (2 & t) {
          const a = e.oxw();
          e.Q6J('formGroup', a.form),
            e.xp6(1),
            e.Q6J('disabled', a.formBusy),
            e.xp6(1),
            e.Q6J('innerHTML', e.lcZ(3, 10, 'reviews.form.0'), e.oJD),
            e.xp6(4),
            e.Oqu(e.lcZ(7, 12, 'reviews.form.1')),
            e.xp6(2),
            e.s9C('placeholder', e.lcZ(9, 14, 'reviews.form.2')),
            e.xp6(4),
            e.Oqu(e.lcZ(13, 16, 'reviews.form.3')),
            e.xp6(2),
            e.s9C('placeholder', e.lcZ(15, 18, 'reviews.form.4')),
            e.xp6(2),
            e.Q6J('ngIf', a.captcha.status),
            e.xp6(1),
            e.Q6J('disabled', a.form.invalid || a.formBusy),
            e.xp6(1),
            e.Oqu(e.lcZ(19, 20, 'reviews.form.5'));
        }
      }
      let ns = (() => {
        class t {
          constructor(a, i, o, s, Z) {
            (this.app = a),
              (this.cdr = i),
              (this.route = o),
              (this.facadeService = s),
              (this.toast = Z),
              (this.captcha = {
                status: !0,
                key: Ee.N.turnstile.siteKey,
                lang: 'en',
              }),
              (this.form = new m.cw({
                name: new m.NI(null, [
                  m.kI.required,
                  m.kI.minLength(2),
                  m.kI.maxLength(64),
                ]),
                message: new m.NI(null, [
                  m.kI.required,
                  m.kI.minLength(2),
                  m.kI.maxLength(1e3),
                ]),
                captcha: new m.NI(null),
              })),
              (this.formBusy = !1),
              (this.reviews = o.snapshot.data.reviews),
              void 0 !== a.config.captcha.reviews &&
                (this.captcha.status = a.config.captcha.reviews),
              this.captcha.status &&
                ((this.captcha.lang = (0, ae.vR)(a.language.code)),
                this.form.get('captcha')?.addValidators([m.kI.required]));
          }
          ngOnInit() {
            this.app.isLogged &&
              this.app.user &&
              this.form.patchValue({ name: this.app.user.name });
          }
          onCaptchaResolve(a) {}
          submit() {
            this.form.invalid ||
              this.formBusy ||
              ((this.formBusy = !0),
              this.facadeService.doReview(this.form.value).subscribe({
                error: () => this.onFormComplete(),
                complete: () => this.onFormComplete(),
                next: () => {
                  this.form.patchValue({ message: null, captcha: null }),
                    this.form.markAsUntouched(),
                    this.toast.success('msg.024');
                },
              }));
          }
          onFormComplete() {
            this.captchaRef && this.captchaRef.reset(),
              (this.formBusy = !1),
              this.cdr.markForCheck();
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(
              e.Y36(U.z),
              e.Y36(e.sBO),
              e.Y36(x.gz),
              e.Y36(ue.e),
              e.Y36(L.k)
            );
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            viewQuery: function (a, i) {
              if ((1 & a && e.Gf(Bo, 5, Oe.os), 2 & a)) {
                let o;
                e.iGM((o = e.CRH())) && (i.captchaRef = o.first);
              }
            },
            decls: 6,
            vars: 5,
            consts: [
              [1, 'reviews'],
              [1, 'container'],
              [
                'data-aos',
                'fade-down',
                'data-aos-delay',
                '0',
                1,
                'm-title',
                'm-title_center',
                3,
                'innerHTML',
              ],
              ['class', 'reviews-wrap', 4, 'ngIf'],
              [
                'class',
                'reviews-form',
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                3,
                'formGroup',
                'ngSubmit',
                4,
                'ngIf',
              ],
              [1, 'reviews-wrap'],
              [
                'class',
                'reviews-item reviews-item_full new',
                'data-text',
                'NEW REVIEW',
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                4,
                'ngLet',
              ],
              [1, 'reviews-three'],
              [
                'class',
                'reviews-item',
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                4,
                'ngFor',
                'ngForOf',
              ],
              [
                'data-text',
                'NEW REVIEW',
                'data-aos',
                'zoom-in',
                'data-aos-delay',
                '0',
                1,
                'reviews-item',
                'reviews-item_full',
                'new',
              ],
              [1, 'reviews-icon'],
              [1, 'reviews-icon__img'],
              ['width', '62', 'height', '62', 3, 'src', 4, 'ngIf'],
              [1, 'reviews-text'],
              [1, 'reviews-hero'],
              ['width', '62', 'height', '62', 3, 'src'],
              ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'reviews-item'],
              [
                'data-aos',
                'fade-up',
                'data-aos-delay',
                '0',
                1,
                'reviews-form',
                3,
                'formGroup',
                'ngSubmit',
              ],
              [3, 'disabled'],
              [1, 'm-title', 3, 'innerHTML'],
              [1, 'cont-input'],
              [
                'type',
                'text',
                'formControlName',
                'name',
                'maxlength',
                '64',
                3,
                'placeholder',
              ],
              [
                'formControlName',
                'message',
                'maxlength',
                '1000',
                3,
                'placeholder',
              ],
              ['class', 'mb-4', 4, 'ngIf'],
              ['type', 'submit', 1, 'm-btn', 3, 'disabled'],
              [1, 'mb-4'],
              [
                'formControlName',
                'captcha',
                'action',
                'reviews',
                'theme',
                'light',
                3,
                'siteKey',
                'resolved',
              ],
              ['captchaRef', ''],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1),
                e._UZ(2, 'div', 2),
                e.ALo(3, 'translate'),
                e.YNc(4, es, 5, 5, 'div', 3),
                e.YNc(5, as, 20, 22, 'form', 4),
                e.qZA()()),
                2 & a &&
                  (e.xp6(2),
                  e.Q6J('innerHTML', e.lcZ(3, 3, 'reviews.list.0'), e.oJD),
                  e.xp6(2),
                  e.Q6J('ngIf', i.reviews.length),
                  e.xp6(1),
                  e.Q6J('ngIf', i.app.isLogged));
            },
            dependencies: [
              r.sg,
              r.O5,
              m._Y,
              m.Fj,
              m.JJ,
              m.JL,
              m.nD,
              m.sg,
              m.u,
              M.h,
              Eo,
              St.$,
              Oe.os,
              Oe.n,
              r.OU,
              r.uU,
              k.X$,
            ],
            styles: [
              '.reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(4), .reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(5), .reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(9), .reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(10), .reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(14), .reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]:nth-child(15){width:50%}@media (max-width: 767px){.reviews-three[_ngcontent-%COMP%]   .reviews-item[_ngcontent-%COMP%]{width:100%!important}}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var pa = T(2821);
      function is(t, n) {
        1 & t && e._UZ(0, 'img', 22), 2 & t && e.Q6J('ngSrc', n.ngIf);
      }
      const ua = function (t) {
        return ['/news', t];
      };
      function os(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 14)(1, 'a', 15)(2, 'div', 16),
            e.YNc(3, is, 1, 1, 'img', 17),
            e.TgZ(4, 'div', 18),
            e._UZ(5, 'img', 19),
            e.qZA(),
            e.TgZ(6, 'p'),
            e._uU(7, '\xa0'),
            e.qZA(),
            e.TgZ(8, 'h3'),
            e._uU(9, '\xa0'),
            e.qZA(),
            e.TgZ(10, 'div', 20),
            e._uU(11),
            e.ALo(12, 'date'),
            e.TgZ(13, 'span'),
            e._uU(14),
            e.ALo(15, 'translate'),
            e.qZA()(),
            e.TgZ(16, 'div', 9)(17, 'h3'),
            e._uU(18),
            e.ALo(19, 'truncate'),
            e.qZA(),
            e._UZ(20, 'p', 10),
            e.ALo(21, 'truncate'),
            e.qZA(),
            e.TgZ(22, 'div', 21),
            e._uU(23),
            e.ALo(24, 'translate'),
            e.qZA()()()()),
          2 & t)
        ) {
          const a = n.ngLet;
          e.xp6(1),
            e.Q6J('routerLink', e.VKq(20, ua, a.id)),
            e.xp6(2),
            e.Q6J('ngIf', a.image),
            e.xp6(8),
            e.hij(' ', e.xi3(12, 7, a.created_at, 'mediumDate'), ' '),
            e.xp6(3),
            e.Oqu(e.lcZ(15, 10, 'news.list.1')),
            e.xp6(4),
            e.Oqu(e.xi3(19, 12, a.title, 120)),
            e.xp6(2),
            e.Q6J('innerHTML', e.xi3(21, 15, a.content || '', 300), e.oJD),
            e.xp6(3),
            e.Oqu(e.lcZ(24, 18, 'news.list.2'));
        }
      }
      function ss(t, n) {
        1 & t && e._UZ(0, 'img', 27), 2 & t && e.Q6J('ngSrc', n.ngIf);
      }
      function rs(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 7)(1, 'a', 23)(2, 'div', 16),
            e.YNc(3, ss, 1, 1, 'img', 24),
            e.TgZ(4, 'div', 18),
            e._UZ(5, 'img', 19),
            e.qZA(),
            e.TgZ(6, 'p'),
            e._uU(7, '\xa0'),
            e.qZA(),
            e.TgZ(8, 'h3'),
            e._uU(9, '\xa0'),
            e.qZA()(),
            e.TgZ(10, 'div', 25)(11, 'div', 20),
            e._uU(12),
            e.ALo(13, 'date'),
            e.qZA(),
            e.TgZ(14, 'div', 9)(15, 'h3'),
            e._uU(16),
            e.ALo(17, 'truncate'),
            e.qZA(),
            e._UZ(18, 'p', 10),
            e.ALo(19, 'truncate'),
            e.qZA(),
            e.TgZ(20, 'div', 12),
            e._uU(21),
            e.ALo(22, 'translate'),
            e._UZ(23, 'img', 26),
            e.qZA()()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(1),
            e.Q6J('routerLink', e.VKq(17, ua, a.id)),
            e.xp6(2),
            e.Q6J('ngIf', a.image),
            e.xp6(9),
            e.Oqu(e.xi3(13, 6, a.created_at, 'mediumDate')),
            e.xp6(4),
            e.Oqu(e.xi3(17, 9, a.title, 45)),
            e.xp6(2),
            e.Q6J('innerHTML', e.xi3(19, 12, a.content || '', 175), e.oJD),
            e.xp6(3),
            e.hij(' ', e.lcZ(22, 15, 'news.list.2'), ' ');
        }
      }
      function ls(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 4),
            e.YNc(1, os, 25, 22, 'div', 5),
            e.YNc(2, rs, 24, 19, 'div', 6),
            e.ALo(3, 'slice'),
            e.TgZ(4, 'div', 7)(5, 'a', 8)(6, 'div', 9),
            e._UZ(7, 'h3', 10),
            e.ALo(8, 'translate'),
            e._UZ(9, 'p', 10),
            e.ALo(10, 'translate'),
            e.qZA(),
            e._UZ(11, 'img', 11),
            e.TgZ(12, 'div', 12),
            e._uU(13),
            e.ALo(14, 'translate'),
            e._UZ(15, 'img', 13),
            e.qZA()()()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('ngLet', a.news[0]),
            e.xp6(1),
            e.Q6J('ngForOf', e.xi3(3, 5, a.news, 1)),
            e.xp6(5),
            e.Q6J('innerHTML', e.lcZ(8, 8, 'news.list.3'), e.oJD),
            e.xp6(2),
            e.Q6J('innerHTML', e.lcZ(10, 10, 'news.list.4'), e.oJD),
            e.xp6(4),
            e.hij(' ', e.lcZ(14, 12, 'news.list.2'), ' ');
        }
      }
      let cs = (() => {
          class t {
            constructor(a) {
              (this.route = a), (this.news = a.snapshot.data.news);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(x.gz));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 6,
              vars: 4,
              consts: [
                [1, 'news-page'],
                [1, 'container'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-title',
                  3,
                  'innerHTML',
                ],
                ['class', 'row', 4, 'ngIf'],
                [1, 'row'],
                [
                  'class',
                  'col-lg-6',
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  4,
                  'ngLet',
                ],
                [
                  'class',
                  'col-lg-3 col-sm-6',
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                [
                  'data-aos',
                  'zoom-in',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-3',
                  'col-sm-6',
                ],
                ['routerLink', '/offers', 1, 'news-more', 'news-more_page'],
                [1, 'news-text'],
                [3, 'innerHTML'],
                ['src', 'assets/img/news-more-img.svg', 'alt', ''],
                [1, 'news-btn'],
                ['src', 'assets/img/news-arrow-white.svg', 'alt', ''],
                ['data-aos', 'zoom-in', 'data-aos-delay', '0', 1, 'col-lg-6'],
                [1, 'news', 'news_new', 3, 'routerLink'],
                [1, 'about-prof__item'],
                [
                  'width',
                  '690',
                  'height',
                  '459',
                  'alt',
                  '',
                  3,
                  'ngSrc',
                  4,
                  'ngIf',
                ],
                [1, 'about-prof__logo'],
                ['src', 'assets/img/logo.svg', 'alt', ''],
                [1, 'news-date'],
                [1, 'm-btn'],
                ['width', '690', 'height', '459', 'alt', '', 3, 'ngSrc'],
                [1, 'news', 'news_page', 3, 'routerLink'],
                [
                  'width',
                  '330',
                  'height',
                  '150',
                  'alt',
                  '',
                  3,
                  'ngSrc',
                  4,
                  'ngIf',
                ],
                [1, 'news-content'],
                ['src', 'assets/img/news-arrow.svg', 'alt', ''],
                ['width', '330', 'height', '150', 'alt', '', 3, 'ngSrc'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1),
                  e._UZ(2, 'div', 2),
                  e.ALo(3, 'translate'),
                  e.YNc(4, ls, 16, 14, 'div', 3),
                  e._UZ(5, 'facade-faq-ver2'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(3, 2, 'news.list.0'), e.oJD),
                    e.xp6(2),
                    e.Q6J('ngIf', i.news.length));
              },
              dependencies: [
                r.sg,
                r.O5,
                x.rH,
                r.Zd,
                M.h,
                Zt,
                r.OU,
                r.uU,
                k.X$,
                pa.W,
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        ds = (() => {
          class t {
            constructor(a, i, o, s) {
              (this.app = a),
                (this.route = i),
                (this.title = o),
                (this.newsService = s),
                (this.news = i.snapshot.data.news),
                this.newsService.title$.next(this.news.title);
            }
            ngOnInit() {
              this.title.setTitle(`${this.news.title} - ${this.app.appName}`);
            }
            ngOnDestroy() {
              this.newsService.title$.next(null);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(
                e.Y36(U.z),
                e.Y36(x.gz),
                e.Y36(Ht.Dx),
                e.Y36(f)
              );
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              decls: 8,
              vars: 5,
              consts: [
                [1, 'news-page'],
                [1, 'container'],
                [1, 'row'],
                ['data-aos', 'fade-up', 'data-aos-delay', '0', 1, 'col-12'],
                [1, 'news-page__date'],
                [1, 'main-text', 3, 'innerHTML'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(
                    3,
                    'div',
                    3
                  )(4, 'div', 4),
                  e._uU(5),
                  e.ALo(6, 'date'),
                  e.qZA(),
                  e._UZ(7, 'div', 5),
                  e.qZA()()()()),
                  2 & a &&
                    (e.xp6(5),
                    e.Oqu(e.xi3(6, 2, i.news.created_at, 'mediumDate')),
                    e.xp6(2),
                    e.Q6J('innerHTML', i.news.content, e.oJD));
              },
              dependencies: [r.uU],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      var ma = T(1312);
      function ps(t, n) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'div', 15),
            e.NdJ('click', function () {
              const s = e.CHM(a).$implicit,
                Z = e.oxw();
              return e.KtG(Z.setCategory(s));
            }),
            e._uU(1),
            e.TgZ(2, 'span'),
            e._uU(3),
            e.ALo(4, 'number'),
            e.qZA(),
            e.O4$(),
            e.TgZ(5, 'svg'),
            e._UZ(6, 'use', 16),
            e.qZA()();
        }
        if (2 & t) {
          const a = n.$implicit,
            i = e.oxw();
          e.ekj('active', a.id === i.category.id),
            e.xp6(1),
            e.hij(' ', a.name, ' '),
            e.xp6(2),
            e.Oqu(e.lcZ(4, 4, a.items.length));
        }
      }
      function us(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 17)(1, 'div', 18)(2, 'b'),
            e._uU(3),
            e.TgZ(4, 'span'),
            e._uU(5, '.'),
            e.qZA()(),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, 'div', 19),
            e._UZ(8, 'div', 20),
            e.qZA()()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = n.index;
          e.xp6(3),
            e.Oqu(i + 1),
            e.xp6(3),
            e.hij(' ', a.question, ' '),
            e.xp6(2),
            e.Q6J('innerHTML', a.answer, e.oJD);
        }
      }
      let ms = (() => {
          class t {
            constructor(a, i, o) {
              (this.route = a),
                (this.cdr = i),
                (this.translateService = o),
                (this.categories = a.snapshot.data.categories),
                this.translateService.get('faq.categories').subscribe((s) => {
                  this.categories.forEach((Z) => {
                    Z.name = s[Z.id - 1] ?? '';
                  });
                }),
                (this.category = this.categories[0]);
            }
            setCategory(a) {
              a.id !== this.category.id &&
                ((this.category = a),
                this.cdr.markForCheck(),
                this.accordion &&
                  setTimeout(() => {
                    this.accordion.initPlugin();
                  }, 100));
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(x.gz), e.Y36(e.sBO), e.Y36(k.sK));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              viewQuery: function (a, i) {
                if ((1 & a && e.Gf(ma.w, 5), 2 & a)) {
                  let o;
                  e.iGM((o = e.CRH())) && (i.accordion = o.first);
                }
              },
              decls: 18,
              vars: 5,
              consts: [
                [1, 'faq'],
                [1, 'container'],
                [
                  'data-aos',
                  'fade-down',
                  'data-aos-delay',
                  '0',
                  1,
                  'faq-title',
                  3,
                  'innerHTML',
                ],
                [1, 'row'],
                [
                  'data-aos',
                  'fade-right',
                  'data-aos-delay',
                  '0',
                  1,
                  'col-lg-4',
                ],
                [1, 'faq-tabs__wrap'],
                ['nicescroll', '', 1, 'nicescroll-box'],
                [1, 'wrap'],
                [1, 'faq-tabs'],
                [
                  'class',
                  'faq-tabs__item',
                  3,
                  'active',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf',
                ],
                ['data-aos', 'fade-left', 'data-aos-delay', '0', 1, 'col-lg-8'],
                [1, 'faq-content'],
                ['nicescroll', '', 'label', 'accordion', 1, 'box'],
                ['accordion', '', 1, 'accordion'],
                ['class', 'accordion__item', 4, 'ngFor', 'ngForOf'],
                [1, 'faq-tabs__item', 3, 'click'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                [1, 'accordion__item'],
                [1, 'accordion__head'],
                [1, 'accordion__body'],
                [1, 'accordion__text', 3, 'innerHTML'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1),
                  e._UZ(2, 'div', 2),
                  e.ALo(3, 'translate'),
                  e.TgZ(4, 'div', 3)(5, 'div', 4)(6, 'div', 5)(7, 'div', 6)(
                    8,
                    'div',
                    7
                  )(9, 'div', 8),
                  e.YNc(10, ps, 7, 6, 'div', 9),
                  e.qZA()()()()(),
                  e.TgZ(11, 'div', 10)(12, 'div', 11)(13, 'div', 12)(
                    14,
                    'div',
                    7
                  )(15, 'div', 13),
                  e.YNc(16, us, 9, 3, 'div', 14),
                  e.qZA()()()()()(),
                  e._UZ(17, 'facade-faq-ver1'),
                  e.qZA()()),
                  2 & a &&
                    (e.xp6(2),
                    e.Q6J('innerHTML', e.lcZ(3, 3, 'faq.list.0'), e.oJD),
                    e.xp6(8),
                    e.Q6J('ngForOf', i.categories),
                    e.xp6(6),
                    e.Q6J('ngForOf', i.category.items));
              },
              dependencies: [r.sg, Qe.r, ma.w, Xe, r.JJ, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        ga = (() => {
          class t {
            constructor(a) {
              this.elem = a;
            }
            start() {
              $(this.elem.nativeElement).animate({ width: '100%' }, 2e3);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(e.SBq));
            }),
            (t.ɵdir = e.lG2({ type: t, selectors: [['', 'dynamicLine', '']] })),
            t
          );
        })();
      var gs = T(668),
        _s = T.n(gs);
      const fs = ['roadRef'];
      function Zs(t, n) {
        1 & t && (e.TgZ(0, 'p'), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'home.roadmap.1')));
      }
      function vs(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 15)(1, 'div', 16),
            e.YNc(2, Zs, 3, 3, 'p', 17),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.xp6(2), e.Q6J('ngIf', a > 2023), e.xp6(2), e.Oqu(a);
        }
      }
      function hs(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 20)(1, 'div', 21)(2, 'div', 22),
            e._uU(3),
            e.qZA(),
            e.TgZ(4, 'div', 23)(5, 'h3'),
            e._uU(6),
            e.ALo(7, 'translate'),
            e.qZA(),
            e.TgZ(8, 'p'),
            e._uU(9),
            e.ALo(10, 'translate'),
            e.qZA()(),
            e.TgZ(11, 'div', 24),
            e._uU(12),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit,
            i = e.oxw().$implicit;
          e.xp6(1),
            e.ekj('active', i < 2023 || (2023 === i && a < 3)),
            e.xp6(2),
            e.hij('Q', a, ''),
            e.xp6(3),
            e.Oqu(e.lcZ(7, 6, 'roadmap.items.' + i + '.q' + a + '.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(10, 8, 'roadmap.items.' + i + '.q' + a + '.2')),
            e.xp6(3),
            e.Oqu(i);
        }
      }
      const As = function () {
        return [1, 2, 3, 4];
      };
      function Ts(t, n) {
        1 & t &&
          (e.TgZ(0, 'div', 15)(1, 'div', 18),
          e.YNc(2, hs, 13, 10, 'div', 19),
          e.qZA()()),
          2 & t && (e.xp6(2), e.Q6J('ngForOf', e.DdM(1, As)));
      }
      let xs = (() => {
          class t {
            constructor() {
              (this.years = [2020, 2021, 2022, 2023, 2024, 2025]),
                (this.swiperParams = [
                  {
                    loop: !0,
                    slidesPerView: 2,
                    spaceBetween: 35,
                    slideToClickedSlide: !0,
                    allowTouchMove: !1,
                    speed: 150,
                    autoplay: {
                      delay: 3e3,
                      disableOnInteraction: !0,
                      waitForTransition: !0,
                    },
                    navigation: {
                      nextEl: '.road-years__nav .swiper-button-next',
                      prevEl: '.road-years__nav .swiper-button-prev',
                    },
                    breakpoints: {
                      991: { slidesPerView: 6 },
                      767: { slidesPerView: 6 },
                      505: { slidesPerView: 4 },
                    },
                  },
                  {
                    modules: [],
                    loop: !0,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    effect: 'fade',
                    allowTouchMove: !1,
                    fadeEffect: { crossFade: !0 },
                    speed: 300,
                  },
                ]);
            }
            moveRoad(a) {
              this.roadRef && this.roadRef.slideTo(a + 1);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['facade-roadmap']],
              viewQuery: function (a, i) {
                if ((1 & a && e.Gf(fs, 5, we.T), 2 & a)) {
                  let o;
                  e.iGM((o = e.CRH())) && (i.roadRef = o.first);
                }
              },
              decls: 24,
              vars: 7,
              consts: [
                [1, 'road'],
                [1, 'container'],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '0',
                  1,
                  'm-num',
                  'm-num_noline',
                ],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '200',
                  1,
                  'm-title',
                  3,
                  'innerHTML',
                ],
                [
                  'data-aos',
                  'fade-left',
                  'data-aos-delay',
                  '400',
                  1,
                  'road-years',
                ],
                [1, 'swiper', 3, 'swiper', 'onSlideChange'],
                [1, 'swiper-wrapper'],
                ['class', 'swiper-slide', 4, 'ngFor', 'ngForOf'],
                [1, 'road-years__nav'],
                [1, 'swiper-button-prev'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
                [1, 'swiper-button-next'],
                ['data-aos', 'fade-left', 'data-aos-delay', '600', 1, 'road-q'],
                [1, 'swiper', 3, 'swiper'],
                ['roadRef', ''],
                [1, 'swiper-slide'],
                [1, 'road-years__item'],
                [4, 'ngIf'],
                [1, 'row'],
                ['class', 'col-lg-3 col-md-6', 4, 'ngFor', 'ngForOf'],
                [1, 'col-lg-3', 'col-md-6'],
                [1, 'road-q__item'],
                [1, 'road-q__top'],
                [1, 'm-text'],
                [1, 'road-q__bot'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'div', 2)(3, 'span'),
                  e._uU(4, '/ '),
                  e.qZA(),
                  e._uU(5, '09 '),
                  e.qZA(),
                  e._UZ(6, 'div', 3),
                  e.ALo(7, 'translate'),
                  e.TgZ(8, 'div', 4)(9, 'div', 5),
                  e.NdJ('onSlideChange', function (s) {
                    return i.moveRoad(s);
                  }),
                  e.TgZ(10, 'div', 6),
                  e.YNc(11, vs, 5, 2, 'div', 7),
                  e.qZA()(),
                  e.TgZ(12, 'div', 8)(13, 'div', 9),
                  e.O4$(),
                  e.TgZ(14, 'svg'),
                  e._UZ(15, 'use', 10),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(16, 'div', 11),
                  e.O4$(),
                  e.TgZ(17, 'svg'),
                  e._UZ(18, 'use', 10),
                  e.qZA()()()(),
                  e.kcU(),
                  e.TgZ(19, 'div', 12)(20, 'div', 13, 14)(22, 'div', 6),
                  e.YNc(23, Ts, 3, 2, 'div', 7),
                  e.qZA()()()()()),
                  2 & a &&
                    (e.xp6(6),
                    e.Q6J('innerHTML', e.lcZ(7, 5, 'home.roadmap.0'), e.oJD),
                    e.xp6(3),
                    e.Q6J('swiper', i.swiperParams[0]),
                    e.xp6(2),
                    e.Q6J('ngForOf', i.years),
                    e.xp6(9),
                    e.Q6J('swiper', i.swiperParams[1]),
                    e.xp6(3),
                    e.Q6J('ngForOf', i.years));
              },
              dependencies: [r.sg, r.O5, we.T, k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        qs = (() => {
          class t {
            constructor() {
              this.modalService = (0, e.f3M)(Be.Z);
            }
            close() {
              this.modalService.hide();
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['ng-component']],
              hostBindings: function (a, i) {
                1 & a &&
                  e.NdJ(
                    'keydown.escape',
                    function () {
                      return i.close();
                    },
                    !1,
                    e.evT
                  );
              },
              decls: 39,
              vars: 21,
              consts: [
                [1, 'cab-modal', 'active', 'flex-row'],
                [1, 'mfp-container', 'mfp-inline-holder'],
                [1, 'mfp-content'],
                [1, 'app-modal'],
                [1, 'mfp-close', 3, 'click'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#close'],
                [1, 'app-modal__icon'],
                ['src', 'assets/img/app-modal-icon.svg', 'alt', ''],
                [1, 'm-title', 3, 'innerHTML'],
                [1, 'app-modal__info'],
                [1, 'app-modal__info-title'],
                [1, 'app-modal__info-icon'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#app-modal-phone'],
                [1, 'app-modal__info-content'],
                [0, 'xlink', 'href', 'assets/img/sprite.svg#download-3'],
                [3, 'innerHTML'],
                [1, 'app-modal__btn', 3, 'click'],
              ],
              template: function (a, i) {
                1 & a &&
                  (e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(
                    4,
                    'div',
                    4
                  ),
                  e.NdJ('click', function () {
                    return i.close();
                  }),
                  e.O4$(),
                  e.TgZ(5, 'svg'),
                  e._UZ(6, 'use', 5),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(7, 'div', 6),
                  e._UZ(8, 'img', 7),
                  e.qZA(),
                  e._UZ(9, 'div', 8),
                  e.ALo(10, 'translate'),
                  e.TgZ(11, 'div', 9)(12, 'div', 10)(13, 'div', 11),
                  e.O4$(),
                  e.TgZ(14, 'svg'),
                  e._UZ(15, 'use', 12),
                  e.qZA()(),
                  e._uU(16),
                  e.ALo(17, 'translate'),
                  e.qZA(),
                  e.kcU(),
                  e.TgZ(18, 'div', 13)(19, 'p'),
                  e._uU(20),
                  e.ALo(21, 'translate'),
                  e.qZA(),
                  e.TgZ(22, 'ul')(23, 'li')(24, 'p'),
                  e._uU(25),
                  e.ALo(26, 'translate'),
                  e.TgZ(27, 'span'),
                  e.O4$(),
                  e.TgZ(28, 'svg'),
                  e._UZ(29, 'use', 14),
                  e.qZA()()()(),
                  e.kcU(),
                  e.TgZ(30, 'li'),
                  e._UZ(31, 'p', 15),
                  e.ALo(32, 'translate'),
                  e.qZA(),
                  e.TgZ(33, 'li'),
                  e._UZ(34, 'p', 15),
                  e.ALo(35, 'translate'),
                  e.qZA()()()(),
                  e.TgZ(36, 'div', 16),
                  e.NdJ('click', function () {
                    return i.close();
                  }),
                  e._uU(37),
                  e.ALo(38, 'translate'),
                  e.qZA()()()()()),
                  2 & a &&
                    (e.xp6(9),
                    e.Q6J('innerHTML', e.lcZ(10, 7, 'home.app.modal.0'), e.oJD),
                    e.xp6(7),
                    e.hij(' ', e.lcZ(17, 9, 'home.app.modal.1'), ' '),
                    e.xp6(4),
                    e.Oqu(e.lcZ(21, 11, 'home.app.modal.2')),
                    e.xp6(5),
                    e.hij('', e.lcZ(26, 13, 'home.app.modal.3'), ' '),
                    e.xp6(6),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(32, 15, 'home.app.modal.4'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Q6J(
                      'innerHTML',
                      e.lcZ(35, 17, 'home.app.modal.5'),
                      e.oJD
                    ),
                    e.xp6(3),
                    e.Oqu(e.lcZ(38, 19, 'home.app.modal.6')));
              },
              dependencies: [k.X$],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      function ys(t, n) {
        1 & t && (e.TgZ(0, 'a', 8), e._UZ(1, 'img', 9), e.qZA()),
          2 & t && e.Q6J('href', n.ngIf, e.LSH);
      }
      let Ls = (() => {
        class t {
          constructor() {
            (this.modalService = (0, e.f3M)(Be.Z)),
              (this.googlePlayLink =
                'https://play.google.com/store/apps/details?id=com.ovaxglobal.app');
          }
          showPopup() {
            this.modalService.show(qs, {});
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['facade-mobile-app']],
            decls: 12,
            vars: 7,
            consts: [
              [1, 'container'],
              [1, 'app'],
              [1, 'm-title', 'm-title_white', 3, 'innerHtml'],
              [1, 'm-text', 'm-text_white'],
              [1, 'app-list'],
              ['href', 'javascript:void(0)', 1, 'soon', 3, 'click'],
              ['src', 'assets/img/app-1.svg', 'alt', ''],
              ['target', '_blank', 3, 'href', 4, 'ngIf'],
              ['target', '_blank', 3, 'href'],
              ['src', 'assets/img/app-2.svg', 'alt', ''],
            ],
            template: function (a, i) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e._UZ(2, 'div', 2),
                e.ALo(3, 'translate'),
                e.TgZ(4, 'div', 3)(5, 'p'),
                e._uU(6),
                e.ALo(7, 'translate'),
                e.qZA()(),
                e.TgZ(8, 'div', 4)(9, 'a', 5),
                e.NdJ('click', function () {
                  return i.showPopup();
                }),
                e._UZ(10, 'img', 6),
                e.qZA(),
                e.YNc(11, ys, 2, 1, 'a', 7),
                e.qZA()()()),
                2 & a &&
                  (e.xp6(2),
                  e.Q6J('innerHtml', e.lcZ(3, 3, 'home.app.banner.0'), e.oJD),
                  e.xp6(4),
                  e.Oqu(e.lcZ(7, 5, 'home.app.banner.1')),
                  e.xp6(5),
                  e.Q6J('ngIf', i.googlePlayLink));
            },
            dependencies: [r.O5, k.X$],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      const Us = ['numbersSection'];
      function bs(t, n) {
        if ((1 & t && (e._UZ(0, 'img', 214), e.ALo(1, 'imagekit')), 2 & t)) {
          const a = e.oxw().$implicit;
          e.Q6J('src', e.Dn7(1, 1, a.image, 255, 155), e.LSH);
        }
      }
      const ws = function (t) {
        return ['/news', t];
      };
      function Os(t, n) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 209)(1, 'a', 211)(2, 'div', 212),
            e.YNc(3, bs, 2, 5, 'img', 213),
            e.TgZ(4, 'div', 21),
            e._UZ(5, 'img', 22),
            e.qZA()(),
            e.TgZ(6, 'h3'),
            e._uU(7),
            e.ALo(8, 'truncate'),
            e.qZA()()()),
          2 & t)
        ) {
          const a = n.$implicit;
          e.uIk('data-aos-delay', 200 * n.index),
            e.xp6(1),
            e.Q6J('routerLink', e.VKq(7, ws, a.id)),
            e.xp6(2),
            e.Q6J('ngIf', a.image),
            e.xp6(4),
            e.Oqu(e.xi3(8, 4, a.title, 60));
        }
      }
      function Cs(t, n) {
        if (
          (1 & t &&
            (e.O4$(),
            e.kcU(),
            e.ynx(0),
            e.TgZ(1, 'div', 31)(2, 'span'),
            e._uU(3, '/ '),
            e.qZA(),
            e._uU(4, '08 '),
            e.qZA(),
            e._UZ(5, 'div', 32),
            e.ALo(6, 'translate'),
            e.TgZ(7, 'div', 3),
            e.YNc(8, Os, 9, 9, 'div', 208),
            e.TgZ(9, 'div', 209)(10, 'a', 210)(11, 'h3'),
            e._uU(12),
            e.ALo(13, 'translate'),
            e.qZA(),
            e.TgZ(14, 'p'),
            e._uU(15),
            e.ALo(16, 'translate'),
            e.O4$(),
            e.TgZ(17, 'svg'),
            e._UZ(18, 'use', 15),
            e.qZA()()()()(),
            e.BQk()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(5),
            e.Q6J('innerHTML', e.lcZ(6, 5, 'home.news.0'), e.oJD),
            e.xp6(3),
            e.Q6J('ngForOf', a.news),
            e.xp6(1),
            e.uIk('data-aos-delay', 200 * (a.news.length + 1)),
            e.xp6(3),
            e.Oqu(e.lcZ(13, 7, 'home.news.1')),
            e.xp6(3),
            e.hij(' ', e.lcZ(16, 9, 'home.news.2'), ' ');
        }
      }
      const ks = [
        {
          path: '',
          component: Ia,
          children: [
            {
              path: '',
              component: (() => {
                class t {
                  constructor(a, i, o, s) {
                    (this.app = a),
                      (this.sanitizer = i),
                      (this.route = o),
                      (this.homePageService = s),
                      (this.dynamicInitialized = !1),
                      (this.stepsArrowSvg =
                        '<svg width="837" height="249" viewbox="0 0 837 249" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="path1" opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M39.1088 24.5608L4.09483 0.586426L0.839355 42.8966L13.9693 36.6058L30.0293 64.2648C44.7443 89.6072 65.1945 111.148 89.7391 127.158L200.001 199.081C226.911 216.634 257.88 226.978 289.938 229.12L577.012 248.303C637.467 252.343 696.148 226.92 734.548 180.053L836.801 55.2535L825.199 45.7469L722.945 170.546C687.617 213.664 633.631 237.053 578.012 233.337L290.938 214.153C261.445 212.183 232.953 202.666 208.196 186.517L97.9342 114.594C75.3531 99.865 56.5389 80.0477 43.0011 56.7327L27.5393 30.104L39.1088 24.5608Z" fill="url(#paint0_linear_3362_387)"></path><defs><lineargradient id="paint0_linear_3362_387" x1="7" y1="20" x2="807.5" y2="72.4999" gradientunits="userSpaceOnUse"><stop stop-color="#3AB446"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></lineargradient></defs></svg><div class="pay-logos"><img src="assets/img/steps-btc.svg" alt><img src="assets/img/steps-eth.svg" alt><img src="assets/img/steps-usdt.svg" alt><img src="assets/img/steps-btc.svg" alt><img src="assets/img/steps-eth.svg" alt></div>');
                    const Z = o.snapshot.data.article;
                    (this.news = this.route.snapshot.data.news),
                      Z.videos.length &&
                        this.homePageService.videos$.next(Z.videos),
                      (this.stepsArrowSvg =
                        this.sanitizer.bypassSecurityTrustHtml(
                          this.stepsArrowSvg
                        ));
                  }
                  ngOnDestroy() {
                    this.homePageService.videos$.next(null);
                  }
                  ngAfterViewInit() {
                    const a = document.querySelectorAll('.parallax-scene');
                    a.length && a.forEach((i) => new (_s())(i, { limitX: 1 }));
                  }
                  onWindowScroll(a) {
                    this.dynamicInitialized ||
                      (window.scrollY + window.innerHeight >=
                        this.numbersSection.nativeElement.offsetTop + 100 &&
                        ((this.dynamicInitialized = !0),
                        this.dynamicNumbers.forEach((s) => s.start()),
                        this.dynamicLines.forEach((s) => s.start())));
                  }
                }
                return (
                  (t.ɵfac = function (a) {
                    return new (a || t)(
                      e.Y36(U.z),
                      e.Y36(Ht.H7),
                      e.Y36(x.gz),
                      e.Y36(H)
                    );
                  }),
                  (t.ɵcmp = e.Xpm({
                    type: t,
                    selectors: [['ng-component']],
                    viewQuery: function (a, i) {
                      if (
                        (1 & a && (e.Gf(Us, 5), e.Gf(_t, 5), e.Gf(ga, 5)),
                        2 & a)
                      ) {
                        let o;
                        e.iGM((o = e.CRH())) && (i.numbersSection = o.first),
                          e.iGM((o = e.CRH())) && (i.dynamicNumbers = o),
                          e.iGM((o = e.CRH())) && (i.dynamicLines = o);
                      }
                    },
                    hostBindings: function (a, i) {
                      1 & a &&
                        e.NdJ(
                          'scroll',
                          function (s) {
                            return i.onWindowScroll(s);
                          },
                          !1,
                          e.Jf7
                        );
                    },
                    decls: 712,
                    vars: 350,
                    consts: [
                      [1, 'about'],
                      [1, 'container'],
                      [
                        'data-aos',
                        'fade-down',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-num',
                      ],
                      [1, 'row'],
                      [1, 'col-lg-7'],
                      [
                        'data-aos',
                        'fade-right',
                        'data-aos-delay',
                        '0',
                        1,
                        'about-wrap',
                      ],
                      ['src', 'assets/img/about-img.png', 'alt', ''],
                      [1, 'm-title', 3, 'innerHTML'],
                      [1, 'about-text'],
                      [3, 'innerHTML'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '200',
                        1,
                        'col-md-6',
                      ],
                      [1, 'm-text'],
                      [
                        'data-aos',
                        'fade-right',
                        'data-aos-delay',
                        '400',
                        1,
                        'about-btns',
                      ],
                      ['routerLink', '/about', 1, 'm-btn', 'm-btn_big'],
                      ['routerLink', '/legal', 1, 'm-link'],
                      [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow'],
                      [
                        'data-aos',
                        'fade-left',
                        'data-aos-delay',
                        '400',
                        1,
                        'col-lg-5',
                      ],
                      [1, 'about-prof'],
                      [1, 'about-prof__text'],
                      [1, 'about-prof__list'],
                      ['href', 'javascript:void(0)', 1, 'about-prof__item'],
                      [1, 'about-prof__logo'],
                      ['src', 'assets/img/logo.svg', 'alt', ''],
                      ['src', 'assets/img/about-prof-1.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-2.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-3.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-4.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-5.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-6.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-7.png', 'alt', ''],
                      ['src', 'assets/img/about-prof-8.png', 'alt', ''],
                      [
                        'data-aos',
                        'fade-down',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-num',
                        'm-num_center',
                      ],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-title',
                        'm-title_center',
                        3,
                        'innerHTML',
                      ],
                      [1, 'about-model__list'],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '0',
                        1,
                        'about-model',
                      ],
                      [1, 'about-model__text'],
                      ['routerLink', '/offers', 1, 'about-model__btn'],
                      [1, 'about-model__percent'],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '0',
                        1,
                        'about-model',
                        'about-model_2',
                      ],
                      [
                        'routerLink',
                        '/referral-program',
                        1,
                        'about-model__btn',
                      ],
                      [1, 'about-model__bonus'],
                      ['src', 'assets/img/about-bonus-icon.png', 'alt', ''],
                      ['src', 'assets/img/about-bonus-arrow.svg', 'alt', ''],
                      [1, 'about-cont'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '0',
                        1,
                        'col-lg-4',
                        'col-md-6',
                      ],
                      [1, 'about-cont__item'],
                      [1, 'about-cont__box'],
                      [1, 'about-cont__img'],
                      ['src', 'assets/img/about-cont-1.png', 'alt', ''],
                      [1, 'about-cont__title', 3, 'innerHTML'],
                      ['routerLink', '/contacts', 1, 'about-cont__btn'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '200',
                        1,
                        'col-lg-4',
                        'col-md-6',
                      ],
                      [1, 'about-cont__item', 'about-cont__item_2'],
                      ['src', 'assets/img/about-cont-2.png', 'alt', ''],
                      [1, 'about-cont__text'],
                      [1, 'about-cont__num'],
                      ['target', '_blank', 1, 'about-cont__btn', 3, 'href'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '400',
                        1,
                        'col-lg-4',
                      ],
                      [1, 'about-cont__item', 'about-cont__item_3'],
                      ['src', 'assets/img/about-cont-3.png', 'alt', ''],
                      [1, 'number'],
                      ['numbersSection', ''],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '100',
                        1,
                        'm-title',
                        'm-title_center',
                        3,
                        'innerHTML',
                      ],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '200',
                        1,
                        'm-text',
                        'm-text_center',
                      ],
                      [1, 'number-list'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '0',
                        1,
                        'number-item',
                      ],
                      [1, 'number-item__val'],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '98',
                        'data-decimals',
                        '0',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [1, 'number-item__title'],
                      [1, 'number-chart'],
                      [
                        'dynamicLine',
                        '',
                        1,
                        'number-chart__line',
                        'number-chart__line_1',
                      ],
                      ['src', 'assets/img/num-chart-green-1.svg', 'alt', ''],
                      [
                        'dynamicLine',
                        '',
                        1,
                        'number-chart__line',
                        'number-chart__line_2',
                      ],
                      ['src', 'assets/img/num-chart-red-1.svg', 'alt', ''],
                      [1, 'green'],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '98000',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [1, 'red'],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '51000',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [1, 'number-item__bot'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '200',
                        1,
                        'number-item',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '49',
                        'data-decimals',
                        '0',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      ['src', 'assets/img/num-chart-green-2.svg', 'alt', ''],
                      ['src', 'assets/img/num-chart-red-2.svg', 'alt', ''],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '49',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '23',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '400',
                        1,
                        'number-item',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '1.7',
                        'data-decimals',
                        '1',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      ['src', 'assets/img/num-chart-green-3.svg', 'alt', ''],
                      ['src', 'assets/img/num-chart-red-3.svg', 'alt', ''],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '1700',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '400',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '600',
                        1,
                        'number-item',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '1.3',
                        'data-decimals',
                        '1',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      ['src', 'assets/img/num-chart-green-4.svg', 'alt', ''],
                      ['src', 'assets/img/num-chart-red-4.svg', 'alt', ''],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '1350',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '500',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '800',
                        1,
                        'number-item',
                      ],
                      ['src', 'assets/img/num-chart-green-5.svg', 'alt', ''],
                      ['src', 'assets/img/num-chart-red-5.svg', 'alt', ''],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '1715850',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [
                        'data-from',
                        '0',
                        'data-to',
                        '755000',
                        'data-decimals',
                        '0',
                        'data-format',
                        'currency',
                        'dynamicNumber',
                        '',
                        1,
                        'dynamicNumber',
                      ],
                      [1, 'make'],
                      [1, 'make-content'],
                      [
                        'data-aos',
                        'fade-right',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-title',
                        'm-title_white',
                        3,
                        'innerHTML',
                      ],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '0',
                        1,
                        'steps',
                      ],
                      [1, 'steps-item', 'steps-item_1'],
                      [1, 'steps-item__num'],
                      [1, 'steps-item__title'],
                      [1, 'steps-item__text'],
                      [1, 'steps-item__img'],
                      ['src', 'assets/img/steps-img-1.png', 'alt', ''],
                      [1, 'steps-item', 'steps-item_2'],
                      [1, 'steps-item__logo'],
                      ['src', 'assets/img/steps-img-2.png', 'alt', ''],
                      [1, 'steps-item', 'steps-item_3'],
                      [1, 'steps-item__list'],
                      [1, 'steps-item__list-el'],
                      [1, 'steps-item__head'],
                      [1, 'steps-item__subtitle'],
                      [1, 'steps-item__icon'],
                      ['src', 'assets/img/steps-icon-1.png', 'alt', ''],
                      ['src', 'assets/img/steps-icon-2.png', 'alt', ''],
                      ['src', 'assets/img/steps-icon-3.png', 'alt', ''],
                      ['src', 'assets/img/steps-icon-4.png', 'alt', ''],
                      [1, 'steps-item', 'steps-item_4'],
                      ['src', 'assets/img/steps-img-3.png', 'alt', ''],
                      [1, 'steps-item', 'steps-item_5'],
                      [1, 'steps-arrow', 'steps-arrow_1'],
                      ['src', 'assets/img/steps-arrow-1.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_2'],
                      ['src', 'assets/img/steps-arrow-2.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_3'],
                      ['src', 'assets/img/steps-arrow-3.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_4'],
                      ['src', 'assets/img/steps-arrow-4.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_5'],
                      ['src', 'assets/img/steps-arrow-5.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_6'],
                      ['src', 'assets/img/steps-arrow-6.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_7'],
                      ['src', 'assets/img/steps-arrow-7.svg', 'alt', ''],
                      [1, 'steps-arrow', 'steps-arrow_8'],
                      ['src', 'assets/img/steps-arrow-8.svg', 'alt', ''],
                      [1, 'steps-title', 'steps-title_1'],
                      [1, 'steps-title', 'steps-title_2'],
                      [1, 'steps-title', 'steps-title_3'],
                      [1, 'steps-title', 'steps-title_4'],
                      [1, 'steps-wallet'],
                      [1, 'steps-wallet__scene'],
                      ['src', 'assets/img/steps-arrow-9.svg', 'alt', ''],
                      [1, 'steps-wallet__item', 'steps-wallet__item_1'],
                      ['src', 'assets/img/steps-usdt.svg', 'alt', ''],
                      [1, 'steps-wallet__item', 'steps-wallet__item_2'],
                      ['src', 'assets/img/steps-eth.svg', 'alt', ''],
                      [1, 'steps-wallet__item', 'steps-wallet__item_3'],
                      ['src', 'assets/img/steps-btc.svg', 'alt', ''],
                      [1, 'steps-bot-arrow', 'custom', 3, 'innerHTML'],
                      [
                        'data-aos',
                        'fade-down',
                        'data-aos-delay',
                        '0',
                        1,
                        'make-arrow',
                      ],
                      [0, 'xlink', 'href', 'assets/img/sprite.svg#arrow-2'],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '0',
                        1,
                        'make-text',
                        'row',
                        'd-flex',
                        'align-items-end',
                      ],
                      [1, 'col-lg-8'],
                      [1, 'm-text', 'm-text_white'],
                      [
                        1,
                        'col-lg-4',
                        'd-flex',
                        'justify-content-lg-end',
                        'align-items-start',
                      ],
                      ['routerLink', '/offers', 1, 'm-btn'],
                      [1, 'perk'],
                      [1, 'perk-scene', 'parallax-scene'],
                      ['data-depth', '0.05'],
                      ['src', 'assets/img/perk-scene.png', 'alt', ''],
                      [
                        'data-aos',
                        'fade-right',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-num',
                        'm-num_right',
                      ],
                      [
                        'data-aos',
                        'fade-left',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-title',
                        'm-title_right',
                        3,
                        'innerHTML',
                      ],
                      [1, 'perk-list'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '0',
                        1,
                        'perk-item',
                      ],
                      [1, 'perk-item__icon'],
                      ['src', 'assets/img/perk-icon-1.svg', 'alt', ''],
                      ['routerLink', '/roadmap', 1, 'm-btn'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '200',
                        1,
                        'perk-item',
                      ],
                      ['src', 'assets/img/perk-icon-2.svg', 'alt', ''],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '400',
                        1,
                        'perk-item',
                      ],
                      ['src', 'assets/img/perk-icon-3.svg', 'alt', ''],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '600',
                        1,
                        'perk-item',
                      ],
                      ['src', 'assets/img/perk-icon-4.svg', 'alt', ''],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '800',
                        1,
                        'perk-item',
                      ],
                      ['src', 'assets/img/perk-icon-5.svg', 'alt', ''],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '1000',
                        1,
                        'perk-item',
                      ],
                      ['src', 'assets/img/perk-icon-6.svg', 'alt', ''],
                      [1, 'home-wrap'],
                      [
                        'data-aos',
                        'fade-right',
                        'data-aos-delay',
                        '0',
                        1,
                        'm-title',
                        3,
                        'innerHTML',
                      ],
                      [
                        'data-aos',
                        'fade-up',
                        'data-aos-delay',
                        '0',
                        1,
                        'guide',
                      ],
                      [
                        'routerLink',
                        'https://ovaxglobal.com/?ref=837371457',
                        1,
                        'guide-item',
                      ],
                      ['src', 'assets/img/guide-bg-1.png', 'alt', ''],
                      [1, 'guide-item__icon'],
                      ['src', 'assets/img/guide-icon-1.svg', 'alt', ''],
                      [1, 'guide-item__btn'],
                      [
                        'routerLink',
                        '/account/deposits/create',
                        1,
                        'guide-item',
                      ],
                      ['src', 'assets/img/guide-bg-2.png', 'alt', ''],
                      ['src', 'assets/img/guide-icon-2.svg', 'alt', ''],
                      [1, 'guide-col'],
                      ['routerLink', '/referral-program', 1, 'guide-item'],
                      ['src', 'assets/img/guide-bg-3.png', 'alt', ''],
                      ['src', 'assets/img/guide-icon-3.svg', 'alt', ''],
                      ['routerLink', '/contacts', 1, 'guide-item'],
                      ['src', 'assets/img/guide-bg-4.png', 'alt', ''],
                      ['src', 'assets/img/guide-icon-4.svg', 'alt', ''],
                      [4, 'ngIf'],
                      [1, 'call'],
                      [
                        'data-aos',
                        'zoom-in',
                        'data-aos-delay',
                        '0',
                        1,
                        'container',
                      ],
                      ['type', 'home', 3, 'scene'],
                      [
                        'class',
                        'col-lg-3 col-sm-6',
                        'data-aos',
                        'zoom-in',
                        4,
                        'ngFor',
                        'ngForOf',
                      ],
                      ['data-aos', 'zoom-in', 1, 'col-lg-3', 'col-sm-6'],
                      ['routerLink', '/news', 1, 'news-more'],
                      [1, 'news', 3, 'routerLink'],
                      [1, 'about-prof__item'],
                      ['alt', '', 3, 'src', 4, 'ngIf'],
                      ['alt', '', 3, 'src'],
                    ],
                    template: function (a, i) {
                      1 & a &&
                        (e._UZ(0, 'facade-mobile-app'),
                        e.TgZ(1, 'section', 0)(2, 'div', 1)(3, 'div', 2)(
                          4,
                          'span'
                        ),
                        e._uU(5, '/ '),
                        e.qZA(),
                        e._uU(6, '01 '),
                        e.qZA(),
                        e.TgZ(7, 'div', 3)(8, 'div', 4)(9, 'div', 5),
                        e._UZ(10, 'img', 6)(11, 'div', 7),
                        e.ALo(12, 'translate'),
                        e.TgZ(13, 'div', 8),
                        e._UZ(14, 'p', 9),
                        e.ALo(15, 'translate'),
                        e.qZA()(),
                        e.TgZ(16, 'div', 3)(17, 'div', 10)(18, 'div', 11),
                        e._UZ(19, 'p', 9),
                        e.ALo(20, 'translate'),
                        e.qZA()(),
                        e.TgZ(21, 'div', 10)(22, 'div', 11),
                        e._UZ(23, 'p', 9),
                        e.ALo(24, 'translate'),
                        e.qZA()()(),
                        e.TgZ(25, 'div', 12)(26, 'a', 13),
                        e._uU(27),
                        e.ALo(28, 'translate'),
                        e.qZA(),
                        e.TgZ(29, 'a', 14)(30, 'span'),
                        e._uU(31),
                        e.ALo(32, 'translate'),
                        e.qZA(),
                        e.O4$(),
                        e.TgZ(33, 'svg'),
                        e._UZ(34, 'use', 15),
                        e.qZA()()()(),
                        e.kcU(),
                        e.TgZ(35, 'div', 16)(36, 'div', 17)(37, 'div', 18)(
                          38,
                          'h3'
                        ),
                        e._uU(39),
                        e.ALo(40, 'translate'),
                        e.qZA(),
                        e._UZ(41, 'p', 9),
                        e.ALo(42, 'translate'),
                        e.qZA(),
                        e.TgZ(43, 'div', 19)(44, 'a', 20)(45, 'div', 21),
                        e._UZ(46, 'img', 22),
                        e.qZA(),
                        e._UZ(47, 'img', 23),
                        e.TgZ(48, 'h3'),
                        e._uU(49),
                        e.ALo(50, 'translate'),
                        e.qZA()(),
                        e.TgZ(51, 'a', 20)(52, 'div', 21),
                        e._UZ(53, 'img', 22),
                        e.qZA(),
                        e._UZ(54, 'img', 24),
                        e.TgZ(55, 'h3'),
                        e._uU(56),
                        e.ALo(57, 'translate'),
                        e.qZA()(),
                        e.TgZ(58, 'a', 20)(59, 'div', 21),
                        e._UZ(60, 'img', 22),
                        e.qZA(),
                        e._UZ(61, 'img', 25),
                        e.TgZ(62, 'h3'),
                        e._uU(63),
                        e.ALo(64, 'translate'),
                        e.qZA()(),
                        e.TgZ(65, 'a', 20)(66, 'div', 21),
                        e._UZ(67, 'img', 22),
                        e.qZA(),
                        e._UZ(68, 'img', 26),
                        e.TgZ(69, 'h3'),
                        e._uU(70),
                        e.ALo(71, 'translate'),
                        e.qZA()(),
                        e.TgZ(72, 'a', 20)(73, 'div', 21),
                        e._UZ(74, 'img', 22),
                        e.qZA(),
                        e._UZ(75, 'img', 27),
                        e.TgZ(76, 'h3'),
                        e._uU(77),
                        e.ALo(78, 'translate'),
                        e.qZA()(),
                        e.TgZ(79, 'a', 20)(80, 'div', 21),
                        e._UZ(81, 'img', 22),
                        e.qZA(),
                        e._UZ(82, 'img', 28),
                        e.TgZ(83, 'h3'),
                        e._uU(84),
                        e.ALo(85, 'translate'),
                        e.qZA()(),
                        e.TgZ(86, 'a', 20)(87, 'div', 21),
                        e._UZ(88, 'img', 22),
                        e.qZA(),
                        e._UZ(89, 'img', 29),
                        e.TgZ(90, 'h3'),
                        e._uU(91),
                        e.ALo(92, 'translate'),
                        e.qZA()(),
                        e.TgZ(93, 'a', 20)(94, 'div', 21),
                        e._UZ(95, 'img', 22),
                        e.qZA(),
                        e._UZ(96, 'img', 30),
                        e.TgZ(97, 'h3'),
                        e._uU(98),
                        e.ALo(99, 'translate'),
                        e.qZA()()()()()(),
                        e.TgZ(100, 'div', 31)(101, 'span'),
                        e._uU(102, '/ '),
                        e.qZA(),
                        e._uU(103, '02 '),
                        e.qZA(),
                        e._UZ(104, 'div', 32),
                        e.ALo(105, 'translate'),
                        e.TgZ(106, 'div', 33)(107, 'div', 34)(108, 'div', 35)(
                          109,
                          'h3'
                        ),
                        e._uU(110),
                        e.ALo(111, 'translate'),
                        e.qZA(),
                        e.TgZ(112, 'p'),
                        e._uU(113),
                        e.ALo(114, 'translate'),
                        e.qZA()(),
                        e.TgZ(115, 'a', 36)(116, 'span'),
                        e._uU(117),
                        e.ALo(118, 'translate'),
                        e.O4$(),
                        e.TgZ(119, 'svg'),
                        e._UZ(120, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(121, 'div', 37)(122, 'h3'),
                        e._uU(123),
                        e.ALo(124, 'translate'),
                        e.qZA(),
                        e._UZ(125, 'p', 9),
                        e.ALo(126, 'translate'),
                        e.qZA()(),
                        e.TgZ(127, 'div', 38)(128, 'div', 35)(129, 'h3'),
                        e._uU(130),
                        e.ALo(131, 'translate'),
                        e.qZA(),
                        e.TgZ(132, 'p'),
                        e._uU(133),
                        e.ALo(134, 'translate'),
                        e.qZA()(),
                        e.TgZ(135, 'a', 39)(136, 'span'),
                        e._uU(137),
                        e.ALo(138, 'translate'),
                        e.O4$(),
                        e.TgZ(139, 'svg'),
                        e._UZ(140, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(141, 'div', 40),
                        e._UZ(142, 'img', 41),
                        e.TgZ(143, 'p'),
                        e._uU(144),
                        e.ALo(145, 'translate'),
                        e.qZA(),
                        e.TgZ(146, 'p'),
                        e._uU(147),
                        e.ALo(148, 'translate'),
                        e._UZ(149, 'img', 42),
                        e.qZA()()()(),
                        e.TgZ(150, 'div', 2)(151, 'span'),
                        e._uU(152, '/ '),
                        e.qZA(),
                        e._uU(153, '03 '),
                        e.qZA(),
                        e.TgZ(154, 'div', 43)(155, 'div', 3)(156, 'div', 44)(
                          157,
                          'div',
                          45
                        )(158, 'div', 46)(159, 'div', 47),
                        e._UZ(160, 'img', 48),
                        e.qZA(),
                        e._UZ(161, 'div', 49),
                        e.ALo(162, 'translate'),
                        e.qZA(),
                        e.TgZ(163, 'a', 50),
                        e._uU(164),
                        e.ALo(165, 'translate'),
                        e.O4$(),
                        e.TgZ(166, 'svg'),
                        e._UZ(167, 'use', 15),
                        e.qZA()()()(),
                        e.kcU(),
                        e.TgZ(168, 'div', 51)(169, 'div', 52)(170, 'div', 46)(
                          171,
                          'div',
                          47
                        ),
                        e._UZ(172, 'img', 53),
                        e.qZA(),
                        e._UZ(173, 'div', 49),
                        e.ALo(174, 'translate'),
                        e.TgZ(175, 'div', 54)(176, 'p'),
                        e._uU(177),
                        e.ALo(178, 'translate'),
                        e.qZA()(),
                        e.TgZ(179, 'div', 55),
                        e._uU(180),
                        e.ALo(181, 'translate'),
                        e.TgZ(182, 'span'),
                        e._uU(183),
                        e.qZA()(),
                        e.TgZ(184, 'a', 14)(185, 'span'),
                        e._uU(186),
                        e.ALo(187, 'translate'),
                        e.qZA(),
                        e.O4$(),
                        e.TgZ(188, 'svg'),
                        e._UZ(189, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(190, 'a', 56),
                        e._uU(191),
                        e.ALo(192, 'translate'),
                        e.O4$(),
                        e.TgZ(193, 'svg'),
                        e._UZ(194, 'use', 15),
                        e.qZA()()()(),
                        e.kcU(),
                        e.TgZ(195, 'div', 57)(196, 'div', 58)(197, 'div', 46)(
                          198,
                          'div',
                          47
                        ),
                        e._UZ(199, 'img', 59),
                        e.qZA(),
                        e._UZ(200, 'div', 49),
                        e.ALo(201, 'translate'),
                        e.TgZ(202, 'div', 54)(203, 'p'),
                        e._uU(204),
                        e.ALo(205, 'translate'),
                        e.qZA()()(),
                        e.TgZ(206, 'a', 50),
                        e._uU(207),
                        e.ALo(208, 'translate'),
                        e.O4$(),
                        e.TgZ(209, 'svg'),
                        e._UZ(210, 'use', 15),
                        e.qZA()()()()()()()(),
                        e.kcU(),
                        e.TgZ(211, 'section', 60, 61)(213, 'div', 1)(
                          214,
                          'div',
                          31
                        )(215, 'span'),
                        e._uU(216, '/ '),
                        e.qZA(),
                        e._uU(217, '04 '),
                        e.qZA(),
                        e._UZ(218, 'div', 62),
                        e.ALo(219, 'translate'),
                        e.TgZ(220, 'div', 63)(221, 'p'),
                        e._uU(222),
                        e.ALo(223, 'translate'),
                        e.qZA()(),
                        e.TgZ(224, 'div', 64)(225, 'div', 65)(226, 'h3'),
                        e._uU(227),
                        e.ALo(228, 'translate'),
                        e.qZA(),
                        e.TgZ(229, 'div', 66)(230, 'span', 67),
                        e._uU(231, '0'),
                        e.qZA(),
                        e.TgZ(232, 'span'),
                        e._uU(233, 'K'),
                        e.qZA(),
                        e._uU(234, '+ '),
                        e.qZA(),
                        e.TgZ(235, 'div', 68),
                        e._uU(236),
                        e.ALo(237, 'translate'),
                        e.qZA(),
                        e.TgZ(238, 'div', 69)(239, 'div', 70),
                        e._UZ(240, 'img', 71),
                        e.qZA(),
                        e.TgZ(241, 'div', 72),
                        e._UZ(242, 'img', 73),
                        e.qZA(),
                        e.TgZ(243, 'span', 74)(244, 'span', 75),
                        e._uU(245, '0'),
                        e.qZA(),
                        e._uU(246, '+ '),
                        e.qZA(),
                        e.TgZ(247, 'span', 76),
                        e._uU(248, ' ~'),
                        e.TgZ(249, 'span', 77),
                        e._uU(250, '0'),
                        e.qZA()()(),
                        e.TgZ(251, 'div', 78)(252, 'p'),
                        e._uU(253),
                        e.ALo(254, 'translate'),
                        e.qZA(),
                        e.TgZ(255, 'p'),
                        e._uU(256),
                        e.ALo(257, 'translate'),
                        e.qZA()()(),
                        e.TgZ(258, 'div', 79)(259, 'h3'),
                        e._uU(260),
                        e.ALo(261, 'translate'),
                        e.qZA(),
                        e.TgZ(262, 'div', 66)(263, 'span', 80),
                        e._uU(264, '0'),
                        e.qZA(),
                        e._uU(265, '+ '),
                        e.qZA(),
                        e.TgZ(266, 'div', 68),
                        e._uU(267),
                        e.ALo(268, 'translate'),
                        e.qZA(),
                        e.TgZ(269, 'div', 69)(270, 'div', 70),
                        e._UZ(271, 'img', 81),
                        e.qZA(),
                        e.TgZ(272, 'div', 72),
                        e._UZ(273, 'img', 82),
                        e.qZA(),
                        e.TgZ(274, 'span', 74)(275, 'span', 83),
                        e._uU(276, '0'),
                        e.qZA(),
                        e._uU(277, '+ '),
                        e.qZA(),
                        e.TgZ(278, 'span', 76),
                        e._uU(279, ' ~'),
                        e.TgZ(280, 'span', 84),
                        e._uU(281, '0'),
                        e.qZA()()(),
                        e.TgZ(282, 'div', 78)(283, 'p'),
                        e._uU(284),
                        e.ALo(285, 'translate'),
                        e.qZA(),
                        e.TgZ(286, 'p'),
                        e._uU(287),
                        e.ALo(288, 'translate'),
                        e.qZA()()(),
                        e.TgZ(289, 'div', 85)(290, 'h3'),
                        e._uU(291),
                        e.ALo(292, 'translate'),
                        e.qZA(),
                        e.TgZ(293, 'div', 66)(294, 'span', 86),
                        e._uU(295, '0'),
                        e.qZA(),
                        e.TgZ(296, 'span'),
                        e._uU(297, 'K'),
                        e.qZA(),
                        e._uU(298, '+ '),
                        e.qZA(),
                        e.TgZ(299, 'div', 68),
                        e._uU(300),
                        e.ALo(301, 'translate'),
                        e.qZA(),
                        e.TgZ(302, 'div', 69)(303, 'div', 70),
                        e._UZ(304, 'img', 87),
                        e.qZA(),
                        e.TgZ(305, 'div', 72),
                        e._UZ(306, 'img', 88),
                        e.qZA(),
                        e.TgZ(307, 'span', 74)(308, 'span', 89),
                        e._uU(309, '0'),
                        e.qZA(),
                        e._uU(310, '+ '),
                        e.qZA(),
                        e.TgZ(311, 'span', 76),
                        e._uU(312, ' ~'),
                        e.TgZ(313, 'span', 90),
                        e._uU(314, '0'),
                        e.qZA()()(),
                        e.TgZ(315, 'div', 78)(316, 'p'),
                        e._uU(317),
                        e.ALo(318, 'translate'),
                        e.qZA(),
                        e.TgZ(319, 'p'),
                        e._uU(320),
                        e.ALo(321, 'translate'),
                        e.qZA()()(),
                        e.TgZ(322, 'div', 91)(323, 'h3'),
                        e._uU(324),
                        e.ALo(325, 'translate'),
                        e.qZA(),
                        e.TgZ(326, 'div', 66)(327, 'span', 92),
                        e._uU(328, '0'),
                        e.qZA(),
                        e.TgZ(329, 'span'),
                        e._uU(330, 'K'),
                        e.qZA(),
                        e._uU(331, '+ '),
                        e.qZA(),
                        e.TgZ(332, 'div', 68),
                        e._uU(333),
                        e.ALo(334, 'translate'),
                        e.qZA(),
                        e.TgZ(335, 'div', 69)(336, 'div', 70),
                        e._UZ(337, 'img', 93),
                        e.qZA(),
                        e.TgZ(338, 'div', 72),
                        e._UZ(339, 'img', 94),
                        e.qZA(),
                        e.TgZ(340, 'span', 74)(341, 'span', 95),
                        e._uU(342, '0'),
                        e.qZA(),
                        e._uU(343, '+ '),
                        e.qZA(),
                        e.TgZ(344, 'span', 76),
                        e._uU(345, ' ~'),
                        e.TgZ(346, 'span', 96),
                        e._uU(347, '0'),
                        e.qZA()()(),
                        e.TgZ(348, 'div', 78)(349, 'p'),
                        e._uU(350),
                        e.ALo(351, 'translate'),
                        e.qZA(),
                        e.TgZ(352, 'p'),
                        e._uU(353),
                        e.ALo(354, 'translate'),
                        e.qZA()()(),
                        e.TgZ(355, 'div', 97)(356, 'h3'),
                        e._uU(357),
                        e.ALo(358, 'translate'),
                        e.qZA(),
                        e.TgZ(359, 'div', 66)(360, 'span', 86),
                        e._uU(361, '0'),
                        e.qZA(),
                        e.TgZ(362, 'span'),
                        e._uU(363, 'M'),
                        e.qZA(),
                        e._uU(364, '+ '),
                        e.qZA(),
                        e.TgZ(365, 'div', 68),
                        e._uU(366),
                        e.ALo(367, 'translate'),
                        e.qZA(),
                        e.TgZ(368, 'div', 69)(369, 'div', 70),
                        e._UZ(370, 'img', 98),
                        e.qZA(),
                        e.TgZ(371, 'div', 72),
                        e._UZ(372, 'img', 99),
                        e.qZA(),
                        e.TgZ(373, 'span', 74)(374, 'span', 100),
                        e._uU(375, '0'),
                        e.qZA(),
                        e._uU(376, '+ '),
                        e.qZA(),
                        e.TgZ(377, 'span', 76),
                        e._uU(378, ' ~'),
                        e.TgZ(379, 'span', 101),
                        e._uU(380, '0'),
                        e.qZA()()(),
                        e.TgZ(381, 'div', 78)(382, 'p'),
                        e._uU(383),
                        e.ALo(384, 'translate'),
                        e.qZA(),
                        e.TgZ(385, 'p'),
                        e._uU(386),
                        e.ALo(387, 'translate'),
                        e.qZA()()()()()(),
                        e.TgZ(388, 'section', 102)(389, 'div', 103)(
                          390,
                          'div',
                          1
                        )(
                          391,
                          'div',
                          2
                        )(392, 'span'),
                        e._uU(393, '/ '),
                        e.qZA(),
                        e._uU(394, '05 '),
                        e.qZA(),
                        e._UZ(395, 'div', 104),
                        e.ALo(396, 'translate'),
                        e.TgZ(397, 'div', 105)(398, 'div', 106)(
                          399,
                          'div',
                          107
                        ),
                        e._uU(400, '01'),
                        e.qZA(),
                        e.TgZ(401, 'div', 108),
                        e._uU(402),
                        e.ALo(403, 'translate'),
                        e.qZA(),
                        e.TgZ(404, 'div', 109)(405, 'p'),
                        e._uU(406),
                        e.ALo(407, 'translate'),
                        e.qZA()(),
                        e.TgZ(408, 'div', 110),
                        e._UZ(409, 'img', 111),
                        e.qZA()(),
                        e.TgZ(410, 'div', 112)(411, 'div', 107),
                        e._uU(412, '02'),
                        e.qZA(),
                        e.TgZ(413, 'div', 113),
                        e._UZ(414, 'img', 22),
                        e.TgZ(415, 'span'),
                        e._uU(416),
                        e.ALo(417, 'translate'),
                        e.qZA()(),
                        e.TgZ(418, 'div', 109)(419, 'p'),
                        e._uU(420),
                        e.ALo(421, 'translate'),
                        e.qZA()(),
                        e.TgZ(422, 'div', 110),
                        e._UZ(423, 'img', 114),
                        e.qZA()(),
                        e.TgZ(424, 'div', 115)(425, 'div', 116)(
                          426,
                          'div',
                          117
                        )(427, 'div', 118)(428, 'div', 107),
                        e._uU(429, '03'),
                        e.qZA(),
                        e.TgZ(430, 'div', 119),
                        e._uU(431),
                        e.ALo(432, 'translate'),
                        e.qZA()(),
                        e.TgZ(433, 'div', 120),
                        e._UZ(434, 'img', 121),
                        e.qZA()(),
                        e.TgZ(435, 'div', 117)(436, 'div', 118)(
                          437,
                          'div',
                          107
                        ),
                        e._uU(438, '03'),
                        e.qZA(),
                        e.TgZ(439, 'div', 119),
                        e._uU(440),
                        e.ALo(441, 'translate'),
                        e.qZA()(),
                        e.TgZ(442, 'div', 120),
                        e._UZ(443, 'img', 122),
                        e.qZA()(),
                        e.TgZ(444, 'div', 117)(445, 'div', 118)(
                          446,
                          'div',
                          107
                        ),
                        e._uU(447, '03'),
                        e.qZA(),
                        e.TgZ(448, 'div', 119),
                        e._uU(449),
                        e.ALo(450, 'translate'),
                        e.qZA()(),
                        e.TgZ(451, 'div', 120),
                        e._UZ(452, 'img', 123),
                        e.qZA()(),
                        e.TgZ(453, 'div', 117)(454, 'div', 118)(
                          455,
                          'div',
                          107
                        ),
                        e._uU(456, '03'),
                        e.qZA(),
                        e.TgZ(457, 'div', 119),
                        e._uU(458),
                        e.ALo(459, 'translate'),
                        e.qZA()(),
                        e.TgZ(460, 'div', 120),
                        e._UZ(461, 'img', 124),
                        e.qZA()()(),
                        e.TgZ(462, 'div', 109)(463, 'p'),
                        e._uU(464),
                        e.ALo(465, 'translate'),
                        e.qZA()()(),
                        e.TgZ(466, 'div', 125)(467, 'div', 107),
                        e._uU(468, '04'),
                        e.qZA(),
                        e.TgZ(469, 'div', 113),
                        e._UZ(470, 'img', 22),
                        e.TgZ(471, 'span'),
                        e._uU(472),
                        e.ALo(473, 'translate'),
                        e.qZA()(),
                        e.TgZ(474, 'div', 109)(475, 'p'),
                        e._uU(476),
                        e.ALo(477, 'translate'),
                        e.qZA()(),
                        e.TgZ(478, 'div', 110),
                        e._UZ(479, 'img', 126),
                        e.qZA()(),
                        e.TgZ(480, 'div', 127)(481, 'div', 107),
                        e._uU(482, '05'),
                        e.qZA(),
                        e.TgZ(483, 'div', 119),
                        e._uU(484),
                        e.ALo(485, 'translate'),
                        e.qZA(),
                        e.TgZ(486, 'div', 109)(487, 'p'),
                        e._uU(488),
                        e.ALo(489, 'translate'),
                        e.qZA()()(),
                        e.TgZ(490, 'div', 128),
                        e._UZ(491, 'img', 129),
                        e.qZA(),
                        e.TgZ(492, 'div', 130),
                        e._UZ(493, 'img', 131),
                        e.qZA(),
                        e.TgZ(494, 'div', 132),
                        e._UZ(495, 'img', 133),
                        e.qZA(),
                        e.TgZ(496, 'div', 134),
                        e._UZ(497, 'img', 135),
                        e.qZA(),
                        e.TgZ(498, 'div', 136),
                        e._UZ(499, 'img', 137),
                        e.qZA(),
                        e.TgZ(500, 'div', 138),
                        e._UZ(501, 'img', 139),
                        e.qZA(),
                        e.TgZ(502, 'div', 140),
                        e._UZ(503, 'img', 141),
                        e.qZA(),
                        e.TgZ(504, 'div', 142),
                        e._UZ(505, 'img', 143),
                        e.qZA(),
                        e.TgZ(506, 'div', 144),
                        e._uU(507),
                        e.ALo(508, 'translate'),
                        e.qZA(),
                        e.TgZ(509, 'div', 145),
                        e._uU(510),
                        e.ALo(511, 'translate'),
                        e.qZA(),
                        e.TgZ(512, 'div', 146),
                        e._uU(513),
                        e.ALo(514, 'translate'),
                        e.qZA(),
                        e.TgZ(515, 'div', 147),
                        e._uU(516),
                        e.ALo(517, 'translate'),
                        e.qZA(),
                        e.TgZ(518, 'div', 148)(519, 'div', 149),
                        e._UZ(520, 'img', 150),
                        e.TgZ(521, 'div', 151),
                        e._UZ(522, 'img', 152),
                        e.qZA(),
                        e.TgZ(523, 'div', 153),
                        e._UZ(524, 'img', 154),
                        e.qZA(),
                        e.TgZ(525, 'div', 155),
                        e._UZ(526, 'img', 156),
                        e.qZA()(),
                        e.TgZ(527, 'div', 119),
                        e._uU(528),
                        e.ALo(529, 'translate'),
                        e.qZA()(),
                        e._UZ(530, 'div', 157),
                        e.qZA(),
                        e.TgZ(531, 'div', 158),
                        e.O4$(),
                        e.TgZ(532, 'svg'),
                        e._UZ(533, 'use', 159),
                        e.qZA()(),
                        e.kcU(),
                        e.TgZ(534, 'div', 160)(535, 'div', 161)(
                          536,
                          'div',
                          162
                        )(537, 'h3'),
                        e._uU(538),
                        e.ALo(539, 'translate'),
                        e.qZA(),
                        e.TgZ(540, 'p'),
                        e._uU(541),
                        e.ALo(542, 'translate'),
                        e.qZA()()(),
                        e.TgZ(543, 'div', 163)(544, 'a', 164),
                        e._uU(545),
                        e.ALo(546, 'translate'),
                        e.qZA()()()()()(),
                        e.TgZ(547, 'section', 165)(548, 'div', 166)(
                          549,
                          'div',
                          167
                        ),
                        e._UZ(550, 'img', 168),
                        e.qZA()(),
                        e.TgZ(551, 'div', 1)(552, 'div', 169)(553, 'span'),
                        e._uU(554, '/ '),
                        e.qZA(),
                        e._uU(555, '06 '),
                        e.qZA(),
                        e._UZ(556, 'div', 170),
                        e.ALo(557, 'translate'),
                        e.TgZ(558, 'div', 171)(559, 'div', 172)(
                          560,
                          'div',
                          173
                        ),
                        e._UZ(561, 'img', 174),
                        e.qZA(),
                        e.TgZ(562, 'h3'),
                        e._uU(563),
                        e.ALo(564, 'translate'),
                        e.qZA(),
                        e.TgZ(565, 'p'),
                        e._uU(566),
                        e.ALo(567, 'translate'),
                        e.qZA(),
                        e.TgZ(568, 'a', 175),
                        e._uU(569),
                        e.ALo(570, 'translate'),
                        e.qZA()(),
                        e.TgZ(571, 'div', 176)(572, 'div', 173),
                        e._UZ(573, 'img', 177),
                        e.qZA(),
                        e.TgZ(574, 'h3'),
                        e._uU(575),
                        e.ALo(576, 'translate'),
                        e.qZA(),
                        e.TgZ(577, 'p'),
                        e._uU(578),
                        e.ALo(579, 'translate'),
                        e.qZA(),
                        e.TgZ(580, 'a', 175),
                        e._uU(581),
                        e.ALo(582, 'translate'),
                        e.qZA()(),
                        e.TgZ(583, 'div', 178)(584, 'div', 173),
                        e._UZ(585, 'img', 179),
                        e.qZA(),
                        e.TgZ(586, 'h3'),
                        e._uU(587),
                        e.ALo(588, 'translate'),
                        e.qZA(),
                        e.TgZ(589, 'p'),
                        e._uU(590),
                        e.ALo(591, 'translate'),
                        e.qZA(),
                        e.TgZ(592, 'a', 175),
                        e._uU(593),
                        e.ALo(594, 'translate'),
                        e.qZA()(),
                        e.TgZ(595, 'div', 180)(596, 'div', 173),
                        e._UZ(597, 'img', 181),
                        e.qZA(),
                        e.TgZ(598, 'h3'),
                        e._uU(599),
                        e.ALo(600, 'translate'),
                        e.qZA(),
                        e.TgZ(601, 'p'),
                        e._uU(602),
                        e.ALo(603, 'translate'),
                        e.qZA(),
                        e.TgZ(604, 'a', 175),
                        e._uU(605),
                        e.ALo(606, 'translate'),
                        e.qZA()(),
                        e.TgZ(607, 'div', 182)(608, 'div', 173),
                        e._UZ(609, 'img', 183),
                        e.qZA(),
                        e.TgZ(610, 'h3'),
                        e._uU(611),
                        e.ALo(612, 'translate'),
                        e.qZA(),
                        e.TgZ(613, 'p'),
                        e._uU(614),
                        e.ALo(615, 'translate'),
                        e.qZA(),
                        e.TgZ(616, 'a', 175),
                        e._uU(617),
                        e.ALo(618, 'translate'),
                        e.qZA()(),
                        e.TgZ(619, 'div', 184)(620, 'div', 173),
                        e._UZ(621, 'img', 185),
                        e.qZA(),
                        e.TgZ(622, 'h3'),
                        e._uU(623),
                        e.ALo(624, 'translate'),
                        e.qZA(),
                        e.TgZ(625, 'p'),
                        e._uU(626),
                        e.ALo(627, 'translate'),
                        e.qZA(),
                        e.TgZ(628, 'a', 175),
                        e._uU(629),
                        e.ALo(630, 'translate'),
                        e.qZA()()()()(),
                        e.TgZ(631, 'div', 186)(632, 'div', 1)(633, 'div', 2)(
                          634,
                          'span'
                        ),
                        e._uU(635, '/ '),
                        e.qZA(),
                        e._uU(636, '07 '),
                        e.qZA(),
                        e._UZ(637, 'div', 187),
                        e.ALo(638, 'translate'),
                        e.TgZ(639, 'div', 188)(640, 'a', 189),
                        e._UZ(641, 'img', 190),
                        e.TgZ(642, 'div', 191),
                        e._UZ(643, 'img', 192),
                        e.qZA(),
                        e.TgZ(644, 'h3'),
                        e._uU(645),
                        e.ALo(646, 'translate'),
                        e.qZA(),
                        e.TgZ(647, 'p'),
                        e._uU(648),
                        e.ALo(649, 'translate'),
                        e.qZA(),
                        e.TgZ(650, 'p'),
                        e._uU(651),
                        e.ALo(652, 'translate'),
                        e.qZA(),
                        e.TgZ(653, 'div', 193),
                        e._uU(654),
                        e.ALo(655, 'translate'),
                        e.O4$(),
                        e.TgZ(656, 'svg'),
                        e._UZ(657, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(658, 'a', 194),
                        e._UZ(659, 'img', 195),
                        e.TgZ(660, 'div', 191),
                        e._UZ(661, 'img', 196),
                        e.qZA(),
                        e.TgZ(662, 'h3'),
                        e._uU(663),
                        e.ALo(664, 'translate'),
                        e.qZA(),
                        e.TgZ(665, 'p'),
                        e._uU(666),
                        e.ALo(667, 'translate'),
                        e.qZA(),
                        e.TgZ(668, 'p'),
                        e._uU(669),
                        e.ALo(670, 'translate'),
                        e.qZA(),
                        e.TgZ(671, 'div', 193),
                        e._uU(672),
                        e.ALo(673, 'translate'),
                        e.O4$(),
                        e.TgZ(674, 'svg'),
                        e._UZ(675, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(676, 'div', 197)(677, 'a', 198),
                        e._UZ(678, 'img', 199),
                        e.TgZ(679, 'div', 191),
                        e._UZ(680, 'img', 200),
                        e.qZA(),
                        e.TgZ(681, 'h3'),
                        e._uU(682),
                        e.ALo(683, 'translate'),
                        e.qZA(),
                        e.TgZ(684, 'p'),
                        e._uU(685),
                        e.ALo(686, 'translate'),
                        e.qZA(),
                        e.TgZ(687, 'div', 193),
                        e._uU(688),
                        e.ALo(689, 'translate'),
                        e.O4$(),
                        e.TgZ(690, 'svg'),
                        e._UZ(691, 'use', 15),
                        e.qZA()()(),
                        e.kcU(),
                        e.TgZ(692, 'a', 201),
                        e._UZ(693, 'img', 202),
                        e.TgZ(694, 'div', 191),
                        e._UZ(695, 'img', 203),
                        e.qZA(),
                        e.TgZ(696, 'h3'),
                        e._uU(697),
                        e.ALo(698, 'translate'),
                        e.qZA(),
                        e.TgZ(699, 'p'),
                        e._uU(700),
                        e.ALo(701, 'translate'),
                        e.qZA(),
                        e.TgZ(702, 'div', 193),
                        e._uU(703),
                        e.ALo(704, 'translate'),
                        e.O4$(),
                        e.TgZ(705, 'svg'),
                        e._UZ(706, 'use', 15),
                        e.qZA()()()()(),
                        e.YNc(707, Cs, 19, 11, 'ng-container', 204),
                        e.qZA()(),
                        e.kcU(),
                        e.TgZ(708, 'section', 205)(709, 'div', 206),
                        e._UZ(710, 'facade-join-box', 207),
                        e.qZA()(),
                        e._UZ(711, 'facade-roadmap')),
                        2 & a &&
                          (e.xp6(11),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(12, 120, 'home.about.0'),
                            e.oJD
                          ),
                          e.xp6(3),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(15, 122, 'home.about.1'),
                            e.oJD
                          ),
                          e.xp6(5),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(20, 124, 'home.about.2'),
                            e.oJD
                          ),
                          e.xp6(4),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(24, 126, 'home.about.3'),
                            e.oJD
                          ),
                          e.xp6(4),
                          e.Oqu(e.lcZ(28, 128, 'home.about.4')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(32, 130, 'home.about.5')),
                          e.xp6(8),
                          e.Oqu(e.lcZ(40, 132, 'home.about.6')),
                          e.xp6(2),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(42, 134, 'home.about.7'),
                            e.oJD
                          ),
                          e.xp6(8),
                          e.Oqu(e.lcZ(50, 136, 'home.about.8')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(57, 138, 'home.about.9')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(64, 140, 'home.about.10')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(71, 142, 'home.about.11')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(78, 144, 'home.about.12')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(85, 146, 'home.about.13')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(92, 148, 'home.about.14')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(99, 150, 'home.about.15')),
                          e.xp6(6),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(105, 152, 'home.model.0'),
                            e.oJD
                          ),
                          e.xp6(6),
                          e.Oqu(e.lcZ(111, 154, 'home.model.1')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(114, 156, 'home.model.2')),
                          e.xp6(4),
                          e.hij(' ', e.lcZ(118, 158, 'home.model.3'), ' '),
                          e.xp6(6),
                          e.Oqu(e.lcZ(124, 160, 'home.model.4')),
                          e.xp6(2),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(126, 162, 'home.model.5'),
                            e.oJD
                          ),
                          e.xp6(5),
                          e.Oqu(e.lcZ(131, 164, 'home.model.6')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(134, 166, 'home.model.7')),
                          e.xp6(4),
                          e.hij(' ', e.lcZ(138, 168, 'home.model.8'), ' '),
                          e.xp6(7),
                          e.Oqu(e.lcZ(145, 170, 'home.model.9')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(148, 172, 'home.model.10'), ' '),
                          e.xp6(14),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(162, 174, 'home.legal.0'),
                            e.oJD
                          ),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(165, 176, 'home.legal.1'), ' '),
                          e.xp6(9),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(174, 178, 'home.legal.2'),
                            e.oJD
                          ),
                          e.xp6(4),
                          e.Oqu(e.lcZ(178, 180, 'home.legal.3')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(181, 182, 'home.legal.4'), ': '),
                          e.xp6(3),
                          e.Oqu(i.app.viewParams.company.number || ''),
                          e.xp6(3),
                          e.Oqu(e.lcZ(187, 184, 'home.legal.5')),
                          e.xp6(4),
                          e.Q6J('href', i.app.company.links[0] || '#', e.LSH),
                          e.xp6(1),
                          e.hij(' ', e.lcZ(192, 186, 'home.legal.6'), ' '),
                          e.xp6(9),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(201, 188, 'home.legal.7'),
                            e.oJD
                          ),
                          e.xp6(4),
                          e.Oqu(e.lcZ(205, 190, 'home.legal.8')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(208, 192, 'home.legal.9'), ' '),
                          e.xp6(11),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(219, 194, 'home.stats.0'),
                            e.oJD
                          ),
                          e.xp6(4),
                          e.Oqu(e.lcZ(223, 196, 'home.stats.1')),
                          e.xp6(5),
                          e.Oqu(e.lcZ(228, 198, 'home.stats.5')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(237, 200, 'home.stats.2')),
                          e.xp6(17),
                          e.Oqu(e.lcZ(254, 202, 'home.stats.3')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(257, 204, 'home.stats.4')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(261, 206, 'home.stats.6')),
                          e.xp6(7),
                          e.Oqu(e.lcZ(268, 208, 'home.stats.2')),
                          e.xp6(17),
                          e.Oqu(e.lcZ(285, 210, 'home.stats.3')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(288, 212, 'home.stats.4')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(292, 214, 'home.stats.7')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(301, 216, 'home.stats.2')),
                          e.xp6(17),
                          e.Oqu(e.lcZ(318, 218, 'home.stats.3')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(321, 220, 'home.stats.4')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(325, 222, 'home.stats.8')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(334, 224, 'home.stats.2')),
                          e.xp6(17),
                          e.Oqu(e.lcZ(351, 226, 'home.stats.3')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(354, 228, 'home.stats.4')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(358, 230, 'home.stats.9')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(367, 232, 'home.stats.2')),
                          e.xp6(17),
                          e.Oqu(e.lcZ(384, 234, 'home.stats.3')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(387, 236, 'home.stats.4')),
                          e.xp6(9),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(396, 238, 'home.schema.0'),
                            e.oJD
                          ),
                          e.xp6(7),
                          e.Oqu(e.lcZ(403, 240, 'home.schema.1')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(407, 242, 'home.schema.2')),
                          e.xp6(10),
                          e.Oqu(e.lcZ(417, 244, 'home.schema.3')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(421, 246, 'home.schema.4')),
                          e.xp6(11),
                          e.Oqu(e.lcZ(432, 248, 'home.schema.5')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(441, 250, 'home.schema.6')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(450, 252, 'home.schema.7')),
                          e.xp6(9),
                          e.Oqu(e.lcZ(459, 254, 'home.schema.8')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(465, 256, 'home.schema.9')),
                          e.xp6(8),
                          e.Oqu(e.lcZ(473, 258, 'home.schema.10')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(477, 260, 'home.schema.11')),
                          e.xp6(8),
                          e.Oqu(e.lcZ(485, 262, 'home.schema.12')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(489, 264, 'home.schema.13')),
                          e.xp6(19),
                          e.Oqu(e.lcZ(508, 266, 'home.schema.14')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(511, 268, 'home.schema.15')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(514, 270, 'home.schema.16')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(517, 272, 'home.schema.17')),
                          e.xp6(12),
                          e.Oqu(e.lcZ(529, 274, 'home.schema.18')),
                          e.xp6(2),
                          e.Q6J('innerHTML', i.stepsArrowSvg, e.oJD),
                          e.xp6(8),
                          e.Oqu(e.lcZ(539, 276, 'home.schema.19')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(542, 278, 'home.schema.20')),
                          e.xp6(4),
                          e.Oqu(e.lcZ(546, 280, 'home.schema.21')),
                          e.xp6(11),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(557, 282, 'home.advantages.0'),
                            e.oJD
                          ),
                          e.xp6(7),
                          e.Oqu(e.lcZ(564, 284, 'home.advantages.1')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(567, 286, 'home.advantages.2')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(570, 288, 'home.advantages.3')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(576, 290, 'home.advantages.4')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(579, 292, 'home.advantages.5')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(582, 294, 'home.advantages.6')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(588, 296, 'home.advantages.7')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(591, 298, 'home.advantages.8')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(594, 300, 'home.advantages.9')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(600, 302, 'home.advantages.10')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(603, 304, 'home.advantages.11')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(606, 306, 'home.advantages.12')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(612, 308, 'home.advantages.13')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(615, 310, 'home.advantages.14')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(618, 312, 'home.advantages.15')),
                          e.xp6(6),
                          e.Oqu(e.lcZ(624, 314, 'home.advantages.16')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(627, 316, 'home.advantages.17')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(630, 318, 'home.advantages.18')),
                          e.xp6(8),
                          e.Q6J(
                            'innerHTML',
                            e.lcZ(638, 320, 'home.start.0'),
                            e.oJD
                          ),
                          e.xp6(8),
                          e.Oqu(e.lcZ(646, 322, 'home.start.1')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(649, 324, 'home.start.2')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(652, 326, 'home.start.3')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(655, 328, 'home.start.4'), ' '),
                          e.xp6(9),
                          e.Oqu(e.lcZ(664, 330, 'home.start.5')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(667, 332, 'home.start.6')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(670, 334, 'home.start.7')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(673, 336, 'home.start.8'), ' '),
                          e.xp6(10),
                          e.Oqu(e.lcZ(683, 338, 'home.start.9')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(686, 340, 'home.start.10')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(689, 342, 'home.start.11'), ' '),
                          e.xp6(9),
                          e.Oqu(e.lcZ(698, 344, 'home.start.12')),
                          e.xp6(3),
                          e.Oqu(e.lcZ(701, 346, 'home.start.13')),
                          e.xp6(3),
                          e.hij(' ', e.lcZ(704, 348, 'home.start.14'), ' '),
                          e.xp6(4),
                          e.Q6J('ngIf', i.news.length),
                          e.xp6(3),
                          e.Q6J('scene', !0));
                    },
                    dependencies: [
                      r.sg,
                      r.O5,
                      x.rH,
                      _t,
                      ga,
                      Yt,
                      xs,
                      Ls,
                      k.X$,
                      la.P,
                      pa.W,
                    ],
                    encapsulation: 2,
                    changeDetection: 0,
                  })),
                  t
                );
              })(),
              resolve: {
                news: () => (0, e.f3M)(ue.e).getNews(3),
                article: () => (0, e.f3M)(ue.e).getArticle(1),
              },
              title: 'home.page.title',
            },
            {
              path: 'about',
              component: Ln,
              resolve: {
                article: () => (0, e.f3M)(ue.e).getArticle(2),
                reviews: () => (0, e.f3M)(ue.e).getReviews(10),
              },
              title: 'about.page.title',
            },
            {
              path: 'company-history',
              component: Un,
              title: 'company-history.page.title',
            },
            { path: 'roadmap', component: kn, title: 'roadmap.page.title' },
            { path: 'legal', component: no, title: 'legal.page.title' },
            {
              path: 'offers',
              component: ao,
              resolve: { offers: () => (0, e.f3M)(ue.e).getOffers() },
              title: 'offers.page.title',
            },
            { path: 'how', component: uo, title: 'how.page.title' },
            { path: 'start', component: mo, title: 'start.page.title' },
            {
              path: 'tariffs',
              component: xo,
              resolve: { tariffs: () => (0, e.f3M)(ue.e).getTariffs() },
              title: 'tariffs.page.title',
            },
            {
              path: 'referral-program',
              component: Do,
              resolve: { lines: () => (0, e.f3M)(ue.e).getProgram() },
              title: 'referral-program.page.title',
            },
            {
              path: 'leadership-program',
              component: zo,
              resolve: { lines: () => (0, e.f3M)(ue.e).getProgram() },
              title: 'leadership-program.page.title',
            },
            {
              path: 'reviews',
              component: ns,
              resolve: { reviews: () => (0, e.f3M)(ue.e).getReviews(9) },
              title: 'reviews.page.title',
            },
            {
              path: 'news',
              component: cs,
              resolve: { news: () => (0, e.f3M)(ue.e).getNews(1e3) },
              title: 'news.page.title',
            },
            {
              path: 'news/:id',
              component: ds,
              resolve: {
                news: (t) =>
                  (0, e.f3M)(ue.e).getSingleNews(Number(t.params.id)),
              },
              title: 'news.page.title',
            },
            {
              path: 'faq',
              component: ms,
              resolve: { categories: () => (0, e.f3M)(ue.e).getFaq() },
              title: 'faq.page.title',
            },
            { path: 'contacts', component: Xn, title: 'contacts.page.title' },
          ],
        },
        {
          path: 'privacy-policy',
          component: (() => {
            class t {}
            return (
              (t.ɵfac = function (a) {
                return new (a || t)();
              }),
              (t.ɵcmp = e.Xpm({
                type: t,
                selectors: [['ng-component']],
                decls: 64,
                vars: 0,
                consts: [[1, 'privacy-page']],
                template: function (a, i) {
                  1 & a &&
                    (e.TgZ(0, 'div', 0)(1, 'h1'),
                    e._uU(2, 'Privacy Policy'),
                    e.qZA(),
                    e.TgZ(3, 'h3'),
                    e._uU(
                      4,
                      'Your privacy is critically important to us. At OVAX GLOBAL we have a few fundamental principles:'
                    ),
                    e.qZA(),
                    e.TgZ(5, 'p'),
                    e._uU(
                      6,
                      'We don\u2019t ask you for personal information unless we truly need it. (We can\u2019t stand services that ask you for things like your gender or income level for no apparent reason.)'
                    ),
                    e.qZA(),
                    e.TgZ(7, 'p'),
                    e._uU(
                      8,
                      'We don\u2019t share your personal information with anyone except to comply with the law, develop our services and investment solutions or protect our rights and website.'
                    ),
                    e.qZA(),
                    e.TgZ(9, 'p'),
                    e._uU(
                      10,
                      'We don\u2019t store personal information on our servers unless required for the on-going operation of one of our services. In our investment products, we aim to make it as simple as possible for you to control what\u2019s visible to the public, seen by search engines, kept private, and confidentially.'
                    ),
                    e.qZA(),
                    e.TgZ(11, 'h3'),
                    e._uU(
                      12,
                      'Below is our Privacy Policy which incorporates these goals:'
                    ),
                    e.qZA(),
                    e.TgZ(13, 'p'),
                    e._uU(
                      14,
                      'If you have questions about correcting your personal data please contact our customer support.'
                    ),
                    e.qZA(),
                    e.TgZ(15, 'p'),
                    e._uU(
                      16,
                      'OVAX GLOBAL operates website. It is OVAX GLOBAL policy to respect your privacy regarding any information we may collect while operating our website.'
                    ),
                    e.qZA(),
                    e.TgZ(17, 'h3'),
                    e._uU(18, 'Usage of the Website'),
                    e.qZA(),
                    e.TgZ(19, 'p'),
                    e._uU(
                      20,
                      'Like most website owners, OVAX GLOBAL collects of the non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring website, and the date and time of each visitor request. The purpose of OVAX GLOBAL is in collecting non-personally identifying information is to better understand how our customers and visitors use our website. From time to time, OVAX GLOBAL may analyze non-personally-identifying information in the aggregate by publishing a report on common trends in the usage of our website.'
                    ),
                    e.qZA(),
                    e.TgZ(21, 'p'),
                    e._uU(
                      22,
                      'OVAX GLOBAL also collects potentially personally-identifying information such like Internet Protocol (IP-addresses) for logged in customers.'
                    ),
                    e.qZA(),
                    e.TgZ(23, 'h3'),
                    e._uU(
                      24,
                      'The Personally-Identifying Information Collecting'
                    ),
                    e.qZA(),
                    e.TgZ(25, 'p'),
                    e._uU(
                      26,
                      'We ask customers who to provide a username and email address. All our customers who engage in cooperation with OVAX GLOBAL we are ask to provide additional information, including as necessary the personal and financial information required to process those financial transactions. In each case, OVAX GLOBAL collects any such information only insofar as is necessary or appropriate to fulfill the purpose of the customer\u2019s interaction with OVAX GLOBAL. OVAX GLOBAL does not disclose personally-identifying information other than as described below. And any visitor can always refuse to provide personally-identifying information, with the caveat that it may prevent him from engaging in certain our website activities.'
                    ),
                    e.qZA(),
                    e.TgZ(27, 'h3'),
                    e._uU(28, 'The Transfer of the Business'),
                    e.qZA(),
                    e.TgZ(29, 'p'),
                    e._uU(
                      30,
                      'If OVAX GLOBAL, or substantially all of its assets, were acquired, or in the unlikely event that OVAX GLOBAL goes out of business or enters bankruptcy, customer information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of OVAX GLOBAL may continue to use your personal information as set forth in this Privacy Policy.'
                    ),
                    e.qZA(),
                    e.TgZ(31, 'h3'),
                    e._uU(
                      32,
                      'Protection of Certain Kinds of the Personally-Identifying Information'
                    ),
                    e.qZA(),
                    e.TgZ(33, 'p'),
                    e._uU(
                      34,
                      'OVAX GLOBAL discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that'
                    ),
                    e.qZA(),
                    e.TgZ(35, 'ul')(36, 'li')(37, 'p'),
                    e._uU(
                      38,
                      'need to know that information in order to process it on OVAX GLOBAL behalf or to provide services available at OVAX GLOBAL website, and'
                    ),
                    e.qZA()(),
                    e.TgZ(39, 'li')(40, 'p'),
                    e._uU(41, 'that have agreed not to disclose it to others.'),
                    e.qZA()()(),
                    e.TgZ(42, 'p'),
                    e._uU(
                      43,
                      'Some of those employees, contractors and affiliated organizations may be located outside of your home country.'
                    ),
                    e.qZA(),
                    e.TgZ(44, 'p'),
                    e._uU(
                      45,
                      'By using the OVAX GLOBAL website, you consent to the transfer of such information to them. OVAX GLOBAL will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, OVAX GLOBAL discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when OVAX GLOBAL believes in good faith that disclosure is reasonably necessary to protect the property or rights of OVAX GLOBAL, third parties or the public at large.'
                    ),
                    e.qZA(),
                    e.TgZ(46, 'p'),
                    e._uU(
                      47,
                      'If you are a registered customer of the OVAX GLOBAL website and have provided your e-mail address, OVAX GLOBAL may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what\u2019s going on with OVAX GLOBAL and our services and investment products. We primarily use our various services to communicate this type of information, so we expect to keep this type of e-mail to a minimum. If you send us a request (for example via a support e-mail or via one of our feedback instruments), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other members. OVAX GLOBAL takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and exact personally-identifying information.'
                    ),
                    e.qZA(),
                    e.TgZ(48, 'h3'),
                    e._uU(49, 'Cookies'),
                    e.qZA(),
                    e.TgZ(50, 'p'),
                    e._uU(
                      51,
                      'A cookie is a string of information that a website stores on a visitor\u2019s or customer\u2019s PC, and that the visitor\u2019s or customer\u2019s browser provides to the website each time the visitor or customer returns. OVAX GLOBAL uses cookies to help OVAX GLOBAL identify and track visitors and customers, their usage of the OVAX GLOBAL website, and their website access preferences. OVAX GLOBAL visitors and customers who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using OVAX GLOBAL website, with the drawback that certain features of OVAX GLOBAL website may not function properly without the usage of cookies.'
                    ),
                    e.qZA(),
                    e.TgZ(52, 'h3'),
                    e._uU(53, 'Aggregated Statistics'),
                    e.qZA(),
                    e.TgZ(54, 'p'),
                    e._uU(
                      55,
                      'OVAX GLOBAL may collect statistics about the behavior of visitors and customers to our website. For instance, OVAX GLOBAL may monitor the most popular pages on the OVAX GLOBAL website or use spam screened by the certain tools service to help identify spam. OVAX GLOBAL may display this information publicly or provide it to others. However, OVAX GLOBAL does not disclose personally-identifying information other than as described above.'
                    ),
                    e.qZA(),
                    e.TgZ(56, 'h3'),
                    e._uU(57, 'Ads and Banners'),
                    e.qZA(),
                    e.TgZ(58, 'p'),
                    e._uU(
                      59,
                      'Ads may appearing on our website may be delivered to users and customers by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by OVAX GLOBAL and does not cover the use of cookies by any advertisers.'
                    ),
                    e.qZA(),
                    e.TgZ(60, 'h3'),
                    e._uU(61, 'Privacy Policy Changes'),
                    e.qZA(),
                    e.TgZ(62, 'p'),
                    e._uU(
                      63,
                      'Although most changes are likely to be minor, OVAX GLOBAL may change this Privacy Policy from time to time, and in OVAX GLOBAL sole discretion. OVAX GLOBAL encourages visitors and customers to frequently check this page for any changes to this Privacy Policy. If you have a OVAX GLOBAL account, you should also check Rules and News for alerts to these changes. Your continued use of this website after any change in this Privacy Policy will constitute your acceptance and agreeing of such change.'
                    ),
                    e.qZA()());
                },
                styles: [
                  '.privacy-page[_ngcontent-%COMP%]{padding:2rem 1.5rem}.privacy-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .privacy-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .privacy-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px;line-height:25px}.privacy-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;margin-bottom:35px}.privacy-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}',
                ],
                changeDetection: 0,
              })),
              t
            );
          })(),
          title: 'privacy-policy.page.title',
        },
      ];
      let Js = (() => {
        class t {}
        return (
          (t.ɵfac = function (a) {
            return new (a || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [z.m, x.Bz.forChild(ks), Oe.OS, Oe.eQ] })),
          t
        );
      })();
    },
    7123: function (Ve) {
      Ve.exports = (function () {
        'use strict';
        var de =
            typeof window < 'u'
              ? window
              : typeof global < 'u'
              ? global
              : typeof self < 'u'
              ? self
              : {},
          T = 'Expected a function',
          e = NaN,
          x = '[object Symbol]',
          z = /^\s+|\s+$/g,
          _e = /^[-+]0x[0-9a-f]+$/i,
          q = /^0b[01]+$/i,
          D = /^0o[0-7]+$/i,
          w = parseInt,
          f = 'object' == typeof self && self && self.Object === Object && self,
          H =
            ('object' == typeof de && de && de.Object === Object && de) ||
            f ||
            Function('return this')(),
          r = Object.prototype.toString,
          b = Math.max,
          L = Math.min,
          p = function () {
            return H.Date.now();
          };
        function d(l) {
          var g = typeof l;
          return !!l && ('object' == g || 'function' == g);
        }
        function _(l) {
          if ('number' == typeof l) return l;
          if (
            'symbol' == typeof (v = l) ||
            ((J = v) && 'object' == typeof J && r.call(v) == x)
          )
            return e;
          var v, J;
          if (d(l)) {
            var g = 'function' == typeof l.valueOf ? l.valueOf() : l;
            l = d(g) ? g + '' : g;
          }
          if ('string' != typeof l) return 0 === l ? l : +l;
          l = l.replace(z, '');
          var h = q.test(l);
          return h || D.test(l)
            ? w(l.slice(2), h ? 2 : 8)
            : _e.test(l)
            ? e
            : +l;
        }
        var M = function (l, g, h) {
            var v = !0,
              J = !0;
            if ('function' != typeof l) throw new TypeError(T);
            return (
              d(h) &&
                ((v = 'leading' in h ? !!h.leading : v),
                (J = 'trailing' in h ? !!h.trailing : J)),
              (function c(l, g, h) {
                var v,
                  J,
                  B,
                  X,
                  O,
                  G,
                  P = 0,
                  ie = !1,
                  V = !1,
                  ee = !0;
                if ('function' != typeof l) throw new TypeError(T);
                function oe(F) {
                  var W = v,
                    se = J;
                  return (v = J = void 0), (P = F), (X = l.apply(se, W));
                }
                function ye(F) {
                  var W = F - G;
                  return void 0 === G || W >= g || W < 0 || (V && F - P >= B);
                }
                function Ze() {
                  var W,
                    se,
                    F = p();
                  if (ye(F)) return be(F);
                  O = setTimeout(
                    Ze,
                    ((se = g - ((W = F) - G)), V ? L(se, B - (W - P)) : se)
                  );
                }
                function be(F) {
                  return (O = void 0), ee && v ? oe(F) : ((v = J = void 0), X);
                }
                function te() {
                  var se,
                    F = p(),
                    W = ye(F);
                  if (((v = arguments), (J = this), (G = F), W)) {
                    if (void 0 === O)
                      return (
                        (P = se = G), (O = setTimeout(Ze, g)), ie ? oe(se) : X
                      );
                    if (V) return (O = setTimeout(Ze, g)), oe(G);
                  }
                  return void 0 === O && (O = setTimeout(Ze, g)), X;
                }
                return (
                  (g = _(g) || 0),
                  d(h) &&
                    ((ie = !!h.leading),
                    (B = (V = 'maxWait' in h) ? b(_(h.maxWait) || 0, g) : B),
                    (ee = 'trailing' in h ? !!h.trailing : ee)),
                  (te.cancel = function () {
                    void 0 !== O && clearTimeout(O),
                      (P = 0),
                      (v = G = J = O = void 0);
                  }),
                  (te.flush = function () {
                    return void 0 === O ? X : be(p());
                  }),
                  te
                );
              })(l, g, { leading: v, maxWait: g, trailing: J })
            );
          },
          C = NaN,
          I = '[object Symbol]',
          re = /^\s+|\s+$/g,
          fe = /^[-+]0x[0-9a-f]+$/i,
          k = /^0b[01]+$/i,
          Ye = /^0o[0-7]+$/i,
          Me = parseInt,
          xt =
            'object' == typeof self && self && self.Object === Object && self,
          Ie =
            ('object' == typeof de && de && de.Object === Object && de) ||
            xt ||
            Function('return this')(),
          qt = Object.prototype.toString,
          yt = Math.max,
          Lt = Math.min,
          $e = function () {
            return Ie.Date.now();
          };
        function je(l) {
          var g = typeof l;
          return !!l && ('object' == g || 'function' == g);
        }
        function Re(l) {
          if ('number' == typeof l) return l;
          if (
            'symbol' == typeof (v = l) ||
            ((J = v) && 'object' == typeof J && qt.call(v) == I)
          )
            return C;
          var v, J;
          if (je(l)) {
            var g = 'function' == typeof l.valueOf ? l.valueOf() : l;
            l = je(g) ? g + '' : g;
          }
          if ('string' != typeof l) return 0 === l ? l : +l;
          l = l.replace(re, '');
          var h = k.test(l);
          return h || Ye.test(l)
            ? Me(l.slice(2), h ? 2 : 8)
            : fe.test(l)
            ? C
            : +l;
        }
        var Ke = function (l, g, h) {
            var v,
              J,
              B,
              X,
              O,
              G,
              P = 0,
              ie = !1,
              V = !1,
              ee = !0;
            if ('function' != typeof l)
              throw new TypeError('Expected a function');
            function oe(F) {
              var W = v,
                se = J;
              return (v = J = void 0), (P = F), (X = l.apply(se, W));
            }
            function ye(F) {
              var W = F - G;
              return void 0 === G || W >= g || W < 0 || (V && F - P >= B);
            }
            function Ze() {
              var W,
                se,
                F = $e();
              if (ye(F)) return be(F);
              O = setTimeout(
                Ze,
                ((se = g - ((W = F) - G)), V ? Lt(se, B - (W - P)) : se)
              );
            }
            function be(F) {
              return (O = void 0), ee && v ? oe(F) : ((v = J = void 0), X);
            }
            function te() {
              var se,
                F = $e(),
                W = ye(F);
              if (((v = arguments), (J = this), (G = F), W)) {
                if (void 0 === O)
                  return (P = se = G), (O = setTimeout(Ze, g)), ie ? oe(se) : X;
                if (V) return (O = setTimeout(Ze, g)), oe(G);
              }
              return void 0 === O && (O = setTimeout(Ze, g)), X;
            }
            return (
              (g = Re(g) || 0),
              je(h) &&
                ((ie = !!h.leading),
                (B = (V = 'maxWait' in h) ? yt(Re(h.maxWait) || 0, g) : B),
                (ee = 'trailing' in h ? !!h.trailing : ee)),
              (te.cancel = function () {
                void 0 !== O && clearTimeout(O),
                  (P = 0),
                  (v = G = J = O = void 0);
              }),
              (te.flush = function () {
                return void 0 === O ? X : be($e());
              }),
              te
            );
          },
          et = function () {};
        function Ut(l) {
          l &&
            l.forEach(function (g) {
              var h = Array.prototype.slice.call(g.addedNodes),
                v = Array.prototype.slice.call(g.removedNodes);
              if (
                (function J(B) {
                  var X = void 0,
                    O = void 0;
                  for (X = 0; X < B.length; X += 1)
                    if (
                      ((O = B[X]).dataset && O.dataset.aos) ||
                      (O.children && J(O.children))
                    )
                      return !0;
                  return !1;
                })(h.concat(v))
              )
                return et();
            });
        }
        function Qe() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        var tt_isSupported = function () {
            return !!Qe();
          },
          tt_ready = function (l, g) {
            var h = window.document,
              v = new (Qe())(Ut);
            (et = g),
              v.observe(h.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          },
          we = function (l, g) {
            if (!(l instanceof g))
              throw new TypeError('Cannot call a class as a function');
          },
          bt = (function () {
            function l(g, h) {
              for (var v = 0; v < h.length; v++) {
                var J = h[v];
                (J.enumerable = J.enumerable || !1),
                  (J.configurable = !0),
                  'value' in J && (J.writable = !0),
                  Object.defineProperty(g, J.key, J);
              }
            }
            return function (g, h, v) {
              return h && l(g.prototype, h), v && l(g, v), g;
            };
          })(),
          wt =
            Object.assign ||
            function (l) {
              for (var g = 1; g < arguments.length; g++) {
                var h = arguments[g];
                for (var v in h)
                  Object.prototype.hasOwnProperty.call(h, v) && (l[v] = h[v]);
              }
              return l;
            },
          m =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          at =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          Ot =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          Ct =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function nt() {
          return navigator.userAgent || navigator.vendor || window.opera || '';
        }
        var He = new ((function () {
            function l() {
              we(this, l);
            }
            return (
              bt(l, [
                {
                  key: 'phone',
                  value: function () {
                    var g = nt();
                    return !(!m.test(g) && !at.test(g.substr(0, 4)));
                  },
                },
                {
                  key: 'mobile',
                  value: function () {
                    var g = nt();
                    return !(!Ot.test(g) && !Ct.test(g.substr(0, 4)));
                  },
                },
                {
                  key: 'tablet',
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
                {
                  key: 'ie11',
                  value: function () {
                    return (
                      '-ms-scroll-limit' in document.documentElement.style &&
                      '-ms-ime-align' in document.documentElement.style
                    );
                  },
                },
              ]),
              l
            );
          })())(),
          De = function (l, g) {
            var h = void 0;
            return (
              He.ie11()
                ? (h = document.createEvent('CustomEvent')).initCustomEvent(
                    l,
                    !0,
                    !0,
                    { detail: g }
                  )
                : (h = new CustomEvent(l, { detail: g })),
              document.dispatchEvent(h)
            );
          },
          it = function (l) {
            return l.forEach(function (g, h) {
              return (
                (v = g),
                (J = window.pageYOffset),
                (X = v.position),
                (O = v.node),
                (G = function () {
                  var P, ie;
                  v.animated &&
                    ((P = O),
                    (ie = B.animatedClassNames) &&
                      ie.forEach(function (V) {
                        return P.classList.remove(V);
                      }),
                    De('aos:out', O),
                    v.options.id && De('aos:in:' + v.options.id, O),
                    (v.animated = !1));
                }),
                void ((B = v.options).mirror && J >= X.out && !B.once
                  ? G()
                  : J >= X.in
                  ? v.animated ||
                    ((P = O),
                    (ie = B.animatedClassNames) &&
                      ie.forEach(function (V) {
                        return P.classList.add(V);
                      }),
                    De('aos:in', O),
                    v.options.id && De('aos:in:' + v.options.id, O),
                    (v.animated = !0))
                  : v.animated && !B.once && G())
              );
              var v, J, P, ie, B, X, O, G;
            });
          },
          ot = function (l) {
            for (
              var g = 0, h = 0;
              l && !isNaN(l.offsetLeft) && !isNaN(l.offsetTop);

            )
              (g += l.offsetLeft - ('BODY' != l.tagName ? l.scrollLeft : 0)),
                (h += l.offsetTop - ('BODY' != l.tagName ? l.scrollTop : 0)),
                (l = l.offsetParent);
            return { top: h, left: g };
          },
          xe = function (l, g, h) {
            var v = l.getAttribute('data-aos-' + g);
            if (void 0 !== v) {
              if ('true' === v) return !0;
              if ('false' === v) return !1;
            }
            return v || h;
          },
          kt = function (l, g) {
            return (
              l.forEach(function (h, v) {
                var J = xe(h.node, 'mirror', g.mirror),
                  B = xe(h.node, 'once', g.once),
                  X = xe(h.node, 'id'),
                  O = g.useClassNames && h.node.getAttribute('data-aos'),
                  G = [g.animatedClassName]
                    .concat(O ? O.split(' ') : [])
                    .filter(function (P) {
                      return 'string' == typeof P;
                    });
                g.initClassName && h.node.classList.add(g.initClassName),
                  (h.position = {
                    in: (function (P, ie, V) {
                      var ee = window.innerHeight,
                        oe = xe(P, 'anchor'),
                        ye = xe(P, 'anchor-placement'),
                        Ze = Number(xe(P, 'offset', ye ? 0 : ie)),
                        be = ye || V,
                        te = P;
                      oe &&
                        document.querySelectorAll(oe) &&
                        (te = document.querySelectorAll(oe)[0]);
                      var F = ot(te).top - ee;
                      switch (be) {
                        case 'top-bottom':
                          break;
                        case 'center-bottom':
                          F += te.offsetHeight / 2;
                          break;
                        case 'bottom-bottom':
                          F += te.offsetHeight;
                          break;
                        case 'top-center':
                          F += ee / 2;
                          break;
                        case 'center-center':
                          F += ee / 2 + te.offsetHeight / 2;
                          break;
                        case 'bottom-center':
                          F += ee / 2 + te.offsetHeight;
                          break;
                        case 'top-top':
                          F += ee;
                          break;
                        case 'bottom-top':
                          F += ee + te.offsetHeight;
                          break;
                        case 'center-top':
                          F += ee + te.offsetHeight / 2;
                      }
                      return F + Ze;
                    })(h.node, g.offset, g.anchorPlacement),
                    out:
                      J &&
                      (function (P, ie) {
                        window;
                        var V = xe(P, 'anchor'),
                          ee = xe(P, 'offset', ie),
                          oe = P;
                        return (
                          V &&
                            document.querySelectorAll(V) &&
                            (oe = document.querySelectorAll(V)[0]),
                          ot(oe).top + oe.offsetHeight - ee
                        );
                      })(h.node, g.offset),
                  }),
                  (h.options = {
                    once: B,
                    mirror: J,
                    animatedClassNames: G,
                    id: X,
                  });
              }),
              l
            );
          },
          st = function () {
            var l = document.querySelectorAll('[data-aos]');
            return Array.prototype.map.call(l, function (g) {
              return { node: g };
            });
          },
          qe = [],
          rt = !1,
          R = {
            offset: 120,
            delay: 0,
            easing: 'ease',
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: 'top-bottom',
            startEvent: 'DOMContentLoaded',
            animatedClassName: 'aos-animate',
            initClassName: 'aos-init',
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
          },
          lt = function () {
            return document.all && !window.atob;
          },
          Ue = function () {
            arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (rt = !0),
              rt &&
                ((qe = kt(qe, R)),
                it(qe),
                window.addEventListener(
                  'scroll',
                  M(function () {
                    it(qe, R.once);
                  }, R.throttleDelay)
                ));
          },
          ct = function () {
            if (((qe = st()), pt(R.disable) || lt())) return dt();
            Ue();
          },
          dt = function () {
            qe.forEach(function (l, g) {
              l.node.removeAttribute('data-aos'),
                l.node.removeAttribute('data-aos-easing'),
                l.node.removeAttribute('data-aos-duration'),
                l.node.removeAttribute('data-aos-delay'),
                R.initClassName && l.node.classList.remove(R.initClassName),
                R.animatedClassName &&
                  l.node.classList.remove(R.animatedClassName);
            });
          },
          pt = function (l) {
            return (
              !0 === l ||
              ('mobile' === l && He.mobile()) ||
              ('phone' === l && He.phone()) ||
              ('tablet' === l && He.tablet()) ||
              ('function' == typeof l && !0 === l())
            );
          };
        return {
          init: function (l) {
            return (
              (R = wt(R, l)),
              (qe = st()),
              R.disableMutationObserver ||
                tt_isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (R.disableMutationObserver = !0)),
              R.disableMutationObserver || tt_ready('[data-aos]', ct),
              pt(R.disable) || lt()
                ? dt()
                : (document
                    .querySelector('body')
                    .setAttribute('data-aos-easing', R.easing),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-duration', R.duration),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-delay', R.delay),
                  -1 === ['DOMContentLoaded', 'load'].indexOf(R.startEvent)
                    ? document.addEventListener(R.startEvent, function () {
                        Ue(!0);
                      })
                    : window.addEventListener('load', function () {
                        Ue(!0);
                      }),
                  'DOMContentLoaded' === R.startEvent &&
                    ['complete', 'interactive'].indexOf(document.readyState) >
                      -1 &&
                    Ue(!0),
                  window.addEventListener(
                    'resize',
                    Ke(Ue, R.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    'orientationchange',
                    Ke(Ue, R.debounceDelay, !0)
                  ),
                  qe)
            );
          },
          refresh: Ue,
          refreshHard: ct,
        };
      })();
    },
    668: (Ve) => {
      Ve.exports = (function x(z, _e, q) {
        function D(f, H) {
          if (!_e[f]) {
            if (!z[f]) {
              if (w) return w(f, !0);
              var b = new Error("Cannot find module '" + f + "'");
              throw ((b.code = 'MODULE_NOT_FOUND'), b);
            }
            var L = (_e[f] = { exports: {} });
            z[f][0].call(
              L.exports,
              function (p) {
                return D(z[f][1][p] || p);
              },
              L,
              L.exports,
              x,
              z,
              _e,
              q
            );
          }
          return _e[f].exports;
        }
        for (var w = void 0, U = 0; U < q.length; U++) D(q[U]);
        return D;
      })(
        {
          1: [
            function (x, z, _e) {
              'use strict';
              var q = Object.getOwnPropertySymbols,
                D = Object.prototype.hasOwnProperty,
                w = Object.prototype.propertyIsEnumerable;
              z.exports = (function f() {
                try {
                  if (!Object.assign) return !1;
                  var H = new String('abc');
                  if (((H[5] = 'de'), '5' === Object.getOwnPropertyNames(H)[0]))
                    return !1;
                  for (var r = {}, b = 0; b < 10; b++)
                    r['_' + String.fromCharCode(b)] = b;
                  if (
                    '0123456789' !==
                    Object.getOwnPropertyNames(r)
                      .map(function (c) {
                        return r[c];
                      })
                      .join('')
                  )
                    return !1;
                  var p = {};
                  return (
                    'abcdefghijklmnopqrst'.split('').forEach(function (c) {
                      p[c] = c;
                    }),
                    'abcdefghijklmnopqrst' ===
                      Object.keys(Object.assign({}, p)).join('')
                  );
                } catch {
                  return !1;
                }
              })()
                ? Object.assign
                : function (H, r) {
                    for (
                      var b,
                        p,
                        L = (function U(H) {
                          if (null == H)
                            throw new TypeError(
                              'Object.assign cannot be called with null or undefined'
                            );
                          return Object(H);
                        })(H),
                        c = 1;
                      c < arguments.length;
                      c++
                    ) {
                      for (var d in (b = Object(arguments[c])))
                        D.call(b, d) && (L[d] = b[d]);
                      if (q) {
                        p = q(b);
                        for (var _ = 0; _ < p.length; _++)
                          w.call(b, p[_]) && (L[p[_]] = b[p[_]]);
                      }
                    }
                    return L;
                  };
            },
            {},
          ],
          2: [
            function (x, z, _e) {
              (function (q) {
                (function () {
                  var D, w, U, f, H, r;
                  typeof performance < 'u' &&
                  null !== performance &&
                  performance.now
                    ? (z.exports = function () {
                        return performance.now();
                      })
                    : typeof q < 'u' && null !== q && q.hrtime
                    ? ((z.exports = function () {
                        return (D() - H) / 1e6;
                      }),
                      (w = q.hrtime),
                      (f = (D = function () {
                        var b;
                        return 1e9 * (b = w())[0] + b[1];
                      })()),
                      (r = 1e9 * q.uptime()),
                      (H = f - r))
                    : Date.now
                    ? ((z.exports = function () {
                        return Date.now() - U;
                      }),
                      (U = Date.now()))
                    : ((z.exports = function () {
                        return new Date().getTime() - U;
                      }),
                      (U = new Date().getTime()));
                }).call(this);
              }).call(this, x('_process'));
            },
            { _process: 3 },
          ],
          3: [
            function (x, z, _e) {
              var D,
                w,
                q = (z.exports = {});
              function U() {
                throw new Error('setTimeout has not been defined');
              }
              function f() {
                throw new Error('clearTimeout has not been defined');
              }
              function H(C) {
                if (D === setTimeout) return setTimeout(C, 0);
                if ((D === U || !D) && setTimeout)
                  return (D = setTimeout), setTimeout(C, 0);
                try {
                  return D(C, 0);
                } catch {
                  try {
                    return D.call(null, C, 0);
                  } catch {
                    return D.call(this, C, 0);
                  }
                }
              }
              !(function () {
                try {
                  D = 'function' == typeof setTimeout ? setTimeout : U;
                } catch {
                  D = U;
                }
                try {
                  w = 'function' == typeof clearTimeout ? clearTimeout : f;
                } catch {
                  w = f;
                }
              })();
              var p,
                b = [],
                L = !1,
                c = -1;
              function d() {
                !L ||
                  !p ||
                  ((L = !1),
                  p.length ? (b = p.concat(b)) : (c = -1),
                  b.length && _());
              }
              function _() {
                if (!L) {
                  var C = H(d);
                  L = !0;
                  for (var I = b.length; I; ) {
                    for (p = b, b = []; ++c < I; ) p && p[c].run();
                    (c = -1), (I = b.length);
                  }
                  (p = null),
                    (L = !1),
                    (function r(C) {
                      if (w === clearTimeout) return clearTimeout(C);
                      if ((w === f || !w) && clearTimeout)
                        return (w = clearTimeout), clearTimeout(C);
                      try {
                        return w(C);
                      } catch {
                        try {
                          return w.call(null, C);
                        } catch {
                          return w.call(this, C);
                        }
                      }
                    })(C);
                }
              }
              function M(C, I) {
                (this.fun = C), (this.array = I);
              }
              function Y() {}
              (q.nextTick = function (C) {
                var I = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var re = 1; re < arguments.length; re++)
                    I[re - 1] = arguments[re];
                b.push(new M(C, I)), 1 === b.length && !L && H(_);
              }),
                (M.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (q.title = 'browser'),
                (q.browser = !0),
                (q.env = {}),
                (q.argv = []),
                (q.version = ''),
                (q.versions = {}),
                (q.on = Y),
                (q.addListener = Y),
                (q.once = Y),
                (q.off = Y),
                (q.removeListener = Y),
                (q.removeAllListeners = Y),
                (q.emit = Y),
                (q.prependListener = Y),
                (q.prependOnceListener = Y),
                (q.listeners = function (C) {
                  return [];
                }),
                (q.binding = function (C) {
                  throw new Error('process.binding is not supported');
                }),
                (q.cwd = function () {
                  return '/';
                }),
                (q.chdir = function (C) {
                  throw new Error('process.chdir is not supported');
                }),
                (q.umask = function () {
                  return 0;
                });
            },
            {},
          ],
          4: [
            function (x, z, _e) {
              (function (q) {
                for (
                  var D = x('performance-now'),
                    w = typeof window > 'u' ? q : window,
                    U = ['moz', 'webkit'],
                    f = 'AnimationFrame',
                    H = w['request' + f],
                    r = w['cancel' + f] || w['cancelRequest' + f],
                    b = 0;
                  !H && b < U.length;
                  b++
                )
                  (H = w[U[b] + 'Request' + f]),
                    (r =
                      w[U[b] + 'Cancel' + f] || w[U[b] + 'CancelRequest' + f]);
                if (!H || !r) {
                  var L = 0,
                    p = 0,
                    c = [];
                  (H = function (_) {
                    if (0 === c.length) {
                      var M = D(),
                        Y = Math.max(0, 16.666666666666668 - (M - L));
                      (L = Y + M),
                        setTimeout(function () {
                          var C = c.slice(0);
                          c.length = 0;
                          for (var I = 0; I < C.length; I++)
                            if (!C[I].cancelled)
                              try {
                                C[I].callback(L);
                              } catch (re) {
                                setTimeout(function () {
                                  throw re;
                                }, 0);
                              }
                        }, Math.round(Y));
                    }
                    return (
                      c.push({ handle: ++p, callback: _, cancelled: !1 }), p
                    );
                  }),
                    (r = function (_) {
                      for (var M = 0; M < c.length; M++)
                        c[M].handle === _ && (c[M].cancelled = !0);
                    });
                }
                (z.exports = function (_) {
                  return H.call(w, _);
                }),
                  (z.exports.cancel = function () {
                    r.apply(w, arguments);
                  }),
                  (z.exports.polyfill = function () {
                    (w.requestAnimationFrame = H), (w.cancelAnimationFrame = r);
                  });
              }).call(
                this,
                typeof global < 'u'
                  ? global
                  : typeof self < 'u'
                  ? self
                  : typeof window < 'u'
                  ? window
                  : {}
              );
            },
            { 'performance-now': 2 },
          ],
          5: [
            function (x, z, _e) {
              'use strict';
              var q = (function () {
                function L(p, c) {
                  for (var d = 0; d < c.length; d++) {
                    var _ = c[d];
                    (_.enumerable = _.enumerable || !1),
                      (_.configurable = !0),
                      'value' in _ && (_.writable = !0),
                      Object.defineProperty(p, _.key, _);
                  }
                }
                return function (p, c, d) {
                  return c && L(p.prototype, c), d && L(p, d), p;
                };
              })();
              var w = x('raf'),
                U = x('object-assign'),
                f = {
                  propertyCache: {},
                  vendors: [
                    null,
                    ['-webkit-', 'webkit'],
                    ['-moz-', 'Moz'],
                    ['-o-', 'O'],
                    ['-ms-', 'ms'],
                  ],
                  clamp: function (p, c, d) {
                    return c < d
                      ? p < c
                        ? c
                        : p > d
                        ? d
                        : p
                      : p < d
                      ? d
                      : p > c
                      ? c
                      : p;
                  },
                  data: function (p, c) {
                    return f.deserialize(p.getAttribute('data-' + c));
                  },
                  deserialize: function (p) {
                    return (
                      'true' === p ||
                      ('false' !== p &&
                        ('null' === p
                          ? null
                          : !isNaN(parseFloat(p)) && isFinite(p)
                          ? parseFloat(p)
                          : p))
                    );
                  },
                  camelCase: function (p) {
                    return p.replace(/-+(.)?/g, function (c, d) {
                      return d ? d.toUpperCase() : '';
                    });
                  },
                  accelerate: function (p) {
                    f.css(
                      p,
                      'transform',
                      'translate3d(0,0,0) rotate(0.0001deg)'
                    ),
                      f.css(p, 'transform-style', 'preserve-3d'),
                      f.css(p, 'backface-visibility', 'hidden');
                  },
                  transformSupport: function (p) {
                    for (
                      var c = document.createElement('div'),
                        d = !1,
                        _ = null,
                        M = !1,
                        Y = null,
                        C = null,
                        I = 0,
                        re = f.vendors.length;
                      I < re;
                      I++
                    )
                      if (
                        (null !== f.vendors[I]
                          ? ((Y = f.vendors[I][0] + 'transform'),
                            (C = f.vendors[I][1] + 'Transform'))
                          : ((Y = 'transform'), (C = 'transform')),
                        void 0 !== c.style[C])
                      ) {
                        d = !0;
                        break;
                      }
                    switch (p) {
                      case '2D':
                        M = d;
                        break;
                      case '3D':
                        if (d) {
                          var fe =
                              document.body || document.createElement('body'),
                            k = document.documentElement,
                            Ye = k.style.overflow,
                            Me = !1;
                          document.body ||
                            ((Me = !0),
                            (k.style.overflow = 'hidden'),
                            k.appendChild(fe),
                            (fe.style.overflow = 'hidden'),
                            (fe.style.background = '')),
                            fe.appendChild(c),
                            (c.style[C] = 'translate3d(1px,1px,1px)'),
                            (M =
                              void 0 !==
                                (_ = window
                                  .getComputedStyle(c)
                                  .getPropertyValue(Y)) &&
                              _.length > 0 &&
                              'none' !== _),
                            (k.style.overflow = Ye),
                            fe.removeChild(c),
                            Me &&
                              (fe.removeAttribute('style'),
                              fe.parentNode.removeChild(fe));
                        }
                    }
                    return M;
                  },
                  css: function (p, c, d) {
                    var _ = f.propertyCache[c];
                    if (!_)
                      for (var M = 0, Y = f.vendors.length; M < Y; M++)
                        if (
                          ((_ =
                            null !== f.vendors[M]
                              ? f.camelCase(f.vendors[M][1] + '-' + c)
                              : c),
                          void 0 !== p.style[_])
                        ) {
                          f.propertyCache[c] = _;
                          break;
                        }
                    p.style[_] = d;
                  },
                },
                r = {
                  relativeInput: !1,
                  clipRelativeInput: !1,
                  inputElement: null,
                  hoverOnly: !1,
                  calibrationThreshold: 100,
                  calibrationDelay: 500,
                  supportDelay: 500,
                  calibrateX: !1,
                  calibrateY: !0,
                  invertX: !0,
                  invertY: !0,
                  limitX: !1,
                  limitY: !1,
                  scalarX: 10,
                  scalarY: 10,
                  frictionX: 0.1,
                  frictionY: 0.1,
                  originX: 0.5,
                  originY: 0.5,
                  pointerEvents: !1,
                  precision: 1,
                  onReady: null,
                  selector: null,
                },
                b = (function () {
                  function L(p, c) {
                    (function D(L, p) {
                      if (!(L instanceof p))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, L),
                      (this.element = p);
                    var d = {
                      calibrateX: f.data(this.element, 'calibrate-x'),
                      calibrateY: f.data(this.element, 'calibrate-y'),
                      invertX: f.data(this.element, 'invert-x'),
                      invertY: f.data(this.element, 'invert-y'),
                      limitX: f.data(this.element, 'limit-x'),
                      limitY: f.data(this.element, 'limit-y'),
                      scalarX: f.data(this.element, 'scalar-x'),
                      scalarY: f.data(this.element, 'scalar-y'),
                      frictionX: f.data(this.element, 'friction-x'),
                      frictionY: f.data(this.element, 'friction-y'),
                      originX: f.data(this.element, 'origin-x'),
                      originY: f.data(this.element, 'origin-y'),
                      pointerEvents: f.data(this.element, 'pointer-events'),
                      precision: f.data(this.element, 'precision'),
                      relativeInput: f.data(this.element, 'relative-input'),
                      clipRelativeInput: f.data(
                        this.element,
                        'clip-relative-input'
                      ),
                      hoverOnly: f.data(this.element, 'hover-only'),
                      inputElement: document.querySelector(
                        f.data(this.element, 'input-element')
                      ),
                      selector: f.data(this.element, 'selector'),
                    };
                    for (var _ in d) null === d[_] && delete d[_];
                    U(this, r, d, c),
                      this.inputElement || (this.inputElement = this.element),
                      (this.calibrationTimer = null),
                      (this.calibrationFlag = !0),
                      (this.enabled = !1),
                      (this.depthsX = []),
                      (this.depthsY = []),
                      (this.raf = null),
                      (this.bounds = null),
                      (this.elementPositionX = 0),
                      (this.elementPositionY = 0),
                      (this.elementWidth = 0),
                      (this.elementHeight = 0),
                      (this.elementCenterX = 0),
                      (this.elementCenterY = 0),
                      (this.elementRangeX = 0),
                      (this.elementRangeY = 0),
                      (this.calibrationX = 0),
                      (this.calibrationY = 0),
                      (this.inputX = 0),
                      (this.inputY = 0),
                      (this.motionX = 0),
                      (this.motionY = 0),
                      (this.velocityX = 0),
                      (this.velocityY = 0),
                      (this.onMouseMove = this.onMouseMove.bind(this)),
                      (this.onDeviceOrientation =
                        this.onDeviceOrientation.bind(this)),
                      (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                      (this.onOrientationTimer =
                        this.onOrientationTimer.bind(this)),
                      (this.onMotionTimer = this.onMotionTimer.bind(this)),
                      (this.onCalibrationTimer =
                        this.onCalibrationTimer.bind(this)),
                      (this.onAnimationFrame =
                        this.onAnimationFrame.bind(this)),
                      (this.onWindowResize = this.onWindowResize.bind(this)),
                      (this.windowWidth = null),
                      (this.windowHeight = null),
                      (this.windowCenterX = null),
                      (this.windowCenterY = null),
                      (this.windowRadiusX = null),
                      (this.windowRadiusY = null),
                      (this.portrait = !1),
                      (this.desktop = !navigator.userAgent.match(
                        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                      )),
                      (this.motionSupport =
                        !!window.DeviceMotionEvent && !this.desktop),
                      (this.orientationSupport =
                        !!window.DeviceOrientationEvent && !this.desktop),
                      (this.orientationStatus = 0),
                      (this.motionStatus = 0),
                      this.initialise();
                  }
                  return (
                    q(L, [
                      {
                        key: 'initialise',
                        value: function () {
                          void 0 === this.transform2DSupport &&
                            ((this.transform2DSupport =
                              f.transformSupport('2D')),
                            (this.transform3DSupport =
                              f.transformSupport('3D'))),
                            this.transform3DSupport &&
                              f.accelerate(this.element),
                            'static' ===
                              window
                                .getComputedStyle(this.element)
                                .getPropertyValue('position') &&
                              (this.element.style.position = 'relative'),
                            this.pointerEvents ||
                              (this.element.style.pointerEvents = 'none'),
                            this.updateLayers(),
                            this.updateDimensions(),
                            this.enable(),
                            this.queueCalibration(this.calibrationDelay);
                        },
                      },
                      {
                        key: 'doReadyCallback',
                        value: function () {
                          this.onReady && this.onReady();
                        },
                      },
                      {
                        key: 'updateLayers',
                        value: function () {
                          (this.layers = this.selector
                            ? this.element.querySelectorAll(this.selector)
                            : this.element.children),
                            this.layers.length ||
                              console.warn(
                                'ParallaxJS: Your scene does not have any layers.'
                              ),
                            (this.depthsX = []),
                            (this.depthsY = []);
                          for (var c = 0; c < this.layers.length; c++) {
                            var d = this.layers[c];
                            this.transform3DSupport && f.accelerate(d),
                              (d.style.position = c ? 'absolute' : 'relative'),
                              (d.style.display = 'block'),
                              (d.style.left = 0),
                              (d.style.top = 0);
                            var _ = f.data(d, 'depth') || 0;
                            this.depthsX.push(f.data(d, 'depth-x') || _),
                              this.depthsY.push(f.data(d, 'depth-y') || _);
                          }
                        },
                      },
                      {
                        key: 'updateDimensions',
                        value: function () {
                          (this.windowWidth = window.innerWidth),
                            (this.windowHeight = window.innerHeight),
                            (this.windowCenterX =
                              this.windowWidth * this.originX),
                            (this.windowCenterY =
                              this.windowHeight * this.originY),
                            (this.windowRadiusX = Math.max(
                              this.windowCenterX,
                              this.windowWidth - this.windowCenterX
                            )),
                            (this.windowRadiusY = Math.max(
                              this.windowCenterY,
                              this.windowHeight - this.windowCenterY
                            ));
                        },
                      },
                      {
                        key: 'updateBounds',
                        value: function () {
                          (this.bounds =
                            this.inputElement.getBoundingClientRect()),
                            (this.elementPositionX = this.bounds.left),
                            (this.elementPositionY = this.bounds.top),
                            (this.elementWidth = this.bounds.width),
                            (this.elementHeight = this.bounds.height),
                            (this.elementCenterX =
                              this.elementWidth * this.originX),
                            (this.elementCenterY =
                              this.elementHeight * this.originY),
                            (this.elementRangeX = Math.max(
                              this.elementCenterX,
                              this.elementWidth - this.elementCenterX
                            )),
                            (this.elementRangeY = Math.max(
                              this.elementCenterY,
                              this.elementHeight - this.elementCenterY
                            ));
                        },
                      },
                      {
                        key: 'queueCalibration',
                        value: function (c) {
                          clearTimeout(this.calibrationTimer),
                            (this.calibrationTimer = setTimeout(
                              this.onCalibrationTimer,
                              c
                            ));
                        },
                      },
                      {
                        key: 'enable',
                        value: function () {
                          this.enabled ||
                            ((this.enabled = !0),
                            this.orientationSupport
                              ? ((this.portrait = !1),
                                window.addEventListener(
                                  'deviceorientation',
                                  this.onDeviceOrientation
                                ),
                                (this.detectionTimer = setTimeout(
                                  this.onOrientationTimer,
                                  this.supportDelay
                                )))
                              : this.motionSupport
                              ? ((this.portrait = !1),
                                window.addEventListener(
                                  'devicemotion',
                                  this.onDeviceMotion
                                ),
                                (this.detectionTimer = setTimeout(
                                  this.onMotionTimer,
                                  this.supportDelay
                                )))
                              : ((this.calibrationX = 0),
                                (this.calibrationY = 0),
                                (this.portrait = !1),
                                window.addEventListener(
                                  'mousemove',
                                  this.onMouseMove
                                ),
                                this.doReadyCallback()),
                            window.addEventListener(
                              'resize',
                              this.onWindowResize
                            ),
                            (this.raf = w(this.onAnimationFrame)));
                        },
                      },
                      {
                        key: 'disable',
                        value: function () {
                          this.enabled &&
                            ((this.enabled = !1),
                            this.orientationSupport
                              ? window.removeEventListener(
                                  'deviceorientation',
                                  this.onDeviceOrientation
                                )
                              : this.motionSupport
                              ? window.removeEventListener(
                                  'devicemotion',
                                  this.onDeviceMotion
                                )
                              : window.removeEventListener(
                                  'mousemove',
                                  this.onMouseMove
                                ),
                            window.removeEventListener(
                              'resize',
                              this.onWindowResize
                            ),
                            w.cancel(this.raf));
                        },
                      },
                      {
                        key: 'calibrate',
                        value: function (c, d) {
                          (this.calibrateX =
                            void 0 === c ? this.calibrateX : c),
                            (this.calibrateY =
                              void 0 === d ? this.calibrateY : d);
                        },
                      },
                      {
                        key: 'invert',
                        value: function (c, d) {
                          (this.invertX = void 0 === c ? this.invertX : c),
                            (this.invertY = void 0 === d ? this.invertY : d);
                        },
                      },
                      {
                        key: 'friction',
                        value: function (c, d) {
                          (this.frictionX = void 0 === c ? this.frictionX : c),
                            (this.frictionY =
                              void 0 === d ? this.frictionY : d);
                        },
                      },
                      {
                        key: 'scalar',
                        value: function (c, d) {
                          (this.scalarX = void 0 === c ? this.scalarX : c),
                            (this.scalarY = void 0 === d ? this.scalarY : d);
                        },
                      },
                      {
                        key: 'limit',
                        value: function (c, d) {
                          (this.limitX = void 0 === c ? this.limitX : c),
                            (this.limitY = void 0 === d ? this.limitY : d);
                        },
                      },
                      {
                        key: 'origin',
                        value: function (c, d) {
                          (this.originX = void 0 === c ? this.originX : c),
                            (this.originY = void 0 === d ? this.originY : d);
                        },
                      },
                      {
                        key: 'setInputElement',
                        value: function (c) {
                          (this.inputElement = c), this.updateDimensions();
                        },
                      },
                      {
                        key: 'setPosition',
                        value: function (c, d, _) {
                          (d = d.toFixed(this.precision) + 'px'),
                            (_ = _.toFixed(this.precision) + 'px'),
                            this.transform3DSupport
                              ? f.css(
                                  c,
                                  'transform',
                                  'translate3d(' + d + ',' + _ + ',0)'
                                )
                              : this.transform2DSupport
                              ? f.css(
                                  c,
                                  'transform',
                                  'translate(' + d + ',' + _ + ')'
                                )
                              : ((c.style.left = d), (c.style.top = _));
                        },
                      },
                      {
                        key: 'onOrientationTimer',
                        value: function () {
                          this.orientationSupport &&
                          0 === this.orientationStatus
                            ? (this.disable(),
                              (this.orientationSupport = !1),
                              this.enable())
                            : this.doReadyCallback();
                        },
                      },
                      {
                        key: 'onMotionTimer',
                        value: function () {
                          this.motionSupport && 0 === this.motionStatus
                            ? (this.disable(),
                              (this.motionSupport = !1),
                              this.enable())
                            : this.doReadyCallback();
                        },
                      },
                      {
                        key: 'onCalibrationTimer',
                        value: function () {
                          this.calibrationFlag = !0;
                        },
                      },
                      {
                        key: 'onWindowResize',
                        value: function () {
                          this.updateDimensions();
                        },
                      },
                      {
                        key: 'onAnimationFrame',
                        value: function () {
                          this.updateBounds();
                          var c = this.inputX - this.calibrationX,
                            d = this.inputY - this.calibrationY;
                          (Math.abs(c) > this.calibrationThreshold ||
                            Math.abs(d) > this.calibrationThreshold) &&
                            this.queueCalibration(0),
                            this.portrait
                              ? ((this.motionX = this.calibrateX
                                  ? d
                                  : this.inputY),
                                (this.motionY = this.calibrateY
                                  ? c
                                  : this.inputX))
                              : ((this.motionX = this.calibrateX
                                  ? c
                                  : this.inputX),
                                (this.motionY = this.calibrateY
                                  ? d
                                  : this.inputY)),
                            (this.motionX *=
                              this.elementWidth * (this.scalarX / 100)),
                            (this.motionY *=
                              this.elementHeight * (this.scalarY / 100)),
                            isNaN(parseFloat(this.limitX)) ||
                              (this.motionX = f.clamp(
                                this.motionX,
                                -this.limitX,
                                this.limitX
                              )),
                            isNaN(parseFloat(this.limitY)) ||
                              (this.motionY = f.clamp(
                                this.motionY,
                                -this.limitY,
                                this.limitY
                              )),
                            (this.velocityX +=
                              (this.motionX - this.velocityX) * this.frictionX),
                            (this.velocityY +=
                              (this.motionY - this.velocityY) * this.frictionY);
                          for (var _ = 0; _ < this.layers.length; _++)
                            this.setPosition(
                              this.layers[_],
                              this.velocityX *
                                (this.depthsX[_] * (this.invertX ? -1 : 1)),
                              this.velocityY *
                                (this.depthsY[_] * (this.invertY ? -1 : 1))
                            );
                          this.raf = w(this.onAnimationFrame);
                        },
                      },
                      {
                        key: 'rotate',
                        value: function (c, d) {
                          var _ = (c || 0) / 30,
                            M = (d || 0) / 30,
                            Y = this.windowHeight > this.windowWidth;
                          this.portrait !== Y &&
                            ((this.portrait = Y), (this.calibrationFlag = !0)),
                            this.calibrationFlag &&
                              ((this.calibrationFlag = !1),
                              (this.calibrationX = _),
                              (this.calibrationY = M)),
                            (this.inputX = _),
                            (this.inputY = M);
                        },
                      },
                      {
                        key: 'onDeviceOrientation',
                        value: function (c) {
                          var d = c.beta,
                            _ = c.gamma;
                          null !== d &&
                            null !== _ &&
                            ((this.orientationStatus = 1), this.rotate(d, _));
                        },
                      },
                      {
                        key: 'onDeviceMotion',
                        value: function (c) {
                          var d = c.rotationRate.beta,
                            _ = c.rotationRate.gamma;
                          null !== d &&
                            null !== _ &&
                            ((this.motionStatus = 1), this.rotate(d, _));
                        },
                      },
                      {
                        key: 'onMouseMove',
                        value: function (c) {
                          var d = c.clientX,
                            _ = c.clientY;
                          if (
                            this.hoverOnly &&
                            (d < this.elementPositionX ||
                              d > this.elementPositionX + this.elementWidth ||
                              _ < this.elementPositionY ||
                              _ > this.elementPositionY + this.elementHeight)
                          )
                            return (this.inputX = 0), void (this.inputY = 0);
                          this.relativeInput
                            ? (this.clipRelativeInput &&
                                ((d = Math.max(d, this.elementPositionX)),
                                (d = Math.min(
                                  d,
                                  this.elementPositionX + this.elementWidth
                                )),
                                (_ = Math.max(_, this.elementPositionY)),
                                (_ = Math.min(
                                  _,
                                  this.elementPositionY + this.elementHeight
                                ))),
                              this.elementRangeX &&
                                this.elementRangeY &&
                                ((this.inputX =
                                  (d -
                                    this.elementPositionX -
                                    this.elementCenterX) /
                                  this.elementRangeX),
                                (this.inputY =
                                  (_ -
                                    this.elementPositionY -
                                    this.elementCenterY) /
                                  this.elementRangeY)))
                            : this.windowRadiusX &&
                              this.windowRadiusY &&
                              ((this.inputX =
                                (d - this.windowCenterX) / this.windowRadiusX),
                              (this.inputY =
                                (_ - this.windowCenterY) / this.windowRadiusY));
                        },
                      },
                      {
                        key: 'destroy',
                        value: function () {
                          this.disable(),
                            clearTimeout(this.calibrationTimer),
                            clearTimeout(this.detectionTimer),
                            this.element.removeAttribute('style');
                          for (var c = 0; c < this.layers.length; c++)
                            this.layers[c].removeAttribute('style');
                          delete this.element, delete this.layers;
                        },
                      },
                      {
                        key: 'version',
                        value: function () {
                          return '3.1.0';
                        },
                      },
                    ]),
                    L
                  );
                })();
              z.exports = b;
            },
            { 'object-assign': 1, raf: 4 },
          ],
        },
        {},
        [5]
      )(5);
    },
  },
]);
