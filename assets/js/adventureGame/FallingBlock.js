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

    /**
     * Handle block pick-up by a player.
     * @param {Player} player - The player who picked up the block.
     */
    pickUp(player) {
        console.log(`${player.id} picked up block: ${this.id}`);

        // Remove the block from the DOM
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }

        // Remove the block from the gameObjects array
        const index = this.gameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            this.gameEnv.gameObjects.splice(index, 1);
        }

        // Trigger any additional effects (e.g., increase score)
        if (player.addScore) {
            player.addScore(10); // Example: Add 10 points to the player's score
        }
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