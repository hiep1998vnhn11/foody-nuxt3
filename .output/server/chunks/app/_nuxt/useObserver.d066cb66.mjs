import { ref, watch, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse rounded overflow-hidden" }, _attrs))}><div class="w-full bg-gray-300 h-28"></div><div class="flex-1 space-y-6 py-1"><div class="h-6 bg-gray-300 rounded w-3/4"></div><div class="space-y-3"><div class="h-2 bg-gray-300 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-gray-300 rounded col-span-2"></div><div class="h-2 bg-gray-300 rounded col-span-1"></div></div><div class="h-2 bg-gray-300 rounded"></div></div><div class="h-6 bg-gray-300 rounded-xl w-1/4 inline-block"></div><div class="h-6 bg-gray-300 rounded-xl w-1/2 inline-block mx-3"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkeletonCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
function useObserver(objectObserver) {
  const observer = ref(null);
  const unObserver = (value) => {
    if (!observer.value || !value)
      return;
    if (Array.isArray(value)) {
      value.forEach((el) => el && observer.value.unobserve(el));
    } else {
      observer.value.unobserve(value);
    }
  };
  const handleObserver = (value) => {
    if (!observer.value || !value)
      return;
    if (Array.isArray(value)) {
      value.forEach((el) => el && observer.value.observe(el));
    } else {
      observer.value.observe(value);
    }
  };
  watch(
    () => unref(objectObserver),
    (value, oldValue) => {
      if (!observer.value)
        return;
      if (oldValue)
        unObserver(oldValue);
      if (value)
        handleObserver(value);
    },
    {
      deep: true
    }
  );
}
function useScrollObserver(element, callback) {
  if (typeof callback !== "function")
    console.error(
      "useScrollObserver: callback is required and must be a function"
    );
  const observer = ref(null);
  const unObserver = (value) => {
    if (!observer.value || !value)
      return;
    if (Array.isArray(value)) {
      value.forEach((el) => observer.value.unobserve(el));
    } else {
      observer.value.unobserve(value);
    }
  };
  const handleObserver = (value) => {
    if (!observer.value || !value)
      return;
    if (Array.isArray(value)) {
      value.forEach((el) => observer.value.observe(el));
    } else {
      observer.value.observe(value);
    }
  };
  watch(
    () => unref(element),
    (value, oldValue) => {
      if (!observer.value)
        return;
      if (oldValue)
        unObserver(oldValue);
      if (value)
        handleObserver(value);
    }
  );
}

export { __nuxt_component_0 as _, useScrollObserver as a, useObserver as u };
//# sourceMappingURL=useObserver.d066cb66.mjs.map
