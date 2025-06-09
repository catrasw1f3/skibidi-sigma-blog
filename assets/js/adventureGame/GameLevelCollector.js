// Import your platformer classes
import Background from './Background.js';
import Platform from './Platform.js';
import PlayerHills from './PlayerHills.js';
//import Coin from './Coin.js';
import FinishLine from './FinishLine.js';

class GameLevelCollector {
    constructor(gameEnv) {
        // You can store gameEnv if you want to use it for timers, etc.
        this.gameEnv = gameEnv;

        // Define assets for this level
        this.assets = {
            background: { src: "/images/gamify/archivehouse.png" },
            platforms: {
                grass: { src: "/images/gamify/grass.png" },
                stone: { src: "/images/gamify/stone.png" },
            },
            players: {
                hero: {
                    src: "/images/gamify/creature.png",
                    width: 800,
                    height: 100,
                    scaleSize: 80,
                    speedRatio: 0.7,
                    idle: {
                        left: { row: 0, start: 2, frames: 2 },
                        right: { row: 0, start: 0, frames: 2 },
                    },
                    walk: {
                        left: { row: 0, start: 2, frames: 2 },
                        right: { row: 0, start: 0, frames: 2 },
                    },
                    jump: {
                        left: { row: 0, start: 2, frames: 2 },
                        right: { row: 0, start: 0, frames: 2 },
                    },
                    hitbox: { widthPercentage: 0.3, heightPercentage: 0.8 }
                },
            },
            finish: {
                flag: { src: "/images/gamify/flag.png", width: 80, height: 120 }
            }
        };

        // Define the objects for this level
        this.classes = [
            { class: Background, data: this.assets.background },
            { class: Platform, data: this.assets.platforms.grass, xPercentage: 0, yPercentage: 0.95, widthPercentage: 1.0 },
            { class: Platform, data: this.assets.platforms.stone, xPercentage: 0.2, yPercentage: 0.8, widthPercentage: 0.2 },
            { class: Platform, data: this.assets.platforms.stone, xPercentage: 0.5, yPercentage: 0.7, widthPercentage: 0.2 },
            { class: Platform, data: this.assets.platforms.stone, xPercentage: 0.75, yPercentage: 0.6, widthPercentage: 0.15 },
            { class: PlayerHills, data: this.assets.players.hero, xPercentage: 0.05, yPercentage: 0.9 },
            { class: FinishLine, data: this.assets.finish.flag, xPercentage: 0.95, yPercentage: 0.85 }
        ];
    }

    // Optional: add custom methods, timers, or logic for this level
    destroy() {
        // Clean up timers or custom logic if needed
    }
}

export default GameLevelCollector;