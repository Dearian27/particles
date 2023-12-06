const body = document.querySelector('body');
let pixelIndex = 0;

const canvas = document.createElement('canvas');
canvas.width = 200;
const ctx = canvas.getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, '#b827fc');
gradient.addColorStop(0.25, '#2c90fc');
gradient.addColorStop(0.5, '#b8fd33');
gradient.addColorStop(0.75, '#fec837');
gradient.addColorStop(1, '#fd1892');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
function getPixelColor(x, y) {
    const imageData = ctx.getImageData(x, y, 1, 1);
    const data = imageData.data;
    const color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    return color;
}

const cursorPosition = [null, null];
window.addEventListener('mousemove', (event) => {
  cursorPosition[0] = event.pageX;
  cursorPosition[1] = event.pageY;
});

document.onload = () => {
  cursorShining();
}
const cursorShining = () => {
  const shining = setInterval(() => {
    if(cursorPosition[0] && cursorPosition[1]) {
      const particle = document.createElement('div');
      const offsetX = Math.floor((Math.random() * 20) - 10);
      const offsetY = Math.floor((Math.random() * 20) - 10);
      particle.classList.add('particle');
      // particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
      // particle.style.fill = getPixelColor(pixelIndex, 0);
      particle.style.top = cursorPosition[1] + offsetY + 'px';
      particle.style.left = cursorPosition[0] + offsetX + 'px';
      pixelIndex = (pixelIndex + 1) % canvas.width;
      particle.style.backgroundColor = getPixelColor(pixelIndex, 0);
      body.appendChild(particle)
      setTimeout(() => body.removeChild(particle), 1000)
    }
  }, 20);
}
cursorShining();