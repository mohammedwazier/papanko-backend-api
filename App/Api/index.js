const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';


fs
  .readdirSync(__dirname)
  .filter(file => {
      console.log(file);
  })
  // .forEach(file => {
  //     console.log(file);
  // })