var pg = require('pg');
var express =require('express');
var bodyParser =require('body-parser');
var pool = require('../model/model');

var router =express.Router();

var urlencodedParser= bodyParser.urlencoded({extended:true});


router.get('/book',function(req,res){
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT id,name,author,price FROM detail', function (err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if (err) {
                res.end();
                return console.error('error running query', err);
            }
            // console.log(result.rows[0]);
            res.json(result.rows);
            //output: 1
        });
    });
});

router.get('/lich',function(req,res){
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var dn=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`;
        // console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`);
        client.query(`SELECT * FROM congtac where ngay = '${dn}'`, function (err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if (err) {
                res.end();
                return console.error('error running query', err);
            }
            // console.log(result.rows[1].ngay);
            // console.log(typeof(result.rows[1].ngay));
           
            res.json(result.rows);
            //output: 1
        });
    });
});
router.get('/lichAll',function(req,res){
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        // var dn=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`;
        // console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`);
        client.query(`SELECT * FROM congtac`, function (err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if (err) {
                res.end();
                return console.error('error running query', err);
            }
            // console.log(result.rows[1].ngay);
            // console.log(typeof(result.rows[1].ngay));
           
            res.json(result.rows);
            lich=new Lich();
            // res.json(result.rows.map(x=>{
            //     x.id=lich.id;
            //     x.tennv =lich.tennv;
            //     x.ngay = lich.ngay;
            //     x.manv=lich.ngay;
            //     x.thoigian=lich.thoigian;
            // }));
            //output: 1
        });
    });
});
router.get('/lich/:_manv',function(req,res){
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var id = req.params._manv;
        console.log(id);
        // var dn=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`;
        // console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${ new Date().getDate()}`);
        client.query(`SELECT * FROM congtac where manv = '${id}'`, function (err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if (err) {
                res.end();
                return console.error('error running query', err);
            }
            // console.log(result.rows[1].ngay);
            // console.log(typeof(result.rows[1].ngay));
           
            res.json(result.rows);
            //output: 1
        });
    });
});



module.exports=router;
