import prisma from "./get-repository";
import { Post } from "../types/post";

export async function savePost(post: Post) {
  const targetPost = {
    ...post,
    contents: {},
  };
  post.contents.map((el) => {
    targetPost.contents = {
      ...targetPost.contents,
      create: {
        ...el,
      },
    };
  });
  console.log(JSON.stringify(targetPost));

  return await prisma.post.create({
    data: targetPost,
    include: { contents: true },
  });
}

export async function findPost(postTitle: string) {
  return await prisma.post.findFirst({
    where: {
      title: postTitle,
    },
    include: {
      contents: false,
    },
  });
}

export async function findPosts() {
  return await prisma.post.findMany({
    include: {
      contents: false,
    },
  });
}

export async function findContents(postId: number) {
  return await prisma.content.findMany({
    where: {
      post_id: postId,
    },
    orderBy: {
      order: "desc",
    },
  });
}

export async function deletePost(postId: number) {
  return await prisma.post.delete({
    where: {
      id: postId,
    },
  });
}

export async function deleteContents(postId: number) {
  return await prisma.content.deleteMany({
    where: {
      post_id: postId,
    },
  });
}
