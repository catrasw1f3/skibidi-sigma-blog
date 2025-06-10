import Background from './Background.js';
import Platform from './Platform.js';
import PlayerPlatformer from './PlayerPlatformer.js';
import Coin from './Coin.js';
import Npc from './Npc.js';

class GameLevelCollector {
    constructor(gameEnv) {
        this.gameEnv = gameEnv;
        const platforms = [
            { x: 0, y: 540, width: 7000, height: 350, src: "/images/gamify/grass.png" },
            { x: 200, y: 420, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 400, y: 340, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 650, y: 270, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 870, y: 290, width: 250, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 1120, y: 290, width: 250, height: 20, src: "/images/gamify/stone.jpg" }
        ];
        const coins = [
            { x: 1026, y: 255, radius: 35, src: "/images/gamify/key.png" }
        ];
        this.classes = [
            { class: Background, data: { src: "/images/gamify/archivehouse.png" } },
            ...platforms.map(p => ({ class: Platform, data: p })),
            ...coins.map(c => ({ class: Coin, data: c })),
            { 
                class: PlayerPlatformer, 
                data: {
                    x: 50,
                    y: 450,
                    width: 100,
                    height: 100,
                    scale: 1.5,
                    src: "/images/gamify/creature.png",
                    animations: {
                        idle:  {
                            left:  { row: 0, start: 2, frames: 2 },
                            right: { row: 0, start: 0, frames: 2 }
                        },
                        walk:  {
                            left:  { row: 0, start: 2, frames: 2 },
                            right: { row: 0, start: 0, frames: 2 }
                        },
                        jump:  {
                            left:  { row: 0, start: 2, frames: 2 },
                            right: { row: 0, start: 0, frames: 2 }
                        }
                    }
                }
            }
        ];
    }
    destroy() {}
}
export default GameLevelCollector;