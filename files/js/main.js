
// FORM EVENT ONCLICK AND RESET

   function handleClick(event) {
    event.preventDefault();

    const forms = document.getElementById('form');

      if (form.checkValidity()){
        alert("Your message has been sent successfully!");
      
      } else {
        alert('Please fill in all the fields.');
      }

      forms.reset();

    };

// 