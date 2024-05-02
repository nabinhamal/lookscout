import express from 'express';
import { createContact,  getAllContacts } from '../controller/contactController.js';

const router = express.Router();

router.post('/create-contact', createContact);
router.get('/contacts', getAllContacts);

export default router;