import { Ball } from '../Ball';
import { KEYS } from '../../interfaces';

export class Platform {
    image = new Image();
    velocity = 15;
    dx = 0;
    x = 514.5;
    y = 647;
    width = 0;
    height = 0;
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
}
