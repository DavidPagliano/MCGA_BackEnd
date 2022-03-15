import { Router } from "express";
const router = Router();

import * as contactCtrl from "../controllers/contact.controllers";

router.get("/contact", contactCtrl.getContacts);

router.get("/contact/:id", contactCtrl.getContact);

router.post("/contacts", contactCtrl.createContact);

router.delete("/contact/:id", contactCtrl.deleteContact);



export default router;