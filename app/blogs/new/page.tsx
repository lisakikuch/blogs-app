import { createBlog } from "@/app/actions/blogs";

const NewBlog = () => {
    return (
        <div>
            <h2>Create a new blog</h2>
            <form action={createBlog}>
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
                <br />
                <label>
                    Author:
                    <input type="text" name="author" required />
                </label>
                <br />
                <label>
                    URL:
                    <input type="url" name="url" required />
                </label>
                <br />
                <button type="submit">Create Blog</button>
            </form>
        </div>
    )
}

export default NewBlog;