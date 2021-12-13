const express = require('express');
const cors = require('cors');
const app = express();
var corsOptions = {
	origin: "http://localhost:4200"
}
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

const db = require('./models');
db.sequelize.sync();

// default route
app.get('/', function(req, res) {
	return res.send({ message: 'Welcome to AddressBook Backend' });
});

require('./routes/contact.routes')(app);
const PORT = process.env.PORT || 9080;
app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});
