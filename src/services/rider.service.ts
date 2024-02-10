import { rider } from "../interfaces";
import riderRepository from "../repositories/rider.repository";
import driverService from "./driver.service";

const requestRide = async (data: rider) => {
  const rider = await getRider(data);

  if (rider === null) {
    throw new Error("Rider not found");
  }

  await driverService.setRider(rider);
};

const getRider = async (data: rider) => {
  const rider = await riderRepository.getRider(data);

  return rider;
};

export default { getRider, requestRide };
