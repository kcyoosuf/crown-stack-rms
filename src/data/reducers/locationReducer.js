import { LOCATION } from '../actionConstants'

const initialState = {
  locationList: [],
  selectedLocation: ''
}
export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION.GET_LOCATION_LIST:
      return { ...state, locationList: action.payload }
    case LOCATION.SET_LOCATION:
      return { ...state, selectedLocation: action.payload }
    default:
      return state
  }
}