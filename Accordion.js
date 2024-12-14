const Accordion = document.getElementsByClassName
('CBx');

for(i=0; i<Accordion.length; i++) {
    Accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}