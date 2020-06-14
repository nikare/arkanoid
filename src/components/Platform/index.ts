import { Ball } from '../Ball';
import { KEYS } from '../../interfaces';

export class Platform {
    image = new Image();
    velocity = 15;
    dx = 0;
    x = 514.5;
    y = 647;
    width = 251;
    height = 41;
    ball: Ball | null;

    constructor(ball: Ball) {
        this.image.src = require('./platform.png');
        this.ball = ball;
    }

    fire(random: number) {
        if (this.ball) {
            this.ball.start(random);
            this.ball = null;
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
            if (this.ball) {
                this.ball.x += this.dx;
            }
        }
    }

    getTouchOffset(x: number): number {
        const diff = this.x + this.width - x;
        const offset = this.width - diff;
        const result = (2 * offset) / this.width;
        return result - 1;
    }
}
