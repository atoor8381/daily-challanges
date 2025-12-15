const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
const plotButton = document.getElementById('plotButton');
const functionInput = document.getElementById('functionInput');

const width = canvas.width;
const height = canvas.height;

function drawAxes() {
    ctx.clearRect(0, 0, width, height);
    
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);

    ctx.stroke();
}

function plotFunction(func) {
    drawAxes();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    for (let px = 0; px < width; px++) {
        const x = (px - width / 2) / 20; 
        let y;
        try {
            y = eval(func); 
        } catch (e) {
            alert("Invalid function!");
            return;
        }
        const py = height/2 - y * 20; 
        if (px === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
}
plotButton.addEventListener('click', () => {
    const func = functionInput.value;
    if(func.trim() === "") {
        alert("Please enter a function!");
        return;
    }
    plotFunction(func);
});
