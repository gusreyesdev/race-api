import { Request, Response } from "express";
import driverService from "../services/driver.service";

const finishRide = async ({ body }: Request, res: Response) => {
  try {
    const ride = await driverService.finishRide(body);
    const payment = {
      reference: ride.data.reference,
      amount: ride.data.amount_in_cents,
      pay_method: ride.data.payment_method_type,
      created_at: ride.data.created_at,
    };

    res.status(200).json({
      ok: true,
      msg: "transaction completed successfully",
      payment: payment,
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

export { finishRide };
