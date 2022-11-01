import { getUserRepo, saveUserRepo } from "../repository/admin-repository";
import { Login, User } from "../types/login";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getUserService(login: Login) {
  try {
    const user = await getUserRepo(login);
    const match = await bcrypt.compare(login.password, user.password);
    if (match) {
      const token = jwt.sign({ username: user.username }, "TOPSECRET", {
        expiresIn: "1d",
      });
      return token;
    }
    return;
  } catch (e) {
    console.error(e);
  }
}

export async function saveUserService(user: User) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  try {
    return await saveUserRepo(user);
  } catch (e) {
    console.error(e);
  }
}
