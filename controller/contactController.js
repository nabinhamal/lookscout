import Contact from '../model/contactModel.js';

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { firstName, email, phone, getInTouch, message } = req.body;
    const newContact = new Contact({ firstName, email, phone, getInTouch, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact created successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact', error: error.message });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({contacts});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};


