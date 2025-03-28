import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Projectile from './Projectile.js';

class GameLevelStarWars {
  constructor(gameEnv) {
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_bg = "/images/gamify/tomb.png"; // be sure to include the path
    const image__data_bg = {
        id: 'Background',
        src: image_src_bg,
        pixels: {height: 570, width: 1025}
    };

    // Player data for Tourist
    const sprite_src_tourist = "/images/gamify/tourist.png"; // be sure to include the path
    const TOURIST_SCALE_FACTOR = 5;
    const sprite_data_tourist = {
        id: 'Tourist',
        greeting: "I'm you! And I'm definitely not in the right era...",
        src: sprite_src_tourist,
        SCALE_FACTOR: TOURIST_SCALE_FACTOR,
        STEP_FACTOR: 250,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/TOURIST_SCALE_FACTOR) }, 
        pixels: {height: 320, width: 120},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC Data for Turret Anti-Air
    const sprite_src_turret = "/images/gamify/turret_aa.png"; // be sure to include the path
    const TURRET_SCALE_FACTOR = 3;
    const sprite_data_turret = {
      id: 'Turret-Anti-Air',
      greeting: "I am the Anti-Air Turret. I am here to take down the snowspeeder!",
      src: sprite_src_turret,
      SCALE_FACTOR: TURRET_SCALE_FACTOR,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 562, height: 444},
      INIT_POSITION: { x: width - (height/TURRET_SCALE_FACTOR), y: height - .82*(height/TURRET_SCALE_FACTOR) }, 
      orientation: {rows: 1, columns: 1 },
      down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    };

    // Laser data, temporary sprite for testing
    const sprite_src_laser = "/images/gamify/laser_bolt.png"; // be sure to include the path
    const sprite_data_laser1 = {
        id: 'AT-AT-Laser-1',
        greeting: "Simulate explosive action!",
        // define image/sprite data
        src: sprite_src_laser,
        pixels: {height: 500, width: 500}, // height and width of the image
        orientation: {rows: 1, columns: 1 }, // normalized rows and columns in the sprite
        // define size, position, adjustments for hitbox
        SCALE_FACTOR: 30,  // Start small
        INIT_POSITION_RATIO: { x: 1 / 1.78, y: 1 / 3.3 }, // Ratios for initial position
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // define animation properties
        TRANSLATE_SCALE_FACTOR: 10, // Grow to this size at end translation
        TRANSLATE_POSITION_RATIO: { x: 1 / 2.78, y: 1 / 2.9 }, // Ratios for translate position
        TRANSLATE_SIMULATION: {miliseconds: 500 }, // 1 second
        down: {row: 0, start: 0, columns: 1, spin: 4},  // down is default
     };

     // Laser data, temporary sprite for testing
    const sprite_data_laser2 = {
        id: 'AT-AT-Laser-2',
        greeting: "Simulate explosive action!",
        // define image/sprite data
        src: sprite_src_laser,
        pixels: {height: 500, width: 500}, // height and width of the image
        orientation: {rows: 1, columns: 1 }, // normalized rows and columns in the sprite
        // define size, position, adjustments for hitbox
        SCALE_FACTOR: 60,  // Start small 
        INIT_POSITION_RATIO: { x: 1 / 8, y: 1 / 1.95 }, // Ratios for initial position
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // define animation properties
        TRANSLATE_SCALE_FACTOR: 20, // Grow to this size at end translation
        TRANSLATE_POSITION_RATIO: { x: 1 / 20, y: 1 / 1.9 }, // Ratios for translate position
        TRANSLATE_SIMULATION: {miliseconds: 500 }, // 1 second
        down: {row: 0, start: 0, columns: 1, spin: 4},  // down is default
     };

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image__data_bg },
      { class: Player, data: sprite_data_tourist },
      { class: Npc, data: sprite_data_turret },
      { class: Projectile, data: sprite_data_laser1 },
      { class: Projectile, data: sprite_data_laser2 },
    ];
  }
}

export default GameLevelStarWars;