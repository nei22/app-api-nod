const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.API_KEY

function autheticateToken(req, res, next) {
  const token = req.headers['authorization']
  if (!token) return res.sendStatus(401)
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
modules.exports = autheticateToken