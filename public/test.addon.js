const e = 'build'; const n = (() => [{ name: 'test' }])(); const s = `
  ## info
`; const t = {
  name: 'HelloWorld',
}; const a = { props: [{ name: 'key', global: !0, description: '', tags: [], required: !1, type: 'string | number | symbol | undefined', schema: { kind: 'enum', type: 'string | number | symbol | undefined', schema: ['undefined', 'string', 'number', 'symbol'] } }, { name: 'ref', global: !0, description: '', tags: [], required: !1, type: 'VNodeRef | undefined', schema: { kind: 'enum', type: 'VNodeRef | undefined', schema: ['undefined', 'string', 'Ref<any>', { kind: 'event', type: '(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, refs: Record<...>): void', schema: [] }] } }, { name: 'ref_for', global: !0, description: '', tags: [], required: !1, type: 'boolean | undefined', schema: { kind: 'enum', type: 'boolean | undefined', schema: ['undefined', 'false', 'true'] } }, { name: 'ref_key', global: !0, description: '', tags: [], required: !1, type: 'string | undefined', schema: { kind: 'enum', type: 'string | undefined', schema: ['undefined', 'string'] } }, { name: 'class', global: !0, description: '', tags: [], required: !1, type: 'unknown', schema: 'unknown' }, { name: 'style', global: !0, description: '', tags: [], required: !1, type: 'unknown', schema: 'unknown' }, { name: 'msg', global: !1, description: '', tags: [], required: !0, type: 'string', schema: 'string' }], events: [], slots: [], exposed: [{ name: 'msg', type: 'string', description: '', schema: 'string' }] }
export {
  s as docs,
  t as info,
  a as metadata,
  n as props,
  e as unplugin_vue_sfcmore,
}
