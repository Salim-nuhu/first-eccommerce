// 1. Welcome message when page loads
window.addEventListener('load', function() {
    alert('Welcome to Adidas Collections! 🛍️');
});

// 2. Get all "Add to Cart" buttons
const buttons = document.querySelectorAll('.buy-button');

// Add click event to each button
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the product name
        const productName = this.parentElement.querySelector('h3').textContent;
        
        // Show "added to cart" message
        alert(productName + ' added to cart! 🛒');
    });
});

// 3. Image zoom effect on hover
const images = document.querySelectorAll('.item img');

images.forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 4. Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.textContent = '↑ Top';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '30px';
scrollButton.style.right = '30px';
scrollButton.style.padding = '15px 20px';
scrollButton.style.backgroundColor = '#000';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '5px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.display = 'none';
scrollButton.style.fontWeight = 'bold';
scrollButton.style.fontSize = '16px';
document.body.appendChild(scrollButton);

// Show button when scrolling down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to top when clicked
scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. Show current time in footer
const footerBottom = document.querySelector('.footer-bottom p');
if (footerBottom) {
    const currentTime = new Date().toLocaleTimeString();
    footerBottom.textContent += ' | Current Time: ' + currentTime;
}