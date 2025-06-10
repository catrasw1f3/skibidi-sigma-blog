import Platform from './Platform.js';

class PlayerPlatformer {
    constructor(data, gameEnv) {
        this.x = data.x || 50;
        this.y = data.y || 450;
        this.width = data.width || 100;
        this.height = data.height || 100;
        this.scale = data.scale || 1;
        this.src = data.src;
        this.animations = data.animations;
        this.currentAnim = "idle";
        this.frame = 0;
        this.frameTick = 0;
        this.frameRate = 10;
        this.direction = "right";
        this.image = new window.Image();
        this.image.src = this.src;
        this.gameEnv = gameEnv;
        this.velocity = { x: 0, y: 0 };
        this.speed = 4;
        this.jumpStrength = -13;
        this.gravity = 0.7;
        this.onGround = false;
        this.pressedKeys = {};

        // Keyboard events
        window.addEventListener('keydown', e => this.handleKeyDown(e));
        window.addEventListener('keyup', e => this.handleKeyUp(e));
    }
    handleKeyDown(e) {
        this.pressedKeys[e.key] = true;
    }
    handleKeyUp(e) {
        this.pressedKeys[e.key] = false;
    }
    update() {
        // Controls
        if (this.pressedKeys['a']) this.velocity.x = -this.speed;
        else if (this.pressedKeys['d']) this.velocity.x = this.speed;
        else this.velocity.x = 0;

        if (this.pressedKeys['w'] && this.onGround) {
            this.velocity.y = this.jumpStrength;
            this.onGround = false;
        }

        // Gravity
        this.velocity.y += this.gravity;

        // Move
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Platform collision
        this.onGround = false;
        for (const obj of this.gameEnv.gameObjects) {
            if (obj instanceof window.Platform) {
                if (
                    this.x + this.width > obj.x &&
                    this.x < obj.x + obj.width &&
                    this.y + this.height > obj.y &&
                    this.y + this.height < obj.y + obj.height &&
                    this.velocity.y >= 0
                ) {
                    this.y = obj.y - this.height;
                    this.velocity.y = 0;
                    this.onGround = true;
                }
            }
        }

        // Animation state logic
        if (this.pressedKeys['w'] && !this.onGround) this.currentAnim = "jump";
        else if (this.pressedKeys['a'] || this.pressedKeys['d']) this.currentAnim = "walk";
        else this.currentAnim = "idle";
        if (this.pressedKeys['a']) this.direction = "left";
        if (this.pressedKeys['d']) this.direction = "right";

        // Animation frame update
        const anim = this.animations[this.currentAnim];
        if (this.frameTick++ > this.frameRate) {
            this.frame = (this.frame + 1) % anim.frames;
            this.frameTick = 0;
        }

        // Draw sprite
        const ctx = this.gameEnv.ctx;
        const sx = (anim.start + this.frame) * this.width;
        const sy = anim.row * this.height;
        ctx.save();
        if (this.direction === "left") {
            ctx.translate(this.x + this.width * this.scale, this.y);
            ctx.scale(-this.scale, this.scale);
            ctx.drawImage(this.image, sx, sy, this.width, this.height, 0, 0, this.width, this.height);
        } else {
            ctx.translate(this.x, this.y);
            ctx.scale(this.scale, this.scale);
            ctx.drawImage(this.image, sx, sy, this.width, this.height, 0, 0, this.width, this.height);
        }
        ctx.restore();
    }
    resize() {}
    destroy() {}
}
window.PlayerPlatformer = PlayerPlatformer; // For instanceof checks in Coin.js
window.Platform = Platform; // For instanceof checks in PlayerPlatformer.js
export default PlayerPlatformer;