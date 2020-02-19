import { combineReducers } from 'redux'
import { authReducer } from './auth/reducers'
import { registrationReducer } from './registration/reducers'
import { projectsReducer } from './projects/reducers'
import { userReducer } from './user/reducers'

export default combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  projects: projectsReducer,
  user: userReducer
})
