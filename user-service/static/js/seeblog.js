document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace this with actual blog data)
    const blogsData = [
        { title: "First Blog", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { title: "Second Blog", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        // Add more blog data as needed
    ];

    const blogListContainer = document.getElementById("blogList");
    fetch('/adminstatus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: "Nothing" }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

    // Populate the blog list with data
    data.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogListContainer.appendChild(blogCard);
    });
})
.catch(error => console.error('Error sending data:', error));
});

    function createBlogCard(blog) {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const titleElement = document.createElement("h2");
        titleElement.textContent = blog.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = blog.blogs;

        blogCard.appendChild(titleElement);
        blogCard.appendChild(contentElement);

        return blogCard;
    }

