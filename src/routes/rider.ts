import { Router } from "express";
import { requestRide } from "../controllers";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";

const riderRouter = Router();

riderRouter.post(
  "/request-ride",
  [
    check("email", "email is required").not().isEmpty(),
    check("email", "email is invalid").isEmail(),
    validateFields,
  ],
  requestRide
);

export { riderRouter };
