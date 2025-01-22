document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click event to main navigation items
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });

    // Implement a simple slideshow for the cards
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    function showNextCard() {
        cards[currentCardIndex].style.display = 'none';
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        cards[currentCardIndex].style.display = 'block';
    }

    setInterval(showNextCard, 5000); // Change card every 5 seconds

    // Implement the subscribe form functionality
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
        });
    }

    // Add smooth scrolling to footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Implement a simple search functionality
    const searchInput = document.querySelector('.top-nav input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                alert(`Searching for: ${this.value}`);
            }
        });
    }
});
