import { Platform } from '../index';
import { IBlock } from '../../interfaces';
import { App } from '../../App';

export class Ball {
    image = new Image();
    dx = 0;
    dy = 0;
    velocity = 10;
    x = 620;
    y = 607;
    width = 40;
    height = 40;
    running = false;

    constructor(private game: App) {
        this.image.src = require('./ball.png');
        this.game = game;
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

    collideWorldBounds() {
        const x = this.x + this.dx;
        const y = this.y + this.dy;

        const ballLeft = x;
        const ballRight = ballLeft + this.width;
        const ballTop = y;
        const ballBottom = ballTop + this.height;

        const worldLeft = 0;
        const worldRight = this.game.width;
        const worldTop = 0;
        const worldBottom = this.game.height;

        if (ballLeft < worldLeft) {
            this.x = 0;
            this.dx = this.velocity;
        } else if (ballRight > worldRight) {
            this.x = worldRight - this.width;
            this.dx = -this.velocity;
        } else if (ballTop < worldTop) {
            this.y = 0;
            this.dy = this.velocity;
        } else if (ballBottom > worldBottom) {
            this.game.gameOver();
        }
    }

    bumpBlock(block: IBlock) {
        this.dy *= -1;
        block.render = false;
    }

    bumpPlatform() {
        if (this.game.platform.dx) {
            this.x += this.game.platform.dx;
        }

        if (this.dy > 0) {
            const touchX = this.x + this.width / 2;
            this.dy = -this.velocity;
            this.dx = this.velocity * this.game.platform.getTouchOffset(touchX);
        }
    }
}
