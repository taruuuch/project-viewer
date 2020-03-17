const { AUTH_ROUTE, PROJECT_ROUTE, USER_ROUTE } = require('../config/routes.config')

module.exports = app => {
	app.use(AUTH_ROUTE, require('../routes/auth.routes'))
  app.use(PROJECT_ROUTE, require('../routes/project.routes'))
  app.use(USER_ROUTE, require('../routes/user.routes'))
}
