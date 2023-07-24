const express = require('express');
//const fetch = require('node-fetch');
const finnhub = require('finnhub');


const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cfj2fo9r01qjvrn54mggcfj2fo9r01qjvrn54mh0"
const finnhubClient = new finnhub.DefaultApi()


const StockAPI = async (req, res) => {
    console.log("inside main controllers, radhe govind");

    const stockN = req.params.id;
    console.log("Stock Ticker:" + stockN);
    finnhubClient.quote(`${stockN}`, (error, data, response) => {
        var detArr = [];
        detArr.push(data.c);
        detArr.push(data.d);
        detArr.push(data.dp);
        detArr.push(data.o);
        detArr.push(data.h);
        detArr.push(data.l);
        detArr.push(data.pc);
        res.json({ result: detArr });

    });;
    // res.json({ result: `${{ er1, er2 }}` });
}

const StockAnalysis = async (req, res) => {
    console.log("Inside Stock Analysis, hare krishna");
    const stockAN = req.params.id;
    // Financials Reported
    finnhubClient.financialsReported({ "symbol": `${stockAN}` }, (error, data, response) => {
        console.log("Financials reported: " + data)
        res.send(data);
    });
}


const CompanyNews = async (req, res) => {
    console.log("Inside Company news, radhe radhe");
    const CompanyName = req.params.id;
    //Company News:
    // const compnews = finnhubClient.company_news(`${CompanyName}`, _from = "2022-01-01", to = "2023-03-01");
    // console.log(compnews);
    // finnhubClient.newsSentiment(`${CompanyName}`, (error, data, response) => {
    //     console.log(data)
    // });
    finnhubClient.companyNews(`${CompanyName}`, "2022-01-01", "2023-03-01", (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data)
        }
        res.send(data);
    });
}

const MarketNews = async (req, res) => {
    console.log("inside marketnews , hare krishna");
    finnhubClient.marketNews("general", {}, (error, data, response) => {
        console.log(data);
        res.send(data);
    });
}

const pfBuy = async (req, res) => {
    console.log("inside pfBuy, radhe krishna");
    // mongo DB add;
}

const pfExtract = async (req, res) => {
    console.log("inside pfExtract, radhe radhe... hare krishna");
    // mongo read function
}

module.exports = { StockAPI, StockAnalysis, CompanyNews, MarketNews };