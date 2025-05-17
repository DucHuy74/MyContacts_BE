const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler ( async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
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
    res.status(200).json({ message: "Create contacts" });
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
    createContact,
    updateContact,
    deleteContact
}