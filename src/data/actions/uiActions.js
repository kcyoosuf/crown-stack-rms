import { UI } from "../actionConstants"

export const setBreadCrumb = (items) => dispatch => {
  dispatch({ type: UI.SET_BREADCRUMB, payload: items })
}

export const loaderActions = {
	showLoader: () => {
		return { type: UI.SHOW_LOADER };
	},
	hideLoader: () => {
		return { type: UI.HIDE_LOADER };
	}
};