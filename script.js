
function toggleMenu() {
  const manu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  manu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Close dropdowns when clicking outside
window.addEventListener('click', function (event) {
  const isDropdownClick = event.target.closest('.menu-links') || event.target.closest('.hamburger-icon');
  if (!isDropdownClick) {
    document.querySelectorAll('.menu-links').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.hamburger-icon').forEach(el => el.classList.remove('open'));
  }
});



var typed = new Typed('#element', {
  strings: ['AI Engineer | Flutter Developer | Python Developer'],
  typeSpeed: 50,
  showCursor: false,
});

(function() {
  emailjs.init("VNIqaSDE9mi4muSi2"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_5dykn4e', 'template_efqlr9e', this)
    .then(function() {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function(error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again.");
    });
});
