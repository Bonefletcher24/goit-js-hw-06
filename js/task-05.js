document.getElementById('name-input').addEventListener('input', function () {
    var inputValue = this.value.trim(); // Удаляем пробелы в начале и конце строки
    var nameOutput = document.getElementById('name-output');

    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
});


