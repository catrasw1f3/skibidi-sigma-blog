// GameLevel.js
import GameEnv from "./GameEnv.js";

class GameLevel {
    constructor(gameControl) {
        this.gameEnv = new GameEnv();
        this.gameEnv.path = gameControl.path;
        this.gameEnv.gameControl = gameControl;
    }

    create(GameLevelClass) {
        this.continue = true;
this.gameEnv.create();
        this.gameLevel = new GameLevelClass(this.gameEnv);
        this.gameObjectClasses = this.gameLevel.classes;
for (let gameObjectClass of this.gameObjectClasses) {
            if (!gameObjectClass.data) gameObjectClass.data = {};
            let gameObject = new gameObjectClass.class(gameObjectClass.data, this.gameEnv);
            this.gameEnv.gameObjects.push(gameObject);
        }
        // Add event listener for window resize
        window.addEventListener('resize', this.resize.bind(this));
    }

    destroy() {
  if (this.gameLevel && typeof this.gameLevel.destroy === "function") {
    this.gameLevel.destroy();
  }
  // Remove all game objects
  if (this.gameEnv && Array.isArray(this.gameEnv.gameObjects)) {
    this.gameEnv.gameObjects.length = 0;
  }
}

    update() {
        this.gameEnv.clear();
        for (let gameObject of this.gameEnv.gameObjects) {
            gameObject.update();
        }
    }

    resize() {
        this.gameEnv.resize();
        for (let gameObject of this.gameEnv.gameObjects) {
            gameObject.resize();
        }
    }

}

export default GameLevel;