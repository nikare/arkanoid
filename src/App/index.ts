import { Platform, Ball } from '../components';
import { KEYS, IBlock } from '../interfaces';
import './app.scss';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private background = new Image();
    private imageBlock = new Image();
    private ball = new Ball();
    private platform = new Platform(this.ball);
    private width = 1280;
    private height = 720;
    private rows = 4;
    private cols = 8;
    private blocks: IBlock[] = [];
    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.background.src = require('./images/background.jpg');
        this.imageBlock.src = require('./images/block.png');
    }

    private setEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === KEYS.SPACE) {
                const random = this.random(-this.ball.velocity, +this.ball.velocity);
                this.platform.fire(random);
            } else if (event.keyCode === KEYS.LEFT || event.keyCode === KEYS.RIGHT) {
                this.platform.start(event.keyCode);
            }
        });
        window.addEventListener('keyup', () => {
            this.platform.stop();
        });
    }

    private preload(callback: () => void) {
        const images = [this.background, this.imageBlock, this.platform.image, this.ball.image];

        let loaded = 0;
        images.forEach((img) => {
            img.addEventListener('load', () => {
                if (++loaded === images.length) {
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
                    width: 111,
                    height: 39,
                });
            }
        }
    }

    private update() {
        this.platform.move();
        this.ball.move();
        this.collideBlocks();
        this.collidePlatform();
    }

    collideBlocks() {
        this.blocks.forEach((block) => {
            if (this.ball.collide(block)) {
                this.ball.bumpBlock(block);
            }
        });
    }

    collidePlatform() {
        if (this.ball.collide(this.platform)) {
            this.ball.bumpPlatform(this.platform);
        }
    }

    private run() {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        });
    }

    private render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
        this.ctx.drawImage(this.platform.image, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.ball.image, this.ball.x, this.ball.y);
        this.renderBlocks();
    }

    private renderBlocks() {
        this.blocks.forEach((block) => {
            this.ctx.drawImage(this.imageBlock, block.x, block.y);
        });
    }

    private random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    start() {
        this.setEvents();
        this.preload(() => {
            this.run();
            this.create();
        });
    }
}
