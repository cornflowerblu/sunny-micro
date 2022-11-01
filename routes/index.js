var express = require('express')
var router = express.Router()

router.get('/auth', function (req, res, next) {
  const { hasura_api_key } = req.headers

  if (hasura_api_key === process.env.HASURA_API_KEY) {
    const response = {
      'X-Hasura-Role': 'readonly',
      'X-Timestamp': new Date().toISOString(),
    }

    res.json(response)
    console.info(
      'Auth success for role',
      response['X-Hasura-Role'],
      'at',
      response['X-Timestamp'],
    )
  } else {
    res.status(401).json({
      message: 'Invalid access key',
    })
  }
})

module.exports = router
