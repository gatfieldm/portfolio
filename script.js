document.getElementById('toggleButton').addEventListener('click', function() {
    var buttons = document.querySelectorAll('.nav-button2');
    var buttonText = this;
    var anyButtonVisible = Array.from(buttons).some(button => button.classList.contains('show'));

    buttons.forEach(function(button) {
        if (!anyButtonVisible) {
            button.style.display = 'flex';
            setTimeout(() => button.classList.add('show'), 10); // Delay to trigger CSS transition
        } else {
            button.classList.remove('show');
            setTimeout(() => button.style.display = 'none', 500); // Delay to match CSS transition duration
        }
    });

    // Update the button text based on the current state
    if (!anyButtonVisible) {
        buttonText.textContent = 'Hide Category Filter';
    } else {
        buttonText.textContent = 'Expand Category Filter';
    }
});
