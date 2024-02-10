import { AppDataSource } from "../database/data-source";
import { rider } from "../interfaces";
import { Rider } from "../models";

const requestRide = async (data: rider) => {
  const { email } = data;

  const riderRepository = AppDataSource.getRepository(Rider);

  const riderLoad = await riderRepository.findOneBy({ email: email });

  return riderLoad;
};

const getRider = async (data: rider) => {
  const { email } = data;

  const riderRepository = AppDataSource.getRepository(Rider);

  const rider = await riderRepository.findOneBy({ email: email });

  return rider;
};

export default {
  getRider,
  requestRide,
};
