document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var emailInput = this.elements.email;
    var passwordInput = this.elements.password;
  
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('All fields must be filled.');
      return;
    }
  
    var formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
  
    console.log(formData);
  
    this.reset();
  });






