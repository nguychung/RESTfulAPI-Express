const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getChungnm2 } = require('../controllers/homeController')
// router.Method('/route', handler)

// khai bao route
router.get('/', getHomePage);
  
router.get('/abc', getABC);
  
router.get('/chungnm2', getChungnm2);

module.exports = router;