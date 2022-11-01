import { Router } from "express";
import { getPostService, getPostsService } from "../service/post-service";

export const apiPostRouter = Router();

apiPostRouter.get("/posts", async (req, res) => {
  const targetPosts = await getPostsService();
  res.send(targetPosts);
  return;
});

apiPostRouter.get("/post/:title", async (req, res) => {
  const title = req.params.title;
  const targetPost = await getPostService(title);
  res.send(targetPost);
  return;
});
