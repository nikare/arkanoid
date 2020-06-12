import backgroundSrc from '../images/background.png';
import platformSrc from '../images/platform.png';
import ballSrc from '../images/ball.png';

export class Game {
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private sprites: { [key: string]: HTMLImageElement } = {
        background: new Image(),
        platform: new Image(),
        ball: new Image(),
    };
    private platform = {
        x: 514.5,
        y: 647,
    };
    private ball = {
        x: 620,
        y: 607,
    };

    private init() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private preload(callback: () => void) {
        this.sprites.background.src = backgroundSrc;
        this.sprites.platform.src = platformSrc;
        this.sprites.ball.src = ballSrc;

        const _sprites = Object.keys(this.sprites);
        let loaded = 0;

        _sprites.forEach((img) => {
            this.sprites[img].addEventListener('load', () => {
                ++loaded;

                if (loaded === _sprites.length) {
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
        if (!this.canvas || !this.ctx) return;
        this.ctx.drawImage(this.sprites.background, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);
    }

    start() {
        this.init();
        this.preload(() => this.run());
    }
}
