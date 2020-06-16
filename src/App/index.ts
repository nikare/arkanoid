import { Platform, Ball } from '../components';
import { KEYS, IBlock } from '../interfaces';
import './app.scss';

export class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    platform = new Platform(this);
    ball = new Ball(this);
    background = new Image();
    imageBlock = new Image();
    bumpSound = new Audio();
    width = 1280;
    height = 720;
    rows = 4;
    cols = 8;
    score = 0;
    blocks: IBlock[] = [];

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.background.src = require('./images/background.jpg');
        this.imageBlock.src = require('./images/block.png');
        this.bumpSound.src = require('./audio/bump.mp3');
    }

    setEvents() {
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

    preload(callback: () => void) {
        const images = [this.background, this.imageBlock, this.platform.image, this.ball.image];
        const sounds = [this.bumpSound];
        const resources = [...images, ...sounds];
        let loaded = 0;

        resources.forEach((resource) => {
            const eventType = resource.tagName === 'AUDIO' ? 'canplaythrough' : 'load';
            resource.addEventListener(eventType, () => {
                ++loaded;
                if (loaded === resources.length) {
                    this.canvas.classList.add('loaded');
                    callback();
                }
            });
        });
    }

    createBlocks() {
        this.blocks = [];
        for (let row = this.rows; row--; ) {
            for (let col = this.cols; col--; ) {
                this.blocks.push({
                    x: 115 * col + 182,
                    y: 44 * row + 90,
                    width: 111,
                    height: 39,
                    render: true,
                });
            }
        }
    }

    update() {
        this.collideBlocks();
        this.collidePlatform();
        this.ball.collideWorldBounds();
        this.platform.collideWorldBounds();
        this.platform.move();
        this.ball.move();
    }

    collideBlocks() {
        this.blocks.forEach((block) => {
            if (block.render && this.ball.collide(block)) {
                this.ball.bumpBlock(block);
                this.score += 10;
                this.bumpSound.play();

                const renderedBlocks = this.blocks.filter(({ render }) => render);
                if (!renderedBlocks.length) {
                    this.levelUp();
                }
            }
        });
    }

    collidePlatform() {
        if (this.ball.collide(this.platform)) {
            this.ball.bumpPlatform();
            this.bumpSound.play();
        }
    }

    run() {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
        this.ctx.drawImage(this.platform.image, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.ball.image, this.ball.x, this.ball.y);
        this.renderBlocks();
    }

    renderBlocks() {
        this.blocks.forEach((block) => {
            if (block.render) {
                this.ctx.drawImage(this.imageBlock, block.x, block.y);
            }
        });
    }

    random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    gameOver() {
        alert('Вы проиграли!');
        this.restart();
    }

    levelUp() {
        alert('Вы победили!');
        this.restart();
    }

    restart() {
        this.createBlocks();
        this.renderBlocks();
        this.ball = new Ball(this);
        this.platform = new Platform(this);
    }

    start() {
        this.setEvents();
        this.preload(() => {
            this.run();
            this.createBlocks();
        });
    }
}
