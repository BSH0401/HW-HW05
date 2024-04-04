//Canvas Element 불러오기
const canvas = document.getElementById("GameScreenCanvas");
const ctx = canvas.getContext("2d");

const sunWidth = 100;
const sunHeight = 100;
const earthWidth = 50;
const earthHeight = 50;
const moonWidth = 25;
const moonHeight = 25;

const sunOrbitRadius = 200; // 태양과 지구 거리
const earthOrbitRadius = 100; // 지구와 달 거리

let sunRotationAngle = 0;
let earthRotationAngle = 0;
let moonRotationAngle = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 태양
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(sunRotationAngle);
  ctx.fillStyle = "yellow";
  ctx.fillRect(-sunWidth / 2, -sunHeight / 2, sunWidth, sunHeight);
  ctx.restore();

  // 지구
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(earthRotationAngle);
  ctx.translate(sunOrbitRadius, 0);
  ctx.rotate(moonRotationAngle);
  ctx.fillStyle = "blue";
  ctx.fillRect(-earthWidth / 2, -earthHeight / 2, earthWidth, earthHeight);
  ctx.restore();

  // 달
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(earthRotationAngle);
  ctx.translate(sunOrbitRadius, 0);
  ctx.rotate(moonRotationAngle);
  ctx.translate(earthOrbitRadius, 0);
  ctx.rotate(earthRotationAngle);
  
  ctx.rotate(moonRotationAngle);
  ctx.fillStyle = "gray";
  ctx.fillRect(-moonWidth / 2, -moonHeight / 2, moonWidth, moonHeight);
  ctx.restore();

  sunRotationAngle += Math.PI / 100;
  earthRotationAngle += Math.PI / 200;
  moonRotationAngle += Math.PI / 80;

  requestAnimationFrame(draw);
}

draw();

