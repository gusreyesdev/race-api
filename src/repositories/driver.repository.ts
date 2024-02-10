import GeoPoint from "geopoint";
import { sumValues } from "../helpers";
import { AppDataSource } from "../database/data-source";
import { driver, rider } from "../interfaces";
import { Driver, Rider } from "../models";
import paymentService from "../services/payment.service";

const setRider = async (rider: Rider, driver: Driver) => {
  try {
    await AppDataSource.createQueryBuilder()
      .update(Driver)
      .set({ rider: rider })
      .where("id = :id", { id: driver.id })
      .execute();

    return true;
  } catch (error) {
    console.error("error set rider ", error);

    return false;
  }
};

const getDrivers = async () => {
  const driverRepository = AppDataSource.getRepository(Driver);

  const drivers = await driverRepository.find();

  return drivers;
};

const getDriverById = async (drivers: Driver[]) => {
  const id = Math.floor(Math.random() * drivers.length) + 1;

  let driverRepository = AppDataSource.getRepository(Driver);

  const driver = new Driver();
  driver.id = id;

  const driverLoad = await driverRepository.findOneBy({ id: driver.id });

  return driverLoad;
};

const getDriverByEmail = async (data: driver) => {
  const { email } = data;

  let driverRepository = AppDataSource.getRepository(Driver);

  const driver = await driverRepository.findOne({
    where: { email: email },
    relations: { rider: true },
  });

  return driver;
};

const finishRide = async (data: driver, driver: Driver) => {
  const riderPoint = new GeoPoint(
    driver.rider.latitude,
    driver.rider.longitude
  );
  const ridePoint = new GeoPoint(data.latitude, data.longitude);

  const distance = Math.round(riderPoint.distanceTo(ridePoint, true));

  const raceValue = distance * 1000;
  const minuteElapsed = data.minuteElapsed * 200;
  const baseFee = 3500;

  const sumArray = [raceValue, minuteElapsed, baseFee];

  const amount = sumValues(sumArray);

  await AppDataSource.createQueryBuilder()
    .update(Driver)
    .set({ rider: null })
    .where("id = :id", { id: driver.id })
    .execute();

  const payment = await paymentService.transactions(amount, data);

  return payment;
};

export default {
  setRider,
  getDrivers,
  getDriverById,
  getDriverByEmail,
  finishRide,
};
