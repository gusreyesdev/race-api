import serverlessExpress from "@codegenie/serverless-express";
import { app } from "./app";
import { AppDataSource } from "./database/data-source";

let serverlessExpressInstance: any

const asyncTask = async () => {

    try {
       return await AppDataSource.initialize();
       
        
    } catch (error) {
        console.error("Error during Data Source initialization", error);
    }
};

const setup = async (event: any,context: any) => {
    await asyncTask()

    serverlessExpressInstance = serverlessExpress({ app })

    return serverlessExpressInstance(event, context)
}

export const handler = (event: any, context: any) => {
    if(serverlessExpressInstance){
        return serverlessExpressInstance(event, context)
    }

    return setup(event, context)
}
