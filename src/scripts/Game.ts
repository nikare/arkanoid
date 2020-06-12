import backgroundSrc from '../images/background.png';
import platformSrc from '../images/platform.png';
import ballSrc from '../images/ball.png';

export class Game {
    private ctx: CanvasRenderingContext2D | null = null;
    private sprites = {
        background: new Image(),
        platform: new Image(),
        ball: new Image(),
    };

    private init() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private preload(callback: () => void) {
        this.sprites.background.src = backgroundSrc;
        this.sprites.platform.src = platformSrc;
        this.sprites.ball.src = ballSrc;

        const sprites: { [key: string]: HTMLImageElement } = this.sprites;
        const imgNames = Object.keys(sprites);

        imgNames.forEach((imgName, index) => {
            sprites[imgName].addEventListener('load', () => {
                if (index === imgNames.length - 1) {
                    callback();
                }
            });
        });
    }

    private run() {
        window.requestAnimationFrame(() => {
            this.render();
        });
    }

    private render() {
        if (!this.ctx) return;
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.platform, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0);
    }

    start() {
        this.init();
        this.preload(() => this.run());
    }
}
