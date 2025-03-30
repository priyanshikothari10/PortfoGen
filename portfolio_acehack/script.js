// Handle login modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const submitLogin = document.getElementById('submitLogin');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

submitLogin.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert(`Welcome, ${username}!`);
        loginModal.style.display = 'none';
    }
});

// Portfolio generation logic
document.getElementById('generateBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const bio = document.getElementById('bio').value.trim();
    const projects = document.getElementById('projects').value.trim();

    // Feedback validation
    let valid = true;

    if (name.length < 3) {
        document.getElementById('nameFeedback').textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        document.getElementById('nameFeedback').textContent = "";
    }

    if (bio.length < 10) {
        document.getElementById('bioFeedback').textContent = "Bio must be at least 10 characters.";
        valid = false;
    } else {
        document.getElementById('bioFeedback').textContent = "";
    }

    if (projects.split(',').length < 1) {
        document.getElementById('projectsFeedback').textContent = "Please list at least one project.";
        valid = false;
    } else {
        document.getElementById('projectsFeedback').textContent = "";
    }

    if (!valid) return;

    // Generate portfolio HTML
    const portfolioHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        ul { list-style-type: square; }
    </style>
</head>
<body>
    <h1>${name}'s Portfolio</h1>
    <p>${bio}</p>
    <h2>Projects</h2>
    <ul>
        ${projects.split(',').map(project => `<li>${project.trim()}</li>`).join('')}
    </ul>
</body>
</html>
    `;

    // Create a downloadable file
    const blob = new Blob([portfolioHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = `${name.replace(/\s+/g, '_')}_Portfolio.html`;
    downloadLink.textContent = "Download Your Portfolio";
    downloadLink.style.display = 'block';
});