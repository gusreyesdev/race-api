import { driver, payment } from "../interfaces";
import cripto from "node:crypto";
import userRepository from "../repositories/user.repository";
import fetch from "node-fetch";

require("dotenv").config({ path: "./.env" });

const transactions = async (pay: payment, data: driver) => {
  const user = await userRepository.getUser();

  if (user) {
    const signature =
      data.reference + pay + "00" + user.currency + user?.integrity;

    const hash = cripto.createHash("sha256");

    hash.update(signature);

    const hashSignature = hash.digest("hex");

    const payment_url = process.env.payment_url as string;

    const dataBody = {
      amount_in_cents: parseInt(pay + "00"),
      currency: user.currency,
      signature: hashSignature,
      customer_email: user.customer_email,
      payment_method: {
        installments: 1,
      },
      reference: data.reference,
      payment_source_id: user.payment_source_id,
    };

    const response = await fetch(payment_url, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: { Authorization: `Bearer ${user.key}` },
    });

    const dataResponse = await response.json();

    if (dataResponse.error) {
      throw new Error("Error wompi to completing transaction");
    }
    return dataResponse;
  }
};

export default { transactions };
