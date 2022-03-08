import { Router } from "express";
const router = Router();

import * as contactCtrl from "../controllers/contact.controller";

router.get("/contact", contactCtrl.getContacts);

router.get("/contact/:id", contactCtrl.getContact);

router.post("/contact", contactCtrl.createContact);

router.delete("/contact/:id", contactCtrl.deleteContact);

router.put("/contact/:id", contactCtrl.updateContact);

export default router;