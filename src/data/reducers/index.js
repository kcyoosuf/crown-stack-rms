import { combineReducers } from "redux"

import location from './locationReducer'
import ui from './uiReducer'
const rootReducer = combineReducers({
  location,
  ui
});

export default rootReducer