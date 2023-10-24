var express = require('express');
var router = express.Router();
var Db = require('../db/dboperations');

let termekek=[
  {"id":1 , "name":"Monitor", "price":125000},
  {"id":2 , "name":"PC", "price":240000},
  {"id":3 , "name":"Laptop", "price":430000},
  {"id":4 , "name":"Monitor", "price":125000},
  {"id":5 , "name":"PC", "price":240000},
  {"id":6 , "name":"Laptop", "price":430000}
 ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Teleki' });
});

router.get('/teszt', function(req,res){
  res.send("TESZT");
});

router.get('/termekek', function(req,res){
  res.json(termekek);
});

router.get('/termek/:id', (req,res) => {
  let id = req.params.id;
  let elem = termekek.find( x => x.id == id );
  res.render("termek", elem  );
} );

router.get('/termeklista', (req,res) => {
  res.render("termeklista.ejs", {list: termekek} )
} );

/* MEGYE TÁBLA --------------------------------
router.get('/megyek', (req,res) => {
  Db.selectMegye()
  .then(
    (adat) => { 
      res.render('megye.ejs', {list: adat} );
    }
  )
});
//----------------------------------------------
*/

router.get('/varosok', (req,res) => {
  Db.selectVaros()
  .then(
    (adat) => {
      res.json(adat);
    }
  )
  .catch(
    (error) => {
      res.send(error);
    }
  )
} );

router.get('/varosok/:id', (req,res) => {
  let id = req.params.id;
  Db.selectVarosById(id)
  .then(
    (adat) => {
      res.json(adat);
    }
  )
  .catch(
    (error) => {
      res.send(error);
    }
  )
} );

module.exports = router;
