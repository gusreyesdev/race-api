import express from "express";
import { riderRouter } from "./rider";
import { driverRouter } from "./driver";

const routes = express.Router();

routes.use("/api/rider", riderRouter);
routes.use("/api/driver", driverRouter);

export { routes };
