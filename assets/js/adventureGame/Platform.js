class Platform {
    constructor(data, gameEnv) {
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.gameEnv = gameEnv;
        this.imageLoaded = false;
        if (data.src) {
            this.image = new window.Image();
            this.image.onload = () => { this.imageLoaded = true; };
            this.image.src = data.src;
        }
    }
    update() {
        const ctx = this.gameEnv.ctx;
        if (this.image && this.imageLoaded) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = "#654321";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    resize() {}
    destroy() {}
}
export default Platform;