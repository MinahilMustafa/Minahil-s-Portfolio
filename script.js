function talk() {
  alert("Thanks for reaching out! I'll get back to you soon.");
}

function contactInfo() {
  alert("📧 Email: minahil.mustafa@email.com\n📞 Phone: +92 300 1234567\n📍 Location: Lahore, Pakistan");
}

function learnMore() {
  alert("As a passionate developer, I’ve built multiple full-stack applications using the MERN stack. I'm also experienced in RESTful API development, Git version control, and agile team collaboration. I’m eager to expand my knowledge in cloud deployment and DevOps tools.");
}

// Highlight active nav link
window.onload = () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if ((href === "index.html" && (currentPage === "" || currentPage === "index.html")) || href === currentPage) {
      link.classList.add("active");
    }
  });
};
