const express = require('express');
const cors=require('cors');
corsOptions = {
	origin: "http://10.0.0.64",
}
const contacts = require('../controllers/contact.controller.js');
var router = express.Router();
// Create, Find Contact
router.route('/')
	.post(contacts.create, cors(corsOptions), function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	})
	.get(contacts.findAll, cors(corsOptions), function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	})
	.delete(contacts.deleteAll, cors(corsOptions), function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
// Contact by Id
router.route('/:id')
	.get(contacts.findById)
	.put(contacts.update)
	.delete(contacts.delete);

module.exports = router;
