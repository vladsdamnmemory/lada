window.addEventListener("load", draw, false);
let paintCtx;

function draw() {
    console.log("Document loaded.");
    let paint = document.getElementById("paint");
    paintCtx = paint.getContext("2d");
    let isDrawing, lastPoint;

    paintCtx.fillStyle="#FF0000";

    paintCtx.lineWidth = 30;
    paintCtx.lineJoin = paintCtx.lineCap = "round";
    paintCtx.strokeStyle = "#ff4e00";


    paint.onmousedown = function (e) {
        isDrawing = true;
        lastPoint = {x: e.clientX, y: e.clientY};
    };

    paint.onmousemove = function (e) {
        if (!isDrawing) return;

        paintCtx.beginPath();

        paintCtx.globalAlpha = 1;
        paintCtx.moveTo(lastPoint.x, lastPoint.y);
        paintCtx.lineTo(e.clientX, e.clientY);
        paintCtx.stroke();

        paintCtx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
        paintCtx.lineTo(e.clientX - 4, e.clientY - 4);
        paintCtx.stroke();

        paintCtx.moveTo(lastPoint.x - 2, lastPoint.y - 2);
        paintCtx.lineTo(e.clientX - 2, e.clientY - 2);
        paintCtx.stroke();

        paintCtx.moveTo(lastPoint.x + 2, lastPoint.y + 2);
        paintCtx.lineTo(e.clientX + 2, e.clientY + 2);
        paintCtx.stroke();

        paintCtx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
        paintCtx.lineTo(e.clientX + 4, e.clientY + 4);
        paintCtx.stroke();

        lastPoint = {x: e.clientX, y: e.clientY};
    };

    paint.onmouseup = function () {
        isDrawing = false;
    };
}