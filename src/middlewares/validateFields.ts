import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const validate = validationResult(req);

  if (!validate.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: validate.mapped(),
    });
  }

  next();
};
