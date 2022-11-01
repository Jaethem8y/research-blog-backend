import prisma from "./get-repository"
import { Login, User } from "../types/login";

export async function getUserRepo(login: Login) {
  const user = await prisma.admin.findUnique({
    where: {
      username: login.username,
    },
  });
  if (user === null || user === undefined)
    throw new Error("User does not exist");
  return user
}

export async function saveUserRepo(user: User) {
  const res = await prisma.admin.create({
    data: {
      username: user.username,
      password: user.password,
      role: user.role,
    },
  });
  return res;
}
