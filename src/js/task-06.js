var validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function() {
  var inputValue = this.value;
  var requiredLength = parseInt(this.getAttribute('data-length'));

  if (inputValue.length === requiredLength) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});





