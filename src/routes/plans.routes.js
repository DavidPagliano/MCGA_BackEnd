import { Router } from "express";
const router = Router();

import * as plansCtrl from "../controllers/plans.controller";
import { authJwt } from "../middlewares";

router.get("/plans", plansCtrl.getPlan);

router.get("/plans/:id", plansCtrl.getPlans);

router.post(
    "/",
    [authJwt.verifyToken, authJwt.isModerator],
    plansCtrl.createPlan
  );
  
  router.put(
    "/:planId",
    [authJwt.verifyToken, authJwt.isModerator],
    plansCtrl.updatePlan
  );
  
  router.delete(
    "/:productId",
    [authJwt.verifyToken, authJwt.isAdmin],
    plansCtrl.deletePlans
  );

export default router;