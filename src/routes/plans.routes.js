import { Router } from "express";
const router = Router();

import * as plansCtrl from "../controllers/plans.controllers";
import { authJwt } from "../middlewares";

router.get("/plans", plansCtrl.getPlan);

router.post(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin],
    plansCtrl.createPlan
  );
  
  router.put(
    "/:planId",
    [authJwt.verifyToken, authJwt.isAdmin],
    plansCtrl.updatePlanById
  );
  
  router.delete(
    "/:productId",
    [authJwt.verifyToken, authJwt.isAdmin],
    plansCtrl.deletePlanById
  );

export default router;