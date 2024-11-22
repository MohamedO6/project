document.addEventListener("DOMContentLoaded", () => {
    // Dynamic project display on projects.html page
    const projectsContainer = document.getElementById("projects-container");

    // Example project data (this would typically come from a database or API)
    const projects = [
        { title: "Project 1", description: "Description 1", image: "assets/project1.jpg", link: "project1.html" },
        { title: "Project 2", description: "Description 2", image: "assets/project2.jpg", link: "project2.html" },
        { title: "Project 3", description: "Description 3", image: "assets/project3.jpg", link: "project3.html" },
    ];

    // Render projects dynamically
    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3><a href="${project.link}">${project.title}</a></h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Smooth page transition for links (fade-out and fade-in)
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Prevent immediate navigation
            const target = link.getAttribute("href");

            document.body.classList.add("fade-out"); // Trigger fade-out effect
            setTimeout(() => {
                window.location = target; // Redirect after fade-out
            }, 500); // Duration matches fade-out animation
        });
    });

    // Form validation for submitting projects
    const projectForm = document.getElementById("project-form");
    if (projectForm) {
        projectForm.addEventListener("submit", e => {
            e.preventDefault();
            const title = document.getElementById("title").value.trim();
            const description = document.getElementById("description").value.trim();
            const image = document.getElementById("image").files[0];

            // Basic form validation
            if (!title || !description || !image) {
                alert("Please fill in all fields and upload an image.");
                return;
            }

            // Simulate form submission (could be to an API or server)
            alert(`Project "${title}" has been submitted successfully!`);

            // Clear the form fields after submission
            projectForm.reset();
        });
    }

    // Hover effect for project cards (enlarging on hover)
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Scroll animations for smooth scrolling to top of page when a link is clicked
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.classList.add("scroll-to-top");
    scrollToTopButton.textContent = "↑";
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show the "scroll to top" button after scrolling a bit
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });
});
