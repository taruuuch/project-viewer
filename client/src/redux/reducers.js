import { combineReducers } from 'redux'
import { authReducer } from './auth/reducers'
import { registrationReducer } from './registration/reducers'
import { projectsReducer } from './projects/reducers'

export default combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  projects: projectsReducer
})
