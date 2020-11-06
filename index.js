require('module-alias/register');

/*Initialize Some EXPRESS API Configuration*/
import Express from 'express';
import Helmet from 'helmet';
import Compression from 'compression';
import Cors from 'cors';
import { json, urlencoded } from 'body-parser';

import Api from './App/Api/index.js';

const App = Express();
/*End Express Initialization*/

const Config = require('./App/Configs/index.js'); /*Initialize Config Variable*/

App.use(Compression());
App.use(Helmet());
App.use(Cors());
App.use(json());
App.use(urlencoded({ extended: false }));

App.get('/', (req, res) => {
	res.status(200).json({
		state: true,
		message: 'Papanko Backend API',
		desc: 'Restriction Pages'
	})
})

App.use('/api/v1', Api(Express.Router()));

App.listen(Config.port, () => {
	const { env } = App.locals.settings
	console.log(`Type : ${env}\nServer Running in http://localhost:${Config.port}`)
})