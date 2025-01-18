import './polyfills.server.mjs';
import {
  AfterRenderPhase,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  HttpClient,
  HttpHeaders,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NEVER,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  PercentPipe,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  Version,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  afterRender,
  assertInInjectionContext,
  booleanAttribute,
  bootstrapApplication,
  combineLatest,
  computed,
  createComponent,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  finalize,
  forkJoin,
  formatDate,
  forwardRef,
  from,
  fromEvent,
  getDOM,
  inject,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  map,
  merge,
  mergeApplicationConfig,
  mergeMap,
  of,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  provideZoneChangeDetection,
  race,
  setClassMetadata,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  untracked,
  withFetch,
  withLatestFrom,
  zip,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EI2JBM2W.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PTRYWQQD.mjs";

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 2, consts: [[1, "bg-sky-600", "dark:bg-gray-900", "py-6", "mt-8"], [1, "max-w-screen-xl", "mx-auto", "px-4", "flex", "flex-col", "md:flex-row", "items-center", "justify-between"], [1, "text-center", "md:text-left", "mb-4", "md:mb-0"], [1, "flex", "pt-4", "items-center", "space-x-3", 3, "routerLink"], [1, "flex", "items-center"], ["src", "/logo.jpg", "alt", "LA Gurans", 1, "w-12", "h-12", "rounded-full", "shadow-lg", "hover:scale-105", "transition-transform", "duration-200"], [1, "ml-3", "text-2xl", "font-semibold", "text-white", "dark:text-white"], [1, "text-white"], [1, "flex", "space-x-4", "mb-4", "md:mb-0"], ["href", "https://www.facebook.com/profile.php?id=100063767550265", "aria-label", "Facebook", 1, "text-white", "hover:text-black", "transition", "duration-200"], ["fill", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6"], ["d", "M22.675 0h-21.35C.601 0 0 .601 0 1.325v21.35C0 23.399.601 24 1.325 24h21.35C23.399 24 24 23.399 24 22.675V1.325C24 .601 23.399 0 22.675 0zM12 24h-4.868V12H6.465v-4.338h.667V6.136C6.465 3.096 7.838 1.5 10.59 1.5c1.482 0 3.023.085 3.437.123v4.12l-2.361.001c-1.857 0-2.218.884-2.218 2.191v2.876h4.477l-.668 4.338h-3.809V24z"], ["href", "https://www.instagram.com/lagurans/", "aria-label", "Instagram", 1, "text-white", "hover:text-black", "transition", "duration-200"], ["d", "M12 2.163c3.194 0 3.578.012 4.84.07 1.157.057 1.935.243 2.393.406a4.995 4.995 0 0 1 2.228 2.228c.163.458.349 1.236.406 2.393.058 1.262.07 1.646.07 4.84s-.012 3.578-.07 4.84c-.057 1.157-.243 1.935-.406 2.393a4.995 4.995 0 0 1-2.228 2.228c-.458.163-1.236.349-2.393.406-1.262.058-1.646.07-4.84.07s-3.578-.012-4.84-.07c-1.157-.057-1.935-.243-2.393-.406a4.995 4.995 0 0 1-2.228-2.228c-.163-.458-.349-1.236-.406-2.393C2.163 15.578 2.151 15.194 2.151 12s.012-3.578.07-4.84c.057-1.157.243-1.935.406-2.393a4.995 4.995 0 0 1 2.228-2.228c.458-.163 1.236-.349 2.393-.406C8.422 2.175 8.806 2.163 12 2.163zm0-2.163C8.745 0 8.39.013 7.516.072c-1.223.059-2.36.268-3.186.584A7.983 7.983 0 0 0 0 8.008c-.314.826-.525 1.963-.584 3.186C.013 15.611 0 15.966 0 19.225c0 1.56.022 2.237.067 2.895.081 1.416.397 2.469.84 3.345.45.89 1.103 1.674 1.935 2.207.79.506 1.695.828 2.676 1.07.69.148 1.394.211 2.146.297.678.087 1.352.094 2.013.094s1.334-.007 2.013-.094c.752-.086 1.456-.149 2.146-.297a7.95 7.95 0 0 0 2.676-1.07c.832-.533 1.485-1.316 1.935-2.207.443-.876.76-1.929.84-3.345.045-.658.067-1.335.067-2.895 0-3.259-.013-3.614-.067-4.663-.059-1.224-.268-2.36-.584-3.186a7.988 7.988 0 0 0-1.73-3.144c-.826-.316-1.963-.525-3.186-.584C15.609.013 15.254 0 12 0zm0 5.839a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zm0 10.19a4.029 4.029 0 1 1 0-8.057 4.029 4.029 0 0 1 0 8.057zm4.173-10.434a1.077 1.077 0 1 0 0 2.154 1.077 1.077 0 0 0 0-2.154z"], [1, "text-white", "text-center", "md:text-right"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, " LA GURANS ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Connecting People and Communities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 10);
      \u0275\u0275element(16, "path", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 14)(18, "p");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", "/");
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " LA GURANS. All rights reserved.");
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 11 });
})();

// src/app/components/navbar/navbar.component.ts
var _c0 = (a0, a1) => ({ "text-slate-950": a0, "text-white-300": a1 });
var _c1 = (a0) => ({ hidden: a0 });
var _c2 = (a0, a1) => ({ " text-slate-950": a0, "text-white-300": a1 });
var NavbarComponent = class _NavbarComponent {
  _router;
  isMenuOpen = false;
  constructor(_router) {
    this._router = _router;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isActive(route) {
    return this._router.url === route;
  }
  contactUs() {
    this.isMenuOpen = false;
    this._router.navigate(["/contact-us"]);
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 23, consts: [[1, "bg-sky-600", "dark:bg-gray-900", "fixed", "w-full", "z-20", "top-0", "border-b", "border-gray-200", "dark:border-gray-600", "shadow-md"], [1, "max-w-screen-xl", "mx-auto", "p-4", "flex", "flex-wrap", "items-center", "justify-between"], [1, "flex", "pt-4", "items-center", "space-x-3", 3, "routerLink"], [1, "flex", "items-center"], ["src", "/logo.jpg", "alt", "LA Gurans", 1, "w-12", "h-12", "rounded-full", "shadow-lg", "hover:scale-105", "transition-transform", "duration-200"], [1, "ml-3", "text-2xl", "font-semibold", "text-white", "dark:text-white", 3, "ngClass"], [1, "flex", "items-center", "space-x-4", "md:order-2"], ["type", "button", "aria-controls", "navbar-sticky", "aria-expanded", "false", 1, "inline-flex", "items-center", "p-2", "w-10", "h-10", "justify-center", "text-sm", "text-gray-500", "bg-gray-100", "rounded-lg", "md:hidden", "hover:bg-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:focus:ring-gray-600", "transition-colors", "duration-200", 3, "click"], [1, "sr-only"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["id", "navbar-sticky", 1, "w-full", "md:flex", "md:w-auto", "md:order-1", "items-center", 3, "ngClass"], [1, "flex", "flex-col", "md:flex-row", "space-y-2", "md:space-y-0", "md:space-x-8", "mt-4", "md:mt-0"], [1, "block", "py-2", "px-3", "text-lg", "text-white", "rounded", "transition-colors", "duration-200", 3, "click", "routerLink", "ngClass"], [1, "block", "py-2", "px-3", "text-lg", "text-white", "rounded", "md:hover:text-blue-200", "duration-200", 3, "click", "routerLink", "ngClass"], [1, "md:hidden"], ["type", "button", 1, "text-white", "text-lg", "w-45", "bg-black", "hover:bg-black-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "px-5", "py-2", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800", "transition-colors", "duration-200", "text-center", 3, "click"], [1, "hidden", "md:block", "md:order-2"], ["type", "button", 1, "text-white", "text-lg", "bg-black", "hover:bg-black", "focus:outline-none", "font-medium", "rounded-lg", "px-5", "py-2", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800", "transition-colors", "duration-200", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, " LA GURANS ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_8_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Open main menu");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 11)(14, "ul", 12)(15, "li")(16, "a", 13);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_16_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(17, " About us ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 14);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_19_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(20, " Tournament ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 13);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_22_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(23, " Members ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li", 15)(25, "button", 16);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_25_listener() {
        return ctx.contactUs();
      });
      \u0275\u0275text(26, " Contact Us ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "button", 18);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_28_listener() {
        return ctx.contactUs();
      });
      \u0275\u0275text(29, " Contact Us ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "/");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.isActive("/"), !ctx.isActive("/")));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c1, !ctx.isMenuOpen));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", "/about-us")("ngClass", \u0275\u0275pureFunction2(14, _c0, ctx.isActive("/about-us"), !ctx.isActive("/about-us")));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", "/tournament")("ngClass", \u0275\u0275pureFunction2(17, _c2, ctx.isActive("/tournament"), !ctx.isActive("/tournament")));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", "/members")("ngClass", \u0275\u0275pureFunction2(20, _c2, ctx.isActive("/members"), !ctx.isActive("/members")));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink], styles: ["\n\n.img-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "la-gurans-app-frontend";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "min-h-screen", "flex", "flex-col"], [1, "flex-grow"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-navbar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, FooterComponent, NavbarComponent], styles: ["\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 13 });
})();

// src/app/components/home/home.component.ts
function HomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.position);
  }
}
var HomeComponent = class _HomeComponent {
  members = [
    { name: "Amit Gurung", position: "Member" },
    { name: "Prajwol Shakya", position: "Member" },
    { name: "Samarpan Prasai", position: "Member" },
    { name: "Sohan Thapa", position: "Member" }
  ];
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 4, consts: [[1, "container", "mx-auto", "mt-16", "px-4", "py-8"], [1, "bg-sky-600", "mt-8", "rounded-lg", "shadow-lg", "overflow-hidden", "md:flex"], ["src", "tournament2025.jpg", "alt", "Tournament", 1, "w-full", "w-h-48", "md:w-1/3", "md:h-auto", "object-cover"], [1, "p-6", "md:w-2/3"], [1, "text-2xl", "mt-4", "font-bold", "text-white"], [1, "mt-4", "text-white"], [1, "mt-6", "inline-block", "bg-black", "text-white", "font-semibold", "py-2", "px-4", "rounded", "hover:bg-blue-700", 3, "click", "routerLink"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "md:flex"], ["src", "img3.jpg", "alt", "About Us", 1, "w-full", "w-h-48", "md:w-1/3", "md:h-auto", "object-cover"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "mt-4", "text-gray-600"], [1, "mt-8", "bg-sky-600", "rounded-lg", "shadow-lg", "overflow-hidden", "md:flex"], [1, "p-6", "w-full"], [1, "text-3xl", "font-bold", "mb-4", "text-white"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], ["class", "bg-white rounded-lg shadow-md p-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow-md", "p-4"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-700"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Upcoming Tournament");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Join us in our 1");
      \u0275\u0275elementStart(8, "sup");
      \u0275\u0275text(9, "st");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " edition of Gurans Cup January 18 & January 19. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_11_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275text(12, " Learn More ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8);
      \u0275\u0275element(15, "img", 9);
      \u0275\u0275elementStart(16, "div", 3)(17, "h2", 10);
      \u0275\u0275text(18, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 11);
      \u0275\u0275text(20, " Welcome to LA Gurans! We are committed to building community through sports and fostering teamwork, dedication, and mutual respect. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 6);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_21_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275text(22, " Learn More ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 7)(24, "div", 12)(25, "div", 13)(26, "h2", 14);
      \u0275\u0275text(27, "Our Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15);
      \u0275\u0275template(29, HomeComponent_div_29_Template, 5, 2, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 6);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_30_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275text(31, " See More ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", "/tournament");
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", "/about-us");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.members);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", "/members");
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ["\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.hero[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 50vh;\n}\na[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 12 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min2) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min2)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min2 ? {
      "min": {
        "min": min2,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max2) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max2)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max2 ? {
      "max": {
        "max": max2,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn2) {
    this._onDestroyCallbacks.push(fn2);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn2) => fn2());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn2) {
    this._onCollectionChange = fn2;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn2) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn2(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop2 = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop2);
    dir.valueAccessor.registerOnTouched(noop2);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop2 = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop2);
  registerOnValidatorChange(dir._rawAsyncValidators, noop2);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [0, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn2) {
    this._onChange.push(fn2);
  }
  /** @internal */
  _unregisterOnChange(fn2) {
    removeListItem(this._onChange, fn2);
  }
  registerOnDisabledChange(fn2) {
    this._onDisabledChange.push(fn2);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn2) {
    removeListItem(this._onDisabledChange, fn2);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [0, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"],
        options: [0, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn2) {
    this.onChange = (value) => {
      fn2(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn2) {
    this._fn = fn2;
    this.onChange = () => {
      fn2(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn2) {
    this.onChange = (value) => {
      fn2(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [0, "formControl", "form"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [0, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [0, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [0, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [0, "formControlName", "name"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn2) {
    if (typeof fn2 !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn2)}`);
    }
    this._compareWith = fn2;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn2) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn2(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn2) {
    if (typeof fn2 !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn2)}`);
    }
    this._compareWith = fn2;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn2) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn2(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn2) {
    this._onChange = fn2;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max2) => maxValidator(max2);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min2) => minValidator(min2);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(__ngFactoryType__) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(__ngFactoryType__) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(__ngFactoryType__) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(__ngFactoryType__) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.10");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api"
};

// src/app/services/contact.service.ts
var ContactService = class _ContactService {
  http;
  apiUrl = environment.apiUrl + "/contact";
  constructor(http) {
    this.http = http;
  }
  sendContactForm(data) {
    console.log(this.apiUrl);
    return this.http.post(this.apiUrl, data, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
  static \u0275fac = function ContactService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
};

// src/app/components/contact/contact.component.ts
var _c02 = (a0, a1) => ({ "bg-blue-600 hover:bg-blue-700": a0, "bg-gray-200 text-black cursor-not-allowed": a1 });
function ContactComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " Please enter a valid name (letters and spaces only). ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " Please enter a valid email address. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " Please enter message. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.successMessage, " ");
  }
}
function ContactComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
var ContactComponent = class _ContactComponent {
  contactService;
  successMessage = null;
  errorMessage = null;
  constructor(contactService) {
    this.contactService = contactService;
  }
  onSubmit(form) {
    if (form.valid) {
      this.contactService.sendContactForm(form.value).subscribe((response) => {
        this.successMessage = "Your message has been sent successfully!";
        this.errorMessage = null;
        form.reset();
      }, (error) => {
        this.errorMessage = "Failed to send your message. Please try again later.";
        this.successMessage = null;
        console.error("Error:", error);
      });
    }
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(ContactService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 10, consts: [["contactForm", "ngForm"], ["name", "ngModel"], ["email", "ngModel"], ["message", "ngModel"], [1, "container", "bg-sky-600", "mx-auto", "mt-16", "p-6"], [1, "text-3xl", "font-bold", "text-center", "text-white", "mt-4", "mb-6"], [1, "shadow-md", "rounded-lg", "p-8", "mx-auto", 3, "ngSubmit"], [1, "mb-4"], ["for", "name", 1, "block", "text-white", "font-semibold"], [1, "text-red-300"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", "pattern", "^[a-zA-Z ]*$", 1, "mt-2", "w-full", "p-3", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-600"], ["class", "text-red-300 text-sm mt-1", 4, "ngIf"], ["for", "email", 1, "block", "text-white", "font-semibold"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "mt-2", "w-full", "p-3", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-600"], [1, "mb-6"], ["for", "message", 1, "block", "text-white", "font-semibold"], ["id", "message", "name", "message", "ngModel", "", "required", "", "rows", "4", 1, "mt-2", "w-full", "p-3", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-600"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "rounded-lg", "font-semibold", "hover:bg-blue-700", "transition", "duration-200", 3, "disabled", "ngClass"], ["class", "text-center text-green-500 mt-4", 4, "ngIf"], ["class", "text-center text-red-300 mt-4", 4, "ngIf"], [1, "text-red-300", "text-sm", "mt-1"], [1, "text-center", "text-green-500", "mt-4"], [1, "text-center", "text-red-300", "mt-4"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "h2", 5);
      \u0275\u0275text(2, " Contact us ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 6, 0);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_3_listener() {
        \u0275\u0275restoreView(_r1);
        const contactForm_r2 = \u0275\u0275reference(4);
        return \u0275\u0275resetView(ctx.onSubmit(contactForm_r2));
      });
      \u0275\u0275elementStart(5, "div", 7)(6, "label", 8);
      \u0275\u0275text(7, "Name ");
      \u0275\u0275elementStart(8, "span", 9);
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "input", 10, 1);
      \u0275\u0275template(12, ContactComponent_div_12_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "label", 12);
      \u0275\u0275text(15, "Email ");
      \u0275\u0275elementStart(16, "span", 9);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "input", 13, 2);
      \u0275\u0275template(20, ContactComponent_div_20_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "label", 15);
      \u0275\u0275text(23, "Message ");
      \u0275\u0275elementStart(24, "span", 9);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "textarea", 16, 3);
      \u0275\u0275template(28, ContactComponent_div_28_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 17);
      \u0275\u0275text(30, " Send Message ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, ContactComponent_div_31_Template, 2, 1, "div", 18)(32, ContactComponent_div_32_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const contactForm_r2 = \u0275\u0275reference(4);
      const name_r4 = \u0275\u0275reference(11);
      const email_r5 = \u0275\u0275reference(19);
      const message_r6 = \u0275\u0275reference(27);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", name_r4.invalid && name_r4.touched);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", email_r5.invalid && email_r5.touched);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", message_r6.invalid && message_r6.touched);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !contactForm_r2.valid)("ngClass", \u0275\u0275pureFunction2(7, _c02, contactForm_r2.valid, !contactForm_r2.valid));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, PatternValidator, EmailValidator, NgModel, NgForm, CommonModule, NgClass, NgIf], styles: ["\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\components\\contact\\contact.component.ts", lineNumber: 14 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn2 = function noopFn3() {
          };
          effectCleanupFns.push(cleanupFn || noopFn2);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs
var _c03 = ["*"];
function NgbAlert_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function NgbAlert_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
  }
}
function NgbCarousel_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function NgbCarousel_For_2_Template_button_click_0_listener() {
      const slide_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.focus();
      return \u0275\u0275resetView(ctx_r2.select(slide_r2.id, ctx_r2.NgbSlideEventSource.INDICATOR));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", slide_r2.id === ctx_r2.activeId);
    \u0275\u0275attribute("aria-labelledby", "slide-" + slide_r2.id)("aria-controls", "slide-" + slide_r2.id)("aria-selected", slide_r2.id === ctx_r2.activeId);
  }
}
function NgbCarousel_For_5_ng_template_3_Template(rf, ctx) {
}
function NgbCarousel_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 8);
    \u0275\u0275i18n(2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgbCarousel_For_5_ng_template_3_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const \u0275$index_8_r5 = ctx.$index;
    const \u0275$count_8_r6 = ctx.$count;
    \u0275\u0275property("id", "slide-" + slide_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275i18nExp(\u0275$index_8_r5 + 1)(\u0275$count_8_r6);
    \u0275\u0275i18nApply(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", slide_r4.templateRef);
  }
}
function NgbCarousel_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function NgbCarousel_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.arrowLeft());
    });
    \u0275\u0275element(1, "span", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275i18n(3, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function NgbCarousel_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.arrowRight());
    });
    \u0275\u0275element(5, "span", 14);
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275i18n(7, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-labelledby", ctx_r2.id + "-previous");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r2.id + "-previous");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-labelledby", ctx_r2.id + "-next");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r2.id + "-next");
  }
}
var _c12 = ["ngbDatepickerDayView", ""];
var _c22 = ["month"];
var _c3 = ["year"];
function NgbDatepickerNavigationSelect_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", m_r2);
    \u0275\u0275attribute("aria-label", ctx_r2.i18n.getMonthFullName(m_r2, ctx_r2.date.year));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.i18n.getMonthShortName(m_r2, ctx_r2.date.year));
  }
}
function NgbDatepickerNavigationSelect_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.i18n.getYearNumerals(y_r4));
  }
}
function NgbDatepickerNavigation_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-datepicker-navigation-select", 6);
    \u0275\u0275listener("select", function NgbDatepickerNavigation_Conditional_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r1.date)("disabled", ctx_r1.disabled)("months", ctx_r1.selectBoxes.months)("years", ctx_r1.selectBoxes.years);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template, 1, 0, "div", 7);
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template, 1, 0, "div", 7);
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const \u0275$index_11_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275$index_11_r4 > 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.getMonthLabel(month_r3.firstDate), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_11_r4 !== ctx_r1.months.length - 1 ? 3 : -1);
  }
}
function NgbDatepickerNavigation_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgbDatepickerNavigation_Conditional_4_For_1_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.months);
  }
}
function NgbDatepickerMonth_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.i18n.getWeekLabel());
  }
}
function NgbDatepickerMonth_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(weekday_r2);
  }
}
function NgbDatepickerMonth_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, NgbDatepickerMonth_Conditional_0_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275repeaterCreate(2, NgbDatepickerMonth_Conditional_0_For_3_Template, 2, 1, "div", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.viewModel.weekdays);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.i18n.getWeekNumerals(week_r3.number));
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.datepicker.dayTemplate)("ngTemplateOutletContext", day_r5.context);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template_div_click_0_listener($event) {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.doSelect(day_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(1, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template, 1, 2, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    \u0275\u0275classProp("disabled", day_r5.context.disabled)("hidden", day_r5.hidden)("ngb-dp-today", day_r5.context.today);
    \u0275\u0275property("tabindex", day_r5.tabindex);
    \u0275\u0275attribute("aria-label", day_r5.ariaLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(!day_r5.hidden ? 1 : -1);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template, 2, 1, "div", 4);
    \u0275\u0275repeaterCreate(2, NgbDatepickerMonth_For_2_Conditional_0_For_3_Template, 2, 9, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(week_r3.days);
  }
}
function NgbDatepickerMonth_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgbDatepickerMonth_For_2_Conditional_0_Template, 4, 1, "div", 3);
  }
  if (rf & 2) {
    const week_r3 = ctx.$implicit;
    \u0275\u0275conditional(!week_r3.collapsed ? 0 : -1);
  }
}
var _c4 = ["defaultDayTemplate"];
var _c5 = ["content"];
var _c6 = (a0) => ({
  $implicit: a0
});
function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
  if (rf & 2) {
    const date_r1 = ctx.date;
    const currentMonth_r2 = ctx.currentMonth;
    const selected_r3 = ctx.selected;
    const disabled_r4 = ctx.disabled;
    const focused_r5 = ctx.focused;
    \u0275\u0275property("date", date_r1)("currentMonth", currentMonth_r2)("selected", selected_r3)("disabled", disabled_r4)("focused", focused_r5);
  }
}
function NgbDatepicker_ng_template_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.i18n.getMonthLabel(month_r6.firstDate), " ");
  }
}
function NgbDatepicker_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, NgbDatepicker_ng_template_2_For_1_Conditional_1_Template, 2, 1, "div", 10);
    \u0275\u0275element(2, "ngb-datepicker-month", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.navigation === "none" || ctx_r6.displayMonths > 1 && ctx_r6.navigation === "select" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("month", month_r6.firstDate);
  }
}
function NgbDatepicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgbDatepicker_ng_template_2_For_1_Template, 3, 2, "div", 9, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r6.model.months);
  }
}
function NgbDatepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngb-datepicker-navigation", 12);
    \u0275\u0275listener("navigate", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onNavigateEvent($event));
    })("select", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_select_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onNavigateDateSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r6.model.firstDate)("months", ctx_r6.model.months)("disabled", ctx_r6.model.disabled)("showSelect", ctx_r6.model.navigation === "select")("prevDisabled", ctx_r6.model.prevDisabled)("nextDisabled", ctx_r6.model.nextDisabled)("selectBoxes", ctx_r6.model.selectBoxes);
  }
}
function NgbDatepicker_ng_template_8_Template(rf, ctx) {
}
function NgbDatepicker_ng_template_9_Template(rf, ctx) {
}
var _c7 = ["dialog"];
var _c8 = ["ngbNavOutlet", ""];
function NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NgbNavOutlet_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r1)("nav", ctx_r1.nav)("role", ctx_r1.paneRole);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c6, item_r1.active || ctx_r1.isPanelTransitioning(item_r1)));
  }
}
function NgbNavOutlet_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgbNavOutlet_For_1_Conditional_0_Template, 2, 7, "div", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(item_r1.isPanelInDom() || ctx_r1.isPanelTransitioning(item_r1) ? 0 : -1);
  }
}
var _c9 = (a0, a1, a2) => ({
  $implicit: a0,
  pages: a1,
  disabled: a2
});
var _c10 = (a0) => ({
  disabled: true,
  currentPage: a0
});
var _c11 = (a0, a1, a2) => ({
  disabled: a0,
  $implicit: a1,
  currentPage: a2
});
var _c122 = (a0, a1) => ({
  disabled: a0,
  currentPage: a1
});
var _c13 = (a0) => ({
  disabled: a0
});
function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275i18n(1, 7);
    \u0275\u0275elementEnd();
  }
}
function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275i18n(1, 8);
    \u0275\u0275elementEnd();
  }
}
function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275i18n(1, 9);
    \u0275\u0275elementEnd();
  }
}
function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275i18n(1, 10);
    \u0275\u0275elementEnd();
  }
}
function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "...");
  }
}
function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    \u0275\u0275textInterpolate(page_r1);
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275template(1, NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const ellipsis_r4 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplEllipsis == null ? null : ctx_r2.tplEllipsis.templateRef) || ellipsis_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c10, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275listener("click", function NgbPagination_ng_template_12_For_1_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const pageNumber_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectPage(pageNumber_r6);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(1, NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = \u0275\u0275nextContext();
    const defaultNumber_r9 = \u0275\u0275reference(11);
    \u0275\u0275attribute("tabindex", disabled_r8 ? "-1" : null)("aria-disabled", disabled_r8 ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplNumber == null ? null : ctx_r2.tplNumber.templateRef) || defaultNumber_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c11, disabled_r8, pageNumber_r6, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275template(1, NgbPagination_ng_template_12_For_1_Conditional_1_Template, 2, 4, "a", 16)(2, NgbPagination_ng_template_12_For_1_Conditional_2_Template, 2, 8, "a", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", pageNumber_r6 === page_r2)("disabled", ctx_r2.isEllipsis(pageNumber_r6) || disabled_r8);
    \u0275\u0275attribute("aria-current", pageNumber_r6 === page_r2 ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isEllipsis(pageNumber_r6) ? 1 : 2);
  }
}
function NgbPagination_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgbPagination_ng_template_12_For_1_Template, 3, 6, "li", 14, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const pages_r10 = ctx.pages;
    \u0275\u0275repeater(pages_r10);
  }
}
function NgbPagination_Conditional_15_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 19);
    \u0275\u0275listener("click", function NgbPagination_Conditional_15_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectPage(1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(2, NgbPagination_Conditional_15_ng_template_2_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const first_r12 = \u0275\u0275reference(1);
    \u0275\u0275classProp("disabled", ctx_r2.previousDisabled());
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplFirst == null ? null : ctx_r2.tplFirst.templateRef) || first_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction2(6, _c122, ctx_r2.previousDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_16_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 20);
    \u0275\u0275listener("click", function NgbPagination_Conditional_16_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectPage(ctx_r2.page - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(2, NgbPagination_Conditional_16_ng_template_2_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const previous_r14 = \u0275\u0275reference(3);
    \u0275\u0275classProp("disabled", ctx_r2.previousDisabled());
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplPrevious == null ? null : ctx_r2.tplPrevious.templateRef) || previous_r14)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c13, ctx_r2.previousDisabled()));
  }
}
function NgbPagination_ng_template_17_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 21);
    \u0275\u0275listener("click", function NgbPagination_Conditional_18_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectPage(ctx_r2.page + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(2, NgbPagination_Conditional_18_ng_template_2_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const next_r16 = \u0275\u0275reference(5);
    \u0275\u0275classProp("disabled", ctx_r2.nextDisabled());
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplNext == null ? null : ctx_r2.tplNext.templateRef) || next_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(6, _c122, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_19_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 22);
    \u0275\u0275listener("click", function NgbPagination_Conditional_19_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectPage(ctx_r2.pageCount);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275template(2, NgbPagination_Conditional_19_ng_template_2_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const last_r18 = \u0275\u0275reference(7);
    \u0275\u0275classProp("disabled", ctx_r2.nextDisabled());
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r2.tplLast == null ? null : ctx_r2.tplLast.templateRef) || last_r18)("ngTemplateOutletContext", \u0275\u0275pureFunction2(6, _c122, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
function NgbPopoverWindow_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function NgbPopoverWindow_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NgbPopoverWindow_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 2);
    \u0275\u0275template(1, NgbPopoverWindow_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, NgbPopoverWindow_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const simpleTitle_r2 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : simpleTitle_r2)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function NgbProgressbar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275i18n(1, 0);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(2, 1, ctx_r0.getValue() / ctx_r0.max));
    \u0275\u0275i18nApply(1);
  }
}
function NgbRating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275textInterpolate(fill_r1 === 100 ? "\u2605" : "\u2606");
  }
}
function NgbRating_For_3_ng_template_3_Template(rf, ctx) {
}
function NgbRating_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275listener("mouseenter", function NgbRating_For_3_Template_span_mouseenter_2_listener() {
      const \u0275$index_4_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.enter(\u0275$index_4_r3 + 1));
    })("click", function NgbRating_For_3_Template_span_click_2_listener() {
      const \u0275$index_4_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.handleClick(\u0275$index_4_r3 + 1));
    });
    \u0275\u0275template(3, NgbRating_For_3_ng_template_3_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_4_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    const t_r5 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275$index_4_r3 < ctx_r3.nextRate ? "*" : " ", ")");
    \u0275\u0275advance();
    \u0275\u0275styleProp("cursor", ctx_r3.isInteractive() ? "pointer" : "default");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.starTemplate || ctx_r3.starTemplateFromContent || t_r5)("ngTemplateOutletContext", ctx_r3.contexts[\u0275$index_4_r3]);
  }
}
function NgbTimepicker_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeHour(ctx_r1.hourStep));
    });
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeHour(-ctx_r1.hourStep));
    });
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinute(ctx_r1.minuteStep));
    });
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeMinute(-ctx_r1.minuteStep));
    });
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_12_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeSecond(ctx_r1.secondStep));
    });
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_12_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeSecond(-ctx_r1.secondStep));
    });
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275i18n(3, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275template(3, NgbTimepicker_Conditional_12_Conditional_3_Template, 4, 7, "button", 10);
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275listener("change", function NgbTimepicker_Conditional_12_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSecond($event.target.value));
    })("blur", function NgbTimepicker_Conditional_12_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    })("input", function NgbTimepicker_Conditional_12_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowUp_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.changeSecond(ctx_r1.secondStep);
      return \u0275\u0275resetView($event.preventDefault());
    })("keydown.ArrowDown", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowDown_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.changeSecond(-ctx_r1.secondStep);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NgbTimepicker_Conditional_12_Conditional_5_Template, 4, 7, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.spinners ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-control-sm", ctx_r1.isSmallSize)("form-control-lg", ctx_r1.isLargeSize);
    \u0275\u0275property("value", ctx_r1.formatMinSec(ctx_r1.model == null ? null : ctx_r1.model.second))("readOnly", ctx_r1.readonlyInputs)("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.spinners ? 5 : -1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275i18n(1, 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275i18nExp(ctx_r1.i18n.getAfternoonPeriod());
    \u0275\u0275i18nApply(1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.i18n.getMorningPeriod());
  }
}
function NgbTimepicker_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 12);
    \u0275\u0275elementStart(1, "div", 21)(2, "button", 22);
    \u0275\u0275listener("click", function NgbTimepicker_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMeridian());
    });
    \u0275\u0275template(3, NgbTimepicker_Conditional_13_Conditional_3_Template, 2, 1, "ng-container")(4, NgbTimepicker_Conditional_13_Conditional_4_Template, 2, 1, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.model && ctx_r1.model.hour >= 12 ? 3 : 4);
  }
}
function NgbToast_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.header);
  }
}
function NgbToast_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbToast_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NgbToast_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementStart(2, "button", 5);
    \u0275\u0275listener("click", function NgbToast_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hide());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const headerTpl_r3 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentHeaderTpl || headerTpl_r3);
  }
}
function NgbHighlight_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.highlightClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const part_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgbHighlight_For_1_Conditional_0_Template, 2, 4, "span", 0)(1, NgbHighlight_For_1_Conditional_1_Template, 2, 1, "ng-container");
  }
  if (rf & 2) {
    const \u0275$index_1_r3 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_1_r3 % 2 !== 0 ? 0 : 1);
  }
}
var _c14 = (a0, a1, a2) => ({
  result: a0,
  term: a1,
  formatter: a2
});
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngb-highlight", 2);
  }
  if (rf & 2) {
    const result_r1 = ctx.result;
    const term_r2 = ctx.term;
    const formatter_r3 = ctx.formatter;
    \u0275\u0275property("result", formatter_r3(result_r1))("term", term_r2);
  }
}
function NgbTypeaheadWindow_For_3_ng_template_1_Template(rf, ctx) {
}
function NgbTypeaheadWindow_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("mouseenter", function NgbTypeaheadWindow_For_3_Template_button_mouseenter_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.markActive($index_r5));
    })("click", function NgbTypeaheadWindow_For_3_Template_button_click_0_listener() {
      const result_r7 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.select(result_r7));
    });
    \u0275\u0275template(1, NgbTypeaheadWindow_For_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    const rt_r8 = \u0275\u0275reference(1);
    \u0275\u0275classProp("active", $index_r5 === ctx_r5.activeIdx);
    \u0275\u0275property("id", ctx_r5.id + "-" + $index_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r5.resultTemplate || rt_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction3(5, _c14, result_r7, ctx_r5.term, ctx_r5.formatter));
  }
}
var environment2 = {
  animation: true,
  transitionTimerDelayMs: 5
};
var NgbConfig = class _NgbConfig {
  constructor() {
    this.animation = environment2.animation;
  }
  static {
    this.\u0275fac = function NgbConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbConfig,
      factory: _NgbConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbAccordionConfig = class _NgbAccordionConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.closeOthers = false;
    this.destroyOnHide = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbAccordionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbAccordionConfig,
      factory: _NgbAccordionConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function getTransitionDurationMs(element) {
  const {
    transitionDelay,
    transitionDuration
  } = window.getComputedStyle(element);
  const transitionDelaySec = parseFloat(transitionDelay);
  const transitionDurationSec = parseFloat(transitionDuration);
  return (transitionDelaySec + transitionDurationSec) * 1e3;
}
function toInteger2(value) {
  return parseInt(`${value}`, 10);
}
function toString(value) {
  return value !== void 0 && value !== null ? `${value}` : "";
}
function getValueInRange(value, max2, min2 = 0) {
  return Math.max(Math.min(value, max2), min2);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return !isNaN(toInteger2(value));
}
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isPromise2(v) {
  return v && v.then;
}
function padNumber(value) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}
function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function closest(element, selector) {
  if (!selector) {
    return null;
  }
  if (typeof element.closest === "undefined") {
    return null;
  }
  return element.closest(selector);
}
function reflow(element) {
  return (element || document.body).getBoundingClientRect();
}
function runInZone(zone) {
  return (source) => {
    return new Observable((observer) => {
      const next = (value) => zone.run(() => observer.next(value));
      const error = (e) => zone.run(() => observer.error(e));
      const complete = () => zone.run(() => observer.complete());
      return source.subscribe({
        next,
        error,
        complete
      });
    });
  };
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function getActiveElement(root = document) {
  const activeEl = root?.activeElement;
  if (!activeEl) {
    return null;
  }
  return activeEl.shadowRoot ? getActiveElement(activeEl.shadowRoot) : activeEl;
}
var noopFn = () => {
};
var {
  transitionTimerDelayMs
} = environment2;
var runningTransitions = /* @__PURE__ */ new Map();
var ngbRunTransition = (zone, element, startFn, options) => {
  let context = options.context || {};
  const running = runningTransitions.get(element);
  if (running) {
    switch (options.runningTransition) {
      case "continue":
        return EMPTY;
      case "stop":
        zone.run(() => running.transition$.complete());
        context = Object.assign(running.context, context);
        runningTransitions.delete(element);
    }
  }
  const endFn = startFn(element, options.animation, context) || noopFn;
  if (!options.animation || window.getComputedStyle(element).transitionProperty === "none") {
    zone.run(() => endFn());
    return of(void 0).pipe(runInZone(zone));
  }
  const transition$ = new Subject();
  const finishTransition$ = new Subject();
  const stop$ = transition$.pipe(endWith(true));
  runningTransitions.set(element, {
    transition$,
    complete: () => {
      finishTransition$.next();
      finishTransition$.complete();
    },
    context
  });
  const transitionDurationMs = getTransitionDurationMs(element);
  zone.runOutsideAngular(() => {
    const transitionEnd$ = fromEvent(element, "transitionend").pipe(takeUntil(stop$), filter(({
      target
    }) => target === element));
    const timer$ = timer(transitionDurationMs + transitionTimerDelayMs).pipe(takeUntil(stop$));
    race(timer$, transitionEnd$, finishTransition$).pipe(takeUntil(stop$)).subscribe(() => {
      runningTransitions.delete(element);
      zone.run(() => {
        endFn();
        transition$.next();
        transition$.complete();
      });
    });
  });
  return transition$.asObservable();
};
var ngbCompleteTransition = (element) => {
  runningTransitions.get(element)?.complete();
};
function measureCollapsingElementDimensionPx(element, dimension) {
  if (typeof navigator === "undefined") {
    return "0px";
  }
  const {
    classList
  } = element;
  const hasShownClass = classList.contains("show");
  if (!hasShownClass) {
    classList.add("show");
  }
  element.style[dimension] = "";
  const dimensionSize = element.getBoundingClientRect()[dimension] + "px";
  if (!hasShownClass) {
    classList.remove("show");
  }
  return dimensionSize;
}
var ngbCollapsingTransition = (element, animation, context) => {
  let {
    direction,
    maxSize,
    dimension
  } = context;
  const {
    classList
  } = element;
  function setInitialClasses() {
    classList.add("collapse");
    if (direction === "show") {
      classList.add("show");
    } else {
      classList.remove("show");
    }
  }
  if (!animation) {
    setInitialClasses();
    return;
  }
  if (!maxSize) {
    maxSize = measureCollapsingElementDimensionPx(element, dimension);
    context.maxSize = maxSize;
    element.style[dimension] = direction !== "show" ? maxSize : "0px";
    classList.remove("collapse", "collapsing", "show");
    reflow(element);
    classList.add("collapsing");
  }
  element.style[dimension] = direction === "show" ? maxSize : "0px";
  return () => {
    setInitialClasses();
    classList.remove("collapsing");
    element.style[dimension] = "";
  };
};
var NgbCollapseConfig = class _NgbCollapseConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.horizontal = false;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbCollapseConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCollapseConfig,
      factory: _NgbCollapseConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbCollapse = class _NgbCollapse {
  constructor() {
    this._config = inject(NgbCollapseConfig);
    this._element = inject(ElementRef);
    this._zone = inject(NgZone);
    this.animation = this._config.animation;
    this._afterInit = false;
    this._isCollapsed = false;
    this.ngbCollapseChange = new EventEmitter();
    this.horizontal = this._config.horizontal;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  set collapsed(isCollapsed) {
    if (this._isCollapsed !== isCollapsed) {
      this._isCollapsed = isCollapsed;
      if (this._afterInit) {
        this._runTransitionWithEvents(isCollapsed, this.animation);
      }
    }
  }
  ngOnInit() {
    this._runTransition(this._isCollapsed, false);
    this._afterInit = true;
  }
  /**
   * Triggers collapsing programmatically.
   *
   * If there is a collapsing transition running already, it will be reversed.
   * If the animations are turned off this happens synchronously.
   *
   * @since 8.0.0
   */
  toggle(open = this._isCollapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this._isCollapsed);
  }
  _runTransition(collapsed, animation) {
    return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
      animation,
      runningTransition: "stop",
      context: {
        direction: collapsed ? "hide" : "show",
        dimension: this.horizontal ? "width" : "height"
      }
    });
  }
  _runTransitionWithEvents(collapsed, animation) {
    this._runTransition(collapsed, animation).subscribe(() => {
      if (collapsed) {
        this.hidden.emit();
      } else {
        this.shown.emit();
      }
    });
  }
  static {
    this.\u0275fac = function NgbCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapse)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbCollapse,
      selectors: [["", "ngbCollapse", ""]],
      hostVars: 2,
      hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("collapse-horizontal", ctx.horizontal);
        }
      },
      inputs: {
        animation: "animation",
        collapsed: [0, "ngbCollapse", "collapsed"],
        horizontal: "horizontal"
      },
      outputs: {
        ngbCollapseChange: "ngbCollapseChange",
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbCollapse"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapse, [{
    type: Directive,
    args: [{
      selector: "[ngbCollapse]",
      exportAs: "ngbCollapse",
      standalone: true,
      host: {
        "[class.collapse-horizontal]": "horizontal"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    collapsed: [{
      type: Input,
      args: ["ngbCollapse"]
    }],
    ngbCollapseChange: [{
      type: Output
    }],
    horizontal: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var nextId$3 = 0;
var NgbAccordionBody = class _NgbAccordionBody {
  constructor() {
    this._vcr = inject(ViewContainerRef);
    this._element = inject(ElementRef).nativeElement;
    this._item = inject(NgbAccordionItem);
    this._viewRef = null;
  }
  ngAfterContentChecked() {
    if (this._bodyTpl) {
      if (this._item._shouldBeInDOM) {
        this._createViewIfNotExists();
      } else {
        this._destroyViewIfExists();
      }
    }
  }
  ngOnDestroy() {
    this._destroyViewIfExists();
  }
  _destroyViewIfExists() {
    this._viewRef?.destroy();
    this._viewRef = null;
  }
  _createViewIfNotExists() {
    if (!this._viewRef) {
      this._viewRef = this._vcr.createEmbeddedView(this._bodyTpl);
      this._viewRef.detectChanges();
      for (const node of this._viewRef.rootNodes) {
        this._element.appendChild(node);
      }
    }
  }
  static {
    this.\u0275fac = function NgbAccordionBody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionBody)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionBody,
      selectors: [["", "ngbAccordionBody", ""]],
      contentQueries: function NgbAccordionBody_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyTpl = _t.first);
        }
      },
      hostAttrs: [1, "accordion-body"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionBody, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionBody]",
      standalone: true,
      host: {
        class: "accordion-body"
      }
    }]
  }], null, {
    _bodyTpl: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NgbAccordionCollapse = class _NgbAccordionCollapse {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.ngbCollapse = inject(NgbCollapse);
  }
  static {
    this.\u0275fac = function NgbAccordionCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionCollapse)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionCollapse,
      selectors: [["", "ngbAccordionCollapse", ""]],
      hostAttrs: ["role", "region", 1, "accordion-collapse"],
      hostVars: 2,
      hostBindings: function NgbAccordionCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.item.collapseId);
          \u0275\u0275attribute("aria-labelledby", ctx.item.toggleId);
        }
      },
      exportAs: ["ngbAccordionCollapse"],
      standalone: true,
      features: [\u0275\u0275HostDirectivesFeature([NgbCollapse])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionCollapse, [{
    type: Directive,
    args: [{
      exportAs: "ngbAccordionCollapse",
      standalone: true,
      selector: "[ngbAccordionCollapse]",
      host: {
        role: "region",
        class: "accordion-collapse",
        "[id]": "item.collapseId",
        "[attr.aria-labelledby]": "item.toggleId"
      },
      hostDirectives: [NgbCollapse]
    }]
  }], null, null);
})();
var NgbAccordionToggle = class _NgbAccordionToggle {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.accordion = inject(NgbAccordionDirective);
  }
  static {
    this.\u0275fac = function NgbAccordionToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionToggle)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionToggle,
      selectors: [["", "ngbAccordionToggle", ""]],
      hostVars: 5,
      hostBindings: function NgbAccordionToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgbAccordionToggle_click_HostBindingHandler() {
            return !ctx.item.disabled && ctx.accordion.toggle(ctx.item.id);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.item.toggleId);
          \u0275\u0275attribute("aria-controls", ctx.item.collapseId)("aria-expanded", !ctx.item.collapsed);
          \u0275\u0275classProp("collapsed", ctx.item.collapsed);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionToggle]",
      standalone: true,
      host: {
        "[id]": "item.toggleId",
        "[class.collapsed]": "item.collapsed",
        "[attr.aria-controls]": "item.collapseId",
        "[attr.aria-expanded]": "!item.collapsed",
        "(click)": "!item.disabled && accordion.toggle(item.id)"
      }
    }]
  }], null, null);
})();
var NgbAccordionButton = class _NgbAccordionButton {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.\u0275fac = function NgbAccordionButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionButton)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionButton,
      selectors: [["button", "ngbAccordionButton", ""]],
      hostAttrs: ["type", "button", 1, "accordion-button"],
      hostVars: 1,
      hostBindings: function NgbAccordionButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.item.disabled);
        }
      },
      standalone: true,
      features: [\u0275\u0275HostDirectivesFeature([NgbAccordionToggle])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbAccordionButton]",
      standalone: true,
      host: {
        "[disabled]": "item.disabled",
        class: "accordion-button",
        type: "button"
      },
      hostDirectives: [NgbAccordionToggle]
    }]
  }], null, null);
})();
var NgbAccordionHeader = class _NgbAccordionHeader {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.\u0275fac = function NgbAccordionHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionHeader)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionHeader,
      selectors: [["", "ngbAccordionHeader", ""]],
      hostAttrs: ["role", "heading", 1, "accordion-header"],
      hostVars: 2,
      hostBindings: function NgbAccordionHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("collapsed", ctx.item.collapsed);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionHeader]",
      standalone: true,
      host: {
        role: "heading",
        class: "accordion-header",
        "[class.collapsed]": "item.collapsed"
      }
    }]
  }], null, null);
})();
var NgbAccordionItem = class _NgbAccordionItem {
  constructor() {
    this._accordion = inject(NgbAccordionDirective);
    this._cd = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._collapsed = true;
    this._id = `ngb-accordion-item-${nextId$3++}`;
    this._collapseAnimationRunning = false;
    this.disabled = false;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Sets the custom ID of the accordion item. It must be unique for the document.
   *
   * @param id The ID of the accordion item, must be a non-empty string
   */
  set id(id) {
    if (isString(id) && id !== "") {
      this._id = id;
    }
  }
  /**
   * If `true`, the content of the accordion item's body will be removed from the DOM. It will be just hidden otherwise.
   *
   * This property can also be set up on the parent [`NgbAccordion` directive](#/components/accordion/api#NgbAccordionDirective).
   */
  set destroyOnHide(destroyOnHide) {
    this._destroyOnHide = destroyOnHide;
  }
  get destroyOnHide() {
    return this._destroyOnHide === void 0 ? this._accordion.destroyOnHide : this._destroyOnHide;
  }
  /**
   *	If `true`, the accordion item will be collapsed. Otherwise, it will be expanded.
   *
   * @param collapsed New state of the accordion item.
   */
  set collapsed(collapsed) {
    if (collapsed) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  get collapsed() {
    return this._collapsed;
  }
  get id() {
    return `${this._id}`;
  }
  get toggleId() {
    return `${this.id}-toggle`;
  }
  get collapseId() {
    return `${this.id}-collapse`;
  }
  get _shouldBeInDOM() {
    return !this.collapsed || this._collapseAnimationRunning || !this.destroyOnHide;
  }
  ngAfterContentInit() {
    const {
      ngbCollapse
    } = this._collapse;
    ngbCollapse.animation = false;
    ngbCollapse.collapsed = this.collapsed;
    ngbCollapse.animation = this._accordion.animation;
    ngbCollapse.hidden.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._collapseAnimationRunning = false;
      this.hidden.emit();
      this._accordion.hidden.emit(this.id);
    });
    ngbCollapse.shown.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.shown.emit();
      this._accordion.shown.emit(this.id);
    });
  }
  /**
   * Toggles an accordion item.
   */
  toggle() {
    this.collapsed = !this.collapsed;
  }
  /**
   * Expands an accordion item.
   */
  expand() {
    if (this.collapsed) {
      if (!this._accordion._ensureCanExpand(this)) {
        return;
      }
      this._collapsed = false;
      this._cd.markForCheck();
      this._cd.detectChanges();
      this.show.emit();
      this._accordion.show.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = false;
    }
  }
  /**
   * Collapses an accordion item.
   */
  collapse() {
    if (!this.collapsed) {
      this._collapsed = true;
      this._collapseAnimationRunning = true;
      this._cd.markForCheck();
      this.hide.emit();
      this._accordion.hide.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = true;
    }
  }
  static {
    this.\u0275fac = function NgbAccordionItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionItem,
      selectors: [["", "ngbAccordionItem", ""]],
      contentQueries: function NgbAccordionItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbAccordionCollapse, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._collapse = _t.first);
        }
      },
      hostAttrs: [1, "accordion-item"],
      hostVars: 1,
      hostBindings: function NgbAccordionItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbAccordionItem", "id"],
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        collapsed: "collapsed"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordionItem"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionItem, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionItem]",
      exportAs: "ngbAccordionItem",
      standalone: true,
      host: {
        "[id]": "id",
        class: "accordion-item"
      }
    }]
  }], null, {
    _collapse: [{
      type: ContentChild,
      args: [NgbAccordionCollapse, {
        static: true
      }]
    }],
    id: [{
      type: Input,
      args: ["ngbAccordionItem"]
    }],
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbAccordionDirective = class _NgbAccordionDirective {
  constructor() {
    this._config = inject(NgbAccordionConfig);
    this._anItemWasAlreadyExpandedDuringInitialisation = false;
    this.animation = this._config.animation;
    this.closeOthers = this._config.closeOthers;
    this.destroyOnHide = this._config.destroyOnHide;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Toggles an item with the given id.
   *
   * It will toggle an item, even if it is disabled.
   *
   * @param itemId The id of the item to toggle.
   */
  toggle(itemId) {
    this._getItem(itemId)?.toggle();
  }
  /**
   * Expands an item with the given id.
   *
   * If `closeOthers` is `true`, it will collapse other panels.
   *
   * @param itemId The id of the item to expand.
   */
  expand(itemId) {
    this._getItem(itemId)?.expand();
  }
  /**
   * Expands all items.
   *
   * If `closeOthers` is `true` and all items are closed, it will open the first one. Otherwise, it will keep the opened one.
   */
  expandAll() {
    if (this._items) {
      if (this.closeOthers) {
        if (!this._items.find((item) => !item.collapsed)) {
          this._items.first.expand();
        }
      } else {
        this._items.forEach((item) => item.expand());
      }
    }
  }
  /**
   * Collapses an item with the given id.
   *
   * Has no effect if the `itemId` does not correspond to any item.
   *
   * @param itemId The id of the item to collapse.
   */
  collapse(itemId) {
    this._getItem(itemId)?.collapse();
  }
  /**
   * Collapses all items.
   */
  collapseAll() {
    this._items?.forEach((item) => item.collapse());
  }
  /**
   * Checks if an item with the given id is expanded.
   *
   * If the `itemId` does not correspond to any item, it returns `false`.
   *
   * @param itemId The id of the item to check.
   */
  isExpanded(itemId) {
    const item = this._getItem(itemId);
    return item ? !item.collapsed : false;
  }
  /**
   * It checks, if the item can be expanded in the current state of the accordion.
   * With `closeOthers` there can be only one expanded item at a time.
   *
   * @internal
   */
  _ensureCanExpand(toExpand) {
    if (!this.closeOthers) {
      return true;
    }
    if (!this._items) {
      if (!this._anItemWasAlreadyExpandedDuringInitialisation) {
        this._anItemWasAlreadyExpandedDuringInitialisation = true;
        return true;
      }
      return false;
    }
    this._items.find((item) => !item.collapsed && toExpand !== item)?.collapse();
    return true;
  }
  _getItem(itemId) {
    return this._items?.find((item) => item.id === itemId);
  }
  static {
    this.\u0275fac = function NgbAccordionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbAccordionDirective,
      selectors: [["", "ngbAccordion", ""]],
      contentQueries: function NgbAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbAccordionItem, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
        }
      },
      hostAttrs: [1, "accordion"],
      inputs: {
        animation: "animation",
        closeOthers: "closeOthers",
        destroyOnHide: "destroyOnHide"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordion"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordion]",
      standalone: true,
      exportAs: "ngbAccordion",
      host: {
        class: "accordion"
      }
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbAccordionItem, {
        descendants: false
      }]
    }],
    animation: [{
      type: Input
    }],
    closeOthers: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NGB_ACCORDION_DIRECTIVES = [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse];
var NgbAccordionModule = class _NgbAccordionModule {
  static {
    this.\u0275fac = function NgbAccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbAccordionModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionModule, [{
    type: NgModule,
    args: [{
      imports: NGB_ACCORDION_DIRECTIVES,
      exports: NGB_ACCORDION_DIRECTIVES
    }]
  }], null, null);
})();
var NgbAlertConfig = class _NgbAlertConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.dismissible = true;
    this.type = "warning";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbAlertConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlertConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbAlertConfig,
      factory: _NgbAlertConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ngbAlertFadingTransition = ({
  classList
}) => {
  classList.remove("show");
};
var NgbAlert = class _NgbAlert {
  constructor() {
    this._config = inject(NgbAlertConfig);
    this._elementRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this.animation = this._config.animation;
    this.dismissible = this._config.dismissible;
    this.type = this._config.type;
    this.closed = new EventEmitter();
  }
  /**
   * Triggers alert closing programmatically (same as clicking on the close button (×)).
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(closed)` output
   *
   * @since 8.0.0
   */
  close() {
    const transition = ngbRunTransition(this._zone, this._elementRef.nativeElement, ngbAlertFadingTransition, {
      animation: this.animation,
      runningTransition: "continue"
    });
    transition.subscribe(() => this.closed.emit());
    return transition;
  }
  static {
    this.\u0275fac = function NgbAlert_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlert)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbAlert,
      selectors: [["ngb-alert"]],
      hostAttrs: ["role", "alert"],
      hostVars: 6,
      hostBindings: function NgbAlert_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap("alert show" + (ctx.type ? " alert-" + ctx.type : ""));
          \u0275\u0275classProp("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
        }
      },
      inputs: {
        animation: "animation",
        dismissible: "dismissible",
        type: "type"
      },
      outputs: {
        closed: "closed"
      },
      exportAs: ["ngbAlert"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 2,
      vars: 1,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_0 = goog.getMsg("Close");
          i18n_0 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.alert.close:Close`;
        }
        return [["type", "button", "aria-label", i18n_0, 1, "btn-close"], ["type", "button", "aria-label", i18n_0, 1, "btn-close", 3, "click"]];
      },
      template: function NgbAlert_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
          \u0275\u0275template(1, NgbAlert_Conditional_1_Template, 1, 0, "button", 0);
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.dismissible ? 1 : -1);
        }
      },
      styles: ["ngb-alert{display:block}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlert, [{
    type: Component,
    args: [{
      selector: "ngb-alert",
      exportAs: "ngbAlert",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        role: "alert",
        "[class]": '"alert show" + (type ? " alert-" + type : "")',
        "[class.fade]": "animation",
        "[class.alert-dismissible]": "dismissible"
      },
      template: `
		<ng-content />
		@if (dismissible) {
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				i18n-aria-label="@@ngb.alert.close"
				(click)="close()"
			></button>
		}
	`,
      styles: ["ngb-alert{display:block}\n"]
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    closed: [{
      type: Output
    }]
  });
})();
var NgbAlertModule = class _NgbAlertModule {
  static {
    this.\u0275fac = function NgbAlertModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlertModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbAlertModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertModule, [{
    type: NgModule,
    args: [{
      imports: [NgbAlert],
      exports: [NgbAlert]
    }]
  }], null, null);
})();
var NgbCarouselConfig = class _NgbCarouselConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.interval = 5e3;
    this.wrap = true;
    this.keyboard = true;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbCarouselConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCarouselConfig,
      factory: _NgbCarouselConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbSlideEventDirection;
(function(NgbSlideEventDirection2) {
  NgbSlideEventDirection2["START"] = "start";
  NgbSlideEventDirection2["END"] = "end";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var isBeingAnimated = ({
  classList
}) => {
  return classList.contains("carousel-item-start") || classList.contains("carousel-item-end");
};
var removeDirectionClasses = (classList) => {
  classList.remove("carousel-item-start", "carousel-item-end");
};
var removeClasses = (classList) => {
  removeDirectionClasses(classList);
  classList.remove("carousel-item-prev", "carousel-item-next");
};
var ngbCarouselTransitionIn = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.add("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + (direction === NgbSlideEventDirection.START ? "next" : "prev"));
    reflow(element);
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.add("active");
  };
};
var ngbCarouselTransitionOut = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.remove("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.remove("active");
  };
};
var nextId$2 = 0;
var carouselId = 0;
var NgbSlide = class _NgbSlide {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.id = `ngb-slide-${nextId$2++}`;
    this.slid = new EventEmitter();
  }
  static {
    this.\u0275fac = function NgbSlide_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbSlide)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbSlide,
      selectors: [["ng-template", "ngbSlide", ""]],
      inputs: {
        id: "id"
      },
      outputs: {
        slid: "slid"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbSlide, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbSlide]",
      standalone: true
    }]
  }], null, {
    id: [{
      type: Input
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbCarousel = class _NgbCarousel {
  constructor() {
    this.NgbSlideEventSource = NgbSlideEventSource;
    this._config = inject(NgbCarouselConfig);
    this._platformId = inject(PLATFORM_ID);
    this._ngZone = inject(NgZone);
    this._cd = inject(ChangeDetectorRef);
    this._container = inject(ElementRef);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._interval$ = new BehaviorSubject(this._config.interval);
    this._mouseHover$ = new BehaviorSubject(false);
    this._focused$ = new BehaviorSubject(false);
    this._pauseOnHover$ = new BehaviorSubject(this._config.pauseOnHover);
    this._pauseOnFocus$ = new BehaviorSubject(this._config.pauseOnFocus);
    this._pause$ = new BehaviorSubject(false);
    this._wrap$ = new BehaviorSubject(this._config.wrap);
    this.id = `ngb-carousel-${carouselId++}`;
    this.animation = this._config.animation;
    this.keyboard = this._config.keyboard;
    this.showNavigationArrows = this._config.showNavigationArrows;
    this.showNavigationIndicators = this._config.showNavigationIndicators;
    this.slide = new EventEmitter();
    this.slid = new EventEmitter();
    this._transitionIds = null;
  }
  /**
   * Time in milliseconds before the next slide is shown.
   */
  set interval(value) {
    this._interval$.next(value);
  }
  get interval() {
    return this._interval$.value;
  }
  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */
  set wrap(value) {
    this._wrap$.next(value);
  }
  get wrap() {
    return this._wrap$.value;
  }
  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */
  set pauseOnHover(value) {
    this._pauseOnHover$.next(value);
  }
  get pauseOnHover() {
    return this._pauseOnHover$.value;
  }
  /**
   * If `true`, will pause slide switching when the focus is inside the carousel.
   */
  set pauseOnFocus(value) {
    this._pauseOnFocus$.next(value);
  }
  get pauseOnFocus() {
    return this._pauseOnFocus$.value;
  }
  set mouseHover(value) {
    this._mouseHover$.next(value);
  }
  get mouseHover() {
    return this._mouseHover$.value;
  }
  set focused(value) {
    this._focused$.next(value);
  }
  get focused() {
    return this._focused$.value;
  }
  arrowLeft() {
    this.focus();
    this.prev(NgbSlideEventSource.ARROW_LEFT);
  }
  arrowRight() {
    this.focus();
    this.next(NgbSlideEventSource.ARROW_RIGHT);
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = combineLatest([this.slide.pipe(map((slideEvent) => slideEvent.current), startWith(this.activeId)), this._wrap$, this.slides.changes.pipe(startWith(null))]).pipe(map(([currentSlideId, wrap]) => {
          const slideArr = this.slides.toArray();
          const currentSlideIdx = this._getSlideIdxById(currentSlideId);
          return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
        }), distinctUntilChanged());
        combineLatest([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, hasNextSlide$]).pipe(map(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => pause || pauseOnHover && mouseHover || pauseOnFocus && focused || !hasNextSlide ? 0 : interval), distinctUntilChanged(), switchMap((interval) => interval > 0 ? timer(interval, interval) : NEVER), takeUntilDestroyed(this._destroyRef)).subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
      });
    }
    this.slides.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._transitionIds?.forEach((id) => ngbCompleteTransition(this._getSlideElement(id)));
      this._transitionIds = null;
      this._cd.markForCheck();
      afterNextRender(() => {
        for (const {
          id
        } of this.slides) {
          const element = this._getSlideElement(id);
          if (id === this.activeId) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
        }
      }, {
        phase: AfterRenderPhase.MixedReadWrite,
        injector: this._injector
      });
    });
  }
  ngAfterContentChecked() {
    let activeSlide = this._getSlideById(this.activeId);
    this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : "";
  }
  ngAfterViewInit() {
    if (this.activeId) {
      const element = this._getSlideElement(this.activeId);
      if (element) {
        element.classList.add("active");
      }
    }
  }
  /**
   * Navigates to a slide with the specified identifier.
   */
  select(slideId, source) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }
  /**
   * Navigates to the previous slide.
   */
  prev(source) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.END, source);
  }
  /**
   * Navigates to the next slide.
   */
  next(source) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.START, source);
  }
  /**
   * Pauses cycling through the slides.
   */
  pause() {
    this._pause$.next(true);
  }
  /**
   * Restarts cycling through the slides from start to end.
   */
  cycle() {
    this._pause$.next(false);
  }
  /**
   * Set the focus on the carousel.
   */
  focus() {
    this._container.nativeElement.focus();
  }
  _cycleToSelected(slideIdx, direction, source) {
    const transitionIds = this._transitionIds;
    if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
      return;
    }
    let selectedSlide = this._getSlideById(slideIdx);
    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this._transitionIds = [this.activeId, slideIdx];
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction,
        paused: this._pause$.value,
        source
      });
      const options = {
        animation: this.animation,
        runningTransition: "stop",
        context: {
          direction
        }
      };
      const transitions = [];
      const activeSlide = this._getSlideById(this.activeId);
      if (activeSlide) {
        const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
        activeSlideTransition.subscribe(() => {
          activeSlide.slid.emit({
            isShown: false,
            direction,
            source
          });
        });
        transitions.push(activeSlideTransition);
      }
      const previousId = this.activeId;
      this.activeId = selectedSlide.id;
      const nextSlide = this._getSlideById(this.activeId);
      const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
      transition.subscribe(() => {
        nextSlide?.slid.emit({
          isShown: true,
          direction,
          source
        });
      });
      transitions.push(transition);
      zip(...transitions).pipe(take(1)).subscribe(() => {
        this._transitionIds = null;
        this.slid.emit({
          prev: previousId,
          current: selectedSlide.id,
          direction,
          paused: this._pause$.value,
          source
        });
      });
    }
    this._cd.markForCheck();
  }
  _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.END : NgbSlideEventDirection.START;
  }
  _getSlideById(slideId) {
    return this.slides.find((slide) => slide.id === slideId) || null;
  }
  _getSlideIdxById(slideId) {
    const slide = this._getSlideById(slideId);
    return slide != null ? this.slides.toArray().indexOf(slide) : -1;
  }
  _getNextSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isLastSlide = currentSlideIdx === slideArr.length - 1;
    return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
  }
  _getPrevSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isFirstSlide = currentSlideIdx === 0;
    return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
  }
  _getSlideElement(slideId) {
    return this._container.nativeElement.querySelector(`#slide-${slideId}`);
  }
  static {
    this.\u0275fac = function NgbCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarousel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbCarousel,
      selectors: [["ngb-carousel"]],
      contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbSlide, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slides = _t);
        }
      },
      hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
      hostVars: 3,
      hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowLeft();
          })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowRight();
          })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
            return ctx.mouseHover = true;
          })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
            return ctx.mouseHover = false;
          })("focusin", function NgbCarousel_focusin_HostBindingHandler() {
            return ctx.focused = true;
          })("focusout", function NgbCarousel_focusout_HostBindingHandler() {
            return ctx.focused = false;
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-activedescendant", "slide-" + ctx.activeId);
          \u0275\u0275styleProp("display", "block");
        }
      },
      inputs: {
        animation: "animation",
        activeId: "activeId",
        interval: "interval",
        wrap: "wrap",
        keyboard: "keyboard",
        pauseOnHover: "pauseOnHover",
        pauseOnFocus: "pauseOnFocus",
        showNavigationArrows: "showNavigationArrows",
        showNavigationIndicators: "showNavigationIndicators"
      },
      outputs: {
        slide: "slide",
        slid: "slid"
      },
      exportAs: ["ngbCarousel"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 7,
      vars: 3,
      consts: () => {
        let i18n_1;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_1 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", {
            "interpolation": "\uFFFD0\uFFFD",
            "interpolation_1": "\uFFFD1\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i + 1 }}",
              "interpolation_1": "{{ c }}"
            }
          });
          i18n_1 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_1;
        } else {
          i18n_1 = $localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;
        }
        let i18n_2;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_2 = goog.getMsg("Previous");
          i18n_2 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.carousel.previous:Previous`;
        }
        let i18n_3;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_3 = goog.getMsg("Next");
          i18n_3 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_3;
        } else {
          i18n_3 = $localize`:@@ngb.carousel.next:Next`;
        }
        return [i18n_1, i18n_2, i18n_3, ["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active"], [1, "carousel-inner"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], [1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden", 3, "id"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]];
      },
      template: function NgbCarousel_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 3);
          \u0275\u0275repeaterCreate(1, NgbCarousel_For_2_Template, 1, 5, "button", 4, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 5);
          \u0275\u0275repeaterCreate(4, NgbCarousel_For_5_Template, 4, 4, "div", 6, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, NgbCarousel_Conditional_6_Template, 8, 4);
        }
        if (rf & 2) {
          \u0275\u0275classProp("visually-hidden", !ctx.showNavigationIndicators);
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.slides);
          \u0275\u0275advance(3);
          \u0275\u0275repeater(ctx.slides);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showNavigationArrows ? 6 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarousel, [{
    type: Component,
    args: [{
      selector: "ngb-carousel",
      exportAs: "ngbCarousel",
      standalone: true,
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "carousel slide",
        "[style.display]": '"block"',
        tabIndex: "0",
        "(keydown.arrowLeft)": "keyboard && arrowLeft()",
        "(keydown.arrowRight)": "keyboard && arrowRight()",
        "(mouseenter)": "mouseHover = true",
        "(mouseleave)": "mouseHover = false",
        "(focusin)": "focused = true",
        "(focusout)": "focused = false",
        "[attr.aria-activedescendant]": `'slide-' + activeId`
      },
      template: `
		<div class="carousel-indicators" [class.visually-hidden]="!showNavigationIndicators" role="tablist">
			@for (slide of slides; track slide) {
				<button
					type="button"
					data-bs-target
					[class.active]="slide.id === activeId"
					role="tab"
					[attr.aria-labelledby]="'slide-' + slide.id"
					[attr.aria-controls]="'slide-' + slide.id"
					[attr.aria-selected]="slide.id === activeId"
					(click)="focus(); select(slide.id, NgbSlideEventSource.INDICATOR)"
				></button>
			}
		</div>
		<div class="carousel-inner">
			@for (slide of slides; track slide; let i = $index; let c = $count) {
				<div class="carousel-item" [id]="'slide-' + slide.id" role="tabpanel">
					<span
						class="visually-hidden"
						i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number"
					>
						Slide {{ i + 1 }} of {{ c }}
					</span>
					<ng-template [ngTemplateOutlet]="slide.templateRef" />
				</div>
			}
		</div>
		@if (showNavigationArrows) {
			<button
				class="carousel-control-prev"
				type="button"
				(click)="arrowLeft()"
				[attr.aria-labelledby]="id + '-previous'"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.previous" [id]="id + '-previous'">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" (click)="arrowRight()" [attr.aria-labelledby]="id + '-next'">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.next" [id]="id + '-next'">Next</span>
			</button>
		}
	`
    }]
  }], null, {
    slides: [{
      type: ContentChildren,
      args: [NgbSlide]
    }],
    animation: [{
      type: Input
    }],
    activeId: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    pauseOnHover: [{
      type: Input
    }],
    pauseOnFocus: [{
      type: Input
    }],
    showNavigationArrows: [{
      type: Input
    }],
    showNavigationIndicators: [{
      type: Input
    }],
    slide: [{
      type: Output
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbSlideEventSource;
(function(NgbSlideEventSource2) {
  NgbSlideEventSource2["TIMER"] = "timer";
  NgbSlideEventSource2["ARROW_LEFT"] = "arrowLeft";
  NgbSlideEventSource2["ARROW_RIGHT"] = "arrowRight";
  NgbSlideEventSource2["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
var NgbCarouselModule = class _NgbCarouselModule {
  static {
    this.\u0275fac = function NgbCarouselModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbCarouselModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    }]
  }], null, null);
})();
var NgbCollapseModule = class _NgbCollapseModule {
  static {
    this.\u0275fac = function NgbCollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbCollapseModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();
var NgbDate = class _NgbDate {
  /**
   * A **static method** that creates a new date object from the `NgbDateStruct`,
   *
   * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
   *
   * If the `date` is already of `NgbDate` type, the method will return the same object.
   */
  static from(date) {
    if (date instanceof _NgbDate) {
      return date;
    }
    return date ? new _NgbDate(date.year, date.month, date.day) : null;
  }
  constructor(year, month, day) {
    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * Checks if the current date is equal to another date.
   */
  equals(other) {
    return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
  }
  /**
   * Checks if the current date is before another date.
   */
  before(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day < other.day;
      } else {
        return this.month < other.month;
      }
    } else {
      return this.year < other.year;
    }
  }
  /**
   * Checks if the current date is after another date.
   */
  after(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day > other.day;
      } else {
        return this.month > other.month;
      }
    } else {
      return this.year > other.year;
    }
  }
};
function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
  const jsDate = new Date(date.year, date.month - 1, date.day, 12);
  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }
  return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
var NgbCalendar = class _NgbCalendar {
  static {
    this.\u0275fac = function NgbCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCalendar)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendar,
      factory: () => NGB_DATEPICKER_CALENDAR_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendar, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();
var NgbCalendarGregorian = class _NgbCalendarGregorian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toJSDate(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromJSDate(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toJSDate(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toJSDate(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromJSDate(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toJSDate(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarGregorian_BaseFactory;
      return function NgbCalendarGregorian_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarGregorian_BaseFactory || (\u0275NgbCalendarGregorian_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarGregorian)))(__ngFactoryType__ || _NgbCalendarGregorian);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarGregorian,
      factory: _NgbCalendarGregorian.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarGregorian, [{
    type: Injectable
  }], null, null);
})();
function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}
function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}
function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }
  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }
  return date || null;
}
function isDateSelectable(date, state) {
  const {
    minDate,
    maxDate,
    disabled,
    markDisabled
  } = state;
  return !(date === null || date === void 0 || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate));
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  let months = calendar.getMonths(date.year);
  if (minDate && date.year === minDate.year) {
    const index = months.findIndex((month) => month === minDate.month);
    months = months.slice(index);
  }
  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex((month) => month === maxDate.month);
    months = months.slice(0, index + 1);
  }
  return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  const start2 = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
  const end2 = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
  const length = end2 - start2 + 1;
  const numbers = Array(length);
  for (let i = 0; i < length; i++) {
    numbers[i] = start2 + i;
  }
  return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
  const nextDate = Object.assign(calendar.getNext(date, "m"), {
    day: 1
  });
  return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
  const prevDate = Object.assign(calendar.getPrev(date, "m"), {
    day: 1
  });
  return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
  const {
    displayMonths,
    months
  } = state;
  const monthsToReuse = months.splice(0, months.length);
  const firstDates = Array.from({
    length: displayMonths
  }, (_, i) => {
    const firstDate = Object.assign(calendar.getNext(date, "m", i), {
      day: 1
    });
    months[i] = null;
    if (!force) {
      const reusedIndex = monthsToReuse.findIndex((month) => month.firstDate.equals(firstDate));
      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }
    return firstDate;
  });
  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
    }
  });
  return months;
}
function buildMonth(calendar, date, state, i18n, month = {}) {
  const {
    dayTemplateData,
    minDate,
    maxDate,
    firstDayOfWeek,
    markDisabled,
    outsideDays,
    weekdayWidth,
    weekdaysVisible
  } = state;
  const calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek);
  if (!weekdaysVisible) {
    month.weekdays.length = 0;
  }
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];
    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }
    const days = weekObject.days;
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0 && weekdaysVisible) {
        month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
      }
      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);
      const ariaLabel = i18n.getDayAriaLabel(newDate);
      let disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      }
      let today = newDate.equals(calendarToday);
      let contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : void 0;
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }
      let dayObject = days[day];
      if (!dayObject) {
        dayObject = days[day] = {};
      }
      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        currentYear: month.year,
        disabled,
        focused: false,
        selected: false,
        today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }
    weekObject.number = calendar.getWeekNumber(days.map((day) => day.date), firstDayOfWeek);
    weekObject.collapsed = outsideDays === "collapsed" && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }
  return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgbDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, "d", (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
var NgbDatepickerI18n = class _NgbDatepickerI18n {
  /**
   * Returns the text label to display above the day view.
   *
   * @since 9.1.0
   */
  getMonthLabel(date) {
    return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
  }
  /**
   * Returns the textual representation of a day that is rendered in a day cell.
   *
   * @since 3.0.0
   */
  getDayNumerals(date) {
    return `${date.day}`;
  }
  /**
   * Returns the textual representation of a week number rendered by datepicker.
   *
   * @since 3.0.0
   */
  getWeekNumerals(weekNumber) {
    return `${weekNumber}`;
  }
  /**
   * Returns the textual representation of a year that is rendered in the datepicker year select box.
   *
   * @since 3.0.0
   */
  getYearNumerals(year) {
    return `${year}`;
  }
  /**
   * Returns the week label to display in the heading of the month view.
   *
   * @since 9.1.0
   */
  getWeekLabel() {
    return "";
  }
  static {
    this.\u0275fac = function NgbDatepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerI18n)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerI18n,
      factory: () => (() => new NgbDatepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbDatepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbDatepickerI18nDefault = class _NgbDatepickerI18nDefault extends NgbDatepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._monthsShort = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "short",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
    this._monthsFull = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "long",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
  }
  getWeekdayLabel(weekday, width = "narrow") {
    const weekdays = [1, 2, 3, 4, 5, 6, 7].map((day) => Intl.DateTimeFormat(this._locale, {
      weekday: width,
      timeZone: "UTC"
    }).format(Date.UTC(2e3, 4, day)));
    return weekdays[weekday - 1] || "";
  }
  getMonthShortName(month) {
    return this._monthsShort[month - 1] || "";
  }
  getMonthFullName(month) {
    return this._monthsFull[month - 1] || "";
  }
  getDayAriaLabel(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return formatDate(jsDate, "fullDate", this._locale);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDatepickerI18nDefault_BaseFactory;
      return function NgbDatepickerI18nDefault_Factory(__ngFactoryType__) {
        return (\u0275NgbDatepickerI18nDefault_BaseFactory || (\u0275NgbDatepickerI18nDefault_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDatepickerI18nDefault)))(__ngFactoryType__ || _NgbDatepickerI18nDefault);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerI18nDefault,
      factory: _NgbDatepickerI18nDefault.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerService = class _NgbDatepickerService {
  constructor() {
    this._VALIDATORS = {
      dayTemplateData: (dayTemplateData) => {
        if (this._state.dayTemplateData !== dayTemplateData) {
          return {
            dayTemplateData
          };
        }
      },
      displayMonths: (displayMonths) => {
        displayMonths = toInteger2(displayMonths);
        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
          return {
            displayMonths
          };
        }
      },
      disabled: (disabled) => {
        if (this._state.disabled !== disabled) {
          return {
            disabled
          };
        }
      },
      firstDayOfWeek: (firstDayOfWeek) => {
        firstDayOfWeek = toInteger2(firstDayOfWeek);
        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
          return {
            firstDayOfWeek
          };
        }
      },
      focusVisible: (focusVisible) => {
        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
          return {
            focusVisible
          };
        }
      },
      markDisabled: (markDisabled) => {
        if (this._state.markDisabled !== markDisabled) {
          return {
            markDisabled
          };
        }
      },
      maxDate: (date) => {
        const maxDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.maxDate, maxDate)) {
          return {
            maxDate
          };
        }
      },
      minDate: (date) => {
        const minDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.minDate, minDate)) {
          return {
            minDate
          };
        }
      },
      navigation: (navigation) => {
        if (this._state.navigation !== navigation) {
          return {
            navigation
          };
        }
      },
      outsideDays: (outsideDays) => {
        if (this._state.outsideDays !== outsideDays) {
          return {
            outsideDays
          };
        }
      },
      weekdays: (weekdays) => {
        const weekdayWidth = weekdays === true || weekdays === false ? "narrow" : weekdays;
        const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;
        if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
          return {
            weekdayWidth,
            weekdaysVisible
          };
        }
      }
    };
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._model$ = new Subject();
    this._dateSelect$ = new Subject();
    this._state = {
      dayTemplateData: null,
      markDisabled: null,
      maxDate: null,
      minDate: null,
      disabled: false,
      displayMonths: 1,
      firstDate: null,
      firstDayOfWeek: 1,
      lastDate: null,
      focusDate: null,
      focusVisible: false,
      months: [],
      navigation: "select",
      outsideDays: "visible",
      prevDisabled: false,
      nextDisabled: false,
      selectedDate: null,
      selectBoxes: {
        years: [],
        months: []
      },
      weekdayWidth: "narrow",
      weekdaysVisible: true
    };
  }
  get model$() {
    return this._model$.pipe(filter((model) => model.months.length > 0));
  }
  get dateSelect$() {
    return this._dateSelect$.pipe(filter((date) => date !== null));
  }
  set(options) {
    let patch = Object.keys(options).map((key) => this._VALIDATORS[key](options[key])).reduce((obj, part) => __spreadValues(__spreadValues({}, obj), part), {});
    if (Object.keys(patch).length > 0) {
      this._nextState(patch);
    }
  }
  focus(date) {
    const focusedDate = this.toValidDate(date, null);
    if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
      this._nextState({
        focusDate: date
      });
    }
  }
  focusSelect() {
    if (isDateSelectable(this._state.focusDate, this._state)) {
      this.select(this._state.focusDate, {
        emitEvent: true
      });
    }
  }
  open(date) {
    const firstDate = this.toValidDate(date, this._calendar.getToday());
    if (firstDate != null && !this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
      this._nextState({
        firstDate
      });
    }
  }
  select(date, options = {}) {
    const selectedDate = this.toValidDate(date, null);
    if (selectedDate != null && !this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, selectedDate)) {
        this._nextState({
          selectedDate
        });
      }
      if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
        this._dateSelect$.next(selectedDate);
      }
    }
  }
  toValidDate(date, defaultValue) {
    const ngbDate = NgbDate.from(date);
    if (defaultValue === void 0) {
      defaultValue = this._calendar.getToday();
    }
    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }
  getMonth(struct) {
    for (let month of this._state.months) {
      if (struct.month === month.number && struct.year === month.year) {
        return month;
      }
    }
    throw new Error(`month ${struct.month} of year ${struct.year} not found`);
  }
  _nextState(patch) {
    const newState = this._updateState(patch);
    this._patchContexts(newState);
    this._state = newState;
    this._model$.next(this._state);
  }
  _patchContexts(state) {
    const {
      months,
      displayMonths,
      selectedDate,
      focusDate,
      focusVisible,
      disabled,
      outsideDays
    } = state;
    state.months.forEach((month) => {
      month.weeks.forEach((week) => {
        week.days.forEach((day) => {
          if (focusDate) {
            day.context.focused = focusDate.equals(day.date) && focusVisible;
          }
          day.tabindex = !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
          if (disabled === true) {
            day.context.disabled = true;
          }
          if (selectedDate !== void 0) {
            day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
          }
          if (month.number !== day.date.month) {
            day.hidden = outsideDays === "hidden" || outsideDays === "collapsed" || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
          }
        });
      });
    });
  }
  _updateState(patch) {
    const state = Object.assign({}, this._state, patch);
    let startDate = state.firstDate;
    if ("minDate" in patch || "maxDate" in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    }
    if ("disabled" in patch) {
      state.focusVisible = false;
    }
    if ("selectedDate" in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    }
    if ("focusVisible" in patch) {
      return state;
    }
    if ("focusDate" in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
      if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
        return state;
      }
    }
    if ("firstDate" in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    }
    if (startDate) {
      const forceRebuild = "dayTemplateData" in patch || "firstDayOfWeek" in patch || "markDisabled" in patch || "minDate" in patch || "maxDate" in patch || "disabled" in patch || "outsideDays" in patch || "weekdaysVisible" in patch;
      const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
      state.months = months;
      state.firstDate = months[0].firstDate;
      state.lastDate = months[months.length - 1].lastDate;
      if ("selectedDate" in patch && !isDateSelectable(state.selectedDate, state)) {
        state.selectedDate = null;
      }
      if ("firstDate" in patch) {
        if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      }
      const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
      const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
      if (state.navigation === "select") {
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.years.length === 0 || yearChanged) {
          state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
        }
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.months.length === 0 || yearChanged) {
          state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
        }
      } else {
        state.selectBoxes = {
          years: [],
          months: []
        };
      }
      if ((state.navigation === "arrows" || state.navigation === "select") && (monthChanged || yearChanged || "minDate" in patch || "maxDate" in patch || "disabled" in patch)) {
        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
      }
    }
    return state;
  }
  static {
    this.\u0275fac = function NgbDatepickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerService,
      factory: _NgbDatepickerService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerService, [{
    type: Injectable
  }], null, null);
})();
var NavigationEvent;
(function(NavigationEvent2) {
  NavigationEvent2[NavigationEvent2["PREV"] = 0] = "PREV";
  NavigationEvent2[NavigationEvent2["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
var NgbDatepickerConfig = class _NgbDatepickerConfig {
  constructor() {
    this.displayMonths = 1;
    this.firstDayOfWeek = 1;
    this.navigation = "select";
    this.outsideDays = "visible";
    this.showWeekNumbers = false;
    this.weekdays = "narrow";
  }
  static {
    this.\u0275fac = function NgbDatepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerConfig,
      factory: _NgbDatepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
var NgbDateAdapter = class _NgbDateAdapter {
  static {
    this.\u0275fac = function NgbDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateAdapter)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateAdapter,
      factory: () => NGB_DATEPICKER_DATE_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateStructAdapter = class _NgbDateStructAdapter extends NgbDateAdapter {
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  fromModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDateStructAdapter_BaseFactory;
      return function NgbDateStructAdapter_Factory(__ngFactoryType__) {
        return (\u0275NgbDateStructAdapter_BaseFactory || (\u0275NgbDateStructAdapter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDateStructAdapter)))(__ngFactoryType__ || _NgbDateStructAdapter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateStructAdapter,
      factory: _NgbDateStructAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerKeyboardService = class _NgbDatepickerKeyboardService {
  /**
   * Processes a keyboard event.
   */
  processKey(event, datepicker) {
    const {
      state,
      calendar
    } = datepicker;
    switch (event.key) {
      case "PageUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "PageDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "End":
        datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
        break;
      case "Home":
        datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
        break;
      case "ArrowLeft":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", 1));
        break;
      case "ArrowUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "ArrowRight":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", 1));
        break;
      case "ArrowDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "Enter":
      case " ":
        datepicker.focusSelect();
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  static {
    this.\u0275fac = function NgbDatepickerKeyboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerKeyboardService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerKeyboardService,
      factory: _NgbDatepickerKeyboardService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerKeyboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDatepickerDayView = class _NgbDatepickerDayView {
  constructor() {
    this.i18n = inject(NgbDatepickerI18n);
  }
  isMuted() {
    return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
  }
  static {
    this.\u0275fac = function NgbDatepickerDayView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerDayView)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbDatepickerDayView,
      selectors: [["", "ngbDatepickerDayView", ""]],
      hostAttrs: [1, "btn-light"],
      hostVars: 10,
      hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
        }
      },
      inputs: {
        currentMonth: "currentMonth",
        date: "date",
        disabled: "disabled",
        focused: "focused",
        selected: "selected"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      attrs: _c12,
      decls: 1,
      vars: 1,
      template: function NgbDatepickerDayView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275text(0);
        }
        if (rf & 2) {
          \u0275\u0275textInterpolate(ctx.i18n.getDayNumerals(ctx.date));
        }
      },
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerDayView, [{
    type: Component,
    args: [{
      selector: "[ngbDatepickerDayView]",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "btn-light",
        "[class.bg-primary]": "selected",
        "[class.text-white]": "selected",
        "[class.text-muted]": "isMuted()",
        "[class.outside]": "isMuted()",
        "[class.active]": "focused"
      },
      template: `{{ i18n.getDayNumerals(date) }}`,
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"]
    }]
  }], null, {
    currentMonth: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var NgbDatepickerNavigationSelect = class _NgbDatepickerNavigationSelect {
  constructor() {
    this._month = -1;
    this._year = -1;
    this.i18n = inject(NgbDatepickerI18n);
    this.select = new EventEmitter();
  }
  changeMonth(month) {
    this.select.emit(new NgbDate(this.date.year, toInteger2(month), 1));
  }
  changeYear(year) {
    this.select.emit(new NgbDate(toInteger2(year), this.date.month, 1));
  }
  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;
        this.monthSelect.nativeElement.value = `${this._month}`;
      }
      if (this.date.year !== this._year) {
        this._year = this.date.year;
        this.yearSelect.nativeElement.value = `${this._year}`;
      }
    }
  }
  static {
    this.\u0275fac = function NgbDatepickerNavigationSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigationSelect)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbDatepickerNavigationSelect,
      selectors: [["ngb-datepicker-navigation-select"]],
      viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c22, 7, ElementRef);
          \u0275\u0275viewQuery(_c3, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthSelect = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearSelect = _t.first);
        }
      },
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        years: "years"
      },
      outputs: {
        select: "select"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 8,
      vars: 2,
      consts: () => {
        let i18n_4;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_4 = goog.getMsg("Select month");
          i18n_4 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_4;
        } else {
          i18n_4 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_5;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_5 = goog.getMsg("Select month");
          i18n_5 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_5;
        } else {
          i18n_5 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_6;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_6 = goog.getMsg("Select year");
          i18n_6 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_6;
        } else {
          i18n_6 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        let i18n_7;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_7 = goog.getMsg("Select year");
          i18n_7 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_7;
        } else {
          i18n_7 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        return [["month", ""], ["year", ""], ["aria-label", i18n_4, "title", i18n_5, 1, "form-select", 3, "change", "disabled"], [3, "value"], ["aria-label", i18n_6, "title", i18n_7, 1, "form-select", 3, "change", "disabled"]];
      },
      template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "select", 2, 0);
          \u0275\u0275listener("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.changeMonth($event.target.value));
          });
          \u0275\u0275repeaterCreate(2, NgbDatepickerNavigationSelect_For_3_Template, 2, 3, "option", 3, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "select", 4, 1);
          \u0275\u0275listener("change", function NgbDatepickerNavigationSelect_Template_select_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.changeYear($event.target.value));
          });
          \u0275\u0275repeaterCreate(6, NgbDatepickerNavigationSelect_For_7_Template, 2, 2, "option", 3, \u0275\u0275repeaterTrackByIdentity);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx.months);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx.years);
        }
      },
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigationSelect, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation-select",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			@for (m of months; track m) {
				<option [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
					i18n.getMonthShortName(m, date.year)
				}}</option>
			}</select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			@for (y of years; track y) {
				<option [value]="y">{{ i18n.getYearNumerals(y) }}</option>
			}
		</select>
	`,
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    years: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    monthSelect: [{
      type: ViewChild,
      args: ["month", {
        static: true,
        read: ElementRef
      }]
    }],
    yearSelect: [{
      type: ViewChild,
      args: ["year", {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NgbDatepickerNavigation = class _NgbDatepickerNavigation {
  constructor() {
    this.navigation = NavigationEvent;
    this.i18n = inject(NgbDatepickerI18n);
    this.months = [];
    this.navigate = new EventEmitter();
    this.select = new EventEmitter();
  }
  onClickPrev(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.PREV);
  }
  onClickNext(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.NEXT);
  }
  static {
    this.\u0275fac = function NgbDatepickerNavigation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigation)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbDatepickerNavigation,
      selectors: [["ngb-datepicker-navigation"]],
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        showSelect: "showSelect",
        prevDisabled: "prevDisabled",
        nextDisabled: "nextDisabled",
        selectBoxes: "selectBoxes"
      },
      outputs: {
        navigate: "navigate",
        select: "select"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 8,
      vars: 4,
      consts: () => {
        let i18n_8;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_8 = goog.getMsg("Previous month");
          i18n_8 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_8;
        } else {
          i18n_8 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_9;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_9 = goog.getMsg("Previous month");
          i18n_9 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_9;
        } else {
          i18n_9 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_10;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_10 = goog.getMsg("Next month");
          i18n_10 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_10;
        } else {
          i18n_10 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        let i18n_11;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_11 = goog.getMsg("Next month");
          i18n_11 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_11;
        } else {
          i18n_11 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        return [[1, "ngb-dp-arrow", "ngb-dp-arrow-prev"], ["type", "button", "aria-label", i18n_8, "title", i18n_9, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-chevron"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years"], [1, "ngb-dp-arrow", "ngb-dp-arrow-next"], ["type", "button", "aria-label", i18n_10, "title", i18n_11, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-select", 3, "select", "date", "disabled", "months", "years"], [1, "ngb-dp-arrow"], [1, "ngb-dp-month-name"]];
      },
      template: function NgbDatepickerNavigation_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
          \u0275\u0275listener("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) {
            return ctx.onClickPrev($event);
          });
          \u0275\u0275element(2, "span", 2);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(3, NgbDatepickerNavigation_Conditional_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3)(4, NgbDatepickerNavigation_Conditional_4_Template, 2, 0);
          \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
          \u0275\u0275listener("click", function NgbDatepickerNavigation_Template_button_click_6_listener($event) {
            return ctx.onClickNext($event);
          });
          \u0275\u0275element(7, "span", 2);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.prevDisabled);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showSelect ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(!ctx.showSelect ? 4 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.nextDisabled);
        }
      },
      dependencies: [NgbDatepickerNavigationSelect],
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigation, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation",
      standalone: true,
      imports: [NgbDatepickerNavigationSelect],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
		<div class="ngb-dp-arrow ngb-dp-arrow-prev">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		@if (showSelect) {
			<ngb-datepicker-navigation-select
				class="ngb-dp-navigation-select"
				[date]="date"
				[disabled]="disabled"
				[months]="selectBoxes.months"
				[years]="selectBoxes.years"
				(select)="select.emit($event)"
			/>
		}

		@if (!showSelect) {
			@for (month of months; track month; let i = $index) {
				@if (i > 0) {
					<div class="ngb-dp-arrow"></div>
				}
				<div class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				@if (i !== months.length - 1) {
					<div class="ngb-dp-arrow"></div>
				}
			}
		}
		<div class="ngb-dp-arrow ngb-dp-arrow-next">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`,
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    showSelect: [{
      type: Input
    }],
    prevDisabled: [{
      type: Input
    }],
    nextDisabled: [{
      type: Input
    }],
    selectBoxes: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    select: [{
      type: Output
    }]
  });
})();
var NgbDatepickerContent = class _NgbDatepickerContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbDatepickerContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerContent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDatepickerContent,
      selectors: [["ng-template", "ngbDatepickerContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbDatepickerContent]",
      standalone: true
    }]
  }], null, null);
})();
var NgbDatepickerMonth = class _NgbDatepickerMonth {
  constructor() {
    this._keyboardService = inject(NgbDatepickerKeyboardService);
    this._service = inject(NgbDatepickerService);
    this.i18n = inject(NgbDatepickerI18n);
    this.datepicker = inject(NgbDatepicker);
  }
  /**
   * The first date of month to be rendered.
   *
   * This month must one of the months present in the
   * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
   */
  set month(month) {
    this.viewModel = this._service.getMonth(month);
  }
  onKeyDown(event) {
    this._keyboardService.processKey(event, this.datepicker);
  }
  doSelect(day) {
    if (!day.context.disabled && !day.hidden) {
      this.datepicker.onDateSelect(day.date);
    }
  }
  static {
    this.\u0275fac = function NgbDatepickerMonth_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerMonth)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbDatepickerMonth,
      selectors: [["ngb-datepicker-month"]],
      hostAttrs: ["role", "grid"],
      hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        month: "month"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 1,
      consts: [["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["role", "row", 1, "ngb-dp-week"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "disabled", "tabindex", "hidden", "ngb-dp-today"], ["role", "gridcell", 1, "ngb-dp-day", 3, "click", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbDatepickerMonth_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgbDatepickerMonth_Conditional_0_Template, 4, 1, "div", 0);
          \u0275\u0275repeaterCreate(1, NgbDatepickerMonth_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.viewModel.weekdays.length > 0 ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275repeater(ctx.viewModel.weeks);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerMonth, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-month",
      standalone: true,
      imports: [NgTemplateOutlet],
      host: {
        role: "grid",
        "(keydown)": "onKeyDown($event)"
      },
      encapsulation: ViewEncapsulation$1.None,
      template: `
		@if (viewModel.weekdays.length > 0) {
			<div class="ngb-dp-week ngb-dp-weekdays" role="row">
				@if (datepicker.showWeekNumbers) {
					<div class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
				}
				@for (weekday of viewModel.weekdays; track $index) {
					<div class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
				}
			</div>
		}
		@for (week of viewModel.weeks; track week) {
			@if (!week.collapsed) {
				<div class="ngb-dp-week" role="row">
					@if (datepicker.showWeekNumbers) {
						<div class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
					}
					@for (day of week.days; track day) {
						<div
							(click)="doSelect(day); $event.preventDefault()"
							class="ngb-dp-day"
							role="gridcell"
							[class.disabled]="day.context.disabled"
							[tabindex]="day.tabindex"
							[class.hidden]="day.hidden"
							[class.ngb-dp-today]="day.context.today"
							[attr.aria-label]="day.ariaLabel"
						>
							@if (!day.hidden) {
								<ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context" />
							}
						</div>
					}
				</div>
			}
		}
	`,
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n']
    }]
  }], null, {
    month: [{
      type: Input
    }]
  });
})();
var NgbDatepicker = class _NgbDatepicker {
  constructor() {
    this.injector = inject(Injector);
    this._service = inject(NgbDatepickerService);
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._config = inject(NgbDatepickerConfig);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngbDateAdapter = inject(NgbDateAdapter);
    this._ngZone = inject(NgZone);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._controlValue = null;
    this._publicState = {};
    this._initialized = false;
    this.dayTemplate = this._config.dayTemplate;
    this.dayTemplateData = this._config.dayTemplateData;
    this.displayMonths = this._config.displayMonths;
    this.firstDayOfWeek = this._config.firstDayOfWeek;
    this.footerTemplate = this._config.footerTemplate;
    this.markDisabled = this._config.markDisabled;
    this.maxDate = this._config.maxDate;
    this.minDate = this._config.minDate;
    this.navigation = this._config.navigation;
    this.outsideDays = this._config.outsideDays;
    this.showWeekNumbers = this._config.showWeekNumbers;
    this.startDate = this._config.startDate;
    this.weekdays = this._config.weekdays;
    this.navigate = new EventEmitter();
    this.dateSelect = new EventEmitter();
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    const cd = inject(ChangeDetectorRef);
    this._service.dateSelect$.pipe(takeUntilDestroyed()).subscribe((date) => {
      this.dateSelect.emit(date);
    });
    this._service.model$.pipe(takeUntilDestroyed()).subscribe((model) => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null;
      this._publicState = {
        maxDate: model.maxDate,
        minDate: model.minDate,
        firstDate: model.firstDate,
        lastDate: model.lastDate,
        focusedDate: model.focusDate,
        months: model.months.map((viewModel) => viewModel.firstDate)
      };
      let navigationPrevented = false;
      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: () => navigationPrevented = true
        });
        if (navigationPrevented && oldDate !== null) {
          this._service.open(oldDate);
          return;
        }
      }
      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;
      this.model = model;
      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
      }
      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }
      cd.markForCheck();
    });
  }
  /**
   *  Returns the readonly public state of the datepicker
   *
   * @since 5.2.0
   */
  get state() {
    return this._publicState;
  }
  /**
   *  Returns the calendar service used in the specific datepicker instance.
   *
   *  @since 5.3.0
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Returns the i18n service used in the specific datepicker instance.
   *
   * @since 14.2.0
   */
  get i18n() {
    return this._i18n;
  }
  /**
   *  Focuses on given date.
   */
  focusDate(date) {
    this._service.focus(NgbDate.from(date));
  }
  /**
   *  Selects focused date.
   */
  focusSelect() {
    this._service.focusSelect();
  }
  focus() {
    afterNextRender(() => {
      this._nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]')?.focus();
    }, {
      phase: AfterRenderPhase.Read,
      injector: this._injector
    });
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    this._service.open(NgbDate.from(date ? date.day ? date : __spreadProps(__spreadValues({}, date), {
      day: 1
    }) : null));
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = fromEvent(this._contentEl.nativeElement, "focusin");
      const focusOuts$ = fromEvent(this._contentEl.nativeElement, "focusout");
      merge(focusIns$, focusOuts$).pipe(filter((focusEvent) => {
        const target = focusEvent.target;
        const relatedTarget = focusEvent.relatedTarget;
        return !(target?.classList.contains("ngb-dp-day") && relatedTarget?.classList.contains("ngb-dp-day") && this._nativeElement.contains(target) && this._nativeElement.contains(relatedTarget));
      }), takeUntilDestroyed(this._destroyRef)).subscribe(({
        type
      }) => this._ngZone.run(() => this._service.set({
        focusVisible: type === "focusin"
      })));
    });
  }
  ngOnInit() {
    if (this.model === void 0) {
      const inputs = {};
      ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].forEach((name) => inputs[name] = this[name]);
      this._service.set(inputs);
      this.navigateTo(this.startDate);
    }
    if (!this.dayTemplate) {
      this.dayTemplate = this._defaultDayTemplate;
    }
    this._initialized = true;
  }
  ngOnChanges(changes) {
    const inputs = {};
    ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].filter((name) => name in changes).forEach((name) => inputs[name] = this[name]);
    this._service.set(inputs);
    if ("startDate" in changes && this._initialized) {
      const {
        currentValue,
        previousValue
      } = changes.startDate;
      if (isChangedMonth(previousValue, currentValue)) {
        this.navigateTo(this.startDate);
      }
    }
  }
  onDateSelect(date) {
    this._service.focus(date);
    this._service.select(date, {
      emitEvent: true
    });
  }
  onNavigateDateSelect(date) {
    this._service.open(date);
  }
  onNavigateEvent(event) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1));
        break;
      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1));
        break;
    }
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  setDisabledState(disabled) {
    this._service.set({
      disabled
    });
  }
  writeValue(value) {
    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
    this._service.select(this._controlValue);
  }
  static {
    this.\u0275fac = function NgbDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepicker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbDatepicker,
      selectors: [["ngb-datepicker"]],
      contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbDatepickerContent, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplateFromContent = _t.first);
        }
      },
      viewQuery: function NgbDatepicker_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c4, 7);
          \u0275\u0275viewQuery(_c5, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._defaultDayTemplate = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentEl = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDatepicker_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("disabled", ctx.model.disabled);
        }
      },
      inputs: {
        contentTemplate: "contentTemplate",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        maxDate: "maxDate",
        minDate: "minDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        weekdays: "weekdays"
      },
      outputs: {
        navigate: "navigate",
        dateSelect: "dateSelect"
      },
      exportAs: ["ngbDatepicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbDatepicker),
        multi: true
      }, NgbDatepickerService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 10,
      vars: 9,
      consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], ["content", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"], [1, "ngb-dp-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], [1, "ngb-dp-month"], [1, "ngb-dp-month-name"], [3, "month"], [3, "navigate", "select", "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"]],
      template: function NgbDatepicker_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NgbDatepicker_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
          \u0275\u0275elementStart(4, "div", 3);
          \u0275\u0275template(5, NgbDatepicker_Conditional_5_Template, 1, 7, "ngb-datepicker-navigation", 4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 5, 2);
          \u0275\u0275template(8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275template(9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 7);
        }
        if (rf & 2) {
          const defaultContentTemplate_r9 = \u0275\u0275reference(3);
          \u0275\u0275advance(5);
          \u0275\u0275conditional(ctx.navigation !== "none" ? 5 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("ngb-dp-months", !ctx.contentTemplate);
          \u0275\u0275advance(2);
          \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || (ctx.contentTemplateFromContent == null ? null : ctx.contentTemplateFromContent.templateRef) || defaultContentTemplate_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c6, ctx))("ngTemplateOutletInjector", ctx.injector);
          \u0275\u0275advance();
          \u0275\u0275property("ngTemplateOutlet", ctx.footerTemplate);
        }
      },
      dependencies: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbDatepicker",
      selector: "ngb-datepicker",
      standalone: true,
      imports: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class.disabled]": "model.disabled"
      },
      template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			@for (month of model.months; track month) {
				<div class="ngb-dp-month">
					@if (navigation === 'none' || (displayMonths > 1 && navigation === 'select')) {
						<div class="ngb-dp-month-name">
							{{ i18n.getMonthLabel(month.firstDate) }}
						</div>
					}
					<ngb-datepicker-month [month]="month.firstDate" />
				</div>
			}
		</ng-template>

		<div class="ngb-dp-header">
			@if (navigation !== 'none') {
				<ngb-datepicker-navigation
					[date]="model.firstDate!"
					[months]="model.months"
					[disabled]="model.disabled"
					[showSelect]="model.navigation === 'select'"
					[prevDisabled]="model.prevDisabled"
					[nextDisabled]="model.nextDisabled"
					[selectBoxes]="model.selectBoxes"
					(navigate)="onNavigateEvent($event)"
					(select)="onNavigateDateSelect($event)"
				/>
			}
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template
				[ngTemplateOutlet]="contentTemplate || contentTemplateFromContent?.templateRef || defaultContentTemplate"
				[ngTemplateOutletContext]="{ $implicit: this }"
				[ngTemplateOutletInjector]="injector"
			/>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate" />
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbDatepicker),
        multi: true
      }, NgbDatepickerService],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"]
    }]
  }], () => [], {
    _defaultDayTemplate: [{
      type: ViewChild,
      args: ["defaultDayTemplate", {
        static: true
      }]
    }],
    _contentEl: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    contentTemplate: [{
      type: Input
    }],
    contentTemplateFromContent: [{
      type: ContentChild,
      args: [NgbDatepickerContent, {
        static: true
      }]
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    dateSelect: [{
      type: Output
    }]
  });
})();
var isContainedIn = (element, array) => array ? array.some((item) => item.contains(element)) : false;
var matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
var isMobile = (() => {
  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
  const isAndroid = () => /Android/.test(navigator.userAgent);
  return typeof navigator !== "undefined" ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
})();
var wrapAsyncForMobile = (fn2) => isMobile ? () => setTimeout(() => fn2(), 100) : fn2;
function ngbAutoClose(zone, document2, type, close, closed$, insideElements, ignoreElements, insideSelector) {
  if (type) {
    zone.runOutsideAngular(wrapAsyncForMobile(() => {
      const shouldCloseOnClick = (event) => {
        const element = event.target;
        if (event.button === 2 || isContainedIn(element, ignoreElements)) {
          return false;
        }
        if (type === "inside") {
          return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
        } else if (type === "outside") {
          return !isContainedIn(element, insideElements);
        } else {
          return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
        }
      };
      const escapes$ = fromEvent(document2, "keydown").pipe(takeUntil(closed$), filter((e) => e.key === "Escape"), tap((e) => e.preventDefault()));
      const mouseDowns$ = fromEvent(document2, "mousedown").pipe(map(shouldCloseOnClick), takeUntil(closed$));
      const closeableClicks$ = fromEvent(document2, "mouseup").pipe(withLatestFrom(mouseDowns$), filter(([_, shouldClose]) => shouldClose), delay(0), takeUntil(closed$));
      race([escapes$.pipe(map(
        (_) => 0
        /* SOURCE.ESCAPE */
      )), closeableClicks$.pipe(map(
        (_) => 1
        /* SOURCE.CLICK */
      ))]).subscribe((source) => zone.run(() => close(source)));
    }));
  }
}
var FOCUSABLE_ELEMENTS_SELECTOR = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");
function getFocusableBoundaryElements(element) {
  const list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter((el) => el.tabIndex !== -1);
  return [list[0], list[list.length - 1]];
}
var ngbFocusTrap = (zone, element, stopFocusTrap$, refocusOnClick = false) => {
  zone.runOutsideAngular(() => {
    const lastFocusedElement$ = fromEvent(element, "focusin").pipe(takeUntil(stopFocusTrap$), map((e) => e.target));
    fromEvent(element, "keydown").pipe(takeUntil(stopFocusTrap$), filter((e) => e.key === "Tab"), withLatestFrom(lastFocusedElement$)).subscribe(([tabEvent, focusedElement]) => {
      const [first, last] = getFocusableBoundaryElements(element);
      if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
        last.focus();
        tabEvent.preventDefault();
      }
      if (focusedElement === last && !tabEvent.shiftKey) {
        first.focus();
        tabEvent.preventDefault();
      }
    });
    if (refocusOnClick) {
      fromEvent(element, "click").pipe(takeUntil(stopFocusTrap$), withLatestFrom(lastFocusedElement$), map((arr) => arr[1])).subscribe((lastFocusedElement) => lastFocusedElement.focus());
    }
  });
};
var NgbRTL = class _NgbRTL {
  constructor() {
    this._element = inject(DOCUMENT).documentElement;
  }
  isRTL() {
    return (this._element.getAttribute("dir") || "").toLowerCase() === "rtl";
  }
  static {
    this.\u0275fac = function NgbRTL_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRTL)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbRTL,
      factory: _NgbRTL.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRTL, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var placementSeparator = /\s+/;
var spacesRegExp = /  +/gi;
var bootstrapPopperMatches = {
  top: ["top"],
  bottom: ["bottom"],
  start: ["left", "right"],
  left: ["left"],
  end: ["right", "left"],
  right: ["right"],
  "top-start": ["top-start", "top-end"],
  "top-left": ["top-start"],
  "top-end": ["top-end", "top-start"],
  "top-right": ["top-end"],
  "bottom-start": ["bottom-start", "bottom-end"],
  "bottom-left": ["bottom-start"],
  "bottom-end": ["bottom-end", "bottom-start"],
  "bottom-right": ["bottom-end"],
  "start-top": ["left-start", "right-start"],
  "left-top": ["left-start"],
  "start-bottom": ["left-end", "right-end"],
  "left-bottom": ["left-end"],
  "end-top": ["right-start", "left-start"],
  "right-top": ["right-start"],
  "end-bottom": ["right-end", "left-end"],
  "right-bottom": ["right-end"]
};
function getPopperClassPlacement(placement, isRTL) {
  const [leftClass, rightClass] = bootstrapPopperMatches[placement];
  return isRTL ? rightClass || leftClass : leftClass;
}
var popperStartPrimaryPlacement = /^left/;
var popperEndPrimaryPlacement = /^right/;
var popperStartSecondaryPlacement = /^start/;
var popperEndSecondaryPlacement = /^end/;
function getBootstrapBaseClassPlacement(baseClass, placement) {
  let [primary, secondary] = placement.split("-");
  const newPrimary = primary.replace(popperStartPrimaryPlacement, "start").replace(popperEndPrimaryPlacement, "end");
  let classnames = [newPrimary];
  if (secondary) {
    let newSecondary = secondary;
    if (primary === "left" || primary === "right") {
      newSecondary = newSecondary.replace(popperStartSecondaryPlacement, "top").replace(popperEndSecondaryPlacement, "bottom");
    }
    classnames.push(`${newPrimary}-${newSecondary}`);
  }
  if (baseClass) {
    classnames = classnames.map((classname) => `${baseClass}-${classname}`);
  }
  return classnames.join(" ");
}
function getPopperOptions({
  placement,
  baseClass
}, rtl) {
  let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  const allowedPlacements = ["top", "bottom", "start", "end", "top-start", "top-end", "bottom-start", "bottom-end", "start-top", "start-bottom", "end-top", "end-bottom"];
  let hasAuto = placementVals.findIndex((val) => val === "auto");
  if (hasAuto >= 0) {
    allowedPlacements.forEach(function(obj) {
      if (placementVals.find((val) => val.search("^" + obj) !== -1) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }
  const popperPlacements = placementVals.map((_placement) => {
    return getPopperClassPlacement(_placement, rtl.isRTL());
  });
  let mainPlacement = popperPlacements.shift();
  const bsModifier = {
    name: "bootstrapClasses",
    enabled: !!baseClass,
    phase: "write",
    fn({
      state
    }) {
      const bsClassRegExp = new RegExp(baseClass + "(-[a-z]+)*", "gi");
      const popperElement = state.elements.popper;
      const popperPlacement = state.placement;
      let className = popperElement.className;
      className = className.replace(bsClassRegExp, "");
      className += ` ${getBootstrapBaseClassPlacement(baseClass, popperPlacement)}`;
      className = className.trim().replace(spacesRegExp, " ");
      popperElement.className = className;
    }
  };
  return {
    placement: mainPlacement,
    modifiers: [bsModifier, flip_default, preventOverflow_default, arrow_default, {
      enabled: true,
      name: "flip",
      options: {
        fallbackPlacements: popperPlacements
      }
    }, {
      enabled: true,
      name: "preventOverflow",
      phase: "main",
      fn: function() {
      }
    }]
  };
}
function noop(arg) {
  return arg;
}
function ngbPositioning() {
  const rtl = inject(NgbRTL);
  let popperInstance = null;
  return {
    createPopper(positioningOption) {
      if (!popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance = createPopper(positioningOption.hostElement, positioningOption.targetElement, popperOptions);
      }
    },
    update() {
      if (popperInstance) {
        popperInstance.update();
      }
    },
    setOptions(positioningOption) {
      if (popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance.setOptions(popperOptions);
      }
    },
    destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }
  };
}
function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
var NgbDateParserFormatter = class _NgbDateParserFormatter {
  static {
    this.\u0275fac = function NgbDateParserFormatter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateParserFormatter)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateParserFormatter,
      factory: () => NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateParserFormatter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateISOParserFormatter = class _NgbDateISOParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value != null) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger2(dateParts[0]),
          month: null,
          day: null
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger2(dateParts[0]),
          month: toInteger2(dateParts[1]),
          day: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger2(dateParts[0]),
          month: toInteger2(dateParts[1]),
          day: toInteger2(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    return date ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ""}-${isNumber(date.day) ? padNumber(date.day) : ""}` : "";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDateISOParserFormatter_BaseFactory;
      return function NgbDateISOParserFormatter_Factory(__ngFactoryType__) {
        return (\u0275NgbDateISOParserFormatter_BaseFactory || (\u0275NgbDateISOParserFormatter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDateISOParserFormatter)))(__ngFactoryType__ || _NgbDateISOParserFormatter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateISOParserFormatter,
      factory: _NgbDateISOParserFormatter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateISOParserFormatter, [{
    type: Injectable
  }], null, null);
})();
var NgbInputDatepickerConfig = class _NgbInputDatepickerConfig extends NgbDatepickerConfig {
  constructor() {
    super(...arguments);
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.restoreFocus = true;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbInputDatepickerConfig_BaseFactory;
      return function NgbInputDatepickerConfig_Factory(__ngFactoryType__) {
        return (\u0275NgbInputDatepickerConfig_BaseFactory || (\u0275NgbInputDatepickerConfig_BaseFactory = \u0275\u0275getInheritedFactory(_NgbInputDatepickerConfig)))(__ngFactoryType__ || _NgbInputDatepickerConfig);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbInputDatepickerConfig,
      factory: _NgbInputDatepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function addPopperOffset(offset$1) {
  return (options) => {
    options.modifiers.push(offset_default, {
      name: "offset",
      options: {
        offset: () => offset$1
      }
    });
    return options;
  };
}
var NgbInputDatepicker = class _NgbInputDatepicker {
  constructor() {
    this._parserFormatter = inject(NgbDateParserFormatter);
    this._elRef = inject(ElementRef);
    this._vcRef = inject(ViewContainerRef);
    this._ngZone = inject(NgZone);
    this._calendar = inject(NgbCalendar);
    this._dateAdapter = inject(NgbDateAdapter);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._config = inject(NgbInputDatepickerConfig);
    this._cRef = null;
    this._disabled = false;
    this._elWithFocus = null;
    this._model = null;
    this._positioning = ngbPositioning();
    this._destroyCloseHandlers$ = new Subject();
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.positionTarget = this._config.positionTarget;
    this.dateSelect = new EventEmitter();
    this.navigate = new EventEmitter();
    this.closed = new EventEmitter();
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._validatorChange = () => {
    };
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value === "" || value && value !== "false";
    if (this.isOpen()) {
      this._cRef.instance.setDisabledState(this._disabled);
    }
  }
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  registerOnValidatorChange(fn2) {
    this._validatorChange = fn2;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(c) {
    const {
      value
    } = c;
    if (value != null) {
      const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
      if (!ngbDate) {
        return {
          ngbDate: {
            invalid: value
          }
        };
      }
      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          ngbDate: {
            minDate: {
              minDate: this.minDate,
              actual: value
            }
          }
        };
      }
      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          ngbDate: {
            maxDate: {
              maxDate: this.maxDate,
              actual: value
            }
          }
        };
      }
    }
    return null;
  }
  writeValue(value) {
    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
    this._writeModelValue(this._model);
  }
  manualDateChange(value, updateView = false) {
    const inputValueChanged = value !== this._inputValue;
    if (inputValueChanged) {
      this._inputValue = value;
      this._model = this._fromDateStruct(this._parserFormatter.parse(value));
    }
    if (inputValueChanged || !updateView) {
      this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === "" ? null : value);
    }
    if (updateView && this._model) {
      this._writeModelValue(this._model);
    }
  }
  isOpen() {
    return !!this._cRef;
  }
  /**
   * Opens the datepicker popup.
   *
   * If the related form control contains a valid date, the corresponding month will be opened.
   */
  open() {
    if (!this.isOpen()) {
      this._cRef = this._vcRef.createComponent(NgbDatepicker, {
        injector: this._injector
      });
      this._applyPopupStyling(this._cRef.location.nativeElement);
      this._applyDatepickerInputs(this._cRef);
      this._subscribeForDatepickerOutputs(this._cRef.instance);
      this._cRef.instance.ngOnInit();
      this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
      this._cRef.instance.registerOnChange((selectedDate) => {
        this.writeValue(selectedDate);
        this._onChange(selectedDate);
        this._onTouched();
      });
      this._cRef.changeDetectorRef.detectChanges();
      this._cRef.instance.setDisabledState(this.disabled);
      if (this.container === "body") {
        this._document.querySelector(this.container)?.appendChild(this._cRef.location.nativeElement);
      }
      this._elWithFocus = this._document.activeElement;
      ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
      setTimeout(() => this._cRef?.instance.focus());
      let hostElement;
      if (isString(this.positionTarget)) {
        hostElement = this._document.querySelector(this.positionTarget);
      } else if (this.positionTarget instanceof HTMLElement) {
        hostElement = this.positionTarget;
      } else {
        hostElement = this._elRef.nativeElement;
      }
      if (this.positionTarget && !hostElement) {
        throw new Error("ngbDatepicker could not find element declared in [positionTarget] to position against.");
      }
      this._ngZone.runOutsideAngular(() => {
        if (this._cRef && hostElement) {
          this._positioning.createPopper({
            hostElement,
            targetElement: this._cRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterRender(() => {
            this._positioning.update();
          }, {
            phase: AfterRenderPhase.MixedReadWrite,
            injector: this._injector
          });
        }
      });
      this._setCloseHandlers();
    }
  }
  /**
   * Closes the datepicker popup.
   */
  close() {
    if (this.isOpen()) {
      this._cRef?.destroy();
      this._cRef = null;
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.closed.emit();
      this._changeDetector.markForCheck();
      let elementToFocus = this._elWithFocus;
      if (isString(this.restoreFocus)) {
        elementToFocus = this._document.querySelector(this.restoreFocus);
      } else if (this.restoreFocus !== void 0) {
        elementToFocus = this.restoreFocus;
      }
      if (elementToFocus && elementToFocus["focus"]) {
        elementToFocus.focus();
      } else {
        this._document.body.focus();
      }
    }
  }
  /**
   * Toggles the datepicker popup.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    if (this.isOpen()) {
      this._cRef.instance.navigateTo(date);
    }
  }
  onBlur() {
    this._onTouched();
  }
  onFocus() {
    this._elWithFocus = this._elRef.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes["minDate"] || changes["maxDate"]) {
      this._validatorChange();
      if (this.isOpen()) {
        if (changes["minDate"]) {
          this._cRef.setInput("minDate", this.minDate);
        }
        if (changes["maxDate"]) {
          this._cRef.setInput("maxDate", this.maxDate);
        }
      }
    }
    if (changes["datepickerClass"]) {
      const {
        currentValue,
        previousValue
      } = changes["datepickerClass"];
      this._applyPopupClass(currentValue, previousValue);
    }
    if (changes["autoClose"] && this.isOpen()) {
      this._setCloseHandlers();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  _applyDatepickerInputs(datepickerComponentRef) {
    ["contentTemplate", "dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showNavigation", "showWeekNumbers", "weekdays"].forEach((inputName) => {
      if (this[inputName] !== void 0) {
        datepickerComponentRef.setInput(inputName, this[inputName]);
      }
    });
    datepickerComponentRef.setInput("startDate", this.startDate || this._model);
  }
  _applyPopupClass(newClass, oldClass) {
    const popupEl = this._cRef?.location.nativeElement;
    if (popupEl) {
      if (newClass) {
        popupEl.classList.add(newClass);
      }
      if (oldClass) {
        popupEl.classList.remove(oldClass);
      }
    }
  }
  _applyPopupStyling(nativeElement) {
    nativeElement.classList.add("dropdown-menu", "show");
    if (this.container === "body") {
      nativeElement.classList.add("ngb-dp-body");
    }
    this._applyPopupClass(this.datepickerClass);
  }
  _subscribeForDatepickerOutputs(datepickerInstance) {
    datepickerInstance.navigate.subscribe((navigateEvent) => this.navigate.emit(navigateEvent));
    datepickerInstance.dateSelect.subscribe((date) => {
      this.dateSelect.emit(date);
      if (this.autoClose === true || this.autoClose === "inside") {
        this.close();
      }
    });
  }
  _writeModelValue(model) {
    const value = this._parserFormatter.format(model);
    this._inputValue = value;
    this._elRef.nativeElement.value = value;
    if (this.isOpen()) {
      this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
      this._onTouched();
    }
  }
  _fromDateStruct(date) {
    const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
    return this._calendar.isValid(ngbDate) ? ngbDate : null;
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
  }
  static {
    this.\u0275fac = function NgbInputDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbInputDatepicker)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbInputDatepicker,
      selectors: [["input", "ngbDatepicker", ""]],
      hostVars: 1,
      hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value);
          })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value, true);
          })("focus", function NgbInputDatepicker_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.disabled);
        }
      },
      inputs: {
        autoClose: "autoClose",
        contentTemplate: "contentTemplate",
        datepickerClass: "datepickerClass",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        placement: "placement",
        popperOptions: "popperOptions",
        restoreFocus: "restoreFocus",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        container: "container",
        positionTarget: "positionTarget",
        weekdays: "weekdays",
        disabled: "disabled"
      },
      outputs: {
        dateSelect: "dateSelect",
        navigate: "navigate",
        closed: "closed"
      },
      exportAs: ["ngbDatepicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepicker, [{
    type: Directive,
    args: [{
      selector: "input[ngbDatepicker]",
      exportAs: "ngbDatepicker",
      standalone: true,
      host: {
        "(input)": "manualDateChange($event.target.value)",
        "(change)": "manualDateChange($event.target.value, true)",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "[disabled]": "disabled"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]
    }]
  }], null, {
    autoClose: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    datepickerClass: [{
      type: Input
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    dateSelect: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbCalendarHijri = class _NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = this._setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = this._setMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return this._setDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = this.toGregorian(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - MuhDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return this.fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
  }
  _setDay(date, day) {
    day = +day;
    let mDays = this.getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
      while (day <= 0) {
        date = this._setMonth(date, date.month - 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this._setMonth(date, date.month + 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
      }
    }
    date.day = day;
    return date;
  }
  _setMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }
  _setYear(date, year) {
    date.year = +year;
    return date;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarHijri_BaseFactory;
      return function NgbCalendarHijri_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarHijri_BaseFactory || (\u0275NgbCalendarHijri_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarHijri)))(__ngFactoryType__ || _NgbCalendarHijri);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarHijri,
      factory: _NgbCalendarHijri.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHijri, [{
    type: Injectable
  }], null, null);
})();
function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
function isGregorianLeapYear$1(gDate) {
  const year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30);
}
function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30);
}
function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
var GREGORIAN_EPOCH$1 = 17214255e-1;
var ISLAMIC_EPOCH = 19484395e-1;
var NgbCalendarIslamicCivil = class _NgbCalendarIslamicCivil extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
   * `gDate` is a JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    const gYear = gDate.getFullYear(), gMonth = gDate.getMonth(), gDay = gDate.getDate();
    let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay) + 0.5;
    const days = julianDay - ISLAMIC_EPOCH;
    const hYear = Math.floor((30 * days + 10646) / 10631);
    let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
    hMonth = Math.min(hMonth, 11);
    const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
    return new NgbDate(hYear, hMonth + 1, hDay);
  }
  /**
   * Returns the equivalent JS date value for a give input islamic(civil) date.
   * `hDate` is an islamic(civil) date to be converted to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
    const wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH$1, quadricent = Math.floor(depoch / 146097), dqc = mod$1(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod$1(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod$1(dcent, 1461), yindex = Math.floor(dquad / 365);
    let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
    if (!(cent === 4 || yindex === 4)) {
      year++;
    }
    const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const yearday = wjd - gYearStart;
    const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
    const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
    const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
    const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
    const day = wjd - tjd2 + 1;
    return new Date(year, month - 1, day);
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  getDaysPerMonth(month, year) {
    year = year + Math.floor(month / 13);
    month = (month - 1) % 12 + 1;
    let length = 29 + month % 2;
    if (month === 12 && isIslamicLeapYear(year)) {
      length++;
    }
    return length;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarIslamicCivil_BaseFactory;
      return function NgbCalendarIslamicCivil_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarIslamicCivil_BaseFactory || (\u0275NgbCalendarIslamicCivil_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarIslamicCivil)))(__ngFactoryType__ || _NgbCalendarIslamicCivil);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarIslamicCivil,
      factory: _NgbCalendarIslamicCivil.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicCivil, [{
    type: Injectable
  }], null, null);
})();
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1e3 * 60 * 60 * 24;
var MONTH_LENGTH = [
  // 1300-1304
  "101010101010",
  "110101010100",
  "111011001001",
  "011011010100",
  "011011101010",
  // 1305-1309
  "001101101100",
  "101010101101",
  "010101010101",
  "011010101001",
  "011110010010",
  // 1310-1314
  "101110101001",
  "010111010100",
  "101011011010",
  "010101011100",
  "110100101101",
  // 1315-1319
  "011010010101",
  "011101001010",
  "101101010100",
  "101101101010",
  "010110101101",
  // 1320-1324
  "010010101110",
  "101001001111",
  "010100010111",
  "011010001011",
  "011010100101",
  // 1325-1329
  "101011010101",
  "001011010110",
  "100101011011",
  "010010011101",
  "101001001101",
  // 1330-1334
  "110100100110",
  "110110010101",
  "010110101100",
  "100110110110",
  "001010111010",
  // 1335-1339
  "101001011011",
  "010100101011",
  "101010010101",
  "011011001010",
  "101011101001",
  // 1340-1344
  "001011110100",
  "100101110110",
  "001010110110",
  "100101010110",
  "101011001010",
  // 1345-1349
  "101110100100",
  "101111010010",
  "010111011001",
  "001011011100",
  "100101101101",
  // 1350-1354
  "010101001101",
  "101010100101",
  "101101010010",
  "101110100101",
  "010110110100",
  // 1355-1359
  "100110110110",
  "010101010111",
  "001010010111",
  "010101001011",
  "011010100011",
  // 1360-1364
  "011101010010",
  "101101100101",
  "010101101010",
  "101010101011",
  "010100101011",
  // 1365-1369
  "110010010101",
  "110101001010",
  "110110100101",
  "010111001010",
  "101011010110",
  // 1370-1374
  "100101010111",
  "010010101011",
  "100101001011",
  "101010100101",
  "101101010010",
  // 1375-1379
  "101101101010",
  "010101110101",
  "001001110110",
  "100010110111",
  "010001011011",
  // 1380-1384
  "010101010101",
  "010110101001",
  "010110110100",
  "100111011010",
  "010011011101",
  // 1385-1389
  "001001101110",
  "100100110110",
  "101010101010",
  "110101010100",
  "110110110010",
  // 1390-1394
  "010111010101",
  "001011011010",
  "100101011011",
  "010010101011",
  "101001010101",
  // 1395-1399
  "101101001001",
  "101101100100",
  "101101110001",
  "010110110100",
  "101010110101",
  // 1400-1404
  "101001010101",
  "110100100101",
  "111010010010",
  "111011001001",
  "011011010100",
  // 1405-1409
  "101011101001",
  "100101101011",
  "010010101011",
  "101010010011",
  "110101001001",
  // 1410-1414
  "110110100100",
  "110110110010",
  "101010111001",
  "010010111010",
  "101001011011",
  // 1415-1419
  "010100101011",
  "101010010101",
  "101100101010",
  "101101010101",
  "010101011100",
  // 1420-1424
  "010010111101",
  "001000111101",
  "100100011101",
  "101010010101",
  "101101001010",
  // 1425-1429
  "101101011010",
  "010101101101",
  "001010110110",
  "100100111011",
  "010010011011",
  // 1430-1434
  "011001010101",
  "011010101001",
  "011101010100",
  "101101101010",
  "010101101100",
  // 1435-1439
  "101010101101",
  "010101010101",
  "101100101001",
  "101110010010",
  "101110101001",
  // 1440-1444
  "010111010100",
  "101011011010",
  "010101011010",
  "101010101011",
  "010110010101",
  // 1445-1449
  "011101001001",
  "011101100100",
  "101110101010",
  "010110110101",
  "001010110110",
  // 1450-1454
  "101001010110",
  "111001001101",
  "101100100101",
  "101101010010",
  "101101101010",
  // 1455-1459
  "010110101101",
  "001010101110",
  "100100101111",
  "010010010111",
  "011001001011",
  // 1460-1464
  "011010100101",
  "011010101100",
  "101011010110",
  "010101011101",
  "010010011101",
  // 1465-1469
  "101001001101",
  "110100010110",
  "110110010101",
  "010110101010",
  "010110110101",
  // 1470-1474
  "001011011010",
  "100101011011",
  "010010101101",
  "010110010101",
  "011011001010",
  // 1475-1479
  "011011100100",
  "101011101010",
  "010011110101",
  "001010110110",
  "100101010110",
  // 1480-1484
  "101010101010",
  "101101010100",
  "101111010010",
  "010111011001",
  "001011101010",
  // 1485-1489
  "100101101101",
  "010010101101",
  "101010010101",
  "101101001010",
  "101110100101",
  // 1490-1494
  "010110110010",
  "100110110101",
  "010011010110",
  "101010010111",
  "010101000111",
  // 1495-1499
  "011010010011",
  "011101001001",
  "101101010101",
  "010101101010",
  "101001101011",
  // 1500-1504
  "010100101011",
  "101010001011",
  "110101000110",
  "110110100011",
  "010111001010",
  // 1505-1509
  "101011010110",
  "010011011011",
  "001001101011",
  "100101001011",
  "101010100101",
  // 1510-1514
  "101101010010",
  "101101101001",
  "010101110101",
  "000101110110",
  "100010110111",
  // 1515-1519
  "001001011011",
  "010100101011",
  "010101100101",
  "010110110100",
  "100111011010",
  // 1520-1524
  "010011101101",
  "000101101101",
  "100010110110",
  "101010100110",
  "110101010010",
  // 1525-1529
  "110110101001",
  "010111010100",
  "101011011010",
  "100101011011",
  "010010101011",
  // 1530-1534
  "011001010011",
  "011100101001",
  "011101100010",
  "101110101001",
  "010110110010",
  // 1535-1539
  "101010110101",
  "010101010101",
  "101100100101",
  "110110010010",
  "111011001001",
  // 1540-1544
  "011011010010",
  "101011101001",
  "010101101011",
  "010010101011",
  "101001010101",
  // 1545-1549
  "110100101001",
  "110101010100",
  "110110101010",
  "100110110101",
  "010010111010",
  // 1550-1554
  "101000111011",
  "010010011011",
  "101001001101",
  "101010101010",
  "101011010101",
  // 1555-1559
  "001011011010",
  "100101011101",
  "010001011110",
  "101000101110",
  "110010011010",
  // 1560-1564
  "110101010101",
  "011010110010",
  "011010111001",
  "010010111010",
  "101001011101",
  // 1565-1569
  "010100101101",
  "101010010101",
  "101101010010",
  "101110101000",
  "101110110100",
  // 1570-1574
  "010110111001",
  "001011011010",
  "100101011010",
  "101101001010",
  "110110100100",
  // 1575-1579
  "111011010001",
  "011011101000",
  "101101101010",
  "010101101101",
  "010100110101",
  // 1580-1584
  "011010010101",
  "110101001010",
  "110110101000",
  "110111010100",
  "011011011010",
  // 1585-1589
  "010101011011",
  "001010011101",
  "011000101011",
  "101100010101",
  "101101001010",
  // 1590-1594
  "101110010101",
  "010110101010",
  "101010101110",
  "100100101110",
  "110010001111",
  // 1595-1599
  "010100100111",
  "011010010101",
  "011010101010",
  "101011010110",
  "010101011101",
  // 1600
  "001010011101"
];
function getDaysDiff(date1, date2) {
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = Math.abs(time1 - time2);
  return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = class _NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
  /**
   * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
   * `gdate` is s JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    let hDay = 1, hMonth = 0, hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;
      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;
          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;
            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }
            if (j > 11) {
              j = 0;
              year++;
            }
            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }
          daysDiff = daysDiff - numOfDays;
        }
      }
      return null;
    } else {
      return super.fromGregorian(gDate);
    }
  }
  /**
   * Converts the current Hijri date to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }
      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }
      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = super.toGregorian(hDate);
    }
    return gDate;
  }
  /**
   * Returns the number of days in a specific Hijri hMonth.
   * `hMonth` is 1 for Muharram, 2 for Safar, etc.
   * `hYear` is any Hijri hYear.
   */
  getDaysPerMonth(hMonth, hYear) {
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      const pos = hYear - HIJRI_BEGIN;
      return +MONTH_LENGTH[pos][hMonth - 1] + 29;
    }
    return super.getDaysPerMonth(hMonth, hYear);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarIslamicUmalqura_BaseFactory;
      return function NgbCalendarIslamicUmalqura_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarIslamicUmalqura_BaseFactory || (\u0275NgbCalendarIslamicUmalqura_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarIslamicUmalqura)))(__ngFactoryType__ || _NgbCalendarIslamicUmalqura);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarIslamicUmalqura,
      factory: _NgbCalendarIslamicUmalqura.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicUmalqura, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$3(jalaliDate) {
  let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  let date = julianToGregorian$1(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian$3(gdate) {
  let g2d = gregorianToJulian$1(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}
function setJalaliDay(date, day) {
  let mDays = getDaysPerMonth$1(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function mod(a, b) {
  return a - b * Math.floor(a / b);
}
function div(a, b) {
  return Math.trunc(a / b);
}
function jalCal(jalaliYear) {
  let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const breaksLength = breaks.length;
  const gYear = jalaliYear + 621;
  let leapJ = -14;
  let jp = breaks[0];
  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error("Invalid Jalali year " + jalaliYear);
  }
  let jump;
  for (let i = 1; i < breaksLength; i += 1) {
    const jm = breaks[i];
    jump = jm - jp;
    if (jalaliYear < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jalaliYear - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return {
    leap,
    gy: gYear,
    march
  };
}
function julianToGregorian$1(julianDayNumber) {
  let j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gDay = div(mod(i, 153), 5) + 1;
  const gMonth = mod(div(i, 153), 12) + 1;
  const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
function gregorianToJulian$1(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function julianToJalali(julianDayNumber) {
  let gy = julianToGregorian$1(julianDayNumber).getFullYear(), jalaliYear = gy - 621, r = jalCal(jalaliYear), gregorianDay = gregorianToJulian$1(gy, 3, r.march), jalaliDay, jalaliMonth, numberOfDays;
  numberOfDays = julianDayNumber - gregorianDay;
  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      numberOfDays -= 186;
    }
  } else {
    jalaliYear -= 1;
    numberOfDays += 179;
    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }
  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
function jalaliToJulian(jYear, jMonth, jDay) {
  let r = jalCal(jYear);
  return gregorianToJulian$1(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
function getDaysPerMonth$1(month, year) {
  if (month <= 6) {
    return 31;
  }
  if (month <= 11) {
    return 30;
  }
  if (jalCal(year).leap === 0) {
    return 30;
  }
  return 29;
}
var NgbCalendarPersian = class _NgbCalendarPersian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setJalaliDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$3(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian$3(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian$3(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromGregorian$3(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian$3(date).getTime());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarPersian_BaseFactory;
      return function NgbCalendarPersian_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarPersian_BaseFactory || (\u0275NgbCalendarPersian_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarPersian)))(__ngFactoryType__ || _NgbCalendarPersian);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarPersian,
      factory: _NgbCalendarPersian.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarPersian, [{
    type: Injectable
  }], null, null);
})();
var PARTS_PER_HOUR = 1080;
var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
var BAHARAD = 11 * PARTS_PER_HOUR + 204;
var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
var GREGORIAN_EPOCH = 17214255e-1;
function isGregorianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
  let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  let dayOfWeek = dayNumber % 7;
  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }
  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }
  return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isGregorianLeapYear(year)) {
    days[1]++;
  }
  return days[month - 1];
}
function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
  if (year != null) {
    let b = (year * 12 + 17) % 19;
    return b >= (b < 0 ? -7 : 12);
  }
  return false;
}
function getDaysInHebrewMonth(month, year) {
  let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  let yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  let leapYear = isHebrewLeapYear(year);
  let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
  if (yearType > 0) {
    daysInMonth[2]++;
  }
  if (yearType > 1) {
    daysInMonth[1]++;
  }
  return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
  let numberOfDay = 0;
  for (let i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }
  return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }
  return date;
}
function setHebrewDay(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;
        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }
        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }
  return date;
}
function fromGregorian$2(gdate) {
  const date = new Date(gdate);
  const gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
  let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  let daysSinceHebEpoch = julianDay - 347997;
  let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }
  let hMonth = 1;
  let hDay = dayOfYear;
  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }
  return new NgbDate(hYear, hMonth, hDay);
}
function toGregorian$2(hebrewDate) {
  const hYear = hebrewDate.year;
  const hMonth = hebrewDate.month;
  const hDay = hebrewDate.day;
  let days = numberOfFirstDayInYear(hYear);
  for (let i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }
  days += hDay;
  let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  let after = diffDays >= 0;
  if (!after) {
    diffDays = -diffDays;
  }
  let gYear = 1970;
  let gMonth = 1;
  let gDay = 1;
  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }
        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }
  return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
  if (!numerals) {
    return "";
  }
  const hArray0_9 = ["", "\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05D6", "\u05D7", "\u05D8"];
  const hArray10_19 = ["\u05D9", "\u05D9\u05D0", "\u05D9\u05D1", "\u05D9\u05D2", "\u05D9\u05D3", "\u05D8\u05D5", "\u05D8\u05D6", "\u05D9\u05D6", "\u05D9\u05D7", "\u05D9\u05D8"];
  const hArray20_90 = ["", "", "\u05DB", "\u05DC", "\u05DE", "\u05E0", "\u05E1", "\u05E2", "\u05E4", "\u05E6"];
  const hArray100_900 = ["", "\u05E7", "\u05E8", "\u05E9", "\u05EA", "\u05EA\u05E7", "\u05EA\u05E8", "\u05EA\u05E9", "\u05EA\u05EA", "\u05EA\u05EA\u05E7"];
  const hArray1000_9000 = ["", "\u05D0", "\u05D1", "\u05D1\u05D0", "\u05D1\u05D1", "\u05D4", "\u05D4\u05D0", "\u05D4\u05D1", "\u05D4\u05D1\u05D0", "\u05D4\u05D1\u05D1"];
  const geresh = "\u05F3", gershaim = "\u05F4";
  let mem = 0;
  let result = [];
  let step = 0;
  while (numerals > 0) {
    let m = numerals % 10;
    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, " ");
      }
      break;
    }
    numerals = Math.floor(numerals / 10);
    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }
    step++;
  }
  result = result.join("").split("");
  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }
  return result.join("");
}
var NgbCalendarHebrew = class _NgbCalendarHebrew extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }
  getWeeksPerMonth() {
    return 6;
  }
  isValid(date) {
    if (date != null) {
      let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$2(date).getTime());
    }
    return false;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;
      case "d":
        return setHebrewDay(date, number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$2(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }
  getToday() {
    return fromGregorian$2(/* @__PURE__ */ new Date());
  }
  /**
   * @since 3.4.0
   */
  toGregorian(date) {
    return fromJSDate(toGregorian$2(date));
  }
  /**
   * @since 3.4.0
   */
  fromGregorian(date) {
    return fromGregorian$2(toJSDate(date));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarHebrew_BaseFactory;
      return function NgbCalendarHebrew_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarHebrew_BaseFactory || (\u0275NgbCalendarHebrew_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarHebrew)))(__ngFactoryType__ || _NgbCalendarHebrew);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarHebrew,
      factory: _NgbCalendarHebrew.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHebrew, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS$1 = ["\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05EA", "\u05E8\u05D0\u05E9\u05D5\u05DF"];
var MONTHS$1 = ["\u05EA\u05E9\u05E8\u05D9", "\u05D7\u05E9\u05D5\u05DF", "\u05DB\u05E1\u05DC\u05D5", "\u05D8\u05D1\u05EA", "\u05E9\u05D1\u05D8", "\u05D0\u05D3\u05E8", "\u05E0\u05D9\u05E1\u05DF", "\u05D0\u05D9\u05D9\u05E8", "\u05E1\u05D9\u05D5\u05DF", "\u05EA\u05DE\u05D5\u05D6", "\u05D0\u05D1", "\u05D0\u05DC\u05D5\u05DC"];
var MONTHS_LEAP = ["\u05EA\u05E9\u05E8\u05D9", "\u05D7\u05E9\u05D5\u05DF", "\u05DB\u05E1\u05DC\u05D5", "\u05D8\u05D1\u05EA", "\u05E9\u05D1\u05D8", "\u05D0\u05D3\u05E8 \u05D0\u05F3", "\u05D0\u05D3\u05E8 \u05D1\u05F3", "\u05E0\u05D9\u05E1\u05DF", "\u05D0\u05D9\u05D9\u05E8", "\u05E1\u05D9\u05D5\u05DF", "\u05EA\u05DE\u05D5\u05D6", "\u05D0\u05D1", "\u05D0\u05DC\u05D5\u05DC"];
var NgbDatepickerI18nHebrew = class _NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || "" : MONTHS$1[month - 1] || "";
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS$1[weekday - 1] || "";
  }
  getDayAriaLabel(date) {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }
  getDayNumerals(date) {
    return hebrewNumerals(date.day);
  }
  getWeekNumerals(weekNumber) {
    return hebrewNumerals(weekNumber);
  }
  getYearNumerals(year) {
    return hebrewNumerals(year);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDatepickerI18nHebrew_BaseFactory;
      return function NgbDatepickerI18nHebrew_Factory(__ngFactoryType__) {
        return (\u0275NgbDatepickerI18nHebrew_BaseFactory || (\u0275NgbDatepickerI18nHebrew_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDatepickerI18nHebrew)))(__ngFactoryType__ || _NgbDatepickerI18nHebrew);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerI18nHebrew,
      factory: _NgbDatepickerI18nHebrew.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nHebrew, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$1(date) {
  return new Date(date.year - 543, date.month - 1, date.day);
}
function fromGregorian$1(gdate) {
  return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}
var NgbCalendarBuddhist = class _NgbCalendarBuddhist extends NgbCalendarGregorian {
  getToday() {
    return fromGregorian$1(/* @__PURE__ */ new Date());
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toGregorian$1(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromGregorian$1(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toGregorian$1(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toGregorian$1(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toGregorian$1(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarBuddhist_BaseFactory;
      return function NgbCalendarBuddhist_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarBuddhist_BaseFactory || (\u0275NgbCalendarBuddhist_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarBuddhist)))(__ngFactoryType__ || _NgbCalendarBuddhist);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarBuddhist,
      factory: _NgbCalendarBuddhist.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarBuddhist, [{
    type: Injectable
  }], null, null);
})();
var JD_EPOCH = 17242205e-1;
var DAYSPERMONTH = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];
function isEthiopianLeapYear(year) {
  if (year != null) {
    return year % 4 == 3 || year % 4 == -1;
  }
  return false;
}
function setEthiopianYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setEthiopianMonth(date, val) {
  val = +val;
  date.year = date.year + Math.floor((val - 1) / 13);
  date.month = Math.floor(((val - 1) % 13 + 13) % 13) + 1;
  return date;
}
function setEthiopianDay(date, day) {
  let mDays = getDaysPerMonth(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setEthiopianMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setEthiopianMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function getDaysPerMonth(month, year) {
  let leapYear = isEthiopianLeapYear(year);
  return DAYSPERMONTH[month - 1] + (month === 13 && leapYear ? 1 : 0);
}
function toGregorian(ethiopianDate) {
  let jdn = ethiopianToJulian(ethiopianDate.year, ethiopianDate.month, ethiopianDate.day);
  let date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian(gdate) {
  let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return juilianToEthiopia(g2d);
}
function ethiopianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  return day + (month - 1) * 30 + (year - 1) * 365 + Math.floor(year / 4) + JD_EPOCH - 1;
}
function juilianToEthiopia(jd) {
  let c = Math.floor(jd) + 0.5 - JD_EPOCH;
  let year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
  if (year <= 0) {
    year--;
  }
  c = Math.floor(jd) + 0.5 - ethiopianToJulian(year, 1, 1);
  let month = Math.floor(c / 30) + 1;
  let day = c - (month - 1) * 30 + 1;
  return new NgbDate(year, month, day);
}
function julianToGregorian(jd) {
  let z = Math.floor(jd + 0.5);
  let a = Math.floor((z - 186721625e-2) / 36524.25);
  a = z + 1 + a - Math.floor(a / 4);
  let b = a + 1524;
  let c = Math.floor((b - 122.1) / 365.25);
  let d = Math.floor(365.25 * c);
  let e = Math.floor((b - d) / 30.6001);
  let day = b - d - Math.floor(e * 30.6001);
  let month = e - (e > 13.5 ? 13 : 1);
  let year = c - (month > 2.5 ? 4716 : 4715);
  if (year <= 0) {
    year--;
  }
  return new Date(year, month, day);
}
function gregorianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  if (month < 3) {
    month += 12;
    year--;
  }
  let a = Math.floor(year / 100);
  let b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}
var NgbCalendarEthiopian = class _NgbCalendarEthiopian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setEthiopianYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setEthiopianMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setEthiopianDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const dt = Math.floor(ethiopianToJulian(date.year, date.month, date.day) + 3) % 7;
    return dt === 0 ? 7 : dt;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getWeeksPerMonth() {
    return 6;
  }
  getToday() {
    return fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian(date).getTime());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbCalendarEthiopian_BaseFactory;
      return function NgbCalendarEthiopian_Factory(__ngFactoryType__) {
        return (\u0275NgbCalendarEthiopian_BaseFactory || (\u0275NgbCalendarEthiopian_BaseFactory = \u0275\u0275getInheritedFactory(_NgbCalendarEthiopian)))(__ngFactoryType__ || _NgbCalendarEthiopian);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbCalendarEthiopian,
      factory: _NgbCalendarEthiopian.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarEthiopian, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS = ["\u12A5\u1211\u12F5", "\u1230\u129E", "\u121B\u12AD\u1230\u129E", "\u1228\u1261\u12D5", "\u1213\u1219\u1235", "\u12D3\u122D\u1265", "\u1245\u12F3\u121C"];
var MONTHS = ["\u1218\u1235\u12A8\u1228\u121D", "\u1325\u1245\u121D\u1275", "\u1285\u12F3\u122D", "\u1273\u1205\u1223\u1225", "\u1325\u122D", "\u12E8\u12AB\u1272\u1275", "\u1218\u130B\u1262\u1275", "\u121A\u12EB\u12DD\u12EB", "\u130D\u1295\u1266\u1275", "\u1230\u1294", "\u1210\u121D\u120C", "\u1290\u1210\u1234", "\u1333\u1309\u121C"];
var NgbDatepickerI18nAmharic = class _NgbDatepickerI18nAmharic extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return MONTHS[month - 1];
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS[weekday - 1];
  }
  getDayAriaLabel(date) {
    return `${date.day} ${this.getMonthFullName(date.month, date.year)} ${date.year}`;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDatepickerI18nAmharic_BaseFactory;
      return function NgbDatepickerI18nAmharic_Factory(__ngFactoryType__) {
        return (\u0275NgbDatepickerI18nAmharic_BaseFactory || (\u0275NgbDatepickerI18nAmharic_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDatepickerI18nAmharic)))(__ngFactoryType__ || _NgbDatepickerI18nAmharic);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDatepickerI18nAmharic,
      factory: _NgbDatepickerI18nAmharic.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nAmharic, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeAdapter = class _NgbDateNativeAdapter extends NgbDateAdapter {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date) {
    return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
  }
  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
  }
  _fromNativeDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    jsDate.setFullYear(date.year);
    return jsDate;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDateNativeAdapter_BaseFactory;
      return function NgbDateNativeAdapter_Factory(__ngFactoryType__) {
        return (\u0275NgbDateNativeAdapter_BaseFactory || (\u0275NgbDateNativeAdapter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDateNativeAdapter)))(__ngFactoryType__ || _NgbDateNativeAdapter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateNativeAdapter,
      factory: _NgbDateNativeAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeUTCAdapter = class _NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
  _fromNativeDate(date) {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDateNativeUTCAdapter_BaseFactory;
      return function NgbDateNativeUTCAdapter_Factory(__ngFactoryType__) {
        return (\u0275NgbDateNativeUTCAdapter_BaseFactory || (\u0275NgbDateNativeUTCAdapter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDateNativeUTCAdapter)))(__ngFactoryType__ || _NgbDateNativeUTCAdapter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDateNativeUTCAdapter,
      factory: _NgbDateNativeUTCAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeUTCAdapter, [{
    type: Injectable
  }], null, null);
})();
var NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];
var NgbDatepickerModule = class _NgbDatepickerModule {
  static {
    this.\u0275fac = function NgbDatepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbDatepickerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerModule, [{
    type: NgModule,
    args: [{
      exports: NGB_DATEPICKER_DIRECTIVES,
      imports: NGB_DATEPICKER_DIRECTIVES
    }]
  }], null, null);
})();
var NgbDropdownConfig = class _NgbDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.container = null;
  }
  static {
    this.\u0275fac = function NgbDropdownConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbDropdownConfig,
      factory: _NgbDropdownConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDropdownItem = class _NgbDropdownItem {
  constructor() {
    this._disabled = false;
    this.nativeElement = inject(ElementRef).nativeElement;
    this.tabindex = 0;
  }
  set disabled(value) {
    this._disabled = value === "" || value === true;
  }
  get disabled() {
    return this._disabled;
  }
  static {
    this.\u0275fac = function NgbDropdownItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdownItem,
      selectors: [["", "ngbDropdownItem", ""]],
      hostAttrs: [1, "dropdown-item"],
      hostVars: 3,
      hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("tabIndex", ctx.disabled ? -1 : ctx.tabindex);
          \u0275\u0275classProp("disabled", ctx.disabled);
        }
      },
      inputs: {
        tabindex: "tabindex",
        disabled: "disabled"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownItem, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownItem]",
      standalone: true,
      host: {
        class: "dropdown-item",
        "[class.disabled]": "disabled",
        "[tabIndex]": "disabled ? -1 : tabindex"
      }
    }]
  }], null, {
    tabindex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbDropdownButtonItem = class _NgbDropdownButtonItem {
  constructor() {
    this.item = inject(NgbDropdownItem);
  }
  static {
    this.\u0275fac = function NgbDropdownButtonItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownButtonItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdownButtonItem,
      selectors: [["button", "ngbDropdownItem", ""]],
      hostVars: 1,
      hostBindings: function NgbDropdownButtonItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.item.disabled);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownButtonItem, [{
    type: Directive,
    args: [{
      selector: "button[ngbDropdownItem]",
      standalone: true,
      host: {
        "[disabled]": "item.disabled"
      }
    }]
  }], null, null);
})();
var NgbDropdownMenu = class _NgbDropdownMenu {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.\u0275fac = function NgbDropdownMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownMenu)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdownMenu,
      selectors: [["", "ngbDropdownMenu", ""]],
      contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbDropdownItem, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuItems = _t);
        }
      },
      hostAttrs: [1, "dropdown-menu"],
      hostVars: 2,
      hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("show", ctx.dropdown.isOpen());
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownMenu]",
      standalone: true,
      host: {
        class: "dropdown-menu",
        "[class.show]": "dropdown.isOpen()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($event)",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($event)",
        "(keydown.Home)": "dropdown.onKeyDown($event)",
        "(keydown.End)": "dropdown.onKeyDown($event)",
        "(keydown.Enter)": "dropdown.onKeyDown($event)",
        "(keydown.Space)": "dropdown.onKeyDown($event)",
        "(keydown.Tab)": "dropdown.onKeyDown($event)",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($event)"
      }
    }]
  }], null, {
    menuItems: [{
      type: ContentChildren,
      args: [NgbDropdownItem]
    }]
  });
})();
var NgbDropdownAnchor = class _NgbDropdownAnchor {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.\u0275fac = function NgbDropdownAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownAnchor)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdownAnchor,
      selectors: [["", "ngbDropdownAnchor", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-expanded", ctx.dropdown.isOpen());
          \u0275\u0275classProp("show", ctx.dropdown.isOpen());
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownAnchor, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownAnchor]",
      standalone: true,
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()"
      }
    }]
  }], null, null);
})();
var NgbDropdownToggle = class _NgbDropdownToggle extends NgbDropdownAnchor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbDropdownToggle_BaseFactory;
      return function NgbDropdownToggle_Factory(__ngFactoryType__) {
        return (\u0275NgbDropdownToggle_BaseFactory || (\u0275NgbDropdownToggle_BaseFactory = \u0275\u0275getInheritedFactory(_NgbDropdownToggle)))(__ngFactoryType__ || _NgbDropdownToggle);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdownToggle,
      selectors: [["", "ngbDropdownToggle", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgbDropdownToggle_click_HostBindingHandler() {
            return ctx.dropdown.toggle();
          })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-expanded", ctx.dropdown.isOpen());
          \u0275\u0275classProp("show", ctx.dropdown.isOpen());
        }
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => _NgbDropdownToggle)
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownToggle]",
      standalone: true,
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()",
        "(click)": "dropdown.toggle()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($event)",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($event)",
        "(keydown.Home)": "dropdown.onKeyDown($event)",
        "(keydown.End)": "dropdown.onKeyDown($event)",
        "(keydown.Tab)": "dropdown.onKeyDown($event)",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($event)"
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => NgbDropdownToggle)
      }]
    }]
  }], null, null);
})();
var NgbDropdown = class _NgbDropdown {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._config = inject(NgbDropdownConfig);
    this._document = inject(DOCUMENT);
    this._injector = inject(Injector);
    this._ngZone = inject(NgZone);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._destroyCloseHandlers$ = new Subject();
    this._bodyContainer = null;
    this._positioning = ngbPositioning();
    this.autoClose = this._config.autoClose;
    this._open = false;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.openChange = new EventEmitter();
  }
  ngOnInit() {
    if (!this.display) {
      this.display = this._nativeElement.closest(".navbar") ? "static" : "dynamic";
    }
  }
  ngAfterContentInit() {
    afterNextRender(() => {
      this._applyPlacementClasses();
      if (this._open) {
        this._setCloseHandlers();
      }
    }, {
      phase: AfterRenderPhase.Write,
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }
    if (changes.placement && !changes.placement.firstChange) {
      this._positioning.setOptions({
        hostElement: this._anchor.nativeElement,
        targetElement: this._bodyContainer || this._menu.nativeElement,
        placement: this.placement
      });
      this._applyPlacementClasses();
    }
    if (changes.dropdownClass) {
      const {
        currentValue,
        previousValue
      } = changes.dropdownClass;
      this._applyCustomDropdownClass(currentValue, previousValue);
    }
    if (changes.autoClose && this._open) {
      this.autoClose = changes.autoClose.currentValue;
      this._setCloseHandlers();
    }
  }
  /**
   * Checks if the dropdown menu is open.
   */
  isOpen() {
    return this._open;
  }
  /**
   * Opens the dropdown menu.
   */
  open() {
    if (!this._open) {
      this._open = true;
      this._applyContainer(this.container);
      this.openChange.emit(true);
      this._setCloseHandlers();
      if (this._anchor) {
        this._anchor.nativeElement.focus();
        if (this.display === "dynamic") {
          this._ngZone.runOutsideAngular(() => {
            this._positioning.createPopper({
              hostElement: this._anchor.nativeElement,
              targetElement: this._bodyContainer || this._menu.nativeElement,
              placement: this.placement,
              updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
            });
            this._applyPlacementClasses();
            this._afterRenderRef = afterRender(() => {
              this._positionMenu();
            }, {
              phase: AfterRenderPhase.Write,
              injector: this._injector
            });
          });
        }
      }
    }
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, (source) => {
      this.close();
      if (source === 0) {
        this._anchor.nativeElement.focus();
      }
    }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], ".dropdown-item,.dropdown-divider");
  }
  /**
   * Closes the dropdown menu.
   */
  close() {
    if (this._open) {
      this._open = false;
      this._resetContainer();
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.openChange.emit(false);
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Toggles the dropdown menu.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  onKeyDown(event) {
    const {
      key
    } = event;
    const itemElements = this._getMenuElements();
    let position = -1;
    let itemElement = null;
    const isEventFromToggle = this._isEventFromToggle(event);
    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((item, index) => {
        if (item.contains(event.target)) {
          itemElement = item;
        }
        if (item === getActiveElement(this._document)) {
          position = index;
        }
      });
    }
    if (key === " " || key === "Enter") {
      if (itemElement && (this.autoClose === true || this.autoClose === "inside")) {
        fromEvent(itemElement, "click").pipe(take(1)).subscribe(() => this.close());
      }
      return;
    }
    if (key === "Tab") {
      if (event.target && this.isOpen() && this.autoClose) {
        if (this._anchor.nativeElement === event.target) {
          if (this.container === "body" && !event.shiftKey) {
            this._menu.nativeElement.setAttribute("tabindex", "0");
            this._menu.nativeElement.focus();
            this._menu.nativeElement.removeAttribute("tabindex");
          } else if (event.shiftKey) {
            this.close();
          }
          return;
        } else if (this.container === "body") {
          const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
          if (event.shiftKey && event.target === focusableElements[0]) {
            this._anchor.nativeElement.focus();
            event.preventDefault();
          } else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
            this._anchor.nativeElement.focus();
            this.close();
          }
        } else {
          fromEvent(event.target, "focusout").pipe(take(1)).subscribe(({
            relatedTarget
          }) => {
            if (!this._nativeElement.contains(relatedTarget)) {
              this.close();
            }
          });
        }
      }
      return;
    }
    if (isEventFromToggle || itemElement) {
      this.open();
      if (itemElements.length) {
        switch (key) {
          case "ArrowDown":
            position = Math.min(position + 1, itemElements.length - 1);
            break;
          case "ArrowUp":
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }
            position = Math.max(position - 1, 0);
            break;
          case "Home":
            position = 0;
            break;
          case "End":
            position = itemElements.length - 1;
            break;
        }
        itemElements[position].focus();
      }
      event.preventDefault();
    }
  }
  _isDropup() {
    return this._nativeElement.classList.contains("dropup");
  }
  _isEventFromToggle(event) {
    return this._anchor.nativeElement.contains(event.target);
  }
  _getMenuElements() {
    return this._menu ? this._menu.menuItems.filter(({
      disabled
    }) => !disabled).map(({
      nativeElement
    }) => nativeElement) : [];
  }
  _positionMenu() {
    const menu = this._menu;
    if (this.isOpen() && menu) {
      if (this.display === "dynamic") {
        this._positioning.update();
        this._applyPlacementClasses();
      } else {
        this._applyPlacementClasses(this._getFirstPlacement(this.placement));
      }
    }
  }
  _getFirstPlacement(placement) {
    return Array.isArray(placement) ? placement[0] : placement.split(" ")[0];
  }
  _resetContainer() {
    if (this._menu) {
      this._nativeElement.appendChild(this._menu.nativeElement);
    }
    if (this._bodyContainer) {
      this._document.body.removeChild(this._bodyContainer);
      this._bodyContainer = null;
    }
  }
  _applyContainer(container = null) {
    this._resetContainer();
    if (container === "body") {
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || this._document.createElement("div");
      bodyContainer.style.position = "absolute";
      dropdownMenuElement.style.position = "static";
      bodyContainer.style.zIndex = "1055";
      bodyContainer.appendChild(dropdownMenuElement);
      this._document.body.appendChild(bodyContainer);
    }
    this._applyCustomDropdownClass(this.dropdownClass);
  }
  _applyCustomDropdownClass(newClass, oldClass) {
    const targetElement = this.container === "body" ? this._bodyContainer : this._nativeElement;
    if (targetElement) {
      if (oldClass) {
        targetElement.classList.remove(oldClass);
      }
      if (newClass) {
        targetElement.classList.add(newClass);
      }
    }
  }
  _applyPlacementClasses(placement) {
    if (this._menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }
      this._nativeElement.classList.remove("dropup", "dropdown");
      if (this.display === "static") {
        this._menu.nativeElement.setAttribute("data-bs-popper", "static");
      } else {
        this._menu.nativeElement.removeAttribute("data-bs-popper");
      }
      const dropdownClass = placement.search("^top") !== -1 ? "dropup" : "dropdown";
      this._nativeElement.classList.add(dropdownClass);
      if (this._bodyContainer) {
        this._bodyContainer.classList.remove("dropup", "dropdown");
        this._bodyContainer.classList.add(dropdownClass);
      }
    }
  }
  static {
    this.\u0275fac = function NgbDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdown)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbDropdown,
      selectors: [["", "ngbDropdown", ""]],
      contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbDropdownMenu, 5);
          \u0275\u0275contentQuery(dirIndex, NgbDropdownAnchor, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._menu = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._anchor = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("show", ctx.isOpen());
        }
      },
      inputs: {
        autoClose: "autoClose",
        dropdownClass: "dropdownClass",
        _open: [0, "open", "_open"],
        placement: "placement",
        popperOptions: "popperOptions",
        container: "container",
        display: "display"
      },
      outputs: {
        openChange: "openChange"
      },
      exportAs: ["ngbDropdown"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdown, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdown]",
      exportAs: "ngbDropdown",
      standalone: true,
      host: {
        "[class.show]": "isOpen()"
      }
    }]
  }], null, {
    _menu: [{
      type: ContentChild,
      args: [NgbDropdownMenu, {
        static: false
      }]
    }],
    _anchor: [{
      type: ContentChild,
      args: [NgbDropdownAnchor, {
        static: false
      }]
    }],
    autoClose: [{
      type: Input
    }],
    dropdownClass: [{
      type: Input
    }],
    _open: [{
      type: Input,
      args: ["open"]
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem];
var NgbDropdownModule = class _NgbDropdownModule {
  static {
    this.\u0275fac = function NgbDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbDropdownModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownModule, [{
    type: NgModule,
    args: [{
      imports: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();
var NgbModalConfig = class _NgbModalConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.backdrop = true;
    this.fullscreen = false;
    this.keyboard = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbModalConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbModalConfig,
      factory: _NgbModalConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentRef = class {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
};
var PopupService = class {
  constructor(_componentType) {
    this._componentType = _componentType;
    this._windowRef = null;
    this._contentRef = null;
    this._document = inject(DOCUMENT);
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._viewContainerRef = inject(ViewContainerRef);
    this._ngZone = inject(NgZone);
  }
  open(content, templateContext, animation = false) {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, templateContext);
      this._windowRef = this._viewContainerRef.createComponent(this._componentType, {
        injector: this._injector,
        projectableNodes: this._contentRef.nodes
      });
    }
    const {
      nativeElement
    } = this._windowRef.location;
    const nextRenderSubject = new Subject();
    afterNextRender(() => {
      nextRenderSubject.next();
      nextRenderSubject.complete();
    }, {
      injector: this._injector,
      phase: AfterRenderPhase.MixedReadWrite
    });
    const transition$ = nextRenderSubject.pipe(mergeMap(() => ngbRunTransition(this._ngZone, nativeElement, ({
      classList
    }) => classList.add("show"), {
      animation,
      runningTransition: "continue"
    })));
    return {
      windowRef: this._windowRef,
      transition$
    };
  }
  close(animation = false) {
    if (!this._windowRef) {
      return of(void 0);
    }
    return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation,
      runningTransition: "stop"
    }).pipe(tap(() => {
      this._windowRef?.destroy();
      this._contentRef?.viewRef?.destroy();
      this._windowRef = null;
      this._contentRef = null;
    }));
  }
  _getContentRef(content, templateContext) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(templateContext);
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      return new ContentRef([[this._document.createTextNode(`${content}`)]]);
    }
  }
};
var ScrollBar = class _ScrollBar {
  constructor() {
    this._document = inject(DOCUMENT);
  }
  /**
   * To be called to hide a potential vertical scrollbar:
   * - if a scrollbar is there and has a width greater than 0, adds some compensation
   * padding to the body to keep the same layout as when the scrollbar is there
   * - adds overflow: hidden
   *
   * @return a callback used to revert the change
   */
  hide() {
    const scrollbarWidth = Math.abs(window.innerWidth - this._document.documentElement.clientWidth);
    const body = this._document.body;
    const bodyStyle = body.style;
    const {
      overflow,
      paddingRight
    } = bodyStyle;
    if (scrollbarWidth > 0) {
      const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
      bodyStyle.paddingRight = `${actualPadding + scrollbarWidth}px`;
    }
    bodyStyle.overflow = "hidden";
    return () => {
      if (scrollbarWidth > 0) {
        bodyStyle.paddingRight = paddingRight;
      }
      bodyStyle.overflow = overflow;
    };
  }
  static {
    this.\u0275fac = function ScrollBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollBar)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ScrollBar,
      factory: _ScrollBar.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbModalBackdrop = class _NgbModalBackdrop {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
  }
  ngOnInit() {
    afterNextRender(() => ngbRunTransition(this._zone, this._nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show");
    }, {
      animation: this.animation,
      runningTransition: "continue"
    }), {
      injector: this._injector,
      phase: AfterRenderPhase.MixedReadWrite
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation: this.animation,
      runningTransition: "stop"
    });
  }
  static {
    this.\u0275fac = function NgbModalBackdrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalBackdrop)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbModalBackdrop,
      selectors: [["ngb-modal-backdrop"]],
      hostAttrs: [2, "z-index", "1055"],
      hostVars: 6,
      hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap("modal-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
          \u0275\u0275classProp("show", !ctx.animation)("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        backdropClass: "backdropClass"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NgbModalBackdrop_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalBackdrop, [{
    type: Component,
    args: [{
      selector: "ngb-modal-backdrop",
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: "",
      host: {
        "[class]": '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
        "[class.show]": "!animation",
        "[class.fade]": "animation",
        style: "z-index: 1055"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    backdropClass: [{
      type: Input
    }]
  });
})();
var NgbActiveModal = class {
  /**
   * Updates options of an opened modal.
   *
   * @since 14.2.0
   */
  update(options) {
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbModalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
  }
};
var WINDOW_ATTRIBUTES = ["animation", "ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "fullscreen", "keyboard", "scrollable", "size", "windowClass", "modalDialogClass"];
var BACKDROP_ATTRIBUTES = ["animation", "backdropClass"];
var NgbModalRef = class {
  _applyWindowOptions(windowInstance, options) {
    WINDOW_ATTRIBUTES.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }
  _applyBackdropOptions(backdropInstance, options) {
    BACKDROP_ATTRIBUTES.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
  }
  /**
   * Updates options of an opened modal.
   *
   * @since 14.2.0
   */
  update(options) {
    this._applyWindowOptions(this._windowCmptRef.instance, options);
    if (this._backdropCmptRef && this._backdropCmptRef.instance) {
      this._applyBackdropOptions(this._backdropCmptRef.instance, options);
    }
  }
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the modal is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   *
   * @since 8.0.0
   */
  get closed() {
    return this._closed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when the modal is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   *
   * @since 8.0.0
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when both modal window and backdrop are closed and animations were finished.
   * At this point modal and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   *
   * @since 8.0.0
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when modal is fully visible and animation was finished.
   * Modal DOM element is always available synchronously after calling 'modal.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if modal is closed before open animation is finished.
   *
   * @since 8.0.0
   */
  get shown() {
    return this._windowCmptRef.instance.shown.asObservable();
  }
  constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._windowCmptRef = _windowCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new Subject();
    this._dismissed = new Subject();
    this._hidden = new Subject();
    _windowCmptRef.instance.dismissEvent.subscribe((reason) => {
      this.dismiss(reason);
    });
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {
    });
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._windowCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeModalElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeModalElements();
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._windowCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise2(dismiss)) {
          dismiss.then((result) => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {
          });
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeModalElements() {
    const windowTransition$ = this._windowCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(void 0);
    windowTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._windowCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._windowCmptRef.destroy();
      this._contentRef?.viewRef?.destroy();
      this._windowCmptRef = null;
      this._contentRef = null;
    });
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    zip(windowTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
};
var ModalDismissReasons;
(function(ModalDismissReasons2) {
  ModalDismissReasons2[ModalDismissReasons2["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  ModalDismissReasons2[ModalDismissReasons2["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
var NgbModalWindow = class _NgbModalWindow {
  constructor() {
    this._document = inject(DOCUMENT);
    this._elRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._closed$ = new Subject();
    this._elWithFocus = null;
    this.backdrop = true;
    this.keyboard = true;
    this.dismissEvent = new EventEmitter();
    this.shown = new Subject();
    this.hidden = new Subject();
  }
  get fullscreenClass() {
    return this.fullscreen === true ? " modal-fullscreen" : isString(this.fullscreen) ? ` modal-fullscreen-${this.fullscreen}-down` : "";
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    afterNextRender(() => this._show(), {
      injector: this._injector,
      phase: AfterRenderPhase.MixedReadWrite
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const {
      nativeElement
    } = this._elRef;
    const context = {
      animation: this.animation,
      runningTransition: "stop"
    };
    const windowTransition$ = ngbRunTransition(this._zone, nativeElement, () => nativeElement.classList.remove("show"), context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {
    }, context);
    const transitions$ = zip(windowTransition$, dialogTransition$);
    transitions$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return transitions$;
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: "continue"
    };
    const windowTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show");
    }, context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {
    }, context);
    zip(windowTransition$, dialogTransition$).subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      fromEvent(nativeElement, "keydown").pipe(takeUntil(this._closed$), filter((e) => e.key === "Escape")).subscribe((event) => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(ModalDismissReasons.ESC));
            }
          });
        } else if (this.backdrop === "static") {
          this._bumpBackdrop();
        }
      });
      let preventClose = false;
      fromEvent(this._dialogEl.nativeElement, "mousedown").pipe(takeUntil(this._closed$), tap(() => preventClose = false), switchMap(() => fromEvent(nativeElement, "mouseup").pipe(takeUntil(this._closed$), take(1))), filter(({
        target
      }) => nativeElement === target)).subscribe(() => {
        preventClose = true;
      });
      fromEvent(nativeElement, "click").pipe(takeUntil(this._closed$)).subscribe(({
        target
      }) => {
        if (nativeElement === target) {
          if (this.backdrop === "static") {
            this._bumpBackdrop();
          } else if (this.backdrop === true && !preventClose) {
            this._zone.run(() => this.dismiss(ModalDismissReasons.BACKDROP_CLICK));
          }
        }
        preventClose = false;
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus["focus"] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
  _bumpBackdrop() {
    if (this.backdrop === "static") {
      ngbRunTransition(this._zone, this._elRef.nativeElement, ({
        classList
      }) => {
        classList.add("modal-static");
        return () => classList.remove("modal-static");
      }, {
        animation: this.animation,
        runningTransition: "continue"
      });
    }
  }
  static {
    this.\u0275fac = function NgbModalWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalWindow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbModalWindow,
      selectors: [["ngb-modal-window"]],
      viewQuery: function NgbModalWindow_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c7, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._dialogEl = _t.first);
        }
      },
      hostAttrs: ["role", "dialog", "tabindex", "-1"],
      hostVars: 7,
      hostBindings: function NgbModalWindow_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
          \u0275\u0275classMap("modal d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
          \u0275\u0275classProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        ariaLabelledBy: "ariaLabelledBy",
        ariaDescribedBy: "ariaDescribedBy",
        backdrop: "backdrop",
        centered: "centered",
        fullscreen: "fullscreen",
        keyboard: "keyboard",
        scrollable: "scrollable",
        size: "size",
        windowClass: "windowClass",
        modalDialogClass: "modalDialogClass"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 4,
      vars: 2,
      consts: [["dialog", ""], ["role", "document"], [1, "modal-content"]],
      template: function NgbModalWindow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2);
          \u0275\u0275projection(3);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275classMap("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : "") + ctx.fullscreenClass + (ctx.scrollable ? " modal-dialog-scrollable" : "") + (ctx.modalDialogClass ? " " + ctx.modalDialogClass : ""));
        }
      },
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalWindow, [{
    type: Component,
    args: [{
      selector: "ngb-modal-window",
      standalone: true,
      host: {
        "[class]": '"modal d-block" + (windowClass ? " " + windowClass : "")',
        "[class.fade]": "animation",
        role: "dialog",
        tabindex: "-1",
        "[attr.aria-modal]": "true",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-describedby]": "ariaDescribedBy"
      },
      template: `
		<div
			#dialog
			[class]="
				'modal-dialog' +
				(size ? ' modal-' + size : '') +
				(centered ? ' modal-dialog-centered' : '') +
				fullscreenClass +
				(scrollable ? ' modal-dialog-scrollable' : '') +
				(modalDialogClass ? ' ' + modalDialogClass : '')
			"
			role="document"
		>
			<div class="modal-content"><ng-content /></div>
		</div>
	`,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"]
    }]
  }], null, {
    _dialogEl: [{
      type: ViewChild,
      args: ["dialog", {
        static: true
      }]
    }],
    animation: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    backdrop: [{
      type: Input
    }],
    centered: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    windowClass: [{
      type: Input
    }],
    modalDialogClass: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbModalStack = class _NgbModalStack {
  constructor() {
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._environmentInjector = inject(EnvironmentInjector);
    this._document = inject(DOCUMENT);
    this._scrollBar = inject(ScrollBar);
    this._activeWindowCmptHasChanged = new Subject();
    this._ariaHiddenValues = /* @__PURE__ */ new Map();
    this._scrollBarRestoreFn = null;
    this._modalRefs = [];
    this._windowCmpts = [];
    this._activeInstances = new EventEmitter();
    const ngZone = inject(NgZone);
    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(ngZone, activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || "body"}" was not found in the DOM.`);
    }
    this._hideScrollBar();
    const activeModal = new NgbActiveModal();
    contentInjector = options.injector || contentInjector;
    const environmentInjector = contentInjector.get(EnvironmentInjector, null) || this._environmentInjector;
    const contentRef = this._getContentRef(contentInjector, environmentInjector, content, activeModal, options);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : void 0;
    let windowCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerModalRef(ngbModalRef);
    this._registerWindowCmpt(windowCmptRef);
    ngbModalRef.hidden.pipe(take(1)).subscribe(() => Promise.resolve(true).then(() => {
      if (!this._modalRefs.length) {
        this._document.body.classList.remove("modal-open");
        this._restoreScrollBar();
        this._revertAriaHidden();
      }
    }));
    activeModal.close = (result) => {
      ngbModalRef.close(result);
    };
    activeModal.dismiss = (reason) => {
      ngbModalRef.dismiss(reason);
    };
    activeModal.update = (options2) => {
      ngbModalRef.update(options2);
    };
    ngbModalRef.update(options);
    if (this._modalRefs.length === 1) {
      this._document.body.classList.add("modal-open");
    }
    if (backdropCmptRef && backdropCmptRef.instance) {
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    windowCmptRef.changeDetectorRef.detectChanges();
    return ngbModalRef;
  }
  get activeInstances() {
    return this._activeInstances;
  }
  dismissAll(reason) {
    this._modalRefs.forEach((ngbModalRef) => ngbModalRef.dismiss(reason));
  }
  hasOpenModals() {
    return this._modalRefs.length > 0;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = createComponent(NgbModalBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let windowCmptRef = createComponent(NgbModalWindow, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }
  _getContentRef(contentInjector, environmentInjector, content, activeModal, options) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, environmentInjector, content, activeModal, options);
    }
  }
  _createFromTemplateRef(templateRef, activeModal) {
    const context = {
      $implicit: activeModal,
      close(result) {
        activeModal.close(result);
      },
      dismiss(reason) {
        activeModal.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, environmentInjector, componentType, context, options) {
    const elementInjector = Injector.create({
      providers: [{
        provide: NgbActiveModal,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = createComponent(componentType, {
      environmentInjector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    if (options.scrollable) {
      componentNativeEl.classList.add("component-host-scrollable");
    }
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _setAriaHidden(element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach((sibling) => {
        if (sibling !== element && sibling.nodeName !== "SCRIPT") {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      });
      this._setAriaHidden(parent);
    }
  }
  _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute("aria-hidden", value);
      } else {
        element.removeAttribute("aria-hidden");
      }
    });
    this._ariaHiddenValues.clear();
  }
  _registerModalRef(ngbModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(ngbModalRef);
      if (index > -1) {
        this._modalRefs.splice(index, 1);
        this._activeInstances.emit(this._modalRefs);
      }
    };
    this._modalRefs.push(ngbModalRef);
    this._activeInstances.emit(this._modalRefs);
    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }
  _registerWindowCmpt(ngbWindowCmpt) {
    this._windowCmpts.push(ngbWindowCmpt);
    this._activeWindowCmptHasChanged.next();
    ngbWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(ngbWindowCmpt);
      if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
      }
    });
  }
  static {
    this.\u0275fac = function NgbModalStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalStack)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbModalStack,
      factory: _NgbModalStack.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalStack, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbModal = class _NgbModal {
  constructor() {
    this._injector = inject(Injector);
    this._modalStack = inject(NgbModalStack);
    this._config = inject(NgbModalConfig);
  }
  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
   * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
   */
  open(content, options = {}) {
    const combinedOptions = __spreadValues(__spreadProps(__spreadValues({}, this._config), {
      animation: this._config.animation
    }), options);
    return this._modalStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active modal instances.
   */
  get activeInstances() {
    return this._modalStack.activeInstances;
  }
  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */
  dismissAll(reason) {
    this._modalStack.dismissAll(reason);
  }
  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */
  hasOpenModals() {
    return this._modalStack.hasOpenModals();
  }
  static {
    this.\u0275fac = function NgbModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModal)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbModal,
      factory: _NgbModal.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModal, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbModalModule = class _NgbModalModule {
  static {
    this.\u0275fac = function NgbModalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbModalModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [NgbModal]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalModule, [{
    type: NgModule,
    args: [{
      providers: [NgbModal]
    }]
  }], null, null);
})();
var NgbNavConfig = class _NgbNavConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.destroyOnHide = true;
    this.orientation = "horizontal";
    this.roles = "tablist";
    this.keyboard = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbNavConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbNavConfig,
      factory: _NgbNavConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var isValidNavId = (id) => isDefined(id) && id !== "";
var navCounter = 0;
var NgbNavContent = class _NgbNavContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbNavContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavContent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavContent,
      selectors: [["ng-template", "ngbNavContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbNavContent]",
      standalone: true
    }]
  }], null, null);
})();
var NgbNavItemRole = class _NgbNavItemRole {
  constructor(role) {
    this.role = role;
    this.nav = inject(NgbNav);
  }
  static {
    this.\u0275fac = function NgbNavItemRole_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItemRole)(\u0275\u0275injectAttribute("role"));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavItemRole,
      selectors: [["", "ngbNavItem", "", 5, "ng-container"]],
      hostVars: 1,
      hostBindings: function NgbNavItemRole_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "presentation" : void 0);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItemRole, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]:not(ng-container)",
      standalone: true,
      host: {
        "[attr.role]": `role ? role : nav.roles ? 'presentation' : undefined`
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavItem = class _NgbNavItem {
  constructor() {
    this._nav = inject(NgbNav);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.disabled = false;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  ngOnInit() {
    if (!isDefined(this.domId)) {
      this.domId = `ngb-nav-${navCounter++}`;
    }
  }
  get active() {
    return this._nav.activeId === this.id;
  }
  get id() {
    return isValidNavId(this._id) ? this._id : this.domId;
  }
  get panelDomId() {
    return `${this.domId}-panel`;
  }
  isPanelInDom() {
    return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
  }
  /**
   * @internal
   */
  isNgContainer() {
    return this._nativeElement.nodeType === Node.COMMENT_NODE;
  }
  static {
    this.\u0275fac = function NgbNavItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavItem,
      selectors: [["", "ngbNavItem", ""]],
      contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbNavContent, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTpl = _t.first);
        }
      },
      hostAttrs: [1, "nav-item"],
      inputs: {
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        domId: "domId",
        _id: [0, "ngbNavItem", "_id"]
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbNavItem"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItem, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]",
      exportAs: "ngbNavItem",
      standalone: true,
      host: {
        class: "nav-item"
      }
    }]
  }], null, {
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    domId: [{
      type: Input
    }],
    _id: [{
      type: Input,
      args: ["ngbNavItem"]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    contentTpl: [{
      type: ContentChild,
      args: [NgbNavContent, {
        descendants: false
      }]
    }]
  });
})();
var NgbNav = class _NgbNav {
  constructor(role) {
    this.role = role;
    this._config = inject(NgbNavConfig);
    this._cd = inject(ChangeDetectorRef);
    this._document = inject(DOCUMENT);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.destroyRef = inject(DestroyRef);
    this._navigatingWithKeyboard = false;
    this.activeIdChange = new EventEmitter();
    this.animation = this._config.animation;
    this.destroyOnHide = this._config.destroyOnHide;
    this.orientation = this._config.orientation;
    this.roles = this._config.roles;
    this.keyboard = this._config.keyboard;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.navItemChange$ = new Subject();
    this.navChange = new EventEmitter();
  }
  click(item) {
    if (!item.disabled) {
      this._updateActiveId(item.id);
    }
  }
  onFocusout({
    relatedTarget
  }) {
    if (!this._nativeElement.contains(relatedTarget)) {
      this._navigatingWithKeyboard = false;
    }
  }
  onKeyDown(event) {
    if (this.roles !== "tablist" || !this.keyboard) {
      return;
    }
    const enabledLinks = this.links.filter((link) => !link.navItem.disabled);
    const {
      length
    } = enabledLinks;
    let position = -1;
    enabledLinks.forEach((link, index) => {
      if (link.nativeElement === this._document.activeElement) {
        position = index;
      }
    });
    if (length) {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          position = (position - 1 + length) % length;
          break;
        case "ArrowRight":
        case "ArrowDown":
          position = (position + 1) % length;
          break;
        case "Home":
          position = 0;
          break;
        case "End":
          position = length - 1;
          break;
      }
      if (this.keyboard === "changeWithArrows") {
        this.select(enabledLinks[position].navItem.id);
      }
      enabledLinks[position].nativeElement.focus();
      this._navigatingWithKeyboard = true;
      event.preventDefault();
    }
  }
  /**
   * Selects the nav with the given id and shows its associated pane.
   * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
   */
  select(id) {
    this._updateActiveId(id, false);
  }
  ngAfterContentInit() {
    if (!isDefined(this.activeId)) {
      const nextId2 = this.items.first ? this.items.first.id : null;
      if (isValidNavId(nextId2)) {
        this._updateActiveId(nextId2, false);
        this._cd.detectChanges();
      }
    }
    this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this._notifyItemChanged(this.activeId));
  }
  ngOnChanges({
    activeId
  }) {
    if (activeId && !activeId.firstChange) {
      this._notifyItemChanged(activeId.currentValue);
    }
  }
  _updateActiveId(nextId2, emitNavChange = true) {
    if (this.activeId !== nextId2) {
      let defaultPrevented = false;
      if (emitNavChange) {
        this.navChange.emit({
          activeId: this.activeId,
          nextId: nextId2,
          preventDefault: () => {
            defaultPrevented = true;
          }
        });
      }
      if (!defaultPrevented) {
        this.activeId = nextId2;
        this.activeIdChange.emit(nextId2);
        this._notifyItemChanged(nextId2);
      }
    }
  }
  _notifyItemChanged(nextItemId) {
    this.navItemChange$.next(this._getItemById(nextItemId));
  }
  _getItemById(itemId) {
    return this.items && this.items.find((item) => item.id === itemId) || null;
  }
  static {
    this.\u0275fac = function NgbNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNav)(\u0275\u0275injectAttribute("role"));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNav,
      selectors: [["", "ngbNav", ""]],
      contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbNavItem, 4);
          \u0275\u0275contentQuery(dirIndex, NgbNavLinkBase, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
        }
      },
      hostAttrs: [1, "nav"],
      hostVars: 4,
      hostBindings: function NgbNav_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("focusout", function NgbNav_focusout_HostBindingHandler($event) {
            return ctx.onFocusout($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : void 0)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : void 0);
          \u0275\u0275classProp("flex-column", ctx.orientation === "vertical");
        }
      },
      inputs: {
        activeId: "activeId",
        animation: "animation",
        destroyOnHide: "destroyOnHide",
        orientation: "orientation",
        roles: "roles",
        keyboard: "keyboard"
      },
      outputs: {
        activeIdChange: "activeIdChange",
        shown: "shown",
        hidden: "hidden",
        navChange: "navChange"
      },
      exportAs: ["ngbNav"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNav, [{
    type: Directive,
    args: [{
      selector: "[ngbNav]",
      exportAs: "ngbNav",
      standalone: true,
      host: {
        class: "nav",
        "[class.flex-column]": `orientation === 'vertical'`,
        "[attr.aria-orientation]": `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
        "[attr.role]": `role ? role : roles ? 'tablist' : undefined`,
        "(keydown.arrowLeft)": "onKeyDown($event)",
        "(keydown.arrowRight)": "onKeyDown($event)",
        "(keydown.arrowDown)": "onKeyDown($event)",
        "(keydown.arrowUp)": "onKeyDown($event)",
        "(keydown.Home)": "onKeyDown($event)",
        "(keydown.End)": "onKeyDown($event)",
        "(focusout)": "onFocusout($event)"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], {
    activeId: [{
      type: Input
    }],
    activeIdChange: [{
      type: Output
    }],
    animation: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    roles: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    items: [{
      type: ContentChildren,
      args: [NgbNavItem]
    }],
    links: [{
      type: ContentChildren,
      args: [forwardRef(() => NgbNavLinkBase), {
        descendants: true
      }]
    }],
    navChange: [{
      type: Output
    }]
  });
})();
var NgbNavLinkBase = class _NgbNavLinkBase {
  constructor(role) {
    this.role = role;
    this.navItem = inject(NgbNavItem);
    this.nav = inject(NgbNav);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  get tabindex() {
    if (this.nav.keyboard === false) {
      return this.navItem.disabled ? -1 : void 0;
    }
    if (this.nav._navigatingWithKeyboard) {
      return -1;
    }
    return this.navItem.disabled || !this.navItem.active ? -1 : void 0;
  }
  static {
    this.\u0275fac = function NgbNavLinkBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavLinkBase)(\u0275\u0275injectAttribute("role"));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavLinkBase,
      selectors: [["", "ngbNavLink", ""]],
      hostAttrs: [1, "nav-link"],
      hostVars: 12,
      hostBindings: function NgbNavLinkBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.navItem.domId);
          \u0275\u0275attribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : void 0)("tabindex", ctx.tabindex)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
          \u0275\u0275classProp("nav-item", ctx.navItem.isNgContainer())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkBase, [{
    type: Directive,
    args: [{
      selector: "[ngbNavLink]",
      standalone: true,
      host: {
        "[id]": "navItem.domId",
        class: "nav-link",
        "[class.nav-item]": "navItem.isNgContainer()",
        "[attr.role]": `role ? role : nav.roles ? 'tab' : undefined`,
        "[class.active]": "navItem.active",
        "[class.disabled]": "navItem.disabled",
        "[attr.tabindex]": "tabindex",
        "[attr.aria-controls]": "navItem.isPanelInDom() ? navItem.panelDomId : null",
        "[attr.aria-selected]": "navItem.active",
        "[attr.aria-disabled]": "navItem.disabled"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavLinkButton = class _NgbNavLinkButton extends NgbNavLinkBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbNavLinkButton_BaseFactory;
      return function NgbNavLinkButton_Factory(__ngFactoryType__) {
        return (\u0275NgbNavLinkButton_BaseFactory || (\u0275NgbNavLinkButton_BaseFactory = \u0275\u0275getInheritedFactory(_NgbNavLinkButton)))(__ngFactoryType__ || _NgbNavLinkButton);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavLinkButton,
      selectors: [["button", "ngbNavLink", ""]],
      hostAttrs: ["type", "button"],
      hostVars: 1,
      hostBindings: function NgbNavLinkButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgbNavLinkButton_click_HostBindingHandler() {
            return ctx.nav.click(ctx.navItem);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("disabled", ctx.navItem.disabled);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbNavLink]",
      standalone: true,
      host: {
        type: "button",
        "[disabled]": "navItem.disabled",
        "(click)": "nav.click(navItem)"
      }
    }]
  }], null, null);
})();
var NgbNavLink = class _NgbNavLink extends NgbNavLinkBase {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbNavLink_BaseFactory;
      return function NgbNavLink_Factory(__ngFactoryType__) {
        return (\u0275NgbNavLink_BaseFactory || (\u0275NgbNavLink_BaseFactory = \u0275\u0275getInheritedFactory(_NgbNavLink)))(__ngFactoryType__ || _NgbNavLink);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavLink,
      selectors: [["a", "ngbNavLink", ""]],
      hostAttrs: ["href", ""],
      hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgbNavLink_click_HostBindingHandler($event) {
            ctx.nav.click(ctx.navItem);
            return $event.preventDefault();
          });
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLink, [{
    type: Directive,
    args: [{
      selector: "a[ngbNavLink]",
      standalone: true,
      host: {
        href: "",
        "(click)": "nav.click(navItem); $event.preventDefault()"
      }
    }]
  }], null, null);
})();
var ngbNavFadeOutTransition = ({
  classList
}) => {
  classList.remove("show");
  return () => classList.remove("active");
};
var ngbNavFadeInTransition = (element, animation) => {
  if (animation) {
    reflow(element);
  }
  element.classList.add("show");
};
var NgbNavPane = class _NgbNavPane {
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.\u0275fac = function NgbNavPane_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavPane)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbNavPane,
      selectors: [["", "ngbNavPane", ""]],
      hostAttrs: [1, "tab-pane"],
      hostVars: 5,
      hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.item.panelDomId);
          \u0275\u0275attribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : void 0)("aria-labelledby", ctx.item.domId);
          \u0275\u0275classProp("fade", ctx.nav.animation);
        }
      },
      inputs: {
        item: "item",
        nav: "nav",
        role: "role"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavPane, [{
    type: Directive,
    args: [{
      selector: "[ngbNavPane]",
      standalone: true,
      host: {
        "[id]": "item.panelDomId",
        class: "tab-pane",
        "[class.fade]": "nav.animation",
        "[attr.role]": 'role ? role : nav.roles ? "tabpanel" : undefined',
        "[attr.aria-labelledby]": "item.domId"
      }
    }]
  }], null, {
    item: [{
      type: Input
    }],
    nav: [{
      type: Input
    }],
    role: [{
      type: Input
    }]
  });
})();
var NgbNavOutlet = class _NgbNavOutlet {
  constructor() {
    this._cd = inject(ChangeDetectorRef);
    this._ngZone = inject(NgZone);
    this._activePane = null;
  }
  isPanelTransitioning(item) {
    return this._activePane?.item === item;
  }
  ngAfterViewInit() {
    this._updateActivePane();
    this.nav.navItemChange$.pipe(takeUntilDestroyed(this.nav.destroyRef), startWith(this._activePane?.item || null), distinctUntilChanged(), skip(1)).subscribe((nextItem) => {
      const options = {
        animation: this.nav.animation,
        runningTransition: "stop"
      };
      this._cd.detectChanges();
      if (this._activePane) {
        ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
          const activeItem = this._activePane?.item;
          this._activePane = this._getPaneForItem(nextItem);
          this._cd.markForCheck();
          if (this._activePane) {
            this._activePane.nativeElement.classList.add("active");
            ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
              if (nextItem) {
                nextItem.shown.emit();
                this.nav.shown.emit(nextItem.id);
              }
            });
          }
          if (activeItem) {
            activeItem.hidden.emit();
            this.nav.hidden.emit(activeItem.id);
          }
        });
      } else {
        this._updateActivePane();
      }
    });
  }
  _updateActivePane() {
    this._activePane = this._getActivePane();
    this._activePane?.nativeElement.classList.add("show", "active");
  }
  _getPaneForItem(item) {
    return this._panes && this._panes.find((pane) => pane.item === item) || null;
  }
  _getActivePane() {
    return this._panes && this._panes.find((pane) => pane.item.active) || null;
  }
  static {
    this.\u0275fac = function NgbNavOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavOutlet)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbNavOutlet,
      selectors: [["", "ngbNavOutlet", ""]],
      viewQuery: function NgbNavOutlet_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(NgbNavPane, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._panes = _t);
        }
      },
      hostAttrs: [1, "tab-content"],
      inputs: {
        paneRole: "paneRole",
        nav: [0, "ngbNavOutlet", "nav"]
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      attrs: _c8,
      decls: 2,
      vars: 0,
      consts: [["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbNavOutlet_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, NgbNavOutlet_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.nav.items);
        }
      },
      dependencies: [NgbNavPane, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavOutlet, [{
    type: Component,
    args: [{
      selector: "[ngbNavOutlet]",
      standalone: true,
      imports: [NgbNavPane, NgTemplateOutlet],
      host: {
        class: "tab-content"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`
    }]
  }], null, {
    _panes: [{
      type: ViewChildren,
      args: [NgbNavPane]
    }],
    paneRole: [{
      type: Input
    }],
    nav: [{
      type: Input,
      args: ["ngbNavOutlet"]
    }]
  });
})();
var NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane];
var NgbNavModule = class _NgbNavModule {
  static {
    this.\u0275fac = function NgbNavModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbNavModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavModule, [{
    type: NgModule,
    args: [{
      imports: NGB_NAV_DIRECTIVES,
      exports: NGB_NAV_DIRECTIVES
    }]
  }], null, null);
})();
var NgbPaginationConfig = class _NgbPaginationConfig {
  constructor() {
    this.disabled = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.ellipses = true;
    this.maxSize = 0;
    this.pageSize = 10;
    this.rotate = false;
  }
  static {
    this.\u0275fac = function NgbPaginationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbPaginationConfig,
      factory: _NgbPaginationConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbPaginationEllipsis = class _NgbPaginationEllipsis {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationEllipsis_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationEllipsis)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationEllipsis,
      selectors: [["ng-template", "ngbPaginationEllipsis", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationEllipsis, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationEllipsis]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationFirst = class _NgbPaginationFirst {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationFirst_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationFirst)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationFirst,
      selectors: [["ng-template", "ngbPaginationFirst", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationFirst, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationFirst]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationLast = class _NgbPaginationLast {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationLast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationLast)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationLast,
      selectors: [["ng-template", "ngbPaginationLast", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationLast, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationLast]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationNext = class _NgbPaginationNext {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationNext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNext)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationNext,
      selectors: [["ng-template", "ngbPaginationNext", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNext, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNext]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationNumber = class _NgbPaginationNumber {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationNumber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNumber)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationNumber,
      selectors: [["ng-template", "ngbPaginationNumber", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNumber, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNumber]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationPrevious = class _NgbPaginationPrevious {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationPrevious_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPrevious)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationPrevious,
      selectors: [["ng-template", "ngbPaginationPrevious", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPrevious, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPrevious]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPaginationPages = class _NgbPaginationPages {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgbPaginationPages_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPages)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPaginationPages,
      selectors: [["ng-template", "ngbPaginationPages", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPages, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPages]",
      standalone: true
    }]
  }], null, null);
})();
var NgbPagination = class _NgbPagination {
  constructor() {
    this._config = inject(NgbPaginationConfig);
    this.pageCount = 0;
    this.pages = [];
    this.disabled = this._config.disabled;
    this.boundaryLinks = this._config.boundaryLinks;
    this.directionLinks = this._config.directionLinks;
    this.ellipses = this._config.ellipses;
    this.rotate = this._config.rotate;
    this.maxSize = this._config.maxSize;
    this.page = 1;
    this.pageSize = this._config.pageSize;
    this.pageChange = new EventEmitter(true);
    this.size = this._config.size;
  }
  hasPrevious() {
    return this.page > 1;
  }
  hasNext() {
    return this.page < this.pageCount;
  }
  nextDisabled() {
    return !this.hasNext() || this.disabled;
  }
  previousDisabled() {
    return !this.hasPrevious() || this.disabled;
  }
  selectPage(pageNumber) {
    this._updatePages(pageNumber);
  }
  ngOnChanges(changes) {
    this._updatePages(this.page);
  }
  isEllipsis(pageNumber) {
    return pageNumber === -1;
  }
  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  _applyEllipses(start2, end2) {
    if (this.ellipses) {
      if (start2 > 0) {
        if (start2 > 2) {
          this.pages.unshift(-1);
        } else if (start2 === 2) {
          this.pages.unshift(2);
        }
        this.pages.unshift(1);
      }
      if (end2 < this.pageCount) {
        if (end2 < this.pageCount - 2) {
          this.pages.push(-1);
        } else if (end2 === this.pageCount - 2) {
          this.pages.push(this.pageCount - 1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }
  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  _applyRotation() {
    let start2 = 0;
    let end2 = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (this.page <= leftOffset) {
      end2 = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      start2 = this.pageCount - this.maxSize;
    } else {
      start2 = this.page - leftOffset - 1;
      end2 = this.page + rightOffset;
    }
    return [start2, end2];
  }
  /**
   * Paginates page numbers based on maxSize items per page.
   */
  _applyPagination() {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start2 = page * this.maxSize;
    let end2 = start2 + this.maxSize;
    return [start2, end2];
  }
  _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);
    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }
  _updatePages(newPage) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
    this._setPageInRange(newPage);
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start2 = 0;
      let end2 = this.pageCount;
      if (this.rotate) {
        [start2, end2] = this._applyRotation();
      } else {
        [start2, end2] = this._applyPagination();
      }
      this.pages = this.pages.slice(start2, end2);
      this._applyEllipses(start2, end2);
    }
  }
  static {
    this.\u0275fac = function NgbPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPagination)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbPagination,
      selectors: [["ngb-pagination"]],
      contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbPaginationEllipsis, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationFirst, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationLast, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationNext, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationNumber, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationPrevious, 5);
          \u0275\u0275contentQuery(dirIndex, NgbPaginationPages, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplEllipsis = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplFirst = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplLast = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplNext = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplNumber = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplPrevious = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tplPages = _t.first);
        }
      },
      hostAttrs: ["role", "navigation"],
      inputs: {
        disabled: "disabled",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        ellipses: "ellipses",
        rotate: "rotate",
        collectionSize: "collectionSize",
        maxSize: "maxSize",
        page: "page",
        pageSize: "pageSize",
        size: "size"
      },
      outputs: {
        pageChange: "pageChange"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 20,
      vars: 12,
      consts: () => {
        let i18n_12;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_12 = goog.getMsg("\xAB\xAB");
          i18n_12 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_12;
        } else {
          i18n_12 = $localize`:@@ngb.pagination.first:««`;
        }
        let i18n_13;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_13 = goog.getMsg("\xAB");
          i18n_13 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_13;
        } else {
          i18n_13 = $localize`:@@ngb.pagination.previous:«`;
        }
        let i18n_14;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_14 = goog.getMsg("\xBB");
          i18n_14 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_14;
        } else {
          i18n_14 = $localize`:@@ngb.pagination.next:»`;
        }
        let i18n_15;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_15 = goog.getMsg("\xBB\xBB");
          i18n_15 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_15;
        } else {
          i18n_15 = $localize`:@@ngb.pagination.last:»»`;
        }
        let i18n_16;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_16 = goog.getMsg("First");
          i18n_16 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_16;
        } else {
          i18n_16 = $localize`:@@ngb.pagination.first-aria:First`;
        }
        let i18n_17;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_17 = goog.getMsg("Previous");
          i18n_17 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_17;
        } else {
          i18n_17 = $localize`:@@ngb.pagination.previous-aria:Previous`;
        }
        let i18n_18;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_18 = goog.getMsg("Next");
          i18n_18 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_18;
        } else {
          i18n_18 = $localize`:@@ngb.pagination.next-aria:Next`;
        }
        let i18n_19;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_19 = goog.getMsg("Last");
          i18n_19 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_19;
        } else {
          i18n_19 = $localize`:@@ngb.pagination.last-aria:Last`;
        }
        return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], i18n_12, i18n_13, i18n_14, i18n_15, [1, "page-item", 3, "disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_16, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_17, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_18, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_19, "href", "", 1, "page-link", 3, "click"]];
      },
      template: function NgbPagination_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(10, NgbPagination_ng_template_10_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(12, NgbPagination_ng_template_12_Template, 2, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
          \u0275\u0275elementStart(14, "ul");
          \u0275\u0275template(15, NgbPagination_Conditional_15_Template, 3, 9, "li", 11)(16, NgbPagination_Conditional_16_Template, 3, 8, "li", 11)(17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 12)(18, NgbPagination_Conditional_18_Template, 3, 9, "li", 11)(19, NgbPagination_Conditional_19_Template, 3, 9, "li", 11);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          const defaultPages_r19 = \u0275\u0275reference(13);
          \u0275\u0275advance(14);
          \u0275\u0275classMap("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.boundaryLinks ? 15 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.directionLinks ? 16 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || defaultPages_r19)("ngTemplateOutletContext", \u0275\u0275pureFunction3(8, _c9, ctx.page, ctx.pages, ctx.disabled));
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.directionLinks ? 18 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.boundaryLinks ? 19 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPagination, [{
    type: Component,
    args: [{
      selector: "ngb-pagination",
      standalone: true,
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        role: "navigation"
      },
      template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">{{ page }}</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			@for (pageNumber of pages; track $index) {
				<li
					class="page-item"
					[class.active]="pageNumber === page"
					[class.disabled]="isEllipsis(pageNumber) || disabled"
					[attr.aria-current]="pageNumber === page ? 'page' : null"
				>
					@if (isEllipsis(pageNumber)) {
						<a class="page-link" tabindex="-1" aria-disabled="true">
							<ng-template
								[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
								[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
							/>
						</a>
					} @else {
						<a
							class="page-link"
							href
							(click)="selectPage(pageNumber); $event.preventDefault()"
							[attr.tabindex]="disabled ? '-1' : null"
							[attr.aria-disabled]="disabled ? 'true' : null"
						>
							<ng-template
								[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
								[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
							/>
						</a>
					}
				</li>
			}
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="First"
						i18n-aria-label="@@ngb.pagination.first-aria"
						class="page-link"
						href
						(click)="selectPage(1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplFirst?.templateRef || first"
							[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="Previous"
						i18n-aria-label="@@ngb.pagination.previous-aria"
						class="page-link"
						href
						(click)="selectPage(page - 1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
							[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
						/>
					</a>
				</li>
			}
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			/>
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Next"
						i18n-aria-label="@@ngb.pagination.next-aria"
						class="page-link"
						href
						(click)="selectPage(page + 1); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplNext?.templateRef || next"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Last"
						i18n-aria-label="@@ngb.pagination.last-aria"
						class="page-link"
						href
						(click)="selectPage(pageCount); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplLast?.templateRef || last"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
		</ul>
	`
    }]
  }], null, {
    tplEllipsis: [{
      type: ContentChild,
      args: [NgbPaginationEllipsis, {
        static: false
      }]
    }],
    tplFirst: [{
      type: ContentChild,
      args: [NgbPaginationFirst, {
        static: false
      }]
    }],
    tplLast: [{
      type: ContentChild,
      args: [NgbPaginationLast, {
        static: false
      }]
    }],
    tplNext: [{
      type: ContentChild,
      args: [NgbPaginationNext, {
        static: false
      }]
    }],
    tplNumber: [{
      type: ContentChild,
      args: [NgbPaginationNumber, {
        static: false
      }]
    }],
    tplPrevious: [{
      type: ContentChild,
      args: [NgbPaginationPrevious, {
        static: false
      }]
    }],
    tplPages: [{
      type: ContentChild,
      args: [NgbPaginationPages, {
        static: false
      }]
    }],
    disabled: [{
      type: Input
    }],
    boundaryLinks: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    ellipses: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    collectionSize: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    maxSize: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var NGB_PAGINATION_DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages];
var NgbPaginationModule = class _NgbPaginationModule {
  static {
    this.\u0275fac = function NgbPaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbPaginationModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationModule, [{
    type: NgModule,
    args: [{
      imports: NGB_PAGINATION_DIRECTIVES,
      exports: NGB_PAGINATION_DIRECTIVES
    }]
  }], null, null);
})();
var ALIASES = {
  hover: ["mouseenter", "mouseleave"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger) => trigger.split(":")).map((triggerPair) => ALIASES[triggerPair[0]] || triggerPair);
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.includes("manual"));
  if (manualTriggers.length > 1) {
    throw `Triggers parse error: only one manual trigger is allowed`;
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw `Triggers parse error: manual trigger can't be mixed with other triggers`;
  }
  return manualTriggers.length ? [] : parsedTriggers;
}
function listenToTriggers(element, triggers, isOpenedFn, openFn, closeFn, openDelayMs = 0, closeDelayMs = 0) {
  const parsedTriggers = parseTriggers(triggers);
  if (parsedTriggers.length === 0) {
    return () => {
    };
  }
  const activeOpenTriggers = /* @__PURE__ */ new Set();
  const cleanupFns = [];
  let timeout;
  function addEventListener(name, listener) {
    element.addEventListener(name, listener);
    cleanupFns.push(() => element.removeEventListener(name, listener));
  }
  function withDelay(fn2, delayMs) {
    clearTimeout(timeout);
    if (delayMs > 0) {
      timeout = setTimeout(fn2, delayMs);
    } else {
      fn2();
    }
  }
  for (const [openTrigger, closeTrigger] of parsedTriggers) {
    if (!closeTrigger) {
      addEventListener(openTrigger, () => isOpenedFn() ? withDelay(closeFn, closeDelayMs) : withDelay(openFn, openDelayMs));
    } else {
      addEventListener(openTrigger, () => {
        activeOpenTriggers.add(openTrigger);
        withDelay(() => activeOpenTriggers.size > 0 && openFn(), openDelayMs);
      });
      addEventListener(closeTrigger, () => {
        activeOpenTriggers.delete(openTrigger);
        withDelay(() => activeOpenTriggers.size === 0 && closeFn(), closeDelayMs);
      });
    }
  }
  return () => cleanupFns.forEach((cleanupFn) => cleanupFn());
}
var NgbPopoverConfig = class _NgbPopoverConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "click";
    this.disablePopover = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbPopoverConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbPopoverConfig,
      factory: _NgbPopoverConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId$1 = 0;
var NgbPopoverWindow = class _NgbPopoverWindow {
  isTitleTemplate() {
    return this.title instanceof TemplateRef;
  }
  static {
    this.\u0275fac = function NgbPopoverWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverWindow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbPopoverWindow,
      selectors: [["ngb-popover-window"]],
      hostAttrs: ["role", "tooltip", 2, "position", "absolute"],
      hostVars: 5,
      hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275classMap("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
          \u0275\u0275classProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        title: "title",
        id: "id",
        popoverClass: "popoverClass",
        context: "context"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 4,
      vars: 1,
      consts: [["simpleTitle", ""], ["data-popper-arrow", "", 1, "popover-arrow"], [1, "popover-header"], [1, "popover-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbPopoverWindow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275element(0, "div", 1);
          \u0275\u0275template(1, NgbPopoverWindow_Conditional_1_Template, 4, 2, "h3", 2);
          \u0275\u0275elementStart(2, "div", 3);
          \u0275\u0275projection(3);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.title ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverWindow, [{
    type: Component,
    args: [{
      selector: "ngb-popover-window",
      standalone: true,
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": '"popover" + (popoverClass ? " " + popoverClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id",
        style: "position: absolute;"
      },
      template: `
		<div class="popover-arrow" data-popper-arrow></div>
		@if (title) {
			<h3 class="popover-header">
				<ng-template #simpleTitle>{{ title }}</ng-template>
				<ng-template
					[ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle"
					[ngTemplateOutletContext]="context"
				/>
			</h3>
		}
		<div class="popover-body">
			<ng-content />
		</div>
	`
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    context: [{
      type: Input
    }]
  });
})();
var NgbPopover = class _NgbPopover {
  constructor() {
    this._config = inject(NgbPopoverConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disablePopover = this._config.disablePopover;
    this.popoverClass = this._config.popoverClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbPopoverWindowId = `ngb-popover-${nextId$1++}`;
    this._popupService = new PopupService(NgbPopoverWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
  }
  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */
  open(context) {
    if (!this._windowRef && !this._isDisabled()) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this.ngbPopover, context ?? this.popoverContext, this.animation);
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("title", this.popoverTitle);
      this._windowRef.setInput("context", context ?? this.popoverContext);
      this._windowRef.setInput("popoverClass", this.popoverClass);
      this._windowRef.setInput("id", this._ngbPopoverWindowId);
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbPopoverWindowId);
      if (this.container === "body") {
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          baseClass: "bs-popover",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 8])(options))
        });
        Promise.resolve().then(() => {
          this._positioning.update();
        });
        this._afterRenderRef = afterRender(() => {
          this._positioning.update();
        }, {
          phase: AfterRenderPhase.MixedReadWrite,
          injector: this._injector
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  close(animation = this.animation) {
    if (this._windowRef) {
      this._getPositionTargetElement().removeAttribute("aria-describedby");
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._afterRenderRef?.destroy();
        this.hidden.emit();
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }
  ngOnChanges({
    ngbPopover,
    popoverTitle,
    disablePopover,
    popoverClass
  }) {
    if (popoverClass && this.isOpen()) {
      this._windowRef.setInput("popoverClass", popoverClass.currentValue);
    }
    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _isDisabled() {
    return this.disablePopover ? true : !this.ngbPopover && !this.popoverTitle;
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.\u0275fac = function NgbPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopover)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbPopover,
      selectors: [["", "ngbPopover", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        ngbPopover: "ngbPopover",
        popoverTitle: "popoverTitle",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disablePopover: "disablePopover",
        popoverClass: "popoverClass",
        popoverContext: "popoverContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbPopover"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopover, [{
    type: Directive,
    args: [{
      selector: "[ngbPopover]",
      exportAs: "ngbPopover",
      standalone: true
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    ngbPopover: [{
      type: Input
    }],
    popoverTitle: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    disablePopover: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    popoverContext: [{
      type: Input
    }],
    openDelay: [{
      type: Input
    }],
    closeDelay: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbPopoverModule = class _NgbPopoverModule {
  static {
    this.\u0275fac = function NgbPopoverModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbPopoverModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NgbPopover],
      exports: [NgbPopover]
    }]
  }], null, null);
})();
var NgbProgressbarConfig = class _NgbProgressbarConfig {
  constructor() {
    this.max = 100;
    this.animated = false;
    this.ariaLabel = "progress bar";
    this.striped = false;
    this.showValue = false;
  }
  static {
    this.\u0275fac = function NgbProgressbarConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbProgressbarConfig,
      factory: _NgbProgressbarConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbProgressbar = class _NgbProgressbar {
  /**
   * The maximal value to be displayed in the progress bar.
   *
   * Should be a positive number. Will default to 100 otherwise.
   */
  set max(max2) {
    this._max = !isNumber(max2) || max2 <= 0 ? 100 : max2;
  }
  get max() {
    return this._max;
  }
  constructor() {
    this._config = inject(NgbProgressbarConfig);
    this.stacked = inject(NgbProgressbarStacked, {
      optional: true
    });
    this.animated = this._config.animated;
    this.ariaLabel = this._config.ariaLabel;
    this.striped = this._config.striped;
    this.showValue = this._config.showValue;
    this.textType = this._config.textType;
    this.type = this._config.type;
    this.value = 0;
    this.height = this._config.height;
    this.max = this._config.max;
  }
  getValue() {
    return getValueInRange(this.value, this.max);
  }
  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }
  static {
    this.\u0275fac = function NgbProgressbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbProgressbar,
      selectors: [["ngb-progressbar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", 1, "progress"],
      hostVars: 7,
      hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max)("aria-label", ctx.ariaLabel);
          \u0275\u0275styleProp("width", ctx.stacked ? ctx.getPercentValue() : null, "%")("height", ctx.height);
        }
      },
      inputs: {
        max: "max",
        animated: "animated",
        ariaLabel: "ariaLabel",
        striped: "striped",
        showValue: "showValue",
        textType: "textType",
        type: "type",
        value: "value",
        height: "height"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 3,
      vars: 11,
      consts: () => {
        let i18n_20;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_20 = goog.getMsg("{$interpolation}", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ getValue() / max | percent }}"
            }
          });
          i18n_20 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_20;
        } else {
          i18n_20 = $localize`:@@ngb.progressbar.value:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
        }
        return [i18n_20];
      },
      template: function NgbProgressbar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div");
          \u0275\u0275template(1, NgbProgressbar_Conditional_1_Template, 3, 3, "span");
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classMapInterpolate2("progress-bar", ctx.type ? ctx.textType ? " bg-" + ctx.type : " text-bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : "", "");
          \u0275\u0275styleProp("width", !ctx.stacked ? ctx.getPercentValue() : null, "%");
          \u0275\u0275classProp("progress-bar-animated", ctx.animated)("progress-bar-striped", ctx.striped);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showValue ? 1 : -1);
        }
      },
      dependencies: [PercentPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbar, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar",
      standalone: true,
      imports: [PercentPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "progress",
        role: "progressbar",
        "[attr.aria-valuenow]": "getValue()",
        "aria-valuemin": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-label]": "ariaLabel",
        "[style.width.%]": "stacked ? getPercentValue() : null",
        "[style.height]": "height"
      },
      template: `
		<div
			class="progress-bar{{ type ? (textType ? ' bg-' + type : ' text-bg-' + type) : '' }}{{
				textType ? ' text-' + textType : ''
			}}"
			[class.progress-bar-animated]="animated"
			[class.progress-bar-striped]="striped"
			[style.width.%]="!stacked ? getPercentValue() : null"
		>
			@if (showValue) {
				<span i18n="@@ngb.progressbar.value">{{ getValue() / max | percent }}</span>
			}
			<ng-content />
		</div>
	`
    }]
  }], () => [], {
    max: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    striped: [{
      type: Input
    }],
    showValue: [{
      type: Input
    }],
    textType: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    height: [{
      type: Input
    }]
  });
})();
var NgbProgressbarStacked = class _NgbProgressbarStacked {
  static {
    this.\u0275fac = function NgbProgressbarStacked_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarStacked)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbProgressbarStacked,
      selectors: [["ngb-progressbar-stacked"]],
      hostAttrs: [1, "progress-stacked"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function NgbProgressbarStacked_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarStacked, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar-stacked",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "progress-stacked"
      },
      template: `<ng-content></ng-content>`
    }]
  }], null, null);
})();
var NgbProgressbarModule = class _NgbProgressbarModule {
  static {
    this.\u0275fac = function NgbProgressbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbProgressbarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgbProgressbar, NgbProgressbarStacked],
      exports: [NgbProgressbar, NgbProgressbarStacked]
    }]
  }], null, null);
})();
var NgbRatingConfig = class _NgbRatingConfig {
  constructor() {
    this.max = 10;
    this.readonly = false;
    this.resettable = false;
    this.tabindex = 0;
  }
  static {
    this.\u0275fac = function NgbRatingConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRatingConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbRatingConfig,
      factory: _NgbRatingConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbRating = class _NgbRating {
  constructor() {
    this.contexts = [];
    this._config = inject(NgbRatingConfig);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this.disabled = false;
    this.max = this._config.max;
    this.readonly = this._config.readonly;
    this.resettable = this._config.resettable;
    this.tabindex = this._config.tabindex;
    this.hover = new EventEmitter();
    this.leave = new EventEmitter();
    this.rateChange = new EventEmitter(true);
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Allows to provide a function to set a custom aria-valuetext
   *
   * @since 14.1.0
   */
  ariaValueText(current, max2) {
    return `${current} out of ${max2}`;
  }
  isInteractive() {
    return !this.readonly && !this.disabled;
  }
  enter(value) {
    if (this.isInteractive()) {
      this._updateState(value);
    }
    this.hover.emit(value);
  }
  handleBlur() {
    this.onTouched();
  }
  handleClick(value) {
    if (this.isInteractive()) {
      this.update(this.resettable && this.rate === value ? 0 : value);
    }
  }
  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowLeft":
        this.update(this.rate - 1);
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.update(this.rate + 1);
        break;
      case "Home":
        this.update(0);
        break;
      case "End":
        this.update(this.max);
        break;
      default:
        return;
    }
    event.preventDefault();
  }
  ngOnChanges(changes) {
    if (changes["rate"]) {
      this.update(this.rate);
    }
    if (changes["max"]) {
      this._updateMax();
    }
  }
  ngOnInit() {
    this._setupContexts();
    this._updateState(this.rate);
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  reset() {
    this.leave.emit(this.nextRate);
    this._updateState(this.rate);
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  update(value, internalChange = true) {
    const newRate = getValueInRange(value, this.max, 0);
    if (this.isInteractive() && this.rate !== newRate) {
      this.rate = newRate;
      this.rateChange.emit(this.rate);
    }
    if (internalChange) {
      this.onChange(this.rate);
      this.onTouched();
    }
    this._updateState(this.rate);
  }
  writeValue(value) {
    this.update(value, false);
    this._changeDetectorRef.markForCheck();
  }
  _updateState(nextValue) {
    this.nextRate = nextValue;
    this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
  }
  _updateMax() {
    if (this.max > 0) {
      this._setupContexts();
      this.update(this.rate);
    }
  }
  _setupContexts() {
    this.contexts = Array.from({
      length: this.max
    }, (v, k) => ({
      fill: 0,
      index: k
    }));
  }
  static {
    this.\u0275fac = function NgbRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRating)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbRating,
      selectors: [["ngb-rating"]],
      contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.starTemplateFromContent = _t.first);
        }
      },
      hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"],
      hostVars: 6,
      hostBindings: function NgbRating_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("blur", function NgbRating_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("keydown", function NgbRating_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
            return ctx.reset();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("tabindex", ctx.disabled ? -1 : ctx.tabindex);
          \u0275\u0275attribute("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText(ctx.nextRate, ctx.max))("aria-readonly", ctx.readonly && !ctx.disabled ? true : null)("aria-disabled", ctx.disabled ? true : null);
        }
      },
      inputs: {
        disabled: "disabled",
        max: "max",
        rate: "rate",
        readonly: "readonly",
        resettable: "resettable",
        starTemplate: "starTemplate",
        tabindex: "tabindex",
        ariaValueText: "ariaValueText"
      },
      outputs: {
        hover: "hover",
        leave: "leave",
        rateChange: "rateChange"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbRating),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 0,
      consts: [["t", ""], [1, "visually-hidden"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbRating_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
          \u0275\u0275repeaterCreate(2, NgbRating_For_3_Template, 4, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx.contexts);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRating, [{
    type: Component,
    args: [{
      selector: "ngb-rating",
      standalone: true,
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "d-inline-flex",
        "[tabindex]": "disabled ? -1 : tabindex",
        role: "slider",
        "aria-valuemin": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-valuenow]": "nextRate",
        "[attr.aria-valuetext]": "ariaValueText(nextRate, max)",
        "[attr.aria-readonly]": "readonly && !disabled ? true : null",
        "[attr.aria-disabled]": "disabled ? true : null",
        "(blur)": "handleBlur()",
        "(keydown)": "handleKeyDown($event)",
        "(mouseleave)": "reset()"
      },
      template: `
		<ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
		@for (_ of contexts; track _; let index = $index) {
			<span class="visually-hidden">({{ index < nextRate ? '*' : ' ' }})</span>
			<span
				(mouseenter)="enter(index + 1)"
				(click)="handleClick(index + 1)"
				[style.cursor]="isInteractive() ? 'pointer' : 'default'"
			>
				<ng-template
					[ngTemplateOutlet]="starTemplate || starTemplateFromContent || t"
					[ngTemplateOutletContext]="contexts[index]"
				/>
			</span>
		}
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbRating),
        multi: true
      }]
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rate: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    resettable: [{
      type: Input
    }],
    starTemplate: [{
      type: Input
    }],
    starTemplateFromContent: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    tabindex: [{
      type: Input
    }],
    ariaValueText: [{
      type: Input
    }],
    hover: [{
      type: Output
    }],
    leave: [{
      type: Output
    }],
    rateChange: [{
      type: Output
    }]
  });
})();
var NgbRatingModule = class _NgbRatingModule {
  static {
    this.\u0275fac = function NgbRatingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRatingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbRatingModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingModule, [{
    type: NgModule,
    args: [{
      imports: [NgbRating],
      exports: [NgbRating]
    }]
  }], null, null);
})();
function toFragmentElement(container, id) {
  if (!container || id == null) {
    return null;
  }
  return isString(id) ? container.querySelector(`#${CSS.escape(id)}`) : id;
}
function getOrderedFragments(container, fragments) {
  const selector = [...fragments].map(({
    id
  }) => `#${CSS.escape(id)}`).join(",");
  return Array.from(container.querySelectorAll(selector));
}
var defaultProcessChanges = (state, changeActive, ctx) => {
  const {
    rootElement,
    fragments,
    scrollSpy,
    options,
    entries
  } = state;
  const orderedFragments = getOrderedFragments(rootElement, fragments);
  if (!ctx.initialized) {
    ctx.initialized = true;
    ctx.gapFragment = null;
    ctx.visibleFragments = /* @__PURE__ */ new Set();
    const preSelectedFragment = toFragmentElement(rootElement, options?.initialFragment);
    if (preSelectedFragment) {
      scrollSpy.scrollTo(preSelectedFragment);
      return;
    }
  }
  for (const entry of entries) {
    const {
      isIntersecting,
      target: fragment
    } = entry;
    if (isIntersecting) {
      if (ctx.gapFragment) {
        ctx.visibleFragments.delete(ctx.gapFragment);
        ctx.gapFragment = null;
      }
      ctx.visibleFragments.add(fragment);
    } else {
      ctx.visibleFragments.delete(fragment);
      if (ctx.visibleFragments.size === 0 && scrollSpy.active !== "") {
        if (entry.boundingClientRect.top < entry.rootBounds.top) {
          ctx.gapFragment = fragment;
          ctx.visibleFragments.add(ctx.gapFragment);
        } else {
          if (fragment === orderedFragments[0]) {
            ctx.gapFragment = null;
            ctx.visibleFragments.clear();
            changeActive("");
            return;
          } else {
            const fragmentIndex = orderedFragments.indexOf(fragment);
            ctx.gapFragment = orderedFragments[fragmentIndex - 1] || null;
            if (ctx.gapFragment) {
              ctx.visibleFragments.add(ctx.gapFragment);
            }
          }
        }
      }
    }
  }
  for (const fragment of orderedFragments) {
    if (ctx.visibleFragments.has(fragment)) {
      changeActive(fragment.id);
      break;
    }
  }
};
var NgbScrollSpyConfig = class _NgbScrollSpyConfig {
  constructor() {
    this.scrollBehavior = "smooth";
    this.processChanges = defaultProcessChanges;
  }
  static {
    this.\u0275fac = function NgbScrollSpyConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbScrollSpyConfig,
      factory: _NgbScrollSpyConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MATCH_THRESHOLD = 3;
var NgbScrollSpyService = class _NgbScrollSpyService {
  constructor() {
    this._observer = null;
    this._containerElement = null;
    this._fragments = /* @__PURE__ */ new Set();
    this._preRegisteredFragments = /* @__PURE__ */ new Set();
    this._active$ = new Subject();
    this._distinctActive$ = this._active$.pipe(distinctUntilChanged());
    this._active = "";
    this._config = inject(NgbScrollSpyConfig);
    this._document = inject(DOCUMENT);
    this._platformId = inject(PLATFORM_ID);
    this._scrollBehavior = this._config.scrollBehavior;
    this._diChangeDetectorRef = inject(ChangeDetectorRef, {
      optional: true
    });
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._zone = inject(NgZone);
    this._distinctActive$.pipe(takeUntilDestroyed()).subscribe((active) => {
      this._active = active;
      this._changeDetectorRef?.markForCheck();
    });
  }
  /**
   * Getter for the currently active fragment id. Returns empty string if none.
   */
  get active() {
    return this._active;
  }
  /**
   * An observable emitting the currently active fragment. Emits empty string if none.
   */
  get active$() {
    return this._distinctActive$;
  }
  /**
   * Starts the scrollspy service and observes specified fragments.
   *
   * You can specify a list of options to pass, like the root element, initial fragment, scroll behavior, etc.
   * See the [`NgbScrollSpyOptions`](#/components/scrollspy/api#NgbScrollSpyOptions) interface for more details.
   */
  start(options) {
    if (isPlatformBrowser(this._platformId)) {
      this._cleanup();
      const {
        root,
        rootMargin,
        scrollBehavior,
        threshold,
        fragments,
        changeDetectorRef,
        processChanges
      } = __spreadValues({}, options);
      this._containerElement = root ?? this._document.documentElement;
      this._changeDetectorRef = changeDetectorRef ?? this._diChangeDetectorRef;
      this._scrollBehavior = scrollBehavior ?? this._config.scrollBehavior;
      const processChangesFn = processChanges ?? this._config.processChanges;
      const context = {};
      this._observer = new IntersectionObserver((entries) => processChangesFn({
        entries,
        rootElement: this._containerElement,
        fragments: this._fragments,
        scrollSpy: this,
        options: __spreadValues({}, options)
      }, (active) => this._active$.next(active), context), __spreadValues(__spreadValues({
        root: root ?? this._document
      }, rootMargin && {
        rootMargin
      }), threshold && {
        threshold
      }));
      for (const element of [...this._preRegisteredFragments, ...fragments ?? []]) {
        this.observe(element);
      }
      this._preRegisteredFragments.clear();
    }
  }
  /**
   * Stops the service and unobserves all fragments.
   */
  stop() {
    this._cleanup();
    this._active$.next("");
  }
  /**
   * Scrolls to a fragment, it must be known to the service and contained in the root element.
   * An id or an element reference can be passed.
   *
   * [`NgbScrollToOptions`](#/components/scrollspy/api#NgbScrollToOptions) can be passed.
   */
  scrollTo(fragment, options) {
    const {
      behavior
    } = __spreadValues({
      behavior: this._scrollBehavior
    }, options);
    if (this._containerElement) {
      const fragmentElement = toFragmentElement(this._containerElement, fragment);
      if (fragmentElement) {
        const heightPx = fragmentElement.offsetTop - this._containerElement.offsetTop;
        this._containerElement.scrollTo({
          top: heightPx,
          behavior
        });
        let lastOffset = this._containerElement.scrollTop;
        let matchCounter = 0;
        const containerElement = this._containerElement;
        this._zone.runOutsideAngular(() => {
          const updateActiveWhenScrollingIsFinished = () => {
            const sameOffsetAsLastTime = lastOffset === containerElement.scrollTop;
            if (sameOffsetAsLastTime) {
              matchCounter++;
            } else {
              matchCounter = 0;
            }
            if (!sameOffsetAsLastTime || sameOffsetAsLastTime && matchCounter < MATCH_THRESHOLD) {
              lastOffset = containerElement.scrollTop;
              requestAnimationFrame(updateActiveWhenScrollingIsFinished);
            } else {
              this._zone.run(() => this._active$.next(fragmentElement.id));
            }
          };
          requestAnimationFrame(updateActiveWhenScrollingIsFinished);
        });
      }
    }
  }
  /**
   * Adds a fragment to observe. It must be contained in the root element.
   * An id or an element reference can be passed.
   */
  observe(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.add(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement && !this._fragments.has(fragmentElement)) {
      this._fragments.add(fragmentElement);
      this._observer.observe(fragmentElement);
    }
  }
  /**
   * Unobserves a fragment.
   * An id or an element reference can be passed.
   */
  unobserve(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.delete(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement) {
      this._fragments.delete(fragmentElement);
      this._observer.disconnect();
      for (const fragment2 of this._fragments) {
        this._observer.observe(fragment2);
      }
    }
  }
  ngOnDestroy() {
    this._cleanup();
  }
  _cleanup() {
    this._fragments.clear();
    this._observer?.disconnect();
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._scrollBehavior = this._config.scrollBehavior;
    this._observer = null;
    this._containerElement = null;
  }
  static {
    this.\u0275fac = function NgbScrollSpyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbScrollSpyService,
      factory: _NgbScrollSpyService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbScrollSpyItem = class _NgbScrollSpyItem {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._scrollSpyMenu = inject(NgbScrollSpyMenu, {
      optional: true
    });
    this._scrollSpyAPI = this._scrollSpyMenu ?? inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._isActive = false;
  }
  /**
   * References the scroll spy directive, the id of the associated fragment and the parent menu item.
   *
   * Can be used like:
   *  - `ngbScrollSpyItem="fragmentId"`
   *  - `[ngbScrollSpyItem]="scrollSpy" fragment="fragmentId"
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId']"` parent="parentId"`
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId', 'parentId']"`
   *
   *  As well as together with `[fragment]` and `[parent]` inputs.
   */
  set data(data) {
    if (Array.isArray(data)) {
      this._scrollSpyAPI = data[0];
      this.fragment = data[1];
      this.parent ??= data[2];
    } else if (data instanceof NgbScrollSpy) {
      this._scrollSpyAPI = data;
    } else if (isString(data)) {
      this.fragment = data;
    }
  }
  ngOnInit() {
    if (!this._scrollSpyMenu) {
      this._scrollSpyAPI.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((active) => {
        if (active === this.fragment) {
          this._activate();
        } else {
          this._deactivate();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * @internal
   */
  _activate() {
    this._isActive = true;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._activate();
    }
  }
  /**
   * @internal
   */
  _deactivate() {
    this._isActive = false;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._deactivate();
    }
  }
  /**
   * Returns `true`, if the associated fragment is active.
   */
  isActive() {
    return this._isActive;
  }
  /**
   * Scrolls to the associated fragment.
   */
  scrollTo(options) {
    this._scrollSpyAPI.scrollTo(this.fragment, options);
  }
  static {
    this.\u0275fac = function NgbScrollSpyItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyItem)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbScrollSpyItem,
      selectors: [["", "ngbScrollSpyItem", ""]],
      hostVars: 2,
      hostBindings: function NgbScrollSpyItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NgbScrollSpyItem_click_HostBindingHandler() {
            return ctx.scrollTo();
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("active", ctx.isActive());
        }
      },
      inputs: {
        data: [0, "ngbScrollSpyItem", "data"],
        fragment: "fragment",
        parent: "parent"
      },
      exportAs: ["ngbScrollSpyItem"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyItem, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyItem]",
      standalone: true,
      exportAs: "ngbScrollSpyItem",
      host: {
        "[class.active]": "isActive()",
        "(click)": "scrollTo();"
      }
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["ngbScrollSpyItem"]
    }],
    fragment: [{
      type: Input
    }],
    parent: [{
      type: Input
    }]
  });
})();
var NgbScrollSpyMenu = class _NgbScrollSpyMenu {
  constructor() {
    this._scrollSpyRef = inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._map = /* @__PURE__ */ new Map();
    this._lastActiveItem = null;
  }
  set scrollSpy(scrollSpy) {
    this._scrollSpyRef = scrollSpy;
  }
  get active() {
    return this._scrollSpyRef.active;
  }
  get active$() {
    return this._scrollSpyRef.active$;
  }
  scrollTo(fragment, options) {
    this._scrollSpyRef.scrollTo(fragment, options);
  }
  getItem(id) {
    return this._map.get(id);
  }
  ngAfterViewInit() {
    this._items.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._rebuildMap());
    this._rebuildMap();
    this._scrollSpyRef.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((activeId) => {
      this._lastActiveItem?._deactivate();
      const item = this._map.get(activeId);
      if (item) {
        item._activate();
        this._lastActiveItem = item;
      }
    });
  }
  _rebuildMap() {
    this._map.clear();
    for (let item of this._items) {
      this._map.set(item.fragment, item);
    }
  }
  static {
    this.\u0275fac = function NgbScrollSpyMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyMenu)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbScrollSpyMenu,
      selectors: [["", "ngbScrollSpyMenu", ""]],
      contentQueries: function NgbScrollSpyMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbScrollSpyItem, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
        }
      },
      inputs: {
        scrollSpy: [0, "ngbScrollSpyMenu", "scrollSpy"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyMenu]",
      standalone: true
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbScrollSpyItem, {
        descendants: true
      }]
    }],
    scrollSpy: [{
      type: Input,
      args: ["ngbScrollSpyMenu"]
    }]
  });
})();
var NgbScrollSpy = class _NgbScrollSpy {
  constructor() {
    this._initialFragment = null;
    this._service = inject(NgbScrollSpyService);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.activeChange = this._service.active$;
  }
  set active(fragment) {
    this._initialFragment = fragment;
    this.scrollTo(fragment);
  }
  /**
   * Getter/setter for the currently active fragment id.
   */
  get active() {
    return this._service.active;
  }
  /**
   * Returns an observable that emits currently active section id.
   */
  get active$() {
    return this._service.active$;
  }
  ngAfterViewInit() {
    this._service.start(__spreadValues({
      processChanges: this.processChanges,
      root: this._nativeElement,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }, this._initialFragment && {
      initialFragment: this._initialFragment
    }));
  }
  /**
   * @internal
   */
  _registerFragment(fragment) {
    this._service.observe(fragment.id);
  }
  /**
   * @internal
   */
  _unregisterFragment(fragment) {
    this._service.unobserve(fragment.id);
  }
  /**
   * Scrolls to a fragment that is identified by the `ngbScrollSpyFragment` directive.
   * An id or an element reference can be passed.
   */
  scrollTo(fragment, options) {
    this._service.scrollTo(fragment, __spreadValues(__spreadValues({}, this.scrollBehavior && {
      behavior: this.scrollBehavior
    }), options));
  }
  static {
    this.\u0275fac = function NgbScrollSpy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpy)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbScrollSpy,
      selectors: [["", "ngbScrollSpy", ""]],
      hostAttrs: ["tabindex", "0", 2, "overflow-y", "auto"],
      inputs: {
        processChanges: "processChanges",
        rootMargin: "rootMargin",
        scrollBehavior: "scrollBehavior",
        threshold: "threshold",
        active: "active"
      },
      outputs: {
        activeChange: "activeChange"
      },
      exportAs: ["ngbScrollSpy"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([NgbScrollSpyService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpy, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpy]",
      standalone: true,
      exportAs: "ngbScrollSpy",
      host: {
        tabindex: "0",
        style: "overflow-y: auto"
      },
      providers: [NgbScrollSpyService]
    }]
  }], null, {
    processChanges: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    scrollBehavior: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    activeChange: [{
      type: Output
    }]
  });
})();
var NgbScrollSpyFragment = class _NgbScrollSpyFragment {
  constructor() {
    this._destroyRef = inject(DestroyRef);
    this._scrollSpy = inject(NgbScrollSpy);
  }
  ngAfterViewInit() {
    this._scrollSpy._registerFragment(this);
    this._destroyRef.onDestroy(() => this._scrollSpy._unregisterFragment(this));
  }
  static {
    this.\u0275fac = function NgbScrollSpyFragment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyFragment)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbScrollSpyFragment,
      selectors: [["", "ngbScrollSpyFragment", ""]],
      hostVars: 1,
      hostBindings: function NgbScrollSpyFragment_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbScrollSpyFragment", "id"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyFragment, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyFragment]",
      standalone: true,
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: ["ngbScrollSpyFragment"]
    }]
  });
})();
var NgbScrollSpyModule = class _NgbScrollSpyModule {
  static {
    this.\u0275fac = function NgbScrollSpyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbScrollSpyModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyModule, [{
    type: NgModule,
    args: [{
      imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
      exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu]
    }]
  }], null, null);
})();
var NgbTime = class {
  constructor(hour, minute, second) {
    this.hour = toInteger2(hour);
    this.minute = toInteger2(minute);
    this.second = toInteger2(second);
  }
  changeHour(step = 1) {
    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
  }
  updateHour(hour) {
    if (isNumber(hour)) {
      this.hour = (hour < 0 ? 24 + hour : hour) % 24;
    } else {
      this.hour = NaN;
    }
  }
  changeMinute(step = 1) {
    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
  }
  updateMinute(minute) {
    if (isNumber(minute)) {
      this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
      this.changeHour(Math.floor(minute / 60));
    } else {
      this.minute = NaN;
    }
  }
  changeSecond(step = 1) {
    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
  }
  updateSecond(second) {
    if (isNumber(second)) {
      this.second = second < 0 ? 60 + second % 60 : second % 60;
      this.changeMinute(Math.floor(second / 60));
    } else {
      this.second = NaN;
    }
  }
  isValid(checkSecs = true) {
    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
  }
  toString() {
    return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`;
  }
};
var NgbTimepickerConfig = class _NgbTimepickerConfig {
  constructor() {
    this.meridian = false;
    this.spinners = true;
    this.seconds = false;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.disabled = false;
    this.readonlyInputs = false;
    this.size = "medium";
  }
  static {
    this.\u0275fac = function NgbTimepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTimepickerConfig,
      factory: _NgbTimepickerConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
var NgbTimeAdapter = class _NgbTimeAdapter {
  static {
    this.\u0275fac = function NgbTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimeAdapter)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTimeAdapter,
      factory: () => NGB_DATEPICKER_TIME_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbTimeStructAdapter = class _NgbTimeStructAdapter extends NgbTimeAdapter {
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  fromModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  toModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbTimeStructAdapter_BaseFactory;
      return function NgbTimeStructAdapter_Factory(__ngFactoryType__) {
        return (\u0275NgbTimeStructAdapter_BaseFactory || (\u0275NgbTimeStructAdapter_BaseFactory = \u0275\u0275getInheritedFactory(_NgbTimeStructAdapter)))(__ngFactoryType__ || _NgbTimeStructAdapter);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTimeStructAdapter,
      factory: _NgbTimeStructAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbTimepickerI18n = class _NgbTimepickerI18n {
  static {
    this.\u0275fac = function NgbTimepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerI18n)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTimepickerI18n,
      factory: () => (() => new NgbTimepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbTimepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbTimepickerI18nDefault = class _NgbTimepickerI18nDefault extends NgbTimepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._periods = [formatDate(/* @__PURE__ */ new Date(36e5), "a", this._locale, "UTC"), formatDate(new Date(36e5 * 13), "a", this._locale, "UTC")];
  }
  getMorningPeriod() {
    return this._periods[0];
  }
  getAfternoonPeriod() {
    return this._periods[1];
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NgbTimepickerI18nDefault_BaseFactory;
      return function NgbTimepickerI18nDefault_Factory(__ngFactoryType__) {
        return (\u0275NgbTimepickerI18nDefault_BaseFactory || (\u0275NgbTimepickerI18nDefault_BaseFactory = \u0275\u0275getInheritedFactory(_NgbTimepickerI18nDefault)))(__ngFactoryType__ || _NgbTimepickerI18nDefault);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTimepickerI18nDefault,
      factory: _NgbTimepickerI18nDefault.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var FILTER_REGEX = /[^0-9]/g;
var NgbTimepicker = class _NgbTimepicker {
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */
  set hourStep(step) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }
  get hourStep() {
    return this._hourStep;
  }
  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */
  set minuteStep(step) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }
  get minuteStep() {
    return this._minuteStep;
  }
  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */
  set secondStep(step) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }
  get secondStep() {
    return this._secondStep;
  }
  constructor(_config, _ngbTimeAdapter, _cd, i18n) {
    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;
    this.i18n = i18n;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  writeValue(value) {
    const structValue = this._ngbTimeAdapter.fromModel(value);
    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }
    this._cd.markForCheck();
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Increments the hours by the given step.
   */
  changeHour(step) {
    this.model?.changeHour(step);
    this.propagateModelChange();
  }
  /**
   * Increments the minutes by the given step.
   */
  changeMinute(step) {
    this.model?.changeMinute(step);
    this.propagateModelChange();
  }
  /**
   * Increments the seconds by the given step.
   */
  changeSecond(step) {
    this.model?.changeSecond(step);
    this.propagateModelChange();
  }
  /**
   * Update hours with the new value.
   */
  updateHour(newVal) {
    const isPM = this.model ? this.model.hour >= 12 : false;
    const enteredHour = toInteger2(newVal);
    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model?.updateHour(enteredHour + 12);
    } else {
      this.model?.updateHour(enteredHour);
    }
    this.propagateModelChange();
  }
  /**
   * Update minutes with the new value.
   */
  updateMinute(newVal) {
    this.model?.updateMinute(toInteger2(newVal));
    this.propagateModelChange();
  }
  /**
   * Update seconds with the new value.
   */
  updateSecond(newVal) {
    this.model?.updateSecond(toInteger2(newVal));
    this.propagateModelChange();
  }
  toggleMeridian() {
    if (this.meridian) {
      this.changeHour(12);
    }
  }
  formatInput(input) {
    input.value = input.value.replace(FILTER_REGEX, "");
  }
  formatHour(value) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }
  formatMinSec(value) {
    return padNumber(isNumber(value) ? value : NaN);
  }
  handleBlur() {
    this.onTouched();
  }
  get isSmallSize() {
    return this.size === "small";
  }
  get isLargeSize() {
    return this.size === "large";
  }
  ngOnChanges(changes) {
    if (changes["seconds"] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }
  propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }
    if (this.model?.isValid(this.seconds)) {
      this.onChange(this._ngbTimeAdapter.toModel({
        hour: this.model.hour,
        minute: this.model.minute,
        second: this.model.second
      }));
    } else {
      this.onChange(this._ngbTimeAdapter.toModel(null));
    }
  }
  static {
    this.\u0275fac = function NgbTimepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepicker)(\u0275\u0275directiveInject(NgbTimepickerConfig), \u0275\u0275directiveInject(NgbTimeAdapter), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgbTimepickerI18n));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbTimepicker,
      selectors: [["ngb-timepicker"]],
      inputs: {
        meridian: "meridian",
        spinners: "spinners",
        seconds: "seconds",
        hourStep: "hourStep",
        minuteStep: "minuteStep",
        secondStep: "secondStep",
        readonlyInputs: "readonlyInputs",
        size: "size"
      },
      exportAs: ["ngbTimepicker"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTimepicker),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 14,
      vars: 23,
      consts: () => {
        let i18n_21;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_21 = goog.getMsg("HH");
          i18n_21 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_21;
        } else {
          i18n_21 = $localize`:@@ngb.timepicker.HH:HH`;
        }
        let i18n_22;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_22 = goog.getMsg("Hours");
          i18n_22 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_22;
        } else {
          i18n_22 = $localize`:@@ngb.timepicker.hours:Hours`;
        }
        let i18n_23;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_23 = goog.getMsg("MM");
          i18n_23 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_23;
        } else {
          i18n_23 = $localize`:@@ngb.timepicker.MM:MM`;
        }
        let i18n_24;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_24 = goog.getMsg("Minutes");
          i18n_24 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_24;
        } else {
          i18n_24 = $localize`:@@ngb.timepicker.minutes:Minutes`;
        }
        let i18n_25;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_25 = goog.getMsg("Increment hours");
          i18n_25 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_25;
        } else {
          i18n_25 = $localize`:@@ngb.timepicker.increment-hours:Increment hours`;
        }
        let i18n_26;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_26 = goog.getMsg("Decrement hours");
          i18n_26 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_26;
        } else {
          i18n_26 = $localize`:@@ngb.timepicker.decrement-hours:Decrement hours`;
        }
        let i18n_27;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_27 = goog.getMsg("Increment minutes");
          i18n_27 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_27;
        } else {
          i18n_27 = $localize`:@@ngb.timepicker.increment-minutes:Increment minutes`;
        }
        let i18n_28;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_28 = goog.getMsg("Decrement minutes");
          i18n_28 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_28;
        } else {
          i18n_28 = $localize`:@@ngb.timepicker.decrement-minutes:Decrement minutes`;
        }
        let i18n_29;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_29 = goog.getMsg("SS");
          i18n_29 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_29;
        } else {
          i18n_29 = $localize`:@@ngb.timepicker.SS:SS`;
        }
        let i18n_30;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_30 = goog.getMsg("Seconds");
          i18n_30 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_30;
        } else {
          i18n_30 = $localize`:@@ngb.timepicker.seconds:Seconds`;
        }
        let i18n_31;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_31 = goog.getMsg("Increment seconds");
          i18n_31 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_31;
        } else {
          i18n_31 = $localize`:@@ngb.timepicker.increment-seconds:Increment seconds`;
        }
        let i18n_32;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_32 = goog.getMsg("Decrement seconds");
          i18n_32 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_32;
        } else {
          i18n_32 = $localize`:@@ngb.timepicker.decrement-seconds:Decrement seconds`;
        }
        let i18n_33;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_33 = goog.getMsg("{$interpolation}", {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ i18n.getAfternoonPeriod() }}"
            }
          });
          i18n_33 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_33;
        } else {
          i18n_33 = $localize`:@@ngb.timepicker.PM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
        }
        return [i18n_25, i18n_26, i18n_27, i18n_28, i18n_31, i18n_32, i18n_33, [3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "btn-sm", "btn-lg", "disabled"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_21, "aria-label", i18n_22, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_23, "aria-label", i18n_24, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "click", "disabled"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], [1, "chevron", "ngb-tp-chevron", "bottom"], [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_29, "aria-label", i18n_30, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]];
      },
      template: function NgbTimepicker_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "fieldset", 7)(1, "div", 8)(2, "div", 9);
          \u0275\u0275template(3, NgbTimepicker_Conditional_3_Template, 4, 7, "button", 10);
          \u0275\u0275elementStart(4, "input", 11);
          \u0275\u0275listener("change", function NgbTimepicker_Template_input_change_4_listener($event) {
            return ctx.updateHour($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_4_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_4_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
            ctx.changeHour(ctx.hourStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
            ctx.changeHour(-ctx.hourStep);
            return $event.preventDefault();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(5, NgbTimepicker_Conditional_5_Template, 4, 7, "button", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 12);
          \u0275\u0275text(7, ":");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "div", 13);
          \u0275\u0275template(9, NgbTimepicker_Conditional_9_Template, 4, 7, "button", 10);
          \u0275\u0275elementStart(10, "input", 14);
          \u0275\u0275listener("change", function NgbTimepicker_Template_input_change_10_listener($event) {
            return ctx.updateMinute($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_10_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_10_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) {
            ctx.changeMinute(ctx.minuteStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) {
            ctx.changeMinute(-ctx.minuteStep);
            return $event.preventDefault();
          });
          \u0275\u0275elementEnd();
          \u0275\u0275template(11, NgbTimepicker_Conditional_11_Template, 4, 7, "button", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275template(12, NgbTimepicker_Conditional_12_Template, 6, 9)(13, NgbTimepicker_Conditional_13_Template, 5, 8);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275classProp("disabled", ctx.disabled);
          \u0275\u0275property("disabled", ctx.disabled);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.spinners ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          \u0275\u0275property("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.spinners ? 5 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.spinners ? 9 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          \u0275\u0275property("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.spinners ? 11 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.seconds ? 12 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.meridian ? 13 : -1);
        }
      },
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbTimepicker",
      selector: "ngb-timepicker",
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(-hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
						</button>
					}
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(-minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
						</button>
					}
				</div>
				@if (seconds) {
					<div class="ngb-tp-spacer">:</div>
					<div class="ngb-tp-input-container ngb-tp-second">
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
							</button>
						}
						<input
							type="text"
							class="ngb-tp-input form-control"
							[class.form-control-sm]="isSmallSize"
							[class.form-control-lg]="isLargeSize"
							maxlength="2"
							inputmode="numeric"
							placeholder="SS"
							i18n-placeholder="@@ngb.timepicker.SS"
							[value]="formatMinSec(model?.second)"
							(change)="updateSecond($any($event).target.value)"
							[readOnly]="readonlyInputs"
							[disabled]="disabled"
							aria-label="Seconds"
							i18n-aria-label="@@ngb.timepicker.seconds"
							(blur)="handleBlur()"
							(input)="formatInput($any($event).target)"
							(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
							(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
						/>
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(-secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron bottom"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
							</button>
						}
					</div>
				}
				@if (meridian) {
					<div class="ngb-tp-spacer"></div>
					<div class="ngb-tp-meridian">
						<button
							type="button"
							class="btn btn-outline-primary"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[disabled]="disabled"
							[class.disabled]="disabled"
							(click)="toggleMeridian()"
						>
							@if (model && model.hour >= 12) {
								<ng-container i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
							} @else {
								<ng-container>{{ i18n.getMorningPeriod() }}</ng-container>
							}
						</button>
					</div>
				}
			</div>
		</fieldset>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTimepicker),
        multi: true
      }],
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n']
    }]
  }], () => [{
    type: NgbTimepickerConfig
  }, {
    type: NgbTimeAdapter
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgbTimepickerI18n
  }], {
    meridian: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    seconds: [{
      type: Input
    }],
    hourStep: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    secondStep: [{
      type: Input
    }],
    readonlyInputs: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var NgbTimepickerModule = class _NgbTimepickerModule {
  static {
    this.\u0275fac = function NgbTimepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbTimepickerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    }]
  }], null, null);
})();
var NgbToastConfig = class _NgbToastConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autohide = true;
    this.delay = 5e3;
    this.ariaLive = "polite";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbToastConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbToastConfig,
      factory: _NgbToastConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ngbToastFadeInTransition = (element, animation) => {
  const {
    classList
  } = element;
  if (animation) {
    classList.add("fade");
  } else {
    classList.add("show");
    return;
  }
  reflow(element);
  classList.add("show", "showing");
  return () => {
    classList.remove("showing");
  };
};
var ngbToastFadeOutTransition = ({
  classList
}) => {
  classList.add("showing");
  return () => {
    classList.remove("show", "showing");
  };
};
var NgbToastHeader = class _NgbToastHeader {
  static {
    this.\u0275fac = function NgbToastHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastHeader)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbToastHeader,
      selectors: [["", "ngbToastHeader", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbToastHeader]",
      standalone: true
    }]
  }], null, null);
})();
var NgbToast = class _NgbToast {
  constructor(ariaLive) {
    this.ariaLive = ariaLive;
    this._config = inject(NgbToastConfig);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._element = inject(ElementRef);
    this.animation = this._config.animation;
    this.delay = this._config.delay;
    this.autohide = this._config.autohide;
    this.contentHeaderTpl = null;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.ariaLive ??= this._config.ariaLive;
  }
  ngAfterContentInit() {
    afterNextRender(() => {
      this._init();
      this.show();
    }, {
      phase: AfterRenderPhase.MixedReadWrite,
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if ("autohide" in changes) {
      this._clearTimeout();
      this._init();
    }
  }
  /**
   * Triggers toast closing programmatically.
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(hidden)` output
   *
   * @since 8.0.0
   */
  hide() {
    this._clearTimeout();
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
      animation: this.animation,
      runningTransition: "stop"
    });
    transition.subscribe(() => {
      this.hidden.emit();
    });
    return transition;
  }
  /**
   * Triggers toast opening programmatically.
   *
   * The returned observable will emit and be completed once the opening transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(shown)` output
   *
   * @since 8.0.0
   */
  show() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
      animation: this.animation,
      runningTransition: "continue"
    });
    transition.subscribe(() => {
      this.shown.emit();
    });
    return transition;
  }
  _init() {
    if (this.autohide && !this._timeoutID) {
      this._timeoutID = setTimeout(() => this.hide(), this.delay);
    }
  }
  _clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }
  static {
    this.\u0275fac = function NgbToast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToast)(\u0275\u0275injectAttribute("aria-live"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbToast,
      selectors: [["ngb-toast"]],
      contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NgbToastHeader, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentHeaderTpl = _t.first);
        }
      },
      hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"],
      hostVars: 3,
      hostBindings: function NgbToast_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-live", ctx.ariaLive);
          \u0275\u0275classProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        delay: "delay",
        autohide: "autohide",
        header: "header"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbToast"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 5,
      vars: 1,
      consts: () => {
        let i18n_34;
        if (false) {
          const MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_34 = goog.getMsg("Close");
          i18n_34 = MSG_C__USERS_BIBEK_ADHIKARI_ONEDRIVE_DESKTOP_LAGURANS_LA_GURANS_APP_FRONTEND_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_34;
        } else {
          i18n_34 = $localize`:@@ngb.toast.close-aria:Close`;
        }
        return [["headerTpl", ""], [1, "toast-header"], [1, "toast-body"], [1, "me-auto"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_34, 1, "btn-close", 3, "click"]];
      },
      template: function NgbToast_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NgbToast_Conditional_2_Template, 3, 1, "div", 1);
          \u0275\u0275elementStart(3, "div", 2);
          \u0275\u0275projection(4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.contentHeaderTpl || ctx.header ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToast, [{
    type: Component,
    args: [{
      selector: "ngb-toast",
      exportAs: "ngbToast",
      standalone: true,
      imports: [NgTemplateOutlet],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        role: "alert",
        "[attr.aria-live]": "ariaLive",
        "aria-atomic": "true",
        class: "toast",
        "[class.fade]": "animation"
      },
      template: `
		<ng-template #headerTpl>
			<strong class="me-auto">{{ header }}</strong>
		</ng-template>
		@if (contentHeaderTpl || header) {
			<div class="toast-header">
				<ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl" />
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					i18n-aria-label="@@ngb.toast.close-aria"
					(click)="hide()"
				>
				</button>
			</div>
		}
		<div class="toast-body">
			<ng-content />
		</div>
	`,
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["aria-live"]
    }]
  }], {
    animation: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    autohide: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    contentHeaderTpl: [{
      type: ContentChild,
      args: [NgbToastHeader, {
        read: TemplateRef,
        static: true
      }]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbToastModule = class _NgbToastModule {
  static {
    this.\u0275fac = function NgbToastModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbToastModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastModule, [{
    type: NgModule,
    args: [{
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    }]
  }], null, null);
})();
var NgbTooltipConfig = class _NgbTooltipConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "hover focus";
    this.disableTooltip = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbTooltipConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTooltipConfig,
      factory: _NgbTooltipConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId = 0;
var NgbTooltipWindow = class _NgbTooltipWindow {
  static {
    this.\u0275fac = function NgbTooltipWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipWindow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbTooltipWindow,
      selectors: [["ngb-tooltip-window"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 5,
      hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275classMap("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
          \u0275\u0275classProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        id: "id",
        tooltipClass: "tooltipClass"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 3,
      vars: 0,
      consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
      template: function NgbTooltipWindow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275element(0, "div", 0);
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
        }
      },
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipWindow, [{
    type: Component,
    args: [{
      selector: "ngb-tooltip-window",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id"
      },
      template: `
		<div class="tooltip-arrow" data-popper-arrow></div>
		<div class="tooltip-inner">
			<ng-content />
		</div>
	`,
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"]
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }]
  });
})();
var NgbTooltip = class _NgbTooltip {
  constructor() {
    this._config = inject(NgbTooltipConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disableTooltip = this._config.disableTooltip;
    this.tooltipClass = this._config.tooltipClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
    this._popupService = new PopupService(NgbTooltipWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   */
  set ngbTooltip(value) {
    this._ngbTooltip = value;
    if (!value && this._windowRef) {
      this.close();
    }
  }
  get ngbTooltip() {
    return this._ngbTooltip;
  }
  /**
   * Opens the tooltip.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the tooltip template when it is created.
   */
  open(context) {
    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this._ngbTooltip, context ?? this.tooltipContext, this.animation);
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("tooltipClass", this.tooltipClass);
      this._windowRef.setInput("id", this._ngbTooltipWindowId);
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbTooltipWindowId);
      if (this.container === "body") {
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          baseClass: "bs-tooltip",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 6])(options))
        });
        Promise.resolve().then(() => {
          this._positioning.update();
        });
        this._afterRenderRef = afterRender(() => {
          this._positioning.update();
        }, {
          phase: AfterRenderPhase.MixedReadWrite,
          injector: this._injector
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement], [this._nativeElement]);
      transition$.subscribe(() => this.shown.emit());
    }
  }
  /**
   * Closes the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  close(animation = this.animation) {
    if (this._windowRef != null) {
      this._getPositionTargetElement().removeAttribute("aria-describedby");
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._afterRenderRef?.destroy();
        this.hidden.emit();
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
  }
  ngOnChanges({
    tooltipClass
  }) {
    if (tooltipClass && this.isOpen()) {
      this._windowRef.setInput("tooltipClass", tooltipClass.currentValue);
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.\u0275fac = function NgbTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltip)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbTooltip,
      selectors: [["", "ngbTooltip", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disableTooltip: "disableTooltip",
        tooltipClass: "tooltipClass",
        tooltipContext: "tooltipContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay",
        ngbTooltip: "ngbTooltip"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbTooltip"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltip, [{
    type: Directive,
    args: [{
      selector: "[ngbTooltip]",
      standalone: true,
      exportAs: "ngbTooltip"
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    disableTooltip: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }],
    tooltipContext: [{
      type: Input
    }],
    openDelay: [{
      type: Input
    }],
    closeDelay: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    ngbTooltip: [{
      type: Input
    }]
  });
})();
var NgbTooltipModule = class _NgbTooltipModule {
  static {
    this.\u0275fac = function NgbTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbTooltipModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    }]
  }], null, null);
})();
var NgbHighlight = class _NgbHighlight {
  constructor() {
    this.highlightClass = "ngb-highlight";
    this.accentSensitive = true;
  }
  ngOnChanges(changes) {
    if (!this.accentSensitive && !String.prototype.normalize) {
      console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser.");
      this.accentSensitive = true;
    }
    const result = toString(this.result);
    const terms = Array.isArray(this.term) ? this.term : [this.term];
    const prepareTerm = (term) => this.accentSensitive ? term : removeAccents(term);
    const escapedTerms = terms.map((term) => regExpEscape(prepareTerm(toString(term)))).filter((term) => term);
    const toSplit = this.accentSensitive ? result : removeAccents(result);
    const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join("|")})`, "gmi")) : [result];
    if (this.accentSensitive) {
      this.parts = parts;
    } else {
      let offset2 = 0;
      this.parts = parts.map((part) => result.substring(offset2, offset2 += part.length));
    }
  }
  static {
    this.\u0275fac = function NgbHighlight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbHighlight)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbHighlight,
      selectors: [["ngb-highlight"]],
      inputs: {
        highlightClass: "highlightClass",
        result: "result",
        term: "term",
        accentSensitive: "accentSensitive"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [[3, "class"]],
      template: function NgbHighlight_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275repeaterCreate(0, NgbHighlight_For_1_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        }
        if (rf & 2) {
          \u0275\u0275repeater(ctx.parts);
        }
      },
      styles: [".ngb-highlight{font-weight:700}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbHighlight, [{
    type: Component,
    args: [{
      selector: "ngb-highlight",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
		@for (part of parts; track $index) {
			@if ($odd) {
				<span class="{{ highlightClass }}">{{ part }}</span>
			} @else {
				<ng-container>{{ part }}</ng-container>
			}
		}
	`,
      styles: [".ngb-highlight{font-weight:700}\n"]
    }]
  }], null, {
    highlightClass: [{
      type: Input
    }],
    result: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    term: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    accentSensitive: [{
      type: Input
    }]
  });
})();
var ARIA_LIVE_DELAY = new InjectionToken("live announcer delay", {
  providedIn: "root",
  factory: () => 100
});
function getLiveElement(document2, lazyCreate = false) {
  let element = document2.body.querySelector("#ngb-live");
  if (element == null && lazyCreate) {
    element = document2.createElement("div");
    element.setAttribute("id", "ngb-live");
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    element.classList.add("visually-hidden");
    document2.body.appendChild(element);
  }
  return element;
}
var Live = class _Live {
  constructor() {
    this._document = inject(DOCUMENT);
    this._delay = inject(ARIA_LIVE_DELAY);
  }
  ngOnDestroy() {
    const element = getLiveElement(this._document);
    if (element) {
      element.parentElement.removeChild(element);
    }
  }
  say(message) {
    const element = getLiveElement(this._document, true);
    const delay2 = this._delay;
    if (element != null) {
      element.textContent = "";
      const setText = () => element.textContent = message;
      if (delay2 === null) {
        setText();
      } else {
        setTimeout(setText, delay2);
      }
    }
  }
  static {
    this.\u0275fac = function Live_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Live)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Live,
      factory: _Live.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Live, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbTypeaheadConfig = class _NgbTypeaheadConfig {
  constructor() {
    this.editable = true;
    this.focusFirst = true;
    this.selectOnExact = false;
    this.showHint = false;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
  }
  static {
    this.\u0275fac = function NgbTypeaheadConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbTypeaheadConfig,
      factory: _NgbTypeaheadConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbTypeaheadWindow = class _NgbTypeaheadWindow {
  constructor() {
    this.activeIdx = 0;
    this.focusFirst = true;
    this.formatter = toString;
    this.selectEvent = new EventEmitter();
    this.activeChangeEvent = new EventEmitter();
  }
  hasActive() {
    return this.activeIdx > -1 && this.activeIdx < this.results.length;
  }
  getActive() {
    return this.results[this.activeIdx];
  }
  markActive(activeIdx) {
    this.activeIdx = activeIdx;
    this._activeChanged();
  }
  next() {
    if (this.activeIdx === this.results.length - 1) {
      this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
    } else {
      this.activeIdx++;
    }
    this._activeChanged();
  }
  prev() {
    if (this.activeIdx < 0) {
      this.activeIdx = this.results.length - 1;
    } else if (this.activeIdx === 0) {
      this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
    } else {
      this.activeIdx--;
    }
    this._activeChanged();
  }
  resetActive() {
    this.activeIdx = this.focusFirst ? 0 : -1;
    this._activeChanged();
  }
  select(item) {
    this.selectEvent.emit(item);
  }
  ngOnInit() {
    this.resetActive();
  }
  _activeChanged() {
    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0);
  }
  static {
    this.\u0275fac = function NgbTypeaheadWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadWindow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbTypeaheadWindow,
      selectors: [["ngb-typeahead-window"]],
      hostAttrs: ["role", "listbox"],
      hostVars: 3,
      hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275classMap("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
        }
      },
      inputs: {
        id: "id",
        focusFirst: "focusFirst",
        results: "results",
        term: "term",
        formatter: "formatter",
        resultTemplate: "resultTemplate",
        popupClass: "popupClass"
      },
      outputs: {
        selectEvent: "select",
        activeChangeEvent: "activeChange"
      },
      exportAs: ["ngbTypeaheadWindow"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 4,
      vars: 0,
      consts: [["rt", ""], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "active"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "mouseenter", "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbTypeaheadWindow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
          \u0275\u0275repeaterCreate(2, NgbTypeaheadWindow_For_3_Template, 2, 9, "button", 1, \u0275\u0275repeaterTrackByIndex);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx.results);
        }
      },
      dependencies: [NgbHighlight, NgTemplateOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadWindow, [{
    type: Component,
    args: [{
      selector: "ngb-typeahead-window",
      exportAs: "ngbTypeaheadWindow",
      standalone: true,
      imports: [NgbHighlight, NgTemplateOutlet],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "(mousedown)": "$event.preventDefault()",
        "[class]": '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
        role: "listbox",
        "[id]": "id"
      },
      template: `
		<ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
			<ngb-highlight [result]="formatter(result)" [term]="term" />
		</ng-template>
		@for (result of results; track $index) {
			<button
				type="button"
				class="dropdown-item"
				role="option"
				[id]="id + '-' + $index"
				[class.active]="$index === activeIdx"
				(mouseenter)="markActive($index)"
				(click)="select(result)"
			>
				<ng-template
					[ngTemplateOutlet]="resultTemplate || rt"
					[ngTemplateOutletContext]="{ result: result, term: term, formatter: formatter }"
				/>
			</button>
		}
	`
    }]
  }], null, {
    id: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    term: [{
      type: Input
    }],
    formatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectEvent: [{
      type: Output,
      args: ["select"]
    }],
    activeChangeEvent: [{
      type: Output,
      args: ["activeChange"]
    }]
  });
})();
var nextWindowId = 0;
var NgbTypeahead = class _NgbTypeahead {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._config = inject(NgbTypeaheadConfig);
    this._live = inject(Live);
    this._document = inject(DOCUMENT);
    this._ngZone = inject(NgZone);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._popupService = new PopupService(NgbTypeaheadWindow);
    this._positioning = ngbPositioning();
    this._subscription = null;
    this._closed$ = new Subject();
    this._inputValueBackup = null;
    this._inputValueForSelectOnExact = null;
    this._valueChanges$ = fromEvent(this._nativeElement, "input").pipe(map(($event) => $event.target.value));
    this._resubscribeTypeahead$ = new BehaviorSubject(null);
    this._windowRef = null;
    this.autocomplete = "off";
    this.container = this._config.container;
    this.editable = this._config.editable;
    this.focusFirst = this._config.focusFirst;
    this.selectOnExact = this._config.selectOnExact;
    this.showHint = this._config.showHint;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.selectItem = new EventEmitter();
    this.activeDescendant = null;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;
    this._onTouched = () => {
    };
    this._onChange = (_) => {
    };
  }
  ngOnInit() {
    this._subscribeToUserInput();
  }
  ngOnChanges({
    ngbTypeahead
  }) {
    if (ngbTypeahead && !ngbTypeahead.firstChange) {
      this._unsubscribeFromUserInput();
      this._subscribeToUserInput();
    }
  }
  ngOnDestroy() {
    this._closePopup();
    this._unsubscribeFromUserInput();
  }
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  writeValue(value) {
    this._writeInputValue(this._formatItemForInput(value));
    if (this.showHint) {
      this._inputValueBackup = value;
    }
  }
  setDisabledState(isDisabled) {
    this._nativeElement.disabled = isDisabled;
  }
  /**
   * Dismisses typeahead popup window
   */
  dismissPopup() {
    if (this.isPopupOpen()) {
      this._resubscribeTypeahead$.next(null);
      this._closePopup();
      if (this.showHint && this._inputValueBackup !== null) {
        this._writeInputValue(this._inputValueBackup);
      }
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Returns true if the typeahead popup window is displayed
   */
  isPopupOpen() {
    return this._windowRef != null;
  }
  handleBlur() {
    this._resubscribeTypeahead$.next(null);
    this._onTouched();
  }
  handleKeyDown(event) {
    if (!this.isPopupOpen()) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this._windowRef.instance.next();
        this._showHint();
        break;
      case "ArrowUp":
        event.preventDefault();
        this._windowRef.instance.prev();
        this._showHint();
        break;
      case "Enter":
      case "Tab": {
        const result = this._windowRef.instance.getActive();
        if (isDefined(result)) {
          event.preventDefault();
          event.stopPropagation();
          this._selectResult(result);
        }
        this._closePopup();
        break;
      }
    }
  }
  _openPopup() {
    if (!this.isPopupOpen()) {
      this._inputValueBackup = this._nativeElement.value;
      const {
        windowRef
      } = this._popupService.open();
      this._windowRef = windowRef;
      this._windowRef.setInput("id", this.popupId);
      this._windowRef.setInput("popupClass", this.popupClass);
      this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
      this._windowRef.instance.activeChangeEvent.subscribe((activeId) => this.activeDescendant = activeId);
      if (this.container === "body") {
        this._windowRef.location.nativeElement.style.zIndex = "1055";
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._changeDetector.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        if (this._windowRef) {
          this._positioning.createPopper({
            hostElement: this._nativeElement,
            targetElement: this._windowRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterRender(() => {
            this._positioning.update();
          }, {
            phase: AfterRenderPhase.MixedReadWrite,
            injector: this._injector
          });
        }
      });
      ngbAutoClose(this._ngZone, this._document, "outside", () => this.dismissPopup(), this._closed$, [this._nativeElement, this._windowRef.location.nativeElement]);
    }
  }
  _closePopup() {
    this._popupService.close().subscribe(() => {
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._closed$.next();
      this._windowRef = null;
      this.activeDescendant = null;
    });
  }
  _selectResult(result) {
    let defaultPrevented = false;
    this.selectItem.emit({
      item: result,
      preventDefault: () => {
        defaultPrevented = true;
      }
    });
    this._resubscribeTypeahead$.next(null);
    if (!defaultPrevented) {
      this.writeValue(result);
      this._onChange(result);
    }
  }
  _selectResultClosePopup(result) {
    this._selectResult(result);
    this._closePopup();
  }
  _showHint() {
    if (this.showHint && this._windowRef?.instance.hasActive() && this._inputValueBackup != null) {
      const userInputLowerCase = this._inputValueBackup.toLowerCase();
      const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
      if (userInputLowerCase === formattedVal.substring(0, this._inputValueBackup.length).toLowerCase()) {
        this._writeInputValue(this._inputValueBackup + formattedVal.substring(this._inputValueBackup.length));
        this._nativeElement["setSelectionRange"].apply(this._nativeElement, [this._inputValueBackup.length, formattedVal.length]);
      } else {
        this._writeInputValue(formattedVal);
      }
    }
  }
  _formatItemForInput(item) {
    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
  }
  _writeInputValue(value) {
    this._nativeElement.value = toString(value);
  }
  _subscribeToUserInput() {
    const results$ = this._valueChanges$.pipe(tap((value) => {
      this._inputValueBackup = this.showHint ? value : null;
      this._inputValueForSelectOnExact = this.selectOnExact ? value : null;
      this._onChange(this.editable ? value : void 0);
    }), this.ngbTypeahead ? this.ngbTypeahead : () => of([]));
    this._subscription = this._resubscribeTypeahead$.pipe(switchMap(() => results$)).subscribe((results) => {
      if (!results || results.length === 0) {
        this._closePopup();
      } else {
        if (this.selectOnExact && results.length === 1 && this._formatItemForInput(results[0]) === this._inputValueForSelectOnExact) {
          this._selectResult(results[0]);
          this._closePopup();
        } else {
          this._openPopup();
          this._windowRef.setInput("focusFirst", this.focusFirst);
          this._windowRef.setInput("results", results);
          this._windowRef.setInput("term", this._nativeElement.value);
          if (this.resultFormatter) {
            this._windowRef.setInput("formatter", this.resultFormatter);
          }
          if (this.resultTemplate) {
            this._windowRef.setInput("resultTemplate", this.resultTemplate);
          }
          this._windowRef.instance.resetActive();
          this._windowRef.changeDetectorRef.detectChanges();
          this._showHint();
        }
      }
      const count = results ? results.length : 0;
      this._live.say(count === 0 ? "No results available" : `${count} result${count === 1 ? "" : "s"} available`);
    });
  }
  _unsubscribeFromUserInput() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._subscription = null;
  }
  static {
    this.\u0275fac = function NgbTypeahead_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeahead)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgbTypeahead,
      selectors: [["input", "ngbTypeahead", ""]],
      hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox"],
      hostVars: 7,
      hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("blur", function NgbTypeahead_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("autocomplete", ctx.autocomplete);
          \u0275\u0275attribute("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
          \u0275\u0275classProp("open", ctx.isPopupOpen());
        }
      },
      inputs: {
        autocomplete: "autocomplete",
        container: "container",
        editable: "editable",
        focusFirst: "focusFirst",
        inputFormatter: "inputFormatter",
        ngbTypeahead: "ngbTypeahead",
        resultFormatter: "resultFormatter",
        resultTemplate: "resultTemplate",
        selectOnExact: "selectOnExact",
        showHint: "showHint",
        placement: "placement",
        popperOptions: "popperOptions",
        popupClass: "popupClass"
      },
      outputs: {
        selectItem: "selectItem"
      },
      exportAs: ["ngbTypeahead"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTypeahead),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeahead, [{
    type: Directive,
    args: [{
      selector: "input[ngbTypeahead]",
      exportAs: "ngbTypeahead",
      standalone: true,
      host: {
        "(blur)": "handleBlur()",
        "[class.open]": "isPopupOpen()",
        "(keydown)": "handleKeyDown($event)",
        "[autocomplete]": "autocomplete",
        autocapitalize: "off",
        autocorrect: "off",
        role: "combobox",
        "[attr.aria-autocomplete]": 'showHint ? "both" : "list"',
        "[attr.aria-activedescendant]": "activeDescendant",
        "[attr.aria-owns]": "isPopupOpen() ? popupId : null",
        "[attr.aria-expanded]": "isPopupOpen()"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTypeahead),
        multi: true
      }]
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    inputFormatter: [{
      type: Input
    }],
    ngbTypeahead: [{
      type: Input
    }],
    resultFormatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    selectOnExact: [{
      type: Input
    }],
    showHint: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectItem: [{
      type: Output
    }]
  });
})();
var NgbTypeaheadModule = class _NgbTypeaheadModule {
  static {
    this.\u0275fac = function NgbTypeaheadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbTypeaheadModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadModule, [{
    type: NgModule,
    args: [{
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    }]
  }], null, null);
})();
var NgbOffcanvasConfig = class _NgbOffcanvasConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.backdrop = true;
    this.keyboard = true;
    this.position = "start";
    this.scroll = false;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.\u0275fac = function NgbOffcanvasConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbOffcanvasConfig,
      factory: _NgbOffcanvasConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbActiveOffcanvas = class {
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbOffcanvasRef.result` promise will be resolved with the provided value.
   */
  close(result) {
  }
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
  }
};
var NgbOffcanvasRef = class {
  /**
   * The instance of a component used for the offcanvas content.
   *
   * When a `TemplateRef` is used as the content or when the offcanvas is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the offcanvas is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   */
  get closed() {
    return this._closed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when the offcanvas is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when both offcanvas window and backdrop are closed and animations were finished.
   * At this point offcanvas and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when offcanvas is fully visible and animation was finished.
   * The offcanvas DOM element is always available synchronously after calling 'offcanvas.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if offcanvas is closed before open animation is finished.
   */
  get shown() {
    return this._panelCmptRef.instance.shown.asObservable();
  }
  constructor(_panelCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._panelCmptRef = _panelCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new Subject();
    this._dismissed = new Subject();
    this._hidden = new Subject();
    _panelCmptRef.instance.dismissEvent.subscribe((reason) => {
      this.dismiss(reason);
    });
    if (_backdropCmptRef) {
      _backdropCmptRef.instance.dismissEvent.subscribe((reason) => {
        this.dismiss(reason);
      });
    }
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {
    });
  }
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._panelCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeOffcanvasElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeOffcanvasElements();
  }
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._panelCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise2(dismiss)) {
          dismiss.then((result) => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {
          });
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeOffcanvasElements() {
    const panelTransition$ = this._panelCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(void 0);
    panelTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._panelCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._panelCmptRef.destroy();
      this._contentRef?.viewRef?.destroy();
      this._panelCmptRef = null;
      this._contentRef = null;
    });
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    zip(panelTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
};
var OffcanvasDismissReasons;
(function(OffcanvasDismissReasons2) {
  OffcanvasDismissReasons2[OffcanvasDismissReasons2["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  OffcanvasDismissReasons2[OffcanvasDismissReasons2["ESC"] = 1] = "ESC";
})(OffcanvasDismissReasons || (OffcanvasDismissReasons = {}));
var NgbOffcanvasBackdrop = class _NgbOffcanvasBackdrop {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this.dismissEvent = new EventEmitter();
  }
  ngOnInit() {
    afterNextRender(() => ngbRunTransition(this._zone, this._nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show");
    }, {
      animation: this.animation,
      runningTransition: "continue"
    }), {
      injector: this._injector,
      phase: AfterRenderPhase.MixedReadWrite
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation: this.animation,
      runningTransition: "stop"
    });
  }
  dismiss() {
    if (!this.static) {
      this.dismissEvent.emit(OffcanvasDismissReasons.BACKDROP_CLICK);
    }
  }
  static {
    this.\u0275fac = function NgbOffcanvasBackdrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasBackdrop)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbOffcanvasBackdrop,
      selectors: [["ngb-offcanvas-backdrop"]],
      hostVars: 6,
      hostBindings: function NgbOffcanvasBackdrop_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("mousedown", function NgbOffcanvasBackdrop_mousedown_HostBindingHandler() {
            return ctx.dismiss();
          });
        }
        if (rf & 2) {
          \u0275\u0275classMap("offcanvas-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
          \u0275\u0275classProp("show", !ctx.animation)("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        backdropClass: "backdropClass",
        static: "static"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NgbOffcanvasBackdrop_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasBackdrop, [{
    type: Component,
    args: [{
      selector: "ngb-offcanvas-backdrop",
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: "",
      host: {
        "[class]": '"offcanvas-backdrop" + (backdropClass ? " " + backdropClass : "")',
        "[class.show]": "!animation",
        "[class.fade]": "animation",
        "(mousedown)": "dismiss()"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    backdropClass: [{
      type: Input
    }],
    static: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbOffcanvasPanel = class _NgbOffcanvasPanel {
  constructor() {
    this._document = inject(DOCUMENT);
    this._elRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._closed$ = new Subject();
    this._elWithFocus = null;
    this.keyboard = true;
    this.position = "start";
    this.dismissEvent = new EventEmitter();
    this.shown = new Subject();
    this.hidden = new Subject();
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    afterNextRender(() => this._show(), {
      injector: this._injector,
      phase: AfterRenderPhase.MixedReadWrite
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const context = {
      animation: this.animation,
      runningTransition: "stop"
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element) => {
      element.classList.remove("showing");
      element.classList.add("hiding");
      return () => element.classList.remove("show", "hiding");
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return offcanvasTransition$;
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: "continue"
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show", "showing");
      return () => element.classList.remove("showing");
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      fromEvent(nativeElement, "keydown").pipe(takeUntil(this._closed$), filter((e) => e.key === "Escape")).subscribe((event) => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(OffcanvasDismissReasons.ESC));
            }
          });
        }
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus["focus"] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
  static {
    this.\u0275fac = function NgbOffcanvasPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgbOffcanvasPanel,
      selectors: [["ngb-offcanvas-panel"]],
      hostAttrs: ["role", "dialog", "tabindex", "-1"],
      hostVars: 5,
      hostBindings: function NgbOffcanvasPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
          \u0275\u0275classMap("offcanvas offcanvas-" + ctx.position + (ctx.panelClass ? " " + ctx.panelClass : ""));
        }
      },
      inputs: {
        animation: "animation",
        ariaLabelledBy: "ariaLabelledBy",
        ariaDescribedBy: "ariaDescribedBy",
        keyboard: "keyboard",
        panelClass: "panelClass",
        position: "position"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function NgbOffcanvasPanel_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasPanel, [{
    type: Component,
    args: [{
      selector: "ngb-offcanvas-panel",
      standalone: true,
      template: "<ng-content />",
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class]": '"offcanvas offcanvas-" + position  + (panelClass ? " " + panelClass : "")',
        role: "dialog",
        tabindex: "-1",
        "[attr.aria-modal]": "true",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-describedby]": "ariaDescribedBy"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbOffcanvasStack = class _NgbOffcanvasStack {
  constructor() {
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._document = inject(DOCUMENT);
    this._scrollBar = inject(ScrollBar);
    this._activePanelCmptHasChanged = new Subject();
    this._scrollBarRestoreFn = null;
    this._backdropAttributes = ["animation", "backdropClass"];
    this._panelAttributes = ["animation", "ariaDescribedBy", "ariaLabelledBy", "keyboard", "panelClass", "position"];
    this._activeInstance = new EventEmitter();
    const ngZone = inject(NgZone);
    this._activePanelCmptHasChanged.subscribe(() => {
      if (this._panelCmpt) {
        ngbFocusTrap(ngZone, this._panelCmpt.location.nativeElement, this._activePanelCmptHasChanged);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    if (!containerEl) {
      throw new Error(`The specified offcanvas container "${options.container || "body"}" was not found in the DOM.`);
    }
    if (!options.scroll) {
      this._hideScrollBar();
    }
    const activeOffcanvas = new NgbActiveOffcanvas();
    const contentRef = this._getContentRef(options.injector || contentInjector, content, activeOffcanvas);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : void 0;
    let panelCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbOffcanvasRef = new NgbOffcanvasRef(panelCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerOffcanvasRef(ngbOffcanvasRef);
    this._registerPanelCmpt(panelCmptRef);
    ngbOffcanvasRef.hidden.pipe(finalize(() => this._restoreScrollBar())).subscribe();
    activeOffcanvas.close = (result) => {
      ngbOffcanvasRef.close(result);
    };
    activeOffcanvas.dismiss = (reason) => {
      ngbOffcanvasRef.dismiss(reason);
    };
    this._applyPanelOptions(panelCmptRef.instance, options);
    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    panelCmptRef.changeDetectorRef.detectChanges();
    return ngbOffcanvasRef;
  }
  get activeInstance() {
    return this._activeInstance;
  }
  dismiss(reason) {
    this._offcanvasRef?.dismiss(reason);
  }
  hasOpenOffcanvas() {
    return !!this._offcanvasRef;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = createComponent(NgbOffcanvasBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let panelCmptRef = createComponent(NgbOffcanvasPanel, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(panelCmptRef.hostView);
    containerEl.appendChild(panelCmptRef.location.nativeElement);
    return panelCmptRef;
  }
  _applyPanelOptions(windowInstance, options) {
    this._panelAttributes.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }
  _applyBackdropOptions(backdropInstance, options) {
    this._backdropAttributes.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
    backdropInstance.static = options.backdrop === "static";
  }
  _getContentRef(contentInjector, content, activeOffcanvas) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeOffcanvas);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, content, activeOffcanvas);
    }
  }
  _createFromTemplateRef(templateRef, activeOffcanvas) {
    const context = {
      $implicit: activeOffcanvas,
      close(result) {
        activeOffcanvas.close(result);
      },
      dismiss(reason) {
        activeOffcanvas.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, componentType, context) {
    const elementInjector = Injector.create({
      providers: [{
        provide: NgbActiveOffcanvas,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = createComponent(componentType, {
      environmentInjector: this._applicationRef.injector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _registerOffcanvasRef(ngbOffcanvasRef) {
    const unregisterOffcanvasRef = () => {
      this._offcanvasRef = void 0;
      this._activeInstance.emit(this._offcanvasRef);
    };
    this._offcanvasRef = ngbOffcanvasRef;
    this._activeInstance.emit(this._offcanvasRef);
    ngbOffcanvasRef.result.then(unregisterOffcanvasRef, unregisterOffcanvasRef);
  }
  _registerPanelCmpt(ngbPanelCmpt) {
    this._panelCmpt = ngbPanelCmpt;
    this._activePanelCmptHasChanged.next();
    ngbPanelCmpt.onDestroy(() => {
      this._panelCmpt = void 0;
      this._activePanelCmptHasChanged.next();
    });
  }
  static {
    this.\u0275fac = function NgbOffcanvasStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasStack)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbOffcanvasStack,
      factory: _NgbOffcanvasStack.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasStack, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbOffcanvas = class _NgbOffcanvas {
  constructor() {
    this._injector = inject(Injector);
    this._offcanvasStack = inject(NgbOffcanvasStack);
    this._config = inject(NgbOffcanvasConfig);
  }
  /**
   * Opens a new offcanvas panel with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveOffcanvas` class. You can then
   * use `NgbActiveOffcanvas` methods to close / dismiss offcanvas from "inside" of your component.
   *
   * Also see the [`NgbOffcanvasOptions`](#/components/offcanvas/api#NgbOffcanvasOptions) for the list of supported
   * options.
   */
  open(content, options = {}) {
    const combinedOptions = __spreadValues(__spreadProps(__spreadValues({}, this._config), {
      animation: this._config.animation
    }), options);
    return this._offcanvasStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active offcanvas instance.
   */
  get activeInstance() {
    return this._offcanvasStack.activeInstance;
  }
  /**
   * Dismisses the currently displayed offcanvas with the supplied reason.
   */
  dismiss(reason) {
    this._offcanvasStack.dismiss(reason);
  }
  /**
   * Indicates if there is currently an open offcanvas in the application.
   */
  hasOpenOffcanvas() {
    return this._offcanvasStack.hasOpenOffcanvas();
  }
  static {
    this.\u0275fac = function NgbOffcanvas_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvas)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgbOffcanvas,
      factory: _NgbOffcanvas.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvas, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbOffcanvasModule = class _NgbOffcanvasModule {
  static {
    this.\u0275fac = function NgbOffcanvasModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbOffcanvasModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var NGB_MODULES = [NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule];
var NgbModule = class _NgbModule {
  static {
    this.\u0275fac = function NgbModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgbModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [NGB_MODULES, NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModule, [{
    type: NgModule,
    args: [{
      imports: NGB_MODULES,
      exports: NGB_MODULES
    }]
  }], null, null);
})();

// src/app/components/about-us/about-us.component.ts
function AboutUsComponent_35_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slide_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r1.caption);
  }
}
function AboutUsComponent_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_35_ng_template_0_Template, 5, 2, "ng-template", 20);
  }
}
var AboutUsComponent = class _AboutUsComponent {
  slides = [
    { image: "img1.jpg", caption: "Gurkha Cup, San Francisco, 2023" },
    { image: "img2.jpg", caption: "Gurkha Cup, San Francisco, 2023 35+" },
    { image: "img3.jpg", caption: "New Year Cup, Seattle, 2022" },
    { image: "img5.jpg", caption: "NAC, Baltimore, 2022" },
    { image: "img6.jpg", caption: "Dashain Cup, Dallas Texas, 2022" },
    { image: "img7.jpg", caption: "Bay Area Cup, San Francisco, 2020" },
    { image: "img8.jpg", caption: "Dashain Cup, Dallas Texas, 2019" },
    { image: "img9.jpg", caption: "Dashain Cup, Dallas Texas, 2018" },
    { image: "img10.jpg", caption: "Gurkha Cup, San Francisco, 2018" },
    { image: "img14.jpg", caption: "NAC, Virgina, 2018" },
    { image: "img11.jpg", caption: "Sunday League, Pomona, 2018" },
    { image: "img13.jpg", caption: "New Year Cup, Dallas Texas, 2017" },
    { image: "img12.jpg", caption: "Bay Area Cup, San Francisco, 2017" },
    { image: "img15.jpg", caption: "NAC, Dallas Texas, 2017" }
  ];
  static \u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 2, consts: [[1, "container", "mx-auto", "flex", "flex-col", "items-center", "mt-16"], [1, "flex", "w-full", "justify-center", "h-auto", "md:h-auto"], [1, "w-full", "md:w-1/2"], ["src", "img4.jpg", "alt", "Team Spirit", 1, "w-full", "h-64", "mt-8", "md:h-96", "object-cover"], [1, "text-center", "text-white", "bg-black", "bg-opacity-50", "py-2"], [1, "text-center", "mt-6", "px-4"], [1, "bg-sky-600", "text-white", "py-12", "px-6", "text-center"], [1, "text-5xl", "font-bold", "mb-6", "text-black"], [1, "mt-2", "text-lg", "mb-6", "text-white", "font-semibold", "italic"], [1, "text-lg", "leading-relaxed"], [1, "mt-10"], [1, "text-3xl", "text-black", "font-bold", "mb-4"], [1, "text-md", "text-white-700"], [1, "text-3xl", "font-bold", "text-black", "mb-4"], [1, "flex", "flex-wrap", "justify-center", "gap-6", "text-center"], [1, "bg-white", "text-black", "px-6", "py-4", "rounded-lg", "w-40"], [1, "text-3xl", "font-bold", "text-black", "mb-4", "mt-4"], [1, "pt-4"], ["mt-4", "", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-image-container"], ["alt", "Slide image", 3, "src"], [1, "carousel-caption"]], template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, " ANA Soccer Cup 2024, San Francisco ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "section", 6)(8, "h1", 7);
      \u0275\u0275text(9, "About LA Gurans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, " Uniting Talent, Spirit, and Victory ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, " Welcome to LA Gurans! Our team is driven by passion, teamwork, and a commitment to excellence on and off the field. LA Gurans is a group of soccer enthusiasts with the goal of having active social involvement in Los Angeles while being one of the most competitive Nepalese soccer teams in the US. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "h2", 11);
      \u0275\u0275text(16, "Our Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, " Since our founding, LA Gurans has grown from a local favorite to a formidable force, competing with the best and delivering memorable performances. Our fans are our heartbeat, and together, we\u2019ve set records and reached milestones. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 10)(20, "h2", 13);
      \u0275\u0275text(21, "Core Values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ul", 14)(23, "li", 15);
      \u0275\u0275text(24, "Integrity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li", 15);
      \u0275\u0275text(26, "Teamwork");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "li", 15);
      \u0275\u0275text(28, " Resilience ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li", 15);
      \u0275\u0275text(30, "Passion");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "h2", 16);
      \u0275\u0275text(32, " Previous Participations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "section", 17)(34, "ngb-carousel", 18);
      \u0275\u0275template(35, AboutUsComponent_35_Template, 1, 0, null, 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(34);
      \u0275\u0275property("interval", 5e3);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.slides);
    }
  }, dependencies: [NgbCarouselModule, NgbCarousel, NgbSlide, CommonModule, NgForOf], styles: ["\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.carousel-image-container[_ngcontent-%COMP%] {\n  height: 450px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n  object-fit: cover;\n  transition: opacity 0.5s ease;\n}\n@media (min-width: 768px) {\n  .md\\:h-96[_ngcontent-%COMP%] {\n    height: 29rem;\n  }\n}\n@media (max-width: 768px) {\n  .carousel-image-container[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src\\app\\components\\about-us\\about-us.component.ts", lineNumber: 12 });
})();

// src/app/components/members/members.component.ts
function MembersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r1.name, " ");
  }
}
var MembersComponent = class _MembersComponent {
  members = [
    { name: "Amit Gurung", position: "Member" },
    { name: "Prajwol Shakya", position: "Member" },
    { name: "Samarpan Prasai", position: "Member" },
    { name: "Sohan Thapa", position: "Member" },
    { name: "Bibek Adhikari", position: "Member" },
    { name: "Aayush Bhattarai", position: "Member" },
    { name: "Ajay Kc", position: "Member" },
    { name: "Sagar Leembu", position: "Member" },
    { name: "Saurav Leembu", position: "Member" },
    { name: "Kritiswa Aryal", position: "Member" },
    { name: "Surendra Gurung", position: "Member" },
    { name: "Raju Aryal", position: "Member" },
    { name: "Nabin Rimal", position: "Member" },
    { name: "Bikesh KC", position: "Member" },
    { name: "Manish Khadka", position: "Member" },
    { name: "Suman Ghale", position: "Member" },
    { name: "Tilak Purja", position: "Member" },
    { name: "Pardip Niraula", position: "Member" },
    { name: "Asish Pradhan", position: "Member" },
    { name: "Rojil Niraula", position: "Member" },
    { name: "Ronal Dhungel", position: "Member" },
    { name: "Shlok Wagle", position: "Member" },
    { name: "Nikol Shrestha", position: "Member" },
    { name: "Sagar Khadka", position: "Member" },
    { name: "Sandesh Parajuli", position: "Member" },
    { name: "Saksham Thapa", position: "Member" },
    { name: "Sohan khadka", position: "Member" },
    { name: "Bikesh Shrestha", position: "Member" },
    { name: "Kushal KC", position: "Member" },
    { name: "Sushant Singh", position: "Member" },
    { name: "Prabin Tuladhar", position: "Member" },
    { name: "Sujit Gurung", position: "Member" },
    { name: "Rohan Pandey", position: "Member" },
    { name: "Shreeyash Dhakal", position: "Member" },
    { name: "Aakash Bhandari", position: "Member" }
  ];
  static \u0275fac = function MembersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembersComponent, selectors: [["app-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "py-10", "mt-16"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-center", "mb-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-lg shadow-md p-1 pt-2", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow-md", "p-1", "pt-2"], [1, "text-xl", "font-semibold", "mb-2", "text-center"]], template: function MembersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275template(5, MembersComponent_div_5_Template, 3, 1, "div", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.members);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n/*# sourceMappingURL=members.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembersComponent, { className: "MembersComponent", filePath: "src\\app\\components\\members\\members.component.ts", lineNumber: 11 });
})();

// src/app/components/tournament/tournament.component.ts
var _c04 = (a0) => ({ "border-b-2 border-blue-600 text-blue-600": a0 });
function TournamentComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h6");
    \u0275\u0275text(2, "Player Registration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 18)(4, "li");
    \u0275\u0275text(5, " Every Individual player must show a government issued ID for verification and sign a waiver form on the day or before the tournament. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, " No Outside Food or Alcohol: Strictly prohibited inside the complex. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, " Teams are responsible for disposing of trash in designated areas. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h6");
    \u0275\u0275text(11, "Game Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 18)(13, "li");
    \u0275\u0275text(14, "First round follows a points-based league format.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, " League and quarter-final games: 25 min per half. Semi-finals and finals: 30 min per half. Tied points/goal difference will be settled by 5 min extra time in Quarter Finals, Semi Finals and Finals. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Teams more than 10 minutes late will forfeit (2-0 score).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h6");
    \u0275\u0275text(20, "Team Setup:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 18)(22, "li");
    \u0275\u0275text(23, " Regular bracket: 12 players. Seven on-field, unlimited substitutions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, " 35+ bracket: 12 players. Seven on-field, unlimited substitutions. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "h6");
    \u0275\u0275text(27, "Player IDs:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 18)(29, "li");
    \u0275\u0275text(30, " All players must be on the roster to play. For the 35+ category, government-issued ID and a physical passport are required for secondary verification if asked by the organizers. (DOB year should be before January 31");
    \u0275\u0275elementStart(31, "sup");
    \u0275\u0275text(32, "st");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, ", 1990)");
    \u0275\u0275elementStart(34, "sup");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "h6");
    \u0275\u0275text(37, "Equipment:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ul", 18)(39, "li");
    \u0275\u0275text(40, " Full team uniforms, proper footwear, and shin guards are mandatory. No jewelry or metal-studded cleats. The team that registered first chooses their jersey if there is a color clash. Pennies will be provided by the organizers if no team has a secondary Jersey. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "h6");
    \u0275\u0275text(42, "Eligibility:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ul", 18)(44, "li");
    \u0275\u0275text(45, " No foreign players allowed. If questioned, the respective player\u2019s community verification is required. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, " One player can only play for one team under the same category. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, " For the 35+ category, as long as the BIRTH YEAR is January 31");
    \u0275\u0275elementStart(50, "sup");
    \u0275\u0275text(51, "st");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " 1990 or before, you are eligible to play. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h6");
    \u0275\u0275text(54, "Punctuality:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ul", 18)(56, "li");
    \u0275\u0275text(57, "Teams must arrive 30 minutes early.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "h6");
    \u0275\u0275text(59, "Conduct:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ul", 18)(61, "li");
    \u0275\u0275text(62, " Officials\u2019 decisions are final. Fights, fake IDs, or inappropriate behavior will lead to disqualification. No vulgar language allowed. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "h6");
    \u0275\u0275text(64, "Direct and Indirect Kicks:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "ul", 18)(66, "li");
    \u0275\u0275text(67, " When the ball goes out of play along the sidelines, the game is restarted with a kick-in, not a throw-in. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, " A goal can be scored directly from any kick off except Goal Kick. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "h6");
    \u0275\u0275text(71, "Goalkeeper Restrictions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ul", 18)(73, "li");
    \u0275\u0275text(74, " A direct goal from the goalkeeper is not allowed meaning the ball must touch another player first. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "h6");
    \u0275\u0275text(76, "Tackling:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ul", 18)(78, "li");
    \u0275\u0275text(79, " Any physical challenges will be deemed a foul, and the referee will penalize accordingly. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "li");
    \u0275\u0275text(81, " Slide tackling is only permitted to reach a cross or to keep a ball in play. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "h6");
    \u0275\u0275text(83, "Substitutes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ul", 18)(85, "li");
    \u0275\u0275text(86, " Unlimited substitutions are allowed as long as the referee is made aware of the changes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li");
    \u0275\u0275text(88, " Substitutes must enter and leave the field of play at the referees discretion. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "h6");
    \u0275\u0275text(90, "Referee Decisions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "ul", 18)(92, "li");
    \u0275\u0275text(93, " The referee\u2019s decision is FINAL on all matters during the game, including fouls, cards, and other in-game situations. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "h6");
    \u0275\u0275text(95, "FIFA Regulations:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ul", 18)(97, "li");
    \u0275\u0275text(98, "For all other rules the laws of FIFA will apply.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "h6");
    \u0275\u0275text(100, "Final Decisions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "ul", 18)(102, "li");
    \u0275\u0275text(103, " Organizers and management reserve the right to make necessary changes. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "h6");
    \u0275\u0275text(105, " Note : 2 player/s changes or modifications to the team roster will be allowed after tie sheet draw and before January 17th 5PM PST, 2025. ");
    \u0275\u0275elementEnd()();
  }
}
function TournamentComponent_div_37_ul_7_li_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(player_r5);
  }
}
function TournamentComponent_div_37_ul_7_li_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, TournamentComponent_div_37_ul_7_li_1_ul_7_li_1_Template, 2, 1, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", team_r6.roster);
  }
}
function TournamentComponent_div_37_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26)(1, "div", 27)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function TournamentComponent_div_37_ul_7_li_1_Template_button_click_4_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRoster(i_r4));
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6, " + ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TournamentComponent_div_37_ul_7_li_1_ul_7_Template, 2, 1, "ul", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r6 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-45", ctx_r1.showRosterIndex === i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showRosterIndex === i_r4);
  }
}
function TournamentComponent_div_37_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 24);
    \u0275\u0275template(1, TournamentComponent_div_37_ul_7_li_1_Template, 8, 4, "li", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.teamsRegular);
  }
}
function TournamentComponent_div_37_div_8_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 52)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r7.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r7.field1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r7.field2, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r7.field3, " ");
  }
}
function TournamentComponent_div_37_div_8_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r8.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r8.field1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r8.field2, " ");
  }
}
function TournamentComponent_div_37_div_8_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r9.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r9.field1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r9.field2, " ");
  }
}
function TournamentComponent_div_37_div_8_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r10.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r10.field1, " ");
  }
}
function TournamentComponent_div_37_div_8_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r11.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r11.field2, " ");
  }
}
function TournamentComponent_div_37_div_8_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r12.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r12.field1, " ");
  }
}
function TournamentComponent_div_37_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 34);
    \u0275\u0275text(2, "Fixtures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "**Subject to Change**");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 35)(6, "b");
    \u0275\u0275text(7, "Day 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4", 36);
    \u0275\u0275text(9, "Group Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6");
    \u0275\u0275text(11, "Game Duration: 50 minutes (25 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37)(13, "table", 38)(14, "thead")(15, "tr", 39)(16, "th", 40);
    \u0275\u0275text(17, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 40);
    \u0275\u0275text(19, " Field 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 40);
    \u0275\u0275text(21, " Field 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 40);
    \u0275\u0275text(23, " Field 3 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody", 41);
    \u0275\u0275template(25, TournamentComponent_div_37_div_8_tr_25_Template, 9, 4, "tr", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "h4", 36);
    \u0275\u0275text(27, "QuarterFinal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h6");
    \u0275\u0275text(29, "Game Duration: 50 minutes (25 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 37)(31, "table", 38)(32, "thead")(33, "tr", 43)(34, "th", 40);
    \u0275\u0275text(35, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 40);
    \u0275\u0275text(37, " Field 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 40);
    \u0275\u0275text(39, " Field 2 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275template(41, TournamentComponent_div_37_div_8_tr_41_Template, 7, 3, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 45)(43, "table", 38)(44, "thead")(45, "tr", 43)(46, "th", 40);
    \u0275\u0275text(47, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 40);
    \u0275\u0275text(49, " Field 3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 40);
    \u0275\u0275text(51, " Field 4 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "tbody");
    \u0275\u0275template(53, TournamentComponent_div_37_div_8_tr_53_Template, 7, 3, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "p", 46)(55, "b");
    \u0275\u0275text(56, "Day 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "h4");
    \u0275\u0275text(58, "SemiFinal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "h6");
    \u0275\u0275text(60, "Game Duration: 60 minutes (30 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 47)(62, "table", 38)(63, "thead")(64, "tr", 43)(65, "th", 48);
    \u0275\u0275text(66, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 48);
    \u0275\u0275text(68, " Field 1 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "tbody");
    \u0275\u0275template(70, TournamentComponent_div_37_div_8_tr_70_Template, 5, 2, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 47)(72, "table", 38)(73, "thead")(74, "tr", 43)(75, "th", 48);
    \u0275\u0275text(76, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th", 48);
    \u0275\u0275text(78, " Field 2 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "tbody");
    \u0275\u0275template(80, TournamentComponent_div_37_div_8_tr_80_Template, 5, 2, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "h4", 36);
    \u0275\u0275text(82, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "h6");
    \u0275\u0275text(84, "Game Duration: 60 minutes (30 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 49)(86, "table", 50)(87, "thead")(88, "tr", 51)(89, "th", 48);
    \u0275\u0275text(90, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "th", 48);
    \u0275\u0275text(92, " Field 1 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "tbody");
    \u0275\u0275template(94, TournamentComponent_div_37_div_8_tr_94_Template, 5, 2, "tr", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures4);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures4);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures6);
  }
}
function TournamentComponent_div_37_div_9_div_3_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 66)(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r13 == null ? null : team_r13.played, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r13 == null ? null : team_r13.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r13 == null ? null : team_r13.points, " ");
  }
}
function TournamentComponent_div_37_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "table", 60)(2, "thead", 61)(3, "tr", 62)(4, "th", 63);
    \u0275\u0275text(5, "GP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 64);
    \u0275\u0275text(7, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 64);
    \u0275\u0275text(9, "P");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, TournamentComponent_div_37_div_9_div_3_tr_11_Template, 7, 3, "tr", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r14 = ctx.$implicit;
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", group_r14);
  }
}
function TournamentComponent_div_37_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 57);
    \u0275\u0275text(2, "Standings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TournamentComponent_div_37_div_9_div_3_Template, 12, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.standingsGroups);
  }
}
function TournamentComponent_div_37_div_10_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r15.fixture, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r15.result, " ");
  }
}
function TournamentComponent_div_37_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 70);
    \u0275\u0275text(2, "Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 71)(4, "thead")(5, "tr", 72)(6, "th", 73);
    \u0275\u0275text(7, "Fixtures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 73);
    \u0275\u0275text(9, "Results");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, TournamentComponent_div_37_div_10_tr_11_Template, 5, 2, "tr", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.results);
  }
}
function TournamentComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "button", 20);
    \u0275\u0275listener("click", function TournamentComponent_div_37_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("teamsRoster"));
    });
    \u0275\u0275elementStart(3, "h2", 21);
    \u0275\u0275text(4, " Regular Registered Team ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, " \u25BC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TournamentComponent_div_37_ul_7_Template, 2, 1, "ul", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TournamentComponent_div_37_div_8_Template, 95, 6, "div", 23)(9, TournamentComponent_div_37_div_9_Template, 4, 1, "div", 23)(10, TournamentComponent_div_37_div_10_Template, 12, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("-rotate-180", ctx_r1.showTeams);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showTeams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "fixtures");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "standings");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "results");
  }
}
function TournamentComponent_div_38_ul_7_li_1_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(player_r19);
  }
}
function TournamentComponent_div_38_ul_7_li_1_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, TournamentComponent_div_38_ul_7_li_1_ul_7_li_1_Template, 2, 1, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", team_r20.roster);
  }
}
function TournamentComponent_div_38_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26)(1, "div", 27)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function TournamentComponent_div_38_ul_7_li_1_Template_button_click_4_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle35Roster(i_r18));
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6, " + ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TournamentComponent_div_38_ul_7_li_1_ul_7_Template, 2, 1, "ul", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r20 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rotate-45", ctx_r1.showRoster35Index === i_r18);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showRoster35Index === i_r18);
  }
}
function TournamentComponent_div_38_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 24);
    \u0275\u0275template(1, TournamentComponent_div_38_ul_7_li_1_Template, 8, 4, "li", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.teams35);
  }
}
function TournamentComponent_div_38_div_8_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r21.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r21.field1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r21.field2, " ");
  }
}
function TournamentComponent_div_38_div_8_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r22.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r22.field1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r22.field2, " ");
  }
}
function TournamentComponent_div_38_div_8_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fixture_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r23.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fixture_r23.field1, " ");
  }
}
function TournamentComponent_div_38_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 81);
    \u0275\u0275text(2, "35+ Fixtures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "**Subject to Change**");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 35)(6, "b");
    \u0275\u0275text(7, "Day 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9, "Group Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h6");
    \u0275\u0275text(11, "Game Duration: 50 minutes (25 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37)(13, "table", 82)(14, "thead")(15, "tr", 72)(16, "th", 83);
    \u0275\u0275text(17, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 83);
    \u0275\u0275text(19, " Field 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 83);
    \u0275\u0275text(21, " Field 2 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, TournamentComponent_div_38_div_8_tr_23_Template, 7, 3, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p", 36)(25, "b");
    \u0275\u0275text(26, "Day 2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h4");
    \u0275\u0275text(28, "Group Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h6");
    \u0275\u0275text(30, "Game Duration: 50 minutes (25 min half + 5 min halftime)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 37)(32, "table", 82)(33, "thead")(34, "tr", 72)(35, "th", 83);
    \u0275\u0275text(36, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 83);
    \u0275\u0275text(38, " Field 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 83);
    \u0275\u0275text(40, " Field 2 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, TournamentComponent_div_38_div_8_tr_42_Template, 7, 3, "tr", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "h4", 36);
    \u0275\u0275text(44, "Final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h6", 36);
    \u0275\u0275text(46, " Game Duration: 60 minutes(30 min half + 5 min halftime) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 37)(48, "table", 50)(49, "thead")(50, "tr", 72)(51, "th", 83);
    \u0275\u0275text(52, " Time ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 83);
    \u0275\u0275text(54, " Field 1 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "tbody");
    \u0275\u0275template(56, TournamentComponent_div_38_div_8_tr_56_Template, 5, 2, "tr", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures35);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures335);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.fixtures235);
  }
}
function TournamentComponent_div_38_div_9_div_3_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r24 == null ? null : team_r24.played, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r24 == null ? null : team_r24.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r24 == null ? null : team_r24.points, " ");
  }
}
function TournamentComponent_div_38_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "table", 85)(2, "thead")(3, "tr", 72)(4, "th", 86);
    \u0275\u0275text(5, "GP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 87);
    \u0275\u0275text(7, " Team ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 87);
    \u0275\u0275text(9, " P ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, TournamentComponent_div_38_div_9_div_3_tr_11_Template, 7, 3, "tr", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r25 = ctx.$implicit;
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", group_r25);
  }
}
function TournamentComponent_div_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 84);
    \u0275\u0275text(2, "35+ Standings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TournamentComponent_div_38_div_9_div_3_Template, 12, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.standingsGroups35);
  }
}
function TournamentComponent_div_38_div_10_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r26.fixture, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r26.result, " ");
  }
}
function TournamentComponent_div_38_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h2", 84);
    \u0275\u0275text(2, "35+ Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 90)(4, "thead")(5, "tr", 72)(6, "th", 91);
    \u0275\u0275text(7, " Fixtures ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 91);
    \u0275\u0275text(9, " Results ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, TournamentComponent_div_38_div_10_tr_11_Template, 5, 2, "tr", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.results35);
  }
}
function TournamentComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 78)(2, "button", 20);
    \u0275\u0275listener("click", function TournamentComponent_div_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("teams35Roster"));
    });
    \u0275\u0275elementStart(3, "h2", 79);
    \u0275\u0275text(4, "35+ Registered Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 80);
    \u0275\u0275text(6, " \u25BC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TournamentComponent_div_38_ul_7_Template, 2, 1, "ul", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TournamentComponent_div_38_div_8_Template, 57, 3, "div", 23)(9, TournamentComponent_div_38_div_9_Template, 4, 1, "div", 23)(10, TournamentComponent_div_38_div_10_Template, 12, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("-rotate-180", ctx_r1.show35Teams);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.show35Teams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "fixtures");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "standings");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTab === "results");
  }
}
var TournamentComponent = class _TournamentComponent {
  selectedTab = "fixtures";
  selectedMainTab = "regular";
  selectMainTab(tab) {
    this.selectedMainTab = tab;
    this.selectedTab = "fixtures";
  }
  selectTab(tab) {
    this.selectedTab = tab;
  }
  standingsGroups = [
    [
      { name: "Gorkhali Squad FC", points: 0, played: 0 },
      { name: "LA Gurans Red", points: 0, played: 0 },
      { name: "Texas FC Red", points: 0, played: 0 }
    ],
    [
      { name: "Dallas Gurkhas White", points: 0, played: 0 },
      { name: "LA Gurans Blue", points: 0, played: 0 },
      { name: "Sunnyvale FC", points: 0, played: 0 }
    ],
    [
      { name: "Sagarmatha Warriors FC", points: 0, played: 0 },
      { name: "Dallas Gurkhas Red", points: 0, played: 0 },
      { name: "Texas FC Blue", points: 0, played: 0 }
    ]
  ];
  standingsGroups35 = [
    [
      { name: "Nepal Seattle FC", points: 0, played: 0 },
      { name: "DFW Himalayas", points: 0, played: 0 },
      { name: "Bay Area FC", points: 0, played: 0 },
      { name: "LA Gurans", points: 0, played: 0 }
    ]
  ];
  fixtures = [
    {
      time: "10:00 - 10:55",
      field1: "Gorkhali Squad FC vs LA Gurans Red",
      field2: "Dallas Gurkhas White vs LA Gurans Blue",
      field3: "Sagarmatha Warriors FC vs Dallas Gurkhas Red"
    },
    {
      time: "12:00 - 12:55",
      field1: "Gorkhali Squad FC vs Texas FC Red",
      field2: "Dallas Gurkhas White vs Sunnyvale FC",
      field3: "Sagarmatha Warriors FC vs Texas FC Blue"
    },
    {
      time: "2:00 - 2:55",
      field1: "LA Gurans Red vs Texas FC Red",
      field2: "LA Gurans Blue vs Sunnyvale FC",
      field3: "Dallas Gurkhas Red vs Texas FC Blue"
    }
  ];
  fixtures2 = [
    {
      time: "4:00 - 4:55",
      field1: "A (Winner) vs Best Runner Up - 1A",
      field2: "C (Winner) vs Second Best Runner Up - 1B",
      field3: ""
    }
  ];
  fixtures3 = [
    {
      time: "4:00 - 4:55",
      field1: "B (Winner) vs C (Runner Up) - 2A",
      field2: "B (Runner Up) vs A (Runner Up) - 2B",
      field3: ""
    }
  ];
  fixtures4 = [
    {
      time: "10:30 - 11:45",
      field1: "(Winner of Poll 1A vs Winner of Poll 1B)",
      field2: "(Winner of Poll 2A vs Winner of Poll 2B)",
      field3: ""
    }
  ];
  fixtures6 = [
    {
      time: "2:00 - 3:05",
      field1: "(Winner of Poll 1 vs Winner of Poll 2)",
      field2: "",
      field3: ""
    }
  ];
  fixtures35 = [
    {
      time: "11:00 - 11:55",
      field1: "Nepal Seattle FC vs DFW Himalayas",
      field2: "Bay Area FC vs LA Gurans"
    },
    {
      time: "1:00 - 1:55",
      field1: "Nepal Seattle FC vs Bay Area FC",
      field2: "DFW Himalayas vs LA Gurans"
    }
  ];
  fixtures235 = [
    {
      time: "12:30 - 1:35",
      field1: "(Winner of A vs Runner Up of A)",
      field2: ""
    }
  ];
  fixtures335 = [
    {
      time: "9:30 - 10:25",
      field1: "Nepal Seattle FC vs LA Gurans",
      field2: "DFW Himalayas vs Bay Area FC"
    }
  ];
  results = [
    { fixture: "Gorkhali Squad FC vs LA Gurans Red", result: "" },
    { fixture: "Dallas Gurkhas White vs LA Gurans Blue", result: "" },
    { fixture: "Sagarmatha Warriors FC vs Dallas Gurkhas Red", result: "" },
    { fixture: "Gorkhali Squad FC vs Texas FC Red", result: "" },
    { fixture: "Dallas Gurkhas White vs Sunnyvale FC", result: "" },
    { fixture: "Sagarmatha Warriors FC vs Texas FC Blue", result: "" },
    { fixture: "LA Gurans Red vs Texas FC Red", result: "" },
    { fixture: "LA Gurans Blue vs Sunnyvale FC", result: "" },
    { fixture: "Dallas Gurkhas Red vs Texas FC Blue", result: "" },
    { fixture: "A (Winner) vs Best Runner Up - 1A", result: "" },
    { fixture: "C (Winner) vs Second Best Runner Up - 1B", result: "" },
    { fixture: "B (Winner) vs C (Runner Up) - 2A", result: "" },
    { fixture: "B (Runner Up) vs A (Runner Up) -2B", result: "" },
    { fixture: "(Winner of Poll 1A vs Winner of Poll 1B) - A", result: "" },
    { fixture: "(Winner of Poll 2A vs Winner of Poll 2B) - B", result: "" },
    { fixture: "(Winner of Poll 1 vs Winner of Poll 2) ", result: "" }
  ];
  results35 = [
    { fixture: "Nepal Seattle FC vs DFW Himalayas", result: "" },
    { fixture: "Bay Area FC vs LA Gurans", result: "" },
    { fixture: "Nepal Seattle FC vs Bay Area FC", result: "" },
    { fixture: "DFW Himalayas vs LA Gurans", result: "" },
    { fixture: "Nepal Seattle FC vs LA Gurans", result: "" },
    { fixture: "DFW Himala vs A3", result: "" },
    { fixture: "Winner of A vs Runner up of A", result: "" }
  ];
  showTournamentRules = false;
  showTeams = false;
  show35Teams = false;
  toggleSection(section) {
    switch (section) {
      case "tournamentRules":
        this.showTournamentRules = !this.showTournamentRules;
        break;
      case "teamsRoster":
        this.showTeams = !this.showTeams;
        break;
      case "teams35Roster":
        this.show35Teams = !this.show35Teams;
        break;
      default:
        break;
    }
  }
  teamsRegular = [
    {
      name: "LA Gurans Blue",
      roster: [
        "Sajal Nepal (GK)",
        "Ronal Dhungel",
        "Shlok Wagle",
        "Kritishwa Aryal",
        "Sandesh Parajuli",
        "Sohan Thapa",
        "Ajay KC",
        "Manish Khadka",
        "Shreeyash Dhakal",
        "Nikol Shrestha",
        "Aakash Bhandari",
        "Bibek Adhikari"
      ]
    },
    {
      name: "LA Gurans Red",
      roster: [
        "Kushal Khattri",
        "Aayush Bhattarai",
        "Saurav Limbu",
        "Sagar Limbu",
        "Nabin Rimal",
        "Keshab Neupane",
        "Bikesh Shrestha",
        "Paswat Shah",
        "Sujit Gurung",
        "Amit Gurung",
        "Ramesh Dangal",
        "Aaryav Adhikari"
      ]
    },
    {
      name: "Sagarmatha Warriors FC",
      roster: [
        "Dhiraj Achammi",
        "Rohan Pandey",
        "Pratik Lamichhane",
        "Siyon Shrestha",
        "Arish Adhikari",
        "Rijan Adhikari",
        "Subash Sapkota",
        "Saksham Thapa",
        "Kushan Rana",
        "Nibesh Pandey",
        "Bijesh Dhakal",
        "David Karki"
      ]
    },
    {
      name: "Gorkhali Squad FC",
      roster: [
        "Santosh Adhikari",
        "Ram Paudel",
        "Bikash Thakuri",
        "Bijay Thapa",
        "Peshal Thapa",
        "Prajwal Shrestha",
        "Prashanta Shrestha",
        "Resham Lama",
        "Keshab Acharya",
        "Sandip Dahal",
        "Krishna Baskota",
        "Ananta Timilsina"
      ]
    },
    {
      name: "Texas FC Red",
      roster: [
        "Siddhartha Khadka",
        "Dhan Chhetri",
        "Sanjay Gurung",
        "Purna Khawaz",
        "Partap Subba",
        "Sanjok Lama",
        "Rijan Gurung",
        "Nischal Pokhrel",
        "Assish Tolangi",
        "AJ Magar"
      ]
    },
    {
      name: "Texas FC Blue",
      roster: [
        "Pujan Thapa Magar",
        "Prabin Basnet",
        "Bikash Magar",
        "Bishal Darlami",
        "Sajan Magar",
        "Mahendra Khanal",
        "Monoj Chuwan",
        "Sagar Bhattarai",
        "Salman Khan",
        "Roshan Gurung",
        "Saugat Rai",
        "Sudeep Tamang"
      ]
    },
    {
      name: "Dallas Gurkhas White",
      roster: [
        "Kushal Timalsina",
        "Sudu Subba",
        "Govinda KC",
        "Subham Basnet",
        "Nirakar KC",
        "Ram Devkota",
        "Pratik Thapa",
        "Dave Rizal",
        "Ayush Thapa",
        "Nabin KC",
        "Gyapan Pathak",
        "Paras Rawal"
      ]
    },
    {
      name: "Dallas Gurkhas Red",
      roster: [
        "Niranjan KC",
        "Parth Thapa",
        "Bijay Tamang",
        "Umesh Pandey",
        "Roshan Devkota",
        "Ashish Gurung",
        "Ansil Khatri",
        "Rojin Prajapati",
        "Riwas Prasai",
        "Arogaya Shrestha",
        "Bindo Bista",
        "Bikash Magar"
      ]
    },
    {
      name: "Sunnyvale Football Force",
      roster: [
        "Anubhav Bhattarai",
        "Eakraj Raut",
        "Aryaman Dahal",
        "Salil Subedi",
        "Suraj Thapa",
        "Nabin Gurung",
        "Sonam Budhathoki",
        "Yugal Magar",
        "Prakat Rijal",
        "Bhanu Raut",
        "Dipesh Chhetri",
        "Prasanth Thapa"
      ]
    }
  ];
  showRosterIndex = null;
  // Toggle the roster visibility
  toggleRoster(index) {
    this.showRosterIndex = this.showRosterIndex === index ? null : index;
  }
  teams35 = [
    {
      name: "LA Gurans",
      roster: [
        "Sanil Shrestha",
        "Surendra Gurung",
        "Raju Aryal",
        "Sabin Basula",
        "Ashis Pradhan",
        "Sudip Basnet",
        "Ayush Singh",
        "Mishan Giri",
        "Raman Chalise",
        "Mahesh R Neupane",
        "Sushanta Singh",
        "Amit Gurung"
      ]
    },
    {
      name: "DFW Himalayas FC",
      roster: [
        "Niraj Thapa",
        "Dinesh Thapa",
        "Bharat Thapa",
        "Deepak Rayamajhi",
        "Sandesh Sangroula",
        "Naseeb Bista",
        "Parmithus Khadka",
        "Sudeep Gurung",
        "Buddha Gurung",
        "Yunal Malla",
        "Ganesh Ghising",
        "Suresh Choudhary"
      ]
    },
    {
      name: "Bay Area FC",
      roster: [
        "Ashutosh Parajuli",
        "Sandesh Siwakoti",
        "Ravi Shrestha",
        "Dipesh Shrestha",
        "Basanta Dahal",
        "Rupak Thapa",
        "Utsav Joshi",
        "Nabin Singh",
        "Saroj Budhathoki",
        "Bisnow Bista",
        "Rabin Maharjan",
        "Nirmal Gurung"
      ]
    },
    {
      name: "Nepal Seattle FC",
      roster: [
        "Sajal Nepal",
        "Sachin Gurung",
        "Biplab Khatri",
        "Ashok Adhikari",
        "Manoj Poudel",
        "Umesh Pandey",
        "Sarad Timilsina",
        "Binod Bista",
        "Gyapan Pathak",
        "Sameer Bam Malla",
        "Subodh Moktan",
        "Rabi Tamrakar"
      ]
    }
  ];
  showRoster35Index = null;
  // Toggle the roster visibility
  toggle35Roster(index) {
    this.showRoster35Index = this.showRoster35Index === index ? null : index;
  }
  static \u0275fac = function TournamentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TournamentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TournamentComponent, selectors: [["app-tournament"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 20, consts: [[1, "container", "mt-16"], [1, "mt-10", "pb-4", "relative", "flex", "justify-center"], ["src", "tournament2025.jpg", "alt", "Tournament Image", 1, "w-full", "lg:w-2/4"], [1, "py-8", "px-4"], [1, "text-3xl", "font-bold", "text-center", "text-gray-800"], [1, "mt-4", "text-lg", "text-center", "text-gray-600"], [1, "py-8", "px-4", "bg-gray-100"], [1, "rules-container"], [1, "title"], [1, "flex", "items-center", "justify-between", "w-full", "px-4", "py-3", "text-lg", "font-semibold", "text-white", "bg-sky-600", "border", "rounded-lg", "transition-all", "duration-300", "hover:bg-sky-600", 3, "click"], [1, "px-2"], [1, "inline-block", "transition-transform", "transform"], ["class", "mt-4 p-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg mb-3", 4, "ngIf"], [1, "flex", "space-x-4"], [1, "py-2", "px-4", "font-semibold", "focus:outline-none", 3, "click", "ngClass"], [1, "py-2", "font-semibold", "focus:outline-none", 3, "click", "ngClass"], [4, "ngIf"], [1, "mt-4", "p-4", "text-gray-700", "bg-gray-50", "border", "border-gray-200", "rounded-lg", "mb-3"], [1, "list-disc", "list-inside", "space-y-2", "pl-5", "text-gray-700", "text-base"], [1, "py-8", "px-4", "text-white", "bg-sky-600"], [1, "flex", "items-center", "justify-between", "w-full", "px-4", "py-3", "text-lg", "font-semibold", "text-white", "bg-sky-600", "transition-all", "duration-300", "hover:bg-sky-600", 3, "click"], [1, "text-3xl", "font-bold", "text-center", "px-2"], ["class", "grid grid-cols-1 gap-4 mt-4 text-lg p-0 text-white", 4, "ngIf"], ["class", "mt-3 bg-sky-600 text-white px-2 pb-2", 4, "ngIf"], [1, "grid", "grid-cols-1", "gap-4", "mt-4", "text-lg", "p-0", "text-white"], ["class", "flex flex-col p-4 rounded-lg shadow-md bg-white text-black", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "p-4", "rounded-lg", "shadow-md", "bg-white", "text-black"], [1, "flex", "items-center", "justify-between"], [1, "w-6", "h-6", "text-white", "bg-sky-600", "border", "border-sky-600", "rounded-full", "hover:bg-sky-600", "focus:ring-2", "focus:ring-sky-600", 3, "click"], [1, "transform", "transition-transform"], ["class", "mt-2 pl-5 list-disc list-inside space-y-2 text-gray-500", 4, "ngIf"], [1, "mt-2", "pl-5", "list-disc", "list-inside", "space-y-2", "text-gray-500"], [4, "ngFor", "ngForOf"], [1, "mt-3", "bg-sky-600", "text-white", "px-2", "pb-2"], [1, "text-3xl", "font-bold", "text-center", "pt-4", "text-white"], [1, "mt-2", "mb-3"], [1, "pt-3"], [1, "overflow-x-auto"], [1, "min-w-full", "bg-transparent", "border", "rounded-lg"], [1, "bg-white", "text-white", "border-b"], [1, "border", "text-gray-600", "px-4", "py-2", "text-left", "font-semibold"], [1, "text-white"], ["class", "border-b border border-gray-200", 4, "ngFor", "ngForOf"], [1, "bg-white", "border-b"], ["class", "border-b border-gray-200", 4, "ngFor", "ngForOf"], [1, "overflow-x-auto", "pt-3"], [1, "mt-2", "pt-3"], [1, "overflow-x-auto", "pb-3"], [1, "border", "px-4", "text-gray-600", "py-2", "text-left", "font-semibold"], [1, "overflow-x-auto", "pb-2"], [1, "min-w-full", "bg-transparent", "border", "border-gray-200", "rounded-lg"], [1, "bg-gray-100", "border-b"], [1, "border-b", "border", "border-gray-200"], ["data-label", "Time", 1, "border", "px-4", "py-2"], ["data-label", "Field 1", 1, "border", "px-4", "py-2"], ["data-label", "Field 2", 1, "border", "px-4", "py-2"], [1, "border-b", "border-gray-200"], [1, "text-3xl", "font-bold", "text-center", "pt-4", "pb-2", "mb-4"], ["class", "mb-6", 4, "ngFor", "ngForOf"], [1, "mb-6"], [1, "min-w-full", "bg-transparent", "border", "rounded-lg", "text-center", "pb-2"], [1, "px-2", "bg-gray-100"], [1, "bg-transparent", "text-white", "border-b"], [1, "border", "text-gray-600"], [1, "border", "text-gray-600", "px-4", "py-2"], ["class", "border border-gray-300", 4, "ngFor", "ngForOf"], [1, "border", "border-gray-300"], ["data-label", "Played", 1, "border"], ["data-label", "Team", 1, "border", "px-4", "py-2"], ["data-label", "Points", 1, "border", "px-4", "py-2"], [1, "text-3xl", "font-bold", "text-center", "pt-3", "mb-4"], [1, "results-table", "min-w-full", "bg-transparent", "border", "rounded-lg", "text-center", "pb-2"], [1, "bg-gray-100"], [1, "border", "px-4", "py-2", "text-gray-600", "text-lg"], ["class", "border-b border-gray-300", 4, "ngFor", "ngForOf"], [1, "border-b", "border-gray-300"], ["data-label", "Fixture", 1, "border", "px-4", "py-2"], ["data-label", "Result", 1, "border", "px-4", "py-2"], [1, "py-8", "px-4", "pb-4", "bg-sky-600"], [1, "text-3xl", "font-bold", "text-center"], [1, "inline-block", "transition-transform", "transform", "px-2"], [1, "text-3xl", "pt-4", "font-bold", "text-center"], [1, "min-w-full", "border", "border-gray-200", "rounded-lg"], [1, "border", "px-4", "py-2", "text-left", "text-gray-600", "font-semibold"], [1, "text-3xl", "font-bold", "text-center", "pt-4"], [1, "standings-table", "min-w-full", "border", "text-center", "border-gray-200", "rounded-lg"], [1, "border", "border-gray-300", "text-gray-600"], [1, "border", "border-gray-300", "px-4", "py-2", "text-gray-600"], ["data-label", "Team", 1, "px-4", "py-2", "border"], ["data-label", "Points", 1, "px-4", "py-2", "border"], [1, "results-table", "min-w-full", "border", "border-gray-200", "rounded-lg"], [1, "border", "border-gray-300", "px-4", "py-2", "text-gray-800"]], template: function TournamentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Introduction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Welcome to our 1");
      \u0275\u0275elementStart(8, "sup");
      \u0275\u0275text(9, "st");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " edition of Gurans Cup! Here we bring together the best teams to compete in an exciting environment. Join us as we celebrate sportsmanship and teamwork. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "h2", 8);
      \u0275\u0275text(14, "Rules and Regulations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "button", 9);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_16_listener() {
        return ctx.toggleSection("tournamentRules");
      });
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275text(18, "Tournament Rules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, " \u25BC ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, TournamentComponent_div_21_Template, 106, 0, "div", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 3)(23, "div", 13)(24, "button", 14);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_24_listener() {
        return ctx.selectMainTab("regular");
      });
      \u0275\u0275text(25, " Regular ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 15);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_26_listener() {
        return ctx.selectMainTab("35+");
      });
      \u0275\u0275text(27, " 35+ ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 3)(29, "div", 13)(30, "button", 14);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_30_listener() {
        return ctx.selectTab("fixtures");
      });
      \u0275\u0275text(31, " Fixtures ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 15);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_32_listener() {
        return ctx.selectTab("standings");
      });
      \u0275\u0275text(33, " Standings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 14);
      \u0275\u0275listener("click", function TournamentComponent_Template_button_click_34_listener() {
        return ctx.selectTab("results");
      });
      \u0275\u0275text(35, " Results ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 3);
      \u0275\u0275template(37, TournamentComponent_div_37_Template, 11, 6, "div", 16)(38, TournamentComponent_div_38_Template, 11, 6, "div", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275classProp("-rotate-180", ctx.showTournamentRules);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showTournamentRules);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c04, ctx.selectedMainTab === "regular"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c04, ctx.selectedMainTab === "35+"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c04, ctx.selectedTab === "fixtures"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c04, ctx.selectedTab === "standings"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c04, ctx.selectedTab === "results"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedMainTab === "regular");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedMainTab === "35+");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\n.tournament-img[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-x: auto;\n  padding: 0 1rem;\n}\n.tabs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 80px;\n  margin: 4px;\n  padding: 12px;\n  background-color: #f8f8f8;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n}\n.tabs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.tabs-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #007bff;\n}\n.tabs-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #007bff;\n  color: #007bff;\n}\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\nbutton[_ngcontent-%COMP%]   .rotate-45[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n@media (max-width: 640px) {\n  .fixtures-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fixtures-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.75rem;\n    border: 1px solid #e5e7eb;\n    border-radius: 0.5rem;\n    overflow: hidden;\n  }\n  .fixtures-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.75rem;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .fixtures-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #4b5563;\n    flex-shrink: 0;\n    margin-right: 0.5rem;\n  }\n  .fixtures-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n/*# sourceMappingURL=tournament.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TournamentComponent, { className: "TournamentComponent", filePath: "src\\app\\components\\tournament\\tournament.component.ts", lineNumber: 12 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "members", component: MembersComponent },
  { path: "tournament", component: TournamentComponent },
  { path: "contact-us", component: ContactComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.10
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.10
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-ID7AYSLE.mjs.map
