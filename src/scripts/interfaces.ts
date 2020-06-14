export enum KEYS {
    LEFT = 37,
    RIGHT = 39,
    SPACE = 32,
}

export interface IBlock {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface IBall {
    dx: number;
    dy: number;
    velocity: number;
    x: number;
    y: number;
    width: number;
    height: number;
    motionless: boolean;
    start: (random: number) => void;
    move: () => void;
    collide: (obstacle: IBlock) => boolean;
    bumpBlock: (block: IBlock) => void;
}

export interface IPlatform {
    velocity: number;
    dx: number;
    x: number;
    y: number;
    width: number;
    height: number;
    ball: IBall;
    fire: (random: number) => void;
    start: (direction: KEYS) => void;
    stop: () => void;
    move: () => void;
}
