const character1 = document.getElementById('character1');
        const character2 = document.getElementById('character2');

        let x1 = 200;
        let y1 = 200;
        let x2 = 600;
        let y2 = 200;

        let dx1 = 1;
        let dy1 = 1;
        let dx2 = -1;
        let dy2 = -1;

        function animate() {
            x1 += dx1;
            y1 += dy1;
            x2 += dx2;
            y2 += dy2;

            if (x1 < 0 || x1 > 700) {
                dx1 = -dx1;
            }
            if (y1 < 0 || y1 > 500) {
                dy1 = -dy1;
            }
            if (x2 < 0 || x2 > 700) {
                dx2 = -dx2;
            }
            if (y2 < 0 || y2 > 500) {
                dy2 = -dy2;
            }

            character1.style.left = x1 + 'px';
            character1.style.top = y1 + 'px';
            character2.style.left = x2 + 'px';
            character2.style.top = y2 + 'px';

            requestAnimationFrame(animate);
        }
        document.addEventListener("DOMContentLoaded", function () {
            const message = document.getElementById('message');
            setTimeout(() => {
                message.style.display = 'none';
            }, 5000); // 5000 milliseconds = 5 seconds
        });
        animate();