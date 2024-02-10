import { Request, Response } from "express";
import riderService from "../services/rider.service";

const requestRide = async ({ body }: Request, res: Response) => {
  try {
    await riderService.requestRide(body);

    res.status(200).json({
      ok: true,
      msg: "Assing Driver successful",
    });
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        ok: false,
        error: error.message,
        msg: "Please contact with administrator",
      });
    }
  }
};



export { requestRide };
