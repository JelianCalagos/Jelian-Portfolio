const marquee = document.querySelector('.marquee');
function animateMarquee() {
  const marqueeWidth = marquee.offsetWidth;
  
  const textWidth = marquee.firstElementChild.offsetWidth;

  const duration =(textWidth + marqueeWidth) / 20;
  marquee.computedStyleMap.animationDuration = duration + 's'
  marquee.computedStyleMap.animationIterationCount = 'infinite';

  marquee.classList.add('marquee-animate');

  animateMarquee();
}
 
const form = document.getElementById('contact-form');
form.addEventListener('submit',function (e) {
       e.preventDefault();
});

   const name = document.querySelector('input [name="name"]').value
      const email = document.querySelector('input [name="email"]').value;
      const message = document.querySelector('textarea [name="message"]').value;
{
      form.reset(); 
};

document.querySelectorAll('.img-gallery img').forEach(img =>{
      img.onclick = () =>{
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = img.getAttribute('src');
      }
  });

  document.querySelector('.popup-image span').onclick = () =>{
      document.querySelector('.popup-image').style.display = 'none';
  }