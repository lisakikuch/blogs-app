import Link from "next/link";
import { descendingBlogsByLikes } from "../services/blogs";
import { filterBlogs } from "../actions/blogs";

const Blogs = async ({ searchParams }: { searchParams: Promise<{ filter?: string }> }) => {
    const { filter } = await searchParams;
    const blogs = descendingBlogsByLikes();
    const filteredBlogs = filter ? blogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase())) : blogs;
    return (
        <div>
            <h2>Blogs</h2>
            <form action={filterBlogs}>
                <input type="text" name="filter" placeholder="Filter blogs..." />
                <button type="submit">Filter</button>
            </form>
            <ul>
                {filteredBlogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        <p>Author: {blog.author}</p>
                        <a href={blog.url}>Link</a>
                        <p>Likes: {blog.likes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blogs;