import Background from './Background.js';
import Platform from './Platform.js';
import PlayerPlatformer from './PlayerPlatformer.js';
import Coin from './Coin.js';

class GameLevelCollector {
    constructor(gameEnv) {
        this.gameEnv = gameEnv;

        // Platforms
        const platforms = [
            { x: 0, y: 520, width: 1024, height: 40 },
            { x: 200, y: 420, width: 120, height: 20 },
            { x: 400, y: 340, width: 120, height: 20 },
            { x: 650, y: 270, width: 120, height: 20 }
        ];

        // Coins
        const coins = [
            { x: 260, y: 390, radius: 15 },
            { x: 460, y: 310, radius: 15 },
            { x: 710, y: 240, radius: 15 }
        ]; 

        // Level objects
        this.classes = [
            { class: Background, data: { src: "/images/gamify/archivehouse.png" } },
            ...platforms.map(p => ({ class: Platform, data: p })),
            ...coins.map(c => ({ class: Coin, data: c })),
            { 
              class: PlayerPlatformer, 
              data: {
                x: 0,
                y: 300,
                width: 100, // frame width in the sprite sheet
                height: 100, // frame height in the sprite sheet
                src: "/images/gamify/creature.png", // path to your sprite sheet
                scale: 1.5, // scale up if needed
                animations: {
                  idle:  {
                    left: { row: 0, start: 2, frames: 2 },
                    right : { row: 0, start: 0, frames: 2 }
                  },
                  walk:  {
                    left: { row: 0, start: 2, frames: 2 },
                    right: { row: 0, start: 0, frames: 2 }
                  },
                  jump:  {
                    left: { row: 0, start: 2, frames: 2 },
                    right: { row: 0, start: 0, frames: 2 }
                  },
                }
              }
            }
        ];
    }

    destroy() {
        // Clean up if needed
    }
}

export default GameLevelCollector;