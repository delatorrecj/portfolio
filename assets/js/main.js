setTimeout(() => {
    document.body.classList.remove('preload');
    document.body.classList.add('loaded');
  }, 50);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
    // reset: true, // Animations repeat
})

sr.reveal('.profile, .contact__form')
sr.reveal('.info', {origin: 'left', delay: 800})
sr.reveal('.skills', {origin: 'left', delay: 1000})
sr.reveal('.about', {origin: 'right', delay: 1200})
sr.reveal('.affiliations__container', {origin: 'bottom', delay: 100})
sr.reveal('.projects__card, .value__card, .experience__card', {interval: 100})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_sgcffc1','template_c0d93nk','#contact-form','jfzQucZOWmtwpPWro')

    .then(() =>{
        // Show sent message
        contactMessage.textContent = '✅ message sent successfully ^-^'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = '❌ service error: message not sent •︵•'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
