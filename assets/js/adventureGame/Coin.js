class Coin {
    constructor(data, gameEnv) {
        this.x = data.x;
        this.y = data.y;
        this.radius = data.radius || 15;
        this.collected = false;
        this.gameEnv = gameEnv;
    }
    update() {
        if (this.collected) return;
        const ctx = this.gameEnv.ctx;
        ctx.save();
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

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