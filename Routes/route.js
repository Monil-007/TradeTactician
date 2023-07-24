const express = require('express');
const router = express.Router();
const { StockAPI, StockAnalysis, CompanyNews, MarketNews, pfBuy } = require('../Controllers/StockAPI.js');

router.post('/api/stockesy/:id', StockAPI);
router.get('/api/sa/:id', StockAnalysis);
router.get('/api/companynews/:id', CompanyNews);
router.get('/api/marketnews', MarketNews);
//router.get('/api/pfbuy', pfBuy);


module.exports = router;