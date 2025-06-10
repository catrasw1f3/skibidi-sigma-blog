class Background {
    constructor(data, gameEnv) {
        this.src = data.src;
        this.gameEnv = gameEnv;
        this.image = new window.Image();
        this.image.src = this.src;
    }
    update() {
        const ctx = this.gameEnv.ctx;
        ctx.drawImage(this.image, 0, 0, this.gameEnv.width, this.gameEnv.height);
    }
    resize() {}
    destroy() {}
}
export default Background;