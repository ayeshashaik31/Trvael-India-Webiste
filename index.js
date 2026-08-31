const contact = document.getElementById('contact-content')
const packageButtons = document.querySelectorAll('.package-book')
const booking = document.getElementById('book')
const explorebtn = document.getElementById('explore-btn')
const packages = document.getElementById('packages')
const bookingForm = document.querySelector('.booking-content')

booking.addEventListener('submit' , (event) => {
    event.preventDefault()
    alert("Booking succesgul! ThankYou")
})

contact.addEventListener('submit', (e) => {
    e.preventDefault()
    alert("ThankYou, Our team will contact you soon")
})

packageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        booking.scrollIntoView({
            behavior: "smooth"
        })
    })
})

explorebtn.addEventListener('click', () =>{
    packages.scrollIntoView({
        behavior: "smooth"
    })
})

