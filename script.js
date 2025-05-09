// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto slide every 3 seconds
setInterval(nextTestimonial, 3000);

// Initial display with fallback
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
} else {
    console.log("No testimonials found.");
}
