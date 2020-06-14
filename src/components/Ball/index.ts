import { Platform } from '../index';
import { IBlock } from '../../interfaces';

export class Ball {
    image = new Image();
    dx = 0;
    dy = 0;
    velocity = 10;
    x = 620;
    y = 607;
    width = 40;
    height = 40;

    constructor() {
        this.image.src = require('./ball.png');
    }

    start(random: number) {
        this.dy = -this.velocity;
        this.dx = random;
    }

    move() {
        if (this.dy) {
            this.y += this.dy;
        }
        if (this.dx) {
            this.x += this.dx;
        }
    }

    collide(obstacle: IBlock | Platform) {
        const x = this.x + this.dx;
        const y = this.y + this.dy;
        if (
            x + this.width > obstacle.x &&
            x < obstacle.x + obstacle.width &&
            y + this.height > obstacle.y &&
            y < obstacle.y + obstacle.height
        ) {
            return true;
        }
        return false;
    }

    bumpBlock(block: IBlock) {
        this.dy *= -1;
    }
}
