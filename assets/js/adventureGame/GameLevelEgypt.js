// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';
import Cat from './Cat.js';

class GameLevelEgypt {
  constructor(gameEnv) {
    // Values dependent on this.gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_egypt = path + "/images/gamify/ancient_egypt_bg.png"; // be sure to include the path
    const image_data_egypt = {
        name: 'Ancient Egypt',
        greeting: "Oh no! Somehow, we travelled back to Ancient Egypt! Find your way out and travel back to your original timeline!",
        src: image_src_egypt,
        pixels: {height: 225, width: 400}
    };


    // Player data for Tourist
    const sprite_src_tourist = path + "/images/gamify/tourist.png"; // be sure to include the path
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

    
    // Rat Guide data
    const sprite_src_guide = path + "/images/gamify/ratguide.png"; // be sure to include the path
    const sprite_greet_guide_intro = "Hi, you don't look like you're from around here. I'm the Rat Guide, and I'll help you navigate Ancient Egypt. Press OK to learn more about this era!";
    const sprite_greet_guide_info = "Ancient Egypt was one of the most advanced and influential civilizations in history..."; // Truncated for brevity
    const sprite_data_guide = {
      id: 'Rat Guide',
      greeting_intro: sprite_greet_guide_intro,
      greeting_info: sprite_greet_guide_info,
      src: sprite_src_guide,
      SCALE_FACTOR: 11,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: { width: 150, height: 194 },
      INIT_POSITION: { x: width * (3 / 4), y: height - (height / TOURIST_SCALE_FACTOR) }, // Adjusted position
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      reaction: function () {
        alert("u got rabies lolz u dieded XD");
      },
      //moveHorizontally: function () {
        //let direction = -1; // 1 for right, -1 for left
        //const step = 17; // Distance to move per interval
        //const maxDistance = 200; // Maximum distance to move left or right
        //let initialX = this.INIT_POSITION.x;
    
        //setInterval(() => {
          //this.INIT_POSITION.x += direction * step;
    
          // Reverse direction if the guard reaches the max distance
          //if (this.INIT_POSITION.x > initialX + maxDistance || this.INIT_POSITION.x < initialX - maxDistance) {
            //direction *= -1;
    
            // Flip the sprite horizontally based on direction
            //const spriteElement = document.getElementById(this.id); // Ensure the sprite has an ID matching its `id` property
            //if (spriteElement) {
              //spriteElement.style.transform = direction === -1 ? 'scaleX(1)' : 'scaleX(-1)';
            //}
          //}
        //}, this.ANIMATION_RATE);
      //},
    };

    // Custom alert function to handle sequential notifications
    function customAlert(message, callback) {
      alert(message);
      if (callback) callback();
    }

    // Display the initial notification automatically
    setTimeout(() => {
      customAlert(image_data_egypt.greeting);
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
    console.log("Rat Guide Data:", sprite_data_guide);
    console.log("Rat Guide Position:", sprite_data_guide.INIT_POSITION.x, sprite_data_guide.INIT_POSITION.y);

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
  };

      const sprite_src_tombguard = path + "/images/gamify/tomb_guard.png";
      const sprite_greet_tombguard = [
        "Ah, yes I've heard of you. I am the guardian of this tomb. I don't usually do this, but I'll let you pass just this once. Don't expect it again. Beware of the cat....",
        "You again? I thought I told you to beware of the cat!",
        "Welcome back, traveler. Remember, the cat is always watching.",
        "I see you've returned. The cat is still out there, lurking."
      ];
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
        reaction: () => {
            const randomGreeting = sprite_data_tombguard.greetings[Math.floor(Math.random() * sprite_data_tombguard.greetings.length)];
            alert(randomGreeting);
        },
        moveHorizontally: function () {
          let direction = -1; // 1 for right, -1 for left
          const step = 4; // Distance to move per interval
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
    };
    
    // Start the horizontal movement for both guards
    sprite_data_pyramidguard.moveHorizontally();
    sprite_data_tombguard.moveHorizontally();
    //sprite_data_guide.moveHorizontally();
  
    
        // List of objects defnitions for this level
        this.classes = [
          { class: Background, data: image_data_egypt },
          { class: Player, data: sprite_data_tourist },
          { class: Npc, data: sprite_data_pyramidguard },
          { class: Npc, data: sprite_data_tombguard },
          { class: Cat, data: sprite_data_guide },
        ];
    
        
      }
    
    }
    
    export default GameLevelEgypt;
