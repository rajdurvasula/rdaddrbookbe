const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes/contact.routes');
const app = express();
var corsOptions = {
	origin: "http://localhost:4200"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
const db = require('./models');
db.sequelize.sync();

// default route
//app.get('/', function(req, res, next) {
//	return res.send({ message: 'Welcome to AddressBook Backend' });
//});

app.use('/api/contacts', routes);
const PORT = process.env.PORT || 9080;
app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});
