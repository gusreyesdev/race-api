import { Router } from "express";
import { finishRide } from "../controllers/driver.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";

const driverRouter = Router();

driverRouter.post(
  "/finish-ride",
  [
    check("email", "email is required").not().isEmpty(),
    check("latitude", "latitude is required").not().isEmpty(),
    check("longitude", "longitude is required").not().isEmpty(),
    check("minuteElapsed", "minuteElapsed is required").not().isEmpty(),
    check("reference", "reference is required").not().isEmpty(),
    check("email", "email is invalid").isEmail(),
    check("latitude", "latitude is invalid").isLength({ min: 8, max: 8 }),
    check("longitude", "longitude is invalid").isLength({ min: 10, max: 10 }),
    check("minuteElapsed", "minuteElapsed is invalid, must be from 1 to 5").isInt({ min: 1, max: 5 }),
    validateFields,
  ],
  finishRide
);

export { driverRouter };
