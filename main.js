const body = document.querySelector('body');

const snowflakes = [
  "./snowflake.svg",
  "./snowflake2.svg",
  "./snowflake3.svg",
  "./snowflake4.svg",
  "./snowflake5.svg",
]
const lastSnow = [0, 0];
const delay = 2000;
const rand = (min, max) => {
  return Math.floor(Math.random() * (max-min) + min);
}

window.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;
  const currentX = lastSnow[0] - x;
  const currentY = lastSnow[1] - y;
  const length = Math.sqrt(Math.pow(currentX, 2) + Math.pow(currentY, 2));
  if(length > 85) {
    lastSnow[0] = x;
    lastSnow[1] = y;
    const particle = document.createElement('img');
    particle.height = 20;
    particle.width = 20;
    particle.src = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    particle.classList.add('particle');
    particle.style.top = y + 'px';
    particle.style.left = x + 'px';
    particle.animate({
      translate: `${rand(-40, 40)}px ${rand(50, 100)}px`,
      opacity: 0,
      transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
    }, {
      duration: delay,
      fill: 'forwards',
    });
    body.appendChild(particle)
    setTimeout(() => body.removeChild(particle), delay)
  }

  const glow = document.createElement('div');
  glow.classList.add('glow');
  glow.style.top = y + 'px';
  glow.style.left = x + 'px';
  body.appendChild(glow)
  setTimeout(() => body.removeChild(glow), 100)
});


const cursorShining = () => {
  const shining = setInterval(() => {
    
  }, 20);
}
cursorShining();