class Platform {
    constructor(data, gameEnv) {
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.gameEnv = gameEnv;
    }
    update() {
        const ctx = this.gameEnv.ctx;
        ctx.fillStyle = "#774bde";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    resize() {}
    destroy() {}
}
export default Platform;