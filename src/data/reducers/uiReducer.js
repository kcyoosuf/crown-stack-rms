import { UI } from '../actionConstants'

const initialState = {
  breadcrump: [],
  showLoader: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case UI.SET_BREADCRUMB:
      return { ...state, breadcrump: action.payload }
    case UI.SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case UI.HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      };
    default:
      return state
  }
}