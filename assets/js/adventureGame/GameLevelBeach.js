// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';
import DialogueSystem from './DialogueSystem.js';
import GameLevelTown from './GameLevelTown.js';
import GameLevelTree from './GameLevelTree.js';

class GameLevelBeach {
  constructor(gameEnv) {
    this.gameEnv = gameEnv; // <-- Add this line at the top of your constructor

    // Values dependent on this.gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    this.dialogueSystem = new DialogueSystem();

    // Background data
    const image_src_bg = path + "/images/gamify/tohbeach.jpeg"; // be sure to include the path
    const image_src_bg2 = path + "/images/gamify/town.jpeg"; // be sure to include the path
    const image_data_bg = {
        name: 'Background',
        greeting: "Oh no! Somehow, we travelled back to Ancient Egypt! Find your way out and travel back to your original timeline!",
        src: image_src_bg,
        pixels: {height: 225, width: 400}
    };
    const image_data_bg2 = {
        name: 'Background2',
        greeting: "",
        src: image_src_bg2,
        pixels: {height: 225, width: 400}
    };

        // ...existing code in GameLevelEgypt constructor...
    
    // Show a dialogue box after 10 seconds of gameplay
    /** setTimeout(() => {
      console.log("Dialogue box should appear now.");
      this.dialogueSystem.showDialogue("Welcome to the Boiling Isles! Although charming, we need to find a way back home. Why not explore the town?");
    }, 10000); // 10000 ms = 10 seconds
    */
    // ...rest of your constructor code...

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
      reaction: function () {
       dialogueSystem.showDialogue(`King: "Welcome to the Boiling Isles! Although charming, we need to find a way back home. Why not explore the town?" (Press 'E' to continue)`); // Using Dialogue system instead of alert
        console.log("reacted with tomb guard ishfjhersfiqwe")
        /** setTimeout(() => {
          // Set a primary game reference from the game environment
          let primaryGame = gameEnv.gameControl;
          // Define the game in game level
          let levelArray = [GameLevelTown];
          // Define a new GameControl instance with the StarWars level
          let gameInGame = new GameControl(gameEnv.game,levelArray);
          // Pause the primary game 
          primaryGame.pause();
          // Start the game in game
          gameInGame.start();
          // Setup "callback" function to allow transition from game in gaame to the underlying game
          gameInGame.gameOver = function() {
            // Call .resume on primary game
            primaryGame.resume();
          } 
        }, 5000); */
        
      },
      interact: () => {
        // Change the background when interacting with the rat
        //this.changeBackground(image_data_bg, image_src_bg2);
        //console.log("interacted with Rat Guide and changed background");
        // Set a primary game reference from the game environment
          let primaryGame = gameEnv.gameControl;
          // Define the game in game level
          let levelArray = [GameLevelTown];
          // Define a new GameControl instance with the StarWars level
          let gameInGame = new GameControl(gameEnv.game,levelArray);
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

    // Custom alert function to handle sequential notifications
    function customAlert(message, callback) {
      alert(message);
      if (callback) callback();
    }

    // Display the initial notification automatically
    setTimeout(() => {
      customAlert(image_data_bg.greeting);
    }, 1000); // Display the first notification 1 second after the game starts

    // Function to handle player interaction and display Rat Guide notifications
    //function handlePlayerInteraction(event) {
      //const keys = [87, 65, 83, 68]; // W, A, S, D key codes
      //if (keys.includes(event.keyCode)) {
        //setTimeout(() => {
          //customAlert(sprite_data_guide.greeting_intro, () => {
            //customAlert(sprite_data_guide.greeting_info);
          //});
        //}, 500); // Display the Rat Guide notifications 0.5 seconds after interaction
        //window.removeEventListener('keydown', handlePlayerInteraction); // Remove the event listener after the first interaction
      //}
    //}

    // Add event listener for player interaction
    //window.addEventListener('keydown', handlePlayerInteraction);

    // Log the guide's data and position
    //console.log("Rat Guide Data:", sprite_data_guide);
    //console.log("Rat Guide Position:", sprite_data_guide.INIT_POSITION.x, sprite_data_guide.INIT_POSITION.y);

    // Quiz data
    const quizData = {
      title: "Ancient Egypt Quiz",
      questions: [
        {
          question: "Who was the first pharaoh of Egypt?",
          options: ["Narmer", "Ramses II", "Tutankhamun", "Cleopatra"],
          correctAnswer: 0
        },
        {
          question: "What is the name of the ancient Egyptian writing system?",
          options: ["Hieroglyphics", "Cuneiform", "Latin", "Greek"],
          correctAnswer: 0
        },
        {
          question: "Which river was crucial to the development of ancient Egyptian civilization?",
          options: ["Nile", "Amazon", "Tigris", "Euphrates"],
          correctAnswer: 0
        },
        {
          question: "What structure is the Great Pyramid of Giza?",
          options: ["Tomb", "Temple", "Palace", "Fortress"],
          correctAnswer: 0
        },
        {
          question: "Who was the Egyptian god of the afterlife?",
          options: ["Osiris", "Ra", "Anubis", "Horus"],
          correctAnswer: 0
        },
        {
          question: "What was the primary material used in ancient Egyptian construction?",
          options: ["Stone", "Wood", "Brick", "Metal"],
          correctAnswer: 0
        },
        {
          question: "Which queen was known for her beauty and political acumen?",
          options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"],
          correctAnswer: 0
        },
        {
          question: "What was the purpose of the Sphinx?",
          options: ["Guardian of the Giza Plateau", "Temple", "Palace", "Fortress"],
          correctAnswer: 0
        },
        {
          question: "Which pharaoh's tomb was discovered intact in 1922?",
          options: ["Tutankhamun", "Ramses II", "Akhenaten", "Hatshepsut"],
          correctAnswer: 0
        },
        {
          question: "What was the primary purpose of the pyramids?",
          options: ["Tombs for pharaohs", "Temples", "Palaces", "Fortresses"],
          correctAnswer: 0
        }
      ]
    };

    
    // Shuffle the answers and update the correct answers
    function shuffleAnswers(quizData) {
      quizData.questions.forEach(question => {
        const correctAnswer = question.options[question.correctAnswer];
        const shuffledOptions = question.options
          .map(option => ({ option, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ option }) => option);
        question.correctAnswer = shuffledOptions.indexOf(correctAnswer);
        question.options = shuffledOptions;
      });
    }

    // Shuffle the questions and answers
    function shuffleQuestionsAndAnswers(quizData) {
      quizData.questions = quizData.questions
        .map(question => ({ question, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ question }) => question);
      shuffleAnswers(quizData);
    }

    // NPC data for Pyramid Guard 
    /** 
    const sprite_src_pyramidguard = path + "/images/gamify/pyramid_guard.png"; // be sure to include the path
    const sprite_greet_pyramidguard = "I am the guardian of the pyramid. Wait--you don't look like you're from around here. I'll have to quiz you! Press 'E' to start the quiz.";
    const sprite_data_pyramidguard = {
      id: 'Pyramid Guard',
      greeting: sprite_greet_pyramidguard,
      src: sprite_src_pyramidguard,
      STEP_FACTOR: 1000,
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 100,
      pixels: { height: 120, width: 63 },
      INIT_POSITION: { x: ((width / 2) + 100), y: ((height / 2) - 100) },
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      quiz: quizData,
      reaction: function () {
          alert(sprite_greet_pyramidguard);
      },
      interact: function () {
          shuffleQuestionsAndAnswers(sprite_data_pyramidguard.quiz);
          let quiz = new Quiz(); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_pyramidguard.quiz);
      },
      moveHorizontally: function () {
        let direction = -1; // 1 for right, -1 for left
        const step = 3; // Distance to move per interval
        const maxDistance = 80; // Maximum distance to move left or right
        let initialX = this.INIT_POSITION.x;
    
        setInterval(() => {
            this.INIT_POSITION.x += direction * step;
    
            // Reverse direction if the guard reaches the max distance
            if (this.INIT_POSITION.x > initialX + maxDistance || this.INIT_POSITION.x < initialX - maxDistance) {
                direction *= -1;
    
                // Flip the sprite horizontally based on direction
                const spriteElement = document.getElementById(this.id); // Ensure the sprite has an ID matching its `id` property
                if (spriteElement) {
                    spriteElement.style.transform = direction === -1 ? 'scaleX(1)' : 'scaleX(-1)';
                }
            }
        }, this.ANIMATION_RATE);
    }
  }; */
/** 
      const sprite_src_tombguard = path + "/images/gamify/tomb_guard.png";
      const sprite_greet_tombguard = "Ah, yes I've heard of you. I am the guardian of this tomb. I don't usually do this, but I'll let you pass just this once. Don't expect it again. Beware of the cat....";
      //const dialogueSystem = this.dialogueSystem
      const sprite_data_tombguard = {
        id: 'Tomb Guard',
        greetings: sprite_greet_tombguard,
        src: sprite_src_tombguard,
        SCALE_FACTOR: 5,
        ANIMATION_RATE: 100,
        pixels: { width: 63, height: 120 },
        INIT_POSITION: { x: ((width * 1 / 4) + 130), y: ((height * 3 / 4) - 100) },
        orientation: { rows: 1, columns: 1 },
        down: { row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        dialogues: [
        "You again? I thought I told you to beware of the cat!",
        "Welcome back, traveler. Remember, the cat is always watching.",
        "I see you've returned. The cat is still out there, lurking."
      ], 
        reaction: function() {
            //none for rn 
        },
        moveHorizontally: function() {
          let direction = -1; // 1 for right, -1 for left
          const step = 5; // Distance to move per interval
          const maxDistance = 100; // Maximum distance to move left or right
          let initialX = this.INIT_POSITION.x;
      
          setInterval(() => {
              this.INIT_POSITION.x += direction * step;
      
              // Reverse direction if the guard reaches the max distance
              if (this.INIT_POSITION.x > initialX + maxDistance || this.INIT_POSITION.x < initialX - maxDistance) {
                  direction *= -1;
      
                  // Flip the sprite horizontally based on direction
                  const spriteElement = document.getElementById(this.id); // Ensure the sprite has an ID matching its `id` property
                  if (spriteElement) {
                      spriteElement.style.transform = direction === -1 ? 'scaleX(1)' : 'scaleX(-1)';
                  }
              }
          }, this.ANIMATION_RATE);
      },
      interact: function() {
       // dialogueSystem.showRandomDialogue(); // Using Dialogue system instead of alert
        console.log("interacted with tomb guard ishfjhersfiqwe")
        // Set a primary game reference from the game environment
        let primaryGame = gameEnv.gameControl;
        // Define the game in game level
        let levelArray = [GameLevelStarWars];
        // Define a new GameControl instance with the StarWars level
        let gameInGame = new GameControl(gameEnv.game,levelArray);
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
    }; */
    
    // Start the horizontal movement for both guards
    //sprite_data_pyramidguard.moveHorizontally();
    //sprite_data_tombguard.moveHorizontally();
    //sprite_data_guide.moveHorizontally();
  
    
        // List of objects defnitions for this level
        this.classes = [
          { class: Background, data: image_data_bg },
          { class: Player, data: sprite_data_player },
          //{ class: Npc, data: sprite_data_pyramidguard },
          //{ class: Npc, data: sprite_data_tombguard },
          { class: Npc, data: sprite_data_guide },
        ];
    
        
      } /** 
  changeBackground(backgroundData, newSrc) {
    console.log("Changing background...");
    backgroundData.src = newSrc; // Update the background source
   // Trigger a redraw of the game environment
  } */
    } 
    
    export default GameLevelBeach;
