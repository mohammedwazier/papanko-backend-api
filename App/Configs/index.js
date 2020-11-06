const env = require('dotenv');
const properties = require('@Base/package.json');

env.config();

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
const newdate = `${year}${month}${day}`;

module.exports = {
    port: process.env.PORT || 5000,
    baseurl: process.env.URL || `localhost`,
    node_env: process.env.NODE_ENV,
    database: {
        host: process.env.DBHOST || `localhost`,
        user: process.env.DBUSER || `root`,
        password: process.env.DBPASSWORD || ``,
        database: process.env.DB || 'papanko',
        port: process.env.DBPORT || 3306, /*PORT || STREAM*/
        type: process.env.DBTYPE || 'mysql',
    },
    date: newdate,
    version: process.env.version || 'v1',
    cronColor: ['\x1b[42m%s\x1b[0m'],
    versionApi: properties.version || '0.0.1',
    mainRoute: properties.main || 'index.js'
}