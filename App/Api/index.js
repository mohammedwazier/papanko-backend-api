const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

module.exports = (Router) => {
	fs
	.readdirSync(__dirname)
	.filter(file => {
		if(!file.includes('index')){
			let Name = file.split('.')[0];
			if(env === 'development') console.log(`Service Deployed : ${Name}`);
			Router.use(`/${Name}`, require(file));
		}
	})
	return Router;
}