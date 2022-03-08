import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/user", usersCtrl.getUser);

router.get("/user/:id", usersCtrl.getUsers);

router.post(
    "/",
    [
      authJwt.verifyToken,
      authJwt.isAdmin,
      verifySignup.checkDuplicateUsernameOrEmail,
    ],
    usersCtrl.createUser
  );
  

router.delete("/user/:id", usersCtrl.deleteUsers);

router.put("/user/:id", usersCtrl.updateUser);

export default router;