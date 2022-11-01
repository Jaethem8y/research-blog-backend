import { Post, Content } from "../types/post";
import {
  savePost,
  findPost,
  findPosts,
  findContents,
  deletePost,
  deleteContents,
} from "../repository/post-repository";

// CRUD
export async function savePostService(post: Post) {
  return await savePost(post);
}

export async function getPostsService() {
  return await findPosts();
}

export async function getPostService(postTitle: string) {
  const targetPost = await findPost(postTitle);
  const targetContents = await findContents(targetPost!!.id);
  let resContents: Content[] = [];
  targetContents.map((el) => {
    resContents.push({
      order: el.order,
      writing: el.writing,
      tag: el.tag,
      link: el.link,
      image: el.image,
      code: el.code,
      important: el.important,
    });
  });
  const resPost: Post = {
    title: targetPost!!.title,
    description: targetPost!!.description,
    category: targetPost!!.category,
    contents: [...targetContents],
  };
  return resPost;
}

export async function updatePostService(post: Post) {
  const targetPost = await findPost(post.title);
  await deleteContents(targetPost!!.id);
  await deletePost(targetPost!!.id);
  return await savePost(post);
}

export async function deletePostService(postTitle: string) {
  const targetPost = await findPost(postTitle);
  await deleteContents(targetPost!!.id);
  await deletePost(targetPost!!.id);
}
