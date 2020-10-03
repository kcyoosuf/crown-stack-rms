import { LOCATION } from '../actionConstants';
import locationProvider from '../../providers/locationProvider'
import { loaderActions } from './uiActions'
export const getLocationList = () => async dispatch => {
  dispatch(loaderActions.showLoader())
  try {
    const response = await locationProvider().getLocationList();
    console.log()
    if (response.data) {
      dispatch({ type: LOCATION.GET_LOCATION_LIST, payload: response.data.data.locations })
    }
  } catch (err) {
    console.log(err)
  }
  dispatch(loaderActions.hideLoader())
}

export const setLocation = location => dispatch => {
  dispatch({ type: LOCATION.SET_LOCATION, payload: location })
}