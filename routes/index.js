var express = require('express');
var router = express.Router();


router.get('/auth', function(req, res, next) {
  const { hasura_api_key } = req.headers;

  if (hasura_api_key === '123456') {
    res.json({
      "X-Hasura-Role": "readonly",
      "X-Hasura-Access-Key": "987654"
    });
  } else {
    res.status(401).json({
      "message": "Invalid access key"
    });
  }
});

module.exports = router;
