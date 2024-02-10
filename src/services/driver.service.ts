import driverRepository from "../repositories/driver.repository";
import { Rider, Driver } from "../models";
import { driver } from "../interfaces";
import { setTimeout } from "timers/promises";

const setRider = async (rider: Rider) => {
  const drivers = await getDrivers();

  const driverLoad = await getDriverById(drivers);

  await setTimeout(8000);

  if (driverLoad) {
    const driver = await driverRepository.setRider(rider, driverLoad);

    if (!driver) {
      throw new Error("Error to Assing Driver");
    }
  }
};

const getDrivers = async () => {
  const drivers = await driverRepository.getDrivers();

  return drivers;
};

const getDriverById = async (drivers: Driver[]) => {
  const driver = await driverRepository.getDriverById(drivers);
  return driver;
};

const getDriverByEmail = async (data: driver) => {
  const driver = await driverRepository.getDriverByEmail(data);

  if (driver === null) {
    throw new Error("Driver not found");
  } else if (driver.rider === null) {
    throw new Error("Driver dont have a ride assigned");
  }

  return driver;
};

const finishRide = async (data: driver) => {
  const driver = await getDriverByEmail(data);

  const ride = await driverRepository.finishRide(data, driver);

  return ride;
};

export default {
  setRider,
  getDrivers,
  getDriverById,
  getDriverByEmail,
  finishRide,
};
