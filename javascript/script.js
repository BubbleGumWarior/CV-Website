var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer", "Front-End Developer", "Back-End Developer", "Database Developer", "Full-Stack Developer"],
    typeSpeed:80,
    BackSpeed:60,
    loop:true
})

emailjs.init("R1T9lKaIxEwTthIgg");

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'smtp.nefdtco.co.za';
        const templateID = 'template_f4doggt';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });