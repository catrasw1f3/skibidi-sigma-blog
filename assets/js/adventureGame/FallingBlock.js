import Npc from './Npc.js';

class FallingBlock extends Npc {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.fallSpeed = data?.fallSpeed || 2; // Initial fall speed
        this.maxY = data?.maxY || gameEnv.innerHeight; // Ground level
        this.height = this.spriteData.pixels.height * this.spriteData.SCALE_FACTOR;

        this.velocityY = this.fallSpeed; // Vertical velocity
        this.gravity = 0.5; // Gravity acceleration
        this.bounceFactor = 0.5; // Reduce velocity to half on bounce
    }

    update() {
        // Apply gravity to velocity
        this.velocityY += this.gravity;

        // Update position
        this.position.y += this.velocityY;

        // Check if the block hits the ground
        if (this.position.y + this.height >= this.maxY) {
            this.position.y = this.maxY - this.height; // Set block on the ground
            this.velocityY = -this.velocityY * this.bounceFactor; // Reverse and reduce velocity

            // Stop bouncing if velocity is too small
            if (Math.abs(this.velocityY) < 1) {
                this.velocityY = 0; // Stop movement
            }
        }

        // Draw the block
        this.draw();
    }
}

export default FallingBlock;