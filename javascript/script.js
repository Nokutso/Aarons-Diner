const logo = document.getElementById('logo');

//TRIGGERING THE BOUNCE ANIMATION ON HOVER
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  if (!logo) return;

  logo.addEventListener("mouseenter", () => {
    logo.classList.remove("animate__bounce");
    void logo.offsetWidth; // reflow
    logo.classList.add("animate__bounce");
  });

  logo.addEventListener("animationend", () => {
    logo.classList.remove("animate__bounce");
  });
});


function openTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab');

  contents.forEach((content) => content.classList.remove('active'));
  buttons.forEach((btn) => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
};


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      document.getElementById('formMessage').textContent = 'Thank you for your message!';
      this.reset();
    } else {
      document.getElementById('formMessage').textContent = 'Please fill in all fields.';
    }
  })
});

