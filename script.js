// Simple JavaScript enhancements for the website
document.addEventListener('DOMContentLoaded', function () {

    // 1. Hover zoom effect on product images
    const productImages = document.querySelectorAll('.item img');
    productImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.08)';
            img.style.transition = 'transform 0.4s ease';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // 2. "Add to Cart" button click - show friendly alert + small animation
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent any default link behavior

            // Get product name
            const productName = this.closest('.item').querySelector('h3').textContent;

            // Show alert
            alert(`${productName} has been added to your cart! 🛒`);

            // Small button animation
            this.textContent = 'Added!';
            this.style.backgroundColor = '#005a00'; // Darker green
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '#000';
            }, 1500);
        });
    });

    // 3. Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
            link.style.color = '#fff'; // Keep white but make it stand out
        }
    });

    // 4. Smooth scroll for any anchor links (optional nice touch)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});