import Background from './Background.js';
import Platform from './Platform.js';
import PlayerPlatformer from './PlayerPlatformer.js';
import Coin from './Coin.js';
import Npc from './Npc.js';
import GameControl from './GameControl.js';
import DialogueSystem from './DialogueSystem.js';

class GameLevelCollector {
    constructor(gameEnv) {
        this.gameEnv = gameEnv;
        this.dialogueSystem = new DialogueSystem();

        const platforms = [
            { x: 0, y: 540, width: 7000, height: 350, src: "/images/gamify/grass.png" },
            { x: 200, y: 420, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 400, y: 340, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 650, y: 270, width: 120, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 870, y: 290, width: 250, height: 20, src: "/images/gamify/stone.jpg" },
            { x: 1120, y: 290, width: 250, height: 20, src: "/images/gamify/stone.jpg" }
        ];
        const coins = [
            { x: 475, y: 315, radius: 35, src: "/images/gamify/key.png" }
        ];
        const sprite_src_door = "/images/gamify/door.png"; 
        const dialogueSystem = this.dialogueSystem;
        const sprite_data_door = {
        id: 'door',
        src: sprite_src_door,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: { width: 1000, height: 1800 },
        INIT_POSITION: { x: 1050, y: 200 }, // Adjusted position
        orientation: { rows: 1, columns: 1 },
        down: { row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        reaction: function () {
          dialogueSystem.showDialogue(`Finally! The portal door to the Human Realm! Hope to see you soon...`); // Using Dialogue system instead of alert
          console.log("reacted with tomb guard ishfjhersfiqwe")
        },
        interact: () => {
          if (gameEnv.gameControl) {
            // Set the next level index or swap out the levelClasses array if needed
            gameEnv.gameControl.currentLevelIndex = 1;
            gameEnv.gameControl.transitionToLevel();
          }
          console.log("going to next level")
        }
        };
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
            },
            { class: Npc, data: sprite_data_door },       
        ];
    }
    destroy() {}
}
export default GameLevelCollector;