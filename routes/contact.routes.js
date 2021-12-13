module.exports = app => {
	const contacts = require('../controllers/contact.controller.js');
	var router = require('express').Router();
	// Create Contact
	router.post('/', contacts.create);
	// Retrieve All Contacts
	router.get('/', contacts.findAll);
	// Retrieve Contact by Id
	router.get('/:id', contacts.findById);
	// Update Contact
	router.put('/:id', contacts.update);
	// Delete Contact
	router.delete('/:id', contacts.delete);
	// Delete All Contacts
	router.delete('/', contacts.deleteAll);

	app.use('/api/contacts', router);
};
