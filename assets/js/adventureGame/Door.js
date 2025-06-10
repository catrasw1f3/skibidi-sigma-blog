

class Door {
    constructor(data, gameEnv) {
        this.x = data.x;
        this.y = data.y;
        this.width = data.width || 60;
        this.height = data.height || 90;
        this.src = data.src;
        this.gameEnv = gameEnv;
        this.imageLoaded = false;
        if (this.src) {
            this.image = new window.Image();
            this.image.onload = () => { this.imageLoaded = true; };
            this.image.src = this.src;
        }
        this.nextLevel = data.nextLevel; // function or string
    }
    update() {
        const ctx = this.gameEnv.ctx;
        if (this.image && this.imageLoaded) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = "#222";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        // Collision with player
        const player = this.gameEnv.gameObjects.find(obj => obj instanceof window.PlayerPlatformer);
        if (player &&
            player.x + player.width > this.x &&
            player.x < this.x + this.width &&
            player.y + player.height > this.y &&
            player.y < this.y + this.height
        ) {
            if (typeof this.nextLevel === "function") {
                this.nextLevel();
            } else if (typeof this.nextLevel === "string" && this.gameEnv.gameControl) {
                this.gameEnv.gameControl.loadLevel(this.nextLevel);
            }
        }
    }
    resize() {}
    destroy() {}
}
window.Door = Door;
export default Door;