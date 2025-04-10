// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';
import Item from './Item.js';
import FallingBlock from './FallingBlock.js';

// Minimal Definition
class GameLevelSquares {
  constructor(gameEnv) {
    console.log('GameLevelSquares initialized');
    
    // Values dependent on gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    
    // Background data
    const background_data = {
        name: 'squares-background',
        greeting: "Welcome to Squares Level!",
// No src means it will use a default color fill
    };
    
    // Player One data
    const player_one_data = {
        id: 'PlayerOne',
        greeting: "I am Player One!",
        SCALE_FACTOR: 10,
        STEP_FACTOR: 100,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: width / 4, y: height / 2 },
        velocity: { x: 0, y: 0 },
        pixels: { height: 50, width: 50 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
    };
    
    // Player Two data
    const player_two_data = {
        id: 'PlayerTwo',
        greeting: "I am Player Two!",
        SCALE_FACTOR: 10,
        STEP_FACTOR: 100,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 3 * width / 4, y: height / 2 },
        velocity: { x: 0, y: 0 },
        pixels: { height: 50, width: 50 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        keypress: { up: 73, left: 74, down: 75, right: 76 }, // I, J, K, L
    };

    // Add background and players to the game environment
    this.classes = [
      { class: Background, data: background_data },
      { class: PlayerOne, data: player_one_data },
      { class: PlayerTwo, data: player_two_data },
    ];

    // Add falling blocks at random intervals
    this.spawnFallingBlocks(gameEnv, width, height);

    // Add objects to the game environment
    this.classes.forEach(obj => {
      const instance = new obj.class(obj.data, gameEnv);
      gameEnv.gameObjects.push(instance);
      obj.instance = instance; // Store the instance for later use
    });
  }

  /**
   * Spawn falling blocks at random intervals.
   */
  spawnFallingBlocks(gameEnv, width, height) {
    setInterval(() => {
        const blockData = {
            id: `FallingBlock`,
            SCALE_FACTOR: 11,
            INIT_POSITION: { x: Math.random() * (width - 50), y: 0 }, // Random x position, start at the top
            pixels: { height: 4, width: 30 },
            fallSpeed: Math.random() * 3 + 2, // Random fall speed between 2 and 5
            maxY: height, // Ground level
            src: '/images/gamify/fallingblock.png', // Path to the sprite image
            orientation: { rows: 1, columns: 1 }, // Sprite sheet configuration
            down: { row: 0, start: 0, columns: 1 }, // Animation data
        };

        const fallingBlock = new FallingBlock(blockData, gameEnv);
        gameEnv.gameObjects.push(fallingBlock);

        console.log(`Spawned falling block at x=${blockData.INIT_POSITION.x}`);
    }, 2000); // Spawn a new block every 2 seconds
  }

  /**
   * Update the game level.
   */
  update() {
    const playerOne = this.classes.find(obj => obj.data.id === 'PlayerOne').instance;
    const playerTwo = this.classes.find(obj => obj.data.id === 'PlayerTwo').instance;

    // Check for item collisions
    this.gameEnv.gameObjects.forEach(gameObject => {
        if (gameObject instanceof Item) {
            if (gameObject.checkCollision(playerOne)) {
                gameObject.pickUp();
            } else if (gameObject.checkCollision(playerTwo)) {
                gameObject.pickUp();
            }
        }
    });

    // Remove blocks that stop bouncing
    this.gameEnv.gameObjects = this.gameEnv.gameObjects.filter(gameObject => {
      if (gameObject instanceof FallingBlock && gameObject.velocityY === 0) {
        console.log(`Removing falling block: ${gameObject.id}`);
        return false; // Remove the block
      }
      return true; // Keep other objects
    });
  }

  destroy() {
    // Remove all objects created by this level
    this.classes.forEach(obj => {
        if (obj.instance && obj.instance.destroy) {
            obj.instance.destroy(); // Call destroy method if it exists
        }
    });
  }
}

export default GameLevelSquares;