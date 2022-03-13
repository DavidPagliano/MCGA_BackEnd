import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth,controllers";
import { verifySignup } from "../middlewares";

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signup
);

router.post("/signin", authCtrl.signin);

export default router;