import { get } from 'dot-prop-immutable'

export const meta = (state) => state.meta
export const query = (state) => get(meta(state), 'query') || {}
