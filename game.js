let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = canvas.getContext('2d');
ball.beginPath();
ball.arc(95,100,50,0,2 * Math.PI);
ball.stroke();
ball.fillStyle = 'red';
ball.fill()