import Character from './Character.js';
import Player from './Player.js';

class Enemy extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.playerDestroyed = false; // Tracks if the player has been "killed"
    }

    // Overrides the update method to handle collision detection.
    update() {
        // Start by drawing the object
        this.draw();

        // Check if the enemy collides with the player
        if (!this.playerDestroyed && this.collisionChecks()) {
            this.handleCollisionEvent();
        }
    }

    // Checks if the Enemy collides with the Player.
    // Returns true if a collision is detected, otherwise false.
    collisionChecks() {
        for (const gameObj of this.gameEnv.gameObjects) {
            if (gameObj instanceof Player) {
                this.isCollision(gameObj);
                if (this.collisionData.hit) {
                    return true;
                }
            }
        }
        return false;
    }

    // Handles what happens when the player collides with the enemy.
    handleCollisionEvent() {
        console.log("Player collided with the Enemy. Player is dead.");
        this.playerDestroyed = true; // Mark the player as "dead"
        this.gameEnv.gameControl.restartLevel(); // Restart the level
    }


    /**
     * check Proximity of the npc with player.
     * This method must be implemented by subclasses.
     * @abstract
     */
    checkProximityToPlayer() {
        // To be implemented by subclasses
        throw new Error("Method 'jump()' must be implemented.");
    }

    /**
    * Create an explosion effect when the Enemy is destroyed.
    * @param {number} x - The x-coordinate of the explosion.
    * @param {number} y - The y-coordinate of the explosion.
    */
    explode(x,y) {
        const shards = 20; // Number of shards
        for (let i = 0; i < shards; i++) {
            const shard = document.createElement('div');
            shard.style.position = 'absolute';
            shard.style.width = '5px';
            shard.style.height = '5px';
            shard.style.backgroundColor = 'brown'; // Color of the shards
            shard.style.left =  `${x}px`;
            shard.style.top = `${this.gameEnv.top+y}px`;
            this.canvas.parentElement.appendChild(shard); // Add shard to the canvas

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
        //this.canvas.style.opacity = 0; // Make the Bat disappear
    }
    
}

export default Enemy;
