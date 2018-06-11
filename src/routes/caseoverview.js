const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const stringCapitalizeName = require('string-capitalize-name');
//const config = require('../../../config/db');
const User = require('../../Server/models/caseoverview');
const url = 'mongodb://nxhuman:hubal2018@ds115219.mlab.com:15219/heroku_cj4zfrd2'
var db =require('mongodb')(url);
var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;
let client;
let db; 



router.post('/test', function(req, res, next) {
  var item = "received data"

  MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  var db = client.db('mytestingdb');

    db.collection("casenamelist").insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted from field');
      client.close();
      res.json(item);
    });
  });


  res.redirect('/');
});

const stitch = require("mongodb-stitch")
const clientPromise = stitch.StitchClientFactory.create('nxhumanapi-hpevv');
clientPromise.then(client => {
  const db = client.service('mongodb', 'mongodb-atlas').db('nxhuman');
  client.login().then(() =>
    db.collection('test').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true}),
    db.collection('test').insertOne({test_id: "hi"})
  ).then(() =>
    db.collection('test').find({owner_id: client.authedId()}).limit(100).execute()
  ).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });
});

router.post('/test', function(req, res, next) {
  var item = "received data"

  MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  var db = client.db('mytestingdb');

    db.collection("casenamelist").insertOne("Hi", function(err, result) {
      assert.equal(null, err);
      console.log('Hardcode Item');
      client.close();
      res.json(item);
    });
  });


  res.redirect('/');
});
 
router.get('/test', function(req, res, next) {
  var resultArray = [];
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    var db = client.db('mytestingdb');
  
    var cursor = db.collection('caseitemlist').find();

      client.close();
      res.cursor;
    });
  });
; 

function displayCommentsOnLoad() {
   clientPromise.then(stitchClient => {
       client = stitchClient;
       db = client.service('mongodb', 'mongodb-atlas').db('nxhuman');
       return client.login().then(displayComments)
   });
}

function displayComments() {
  db.collection('casenamelist').find({}).execute().then(docs => {
    var html = docs.map(c => '<div>' + c.comment + '</div>').join('');
    document.getElementById('casenamelist').innerHTML = html;
  });
}

module.exports = router;

