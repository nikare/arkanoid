import backgroundSrc from '../images/background.png';
import platformSrc from '../images/platform.png';
import ballSrc from '../images/ball.png';
import blockSrc from '../images/block.png';

enum KEYS {
    LEFT = 37,
    RIGHT = 39,
}

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private sprites: { [key: string]: HTMLImageElement } = {
        background: new Image(),
        platform: new Image(),
        ball: new Image(),
        block: new Image(),
    };
    private platform = {
        velocity: 6,
        dx: 0,
        x: 514.5,
        y: 647,
        start(direction: KEYS) {
            if (direction === KEYS.LEFT) {
                this.dx = -this.velocity;
            } else if (direction === KEYS.RIGHT) {
                this.dx = +this.velocity;
            }
        },
        stop() {
            this.dx = 0;
        },
        move(ball: { x: number; y: number }) {
            if (this.dx) {
                this.x += this.dx;
                ball.x += this.dx;
            }
        },
    };
    private ball = {
        x: 620,
        y: 607,
    };
    private rows = 4;
    private cols = 8;
    private blocks: { x: number; y: number }[] = [];

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private init() {
        this.setEvents();
    }

    private setEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === KEYS.LEFT || event.keyCode === KEYS.RIGHT) {
                this.platform.start(event.keyCode);
            }
        });

        window.addEventListener('keyup', () => {
            this.platform.stop();
        });
    }

    private preload(callback: () => void) {
        this.sprites.background.src = backgroundSrc;
        this.sprites.platform.src = platformSrc;
        this.sprites.ball.src = ballSrc;
        this.sprites.block.src = blockSrc;

        const _sprites = Object.keys(this.sprites);
        let loaded = 0;

        _sprites.forEach((img) => {
            this.sprites[img].addEventListener('load', () => {
                if (++loaded === _sprites.length) {
                    this.canvas.classList.add('loaded');
                    callback();
                }
            });
        });
    }

    private create() {
        for (let row = this.rows; row--; ) {
            for (let col = this.cols; col--; ) {
                this.blocks.push({
                    x: 115 * col + 182,
                    y: 44 * row + 90,
                });
            }
        }
    }

    private update() {
        this.platform.move(this.ball);
    }

    private run() {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        });
    }

    private render() {
        this.ctx.drawImage(this.sprites.background, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);
        this.renderBlocks();
    }

    private renderBlocks() {
        this.blocks.forEach((block) => {
            this.ctx.drawImage(this.sprites.block, block.x, block.y);
        });
    }

    start() {
        this.init();
        this.preload(() => {
            this.run();
            this.create();
        });
    }
}
