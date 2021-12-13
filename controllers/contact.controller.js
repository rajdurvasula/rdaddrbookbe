const db = require('../models');
const Contact = db.Contact;
const Op = db.Sequelize.Op;

// Create Contact
exports.create = (req, res) => {
	if (!req.body.fname || !req.body.lname) {
		res.status(400).send({
			message: "Content cannot be empty"
		});
		return ;
	}
	const contact = {
		fname: req.body.fname,
		lname: req.body.lname,
		active: true
	};
	Contact.create(contact)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Error while creating Contact"
		});
	});
};

// Find All Contacts
exports.findAll = (req, res) => {
	Contact.findAll().
		then(data => {
			res.send(data);
		})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Error while retrieving Contacts"
		});
	});
};

// Find by Id
exports.findById = (req, res) => {
	const id = req.params.id;
	Contact.findByPk(id)
	.then(data => {
		if (data) {
			res.send(data);
		} else {
			res.status(404).send({
				message: `No Contact with id: ${id}`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Contact with id: "+id
		});
	});
};

// Update
exports.update = (req, res) => {
	const id = req.params.id;
	Contact.update(req.body, {
		where: { id: id }
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Contact updated"
			});
		} else {
			res.send({
				message: `Cannot update Contact with id: ${id}`	
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error updating Contact with id: "+id
		});
	});
};

// Delete by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Contact.destroy({
		where: { id: id }
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Contact deleted"
			});
		} else {
			res.send({
				message: `Cannot delete Contact with id: ${id}`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error deleting Contact with id: "+id
		});
	});
}

// Delete All Contacts
exports.deleteAll = (req, res) => {
	Contact.destroy({
		where: {},
		truncate: false
	})
	.then(nums => {
		res.send({
			message: `${nums} Contacts deleted`
		});
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Error while deleting Contacts"
		});
	});
};


