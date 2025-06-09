import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Cat from './Cat.js';
import Enemy from './Enemy.js';
import DialogueSystem from './DialogueSystem.js';
import GameLevelTree from './GameLevelTree.js';
import GameControl from './GameControl.js';

class GameLevelTown {
  constructor(gameEnv) {
    this.gameEnv = gameEnv;
    this.timers = [];
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    this.dialogueSystem = new DialogueSystem();

    // Background data
    const image_src_bg = "/images/gamify/town.jpeg"; // Default background
    //const image_src_bg2 = "/images/gamify/tomb2.png"; // Alternate background
    const image_data_bg = {
        id: 'Background',
        src: image_src_bg,
        pixels: { height: 570, width: 1025 }
    };

    // Show a dialogue box after 4 seconds of gameplay
    this.timers.push(setTimeout(() => {
      console.log("Dialogue box should appear now.");
      this.dialogueSystem.showDialogue(`King: "This part's kinda boring, huh? Let's keep going. Follow me!"`);

      // After 0.5 more seconds, start moving the King (Rat Guide) to the right
      this.timers.push(setTimeout(() => {
        // Find the Rat Guide object in gameEnv.gameObjects
        const kingObj = this.gameEnv.gameObjects.find(obj => obj.data && obj.data.id === 'Rat Guide');
        if (!kingObj) return;

        // Animate King from left to right
        const targetX = this.gameEnv.innerWidth - kingObj.width - 20; // 20px from right edge
        const moveSpeed = 5; // pixels per frame
        function moveKing() {
          if (kingObj.position.x < targetX) {
            kingObj.position.x += moveSpeed;
            if (kingObj.position.x > targetX) kingObj.position.x = targetX;
            requestAnimationFrame(moveKing);
          }
        }
        moveKing();
      }, 500)); 
    }, 4000)); 

    // Player data for Tourist
    const sprite_src_player = "/images/gamify/creature.png"; // be sure to include the path
    const PLAYER_SCALE_FACTOR = 4;
    const sprite_data_player = {
        id: 'Player',
        greeting: "I'm you! And I'm definitely not in the right era...",
        src: sprite_src_player,
        SCALE_FACTOR: PLAYER_SCALE_FACTOR,
        STEP_FACTOR: 250,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: width - (width * 31 / 32), y: height - (height/PLAYER_SCALE_FACTOR) }, 
        pixels: {height: 100, width: 800},
        orientation: {rows: 1, columns: 8 },
        down: {row: 0, start: 4, columns: 2 },
        downRight: {row: 0, start: 0, columns: 2, rotate: Math.PI/16 },
        downLeft: {row: 0, start: 2, columns: 2, rotate: -Math.PI/16 },
        left: {row: 0, start: 2, columns: 2 },
        right: {row: 0, start: 0, columns: 2 },
        up: {row: 0, start: 6, columns: 2 },
        upLeft: {row: 0, start: 2, columns: 2, rotate: Math.PI/16 },
        upRight: {row: 0, start: 0, columns: 2, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    

    // Rat Guide data
    const sprite_src_guide = "/images/gamify/king.png"; // be sure to include the path
    const sprite_greet_guide_intro = "";
    const sprite_greet_guide_info = ""; // Truncated for brevity
    const dialogueSystem = this.dialogueSystem;
    const sprite_data_guide = {
      id: 'Rat Guide',
      greeting_intro: sprite_greet_guide_intro,
      greeting_info: sprite_greet_guide_info,
      src: sprite_src_guide,
      SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: { width: 1200, height: 1580 },
      INIT_POSITION: { x: width - (width * 3 / 4), y: height - 0.5 * (height / PLAYER_SCALE_FACTOR) }, // Adjusted position
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      dialogues: [],
      reaction: function () {
      },
      interact: () => {
        if (gameEnv.gameControl) {
          // Set the next level index or swap out the levelClasses array if needed
          gameEnv.gameControl.currentLevelIndex = 2;
          gameEnv.gameControl.transitionToLevel();
        }
        console.log("going to tree level")
      }
    };

    // Time machine data
    /** const sprite_src_timemachine = "/images/gamify/timemachine.png"; // be sure to include the path
    const sprite_greet_timemachine = "You've made it to the time machine! Will you be able to get back home?";
    const sprite_data_timemachine = {
      id: 'Rat Guide',
      greeting: sprite_greet_timemachine,
      src: sprite_src_timemachine,
      SCALE_FACTOR: 3,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 97, height: 143},
      INIT_POSITION: { x: (width / 2) - 75, y: (height / 2) - 240 }, // Adjusted position
      orientation: {rows: 1, columns: 1 },
      down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.05, heightPercentage: 0.05 },
      reaction: function() {
        //alert(sprite_greet_timemachine)
      }
    }; */

    
    //console.log("Cat data:", sprite_data_cat);
    //console.log("Cat initial position:", sprite_data_cat.INIT_POSITION);
    

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image_data_bg },
      { class: Player, data: sprite_data_player },
      { class: Npc, data: sprite_data_guide },
      //{ class: Npc, data: sprite_data_timemachine },
      //{ class: Enemy, data: sprite_data_cat },
    ];
  }
  destroy() {
      // Clear all timers/intervals you created in this level
      if (this.timers) {
        this.timers.forEach(id => clearTimeout(id));
        this.timers = [];
      }
      // If you use setInterval, clear those as well
      if (this.intervals) {
        this.intervals.forEach(id => clearInterval(id));
        this.intervals = [];
    }
    // Destroy all game objects
    if (this.gameEnv && Array.isArray(this.gameEnv.gameObjects)) {
        this.gameEnv.gameObjects.forEach(obj => {
            if (typeof obj.destroy === "function") obj.destroy();
        });
        this.gameEnv.gameObjects.length = 0;
    }
    if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
    }
}
}

export default GameLevelTown;