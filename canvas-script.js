window.onload = function () {
  //definitions
  const canvas = document.getElementById("polygons-canvas");
  canvas.width = 900;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  let edges = 8;
  let centerX = 450;
  let centerY = 300;
  let radius = 100;
  let startAngle = 180;
  let angle = (2 * Math.PI) / edges;

  context.beginPath();
  context.lineJoin = "round";
  context.lineWidth = 10;
  context.contextStyle = "darkgrey";

  let beginX = centerX + radius * Math.cos(startAngle);
  let beginY = centerY - radius * Math.sin(startAngle);
  context.moveTo(beginX, beginY);

  for (let i = 0; i < edges; i++) {
    let currentAngle = startAngle + i * angle;
    let currentX = centerX + radius * Math.cos(currentAngle);
    let currentY = centerY - radius * Math.sin(currentAngle);
    context.lineTo(currentX, currentY);
  }
  context.closePath();
  context.stroke();
};
