import jwt_decode from 'jwt-decode'

export const jwtDecode = token => jwt_decode(token)
