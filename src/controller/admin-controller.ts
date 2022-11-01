import { Router } from "express";
import { verifyJWT } from "../util/verify-token";
import { getUserService, saveUserService } from "../service/admin-service";

export const adminRouter = Router();

adminRouter.post("/register", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!(await verifyJWT(token))) {
    res.set(503).send("Authorization needed");
    return;
  }
  const user = req.body;
  const result = await saveUserService(user);
  res.json(result);
  return;
});

adminRouter.post("/login", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  const result = await getUserService(user);
  if (result !== undefined) {
    res.json("Bearer " + result);
    return;
  }
  res.set(403).send("No");
  return;
});
