// Scroll to top
var ScrollToTop = document.querySelector('.ScrollUp')
ScrollToTop.addEventListener('click', function () {
    window.scrollTo(0, 0)

});
window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 100) {
        ScrollToTop.style.display = 'block'
    }
    else {
        ScrollToTop.style.display = 'none'
    }
});
var NavLinks = document.querySelectorAll('.nav-link')
NavLinks.forEach(addActiveClass => {
    addActiveClass.addEventListener('click', function () {
        NavLinks.forEach(removeActiveClass => {
            removeActiveClass.classList.remove('active')
        })
        addActiveClass.classList.add('active')

    })
})
// Valedation Email
var emailInput = document.querySelector('[type=email]');
var emailHelp = document.querySelector('#EmailHelp')
emailInput.addEventListener('blur', function () {
    var value = emailInput.value;
    if (value === '') {
        emailInput.classList.add('border', 'border-danger');
        emailHelp.innerHTML = "Email is required.";
        emailInput.classList.remove('border-success'); // Remove success border if previously applied
    } else if (!value.includes('@') || !value.includes('.')) {
        emailInput.classList.add('border', 'border-danger');
        emailHelp.innerHTML = "Please enter a valid email address.";
        emailInput.classList.remove('border-success');
    } else {
        emailHelp.innerHTML = "";
        emailInput.classList.remove('border-2', 'border-danger'); // Remove error borders
        emailInput.classList.add('border', 'border-success'); // Add success border if valid
    }
});