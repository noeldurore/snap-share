// File: sophisticated_code.js

// This code generates a fractal tree using HTML5 Canvas and JavaScript

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const branchLength = 100;
const branchAngle = 30;
const branchShrinkage = 0.7;
const maxDepth = 10;
const colorPalette = ["#FF5733", "#FFC300", "#C70039", "#900C3F", "#581845"];

function drawBranch(x, y, length, angle, depth) {
  if (depth === 0) return;

  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = colorPalette[depth % colorPalette.length];
  ctx.lineWidth = Math.sqrt(depth);
  ctx.stroke();

  drawBranch(endX, endY, length * branchShrinkage, angle - branchAngle * Math.PI / 180, depth - 1);
  drawBranch(endX, endY, length * branchShrinkage, angle + branchAngle * Math.PI / 180, depth - 1);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const treeDepth = Math.floor(Math.random() * (maxDepth - 2) + 3);  
  const startX = canvas.width / 2;
  const startY = canvas.height - 50;
  
  drawBranch(startX, startY, branchLength, -Math.PI / 2, treeDepth);
}

animate();

// Event listener to resize the canvas when the window size changes
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  animate();
});
