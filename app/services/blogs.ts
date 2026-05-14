const blogs = [
    {id: 1, title: "Blog 1", author: "Author 1", url: "https://www.blogto.com/", likes: 10},
    {id: 2, title: "Blog 2", author: "Author 2", url: "https://www.blogto.com/", likes: 20},
    {id: 3, title: "Blog 3", author: "Author 3", url: "https://www.blogto.com/", likes: 30},
];

let nextId = 4;

export const getBlogs = () => {
    return blogs;
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({
        id: nextId++,
        title,
        author,
        url,
        likes: 0
    });
}

export const getBlogById = (id: number) => {
    return blogs.find(blog => blog.id === id);
}

export const handleLikeBlog = (id: number) => {
    const blog = getBlogById(id);
    if (blog) {
        blog.likes += 1;
    }
}

export const descendingBlogsByLikes = () => {
    return [...blogs].sort((a, b) => b.likes - a.likes);
}