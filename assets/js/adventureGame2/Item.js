import GameObject from './GameObject.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';

class Item extends GameObject {
    constructor(data, gameEnv) {
        super(gameEnv);
        this.id = data.id || `Item-${Math.random()}`;
        this.position = data.position || { x: 0, y: 0 };
        this.size = data.size || { width: 30, height: 30 };
        this.color = data.color || 'yellow'; // Default color for the item
        this.pickedUp = false; // Flag to track if the item has been picked up

        // Add default spriteData
        this.spriteData = {
            id: 'Apple',
            greeting: "You found an apple!",
            reaction: () => console.log(`${this.id} picked up!`),
        };

        // Create canvas for the item
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    }

    /**
     * Draw the item on the canvas.
     */
    draw() {
        if (!this.ctx) return;

        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the item
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.size.width, this.size.height);

        // Position the canvas
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${this.position.x}px`;
        this.canvas.style.top = `${this.gameEnv.top + this.position.y}px`;

        // Add the canvas to the game container
        if (!this.canvas.parentNode) {
            document.getElementById('gameContainer').appendChild(this.canvas);
        }
    }

    /**
     * Update the item's state.
     * For now, this is a no-op, but you can add logic here if needed.
     */
    update() {
        // Find PlayerOne and PlayerTwo in the game environment
        const playerOne = this.gameEnv.gameObjects.find(obj => obj instanceof PlayerOne);
        const playerTwo = this.gameEnv.gameObjects.find(obj => obj instanceof PlayerTwo);

        if (!playerOne || !playerTwo) {
            console.error("PlayerOne or PlayerTwo not found in gameEnv.");
            return;
        }

        // Check for item collisions with PlayerOne and PlayerTwo
        if (this.checkCollision(playerOne)) {
            this.pickUp();
        } else if (this.checkCollision(playerTwo)) {
            this.pickUp();
        }
    }

    /**
     * Check if the item collides with a player.
     * @param {Object} player - The player object to check collision with.
     */
    checkCollision(player) {
        const itemLeft = this.position.x;
        const itemRight = this.position.x + this.size.width;
        const itemTop = this.position.y;
        const itemBottom = this.position.y + this.size.height;

        const playerLeft = player.position.x;
        const playerRight = player.position.x + player.width;
        const playerTop = player.position.y;
        const playerBottom = player.position.y + player.height;

        return (
            itemRight > playerLeft &&
            itemLeft < playerRight &&
            itemBottom > playerTop &&
            itemTop < playerBottom
        );
    }

    /**
     * Handle item pickup.
     */
    pickUp() {
        this.pickedUp = true;

        // Remove the item from the DOM
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }

        // Remove the item from the gameObjects array
        const index = this.gameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            this.gameEnv.gameObjects.splice(index, 1);
        }

        console.log(`${this.id} picked up!`);
    }

    /**
     * Handle the destruction of the item.
     * This method is called when the item is removed from the game.
     */
    destroy() {
        // Remove the item's canvas from the DOM
        if (this.canvas && this.canvas.parentNode) {
            console.log(`Destroying ${this.id} and removing it from the DOM.`);
            this.canvas.parentNode.removeChild(this.canvas);
        }

        // Remove the item from the gameObjects array
        const index = this.gameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            console.log(`Removing ${this.id} from gameObjects array.`);
            this.gameEnv.gameObjects.splice(index, 1);
        }

        // Perform any additional cleanup if necessary
        console.log(`${this.id} has been destroyed.`);
    }
}

export default Item;