import { combineReducers } from 'redux'
import { authReducer } from './auth/reducers'
import { projectsReducer } from './projects/reducers'
import { userReducer } from './user/reducers'

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  user: userReducer
})
