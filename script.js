document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Thank you for your message!');
});

window.addEventListener('load', function(){
    const backgroundMusic = this.document.getElementById('backgroundMusic');
    backgroundMusic.play();
});

window.addEventListener('beforeunload', function(){
    const backgroundMusic = this.document.getElementById('backgroundMusic');
    backgroundMusic.pause();
});