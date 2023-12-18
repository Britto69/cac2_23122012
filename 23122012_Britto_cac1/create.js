// create.js
document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blog-form");

    blogForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new blog element and append it to the blogs list
        const newBlog = {
            id: blogs.length + 1,
            title: title,
            content: content
        };

        blogs.push(newBlog);

        // Redirect to the main page after creating the blog
        window.location.href = "index.html";
    });
});
