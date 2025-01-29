document.addEventListener("DOMContentLoaded", function () {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active"); // Add active class for styling
        }
    });

    // Read More Button Click Handling
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to full article..."); // Simulating a redirect
            window.location.href = this.href;
        });
    });

    // Smooth Scroll for Internal Links
    const internalLinks = document.querySelectorAll("a[href^='#']");
    internalLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
