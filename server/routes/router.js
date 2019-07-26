const express = require('express');
const router = express.Router();
var passport = require('passport');

var multer = require('multer'),
    mongoClient = require('mongodb').MongoClient,
    config = require('../config/config'),
    fs = require('fs');


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '././src/assets/img/album_covers');
    },
    filename: function (req, file, cb) {
        let extension = file.originalname.split('.').pop();
        cb(null, 'cover_' + Date.now() + '.' + extension);
    }
});

var upload = multer({
    storage: storage
});

let mongo = null;
mongoClient.connect(config.mongo_url, function (err, db) {
    if (err) console.log(err);
    mongo = db.db('orchard');
    console.log('database connected');
})

router.get('/reviews/:album_title', function (request, response) {
    response.send();
});

router.get('/home', function (request, response) {
    console.dir('hey')
    mongo.collection('albums').find({}).toArray((err, result) => {
        if (err) throw err;
        response.send({
            cards: result
        });
    });
});

router.get('/album/:album_title', function (request, response) {
    console.dir('album title?')
    mongo.collection('albums').find({ album_title: request.params.album_title }).toArray(function (err, result) {
        if (err) throw err;
        if (fs.existsSync('././src/assets/img/album_covers/' + result[0].album_cover)) {
            response.send(result[0]);
        }
        else throw new Error('no file exists for this album');
    });
});

router.get('/user/:username', function (request, response) {
    let user_data = {
        username: '',
        user_photo: '',
        reviews: [],
        favorites: []
    }
    response.send(user_data);
});

router.post('/saveNewAlbum', upload.single('album_cover'), function (request, response) {
    console.dir('yo')
    let album = {
        album_title: request.body.album_title,
        album_artist: request.body.album_artist,
        album_description: request.body.album_description,
        release_date: request.body.release_date,
        album_cover: request.file.filename,
    }
    let promise = mongo.collection('albums').insertOne(album);
    promise.then(function (data) {
        response.send(data.ops[0].album_title);
    });
});

module.exports = router;
