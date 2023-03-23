const express = require('express');
const router = express.Router();
const { StockAPI, StockAnalysis, CompanyNews, MarketNews } = require('../Controllers/StockAPI.js');

router.post('/api/stockesy/:id', StockAPI);
router.get('/api/sa/:id', StockAnalysis);
router.get('/api/companynews/:id', CompanyNews);
router.get('/api/marketnews', MarketNews);

module.exports = router;