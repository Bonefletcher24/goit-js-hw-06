document.addEventListener('DOMContentLoaded', function () {
    var fontSizeControl = document.getElementById('font-size-control');
    var textElement = document.getElementById('text');

    fontSizeControl.addEventListener('input', function () {
        textElement.style.fontSize = fontSizeControl.value + 'px';
    });
});


