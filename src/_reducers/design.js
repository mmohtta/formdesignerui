import { designConstants } from '../_constants';

export function design(state = {
  label: "New Form",
  endpoint: "",
  child: []
}, action) {
  switch (action.type) {
    case designConstants.ADD_FIELD:
      let { child } = state;
      child.push(action.field)
      return Object.assign({}, state, { child })
    case designConstants.CHANGE_LABEL:
      return Object.assign({}, state, { label:action.label })
    case designConstants.CHANGE_ENDPOINT:
      return Object.assign({}, state, { endpoint:action.endpoint})
    default:
      return state
  }
}