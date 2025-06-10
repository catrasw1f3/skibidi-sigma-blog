class Background {
    constructor(data, gameEnv) {
        this.image = new window.Image();
        this.image.src = data.src;
        this.gameEnv = gameEnv;
    }
    update() {
        const ctx = this.gameEnv.ctx;
        ctx.drawImage(this.image, 0, 0, this.gameEnv.width, this.gameEnv.height);
    }
    resize() {}
    destroy() {}
}
export default Background;