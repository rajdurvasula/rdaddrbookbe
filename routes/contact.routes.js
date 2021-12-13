const express = require('express');
const cors=require('cors');
const contacts = require('../controllers/contact.controller.js');
var router = express.Router();
var corsOptions = {
        origin: "http://localhost:4200"
}
router.use(cors(corsOptions));
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

module.exports = router;
