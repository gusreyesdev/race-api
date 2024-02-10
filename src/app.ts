import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";
import { AppDataSource } from "./database/data-source";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

export { app };
