document.addEventListener('DOMContentLoaded', function() {
    var controlItems = document.querySelectorAll('.main_control');

    controlItems.forEach(function(controlItem) {
        controlItem.addEventListener('click', function() {
            var allHiddenElements = document.querySelectorAll('.main_dropdowneach .hidden');
            allHiddenElements.forEach(function(hiddenElement) {
                hiddenElement.style.display = 'none';
            });

            var hiddenElement = controlItem.parentElement.querySelector('.hidden');
            if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
                hiddenElement.style.display = 'block';
            } else {
                hiddenElement.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu');
    var navLinks = document.querySelector('nav ul');

    menuButton.addEventListener('click', function() {
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'block';
        } else {
            navLinks.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target !== menuButton && !navLinks.contains(target)) {
            navLinks.style.display = 'none';
        }
    });
});