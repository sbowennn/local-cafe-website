


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementByClass('contact');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page reload

      // Capture form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      // Create a data object to send
      const formData = {
          name: name,
          email: email
      };

      const resultDiv = document.getElementById('submit');
      resultDiv.innerHTML = `<p>Thank you, <strong>${name}</strong>! We will contact you at <strong>${email}</strong>.</p>`;

      // Optionally reset the form
      form.reset();
  });
});