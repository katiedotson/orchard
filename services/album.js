const mongo = require('mongodb').MongoClient;
const config = require('../config/config');

module.exports = function (title) {
    // let array = null;
    mongo.connect(config.mongo_url, function (err, db) {
        if (err) throw (err);
        let dbo = db.db('orchard')
        dbo.collection('albums').find({ album_title: title }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });

}