const canvas = document.getElementById('.moving-text');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let particleArray = [];
let adjustX = 5;
let adjustY = 10;
const particleAttributes = {
	size : 1,
	color: 'black',
	kerning: 5,
	returnLag: 20,
}

const mouse = {
	x: null,
	y: null,
	radius: 100
}

ctx.font = '30px Veranda';
ctx.fillText('Tomato', 0, 40 );
const textCoordinates = ctx.getImageData(0, 0, 150, 50)


window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
)
window.addEventListener("touchmove", 
    function (event) {
        let touch = event.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
    }
)

class Particle {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.size = particleAttributes.size;
		this.baseX = this.x;
		this.baseY = this.y;
		this.density = (Math.random() * 30) + 1;
	}
	draw() {
		ctx.fillStyle = particleAttributes.color
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.closePath();
		ctx.fill();
	}
	update() {
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y; 
		let distance =  Math.sqrt(dx * dx + dy * dy);
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let maxDistance = mouse.radius
		let force = (maxDistance - distance) / maxDistance
		let directionX = forceDirectionX * force * this.density;
		let directionY = forceDirectionY * force * this.density;

		if (distance < mouse.radius) {
			this.x -= directionX; 
			this.y -= directionY;
			
		} else {
			if (this.x != this.baseX) {
				let dx = this.x - this.baseX;
				this.x -= dx / particleAttributes.returnLag
			}
			if (this.y != this.baseY) {
				let dy = this.y - this.baseY;
				this.y -= dy / particleAttributes.returnLag
			}
		}
	}
}

function init() {
	particleArray = [];
	for(let y = 0; y < textCoordinates.height; y++) {
		for(let x = 0; x < textCoordinates.width; x++) {
			if (textCoordinates.data[(y * 4 * textCoordinates.width) +(x*4) + 3] > 128) {
				let postionX = x + adjustX;
				let positionY = y  + adjustY;
				particleArray.push(new Particle(postionX * particleAttributes.kerning, positionY * particleAttributes.kerning))
				
			}
		}
	}
}

init();

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < particleArray.length; i++) {
		particleArray[i].draw();
		particleArray[i].update();
	}
	requestAnimationFrame(animate); 
}

animate(); 