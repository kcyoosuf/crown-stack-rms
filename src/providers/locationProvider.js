import Axios from 'axios';
import { LOCATION_LIST } from '../constants/URIs'
export default function locationProvider() {
  return {
    getLocationList: () => {
      return Axios.get(LOCATION_LIST)
    }
  }
}