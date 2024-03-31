// Article data (replace with actual data)
const articles = [
    { title: "Understanding Anxiety", description: "Learn about symptoms and coping strategies.", category: "Anxiety", link: "#" },
    { title: "Managing Stress at Work", description: "Tips for reducing stress in the workplace.", category: "Stress Management", link: "#" },
    { title: "Practicing Mindfulness", description: "Introduction to mindfulness meditation techniques.", category: "Mindfulness", link: "#" },
    // Add more articles as needed
];

// Generate article cards
const articlesContainer = document.querySelector('#articles .container');
articles.forEach(article => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    articleCard.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.link}" class="button">Read More</a>
    `;
    articlesContainer.appendChild(articleCard);
});

// Self-assessment form logic
// const assessmentForm = document.getElementById('assessment-form');
// const assessmentResult = document.getElementById('assessment-result');

// assessmentForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // Logic to process self-assessment data and show result
//     const moodLevel = document.getElementById('mood-level').value;
//     const stressLevel = document.getElementById('stress-level').value;
//     const result = calculateAssessment(moodLevel, stressLevel);
//     assessmentResult.innerHTML = `<p>Your assessment result: ${result}</p>`;
//     assessmentResult.style.display = 'block';
// });

// function calculateAssessment(moodLevel, stressLevel) {
//     // Example calculation logic (replace with actual logic)
//     const total = parseInt(moodLevel) + parseInt(stressLevel);
//     if (total >= 5) {
//         return "High stress level";
//     } else if (total >= 3) {
//         return "Moderate stress level";
//     } else {
//         return "Low stress level";
//     }
// }
// Other JavaScript code (unchanged)

// Self-assessment form logic
const assessmentForm = document.getElementById('assessment-form');
const assessmentResult = document.getElementById('assessment-result');

assessmentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const todayDescription = document.getElementById('today-description').value;
    const moodLevel = document.getElementById('mood-level').value;
    const writeAboutIt = document.getElementById('write-about-it').value;

    const result = calculateAssessment(todayDescription, moodLevel, writeAboutIt);
    assessmentResult.innerHTML = `<p>Your assessment result: ${result}</p>`;
    assessmentResult.style.display = 'block';
});

function calculateAssessment(todayDescription, moodLevel, writeAboutIt) {
    // Example calculation logic (replace with actual logic)
    let result = `Today's description: ${todayDescription}\n`;
    result += `Mood level: ${moodLevel}\n`;
    result += `Write about it: ${writeAboutIt}\n`;
    // Add more assessment criteria as needed
    return result;
}


// Therapist data (replace with actual data)
const therapists = [
    { name: "Dr. Jane Doe", specialization: "Clinical Psychologist", location: "New York", contact: "123-456-7890" },
    { name: "Dr. John Smith", specialization: "Licensed Counselor", location: "Los Angeles", contact: "987-654-3210" },
    // Add more therapists as needed
];

// Generate therapist profiles
const therapistList = document.getElementById('therapist-list');
therapists.forEach(therapist => {
    const therapistProfile = document.createElement('div');
    therapistProfile.classList.add('therapist-profile');
    therapistProfile.innerHTML = `
        <h3>${therapist.name}</h3>
        <p><strong>Specialization:</strong> ${therapist.specialization}</p>
        <p><strong>Location:</strong> ${therapist.location}</p>
        <p><strong>Contact:</strong> ${therapist.contact}</p>
    `;
    therapistList.appendChild(therapistProfile);
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Logic to handle contact form submission (e.g., send data to backend)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Example: Send form data to backend using fetch API
    fetch('your-backend-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle response from backend
            alert('Message sent successfully!');
            // Clear form fields after submission
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});

// Social media links (replace with actual links)
const socialMediaLinks = `
    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
`;

document.getElementById('social-media').innerHTML = socialMediaLinks;
