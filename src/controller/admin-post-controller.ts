import { Router } from "express";
import { verifyJWT } from "../util/verify-token";
import {
  savePostService,
  updatePostService,
  deletePostService,
} from "../service/post-service";

export const postRouter = Router();

// CRUD

postRouter.post("/addPost", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!(await verifyJWT(token))) {
    res.set(503).send("Authorization needed");
    return;
  }
  try {
    const post = req.body;
    const targetPost = await savePostService(post);
    res.send(targetPost);
  } catch (e) {
    console.error(e);
    res.set(500).send("failed");
  } finally {
    return;
  }
});

postRouter.post("/updatePost", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!(await verifyJWT(token))) {
    res.set(503).send("Authorization needed");
    return;
  }
  try {
    const targetPost = req.body;
    const resultPost = await updatePostService(targetPost);
    res.send(resultPost);
  } catch (e) {
    res.set(500).send("failed");
  } finally {
    return;
  }
});

postRouter.post("/deletePost", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!(await verifyJWT(token))) {
    res.set(503).send("Authorization needed");
    return;
  }
  try {
    const result = await deletePostService(req.body.title);
  } catch (e) {
    res.set(500).send("failed");
  } finally {
    return;
  }
});
