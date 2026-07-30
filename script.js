// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Contact Form
const form = document.querySelector(".contact-form");

if (form) {
   form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("✅ Message Sent Successfully!");
        form.reset();
    } else {
        alert("❌ Message failed. Try again.");
    }
});
}

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
// Typing Effect

const text = "Computer Science Graduate | Front-End Web Developer";
const typingElement = document.getElementById("typing");

let index = 0;

function typeText(){

    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }

}

typeText();