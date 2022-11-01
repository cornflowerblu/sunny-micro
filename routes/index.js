var express = require('express');
var router = express.Router();


router.get('/auth', function(req, res, next) {
  const { hasura_api_key } = req.headers;

  if (hasura_api_key === process.env.HASURA_API_KEY) {
    res.json({
      "X-Hasura-Role": "readonly",
      "X-Hasura-Access-Key": process.env.X_HASURA_ACCESS_KEY
    });
  } else {
    res.status(401).json({
      "message": "Invalid access key"
    });
  }
});

module.exports = router;
