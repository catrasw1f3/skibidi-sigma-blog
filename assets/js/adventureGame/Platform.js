class Platform {
    constructor(data, gameEnv) {
        this.gameEnv = gameEnv;
        // Use percentages if provided, else fallback to absolute values
        this.x = data.xPerc !== undefined ? data.xPerc * gameEnv.width : data.x;
        this.y = data.yPerc !== undefined ? data.yPerc * gameEnv.height : data.y;
        this.width = data.widthPerc !== undefined ? data.widthPerc * gameEnv.width : data.width;
        this.height = data.height || 20;
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