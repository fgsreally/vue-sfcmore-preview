import { openBlock as _, ref as d, pushScopeId as h, Fragment as i, popScopeId as m, createTextVNode as o, createElementBlock as p, toDisplayString as r, createElementVNode as t, defineComponent as u } from 'vue'
const s = e => (h('data-v-427fca78'), e = e(), m(), e); const f = { class: 'card' }; const v = /* @__PURE__ */ s(() => /* @__PURE__ */ t('p', null, [
  /* @__PURE__ */ o(' Edit '),
  /* @__PURE__ */ t('code', null, 'components/HelloWorld.vue'),
  /* @__PURE__ */ o(' to test HMR '),
], -1)); const g = /* @__PURE__ */ s(() => /* @__PURE__ */ t('p', null, [
  /* @__PURE__ */ o(' Check out '),
  /* @__PURE__ */ t('a', {
    href: 'https://vuejs.org/guide/quick-start.html#local',
    target: '_blank',
  }, 'create-vue'),
  /* @__PURE__ */ o(', the official Vue + Vite starter '),
], -1)); const k = /* @__PURE__ */ s(() => /* @__PURE__ */ t('p', null, [
  /* @__PURE__ */ o(' Install '),
  /* @__PURE__ */ t('a', {
    href: 'https://github.com/johnsoncodehk/volar',
    target: '_blank',
  }, 'Volar'),
  /* @__PURE__ */ o(' in your IDE for a better DX '),
], -1)); const y = /* @__PURE__ */ s(() => /* @__PURE__ */ t('p', { class: 'read-the-docs' }, ' Click on the Vite and Vue logos to learn more ', -1)); const V = /* @__PURE__ */ u({
  __name: 'HelloWorld',
  props: {
    msg: null,
  },
  setup(e) {
    const n = d(0)
    return (c, l) => (_(), p(i, null, [
      t('h1', null, r(e.msg), 1),
      t('div', f, [
        t('button', {
          type: 'button',
          onClick: l[0] || (l[0] = a => n.value++),
        }, ` count is ${r(n.value)}`, 1),
        v,
      ]),
      g,
      k,
      y,
    ], 64))
  },
})
const b = (e, n) => {
  const c = e.__vccOpts || e
  for (const [l, a] of n)
    c[l] = a
  return c
}
const x = /* @__PURE__ */ b(V, [['__scopeId', 'data-v-427fca78']])
async function H() {
  return await import('./test.addon.js')
}
const C = import.meta.url.replace(/\.js(.*)/, '.css')
export {
  H as addon,
  C as css,
  x as default,
}
