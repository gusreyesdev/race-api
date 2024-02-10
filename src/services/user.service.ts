import { user } from "../interfaces";
import userRepository from "../repositories/user.repository";

const getUser = async () => {
    const rider = await userRepository.getUser();
  
    return rider;
};

export default {
    getUser
}

