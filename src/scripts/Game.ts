import backgroundSrc from '../images/background.png';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        const canvasElement = document.getElementById('canvas');

        if (canvasElement && canvasElement.tagName === 'CANVAS') {
            this.canvas = canvasElement as HTMLCanvasElement;
            this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        } else {
            throw 'HTMLCanvasElement элемент не найден';
        }
    }

    start() {
        const background = new Image();
        background.src = backgroundSrc;

        const render = () =>
            window.requestAnimationFrame(() => {
                this.ctx.drawImage(background, 0, 0);
            });

        background.addEventListener('load', render);
    }
}
