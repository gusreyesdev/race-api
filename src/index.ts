import "reflect-metadata";
import { app } from "./app";
import { AppDataSource } from "./database/data-source";

const setup = async () => {
  try {
    await AppDataSource.initialize();

    console.log("Data Source has been initialized!");

    app.listen(process.env.PORT, () => {
      console.log(`Server local is running at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
};

setup();
