// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';

class GameLevelEgypt {
  constructor(gameEnv) {
    // Values dependent on this.gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_egypt = path + "/images/gamify/ancient_egypt_bg.jpg"; // be sure to include the path
    const image_data_egypt = {
        name: 'Ancient Egypt',
        greeting: "Oh no! Somehow, we travelled back to Ancient Egypt! Find your way out and travel back to your original timeline!",
        src: image_src_egypt,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Tourist
    const sprite_src_tourist = path + "/images/gamify/tourist.png"; // be sure to include the path
    const TOURIST_SCALE_FACTOR = 5;
    const sprite_data_tourist = {
        id: 'Tourist',
        greeting: "I'm you! And I'm definitely not in the right era...",
        src: sprite_src_tourist,
        SCALE_FACTOR: TOURIST_SCALE_FACTOR,
        STEP_FACTOR: 1000,
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


    // NPC data for Pyramid Guard 
    const sprite_src_pyramidguard = path + "/images/gamify/pyramid_guard.png"; // be sure to include the path
    const sprite_greet_pyramidguard = "I am the guardian of the pyramid. Wait--you don't look like you're from around here. I'll have to quiz you!";
    const sprite_data_pyramidguard = {
        id: 'Pyramid Guard',
        greeting: sprite_greet_pyramidguard,
        src: sprite_src_pyramidguard,
        SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 120, width: 63},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Ancient egypt quiz
        quiz: { 
          title: "Ancient Egypt Quiz",
          questions: [
            "Who was the first pharaoh of Egypt?\n1. Narmer\n2. Ramses II\n3. Tutankhamun\n4. Cleopatra",
            "What is the name of the ancient Egyptian writing system?\n1. Hieroglyphics\n2. Cuneiform\n3. Latin\n4. Greek",
            "Which river was crucial to the development of ancient Egyptian civilization?\n1. Nile\n2. Amazon\n3. Tigris\n4. Euphrates",
            "What structure is the Great Pyramid of Giza?\n1. Tomb\n2. Temple\n3. Palace\n4. Fortress",
            "Who was the Egyptian god of the afterlife?\n1. Osiris\n2. Ra\n3. Anubis\n4. Horus",
            "What was the primary material used in ancient Egyptian construction?\n1. Stone\n2. Wood\n3. Brick\n4. Metal",
            "Which queen was known for her beauty and political acumen?\n1. Cleopatra\n2. Nefertiti\n3. Hatshepsut\n4. Isis",
            "What was the purpose of the Sphinx?\n1. Guardian of the Giza Plateau\n2. Temple\n3. Palace\n4. Fortress",
            "Which pharaoh's tomb was discovered intact in 1922?\n1. Tutankhamun\n2. Ramses II\n3. Akhenaten\n4. Hatshepsut",
            "What was the primary purpose of the pyramids?\n1. Tombs for pharaohs\n2. Temples\n3. Palaces\n4. Fortresses" 
          ] 
        },
        reaction: function() {
          alert(sprite_greet_pyramidguard);
        },
        interact: function() {
          let quiz = new Quiz(); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_pyramidguard.quiz);
          }
    
      };



      // NPC data for Octocat
      const sprite_src_octocat = path + "/images/gamify/octocat.png"; // be sure to include the path
      const sprite_greet_octocat = "Hi I am Octocat! I am the GitHub code code code collaboration mascot";
      const sprite_data_octocat = {
        id: 'Octocat',
        greeting: sprite_greet_octocat,
        src: sprite_src_octocat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 301, width: 801},
        INIT_POSITION: { x: (width / 4), y: (height / 4)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        // GitHub command quiz 
        quiz: { 
          title: "GitHub Command Quiz",
          questions: [
            "Which command is used to clone a repository?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
            "Which command is used to add changes to the staging area?\n1. git add\n2. git stage\n3. git commit\n4. git push",
            "Which command is used to commit changes?\n1. git commit\n2. git add\n3. git save\n4. git push",
            "Which command is used to push changes to a remote repository?\n1. git push\n2. git upload\n3. git send\n4. git commit",
            "Which command is used to pull changes from a remote repository?\n1. git pull\n2. git fetch\n3. git receive\n4. git update",
            "Which command is used to check the status of the working directory and staging area?\n1. git status\n2. git check\n3. git info\n4. git log",
            "Which command is used to create a new branch?\n1. git branch\n2. git create-branch\n3. git new-branch\n4. git checkout",
            "Which command is used to switch to a different branch?\n1. git checkout\n2. git switch\n3. git change-branch\n4. git branch",
            "Which command is used to merge branches?\n1. git merge\n2. git combine\n3. git join\n4. git integrate",
            "Which command is used to view the commit history?\n1. git log\n2. git history\n3. git commits\n4. git show"
          ] 
        },
        reaction: function() {
          alert(sprite_greet_octocat);
        },
        interact: function() {
          let quiz = new Quiz(); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_octocat.quiz);
        }
    }
  

    const sprite_src_robot = path + "/images/gamify/robot.png"; // be sure to include the path
    const sprite_greet_robot = "Hi I am Robot, the Jupyter Notebook mascot.  I am very happy to spend some linux shell time with you!";
    const sprite_data_robot = {
      id: 'Robot',
      greeting: sprite_greet_robot,
      src: sprite_src_robot,
      SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {height: 316, width: 627},
      INIT_POSITION: { x: (width * 3 / 4), y: (height * 1 / 4)},
      orientation: {rows: 3, columns: 6 },
      down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      // Linux command quiz
      quiz: { 
        title: "Jupyter Notebook Command Quiz",
        questions: [
          "Which shortcut is used to run a cell in Jupyter Notebook?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
          "Which shortcut adds a new cell above the current cell?\n1. A\n2. B\n3. C\n4. D",
          "Which shortcut adds a new cell below the current cell?\n1. B\n2. A\n3. C\n4. D",
          "Which shortcut changes a cell to Markdown format?\n1. M\n2. Y\n3. R\n4. K",
          "Which shortcut changes a cell to Code format?\n1. Y\n2. M\n3. C\n4. D",
          "Which shortcut deletes the current cell?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
          "Which shortcut saves the current notebook?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
          "Which shortcut restarts the kernel?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
          "Which shortcut interrupts the kernel?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
          "Which shortcut toggles line numbers in a cell?\n1. L\n2. N\n3. T\n4. G"
        ] 
      },
      reaction: function() {
        alert(sprite_greet_robot);
      },
      interact: function() {
        let quiz = new Quiz(); // Create a new Quiz instance
        quiz.initialize();
        quiz.openPanel(sprite_data_robot.quiz);
      }
    }

    // NPC Data for Tomb Guard
    const sprite_src_tombguard = path + "/images/gamify/tomb_guard.png"; // be sure to include the path
    const sprite_greet_tombguard = "Ah, yes I've heard of you. I am the guardian of this tomb. I don't usually do this, but I'll let you pass just this once. Don't expect it again. Beware of the cat....";
    const sprite_data_tombguard = {
      id: 'Tomb Guard',
      greeting: sprite_greet_tombguard,
      src: sprite_src_tombguard,
      SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 63, height: 120},
      INIT_POSITION: { x: ((width * 1 / 4) + 100), y: ((height * 3 / 4) - 20)}, // Adjusted position
      orientation: {rows: 1, columns: 1 },
      down: {row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      /* Reaction function
      *  This function is called when the player interacts with the NPC
      *  It displays an alert with the greeting message
      */
      reaction: function() {
        alert(sprite_greet_tombguard);
      },
      /* Interact function
      *  This function is called when the player interacts with the NPC
      *  It pauses the main game, creates a new GameControl instance with the StarWars level,
      */
      interact: function() {
        // Set a primary game reference from the game environment
        let primaryGame = gameEnv.gameControl;
        // Define the game in game level
        let levelArray = [GameLevelStarWars];
        // Define a new GameControl instance with the StarWars level
        let gameInGame = new GameControl(path,levelArray);
        // Pause the primary game 
        primaryGame.pause();
        // Start the game in game
        gameInGame.start();
        // Setup "callback" function to allow transition from game in gaame to the underlying game
        gameInGame.gameOver = function() {
          // Call .resume on primary game
          primaryGame.resume();
        }
      }

    };

    // List of objects defnitions for this level
    this.classes = [
      { class: Background, data: image_data_egypt },
      { class: Player, data: sprite_data_tourist },
      { class: Npc, data: sprite_data_pyramidguard },
      { class: Npc, data: sprite_data_octocat },
      { class: Npc, data: sprite_data_robot },
      { class: Npc, data: sprite_data_tombguard },
    ];
    
  }

}

export default GameLevelEgypt;