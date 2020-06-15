import { Ball } from '../Ball';
import { KEYS } from '../../interfaces';
import { App } from '../../App';

export class Platform {
    image = new Image();
    velocity = 15;
    dx = 0;
    x = 514.5;
    y = 647;
    width = 251;
    height = 41;

    constructor(private game: App) {
        this.image.src = require('./platform.png');
        this.game = game;
    }

    fire(random: number) {
        if (!this.game.ball.running) {
            this.game.ball.start(random);
            this.game.ball.running = true;
        }
    }

    start(direction: KEYS) {
        if (direction === KEYS.LEFT) {
            this.dx = -this.velocity;
        } else if (direction === KEYS.RIGHT) {
            this.dx = +this.velocity;
        }
    }

    stop() {
        this.dx = 0;
    }

    move() {
        if (this.dx) {
            this.x += this.dx;
            if (!this.game.ball.running) {
                this.game.ball.x += this.dx;
            }
        }
    }

    getTouchOffset(x: number): number {
        const diff = this.x + this.width - x;
        const offset = this.width - diff;
        const result = (2 * offset) / this.width;
        return result - 1;
    }

    collideWorldBounds() {
        const x = this.x + this.dx;

        const platformLeft = x;
        const platformRight = platformLeft + this.width;

        const worldLeft = 0;
        const worldRight = this.game.width;

        if (platformLeft < worldLeft || platformRight > worldRight) {
            this.dx = 0;
        }
    }
}
