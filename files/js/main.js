
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

// MOBILE MENU

function mobileMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}