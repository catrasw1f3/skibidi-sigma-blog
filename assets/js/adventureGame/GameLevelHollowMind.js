import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Cat from './Cat.js';
import Enemy from './Enemy.js';
import DialogueSystem from './DialogueSystem.js';

class GameLevelHollowMind {
  constructor(gameEnv) {
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    this.dialogueSystem = new DialogueSystem();

    // Background data
    const image_src_bg = "/images/gamify/hollowmind.png"; // Default background 
    const image_data_bg = {
        id: 'Background',
        src: image_src_bg,
        pixels: { height: 570, width: 1025 }
    };

    // Show a dialogue box after 4 seconds of gameplay
    setTimeout(() => {
      console.log("Dialogue box should appear now.");
      this.dialogueSystem.showDialogue(`King: "Maybe this was a mistake. This place is really creepy.. I- WHAT IS THAT?!"`);
    }, 2000); // Initial 0.6 second delay

    // Player data for Tourist
    const sprite_src_player = path + "/images/gamify/creature.png"; // be sure to include the path
    const PLAYER_SCALE_FACTOR = 4;
    const sprite_data_player = {
        id: 'Player',
        greeting: "I'm you! And I'm definitely not in the right era...",
        src: sprite_src_player,
        SCALE_FACTOR: PLAYER_SCALE_FACTOR,
        STEP_FACTOR: 250,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/PLAYER_SCALE_FACTOR) }, 
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

    // Cat enemy data
    /** const sprite_src_cat = "/images/gamify/catenemy.png"; // be sure to include the path
    const sprite_data_cat = {
      id: 'Cat',
      src: sprite_src_cat,
      SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: { width: 120, height: 60 },
      INIT_POSITION: { x: width / 2, y: height / 2 }, // Adjusted position
      orientation: { rows: 3, columns: 2 },
      down: { row: 0, start: 0, columns: 2 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      reaction: function () {
        alert("MEOW >:DD CAT GOT U XD");
      },
    };
    */

    const sprite_src_cat = "/images/gamify/belos.png";
    const sprite_data_cat = {
        id: 'Cat',
        src: sprite_src_cat,
        SCALE_FACTOR: 2,
        ANIMATION_RATE: 50,
        pixels: {height: 2000, width: 1545},
        INIT_POSITION: { x: width / 2, y: height / 4 },
        orientation: {rows: 2, columns: 3},
        down: {row: 0, start: 0, columns: 1},
        hitbox: { widthPercentage: 0.4, heightPercentage: 0.4 },
        zIndex: 10,
        isKilling: false, // Flag to prevent multiple kills
        // The update method with all functionality inline
        update: function() {
            // Skip update if already in killing process
            if (this.isKilling) {
                return;
            }
            // Find all player objects
            const players = this.gameEnv.gameObjects.filter(obj =>
                obj.constructor.name === 'Player'
            );
            if (players.length === 0) return;
            // Find nearest player
            let nearest = players[0];
            let minDist = Infinity;
            for (const player of players) {
                const dx = player.position.x - this.position.x;
                const dy = player.position.y - this.position.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = player;
                }
            }
            // Move towards nearest player
            const speed = 1.5; // Adjust speed as needed
            const dx = nearest.position.x - this.position.x;
            const dy = nearest.position.y - this.position.y;
            const angle = Math.atan2(dy, dx);
            // Update position
            this.position.x += Math.cos(angle) * speed;
            this.position.y += Math.sin(angle) * speed;
            // Check for collision with any player
            for (const player of players) {
                // Calculate distance for hitbox collision
                const playerX = player.position.x + player.width / 2;
                const playerY = player.position.y + player.height / 2;
                const enemyX = this.position.x + this.width / 2;
                const enemyY = this.position.y + this.height / 2;
                const dx = playerX - enemyX;
                const dy = playerY - enemyY;
                const distance = Math.sqrt(dx*dx + dy*dy);
                // Hitbox collision - adjust values as needed
                const collisionThreshold = (player.width * player.hitbox.widthPercentage +
                                        this.width * this.hitbox.widthPercentage) / 2;
                if (distance < collisionThreshold) {
                    // Set killing flag to prevent repeated kills
                    this.isKilling = true;
                    // === PLAYER DEATH: ALL FUNCTIONALITY INLINE ===
                    // 1. Play death animation - particle effect
                    const playerX = player.position.x;
                    const playerY = player.position.y;
                    // Create explosion effect
                    for (let i = 0; i < 20; i++) {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.width = '5px';
                        particle.style.height = '5px';
                        particle.style.backgroundColor = 'red';
                        particle.style.left = `${playerX + player.width/2}px`;
                        particle.style.top = `${playerY + player.height/2}px`;
                        particle.style.zIndex = '9999';
                        document.body.appendChild(particle);
                        // Animate particles outward
                        const angle = Math.random() * Math.PI * 2;
                        const speed = Math.random() * 5 + 2;
                        const distance = Math.random() * 100 + 50;
                        const destX = Math.cos(angle) * distance;
                        const destY = Math.sin(angle) * distance;
                        particle.animate(
                            [
                                { transform: 'translate(0, 0)', opacity: 1 },
                                { transform: `translate(${destX}px, ${destY}px)`, opacity: 0 }
                            ],
                            {
                                duration: 1000,
                                easing: 'ease-out',
                                fill: 'forwards'
                            }
                        );
                        // Remove particle after animation
                        setTimeout(() => {
                            if (particle.parentNode) {
                                particle.parentNode.removeChild(particle);
                            }
                        }, 1000);
                    }
                    // 2. Show death message dialog
                    const deathMessage = document.createElement('div');
                    deathMessage.style.position = 'fixed';
                    deathMessage.style.top = '50%';
                    deathMessage.style.left = '50%';
                    deathMessage.style.transform = 'translate(-50%, -50%)';
                    deathMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    deathMessage.style.color = 'rgb(0, 0, 0,)';
                    deathMessage.style.padding = '30px';
                    deathMessage.style.borderRadius = '10px';
                    deathMessage.style.fontFamily = "'Press Start 2P', sans-serif";
                    deathMessage.style.fontSize = '24px';
                    deathMessage.style.textAlign = 'center';
                    deathMessage.style.zIndex = '10000';
                    deathMessage.style.border = '3px solidrgb(255, 213, 0)';
                    deathMessage.style.boxShadow = '0 0 20px rgba(120, 78, 0, 0.5)';
                    deathMessage.style.width = '400px';
                    deathMessage.innerHTML = `
                        <div style="margin-bottom: 20px;"> MEEOWW >:((( </div>
                        <div style="font-size: 16px; margin-bottom: 20px;">cat got ur tail?</div>
                        <div style="font-size: 14px;">don't worry, they have 9 lives anyway. respawning...</div>
                    `;
                    document.body.appendChild(deathMessage);
                    // Remove message after delay
                    setTimeout(() => {
                        if (deathMessage.parentNode) {
                            deathMessage.parentNode.removeChild(deathMessage);
                        }
                    }, 2000);
                    // 3. Reset the level after a short delay using page reload for reliability
                    setTimeout(() => {
                        // Clean up any lingering resources before reload
                        if (self && self.timerInterval) {
                            clearInterval(self.timerInterval);
                        }
                        // Force a complete page reload - most reliable way to reset
                        location.reload();
                    }, 2000); // 2 second delay before reset
                    break;
                }
            }
        }
    };


    // Rat Guide data
    const sprite_src_guide = path + "/images/gamify/king.png"; // be sure to include the path
    const sprite_greet_guide_intro = "Hi, you don't look like you're from around here. I'm the Rat Guide, and I'll help you navigate Ancient Egypt. Press OK to learn more about this era!";
    const sprite_greet_guide_info = "Ancient Egypt was one of the most advanced and influential civilizations in history..."; // Truncated for brevity
    const dialogueSystem = this.dialogueSystem;
    const sprite_data_guide = {
      id: 'Rat Guide',
      greeting_intro: sprite_greet_guide_intro,
      greeting_info: sprite_greet_guide_info,
      src: sprite_src_guide,
      SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: { width: 1200, height: 1580 },
      INIT_POSITION: { x: width * (7 / 8), y: height - (height / PLAYER_SCALE_FACTOR) }, // Adjusted position
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      dialogues: [
      "Welcome to the Boiling Isles! Although charming, we need to find a way back home. Why not explore the town?",
      ],
        reaction: function() {
            
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

    
    console.log("Cat data:", sprite_data_cat);
    console.log("Cat initial position:", sprite_data_cat.INIT_POSITION);
    

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image_data_bg },
      { class: Player, data: sprite_data_player },
      { class: Npc, data: sprite_data_guide },
      //{ class: Npc, data: sprite_data_timemachine },
      { class: Enemy, data: sprite_data_cat },
    ];
  }

  /**
   * Change the background of the level
   * @param {Object} backgroundData - The current background data object
   * @param {String} newSrc - The new background image source
   */
  changeBackground(backgroundData, newSrc) {
    console.log("Changing background...");
    backgroundData.src = newSrc; // Update the background source
    this.gameEnv.redraw(); // Trigger a redraw of the game environment
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

export default GameLevelHollowMind;