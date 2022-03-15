import Contact from "../models/contact";

export const createContact = async (req, res) => {
  const contactFound = await Contact.findOne({ url: req.body.url });
  if (contactFound)
    return res.status(303).json({ message: "the url already exists" });

  const newContact = new Contact(req.body);
  const savedContact = await newContact.save();
  res.json(savedContact);
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    return res.json(contact);
  } catch (error) {
    res.json(error);
  }
};

export const getContacts= async (req, res) => {
  const contactFound = await Contact.findById(req.params.id);

  if (!contactFound) return res.status(204).json();

  return res.json(contactFound);
};

export const deleteContact = async (req, res) => {
  const contactFound = await Contact.findByIdAndDelete(req.params.id);

  if (!contactFound) return res.status(204).json();

  return res.status(204).json();
};