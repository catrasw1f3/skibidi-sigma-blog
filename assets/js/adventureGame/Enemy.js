import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
        this.speed = data?.speed || 0; // Initialize speed
        this.x = data?.INIT_POSITION?.x || 0; // Initialize x position
        this.y = data?.INIT_POSITION?.y || 0; // Initialize y position
        this.collisionData = { hit: false, touchPoints: {} }; // Initialize collision data
    }

    /**
     * Update method to handle collision detection and drawing.
     */
    update() {
        this.draw(); // Draw the enemy

        // Check for collisions with the player
        if (!this.playerDestroyed && this.collisionChecks()) {
            this.handleCollisionEvent();
        }
    }

    /**
     * Checks if the Enemy collides with the Player.
     * @returns {boolean} True if a collision is detected, otherwise false.
     */
    collisionChecks() {
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                this.isCollision(gameObj); // Ensure this method is implemented in Character
                if (this.collisionData.hit) {
                    console.log("Collision detected!");
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Handles what happens when the player collides with the enemy.
     */
    handleCollisionEvent() {
        console.log("Collision data:", this.collisionData);

        if (this.collisionData.touchPoints.other?.id === "player") {
            if (this.collisionData.touchPoints.other.left && this.immune === 0) {
                console.log("Collision detected on the left side. Reversing speed and moving back.");
                this.speed = -this.speed; // Reverse speed
                this.x += 10; // Move enemy back slightly
                console.log("Updated enemy position:", this.x);
            }
        }

        // Restart the level after handling the collision
        if (this.gameEnv?.gameControl?.restartLevel) {
            this.gameEnv.gameControl.restartLevel();
        } else {
            console.error("gameControl or restartLevel is not defined.");
        }
    }

    /**
     * Abstract method to check proximity of the NPC with the player.
     * Must be implemented by subclasses.
     */
    checkProximityToPlayer() {
        throw new Error("Method 'checkProximityToPlayer()' must be implemented.");
    }

    /**
     * Creates an explosion effect when the Enemy is destroyed.
     * @param {number} x - The x-coordinate of the explosion.
     * @param {number} y - The y-coordinate of the explosion.
     */
    explode(x, y) {
        const shards = 20; // Number of shards
        if (!this.gameEnv?.canvas?.parentElement) {
            console.error("Canvas or parent element is not defined.");
            return;
        }

        for (let i = 0; i < shards; i++) {
            const shard = document.createElement('div');
            shard.style.position = 'absolute';
            shard.style.width = '5px';
            shard.style.height = '5px';
            shard.style.backgroundColor = 'brown'; // Color of the shards
            shard.style.left = `${x}px`;
            shard.style.top = `${y}px`;
            this.gameEnv.canvas.parentElement.appendChild(shard); // Add shard to the canvas

            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 5 + 2;
            const shardX = Math.cos(angle) * speed;
            const shardY = Math.sin(angle) * speed;
            shard.animate(
                [
                    { transform: 'translate(0, 0)', opacity: 1 },
                    { transform: `translate(${shardX * 20}px, ${shardY * 20}px)`, opacity: 0 },
                ],
                {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards',
                }
            );

            setTimeout(() => {
                shard.remove(); // Remove shard after animation
            }, 1000);
        }
    }
}

export default Enemy;