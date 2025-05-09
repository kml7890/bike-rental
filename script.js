// Particle Animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Login Modal
function showLoginModal() {
    document.getElementById('loginModal').classList.add('show');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'kamal' && password === 'almora123') {
        document.getElementById('userStatus').textContent = `Welcome, ${username}!`;
        hideLoginModal();
    } else {
        alert('Invalid credentials! Try username: kamal, password: almora123');
    }
});

// Bike Filter Functionality
function filterBikes() {
    const filter = document.getElementById('bikeFilter').value;
    const maxPrice = document.getElementById('priceRange').value;
    document.getElementById('priceValue').textContent = maxPrice;
    const bikeCards = document.querySelectorAll('.bike-card');

    bikeCards.forEach(card => {
        const typeMatch = filter === 'all' || card.dataset.type === filter;
        const priceMatch = parseInt(card.dataset.price) <= maxPrice;
        if (typeMatch && priceMatch) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

filterBikes();

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    document.getElementById('testimonialContainer').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 3000);

// Booking Functionality
function scrollToBooking() {
    document.getElementById('bookingForm').scrollIntoView({ behavior: 'smooth' });
}

function bookBike(bikeName) {
    document.getElementById('bike').value = bikeName;
    scrollToBooking();
}

document.getElementById('rentalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const bike = document.getElementById('bike').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!bike) {
        alert('Please select a bike first!');
        return;
    }

    alert(`Booking Confirmed!\nName: ${name}\nBike: ${bike}\nFrom: ${startDate}\nTo: ${endDate}`);
    this.reset();
});

// Contact Form Functionality
document.getElementById('contactFormSubmit').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
});

// Quick Quote Functionality
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bike = document.getElementById('quoteBike').value;
    const days = document.getElementById('quoteDays').value;
    const prices = {
        'Bajaj Pulsar': 200,
        'Honda Activa': 150,
        'Royal Enfield': 400
    };

    if (days <= 0) {
        alert('Number of days must be greater than 0!');
        return;
    }

    const total = prices[bike] * days;
    alert(`Quick Quote:\nBike: ${bike}\nDays: ${days}\nTotal: ₹${total}`);
    this.reset();
});
