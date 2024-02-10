import { AppDataSource } from "../database/data-source";
import { user } from "../interfaces";
import { User } from "../models";

const getUser = async () => {
  let userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: 1 });

  return user;

};

export default {
  getUser,
};
