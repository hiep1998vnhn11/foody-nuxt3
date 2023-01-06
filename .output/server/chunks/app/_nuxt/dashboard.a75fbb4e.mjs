import { u as useObserver, a as useScrollObserver, _ as __nuxt_component_0 } from './useObserver.d066cb66.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultItem = {
      image: "https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg",
      name: "The Coldest Sunset",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
      tags: ["photography", "travel", "lifestyle"]
    };
    const generateItems = async (count) => {
      loading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.value = false;
      const time = Date.now();
      return Array.from({ length: count }, (_, i) => ({
        ...defaultItem,
        name: `${defaultItem.name} ${time + i + 1}`,
        image: (i % 2 ? defaultItem.image : "/nem.jpeg") + "?t=" + (time + i),
        tags: defaultItem.tags.slice(0, Math.floor(Math.random() * 3) + 1)
      }));
    };
    const imageRef = ref([]);
    const intersectionElementRef = ref(null);
    useObserver(imageRef);
    useScrollObserver(intersectionElementRef, async () => {
      items.value = [...items.value, ...await generateItems(20)];
    });
    const items = ref([]);
    ref(0);
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkeletonCard = __nuxt_component_0;
      const _directive_lazy = resolveDirective("lazy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="text-bold text-3xl mb-2"> Nuxtapp Demo some card items with lazyload and intersection observer </h1><h2>This page was using mix CDN and static image</h2><div><div class="grid grid-cols-5 gap-2"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div class="card max-w-sm rounded overflow-hidden shadow-lg"><img${ssrRenderAttrs(mergeProps({
          class: "w-full",
          alt: "Sunset in the mountains"
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, item.image)))}><div class="px-3 py-2"><div class="font-bold text-xl mb-2">${ssrInterpolate(item.name)}</div><p class="text-gray-700 text-base">${ssrInterpolate(item.description)}</p></div><div class="px-3 pt-2 pb-1"><!--[-->`);
        ssrRenderList(item.tags, (tag) => {
          _push(`<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> #${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-5 gap-2"><!--[-->`);
        ssrRenderList(10, (n) => {
          _push(ssrRenderComponent(_component_SkeletonCard, { key: n }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard.a75fbb4e.mjs.map
