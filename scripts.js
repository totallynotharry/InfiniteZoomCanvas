let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let scale = 1; // Initial scale
let scaleFactor = 1.1; // Zoom scale factor

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw content here (mock example)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#000000';
  ctx.font = '30px Arial';
  ctx.fillText('Infinite Zoom Drawing App', 50, 50);
}

// Initial draw
draw();

// Zoom functionality
canvas.addEventListener('wheel', function(event) {
  event.preventDefault();

  let mouseX = event.clientX - canvas.offsetLeft;
  let mouseY = event.clientY - canvas.offsetTop;

  let delta = event.deltaY / 100; // Adjust scroll speed as needed

  let zoomX = mouseX / scale;
  let zoomY = mouseY / scale;

  scale *= Math.pow(scaleFactor, delta);
  
  let zoomXNew = mouseX / scale;
  let zoomYNew = mouseY / scale;

  // Adjust canvas position after zoom
  ctx.translate(zoomX - zoomXNew, zoomY - zoomYNew);

  // Redraw canvas after zoom
  draw();
});
