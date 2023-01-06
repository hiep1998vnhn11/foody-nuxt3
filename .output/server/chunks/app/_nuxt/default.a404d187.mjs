import { d as defineStore, b as useState, c as __nuxt_component_0$1, _ as _export_sfc } from '../server.mjs';
import { defineComponent, ref, createElementBlock, useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toRef, renderSlot, toDisplayString, reactive, computed, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderTeleport, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { TransitionRoot, TransitionChild } from '@headlessui/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const __nuxt_component_1$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _hoisted_1$3 = {
  viewBox: "0 0 192 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_3 = { name: "fa-solid-ellipsis-v", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513l-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_2 = { name: "simple-icons-nuxtdotjs", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1 = { name: "uil-times", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "uil-bars", render };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const navbar = ref(null);
    const showDrawer = useState("navbar.showDrawer", () => false);
    useState("navbar.showOptions", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUil58bars = __unplugin_components_0;
      const _component_IconUil58times = __unplugin_components_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_IconSimpleIcons58nuxtdotjs = __unplugin_components_2;
      const _component_icon_fa_solid58ellipsis_v = __unplugin_components_3;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
      }, _attrs))}><div id="navbar-banner" class="banner">`);
      ssrRenderSlot(_ctx.$slots, "banner", {}, null, _push, _parent);
      _push(`</div><div class="max-w-8xl w-full mx-auto"><div class="py-3 lg:px-8 mx-4 lg:mx-0"><div class="relative flex items-center">`);
      if (_ctx.$slots["drawer"]) {
        _push(`<div class="lg:hidden flex items-center self-center justify-center mr-2"><button class="flex items-center focus:outline-none" aria-label="Toggle Drawer Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-lg" aria-hidden="true">`);
        if (!unref(showDrawer)) {
          _push(ssrRenderComponent(_component_IconUil58bars, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_IconUil58times, null, null, _parent));
        }
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          tag: "a",
          class: "mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200",
          to: { name: "index" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>home</span><span class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconSimpleIcons58nuxtdotjs, { class: "inline-block mr-2 text-lg text-green-600" }, null, _parent2, _scopeId));
              _push2(` Nuxt </span>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, "home"),
                createVNode("span", { class: "flex items-center" }, [
                  createVNode(_component_IconSimpleIcons58nuxtdotjs, { class: "inline-block mr-2 text-lg text-green-600" }),
                  createTextVNode(" Nuxt ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "menu", {}, null, _push, _parent);
      if (_ctx.$slots["options"]) {
        _push(`<div class="flex-1 flex justify-end lg:hidden"><button class="flex items-center focus:outline-none" aria-label="Toggle Options Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-sm" aria-hidden="true">`);
        _push(ssrRenderComponent(_component_icon_fa_solid58ellipsis_v, null, null, _parent));
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Builder/Navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Anchor",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const href = toRef(props, "href");
    const to = toRef(props, "to");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(to)) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: unref(to),
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`,
          href: unref(href)
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Anchor.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const defaultStyle = `
  cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
`;
    const styles = reactive({
      none: "",
      primary: "text-white bg-primary-500 hover:bg-primary-400 border-primary-500",
      secondary: "text-slate-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",
      opposite: "text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white"
    });
    const sizes = reactive({
      lg: "h-13 px-8 text-lg rounded-lg",
      md: "h-10 px-6 text-base rounded",
      sm: "h-9 px-4 text-sm rounded",
      xs: "h-6 px-3 text-xs rounded"
    });
    const selectedStyle = computed(() => styles[props.type] || styles.primary);
    const selectedSize = computed(() => sizes[props.size] || sizes.lg);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: __props.to,
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `${defaultStyle} ${unref(selectedStyle)} ${unref(selectedSize)}`,
          href: __props.href
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bg-black opacity-70 z-50 top-0 left-0 w-screen h-screen" }, _attrs))}></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Overlay.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["onClose"],
  setup(__props, { emit }) {
    const show = ref(false);
    const close = () => {
      show.value = false;
      setTimeout(() => emit("onClose"), 100);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSheetOverlay = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(TransitionRoot), {
          show: unref(show),
          appear: ""
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div${_scopeId}>`);
              _push3(ssrRenderComponent(_component_ActionSheetOverlay, { onClick: close }, null, _parent2, _scopeId));
              _push3(ssrRenderComponent(unref(TransitionChild), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`<div class="fixed bottom-0 w-screen z-50 flex" style="${ssrRenderStyle({ "max-height": "66.666667%" })}"${_scopeId2}><div class="relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent3, _scopeId2);
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_ActionSheetOverlay, { onClick: close }),
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-300 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ]),
                    _: 3
                  })
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100/[0.8] dark:bg-slate-800/[0.8] backdrop-blur supports-backdrop-blur:bg-white/60 p-4 rounded overflow-y-auto" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Body.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs font-bold text-center mb-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const menus = computed(() => [
      { type: "link", text: "Home", route: { name: "index" } },
      { type: "link", text: "Post", route: { name: "post" } },
      { type: "link", text: "Dashboard", route: { name: "dashboard" } },
      {
        type: "button",
        text: "dashboard",
        route: { name: "dashboard" }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BuilderNavbar = _sfc_main$9;
      const _component_Anchor = _sfc_main$8;
      const _component_Button = _sfc_main$7;
      const _component_ActionSheet = _sfc_main$5;
      const _component_ActionSheetBody = __nuxt_component_4;
      const _component_ActionSheetHeader = _sfc_main$3;
      _push(ssrRenderComponent(_component_BuilderNavbar, _attrs, {
        menu: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative hidden lg:flex items-center ml-auto"${_scopeId}><nav class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300" role="navigation"${_scopeId}><ul class="flex items-center space-x-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(menus), (item, i) => {
              _push2(`<li${_scopeId}>`);
              if (item.type === "link") {
                _push2(ssrRenderComponent(_component_Anchor, {
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0,
                  class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (item.type === "button") {
                _push2(ssrRenderComponent(_component_Button, {
                  text: item.text,
                  size: "xs",
                  class: "font-extrabold capitalize",
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></nav><div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId}> 123 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative hidden lg:flex items-center ml-auto" }, [
                createVNode("nav", {
                  class: "text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300",
                  role: "navigation"
                }, [
                  createVNode("ul", { class: "flex items-center space-x-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                      return openBlock(), createBlock("li", { key: i }, [
                        item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                          key: 0,
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0,
                          class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                          key: 1,
                          text: item.text,
                          size: "xs",
                          class: "font-extrabold capitalize",
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0
                        }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]" }, " 123 ")
              ])
            ];
          }
        }),
        options: withCtx(({ toggleOptions }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionSheet, {
              onOnClose: ($event) => toggleOptions(false)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ActionSheetBody, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ActionSheetHeader, { text: "Menu" }, null, _parent4, _scopeId3));
                        _push4(`<nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300"${_scopeId3}><ul class="flex flex-col"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(menus), (item, i) => {
                          _push4(`<li class="${ssrRenderClass([{
                            "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                          }, "flex w-full"])}"${_scopeId3}>`);
                          if (item.type === "link") {
                            _push4(ssrRenderComponent(_component_Anchor, {
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0,
                              class: "flex-1 hover:no-underline capitalize"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (item.type === "button") {
                            _push4(ssrRenderComponent(_component_Button, {
                              text: item.text,
                              size: "xs",
                              class: "flex-1 font-extrabold capitalize",
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul></nav><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate("components.theme_switcher.change_theme")}</div><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate("components.language_switcher.change_language")}</div>`);
                      } else {
                        return [
                          createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                          createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                            createVNode("ul", { class: "flex flex-col" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                                return openBlock(), createBlock("li", {
                                  key: i,
                                  class: ["flex w-full", {
                                    "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                  }]
                                }, [
                                  item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                    key: 0,
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0,
                                    class: "flex-1 hover:no-underline capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                    key: 1,
                                    text: item.text,
                                    size: "xs",
                                    class: "flex-1 font-extrabold capitalize",
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0
                                  }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                                ], 2);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.theme_switcher.change_theme"), 1),
                          createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.language_switcher.change_language"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "secondary",
                    title: "Github",
                    href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="ml-1"${_scopeId3}>Github</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "ml-1" }, "Github")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    text: "Close",
                    type: "secondary",
                    onClick: ($event) => toggleOptions(false)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ActionSheetBody, null, {
                      default: withCtx(() => [
                        createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                        createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                          createVNode("ul", { class: "flex flex-col" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: i,
                                class: ["flex w-full", {
                                  "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                }]
                              }, [
                                item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                  key: 0,
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0,
                                  class: "flex-1 hover:no-underline capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                  key: 1,
                                  text: item.text,
                                  size: "xs",
                                  class: "flex-1 font-extrabold capitalize",
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0
                                }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                              ], 2);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.theme_switcher.change_theme"), 1),
                        createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.language_switcher.change_language"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      type: "secondary",
                      title: "Github",
                      href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "ml-1" }, "Github")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      text: "Close",
                      type: "secondary",
                      onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionSheet, {
                onOnClose: ($event) => toggleOptions(false)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ActionSheetBody, null, {
                    default: withCtx(() => [
                      createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                      createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                        createVNode("ul", { class: "flex flex-col" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                            return openBlock(), createBlock("li", {
                              key: i,
                              class: ["flex w-full", {
                                "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                              }]
                            }, [
                              item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                key: 0,
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0,
                                class: "flex-1 hover:no-underline capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.text), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                key: 1,
                                text: item.text,
                                size: "xs",
                                class: "flex-1 font-extrabold capitalize",
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0
                              }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                            ], 2);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.theme_switcher.change_theme"), 1),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString("components.language_switcher.change_language"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    type: "secondary",
                    title: "Github",
                    href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "ml-1" }, "Github")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    text: "Close",
                    type: "secondary",
                    onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1032, ["onOnClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/AppNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"><div class="w-full py-4 text-center md:text-left"><div class="mb-1">Fooddy.vn</div><div class="text-xs text-gray-600 dark:text-gray-400"> Copyright \xA9 2022 <a href="https://aecomapp.com">Aecomapp</a>. All rights reserved. Made with <span class="text-red-500">\u2764</span><div class="flex flex-col md:flex-row space-x-2 items-center md:float-right"><span class="text-center md:text-right"> design by <a href="https://aecomapp.com">Aecomapp</a></span><span class="block bg-blue-500 rounded px-1 py-0.5 text-white text-xs"> Powered by <a href="https://nuxtjs.org">Nuxt</a></span></div></div></div></section></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const useApp = defineStore("app", () => {
  const darkMode = ref(false);
  return {
    darkMode
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNav = _sfc_main$2;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "app-before", {}, null, _push, _parent);
      _push(`<div id="app-before"></div><div class="flex flex-col min-h-screen">`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
      }, _push, _parent);
      _push(`<div class="flex-1 w-full flex flex-col"><div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
        _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      }, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "app-after", {}, null, _push, _parent);
      _push(`<div id="app-after"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.a404d187.mjs.map
