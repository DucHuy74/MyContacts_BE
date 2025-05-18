const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler ( async (req, res) => {
    const contacts = await  Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact =asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//@desc Get contacts
//@route PUT /api/contacts/:id
//@access public
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error ("Contact not Found");
    }
    res.status(200).json(contact);
});

//@desc Update contacts
//@route PUT /api/contacts
//@access public

const updateContact =asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Up contacts ${req.params.id}` });
})

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
})

module.exports = {
    getContact,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}