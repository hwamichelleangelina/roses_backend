const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bnnvvfczfcflefkm87u6-mysql.services.clever-cloud.com',
    user: 'unyqvvq1inw6ii0c',
    password: 'FHZiYOl3cz0cn65ldstf',
    database: 'bnnvvfczfcflefkm87u6'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database The Rose');
});

module.exports = db;