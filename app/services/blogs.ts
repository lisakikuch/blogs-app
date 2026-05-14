import { eq } from "drizzle-orm";
import { db } from "../../db";
import { blogs } from "../../db/schema";

export const getBlogs = async () => {
    return await db.query.blogs.findMany();
}

export const addBlog = async (title: string, author: string, url: string) => {
    await db.insert(blogs).values({
        title,
        author,
        url,
        likes: 0
    });
}

export const getBlogById = async (id: number) => {
    return db.query.blogs.findFirst({
        where: eq(blogs.id, id)
    });
}

export const handleLikeBlog = async (id: number) => {
    const blog = await getBlogById(id);
    if (blog) {
        await db.update(blogs).set({ likes: blog.likes + 1 }).where(eq(blogs.id, id));
    }
}

export const descendingBlogsByLikes = async () => {
    const blogs = await getBlogs();
    return [...blogs].sort((a, b) => b.likes - a.likes);
}