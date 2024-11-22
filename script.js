/* Basic Styles for the Project Page */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

header {
    background-color: #343a40;
    color: white;
    padding: 20px 0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

header nav ul li a:hover {
    text-decoration: underline;
}

.projects-filter {
    background-color: #f1f1f1;
    padding: 20px 0;
}

.filter-sort {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
}

.filter {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.projects {
    padding: 40px 0;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.project-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.project-card p {
    font-size: 1rem;
    margin-bottom: 15px;
}

.project-card a {
    text-decoration: none;
    font-weight: bold;
    color: #0056b3;
}

.project-card a:hover {
    text-decoration: underline;
}

.btn {
    background-color: #f7b731;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
}

.btn:hover {
    background-color: #e67e22;
}

/* Footer */
footer {
    background-color: #343a40;
    color: white;
    padding: 20px 0;
    text-align: center;
}
