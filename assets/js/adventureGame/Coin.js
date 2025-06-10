class Coin {
    constructor(data, gameEnv) {
        this.x = data.x;
        this.y = data.y;
        this.radius = data.radius || 15;
        this.collected = false;
        this.gameEnv = gameEnv;
        this.imageLoaded = false;
        if (data.src) {
            this.image = new window.Image();
            this.image.onload = () => { this.imageLoaded = true; };
            this.image.src = data.src;
        }
    }
    update() {
        if (this.collected) return;
        const ctx = this.gameEnv.ctx;
        if (this.image && this.imageLoaded) {
            ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        } else {
            ctx.fillStyle = "gold";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        }
        // Collision with player
        const player = this.gameEnv.gameObjects.find(obj => obj instanceof window.PlayerPlatformer);
        if (player) {
            const dx = player.x + player.width / 2 - this.x;
            const dy = player.y + player.height / 2 - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < this.radius + Math.max(player.width, player.height) / 2) {
                this.collected = true;
                if (this.gameEnv.dialogueSystem) {
                    this.gameEnv.dialogueSystem.showDialogue("You collected a coin!");
                }
            }
        }
    }
    resize() {}
    destroy() {}
}
export default Coin;