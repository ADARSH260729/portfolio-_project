// Example of form submission handling (simulated for demo purposes)
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Your message has been sent successfully!');
  } else {
      alert('Please fill in all fields.');
  }

  // Reset the form
  document.getElementById('contact-form').reset();
});
