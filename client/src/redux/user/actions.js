import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from './types'
import { userProvider } from '../../providers/user.provider'

export const getUserInfoByToken = () => dispatch => {
  dispatch(userByTokenRequest())

  userProvider.getMyProfile()
    .then(response => {
      dispatch(userSuccess(response.data))
    })
    .catch(error => {
      dispatch(userError(error))
    })
}

export const userByTokenRequest = () => ({
  type: USER_REQUEST
})

export const userByIdRequest = id => ({
  type: USER_REQUEST,
  id
})

export const userSuccess = user => ({
  type: USER_SUCCESS,
  user
})

export const userError = errors => ({
  type: USER_ERROR,
  errors
})
