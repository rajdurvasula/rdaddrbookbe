const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/contact.routes');
const app = express();
var corsOptions = {
	origin: "*"
}
app.use(cors(corsOptions));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
const db = require('./models');
db.sequelize.sync();

// default route
app.get('/', function(req, res, next) {
	return res.send({ message: 'Welcome to AddressBook Backend' });
});
const PORT = process.env.PORT || 9080;
app.use('/api/contacts', routes);
app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});
